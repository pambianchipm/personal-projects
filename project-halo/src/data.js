// =====================================================================
//  PROJECT HALO — demo ring builder
//  Section 1: option catalogue, presets, sizing math, price model
// =====================================================================

const GEMS = [
  // id, label, group, hex (display), ior, dispersion, hardness(Mohs), lab-able?, defaultOrigin
  { id:'natural',    label:'Natural diamond',   group:'Diamond',  hex:'#f4f6fb', ior:2.42, disp:.35, hard:10,  origins:['natural'] },
  { id:'lab',        label:'Lab diamond',       group:'Diamond',  hex:'#f2f7ff', ior:2.42, disp:.35, hard:10,  origins:['lab'] },
  { id:'moissanite', label:'Moissanite',        group:'Diamond alternatives', hex:'#f6f9ff', ior:2.65, disp:.6, hard:9.25, origins:['lab'] },
  { id:'whiteSapph', label:'White sapphire',    group:'Diamond alternatives', hex:'#eef0f2', ior:1.77, disp:.08, hard:9, origins:['natural','lab'] },
  { id:'saltpepper', label:'Salt & pepper',     group:'Diamond alternatives', hex:'#9a9aa2', ior:2.42, disp:.1, hard:10, origins:['natural'], rough:.25, opaque:.55 },
  { id:'blackDia',   label:'Black diamond',     group:'Diamond alternatives', hex:'#17171c', ior:2.42, disp:0, hard:10, origins:['natural'], rough:.1, opaque:.95 },
  { id:'yellowDia',  label:'Yellow diamond',    group:'Fancy diamonds', hex:'#f2d45a', ior:2.42, disp:.3, hard:10, origins:['natural','lab'] },
  { id:'pinkDia',    label:'Pink diamond',      group:'Fancy diamonds', hex:'#f2b8c9', ior:2.42, disp:.3, hard:10, origins:['natural','lab'] },
  { id:'sapphire',   label:'Blue sapphire',     group:'Colored stones', hex:'#1d3fa8', ior:1.77, disp:.08, hard:9, origins:['natural','lab'] },
  { id:'pinkSapph',  label:'Pink sapphire',     group:'Colored stones', hex:'#e66a9e', ior:1.77, disp:.08, hard:9, origins:['natural','lab'] },
  { id:'tealSapph',  label:'Teal sapphire',     group:'Colored stones', hex:'#1f7f86', ior:1.77, disp:.08, hard:9, origins:['natural','lab'] },
  { id:'ruby',       label:'Ruby',              group:'Colored stones', hex:'#b3102e', ior:1.77, disp:.08, hard:9, origins:['natural','lab'] },
  { id:'emerald',    label:'Emerald',           group:'Colored stones', hex:'#0e8a4e', ior:1.58, disp:.05, hard:7.5, origins:['natural','lab'], fragile:true },
  { id:'alexandrite',label:'Alexandrite',       group:'Colored stones', hex:'#5d7f6a', ior:1.75, disp:.07, hard:8.5, origins:['natural','lab'] },
  { id:'spinel',     label:'Grey spinel',       group:'Colored stones', hex:'#8d8aa0', ior:1.72, disp:.1, hard:8, origins:['natural'] },
  { id:'morganite',  label:'Morganite',         group:'Pastels', hex:'#f4b9a8', ior:1.58, disp:.05, hard:7.75, origins:['natural'] },
  { id:'aquamarine', label:'Aquamarine',        group:'Pastels', hex:'#9dd6e6', ior:1.58, disp:.05, hard:7.75, origins:['natural'] },
  { id:'tourmaline', label:'Green tourmaline',  group:'Pastels', hex:'#3f9a6a', ior:1.63, disp:.08, hard:7.25, origins:['natural'] },
  { id:'opal',       label:'Opal',              group:'Pastels', hex:'#e8e4f2', ior:1.45, disp:.2, hard:5.75, origins:['natural'], fragile:true, opaque:.7 },
];
const GEM = Object.fromEntries(GEMS.map(g => [g.id, g]));

// Shapes. ratio = length/width. k = carat factor (ct = L*W*D*k), depthPct = depth as fraction of width.
// facets: 'brilliant' | 'step' ; tips: angles (deg, in outline space, 0 = +length axis) that get V-prongs
const SHAPES = [
  { id:'round',    label:'Round',       ratio:[1,1],        def:1.0,  k:.0061, depth:.615, facets:'brilliant' },
  { id:'oval',     label:'Oval',        ratio:[1.2,1.6],    def:1.38, k:.0062, depth:.60,  facets:'brilliant', elong:true },
  { id:'cushion',  label:'Cushion',     ratio:[1,1.45],     def:1.08, k:.0080, depth:.65,  facets:'brilliant', elong:true },
  { id:'princess', label:'Princess',    ratio:[1,1.08],     def:1.0,  k:.0083, depth:.72,  facets:'brilliant', poly:true },
  { id:'emerald',  label:'Emerald',     ratio:[1.25,1.65],  def:1.45, k:.0080, depth:.66,  facets:'step', poly:true, elong:true },
  { id:'asscher',  label:'Asscher',     ratio:[1,1.06],     def:1.0,  k:.0080, depth:.68,  facets:'step', poly:true },
  { id:'radiant',  label:'Radiant',     ratio:[1,1.5],      def:1.25, k:.0081, depth:.66,  facets:'brilliant', poly:true, elong:true },
  { id:'pear',     label:'Pear',        ratio:[1.4,1.8],    def:1.55, k:.0059, depth:.60,  facets:'brilliant', tips:[0], elong:true },
  { id:'marquise', label:'Marquise',    ratio:[1.7,2.3],    def:1.95, k:.0058, depth:.60,  facets:'brilliant', tips:[0,180], elong:true },
  { id:'heart',    label:'Heart',       ratio:[.9,1.1],     def:1.0,  k:.0059, depth:.60,  facets:'brilliant', tips:[180] },
  { id:'hexagon',  label:'Hexagon',     ratio:[1,1.4],      def:1.15, k:.0072, depth:.62,  facets:'step', poly:true, elong:true },
  { id:'trillion', label:'Trillion',    ratio:[1,1],        def:1.0,  k:.0057, depth:.50,  facets:'brilliant', poly:true, tips:[0,120,240] },
];
const SHAPE = Object.fromEntries(SHAPES.map(s => [s.id, s]));

