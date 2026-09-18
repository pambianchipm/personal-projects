# Project Halo — Engagement / Diamond Ring Customization Taxonomy

Research compiled 2026-09-18 from jeweler education pages (GIA, Blue Nile, With Clarity, Frank Darling, Victor Canera, Leon Megé, Angara, VRAI, Taylor & Hart, Krikawa, Gabriel & Co.), trade press (JCK, National Jeweler, Rapaport), and The Knot's 2025/2026 Real Weddings studies. Purpose: enumerate every axis a ring configurator must expose to cover ~99.8% of engagement/diamond rings actually purchased, and isolate the exotic ~0.2% that is better handled by a "talk to the jeweler" escape hatch.

Notation: "(approx., trade practice)" flags numbers that are widely used by jewelers but not from a single citable page; verify with your jeweler before hard-coding.

---

## 0. Executive summary and the coverage argument

**Where the volume is (US, 2025 purchases, The Knot 2026 Real Weddings Study, n > 10,000 couples):**

| Axis | Distribution | Source |
|---|---|---|
| Center stone type | 61% lab-grown diamond; 83% clear diamond of any origin; ~17% non-diamond, of which sapphire 23% and moissanite 20% (i.e. ≈4% and ≈3.4% of all rings) | [JCK](https://www.jckonline.com/editorial-article/lab-diamonds-engagement-market/), [Rapaport](https://rapaport.com/news/lab-grown-taking-over-engagement-ring-spending-the-knot/) |
| Shape | Round 26%, Oval 25%, Emerald 8%, Princess 8%, Pear 8%, Marquise 8%, Cushion 6%, Radiant 6% (= 95%); remainder Asscher/heart/elongated cushion/hexagon/antique cuts/other | [National Jeweler](https://nationaljeweler.com/articles/14726-engagement-ring-trends-2026-what-s-in-and-why) |
| Setting | Solitaire 38% (2025); in 2024 data: prong 35%, hidden halo 18%, classic halo 13%, other 34%; 51% of rings had side stones/accents | [Rapaport](https://rapaport.com/news/lab-grown-taking-over-engagement-ring-spending-the-knot/), [Plumb Club / The Knot 2025](https://plumbclub.com/reference-documents/the-knot-2025-real-engagements-weddings-survey/) |
| Metal | Yellow gold 39%, white gold 35%, platinum 13% (white metals 48%); remainder rose gold / two-tone / other ≈13% | [National Jeweler](https://nationaljeweler.com/articles/14726-engagement-ring-trends-2026-what-s-in-and-why) |
| Size / spend | Avg 1.9 ct center, $4,600 avg spend; lab-grown avg 2.0 ct ($4,300), natural avg 1.6 ct ($7,000) | [Rapaport](https://rapaport.com/news/lab-grown-taking-over-engagement-ring-spending-the-knot/) |
| Customization | ~90% of buyers made custom edits or custom-designed | [Rapaport](https://rapaport.com/news/lab-grown-taking-over-engagement-ring-spending-the-knot/) |

**Coverage logic.** Because the top 8 shapes are 95% and the top ~14 shapes (adding asscher, heart, elongated cushion, hexagon, kite, old European, old mine, rose cut) are plausibly >99.5%, and because settings decompose cleanly into a small number of orthogonal axes (head type × prong style × halo × side-stone technique × shank profile × shank style × metal × finish × ornament), a configurator built as a **parametric assembly** of those axes covers the overwhelming majority of purchases. What it cannot cover parametrically is **figural / sculptural** work (dragons, serpents, skulls, animals, hands, faces), pictorial hand-carved galleries, enamel/mokume/inlay in the engagement ring itself, rough/slice/cabochon/pearl centers, kinetic or puzzle mechanisms, and non-standard finger-hole geometry. Those are the ~0.2% and should route to a free-text "custom brief + reference images" flow (see §8.4).

---

## 1. Center stone

### 1.1 Gem types

Mohs hardness and specific gravity (SG) matter for two configurator functions: (a) allowed setting types (tension, thin prongs, pavé melee) and (b) sizing a 3D model (same mm outline weighs different carats in different materials).

| Gem | Mohs | SG (approx.) | Engagement-ring suitability | Notes for configurator |
|---|---|---|---|---|
| Natural diamond | 10 | 3.52 | Ideal | Colorless D–Z or fancy color; graded by GIA/IGI/AGS |
| Lab-grown diamond (CVD/HPHT) | 10 | 3.52 | Ideal | 61% of US 2025 engagement rings; mostly IGI-certified; identical physical properties to natural |
| Moissanite (SiC) | 9.25–9.5 | 3.21 | Ideal | ~9% lighter than diamond at same mm, so sold by mm / "DEW" (diamond-equivalent weight): a 6.5 mm round = 1.00 ct DEW but ≈0.88 ct actual ([Miozuki](https://www.miozuki.co.nz/pages/the-master-moissanite-conversion-chart-mm-dew-nz-ring-sizes-explained)) |
| Sapphire (corundum) — blue, teal, green, pink, peach, yellow, white, purple, parti, padparadscha, Montana | 9 | ~4.0 | Ideal | Heavier than diamond: 6.5 mm round ≈1.14 ct vs 1.00 ct diamond ([Serendipity](https://www.serendipitydiamonds.com/blog/sapphire-weight-compared-to-diamonds-other-gemstones/)). Blue still most popular; teal/Montana/green/pink rising ([Gem Breakfast](https://gembreakfast.com/blogs/news/montana-sapphire-colors-guide-teal-pink-parti-how-to-choose-yours)) |
| Ruby (corundum) | 9 | ~4.0 | Ideal | Same as sapphire; red only |
| Spinel (red, pink, grey, lavender, cobalt blue) | 8 | 3.6 | Good | Durable; often used as ruby/sapphire alternative |
| Alexandrite (color-change chrysoberyl) | 8.5 | 3.7 | Good | Rare/expensive; lab-grown common |
| Emerald (beryl) | 7.5–8 | 2.7 | Caution | Brittle due to inclusions ("jardin"); needs protective setting; never tension; avoid ultrasonic. ([IGS](https://www.gemsociety.org/article/hardness-and-wearability/)) |
| Aquamarine (beryl) | 7.5–8 | 2.7 | Good | Light; large stones look big for weight |
| Morganite (beryl) | 7.5–8 | 2.7 | Good | Peach/pink; popular with rose gold |
| Tourmaline (incl. Paraíba, rubellite, indicolite, watermelon) | 7–7.5 | 3.0–3.2 | Acceptable | Softer; prefer bezel/6-prong |
| Garnet (rhodolite, tsavorite, spessartite) | 6.5–7.5 | 3.6–4.3 | Acceptable | Tsavorite popular green alternative |
| Opal | 5.5–6.5 | ~2.1 | Not recommended for daily wear; if used, bezel + backing | Water content; cracks; never tension/pavé ([IGS opal](https://www.gemsociety.org/article/opal-jewelry-tips/)) |
| Tanzanite | 6–7 | 3.35 | Caution (bezel) | Perfect cleavage |
| Pearl | 2.5–4.5 | — | Exotic (route to jeweler) | Cage/cup settings only |
| Salt-and-pepper diamond | 10 | 3.52 | Ideal (durability) but heavily included; often rose-cut or kite/hex | Growing "alternative" niche over last 5–6 years ([Malka](https://www.malkadiamonds.com/blogs/stories/what-are-salt-and-pepper-diamonds)) |
| Fancy-color diamond (yellow, pink, blue, champagne/brown, grey, black) | 10 | 3.52 | Ideal | GIA fancy scale: Faint → Very Light → Light → Fancy Light → Fancy → Fancy Intense → Fancy Vivid / Fancy Deep / Fancy Dark ([GIA](https://www.gia.edu/fancy-color-diamond/buyers-guide)); "champagne" ≈ K–Z brown-tinted |
| Rough / raw diamond crystal, diamond slice, cabochon of any gem | varies | varies | Exotic | Non-standard geometry; not parametric |

General rule used by jewelers: Mohs ≥ 7 for a ring, ≥ 8 ideal for daily-wear engagement rings; household dust is quartz (Mohs 7) so anything softer loses polish ([Ken & Dana](https://shop.kenanddanadesign.com/pages/mohs-hardness-scale), [Lauren B](https://www.laurenbjewelry.com/blog/the-mohs-scale-why-durability-is-important/)).

### 1.2 Shapes (outline + faceting style)

| Shape | Faceting | Standard L:W | "Ideal"/most-requested L:W | Points needing protection | Popularity (US 2025) |
|---|---|---|---|---|---|
| Round brilliant | 57/58-facet brilliant | 1.00–1.02 | 1.00 | none | 26% |
| Oval | brilliant | 1.25–1.60 | 1.30–1.50 (bow-tie worsens >1.50) | none | 25% |
| Cushion (square) | brilliant or modified brilliant ("crushed ice") | 1.00–1.10 | 1.00–1.10 | none (rounded corners) | 6% (incl. elongated) |
| Elongated cushion | as above | 1.15–1.35 | 1.15–1.20 sweet spot; 1.30 elongated | none | trending (Stuller) |
| Princess | square modified brilliant | 1.00–1.05 | 1.00–1.05 | **4 sharp corners** (V- or claw prongs) | 8% |
| Emerald | step cut, cut corners | 1.30–1.60 | 1.30–1.45; 1.6+ elongated; <1.3 looks Asscher-like | none (cut corners) | 8% |
| Radiant | cut-corner brilliant | 1.00–1.35 | square 1.00–1.05; rectangular 1.15–1.35; up to 2.0 exists | none | 6% |
| Pear | brilliant | 1.40–1.75 | 1.50–1.75 | **1 point** (V-prong) | 8% |
| Marquise | brilliant | 1.70–2.25 | 1.75–2.15 (market standard 1.85–2.00) | **2 points** (V-prongs) | 8% |
| Asscher (square emerald) | step cut, deep cut corners | 1.00–1.05 | 1.00 | none | <2% (est.) |
| Heart | brilliant | 0.90–1.10 | ~1.00 | **1 point** (V-prong); bezel or 3-prong for <0.50 ct | ~1% (est.) |
| Trillion / trilliant | brilliant (triangle) | 1.00 | 1.00 | **3 points**; usually side stone | <0.5% as center |
| Baguette / tapered baguette | step | 1.5–3+ | — | corners; almost always side stone | rare as center |
| Hexagon | step or brilliant, 6 sides | 1.00–1.30 | elongated hex popular | 6 corners (usually prongs at corners) | <1% but rising |
| Kite | step/brilliant, 4 sides, off-center horizon | ~1.3–1.6 | — | 2 sharp points | <0.5% |
| Shield | 5–7 sides | — | — | points | <0.5% |
| Lozenge | rhombus | — | — | 4 points | rare |
| Octagon | 8 sides | 1.00–1.3 | — | — | rare |
| Rose cut | flat base, domed faceted top, no pavilion | any outline (round, oval, pear, hex, kite) | — | depends on outline | niche (salt-and-pepper, vintage) |
| Old European cut | antique round brilliant, small table, high crown, large culet | ~1.00 | — | none | niche antique/estate |
| Old mine cut | antique cushion-ish brilliant, very large culet, chunky facets | ~1.00–1.15 | — | none | niche antique/estate |
| Portrait cut / table cut | ultra-thin flat "window" stone | varies | — | edges fragile | exotic |
| Briolette | fully faceted drop, no table | — | — | — | exotic (rarely a ring center) |

Ratio sources: [GIA fancy-shape guide](https://4cs.gia.edu/en-us/blog/purchasing-fancy-shaped-diamonds-holiday-buying-guide/) (oval 1.33–1.66, marquise 1.75–2.25, pear 1.50–1.75, heart ~1.00, triangular 1.00), [Frank Darling](https://frankdarling.com/blog/length-to-width-ratios-whats-ideal-elongation/), [Rare Carat](https://www.rarecarat.com/blog/diamond-ring-tips/diamonds-length-to-width-ratios-rarecarat-com), [Lauren B](https://www.laurenbjewelry.com/blog/length-to-width-ratios-a-buyers-guide/). Alternative shapes: [Frank Darling alt-shapes](https://frankdarling.com/blog/epaulettes-trapezoids-and-every-alternative-diamond-shape-you-should-meet/), [VRAI shapes](https://www.vrai.com/journal/post/diamond-shapes), [Rosec hexagon/kite setting guide](https://www.rosecjewels.com/blogs/news/hexagon-and-kite-shaped-diamonds-orientation-corners-and-custom-setting-needs). Cushion "chunky" (cushion brilliant) vs "crushed ice" (cushion modified brilliant): [Ritani](https://www.ritani.com/blogs/education/cushion-brilliant-vs-cushion-modified-brilliant-whats-the-difference), [Lauren B](https://www.laurenbjewelry.com/blog/modified-brilliant-vs-crushed-ice-cushion-cut-diamonds/). Antique cuts: [GIA old mine guide](https://4cs.gia.edu/en-us/blog/old-mine-cut-diamond-guide/), [Diamond Pro](https://www.diamonds.pro/education/antique-diamond-cuts/).

Configurator sub-options per shape: (a) L:W ratio slider bounded per shape; (b) faceting variant where relevant (cushion brilliant vs modified/crushed-ice; hexagon step vs brilliant; rose cut on any outline; old-cut variants); (c) orientation N-S vs E-W (see §2.6).

### 1.3 Carat ↔ millimetre reference (diamond, SG 3.52, well-cut)

Values from [MID Diamonds mm↔ct tables](https://www.middiamonds.com/diamond-education/carat-mm-weight-conversion-values/) (cross-checked with [Angara](https://www.angara.com/blog/mm-to-carat-conversions-for-diamonds/), [StoneAlgo](https://www.stonealgo.com/blog/diamond-size-chart/)). Real stones vary ±5–8% by depth.

| ct | Round Ø | Princess | Cushion (sq.) | Asscher | Oval L×W | Pear L×W | Marquise L×W | Emerald L×W | Radiant L×W | Heart |
|---|---|---|---|---|---|---|---|---|---|---|
| 0.25 | 4.0 | 3.25 | ~3.6 | ~3.6 | 5×3 | 5×3 | 6×3 | 4.5×3 | ~4.5×3 | 4.0 |
| 0.50 | 5.0 | 4.5 | 4.9 | 4.5 | 6×4 | 6×4 | 8×4 | 6×4 | 6×4 | 5.0 |
| 0.75 | 5.75 | 5.0 | 5.25 | 5.0 | 7×5 | 7×5 | 9×4.5 | 6.5×4.5 | 6.5×4.5 | 6.0 |
| 1.00 | 6.5 | 5.5 | 5.5 | 5.5 | 7.7×5.7 | 7.7×5.7 | 10×5 | 7×5 | 7×5 | 6.5 |
| 1.25 | 6.8 | 6.0 | 6.0 | 6.0 | 8×6 | 8×6 | 11×5.5 | 7.3×5.3 | 7.3×5.5 | 7.0 |
| 1.50 | 7.3 | 6.5 | 6.5 | 6.5 | 8.5×6.5 | 8.5×6.5 | 12×6 | 7.5×5.5 | 7.5×5.8 | 7.5 |
| 2.00 | 8.0 | 7.0 | 7.0 | 7.0 | 9×7 | 9×7 | 13×6.5 | 8.5×6.5 | 8×6 | 8.0 |
| 2.50 | 8.7 | 7.5 | 7.5 | 7.5 | 10×8 | 10×8 | 14×7 | 9×7 | 9×7 | 8.5 |
| 3.00 | 9.1 | 8.0 | 8.0 | 8.0 | 10.5×8.5–12×8 | 11×8–12×8 | 15×7 / 14×8 | 10×7.5 | 9.5×7.5 | 9.0 |
| 4.00 | 10.2 | 8.75 | ~9.0 | ~9.0 | 11×9 (3.85) | 13×9 (4.1) | 16.5×8.25 | ~10×8 (3.8) | ~10.5×8 | ~10.5 |
| 5.00 | 11.0 | 9.5 | 9.5 | 9.5 | 12×10 | 15×9 | 17.5×10 (5.5) | 11×9 (5.2) | 11×9 | ~11.5 |

Full round table (MID Diamonds): 4.0 mm=0.25, 4.5=0.36, 5.0=0.50, 5.5=0.66, 6.0=0.84, 6.5=1.00, 7.0=1.30, 7.5=1.67, 8.0=2.00, 8.5=2.43, 9.0=2.75, 9.5=3.35, 10.0=3.87, 10.5=4.41, 11.0=4.91, 11.5=5.85, 12.0=6.84, 13.0=8.51. Melee: 1.0 mm=0.005, 1.3=0.01, 1.5=0.015, 2.0=0.03, 2.5=0.06, 3.0=0.11.

Baguettes (Angara): 1×0.6 mm up to 6×3 mm covering ~0.005–0.30 ct; typical three-stone tapered baguettes are 0.10–0.35 ct each (approx., trade practice).

### 1.4 Sizing a 3D model from carat (how carat maps to geometry)

1. **Face-up outline** comes from the tables above (or ratio × width). For arbitrary L:W, scale the 1 ct reference outline by the cube root of (target ct / reference ct) if depth % is held constant.
2. **Depth**: use ideal depth % (of width for fancies, of diameter for rounds) from [Diamond Pro](https://www.diamonds.pro/education/diamond-depth-and-table/):

| Shape | Table % | Depth % |
|---|---|---|
| Round | 54–57 | 59–62.6 |
| Princess | 69–75 | 68–74 |
| Cushion | 61–68 | 61–68 |
| Emerald / Asscher | 60–68 | 61–68 |
| Oval | 53–63 | <68 |
| Pear | 53–65 | <68 |
| Radiant | 61–69 | <67 |
| Marquise | 53–63 | 58–62 |
| Heart | 56–62 | 56–62 |

   Round anatomy split (approx., trade practice): crown height ≈ 14–16% of Ø, girdle 1–3%, pavilion ≈ 43%; crown angle ≈ 34–35°, pavilion angle ≈ 40.6–41°.
3. **Weight check** (standard trade estimation formulas; coefficients assume SG 3.52 — scale by SG/3.52 for other gems; approx., verify before hard-coding): round = Ø² × depth × 0.0061; oval = L×W×D×0.0062; pear ≈ 0.0060; marquise ≈ 0.0058; heart ≈ 0.0059; emerald ≈ 0.0080 (at 1:1, less when elongated); princess/square ≈ 0.0083; trillion ≈ 0.0057. ([IGS standard gem sizes](https://www.gemsociety.org/article/standard-gem-sizes-chart/) for calibrated sizes; [SG reference](https://yourgemologist.com/SpecificGravity/specificgravity.html)).
4. **Non-diamond**: moissanite outline is identical for the same "DEW"; sapphire/ruby at the same mm weigh ~14% more; beryls (emerald, aquamarine, morganite) ~23% less. Expose size in **mm** in the UI for colored stones and moissanite, with carat as derived info.

### 1.5 The 4Cs and other grading fields

| Field | Scale | Notes |
|---|---|---|
| Cut (round only at GIA) | Excellent / Very Good / Good / Fair / Poor | GIA grades cut only for round brilliants today; oval/pear/marquise cut grades launch in 2027 ([Rapaport](https://rapaport.com/news/gia-to-launch-cut-grade-for-select-fancy-shapes-in-2027/)). IGI already issues Excellent–Poor cut grades for 9 fancy shapes ([IGI](https://www.igi.org/igi-now-issuing-cut-grade-for-fancy-shapes/)). Polish and Symmetry are graded separately on the same scale. |
| Color | D–F colorless; G–J near-colorless; K–M faint; N–R very light; S–Z light | [GIA](https://4cs.gia.edu/en-us/blog/gia-diamond-grading-scales/). Most engagement purchases cluster D–H for lab, F–J for natural (approx., trade practice). Fancy color uses the separate GIA fancy scale (§1.1). |
| Clarity | FL, IF, VVS1, VVS2, VS1, VS2, SI1, SI2, I1, I2, I3 | 11 grades in 6 categories ([GIA](https://4cs.gia.edu/en-us/diamond-clarity/)). |
| Carat | continuous; UI steps 0.05–0.10 ct; average center 1.9 ct (2025) | see §1.3 |
| Fluorescence | None / Faint / Medium / Strong / Very Strong (blue in >95% of cases) | ~25–35% of natural diamonds fluoresce; fewer lab stones ([Robinson's](https://robinsonsjewelers.com/blogs/news/what-percentage-of-diamonds-have-fluorescence), [GIA](https://4cs.gia.edu/en-us/blog/diamond-fluorescence-good-bad/)) |
| Certification | GIA, IGI, AGS (now merged into GIA), GCAL, HRD | IGI certifies ~65–70%+ of lab-grown; GIA moved lab-grown to a simplified "Premium/Standard" descriptor from Oct 2025 ([Brilliant Earth](https://www.brilliantearth.com/guides/igi-vs-gia-certification/), [Velur](https://velur.de/en/blog/labordiamant-zertifizierung-igi-gia-gra/)) |
| Origin | Natural / Lab-grown (CVD or HPHT) / post-growth treatment disclosed | IGI reports state growth method |
| Colored-gem extras | Origin (e.g., Montana, Ceylon), heat treatment (heated/unheated), color description, cut style (faceted vs cabochon) | not needed for diamond flow |

---

## 2. Head / setting styles

The **head** = everything that holds the center stone (prongs or bezel + basket/gallery + collet). Treat "head architecture," "prong style," "prong count," and "profile height" as separate configurator axes.

### 2.1 Prong tip styles

| Prong style | Definition | Best for |
|---|---|---|
| Round / button | Rounded ball tip; most common; small dot from above | all shapes |
| Claw / pointed | Tapered tip; sleeker; covers less outline but reaches further onto crown | all; very popular on ovals/cushions |
| Petite claw | Slimmer claw for small/dainty rings | ≤1.5 ct |
| Double prong / double claw | Each prong split into two thin tips; extra contact points | larger stones, cut-corner shapes, elongated cushions |
| Flat tab / square | Low, flat rectangular tip; least snag | active wearers |
| V-prong (chevron) | V-shaped cap over a point | pear, marquise, heart, princess corners, kite, trillion — protects points from chipping ([GIA](https://4cs.gia.edu/en-us/blog/purchasing-fancy-shaped-diamonds-holiday-buying-guide/)) |
| Compass / N-S-E-W | 4 prongs rotated 45° to the cardinal points instead of diagonals | round, cushion; also "north-south" 2-point look on ovals |
| Shared prong | One prong secures two adjacent stones | halos, side-stone bands |
| Decorative (scalloped, heart, arrow, petal/"tulip" tips) | Custom shaped tips | vintage/floral designs |

Sources: [Beyond4Cs prong guide](https://beyond4cs.com/engagement-ring/diamond-prong-setting-types/), [Clear Cut](https://theclearcut.co/blogs/clear-cut-classroom/types-of-prongs-for-your-engagement-ring), [Gem Breakfast](https://gembreakfast.com/blogs/news/your-guide-to-prong-settings).

### 2.2 Prong count

| Count | Guidance |
|---|---|
| 3 | Triangular/trillion stones; minimalist rounds (rare) |
| 4 | Default for <0.5 ct and for square/rectangular shapes (one per corner); "squarer" look on rounds |
| 6 | Recommended for round ≥ ~1 ct and especially 2 ct+; stone stays secure if one prong fails; makes rounds look rounder ([GIA 4 vs 6](https://4cs.gia.edu/en-us/blog/engagement-ring-settings-4-versus-6-prongs/), [Beyond4Cs](https://beyond4cs.com/engagement-ring/4-prong-setting-vs-6-prong/)) |
| 8 | Large rounds/ovals (3 ct+), vintage looks; sometimes 8 = 4 double prongs |
| 2 + 2 V | Pear/marquise: V at point(s) plus 2–4 side prongs |
| 5 | Pear: one V at tip + 4 sides (common) |

### 2.3 Head architectures

| Architecture | Definition | Profile | Notes |
|---|---|---|---|
| Basket | Prongs joined by a horizontal gallery rail forming an open "basket" under the stone | low–medium | Most common modern solitaire head; any shape |
| Peg head (die-struck head soldered on a peg into the shank) | Prongs meet in a V beneath the stone; no gallery rail | high | Tiffany-style; leaves room for band underneath |
| Trellis | Prongs criss-cross/weave downward into the shank | medium | Round, princess; ornamental side view |
| Tulip / petal | Prongs flare like petals from a cup | medium | Round; romantic |
| Cathedral | Shank rises in arches on both sides up to the head | high | Variants: classic, halo, split-shank, vintage, basket, solitaire, bezel, pavé, channel ([Blue Nile](https://www.bluenile.com/blog/diamonds-jewelry/cathedral-engagement-rings-guide)); elongates finger; snag/cleaning trade-off |
| Straight (non-cathedral) | Head sits on a straight shank | low–medium | Default "low profile" solitaire |
| Martini | Three or four prongs converge to a point like a martini glass (originally earrings; used on minimalist rings) | high | Small stones |
| Floating / illusion | Stone appears to hover: minimal or hidden support, thin prongs, open under-gallery | varies | Modern; often with bezel or "no-rail" claws |
| Crown / coronet | Pierced gallery like a crown | medium | Vintage |
| Peekaboo / "no-rail" claws | Claws with no gallery rail; stone sits very open | low | Taylor & Hart term ([T&H anatomy](https://taylorandhart.com/us/blog/anatomy-of-a-ring)) |

### 2.4 Bezel family

| Type | Definition | Notes |
|---|---|---|
| Full bezel | Continuous metal rim around the entire girdle | Most secure; conforms to stone outline (bezel must be shape-matched: oval bezel for oval, etc.); trending 2023–2026 ([National Jeweler](https://nationaljeweler.com/articles/14726-engagement-ring-trends-2026-what-s-in-and-why)) |
| Half / semi bezel | Rim on two sides only (usually E-W or N-S), open on the others | More light; suits oval, round, marquise |
| Partial / "open" bezel | Rim without top lip, or rim over only part of perimeter | Hybrid looks |
| Flush / gypsy / burnish | Stone sunk into the metal so table is level with the surface; no protruding rim | Very low profile; common on men's bands and small side stones; "burnish" settings up in bridal ([National Jeweler](https://nationaljeweler.com/articles/14726-engagement-ring-trends-2026-what-s-in-and-why)) |
| Floating bezel | Thin bezel on a thin band so the stone seems to float | Modern |
| Bezel + milgrain / bezel + pavé / bezel halo | Decorated rims | Vintage or glam variants |
| Bezel wall thickness | Thin (≈0.5 mm) vs "chunky" (≈1–1.5 mm) | Affects visual size |

Sources: [Uneek](https://www.uneekjewelry.com/uneek-blog/2024/Jan/16/5-types-bezel-settings/), [Mullen](https://mullenjewelers.com/blogs/news/bezel-vs-gypsy-setting-whats-the-difference), [Sobling](https://sobling.jewelry/what-is-flush-setting-gypsy-setting-tension-setting-channel-setting-and-invisible-setting/).

### 2.5 Other holding methods

| Method | Definition | Constraints |
|---|---|---|
| Tension | Stone held by spring pressure of the shank in two grooves; ~12,000–50,000 psi | Only diamond, sapphire, ruby, moissanite (Mohs ≥ 9); hardened alloys (Pt special alloys, titanium, steel); cannot be resized (≤2 sizes at most); manufactured only after sale ([Wikipedia](https://en.wikipedia.org/wiki/Tension_ring)) |
| Tension-style (faux tension) | Looks like tension but a hidden bar/bezel under the stone carries the load | Any stone; resizable |
| Invisible setting | Stones (usually princess/baguette) grooved and slid onto rails so no metal shows | Side stones/clusters, not center |
| Channel | Stones between two metal walls, no beads | Side stones (§4) |
| Bar | Stones separated by metal bars perpendicular to band | Side stones |
| Cage / cup | Enclosing wirework for pearls/opals | Exotic |

### 2.6 Orientation and profile

- **North-South (default) vs East-West**: E-W (horizontal) is meaningful for oval, emerald, pear, marquise, radiant, elongated cushion, baguette; a 2024–2025 trend ([Blue Nile](https://www.bluenile.com/blog/diamonds-jewelry/east-west-rings), [Lauren B](https://www.laurenbjewelry.com/blog/east-west-rings)).
- **Profile height**: low (stone's culet near or below shank top; bezel, basket, flush) → medium (standard basket) → high (peg head, cathedral, trellis). Low profile = less snag, easier band stacking; high = more light, band clearance under head. ([With Clarity head styles](https://www.withclarity.com/blogs/engagement-ring/engagement-ring-head-styles), [MOH London](https://www.mohlondon.com/guidance/engagement-ring-guide/head-style))
- **Setting angle / tilt** (rare): slight rotation of shape (e.g., 45° "diagonal" princess or kite). Treat as exotic-but-parametric.

### 2.7 Gallery styles and hidden details

| Gallery option | Definition |
|---|---|
| Open gallery (plain) | Simple basket rail, nothing under the stone |
| Hidden halo | Ring of melee under the stone on the gallery rail/collet, visible only in profile; 18% of 2024 rings ([Plumb Club/The Knot](https://plumbclub.com/reference-documents/the-knot-2025-real-engagements-weddings-survey/)) |
| Under-gallery pavé / diamond bridge | Melee down the sides of the head or across the bridge |
| Peekaboo / secret stone | Single small gem (often birthstone or colored) set in the gallery, under the head, or flush inside the band ([Barkev's](https://barkevs.com/blogs/blog/peekaboo-birthstones-the-discreet-way-to-personalize-an-engagement-ring)) |
| Filigree / pierced / scroll gallery | Cut-out metalwork under the stone (vintage) |
| Cathedral gallery | Arched openings (see §2.3) |
| Closed back / plate | Solid metal under stone (protective, common for opal) |
| Custom sculpted gallery | Hand-carved initials, dates, motifs → route to jeweler |

---

## 3. Halo

| Halo option | Definition | Notes |
|---|---|---|
| None | — | ~70–75% of rings |
| Single / classic | One row of melee around center | 13% (2024); makes stone look ~0.5 ct larger (approx., trade practice) |
| Double | Two concentric rows | glam |
| Triple | Three rows | rare |
| Hidden | Under the stone (see §2.7) | 18% (2024) |
| Semi-hidden | Partly visible from top, more from side | |
| Floating halo | Gap between center and halo; halo suspended | modern |
| Cascade | Melee flowing down gallery sides | |
| Combination | Visible + hidden halo together | |
| Outline: conforming (shape-matched) | Halo follows the stone outline (oval halo on oval) | default |
| Outline: cushion/square halo on round | Softly squared halo on a round center | popular 2010s |
| Outline: geometric (Art Deco octagon/hex) | Straight-sided frame | vintage |
| Outline: floral / petal / sunburst-starburst | Pointed or petal melee arrangement (starburst uses marquise/pear melee radiating) | vintage/romantic |
| Outline: scalloped | Wavy outer edge | |
| Halo stone type | diamond melee (default), colored sapphire/ruby/emerald halo, black diamond, alternating colors | |
| Halo setting technique | pavé/bead (default), shared-prong, bezel-set halo, channel halo | |
| Halo melee size | 1.0–1.5 mm typical; micro-pavé ≤1.0 mm (approx., trade practice) | affects total halo width |
| Halo with milgrain edge | Beaded border | vintage |

Sources: [Angara halo types](https://www.angara.com/blog/types-of-halo-engagement-rings/), [Angara halo structures](https://www.angara.com/blog/halo-ring-structures-explained/), [Gabriel](https://www.gabrielny.com/blog/different-types-of-halo-settings-in-engagement-rings/).

---

## 4. Side stones and accents

### 4.1 Setting techniques for accent stones

| Technique | Definition | Look / durability |
|---|---|---|
| Pavé (bead-set) | Melee held by tiny beads raised from the metal | classic; most common band accent |
| Micro-pavé | Same but stones ≤ ~0.005–0.01 ct set under microscope | maximal sparkle, low profile, beads can wear |
| Bright-cut pavé | Beads between two polished walls ("cut-down"); often with milgrain | most durable pavé; traditional |
| French pavé / fishtail / "V-cut" | V-shaped cuts between stones; minimal metal, angular from side | modern, delicate |
| U-cut / scalloped pavé | U-shaped grooves visible from the side; scalloped edge | modern; shallow vs deep variants |
| Neo-French | Hybrid U-cut + French with etched walls | boutique |
| Multirow pavé | 2–5 rows across a wide/domed band | "diamond fabric" |
| Shared prong | Adjacent stones share prongs; more stone, less metal | larger accents (1.5–3 mm) |
| Channel | Stones in a groove between two rails; no prongs | protective, secure, snag-free; rounds, princess, baguettes |
| Bar | Stones separated by vertical metal bars | open sides, more light |
| Bezel-set accents | Each accent has its own rim | bezel-style rings |
| Flush/burnish accents | Stones sunk into band surface | men's bands, scattered "starry" looks |
| Invisible | Grooved stones slid onto rails | princess/baguette blocks |
| Prong-set graduated | Individually prong-set larger stones stepping down in size | five-stone, graduated bands |

Sources: [The Knot pavé 101](https://www.theknot.com/content/pave-diamond-rings), [Victor Canera](https://victorcanera.com/us/education/jewelry/pave-styles), [Leon Megé pavé](https://leonmege.com/pave-types-in-jewelry/), [IGS protective settings](https://www.gemsociety.org/article/protective-gem-settings/).

### 4.2 Three-stone side-stone shapes and pairing rules

| Side-stone shape | Faceting | Pairs best with center | Notes |
|---|---|---|---|
| Round | brilliant | round (classic), any | "Mickey ears" risk if too large (Leon Megé) |
| Pear | brilliant | round, oval, cushion, marquise | points out; very popular 2020s |
| Oval | brilliant | oval, round | |
| Marquise | brilliant | round, oval | |
| Trapezoid (step-cut) | step | emerald, asscher | parallel edge sits flush |
| Trapezoid (brilliant) | brilliant | radiant, princess, cushion, oval | |
| Tapered baguette | step | any | most versatile; N-S or E-W orientation |
| Straight baguette | step | emerald, radiant, princess | |
| Tapered bullet / bullet | step, one pointed end | any elongated | point needs V-prong |
| Half-moon | brilliant or step | oval, cushion, radiant, round, emerald | prefer "skinny" ratio ≥2.0 |
| Trillion / trilliant | brilliant | radiant, princess, round | points vulnerable |
| Shield | 5–7 sides | almost any | |
| Epaulette / chevron | 5 sides | step-cut centers | chevron more tapered |
| Cadillac | 5-sided trapezoid with pointed top | emerald/radiant | |
| Kite / lozenge | 4 sides | edgy modern designs | |
| French cut | antique square step | antique cushion, asscher, old cuts | |
| Calf's head | triangular step-cut | vintage | |
| Cushion | brilliant | cushion, oval, round | |
| Princess / emerald / radiant / asscher | as named | matching shapes | |
| Colored side stones | any | any | e.g., sapphire pears flanking diamond |

Sizing rule of thumb (approx., trade practice): side stones total ≈ 20–50% of center weight; each side ≈ 15–30% of center width. Sources: [Leon Megé side stones](https://leonmege.com/side-stones/), [Frank Darling](https://frankdarling.com/blog/epaulettes-trapezoids-and-every-alternative-diamond-shape-you-should-meet/), [Lauren B](https://www.laurenbjewelry.com/blog/choosing-side-stones-for-your-three-stone-engagement-ring/).

### 4.3 Multi-stone configurations

| Configuration | Definition |
|---|---|
| Solitaire | Single center; 38% of 2025 rings |
| Solitaire + accented band | Center + pavé/channel/bar shank; accents run 1/4, 1/3, 1/2, 3/4 or full way around |
| Three-stone (trilogy) | Center + 2 sides (past/present/future) |
| Five-stone | Center + 2 each side, often graduated; or 5 near-equal stones (0.30–1.0 ct each) across band |
| Seven-stone / graduated bands | Progressively smaller stones from center out |
| Toi et moi (two-stone) | Two center stones side by side, often bypass shank; common pairs: oval+pear, oval+oval, emerald+pear, diamond+colored gem ([Washington Diamond](https://washingtondiamond.com/blogs/the-diamond-editorial/the-art-of-two-unpacking-toi-et-moi-ring-settings)) |
| Cluster | Many small stones grouped to read as one larger stone; symmetric (flower, illusion) or asymmetric/organic |
| Halo (see §3) | |
| Bypass with accent | Second smaller stone on crossover |
| Scattered / constellation | Random flush-set melee on shank |

### 4.4 Wedding-band / eternity coverage

| Coverage | Definition | Resizable? |
|---|---|---|
| Plain | no stones | yes |
| 1/4 – 1/3 – 1/2 ("half eternity") | stones across top only | yes (at bottom) |
| 3/4 eternity | stones except bottom ~25% | limited (1/2 size approx.) |
| Full eternity | stones all the way around | **no** — must be remade ([MiaDonna](https://www.miadonna.com/blogs/news/why-eternity-bands-cant-be-resized), [Lauren B](https://www.laurenbjewelry.com/blog/eternity-bands-101/)) |

---

## 5. Shank / band

### 5.1 Cross-section profiles (outer surface × inner surface)

| Outer profile | Definition |
|---|---|
| Half-round / D-shape / dome | Rounded outside, flat inside; the traditional band |
| Flat | Rectangular section; modern |
| Flat with beveled edges | Flat top with angled edges → three faces |
| Knife-edge | Two faces meeting at a central ridge; makes band look thinner; pairs poorly with wide pavé (no flat top) |
| Round / full round (wire) | Fully circular section (2–2.5 mm) |
| Oval / "standard comfort" | Softly rounded outside and inside |
| Square | Squared section |
| Concave / channel | Grooved center |
| Court / "European" (UK term) | Rounded inside and outside (= comfort-fit half-round) |
| Pipe-cut | Flat outside, flat inside, square edges |

**Inner profile** is independent: **standard (flat inside)** vs **comfort fit (domed inside)** ([Krikawa](https://www.krikawa.com/ring-advice/glossary/ring-shape), [Cooksongold](https://www.cooksongold.com/blog/buying-guide/7-different-types-of-ring-shanks-and-how-to-identify-them/), [Saga Bands](https://www.sagabands.com/blogs/news/guide-to-wedding-ring-profiles)). Comfort fit needs ~0.2–0.3 mm extra thickness and fits ~1/4 size looser (approx., trade practice).

### 5.2 Widths and thicknesses

| Item | Typical range | Notes |
|---|---|---|
| Women's engagement ring band width | 1.5–2.5 mm most common; 2.0 mm the modal choice; 1.8 "delicate," 2.5 "structured," 3.0 "bold" | [Blue Nile](https://www.bluenile.com/blog/diamonds-jewelry/ring-band-width), [Lilydia](https://lilydiajewellery.com/insights/engagement-ring-band-width) |
| Minimum safe width | 1.6 mm (many jewelers refuse <1.5–2.0 mm in 14k; use platinum for <2 mm) | [IGS band widths](https://www.gemsociety.org/article/engagement-ring-band-widths/) |
| Wide/cigar bands | 4–8 mm; trending 2026 ("cigar band" shanks) | [National Jeweler](https://nationaljeweler.com/articles/14726-engagement-ring-trends-2026-what-s-in-and-why) |
| Women's wedding band width | 2–3 mm when stacked; 4–5 mm worn alone | [Fascinating Diamonds](https://www.fascinatingdiamonds.com/blogs/education/wedding-band-widths-explained-mm-sizing-guide-for-men-and-women) |
| Men's wedding band width | 5–8 mm; 6 mm modal (5 mm rising) | same |
| Band thickness (radial) | 1.4–2.0 mm typical; 1.2 mm minimum for platinum, 1.5 mm for gold (approx., trade practice) | |
| Taper | shoulders may taper from e.g. 2.2 mm at head to 1.8 mm at base, or reverse-taper | |
| Metal weight vs size | ~+3% weight per full US size on a 6 mm band; 14k ≈ 6 g vs Pt ≈ 10 g for identical 4 mm band | [deBebians](https://debebians.com/pages/ring-weight), [Abbott Atelier](https://www.abbottatelier.com/blogs/news/how-much-does-a-ring-weigh) |

### 5.3 Shank styles (top-view silhouette)

| Style | Definition |
|---|---|
| Straight / plain | Uniform band |
| Tapered | Narrows toward head (makes stone look bigger) or reverse-tapered (widens at head) |
| Cathedral | Arches rising to head (see §2.3) |
| Split shank | Band divides into 2 (or 3) strands approaching the head |
| Twisted / rope / braided | Two or more strands wound together; one may be pavé |
| Infinity | Figure-8 crossover of strands |
| Bypass / crossover | Ends sweep past each other around the stone(s); standard for toi et moi |
| Criss-cross | Two rows crossing, often two-tone |
| Chevron / V | Band forms a V under or toward the stone |
| Curved / contour / crescent | Band bows outward at the top |
| Bubble / dome | Wide domed shank |
| Open / negative-space | Gap in the shank (e.g., open at the top with stone bridging) |
| Stackable-illusion | Multiple defined rows reading as separate rings |
| Wide / cigar | 4–8 mm flat band, often with flush stone |
| Free-form / asymmetric | Organic, non-symmetric |
| Floral / vine / leaf | Nature motifs cut into or built from the shank |
| Engraved shank | Hand/machine engraved patterns on outside |
| Knife-edge shank | See §5.1 |
| Euro shank | Squared-off bottom of the finger hole to stop spinning on top-heavy rings |
| Squared shoulders / square shank | Squared top half or all four sides of finger hole |

Sources: [Gabriel shanks](https://www.gabrielny.com/blog/engagement-ring-shanks-bands-explained/), [Bario Neal](https://bario-neal.com/blog/breaking-down-different-engagement-ring-shank-styles/), [Twirl Weddings](https://www.twirlweddings.com/ring-shank-styles/), [Krikawa](https://www.krikawa.com/ring-advice/glossary/ring-shape).

---

## 6. Metals

### 6.1 Precious metals for engagement rings

| Metal | Composition | Color | Density (g/cm³, approx.) | Notes |
|---|---|---|---|---|
| 10k gold | 41.7% Au | yellow/white/rose | ~11.5 | Hardest, palest; US minimum for "gold"; budget; more allergy risk (nickel in white) |
| 14k gold | 58.3% Au | yellow/white/rose | ~13 | US default for bridal; best durability/price |
| 18k gold | 75% Au | yellow/white/rose | ~15.5 | Richer color; softer; European/luxury default |
| 22k / 24k | 91.7 / 99.9% Au | deep yellow | ~17.5–19.3 | Too soft for stone-set rings; Asian/heritage bands only |
| White gold | Au + Ni or Pd + Ag/Zn; **rhodium plated** | bright white; re-plate every 1–3 yrs | ~13–15.5 | Nickel-free (palladium) white gold available for allergies |
| Rose gold | Au + Cu (+Ag); 14k pinker than 18k | pink | ~13–15 | Not plated; copper can react on some skin |
| Green gold | Au + Ag | pale green | | rare |
| Platinum 950 | 95% Pt + 5% Ru/Ir/Co | naturally white, no plating | ~20.5–21.4 | ~1.6× heavier than 14k; develops patina; strongest prongs; 900 Pt and Pt/Pd 950 variants |
| Palladium 950 | 95% Pd | white, no plating | ~12 | Light; price-volatile; less common |
| Sterling silver 925 | 92.5% Ag | white, tarnishes | ~10.4 | Soft; only budget/placeholder/moissanite rings |
| Two-tone / mixed | e.g., yellow shank + platinum/white head (very common: white head keeps diamond looking whiter) | | | Options: head vs shank, inner sleeve, split-shank strands, halo vs band |

Sources: [Brilliant Earth karat guide](https://www.brilliantearth.com/guides/gold-karat/), [GIA white metals](https://4cs.gia.edu/en-us/blog/pick-right-white-metal-engagement-wedding-ring/), [Taylor & Hart white gold vs platinum](https://taylorandhart.com/us/blog/white-gold-vs-platinum), [MoissaniteCo metals guide](https://www.moissaniteco.com/precious-metals-guide-all-about-gold-and-platinum).

### 6.2 Surface finishes

| Finish | Definition |
|---|---|
| High polish (mirror) | Default; shows scratches, re-polishable |
| Satin | Fine uniform frosted sheen, low directionality |
| Brushed | Visible directional grain (linear, cross-satin, circular) |
| Matte / sandblast / bead-blast | Non-reflective, grainy; from blasting media |
| Hammered | Faceted dimples from a hammer; rustic; can be polished or matte |
| Florentine | Hand-engraved cross-hatch |
| Stone / ice finish | Random scratches (hand-tumbled look) |
| Wire-brush / bark | Coarse texture |
| Milgrain (see §7) | Beaded edge, also a finish detail |
| Rhodium / black rhodium / ruthenium plating | Bright white, or dark grey/black surface |
| Combination | e.g., brushed center + polished edges |

Sources: [Borsheims finishes](https://www.borsheims.com/blog/types-of-jewelry-finishes-and-styles/), [Zalori](https://zalori.com/blogs/news/jewelry-finishes-decoded-high-polish-vs-satin-matte-hammered-and-florentine), [CaratX 16 textures](https://caratx.com/blog-post/the-ultimate-guide-to-ring-finishes-16-textures-every-jeweler-must-master).

### 6.3 Alternative metals (mostly wedding bands, especially men's)

| Material | Hardness / feel | Resizable? | Notes |
|---|---|---|---|
| Tungsten carbide | Mohs ~9; heavy; scratch-proof | No | Can crack/shatter on hard impact; cannot be cut off conventionally (must be cracked) |
| Titanium | Light, strong, hypoallergenic | No / very limited | Grey; can be anodized colors |
| Tantalum | Blue-grey, dense, hypoallergenic | Limited | Trending 2025–26 |
| Cobalt chrome | Bright white like platinum, hard | No | |
| Black zirconium | Heat-treated black oxide surface | Limited | |
| Stainless steel | Cheap, durable | Limited | |
| Damascus steel | Layered pattern | Varies | Can rust; often lined with gold/titanium |
| Ceramic (zirconia) | Mohs ~9, colors (black/white) | No | Can chip/shatter |
| Carbon fiber | Light, black weave | No | Often as inlay |
| Meteorite (iron-nickel, Widmanstätten pattern) | Inlay or full | No | Rust-prone; etched pattern |
| Wood inlay (koa, whiskey barrel, etc.) | Inlay in metal channel | Base metal only | Not waterproof-forever |
| Antler / dinosaur bone / crushed stone / opal inlays | Inlay | No | Etsy/Manly Bands category |
| Silicone | Flexible safety ring | n/a | Active/work use |
| Mokume gane | Layered mixed precious metals with wood-grain pattern | Yes (precious) | Artisan; exotic for engagement rings |

Sources: [With Clarity alt metals](https://www.withclarity.com/blogs/wedding-bands/guide-to-alternative-metals-for-mens-wedding-bands), [Manly Bands comparison](https://manlybands.com/a/blog/wedding-band-materials-comparison-guide), [Forge & Lumber](https://forgeandlumber.com/blogs/news/alternative-metal-wedding-rings-pros-cons-and-a-clear-comparison-chart), [Jewelers Mutual](https://www.jewelersmutual.com/resources/individuals/proposal-engagement/strongest-metals-wedding-band).

---

## 7. Details, ornamentation, personalization, sizing

### 7.1 Metalwork details

| Detail | Definition | Where it appears |
|---|---|---|
| Milgrain ("thousand grains") | Row of tiny beads along an edge | bezel rims, band edges, halo borders, gallery; Art Deco / Edwardian ([Serendipity](https://www.serendipitydiamonds.com/blog/what-is-milgrain-edging/)) |
| Filigree | Fine wire/openwork scrolls soldered into lace-like patterns | galleries, shoulders; Edwardian/Art Deco ([Diamond Reserve](https://thediamondreserve.com/engagement-rings/what-is-the-difference-between-milgrain-and-filigree/)) |
| Hand engraving (graver) | Scrolls, wheat, vines, "orange blossom," lettering; 3D relief | shank exterior, shoulders, bezel |
| Machine / laser engraving | Precise text/symbols; fonts typically Times New Roman, Helvetica, Script; ~20–30 characters inside band depending on size | inside band; sometimes outside ([Adiamor](https://adiamor.com/blog/education/can-i-engrave-my-engagement-ring-what-you-need-to-know-about-engravings), [Ben Garelick](https://www.bengarelick.com/blogs/news/engraving-wedding-engagement-rings)) |
| Engraving content types | names, dates, coordinates, fingerprints, handwriting, sound waves, symbols (hearts, infinity), Roman numerals | |
| Beading / rope wire / twisted wire borders | Decorative wire edges | vintage |
| Enamel (hot or cold) | Colored glass/resin fill | exotic for engagement rings |
| Piercing / openwork | Cut-out patterns in shoulders/gallery | vintage |
| Knife-edge or bevel highlight | Polished edge on satin band | modern |

### 7.2 Era / motif vocabulary (style presets)

| Preset | Hallmarks |
|---|---|
| Victorian (1837–1901) | Yellow/rose gold, old mine cuts, clusters, snakes (Queen Victoria's serpent ring), hearts, hands, floral |
| Edwardian (1901–1915) | Platinum, filigree, milgrain, lace-like piercing, old European cuts, bows, garlands |
| Art Deco (1920–1935) | Geometric halos (octagon/hex), step cuts, baguettes, calibré sapphires/onyx, symmetry, milgrain |
| Retro (1935–1950) | Rose gold, bold scrolls, large synthetic rubies |
| Mid-century / 1960s–70s | Trillion side stones, textured gold, clusters |
| Modern / minimalist | Thin bands, bezels, claw prongs, hidden halos, E-W |
| Nature | Leaf, vine, branch/twig, floral (rose, lotus, cherry blossom), petal prongs |
| Celestial | Stars, moons, starburst halos, constellation flush stones |
| Celtic / Claddagh / knotwork | Trinity knots, Claddagh hands-heart-crown |
| Geometric / architectural | Hexagons, kites, chevrons, open shanks |
| Gothic / alternative | Black metal, black diamonds, skulls, serpents, salt-and-pepper |

### 7.3 Hidden / personal details (parametric)

Hidden halo; peekaboo birthstone under head or flush inside band; inside engraving; colored melee in gallery; secret message/symbol engraved on collet; fingerprint; two-tone inner sleeve. ([Pageo](https://www.pageo.com/blogs/news/beyond-the-blueprint-how-to-incorporate-hidden-details-into-a-custom-ring-design), [Laura Preshong](https://www.laurapreshong.com/blogs/fromthebench/personalize-your-engagement-ring-with-interior-engraving-or-hidden-birthstones-customized-details-with-deep-meaning))

### 7.4 Sculptural / figural (the non-parametric tail)

Examples in the market: coiled dragon rings ([Krikawa](https://www.krikawa.com/rings/dragon-engagement-ring)), ouroboros/serpent wrap rings, skull-with-snakes, panther/animal rings, hands (fede/gimmel), faces, wings, mermaids, mechanical/gear rings, puzzle rings, spinner rings, cameo/intaglio carved stones. These are hand-modeled CAD or carved-wax pieces; a configurator should collect a brief + references and route to a designer rather than attempt parameters. Estimated share of engagement purchases: well under 0.5% (no survey category exists; The Knot lumps them into "other").

### 7.5 Matching wedding bands / bridal sets

| Band type | Purpose |
|---|---|
| Straight (flush-fit) | Sits flat against ER only if ER head clears the band (high/peg/cathedral heads, or hidden-halo baskets that end above band) |
| Curved / contour / crescent | Gentle arc hugs a low basket or halo |
| Chevron / V | Points around pear/marquise/kite centers |
| Notched | Small cut-out where the ER head nests |
| Wrap / jacket / enhancer | Band wraps around both sides of the ER (open or closed) |
| Eternity / half-eternity | see §4.4 |
| Insert / guard | Band with slot the ER slides into |
| Stackers | Thin plain/pavé bands (1.3–2 mm) worn multiply |

Sources: [Robinson's contour](https://robinsonsjewelers.com/blogs/news/what-is-a-contour-wedding-band-the-gap-free-secret-to-a-perfectly-stacked-bridal-set-1), [Kherish curved/chevron](https://www.kherish.com/blogs/news/curved-contoured-and-chevron-bands-a-kherish-guide), [Nekta halo fit](https://www.nektanewyork.com/blogs/news/why-some-wedding-bands-never-sit-flush-with-halo-rings), [La Joya hidden halo fit](https://www.lajoyajewelry.com/how-to-get-a-wedding-band-to-sit-flush-with-a-hidden-halo-engagement-ring/).

### 7.6 Ring sizes, systems, and fit aids

| US | UK/AU | EU/ISO (circ. mm) | JP | Inner Ø mm | Circ. mm |
|---|---|---|---|---|---|
| 3 | F | 44 | 4 | 14.0 | 44.0 |
| 3.5 | G | 45 | 5 | 14.4 | 45.2 |
| 4 | H | 46 | 7 | 14.8 | 46.5 |
| 4.5 | I | 48 | 8 | 15.2 | 47.8 |
| 5 | J | 49 | 9 | 15.7 | 49.3 |
| 5.5 | K | 50 | 10 | 16.0 | 50.3 |
| 6 | L | 51 | 12 | 16.5 | 51.8 |
| 6.5 | M | 52 | 13 | 16.9 | 53.1 |
| 7 | N | 54 | 14 | 17.3 | 54.4 |
| 7.5 | O | 55 | 15 | 17.7 | 55.7 |
| 8 | P | 57 | 16 | 18.1 | 57.0 |
| 8.5 | Q | 58 | 17 | 18.5 | 58.3 |
| 9 | R | 59 | 19 | 19.0 | 59.5 |
| 9.5 | S | 60 | 20 | 19.4 | 60.8 |
| 10 | T | 62 | 21 | 19.8 | 62.1 |
| 10.5 | U | 63 | 22 | 20.2 | 63.4 |
| 11 | V | 64 | 23 | 20.6 | 64.6 |
| 11.5 | W | 65 | 24 | 21.0 | 65.9 |
| 12 | X | 66 | 25 | 21.4 | 67.2 |
| 12.5 | Y | 68 | 26 | 21.8 | 68.5 |
| 13 | Z | 69 | 27 | 22.2 | 69.7 |

Source: [RingSize.io](https://ringsize.io/). Systems: US/Canada numeric 3–15 with half (and quarter) sizes; UK/AU/NZ/SA letters A–Z+; EU/ISO 8653 = inner circumference in mm; Japan/China numeric; Swiss = circumference − 40; India (1–30 scale). Each US size ≈ 0.8 mm diameter ≈ 2.5 mm circumference.

Distribution: women's modal US size 6 (25–30% of orders), avg 6–6.5, ~50% between 6 and 8; men's modal 10, avg 9–10, ~80% within 9–11 ([Serendipity](https://www.serendipitydiamonds.com/blog/most-common-engagement-ring-size/), [TheCaratCut](https://www.thecaratcut.com/guides/average-ring-size-stats), [GentleBands](https://gentlebands.com/blog/average-mens-ring-size-us-benchmarks/)). Configurator should offer sizes 3–13 in half sizes (quarter sizes on request), default 6 for women's ER, 10 for men's band.

Fit aids: **sizing beads / "speed bumps"** (two small beads soldered inside bottom of shank for large knuckles or top-heavy spinning) ([Martin Busch](https://www.martinbuschjewelers.com/blogs/news/what-are-speed-bumps-or-sizing-beads-and-do-i-need-them)); **sizing bar / spring insert**; **euro shank** (§5.3); **arthritis/hinged shank** (exotic).

---

## 8. Market share and what "99.8%" means

### 8.1 Center-stone origin and type (US)

| Year of purchase | Lab-grown | Natural | Source |
|---|---|---|---|
| 2020 | ~18% (baseline; +239% to 2025) | | The Knot via [JCK](https://www.jckonline.com/editorial-article/lab-diamonds-engagement-market/) |
| 2023 | 46% | | [Plumb Club](https://plumbclub.com/reference-documents/the-knot-2025-real-engagements-weddings-survey/) |
| 2024 | 52% | 48% | same |
| 2025 | 61% (by units); ~47.7% by insured value | | [JCK](https://www.jckonline.com/editorial-article/lab-diamonds-engagement-market/), [Rosec](https://www.rosecjewels.com/blogs/jewelry-news/lab-grown-diamonds-secure-leading-position-among-retailers-in-2026) |

Non-diamond: ~17% of 2025 rings had a non-clear-diamond center; sapphire (23% of those ≈ 4% overall) and moissanite (20% ≈ 3.4% overall) lead; then ruby, emerald, morganite, colored diamonds, salt-and-pepper, others. (Jewelers Mutual's Aug-2024 survey of owners who bought in the last 5 years still showed 68% mined vs 18% lab — a lagging indicator — [Jewelers Mutual](https://www.jewelersmutual.com/newsroom/jewelers-mutual-insights-on-engagement-ring-trends).)

### 8.2 Shape (US)

| Shape | 2024 (The Knot) | 2025 (The Knot) | Older aggregate (Angara, ~2019–21) |
|---|---|---|---|
| Round | 28% | 26% | 43% |
| Oval | 25% | 25% | 15% |
| Emerald | 10% | 8% | |
| Princess | 10% | 8% | 13% |
| Pear | | 8% | |
| Marquise | | 8% | |
| Cushion | | 6% | |
| Radiant | | 6% | |
| Other (asscher, heart, hex, antique, etc.) | 27% | ~5% | |

Fancy shapes now 52% of centers ([Barkev's](https://barkevs.com/blogs/blog/2026-engagement-ring-trends)); lab buyers prefer oval, natural buyers round ([Rapaport](https://rapaport.com/news/lab-grown-taking-over-engagement-ring-spending-the-knot/)); Stuller reports growth in emerald, marquise, elongated cushion ([National Jeweler](https://nationaljeweler.com/articles/14726-engagement-ring-trends-2026-what-s-in-and-why)).

### 8.3 Setting, metal, band

| Axis | Data |
|---|---|
| Setting 2024 | Prong/solitaire 35%, hidden halo 18%, classic halo 13%, other (three-stone, bezel, pavé-only, vintage, cluster, toi et moi) 34%; 51% had side stones/accents |
| Setting 2025 | Solitaire 38%; bezel and burnish rising 3 yrs running; thicker/cigar shanks rising |
| Metal 2025 | Yellow gold 39% (up 140% in 5 yrs), white gold 35%, platinum 13%, rose/other ≈13%; older aggregate (pre-2022): white gold 48%, yellow 16%, platinum 13%, rose 13% ([Angara stats](https://www.angara.com/blog/engagement-ring-statistics-trends/)) |
| UK 2025 | One UK retailer guide reports yellow gold 57% vs platinum 42% of its ER sales ([Nick Ireland](https://nickireland.com/guides/engagement-ring-metals/)) |
| Custom | ~90% made custom edits (2025); 48% customized design elements (older Angara aggregate) |
| Band widths | 2 mm modal for women's ER; 6 mm modal men's band |
| Wedding band purchase | 61% of ER buyers later buy wedding rings (Angara aggregate); 94% of couples exchange ≥1 ring |

### 8.4 Coverage plan: what is "in" vs "exotic"

**Must-have (covers ~95%+ on its own):** round, oval, emerald, princess, pear, marquise, cushion (square + elongated, chunky vs crushed ice), radiant × lab/natural diamond + moissanite + sapphire (all colors) × solitaire-prong (4/6, claw/round/double, basket vs peg vs cathedral) + hidden halo + halo + pavé/channel band + three-stone (round/pear/baguette/trapezoid/half-moon sides) + bezel/half-bezel × 14k/18k yellow, white, rose, platinum × 1.6–3 mm band, half-round/flat/knife-edge, comfort fit × high polish.

**Should-have (pushes to ~99.5%):** asscher, heart, hexagon, kite, old European/old mine, rose cut, trillion-as-center; ruby, emerald, morganite, aquamarine, alexandrite, spinel, tourmaline, salt-and-pepper, fancy-color diamonds; E-W orientation; V/compass/tab prongs; double/floating/geometric/floral halos; toi et moi, five-stone, cluster; split/twisted/bypass/chevron/open shanks; two-tone; milgrain, filigree, engraving; satin/hammered/brushed finishes; wedding band designer with contour/chevron/notched/eternity; alt metals for bands; 10k gold, palladium.

**Exotic (~0.2–0.5%; route to designer):** figural/sculptural (dragons, snakes wrapping the stone, skulls, animals, hands, faces), pictorial hand-carved galleries, enamel, mokume gane in the ER, true tension settings, opal/pearl/tanzanite centers, rough/slice/cabochon/briolette/portrait-cut centers, invisible-set center mosaics, kinetic/puzzle/spinner mechanisms, hinged arthritis shanks, non-circular finger holes beyond euro/square, more than two center stones of differing shapes, asymmetric multi-cluster "garden" rings with >7 mixed gems, rings incorporating heirloom stones of non-standard cut (accept as "supply your own stone" with measured dimensions).

---

## 9. Ring and diamond anatomy vocabulary

| Term | One-line definition |
|---|---|
| Head | The assembly that holds the center stone: prongs/bezel + gallery + collet |
| Setting | The manner in which a stone is held (prong, bezel, tension, channel…) and, loosely, the whole mounting |
| Mounting / semi-mount | The ring without the center stone (semi-mount may include side stones) |
| Prong / claw | Metal finger bent over the girdle to hold a stone |
| Prong tip | The visible end of the prong on the crown (round, claw, tab, V) |
| Collet | Circular rim/seat into which the stone is set (UK term; also the bezel cup) |
| Basket | Open framework of prongs and rails under the stone |
| Gallery | The part of the head under the stone visible in profile; may be plain, pierced, or diamond-set |
| Gallery rail | Horizontal bar connecting prongs beneath the stone |
| Under-gallery | Metal directly under the stone's pavilion; site of hidden halos |
| Bridge | Metal running under the head connecting the two sides of the shank (may be pierced/arched) |
| Shoulders | Top portions of the shank on either side of the head |
| Shank / band | The hoop that encircles the finger |
| Base / sizing area | Bottom of the shank where sizing cuts are made |
| Bezel | Metal rim surrounding a stone |
| Seat / bearing | Groove cut in prongs or bezel where the girdle rests |
| Peg | Post under a die-struck head soldered into the shank |
| Cathedral arch | Rising shoulder that meets the head above the band line |
| Center stone | The featured stone |
| Side stones | Stones immediately flanking the center |
| Accent stones / melee | Small stones (<0.20 ct; melee typically <0.18 ct, 0.8–2.7 mm) elsewhere on the ring |
| Table | Flat top facet of the stone |
| Crown | Upper part of stone between table and girdle |
| Girdle | Narrow perimeter separating crown and pavilion; where prongs grip |
| Pavilion | Lower part of stone from girdle to culet |
| Culet | Tiny facet or point at the bottom of the pavilion |
| Star / bezel / upper-girdle / lower-girdle / pavilion main facets | Named facet groups of a round brilliant |
| Bow-tie | Dark bow-shaped shadow across ovals, pears, marquises, hearts |
| Depth % / table % | Depth and table as percentage of girdle diameter (or width) |
| Comfort fit | Domed inner surface of the shank |
| Euro shank | Squared-off bottom of the shank |
| Milgrain | Beaded edge detail |
| Filigree | Openwork wire ornament |
| Profile | Side view / height of the ring; also the cross-section of the shank |
| DEW | Diamond-equivalent weight (moissanite sizing) |

Sources: [Market Square Jewelers](https://www.marketsquarejewelers.com/blogs/msj-handbook/anatomy-of-a-ring-terminology-definition), [Taylor & Hart](https://taylorandhart.com/us/blog/anatomy-of-a-ring), [GIA diamond anatomy](https://4cs.gia.edu/en-us/blog/diamond-anatomy-explained/), [Gem Breakfast](https://gembreakfast.com/blogs/news/anatomy-of-a-ring).

---

## 10. Constraints and incompatibilities the configurator should enforce

| # | Rule | Rationale / source |
|---|---|---|
| 1 | Tension setting only with diamond, moissanite, sapphire, ruby (Mohs ≥ 9); block emerald, opal, tourmaline, beryls, garnet, tanzanite | [Wikipedia tension ring](https://en.wikipedia.org/wiki/Tension_ring) |
| 2 | Tension setting: no resize (warn), no gold below hardened alloy; recommend platinum/titanium; manufactured to stone; no halo/side stones on the tension span | same |
| 3 | Pointed shapes (pear, marquise, heart, kite, trillion, princess corners) must get V-prongs, claw-on-corner, or bezel; auto-place a V at each point | [GIA fancy shapes](https://4cs.gia.edu/en-us/blog/purchasing-fancy-shaped-diamonds-holiday-buying-guide/) |
| 4 | Bezel outline must match stone outline (oval bezel for oval, cut-corner bezel for emerald/radiant); regenerate bezel geometry on shape change | [Uneek bezel](https://www.uneekjewelry.com/uneek-blog/2024/Jan/16/5-types-bezel-settings/) |
| 5 | Halo outline defaults to conforming; allow cushion/square halo only on round/cushion centers; geometric halos on step cuts | [Angara halo](https://www.angara.com/blog/types-of-halo-engagement-rings/) |
| 6 | Hidden halo requires a basket/peg head with an under-gallery tall enough for melee (≈1.0–1.3 mm); disable on flush/gypsy and on very low bezels | [La Joya](https://www.lajoyajewelry.com/how-to-get-a-wedding-band-to-sit-flush-with-a-hidden-halo-engagement-ring/) |
| 7 | Prong count: rounds ≥ ~1 ct default to 6; squares/rectangles default 4 corner prongs; <0.5 ct default 4; 8 only for ≥ 2.5–3 ct or vintage preset | [GIA 4 vs 6](https://4cs.gia.edu/en-us/blog/engagement-ring-settings-4-versus-6-prongs/) |
| 8 | Soft/brittle centers (emerald, opal, tanzanite, morganite/aquamarine ≥ 3 ct) → recommend bezel/half-bezel or 6+ prongs; opal → bezel with closed back; forbid opal in pavé/channel accents | [IGS protective settings](https://www.gemsociety.org/article/protective-gem-settings/), [IGS opal](https://www.gemsociety.org/article/opal-jewelry-tips/) |
| 9 | Accent melee: use diamond or sapphire; avoid moissanite melee <3 mm and moissanite baguettes/pears (cut quality and cost) | [PriceScope](https://www.pricescope.com/community/threads/moissanite-vs-diamond-melee-stones.247265/) |
| 10 | Knife-edge shank cannot carry pavé/channel on the ridge; allow only plain/engraved/milgrain-edge, or convert to flat/half-round when accents selected | geometric (no flat top); [Jewelry Shopping Guide](https://www.jewelryshoppingguide.com/knife-edge-rings-pros-and-cons/) |
| 11 | Band width vs stone: <2.0 mm bands with ≥ 1.5 ct centers require platinum or tapered/thicker shoulders; block <1.5 mm in 14k/18k gold | [IGS band widths](https://www.gemsociety.org/article/engagement-ring-band-widths/), [Blue Nile](https://www.bluenile.com/blog/diamonds-jewelry/ring-band-width) |
| 12 | Band width must be ≥ melee diameter + 2×wall (~0.4 mm) for channel; ≥ melee + 0.6 mm for pavé; multirow pavé needs ≥ 3 mm | geometric (approx., trade practice) |
| 13 | Full eternity (band or ER shank accents 100% around) → not resizable; require size confirmation; 3/4 eternity resizable ≤ ½ size | [MiaDonna](https://www.miadonna.com/blogs/news/why-eternity-bands-cant-be-resized) |
| 14 | Alternative metals (tungsten, titanium, cobalt, ceramic, carbon fiber, zirconium) → not resizable; no prong-set stones (can't be pushed); flush/inlay only; not for ERs with precious heads | [With Clarity alt metals](https://www.withclarity.com/blogs/wedding-bands/guide-to-alternative-metals-for-mens-wedding-bands) |
| 15 | Ring size changes metal weight (~3% per size on 6 mm band) and, for tapered/pavé shanks, the number of accent stones; recompute stone count and price on size change | [Abbott Atelier](https://www.abbottatelier.com/blogs/news/how-much-does-a-ring-weigh) |
| 16 | Low-profile/flush heads + straight wedding band = flush stack; cathedral, peg, halo, and hidden-halo baskets that drop below the band line need a contour/notched/chevron band or a high head that clears the band | [Robinson's](https://robinsonsjewelers.com/blogs/news/how-to-choose-an-engagement-ring-gallery-that-allows-a-wedding-band-to-sit-closer-a-smarter-guide-to-the-perfect-ring-stack), [Nekta](https://www.nektanewyork.com/blogs/news/why-some-wedding-bands-never-sit-flush-with-halo-rings) |
| 17 | E-W orientation only meaningful for L:W > ~1.15 (oval, emerald, pear, marquise, radiant, elongated cushion, baguette); hide toggle for round/square | [Blue Nile E-W](https://www.bluenile.com/blog/diamonds-jewelry/east-west-rings) |
| 18 | Halo ∧ hidden halo allowed together ("combination"); halo ∧ bezel = "bezel halo" (halo replaces prongs); halo ∧ tension = invalid | [Angara](https://www.angara.com/blog/types-of-halo-engagement-rings/) |
| 19 | Three-stone side-shape compatibility: step-cut trapezoids/baguettes with emerald/asscher; brilliant trapezoids/half-moons with oval/cushion/radiant; trillions with radiant/princess; pears with round/oval/cushion/marquise; avoid round sides larger than ~35% of center width | [Leon Megé](https://leonmege.com/side-stones/) |
| 20 | Toi et moi implies bypass or split shank; two stones may differ in shape/type; both need their own head rules (V-prongs on pear tip) | [Washington Diamond](https://washingtondiamond.com/blogs/the-diamond-editorial/the-art-of-two-unpacking-toi-et-moi-ring-settings) |
| 21 | White gold always rhodium-plated (surface treatment implied; warn re-plating); platinum/palladium never plated; rose gold cannot be rhodium plated without changing color | [GIA white metals](https://4cs.gia.edu/en-us/blog/pick-right-white-metal-engagement-wedding-ring/) |
| 22 | Two-tone: white head on yellow/rose shank is standard; yellow prongs on a D–F stone warn "may tint stone"; K+ color stones pair better with yellow/rose | trade practice |
| 23 | Moissanite and colored gems are specified by mm (DEW/derived ct); diamond by ct with derived mm; head prong geometry is driven by mm outline not ct | §1.4 |
| 24 | Heart < 0.50 ct → recommend bezel or 3-prong | [GIA](https://4cs.gia.edu/en-us/blog/purchasing-fancy-shaped-diamonds-holiday-buying-guide/) |
| 25 | Engraving: inside-band length limited by circumference minus any pavé/eternity area; ~20–30 chars at size 6 in 2 mm band; disable inside engraving on full eternity and on comfort-fit bands < 1.5 mm thick | [Adiamor](https://adiamor.com/blog/education/can-i-engrave-my-engagement-ring-what-you-need-to-know-about-engravings) |
| 26 | Profile height ties: peg head/cathedral = high; basket = medium; bezel/flush = low; "low profile" toggle should switch head architecture, not just translate the stone (culet must stay above finger) | [With Clarity](https://www.withclarity.com/blogs/engagement-ring/engagement-ring-head-styles) |
| 27 | Cut-corner shapes (emerald, radiant, asscher) default prongs on corners; double prongs optional; V-prongs not required | [Beyond4Cs](https://beyond4cs.com/engagement-ring/diamond-prong-setting-types/) |
| 28 | Hexagon/kite: prongs at corners (6 or 4/5); bezel is the safer default; elongated hex allows E-W | [Rosec](https://www.rosecjewels.com/blogs/news/hexagon-and-kite-shaped-diamonds-orientation-corners-and-custom-setting-needs) |
| 29 | Old cuts/rose cuts: warn no GIA cut grade; rose cut has no pavilion → shallow head, low profile, closed or bezel back common | [Diamond Pro antique](https://www.diamonds.pro/education/antique-diamond-cuts/) |
| 30 | Certification field: lab-grown default IGI; natural default GIA; GIA lab-grown reports show "Premium/Standard" rather than 4Cs since Oct 2025 | §1.5 |
| 31 | Sizing beads only on shanks ≥ 1.8 mm wide and not on full eternity; euro shank alternative for spinning | [Martin Busch](https://www.martinbuschjewelers.com/blogs/news/what-are-speed-bumps-or-sizing-beads-and-do-i-need-them) |
| 32 | Metal weight and price recompute on: metal, band width, thickness, size, profile (comfort fit adds ~10–15% metal), cathedral vs straight, split shank | [deBebians](https://debebians.com/pages/ring-weight) |

---

## 11. Suggested configurator axes (data model sketch)

```
Ring
 ├─ centerStone {type, origin, shape, facetVariant, ratio, mm(L,W,D), ct(derived), color, clarity, cut, fluorescence, cert, orientation}
 ├─ head {architecture, prongStyle, prongCount, vPoints[], bezel{type, wallWidth}, profileHeight, tension?}
 ├─ halo {kind: none|single|double|triple|hidden|semi|floating|cascade|combo, outline, stoneType, technique, melee mm, milgrain}
 ├─ sideStones {config: solitaire|3|5|7|toiEtMoi|cluster, shapes[], sizes[], technique}
 ├─ shankAccents {technique, coverage: 0|¼|⅓|½|¾|full, rows, meleeSize, graduated}
 ├─ shank {style, outerProfile, innerProfile(comfort), width@base, width@shoulder, thickness, taper, euro, split, twist}
 ├─ metal {primary, secondary(two-tone map), karat/purity, plating}
 ├─ finish {main, secondary(edges), milgrainEdges[]}
 ├─ ornament {engravingInside{text,font,method}, engravingOutside, filigree, motifPreset, hiddenStone{type, location}}
 ├─ size {system, value, sizingBeads}
 └─ weddingBand {type, width, profile, coverage, metal, finish, contour}
Custom escape hatch: {brief, referenceImages[], figuralFlag}
```

---

## 12. Source list (primary pages consulted)

- The Knot 2026 Real Weddings Study coverage: [JCK](https://www.jckonline.com/editorial-article/lab-diamonds-engagement-market/), [Rapaport](https://rapaport.com/news/lab-grown-taking-over-engagement-ring-spending-the-knot/), [National Jeweler](https://nationaljeweler.com/articles/14726-engagement-ring-trends-2026-what-s-in-and-why), [The Knot stats page](https://www.theknot.com/content/the-knot-engagement-ring-stats)
- The Knot 2025 (2024 data) via [Plumb Club](https://plumbclub.com/reference-documents/the-knot-2025-real-engagements-weddings-survey/); [Jewelers Mutual 2024 study](https://www.jewelersmutual.com/newsroom/jewelers-mutual-insights-on-engagement-ring-trends); [Angara stats](https://www.angara.com/blog/engagement-ring-statistics-trends/)
- GIA: [grading scales](https://4cs.gia.edu/en-us/blog/gia-diamond-grading-scales/), [clarity](https://4cs.gia.edu/en-us/diamond-clarity/), [fancy shapes](https://4cs.gia.edu/en-us/blog/purchasing-fancy-shaped-diamonds-holiday-buying-guide/), [4 vs 6 prongs](https://4cs.gia.edu/en-us/blog/engagement-ring-settings-4-versus-6-prongs/), [diamond anatomy](https://4cs.gia.edu/en-us/blog/diamond-anatomy-explained/), [fluorescence](https://4cs.gia.edu/en-us/blog/diamond-fluorescence-good-bad/), [fancy color](https://www.gia.edu/fancy-color-diamond/buyers-guide), [white metals](https://4cs.gia.edu/en-us/blog/pick-right-white-metal-engagement-wedding-ring/), [old mine](https://4cs.gia.edu/en-us/blog/old-mine-cut-diamond-guide/)
- Sizing: [MID Diamonds mm↔ct](https://www.middiamonds.com/diamond-education/carat-mm-weight-conversion-values/), [Angara mm↔ct](https://www.angara.com/blog/mm-to-carat-conversions-for-diamonds/), [StoneAlgo](https://www.stonealgo.com/blog/diamond-size-chart/), [Diamond Pro depth/table](https://www.diamonds.pro/education/diamond-depth-and-table/), [RingSize.io](https://ringsize.io/), [Miozuki moissanite DEW](https://www.miozuki.co.nz/pages/the-master-moissanite-conversion-chart-mm-dew-nz-ring-sizes-explained), [Serendipity sapphire weight](https://www.serendipitydiamonds.com/blog/sapphire-weight-compared-to-diamonds-other-gemstones/)
- Ratios: [Frank Darling](https://frankdarling.com/blog/length-to-width-ratios-whats-ideal-elongation/), [Rare Carat](https://www.rarecarat.com/blog/diamond-ring-tips/diamonds-length-to-width-ratios-rarecarat-com), [Lauren B](https://www.laurenbjewelry.com/blog/length-to-width-ratios-a-buyers-guide/)
- Heads/prongs/bezels: [Beyond4Cs](https://beyond4cs.com/engagement-ring/diamond-prong-setting-types/), [With Clarity](https://www.withclarity.com/blogs/engagement-ring/engagement-ring-head-styles), [MOH London](https://www.mohlondon.com/guidance/engagement-ring-guide/head-style), [Blue Nile cathedral](https://www.bluenile.com/blog/diamonds-jewelry/cathedral-engagement-rings-guide), [Uneek bezel](https://www.uneekjewelry.com/uneek-blog/2024/Jan/16/5-types-bezel-settings/), [Wikipedia tension](https://en.wikipedia.org/wiki/Tension_ring), [Blue Nile E-W](https://www.bluenile.com/blog/diamonds-jewelry/east-west-rings)
- Halo/pavé/side stones: [Angara halo](https://www.angara.com/blog/types-of-halo-engagement-rings/), [Victor Canera pavé](https://victorcanera.com/us/education/jewelry/pave-styles), [The Knot pavé](https://www.theknot.com/content/pave-diamond-rings), [Leon Megé side stones](https://leonmege.com/side-stones/), [Frank Darling alt shapes](https://frankdarling.com/blog/epaulettes-trapezoids-and-every-alternative-diamond-shape-you-should-meet/), [Washington Diamond toi et moi](https://washingtondiamond.com/blogs/the-diamond-editorial/the-art-of-two-unpacking-toi-et-moi-ring-settings), [MiaDonna eternity](https://www.miadonna.com/blogs/news/why-eternity-bands-cant-be-resized)
- Shank/metals/finishes: [Krikawa](https://www.krikawa.com/ring-advice/glossary/ring-shape), [Gabriel shanks](https://www.gabrielny.com/blog/engagement-ring-shanks-bands-explained/), [Blue Nile width](https://www.bluenile.com/blog/diamonds-jewelry/ring-band-width), [IGS width](https://www.gemsociety.org/article/engagement-ring-band-widths/), [Brilliant Earth karat](https://www.brilliantearth.com/guides/gold-karat/), [With Clarity alt metals](https://www.withclarity.com/blogs/wedding-bands/guide-to-alternative-metals-for-mens-wedding-bands), [Borsheims finishes](https://www.borsheims.com/blog/types-of-jewelry-finishes-and-styles/), [deBebians weight](https://debebians.com/pages/ring-weight)
- Details/anatomy: [Serendipity milgrain](https://www.serendipitydiamonds.com/blog/what-is-milgrain-edging/), [Adiamor engraving](https://adiamor.com/blog/education/can-i-engrave-my-engagement-ring-what-you-need-to-know-about-engravings), [Market Square anatomy](https://www.marketsquarejewelers.com/blogs/msj-handbook/anatomy-of-a-ring-terminology-definition), [Taylor & Hart anatomy](https://taylorandhart.com/us/blog/anatomy-of-a-ring), [Martin Busch sizing beads](https://www.martinbuschjewelers.com/blogs/news/what-are-speed-bumps-or-sizing-beads-and-do-i-need-them), [Krikawa dragon ring](https://www.krikawa.com/rings/dragon-engagement-ring)
- Durability: [IGS hardness](https://www.gemsociety.org/article/hardness-and-wearability/), [IGS protective settings](https://www.gemsociety.org/article/protective-gem-settings/), [Ken & Dana Mohs](https://shop.kenanddanadesign.com/pages/mohs-hardness-scale)
