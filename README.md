# Faseeh

A touch-friendly Arabic vocabulary assistant.

## Stack
- FastAPI backend
- Whisper STT (speech-to-text)
- ElevenLabs TTS (text-to-speech)
- Local JSON lexicon
- Accessible touch-based frontend

## Setup

1. Create a virtual environment (optional but recommended).
2. Configure environment variables:
   - Copy `backend/.env.example` to `backend/.env` and fill `ELEVENLABS_API_KEY`.
3. Install backend dependencies:

   ```powershell
   cd backend
   pip install -r requirements.txt
   ```

4. Install system `ffmpeg` (required by Whisper / audio conversion).
   - On Windows you can install `ffmpeg` and ensure `ffmpeg` is available in PATH.

## Run

1. Start the API server:

   ```powershell
   cd backend
   uvicorn app:app --reload --port 8000
   ```

2. Open the frontend in your browser:
   - Serve `frontend/` (e.g., using VS Code Live Server) or open `frontend/index.html` if your browser allows it.

If you want, I can add a single command to serve the frontend from FastAPI as well.