const CUT_STYLES = [
  { id:'brilliant', label:'Modern brilliant', desc:'The standard sparkle: 57–58 facets, ~57% table.' },
  { id:'oldeuro',   label:'Old European',     desc:'Antique look: small table, tall crown, open culet. Chunky, romantic light.' },
  { id:'rose',      label:'Rose cut',         desc:'Flat back, domed faceted top. Low profile, soft glow, less fire.' },
];

const HEADS = [
  { id:'prong4',   label:'4 prong',       desc:'Classic. Shows the most stone; four points of contact.', labor:90 },
  { id:'prong6',   label:'6 prong',       desc:'Tiffany-style. More secure, rounder outline.', labor:110 },
  { id:'double',   label:'Double prong',  desc:'Paired claws; airy and modern.', labor:130 },
  { id:'compass',  label:'Compass',       desc:'Prongs at N/S/E/W. Squares off a round, flatters ovals.', labor:95 },
  { id:'trellis',  label:'Trellis',       desc:'Crossed, woven prongs that lift the stone.', labor:140 },
  { id:'bezel',    label:'Bezel',         desc:'Metal rim all the way around. Most protective, lowest profile.', labor:220 },
  { id:'halfbezel',label:'Half bezel',    desc:'Rim on two sides, open on the others.', labor:190 },
  { id:'tension',  label:'Tension',       desc:'Held by the band’s spring pressure. Only for hard stones.', labor:360 },
];
const PRONG_TIPS = [
  { id:'round',  label:'Rounded' },
  { id:'claw',   label:'Claw' },
  { id:'flat',   label:'Flat tab' },
];
const PROFILES = [
  { id:'low',       label:'Low',       desc:'Stone sits close to the finger. Snag-free.' },
  { id:'standard',  label:'Standard',  desc:'Balanced height.' },
  { id:'high',      label:'High',      desc:'Lifted for maximum light and a matching band.' },
  { id:'cathedral', label:'Cathedral', desc:'Shoulders sweep up to meet the head.' },
];

const HALOS = [
  { id:'none',   label:'None',            desc:'Let the center stone speak.' },
  { id:'single', label:'Single halo',     desc:'A ring of small stones. Reads ~30% bigger.' },
  { id:'double', label:'Double halo',     desc:'Two rings. Maximum sparkle footprint.' },
  { id:'hidden', label:'Hidden halo',     desc:'Stones tucked under the girdle; visible from the side.' },
  { id:'both',   label:'Halo + hidden',   desc:'Belt and suspenders.' },
];
const HALO_SHAPES = [
  { id:'match',   label:'Match stone' },
  { id:'cushion', label:'Cushion' },
  { id:'round',   label:'Round' },
];
const ACCENTS = [
  { id:'diamond',  label:'Diamond',        hex:'#f2f6ff' },
  { id:'sapphire', label:'Blue sapphire',  hex:'#1d3fa8' },
  { id:'pink',     label:'Pink sapphire',  hex:'#e66a9e' },
  { id:'ruby',     label:'Ruby',           hex:'#b3102e' },
  { id:'emerald',  label:'Emerald',        hex:'#0e8a4e' },
  { id:'black',    label:'Black diamond',  hex:'#17171c' },
];

const SIDES = [
  { id:'none',    label:'None',        desc:'Plain shoulders.' },
  { id:'pave',    label:'Pavé',        desc:'Tiny beads hold a river of melee along the band.' },
  { id:'channel', label:'Channel',     desc:'Stones sit inside two metal rails. Snag-proof.' },
  { id:'three',   label:'Three-stone', desc:'Past, present, future. Two flanking stones.' },
];
const COVERAGES = [
  { id:'half',  label:'Half',   frac:.5 },
  { id:'3q',    label:'¾',      frac:.75 },
  { id:'full',  label:'Eternity', frac:1 },
];
const SIDE_SHAPES = [
  { id:'round',     label:'Round' },
  { id:'pear',      label:'Pear' },
  { id:'trapezoid', label:'Trapezoid' },
  { id:'baguette',  label:'Baguette' },
  { id:'halfmoon',  label:'Half-moon' },
  { id:'trillion',  label:'Trillion' },
];

