import argparse
import csv
import json
from collections import defaultdict
from pathlib import Path
from typing import Any


MISSING_VALUE = "غير متوفر"

ARABIC_COLUMN_MAP = {
    "الكلمة": "word",
    "كلمة": "word",
    "word": "word",
    "الجذر": "root",
    "جذر": "root",
    "root": "root",
    "المعنى": "meaning",
    "معنى": "meaning",
    "definition": "meaning",
    "meaning": "meaning",
    "المثال": "example",
    "مثال": "example",
    "example": "example",
    "المرادفات": "synonyms",
    "مرادفات": "synonyms",
    "synonyms": "synonyms",
    "الأضداد": "antonyms",
    "اضداد": "antonyms",
    "أضداد": "antonyms",
    "antonyms": "antonyms",
    "المصدر": "source",
    "مصدر": "source",
    "source": "source",
    "lemma": "word",
    "stem": "root",
    "translation": "source",
    "sense_id": "sense_id",
    "pos_label": "pos_label",
}


def normalize_header(header: str) -> str:
    header = (header or "").strip().replace("\ufeff", "")
    return ARABIC_COLUMN_MAP.get(header, header)


def normalize_root(value: str) -> str:
    root = (value or "").strip()
    if not root or root in {MISSING_VALUE, "-"}:
        return MISSING_VALUE

    try:
        parsed: Any = json.loads(root)
    except json.JSONDecodeError:
        return root

    if isinstance(parsed, list):
        return "، ".join(str(item).strip() for item in parsed if str(item).strip()) or MISSING_VALUE
    return root


def split_list(value: str) -> list[str]:
    value = (value or "").strip()
    if not value or value in {MISSING_VALUE, "-"}:
        return []

    for sep in ["،", ",", ";", "؛", "|"]:
        if sep in value:
            return [item.strip() for item in value.split(sep) if item.strip()]

    return [value]


def convert_csv_to_lexicon(input_path: str | Path, output_path: str | Path) -> None:
    input_path = Path(input_path)
    output_path = Path(output_path)

    if not input_path.exists():
        raise FileNotFoundError(f"Input file not found: {input_path}")

    lexicon = defaultdict(
        lambda: {
            "word": "",
            "root": MISSING_VALUE,
            "meanings": [],
        }
    )

    total_rows = 0
    missing_roots = 0
    missing_meanings = 0

    # utf-8-sig handles BOMs commonly found in CSV exports.
    with input_path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)

        original_columns = reader.fieldnames or []
        print("CSV columns found:")
        print(original_columns)

        normalized_columns = [normalize_header(col) for col in original_columns]
        print("\nNormalized columns:")
        print(normalized_columns)

        for row in reader:
            total_rows += 1

            normalized_row = {
                normalize_header(key): (value or "").strip()
                for key, value in row.items()
            }

            word = normalized_row.get("word", "").strip()
            if not word:
                continue

            root = normalize_root(normalized_row.get("root", ""))
            meaning = normalized_row.get("meaning", "").strip()

            if root == MISSING_VALUE:
                missing_roots += 1

            if not meaning:
                missing_meanings += 1
                meaning = MISSING_VALUE

            example = normalized_row.get("example", "").strip() or MISSING_VALUE
            source = normalized_row.get("source", "").strip() or "ملف البيانات"
            synonyms = split_list(normalized_row.get("synonyms", ""))
            antonyms = split_list(normalized_row.get("antonyms", ""))

            lexicon[word]["word"] = word
            if lexicon[word]["root"] == MISSING_VALUE and root != MISSING_VALUE:
                lexicon[word]["root"] = root

            lexicon[word]["meanings"].append(
                {
                    "meaning": meaning,
                    "example": example,
                    "synonyms": synonyms,
                    "antonyms": antonyms,
                    "source": source,
                }
            )

    final_lexicon = dict(lexicon)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", encoding="utf-8") as f:
        json.dump(final_lexicon, f, ensure_ascii=False, indent=2)

    words_with_multiple_meanings = sum(
        1 for entry in final_lexicon.values()
        if len(entry.get("meanings", [])) > 1
    )

    print("\nConversion completed successfully.")
    print(f"Total rows: {total_rows}")
    print(f"Total unique words: {len(final_lexicon)}")
    print(f"Words with multiple meanings: {words_with_multiple_meanings}")
    print(f"Missing roots: {missing_roots}")
    print(f"Missing meanings: {missing_meanings}")
    print(f"Output file: {output_path}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True, help="Path to input CSV file")
    parser.add_argument("--output", required=True, help="Path to output lexicon JSON file")
    args = parser.parse_args()

    convert_csv_to_lexicon(args.input, args.output)


if __name__ == "__main__":
    main()
