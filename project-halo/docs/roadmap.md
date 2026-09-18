# Project Halo — roadmap

## Where the demo stops

The demo proves the interaction: parametric geometry, live pricing, guardrails, and a spec handoff. It is one HTML file with no persistence, no accounts, no real jewelers, and geometry that is convincing on screen but not manufacturable.

## Phase 1 — make the design portable

- Move the design object to a versioned schema with a migration path. It is already the only source of truth for both the 3D and the price.
- Shareable links: encode the design in the URL, so a couple can send each other rings.
- Save and compare: keep several designs side by side. This is where people actually decide.
- Replace the price constants with your own data feed and add a "last updated" date to the estimator card.

## Phase 2 — make the geometry manufacturable

The current meshes overlap rather than merge. A jeweler needs one watertight solid.

- Run the same parameters through `manifold-3d` in a Web Worker to produce a watertight union, then export STL and 3MF. Benchmarks in the research put manifold at 1000/1000 watertight unions where `three-bvh-csg` managed 22/1000.
- Add `rhino3dm.js` to write .3dm, which is what most jewelry CAD desks want, and `replicad` / OpenCascade for STEP.
- Enforce manufacturing minimums in the same pass: 0.8 mm wall, 0.7 mm prong tip, seat depth, minimum band thickness by metal. Surface violations in the UI, not at the bench.
- Generate the four orthographic views and a dimensioned spec sheet PDF.

## Phase 3 — make it look like jewelry

- Swap `MeshPhysicalMaterial` for a ray-traced gem material. Transmission plus dispersion reads as glass; a BVH refraction material reads as a diamond.
- Real HDRI studio environments, one per metal family, plus a hand and a skin-tone preview, which is the single most requested feature on every retailer's ring builder.
- Progressive path-traced "beauty shot" render for the share card and the jeweler packet.

## Phase 4 — the marketplace

This is the actual business, and the part the demo only gestures at.

- Jeweler profiles with capability tags (hand engraving, platinum, colored stones, antique cuts) matched against what the design needs.
- Quote flow: design goes out, quotes come back, buyer picks. Typical industry shape is a 50% deposit, CAD in about a week, two or three revisions, two to four weeks of manufacturing, four to eight weeks door to door.
- Stone sourcing: the center stone is usually bought separately from the setting. Deciding whether you broker stones or stay setting-only changes the whole economics.
- Revision loop: the jeweler's CAD comes back into the same viewer for approval, rather than as a PDF over email.

## Open questions worth answering before phase 2

1. Are you a lead-gen marketplace, a white-label configurator for jewelers, or a vertically integrated brand? Each one implies a different handoff and a different price model.
2. Who owns the CAD file? That is the leverage point in every custom jewelry relationship.
3. Does the estimator show a number or a range? A range sets expectations and survives quote variance; a number converts better and creates arguments.