const BANDS = [
  { id:'plain',   label:'Straight',   desc:'Even width all the way around.' },
  { id:'tapered', label:'Tapered',    desc:'Narrows toward the head; makes the stone read larger.' },
  { id:'split',   label:'Split shank',desc:'Divides into two arms as it reaches the head.' },
  { id:'twist',   label:'Twisted',    desc:'Two strands wrapped around each other.' },
  { id:'bypass',  label:'Bypass',     desc:'Ends sweep past each other around the stone.' },
];
const BAND_PROFILES = [
  { id:'comfort', label:'Comfort fit', desc:'Rounded inside, soft outside. The default for a reason.' },
  { id:'flat',    label:'Flat',        desc:'Crisp, modern, squared edges.' },
  { id:'dome',    label:'Half-round',  desc:'Classic domed top.' },
  { id:'knife',   label:'Knife-edge',  desc:'A ridge down the center. Catches light like a blade.' },
];

const SHOULDERS = [
  { id:'even',  label:'Even',    desc:'Same width all the way to the head.' },
  { id:'taper', label:'Tapers in', desc:'Narrows as it reaches the stone. Makes the center look larger.' },
  { id:'flare', label:'Widens',  desc:'Broadens into the head. Reads substantial and modern.' },
  { id:'pinch', label:'Pinched', desc:'Nips in at the shoulder, then widens again at the head.' },
];
const ENGRAVINGS = [
  { id:'none',       label:'None',        labor:0,   hand:false, desc:'Plain metal.' },
  { id:'rope',       label:'Rope',        labor:140, hand:false, desc:'A twisted cord running around the band.' },
  { id:'florentine', label:'Florentine',  labor:180, hand:false, desc:'Fine cross-hatch. Matte, antique surface.' },
  { id:'deco',       label:'Art deco',    labor:220, hand:false, desc:'Repeating geometric steps. 1920s.' },
  { id:'vine',       label:'Vine & leaf', labor:260, hand:false, desc:'Botanical scroll winding along the shank.' },
  { id:'scroll',     label:'Hand scroll', labor:480, hand:true,  desc:'Cut by hand with a graver. No two are alike.' },
];

const METALS = [
  { id:'14y', label:'14k yellow gold', short:'14k yellow', hex:'#f2c56b', karat:14, family:'gold',  density:13.1, base:[1.0,.78,.36] },
  { id:'18y', label:'18k yellow gold', short:'18k yellow', hex:'#f6c25a', karat:18, family:'gold',  density:15.5, base:[1.0,.75,.3] },
  { id:'14r', label:'14k rose gold',   short:'14k rose',   hex:'#e8a888', karat:14, family:'gold',  density:13.2, base:[.96,.68,.56] },
  { id:'18r', label:'18k rose gold',   short:'18k rose',   hex:'#e39d7d', karat:18, family:'gold',  density:15.3, base:[.97,.65,.52] },
  { id:'14w', label:'14k white gold',  short:'14k white',  hex:'#e6e6e2', karat:14, family:'gold',  density:12.7, base:[.93,.92,.89] },
  { id:'18w', label:'18k white gold',  short:'18k white',  hex:'#e4e4e0', karat:18, family:'gold',  density:15.0, base:[.93,.92,.89] },
  { id:'pt',  label:'Platinum 950',    short:'Platinum',   hex:'#d7d8dc', karat:0,  family:'plat',  density:21.4, base:[.85,.84,.83] },
  { id:'pd',  label:'Palladium 950',   short:'Palladium',  hex:'#cfced4', karat:0,  family:'pall',  density:12.0, base:[.82,.82,.84] },
];
const METAL = Object.fromEntries(METALS.map(m => [m.id, m]));
const HEAD_METALS = [
  { id:'same', label:'Match band' },
  { id:'14w',  label:'White gold head' },
  { id:'pt',   label:'Platinum head' },
  { id:'14y',  label:'Yellow gold head' },
  { id:'14r',  label:'Rose gold head' },
];
const FINISHES = [
  { id:'polish',   label:'High polish', labor:0 },
  { id:'satin',    label:'Satin / brushed', labor:35 },
  { id:'hammered', label:'Hammered', labor:70 },
];
const HIDDEN_GEMS = [
  { id:'none',     label:'None',           hex:null },
  { id:'sapphire', label:'Blue sapphire',  hex:'#1d3fa8' },
  { id:'ruby',     label:'Ruby',           hex:'#b3102e' },
  { id:'emerald',  label:'Emerald',        hex:'#0e8a4e' },
  { id:'pink',     label:'Pink sapphire',  hex:'#e66a9e' },
  { id:'diamond',  label:'Diamond',        hex:'#f2f6ff' },
];

const COLORS   = ['D','E','F','G','H','I','J','K'];
const CLARITY  = ['FL','IF','VVS1','VVS2','VS1','VS2','SI1','SI2','I1'];
const CUTS     = [{id:'EX',label:'Ideal / Excellent'},{id:'VG',label:'Very good'},{id:'G',label:'Good'}];

