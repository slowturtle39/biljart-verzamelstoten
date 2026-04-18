from __future__ import annotations

import argparse
import json
import math
from pathlib import Path

import numpy as np
from PIL import Image

from calibrate_pdf_diagrams import (
    ROOT,
    Box,
    apply_homography,
    calibration_from_dots,
    component_boxes,
    detect_white_dots,
    find_bed,
    load_pdf_positions,
    render_pdf_position,
)


OUT_JS = ROOT / "pdf-converted-overrides.js"
OVERLAY_DIR = ROOT / "assets" / "line-overlays"


def round_point(point: tuple[float, float]) -> dict[str, float]:
    return {"x": round(point[0], 1), "y": round(point[1], 1)}


def inside_box_mask(shape: tuple[int, int], box: Box, margin: int = 0) -> np.ndarray:
    height, width = shape
    mask = np.zeros(shape, dtype=bool)
    mask[
        max(0, box.top - margin) : min(height, box.bottom + margin),
        max(0, box.left - margin) : min(width, box.right + margin),
    ] = True
    return mask


def circular_candidates(
    mask: np.ndarray,
    matrix: np.ndarray,
    color: str,
    min_area: int = 40,
    max_area: int = 1800,
) -> list[dict[str, object]]:
    candidates: list[dict[str, object]] = []
    for box in component_boxes(mask, min_area=min_area):
        if box.area > max_area or box.width < 6 or box.height < 6:
            continue

        aspect = max(box.width / box.height, box.height / box.width)
        fill = box.area / max(1, box.width * box.height)
        if aspect > 1.8 or fill < 0.22:
            continue

        pixel = box.center
        table = apply_homography(matrix, pixel)
        if not (0 <= table[0] <= 100 and 0 <= table[1] <= 50):
            continue

        candidates.append(
            {
                "color": color,
                "pixel": pixel,
                "table": table,
                "area": box.area,
                "score": box.area * fill / aspect,
            }
        )

    return sorted(candidates, key=lambda candidate: candidate["score"], reverse=True)


def detect_balls(array: np.ndarray, blue_bed: Box, blue_matrix: np.ndarray) -> dict[str, dict[str, object]]:
    red = array[:, :, 0].astype(np.int16)
    green = array[:, :, 1].astype(np.int16)
    blue = array[:, :, 2].astype(np.int16)
    inside = inside_box_mask(red.shape, blue_bed)

    masks = {
        "red": inside & (red > 120) & (green < 120) & (blue < 130) & (red > green + 45) & (red > blue + 35),
        "yellow": inside & (red > 150) & (green > 110) & (blue < 135) & (red > blue + 50) & (green > blue + 45),
        "white": inside & (red > 170) & (green > 155) & (blue > 110) & (np.abs(red - green) < 80),
    }

    result: dict[str, dict[str, object]] = {}
    for color, mask in masks.items():
        candidates = circular_candidates(mask, blue_matrix, color)
        if candidates:
            result[color] = candidates[0]

    return result


