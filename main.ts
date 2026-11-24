// Ridiculous at First Glance, Real by the Second — entry program.
// Writes one sentence (<=200 chars) pitching a bizarre startup idea
// to /output/entry.txt. Deterministic: the same sentence every run.
import { mkdirSync, writeFileSync } from "node:fs";

// Final pitch: same crow idea, tightened. Opens on the bizarre act itself
// ("Our trained crows steal your phone"), and the turn lands harder —
// the customer *happily pays to be robbed*. Shorter (190 chars), punchier.
const ENTRY =
  "Our trained crows steal your phone the moment you doomscroll past midnight \u2014 willpower always fails, but a bird with a grudge never does, and insomniacs happily pay $19 a month to be robbed.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