// ---------- default design & presets ----------
const DEFAULT = {
  stone:  { type:'lab', origin:'lab', tier:'fine', shape:'oval', carat:1.5, ratio:1.38, cutStyle:'brilliant', orient:'ns', color:'G', clarity:'VS1', cut:'EX' },
  head:   { style:'prong4', tip:'claw', profile:'standard' },
  halo:   { style:'none', shape:'match', accent:'diamond' },
  sides:  { style:'none', coverage:'half', sideShape:'pear', sideSize:.38, accent:'diamond' },
  band:   { style:'plain', profile:'comfort', width:1.8, thickness:1.5, shoulder:'even', shoulderAmt:.5, reach:70, euro:false, engrave:'none', cathRise:.75 },
  metal:  { id:'14y', head:'same', finish:'polish' },
  details:{ milgrain:false, engraving:'', hidden:'none', hand:false },
  fit:    { size:6.5 },
};

const PRESETS = [
  { id:'solitaire', label:'Classic solitaire', patch:{ stone:{type:'natural',origin:'natural',shape:'round',carat:1.0,ratio:1,cutStyle:'brilliant'}, head:{style:'prong6',tip:'round',profile:'standard'}, halo:{style:'none'}, sides:{style:'none'}, band:{style:'plain',profile:'comfort',width:2.0}, metal:{id:'pt',head:'same',finish:'polish'}, details:{milgrain:false,hidden:'none'} } },
  { id:'ovalpave', label:'Oval pavé', patch:{ stone:{type:'lab',origin:'lab',shape:'oval',carat:2.0,ratio:1.4}, head:{style:'prong4',tip:'claw',profile:'standard'}, halo:{style:'hidden'}, sides:{style:'pave',coverage:'half',accent:'diamond'}, band:{style:'plain',profile:'comfort',width:1.7,thickness:1.5,shoulder:'taper',shoulderAmt:.45,reach:75}, metal:{id:'14y',head:'same',finish:'polish'}, details:{milgrain:false,hidden:'none'} } },
  { id:'emeraldbezel', label:'Emerald bezel', patch:{ stone:{type:'lab',origin:'lab',shape:'emerald',carat:1.75,ratio:1.45}, head:{style:'bezel',profile:'low'}, halo:{style:'none'}, sides:{style:'none'}, band:{style:'plain',profile:'flat',width:2.4,thickness:1.7,shoulder:'flare',shoulderAmt:.4,euro:true}, metal:{id:'18y',head:'same',finish:'satin'}, details:{milgrain:false,hidden:'none'} } },
  { id:'threestone', label:'Pear three-stone', patch:{ stone:{type:'natural',origin:'natural',shape:'oval',carat:1.5,ratio:1.35}, head:{style:'prong4',tip:'claw',profile:'standard'}, halo:{style:'none'}, sides:{style:'three',sideShape:'pear',sideSize:.4,accent:'diamond'}, band:{style:'plain',profile:'comfort',width:1.9}, metal:{id:'14r',head:'same',finish:'polish'}, details:{milgrain:false,hidden:'none'} } },
  { id:'vintage', label:'Vintage halo', patch:{ stone:{type:'natural',origin:'natural',shape:'cushion',carat:1.2,ratio:1.05,cutStyle:'oldeuro'}, head:{style:'prong4',tip:'round',profile:'standard'}, halo:{style:'single',shape:'match'}, sides:{style:'pave',coverage:'half'}, band:{style:'plain',profile:'dome',width:2.0,thickness:1.6,engrave:'florentine'}, metal:{id:'14w',head:'same',finish:'polish'}, details:{milgrain:true,hidden:'sapphire'} } },
  { id:'teal', label:'Teal sapphire', patch:{ stone:{type:'tealSapph',origin:'natural',shape:'hexagon',carat:1.8,ratio:1.15}, head:{style:'double',tip:'claw',profile:'standard'}, halo:{style:'none'}, sides:{style:'none'}, band:{style:'split',profile:'comfort',width:1.9,thickness:1.5,engrave:'vine'}, metal:{id:'14y',head:'same',finish:'polish'}, details:{milgrain:false,hidden:'none'} } },
  { id:'toi', label:'Marquise east-west', patch:{ stone:{type:'lab',origin:'lab',shape:'marquise',carat:1.5,ratio:2.0,orient:'ew'}, head:{style:'prong4',tip:'claw',profile:'low'}, halo:{style:'none'}, sides:{style:'none'}, band:{style:'plain',profile:'knife',width:1.8}, metal:{id:'18y',head:'same',finish:'polish'}, details:{milgrain:false,hidden:'none'} } },
  { id:'cathedral', label:'Cathedral twist', patch:{ stone:{type:'natural',origin:'natural',shape:'round',carat:1.25,ratio:1}, head:{style:'prong6',tip:'round',profile:'cathedral'}, halo:{style:'none'}, sides:{style:'none'}, band:{style:'twist',profile:'comfort',width:2.1,thickness:1.6,cathRise:1.1}, metal:{id:'14w',head:'same',finish:'polish'}, details:{milgrain:false,hidden:'none'} } },
];

// ---------- sizing math ----------
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const deepMerge = (base, patch) => { const o = structuredClone(base); for (const k in patch) { if (patch[k] && typeof patch[k] === 'object' && !Array.isArray(patch[k])) o[k] = deepMerge(o[k] || {}, patch[k]); else o[k] = patch[k]; } return o; };

