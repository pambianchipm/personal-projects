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
| Gem geometry | Faceted meshes generated per shape from real outlines and crown / girdle / pavilion proportions. Brilliant, step, old European and rose cuts. |
| Materials | Physically based metals from measured base colors, transmissive gems with per-species index of refraction and dispersion, a procedural studio environment. |
| Options | 19 gem types, 12 shapes, 8 heads, 5 halo styles, 4 side-stone styles, 5 shanks, 8 metals, plus finish, milgrain, hidden gem, engraving and ring size. |
| The band | Width and thickness in millimetres, and a shoulder law: does it taper, widen or pinch on the way up to the stone, by how much, and over how much of the ring. Plus euro shank and five engraved surfaces. The same function drives the geometry and the metal weight in the estimate. |
| Estimator | Off by default, toggled top right. Line-itemized, and every option tile shows what choosing it would add or subtract. |
| Guardrails | Soft stones blocked from tension settings, V-prongs forced on pointed shapes, pavé blocked on knife-edge bands, eternity resize warning, and so on. |
| Handoff | "Send to a jeweler" opens a spec sheet, a machine-readable JSON payload, and a sample jeweler match list. |

Sample data is labeled as sample. The three jewelers in the drawer are invented; the price model is real arithmetic over published 2026 market data, not a quote.

## The 99.8% argument

The taxonomy research found that a ring decomposes into orthogonal axes: center stone, head architecture, prong style and count, halo, side-stone technique, shank style and profile, metal, finish, ornament, size. A parametric assembly over those axes covers essentially all retail volume. Shape coverage alone: round, oval, emerald, princess, pear, marquise, cushion and radiant are 95% of US purchases; adding asscher, heart, hexagon and antique cuts clears 99.5%.

What is deliberately *not* parametric, and should route to a brief-and-reference-images flow instead: figural and sculptural rings (the two dragons around a stone), carved pictorial galleries, enamel and mokume, kinetic or puzzle mechanisms, hinged shanks, and heirloom stones of nonstandard cut. That is the exotic fraction, and trying to build a Spore-style free-form editor for it would cost more than it returns.

## Pricing

`PRICE` in the source is the single table to replace with your own data. It currently holds per-carat curves for natural and lab diamonds, the Rapaport color-by-clarity grid, colored-gem tiers, melee, metal spot prices, and labor line items, all dated 2026-09-18. `docs/pricing-research.md` sources every number and flags the estimates.

Calibration points the model reproduces: a 1.00 ct G/VS1 excellent round natural lands near $4,300, the same stone lab-grown near $560, and a 4 mm platinum band at size 6 weighs about 6.4 g.

## Naming

"Halo" is a generic setting style, there are jewelry trademarks containing it, and the domain is gone, so it is hard to own in search. From the conflict check in `docs/3d-and-market.md`, the cleanest shortlist is **Ringsmith**, **Ringforge**, or a coined word such as **Aurelle** or **Prongly**. Drop Loupe, Bezel, Ringlab and Facet — each is already a jewelry company or a competing ring builder. Every candidate .com is registered, so plan on a .io or a coined name, and run a proper trademark search before committing.

## Docs

- `docs/ring-taxonomy.md` — every customizable axis, carat-to-millimetre tables per shape, market share, and 32 enforceable constraint rules.
- `docs/pricing-research.md` — sourced price data and a reference price model.
- `docs/3d-and-market.md` — what every existing configurator actually does, the browser 3D and CAD-export options, gem proportions, metal colors, jeweler handoff formats, and the naming check.
- `docs/roadmap.md` — what to build next, in order.

## Architecture

One file, three sections, in order: the option catalogue and price model, the parametric 3D engine, then the UI. The design is a plain JSON object; `buildRing(state)` turns it into a three.js scene graph and `estimate(state)` turns it into money. Both read the same state, so they never disagree. `window.__halo` exposes the scene and state for poking around in the console.
