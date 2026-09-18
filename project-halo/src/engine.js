
// =====================================================================
//  Section 2: parametric 3D ring (three.js)
//  Units are millimetres. Ring circle lies in the XY plane, finger axis = Z, head at +Y.
//  Stone-local space: x = length axis, z = width axis, y up, girdle plane at y = 0.
// =====================================================================
const D2R = Math.PI / 180;
let THREE = null;

// ---------- 2D outlines (x = length, z = width), normalised to [-1,1]², CCW ----------
function normalizeOutline(pts) {
  let minx = Infinity, maxx = -Infinity, minz = Infinity, maxz = -Infinity;
  for (const [x, z] of pts) { if (x < minx) minx = x; if (x > maxx) maxx = x; if (z < minz) minz = z; if (z > maxz) maxz = z; }
  const cx = (minx + maxx) / 2, cz = (minz + maxz) / 2, sx = 2 / (maxx - minx), sz = 2 / (maxz - minz);
  const out = pts.map(([x, z]) => [(x - cx) * sx, (z - cz) * sz]);
  let area = 0;
  for (let i = 0; i < out.length; i++) { const [x1, z1] = out[i], [x2, z2] = out[(i + 1) % out.length]; area += x1 * (-z2) - x2 * (-z1); }
  if (area < 0) out.reverse();
  return out;
}
const circleO = N => Array.from({ length: N }, (_, i) => { const t = i / N * 2 * Math.PI; return [Math.cos(t), -Math.sin(t)]; });
const superO = (N, n) => Array.from({ length: N }, (_, i) => { const t = i / N * 2 * Math.PI, c = Math.cos(t), s = Math.sin(t); return [Math.sign(c) * Math.pow(Math.abs(c), 2 / n), -Math.sign(s) * Math.pow(Math.abs(s), 2 / n)]; });
function polyO(corners, N, bulge = 0) {
  const P = corners.length, lens = []; let per = 0;
  for (let i = 0; i < P; i++) { const a = corners[i], b = corners[(i + 1) % P]; const l = Math.hypot(b[0] - a[0], b[1] - a[1]); lens.push(l); per += l; }
  const out = [];
  for (let i = 0; i < P; i++) {
    const a = corners[i], b = corners[(i + 1) % P], k = Math.max(1, Math.round(N * lens[i] / per));
    const ex = (b[0] - a[0]) / lens[i], ez = (b[1] - a[1]) / lens[i];
    for (let j = 0; j < k; j++) { const u = j / k, bl = bulge * Math.sin(Math.PI * u); out.push([a[0] + (b[0] - a[0]) * u + ez * bl, a[1] + (b[1] - a[1]) * u - ex * bl]); }
  }
  return out;
}
const octO = (N, c) => polyO([[1, -1 + c], [1, 1 - c], [1 - c, 1], [-1 + c, 1], [-1, 1 - c], [-1, -1 + c], [-1 + c, -1], [1 - c, -1]], N);
const pearO = N => Array.from({ length: N }, (_, i) => { const t = i / N * 2 * Math.PI; return [Math.cos(t), Math.sin(t) * Math.pow(Math.sin(t / 2), 1.25)]; });
const marqO = N => { const w = .5, R = (1 + w * w) / (2 * w); return Array.from({ length: N }, (_, i) => { const t = i / N * 2 * Math.PI, x = Math.cos(t), h = Math.sqrt(Math.max(0, R * R - x * x)) - (R - w); return [x, Math.sin(t) >= 0 ? h : -h]; }); };
const heartO = N => Array.from({ length: N }, (_, i) => { const t = i / N * 2 * Math.PI; return [13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t), 16 * Math.pow(Math.sin(t), 3)]; });
const regO = (sides, N, bulge = 0) => polyO(Array.from({ length: sides }, (_, i) => { const a = i / sides * 2 * Math.PI; return [Math.cos(a), -Math.sin(a)]; }), N, bulge);
const halfmoonO = N => { const out = []; const n = Math.round(N * .7); for (let i = 0; i <= n; i++) { const th = -Math.PI / 2 + Math.PI * i / n; out.push([-1 + 2 * Math.cos(th), Math.sin(th)]); } for (let i = 1; i < N - n; i++) out.push([-1, 1 - 2 * i / (N - n)]); return out; };

const hexNavetteO = (N, w = .38) => polyO([[1, 0], [w, 1], [-w, 1], [-1, 0], [-w, -1], [w, -1]], N);   // Dutch marquise
const kiteO = N => polyO([[1, 0], [-.35, 1], [-1, 0], [-.35, -1]], N);
const shieldO = N => polyO([[1, 0], [-.25, .92], [-1, 1], [-1, -1], [-.25, -.92]], N, .04);
const lozengeO = N => polyO([[1, 0], [0, 1], [-1, 0], [0, -1]], N);
const bulletO = N => polyO([[1, 0], [.25, 1], [-1, 1], [-1, -1], [.25, -1]], N);

const OUTLINE_FN = {
  round: N => circleO(N), oval: N => circleO(N), cushion: N => superO(N, 3.4),
  princess: N => polyO([[1, 1], [-1, 1], [-1, -1], [1, -1]], N), emerald: N => octO(N, .16), asscher: N => octO(N, .24), radiant: N => octO(N, .17),
  pear: N => pearO(N), marquise: N => marqO(N), heart: N => heartO(N), hexagon: N => regO(6, N), trillion: N => regO(3, N, .1),
  dutchmarq: N => hexNavetteO(N), kite: N => kiteO(N), shield: N => shieldO(N), lozenge: N => lozengeO(N),
  octagon: N => octO(N, .3), baguette: N => polyO([[1, 1], [-1, 1], [-1, -1], [1, -1]], N), bullet: N => bulletO(N),
  trapezoid: N => polyO([[-1, -1], [1, -.62], [1, .62], [-1, 1]], N), baguette: N => polyO([[-1, -1], [1, -1], [1, 1], [-1, 1]], N), halfmoon: N => halfmoonO(N),
};
const SIDE_META = { round: { ratio: 1, facets: 'brilliant' }, pear: { ratio: 1.5, facets: 'brilliant' }, trapezoid: { ratio: .62, facets: 'step' }, baguette: { ratio: .55, facets: 'step' }, halfmoon: { ratio: .6, facets: 'step' }, trillion: { ratio: 1, facets: 'brilliant' } };
const outlineCache = new Map();
function outline(id, N) { const k = id + ':' + N; if (!outlineCache.has(k)) outlineCache.set(k, normalizeOutline(OUTLINE_FN[id](N))); return outlineCache.get(k); }

