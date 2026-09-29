# DigitalHuman

Private, local-first project for creating new owner-authorized selfie-vlog videos from existing reference footage.

## V1 — €0 API cost

No paid video/TTS APIs are required.

Pipeline:
existing selfie video → select 5–10s source segment → local Chinese voice clone/TTS → local lip sync → subtitles → FFmpeg MP4

Preferred open-source stack:
- F5-TTS — Mandarin-capable voice cloning/TTS
- MuseTalk — lip synchronization
- LivePortrait — optional portrait/head-motion experiments
- Whisper — optional transcription/timing
- FFmpeg — media extraction and final composition

## Privacy
Reference videos, face images, voice samples and generated media stay local. Never commit assets/private/, outputs/, media reference files, model weights, or secrets.

## V1 test
你知道吗？荷兰的小孩一岁以后，很多就不喝奶粉了，直接开始喝超市里的普通牛奶。

First target: 5–10 seconds, not a full 60–90 second video.

Run: python scripts/check_system.py
Then follow docs/LOCAL_SETUP.md.
