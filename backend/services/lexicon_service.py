import json
from collections.abc import Mapping
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Optional


@dataclass(frozen=True)
class LexiconEntry:
    word: str
    root: str
    meanings: list[Dict[str, Any]]


class LexiconService:
    """
    Loads the local JSON lexicon once and provides helper getters.
    Prototype shape (from notebook):
    {
      "رصين": { "word": "...", "root": "...", "meanings": [ ... ] },
      ...
    }
    """

    def __init__(self, lexicon_path: str | Path):
        self.lexicon_path = Path(lexicon_path)
        self._lexicon: Dict[str, Dict[str, Any]] = self._load()

    def _load(self) -> Dict[str, Dict[str, Any]]:
        if not self.lexicon_path.exists():
            raise FileNotFoundError(f"Lexicon not found: {self.lexicon_path}")
        with self.lexicon_path.open("r", encoding="utf-8") as f:
            data = json.load(f)

        if not isinstance(data, Mapping):
            raise ValueError(f"Lexicon must be a JSON object: {self.lexicon_path}")

        return {
            str(word): self._normalize_entry(str(word), entry)
            for word, entry in data.items()
        }

    def _normalize_entry(self, fallback_word: str, entry: Any) -> Dict[str, Any]:
        if not isinstance(entry, Mapping):
            entry = {}

        word = str(entry.get("word") or fallback_word).strip()
        meanings = entry.get("meanings")
        if not isinstance(meanings, list):
            meanings = []

        return {
            "word": word,
            "root": self._normalize_root(entry.get("root")),
            "meanings": [self._normalize_meaning(meaning) for meaning in meanings],
        }

    def _normalize_meaning(self, meaning: Any) -> Dict[str, Any]:
        if not isinstance(meaning, Mapping):
            meaning = {}

        return {
            "meaning": str(meaning.get("meaning") or "غير متوفر").strip(),
            "example": str(meaning.get("example") or "غير متوفر").strip(),
            "synonyms": self._normalize_word_list(meaning.get("synonyms")),
            "antonyms": self._normalize_word_list(meaning.get("antonyms")),
            "source": str(meaning.get("source") or "").strip(),
        }

    def _normalize_root(self, value: Any) -> str:
        if isinstance(value, list):
            return "، ".join(str(item).strip() for item in value if str(item).strip()) or "غير متوفر"

        root = str(value or "").strip()
        if not root:
            return "غير متوفر"

        try:
            parsed = json.loads(root)
        except json.JSONDecodeError:
            return root

        if isinstance(parsed, list):
            return "، ".join(str(item).strip() for item in parsed if str(item).strip()) or "غير متوفر"
        return root

    def _normalize_word_list(self, value: Any) -> list[str]:
        if isinstance(value, list):
            return [str(item).strip() for item in value if str(item).strip()]
        if isinstance(value, str) and value.strip():
            return [item.strip() for item in value.replace("؛", ",").replace("،", ",").split(",") if item.strip()]
        return []

    @property
    def lexicon(self) -> Dict[str, Dict[str, Any]]:
        return self._lexicon

    def get_entry(self, word: str) -> Optional[Dict[str, Any]]:
        return self._lexicon.get(word)