// resample a closed outline to M points by arc length; returns [[x,z],...]
function resample(pts, M) {
  const n = pts.length, cum = [0]; let per = 0;
  for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % n]; per += Math.hypot(b[0] - a[0], b[1] - a[1]); cum.push(per); }
  const out = []; let seg = 0;
  for (let j = 0; j < M; j++) {
    const d = per * j / M; while (seg < n - 1 && cum[seg + 1] < d) seg++;
    const a = pts[seg], b = pts[(seg + 1) % n], u = (d - cum[seg]) / Math.max(1e-9, cum[seg + 1] - cum[seg]);
    out.push([a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u]);
  }
  return out;
}
// dense outline in mm (scaled), with outward normals
function densePath(id, L, W, M = 128) {
  const pts = resample(outline(id, 96), M).map(([x, z]) => [x * L / 2, z * W / 2]);
  const nrm = pts.map((p, i) => { const a = pts[(i - 1 + M) % M], b = pts[(i + 1) % M]; let tx = b[0] - a[0], tz = b[1] - a[1]; const l = Math.hypot(tx, tz) || 1; tx /= l; tz /= l; return [-tz, tx]; });
  return { pts, nrm, M };
}
const offsetPath = (path, d) => path.pts.map((p, i) => [p[0] + path.nrm[i][0] * d, p[1] + path.nrm[i][1] * d]);
const pathLength = pts => { let l = 0; for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; l += Math.hypot(b[0] - a[0], b[1] - a[1]); } return l; };
// points spaced `pitch` apart along a closed polyline (returns [{p:[x,z], n:[nx,nz]}])
function spaced(pts, nrm, pitch, startFrac = 0) {
  const total = pathLength(pts), count = Math.max(1, Math.round(total / pitch)), step = total / count, out = [];
  let seg = 0, acc = 0, target = step * startFrac;
  const n = pts.length; let a = pts[0], b = pts[1 % n], segLen = Math.hypot(b[0] - a[0], b[1] - a[1]);
  for (let k = 0; k < count; k++) {
    while (target > acc + segLen && seg < n * 2) { acc += segLen; seg++; a = pts[seg % n]; b = pts[(seg + 1) % n]; segLen = Math.hypot(b[0] - a[0], b[1] - a[1]); }
    const u = segLen ? (target - acc) / segLen : 0, i0 = seg % n, i1 = (seg + 1) % n;
    out.push({ p: [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u], n: [nrm[i0][0] + (nrm[i1][0] - nrm[i0][0]) * u, nrm[i0][1] + (nrm[i1][1] - nrm[i0][1]) * u] });
    target += step;
  }
  return out;
}
// closest outline point (mm) at a given outline angle (deg, 0 = +x, CCW toward -z)
function pointAtAngle(path, deg) {
  const a = deg * D2R, dx = Math.cos(a), dz = -Math.sin(a); let best = 0, bd = -2;
  for (let i = 0; i < path.M; i++) { const p = path.pts[i], l = Math.hypot(p[0], p[1]) || 1, d = (p[0] * dx + p[1] * dz) / l; if (d > bd) { bd = d; best = i; } }
  return { p: path.pts[best], n: path.nrm[best], i: best };
}

// ---------- faceted gem geometry ----------
function ringPts(O, s, y, off, L, W) {
  const n = O.length, out = [];
  for (let i = 0; i < n; i++) {
    let x = O[i][0], z = O[i][1];
    if (off) { const q = O[(i + 1) % n]; x = (x + q[0]) / 2; z = (z + q[1]) / 2; }
    out.push([x * s * L / 2, y, z * s * W / 2]);
  }
  return out;
}
// Builds a faceted gem from a cut program: how many pavilion mains, how many rows of
// facets on the crown and pavilion, table size, and the crown/pavilion proportions.
// Alternating row offsets are what produce the star / upper-girdle / lower-half facets.
function gemGeometry(shapeId, L, W, D, facets, program) {
  const pr = program, divs = Math.max(6, Math.round(pr.mains * 2));
  const O = outline(shapeId, SHAPE[shapeId]?.poly || facets === 'step' ? Math.max(divs, 24) : divs), n = O.length, tris = [];
  const push = (a, b, c) => tris.push(a, b, c);
  const connect = (A, B) => { // A lower ring, B upper ring
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      if (A.off === B.off) { push(A.p[i], A.p[j], B.p[j]); push(A.p[i], B.p[j], B.p[i]); }
      else if (B.off > A.off) { push(A.p[i], A.p[j], B.p[i]); push(A.p[j], B.p[j], B.p[i]); }
      else { push(A.p[i], B.p[j], B.p[i]); push(A.p[i], A.p[j], B.p[j]); }
    }
  };
  const toPointBelow = (A, C) => { for (let i = 0; i < n; i++) push(A.p[i], C, A.p[(i + 1) % n]); };
  const toPointAbove = (B, P) => { for (let i = 0; i < n; i++) push(B.p[i], B.p[(i + 1) % n], P); };
  const cap = (R, up) => {
    const v2 = R.p.map(p => new THREE.Vector2(p[0], -p[2]));
    const faces = THREE.ShapeUtils.triangulateShape(v2, []);
    for (const [a, b, c] of faces) {
      const pa = R.p[a], pb = R.p[b], pc = R.p[c];
      const ny = (pb[0] - pa[0]) * (pc[2] - pa[2]) - (pb[2] - pa[2]) * (pc[0] - pa[0]);
      if (up ? ny < 0 : ny > 0) push(pa, pb, pc); else push(pa, pc, pb);
    }
  };
  const mk = (sc, y, off) => ({ p: ringPts(O, sc, y, off, L, W), off });
  const stepped = facets === 'step' || pr.step;
  const girdleT = D * (pr.girdle ?? .06);
  const crownH = D * pr.crownFrac, pavD = D * pr.pavFrac;

  if (pr.flatBack) {                                  // rose cut: domed crown, no pavilion
    const g0 = mk(1, 0, 0), g1 = mk(1, -girdleT, 0);
    connect(g1, g0);
    let prev = g0;
    const rows = Math.max(2, pr.crownRows);
    for (let i = 1; i <= rows; i++) {
      const u = i / (rows + 1), ring = mk(1 - (pr.smooth ? 1 : .78) * u * u, crownH * Math.sin(u * Math.PI / 2), stepped || pr.smooth ? 0 : (i % 2 ? .5 : 0));
      connect(prev, ring); prev = ring;
    }
    toPointAbove(prev, [0, crownH, 0]); cap(g1, false);
    return finish(tris, crownH, girdleT, 0, pr.smooth);
  }

  // ----- crown: table, then crownRows of facets down to the girdle -----
  let prev;
  if (pr.table > .03) { const table = mk(pr.table, crownH, 0); cap(table, true); prev = table; }
  else { prev = null; }
  for (let i = pr.crownRows; i >= 1; i--) {
    const u = i / (pr.crownRows + 1);                 // 1 near the table, 0 at the girdle
    const sc = pr.table + (1 - pr.table) * (1 - u) ** (stepped ? 1 : .8);
    const ring = mk(sc, crownH * u, stepped ? 0 : (i % 2 ? .5 : 0));
    if (prev) connect(ring, prev); else toPointAbove(ring, [0, crownH * 1.25, 0]);
    prev = ring;
  }
  const g0 = mk(1, 0, 0), g1 = mk(1, -girdleT, 0);
  if (prev) connect(g0, prev); else toPointAbove(g0, [0, crownH, 0]);
  connect(g1, g0);

  // ----- pavilion: pavRows of facets down to the culet -----
  prev = g1;
  const culet = pr.culet ?? 0;
  for (let i = 1; i <= pr.pavRows; i++) {
    const u = i / (pr.pavRows + (culet ? 0 : 1));     // fraction of the way to the culet
    const sc = 1 - (1 - Math.max(culet, .06)) * u ** (stepped ? 1 : 1.15);
    const ring = mk(sc, -girdleT - pavD * u, stepped ? 0 : (i % 2 ? .5 : 0));
    connect(ring, prev); prev = ring;
  }
  if (culet > .02) { const k = mk(culet, -girdleT - pavD, 0); connect(k, prev); cap(k, false); }
  else toPointBelow(prev, [0, -girdleT - pavD, 0]);
  return finish(tris, crownH, girdleT, pavD, pr.smooth);
}
function finish(tris, crownH, girdleT, pavD, smooth) {
  const arr = new Float32Array(tris.length * 3);
  for (let i = 0; i < tris.length; i++) { arr[i * 3] = tris[i][0]; arr[i * 3 + 1] = tris[i][1]; arr[i * 3 + 2] = tris[i][2]; }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
  if (smooth) { const merged = mergeClose(geo); geo.dispose(); merged.computeVertexNormals(); return { geo: merged, crownH, girdleT, pavD }; }
  geo.computeVertexNormals();
  return { geo, crownH, girdleT, pavD };
}
const gemCache = new Map();
function gem(shapeId, L, W, D, facets, programId) {
  const pr = cutProgram(programId, facets);
  const k = [shapeId, L.toFixed(2), W.toFixed(2), D.toFixed(2), facets, pr.id].join('|');
  let v = gemCache.get(k);
  if (v) { gemCache.delete(k); gemCache.set(k, v); return v; }
  if (gemCache.size > 40) { let n = 0; for (const [kk, vv] of gemCache) { vv.geo.dispose(); gemCache.delete(kk); if (++n >= 15) break; } }
  v = gemGeometry(shapeId, L, W, D, facets, pr); gemCache.set(k, v); return v;
}