// mm dimensions of the center stone from carat + ratio: L, W, D
function stoneDims(st) {
  const sh = SHAPE[st.shape];
  const ratio = sh.ratio[0] === sh.ratio[1] ? 1 : clamp(st.ratio, sh.ratio[0], sh.ratio[1]);
  let depth = sh.depth, k = sh.k;
  if (st.cutStyle === 'oldeuro') { depth *= 1.1; }
  if (st.cutStyle === 'rose') { depth *= .45; k *= 1.05; }
  // ct = L*W*D*k = ratio*W * W * depth*W * k
  const W = Math.cbrt(st.carat / (ratio * depth * k));
  return { L: W * ratio, W, D: W * depth, ratio };
}
// US ring size -> inner diameter (mm)
const ringID = size => 11.63 + 0.8128 * size;
const sizeUK = size => { const uk = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; const i = Math.round((size - 1.5) * 2); return uk[Math.floor(i / 2)] + (i % 2 ? '½' : ''); };
const sizeEU = size => Math.round(ringID(size) * Math.PI);

// melee (small accent stone) diameter, scaled to the center stone
const meleeFor = W => clamp(.19 * W, 1.0, 1.9);

// ---------- band cross-section along the shank ----------
// d = angular distance from the head, in radians. Returns { w, t } in mm.
// One function so the 3D geometry and the price estimate can never disagree.
function bandSectionAt(b, d) {
  const reach = clamp(b.reach ?? 70, 20, 150) * Math.PI / 180;
  const amt = clamp(b.shoulderAmt ?? .5, 0, 1);
  const f = smooth01(1 - d / reach);                       // 1 at the head, 0 beyond the reach
  let ws = 1, ts = 1;
  if (b.shoulder === 'taper') { ws -= .55 * amt * f; ts -= .22 * amt * f; }
  else if (b.shoulder === 'flare') { ws += .95 * amt * f; ts += .1 * amt * f; }
  else if (b.shoulder === 'pinch') { const g = 4 * f * (1 - f); ws -= .5 * amt * g; ts -= .12 * amt * g; }
  if (b.style === 'tapered') ws *= 1 - .3 * smooth01(1 - d / (Math.PI * .8));
  if (b.euro) { const e = smooth01(1 - Math.abs(Math.PI - d) / (55 * Math.PI / 180)); ws += .45 * e; ts -= .18 * e; }
  return { w: b.width * ws, t: (b.thickness ?? 1.5) * ts };
}
// narrowest point over the arc the accents cover, so a stone that fits there fits everywhere
function bandMinWidth(b, frac) {
  let min = Infinity;
  for (let i = 0; i <= 24; i++) { const d = Math.PI * frac * i / 24; min = Math.min(min, bandSectionAt(b, d).w); }
  return min;
}
const smooth01 = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };

// ---------- price model ----------
// Numbers are anchored to public data pulled 2026-09-18 (StoneAlgo, Rapaport grid via Diamonds Pro, Kitco spot,
// Brilliant Earth / Blue Nile semi-mounts, Guru Diam melee, trade labor posts). See docs/pricing-model.md for every source.
// Everything marked est is an estimate. Paste your own data over these tables.
const PRICE = {
  version: '2026-09-18',
  spot: { gold: 4357.70, plat: 1794, pall: 1307 }, // USD per troy oz, Kitco 2026-09-18
  natural: {
    // $/ct, round, G/VS1/EX, online-marketplace level. Duplicate x = price cliff.
    curve: [[.2,2000],[.29,2050],[.3,2050],[.49,2200],[.5,2250],[.69,2450],[.7,2500],[.89,3000],[.9,3550],[.99,3750],[1,4300],[1.49,4950],[1.5,5800],[1.99,7300],[2,9400],[2.49,10900],[2.5,11900],[2.99,12300],[3,13000],[3.99,15600],[4,17000],[4.99,19600],[5,21600],[6,24500],[8,30000]],
    shape: { round:1, oval:.82, cushion:.68, princess:.65, emerald:.70, asscher:.62, radiant:.70, pear:.88, marquise:.86, heart:.63, hexagon:.6, trillion:.6 },
    // Rapaport 1.00–1.49 ct grid (Jan 2026) normalised to G/VS1 = 1.00; columns FL IF VVS1 VVS2 VS1 VS2 SI1 SI2 I1
    grid: { D:[2.53,2.41,1.92,1.67,1.41,1.24,.95,.80,.58], E:[1.92,1.83,1.66,1.36,1.24,1.10,.92,.77,.55], F:[1.62,1.55,1.40,1.24,1.14,1.00,.88,.73,.53], G:[1.34,1.28,1.22,1.10,1.00,.92,.83,.69,.50], H:[1.08,1.03,1.01,.94,.88,.84,.76,.65,.47], I:[.92,.88,.86,.80,.78,.74,.70,.60,.44], J:[.76,.72,.70,.69,.66,.64,.59,.55,.40], K:[.62,.59,.57,.55,.52,.50,.48,.45,.33] },
    cut: { EX:1, VG:.88, G:.77 },
  },
  lab: {
    curve: [[.3,800],[.5,690],[.75,610],[1,560],[1.5,560],[2,620],[2.5,610],[3,660],[4,580],[5,500],[6,470],[10,420]],
    shape: { round:1, oval:1.05, cushion:.95, princess:.95, emerald:.95, asscher:.95, radiant:1, pear:1, marquise:1, heart:1, hexagon:.95, trillion:.95 },
    color: { D:1.15, E:1.1, F:1.05, G:1, H:.95, I:.9, J:.85, K:.8 },
    clarity: { FL:1.25, IF:1.2, VVS1:1.12, VVS2:1.06, VS1:1, VS2:.95, SI1:.88, SI2:.8, I1:.7 },
    cut: { EX:1, VG:.92, G:.85 },
  },
  moissanite: { perCt: 620, shape: { round:1, cushion:1, oval:1.05, princess:1.05, emerald:1.1, asscher:1.1, pear:1.05, marquise:1.05, radiant:1.05, heart:1.05, hexagon:1.05, trillion:1.05 } }, // Charles & Colvard Forever One DEF
  // $/ct by tier [commercial, good, fine, extra fine] at carat buckets <1, 1–2, 2–3, 3+  (RubyGlint 2026, Natural Sapphire Co, IGS, Chatham)
  gems: {
    whiteSapph:  { natural:{ 0.5:[80,150,300,500], 1:[120,250,450,700], 2:[150,300,600,900], 3:[200,400,700,1000] }, lab:{ 0.5:[30,50,120,250], 1:[30,50,120,250], 2:[30,50,120,250], 3:[30,50,120,250] } },
    saltpepper:  { natural:{ 0.5:[150,350,700,1200], 1:[150,350,700,1200], 2:[150,350,700,1200], 3:[150,350,700,1200] } },
    blackDia:    { natural:{ 0.5:[250,600,1500,4000], 1:[250,600,1500,4000], 2:[300,700,2000,5000], 3:[300,800,2500,6000] } },
    sapphire:    { natural:{ 0.5:[200,600,1500,4000], 1:[500,1500,3000,8000], 2:[1000,3000,5500,15000], 3:[2000,5000,10000,35000] }, lab:{ 0.5:[40,80,250,420], 1:[40,80,250,420], 2:[40,80,250,420], 3:[40,80,250,420] } },
    pinkSapph:   { natural:{ 0.5:[150,400,900,2500], 1:[400,900,2000,6000], 2:[800,1500,3500,10000], 3:[1200,2500,6000,20000] }, lab:{ 0.5:[40,80,250,420], 1:[40,80,250,420], 2:[40,80,250,420], 3:[40,80,250,420] } },
    tealSapph:   { natural:{ 0.5:[150,400,800,1500], 1:[300,800,1500,2500], 2:[500,1000,2000,4000], 3:[800,1500,3000,6000] }, lab:{ 0.5:[40,80,250,420], 1:[40,80,250,420], 2:[40,80,250,420], 3:[40,80,250,420] } },
    ruby:        { natural:{ 0.5:[200,500,1500,4500], 1:[600,1500,4000,11000], 2:[1000,3000,7000,20000], 3:[1500,5000,14000,50000] }, lab:{ 0.5:[30,60,250,420], 1:[30,60,250,420], 2:[30,60,250,420], 3:[30,60,250,420] } },
    emerald:     { natural:{ 0.5:[400,900,2000,5000], 1:[700,1500,4000,11000], 2:[1200,3000,6500,17000], 3:[2000,5000,10000,34000] }, lab:{ 0.5:[60,120,300,450], 1:[60,120,300,450], 2:[60,120,300,450], 3:[60,120,300,450] } },
    alexandrite: { natural:{ 0.5:[800,1500,3500,8000], 1:[2000,4000,12000,35000], 2:[4000,8000,20000,50000], 3:[5000,10000,27000,60000] }, lab:{ 0.5:[100,200,350,500], 1:[100,200,350,500], 2:[100,200,350,500], 3:[100,200,350,500] } },
    spinel:      { natural:{ 0.5:[100,250,800,3000], 1:[150,400,1500,5000], 2:[250,600,2500,8000], 3:[400,900,4000,12000] } },
    morganite:   { natural:{ 0.5:[60,120,250,450], 1:[60,120,250,450], 2:[70,140,280,500], 3:[70,150,300,600] } },
    aquamarine:  { natural:{ 0.5:[35,85,180,250], 1:[55,140,300,400], 2:[55,140,300,400], 3:[70,200,450,600] } },
    tourmaline:  { natural:{ 0.5:[40,150,300,2500], 1:[60,250,450,4000], 2:[80,350,600,5500], 3:[100,450,800,7000] } },
    opal:        { natural:{ 0.5:[40,100,250,600], 1:[60,150,350,800], 2:[80,200,450,1000], 3:[100,250,500,1200] } }, // est
  },
  // fancy colour diamonds: multiplier on the white-diamond price at the same carat (est from Leibish / Astteria / Diamonds Pro ranges)
  fancy: { yellowDia:{ natural:1.0, lab:1.3 }, pinkDia:{ natural:10, lab:1.8 } },
  gemShape: { round:1.05, oval:1, cushion:1, emerald:1, pear:.97, marquise:.95, princess:.95, radiant:1, asscher:1, heart:.95, hexagon:.97, trillion:.95 },
  melee: { natural:11, lab:3, colored:4.5, paveLabor:12, channelLabor:15 },   // per ~1.3 mm stone, retail (wholesale × 2.5)
  metal: { loss:.10, retailMult:2.0, headGrams:{ prong4:.6, prong6:.8, double:.7, compass:.6, trellis:.7, bezel:1.0, halfbezel:.7, tension:.3 }, extraGrams:{ cathedral:.4, single:.8, double:1.4, hidden:.3, both:1.1, three:.6 } },
  labor: { cad:150, castGold:200, castPt:500, setProng:100, setBezel:175, setTension:250, polish:40, rhodium:50, haloAssembly:250, hiddenHalo:150, threeStone:200, engraveMachine:50, engraveHand:150, milgrain:100, twoTone:120, satin:35, hammered:70, hiddenGem:90 },
  retail: [.92, 1.28],  // jeweler quote spread around the model's midpoint
};

