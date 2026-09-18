# Project Halo — 3D, Gem-Rendering and Market Research

Research date: 2026-09-18. Scope: a browser-based, character-creator-style engagement ring customizer (controls left, live 3D ring center, price estimate top-right) that emits a spec a jeweler can quote and build from.

Every claim below carries an inline source. Where I inferred something rather than read it, it is marked **(inferred)**.

---

## 1. Existing ring configurators and vendors

### 1.1 Retailer / DTC ring builders

| Brand | What can be customized | Visual tech | Handoff to manufacturing | Source |
|---|---|---|---|---|
| **Brilliant Earth** | Setting + diamond/gemstone pairing; metal (14K/18K Y/W/R gold, platinum), prong vs bezel, pavé/side stones, milgrain. "Custom Design Studio" adds gemologist-led fully custom work. | Pre-rendered 360° setting spins and rendered hand photos, plus 360° HD diamond videos and AR virtual try-on. Not real-time WebGL. | Retailer manufactures in-house; custom path = "team builds a digital model for your approval, artisans hand-craft" with sign-offs at each step. | https://www.diamonds.pro/guides/how-to-customize-engagement-ring/ ; https://www.brilliantearth.com/pages/custom-design-studio/ ; https://www.brilliantearth.com/news/virtual-try-on/ |
| **James Allen** (Ring Studio, 2021) | Head and shank chosen independently (metal + style each), 200k+ diamonds, hidden gemstones, engraving. | Proprietary 360° HD "Diamond Display Technology" (Segoma photography rig, 40x SuperZoom); AR try-on. Photo-based, not 3D geometry. | Vertically integrated (R2Net/Signet); orders go straight to their factory. | https://www.jamesallen.com/diamond-display-technology/ ; https://www.prnewswire.com/news-releases/jamesallencom-launches-the-ring-studio-301353284.html |
| **Blue Nile** | "Build Your Own Ring" / three-stone builder: pick center + matched side stones + setting. | 360° diamond video + product photography. | Fully custom only above ~$10,000 with a $500 non-refundable CAD deposit. | https://www.ringspo.com/reviews/blue-nile/ ; https://www.ritani.com/pages/ritani-vs-blue-nile |
| **Taylor & Hart** | Fully bespoke: sketch → CAD → cast. | Designer sketches, then Matrix (Gemvision) CAD render + a four-view spec sheet; in-house resin 3D print the customer can try on. No self-serve 3D configurator. | CAD → wax print → cast → side stones set by manufacturer → center stone set in Hatton Garden. CAD in 2–4 days after stone confirmed, 3 free amendments, 4–5 weeks build, total 12–24 working days. | https://taylorandhart.com/us/blog/the-3d-journey-of-an-engagement-ring ; https://taylorandhart.com/us/ring-guidance-3/the-custom-process |
| **With Clarity** | Setting builder (8,000+ combos: halo, solitaire, pavé, three-stone) + Home Preview. | Rendered product imagery; the differentiator is physical: 3D-printed white-alloy replica rings with simulant stones, $200/ring redeemable, up to 14 business days. | In-house manufacture. | https://www.withclarity.com/pages/home-preview ; https://www.einnews.com/pr_news/610908441/ |
| **Ritani** | Build from diamond or setting; "design your own" custom at no extra fee, no minimum. | 360° HD diamond video; rendered settings. | In-house custom CAD. | https://www.ritani.com/pages/design-your-own-engagement-ring ; https://www.ritani.com/pages/ritani-vs-blue-nile |
| **Clean Origin** | Setting + lab diamond pairing; custom on request. | 360° HD video/photos of each diamond; setting photography. | In-house. | https://www.cleanorigin.com/engagement-rings/ ; https://learningjewelry.com/best-online-diamond-stores/clean-origin-vs-ritani/ |
| **Frank Darling** | Quiz → unlimited free sketches → stone selection → CAD → cast. | Sketches + CAD renders; sterling/CZ try-at-home samples. No self-serve 3D. | Deposit or full payment after sign-off, then CAD (~1 week), ~3 weeks production after CAD approval. | https://frankdarling.com/how-it-works/ ; https://frankdarling.com/blog/you-want-a-custom-engagement-ring-now-what/ |
| **Ada Diamonds** | Concierge custom (lab diamonds). | CAD + photorealistic renders, video collaboration. | 20% non-refundable deposit before design; $4,000 minimum for engagement rings; most clients out of design in ≤7 days. | https://www.adadiamonds.com/diamond-concierge-process ; https://www.adadiamonds.com/payment-terms |
| **VRAI** | White-glove custom; "Cut for You" diamonds in 30 shapes. | Renderings + 3D visualization reviewed with a Diamond Expert; not self-serve. Production ~14 business days. | Vertically integrated (Diamond Foundry). | https://www.vrai.com/custom-engagement-rings ; https://theyesgirls.com/the-6-best-custom-engagement-ring-brands/ |
| **Keyzar** | Large made-to-order setting catalog (pavé, hidden halo, halo, three-stone, vintage, nature…) + 360° diamond filters. | Product photography + 360° diamond video. | Made to order in-house. | https://keyzarjewelry.com/blogs/engagement-rings/how-to-create-your-engagement-ring-online |
| **Jean Dousset** | Custom by consultation; signature "Seamless Halo". | Reviewers note it "lacks the interactive tools that help visualize final results." | In-house. | https://www.goodstoneinc.com/pages/alternative-jean-dousset |
| **Gemvara** | Metal + gemstone swaps on catalog designs (classic mass-customization). | Rendered variant imagery. | Acquired by Richline (Berkshire Hathaway) in 2016; still operating. | https://www.idexonline.com/FullArticle?Id=41932 |
| **CustomMade** | Fully bespoke marketplace (independent artisans, 2M+ diamonds). | Sketches → 3D renderings after a deposit. | Deposit before 3D models; ~2–4 weeks manufacturing after approval; rings from ~$1,200. | https://www.custommade.com/how-it-works/ |
| **Rare Carat** | Diamond marketplace + settings; rendered pairing preview; free CAD model of your exact ring in 24–48h on request; true-to-scale hand viewer. | Rendered previews; CAD on request. | Ships via partner retailers. | https://www.rarecarat.com/setting-search ; https://www.rarecarat.com/viewer |
| **Jewlr** | Rings/necklaces/etc: style, metal, stones, engraving. | Real-time 3D preview in browser; partnered with Google and Sketchfab on 3D display ads. | Vertically integrated: each order 3D-printed, cast, set, laser-engraved in North America; 1.3M+ pieces sold. | https://yespress.io/jewlr ; https://www.jewlr.com/personalized-jewelry |
| **Tiffany** | "Tiffany Ring Studio": shape (Round, Oval, Emerald, Princess, Cushion, Pear) + setting + metal, engraving. | In-store / appointment with a Diamond Expert; there is a Ring Finder app with AR try-on, but no online 3D configurator. | In-house. | https://www.tiffany.com/engagement/tiffany-difference/engagement-ring-customization.html |
| **Cartier** | Engraving/personalization only (name, initials, date, motif). | No configurator found. | Boutique. | https://www.cartier.com/en-us/services/jewelry/our-jewelry-services/personalization/ |