// welds coincident vertices so a cabochon shades as a smooth dome rather than facets
function mergeClose(geo) {
  const pos = geo.getAttribute('position'), map = new Map(), verts = [], idx = [];
  for (let i = 0; i < pos.count; i++) {
    const k = [pos.getX(i), pos.getY(i), pos.getZ(i)].map(v => Math.round(v * 2000)).join(',');
    let j = map.get(k);
    if (j === undefined) { j = verts.length / 3; map.set(k, j); verts.push(pos.getX(i), pos.getY(i), pos.getZ(i)); }
    idx.push(j);
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
  out.setIndex(idx); return out;
}

// ---------- metal walls (bezel rims, halo beds): inner/outer closed paths, top/bottom y ----------
function wallGeometry(inner, outer, yTop, yBot, mask) {
  const n = inner.length, tris = [];
  const push = (a, b, c) => tris.push(a, b, c);
  const P = (pt, y) => [pt[0], y, pt[1]];
  const quad = (a, b, c, d) => { push(a, b, c); push(a, c, d); };
  const on = i => !mask || mask(i);
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n; if (!on(i)) continue;
    const it = P(inner[i], yTop), jt = P(inner[j], yTop), ib = P(inner[i], yBot), jb = P(inner[j], yBot);
    const ot = P(outer[i], yTop), pt = P(outer[j], yTop), ob = P(outer[i], yBot), pb = P(outer[j], yBot);
    quad(ob, pb, pt, ot);   // outer wall (outward)
    quad(jb, ib, it, jt);   // inner wall (inward)
    quad(ot, pt, jt, it);   // top rim (+y)
    quad(ib, jb, pb, ob);   // bottom rim (-y)
    if (!on(j)) quad(jb, jt, pt, pb);           // end cap
    if (!on((i - 1 + n) % n)) quad(ob, ot, it, ib); // start cap
  }
  const arr = new Float32Array(tris.length * 3);
  for (let i = 0; i < tris.length; i++) { arr[i * 3] = tris[i][0]; arr[i * 3 + 1] = tris[i][1]; arr[i * 3 + 2] = tris[i][2]; }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(arr, 3)); geo.computeVertexNormals();
  return geo;
}

// ---------- band sweep: a 2D profile (px axial, py radial from inner surface) swept around the ring ----------
function bandProfile(style, w, t) {
  const hw = w / 2, pts = [], arcN = 9;
  if (style === 'flat') return [[-hw, 0], [hw, 0], [hw, 0], [hw, t], [hw, t], [-hw, t], [-hw, t], [-hw, 0]];
  if (style === 'comfort') {
    for (let i = 0; i <= arcN; i++) { const u = i / arcN; pts.push([lerp(-hw, hw, u), .2 * t * (1 - Math.sin(Math.PI * u))]); }
    pts.push([hw, .2 * t], [hw, .72 * t]);
    for (let i = 0; i <= arcN; i++) { const u = i / arcN; pts.push([lerp(hw, -hw, u), .72 * t + .28 * t * Math.sin(Math.PI * u)]); }
    pts.push([-hw, .72 * t], [-hw, .2 * t]);
    return pts;
  }
  if (style === 'dome') {
    pts.push([-hw, 0], [hw, 0], [hw, 0], [hw, .22 * t]);
    for (let i = 0; i <= arcN; i++) { const th = Math.PI * i / arcN; pts.push([hw * Math.cos(th), .22 * t + .78 * t * Math.sin(th)]); }
    pts.push([-hw, .22 * t], [-hw, 0]);
    return pts;
  }
  // knife-edge
  return [[-hw, 0], [hw, 0], [hw, 0], [hw, .32 * t], [hw, .32 * t], [hw * .1, .96 * t], [0, t], [-hw * .1, .96 * t], [-hw, .32 * t], [-hw, .32 * t], [-hw, 0]];
}
const circleProfile = (r, cy, n = 14) => Array.from({ length: n }, (_, i) => { const a = i / n * 2 * Math.PI; return [r * Math.cos(a), cy + r * Math.sin(a)]; });

