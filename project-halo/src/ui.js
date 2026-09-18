
// =====================================================================
//  Section 3: UI — character-creator slots, option trays, estimator, spec sheet
// =====================================================================
const $ = sel => document.querySelector(sel);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
let state = structuredClone(DEFAULT), currentSlot = 'stone', estimatorOn = false, buildQueued = false, glReady = false;

// ---------- persistence (per-viewer convenience only) ----------
function save() { try { localStorage.setItem('halo.design.v1', JSON.stringify(state)); } catch (e) { /* storage unavailable */ } }
function load() { try { const s = JSON.parse(localStorage.getItem('halo.design.v1')); if (s && s.stone && SHAPE[s.stone.shape] && GEM[s.stone.type]) return deepMerge(DEFAULT, s); } catch (e) { /* ignore */ } return null; }

// ---------- validation / auto-corrections ----------
function clampState() {
  const st = state.stone, sh = SHAPE[st.shape];
  st.ratio = clamp(+st.ratio || sh.def, sh.ratio[0], sh.ratio[1]);
  st.carat = clamp(+st.carat || 1, .25, 6);
  if (!GEM[st.type].origins.includes(st.origin)) st.origin = GEM[st.type].origins[0];
  if ((st.cutStyle === 'oldeuro' || st.cutStyle === 'rose') && !(st.shape === 'round' || st.shape === 'cushion' || st.shape === 'oval' || st.shape === 'pear')) st.cutStyle = 'brilliant';
  if (!sh.elong) st.orient = 'ns';
  state.band.width = clamp(+state.band.width || 1.8, 1.4, 4);
  state.fit.size = clamp(+state.fit.size || 6.5, 3, 13);
  state.sides.sideSize = clamp(+state.sides.sideSize || .38, .25, .55);
}
function notes(s) {
  const out = [], st = s.stone, g = GEM[st.type], sh = SHAPE[st.shape], dims = stoneDims(st);
  if (s.head.style === 'tension' && g.hard < 9) out.push({ slot: 'head', level: 'warn', text: `${g.label} is too soft for a tension setting. Tension needs Mohs 9+: diamond, moissanite, sapphire or ruby.` });
  if (g.fragile && !(s.head.style === 'bezel' || s.head.style === 'halfbezel')) out.push({ slot: 'head', level: 'warn', text: `${g.label} chips easily. Most jewelers will steer you to a bezel or half bezel to protect the edges.` });
  if (g.fragile && s.sides.style === 'pave') out.push({ slot: 'sides', level: 'warn', text: 'Pavé next to a fragile center stone is hard to service later. Channel-set stones are safer.' });
  if (s.band.profile === 'knife' && (s.sides.style === 'pave' || s.sides.style === 'channel')) out.push({ slot: 'band', level: 'warn', text: 'A knife-edge band has no flat top to hold stones. Switch to comfort fit, flat or half-round for pavé or channel.' });
  if ((s.sides.style === 'pave' || s.sides.style === 'channel') && s.band.width < 1.6) out.push({ slot: 'band', level: 'warn', text: 'Bands under 1.6 mm cannot hold accent stones safely. Widen the band or drop the accents.' });
  if ((s.sides.style === 'pave' || s.sides.style === 'channel') && s.sides.coverage === 'full') out.push({ slot: 'sides', level: 'info', text: 'Eternity bands cannot be resized. Get the finger size right before ordering.' });
  if (s.band.engrave !== 'none' && s.band.style === 'twist') out.push({ slot: 'band', level: 'warn', text: 'A twisted shank has no flat surface to engrave. The pattern is ignored on this band.' });
  if (s.band.engrave !== 'none' && (s.sides.style === 'pave' || s.sides.style === 'channel') && s.sides.coverage === 'full') out.push({ slot: 'band', level: 'warn', text: 'An eternity band is covered in stones. There is no metal left to engrave.' });
  if (s.band.engrave !== 'none' && s.band.width < 1.8) out.push({ slot: 'band', level: 'info', text: 'Engraving reads best on 2 mm or wider. On a narrow band the pattern gets lost.' });
  if (s.band.thickness < 1.3 && METAL[s.metal.id].family === 'gold' && METAL[s.metal.id].karat >= 18) out.push({ slot: 'band', level: 'warn', text: '18k gold is soft. Under 1.3 mm thick it will bend out of round with daily wear.' });
  if (s.band.shoulder === 'flare' && s.sides.style === 'three') out.push({ slot: 'band', level: 'info', text: 'Widening shoulders compete with side stones for space. Most three-stone rings taper instead.' });
  if (s.band.shoulder === 'taper' && bandSectionAt(s.band, 0).w < 1.5) out.push({ slot: 'band', level: 'warn', text: `Tapering to ${bandSectionAt(s.band, 0).w.toFixed(1)} mm at the head leaves little metal to hold the setting. Most jewelers stop around 1.5 mm.` });
  if (s.band.euro && (s.sides.style === 'pave' || s.sides.style === 'channel') && s.sides.coverage === 'full') out.push({ slot: 'band', level: 'warn', text: 'A euro shank needs a plain flat bottom, so it cannot carry a full eternity of stones.' });
  if (s.band.style === 'twist' && s.details.milgrain) out.push({ slot: 'details', level: 'info', text: 'Milgrain needs a flat edge to sit on, so it is skipped on a twisted band.' });
  if (s.head.profile === 'low' && (s.halo.style === 'hidden' || s.halo.style === 'both')) out.push({ slot: 'halo', level: 'info', text: 'A hidden halo needs a little height under the stone. Low profile will mostly hide it.' });
  if (sh.tips || st.shape === 'princess') out.push({ slot: 'head', level: 'ok', text: 'Pointed corners get V-prongs automatically so the tips are protected.' });
  if (st.type === 'moissanite' || (!(st.type === 'natural' || st.type === 'lab'))) out.push({ slot: 'size', level: 'info', text: `${g.label} weighs differently from diamond, so jewelers spec it by size: this stone is ${dims.L.toFixed(1)} × ${dims.W.toFixed(1)} mm.` });
  if (st.type === 'natural' && ((st.carat >= .9 && st.carat < 1) || (st.carat >= 1.85 && st.carat < 2))) out.push({ slot: 'size', level: 'ok', text: `Just under the ${st.carat < 1 ? '1.00' : '2.00'} ct line: same look, typically 10–20% cheaper than the round number.` });
  if (st.type === 'lab' && st.carat >= 3) out.push({ slot: 'size', level: 'ok', text: 'Lab-grown prices flatten above 3 ct. Going bigger costs little per carat.' });
  if (s.metal.id === 'pt' && s.band.width < 2) out.push({ slot: 'band', level: 'info', text: 'Platinum under 2 mm bends more easily than gold. Most jewelers recommend 2 mm+ in platinum.' });
  if (st.orient === 'ew' && sh.elong) out.push({ slot: 'shape', level: 'ok', text: 'East-west: the stone lies across the finger. Popular for marquise, oval and emerald cuts.' });
  if (sh.note) out.push({ slot: 'shape', level: 'info', text: sh.note });
  const prog = cutProgram(st.cutStyle, sh.facets);
  if (prog.facets >= 81) out.push({ slot: 'shape', level: 'info', text: `More facets is not the same as more sparkle. Above about 80, each facet gets small enough that the big high-contrast flashes break up into a finer glitter, and proprietary cuts resell at a discount. Worth it if you like the look, not as an upgrade.` });
  if (prog.culet >= .05) out.push({ slot: 'shape', level: 'ok', text: 'An open culet shows as a small circle through the table. On antique cuts that is correct, not a flaw.' });
  if (prog.flatBack) out.push({ slot: 'head', level: 'info', text: 'A flat-backed stone sits very low. Bezels and low baskets suit it; a tall cathedral head has nothing to grip.' });
  return out;
}

