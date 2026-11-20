// Entry program for make.fun's gta6-meme-x-01 bounty ("Post a GTA 6 meme on X").
// Runs on Node 22 with the standard library only and no network access.
// Its only job: copy POST.json from the repository root into the output
// directory, where the gate reads the X post's address from it. The post
// itself is the entry — the house fetches it from X and hands its first
// picture and its text to the judge. Nothing this program writes is judged.
//
// Local test:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR: string = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source: string = join(BOT_DIR, 'POST.json');
const target: string = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${BOT_DIR}; nothing to copy.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  // A failed copy must fail loudly, not silently leave a stale file behind.
  console.error(`Could not copy POST.json to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
