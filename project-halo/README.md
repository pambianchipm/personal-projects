# Project Halo — ring builder demo

A single-page, character-creator style engagement ring customizer. Slots on the left, a live parametric 3D ring in the middle, an optional price estimate top right, and a spec sheet a jeweler can quote from.

## Running it locally

```bash
cd project-halo
npm run vendor   # optional, downloads three.js into vendor/ so it works offline
npm run dev      # http://localhost:5173
```

`npm run dev` serves the page and live-reloads every open tab whenever anything in `src/` changes, so two people can point at the same machine and iterate. `--port` and `--host 0.0.0.0` are both supported if you want it on the network.

The shipped `index.html` is generated, not edited. Edit `src/`, then `npm run build` to regenerate it. Node 18 or newer, no dependencies to install.

| Path | What it is |
|---|---|
| `src/head.html` | Title, fonts, the whole stylesheet. |
| `src/body.html` | Page markup. |
| `src/data.js` | Option catalogue, band geometry math, price model. |
| `src/engine.js` | Parametric 3D: outlines, gem meshes, sweeps, materials, camera. |
| `src/ui.js` | Slots, trays, estimator, spec sheet, constraints. |
| `index.html` | Build output. One self-contained file you can email or host anywhere. |

The three parts share one module scope and are concatenated in that order, so there are no imports between them. In the browser console, `__halo.state` is the live design — change a value and call `__halo.update()`.

## What it does today

| Area | Status |
|---|---|
| 3D ring | Built from scratch every time a value changes: band sweep, prongs, baskets, bezels, halos, pavé, milgrain, three-stone sides, hidden gem. No pre-made models, no photo swapping. |
| Gem geometry | Faceted meshes generated per shape from real outlines and crown / girdle / pavilion proportions. Facet architecture is its own axis: 57-facet brilliant up to 201, plus old European, old mine, rose, Dutch rose, step, French, portrait, Context and cabochon. |
| Materials | Physically based metals from measured base colors, transmissive gems with per-species index of refraction and dispersion, a procedural studio environment. |
| Options | 19 gem types, 19 shapes, 19 cut programs, 8 heads, 5 halo styles, 4 side-stone styles, 5 shanks, 8 metals, plus finish, milgrain, hidden gem, engraving and ring size. |
| The band | Width and thickness in millimetres, and a shoulder law: does it taper, widen or pinch on the way up to the stone, by how much, and over how much of the ring. Plus euro shank and five engraved surfaces. The same function drives the geometry and the metal weight in the estimate. |
| Estimator | Off by default, toggled top right. Line-itemized, and every option tile shows what choosing it would add or subtract. |
| Guardrails | Soft stones blocked from tension settings, V-prongs forced on pointed shapes, pavé blocked on knife-edge bands, eternity resize warning, and so on. |
| Handoff | "Send to a jeweler" opens a spec sheet, a machine-readable JSON payload, and a sample jeweler match list. |

Sample data is labeled as sample. The three jewelers in the drawer are invented; the price model is real arithmetic over published 2026 market data, not a quote.

## The 99.8% argument

The taxonomy research found that a ring decomposes into orthogonal axes: center stone, head architecture, prong style and count, halo, side-stone technique, shank style and profile, metal, finish, ornament, size. A parametric assembly over those axes covers essentially all retail volume. Shape coverage alone: round, oval, emerald, princess, pear, marquise, cushion and radiant are 95% of US purchases; adding asscher, heart, hexagon and antique cuts clears 99.5%.

What is deliberately *not* parametric, and should route to a brief-and-reference-images flow instead: figural and sculptural rings (the two dragons around a stone), carved pictorial galleries, enamel and mokume, kinetic or puzzle mechanisms, hinged shanks, and heirloom stones of nonstandard cut. That is the exotic fraction, and trying to build a Spore-style free-form editor for it would cost more than it returns.

## Shapes and cut programs

Outline and faceting are separate axes, which is how the trade actually works. An old mine cut is the round-brilliant facet architecture on a cushion outline with antique proportions; a Dutch marquise is marquise proportions on a hexagonal outline. Nineteen outlines, nineteen cut programs, and the customizer only offers combinations that exist.

Two things the research corrected, and the UI now says out loud:

- **The Dutch marquise is a modern trade name, not an antique cut.** Labs grade it as a hexagonal modified brilliant: a marquise with its curved flanks straightened into six flat edges. Vendor copy claiming an eighteenth-century French origin is unsourced. The genuinely Dutch antique cut is the Dutch rose, 24 facets in two rows on a flat back.
- **More facets is not more sparkle.** Above roughly 80 facets each one gets small enough that large high-contrast flashes break into a finer glitter, and proprietary cuts resell at a discount. The builder offers 81, 129, 137 and 201 facet architectures and says this plainly when you pick one.

For reference, the highest-facet cut a major jeweler sells is Wempe's trademarked 137-facet cut, 65 crown and 72 pavilion, hand ground over about eight hours per stone.

## Pricing

`PRICE` in the source is the single table to replace with your own data: per-carat curves for natural and lab diamonds, a colour and clarity ladder, colored-gem tiers by quality, melee, metal spot prices, and labor line items, all dated 2026-09-18.

Calibration points the model reproduces: a 1.00 ct G/VS1 excellent round natural lands near $4,300, the same stone lab-grown near $560, and a 4 mm platinum band at size 6 weighs about 6.4 g.

**Before this prices anything for real, read `docs/pricing-data-pipeline.md`.** Two findings matter. First, the demo's grade ladder is derived from a published benchmark price list, and on 4 September 2026 the Second Circuit revived Rapaport's copyright claim against Nivoda over exactly that kind of reuse, reasoning that benchmark prices are expert opinion rather than observed fact. That ladder has to be refitted from observed listing prices. Second, scraping is not the cheapest path: Nivoda's API is free with an account and covers roughly 1.6 million stones with certificate numbers, affiliate product feeds give per-vendor retail prices under contract, and a metals API costs about $32 a month. That combination runs near $40 a month against $2,000 to $8,000 for an equivalent scraping stack, and carries far less risk.

## Naming

"Halo" is a generic setting style, there are jewelry trademarks containing it, and the domain is gone, so it is hard to own in search. From the conflict check in `docs/3d-and-market.md`, the cleanest shortlist is **Ringsmith**, **Ringforge**, or a coined word such as **Aurelle** or **Prongly**. Drop Loupe, Bezel, Ringlab and Facet — each is already a jewelry company or a competing ring builder. Every candidate .com is registered, so plan on a .io or a coined name, and run a proper trademark search before committing.

## Docs

- `docs/ring-taxonomy.md` — every customizable axis, carat-to-millimetre tables per shape, market share, and 32 enforceable constraint rules.
- `docs/pricing-research.md` — sourced price data and a reference price model.
- `docs/3d-and-market.md` — what every existing configurator actually does, the browser 3D and CAD-export options, gem proportions, metal colors, jeweler handoff formats, and the naming check.
- `docs/roadmap.md` — what to build next, in order.

## Architecture

One file, three sections, in order: the option catalogue and price model, the parametric 3D engine, then the UI. The design is a plain JSON object; `buildRing(state)` turns it into a three.js scene graph and `estimate(state)` turns it into money. Both read the same state, so they never disagree. `window.__halo` exposes the scene and state for poking around in the console.
