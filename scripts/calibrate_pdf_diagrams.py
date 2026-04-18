from __future__ import annotations

import argparse
import io
import json
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
PDF_NAME = "Over 160 collecting shots - Meer dan 160 verzamelstoten.pdf"
PDF_PATH = ROOT / PDF_NAME
PDF_POSITIONS_JS = ROOT / "pdf-positions.js"
ASSET_DIR = ROOT / "assets" / "positions"
SCRATCH_DIR = ROOT / "scratch" / "calibration"
POSITION_CLIPS = {
    "top": (20, 0, 585, 410),
    "bottom": (20, 420, 585, 842),
}


@dataclass(frozen=True)
class Box:
    left: int
    top: int
    right: int
    bottom: int
    area: int

    @property
    def width(self) -> int:
        return self.right - self.left

    @property
    def height(self) -> int:
        return self.bottom - self.top

    @property
    def center(self) -> tuple[float, float]:
        return ((self.left + self.right) / 2, (self.top + self.bottom) / 2)


def component_boxes(mask: np.ndarray, min_area: int = 1) -> list[Box]:
    height, width = mask.shape
    visited = np.zeros(mask.shape, dtype=bool)
    boxes: list[Box] = []

    starts = np.argwhere(mask)
    for y_start, x_start in starts:
        if visited[y_start, x_start]:
            continue

        stack = [(int(x_start), int(y_start))]
        visited[y_start, x_start] = True
        area = 0
        left = right = int(x_start)
        top = bottom = int(y_start)

        while stack:
            x, y = stack.pop()
            area += 1
            left = min(left, x)
            right = max(right, x)
            top = min(top, y)
            bottom = max(bottom, y)

            for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                if 0 <= nx < width and 0 <= ny < height and mask[ny, nx] and not visited[ny, nx]:
                    visited[ny, nx] = True
                    stack.append((nx, ny))

        if area >= min_area:
            boxes.append(Box(left, top, right + 1, bottom + 1, area))

    return boxes


def find_green_bed(array: np.ndarray) -> Box:
    red = array[:, :, 0].astype(np.int16)
    green = array[:, :, 1].astype(np.int16)
    blue = array[:, :, 2].astype(np.int16)

    mask = (
        (green > 50)
        & (red < 105)
        & (blue < 105)
        & (green > red + 18)
        & (green > blue + 18)
    )

    components = [
        box
        for box in component_boxes(mask, min_area=400)
        if box.width > 90 and box.height > 35 and box.width / box.height > 1.45
    ]

    if not components:
        raise RuntimeError("No green simulation bed found")

    return max(components, key=lambda box: box.area)


def detect_white_dots(array: np.ndarray, bed: Box) -> dict[str, list[tuple[float, float]]]:
    red = array[:, :, 0].astype(np.int16)
    green = array[:, :, 1].astype(np.int16)
    blue = array[:, :, 2].astype(np.int16)

    white = (red > 185) & (green > 185) & (blue > 175)
    margin = 30
    region = np.zeros(white.shape, dtype=bool)
    region[
        max(0, bed.top - margin) : min(white.shape[0], bed.bottom + margin),
        max(0, bed.left - margin) : min(white.shape[1], bed.right + margin),
    ] = True
    boxes = [
        box
        for box in component_boxes(white & region, min_area=3)
        if box.area <= 80 and box.width <= 14 and box.height <= 14
    ]

    candidates = [box.center for box in boxes]

    def near(value: float, target: float, before: float, after: float) -> bool:
        return target - before <= value <= target + after

    groups = {"top": [], "bottom": [], "left": [], "right": []}
    for x, y in candidates:
        if bed.left - 8 <= x <= bed.right + 8 and near(y, bed.top, 24, 6):
            groups["top"].append((x, y))
        if bed.left - 8 <= x <= bed.right + 8 and near(y, bed.bottom, 6, 24):
            groups["bottom"].append((x, y))
        if bed.top + 30 <= y <= bed.bottom - 30 and near(x, bed.left, 24, 6):
            groups["left"].append((x, y))
        if bed.top + 30 <= y <= bed.bottom - 30 and near(x, bed.right, 6, 24):
            groups["right"].append((x, y))

    groups["top"] = sorted(groups["top"], key=lambda point: point[0])[:7]
    groups["bottom"] = sorted(groups["bottom"], key=lambda point: point[0])[:7]
    groups["left"] = sorted(groups["left"], key=lambda point: point[1])[:3]
    groups["right"] = sorted(groups["right"], key=lambda point: point[1])[:3]
    return groups