function curveAt(curve, ct) {
  if (ct <= curve[0][0]) return curve[0][1];
  for (let i = 1; i < curve.length; i++) if (ct <= curve[i][0]) { const [a, pa] = curve[i - 1], [b, pb] = curve[i]; return b === a ? pb : lerp(pa, pb, (ct - a) / (b - a)); }
  return curve[curve.length - 1][1];
}
const tierIndex = { commercial:0, good:1, fine:2, extra:3 };
const TIERS = [{id:'commercial',label:'Commercial'},{id:'good',label:'Good'},{id:'fine',label:'Fine'},{id:'extra',label:'Extra fine'}];

function centerStonePrice(st) {
  const ct = st.carat, sh = st.shape;
  const isDia = st.type === 'natural' || st.type === 'lab';
  if (isDia) {
    if (st.type === 'natural') {
      const t = PRICE.natural, g = t.grid[st.color][CLARITY.indexOf(st.clarity)];
      return ct * curveAt(t.curve, ct) * g * t.shape[sh] * t.cut[st.cut] * (st.cutStyle === 'brilliant' ? 1 : .9);
    }
    const t = PRICE.lab;
    return ct * curveAt(t.curve, ct) * t.color[st.color] * t.clarity[st.clarity] * t.shape[sh] * t.cut[st.cut] * (st.cutStyle === 'brilliant' ? 1 : .9);
  }
  if (st.type === 'moissanite') return ct * PRICE.moissanite.perCt * PRICE.moissanite.shape[sh];
  if (st.type === 'yellowDia' || st.type === 'pinkDia') {
    const base = st.origin === 'lab' ? ct * curveAt(PRICE.lab.curve, ct) * PRICE.lab.shape[sh] : ct * curveAt(PRICE.natural.curve, ct) * PRICE.natural.shape[sh];
    return base * PRICE.fancy[st.type][st.origin];
  }
  const g = PRICE.gems[st.type], byOrigin = g[st.origin] || g.natural, bucket = ct < 1 ? .5 : ct < 2 ? 1 : ct < 3 ? 2 : 3;
  return ct * byOrigin[bucket][tierIndex[st.tier || 'fine']] * PRICE.gemShape[sh];
}

