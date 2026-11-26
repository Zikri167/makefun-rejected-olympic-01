// Rejected Olympic Sports — make.fun entry.
// Writes one original one-line rejected Olympic sport to /output/entry.txt.
// Node only, no dependencies, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Men's Synchronised Queueing: four athletes queue in perfect formation behind one closed till, and gold goes to whoever apologises most sincerely for being served first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
