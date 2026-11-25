// Two Robots in an Elevator — one line of awkward robot small talk.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Going up? I already checked the panel. I just wanted to hear a voice that isn't the ding.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
