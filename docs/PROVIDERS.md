# Provider strategy (V1)

## A — HeyGen Avatar IV baseline
Purpose: fastest test of face animation, Mandarin speech and lip sync.

Good for:
- inexpensive short baseline
- photo-to-talking-video
- measuring whether an avatar approach is visually acceptable

Limitation:
- a classic avatar can look too static for the source videos
- custom Digital Twin creation through API may require Enterprise access

## B — Runway reference-driven experiment
Purpose: preserve the source series' handheld walking/selfie-vlog feeling.

Use owner-authorized reference images/video/audio only. Prefer short 5–10 second experiments before spending credits on longer generations.

## C — ElevenLabs voice
Purpose: voice consistency if video-provider speech is not sufficiently close.

Start with Instant Voice Cloning for a cheap test. Move to Professional Voice Cloning only after the visual pipeline is proven.

## Rule
Do not upload private reference media to GitHub. Provider credentials belong in local environment variables / secret stores only.