function sweep(profile, o) {
  // o: { R, phi0, phi1, seg, closed, radial(φ), axial(φ), wScale(φ), tScale(φ) }
  const P = profile.length, S = o.seg, nR = o.closed ? S : S + 1, pos = new Float32Array(nR * P * 3), uv = new Float32Array(nR * P * 2), idx = [];
  const vAt = []; { let acc = 0; for (let k = 0; k < P; k++) { vAt.push(acc); const kn = (k + 1) % P; acc += Math.hypot(profile[kn][0] - profile[k][0], profile[kn][1] - profile[k][1]); } const tot = acc || 1; for (let k = 0; k < P; k++) vAt[k] /= tot; }
  for (let j = 0; j < nR; j++) {
    const phi = o.phi0 + (o.phi1 - o.phi0) * j / S, c = Math.cos(phi), s = Math.sin(phi);
    const R = o.R + (o.radial ? o.radial(phi) : 0), ax = o.axial ? o.axial(phi) : 0, ws = o.wScale ? o.wScale(phi) : 1, ts = o.tScale ? o.tScale(phi) : 1;
    for (let k = 0; k < P; k++) { const px = profile[k][0] * ws, py = profile[k][1] * ts, r = R + py, b = (j * P + k) * 3; pos[b] = r * c; pos[b + 1] = r * s; pos[b + 2] = px + ax; const u = (j * P + k) * 2; uv[u] = j / S; uv[u + 1] = vAt[k]; }
  }
  for (let j = 0; j < S; j++) {
    const jn = o.closed ? (j + 1) % S : j + 1;
    for (let k = 0; k < P; k++) {
      const kn = (k + 1) % P; if (profile[k][0] === profile[kn][0] && profile[k][1] === profile[kn][1]) continue;
      const a = j * P + k, b = j * P + kn, c = jn * P + kn, d = jn * P + k; idx.push(a, b, c, a, c, d);
    }
  }
  if (!o.closed) { // end caps
    const uniq = [], map = [];
    for (let k = 0; k < P; k++) { const q = uniq.findIndex(u => u[0] === profile[k][0] && u[1] === profile[k][1]); if (q < 0) { map.push(uniq.length); uniq.push(profile[k]); } else map.push(q); }
    const firstIdx = uniq.map((u, q) => map.indexOf(q));
    const faces = THREE.ShapeUtils.triangulateShape(uniq.map(u => new THREE.Vector2(u[0], u[1])), []);
    for (const [a, b, c] of faces) { // caps are emitted with both windings so they read from any side
      const e = S * P;
      idx.push(firstIdx[a], firstIdx[c], firstIdx[b], firstIdx[a], firstIdx[b], firstIdx[c]);
      idx.push(e + firstIdx[a], e + firstIdx[b], e + firstIdx[c], e + firstIdx[a], e + firstIdx[c], e + firstIdx[b]);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}
const angDist = (a, b) => { let d = (a - b) % (2 * Math.PI); if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI; return Math.abs(d); };

// ---------- materials ----------
const matCache = new Map();
let envMap = null, bumpTex = null;
function hammeredBump() {
  if (bumpTex) return bumpTex;
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
  g.fillStyle = '#808080'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 260; i++) { const x = Math.random() * 256, y = Math.random() * 256, r = 10 + Math.random() * 14; const rg = g.createRadialGradient(x, y, 0, x, y, r); rg.addColorStop(0, 'rgba(255,255,255,.55)'); rg.addColorStop(1, 'rgba(60,60,60,0)'); g.fillStyle = rg; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
  bumpTex = new THREE.CanvasTexture(c); bumpTex.wrapS = bumpTex.wrapT = THREE.RepeatWrapping; bumpTex.repeat.set(6, 1); return bumpTex;
}
// how many millimetres of band one repeat of each pattern covers
const ENG_TILE_MM = { rope: 5, florentine: 7, deco: 11, vine: 16, scroll: 22 };
const engTex = new Map();
function engravingTexture(pattern) {
  if (engTex.has(pattern)) return engTex.get(pattern);
  const W = 512, H = 256, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#808080'; g.fillRect(0, 0, W, H);
  g.lineCap = 'round'; g.lineJoin = 'round';
  const cut = (w, a) => { g.strokeStyle = `rgba(20,20,20,${a})`; g.lineWidth = w; };
  const ridge = (w, a) => { g.strokeStyle = `rgba(240,240,240,${a})`; g.lineWidth = w; };
  if (pattern === 'rope') {
    for (let i = -H; i < W + H; i += 64) {
      ridge(26, .8); g.beginPath(); g.moveTo(i, 0); g.lineTo(i + H * .6, H); g.stroke();
      cut(10, .85); g.beginPath(); g.moveTo(i + 32, 0); g.lineTo(i + 32 + H * .6, H); g.stroke();
    }
  } else if (pattern === 'florentine') {
    for (const dir of [1, -1]) for (let i = -H; i < W + H; i += 13) { cut(3, .5); g.beginPath(); g.moveTo(i, dir > 0 ? 0 : H); g.lineTo(i + H * .5 * dir, dir > 0 ? H : 0); g.stroke(); }
  } else if (pattern === 'deco') {
    for (let i = 0; i < W; i += 128) {
      cut(10, .9);
      g.beginPath(); g.moveTo(i, H * .18); g.lineTo(i + 44, H * .18); g.lineTo(i + 44, H * .5); g.lineTo(i + 88, H * .5); g.lineTo(i + 88, H * .82); g.lineTo(i + 128, H * .82); g.stroke();
      ridge(5, .6); g.beginPath(); g.moveTo(i + 8, H * .3); g.lineTo(i + 56, H * .3); g.lineTo(i + 56, H * .62); g.lineTo(i + 100, H * .62); g.stroke();
      cut(7, .8); g.beginPath(); g.arc(i + 108, H * .28, 14, 0, 7); g.stroke();
    }
  } else if (pattern === 'vine') {
    cut(9, .9); g.beginPath();
    for (let x = 0; x <= W; x += 4) g.lineTo(x, H / 2 + Math.sin(x / W * Math.PI * 2) * H * .2);
    g.stroke();
    for (let i = 0; i < 4; i++) {
      const x = 64 + i * 128, y = H / 2 + Math.sin(x / W * Math.PI * 2) * H * .2, up = i % 2 ? 1 : -1;
      g.fillStyle = 'rgba(15,15,15,.9)'; g.beginPath(); g.ellipse(x, y + up * 46, 42, 22, up * .5, 0, 7); g.fill();
      ridge(4, .7); g.beginPath(); g.moveTo(x - 32, y + up * 46); g.lineTo(x + 32, y + up * 46); g.stroke();
      cut(6, .8); g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + up * 10, y + up * 24, x, y + up * 44); g.stroke();
    }
  } else if (pattern === 'scroll') {
    for (const s2 of [1, -1]) {
      for (let i = 0; i < 2; i++) {
        const cx = 128 + i * 256, cy = H / 2 + s2 * 44;
        cut(10, .92); g.beginPath();
        for (let a = 0; a < Math.PI * 2.6; a += .08) { const r = 8 + a * 22, x = cx + Math.cos(a) * r, y = cy + s2 * Math.sin(a) * r * .55; a === 0 ? g.moveTo(x, y) : g.lineTo(x, y); }
        g.stroke();
        ridge(4, .6); g.beginPath();
        for (let a = 0; a < Math.PI * 2.4; a += .08) { const r = 16 + a * 22, x = cx + Math.cos(a) * r, y = cy + s2 * Math.sin(a) * r * .55; a === 0 ? g.moveTo(x, y) : g.lineTo(x, y); }
        g.stroke();
      }
      cut(7, .85); g.beginPath(); g.moveTo(0, H / 2 + s2 * 18); g.bezierCurveTo(W * .25, H / 2 - s2 * 30, W * .75, H / 2 + s2 * 66, W, H / 2 + s2 * 18); g.stroke();
    }
  }
  const tx = new THREE.CanvasTexture(c); tx.wrapS = tx.wrapT = THREE.RepeatWrapping; tx.anisotropy = 4;
  engTex.set(pattern, tx); return tx;
}

function metalMat(id, finish = 'polish') {
  const k = 'm:' + id + ':' + finish; if (matCache.has(k)) return matCache.get(k);
  const m = METAL[id], mat = new THREE.MeshStandardMaterial({ metalness: 1, roughness: finish === 'polish' ? .13 : finish === 'satin' ? .4 : .2, envMapIntensity: 1 });
  mat.color.setRGB(Math.min(1, m.base[0]), m.base[1], m.base[2], THREE.LinearSRGBColorSpace);
  if (finish === 'hammered') { mat.bumpMap = hammeredBump(); mat.bumpScale = .12; }
  matCache.set(k, mat); return mat;
}
function engravedMat(id, finish, pattern, reps) {
  const k = 'e:' + id + ':' + finish + ':' + pattern + ':' + reps;
  if (matCache.has(k)) return matCache.get(k);
  const base = metalMat(id, finish), mat = base.clone();
  const tx = engravingTexture(pattern).clone(); tx.needsUpdate = true; tx.repeat.set(reps, 1);
  mat.bumpMap = tx; mat.bumpScale = pattern === 'florentine' ? .06 : pattern === 'scroll' ? .3 : pattern === 'vine' ? .26 : .18;
  if (pattern === 'florentine') mat.roughness = Math.max(mat.roughness, .38);
  matCache.set(k, mat); return mat;
}

function gemMat(g, W, D, origin) {
  const k = 'g:' + g.id + ':' + Math.round(W); if (matCache.has(k)) return matCache.get(k);
  const colored = !(g.id === 'natural' || g.id === 'lab' || g.id === 'moissanite' || g.id === 'whiteSapph');
  const mat = new THREE.MeshPhysicalMaterial({
    color: colored ? new THREE.Color(g.hex).lerp(new THREE.Color('#ffffff'), .25) : new THREE.Color('#ffffff'),
    metalness: 0, roughness: g.rough ?? .02, transmission: 1 - (g.opaque ?? 0), thickness: Math.max(1.5, D * .9), ior: g.ior, dispersion: g.disp,
    envMapIntensity: 1.5, specularIntensity: 1, clearcoat: colored ? .3 : 0, side: THREE.FrontSide,
  });
  if (colored) { mat.attenuationColor = new THREE.Color(g.hex); mat.attenuationDistance = Math.max(.6, W * .35); }
  if (g.opaque) { mat.color = new THREE.Color(g.hex); mat.roughness = g.rough ?? .1; mat.envMapIntensity = 1.3; }
  matCache.set(k, mat); return mat;
}
function meleeMat(hex, isDiamond) {
  const k = 'me:' + hex; if (matCache.has(k)) return matCache.get(k);
  const mat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(hex).lerp(new THREE.Color('#ffffff'), isDiamond ? .0 : .12), metalness: isDiamond ? .7 : .45, roughness: .05, clearcoat: 1, clearcoatRoughness: .04, envMapIntensity: isDiamond ? 1.8 : 1.3 });
  matCache.set(k, mat); return mat;
}
const ACCENT_HEX = Object.fromEntries(ACCENTS.map(a => [a.id, a.hex]));

// ---------- scene / renderer ----------
const R3 = { scene: null, camera: null, renderer: null, ring: null, ground: null, target: null, sph: { t: -.62, p: 1.08 }, zoom: 1, fit: 60, want: null, auto: true, dragging: false, pinch: 0, vel: { t: 0, p: 0 } };

