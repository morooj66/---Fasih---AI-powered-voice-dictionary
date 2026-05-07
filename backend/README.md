# Backend (FastAPI)

## Endpoints
- `POST /api/voice/ask`
  - Accepts `multipart/form-data` with field `audio`
  - Returns JSON: transcript, intent, response text, and a URL to an MP3 audio response.

- `POST /api/voice/ask_text`
  - Accepts JSON `{ "text": "..." }`
  - Skips STT and directly builds the response + generates TTS.

## Requirements
- Python 3.9+
- System `ffmpeg` available in PATH.
  - Whisper transcribes from audio; we also convert uploaded audio into WAV for consistency.

## Setup
```powershell
cd backend
pip install -r requirements.txt

# create env file
copy .env.example .env
# edit .env with your ELEVENLABS_API_KEY
```

## Run
```powershell
uvicorn app:app --reload --port 8000
```

## Note on the lexicon
The prototype uses a small local `data/lexicon.json`. You can replace it with your own dataset and re-run without code changes.