**Pattern:** almost all "builders" are *catalog pairing* (pick a pre-modeled setting, pick a stone) visualized with photography or pre-rendered turntables. Real parametric control (band width, prong count, gallery height, head height) exists nowhere self-serve in the retail tier; it lives behind a human CAD designer and a deposit.

### 1.2 Configurator vendors / SaaS used by jewelers

| Vendor | Rendering | Jewelry specifics | Manufacturing handoff | Pricing | Source |
|---|---|---|---|---|---|
| **Threekit** | Real-time WebGL 3D + "Virtual Photographer" (V-Ray server renders on hand/turntable). | Engagement-ring package: band style, finishes, metals, gem shapes, setting styles. Onboarding = you submit CAD files, they optimize models. | None built-in; it's a visualization layer. | From $15,000/yr + implementation. | https://www.threekit.com/engagement-ring-configurator ; https://www.threekit.com/3d-product-library/wedding-ring |
| **iJewel3D** | Real-time 3D viewer/configurator. | Modular head + shank components prepared in Rhino/MatrixGold with anchor points; combined dynamically. Has a "Spec Sheet & Manufacturing" guide; production CAD kept separate from render CAD. | STL/STEP export claims for production-ready files. | Not listed. | https://docs.ijewel3d.com/ring-configurator/introduction.html ; https://docs.ijewel3d.com/ring-configurator/prepare-components.html |
| **Gemist** | Real-time photorealistic 3D renders, 360°, lifestyle views; 2,000+ customizable designs, dynamic pricing. | Full-stack for retailers: visualization + manufacturing without inventory; Saban Onyx partnership adds free CAD. 14,000 custom pieces/week; $9M raised. | Yes — their whole pitch. | Retailer B2B. | https://nationaljeweler.com/articles/14047-gemist-raises-6m-in-funding-to-scale-jewelry-tech-platform ; https://news.centurionjewelry.com/articles/detail/gemist-partners-with-saban-onyx-on-custom-jewelry-platform-for-retailers |
| **Ruby Kinglet** | AI-rendered from CAD ("render-from-CAD"), 3 formats (Showcase / Builder / Visualizer). | Design → CAD → product photos in one tool; seller profiles link to vetted fabricators. | Yes (fabricator network). | $179/user/mo. | https://www.rubykinglet.ai/insights/best-jewelry-configurators-2026 |
| **Zakeke** | Real-time 3D + AR widget (any product). | Generic; no jewelry pipeline. | None ("storefront-only widget"). | $69.90–$299.90/mo + 1.5–1.9%/order. | https://www.zakeke.com/blog/3d-configurator/jewelry/ |
| **Expivi** | Real-time 3D CPQ. | Claims "production-ready files instantly." | Yes, generic. | Quote. | https://www.expivi.com/industry/jewelry/ |
| **Kickflip** | 3D no-code widget. | Generic. | None. | $59/mo + up to 1.95%. | https://www.rubykinglet.ai/insights/best-jewelry-configurators-2026 |
| **Shopify ring-builder apps** (Ring Facet, Keyideas RingBuilder, Brilliance Builder, GemFind RingBuilder, VDB Ring Creator) | 3D preview widgets tied to live diamond feeds. | Setting + stone pairing. | None documented. | $70–$375/mo; VDB $2–3k setup + $150–550/mo. | https://www.rubykinglet.ai/insights/best-jewelry-configurators-2026 |
| **Hapticmedia** | Real-time 3D + AR; positioned for watches/jewelry fine detail. | Luxury clients. | None stated. | Quote. | https://hapticmedia.com/ ; https://www.reality-atlas.com/blog/best-3d-product-configurator-companies |
| **Emersya** | Proprietary real-time engine (WebGL viewer, rules engine, JS API, AWS). | Luxury/watch/premium accessories. | "Production workflow" integration via API. | Quote. | https://www.emersya.com/3d-product-configurator/ |
| **Vntana** | 3D asset pipeline: ingests CAD/STEP/GLB, auto-optimizes up to 99%, emits GLB + USDZ for AR. | Fashion/footwear scale; not jewelry-specific. | N/A. | Enterprise. | https://www.vntana.com/solutions/enterprise-3d-web-viewer/ |
| **Sirv** | 360° spin generation from GLB/glTF/USDZ/OBJ/FBX/STL + 3D viewer with AR fallback. | Media CDN, not a configurator. | N/A. | Media plan. | https://sirv.com/help/articles/convert-3d-model-to-360-spin/ |
| **Cylindo** | Now part of Chaos (V-Ray); furniture-focused. | Not jewelry. | N/A. | Enterprise. | https://www.cbinsights.com/company/cylindo/alternatives-competitors |
| **3D Cloud** | Furniture/home-improvement. | Not jewelry. | N/A. | Enterprise. | https://www.cbinsights.com/company/cylindo/alternatives-competitors |
| **3djewelryviewer.com** | Commercial version of piellardj's GPU ray-traced gem renderer (see §3). | Gem-first. | N/A. | Quote. | https://www.3djewelryviewer.com/ |

### 1.3 Jewelry CAD tools (what the jeweler on the other side of the handoff uses)

