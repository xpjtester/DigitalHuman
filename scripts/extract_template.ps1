param(
  [string]$Input = "assets/private/source/template.mp4",
  [string]$Output = "assets/private/source/template_10s.mp4",
  [double]$Start = 0,
  [double]$Duration = 10
)
$ErrorActionPreference = "Stop"
if (!(Test-Path $Input)) { throw "Missing private source video: $Input" }
New-Item -ItemType Directory -Force -Path (Split-Path $Output) | Out-Null
ffmpeg -y -ss $Start -i $Input -t $Duration -c:v libx264 -preset medium -crf 18 -c:a aac -b:a 192k $Output
Write-Host "Created private template clip: $Output"
