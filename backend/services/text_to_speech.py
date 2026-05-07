import os
from pathlib import Path

import requests


class TextToSpeech:
    """
    ElevenLabs TTS (prototype notebook):
    POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}
    """

    def __init__(
        self,
        api_key: str | None = None,
        voice_id: str | None = None,
        model_id: str = "eleven_multilingual_v2",
    ):
        self.api_key = api_key or os.getenv("ELEVENLABS_API_KEY")
        self.voice_id = voice_id or os.getenv("ELEVENLABS_VOICE_ID", "CwhRBWXzGAHq8TQ4Fs17")
        self.model_id = model_id

    def _sanitize_error(self, message: str) -> str:
        if self.api_key:
            message = message.replace(self.api_key, "[redacted]")
        return message

    def text_to_speech_arabic(self, text: str, output_path: str) -> None:
        if not self.api_key:
            raise RuntimeError("ElevenLabs API key is missing.")

        url = f"https://api.elevenlabs.io/v1/text-to-speech/{self.voice_id}"

        headers = {
            "xi-api-key": self.api_key,
            "Content-Type": "application/json",
        }

        payload = {
            "text": text,
            "model_id": self.model_id,
            "voice_settings": {
                "stability": 0.65,
                "similarity_boost": 0.85,
                "style": 0.15,
                "use_speaker_boost": True,
            },
        }

        try:
            response = requests.post(url, headers=headers, json=payload, timeout=60)
            if response.status_code != 200:
                detail = self._sanitize_error(response.text[:300])
                raise RuntimeError(f"ElevenLabs error {response.status_code}: {detail}")
        except requests.RequestException as exc:
            raise RuntimeError(f"ElevenLabs request failed: {self._sanitize_error(str(exc))}") from exc

        Path(output_path).parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, "wb") as f:
            f.write(response.content)
