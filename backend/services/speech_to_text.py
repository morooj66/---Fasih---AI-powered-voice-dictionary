import os
from dataclasses import dataclass
from typing import Any, Dict, Optional

import whisper


@dataclass
class SpeechToTextConfig:
    model_name: str = "base"
    language: str = "ar"


class SpeechToText:
    def __init__(self, config: Optional[SpeechToTextConfig] = None):
        self.config = config or SpeechToTextConfig(
            model_name=os.getenv("WHISPER_MODEL", "base"),
            language="ar",
        )
        # Whisper model load is expensive; do it once at startup.
        self.model = whisper.load_model(self.config.model_name)

    def transcribe(self, audio_path: str) -> Dict[str, Any]:
        result = self.model.transcribe(audio_path, language=self.config.language)
        return result

