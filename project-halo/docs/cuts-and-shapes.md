# Project Halo — Diamond Shape & Cut-Program Research

Research date: 2026-09-18. Every factual claim is cited. Where a number is my own estimate for 3D-generation purposes rather than a sourced fact, it is tagged **[EST]**.

---

## PART A — Uncommon Shapes

### A.1 The Dutch Marquise — what it actually is

**Short answer: it is a modern trade name (circa 2022), not an antique cut.** The origin stories circulating on vendor blogs (18th-century France, Amsterdam/Antwerp cutters, "Rupee cut") are not supported by documentation.

The most candid source is Stienhardt, a vendor that sells them as its own signature shape and still writes: *"we did not invent, name, standardize, or popularize the Dutch Marquise."* That page states plainly that it is a **modern trade name, not historic**, that *"there is no official registry of diamond cuts. No laboratory or standards body maintains a list of approved shapes,"* that no one can credibly say who invented it, and that the name *"has circulated as a merchant label for elongated hexagonal stones for several years, with listings at least as far back as 2022."* Critically: **IGI grades it as "Hexagonal Modified Brilliant."** ([Stienhardt](https://stienhardt.com/blogs/education/is-the-dutch-marquise-a-real-diamond-cut/))

**Geometry (consistent across all vendor sources):** an *elongated hexagon with six straight, angled edges and two pointed tips* — i.e. a marquise silhouette whose curved flanks have been straightened into chords. ([Diagaa](https://diagaa.com/blogs/guide/what-is-a-dutch-marquise-diamond), [Krikawa](https://www.krikawa.com/blog/post/the-dutch-marquise-engagement-ring-guide), [Stienhardt](https://stienhardt.com/blogs/education/is-the-dutch-marquise-a-real-diamond-cut/))

**L:W ratio:** 1.85:1 – 2.10:1, versus 1.15:1 – 1.40:1 for the ordinary "elongated hexagon." ([Diagaa](https://diagaa.com/blogs/guide/what-is-a-dutch-marquise-diamond))

**Faceting:** no source publishes a facet count. Vendors describe two families — a brilliant-style version with triangular and kite facets, and a step-cut version with long parallel facets. ([Krikawa](https://www.krikawa.com/blog/post/the-dutch-marquise-engagement-ring-guide)) Since IGI calls it a *hexagonal modified brilliant*, the default is a marquise-brilliant facet layout (58) mapped onto a hexagonal outline. **[EST: 58 facets, keel line not culet.]**

**Who sells it:** essentially only lab-grown e-commerce shops — Stienhardt, Ouros Jewels, Diamond Rensu, Solitaire Lab Diamond, Avideri, Diagaa, TheCaratCut, Caratdiamonds. ([Stienhardt collection](https://stienhardt.com/collections/dutch-marquise-lab-grown-diamonds/), [Ouros Jewels](https://www.ourosjewels.com/products/dutch-marquise-cut-loose-diamond))

**Who does NOT sell it:** the antique trade. A sweep of 1stDibs' "Dutch rose cut" inventory returns Georgian/Victorian/Edwardian rose-cut pieces and one *"1880's Victorian Rosecut Diamond Navette Marquise Ring"* and a *"full Holland rose cut"* — **the term "Dutch marquise" does not appear anywhere in that antique inventory.** ([1stDibs](https://www.1stdibs.com/buy/dutch-rose-cut/))

#### The genuinely Dutch antique cut is a different thing: the Dutch Rose

| Attribute | Dutch / Holland / Amsterdam Rose | Double Dutch Rose |
|---|---|---|
| Facets | **24, in two rows of equal depth** | Rose pattern on *both* crown and pavilion; 2–3 horizontal rows per side |
| Profile | Flat back, **high pyramidal dome** | Two rose cuts back-to-back; tallest of the rose family |
| Ideal proportion | **Half as deep as it is wide** (~50% depth) | Deeper than any other rose form |
| Culet | None (flat base) | None (two apexes) |

Sources: [TeachJewelry](https://teachjewelry.com/diamonds/double-rose-cut/), [Diamond-Jewelry-Pedia](https://www.diamond-jewelry-pedia.com/rose-cut.html), [Lang Antiques](https://www.langantiques.com/university/rose-cut/). Lang Antiques documents the rose ladder as **3 → 6 → 12 → 18 → 24 facets**, with the 24-facet "Full Rose" traceable to a pendant from the end of the 16th century, and the 18-facet rose popular in 19th-century Amsterdam.

#### Contrast with the modern marquise brilliant

| | Modern Marquise Brilliant | "Dutch Marquise" | Dutch Rose |
|---|---|---|---|
| Outline | Curved navette ("little boat") | Straight-sided elongated hexagon | Round/navette, flat back |
| Facets | **58** | ~58 **[EST]**, ungraded by name | **24** |
| L:W | 1.75–2.25, ideal 2.00 | 1.85–2.10 | n/a |
| Base | Keel line | Keel line **[EST]** | Flat |
| Status | Universal | Trade name since ~2022 | Genuine antique |

Marquise L:W and history: [Brilliant Earth](https://www.brilliantearth.com/guides/diamond-ratio/), [naturaldiamonds.com on navette](https://www.naturaldiamonds.com/engagement-rings/navette-rings/) — the marquise/navette is tied to the court of Louis XV.

**Configurator recommendation:** ship it, but model it honestly as a **straight-sided hexagonal navette** — it is a pure outline parameter change (replace the two curved flanks of the marquise with straight chords), not a new facet program. Label it "Dutch Marquise (elongated hexagon)" and expose the L:W slider 1.6–2.2. Separately implement **Dutch Rose** as a real cut program (see Part C).

---

### A.2 Shape catalogue

Legend for "slot": **P** = deserves a parametric slot; **E** = escape hatch / mesh import only.

#### Step-cut and geometric outlines

| Shape | Outline (mathematically describable?) | Typical L:W | Facets | Frequency | Slot |
|---|---|---|---|---|---|
| **Kite** | Rhombus/quadrilateral: *"two longer identical-length sides and two shorter ones; opposite angles are equal"* — trivially parametric | 1.3–2.0 **[EST]** | Step: ~16–24 **[EST]** | Common as side stone, rare as center | **P** |
| **Lozenge** | Rhombus with the horizon line *centered*, so both points are even; four equal sides, parallel opposites. Also "Ace cut" | 1.4–2.2 **[EST]** | Step: ~16–24 **[EST]** | Uncommon; "rarely employed in rings" | **P** |
| **Shield** | Kite with one tip truncated; typically **5 or 7 sided**. Leon Megé: triangular with *"two clipped corners and a third finished as a V-shape"* | 0.8–1.4 | Step or brilliant, ~20–30 **[EST]** | Common side stone | **P** |
| **Trapezoid** | Four-sided, parallel top and bottom, both ends slanted. Variants: step, brilliant, French, crescent | 1.5–2.5 **[EST]** | Step: 14–22 **[EST]** | Very common side stone | **P** |
| **Epaulette** | 5-sided, between trapezoid and tapered bullet; **vertex angle > 150°**, **L:W < 1.0**. Sometimes called "Cadillac" | < 1.0 | ~14–20 **[EST]** | Rare | **P** |
| **Chevron** | 5-sided, one long + four short sides, well-tapered; **vertex angle < 140°**, **L:W > 1.0** | > 1.0 | ~14–20 **[EST]** | Rare | **P** |
| **Bullet** | Elongated pentagon: two long sides, two short, one sharp point | 1.3–2.0 **[EST]** | Step ~16–20 **[EST]** | Side stone | **P** |
| **Half-moon** | One straight chord + one arc — a circular/elliptical segment. Skinny versions **L:W > 2.0** preferred; "fat versions should be avoided" | > 2.0 | Brilliant ~16–22 **[EST]** | Common side stone | **P** |
| **Baguette** | Rectangle, **unbeveled corners**, parallel short sides | 1.5–3.0 | ~14 **[EST]** | Ubiquitous accent; rare as center | **P** |
| **Tapered baguette** | Long sides angle inward **~5–8°** | 1.5–3.0 | ~14 **[EST]** | Ubiquitous accent | **P** |
| **Carré** | Square baguette, equal L and W | 1.0 | ~14 **[EST]** | Accent | **P** |
| **Elongated hexagon** | Regular hexagon stretched on one axis | 1.15–1.40 | ~50–58 **[EST]** | Growing | **P** |
| **Octagon** | Regular 8-gon; the emerald/asscher outline without the step program | 1.0–1.5 | varies | Common as "asscher outline" | **P** |
| **Pentagon** | Regular 5-gon | 1.0–1.2 | varies **[EST]** | Very rare | **E** |
| **Star / fantasy cuts** | Non-convex; requires arbitrary polygon support | n/a | n/a | Novelty | **E** |
| **Step-cut kite** | Kite outline + concentric step facets parallel to girdle | 1.3–2.0 | ~16–24 **[EST]** | Rare | **P** (kite outline + step program) |

Sources: [Leon Megé side stones](https://leonmege.com/side-stones/) (the authoritative technical page — chevron/epaulette vertex angles, tapered-baguette 5–8° taper, half-moon L:W > 2.0, shield geometry, lozenge/ace, kite geometry, Carré), [Frank Darling](https://frankdarling.com/blog/epaulettes-trapezoids-and-every-alternative-diamond-shape-you-should-meet/) (kite = rhombus with two acute + two obtuse angles; lozenge = kite with centred horizon; shield = kite with a tip cut off, 5 or 7 sided), [Diagaa](https://diagaa.com/blogs/guide/what-is-a-dutch-marquise-diamond) (elongated hexagon L:W).

#### Antique / historic cuts

| Cut | Outline | Facets | Culet / base | Frequency | Slot |
|---|---|---|---|---|---|
| **Old mine** | *"Soft squarish shape"*, pillow outline, rounded corners | **58** (same 33/25 split as modern RB) | **Large open culet**, or a keel; girdle often very thin in places | Antique market staple | **P** |
| **Old European** | Distinctly **round** | **57** excl. culet | **Open, often large culet**, smaller than old mine's | Antique staple + modern repro | **P** |
| **Transitional** | Round | 58 | Small culet | 1870s–1930s bridge cut | **P** (interpolate OEC↔RB) |
| **Antique cushion** | Pillow, rounded corners; GIA classifies as *"Old Mine brilliant"* or *"Cushion brilliant"* depending on proportions | 58 | Open culet or **keel line** | Common | **P** |
| **Modern cushion** | Pillow, rounded corners | 58–64 | Pointed culet | Very common | (already shipped) |
| **Rose cut** | Flat base + domed crown of triangular facets; 6-fold rotational symmetry | **3, 6, 12, 18, or 24**; large stones get 7–8 rows | **Flat back, no pavilion, no culet** | Common in antique + modern revival | **P** |
| **Dutch rose** | Round/navette, **high pyramidal dome** | **24 in two equal rows** | Flat back | Antique | **P** |
| **Double Dutch rose** | Two roses back-to-back | 2–3 rows per side | Two apexes, no flat face | Rare | **P** |
| **Briolette** | Pear/drop, **fully faceted in the round**, triangular facets over the entire surface — a solid of revolution | **84–120** | Pointed tip, no table | Rare, drilled for pendants | **P** |
| **Portrait / table cut** | *"Thin sheet of ice with step facets surrounding a large, open table"* — very shallow, huge table | ~5–13 **[EST]** | Flat | Rare; akin to Indian Polki | **P** |
| **French cut** | Square/rhombic; **table rotated 45°** to the outline, sitting at the centre of a four-rayed star | **Crown 9 facets** (table + 4 mains + 4 corner triangles); **pavilion 4 facets** | Deep pavilion, high crown (antique); modern ones cut flat from baguettes | Art Deco revival | **P** |
| **Single cut** | Round/octagonal | **8** (17–18 with table + culet) | — | Melee only | **P** |
| **Mazarin** | Cushion | **17 crown facets** (c. 1650) | — | Historic only | **E** |
| **Peruzzi** | Cushion | **33 crown facets** | — | Historic only | **E** |
| **Cabochon** | Dome over flat/curved base — **zero facets**, pure surface of revolution | n/a | Flat back | Rare in diamond | **P** (separate geometry path) |
| **Calf's head** | Triangular **step cut** with beveled points | ~20–28 **[EST]** | — | Rare | **E** |

Sources: [GIA on old mine cut](https://4cs.gia.edu/en-us/blog/old-mine-cut-diamond-guide/) (58 facets, smaller table, larger culet, higher crown, short lower-half facets, thin girdle, soft squarish shape); [Leon Megé antique cuts](https://leonmege.com/antique-diamond-cuts/) (OEC 4-point test, rose cut structure, French cut 9 crown / 4 pavilion facets, portrait cut, Peruzzi 33, single cut 8, Mazarin, transitional); [Wikipedia Diamond cut](https://en.wikipedia.org/wiki/Diamond_cut) (rose cut 12 or 24 triangular facets with sixfold symmetry, Mazarin 17 crown facets, Peruzzi crown 17→33, Barion 62 = 25 crown + 29 pavilion + 8 girdle, radiant 70); [Lang Antiques rose cut](https://www.langantiques.com/university/rose-cut/) (3/6/12/18/24 ladder); [Lang Antiques French cut](https://www.langantiques.com/university/french-cut/) and [Estate Diamond Jewelry](https://www.estatediamondjewelry.com/french-cut-diamonds/) (nine crown facets, table rotated to the corners); [Skyjems briolette](https://skyjems.ca/pages/encyclopedia-briolette-cut) and [naturaldiamonds.com](https://www.naturaldiamonds.com/historic-diamonds/briolette-cut-diamond/) (84–120 facets).

#### Branded shapes that are really *shapes* (not just facet programs)

| Cut | What it is | Facets | Slot |
|---|---|---|---|
| **Asscher (classic)** | Square step cut, high crown, small table, **deeply cropped corners**, "hall of mirrors" | **58** | shipped |
| **Royal Asscher** | Same silhouette, facets redistributed and added | **74** | **P** |
| **Crisscut** | Modified step-cut emerald with 77 *crisscrossed* facets | **77** | **P** |
| **Context cut** | Square/octahedral — **4 facets on top, 4 below, 8 total**. Preserves the raw octahedron | **8** | **P** (trivial geometry) |
| **Spirit Sun** | Derived by spinning the Context diamond 4× and circumscribing a circle; round with a "fiery sun" core | **32** (not 89) | **P** |
| **Jubilee** | Cushion brilliant with **no table** — eight crown facets meeting at a point; rose/brilliant hybrid | **88** | **P** |

Sources: [Royal Asscher](https://royalasscher.com/pages/royal-asscher-cut-vs-asscher-cut), [Skyjems](https://skyjems.ca/pages/encyclopedia-asscher-royale); [Crisscut story](https://crisscut.com/the-story/); [Ganoksin on Context & Spirit Sun](https://orchid.ganoksin.com/t/context-and-spirit-sun-diamonds/28264); [Britannica Jubilee](https://www.britannica.com/topic/Jubilee-Diamond), [Jewels by Grace](https://jewelsbygrace.smugmug.com/Loose-Diamonds-1/401ct-and-larger/871ct-Antique-Jubilee-Cut).

> **Correction to the brief:** the Spirit Sun has **32** facets, not 89, and the Context cut has **8**. The 89-facet cut is the **Blue Flame** (Eurostar / Tesiro, China). ([Ganoksin](https://orchid.ganoksin.com/t/context-and-spirit-sun-diamonds/28264))

---

### A.3 Generator proportion table

Table % and depth % ranges below are from [The Diamond Pro](https://www.diamonds.pro/education/diamond-depth-and-table/) unless noted. Crown height %, pavilion depth % and facet splits marked **[EST]** are my derivations for meshing — the trade does not publish them per fancy shape.

| Shape | Table % | Crown ht % | Pav depth % | Total depth % | Girdle | Culet | Crown facets | Pav facets |
|---|---|---|---|---|---|---|---|---|
| Round brilliant (Tolkowsky) | **53.0** | **16.2** | **43.1** | 59–62.6 | thin–med | none/pointed | **33** | **25** |
| Round brilliant (market ideal) | 54–57 | 14–16 **[EST]** | 43 **[EST]** | 59–62.6 | thin–med | none | 33 | 25 |
| Princess | 69–75 | 10–12 **[EST]** | 55–60 **[EST]** | 68–74 | thin–med | none | ~21 **[EST]** | ~32–55 **[EST]** |
| Cushion (modern) | 61–68 | 12–14 **[EST]** | 48–52 **[EST]** | 61–68 | med | none | ~25 **[EST]** | ~33–39 **[EST]** |
| Antique cushion / old mine | **38–45** (small) | **18–22** **[EST]** | 48–55 **[EST]** | 62–70 **[EST]** | thin, uneven | **large open** | 33 | 25 |
| Old European | **≤53**, typ. **38–45** | 16–20 **[EST]**, crown angle **≥40°** | 43–48 **[EST]** | 60–68 **[EST]** | thin–med | **open, medium–large** | 33 | 24 + culet |
| Emerald | 60–68 | 10–14 **[EST]** | 45–50 **[EST]** | 61–68 | med | none | ~25 **[EST]** | ~24 **[EST]** |
| Asscher | 60–68 | 14–18 **[EST]** (high crown) | 45–50 **[EST]** | 61–68 | med | small | ~25 **[EST]** | ~33 **[EST]** |
| Royal Asscher | 60–68 **[EST]** | 16–20 **[EST]** | 45–50 **[EST]** | 61–68 **[EST]** | med | small | ~33 **[EST]** | ~41 **[EST]** |
| Oval | 53–63 | 13–16 **[EST]** | 43–47 **[EST]** | < 68 | thin–med | none | 33 | 25 |
| Pear | 53–65 | 13–16 **[EST]** | 43–47 **[EST]** | < 68 | thin–med | keel | 33 | 25 |
| Marquise | 53–63 | 13–16 **[EST]** | 43–47 **[EST]** | 58–62 | thin–med | **keel line** | 33 | 25 |
| "Dutch marquise" | 53–63 **[EST]** | 13–16 **[EST]** | 43–47 **[EST]** | 58–65 **[EST]** | thin–med | keel **[EST]** | 33 **[EST]** | 25 **[EST]** |
| Radiant | 61–69 | 11–14 **[EST]** | 48–54 **[EST]** | < 67 | med | none | ~25 **[EST]** | ~45 **[EST]** (70 total) |
| Heart | 56–62 | 13–16 **[EST]** | 43–48 **[EST]** | 56–62 | thin–med | keel | ~33 **[EST]** | ~26–36 **[EST]** |
| Trillion | 53–58 **[EST]** | 10–14 **[EST]** | 40–45 **[EST]** | 40–48 **[EST]** | med–thick (points) | none | ~13–19 **[EST]** | ~18–31 **[EST]** (31 or 50 total) |
| Rose cut | n/a (**no table**) | = full depth | **0** (flat back) | **30–35** | thin–med | **none, flat** | 3/6/12/18/**24** | **0** |
| Dutch rose | n/a | = full depth | 0 | **~50** ("half as deep as wide") | thin | none, flat | **24 in 2 rows** | 0 |
| Double Dutch rose | n/a | ~half depth | ~half depth | 55–70 **[EST]** | thin | none (2 apexes) | 2–3 rows | 2–3 rows |
| Briolette | **none** | n/a | n/a | L:W 1.3–2.0 **[EST]** | none | none | **84–120 total, all-over** | — |
| Portrait / table cut | **80–95** (huge) | 3–6 **[EST]** | 2–5 **[EST]** | **8–15** **[EST]** | thin | none | ~5–9 **[EST]** | ~4 **[EST]** |
| French cut | 45–60 **[EST]**, **rotated 45°** | 15–20 **[EST]** | 45–50 **[EST]** | 60–70 **[EST]** | thin | small/none | **9** | **4** |
| Baguette / tapered | 60–70 **[EST]** | 8–12 **[EST]** | 45–50 **[EST]** | 55–65 **[EST]** | thin | none | ~9 **[EST]** | ~5 **[EST]** |
| Single cut | 50–60 **[EST]** | 14–16 **[EST]** | 43 **[EST]** | 58–62 **[EST]** | thin | small | **9** | **8** |
| Cabochon | none | n/a | n/a | 40–60 **[EST]** | n/a | flat | **0** | **0** |

Round-brilliant angle reference: **crown angle 34.5°, pavilion angle 40.75°** (Tolkowsky / American Standard), market ideal **crown 34–35°, pavilion 40.6–41°** ([Wikipedia](https://en.wikipedia.org/wiki/Diamond_cut), [Blue Nile](https://www.bluenile.com/blog/diamonds-jewelry/ideal-diamond-proportions)). Old European qualifying benchmarks: **table ≤53%, crown angle ≥40°, lower-half facet length ≤60%, open culet — 3 of 4 required** ([Leon Megé](https://leonmege.com/antique-diamond-cuts/)).

L:W ratios: oval **1.30–1.50**, pear **1.45–1.75**, marquise **1.75–2.25** (ideal 2.00), emerald **1.30–1.50** ([Brilliant Earth](https://www.brilliantearth.com/guides/diamond-ratio/)).

---

## PART B — Branded / Proprietary Cuts

### B.1 Standard references

| Shape | Facets | Breakdown | Source |
|---|---|---|---|
| Round brilliant | **57 / 58** | 33 crown (table + 8 bezel + 8 star + 16 upper girdle) + 24 pavilion + culet | [Wikipedia](https://en.wikipedia.org/wiki/Diamond_cut), [GIA/OctoNus modeling paper](https://www.gia.edu/doc/modeling-the-appearance-of-the-round-brilliant-cut-diamond.pdf) |
| Single cut | 8 (17–18 w/ table & culet) | — | [Leon Megé](https://leonmege.com/antique-diamond-cuts/) |
| Princess | **53–144** | Chevron count drives the total | [Rêve Diamonds](https://www.revediamonds.com/us/princess-cut-diamonds) |
| Emerald | **49+** (commonly 57–58) | 2, 3 or 4 concentric step rows | [Rêve](https://www.revediamonds.com/us/princess-cut-diamonds), [Dileti](https://dileti.com/blogs/diamond-education/emerald-cut-diamonds-understanding-step-cut-design) |
| Asscher | **58** (some 72–74) | 3 rows top, 3 bottom | [Ken & Dana](https://shop.kenanddanadesign.com/pages/asscher-cut-diamonds) |
| Oval / marquise / pear | **56–58** | Round-brilliant program on a stretched outline | [Wikipedia](https://en.wikipedia.org/wiki/Diamond_cut) |
| Cushion | **58–64** | — | trade standard |
| Radiant | **70** | — | [Wikipedia](https://en.wikipedia.org/wiki/Diamond_cut) |
| Barion | **62** | 25 crown + 29 pavilion + 8 girdle (1971) | [Wikipedia](https://en.wikipedia.org/wiki/Diamond_cut) |
| Heart | 56–58 (up to 69) | — | trade standard |
| Trillion / trilliant | **31 or 50** | 31 as solitaire, 50 as accent | [Serendipity Diamonds](https://www.serendipitydiamonds.com/blog/trillion-cut-trilliant-cut-diamonds/) |
| Briolette | **84–120** | all-over triangular | [Skyjems](https://skyjems.ca/pages/encyclopedia-briolette-cut) |

### B.2 The Wempe Cut — the headline answer

The jeweller the user called "Wempy" is **Gerhard D. Wempe GmbH & Co. KG** (Hamburg). The cut is the **WEMPE-Cut®**, and the facet count is **137, not 157**.

| Field | Value |
|---|---|
| Brand | Wempe (Gerhard D. Wempe GmbH & Co. KG), Hamburg |
| Cut name | **WEMPE-Cut®** |
| **Total facets** | **137** — *"80 facets more than a classic brilliant cut"* (57 + 80 = 137) |
| **Crown / pavilion split** | **65 crown ("Oberteil") + 72 pavilion ("Unterteil")** |
| Shape family | Round solitaire — a modified round brilliant |
| Year | **2015** (quiet launch; developed over **two years**) |
| Trademark | **USPTO Reg. No. 4857382**, Serial No. **79166474**, filed 2015-04-22, registered **2015-11-24**, Intl. Class 014 ("gemstones, especially diamonds…"). Owner: Gerhard D. Wempe GmbH & Co. KG. German press describes it as *patentiert* |
| Cutting | Entirely **by hand**; **~8 hours pure cutting time per stone**; *"only a very few cutters master this technique."* Sources differ: JCK says Antwerp then set in Hamburg; DuJour says a dedicated team in **Bangkok** |
| Certification | **HRD Antwerp** (Hoge Raad voor Diamant) |
| Sourcing | Botswana rough, Kimberley Process certified |
| Marketing claim | *"Extremely high light reflection"*; *"shines brighter than any other"* |
| Setting | **Splendora** setting: four prongs forming a basket filled with **16 smaller diamonds** (0.09 ct total). Lines: **Wempe 137**, **Splendora BY KIM** |
| Price | **"All prices on request"** — no published premium |
| Limited edition | 137 pieces of a cinnamon-coloured version, 2019 |

Sources: [JCK](https://www.jckonline.com/editorial-article/wempes-new-engagement-rings/) (137 facets, 80 more than standard, launched 2015, Antwerp→Hamburg, prices on request, "extremely high light reflection"); [PREMIUM Magazin](https://www.premium-magazin.at/jewelry-a/wempe-cut) (65 upper + 72 lower, 8 hours cutting, HRD Antwerp, 2015, Splendora, 16 white brilliants 0.09 ct, 137-piece limited edition); [DuJour](https://dujour.com/style/special-wempe-cut-diamond-now-available/) (two years' development, Bangkok team, HRD, Botswana/Kimberley); [Justia trademark record](https://trademark.justia.com/791/66/wempe-79166474.html); [Wempe's own page](https://www.wempe.com/en/jewelry/brands/wempe-cut) (blocks automated fetch; content surfaced via search index).

### B.3 The branded-cut landscape

| Brand / company | Cut name | Facets | Shape family | Year | IP | Distinguishing feature |
|---|---|---|---|---|---|---|
| **Royal Coster (Amsterdam)** | **Royal 201** | **201** | Round | 2007 | "Worldwide patented"; by Donny Griffioen & Bobby Low | Micro-facets on the **girdle**; takes 2× as long as a regular brilliant, 3 production stages |
| **Gerhard D. Wempe** | **WEMPE-Cut®** | **137** | Round | 2015 | USPTO Reg. 4857382 | 65 crown + 72 pavilion, all hand-cut, ~8 hrs |
| **Star Diamond** | **Star129** | **129** | Round | 2000 | Proprietary, licensed cutters | **+71 pavilion facets** vs standard; computer-guided lasers |
| **Gabi Tolkowsky / Suberi** | **Gabrielle®** | **105** (round) | Multiple | 1990s | Branded | World's first **"triple brilliant"**; 48 more than standard RB |
| **Light Masters Diamond Group** | **Solasfera®** | **91** (92 with culet) | Round | — | Patented | Retains H&A patterning — **10 hearts & arrows**, "Sola Star / Sfera Flame" |
| **Diamonds International** | **Crown of Light** | **90** | Round, **dome-shaped crown** | — | US patent | Domed crown instead of a flat table; <100 qualified cutters |
| **Eurostar / Tesiro** | **Blue Flame** | **89** | Round | — | Branded | China retail (150+ outlets) |
| **Bernard Nacht & Co.** | **Crown Jubilee** | — | — | — | GIA proprietary-cut participant | — |
| **Embee (Mike Botha)** | **Sirius Star** | **80 / 88 / 100** | Round | 2006 | Branded | Octagonal main-facet configuration, **4-tier pavilion** |
| **K.R. Gems & Diamonds Intl.** | **Eighternity** | **81** | Round | — | Branded | +24 facets: **16 new pavilion + 8 trapezoidal crown**; flower pattern at the heart |
| **Gem Concepts** | **Octavia** | **80** | Octagonal / square emerald | — | Patented | Step-cut faceting with round-brilliant radiance |
| **Christopher Designs** | **Crisscut®** | **77** | Modified step-cut emerald | 1996–98 | Patented (Slowinski holds 20+ patents) | "Crisscrossed" facets vs ~48 on a classic emerald; looks up to 50% larger |
| **Christopher Designs** | **L'Amour Crisscut®** | **50** *(one source says 77 — conflicting)* | Emerald w/ curved ends; also pear, cushion, oval | — | Patented | Two sides with curvature top and bottom; up to 50% larger face-up |
| **Royal Asscher** | **Royal Asscher®** | **74** | Square step | 2001 (orig. Asscher 1902) | Patented; <75 people worldwide can cut it | Facets added/redistributed on both crown and pavilion |
| **De Beers / Gabi Tolkowsky** | **Marigold** | **73** | Octagon | 1989 | Flower Cuts series | For relatively flat rough |
| **De Beers / Gabi Tolkowsky** | **Zinnia** | **73** | Round fancy | 1989 | Flower Cuts | **48 of the 73 clustered around the culet** to boost fire |
| **Hearts On Fire** | **Dream®** | **69** (design patent) — some sources say 70 | Modified square | 2002 | Design patent; TM serial 78157141 | Only ~100 cutters qualified |
| **Leo Schachter** | **The Leo®** | **66** | Round | 1999 | Patented | +8 pavilion facets, +1 crown arrangement; first cut independently verified as **visibly brighter** than a standard RB |
| **Atlass Group (Antwerp)** | **Regent Cut™** | **66** | — | — | TM | Based in part on the historic Regent Diamond |
| **Lili Diamonds (Israel)** | **Lily Cut®** | **65** | Flower, four petals (round or pointed) | LV exclusive since 2007 | Patented | **All Lily cuts reserved for Louis Vuitton** |
| **De Beers / Gabi Tolkowsky** | **Dahlia** | **63** | 12-sided oval | 1989 | Flower Cuts | — |
| **William Goldberg** | **ASHOKA®** | **62** | Elongated **modified cushion**, rectangular girdle, rounded corners | 1999 | **US patent 1999 (25-yr)**, TM since 2000 | Appears **~30% larger** than an equal-carat emerald; up to **6 months** to cut; <1% of rough qualifies |
| **Asprey / Gabi Tolkowsky** | **Asprey Cut** | **61** | Cushion-inspired | — | Patent implied | — |
| **De Beers / Gabi Tolkowsky** | **Fire Rose** | **61** | Hexagon | 1989 | Flower Cuts | **19 crown + 36 pavilion**; designed for higher yield |
| **Elara (Antwerp / HRD / Antwerp Univ.)** | **Elara™** | **61** | — | 2001 (renamed) | TM | 4 more than a round brilliant |
| **Belgian consortium** | **Flanders** | **61** | Ideal square | late 1980s | — | Computer-designed |
| **Tiffany & Co.** | **Lucida®** | **50** (with culet) | Square mixed cut | 1999 | Patent + registered TM | — |
| **Ambar Diamonds** | **Quadrillion** | **49** | Ideal square | 1979 | Registered TM | The ancestor of the modern princess cut |
| **Bez Ambar** | **Divine®** | **46** | Modified round | 2015 | TM | — |
| **De Beers / Gabi Tolkowsky** | **Sunflower** | **43** | — | 1989 | Flower Cuts | Unusual angular facet shapes |
| **Bernd Munsteiner** | **Spirit Sun** | **32** | Round | 1970s | — | Context spun 4× and circumscribed; "fiery sun" core |
| **Dr. Ulrich Freiesleben** | **Context Cut** | **8** | Square (raw octahedron) | early 1980s; patented & TM **1997** | Patent + TM | 4 facets top, 4 below — preserves the octahedron |
| **Buccellati / Tache** | **Buccellati 100** | **57** | — | — | — | Branding, not extra facets |

**Brands that are precision/consistency plays, not facet-count plays:**

- **Hearts On Fire** (core round): standard 57/58 with hearts-and-arrows optical symmetry. ([Wikipedia](https://en.wikipedia.org/wiki/Hearts_on_Fire_(company)))
- **Passion Fire**: **58 facets, 144 angles**, every stone >¼ ct Sarin-scanned. A cut-quality brand. ([David Nygaard](https://www.davidnygaardfinejewelers.com/discover-passionfire))
- **Forevermark Black Label**: standard round/square/cushion/oval/heart, selected for symmetry so a **"Compass of Light™"** arrow pattern emerges. ([Forevermark](https://www.forevermark.com/en-us/collections/black-label2/))
- **Tiffany True®**: a **mixed cut** — **step-cut crown over a brilliant-cut pavilion**. Interesting geometrically, but Tiffany publishes no facet count. ([Tiffany](https://www.tiffany.com/engagement/engagement-rings/true-cut/))
- **De Beers Talisman** (2005): **rough, unfaceted** diamonds set alongside polished ones via *serti poinçon*. Not a cut at all. ([Katerina Perez](https://katerinaperez.com/articles/de-beers-talisman-collection), [De Beers](https://www.debeers.com/en-us/fine-jewellery/talisman/))
- **Cartier**: no evidence found of a proprietary facet-count cut.

**Items from the brief I could not substantiate:** "Kalahari Dream," "Firemark," "Renaissance 66," a branded "Pi cut," "Brilliant Rose," an "Excelsior cut" (the Excelsior is a famous 997 ct *rough*, not a cut), "Gemesis" as a cut (it was a lab-grown *producer*), and a "Prince/Princess 144" as a named brand — 144 is simply the top of the princess-cut facet range. "Zoë cut = 100 facets" appears in aggregated search results but I could not reach a primary brand source; treat as unverified. Diamond Source of Virginia lists further patented names without specs: *Amorillion™, Barocut, Blaze, Corona™, Czar Cut, Eighty-Eighty, Glacier, PrinceCut*. ([DSV](https://www.diamondsourceva.com/education/brandeddiamonds/branded-diamond-shapes.asp))

### B.4 Does a higher facet count actually help? — the honest answer

**No, not by itself.** The consensus across gemological and consumer-advocacy sources:

1. **Facet placement beats facet count.** *"Optimal facet placement is more important than facet patterning"*; sparkle is determined by *"facet quality, angles, symmetry, and alignment rather than the number of facets."* A poorly cut diamond with many facets underperforms a well-cut one with fewer. ([JewelryThis](https://www.jewelrythis.com/buyers-guide/part-one-diamonds/diamond-facets/), [Gabriel & Co.](https://www.gabrielny.com/blog/how-many-facets-should-a-diamond-have-for-top-brilliance/))
2. **Extra facets can actively hurt.** *"Additional facets can sometimes improve appearance, but they can also reduce the boldness of sparkle if not designed well."* ([Antiquecut](https://www.antiquecut.com/blogs/education/how-many-facets-does-a-diamond-have-and-why-it-matters))
3. **Small stones suffer most.** Beyond4Cs, reviewing Solasfera and Star129 directly: additional facets **do not guarantee** superior brilliance; Star129's *"129 super small surfaces"* give an *"extremely splintery appearance"* at lower carat weights; the recommendation is to **stick with a standard round brilliant below ~1.5 ct**, and these cuts *"aren't worth the money"* given *"insane price premiums."* ([Beyond4Cs](https://beyond4cs.com/shapes/round/solasfera-vs-star-129/))
4. **The physical mechanism is contrast loss.** More, smaller facets push a stone toward the **"crushed ice"** regime: light is *scattered more randomly*, producing *lower contrast*, *more moderate light return*, and a *"disco ball"* of tiny sparkles instead of the large, high-contrast flashes ("spotlight beams") of a well-proportioned brilliant. ([Lauren B](https://www.laurenbjewelry.com/blog/modified-brilliant-vs-crushed-ice-cushion-cut-diamonds/), [Cullen](https://cullenjewellery.com/education/moissanite-guidance/brilliant-vs-crushed-ice), [Harro Gem](https://harrogem.com/2018/06/17/brilliant-vs-crushed-ice/))
5. **Optical modelling background.** The Moscow State University / OctoNus group (Sergey Sivovolenko et al.) modelled 3D light movement in the round brilliant and published on how brilliance, scintillation and fire depend on **human vision characteristics**, not raw surface count. ([GIA/OctoNus paper](https://www.gia.edu/doc/modeling-the-appearance-of-the-round-brilliant-cut-diamond.pdf), [OctoNus](https://www.octonus.com/projects/diamond-cut-study/optical-design-of-gemstones))

**The one credible exception:** the Leo Diamond (66 facets) is reported as the first cut **independently verified by a gemmological body as visibly brighter** than a standard round brilliant — a modest, verified gain from 9 extra well-placed facets, not from piling on 80 or 144. ([Skyjems](https://skyjems.ca/pages/encyclopedia-leo-diamond))

### B.5 Certification and resale

- **GIA assigns a Cut grade only to standard round brilliants.** Fancy shapes receive no cut grade; vendors confirm they *"don't give cut grades to fancy shapes."* ([Beyond4Cs resale](https://beyond4cs.com/jewelry-guide/diamond-resale-value/))
- **GIA does name branded cuts — since June 2018.** The **Proprietary Cut Program** prints the branded cut name alongside the shape and cutting-style description on the report, **at no additional charge**, provided the submitter supplies documentation including the facet arrangement. Launch participants: **Leo** (Leo Schachter), **Dream** (Hearts On Fire), **Crisscut** (Christopher Designs), **Ashoka** (William Goldberg), **Crown Jubilee** (Bernard Nacht). ([National Jeweler](https://nationaljeweler.com/articles/6018-gia-reports-can-now-include-branded-cut-names))
  Note: naming ≠ grading. GIA prints the name; it still does not issue a cut grade for non-round shapes.
- **Resale is weak across the board and worse for branded cuts.** Rough resale is **30–75% of retail**; round brilliants hold value better than fancy shapes; GIA-certified stones sell for **15–25% more** than otherwise-identical uncertified ones. Branded cuts add a purchase premium with **limited** resale benefit — the premium is paid to the brand, and the secondary market has no comparable-stone pricing for a proprietary facet arrangement. ([Beyond4Cs](https://beyond4cs.com/jewelry-guide/diamond-resale-value/), [Grand Diamonds](https://granddiamonds.com/blog/uncertified-vs-certified-diamonds-a-price-comparison-guide/))
- **Practical consequence for Halo:** if the configurator surfaces branded cuts, it should carry a short disclosure that proprietary cuts are single-source and generally resell at a discount to an equivalent GIA-graded round.

---

## PART C — Configurator Data Model

### C.1 Separate three orthogonal axes

The core insight from this research: **outline, faceting program, and proportions are independent.** A "Dutch marquise" is the marquise *program* on a hexagonal *outline*. An old mine cut is the round-brilliant *program* on a cushion *outline* with antique *proportions*. Modelling them as one flat list of ~40 "shapes" will force duplicated geometry code.

```
Stone = Outline × CutProgram × Proportions
```

### C.2 Schema

```jsonc
// ---------- AXIS 1: OUTLINE (girdle curve in plan view) ----------
{
  "id": "dutch_marquise",
  "displayName": "Dutch Marquise",
  "family": "polygon",          // circle | ellipse | superellipse | polygon | segment | freeform
  "generator": {
    "type": "polygon",
    "vertices": 6,
    "profile": "navette_hex",   // 2 points on the long axis, 4 shoulder vertices
    "cornerRadius": 0.0,        // 0 = sharp; cushion uses 0.15-0.30
    "pointed": ["head", "tail"] // which vertices are sharp points needing V-prongs
  },
  "lwRatio": { "min": 1.6, "default": 1.95, "max": 2.2 },
  "symmetry": { "mirrorLong": true, "mirrorShort": true },
  "notes": "IGI grades as 'Hexagonal Modified Brilliant'. Modern trade name, ~2022."
}
```

Outline families needed: `circle` (round), `ellipse` (oval), `superellipse` (cushion — exponent n≈2.5–4 gives the pillow), `polygon` (princess, emerald, asscher, hexagon, octagon, kite, lozenge, shield, trapezoid, epaulette, chevron, bullet, baguette, dutch marquise), `navette` (marquise, pear, heart — arcs meeting at points), `segment` (half-moon = chord + arc), `revolution` (briolette, cabochon).

```jsonc
// ---------- AXIS 2: CUT PROGRAM (facet topology) ----------
{
  "id": "old_european",
  "displayName": "Old European Brilliant",
  "style": "brilliant",         // brilliant | step | mixed | rose | fantasy | none
  "facets": { "crown": 33, "pavilion": 24, "culet": 1, "total": 58 },
  "mainDivisions": 8,           // 8-fold radial symmetry -> 8 pavilion mains
  "crownRows": [
    { "name": "table",        "count": 1  },
    { "name": "bezel",        "count": 8  },
    { "name": "star",         "count": 8  },
    { "name": "upperGirdle",  "count": 16 }
  ],
  "pavilionRows": [
    { "name": "pavilionMain", "count": 8  },
    { "name": "lowerGirdle",  "count": 16, "lengthPct": 55 }
  ],
  "base": { "type": "culet", "sizePct": 3.5 },  // culet | keel | point | flat
  "appliesTo": ["round", "cushion", "oval"],
  "confidence": "sourced"       // sourced | estimated
}
```

`base.type`: `point` (modern RB), `culet` (OEC/old mine — an octagonal facet), `keel` (marquise, pear, emerald, baguette — a line, not a point), `flat` (rose cut, portrait cut, cabochon).

```jsonc
// ---------- AXIS 3: PROPORTIONS ----------
{
  "tablePct":        { "min": 38, "default": 43, "max": 53 },
  "crownHeightPct":  { "min": 15, "default": 18, "max": 22 },
  "crownAngleDeg":   { "min": 40, "default": 42, "max": 45 },
  "pavilionDepthPct":{ "min": 43, "default": 45, "max": 48 },
  "pavilionAngleDeg":{ "min": 40, "default": 41, "max": 43 },
  "totalDepthPct":   { "min": 60, "default": 64, "max": 68 },
  "girdle":          { "min": "thin", "default": "medium", "max": "slightly thick",
                       "facetCount": 64 },
  "culetPct":        { "min": 2,  "default": 3.5, "max": 8 }
}
```

### C.3 Concrete cut programs to seed

| Program | Total | Crown | Pav | Mains | Crown rows | Pav rows | Table % | Crown ∠ | Pav ∠ | Base | Applies to |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Round brilliant (standard)** | **57** | 33 | 24 | 8 | 1/8/8/16 | 8/16 | **53–57** | **34.5°** | **40.75°** | point | round, oval, pear, marquise, heart, cushion |
| **Old European** | **58** | 33 | 24 | 8 | 1/8/8/16 | 8/16 (lower-half ≤60%) | **38–53** | **≥40°** | 41–43 **[EST]** | **culet, 2–8%** | round, cushion |
| **Old mine** | **58** | 33 | 24 | 8 | 1/8/8/16 | 8/16 | **38–45** | **41–45 [EST]** | 41–44 **[EST]** | **culet, large (4–10%)** | cushion |
| **Rose cut (full)** | **24** | 24 | 0 | 6 | 6 mains + 18 | — | **none** | dome; depth **30–35%** | — | **flat** | round, pear, oval, hex |
| **Dutch rose** | **24** | 24 (**2 equal rows of 12**) | 0 | 6 | 12 / 12 | — | none | **high pyramidal dome; depth ≈ 50% of width** | — | flat | round, navette |
| **Double Dutch rose** | ~48 **[EST]** | 24 | 24 | 6 | 2–3 rows | 2–3 rows | none | — | — | **two apexes** | round |
| **Step cut (emerald)** | 49–58 | ~25 | ~24 | 4 | 3 concentric rows + corners | 3 rows | **60–68** | 10–14% ht **[EST]** | — | **keel** | emerald, asscher, baguette, kite, lozenge, trapezoid |
| **French cut** | **13** | **9** (table + 4 mains + 4 corner ▲) | **4** | 4 | 1 / 4 / 4 | 4 | 45–60 **[EST]**, **rotated 45°** | 40–45 **[EST]** | 40–43 **[EST]** | small culet | square, rectangle, trapezoid, tapered baguette |
| **Eighternity-like (81)** | **81** | 41 **[EST]** | 40 **[EST]** | 8 | +8 trapezoidal crown facets over standard | **+16 pavilion facets** | 54–57 **[EST]** | 34.5 **[EST]** | 40.75 **[EST]** | point | round |
| **Star129-like (129)** | **129** | 34 **[EST]** | **95** (+71 vs standard) | 8 | standard + extras | 4–5 sub-rows | 54–58 **[EST]** | 34–35 **[EST]** | 40.5–41 **[EST]** | point | round |
| **Wempe-like (137)** | **137** | **65** | **72** | 8 **[EST]** | ~4–5 rows **[EST]** | ~5 rows **[EST]** | 54–58 **[EST]** | 34–35 **[EST]** | 40.5–41 **[EST]** | point **[EST]** | round |
| **Royal 201-like (201)** | **201** | ~90 **[EST]** | ~95 **[EST]** | 8 **[EST]** | 5–6 rows **[EST]** | 5–6 rows **[EST]** | 54–58 **[EST]** | 34–35 **[EST]** | 40.5–41 **[EST]** | point; **+16 girdle micro-facets [EST]** | round |
| **Royal Asscher (74)** | **74** | ~33 **[EST]** | ~41 **[EST]** | 4 | extra step rows | extra step rows | 60–68 | high crown | — | small culet | octagon w/ deep corners |
| **Crisscut (77)** | **77** | ~35 **[EST]** | ~42 **[EST]** | 4 | crisscrossed step rows | crisscrossed | 60–68 **[EST]** | — | — | keel | emerald outline |
| **Context (8)** | **8** | 4 | 4 | 4 | 1 row | 1 row | **0 (no table)** | ~54.7° (octahedron) **[EST]** | ~54.7° **[EST]** | point | square |
| **Spirit Sun (32)** | **32** | 16 **[EST]** | 16 **[EST]** | 4 | radial | radial | 0 **[EST]** | — | — | point | round |
| **Jubilee (88)** | **88** | ~40 **[EST]** | ~48 **[EST]** | 8 | **no table — 8 crown facets meet at a point** | — | **0** | — | — | point **[EST]** | cushion |
| **Portrait / table cut** | ~9–13 **[EST]** | ~5–9 | ~4 | 4 | 1–2 step rows | 1 | **80–95** | very shallow | — | flat | square, rect, hex, oval |
| **Cabochon** | **0** | — | — | — | — | — | none | dome | — | flat | any |
| **Briolette** | **84–120** | all-over | all-over | 8 **[EST]** | ~6–10 rows | continuous | **none** | — | — | **pointed tip** | drop / pear |

**Generator note on the high-facet programs (81 / 129 / 137 / 201):** the sourced data gives only totals and, for Wempe, the crown/pavilion split. The safe implementation is a **recursive subdivision parameter** rather than hand-authored topology: start from the 8-fold round-brilliant skeleton and add *N* extra sub-rows of girdle/main facets on crown and pavilion, solving for the target total. That reproduces the real construction method — Star129 is explicitly *"extra facets added to both the crown and the pavilion"* with **+71 on the pavilion**, and Eighternity is explicitly *"+16 pavilion, +8 crown trapezoidal"* — and gives a single slider ("facet density") that spans 57 → 201.

### C.4 Shipping recommendation

**Tier 1 — add now (high demand, clean parametric geometry):**
kite, shield, lozenge, elongated hexagon, Dutch marquise (hexagonal navette), half-moon, bullet, trapezoid, baguette + tapered baguette as center, octagon, old mine, old European, rose cut, Dutch rose, antique cushion, French cut, portrait cut.

**Tier 2 — add behind a "vintage & specialty" toggle:**
epaulette, chevron, briolette, cabochon, double Dutch rose, Royal Asscher, Crisscut, Jubilee, Context, Spirit Sun, step-cut kite, carré, single cut.

**Tier 3 — escape hatch (mesh upload / arbitrary polygon):**
pentagon, star and fantasy cuts, calf's head, Mazarin, Peruzzi, and all the flower cuts (Dahlia, Fire Rose, Marigold, Sunflower, Zinnia).

**Cut programs to seed:** 57 RB, 58 OEC, 58 old mine, 24 rose, 24 Dutch rose, step cut, French cut 13, 74 Royal Asscher, 77 Crisscut, 81 Eighternity-like, 129 Star129-like, 137 Wempe-like, 201 Royal 201-like, 8 Context, 32 Spirit Sun, 88 Jubilee, cabochon (0).

**Two honesty guardrails worth building in:**
1. Label "Dutch Marquise" as a **modern trade name / hexagonal modified brilliant**, not an antique cut. Vendors who claim 18th-century French origins are repeating unsourced copy.
2. If branded high-facet programs are offered, note that **more facets do not reliably mean more sparkle** and that proprietary cuts resell at a discount.
