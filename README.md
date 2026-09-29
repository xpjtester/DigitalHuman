# DigitalHuman

Private MVP for generating a consistent selfie-vlog digital human from owner-authorized reference media.

## V1 goal
Generate a 5–10 second vertical (9:16) Chinese selfie-vlog test:
> 你知道吗？荷兰的小孩一岁以后，很多就不喝奶粉了，直接开始喝超市里的普通牛奶。

Quality gates:
- identity consistency
- natural Chinese voice
- believable lip sync
- handheld selfie-vlog feeling

## Privacy
Do **not** commit reference videos, face images, voice samples, generated outputs, API keys, or provider credentials.

Put private local media under `assets/private/`.

## Pipeline
1. Prepare owner-authorized reference media locally
2. Generate/clone voice with a configured provider
3. Generate avatar/video with a configured provider
4. Add Chinese subtitles
5. Export vertical MP4 to `outputs/`

Provider adapters are intentionally separated so the video/voice vendor can be changed without rewriting the project.
