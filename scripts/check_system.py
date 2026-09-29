from __future__ import annotations
import shutil, subprocess, sys

print("DigitalHuman local environment check")
print("Python:", sys.version.split()[0])
print("FFmpeg:", shutil.which("ffmpeg") or "NOT FOUND")
print("Git:", shutil.which("git") or "NOT FOUND")

try:
    import torch
    print("PyTorch:", torch.__version__)
    print("CUDA available:", torch.cuda.is_available())
    if torch.cuda.is_available():
        print("GPU:", torch.cuda.get_device_name(0))
        props = torch.cuda.get_device_properties(0)
        print("VRAM GB:", round(props.total_memory / 1024**3, 1))
except Exception:
    print("PyTorch: not installed yet")

if shutil.which("nvidia-smi"):
    try:
        out = subprocess.check_output(["nvidia-smi","--query-gpu=name,memory.total","--format=csv,noheader"], text=True).strip()
        print("nvidia-smi:", out)
    except Exception:
        pass
else:
    print("nvidia-smi: NOT FOUND")
