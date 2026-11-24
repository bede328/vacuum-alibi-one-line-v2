// The Vacuum's Alibi — one line, at most 200 characters.
// A robot vacuum explains why it missed a spot. This program writes
// that single line to /output/entry.txt, exactly as the judge reads it.
//
// The line is a flat denial followed by a confession of collusion:
// the vacuum did not fail to clean the spot — it has an understanding
// with it. Deadpan robot voice, surprise at the end, nothing wasted.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Log 88: I did not miss the spot under the chair. The spot and I have an understanding.";

const MAX_CHARS = 200;

function main(): void {
  const line = ENTRY.trim();
  // Count characters as Unicode code points, matching how the scorer
  // counts UTF-8 characters; String.length counts UTF-16 code units
  // instead, so a line with a multi-byte character would be measured
  // one short per character outside the Basic Multilingual Plane.
  const charCount = [...line].length;
  if (charCount === 0 || charCount > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${charCount}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
