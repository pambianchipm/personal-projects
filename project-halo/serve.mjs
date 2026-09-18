#!/usr/bin/env node
// Dev server: rebuilds on every request, live-reloads open tabs when src/ changes.
//   node serve.mjs [--port 5173] [--host 0.0.0.0]
import { createServer } from 'node:http';
import { watch } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, localThreePath, THREE_CDN } from './build.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const arg = (flag, fallback) => { const i = process.argv.indexOf(flag); return i > -1 ? process.argv[i + 1] : fallback; };
const PORT = Number(arg('--port', process.env.PORT || 5173));
const HOST = arg('--host', '127.0.0.1');

const LIVE_RELOAD = `<script>
  (() => { let es; const connect = () => { es = new EventSource('/__reload');
    es.onmessage = e => { if (e.data === 'reload') location.reload(); };
    es.onerror = () => { es.close(); setTimeout(connect, 1000); }; }; connect(); })();
</script>\n`;

const clients = new Set();
let pending = null;
for (const dir of ['src']) {
  watch(join(ROOT, dir), { recursive: true }, (_, file) => {
    clearTimeout(pending);
    pending = setTimeout(() => {
      console.log(`  changed: ${file} — reloading ${clients.size} tab${clients.size === 1 ? '' : 's'}`);
      for (const res of clients) res.write('data: reload\n\n');
    }, 60);
  });
}

const TYPES = { '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.md': 'text/markdown; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml' };

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/__reload') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write('retry: 1000\n\n'); clients.add(res); req.on('close', () => clients.delete(res));
    return;
  }
  if (url.pathname === '/' || url.pathname === '/index.html') {
    try {
      const three = (await localThreePath()) ?? THREE_CDN;
      const html = await build({ three, banner: LIVE_RELOAD });
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      return res.end(html);
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end(`Build failed:\n\n${e.stack}`);
    }
  }
  // static passthrough for vendor/, docs/ and anything else in the project
  const path = join(ROOT, normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, ''));
  if (!path.startsWith(ROOT)) { res.writeHead(403); return res.end('Forbidden'); }
  try {
    const body = await readFile(path);
    const ext = path.slice(path.lastIndexOf('.'));
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch { res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('Not found'); }
}).listen(PORT, HOST, async () => {
  const three = await localThreePath();
  console.log(`\n  Project Halo dev server`);
  console.log(`  http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`);
  console.log(`  three.js: ${three ? 'vendor/three.module.js (offline)' : 'jsDelivr (needs network)'}`);
  console.log(`  editing src/*.js reloads open tabs\n`);
});
