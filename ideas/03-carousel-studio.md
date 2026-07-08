# Idea #3 Deep Dive — Carousel & Repurposing Studio for X/LinkedIn

Paste long-form content → designed LinkedIn carousels, X thread variants, and short-form
video scripts. Prosumer pricing (~$12–19/mo). GTM: dogfooding/build-in-public + free-tool SEO.
Solo dev, ~2 week build.

---

## 1. MLP Feature Spec

### Positioning statement
"One idea, every format, without the Canva look." A repurposing studio whose outputs are
good enough to post *unedited* — the anti-template-graveyard.

### The strategic bet
Most tools in this category generate **one format from a prompt**. The MLP bet is
**many formats from one source** (blog post / newsletter / transcript / thread), because
that matches how serious creators actually work: they have a content asset and need to
atomize it. Design quality is the moat; you have the design/product skill to make outputs
that don't look AI-generated.

### Core user journey
1. **Paste** a URL, raw text, or transcript (YouTube URL → transcript fetch in v1 if cheap,
   else paste-only).
2. **Chunking pass**: LLM extracts the idea skeleton — hook candidates (5+), key points,
   the one counterintuitive claim, a CTA. User can edit the skeleton (this editability is
   what makes outputs feel "theirs").
3. **Generate per format**:
   - **LinkedIn carousel**: 6–10 slides from the skeleton, rendered into one of 6–8
     opinionated templates. Slide-level editing (text, reorder, delete). Export PDF
     (LinkedIn document post) + PNGs.
   - **X thread**: 2 variants (punchy/narrative), hook A/B options, character-count aware.
   - **Short-form video script**: hook (3 options) → beats → CTA, formatted as a
     teleprompter-ready script with b-roll suggestions per beat.
4. **Brand kit** (minimal): name, handle, headshot, 2 colors, font pick. Applied across
   all templates.
5. **Export & copy**. No scheduling, no posting APIs in MLP.

### Template design principles (the actual moat)
- 6–8 templates max, each genuinely distinct and *editorially* opinionated (a "listicle"
  layout, a "myth vs reality" layout, a "story arc" layout) — not 100 recolors.
- Typography-first, big type, generous whitespace; look like a designer's personal deck,
  not a SaaS template.
- Every template must pass the test: would a design-snob founder post this unedited?
- Render with HTML/CSS → PNG/PDF (satori or Playwright screenshot) — no canvas editor.
  Slide editing = editing text fields that re-render. This is the #1 scope trap avoided:
  **do not build a design editor.**

### Build scope (2 weeks)
| Week | Ship |
|---|---|
| 1 | Ingest + skeleton extraction, carousel pipeline with 4 templates, PDF/PNG export, brand kit, Stripe subscription |
| 2 | Thread + video-script generators, 4 more templates, free tier w/ watermark, landing page + "free LinkedIn carousel maker" SEO page, PostHog |

### Explicitly cut from MLP
Scheduling/auto-posting (API access pain, and Taplio owns it), analytics, team seats,
Instagram/TikTok carousel sizes (add fast-follow — it's just aspect ratio), AI images,
Chrome extension, comment-writing/engagement features (different product).

### Pricing
- **Free**: 3 exports/mo, watermarked, 4 templates.
- **Creator $15/mo** (or $120/yr): unlimited exports, all templates, all formats, brand kit.
- **Later** (not MLP): $29 tier w/ scheduling or extra brand kits once demanded.
- Watermark on free tier = distribution ("Made with X" + link), same loop as Beacons/Linktree.

### Success metrics (kill/continue at day 45)
- Your own LinkedIn/X posts made with the tool: is *your* engagement visibly better? (If you
  can't demo the value on yourself, nobody buys.)
- 300 free signups, free → paid ≥ 4%
- Weekly retention of paid users ≥ 60% at week 4 (repurposing is a weekly job — if they
  don't come back weekly, the wedge is wrong)
- ≥ 25 paying subscribers (~$375 MRR) by day 45

---

## 2. Competitor Teardown

*(researched July 2026)*

<!-- TEARDOWN -->

---

## 3. Week-by-Week Launch Plan

The unique property of this idea: **your daily marketing activity and your product usage are
the same action.** The launch plan is structured around that.

### Week 0 — Start the audience engine before the product
- Commit to daily LinkedIn + X posting *now*, manually, about a focused theme (e.g., "what
  I'm learning building a design-quality AI tool solo"). You need the baseline engagement
  data to prove the tool improves it later.
- Design the first 4 carousel templates as static mockups; post them as content ("I
  redesigned the LinkedIn carousel — here's why yours look like everyone else's").
  This validates the design-quality wedge before any code and gathers a waitlist.

### Weeks 1–2 — Build (per spec above), in public
- Every feature shipped = a carousel about it, *made with the tool as soon as it can render*.
  Dogfood from day 3.
- Devlog thread on X pinned; each day quote-tweets progress.
- DM 15 mid-sized LinkedIn creators (5k–50k followers) from your replies/engagement — offer
  free lifetime Creator tier for feedback. These become launch amplifiers. (This is the
  cold-start cheat: their carousels made with your tool are seen by their audiences.)

### Week 3 — Beta + free tool SEO
- Open beta to waitlist. Watermark ON for free tier from day one.
- Ship the standalone free page: "Free LinkedIn Carousel Maker — no signup for first export"
  targeting the head SEO term; interlink templates gallery pages ("carousel templates for
  founders / recruiters / marketers") as programmatic-ish SEO surface.
- Post a "how I make carousels in 90 seconds" screen-capture — this is the money demo;
  also cut it for TikTok/Reels/Shorts.

### Week 4 — Launch
- Product Hunt (Tuesday) — this category historically performs well there; line up your 15
  beta creators to post their best carousel that day tagged with the tool.
- Launch offer: first 100 get $9/mo locked. Urgency without discounting forever.
- Publish the comparison content honestly: "X vs Taplio vs aiCarousels — which is for you"
  on your blog (ranks fast for buyer-intent terms; being fair earns trust).

### Weeks 5–8 — The grind loop (repeat weekly)
- Daily: 1 LinkedIn post + 1 X post *made with the tool*; 10 thoughtful comments on creator
  posts (comments on big accounts = discovery on LinkedIn).
- Weekly: 1 new template shipped, announced as content ("new template: the contrarian
  listicle") — templates are marketing events, effectively free.
- Weekly: 3 short-form screen-capture videos testing hooks.
- Watch retention cohort weekly; interview every churned paid user (there will be few enough
  to literally talk to all of them).
- Affiliate program (30% recurring) for the beta creators once ≥50 paid users.

### Weeks 9–12 — Compound or kill
- If retention holds: add scheduling OR Instagram sizes (whichever churned users cite most),
  raise price for new users to $19, push the free-tool SEO surface harder.
- If signups but weak paid conversion: the free tier is too generous or templates too few —
  tighten to 1 export/mo before concluding the market won't pay.
- If your own engagement didn't improve using the tool: that's the real signal — the
  product isn't differentiated; kill or pivot the wedge (e.g., niche down to one audience:
  "carousels for recruiters").
