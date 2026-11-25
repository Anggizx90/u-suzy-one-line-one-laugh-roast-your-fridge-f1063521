// One Line, One Laugh: Roast Your Fridge — entry program (Node 22, stdlib only).
//
// Writes exactly ONE roast line to /output/entry.txt. No network, no randomness,
// no input: the output is fully deterministic.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   cat out/entry.txt
//
// Leading candidate (v1) — see NOTES.md for the full 15-line shortlist, the
// criterion-by-criterion scoring, and why the final line was chosen over it.
// REVISION (v2): the shortlist scoring picked F1 as the winner — it carries TWO
// concrete, recognisable details (the gravel-crunching noise AND the exact yield
// of three cubes) where every rival carries one, so it wins at criterion (2),
// the first criterion where the finalists differ, and its twist ("three cubes")
// pays off in the final two words. The magnets line (v1) is runner-up.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge's ice maker sounds like it's chewing gravel, then proudly serves me three cubes.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
// Exactly the line, no trailing newline: the file IS the line, one line only.
writeFileSync(join(out, "entry.txt"), LINE, "utf8");