def hough_segments(
    mask: np.ndarray,
    matrix: np.ndarray,
    max_segments: int,
    min_votes: int,
    min_length_px: float,
    min_length_table: float,
    distance: float = 1.7,
) -> list[dict[str, object]]:
    remaining = mask.copy()
    segments: list[dict[str, object]] = []
    angles = np.deg2rad(np.arange(0, 180, 2))
    cosines = np.cos(angles)
    sines = np.sin(angles)
    rho_offset = int(math.ceil(math.hypot(mask.shape[0], mask.shape[1])))

    for _ in range(max_segments):
        ys, xs = np.nonzero(remaining)
        if len(xs) < min_votes:
            break

        best_votes = 0
        best_theta_index = 0
        best_rho_bin = 0

        for theta_index, (cosine, sine) in enumerate(zip(cosines, sines)):
            rho_bins = np.rint(xs * cosine + ys * sine).astype(np.int32) + rho_offset
            histogram = np.bincount(rho_bins, minlength=rho_offset * 2 + 1)
            rho_bin = int(np.argmax(histogram))
            votes = int(histogram[rho_bin])
            if votes > best_votes:
                best_votes = votes
                best_theta_index = theta_index
                best_rho_bin = rho_bin

        if best_votes < min_votes:
            break

        cosine = cosines[best_theta_index]
        sine = sines[best_theta_index]
        rho = best_rho_bin - rho_offset
        distances = np.abs(xs * cosine + ys * sine - rho)
        near = distances <= distance
        if int(near.sum()) < min_votes:
            break

        line_xs = xs[near]
        line_ys = ys[near]
        direction_x = -sine
        direction_y = cosine
        projections = line_xs * direction_x + line_ys * direction_y
        order = np.argsort(projections)
        line_xs = line_xs[order]
        line_ys = line_ys[order]
        projections = projections[order]

        split_indices = np.where(np.diff(projections) > 9)[0] + 1
        clusters = np.split(np.arange(len(projections)), split_indices)
        accepted = False

        for cluster in sorted(clusters, key=len, reverse=True):
            if len(cluster) < min_votes:
                continue

            start_index = int(cluster[0])
            end_index = int(cluster[-1])
            pixel_start = (float(line_xs[start_index]), float(line_ys[start_index]))
            pixel_end = (float(line_xs[end_index]), float(line_ys[end_index]))
            pixel_length = math.dist(pixel_start, pixel_end)
            if pixel_length < min_length_px:
                continue

            table_start = apply_homography(matrix, pixel_start)
            table_end = apply_homography(matrix, pixel_end)
            if not all(-3 <= value <= 103 for value in (table_start[0], table_end[0])):
                continue
            if not all(-3 <= value <= 53 for value in (table_start[1], table_end[1])):
                continue

            table_length = math.dist(table_start, table_end)
            if table_length < min_length_table:
                continue

            segments.append(
                {
                    "pixel": [pixel_start, pixel_end],
                    "table": [
                        (min(100, max(0, table_start[0])), min(50, max(0, table_start[1]))),
                        (min(100, max(0, table_end[0])), min(50, max(0, table_end[1]))),
                    ],
                    "votes": int(len(cluster)),
                    "pixelLength": round(pixel_length, 1),
                    "tableLength": round(table_length, 1),
                }
            )

            projection_min = projections[start_index] - 5
            projection_max = projections[end_index] + 5
            all_ys, all_xs = np.nonzero(remaining)
            all_distances = np.abs(all_xs * cosine + all_ys * sine - rho)
            all_projections = all_xs * direction_x + all_ys * direction_y
            remove = (
                (all_distances <= distance + 1.1)
                & (all_projections >= projection_min)
                & (all_projections <= projection_max)
            )
            remaining[all_ys[remove], all_xs[remove]] = False
            accepted = True
            break

        if not accepted:
            remaining[line_ys, line_xs] = False

    return segments


def detect_stick(array: np.ndarray, green_bed: Box, green_matrix: np.ndarray) -> dict[str, object] | None:
    red = array[:, :, 0].astype(np.int16)
    green = array[:, :, 1].astype(np.int16)
    blue = array[:, :, 2].astype(np.int16)
    inside = inside_box_mask(red.shape, green_bed)
    brown = (
        inside
        & (red > 85)
        & (green > 45)
        & (green < 190)
        & (blue < 135)
        & (red > blue + 25)
        & (red > green - 35)
    )

    segments = hough_segments(
        brown,
        green_matrix,
        max_segments=2,
        min_votes=28,
        min_length_px=max(35, green_bed.width * 0.12),
        min_length_table=8,
        distance=2.2,
    )
    if not segments:
        return None

    return max(segments, key=lambda segment: segment["tableLength"])


def detect_guide_segments(array: np.ndarray, green_bed: Box, green_matrix: np.ndarray) -> list[dict[str, object]]:
    red = array[:, :, 0].astype(np.int16)
    green = array[:, :, 1].astype(np.int16)
    blue = array[:, :, 2].astype(np.int16)
    inside = inside_box_mask(red.shape, green_bed)

    neutral_light = (
        inside
        & (red > 65)
        & (green > 75)
        & (blue > 55)
        & (np.abs(red - green) < 85)
        & (np.abs(green - blue) < 95)
    )
    not_colored_balls = ~(
        ((red > 120) & (green < 115) & (blue < 130) & (red > green + 40))
        | ((red > 145) & (green > 100) & (blue < 120) & (red > blue + 45) & (green > blue + 35))
    )

    return hough_segments(
        neutral_light & not_colored_balls,
        green_matrix,
        max_segments=12,
        min_votes=30,
        min_length_px=max(45, green_bed.width * 0.09),
        min_length_table=7,
        distance=1.8,
    )