// ---------- tiny SVG glyphs ----------
const SVG = (inner, vb = '0 0 40 40') => `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${inner}</svg>`;
function cutGlyph(p) {
  const n = Math.max(6, Math.min(18, p.mains)), c = 20;
  if (p.flatBack) return SVG(`<polygon points="${Array.from({ length: n }, (_, i) => { const a = i / n * 2 * Math.PI; return `${(c + 14 * Math.cos(a)).toFixed(1)},${(c + 14 * Math.sin(a)).toFixed(1)}`; }).join(' ')}"/>${Array.from({ length: n }, (_, i) => { const a = i / n * 2 * Math.PI; return `<line x1="${c}" y1="${c}" x2="${(c + 14 * Math.cos(a)).toFixed(1)}" y2="${(c + 14 * Math.sin(a)).toFixed(1)}" opacity=".55"/>`; }).join('')}`);
  const rings = [14, p.table ? 14 - (14 - 14 * p.table) * .55 : 7, 14 * (p.table || .5)];
  const ring = r => `<polygon points="${Array.from({ length: n }, (_, i) => { const a = (i + (r === rings[1] ? .5 : 0)) / n * 2 * Math.PI; return `${(c + r * Math.cos(a)).toFixed(1)},${(c + r * Math.sin(a)).toFixed(1)}`; }).join(' ')}"/>`;
  const spokes = Array.from({ length: n }, (_, i) => { const a = i / n * 2 * Math.PI; return `<line x1="${(c + rings[2] * Math.cos(a)).toFixed(1)}" y1="${(c + rings[2] * Math.sin(a)).toFixed(1)}" x2="${(c + 14 * Math.cos(a)).toFixed(1)}" y2="${(c + 14 * Math.sin(a)).toFixed(1)}" opacity=".5"/>`; }).join('');
  return SVG(ring(rings[0]) + (p.step ? ring(rings[1]) : '') + ring(rings[2]) + (p.step ? '' : spokes) + (p.culet > .05 ? `<circle cx="${c}" cy="${c}" r="2" opacity=".6"/>` : ''));
}
function shapeSVG(id, ratio = 1, size = 40) {
  const pts = outline(id, 64); const r = ratio || 1, sx = Math.min(1, r) * 15, sz = Math.min(1, 1 / r) * 15, c = size / 2;
  const P = pts.map(([x, z]) => `${(c + x * sx).toFixed(1)},${(c + z * sz).toFixed(1)}`).join(' ');
  const T = pts.map(([x, z]) => `${(c + x * sx * .58).toFixed(1)},${(c + z * sz * .58).toFixed(1)}`).join(' ');
  const spokes = [0, 8, 16, 24, 32, 40, 48, 56].map(i => { const a = pts[i % pts.length]; return `<line x1="${(c + a[0] * sx * .58).toFixed(1)}" y1="${(c + a[1] * sz * .58).toFixed(1)}" x2="${(c + a[0] * sx).toFixed(1)}" y2="${(c + a[1] * sz).toFixed(1)}" opacity=".5"/>`; }).join('');
  return SVG(`<polygon points="${P}"/><polygon points="${T}" opacity=".7"/>${spokes}`, `0 0 ${size} ${size}`);
}
const swatch = (hex, gem = false) => `<span class="sw" style="background:${gem ? `radial-gradient(circle at 35% 30%, #fff8 0%, transparent 45%), radial-gradient(circle at 70% 75%, #0003 0%, transparent 50%), ${hex}` : `linear-gradient(135deg, #fff5 0%, transparent 40%, #0002 100%), ${hex}`}"></span>`;
const prongDots = (n, off = 0, r = 2.2, R = 13.5) => Array.from({ length: n }, (_, i) => { const a = (off + 360 / n * i) * D2R; return `<circle cx="${(20 + R * Math.cos(a)).toFixed(1)}" cy="${(20 + R * Math.sin(a)).toFixed(1)}" r="${r}" fill="currentColor" stroke="none"/>`; }).join('');
const GLYPH = {
  prong4: SVG(`<circle cx="20" cy="20" r="11"/>${prongDots(4, 45)}`), prong6: SVG(`<circle cx="20" cy="20" r="11"/>${prongDots(6, 30)}`),
  double: SVG(`<circle cx="20" cy="20" r="11"/>${prongDots(4, 38, 1.7)}${prongDots(4, 52, 1.7)}`), compass: SVG(`<circle cx="20" cy="20" r="11"/>${prongDots(4, 0)}`),
  trellis: SVG(`<circle cx="20" cy="20" r="10"/><path d="M8 32 L20 12 M32 32 L20 12 M8 8 L20 28 M32 8 L20 28" opacity=".7"/>`),
  bezel: SVG(`<circle cx="20" cy="20" r="10"/><circle cx="20" cy="20" r="14" stroke-width="3"/>`), halfbezel: SVG(`<circle cx="20" cy="20" r="10"/><path d="M8 13 A14 14 0 0 0 8 27 M32 13 A14 14 0 0 1 32 27" stroke-width="3"/>`),
  tension: SVG(`<circle cx="20" cy="20" r="9"/><path d="M4 14 L11 14 L11 26 L4 26 M36 14 L29 14 L29 26 L36 26" stroke-width="2.4"/>`),
  none: SVG(`<circle cx="20" cy="20" r="10"/>`), single: SVG(`<circle cx="20" cy="20" r="8"/>${prongDots(14, 0, 1.6, 13.5)}`),
  halo_double: SVG(`<circle cx="20" cy="20" r="6"/>${prongDots(12, 0, 1.4, 10.5)}${prongDots(18, 10, 1.4, 15)}`),
  hidden: SVG(`<path d="M8 17 L20 9 L32 17 L20 25 Z"/><path d="M20 25 L20 33 M8 17 L8 21 M32 17 L32 21"/>${[10, 14, 18, 22, 26, 30].map(x => `<circle cx="${x}" cy="27" r="1.5" fill="currentColor" stroke="none"/>`).join('')}`),
  both: SVG(`<circle cx="20" cy="17" r="6"/>${prongDots(12, 0, 1.4, 10)}${[13, 17, 21, 25].map(x => `<circle cx="${x + 1}" cy="31" r="1.4" fill="currentColor" stroke="none"/>`).join('')}`),
  sides_none: SVG(`<path d="M6 30 A16 16 0 0 1 34 30"/>`), pave: SVG(`<path d="M6 30 A16 16 0 0 1 34 30"/>${[8, 12, 17, 23, 28, 32].map((x, i) => `<circle cx="${x}" cy="${[26, 20, 16.5, 16.5, 20, 26][i]}" r="1.7" fill="currentColor" stroke="none"/>`).join('')}`),
  channel: SVG(`<path d="M5 31 A17 17 0 0 1 35 31 M9 31 A13 13 0 0 1 31 31"/>${[11, 16, 20, 24, 29].map((x, i) => `<rect x="${x - 1.5}" y="${[21, 16, 14.5, 16, 21][i]}" width="3" height="4" fill="currentColor" stroke="none"/>`).join('')}`),
  three: SVG(`<circle cx="20" cy="18" r="8"/><circle cx="7" cy="22" r="4.5"/><circle cx="33" cy="22" r="4.5"/>`),
  plain: SVG(`<circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="9"/>`), tapered: SVG(`<path d="M20 7 A13 13 0 1 0 20 33 A13 13 0 1 0 20 7 Z M20 9 A11 11 0 1 1 20 31 A11 11 0 1 1 20 9" fill-rule="evenodd"/>`),
  split: SVG(`<path d="M14 9 A13 13 0 1 0 26 9 M14 9 L16 5 M26 9 L24 5 M17 11 A9 9 0 1 0 23 11 M17 11 L15 7 M23 11 L25 7"/>`),
  twist: SVG(`<path d="M7 20 C 12 10, 18 30, 24 20 S 33 10, 33 20 M7 20 C 12 30, 18 10, 24 20 S 33 30, 33 20"/>`),
  bypass: SVG(`<path d="M22 8 A13 13 0 1 0 31 27 M31 27 L34 21 M22 8 L17 12"/>`),
  sh_even: SVG(`<path d="M4 33 A18 18 0 0 1 36 33" stroke-width="5"/>`),
  sh_taper: SVG(`<path d="M4 33 A18 18 0 0 1 36 33" stroke-width="2"/><path d="M4 33 A18 18 0 0 1 11 16" stroke-width="6"/><path d="M36 33 A18 18 0 0 0 29 16" stroke-width="6"/>`),
  sh_flare: SVG(`<path d="M4 33 A18 18 0 0 1 36 33" stroke-width="2.4"/><path d="M11 16 A18 18 0 0 1 29 16" stroke-width="7"/>`),
  sh_pinch: SVG(`<path d="M4 33 A18 18 0 0 1 36 33" stroke-width="2.4"/><path d="M16 12 A18 18 0 0 1 24 12" stroke-width="6"/><path d="M4 33 A18 18 0 0 1 9 19" stroke-width="5"/><path d="M36 33 A18 18 0 0 0 31 19" stroke-width="5"/>`),
  eng_none: SVG(`<rect x="5" y="15" width="30" height="11" rx="3"/>`),
  eng_rope: SVG(`<rect x="5" y="15" width="30" height="11" rx="3"/>${[9, 15, 21, 27, 33].map(x => `<path d="M${x - 4} 26 L${x + 2} 15" opacity=".75"/>`).join('')}`),
  eng_florentine: SVG(`<rect x="5" y="15" width="30" height="11" rx="3"/>${[8, 13, 18, 23, 28, 33].map(x => `<path d="M${x - 3} 26 L${x + 3} 15" opacity=".5"/><path d="M${x - 3} 15 L${x + 3} 26" opacity=".5"/>`).join('')}`),
  eng_deco: SVG(`<rect x="5" y="15" width="30" height="11" rx="3"/><path d="M8 24 L13 24 L13 20 L18 20 L18 17 L23 17 L23 20 L28 20 L28 24 L33 24" opacity=".8"/>`),
  eng_vine: SVG(`<rect x="5" y="15" width="30" height="11" rx="3"/><path d="M7 21 Q 13 15 19 21 T 33 21" opacity=".8"/><circle cx="13" cy="17.5" r="2" opacity=".7"/><circle cx="26" cy="24" r="2" opacity=".7"/>`),
  eng_scroll: SVG(`<rect x="5" y="15" width="30" height="11" rx="3"/><path d="M9 24 C 12 16, 18 16, 18 21 C 18 25, 13 25, 14 20" opacity=".8"/><path d="M22 17 C 25 25, 31 25, 31 20 C 31 16, 26 16, 27 21" opacity=".8"/>`),
  euro: SVG(`<path d="M20 7 A13 13 0 1 1 20 33 A13 13 0 1 1 20 7" opacity=".45"/><path d="M9 28 L31 28" stroke-width="4"/><path d="M8 24 A13 13 0 0 1 32 24" opacity=".45"/>`),
  comfort: SVG(`<rect x="8" y="13" width="24" height="14" rx="6"/>`), flat: SVG(`<rect x="8" y="14" width="24" height="12" rx="1"/>`), dome: SVG(`<path d="M8 27 L8 22 A12 12 0 0 1 32 22 L32 27 Z"/>`), knife: SVG(`<path d="M8 27 L8 22 L20 12 L32 22 L32 27 Z"/>`),
  low: SVG(`<path d="M4 34 A18 18 0 0 1 36 34"/><path d="M14 19 L20 13 L26 19 L20 25 Z"/>`), standard: SVG(`<path d="M4 34 A18 18 0 0 1 36 34"/><path d="M14 14 L20 8 L26 14 L20 20 Z"/><path d="M17 20 L17 24 M23 20 L23 24"/>`),
  high: SVG(`<path d="M4 34 A18 18 0 0 1 36 34"/><path d="M14 10 L20 4 L26 10 L20 16 Z"/><path d="M16 16 L16 23 M24 16 L24 23"/>`), cathedral: SVG(`<path d="M4 34 A18 18 0 0 1 36 34"/><path d="M14 12 L20 6 L26 12 L20 18 Z"/><path d="M8 24 C 12 18, 14 14, 15 13 M32 24 C 28 18, 26 14, 25 13"/>`),
  round: SVG(`<path d="M17 34 L17 14" stroke-width="4"/><circle cx="17" cy="11" r="3.5" fill="currentColor" stroke="none"/>`), claw: SVG(`<path d="M17 34 L17 14" stroke-width="4"/><path d="M13 14 L17 6 L21 14 Z" fill="currentColor" stroke="none"/>`), flat_tip: SVG(`<path d="M17 34 L17 14" stroke-width="4"/><rect x="11" y="9" width="12" height="5" fill="currentColor" stroke="none"/>`),
  half: SVG(`<circle cx="20" cy="20" r="13"/><path d="M7 20 A13 13 0 0 1 33 20" stroke-width="4"/>`), '3q': SVG(`<circle cx="20" cy="20" r="13"/><path d="M11 29 A13 13 0 1 1 29 29" stroke-width="4"/>`), full: SVG(`<circle cx="20" cy="20" r="13" stroke-width="4"/>`),
  ns: SVG(`<path d="M6 30 A16 16 0 0 1 34 30"/><ellipse cx="20" cy="15" rx="4.5" ry="7.5"/>`), ew: SVG(`<path d="M6 30 A16 16 0 0 1 34 30"/><ellipse cx="20" cy="15" rx="8" ry="4.5"/>`),
  match: SVG(`<ellipse cx="20" cy="20" rx="7" ry="9"/><ellipse cx="20" cy="20" rx="12" ry="14" stroke-dasharray="2 2.4"/>`), cushion: SVG(`<ellipse cx="20" cy="20" rx="7" ry="9"/><rect x="7" y="6" width="26" height="28" rx="8" stroke-dasharray="2 2.4"/>`), round_halo: SVG(`<ellipse cx="20" cy="20" rx="7" ry="9"/><circle cx="20" cy="20" r="14" stroke-dasharray="2 2.4"/>`),
  brilliant: SVG(`<circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="7"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="${20 + 7 * Math.cos(a * D2R)}" y1="${20 + 7 * Math.sin(a * D2R)}" x2="${20 + 13 * Math.cos(a * D2R)}" y2="${20 + 13 * Math.sin(a * D2R)}" opacity=".6"/>`).join('')}`),
  oldeuro: SVG(`<circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="4.5"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="${20 + 4.5 * Math.cos(a * D2R)}" y1="${20 + 4.5 * Math.sin(a * D2R)}" x2="${20 + 13 * Math.cos(a * D2R)}" y2="${20 + 13 * Math.sin(a * D2R)}" opacity=".6"/>`).join('')}`),
  rose: SVG(`<path d="M7 26 L33 26 L20 8 Z"/><path d="M7 26 L20 15 L33 26 M20 8 L20 26" opacity=".6"/>`),
  polish: SVG(`<circle cx="20" cy="20" r="13"/><path d="M12 14 Q 20 8 28 14" opacity=".6"/>`), satin: SVG(`<circle cx="20" cy="20" r="13"/><path d="M11 16 L29 16 M9 20 L31 20 M11 24 L29 24" opacity=".6"/>`), hammered: SVG(`<circle cx="20" cy="20" r="13"/><circle cx="15" cy="16" r="2.5" opacity=".6"/><circle cx="24" cy="15" r="2.5" opacity=".6"/><circle cx="19" cy="23" r="2.5" opacity=".6"/><circle cx="26" cy="24" r="2" opacity=".6"/><circle cx="13" cy="24" r="1.8" opacity=".6"/>`),
};
const glyph = k => GLYPH[k] || GLYPH.none;

