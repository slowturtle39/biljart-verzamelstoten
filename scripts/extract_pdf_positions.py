from __future__ import annotations

import io
import json
import re
from pathlib import Path

import fitz
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PDF_NAME = "Over 160 collecting shots - Meer dan 160 verzamelstoten.pdf"
PDF_PATH = ROOT / PDF_NAME
OUT_DIR = ROOT / "assets" / "positions"
OUT_JS = ROOT / "pdf-positions.js"
YOUTUBE_URL = "https://www.youtube.com/watch?v=mbbb-L38PUU"

IMAGE_SCALE = 1.25
OCR_SCALE = 3

POSITION_CLIPS = {
    "top": fitz.Rect(20, 0, 585, 410),
    "bottom": fitz.Rect(20, 420, 585, 842),
}

NUMBER_CLIPS = {
    "top": fitz.Rect(20, 0, 180, 80),
    "bottom": fitz.Rect(20, 420, 180, 500),
}

TRAINING_NUMBERS = [
    (2, "top", "1"),
    (2, "bottom", "2"),
    (3, "top", "3"),
    (3, "bottom", "4"),
    (4, "top", "5"),
    (4, "bottom", "6"),
    (5, "top", "7"),
    (5, "bottom", "8"),
    (6, "top", "9"),
    (6, "bottom", "10"),
]


def render_clip(doc: fitz.Document, page_no: int, clip: fitz.Rect, scale: float) -> Image.Image:
    page = doc[page_no - 1]
    pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=clip, alpha=False)
    return Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")


def black_components(img: Image.Image, threshold: int = 80) -> list[tuple[int, int, int, int]]:
    gray = img.convert("L")
    width, height = gray.size
    pixels = gray.load()
    mask: set[tuple[int, int]] = set()

    for y in range(height):
        for x in range(width):
            if pixels[x, y] < threshold:
                mask.add((x, y))

    seen: set[tuple[int, int]] = set()
    components: list[tuple[int, int, int, int]] = []

    for start in list(mask):
        if start in seen:
            continue

        stack = [start]
        seen.add(start)
        xs: list[int] = []
        ys: list[int] = []

        while stack:
            x, y = stack.pop()
            xs.append(x)
            ys.append(y)

            for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                if (nx, ny) in mask and (nx, ny) not in seen:
                    seen.add((nx, ny))
                    stack.append((nx, ny))

        bbox = (min(xs), min(ys), max(xs) + 1, max(ys) + 1)
        x0, y0, x1, y1 = bbox
        box_width = x1 - x0
        box_height = y1 - y0

        if box_height >= 10 and box_width >= 3 and y0 < 170:
            components.append(bbox)

    return sorted(components, key=lambda bbox: bbox[0])


def normalize_digit(img: Image.Image, bbox: tuple[int, int, int, int]) -> list[int]:
    crop = img.convert("L").crop(bbox).resize((32, 48))
    return [1 if value < 128 else 0 for value in crop.getdata()]


def hamming(a: list[int], b: list[int]) -> float:
    return sum(left != right for left, right in zip(a, b)) / len(a)


def build_templates(doc: fitz.Document) -> dict[str, list[list[int]]]:
    templates: dict[str, list[list[int]]] = {}

    for page_no, slot, label in TRAINING_NUMBERS:
        img = render_clip(doc, page_no, NUMBER_CLIPS[slot], OCR_SCALE)
        digit_boxes = [
            bbox for bbox in black_components(img) if (bbox[3] - bbox[1]) >= 70
        ]

        if len(digit_boxes) != len(label):
            raise RuntimeError(f"Could not train OCR from page {page_no} {slot}: {label}")

        for char, bbox in zip(label, digit_boxes):
            templates.setdefault(char, []).append(normalize_digit(img, bbox))

    return templates


