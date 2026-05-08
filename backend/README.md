# Fasih Backend

FastAPI backend copied from `morooj66/Fasyh-project-voice-` and adjusted for this frontend.

## Run

```powershell
cd backend
python -m pip install -r requirements.txt
python -m uvicorn app:app --reload --port 8000
```

The frontend calls:

```text
POST http://127.0.0.1:8000/api/voice/ask_text
```

with JSON:

```json
{ "text": "ما معنى رصين" }
```

## Notes

- The current frontend still uses browser SpeechRecognition and SpeechSynthesis for accessibility.
- If the backend is not running, the frontend falls back to `mock-data.js`.
- ElevenLabs TTS is optional. If `ELEVENLABS_API_KEY` is missing, the backend still returns text.
- Whisper audio transcription is optional and only needed for `POST /api/voice/ask`.