function studioEnvironment(renderer) {
  const scene = new THREE.Scene();
  const room = new THREE.Mesh(new THREE.BoxGeometry(60, 60, 60), new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(.28, .28, .3), side: THREE.BackSide })); scene.add(room);
  const panel = (w, h, x, y, z, rx, ry, l) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(l[0], l[1], l[2]) })); m.position.set(x, y, z); m.rotation.set(rx, ry, 0); scene.add(m); };
  panel(26, 16, 0, 28, 0, Math.PI / 2, 0, [7, 6.7, 6.2]);          // top softbox
  panel(12, 30, -28, 4, 0, 0, Math.PI / 2, [4, 4.1, 4.4]);         // left strip
  panel(12, 30, 28, 4, 0, 0, -Math.PI / 2, [4, 4.1, 4.4]);         // right strip
  panel(20, 12, 0, 8, -28, 0, 0, [5, 4.8, 4.5]);                   // back key
  panel(34, 8, 0, -8, 28, 0, Math.PI, [2, 2, 2.1]);                // front floor bounce
  panel(5, 5, 12, 20, 16, -.9, .6, [11, 10.5, 10]);                // small hard highlight
  panel(5, 5, -14, 16, 14, -.8, -.6, [8, 8, 8.4]);                 // second highlight
  const pm = new THREE.PMREMGenerator(renderer); pm.compileEquirectangularShader();
  const env = pm.fromScene(scene, .02).texture; pm.dispose(); return env;
}

function initGL(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  envMap = studioEnvironment(renderer); scene.environment = envMap;
  const camera = new THREE.PerspectiveCamera(30, 1, 1, 400);
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(10, 26, 14); key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -22, right: 22, top: 22, bottom: -22, near: 1, far: 80 }); key.shadow.bias = -.0005; key.shadow.radius = 4; scene.add(key);
  const fill = new THREE.DirectionalLight(0xdfe8ff, .5); fill.position.set(-14, 8, -10); scene.add(fill);
  const rim = new THREE.SpotLight(0xffffff, 40, 120, .5, .8, 1.2); rim.position.set(-20, 30, 30); scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, .12));
  const ground = new THREE.Mesh(new THREE.CircleGeometry(80, 48), new THREE.ShadowMaterial({ opacity: .28 })); ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  Object.assign(R3, { scene, camera, renderer, ground, target: new THREE.Vector3(0, 2.5, 0) });
  setStageColor();
  return R3;
}
function setStageColor() {
  if (!R3.renderer) return;
  const c = getComputedStyle(document.documentElement).getPropertyValue('--stage2').trim() || '#cdc9c1';
  R3.renderer.setClearColor(new THREE.Color(c), 1);
  R3.ground.material.opacity = document.documentElement.dataset.theme === 'dark' || (matchMedia('(prefers-color-scheme: dark)').matches && document.documentElement.dataset.theme !== 'light') ? .5 : .26;
}

// ---------- ring assembly ----------
function disposeGroup(g) { g.traverse(o => { if (o.isMesh || o.isInstancedMesh) { if (!o.userData.keepGeo) o.geometry.dispose(); } }); }