| Tool | Nature | Formats | Notes | Source |
|---|---|---|---|---|
| **MatrixGold 3** (Gemvision/Stuller) | Rhino 8 plugin, parametric history tree, industry default. | STL, 3DM, OBJ. Imports legacy Matrix and RhinoGold files. | 1–3 months to proficiency. | https://gemvision.com/matrixgold ; https://www.voguefashioninstitute.com/rhino-vs-matrix-gold-software-which-jewelry-cad-is-right-for-you-in-2026/ |
| **RhinoGold** | Rhino plugin (legacy; superseded by MatrixGold). | 3DM/STL. | 3–6 months to proficiency. | https://tashvi.ai/blog/cad-software-comparison-rhinogold-matrixgold-jewelcad |
| **3Design** (Type3) | Standalone, fully parametric builder "designed just for jewellers." | STL/OBJ; from ~$2,500. | Easy to re-edit. | https://www.haywoodsjewellery.co.uk/learning-cad-for-jewellery/ |
| **Firestorm CAD** (3D Space Pro) | Standalone direct-modeling + parametric builders, 4,000+ component library, web "Gallery" 360° app. | STL etc. | Popular with shops lacking Rhino experience. | https://learnfirestormcad.com/ ; https://www.3dsourced.com/3d-software/jewelry-design-software/ |
| **JewelCraft** (Blender, GPL-3) | Free add-on: gems, prongs, cutters, alloy weight, gem maps. | Blender → STL/OBJ. | Cut list not verified this session (GitHub API access unavailable); check `assets/` in repo. | https://github.com/mrachinskiy/jewelcraft |
| **Gemgen** (Blender, commercial) | Parametric gem generator: Round, Cushion, Emerald, Oval, Pear, Marquise, Heart, Trillion, Baguette, Rose; "reset to jeweler-standard ratios" per cut. | Mesh. | Useful reference for default ratios. | https://superhivemarket.com/products/gemgen |
| **rhino3dm.js** (McNeel, MIT) | OpenNURBS in WASM: read/write .3dm in browser or Node. | .3dm | Lets you emit a real Rhino file the jeweler opens directly in MatrixGold. | https://github.com/mcneel/rhino3dm/blob/main/docs/javascript/RHINO3DM.JS.md |

### 1.4 Gaps a "Spore-like character creator for rings" can fill

1. **True parametric sliders in the customer's hands.** Every retail builder is pick-a-setting; band width, shank profile, prong count/shape, head height, gallery style, halo gap, cathedral rise are all locked behind a CAD designer and a deposit (Blue Nile: $500 + $10k minimum; Ada: 20% deposit). Nobody lets the customer sculpt.
2. **Live, watertight geometry rather than photos.** Photo/360° systems (James Allen, Brilliant Earth, Blue Nile) cannot show a combination that hasn't been shot; modular-glTF systems (iJewel3D, Threekit) can only show pre-modeled heads × shanks.
3. **Spec-first output.** The retail tools output a SKU; the SaaS tools output a render. Only Gemist/Ruby Kinglet/iJewel3D talk about production files, and they sell to retailers, not consumers. A consumer-facing spec sheet + STL/3DM + four-view drawing that *any* jeweler can quote from is open.
4. **Jeweler marketplace on top of a spec.** CustomMade and Etsy already prove people pay deposits to independent jewelers on the strength of a sketch; a parametric spec removes most of the back-and-forth those flows exist to absorb.
5. **Price transparency during play.** Gemist has "dynamic pricing" B2B; nothing consumer-facing shows metal weight × spot price + stone + labor as you drag a slider.
6. **Manufacturability guardrails in the UI.** Enforcing min wall 0.8 mm / prong tip ≥0.5–0.7 mm while the customer plays (as the `castable` repo does) is unheard of in consumer tools.

---

## 2. Web 3D approach for a fully parametric ring

### 2.1 Engine choice

| Option | Verdict for this project | Evidence |
|---|---|---|
| **three.js (vanilla)** | Best fit. Largest ecosystem (93k+ stars, ~900k monthly downloads), full control, `MeshPhysicalMaterial` has transmission/IOR/dispersion, `GLTFLoader` supports `KHR_materials_dispersion`, exporters for glTF/USDZ/STL exist. | https://www.utsubo.com/blog/threejs-vs-babylonjs-vs-playcanvas-comparison ; https://threejs.org/examples/webgl_loader_gltf_dispersion.html |
| **react-three-fiber + drei** | Same engine, better ergonomics for a React control panel; drei ships `MeshRefractionMaterial` (BVH ray-traced gem), `MeshTransmissionMaterial`, `Environment`, `CubeCamera`, `Stage`, `AccumulativeShadows`. Recommended for the demo. | http://drei.docs.pmnd.rs/shaders/mesh-refraction-material |
| **Babylon.js** | Strong PBR (often most accurate on advanced glTF extensions), `subSurface.isRefractionEnabled`, dispersion demonstrated. Fine, but smaller parametric-geometry and CSG ecosystem for our needs. | https://jessyleite.dev/posts/glb-viewer-rendering-engines/ ; https://forum.babylonjs.com/t/pbr-subsurface-parameters-question/40738 |
| **PlayCanvas** | Best mobile frame rates and a cloud editor; weaker fit for code-generated geometry and custom gem shaders. | https://www.utsubo.com/blog/threejs-vs-babylonjs-vs-playcanvas-comparison |
| **WebGi** (three.js fork by ektogamat/pixotronics) | Ships `DiamondPlugin` + SSR + bloom; the `webgi-jewelry` demo renders a ring in ~20 lines. Proprietary SDK; good reference for the look. | https://github.com/ektogamat/webgi-jewelry ; https://deepwiki.com/ektogamat/webgi-jewelry |

### 2.2 Geometry strategy