def solve_homography(
    pixel_points: list[tuple[float, float]],
    table_points: list[tuple[float, float]],
) -> np.ndarray:
    rows = []
    values = []

    for (px, py), (tx, ty) in zip(pixel_points, table_points):
        rows.append([px, py, 1, 0, 0, 0, -tx * px, -tx * py])
        values.append(tx)
        rows.append([0, 0, 0, px, py, 1, -ty * px, -ty * py])
        values.append(ty)

    solution, *_ = np.linalg.lstsq(np.array(rows, dtype=float), np.array(values, dtype=float), rcond=None)
    return np.array(
        [
            [solution[0], solution[1], solution[2]],
            [solution[3], solution[4], solution[5]],
            [solution[6], solution[7], 1.0],
        ]
    )


def apply_homography(matrix: np.ndarray, point: tuple[float, float]) -> tuple[float, float]:
    px, py = point
    tx, ty, tw = matrix @ np.array([px, py, 1.0])
    return (float(tx / tw), float(ty / tw))


def calibration_from_dots(dots: dict[str, list[tuple[float, float]]]) -> np.ndarray:
    pixel_points: list[tuple[float, float]] = []
    table_points: list[tuple[float, float]] = []

    for index, point in enumerate(dots["top"]):
        pixel_points.append(point)
        table_points.append(((index + 1) * 12.5, 1.5))

    for index, point in enumerate(dots["bottom"]):
        pixel_points.append(point)
        table_points.append(((index + 1) * 12.5, 48.5))

    for index, point in enumerate(dots["left"]):
        pixel_points.append(point)
        table_points.append((1.5, (index + 1) * 12.5))

    for index, point in enumerate(dots["right"]):
        pixel_points.append(point)
        table_points.append((98.5, (index + 1) * 12.5))

    if len(pixel_points) < 8:
        raise RuntimeError(f"Not enough rail dots for calibration: {len(pixel_points)}")

    return solve_homography(pixel_points, table_points)


def detect_ball_candidates(array: np.ndarray, bed: Box, matrix: np.ndarray) -> list[dict[str, object]]:
    red = array[:, :, 0].astype(np.int16)
    green = array[:, :, 1].astype(np.int16)
    blue = array[:, :, 2].astype(np.int16)
    inside = np.zeros(red.shape, dtype=bool)
    inside[bed.top : bed.bottom, bed.left : bed.right] = True

    masks = {
        "red": inside & (red > 120) & (green < 95) & (blue < 95) & (red > green + 35),
        "yellow": inside & (red > 130) & (green > 90) & (blue < 95) & (red > blue + 50),
        "white": inside & (red > 170) & (green > 170) & (blue > 150),
    }

    candidates: list[dict[str, object]] = []
    for color, mask in masks.items():
        for box in component_boxes(mask, min_area=8):
            if box.area > 500 or box.width > 28 or box.height > 28:
                continue

            cx, cy = box.center
            tx, ty = apply_homography(matrix, (cx, cy))
            if 0 <= tx <= 100 and 0 <= ty <= 50:
                candidates.append(
                    {
                        "color": color,
                        "pixel": [round(cx, 1), round(cy, 1)],
                        "table": [round(tx, 1), round(ty, 1)],
                        "area": box.area,
                        "size": [box.width, box.height],
                    }
                )

    return candidates