function buildRing(s) {
  const G = new THREE.Group();
  const st = s.stone, dims = stoneDims(st), L = dims.L, W = dims.W, D = dims.D, shape = SHAPE[st.shape];
  const engPattern = s.band.engrave && s.band.engrave !== 'none' && s.band.style !== 'twist' ? s.band.engrave : 'none';
  const bandMat = engPattern === 'none' ? metalMat(s.metal.id, s.metal.finish)
    : engravedMat(s.metal.id, s.metal.finish, engPattern, Math.max(2, Math.round(2 * Math.PI * (ringID(s.fit.size) / 2 + 1.5) / ENG_TILE_MM[engPattern])));
  const headMat = metalMat(s.metal.head === 'same' ? s.metal.id : s.metal.head, 'polish');
  const gemType = GEM[st.type];
  const md = meleeFor(W);
  const Rin = ringID(s.fit.size) / 2, w = s.band.width, t = s.band.thickness ?? 1.5, Rout = Rin + t;
  const TOP = Math.PI / 2;
  const seg = 160;
  const meshes = { metalBand: [], metalHead: [] };
  const melee = { diamond: [], colored: {} };
  const addMesh = (geo, mat, list, shadow = true) => { const m = new THREE.Mesh(geo, mat); m.castShadow = shadow; m.receiveShadow = false; G.add(m); return m; };
  const pushMelee = (accent, matrix) => { if (accent === 'diamond') melee.diamond.push(matrix); else (melee.colored[accent] ||= []).push(matrix); };
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0), _d = new THREE.Vector3();
  const placeMelee = (accent, x, y, z, dir, size, tilt = null) => { _p.set(x, y, z); _d.set(dir[0], dir[1], dir[2]).normalize(); _q.setFromUnitVectors(_up, _d); _s.setScalar(size); pushMelee(accent, new THREE.Matrix4().compose(_p, _q, _s)); };

  // ----- head geometry numbers -----
  const stoneParts = gem(st.shape, L, W, D, shape.facets, st.cutStyle);
  const { crownH, girdleT, pavD } = stoneParts;
  const cathedral = s.head.profile === 'cathedral', lift = cathedral ? pavD * .45 * clamp(s.band.cathRise ?? .75, .2, 1.4) / .75 : 0;
  const yTop = Rout + lift;
  const isBezel = s.head.style === 'bezel' || s.head.style === 'halfbezel', isTension = s.head.style === 'tension';
  let yG = yTop + pavD * (s.head.profile === 'low' ? .3 : s.head.profile === 'high' ? 1.0 : .58) + (s.head.profile === 'high' ? .5 : 0);
  if (isBezel) yG = yTop + pavD * .5;
  if (isTension) yG = Rin + t * .55;
  const orientEW = st.orient === 'ew' && shape.elong;
  const stoneGroup = new THREE.Group(); stoneGroup.position.set(0, yG, 0); stoneGroup.rotation.y = orientEW ? 0 : Math.PI / 2; stoneGroup.updateMatrix(); G.add(stoneGroup);
  const extX = orientEW ? L : W; // extent of the center stone along the band direction (X)
  const extZ = orientEW ? W : L;

  // ----- band -----
  const prof = bandProfile(s.band.profile, w, t);
  const halfHead = Math.atan2(extX / 2 + .6, Rout);
  const sectionAt = phi => bandSectionAt(s.band, angDist(phi, TOP));
  const wScaleFn = phi => sectionAt(phi).w / w;
  const tScaleFn = phi => sectionAt(phi).t / t;
  const widthAt = phi => sectionAt(phi).w;
  const euroRadial = phi => s.band.euro ? -.3 * smooth01(1 - angDist(phi, TOP + Math.PI) / (55 * D2R)) : 0;
  const radialCath = phi => { const d = angDist(phi, TOP), a = 38 * D2R; return (d < a ? lift * smooth01(1 - d / a) : 0) + euroRadial(phi); };
  const radialFn = cathedral || s.band.euro ? radialCath : null;
  if (s.band.style === 'twist') {
    const r = Math.min(w * .3, t * .5), A = w * .25, k = 9;
    for (const sgn of [1, -1]) {
      const geo = sweep(circleProfile(r, t / 2), { R: Rin, phi0: 0, phi1: 2 * Math.PI, seg, closed: true, radial: phi => (radialFn ? radialFn(phi) : 0) + sgn * A * .5 * Math.cos(k * phi), axial: phi => sgn * A * Math.sin(k * phi), tScale: tScaleFn });
      addMesh(geo, bandMat);
    }
  } else if (s.band.style === 'split') {
    const a = 62 * D2R, S = .75 + w * .25;
    const main = sweep(prof, { R: Rin, phi0: TOP + a, phi1: TOP - a + 2 * Math.PI, seg: Math.round(seg * .8), closed: false, radial: radialFn, wScale: wScaleFn, tScale: tScaleFn });
    addMesh(main, bandMat);
    for (const sgn of [1, -1]) {
      const arm = sweep(prof, { R: Rin, phi0: TOP - a - 2 * D2R, phi1: TOP + a + 2 * D2R, seg: 48, closed: false, radial: radialFn, tScale: tScaleFn, wScale: phi => .5 * wScaleFn(phi), axial: phi => { const f = smooth01(1 - angDist(phi, TOP) / a); return sgn * (w * .25 + S * f); } });
      addMesh(arm, bandMat);
    }
  } else if (s.band.style === 'bypass') {
    const phi0 = TOP - 22 * D2R, span = 404 * D2R, A = Math.max(1.0, w * .6);
    const geo = sweep(prof, { R: Rin, phi0, phi1: phi0 + span, seg, closed: false, radial: radialFn, tScale: tScaleFn, axial: phi => A * Math.cos(Math.PI * (phi - phi0) / span), wScale: phi => wScaleFn(phi) * (1 - .25 * smooth01(1 - Math.min(phi - phi0, phi0 + span - phi) / (40 * D2R))) });
    addMesh(geo, bandMat);
  } else if (isTension) {
    const gap = Math.atan2(extX / 2 + .1, Rin + t / 2);
    const geo = sweep(prof, { R: Rin, phi0: TOP + gap, phi1: TOP - gap + 2 * Math.PI, seg, closed: false, wScale: wScaleFn, tScale: phi => tScaleFn(phi) * (1 + .35 * smooth01(1 - Math.min(angDist(phi, TOP + gap), angDist(phi, TOP - gap)) / (30 * D2R))) });
    addMesh(geo, bandMat);
  } else {
    const geo = sweep(prof, { R: Rin, phi0: 0, phi1: 2 * Math.PI, seg, closed: true, radial: radialFn, wScale: wScaleFn, tScale: tScaleFn });
    addMesh(geo, bandMat);
  }

  // ----- milgrain beads along band edges -----
  if (s.details.milgrain && s.band.style !== 'twist') {
    const br = .13, pitch = .33, n = Math.round(2 * Math.PI * Rout / pitch), geo = new THREE.SphereGeometry(br, 6, 5);
    const inst = new THREE.InstancedMesh(geo, headMat, n * 2); let i = 0;
    for (let k = 0; k < n; k++) { const phi = k / n * 2 * Math.PI, R = Rout - .06 + (radialFn ? radialFn(phi) : 0) + (tScaleFn(phi) - 1) * t, hw = widthAt(phi) / 2 - .1; for (const sgn of [1, -1]) { _m.makeTranslation(R * Math.cos(phi), R * Math.sin(phi), sgn * hw); inst.setMatrixAt(i++, _m); } }
    inst.castShadow = true; G.add(inst);
  }

  // ----- pavé / channel on the band -----
  if (s.sides.style === 'pave' || s.sides.style === 'channel') {
    const frac = COVERAGES.find(c => c.id === s.sides.coverage).frac, bm = Math.min(md, bandMinWidth(s.band, frac) - .55);
    if (bm >= .8) {
      const isChan = s.sides.style === 'channel', Rs = Rout - bm * (isChan ? .32 : .14), pitch = bm * 1.12;
      const arc = 2 * Math.PI * frac, phiA = TOP - arc / 2, count = Math.round(arc * Rs / pitch);
      const beadGeo = new THREE.SphereGeometry(bm * .15, 6, 5), beads = [];
      for (let k = 0; k <= count; k++) {
        const phi = phiA + arc * k / count; if (angDist(phi, TOP) < halfHead) continue;
        if (s.sides.style === 'pave' && s.band.style === 'split' && angDist(phi, TOP) < 62 * D2R) continue;
        const R = Rs + (radialFn ? radialFn(phi) : 0) + (tScaleFn(phi) - 1) * t;
        placeMelee(s.sides.accent, R * Math.cos(phi), R * Math.sin(phi), 0, [Math.cos(phi), Math.sin(phi), 0], bm);
        if (!isChan) { const phm = phi + arc / count / 2, Rb = Rout + .02 + (radialFn ? radialFn(phm) : 0) + (tScaleFn(phm) - 1) * t; for (const sgn of [1, -1]) { _m.makeTranslation(Rb * Math.cos(phm), Rb * Math.sin(phm), sgn * bm * .46); beads.push(_m.clone()); } }
      }
      if (beads.length) { const inst = new THREE.InstancedMesh(beadGeo, headMat, beads.length); beads.forEach((m, i) => inst.setMatrixAt(i, m)); G.add(inst); }
      if (isChan) for (const sgn of [1, -1]) addMesh(sweep(circleProfile(.17, 0, 8), { R: Rout - .05, phi0: phiA, phi1: phiA + arc, seg: Math.round(seg * frac), closed: frac === 1, radial: phi => (radialFn ? radialFn(phi) : 0) + (tScaleFn(phi) - 1) * t, axial: phi => sgn * (widthAt(phi) / 2 - .17) }), headMat);
    }
  }

  // ----- center stone -----
  const stone = new THREE.Mesh(stoneParts.geo, gemMat(gemType, W, D, st.origin)); stone.userData.keepGeo = true; stone.castShadow = false; stoneGroup.add(stone);
  const path = densePath(st.shape, L, W);

  // prongs
  const prongR = clamp(.058 * W, .34, .62);
  const tips = shape.tips || [];
  const prongAngles = () => {
    const n = s.head.style === 'prong6' ? 6 : s.head.style === 'compass' ? 4 : 4;
    if (s.head.style === 'compass') return [0, 90, 180, 270].map(a => ({ a, v: tips.includes(a) }));
    if (st.shape === 'trillion') return [0, 120, 240].map(a => ({ a, v: true }));
    if (st.shape === 'heart') return n === 6 ? [{ a: 180, v: true }, { a: 30 }, { a: 330 }, { a: 100 }, { a: 260 }, { a: 0 }] : [{ a: 180, v: true }, { a: 40 }, { a: 320 }, { a: 0 }];
    if (st.shape === 'pear') return n === 6 ? [{ a: 0, v: true }, { a: 55 }, { a: 115 }, { a: 180 }, { a: 245 }, { a: 305 }] : [{ a: 0, v: true }, { a: 95 }, { a: 180 }, { a: 265 }];
    if (st.shape === 'marquise') return n === 6 ? [{ a: 0, v: true }, { a: 60 }, { a: 120 }, { a: 180, v: true }, { a: 240 }, { a: 300 }] : [{ a: 0, v: true }, { a: 90 }, { a: 180, v: true }, { a: 270 }];
    if (st.shape === 'princess') return n === 6 ? [45, 135, 225, 315].map(a => ({ a, v: true })).concat([{ a: 90 }, { a: 270 }]) : [45, 135, 225, 315].map(a => ({ a, v: true }));
    if (st.shape === 'hexagon' && n === 6) return [0, 60, 120, 180, 240, 300].map(a => ({ a }));
    return Array.from({ length: n }, (_, i) => ({ a: 360 / n * (i + .5) }));
  };
  const prongMesh = (px, pz, nx, nz, r, vee, tangentOff = 0) => {
    const tx = -nz, tz = nx;
    const bx = px + nx * r * .55 + tx * tangentOff, bz = pz + nz * r * .55 + tz * tangentOff;
    const y0 = -girdleT - pavD * .66, y1 = crownH * .62;
    const topx = bx - nx * r * .5, topz = bz - nz * r * .5;
    const h = Math.hypot(topx - bx, y1 - y0, topz - bz);
    const geo = vee ? new THREE.CylinderGeometry(r * 1.25, r * 1.25, h, 3) : new THREE.CylinderGeometry(r, r * 1.05, h, 10);
    const m = new THREE.Mesh(geo, headMat); m.castShadow = true;
    _d.set(topx - bx, y1 - y0, topz - bz).normalize(); m.quaternion.setFromUnitVectors(_up, _d);
    if (vee) m.rotateY(Math.atan2(-nz, nx) + Math.PI);
    m.position.set((bx + topx) / 2, (y0 + y1) / 2, (bz + topz) / 2); stoneGroup.add(m);
    // tip
    let tip;
    if (s.head.tip === 'claw' && !vee) { tip = new THREE.Mesh(new THREE.ConeGeometry(r * 1.1, r * 1.9, 10), headMat); tip.position.set(topx - nx * r * .75, y1 + r * .2, topz - nz * r * .75); _d.set(-nx * 1.5, .9, -nz * 1.5).normalize(); tip.quaternion.setFromUnitVectors(_up, _d); }
    else if (s.head.tip === 'flat' && !vee) { tip = new THREE.Mesh(new THREE.BoxGeometry(r * 2.3, r * .75, r * 1.7), headMat); tip.position.set(topx - nx * r * .95, y1 + r * .05, topz - nz * r * .95); tip.rotation.y = Math.atan2(-nz, nx); }
    else { tip = new THREE.Mesh(new THREE.SphereGeometry(r * (vee ? 1.2 : 1.12), 12, 10), headMat); tip.position.set(topx - nx * r * .75, y1 - r * .05, topz - nz * r * .75); }
    tip.castShadow = true; stoneGroup.add(tip);
  };
  const railTube = (pts2, y, r, closed = true) => { const v = pts2.map(p => new THREE.Vector3(p[0], y, p[1])); const curve = new THREE.CatmullRomCurve3(v, closed, 'catmullrom', .5); return new THREE.TubeGeometry(curve, Math.max(24, pts2.length), r, 8, closed); };

  if (!isBezel && !isTension) {
    const list = prongAngles();
    for (const pr of list) {
      const q = pointAtAngle(path, pr.a);
      if (s.head.style === 'double' && !pr.v) { prongMesh(q.p[0], q.p[1], q.n[0], q.n[1], prongR * .78, false, prongR * 1.35); prongMesh(q.p[0], q.p[1], q.n[0], q.n[1], prongR * .78, false, -prongR * 1.35); }
      else if (s.head.style === 'trellis') { prongMesh(q.p[0], q.p[1], q.n[0], q.n[1], prongR * .9, pr.v, prongR * .9); }
      else prongMesh(q.p[0], q.p[1], q.n[0], q.n[1], prongR, !!pr.v);
    }
    // basket rails
    const upper = offsetPath(path, prongR * .35), lowerPts = resample(outline(st.shape, 96), 64).map(([x, z]) => [x * L / 2 * .62, z * W / 2 * .62]);
    const um = new THREE.Mesh(railTube(resample(upper, 64), -girdleT - prongR * .9, prongR * .42), headMat); um.castShadow = true; stoneGroup.add(um);
    const lm = new THREE.Mesh(railTube(lowerPts, -girdleT - pavD * .66, prongR * .42), headMat); lm.castShadow = true; stoneGroup.add(lm);
  }
  if (isBezel) {
    const bt = clamp(.075 * W, .45, .8), inner = offsetPath(path, -.02), outer = offsetPath(path, bt);
    const mask = s.head.style === 'halfbezel' ? i => { const p = path.pts[i]; const a = Math.atan2(-p[1], p[0]); return Math.abs(Math.sin(a)) > .62; } : null;
    const bm = new THREE.Mesh(wallGeometry(inner, outer, crownH * .3, -girdleT - pavD * .42, mask), headMat); bm.castShadow = true; stoneGroup.add(bm);
    const lowerPts = resample(outline(st.shape, 96), 64).map(([x, z]) => [x * L / 2 * .6, z * W / 2 * .6]);
    const lm = new THREE.Mesh(railTube(lowerPts, -girdleT - pavD * .68, .38), headMat); lm.castShadow = true; stoneGroup.add(lm);
    if (s.head.style === 'halfbezel') { // open sides get two thin arms
      for (const a of [0, 180]) { const q = pointAtAngle(path, a); const arm = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, pavD * .5, 8), headMat); arm.position.set(q.p[0] * .8, -girdleT - pavD * .45, q.p[1] * .8); stoneGroup.add(arm); }
    }
  }

  // hidden halo (under the girdle)
  if (s.halo.style === 'hidden' || s.halo.style === 'both') {
    const hm = md * .78, sc = .8, yH = -girdleT - pavD * .42;
    const hp = resample(outline(st.shape, 96), 128).map(([x, z]) => [x * L / 2 * sc, z * W / 2 * sc]);
    const hn = hp.map((p, i) => { const a = hp[(i - 1 + 128) % 128], b = hp[(i + 1) % 128]; let tx = b[0] - a[0], tz = b[1] - a[1]; const l = Math.hypot(tx, tz) || 1; return [-tz / l, tx / l]; });
    for (const q of spaced(hp, hn, hm * 1.12)) { _p.set(q.p[0] + q.n[0] * hm * .1, yH, q.p[1] + q.n[1] * hm * .1); _d.set(q.n[0], .15, q.n[1]).normalize(); _q.setFromUnitVectors(_up, _d); _s.setScalar(hm); const m4 = new THREE.Matrix4().compose(_p, _q, _s); m4.premultiply(stoneGroup.matrix); pushMelee(s.halo.accent, m4); }
    const rail = new THREE.Mesh(railTube(resample(hp, 64), yH, hm * .32), headMat); stoneGroup.add(rail);
  }
  // halo(s)
  if (s.halo.style === 'single' || s.halo.style === 'double' || s.halo.style === 'both') {
    const rings = s.halo.style === 'double' ? 2 : 1;
    let hpath = path;
    if (s.halo.shape !== 'match') { const R = Math.max(L, W) / 2 + (s.halo.shape === 'cushion' ? .25 : .05); const id = s.halo.shape === 'cushion' ? 'cushion' : 'round'; hpath = densePath(id, 2 * R, 2 * R); }
    const d0 = .12, dIn = d0 + md * .55, yH = -girdleT - md * .22;
    const bedOuter = offsetPath(hpath, d0 + rings * md * 1.15 + .25), bedInner = offsetPath(hpath, d0);
    const bed = new THREE.Mesh(wallGeometry(bedInner, bedOuter, yH - md * .35, yH - md * 1.05), headMat); bed.castShadow = true; stoneGroup.add(bed);
    const beadGeo = new THREE.SphereGeometry(md * .14, 6, 5), beads = [];
    for (let r = 0; r < rings; r++) {
      const dc = dIn + r * md * 1.15, cpts = offsetPath(hpath, dc), cn = hpath.nrm;
      const stones = spaced(cpts, cn, md * 1.15, r * .5);
      stones.forEach((q, i) => {
        _p.set(q.p[0], yH, q.p[1]); _q.identity(); _s.setScalar(md); const m4 = new THREE.Matrix4().compose(_p, _q, _s); m4.premultiply(stoneGroup.matrix); pushMelee(s.halo.accent, m4);
        const nx = stones[(i + 1) % stones.length]; const mx = (q.p[0] + nx.p[0]) / 2, mz = (q.p[1] + nx.p[1]) / 2;
        for (const sgn of [1, -1]) { _m.makeTranslation(mx + q.n[0] * sgn * md * .42, yH + md * .05, mz + q.n[1] * sgn * md * .42); beads.push(_m.clone()); }
      });
    }
    if (beads.length) { const inst = new THREE.InstancedMesh(beadGeo, headMat, beads.length); beads.forEach((m, i) => inst.setMatrixAt(i, m)); stoneGroup.add(inst); }
  }

  // peg / collet + cathedral arches
  const basketBottom = yG - girdleT - pavD * (isBezel ? .7 : .66);
  if (!isTension && basketBottom > yTop - .6) {
    const r = clamp(.14 * W, .8, 1.5), h = basketBottom - (yTop - .8);
    const peg = new THREE.Mesh(new THREE.CylinderGeometry(r * .8, r, h, 12), headMat); peg.position.set(0, yTop - .8 + h / 2, 0); peg.castShadow = true; G.add(peg);
  }
  if (cathedral) {
    for (const sgn of [1, -1]) {
      const a = TOP + sgn * 30 * D2R, x0 = (Rout - .4) * Math.cos(a), y0 = (Rout - .4) * Math.sin(a);
      const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(x0, y0, 0), new THREE.Vector3(sgn * extX * .55, yG - pavD * .2, 0), new THREE.Vector3(sgn * extX * .42, yG - girdleT - pavD * .3, 0));
      addMesh(new THREE.TubeGeometry(curve, 16, t * .42, 8, false), headMat);
    }
  }

  // ----- three-stone side stones -----
  if (s.sides.style === 'three') {
    const meta = SIDE_META[s.sides.sideShape], Ws = W * s.sides.sideSize, Ls = Ws * meta.ratio, Ds = Ws * .62;
    const parts = gem(s.sides.sideShape, Ls, Ws, Ds, meta.facets, 'brilliant57'), sp = densePath(s.sides.sideShape, Ls, Ws);
    const sMat = s.sides.accent === 'diamond' ? gemMat(GEM[st.type === 'natural' || st.type === 'lab' ? st.type : 'lab'], Ws, Ds) : gemMat({ id: 'acc' + s.sides.accent, hex: ACCENT_HEX[s.sides.accent], ior: 1.77, disp: .08 }, Ws, Ds);
    const pr = clamp(.06 * Ws, .28, .5);
    for (const sgn of [1, -1]) {
      const g = new THREE.Group();
      const x = sgn * (extX / 2 + Ls / 2 + .35), ang = Math.atan2(x, yG);
      g.position.set(x, yG - Math.abs(x) * Math.tan(ang) * .35 - .3, 0); g.rotation.z = -ang * .55; g.rotation.y = sgn > 0 ? 0 : Math.PI;
      const sm = new THREE.Mesh(parts.geo, sMat); sm.userData.keepGeo = true; g.add(sm);
      const angles = s.sides.sideShape === 'trillion' ? [0, 120, 240] : s.sides.sideShape === 'pear' ? [0, 110, 180, 250] : [45, 135, 225, 315];
      for (const a of angles) { const q = pointAtAngle(sp, a); const isV = (s.sides.sideShape === 'pear' && a === 0) || s.sides.sideShape === 'trillion';
        const bx = q.p[0] + q.n[0] * pr * .5, bz = q.p[1] + q.n[1] * pr * .5, y0 = -parts.girdleT - parts.pavD * .6, y1 = parts.crownH * .5, h = y1 - y0;
        const pm = new THREE.Mesh(isV ? new THREE.CylinderGeometry(pr * 1.2, pr * 1.2, h, 3) : new THREE.CylinderGeometry(pr, pr, h, 8), headMat); pm.position.set(bx, (y0 + y1) / 2, bz); g.add(pm);
        const tp = new THREE.Mesh(new THREE.SphereGeometry(pr * 1.05, 10, 8), headMat); tp.position.set(bx - q.n[0] * pr * .5, y1 + pr * .1, bz - q.n[1] * pr * .5); g.add(tp); }
      g.add(new THREE.Mesh(railTube(resample(sp.pts, 48), -parts.girdleT - parts.pavD * .6, pr * .4), headMat));
      G.add(g);
    }
  }

  // ----- hidden (peekaboo) gem under the head -----
  if (s.details.hidden !== 'none') {
    const hex = HIDDEN_GEMS.find(h => h.id === s.details.hidden).hex, sz = clamp(.28 * W, 1.4, 2.4);
    const m = new THREE.Mesh(gem('round', sz, sz, sz * .6, 'brilliant', 'brilliant57').geo, meleeMat(hex, s.details.hidden === 'diamond')); m.userData.keepGeo = true;
    m.position.set(0, yG - girdleT - pavD * .55, Math.max(1.1, extZ / 2 * .5)); m.rotation.x = Math.PI / 2; G.add(m);
    const seat = new THREE.Mesh(new THREE.CylinderGeometry(sz * .55, sz * .55, .5, 12), headMat); seat.position.copy(m.position); seat.position.z -= .3; seat.rotation.x = Math.PI / 2; G.add(seat);
  }

  // ----- flush melee instances -----
  const meleeGeo = gem('round', 1, 1, .62, 'brilliant', 'melee').geo;
  const flush = (list, mat) => { if (!list.length) return; const inst = new THREE.InstancedMesh(meleeGeo, mat, list.length); list.forEach((m, i) => inst.setMatrixAt(i, m)); inst.userData.keepGeo = true; inst.castShadow = true; G.add(inst); };
  stoneGroup.updateMatrix();
  flush(melee.diamond, meleeMat(ACCENT_HEX.diamond, true));
  for (const k in melee.colored) flush(melee.colored[k], meleeMat(ACCENT_HEX[k], false));

  G.userData = { yG, Rout, dims, extX, extZ, yTop, crownH, pavD };
  return G;
}

