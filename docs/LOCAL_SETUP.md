# Local €0 setup

Target: Windows + NVIDIA GPU. WSL2 is recommended if native Windows dependencies become difficult.

## Private directories
Create:
- assets/private/source/
- assets/private/voice/
- outputs/

Copy one owner-authorized original selfie video to assets/private/source/template.mp4. Do not commit it.

## V1 strategy
Do not generate the whole scene from scratch. Reuse the real source video's body motion, walking motion, camera shake, lighting and background. Generate only new speech audio, mouth motion and subtitles.

## Voice
First experiment: F5-TTS using clean owner-authorized speech as local reference audio.

## Lip sync
First experiment: MuseTalk. Input is the selected real template clip plus newly generated speech.

## Final
FFmpeg normalizes audio, burns Chinese subtitles, preserves 9:16 and exports H.264/AAC MP4.

Do not scale beyond 10 seconds until identity, voice, lip sync, head turns and handheld realism pass.