function estimate(s) {
  const st = s.stone, dims = stoneDims(st), W = dims.W;
  const lines = [];
  const isDia = st.type === 'natural' || st.type === 'lab';
  const stone = centerStonePrice(st);
  const stoneSub = `${st.carat.toFixed(2)} ct ${GEM[st.type].label.toLowerCase()}` + (isDia ? ` · ${st.color} ${st.clarity} ${st.cut}` : st.type === 'moissanite' ? ' · premium grade' : ` · ${st.origin === 'lab' ? 'lab-created' : (TIERS.find(t => t.id === (st.tier || 'fine')).label.toLowerCase() + ' quality')}`);
  lines.push({ k:'Center stone', sub: stoneSub, v: stone });

  // --- metal ---
  const m = METAL[s.metal.id], ID = ringID(s.fit.size);
  const fill = { comfort:.85, flat:.97, dome:.8, knife:.62 }[s.band.profile];
  const styleF = { plain:1, tapered:1, split:1.15, twist:.95, bypass:1.05 }[s.band.style];
  // integrate the real cross-section around the shank instead of assuming a constant one
  let mm3 = 0; const N = 48;
  for (let i = 0; i < N; i++) { const d = Math.PI * (i + .5) / N, sec = bandSectionAt(s.band, d); mm3 += 2 * (Math.PI * (ID + sec.t) / (2 * N)) * sec.w * sec.t; }
  let grams = mm3 * fill * styleF / 1000 * m.density;
  let extra = (PRICE.metal.headGrams[s.head.style] || .6) * Math.pow(W / 6.5, 1.5);
  if (s.head.profile === 'cathedral') extra += PRICE.metal.extraGrams.cathedral;
  if (s.halo.style !== 'none') extra += (PRICE.metal.extraGrams[s.halo.style] || .8) * Math.pow(W / 6.5, 1.5);
  if (s.sides.style === 'three') extra += PRICE.metal.extraGrams.three;
  grams += extra * m.density / 13.1;
  const purity = m.karat ? m.karat / 24 : .95;
  const perG = (m.family === 'gold' ? PRICE.spot.gold : m.family === 'plat' ? PRICE.spot.plat : PRICE.spot.pall) / 31.1035 * purity;
  const metal = grams * perG * (1 + PRICE.metal.loss) * PRICE.metal.retailMult;
  lines.push({ k:'Metal', sub:`≈ ${grams.toFixed(1)} g ${m.short} at $${perG.toFixed(0)}/g melt`, v: metal });

  // --- setting & labor ---
  const L = PRICE.labor;
  let labor = L.cad + (m.family === 'plat' ? L.castPt : L.castGold) + L.polish;
  labor += s.head.style === 'bezel' || s.head.style === 'halfbezel' ? L.setBezel : s.head.style === 'tension' ? L.setTension : L.setProng;
  if (m.id === '14w' || m.id === '18w') labor += L.rhodium;
  if (s.metal.finish === 'satin') labor += L.satin; if (s.metal.finish === 'hammered') labor += L.hammered;
  if (s.metal.head !== 'same') labor += L.twoTone;
  lines.push({ k:'Setting & labor', sub:`CAD, ${m.family === 'plat' ? 'platinum ' : ''}casting, ${HEADS.find(h => h.id === s.head.style).label.toLowerCase()} head, finish`, v: labor });

  // --- accents ---
  const c = stoneCounts(s, dims);
  const accentPrice = id => id === 'diamond' ? (st.type === 'natural' ? PRICE.melee.natural : PRICE.melee.lab) : PRICE.melee.colored;
  if (c.halo) lines.push({ k: HALOS.find(h => h.id === s.halo.style).label, sub:`${c.halo} stones, set`, v: c.halo * (accentPrice(s.halo.accent) + PRICE.melee.paveLabor) + (s.halo.style === 'hidden' ? L.hiddenHalo : s.halo.style === 'both' ? L.haloAssembly + L.hiddenHalo : L.haloAssembly) });
  if (c.band) lines.push({ k: s.sides.style === 'pave' ? 'Pavé band' : 'Channel band', sub:`${c.band} stones, set`, v: c.band * (accentPrice(s.sides.accent) + (s.sides.style === 'channel' ? PRICE.melee.channelLabor : PRICE.melee.paveLabor)) });
  if (c.side) {
    const sc = s.sides.sideSize, sideCt = st.carat * Math.pow(sc, 2.6) * 1.4;
    const per = s.sides.accent === 'diamond'
      ? centerStonePrice({ ...st, type: st.type === 'natural' ? 'natural' : 'lab', origin: st.type === 'natural' ? 'natural' : 'lab', carat: sideCt, shape: s.sides.sideShape === 'round' ? 'round' : 'pear' }) * .9
      : sideCt * 300;
    lines.push({ k:'Side stones', sub:`2 × ~${sideCt.toFixed(2)} ct ${SIDE_SHAPES.find(x => x.id === s.sides.sideShape).label.toLowerCase()}`, v: 2 * per + L.threeStone });
  }
  // --- details ---
  let det = 0; const dsub = [];
  if (s.details.milgrain) { det += L.milgrain; dsub.push('milgrain'); }
  if (s.details.engraving) { det += s.details.hand ? L.engraveHand : L.engraveMachine; dsub.push(s.details.hand ? 'hand engraving' : 'engraving'); }
  if (s.details.hidden !== 'none') { det += L.hiddenGem + 45; dsub.push('hidden gem'); }
  const eng = ENGRAVINGS.find(e => e.id === (s.band.engrave || 'none'));
  if (eng.labor) { const cov = s.sides.style === 'pave' || s.sides.style === 'channel' ? 1 - COVERAGES.find(c => c.id === s.sides.coverage).frac * .8 : 1; det += eng.labor * Math.max(.35, cov) * (s.band.width > 2.5 ? 1.25 : 1); dsub.push(eng.label.toLowerCase() + (eng.hand ? ' (hand cut)' : '') + ' engraving'); }
  if (s.band.euro) { det += 60; dsub.push('euro shank'); }
  if (det) lines.push({ k:'Details', sub: dsub.join(', '), v: det });

  const total = lines.reduce((a, l) => a + l.v, 0);
  return { lines, total, low: total * PRICE.retail[0], high: total * PRICE.retail[1], grams };
}

// How many accent stones the current design needs (mirrors what the 3D builder places)
function stoneCounts(s, dims) {
  const W = dims.W, L = dims.L, md = meleeFor(W);
  const perim = Math.PI * (3 * (L / 2 + W / 2) - Math.sqrt((3 * L / 2 + W / 2) * (L / 2 + 3 * W / 2)));
  let halo = 0;
  const ringCount = d => Math.round((perim + 2 * Math.PI * d) / (md * 1.15));
  if (s.halo.style === 'single' || s.halo.style === 'both') halo += ringCount(md * .67);
  if (s.halo.style === 'double') halo += ringCount(md * .67) + ringCount(md * 1.82);
  if (s.halo.style === 'hidden' || s.halo.style === 'both') halo += Math.round((perim * .8) / (md * .78 * 1.12));
  let band = 0;
  if (s.sides.style === 'pave' || s.sides.style === 'channel') {
    const Rout = ringID(s.fit.size) / 2 + 1.6, frac = COVERAGES.find(c => c.id === s.sides.coverage).frac;
    const bm = Math.min(md, bandMinWidth(s.band, frac) - .55);
    if (bm >= .8) band = Math.max(0, Math.round((2 * Math.PI * Rout * frac - (W + 1.2)) / (bm * 1.12)));
  }
  return { halo, band, side: s.sides.style === 'three' ? 2 : 0 };
}

const fmt$ = v => '$' + Math.round(v).toLocaleString('en-US');
const fmtRange = (a, b) => `${fmt$(a)} – ${fmt$(b)}`;