def make_debug_image(
    image: Image.Image,
    bed: Box,
    dots: dict[str, list[tuple[float, float]]],
    matrix: np.ndarray,
    output: Path,
) -> None:
    draw = ImageDraw.Draw(image)
    draw.rectangle((bed.left, bed.top, bed.right, bed.bottom), outline=(255, 255, 0), width=2)

    colors = {
        "top": (255, 255, 255),
        "bottom": (255, 255, 255),
        "left": (255, 255, 255),
        "right": (255, 255, 255),
    }
    for side, points in dots.items():
        for index, (x, y) in enumerate(points, start=1):
            draw.ellipse((x - 4, y - 4, x + 4, y + 4), outline=colors[side], width=2)
            draw.text((x + 5, y - 6), f"{side[0]}{index}", fill=(255, 255, 0))

    inverse = np.linalg.inv(matrix)
    grid_color = (255, 230, 0)
    for x in [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100]:
        points = [apply_homography(inverse, (x, y)) for y in range(0, 51, 5)]
        draw.line(points, fill=grid_color, width=1)

    for y in [0, 12.5, 25, 37.5, 50]:
        points = [apply_homography(inverse, (x, y)) for x in range(0, 101, 5)]
        draw.line(points, fill=grid_color, width=1)

    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output)


def calibrate_position(image_path: Path, debug: bool = False) -> dict[str, object]:
    image = Image.open(image_path).convert("RGB")
    array = np.array(image)
    bed = find_green_bed(array)
    dots = detect_white_dots(array, bed)
    matrix = calibration_from_dots(dots)
    ball_candidates = detect_ball_candidates(array, bed, matrix)

    if debug:
        make_debug_image(
            image.copy(),
            bed,
            dots,
            matrix,
            SCRATCH_DIR / f"{image_path.stem}-calibration.png",
        )

    return {
        "image": str(image_path.relative_to(ROOT)).replace("\\", "/"),
        "bed": [bed.left, bed.top, bed.right, bed.bottom],
        "dots": {side: [[round(x, 1), round(y, 1)] for x, y in points] for side, points in dots.items()},
        "homographyPixelToTable": [[round(float(value), 8) for value in row] for row in matrix],
        "ballCandidates": ball_candidates,
    }


def load_pdf_positions() -> list[dict[str, object]]:
    text = PDF_POSITIONS_JS.read_text(encoding="utf-8").strip()
    prefix = "const pdfPositions = "
    if not text.startswith(prefix) or not text.endswith(";"):
        raise RuntimeError("Unexpected pdf-positions.js format")

    return json.loads(text.removeprefix(prefix).removesuffix(";"))


def render_pdf_position(position_key: str, scale: float) -> Path:
    try:
        import fitz
    except ImportError as exc:
        raise RuntimeError("PyMuPDF is needed for --pdf-position") from exc

    if not PDF_PATH.exists():
        raise FileNotFoundError(PDF_PATH)

    positions = load_pdf_positions()
    selected = next(
        (
            position
            for position in positions
            if position["id"] == position_key
            or str(position["media"]["figure"]).removeprefix("positie ") == position_key
        ),
        None,
    )
    if selected is None:
        raise RuntimeError(f"Unknown PDF position: {position_key}")

    page_no = int(selected["media"]["pdfPage"])
    slot = selected["media"]["slot"]
    has_bottom = any(
        int(position["media"]["pdfPage"]) == page_no and position["media"]["slot"] == "bottom"
        for position in positions
    )
    if slot == "top" and not has_bottom:
        clip_tuple = (20, 0, 585, 440)
    else:
        clip_tuple = POSITION_CLIPS[slot]

    doc = fitz.open(PDF_PATH)
    page = doc[page_no - 1]
    clip = fitz.Rect(*clip_tuple)
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=clip, alpha=False)
    image = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")

    output = SCRATCH_DIR / f"{selected['id']}-render.png"
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output)
    return output


def main() -> None:
    parser = argparse.ArgumentParser(description="Calibrate PDF diagrams using rail diamonds.")
    parser.add_argument("image", nargs="?", default="shot-001.jpg")
    parser.add_argument("--pdf-position", help="Render a PDF position first, e.g. 1 or dirk-acx-001")
    parser.add_argument("--scale", type=float, default=3.0)
    parser.add_argument("--debug", action="store_true")
    args = parser.parse_args()

    if args.pdf_position:
        image_path = render_pdf_position(args.pdf_position, args.scale)
    else:
        image_path = Path(args.image)
        if not image_path.is_absolute():
            workspace_path = ROOT / image_path
            image_path = workspace_path if workspace_path.exists() else ASSET_DIR / image_path

    result = calibrate_position(image_path, debug=args.debug)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
