// The Robot Vacuum's Best Excuse — entrypoint.
// Writes the funniest one-line excuse a robot vacuum gives for
// missing a spot (at most 140 characters) to /output/entry.txt.
// Competition: u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
// (make.fun, account @bangjacky). The excuse is assembled from
// beats below, so the admission and the reasoning stay separate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The excuse, beat by beat: the missed spot admitted first,
// then what the vacuum's own map says about that corner.
const PARTS = [
  "I skipped the corner by the sofa:",
  "my map marks it as the place the cat sits to supervise,",
  "and I do not clean under management.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 140;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
