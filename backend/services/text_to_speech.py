import base64
import os
from pathlib import Path
from typing import Any

import requests


class TextToSpeech:
    """
    AiVOOV TTS.

    API docs: https://github.com/AiVOOV/aivoov-api
    Endpoint returns base64 audio, which we decode into a local MP3 file.
    """

    def __init__(
        self,
        api_key: str | None = None,
        voice_id: str | None = None,
    ):
        self.api_key = api_key or os.getenv("AIVOOV_API_KEY")
        self.voice_id = voice_id or os.getenv("AIVOOV_VOICE_ID")
        self.speaking_rate = os.getenv("AIVOOV_SPEAKING_RATE", "default")
        self.pitch_rate = os.getenv("AIVOOV_PITCH_RATE", "default")
        self.volume = os.getenv("AIVOOV_VOLUME", "default")
        self.create_url = os.getenv("AIVOOV_CREATE_URL", "https://aivoov.com/api/v8/create")

    def _session(self) -> requests.Session:
        session = requests.Session()
        # The local environment has broken proxy vars; AiVOOV should go direct.
        session.trust_env = False
        return session

    def _sanitize_error(self, message: str) -> str:
        if self.api_key:
            message = message.replace(self.api_key, "[redacted]")
        return message

    def _extract_audio(self, data: Any) -> str | None:
        if isinstance(data, dict):
            return data.get("audio") or data.get("data") or data.get("base64")
        return None

    def text_to_speech_arabic(self, text: str, output_path: str) -> None:
        if not self.api_key:
            raise RuntimeError("AiVOOV API key is missing.")
        if not self.voice_id:
            raise RuntimeError("AiVOOV voice id is missing.")

        payload = {
            "voice_id[]": self.voice_id,
            "transcribe_text[]": text.strip(),
            "transcribe_ssml_pitch_rate[]": self.pitch_rate,
            "transcribe_ssml_spk_rate[]": self.speaking_rate,
            "transcribe_ssml_volume[]": self.volume,
        }

        headers = {
            "X-API-KEY": self.api_key,
            "Content-Type": "application/x-www-form-urlencoded",
        }

        try:
            response = self._session().post(
                self.create_url,
                headers=headers,
                data=payload,
                timeout=90,
            )
        except requests.RequestException as exc:
            raise RuntimeError(f"AiVOOV request failed: {self._sanitize_error(str(exc))}") from exc

        if response.status_code != 200:
            raise RuntimeError(f"AiVOOV error {response.status_code}: {self._sanitize_error(response.text[:500])}")

        try:
            data = response.json()
        except ValueError as exc:
            raise RuntimeError(f"AiVOOV returned non-JSON response: {self._sanitize_error(response.text[:500])}") from exc

        if isinstance(data, dict) and data.get("status") is False:
            raise RuntimeError(f"AiVOOV generation failed: {self._sanitize_error(str(data)[:500])}")

        audio_base64 = self._extract_audio(data)
        if not audio_base64:
            raise RuntimeError(f"AiVOOV response did not include audio: {self._sanitize_error(str(data)[:500])}")

        if "," in audio_base64:
            audio_base64 = audio_base64.split(",", 1)[1]

        Path(output_path).parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, "wb") as file:
            file.write(base64.b64decode(audio_base64))