| Approach | Pros | Cons | Use |
|---|---|---|---|
| **Pure three.js parametric primitives** (`LatheGeometry` for shank cross-section swept around the finger, `TubeGeometry`/`ExtrudeGeometry` along a spline for cathedral shoulders, `CylinderGeometry`/tapered lathe for prongs, `TorusGeometry` for halo rails) | Instant, zero deps, always watertight per-part, 60 fps. | Parts overlap instead of union; no fillets; not one solid. | **Demo.** Overlapping parts render fine; export as multi-body STL. |
| **three-bvh-csg** (JS, BVH-accelerated booleans) | Easy in-scene unions/subtractions (stone seats, azures). | Benchmark: watertight on only 22/1000 pairs, median 978 ms. Not for production solids. | Prototype-only, or avoid. https://polydera.com/algorithms/browser-mesh-boolean-libraries-2026 |
| **manifold-3d** (C++/WASM, Apache-2.0) | Exact, watertight on 1000/1000, ~300 ms median; official WASM; exports glTF/3MF; mesh-native fillet/chamfer used by partforge. | Mesh-only (no B-rep, no STEP). | **Production union of parametric parts → STL/3MF.** https://polydera.com/algorithms/browser-mesh-boolean-libraries-2026 ; https://github.com/pixiteapps/partforge |
| **trueform** (WASM) | Fastest in the same benchmark (21.9 ms median), watertight 1000/1000. | Newer/less known; check license. | Alternative to manifold if speed matters. |
| **replicad / OpenCascade.js** (B-rep in WASM) | True fillets, chamfers, shells, **STEP export**; more production mileage than manifold for CAD features. | Heavier WASM (~10s of MB), slower rebuilds, run in a Worker. | **Production STEP/B-rep output.** https://brepjs.dev/compare/brepjs-vs-replicad ; https://github.com/Irev-Dev/curated-code-cad |
| **partforge** pattern (manifold for preview + replicad for STEP, both in Web Workers, three.js viewer) | Exactly the dual-kernel split we need; includes DFM "verification blocks" before export. | Aimed at AI-authored parts; adapt the architecture, not the product. | Architecture template. https://github.com/pixiteapps/partforge |
| **`castable`** (Python build123d/OpenCASCADE, trimesh repair, three.js preview) | Seven-parameter ring → watertight STL/STEP with min wall 0.8 mm and prong tip 0.7 mm enforced in geometry. | Server-side Python, not browser. | Reference for the parameter set and constraints; could be the server "export kernel." https://github.com/JuanGaljoen/castable |
| **Modular glTF part kits** (iJewel3D/Threekit style: heads × shanks with anchor points) | Photoreal hand-modeled parts. | Combinatorial, not parametric; every new prong style is an artist task. | Use for *ornamental* details (milgrain, filigree) layered onto parametric cores. |
| **rhino3dm.js** | Write `.3dm` with meshes + layers + user strings directly in the browser; jeweler opens in MatrixGold. | Mesh-only unless you build NURBS yourself. | Add to production export alongside STL/STEP. https://www.npmjs.com/package/rhino3dm |

**Recommendation.**
- *Demo (weeks):* r3f + drei; ring = lathe shank + spline shoulders + tapered-cylinder prongs + torus halo rail, all overlapping; gem = procedural faceted mesh (§3); `MeshRefractionMaterial` for the stone, `MeshPhysicalMaterial` metals, HDRI `Environment`. Export glTF/GLB via `GLTFExporter`, STL via `STLExporter` (multi-body), USDZ via `USDZExporter` for iOS AR Quick Look.
- *Production (months):* keep the same param schema; run manifold-3d in a Worker to union parts, cut seats/azures, and emit a single watertight STL/3MF with DFM checks; run replicad in a second Worker to emit STEP; write a `.3dm` with rhino3dm.js; generate a four-view PNG/SVG spec sheet from orthographic cameras.

---

## 3. Realistic gem rendering in WebGL

### 3.1 Material options

