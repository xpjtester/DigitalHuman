import fs from "node:fs";
import path from "node:path";

const cmd = process.argv[2] || "plan";
const config = JSON.parse(fs.readFileSync("config/style.json", "utf8"));

const providers = {
  runway: { key: "RUNWAY_API_KEY", role: "reference-driven selfie-vlog generation" },
  heygen: { key: "HEYGEN_API_KEY", role: "talking-avatar baseline" },
  elevenlabs: { key: "ELEVENLABS_API_KEY", role: "owner-authorized voice clone / TTS" }
};

if (cmd === "check") {
  console.log("DigitalHuman V1 environment check");
  for (const [name, p] of Object.entries(providers)) {
    console.log(`${name}: ${process.env[p.key] ? "configured" : "not configured"} — ${p.role}`);
  }
  console.log("private assets:", fs.existsSync(path.join("assets","private")) ? "present" : "create assets/private locally");
} else {
  console.log(JSON.stringify({
    goal: "10-second 9:16 Chinese selfie-vlog proof of concept",
    script: config.testScript,
    recommendedExperimentOrder: [
      "A: HeyGen Avatar IV baseline from an owner-approved reference photo",
      "B: Runway reference-driven generation for handheld walking/selfie realism",
      "C: ElevenLabs voice clone only if built-in/provider voice is not close enough"
    ],
    acceptance: ["identity consistency","natural Mandarin","lip sync","handheld selfie feeling"]
  }, null, 2));
}
