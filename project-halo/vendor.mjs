#!/usr/bin/env node
// Downloads three.js into vendor/ so the dev server works offline.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { THREE_CDN } from './build.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const res = await fetch(THREE_CDN);
if (!res.ok) { console.error(`Download failed: ${res.status} ${res.statusText}`); process.exit(1); }
const body = await res.text();
await mkdir(join(ROOT, 'vendor'), { recursive: true });
await writeFile(join(ROOT, 'vendor', 'three.module.js'), body);
console.log(`vendor/three.module.js — ${(body.length / 1024).toFixed(0)} kB`);