// ---------- slot rail ----------
const SLOTS = [
  { id: 'stone', label: 'Stone', title: 'Center stone', desc: 'What the ring is built around. Diamond, lab diamond, or any gem you love.', value: s => GEM[s.stone.type].label + (GEM[s.stone.type].origins.length > 1 && s.stone.type !== 'natural' && s.stone.type !== 'lab' ? (s.stone.origin === 'lab' ? ' (lab)' : '') : ''), icon: s => swatch(GEM[s.stone.type].hex, true) },
  { id: 'shape', label: 'Shape', title: 'Shape & cut', desc: 'The outline of the stone, its proportions and how it is faceted.', value: s => `${SHAPE[s.stone.shape].label} · ${cutProgram(s.stone.cutStyle, SHAPE[s.stone.shape].facets).facets} facets${s.stone.orient === 'ew' && SHAPE[s.stone.shape].elong ? ' · E-W' : ''}`, icon: s => shapeSVG(s.stone.shape, s.stone.ratio) },
  { id: 'size', label: 'Size & grade', title: 'Size & grade', desc: 'Carat weight sets the millimetre size. Grades drive the price more than the look.', value: s => { const d = stoneDims(s.stone); return `${s.stone.carat.toFixed(2)} ct · ${d.L.toFixed(1)}×${d.W.toFixed(1)} mm`; }, icon: s => SVG(`<circle cx="20" cy="20" r="${(6 + Math.min(10, Math.cbrt(s.stone.carat) * 6)).toFixed(1)}"/><circle cx="20" cy="20" r="${(3 + Math.min(10, Math.cbrt(s.stone.carat) * 6) * .55).toFixed(1)}" opacity=".6"/>`) },
  { id: 'head', label: 'Setting', title: 'Setting', desc: 'How the stone is held and how high it sits.', value: s => `${HEADS.find(h => h.id === s.head.style).label} · ${PROFILES.find(p => p.id === s.head.profile).label.toLowerCase()}`, icon: s => glyph(s.head.style) },
  { id: 'halo', label: 'Halo', title: 'Halo', desc: 'A frame of small stones around, or hidden under, the center.', value: s => HALOS.find(h => h.id === s.halo.style).label + (s.halo.style !== 'none' && s.halo.accent !== 'diamond' ? ` · ${ACCENTS.find(a => a.id === s.halo.accent).label.toLowerCase()}` : ''), icon: s => glyph(s.halo.style === 'double' ? 'halo_double' : s.halo.style) },
  { id: 'sides', label: 'Side stones', title: 'Side stones', desc: 'Accents along the band or flanking the center.', value: s => { const x = SIDES.find(v => v.id === s.sides.style).label; return s.sides.style === 'pave' || s.sides.style === 'channel' ? `${x} · ${COVERAGES.find(c => c.id === s.sides.coverage).label.toLowerCase()}` : s.sides.style === 'three' ? `${x} · ${SIDE_SHAPES.find(v => v.id === s.sides.sideShape).label.toLowerCase()}s` : x; }, icon: s => glyph(s.sides.style === 'none' ? 'sides_none' : s.sides.style) },
  { id: 'band', label: 'Band', title: 'The band itself', desc: 'Width, thickness, how it changes on the way up to the stone, and what is cut into it.', value: s => { const sec = bandSectionAt(s.band, 0); const base = `${BANDS.find(b => b.id === s.band.style).label} · ${s.band.width.toFixed(1)}`; const head = Math.abs(sec.w - s.band.width) > .05 ? `→${sec.w.toFixed(1)}` : ''; return `${base}${head} mm${s.band.engrave !== 'none' ? ' · ' + ENGRAVINGS.find(e => e.id === s.band.engrave).label.toLowerCase() : ''}`; }, icon: s => glyph(s.band.style) },
  { id: 'metal', label: 'Metal', title: 'Metal & finish', desc: 'Alloy, colour and surface finish. Two-tone heads are common.', value: s => METAL[s.metal.id].label + (s.metal.head !== 'same' ? ` · ${METAL[s.metal.head].short} head` : '') + (s.metal.finish !== 'polish' ? ` · ${FINISHES.find(f => f.id === s.metal.finish).label.toLowerCase()}` : ''), icon: s => swatch(METAL[s.metal.id].hex) },
  { id: 'details', label: 'Details', title: 'Details', desc: 'The small things a jeweler asks about last, and that make it yours.', value: s => { const d = []; if (s.details.milgrain) d.push('milgrain'); if (s.details.hidden !== 'none') d.push('hidden ' + HIDDEN_GEMS.find(h => h.id === s.details.hidden).label.toLowerCase()); if (s.details.engraving) d.push(`“${s.details.engraving}”`); return d.length ? d.join(' · ') : 'None yet'; }, icon: s => SVG(`<path d="M8 30 L26 12 L30 16 L12 34 L7 35 Z"/><path d="M23 15 L27 19"/>`) },
  { id: 'fit', label: 'Ring size', title: 'Ring size', desc: 'US sizing. The jeweler will confirm before casting.', value: s => `US ${s.fit.size} · UK ${sizeUK(s.fit.size)} · EU ${sizeEU(s.fit.size)}`, icon: s => SVG(`<circle cx="20" cy="20" r="12"/><path d="M20 8 L20 12 M20 28 L20 32 M8 20 L12 20 M28 20 L32 20"/>`) },
];
function renderSlots() {
  const list = $('#slot-list'); list.innerHTML = '';
  for (const sl of SLOTS) {
    const b = el('button', 'slot'); b.setAttribute('role', 'tab'); b.dataset.slot = sl.id; b.setAttribute('aria-current', sl.id === currentSlot ? 'true' : 'false');
    b.innerHTML = `<span class="ico">${sl.icon(state)}</span><span><span class="lab">${sl.label}</span><span class="val">${esc(sl.value(state))}</span></span><svg class="chev" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3l5 5-5 5"/></svg>`;
    b.addEventListener('click', () => { currentSlot = sl.id; renderSlots(); renderTray(); if (innerWidth <= 820) $('#tray').scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    list.appendChild(b);
  }
}
function renderLooks() {
  const box = $('#looks'); box.innerHTML = '';
  for (const p of PRESETS) { const b = el('button', 'look', esc(p.label)); b.addEventListener('click', () => { state = deepMerge(DEFAULT, p.patch); update(); toast(`Loaded “${p.label}”. Tweak anything.`); }); box.appendChild(b); }
}

// ---------- tray builders ----------
function tiles(list, isOn, pick, o = {}) {
  const box = el('div', 'tiles' + (o.cols === 2 ? ' two' : ''));
  const base = estimatorOn ? estimate(state).total : 0;
  for (const it of list) {
    const b = el('button', 'tile'); b.setAttribute('aria-pressed', isOn(it) ? 'true' : 'false'); b.type = 'button';
    let delta = '';
    if (estimatorOn && o.apply && !isOn(it)) { const trial = structuredClone(state); o.apply(trial, it); const d = estimate(trial).total - base; if (Math.abs(d) >= 5) delta = `<span class="d ${d > 0 ? 'up' : 'down'}">${d > 0 ? '+' : '−'}${fmt$(Math.abs(d))}</span>`; }
    b.innerHTML = `${o.icon ? o.icon(it) : ''}<span class="t">${esc(it.label)}</span>${delta}`;
    if (it.desc) b.title = it.desc;
    b.addEventListener('click', () => { pick(it); update(); });
    box.appendChild(b);
  }
  return box;
}
function chips(list, isOn, pick, o = {}) {
  const box = el('div', 'chips');
  const base = estimatorOn && o.apply ? estimate(state).total : 0;
  for (const it of list) {
    const b = el('button', 'chip'); b.type = 'button'; b.setAttribute('aria-pressed', isOn(it) ? 'true' : 'false');
    let delta = '';
    if (estimatorOn && o.apply && !isOn(it)) { const trial = structuredClone(state); o.apply(trial, it); const d = estimate(trial).total - base; if (Math.abs(d) >= 5) delta = ` <span class="num" style="color:var(--muted);font-size:11px">${d > 0 ? '+' : '−'}${fmt$(Math.abs(d))}</span>`; }
    b.innerHTML = esc(it.label) + delta; b.addEventListener('click', () => { pick(it); update(); }); box.appendChild(b);
  }
  return box;
}
function group(title, node, hint) { const g = el('div', 'group'); g.innerHTML = `<div class="group-head"><span class="eyebrow">${esc(title)}</span>${hint ? `<span class="hint">${esc(hint)}</span>` : ''}</div>`; g.appendChild(node); return g; }
function range(o) {
  const g = el('div', 'range'); const id = 'r-' + o.id;
  g.innerHTML = `<label for="${id}">${esc(o.label)}</label><span class="ro" id="${id}-ro">${esc(o.fmt(o.value))}</span><input type="range" id="${id}" min="${o.min}" max="${o.max}" step="${o.step}" value="${o.value}">${o.sub ? `<span class="sub" id="${id}-sub">${esc(o.sub(o.value))}</span>` : ''}`;
  const inp = g.querySelector('input');
  inp.addEventListener('input', () => { const v = +inp.value; o.set(v); g.querySelector('.ro').textContent = o.fmt(v); if (o.sub) g.querySelector('.sub').textContent = o.sub(v); update({ keepTray: true }); });
  return g;
}
function switchRow(label, sub, on, set) {
  const r = el('div', 'switchrow'); r.innerHTML = `<div><div class="l">${esc(label)}</div>${sub ? `<div class="s">${esc(sub)}</div>` : ''}</div><button class="switch" role="switch" aria-checked="${on ? 'true' : 'false'}" aria-label="${esc(label)}"></button>`;
  r.querySelector('.switch').addEventListener('click', () => { set(!on); update(); }); return r;
}
function noteEl(n) { const d = el('div', 'note' + (n.level === 'ok' ? ' ok' : '')); d.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg><span>${esc(n.text)}</span>`; return d; }

function renderTray() {
  const sl = SLOTS.find(x => x.id === currentSlot), body = $('#tray-body'), keepTop = body.scrollTop; body.innerHTML = '';
  $('#tray-title').textContent = sl.title; $('#tray-desc').textContent = sl.desc;
  const st = state.stone, sh = SHAPE[st.shape], g = GEM[st.type];
  for (const n of notes(state).filter(n => n.slot === currentSlot)) body.appendChild(noteEl(n));
  const add = (t, n, h) => body.appendChild(group(t, n, h));
  if (currentSlot === 'stone') {
    const groups = [...new Set(GEMS.map(x => x.group))];
    for (const gr of groups) add(gr, tiles(GEMS.filter(x => x.group === gr), it => it.id === st.type, it => { st.type = it.id; st.origin = it.origins[0]; }, { icon: it => swatch(it.hex, true), apply: (s, it) => { s.stone.type = it.id; s.stone.origin = it.origins[0]; } }));
    if (g.origins.length > 1) add('Origin', chips([{ id: 'natural', label: 'Natural' }, { id: 'lab', label: 'Lab-created' }], it => it.id === st.origin, it => { st.origin = it.id; }, { apply: (s, it) => { s.stone.origin = it.id; } }), 'Same look, very different price');
    if (!(st.type === 'natural' || st.type === 'lab' || st.type === 'moissanite') && st.origin === 'natural') add('Quality', chips(TIERS, it => it.id === (st.tier || 'fine'), it => { st.tier = it.id; }, { apply: (s, it) => { s.stone.tier = it.id; } }), 'Colour saturation and clarity');
  }
  if (currentSlot === 'shape') {
    add('Shape', tiles(SHAPES, it => it.id === st.shape, it => { st.shape = it.id; st.ratio = it.def; }, { icon: it => shapeSVG(it.id, it.def), apply: (s, it) => { s.stone.shape = it.id; s.stone.ratio = it.def; } }));
    if (sh.elong) {
      add('Proportions', range({ id: 'ratio', label: 'Length to width', min: sh.ratio[0], max: sh.ratio[1], step: .01, value: st.ratio, fmt: v => `${v.toFixed(2)} : 1`, sub: v => { const d = stoneDims({ ...st, ratio: v }); return `${d.L.toFixed(1)} × ${d.W.toFixed(1)} mm · ${v < (sh.ratio[0] + sh.ratio[1]) / 2 - .05 ? 'fuller, rounder' : v > (sh.ratio[0] + sh.ratio[1]) / 2 + .05 ? 'longer, more finger coverage' : 'classic proportions'}`; }, set: v => { st.ratio = v; } }), 'The face of the stone');
      add('Orientation', tiles([{ id: 'ns', label: 'North–south' }, { id: 'ew', label: 'East–west' }], it => it.id === st.orient, it => { st.orient = it.id; }, { icon: it => glyph(it.id), cols: 2 }));
    }
    const progs = programsFor(st.shape);
    add('Facet architecture', tiles(progs, it => it.id === st.cutStyle, it => { st.cutStyle = it.id; }, { icon: it => cutGlyph(it), apply: (s, it) => { s.stone.cutStyle = it.id; } }), 'How many facets, and where');
    const cp = cutProgram(st.cutStyle, SHAPE[st.shape].facets);
    const cd = el('div', 'note ok'); cd.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg><span><b>${esc(cp.label)}, ${cp.facets} facets.</b> ${esc(cp.desc)}${cp.premium > 1 ? ` Cutting this costs about ${Math.round((cp.premium - 1) * 100)}% more than a standard cut.` : ''}</span>`;
    body.appendChild(cd);
  }
  if (currentSlot === 'size') {
    add('Carat weight', range({ id: 'carat', label: 'Carat', min: .25, max: 6, step: .01, value: st.carat, fmt: v => `${v.toFixed(2)} ct`, sub: v => { const d = stoneDims({ ...st, carat: v }); return `≈ ${d.L.toFixed(1)} × ${d.W.toFixed(1)} mm face, ${d.D.toFixed(1)} mm deep`; }, set: v => { st.carat = v; } }), 'Drag; the 3D stone resizes');
    if (st.type === 'natural' || st.type === 'lab') {
      add('Colour', chips(COLORS.map(c => ({ id: c, label: c })), it => it.id === st.color, it => { st.color = it.id; }, { apply: (s, it) => { s.stone.color = it.id; } }), 'D is colourless; G–H look white to the eye');
      add('Clarity', chips(CLARITY.map(c => ({ id: c, label: c })), it => it.id === st.clarity, it => { st.clarity = it.id; }, { apply: (s, it) => { s.stone.clarity = it.id; } }), 'VS1–VS2 is the value sweet spot');
      add('Cut grade', chips(CUTS, it => it.id === st.cut, it => { st.cut = it.id; }, { apply: (s, it) => { s.stone.cut = it.id; } }));
    }
  }
  if (currentSlot === 'head') {
    add('Head', tiles(HEADS, it => it.id === state.head.style, it => { state.head.style = it.id; }, { icon: it => glyph(it.id), apply: (s, it) => { s.head.style = it.id; } }));
    if (!['bezel', 'halfbezel', 'tension'].includes(state.head.style)) add('Prong tips', tiles(PRONG_TIPS, it => it.id === state.head.tip, it => { state.head.tip = it.id; }, { icon: it => glyph(it.id === 'flat' ? 'flat_tip' : it.id) }));
    add('Profile', tiles(PROFILES, it => it.id === state.head.profile, it => { state.head.profile = it.id; }, { icon: it => glyph(it.id), apply: (s, it) => { s.head.profile = it.id; }, cols: 2 }));
    if (state.head.profile === 'cathedral') add('Cathedral rise', range({ id: 'cath', label: 'How high the shoulders sweep', min: .2, max: 1.4, step: .05, value: state.band.cathRise, fmt: v => `${Math.round(v * 100)}%`, sub: v => v < .6 ? 'A gentle lift.' : v < 1 ? 'A classic arch.' : 'A dramatic sweep up to the stone.', set: v => { state.band.cathRise = v; } }));
  }
  if (currentSlot === 'halo') {
    add('Halo', tiles(HALOS, it => it.id === state.halo.style, it => { state.halo.style = it.id; }, { icon: it => glyph(it.id === 'double' ? 'halo_double' : it.id), apply: (s, it) => { s.halo.style = it.id; } }));
    if (state.halo.style === 'single' || state.halo.style === 'double' || state.halo.style === 'both') add('Halo outline', tiles(HALO_SHAPES, it => it.id === state.halo.shape, it => { state.halo.shape = it.id; }, { icon: it => glyph(it.id === 'round' ? 'round_halo' : it.id) }));
    if (state.halo.style !== 'none') add('Halo stones', tiles(ACCENTS, it => it.id === state.halo.accent, it => { state.halo.accent = it.id; }, { icon: it => swatch(it.hex, true), apply: (s, it) => { s.halo.accent = it.id; } }));
  }
  if (currentSlot === 'sides') {
    add('Style', tiles(SIDES, it => it.id === state.sides.style, it => { state.sides.style = it.id; }, { icon: it => glyph(it.id === 'none' ? 'sides_none' : it.id), apply: (s, it) => { s.sides.style = it.id; }, cols: 2 }));
    if (state.sides.style === 'pave' || state.sides.style === 'channel') add('Coverage', tiles(COVERAGES, it => it.id === state.sides.coverage, it => { state.sides.coverage = it.id; }, { icon: it => glyph(it.id), apply: (s, it) => { s.sides.coverage = it.id; } }));
    if (state.sides.style === 'three') {
      add('Side stone shape', tiles(SIDE_SHAPES, it => it.id === state.sides.sideShape, it => { state.sides.sideShape = it.id; }, { icon: it => shapeSVG(it.id, SIDE_META[it.id].ratio) }));
      add('Side stone size', range({ id: 'sideSize', label: 'Relative to center', min: .25, max: .55, step: .01, value: state.sides.sideSize, fmt: v => `${Math.round(v * 100)}%`, set: v => { state.sides.sideSize = v; } }));
    }
    if (state.sides.style !== 'none') add('Accent stones', tiles(ACCENTS, it => it.id === state.sides.accent, it => { state.sides.accent = it.id; }, { icon: it => swatch(it.hex, true), apply: (s, it) => { s.sides.accent = it.id; } }));
  }
  if (currentSlot === 'band') {
    add('Style', tiles(BANDS, it => it.id === state.band.style, it => { state.band.style = it.id; }, { icon: it => glyph(it.id), apply: (s, it) => { s.band.style = it.id; } }));
    add('Cross-section', tiles(BAND_PROFILES, it => it.id === state.band.profile, it => { state.band.profile = it.id; }, { icon: it => glyph(it.id), apply: (s, it) => { s.band.profile = it.id; }, cols: 2 }));
    add('Width at the back', range({ id: 'width', label: 'Band width', min: 1.2, max: 5, step: .1, value: state.band.width, fmt: v => `${v.toFixed(1)} mm`, sub: v => v < 1.7 ? 'Dainty. Makes the stone look bigger, wears faster.' : v < 2.3 ? 'The everyday standard.' : v < 3.2 ? 'Substantial, modern.' : 'Cigar band territory.', set: v => { state.band.width = v; } }));
    add('Thickness', range({ id: 'thick', label: 'Metal depth', min: 1, max: 2.8, step: .05, value: state.band.thickness, fmt: v => `${v.toFixed(2)} mm`, sub: v => v < 1.3 ? 'Thin. Fine in platinum, risky in soft gold.' : v < 1.8 ? 'Normal for an engagement ring.' : 'Heavy and hard-wearing. Costs metal.', set: v => { state.band.thickness = v; } }), 'How far it stands off the finger');
    add('On the way up to the stone', tiles(SHOULDERS, it => it.id === state.band.shoulder, it => { state.band.shoulder = it.id; }, { icon: it => glyph('sh_' + it.id), apply: (s, it) => { s.band.shoulder = it.id; }, cols: 2 }));
    if (state.band.shoulder !== 'even') {
      add('How much', range({ id: 'shamt', label: 'Strength', min: 0, max: 1, step: .05, value: state.band.shoulderAmt, fmt: v => `${Math.round(v * 100)}%`, sub: v => { const sec = bandSectionAt({ ...state.band, shoulderAmt: v }, 0); return `${state.band.width.toFixed(1)} mm at the back → ${sec.w.toFixed(1)} mm at the head`; }, set: v => { state.band.shoulderAmt = v; } }));
      add('How far it reaches', range({ id: 'reach', label: 'Shoulder length', min: 25, max: 140, step: 5, value: state.band.reach, fmt: v => `${v}°`, sub: v => v < 50 ? 'A short shoulder right at the head.' : v < 90 ? 'A natural sweep along the top third.' : 'A long taper running most of the way around.', set: v => { state.band.reach = v; } }));
    }
    body.appendChild(switchRow('Euro shank', 'Flat, squared-off bottom. Stops the ring spinning and wears evenly.', state.band.euro, v => { state.band.euro = v; }));
    add('Engraved surface', tiles(ENGRAVINGS, it => it.id === state.band.engrave, it => { state.band.engrave = it.id; }, { icon: it => glyph('eng_' + it.id), apply: (s, it) => { s.band.engrave = it.id; } }), 'Cut into the outside of the band');
    const eg = ENGRAVINGS.find(e => e.id === state.band.engrave);
    if (eg.id !== 'none') { const d = el('div', 'note ok'); d.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg><span>${esc(eg.desc)}${eg.hand ? ' Expect two to three weeks on top of the build.' : ''}</span>`; body.appendChild(d); }
  }
  if (currentSlot === 'metal') {
    add('Metal', tiles(METALS, it => it.id === state.metal.id, it => { state.metal.id = it.id; }, { icon: it => swatch(it.hex), apply: (s, it) => { s.metal.id = it.id; } }));
    add('Head metal', chips(HEAD_METALS, it => it.id === state.metal.head, it => { state.metal.head = it.id; }, { apply: (s, it) => { s.metal.head = it.id; } }), 'White heads make white stones read whiter');
    add('Finish', tiles(FINISHES, it => it.id === state.metal.finish, it => { state.metal.finish = it.id; }, { icon: it => glyph(it.id), apply: (s, it) => { s.metal.finish = it.id; } }));
  }
  if (currentSlot === 'details') {
    body.appendChild(switchRow('Milgrain edges', 'Tiny beaded border along the band. Vintage feel.', state.details.milgrain, v => { state.details.milgrain = v; }));
    add('Hidden gem', tiles(HIDDEN_GEMS, it => it.id === state.details.hidden, it => { state.details.hidden = it.id; }, { icon: it => it.hex ? swatch(it.hex, true) : glyph('none'), apply: (s, it) => { s.details.hidden = it.id; } }), 'A secret stone under the head');
    const f = el('div', 'field group'); f.innerHTML = `<div class="group-head"><span class="eyebrow">Engraving</span><span class="hint">Inside the band</span></div><input type="text" id="engraving" maxlength="40" placeholder="e.g. 14.02.27 · always" value="${esc(state.details.engraving)}">`;
    f.querySelector('input').addEventListener('input', e => { state.details.engraving = e.target.value; update({ keepTray: true }); });
    body.appendChild(f);
    if (state.details.engraving) body.appendChild(switchRow('Hand engraved', 'By an engraver, not a machine. Slower, more character.', state.details.hand, v => { state.details.hand = v; }));
  }
  if (currentSlot === 'fit') {
    add('US size', range({ id: 'size', label: 'Finger size', min: 3, max: 13, step: .25, value: state.fit.size, fmt: v => `US ${v}`, sub: v => `Inner diameter ${ringID(v).toFixed(1)} mm · UK ${sizeUK(v)} · EU ${sizeEU(v)} · Most common: 6 (women), 10 (men)`, set: v => { state.fit.size = v; } }));
    const info = el('div', 'note ok'); info.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg><span>Not sure? Jewelers can size a plain or half-pavé band up or down about two sizes later. Eternity and tension rings cannot be resized.</span>`; body.appendChild(info);
  }
  body.scrollTop = keepTop;
}

// ---------- summary / estimator ----------
function summaryText(s) {
  const st = s.stone, d = stoneDims(st), g = GEM[st.type];
  const parts = [`${st.carat.toFixed(2)} ct ${SHAPE[st.shape].label.toLowerCase()} ${g.label.toLowerCase()}${st.type !== 'natural' && st.type !== 'lab' && st.origin === 'lab' ? ' (lab)' : ''}`];
  parts.push(HEADS.find(h => h.id === s.head.style).label.toLowerCase() + (s.head.profile !== 'standard' ? ` ${PROFILES.find(p => p.id === s.head.profile).label.toLowerCase()}` : ''));
  if (s.halo.style !== 'none') parts.push(HALOS.find(h => h.id === s.halo.style).label.toLowerCase());
  if (s.sides.style !== 'none') parts.push(SLOTS.find(x => x.id === 'sides').value(s).toLowerCase());
  const secH = bandSectionAt(s.band, 0);
  parts.push(`${BANDS.find(b => b.id === s.band.style).label.toLowerCase()} ${s.band.width.toFixed(1)}${Math.abs(secH.w - s.band.width) > .05 ? `→${secH.w.toFixed(1)}` : ''} mm band`);
  if (s.band.engrave !== 'none') parts.push(`${ENGRAVINGS.find(e => e.id === s.band.engrave).label.toLowerCase()} engraving`);
  parts.push(METAL[s.metal.id].label);
  return { text: parts.join(' · '), mm: `${d.L.toFixed(1)}×${d.W.toFixed(1)} mm · US ${s.fit.size}` };
}
function updateSummary() { const s = summaryText(state); $('#summary').innerHTML = `${esc(s.text)}<span class="num">${esc(s.mm)}</span>`; }
function updateEstimate() {
  const card = $('#est-card'); $('#est-toggle').setAttribute('aria-pressed', estimatorOn); $('#est-switch').setAttribute('aria-checked', estimatorOn);
  card.hidden = !estimatorOn; if (!estimatorOn) return;
  const e = estimate(state);
  card.innerHTML = `<div class="eyebrow"><span>Estimated jeweler quote</span><span class="sample">demo model</span></div>
    <div class="big">${fmt$(e.low)}<small>to ${fmt$(e.high)}</small></div>
    <div class="mid">Midpoint ${fmt$(e.total)}. Materials at today’s metal prices plus typical custom labor; the spread is how much jewelers differ.</div>
    <div class="lines">${e.lines.map(l => `<span class="k">${esc(l.k)}<small>${esc(l.sub)}</small></span><span class="v">${fmt$(l.v)}</span>`).join('')}<span class="k tot">Estimate</span><span class="v tot">${fmt$(e.total)}</span></div>
    <details><summary>How this is estimated</summary><p>Center stone from per-carat curves against a colour and clarity ladder, natural and lab priced separately. Metal from the band’s real cross-section, integrated around the shank, times alloy density and today’s spot price, with casting loss and a retail multiplier. Labor from typical custom-shop line items. Option chips show the price change before you commit.</p><p>The demo’s grade ladder is a placeholder derived from a published benchmark list and has to be refitted from observed listing prices before this is used commercially. Every constant lives in one table in the source.</p></details>`;
}
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove('show'), 2400); }