def estimate_power(array: np.ndarray, green_bed: Box) -> float | None:
    crop_left = max(0, int(green_bed.right - green_bed.width * 0.47))
    crop_right = min(array.shape[1], int(green_bed.right - green_bed.width * 0.05))
    crop_top = min(array.shape[0], int(green_bed.bottom + green_bed.height * 0.05))
    crop_bottom = min(array.shape[0], int(green_bed.bottom + green_bed.height * 0.31))
    crop = array[crop_top:crop_bottom, crop_left:crop_right]
    if crop.size == 0:
        return None

    red = crop[:, :, 0].astype(np.int16)
    green = crop[:, :, 1].astype(np.int16)
    blue = crop[:, :, 2].astype(np.int16)
    red_bar = (red > 110) & (green < 135) & (blue < 115) & (red > green + 35)
    red_bar[: int(crop.shape[0] * 0.58), :] = False
    boxes = [
        box
        for box in component_boxes(red_bar, min_area=50)
        if box.width > crop.shape[1] * 0.35 and box.height >= 5 and box.center[1] > crop.shape[0] * 0.45
    ]
    if not boxes:
        return None

    bar = max(boxes, key=lambda box: box.width * box.height)
    scale_left = bar.left
    scale_right = bar.right - 1
    y_min = bar.top
    y_max = bar.bottom - 1
    if scale_right <= scale_left:
        return None

    bar_rows = slice(max(0, y_min - 1), min(red.shape[0], y_max + 2))
    bar_cols = slice(scale_left, scale_right + 1)
    signal = (green[bar_rows, bar_cols] + blue[bar_rows, bar_cols]).mean(axis=0)
    if len(signal) < 20:
        return None

    low = float(np.median(signal[: max(3, len(signal) // 5)]))
    high = float(np.median(signal[-max(3, len(signal) // 7) :]))
    if high - low < 10:
        return 10.0

    threshold = low + (high - low) * 0.72
    start = max(2, len(signal) // 5)
    window = min(11, max(5, len(signal) // 18))
    smoothed = np.convolve(signal, np.ones(window) / window, mode="same")
    candidates = np.where(smoothed[start:] > threshold)[0]
    if len(candidates):
        marker_x = int(candidates[0]) + start + scale_left
    else:
        gradient = np.diff(smoothed)
        marker_x = int(np.argmax(gradient[start:]) + start + scale_left)

    value = (marker_x - scale_left) / (scale_right - scale_left) * 10
    return round(max(0, min(10, value)), 1)


def estimate_spin(array: np.ndarray, green_bed: Box) -> str | None:
    crop_left = max(0, int(green_bed.left + green_bed.width * 0.22))
    crop_right = min(array.shape[1], int(green_bed.left + green_bed.width * 0.47))
    crop_top = min(array.shape[0], int(green_bed.bottom + green_bed.height * 0.05))
    crop_bottom = min(array.shape[0], int(green_bed.bottom + green_bed.height * 0.33))
    crop = array[crop_top:crop_bottom, crop_left:crop_right]
    if crop.size == 0:
        return None

    red = crop[:, :, 0].astype(np.int16)
    green = crop[:, :, 1].astype(np.int16)
    blue = crop[:, :, 2].astype(np.int16)
    grey = (red > 125) & (green > 125) & (blue > 125) & (np.abs(red - green) < 45) & (np.abs(green - blue) < 45)
    black = (red < 45) & (green < 45) & (blue < 45)

    grey_boxes = [box for box in component_boxes(grey, min_area=80) if box.width > 20 and box.height > 20]
    black_boxes = [box for box in component_boxes(black, min_area=12) if 3 <= box.width <= 24 and 3 <= box.height <= 24]
    if not grey_boxes or not black_boxes:
        return None

    circle = max(grey_boxes, key=lambda box: box.area)
    dot = max(black_boxes, key=lambda box: box.area)
    circle_x, circle_y = circle.center
    dot_x, dot_y = dot.center
    radius = max(circle.width, circle.height) / 2
    if radius <= 0:
        return None

    dx = (dot_x - circle_x) / radius
    dy = (dot_y - circle_y) / radius
    horizontal = "links" if dx < -0.25 else "rechts" if dx > 0.25 else ""
    vertical = "laag" if dy > 0.25 else "hoog" if dy < -0.25 else ""
    strength = round(min(3, max(0, math.hypot(dx, dy) * 2.2)), 1)

    if horizontal and vertical:
        direction = f"{vertical}-{horizontal}"
    else:
        direction = horizontal or vertical or "midden"

    return f"{direction}, ongeveer stand {strength}"


def role_balls(
    color_balls: dict[str, dict[str, object]],
    stick: dict[str, object] | None,
) -> tuple[dict[str, dict[str, float]], list[str]]:
    notes: list[str] = []
    if len(color_balls) < 3:
        notes.append(f"Baldetectie vond {len(color_balls)} van 3 kleuren.")

    cue_color = None
    if stick:
        endpoints = stick["table"]
        distances: list[tuple[float, str]] = []
        for color in ("white", "yellow"):
            ball = color_balls.get(color)
            if not ball:
                continue
            table = ball["table"]
            distance = min(math.dist(table, endpoint) for endpoint in endpoints)
            distances.append((distance, color))
        if distances:
            distance, cue_color = min(distances)
            if distance > 12:
                notes.append("Speelbal op basis van de keulijn is onzeker.")

    if cue_color is None:
        cue_color = "white" if "white" in color_balls else "yellow" if "yellow" in color_balls else None
        notes.append("Speelbal is gekozen met fallback, niet zeker uit de keulijn.")

    roles: dict[str, dict[str, float]] = {}
    if cue_color and cue_color in color_balls:
        roles["cue"] = round_point(color_balls[cue_color]["table"])

    remaining = [color for color in ("white", "yellow") if color != cue_color and color in color_balls]
    if remaining:
        roles["second"] = round_point(color_balls[remaining[0]]["table"])
    elif "red" in color_balls and "cue" not in roles:
        roles["second"] = round_point(color_balls["red"]["table"])

    if "red" in color_balls:
        roles["third"] = round_point(color_balls["red"]["table"])

    return roles, notes


def make_paths(stick: dict[str, object] | None, guide_segments: list[dict[str, object]]) -> list[dict[str, object]]:
    paths: list[dict[str, object]] = []
    if stick:
        paths.append(
            {
                "ball": "stick",
                "marker": False,
                "points": [round_point(stick["table"][0]), round_point(stick["table"][1])],
            }
        )

    for segment in guide_segments:
        paths.append(
            {
                "ball": "guide",
                "marker": False,
                "points": [round_point(segment["table"][0]), round_point(segment["table"][1])],
            }
        )

    return paths


def dilate(mask: np.ndarray, iterations: int = 1) -> np.ndarray:
    output = mask.copy()
    for _ in range(iterations):
        expanded = output.copy()
        expanded[1:, :] |= output[:-1, :]
        expanded[:-1, :] |= output[1:, :]
        expanded[:, 1:] |= output[:, :-1]
        expanded[:, :-1] |= output[:, 1:]
        expanded[1:, 1:] |= output[:-1, :-1]
        expanded[:-1, :-1] |= output[1:, 1:]
        expanded[1:, :-1] |= output[:-1, 1:]
        expanded[:-1, 1:] |= output[1:, :-1]
        output = expanded
    return output


def write_line_overlay(
    array: np.ndarray,
    green_matrix: np.ndarray,
    green_bed: Box,
    output_path: Path,
    width: int = 1000,
    height: int = 500,
) -> None:
    inverse = np.linalg.inv(green_matrix)
    table_x = np.linspace(0, 100, width)
    table_y = np.linspace(0, 50, height)
    grid_x, grid_y = np.meshgrid(table_x, table_y)

    denominator = inverse[2, 0] * grid_x + inverse[2, 1] * grid_y + inverse[2, 2]
    source_x = (inverse[0, 0] * grid_x + inverse[0, 1] * grid_y + inverse[0, 2]) / denominator
    source_y = (inverse[1, 0] * grid_x + inverse[1, 1] * grid_y + inverse[1, 2]) / denominator

    source_xi = np.rint(source_x).astype(np.int32)
    source_yi = np.rint(source_y).astype(np.int32)
    valid = (
        (source_xi >= 0)
        & (source_xi < array.shape[1])
        & (source_yi >= 0)
        & (source_yi < array.shape[0])
    )
    source_on_bed = (
        valid
        & (source_xi >= green_bed.left)
        & (source_xi < green_bed.right)
        & (source_yi >= green_bed.top)
        & (source_yi < green_bed.bottom)
    )
    inner_table = source_on_bed & (grid_x > 1.2) & (grid_x < 98.8) & (grid_y > 1.8) & (grid_y < 48.2)

    sampled = np.zeros((height, width, 3), dtype=np.uint8)
    sampled[valid] = array[source_yi[valid], source_xi[valid]]
    red = sampled[:, :, 0].astype(np.int16)
    green = sampled[:, :, 1].astype(np.int16)
    blue = sampled[:, :, 2].astype(np.int16)

    line = (
        inner_table
        & (red > 58)
        & (green > 62)
        & (blue > 48)
        & ((red + green + blue) > 205)
        & (np.abs(red - green) < 100)
        & (np.abs(green - blue) < 115)
    )
    stick = (
        inner_table
        & (red > 78)
        & (green > 40)
        & (green < 190)
        & (blue < 145)
        & (red > blue + 22)
        & (red > green - 40)
    )

    # Keep the source looplijnen, but do not copy the full colored balls into the overlay.
    red_ball = (red > 125) & (green < 115) & (blue < 130) & (red > green + 40)
    yellow_ball = (red > 145) & (green > 95) & (blue < 125) & (red > blue + 45) & (green > blue + 35)
    line &= ~(red_ball | yellow_ball)

    cleaned_stick = np.zeros_like(stick)
    for box in component_boxes(stick, min_area=20):
        touches_horizontal_rail = box.width > width * 0.28 and (box.top < height * 0.12 or box.bottom > height * 0.88)
        touches_vertical_rail = box.height > height * 0.28 and (box.left < width * 0.08 or box.right > width * 0.92)
        too_large = box.area > width * height * 0.012
        aspect = max(box.width / max(1, box.height), box.height / max(1, box.width))
        if touches_horizontal_rail or touches_vertical_rail or too_large or aspect < 2.0:
            continue
        cleaned_stick[box.top : box.bottom, box.left : box.right] |= stick[box.top : box.bottom, box.left : box.right]

    cleaned_line = np.zeros_like(line)
    for box in component_boxes(line, min_area=8):
        top_rail_noise = box.width > width * 0.24 and box.top < height * 0.1
        bottom_rail_noise = box.width > width * 0.24 and box.bottom > height * 0.9
        left_rail_noise = box.height > height * 0.2 and box.left < width * 0.07
        right_rail_noise = box.height > height * 0.2 and box.right > width * 0.93
        if top_rail_noise or bottom_rail_noise or left_rail_noise or right_rail_noise:
            continue
        cleaned_line[box.top : box.bottom, box.left : box.right] |= line[box.top : box.bottom, box.left : box.right]

    line = dilate(cleaned_line, 1)
    stick = dilate(cleaned_stick, 1)

    rgba = np.zeros((height, width, 4), dtype=np.uint8)
    rgba[line] = (255, 255, 255, 175)
    # Do not copy brown cue/rail pixels into generated positions; they caused
    # misleading artefacts. The manually corrected example can still carry a
    # drawn cue line through its vector paths.

    output_path.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(rgba, "RGBA").save(output_path, optimize=True)


def make_text(power: float | None, spin: str | None, notes: list[str]) -> tuple[str, dict[str, object]]:
    power_text = f"ongeveer {power} / 10" if power is not None else "zie de powerbalk in het bronbeeld"
    spin_text = spin if spin else "zie de effectbal in het bronbeeld"
    hint = (
        "Gebruik het app-diagram als startbeeld en controleer het originele PDF-diagram bij twijfel. "
        f"Tempo volgens beeldherkenning: {power_text}. Effect: {spin_text}."
    )

    technical_details = [
        "Ballen: automatisch gelezen uit het grote blauwe PDF-diagram.",
        "Lijnen: als transparante bron-overlay uit de groene simulatie overgenomen en per diagram gecalibreerd op de witte railpunten.",
        f"Power: {power_text}.",
        f"Effect: {spin_text}.",
        "Controleer het bronbeeld voor exacte aanspeeldikte, raakpunt en eventuele nuance in de looplijn.",
    ]
    technical_details.extend(notes)

    solution = {
        "hitPoint": "Controleer het raakpunt in het originele PDF-diagram; dit veld is nog niet volledig betrouwbaar automatisch uitgelezen.",
        "thickness": "Volg de eerste looplijn richting bal 2; exacte dikte aan tafel controleren.",
        "speed": power_text,
        "explanation": (
            "Deze tekst is automatisch gegenereerd uit de duidelijkere PDF-render. "
            "De beginpositie komt uit het blauwe diagram; de looplijnen, power en effect komen uit de groene simulatie. "
            "Gebruik de vergrote bronafbeelding als controle wanneer een lijn of techniekveld twijfelachtig is."
        ),
        "technicalDetails": technical_details,
    }
    return hint, solution


def convert_position(position: dict[str, object], scale: float, debug: bool = False) -> tuple[dict[str, object], dict[str, object]]:
    image_path = render_pdf_position(position["id"], scale)
    image = Image.open(image_path).convert("RGB")
    array = np.array(image)

    blue_bed = find_bed(array, "blue")
    green_bed = find_bed(array, "green")
    blue_dots = detect_white_dots(array, blue_bed)
    green_dots = detect_white_dots(array, green_bed)
    blue_matrix = calibration_from_dots(blue_dots)
    green_matrix = calibration_from_dots(green_dots)

    color_balls = detect_balls(array, blue_bed, blue_matrix)
    stick = detect_stick(array, green_bed, green_matrix)
    guide_segments = detect_guide_segments(array, green_bed, green_matrix)
    balls, notes = role_balls(color_balls, stick)
    overlay_filename = f"{position['id']}-lines.png"
    overlay_path = OVERLAY_DIR / overlay_filename
    write_line_overlay(array, green_matrix, green_bed, overlay_path)
    power = estimate_power(array, green_bed)
    spin = estimate_spin(array, green_bed)
    hint, solution = make_text(power, spin, notes)

    override = {
        "status": "auto omgezet - controle nodig",
        "renderMode": "table" if len(balls) >= 3 else "pdf",
        "generatedFromImage": True,
        "lineStatus": "source-overlay",
        "originalDiagramImage": position.get("diagramImage"),
        "lineOverlayImage": str(Path("assets") / "line-overlays" / overlay_filename).replace("\\", "/"),
        "hint": hint,
        "balls": balls,
        "paths": [],
        "solution": solution,
    }

    if len(balls) < 3:
        override.pop("balls", None)
        override.pop("paths", None)

    report = {
        "id": position["id"],
        "balls": sorted(color_balls.keys()),
        "roleCount": len(balls),
        "guideSegments": len(guide_segments),
        "hasStick": bool(stick),
        "power": power,
        "spin": spin,
        "blueDots": {side: len(points) for side, points in blue_dots.items()},
        "greenDots": {side: len(points) for side, points in green_dots.items()},
        "notes": notes,
    }

    return override, report


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate app-table overrides from PDF diagrams.")
    parser.add_argument("--limit", type=int)
    parser.add_argument("--only")
    parser.add_argument("--scale", type=float, default=2.0)
    args = parser.parse_args()

    positions = load_pdf_positions()
    if args.only:
        positions = [
            position
            for position in positions
            if position["id"] == args.only
            or str(position["media"]["figure"]).removeprefix("positie ") == args.only
        ]
    if args.limit:
        positions = positions[: args.limit]

    overrides: dict[str, object] = {}
    reports: list[dict[str, object]] = []
    failures: list[dict[str, str]] = []

    for index, position in enumerate(positions, start=1):
        position_id = position["id"]
        print(f"[{index}/{len(positions)}] {position_id}")
        try:
            override, report = convert_position(position, args.scale)
            overrides[position_id] = override
            reports.append(report)
        except Exception as exc:  # noqa: BLE001 - conversion should continue and report misses.
            failures.append({"id": position_id, "error": str(exc)})
            print(f"  failed: {exc}")

    payload = "const generatedPositionOverrides = "
    payload += json.dumps(overrides, indent=2, ensure_ascii=False)
    payload += ";\n"
    OUT_JS.write_text(payload, encoding="utf-8")

    report_path = ROOT / "scratch" / "calibration" / "conversion-report.json"
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(
        json.dumps({"reports": reports, "failures": failures}, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )

    print(f"Converted: {len(overrides)}")
    print(f"Failures: {len(failures)}")
    print(f"Report: {report_path}")


if __name__ == "__main__":
    main()
