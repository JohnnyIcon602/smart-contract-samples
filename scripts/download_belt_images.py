#!/usr/bin/env python3
"""Download stock images for belt SKUs with resumable logging."""

from __future__ import annotations

import argparse
import csv
import re
import sys
import time
from pathlib import Path
from typing import Iterable, List, Optional

import pandas as pd
import requests
from bs4 import BeautifulSoup
from urllib.parse import quote, urljoin

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/123.0.0.0 Safari/537.36"
)

PART_SPLIT_PATTERN = re.compile(r"[\s,;/]+")
SANITIZE_PATTERN = re.compile(r"[^A-Za-z0-9._-]")
CSV_FIELDS = [
    "sku",
    "matched_part_number",
    "source",
    "image_url",
    "local_path",
    "status",
    "notes",
]


def split_part_numbers(raw: str | float | int) -> List[str]:
    if pd.isna(raw):
        return []
    text = str(raw).strip()
    if not text:
        return []
    tokens = [tok.strip() for tok in PART_SPLIT_PATTERN.split(text) if tok.strip()]
    cleaned = [tok.strip('-') for tok in tokens if tok.strip('-')]
    seen = set()
    ordered = []
    for tok in cleaned:
        key = tok.upper()
        if key not in seen:
            seen.add(key)
            ordered.append(key)
    return ordered


def sanitize_part(part: str) -> str:
    return SANITIZE_PATTERN.sub('_', part)


class ImageSource:
    name = "base"

    def __init__(self, session: requests.Session, throttle: float = 0.0):
        self.session = session
        self.throttle = throttle

    def fetch(self, part_number: str) -> Optional[str]:
        raise NotImplementedError

    def _sleep(self):
        if self.throttle:
            time.sleep(self.throttle)


class ContinentalSearch(ImageSource):
    name = "continental"

    def fetch(self, part_number: str) -> Optional[str]:
        url = (
            "https://www.continental-engineparts.com/na/en-us/automotive/search?searchtext="
            + quote(part_number)
        )
        try:
            resp = self.session.get(url, timeout=30)
            self._sleep()
        except requests.RequestException:
            return None
        if resp.status_code != 200 or "No results were found" in resp.text:
            return None
        soup = BeautifulSoup(resp.text, "html.parser")
        main = soup.find("main")
        if not main:
            return None
        for img in main.find_all("img"):
            src = img.get("src") or ""
            if "/getmedia/" in src:
                if src.startswith("//"):
                    return "https:" + src
                if src.startswith("/"):
                    return urljoin(url, src)
                return src
        return None


class RockAutoSearch(ImageSource):
    name = "rockauto"

    def fetch(self, part_number: str) -> Optional[str]:
        url = (
            "https://www.rockauto.com/en/partsearch/?mfr=CONTINENTAL&partnum="
            + quote(part_number)
        )
        try:
            resp = self.session.get(url, timeout=30)
            self._sleep()
        except requests.RequestException:
            return None
        if resp.status_code != 200:
            return None
        soup = BeautifulSoup(resp.text, "html.parser")
        img = soup.select_one("img.listing-inline-image")
        if not img:
            return None
        src = img.get("src") or img.get("data-src")
        if not src:
            return None
        if src.startswith("//"):
            return "https:" + src
        if src.startswith("/"):
            return urljoin(url, src)
        return src


class EbaySearch(ImageSource):
    name = "ebay"

    def fetch(self, part_number: str) -> Optional[str]:
        url = "https://www.ebay.com/sch/i.html?_nkw=" + quote(part_number + " belt")
        try:
            resp = self.session.get(url, timeout=30)
            self._sleep()
        except requests.RequestException:
            return None
        if resp.status_code != 200:
            return None
        soup = BeautifulSoup(resp.text, "html.parser")
        img = soup.select_one("img.s-item__image-img")
        if not img:
            return None
        src = img.get("src") or img.get("data-src")
        if not src or "ebaystatic" in src.lower():
            return None
        if src.startswith("//"):
            return "https:" + src
        if src.startswith("/"):
            return urljoin(url, src)
        return src