// ---------- spec sheet / jeweler drawer ----------
function specRows(s) {
  const st = s.stone, d = stoneDims(st), g = GEM[st.type], c = stoneCounts(s, d), md = meleeFor(d.W);
  const rows = [['sec', 'Center stone'],
    ['Stone', g.label + (g.origins.length > 1 && st.type !== 'natural' && st.type !== 'lab' ? ` (${st.origin === 'lab' ? 'lab-created' : 'natural'})` : '') + (!(st.type === 'natural' || st.type === 'lab' || st.type === 'moissanite') && st.origin === 'natural' ? `, ${TIERS.find(t => t.id === (st.tier || 'fine')).label.toLowerCase()} quality` : '')],
    ['Shape', `${SHAPE[st.shape].label}, ${cutProgram(st.cutStyle, SHAPE[st.shape].facets).label.toLowerCase()}`],
    ['Faceting', `${cutProgram(st.cutStyle, SHAPE[st.shape].facets).facets} facets (${cutProgram(st.cutStyle, SHAPE[st.shape].facets).mains} pavilion mains)`],
    ['Size', `${st.carat.toFixed(2)} ct ≈ ${d.L.toFixed(2)} × ${d.W.toFixed(2)} × ${d.D.toFixed(2)} mm (L:W ${d.ratio.toFixed(2)})`],
    ['Orientation', st.orient === 'ew' && SHAPE[st.shape].elong ? 'East–west' : 'North–south']];
  if (st.type === 'natural' || st.type === 'lab') rows.push(['Grade', `${st.color} colour, ${st.clarity} clarity, ${CUTS.find(x => x.id === st.cut).label.toLowerCase()} cut`]);
  rows.push(['sec', 'Setting'], ['Head', `${HEADS.find(h => h.id === s.head.style).label}${['bezel', 'halfbezel', 'tension'].includes(s.head.style) ? '' : `, ${PRONG_TIPS.find(t => t.id === s.head.tip).label.toLowerCase()} tips`}${SHAPE[st.shape].tips || st.shape === 'princess' ? ', V-prongs on points' : ''}`], ['Profile', PROFILES.find(p => p.id === s.head.profile).label + (s.head.profile === 'cathedral' ? `, ${Math.round(s.band.cathRise * 100)}% rise` : '')]);
  rows.push(['Halo', s.halo.style === 'none' ? 'None' : `${HALOS.find(h => h.id === s.halo.style).label}, ${c.halo} × ~${md.toFixed(1)} mm ${ACCENTS.find(a => a.id === s.halo.accent).label.toLowerCase()}${s.halo.style !== 'hidden' ? `, ${HALO_SHAPES.find(h => h.id === s.halo.shape).label.toLowerCase()} outline` : ''}`]);
  rows.push(['Side stones', s.sides.style === 'none' ? 'None' : s.sides.style === 'three' ? `Three-stone, 2 × ${SIDE_SHAPES.find(x => x.id === s.sides.sideShape).label.toLowerCase()} at ${Math.round(s.sides.sideSize * 100)}% of center width, ${ACCENTS.find(a => a.id === s.sides.accent).label.toLowerCase()}` : `${SIDES.find(x => x.id === s.sides.style).label}, ${COVERAGES.find(x => x.id === s.sides.coverage).label.toLowerCase()} coverage, ${c.band} × ~${Math.min(md, s.band.width - .55).toFixed(1)} mm ${ACCENTS.find(a => a.id === s.sides.accent).label.toLowerCase()}`]);
  const secHead = bandSectionAt(s.band, 0), secBack = bandSectionAt(s.band, Math.PI);
  rows.push(['sec', 'Band & metal'],
    ['Band', `${BANDS.find(b => b.id === s.band.style).label}, ${BAND_PROFILES.find(p => p.id === s.band.profile).label.toLowerCase()}${s.band.euro ? ', euro shank' : ''}`],
    ['Section', `${secBack.w.toFixed(2)} × ${secBack.t.toFixed(2)} mm at the base → ${secHead.w.toFixed(2)} × ${secHead.t.toFixed(2)} mm at the head`],
    ['Shoulder', s.band.shoulder === 'even' ? 'Even width' : `${SHOULDERS.find(x => x.id === s.band.shoulder).label}, ${Math.round(s.band.shoulderAmt * 100)}% over ${s.band.reach}°`],
    ['Engraving', s.band.engrave === 'none' ? 'None' : `${ENGRAVINGS.find(e => e.id === s.band.engrave).label}${ENGRAVINGS.find(e => e.id === s.band.engrave).hand ? ', hand cut' : ', machine cut'}`], ['Metal', METAL[s.metal.id].label + (s.metal.head !== 'same' ? `, ${METAL[s.metal.head].label} head` : '')], ['Finish', FINISHES.find(f => f.id === s.metal.finish).label], ['Ring size', `US ${s.fit.size} (UK ${sizeUK(s.fit.size)}, EU ${sizeEU(s.fit.size)}, ${ringID(s.fit.size).toFixed(1)} mm inner diameter)`]);
  const det = []; if (s.details.milgrain) det.push('Milgrain edges'); if (s.details.hidden !== 'none') det.push(`Hidden ${HIDDEN_GEMS.find(h => h.id === s.details.hidden).label.toLowerCase()} under the head`); if (s.details.engraving) det.push(`${s.details.hand ? 'Hand' : 'Machine'} engraving: “${s.details.engraving}”`);
  rows.push(['sec', 'Details'], ['Extras', det.length ? det.join('; ') : 'None']);
  return rows;
}
function specJSON(s) { const d = stoneDims(s.stone), c = stoneCounts(s, d); return JSON.stringify({ project: 'halo-demo', version: 1, design: s, derived: { stone_mm: { L: +d.L.toFixed(2), W: +d.W.toFixed(2), D: +d.D.toFixed(2) }, inner_diameter_mm: +ringID(s.fit.size).toFixed(2), accent_counts: c, estimate_usd: estimatorOn ? Math.round(estimate(s).total) : undefined } }, null, 2); }
const SAMPLE_JEWELERS = [
  { n: 'Atelier Marrow', m: 'Brooklyn, NY · 4.9 ★ · 212 custom rings', t: ['Hand-set pavé', 'Platinum', 'Antique cuts'] },
  { n: 'Ferro & Daughters', m: 'Chicago, IL · 4.8 ★ · 98 custom rings', t: ['Bezels', 'Colored stones', 'CAD in 5 days'] },
  { n: 'Northlight Goldsmiths', m: 'Portland, OR · 5.0 ★ · 61 custom rings', t: ['Recycled gold', 'Hidden halos', 'Engraving'] },
];
function openDrawer() {
  const body = $('#drawer-body'); body.innerHTML = '';
  const s = summaryText(state);
  body.appendChild(el('div', null, `<div class="eyebrow">Your design</div><p style="margin:6px 0 0;font-family:var(--display);font-size:18px;line-height:1.3">${esc(s.text)}</p>`));
  const grid = el('div', 'spec'); grid.innerHTML = specRows(state).map(([k, v]) => k === 'sec' ? `<div class="sec eyebrow">${esc(v)}</div>` : `<div class="k">${esc(k)}</div><div class="v">${esc(v)}</div>`).join(''); body.appendChild(grid);
  const acts = el('div', null); acts.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap';
  const copySpec = el('button', 'btn primary', 'Copy spec sheet'); copySpec.addEventListener('click', () => copyText(specRows(state).map(([k, v]) => k === 'sec' ? `\n${v.toUpperCase()}` : `${k}: ${v}`).join('\n').trim(), 'Spec sheet copied'));
  const copyJson = el('button', 'btn', 'Copy JSON'); copyJson.addEventListener('click', () => copyText(specJSON(state), 'JSON copied'));
  acts.append(copySpec, copyJson); body.appendChild(acts);
  const ta = el('textarea', 'json'); ta.readOnly = true; ta.value = specJSON(state); ta.setAttribute('aria-label', 'Design JSON'); body.appendChild(group('Machine-readable spec', ta, 'What a jeweler’s CAD desk would receive'));
  const jw = el('div', null); jw.style.cssText = 'display:flex;flex-direction:column;gap:10px';
  for (const j of SAMPLE_JEWELERS) { const c = el('div', 'jeweler'); c.innerHTML = `<div class="av">${esc(j.n[0])}</div><div><div class="n">${esc(j.n)}</div><div class="m">${esc(j.m)}</div><div class="tags">${j.t.map(t => `<span>${esc(t)}</span>`).join('')}</div></div><button class="btn">Request quote</button>`; c.querySelector('button').addEventListener('click', () => toast('Demo only: this would send your spec to the jeweler.')); jw.appendChild(c); }
  const head = el('div', 'group-head'); head.innerHTML = `<span class="eyebrow">Matched jewelers</span><span class="sample">sample data</span>`;
  const wrap = el('div', 'group'); wrap.append(head, jw); body.appendChild(wrap);
  $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden', 'false'); $('#scrim').classList.add('open');
}
function closeDrawer() { $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden', 'true'); $('#scrim').classList.remove('open'); }
async function copyText(text, msg) { try { await navigator.clipboard.writeText(text); toast(msg); } catch (e) { toast('Copy blocked here; select the text and copy manually.'); } }

// ---------- randomize ----------
const pick = a => a[Math.floor(Math.random() * a.length)];
function randomize() {
  const s = structuredClone(DEFAULT);
  const g = pick(GEMS.filter(x => !x.fragile || Math.random() < .3)); s.stone.type = g.id; s.stone.origin = pick(g.origins);
  const sh = pick(SHAPES); s.stone.shape = sh.id; s.stone.ratio = +lerp(sh.ratio[0], sh.ratio[1], Math.random()).toFixed(2);
  s.stone.carat = +pick([.75, 1, 1.25, 1.5, 1.8, 2, 2.5, 3]).toFixed(2); s.stone.orient = sh.elong && Math.random() < .2 ? 'ew' : 'ns';
  s.stone.cutStyle = pick(programsFor(sh.id).concat(Array(4).fill({ id: sh.facets === 'step' ? 'step58' : 'brilliant57' }))).id;
  s.head.style = g.fragile ? pick(['bezel', 'halfbezel']) : pick(HEADS.filter(h => h.id !== 'tension' || g.hard >= 9)).id; s.head.tip = pick(PRONG_TIPS).id; s.head.profile = pick(PROFILES).id;
  s.halo.style = pick(['none', 'none', 'single', 'hidden', 'double', 'both']); s.halo.shape = pick(HALO_SHAPES).id; s.halo.accent = Math.random() < .8 ? 'diamond' : pick(ACCENTS).id;
  s.sides.style = pick(['none', 'pave', 'pave', 'channel', 'three']); s.sides.coverage = pick(COVERAGES).id; s.sides.sideShape = pick(SIDE_SHAPES).id; s.sides.sideSize = +lerp(.3, .5, Math.random()).toFixed(2); s.sides.accent = Math.random() < .85 ? 'diamond' : pick(ACCENTS).id;
  s.band.style = pick(BANDS).id; s.band.profile = s.sides.style === 'pave' || s.sides.style === 'channel' ? pick(['comfort', 'flat', 'dome']) : pick(BAND_PROFILES).id; s.band.width = +(s.sides.style === 'none' ? lerp(1.5, 3.2, Math.random()) : lerp(1.7, 2.6, Math.random())).toFixed(1);
  s.band.thickness = +lerp(1.3, 2, Math.random()).toFixed(2); s.band.shoulder = pick(['even', 'even', 'taper', 'flare', 'pinch']); s.band.shoulderAmt = +lerp(.3, .9, Math.random()).toFixed(2); s.band.reach = Math.round(lerp(40, 110, Math.random()) / 5) * 5;
  s.band.euro = Math.random() < .2; s.band.engrave = s.band.style === 'twist' || (s.sides.style !== 'none' && s.sides.coverage === 'full') ? 'none' : (Math.random() < .3 ? pick(ENGRAVINGS).id : 'none'); s.band.cathRise = +lerp(.4, 1.2, Math.random()).toFixed(2);
  s.metal.id = pick(METALS).id; s.metal.head = Math.random() < .25 ? pick(HEAD_METALS).id : 'same'; s.metal.finish = Math.random() < .8 ? 'polish' : pick(FINISHES).id;
  s.details.milgrain = Math.random() < .2; s.details.hidden = Math.random() < .25 ? pick(HIDDEN_GEMS).id : 'none';
  s.fit.size = pick([5, 5.5, 6, 6.5, 7, 7.5]);
  state = s; update(); toast('Rolled a new ring. Nothing here is final.');
}

// ---------- update cycle ----------
function scheduleBuild() { if (!glReady || buildQueued) return; buildQueued = true; requestAnimationFrame(() => { buildQueued = false; try { setRing(state); } catch (e) { console.error(e); showStageMsg('Could not build this combination', e.message); } }); }
function update(o = {}) { clampState(); renderSlots(); if (!o.keepTray) renderTray(); updateSummary(); updateEstimate(); scheduleBuild(); save(); }
function showStageMsg(title, text) { const m = $('#stage-msg'); m.hidden = false; m.innerHTML = `<div><b>${esc(title)}</b>${esc(text)}</div>`; }

// ---------- theme ----------
function setTheme(t) { if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; try { t ? localStorage.setItem('halo.theme', t) : localStorage.removeItem('halo.theme'); } catch (e) { /* ignore */ } setStageColor(); }
function toggleTheme() { const dark = document.documentElement.dataset.theme === 'dark' || (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches); setTheme(dark ? 'light' : 'dark'); }

// ---------- boot ----------
async function init() {
  try { const t = localStorage.getItem('halo.theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) { /* ignore */ }
  const saved = load(); if (saved) state = saved; clampState();
  renderLooks(); renderSlots(); renderTray(); updateSummary(); updateEstimate();
  $('#est-toggle').addEventListener('click', () => { estimatorOn = !estimatorOn; updateEstimate(); renderTray(); });
  $('#btn-spec').addEventListener('click', openDrawer); $('#drawer-close').addEventListener('click', closeDrawer); $('#scrim').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  $('#btn-random').addEventListener('click', randomize);
  $('#btn-reset').addEventListener('click', () => { state = structuredClone(DEFAULT); update(); toast('Back to the starting ring.'); });
  $('#btn-theme').addEventListener('click', toggleTheme);
  $('#btn-copy-summary').addEventListener('click', () => { const s = summaryText(state); copyText(`${s.text} · ${s.mm}`, 'Summary copied'); });
  $('#views').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; for (const x of $('#views').children) x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); goView(b.dataset.view); });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setStageColor);

  const stage = $('#stage'), canvas = $('#gl');
  try { THREE = await import('https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js'); }
  catch (e) { showStageMsg('3D preview could not load', 'The viewer needs the three.js library from cdn.jsdelivr.net. Check the connection and reload; the options and estimate still work.'); return; }
  try {
    initGL(canvas); bindControls(canvas); resizeGL(stage); new ResizeObserver(() => resizeGL(stage)).observe(stage);
    glReady = true; applyCamera(); setRing(state); requestAnimationFrame(frame);
    // Console handle for collaborators: __halo.state, tweak it, then __halo.update().
    window.__halo = { R3, get state() { return state; }, set state(v) { state = deepMerge(DEFAULT, v); update(); },
      update, estimate, stoneDims, bandSectionAt, setRing, goView, randomize, DEFAULT, PRESETS, THREE };
    setTimeout(() => { const h = $('#hint-rot'); if (h) h.style.opacity = '0'; }, 6000);
  } catch (e) { console.error(e); showStageMsg('3D preview unavailable', 'WebGL is not available in this browser. ' + e.message); }
}
init();
