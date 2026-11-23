// Real-Life Patch Notes — entry program.
// Writes ONE single-line comedy patch note to /output/entry.txt.
//
// Candidate lines considered (judged against the 5 house criteria):
//   A. "v1.9.3: fixed a bug where sneezing cleared the active thought buffer without saving."
//   B. "v2.0.1: fixed a bug where yawning in one user triggered yawning in all nearby users."
//   C. "v3.1.0: fixed a bug where knees predicted rain 12 hours before the weather service."
// Pick: A. It names the most universally recognisable body bug (a sneeze wiping
// your train of thought), it reads exactly like a shipped release note
// ("fixed a bug where ... without saving"), the engineering register
// ("active thought buffer") makes the joke land on first read with no setup
// wasted, and every word earns its place inside 160 characters. B is close
// but "triggered yawning in nearby users" is slightly wordier; C is funny but
// the rain-knee bug is a folk cliché rather than a wince-and-laugh moment.
//
// Revision (second authoring session): added "mid-sentence" before
// "without saving". The original stated the loss abstractly; the wince is
// that the thought vanishes mid-sentence, the exact moment everyone has
// lived through. It spends 13 of the 76 unused characters on a sharper,
// more specific punchline (criteria 2 and 4) instead of padding, and keeps
// the shipped-note register untouched.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v1.9.3: fixed a bug where sneezing cleared the active thought buffer mid-sentence without saving.";

if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry must be 1-160 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