def download_image(session: requests.Session, url: str, dest: Path) -> bool:
    try:
        resp = session.get(url, timeout=60)
    except requests.RequestException:
        return False
    if resp.status_code != 200:
        return False
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(resp.content)
    return True


def main(argv: Optional[Iterable[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Download belt images from multiple sources")
    parser.add_argument("--excel", required=True, help="Inventory Excel path")
    parser.add_argument("--output", default="output/belt_images", help="Folder for images")
    parser.add_argument("--log", default="output/belt_images/results.csv", help="CSV log path")
    parser.add_argument(
        "--resume",
        action="store_true",
        help="Resume using existing log (skips SKUs already marked success)",
    )
    parser.add_argument("--limit", type=int, default=None, help="Process only the first N belts")
    args = parser.parse_args(argv)

    excel_path = Path(args.excel).expanduser()
    if not excel_path.exists():
        print(f"Excel file not found: {excel_path}", file=sys.stderr)
        return 1

    df = pd.read_excel(excel_path)
    belts = df[df['Part Name'].astype(str).str.strip().str.lower() == 'belt'].copy()
    if args.limit:
        belts = belts.head(args.limit)

    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})

    sources = [
        ContinentalSearch(session, throttle=0.2),
        RockAutoSearch(session, throttle=0.5),
        EbaySearch(session, throttle=0.2),
    ]

    output_root = Path(args.output)
    log_path = Path(args.log)
    output_root.mkdir(parents=True, exist_ok=True)
    log_path.parent.mkdir(parents=True, exist_ok=True)

    processed = 0
    success = 0
    skipped = 0

    existing_success: set[str] = set()
    if args.resume and log_path.exists():
        with log_path.open() as fh:
            reader = csv.DictReader(fh)
            for row in reader:
                if row.get("status") == "success":
                    existing_success.add(row["sku"])

    mode = "a" if args.resume and log_path.exists() else "w"
    log_file = log_path.open(mode, newline='')
    writer = csv.DictWriter(log_file, fieldnames=CSV_FIELDS)
    if log_file.tell() == 0:
        writer.writeheader()

    for _, row in belts.iterrows():
        sku_raw = row.get('SKU', '')
        sku = str(sku_raw).strip()
        if not sku:
            continue
        if args.resume and sku in existing_success:
            skipped += 1
            continue

        part_numbers = split_part_numbers(sku)
        if not part_numbers:
            writer.writerow(
                {
                    "sku": sku,
                    "matched_part_number": "",
                    "source": "",
                    "image_url": "",
                    "local_path": "",
                    "status": "no_part_numbers",
                    "notes": "Could not parse part numbers",
                }
            )
            log_file.flush()
            processed += 1
            continue

        captured = False
        for candidate in part_numbers:
            for source in sources:
                img_url = source.fetch(candidate)
                if not img_url:
                    continue
                ext = Path(img_url).suffix.lower()
                if ext not in {".jpg", ".jpeg", ".png", ".webp"}:
                    ext = ".jpg"
                dest = (output_root / sanitize_part(candidate) / f"{source.name}{ext}")
                if not download_image(session, img_url, dest):
                    continue
                writer.writerow(
                    {
                        "sku": sku,
                        "matched_part_number": candidate,
                        "source": source.name,
                        "image_url": img_url,
                        "local_path": str(dest),
                        "status": "success",
                        "notes": "",
                    }
                )
                log_file.flush()
                processed += 1
                success += 1
                captured = True
                break
            if captured:
                break
        if not captured:
            writer.writerow(
                {
                    "sku": sku,
                    "matched_part_number": "",
                    "source": "",
                    "image_url": "",
                    "local_path": "",
                    "status": "not_found",
                    "notes": f"Tried {len(part_numbers)} numbers with no match",
                }
            )
            log_file.flush()
            processed += 1

    log_file.close()
    print(
        f"Processed {processed} SKUs (success: {success}, skipped: {skipped}) -> {log_path}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
