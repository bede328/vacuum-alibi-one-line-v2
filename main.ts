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
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
