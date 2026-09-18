#!/usr/bin/env node
// Concatenates src/ into a single self-contained index.html.
// The parts share one module scope, in this order — no imports between them.
import { readFile, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, 'src');
const SCRIPTS = ['data.js', 'engine.js', 'ui.js'];
export const THREE_CDN = 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

export async function build({ three = THREE_CDN, banner = '' } = {}) {
  const [head, body] = await Promise.all([readFile(join(SRC, 'head.html'), 'utf8'), readFile(join(SRC, 'body.html'), 'utf8')]);
  const parts = await Promise.all(SCRIPTS.map(f => readFile(join(SRC, f), 'utf8')));
  const js = parts.join('\n').replaceAll(THREE_CDN, three);
  return `${head}\n${body}\n${banner}<script type="module">\n${js}\n</script>\n`;
}

export async function localThreePath() {
  const p = join(ROOT, 'vendor', 'three.module.js');
  try { await access(p); return './vendor/three.module.js'; } catch { return null; }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const useLocal = process.argv.includes('--local-three');
  const three = useLocal ? (await localThreePath()) ?? THREE_CDN : THREE_CDN;
  const out = join(ROOT, 'index.html');
  const html = await build({ three });
  await writeFile(out, html);
  console.log(`built ${out} (${(html.length / 1024).toFixed(0)} kB, three.js from ${three.startsWith('.') ? 'vendor/' : 'jsDelivr'})`);
}