function setRing(s) {
  if (!R3.scene) return;
  if (R3.ring) { R3.scene.remove(R3.ring); disposeGroup(R3.ring); }
  const g = buildRing(s);
  R3.ring = g; R3.scene.add(g);
  R3.ground.position.y = -g.userData.Rout - .05;
  const box = new THREE.Box3().setFromObject(g), c = box.getCenter(new THREE.Vector3()), sz = box.getSize(new THREE.Vector3());
  R3.target.set(0, c.y, 0);
  const radius = Math.max(sz.x, sz.y, sz.z) / 2;
  R3.fit = radius / Math.tan(R3.camera.fov / 2 * D2R) * 1.55;
}

// ---------- camera / controls ----------
const VIEWS = { hero: { t: -.62, p: 1.08, z: 1 }, top: { t: 0, p: .06, z: .92 }, side: { t: Math.PI / 2, p: 1.42, z: .86 }, front: { t: 0, p: 1.3, z: .9 } };
function applyCamera() {
  const { t, p } = R3.sph, d = R3.fit * R3.zoom, cam = R3.camera, tg = R3.target;
  cam.position.set(tg.x + d * Math.sin(p) * Math.sin(t), tg.y + d * Math.cos(p), tg.z + d * Math.sin(p) * Math.cos(t)); cam.lookAt(tg);
}
function goView(name) {
  const v = VIEWS[name]; R3.want = { ...v, t0: performance.now(), from: { t: R3.sph.t, p: R3.sph.p, z: R3.zoom } }; R3.auto = name === 'hero';
}
function bindControls(canvas) {
  const ptrs = new Map();
  canvas.addEventListener('pointerdown', e => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); R3.dragging = true; R3.auto = false; R3.want = null; R3.vel.t = R3.vel.p = 0; if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; R3.pinch = Math.hypot(a.x - b.x, a.y - b.y); } });
  canvas.addEventListener('pointermove', e => {
    if (!ptrs.has(e.pointerId)) return; const prev = ptrs.get(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 1) { const dx = e.clientX - prev.x, dy = e.clientY - prev.y; R3.sph.t -= dx * .008; R3.sph.p = clamp(R3.sph.p - dy * .006, .05, 1.55); R3.vel.t = -dx * .008; R3.vel.p = -dy * .006; }
    else if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); if (R3.pinch) R3.zoom = clamp(R3.zoom * R3.pinch / d, .4, 2.4); R3.pinch = d; }
  });
  const up = e => { ptrs.delete(e.pointerId); if (!ptrs.size) R3.dragging = false; R3.pinch = 0; };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', e => { e.preventDefault(); R3.zoom = clamp(R3.zoom * (1 + Math.sign(e.deltaY) * .08), .4, 2.4); R3.want = null; }, { passive: false });
  canvas.addEventListener('dblclick', () => goView('hero'));
}
function frame(now) {
  requestAnimationFrame(frame);
  if (!R3.renderer || document.hidden) return;
  if (R3.want) { const k = smooth01((now - R3.want.t0) / 650); const f = R3.want.from; R3.sph.t = lerp(f.t, R3.want.t, k); R3.sph.p = lerp(f.p, R3.want.p, k); R3.zoom = lerp(f.z, R3.want.z, k); if (k >= 1) R3.want = null; }
  else if (!R3.dragging) { R3.sph.t += R3.vel.t; R3.sph.p = clamp(R3.sph.p + R3.vel.p, .05, 1.55); R3.vel.t *= .9; R3.vel.p *= .9; if (R3.auto) R3.sph.t += .0022; }
  applyCamera(); R3.renderer.render(R3.scene, R3.camera);
}
function resizeGL(stage) {
  const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return;
  R3.renderer.setSize(w, h, false); R3.camera.aspect = w / h; R3.camera.updateProjectionMatrix();
}