def read_position_label(
    doc: fitz.Document,
    page_no: int,
    slot: str,
    templates: dict[str, list[list[int]]],
) -> str | None:
    img = render_clip(doc, page_no, NUMBER_CLIPS[slot], OCR_SCALE)
    components = black_components(img)
    digit_boxes = [bbox for bbox in components if (bbox[3] - bbox[1]) >= 70]
    small_after_digit = [bbox for bbox in components if 30 <= (bbox[3] - bbox[1]) < 70]

    if not digit_boxes:
        return None

    label = ""
    for bbox in digit_boxes:
        normalized = normalize_digit(img, bbox)
        best_score = 1.0
        best_digit = "?"

        for digit, digit_templates in templates.items():
            score = min(hamming(normalized, template) for template in digit_templates)
            if score < best_score:
                best_score = score
                best_digit = digit

        if best_digit == "?" or best_score > 0.18:
            raise RuntimeError(f"Unclear OCR on page {page_no} {slot}: score {best_score}")

        label += best_digit

    last_digit_right = max(bbox[2] for bbox in digit_boxes)
    has_bis = any(bbox[0] > last_digit_right and bbox[3] - bbox[1] >= 30 for bbox in small_after_digit)

    return f"{label}bis" if has_bis else label


def safe_label(label: str) -> str:
    match = re.fullmatch(r"(\d+)(bis)?", label)
    if not match:
        return re.sub(r"[^a-zA-Z0-9-]+", "-", label).strip("-").lower()

    number = int(match.group(1))
    suffix = "-bis" if match.group(2) else ""
    return f"{number:03}{suffix}"


def make_position(label: str, page_no: int, slot: str, image_path: Path) -> dict:
    title = f"PDF-positie {label}"
    figure = f"positie {label}"

    return {
        "id": f"dirk-acx-{safe_label(label)}",
        "title": title,
        "category": "verzamelen",
        "difficulty": 3,
        "status": "pdf import",
        "tags": ["libre", "pdf", "Dirk Acx", "Billiardsphoto"],
        "goal": "Speel de carambole en probeer de ballen volgens het diagram te verzamelen.",
        "hint": "Gebruik eerst het grote blauwe diagram voor de beginpositie. De groene simulatie toont de looplijnen en de stootinstellingen.",
        "solution": {
            "hitPoint": "Zie cuebalmarkering in het diagram.",
            "thickness": "Zie looplijn en contactrichting in het diagram.",
            "speed": "Zie force/power-indicator in het diagram.",
            "explanation": "De PDF bevat geen geschreven uitleg per stoot. Gebruik de afbeelding: beginpositie, looplijnen, effect, raakpunt, kracht en hoek staan in het diagram. Voeg later een eigen notitie en YouTube-tijdcode toe.",
        },
        "diagramImage": image_path.as_posix(),
        "source": {
            "type": "pdf",
            "title": "Dirk Acx / Billiardsphoto - Meer dan 160 verzamelstoten",
            "url": YOUTUBE_URL,
            "note": "Geimporteerd uit de PDF in de projectmap. Controleer de stootinhoud met de video en eigen tafelomstandigheden.",
        },
        "media": {
            "videoUrl": YOUTUBE_URL,
            "videoStart": "",
            "pdfFile": PDF_NAME,
            "pdfPage": str(page_no),
            "figure": figure,
            "slot": slot,
        },
    }


def position_clip(page_no: int, slot: str, has_bottom_position: bool) -> fitz.Rect:
    if slot == "top" and not has_bottom_position:
        return fitz.Rect(20, 0, 585, 440)

    return POSITION_CLIPS[slot]


def main() -> None:
    if not PDF_PATH.exists():
        raise FileNotFoundError(PDF_PATH)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(PDF_PATH)
    templates = build_templates(doc)
    positions: list[dict] = []

    for page_no in range(2, 86):
        labels_for_page = {
            slot: read_position_label(doc, page_no, slot, templates)
            for slot in ("top", "bottom")
        }

        for slot in ("top", "bottom"):
            label = labels_for_page[slot]
            if not label:
                continue

            filename = f"shot-{safe_label(label)}.jpg"
            output = OUT_DIR / filename
            image = render_clip(
                doc,
                page_no,
                position_clip(page_no, slot, bool(labels_for_page["bottom"])),
                IMAGE_SCALE,
            )
            image.save(output, quality=84, optimize=True)
            positions.append(make_position(label, page_no, slot, Path("assets") / "positions" / filename))

    labels = [position["media"]["figure"].replace("positie ", "") for position in positions]
    if len(labels) != len(set(labels)):
        raise RuntimeError("Duplicate position labels detected")

    payload = "const pdfPositions = "
    payload += json.dumps(positions, indent=2, ensure_ascii=False)
    payload += ";\n"
    OUT_JS.write_text(payload, encoding="utf-8")

    print(f"Extracted {len(positions)} positions")
    print(f"First: {labels[:5]}")
    print(f"Last: {labels[-5:]}")


if __name__ == "__main__":
    main()