| Technique | How | Quality | Cost | Source |
|---|---|---|---|---|
| **`MeshPhysicalMaterial` transmission + `ior` + `dispersion`** | Screen-space refraction of the transmission buffer; `dispersion` added in **r164** (not r163); glTF `KHR_materials_dispersion` loads directly. | Good for glass; on a faceted diamond it reads as "thick glass" because there is no internal bouncing. | Cheap; 1 extra render pass. | https://github.com/mrdoob/three.js/releases/tag/r164 ; https://threejs.org/examples/webgl_loader_gltf_dispersion.html ; https://threejs.org/docs/pages/MeshPhysicalMaterial.html |
| **drei `MeshRefractionMaterial`** (port of three-mesh-bvh "diamond" example) | Ray-traces inside the gem in the fragment shader using a BVH uniform; params `envMap` (required), `bounces` (2), `ior` (2.4), `fresnel` (0), `aberrationStrength` (0), `color`, `fastChroma` (true). Pair with `CubeCamera` to reflect the ring. | The "diamond look": total internal reflection, sparkle, chromatic fire. | Bounces × 3 (if chroma) ray casts per pixel; known issues on some mobile GPUs and when sharing BVH across meshes (#2382, #1058). | http://drei.docs.pmnd.rs/shaders/mesh-refraction-material ; https://gkjohnson.github.io/three-mesh-bvh/example/bundle/diamond.html ; https://github.com/pmndrs/drei/issues/2382 |
| **N8programs `diamonds` shader** | Custom refraction/reflection shader; basis of the FacetDiagrams-driven "GemView" service. | Comparable to drei's; vanilla three.js. | Similar. | https://discourse.threejs.org/t/gems-rendering-service/76484 |
| **piellardj `diamond-webgl`** (GPL-3) | Full GPU ray tracing through facets: Snell, Fresnel, Beer's law absorption, dispersion, TIR, bloom + FXAA; authors explicitly rejected cubemap tricks for precision. Commercial fork: 3djewelryviewer.com. | Best open-source look. | GPL license blocks direct reuse in a closed product; use as reference. | https://github.com/piellardj/diamond-webgl ; https://piellardj.github.io/diamond-webgl/jewelry/ |
| **WebGi `DiamondPlugin`** | Proprietary three.js fork plugin + SSR + bloom. | Very good. | Commercial SDK. | https://github.com/ektogamat/webgi-jewelry |

**Sparkle/fire tricks:** bloom on a threshold (piellardj uses "bidirectional blur" bloom), small `aberrationStrength` with `fastChroma`, a high-contrast studio HDRI with hard light sources (sparkle needs discrete bright spots, not a soft dome), animate camera/gem slightly on idle so facets flash, and use `RoomEnvironment` only as a fallback. `envMapIntensity` above 1 on the gem is a common cheat **(inferred from practice)**.

**Performance limits:** `bounces` 2–3 desktop, 1–2 mobile; disable chroma on mobile (webgi-jewelry gates Bloom/SSR by `mobileAndTabletCheck()`); keep gem mesh ≤ ~2–5k triangles so the BVH is tiny; render the gem at full res but post-process at half. https://deepwiki.com/ektogamat/webgi-jewelry

**Physical constants:** diamond IOR 2.4168, Abbe (dispersion) 55.3, density 3,500 kg/m³; sapphire IOR 1.7682, Abbe 72.2, density 3,980; borosilicate glass IOR 1.52. (CC0 data.) https://api.physicallybased.info/v2/materials

### 3.2 Procedural gem geometry

**Open-source generators found**
- `piellardj/diamond-webgl` — parametric round/cushion/emerald etc. with crown angle, pavilion angle, table, girdle; GPL-3. https://github.com/piellardj/diamond-webgl
- FacetDiagrams.org — 4,000+ faceting designs (GemCad `.gem`/`.asc` lineage); GemView loads them as OBJ. Any `.asc` (facet index + angle table) can be turned into a mesh by intersecting half-spaces. https://facetdiagrams.org/about-facetdiagrams-org/ ; https://www.gemdiagram.com/
- GemCad (Windows, shareware) is the faceters' standard and its `.gem` format is the de-facto interchange. https://www.gemcad.com/gemcad.html
- JewelCraft (Blender, GPL-3) ships a gem library; Gemgen (commercial) is parametric with per-cut standard ratios. No npm package generates faceted gems; you will write one.

**Generator design (round brilliant):** build in cylindrical coords with diameter = 1. Girdle = 16-gon (or 64 girdle facets). Table = regular octagon at height `crown_h`, radius `table% / 2`. Crown: 8 bezel (kite) facets from table corners to girdle, 8 star facets between them (star length % controls where they meet), 16 upper-girdle triangles. Pavilion: 8 mains meeting at the culet, 16 lower-girdle facets (lower-girdle % controls their length). Crown height = tan(crown angle) × (1 − table%) / 2; pavilion depth = tan(pavilion angle) × 0.5. Then for fancy shapes, deform the girdle outline (ellipse for oval, super-ellipse for cushion, teardrop for pear, lens for marquise, cardioid-ish for heart) and re-derive facets by half-space intersection rather than by index — that is exactly how GemCad works and why `.asc` files list angle + azimuth per facet. Step cuts (emerald/asscher) are concentric rectangles with 3 crown rows and 3 pavilion rows at increasing angles. Princess/radiant are square brilliants with chevron pavilions (57 or 76 facets). **(implementation guidance, inferred from facet structure sources below)**

### 3.3 Standard proportions per shape

Depth, table and L:W below are recommended ranges compiled from diamondscreener.com (derived "from how diamonds are cut in practice") cross-checked against worthy.com and doamore/ndrdiamond. Crown/pavilion angles are only standardized for the round brilliant; for other shapes the angle column gives the best available guidance and should be treated as modeling defaults.

| Shape | Facets | Table % | Total depth % | L:W | Crown angle | Pavilion angle | Other |
|---|---|---|---|---|---|---|---|
| **Round brilliant — Tolkowsky (1919)** | 58 (33 crown / 25 pavilion) | 53.0 | 59.3 (crown 16.2 + pavilion 43.1, no girdle) | 1.00 | 34.5° | 40.75° | Culet none. https://en.wikipedia.org/wiki/Brilliant_(gemstone_cut) ; https://www.brilliance.com/education/ideal-diamond-crown-angle-pavilion |
| **Round brilliant — GIA Excellent-type range** | 58 | 52–62 | 59–63 | 1.00 | 31.5–36.5° | 40.6–41.8° | Girdle thin–slightly thick, culet none–very small. https://www.rarecarat.com/education/cut/what-are-the-ideal-gia-diamond-proportions ; https://www.rockher.com/pages/what-are-the-ideal-diamond-proportions |
| **Round brilliant — "super ideal" (beyond4cs)** | 58 | 54–57 | 61–62.5 | 1.00 | 34–35° | 40.6–41.0° | Star 50–55 %, lower girdle 75–80 %, girdle thin–medium, no culet. https://beyond4cs.com/shapes/round/ideal-proportions/ |
| **Round brilliant — GIA reference stone** | 58, 64 girdle facets | 56 | — | 1.00 | 34° | 40.5° | Star 50 %, lower girdle 75 %, culet 0.5 %. https://en.wikipedia.org/wiki/Facet |
| **Oval** | 56–58 (brilliant) | 56–60 (Excellent 53–63) | 60–63 | 1.37–1.55 (alt 1.30–1.50) | not standardized — start 34–36° | not standardized — start 41–43°; bow-tie sensitivity | https://www.diamondscreener.com/education/recommended-depth-table-and-length-width-ratio-for-fancy-shape-diamonds/ ; https://blog.worthy.com/knowledge-center/diamonds/cut-grade-diamond-shape/ |
| **Cushion** | 58 (cushion brilliant) or 64+ (modified / "crushed ice") | 59–63 (Excellent 61–67.9) | 67–70 | 1.00–1.04 square; 1.10–1.20 elongated | many mixes; 30–36° cited | not standardized | https://beyond4cs.com/shapes/cushion/ ; https://www.pricescope.com/community/threads/cushion-cut-crown-and-pavilion-angles.284400/ |
| **Princess** | 57 or 76 (2–4 chevrons) | 68–72 (60–75 acceptable; avoid <56 or >80) | 71–75 (patent: 63–70.9) | 1.00–1.04 | patent example 34.0–35.2°; crown height 9.5–13.5 % of width | patent example mains 40.6–41.0° | https://www.diamondscreener.com/... ; https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6745596 |
| **Emerald (step cut)** | 57–58 (25 crown + 32 pavilion + culet; 3 crown rows, 3 pavilion rows) | 61–65 (Excellent 61–69) | 66–69 | 1.35–1.50 | 33–35°, crown height ≈15 % | ≈45° (43.3–46.8°) | https://www.estatediamondjewelry.com/many-facets-diamonds/ ; https://www.brilliance.com/education/ideal-diamond-crown-angle-pavilion |
| **Asscher (square step cut)** | 58 (Royal Asscher 74) | 61–65 (Excellent 60–68) | 66–69 | 1.00–1.04 | as emerald | as emerald, steeper pavilion for "windmill" | https://www.diamondscreener.com/... ; https://blog.worthy.com/... |
| **Radiant** | 70 | 64–68 (Excellent 61–69) | 67–70 | 1.25–1.40 (square 1.00–1.05) | brilliant-style, not standardized | not standardized | https://www.diamondscreener.com/... ; https://4cs.gia.edu/en-us/blog/guide-diamond-shapes-engagement-rings/ |
| **Pear** | 58 | 56–60 | 60–63 | 1.55–1.70 (alt 1.40–1.55) | as round | as round; point needs French tip/extra facets | https://www.diamondscreener.com/... ; https://www.doamore.com/diamond-shapes-10-shapes-to-compare-before-you-buy/ |
| **Marquise** | 58 (33 crown / 25 pavilion) | 56–60 (Excellent 53–63) | 60–63 | 1.90–2.10 (alt 1.85–2.00) | as round | as round; French tips | https://www.diamondscreener.com/... ; https://www.estatediamondjewelry.com/many-facets-diamonds/ |
| **Heart** | 56–59 | 56–60 | 56–59 | 1.00–1.20 (alt 0.90–1.05) | as round | as round; cleft depth ~ parameter | https://www.diamondscreener.com/... ; https://www.doamore.com/... |

Rule of thumb used by cutters (for round): for every 1° steeper crown, subtract ~0.2° from the pavilion. https://www.brilliance.com/education/ideal-diamond-crown-angle-pavilion

Sizing: carat ≈ length × width × depth × k (k≈0.0061 round, varies by shape) — use the mm dimensions as the geometric source of truth and derive an *estimated* carat for the price panel. **(standard jeweler formula, inferred)**

---

## 4. Metal rendering

Measured F0 / base colors (linear sRGB, metalness 1, roughness 0) from physicallybased.info (CC0), https://api.physicallybased.info/v2/materials :

| Metal | Base color (linear RGB) | Approx. sRGB hex | Density kg/m³ |
|---|---|---|---|
| Gold (24K) | 1.059, 0.773, 0.307 | ≈ #FFE39A (clamped; often quoted as 1.0/0.766/0.336 → #FFE2A0) | 19,320 |
| Silver | 0.991, 0.985, 0.974 | ≈ #FDFCFB | 10,500 |
| Platinum | 0.765, 0.730, 0.676 | ≈ #E2DDD6 | 21,450 |
| Palladium | 0.734, 0.704, 0.662 | ≈ #DDD8D3 | 12,007 |
| Copper | 0.932, 0.623, 0.522 | ≈ #F9CCBD | 8,940 |
| Brass | 0.910, 0.778, 0.423 | ≈ #F6E4B0 | 8,600 |
| Titanium | 0.441, 0.400, 0.361 | ≈ #B1A9A1 | 4,540 |

Cross-check: UE/Lagarde tables give gold 1.000/0.766/0.336, silver 0.972/0.960/0.915, platinum 0.672/0.637/0.585, copper 0.955/0.638/0.538. https://seblagarde.wordpress.com/2011/08/17/feeding-a-physical-based-lighting-mode/ ; https://www.cgchannel.com/2022/08/physically-based-is-an-amazing-database-of-pbr-material-values/

**Alloys (no measured data; derive by blending F0 by composition, then eyeball):**
- 18K yellow gold (75 % Au, ~12.5 % Ag, ~12.5 % Cu): lerp gold → (silver+copper)/2 at 0.25; slightly paler than 24K. 14K (58.3 % Au) paler still.
- 18K rose gold (75 % Au, 22.25 % Cu, 2.75 % Ag per Wikipedia "Colored gold"): lerp gold → copper at ~0.25–0.30. https://en.wikipedia.org/wiki/Colored_gold
- White gold: Au + Ni/Pd, almost always rhodium-plated, so render as **rhodium/platinum-like** with a hair more warmth; unplated white gold is faintly yellow-grey. https://en.wikipedia.org/wiki/White_gold
- Platinum 950: use the measured platinum row; it reads *cooler and slightly darker* than rhodium-plated white gold, which is why the two must not share a material.

Common "design" hexes seen in jewelry UIs (not physically measured, fine for swatches, not for the PBR base color): yellow gold #D4AF37 / #FFD700, rose gold #B76E79, white gold #E8E8E8 / #F0EDE5, platinum #E5E4E2. https://en.wikipedia.org/wiki/Gold_(color)

**Parameters:** `metalness 1.0`; `roughness` 0.05–0.15 for high polish, 0.3–0.45 for satin/brushed (add an anisotropic normal map for brushed), 0.6+ for matte/sandblast; `clearcoat` is *not* physically appropriate on bare metal — skip it except as a cheap way to fake rhodium plating (`clearcoat 1, clearcoatRoughness 0.05`) **(inferred)**. Environment lighting is everything: metals are ~100 % reflection, so the HDRI *is* the material. Use a studio HDRI with large soft boxes plus a few hard lights; `MeshPhysicalMaterial` in three.js supports `anisotropy`, `sheen`, `iridescence` if needed. https://threejs.org/docs/pages/MeshPhysicalMaterial.html

---

## 5. Handoff to jewelers

### 5.1 What a jeweler needs to quote and build

From technical-drawing conventions (all mm; orthographic front elevation, side profile, top view, back view, cross-sections; title block with scale, units, revision): https://tashvi.ai/blog/learn-read-jewelry-technical-drawing ; https://www.mkmjewelry.com/anatomy-ring-beginners-work-cad/

**Spec-sheet fields to emit**
- Finger size (US/UK/EU + inner diameter mm) and comfort-fit yes/no.
- Metal: alloy + karat/fineness (18K YG, 14K RG, 950 Pt, 925 Ag), finish (high polish / satin / brushed / hammered), plating (rhodium).
- Shank: width at top / bottom, thickness at top / bottom, profile (flat, half-round, knife-edge, court), taper, cathedral rise, split/ twisted, engraving text/font.
- Head/setting: style (prong, bezel, half-bezel, cathedral, basket, trellis), prong count and prong tip style (round, claw, tab, double), prong diameter at tip and base, seat depth, head height above finger, gallery style (open/closed, rail, bridge), hidden halo yes/no.
- Center stone: shape, mm dimensions (L × W × D), estimated carat, type (natural/lab diamond, moissanite, sapphire…), color/clarity if known, orientation (N–S/E–W), customer-supplied or jeweler-sourced.
- Accent stones: count, size, shape, setting type (pavé, channel, bead, shared prong, halo), spacing.
- Halo: single/double, gap to center, stone size.
- Overall: total height from band bottom to stone top, setting width, estimated metal weight (g) and volume (mm³) per alloy from geometry × density.
- Tolerances and DFM notes: min wall thickness, min prong tip, any hollowed areas.
- Attachments: four-view PNG/SVG at scale, rendered hero images, STL (watertight, mm), 3DM, STEP, glTF, JSON of all parameters.

**Manufacturing constraints to enforce in geometry** (so the STL casts): min wall ≥0.8 mm (some resins tolerate 0.5–0.8; bands ≥1 mm recommended), prong tip ≥0.5–0.7 mm, rods/prongs ≥0.8 mm for print survival, single watertight body, no non-manifold edges. https://github.com/JuanGaljoen/castable ; https://www.materialise.com/en/academy/industrial/design-am/gold ; https://misterjewel.com/3d-jewelry-design-technical-tips-for-superior-quality-in-manufacturing-and-casting/

**File formats jewelers accept:** STL and 3DM are the universal pair (MatrixGold exports STL/3DM/OBJ; casting houses list STL, 3DM, OBJ, STEP/STP, IGES among accepted). STEP matters only when the jeweler will re-edit in a B-rep CAD; STL is what goes to the resin printer. https://gemvision.com/matrixgold ; https://www.3dprintmap.com/blog/3d-printing-for-jewelry-designers

**Pipeline on the jeweler side:** CAD → castable-resin/wax print (UV-cured, layer by layer) → invest & cast → set accent stones → set center stone → polish → QA (stone security, prong alignment, symmetry). https://taylorandhart.com/us/blog/the-3d-journey-of-an-engagement-ring ; https://rings.com/blogs/engagement-ring-education/how-custom-rings-are-made

### 5.2 How "connect to jeweler" marketplaces work today

| Model | Flow | Money | Timeline | Source |
|---|---|---|---|---|
| **CustomMade** (marketplace of independent artisans) | Free consult → sketches → stone sourcing → deposit → 3D renders and revisions "as long as it takes" → build. | Deposit before 3D models, credited to final price; rings from ~$1,200. Lifetime workmanship warranty, accent-stone-loss warranty. | 2–4 weeks manufacturing after approval; 1–3 days domestic ship. | https://www.custommade.com/how-it-works/ |
| **Etsy custom jewelers** | Buyer purchases a "custom design deposit" listing → jeweler emails within ~24 h → design/quote → balance listing before CAD/production. | Deposit 100 % applied to balance; custom orders non-returnable. | Varies by shop. | https://www.etsy.com/listing/793880458/custom-jewelry-design-deposit-design ; https://www.etsy.com/listing/1238609063/custom-engagement-ring-deposit |
| **Taylor & Hart** (DTC bespoke) | Consultant → sketch → stone → CAD in 2–4 days, 3 free amendments → build. | Checkout after CAD approval. | 4–5 weeks build; 12–24 working days end-to-end. | https://taylorandhart.com/us/ring-guidance-3/the-custom-process |
| **Frank Darling** | Free unlimited sketches → try-at-home → pay or deposit → CAD (~1 week) → production (~3 weeks). | Deposit or full payment at sign-off. | ~4 weeks after sign-off. | https://frankdarling.com/blog/you-want-a-custom-engagement-ring-now-what/ |
| **Ada Diamonds** | Concierge estimate → 20 % non-refundable deposit → CAD (thick metal/long prongs shown deliberately) → build. | $4k minimum for engagement rings. | Design ≤7 days typical. | https://www.adadiamonds.com/payment-terms ; https://www.adadiamonds.com/diamond-concierge-process |
| **Blue Nile** custom | $500 non-refundable CAD deposit, $10k minimum. | — | — | https://www.ritani.com/pages/ritani-vs-blue-nile |
| **Independent bench jewelers (typical)** | 50 % deposit to start, CAD within ~7 business days, 2–3 revision rounds, balance before pickup. | 50/50 split is the norm. | CAD+approval 2–4 weeks, manufacturing 2–4 weeks; 4–8 weeks total; some do 12–15 business days. | https://awjewelry.com/custom-engagement-ring-deposit-when-to-pay-why/ ; https://robinwoolard.com/blogs/news/how-long-does-a-custom-engagement-ring-take ; https://vanhessjewellery.com/blogs/news/custom-engagement-rings-process-sketch-to-finger |

**Implication for Halo:** the spec + files replace the first 1–2 weeks (sketch/CAD/revision) and the deposit-to-see-CAD gate. A plausible marketplace flow: customer builds → spec packet → RFQ to N vetted jewelers → quotes within 48 h → customer picks → 50 % deposit escrow → jeweler prints/casts from the supplied STL or re-models from the 3DM → balance on QA photos → ship. Platform takes a fee on the quote; jewelers keep their own CAD tools.

---

## 6. Naming

Current working name **"Project Halo."** Issue: "halo" is a generic ring-style term (halo setting), the term is heavily used in retailers' category pages, there are jewelry trademarks containing HALO (e.g., "H HALO PIERCING AND JEWELRY", reg. 4075630; a bare "HALO" jewelry filing by OKO International was abandoned in 2014), and halo.com is taken. It will be hard to own in search. https://trademarks.justia.com/776/69/h-halo-piercing-and-jewelry-77669502.html ; https://www.trademarkia.com/halo-86144906

### 25 name ideas

**Evocative:** 1. Halo (keep) · 2. Lumen · 3. Kindled · 4. Ember · 5. Prism · 6. Orbit · 7. Tessera · 8. Loupe · 9. Facet · 10. Aurelle

**Playful:** 11. Ringsmith · 12. Ringwright · 13. Prongly · 14. Yesmith · 15. Vowcraft · 16. Bandwidth (joke, unusable) · 17. Gemsmith · 18. Mint & Prong

**Descriptive:** 19. Ringforge · 20. Ringspec · 21. Ringlab · 22. Ringcraft · 23. Setting Studio · 24. Carat Studio · 25. Solitaire Studio · (bonus) Facetly, Ringmaker, Ring Atelier

### Conflict + domain check on the top 10 (web search + RDAP/DNS only; nothing purchased)

| Name | Obvious conflicts found | .com | Other TLDs | Verdict |
|---|---|---|---|---|
| **Halo** | Generic ring-style term; multiple HALO jewelry marks; "Ring Halo" mark owned by Ring Inc. (smart home). | halo.com taken (RDAP registered, live site). | halo.rings no DNS (RDAP not checked). | Weak: unownable in jewelry search. |
| **Ringsmith** | "The Ringsmiths" jewellery workshops (UK, Facebook). Etsy "ring smith" listings. No registered brand found. | ringsmith.com registered (live). | ringsmith.io no DNS, registry RDAP rate-limited (likely free); ringsmith.co resolves (taken). | Good; verify .io. https://www.facebook.com/theringsmiths/ |
| **Ringforge** | "Forge" wedding-band brand carried by many US retailers; Forge Jewelry Works (UT, "live custom 3-D jewelry design"); Stone Forge Studios. | ringforge.com registered (live). | ringforge.io: registry RDAP 404 (appears available); ringforge.co no DNS. | Usable but crowded around "Forge." https://www.forgejewelryworks.com/ |
| **Facet** | Crowded: Facet Diamonds app, "Ring Facet" Shopify ring builder, Facet Barcelona (manufacturer), Facets Inc., Facet Jewelry & Pawn. | facet.com registered. | facet.studio registered. | Avoid as a standalone; "Facetly" (.com registered but no DNS) is a maybe. https://appnavigator.io/app/ring-facet/ |
| **Loupe** | Loupe (jewelry supply-chain AI platform, London), Loupe repair software, TheLoupe appraisal software, The Loupe boutique. | loupe.com registered (no HTTPS response). | — | Avoid: three jewelry-software companies already use it. https://loupe.work/ ; https://useloupe.app/jewelry-repair-software |
| **Bezel** | Bezel = major luxury-watch marketplace (LA, Inc. 5000 #58). | bezel.com registered. | — | Avoid. https://www.getbezel.com/app |
| **Ringlab** | Ring Lab (ringlabcustoms.com, custom rings); Ring Design Lab (ringdesignlab.com). | ringlab.com registered (Cloudflare 525). | ringlab.io registered. | Avoid: direct competitor name. https://www.ringlabcustoms.com/ |
| **Ringwright** | RingWright Co. sells titanium bands on Walmart/eBay; also a student game "Ringwright." | ringwright.com registered (live). | ringwright.io no DNS (likely free). | Moderate conflict in the same category. https://www.walmart.com/seller/262 |
| **Prong** | Only conflict is a defunct phone-case company (Prong, 2011–2017). Generic jewelry term. | prong.com registered (403). | prong.io resolves (taken). | Word is free in jewelry but domains are gone; "Prongly" is open-looking (not checked). https://en.wikipedia.org/wiki/Prong_(company) |
| **Vowcraft** | No "Vowcraft" found; adjacent "Vow Jewellery" (bespoke engagement rings, vowjewellery.com) and "Vow Jewelry". | vowcraft.com registered (live). | vowcraft.co resolves (taken). | Name is clean, domains are not. https://vowjewellery.com/ |

Other quick domain facts: ringspec.com and facetly.com are registered but have no DNS (possibly parked/for sale); ringcraft.com, ringmaker.com, gemline.com, solitairestudio.com, carat.studio all resolve to live sites. Registry RDAP for .co was unreachable from this sandbox, so .co status is DNS-only.

**Recommendation:** shortlist **Ringsmith** (.io / .app / .co variants), **Ringforge** (.io appears free), and a coined word (e.g., **Aurelle**, **Prongly**) that can own search and trademark cleanly; drop Halo, Loupe, Bezel, Ringlab, Facet. Run a USPTO TESS/TSDR search and a proper WHOIS before committing.

---

## Appendix — source index (primary)

- Configurators: https://www.rubykinglet.ai/insights/best-jewelry-configurators-2026 · https://www.threekit.com/engagement-ring-configurator · https://docs.ijewel3d.com/ring-configurator/introduction.html · https://nationaljeweler.com/articles/14047-gemist-raises-6m-in-funding-to-scale-jewelry-tech-platform · https://yespress.io/jewlr
- 3D/CAD-in-browser: https://polydera.com/algorithms/browser-mesh-boolean-libraries-2026 · https://github.com/pixiteapps/partforge · https://github.com/JuanGaljoen/castable · https://brepjs.dev/compare/brepjs-vs-replicad · https://github.com/mcneel/rhino3dm/blob/main/docs/javascript/RHINO3DM.JS.md · https://threejs.org/docs/pages/USDZExporter.html
- Gems: https://github.com/piellardj/diamond-webgl · http://drei.docs.pmnd.rs/shaders/mesh-refraction-material · https://gkjohnson.github.io/three-mesh-bvh/example/bundle/diamond.html · https://discourse.threejs.org/t/gems-rendering-service/76484 · https://facetdiagrams.org/about-facetdiagrams-org/ · https://github.com/mrdoob/three.js/releases/tag/r164 · https://threejs.org/examples/webgl_loader_gltf_dispersion.html · https://www.gia.edu/doc/modeling-the-appearance-of-the-round-brilliant-cut-diamond.pdf
- Proportions: https://en.wikipedia.org/wiki/Brilliant_(gemstone_cut) · https://beyond4cs.com/shapes/round/ideal-proportions/ · https://www.diamondscreener.com/education/recommended-depth-table-and-length-width-ratio-for-fancy-shape-diamonds/ · https://blog.worthy.com/knowledge-center/diamonds/cut-grade-diamond-shape/ · https://www.brilliance.com/education/ideal-diamond-crown-angle-pavilion · https://www.estatediamondjewelry.com/many-facets-diamonds/
- Metals: https://api.physicallybased.info/v2/materials · https://seblagarde.wordpress.com/2011/08/17/feeding-a-physical-based-lighting-mode/ · https://en.wikipedia.org/wiki/Colored_gold
- Handoff: https://tashvi.ai/blog/learn-read-jewelry-technical-drawing · https://www.custommade.com/how-it-works/ · https://taylorandhart.com/us/ring-guidance-3/the-custom-process · https://www.adadiamonds.com/payment-terms · https://awjewelry.com/custom-engagement-ring-deposit-when-to-pay-why/ · https://www.materialise.com/en/academy/industrial/design-am/gold
