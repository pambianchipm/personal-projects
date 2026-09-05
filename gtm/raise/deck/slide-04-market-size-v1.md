# SLIDE 4 — HOW BIG THE MARKET IS (bottom-up)

CONFIDENTIAL — Lane A raise artifact (law 8). **Internal-audit class:** it
grades this org's own evidence and names what it could not source, so it is
confidential regardless of directory and is never quoted externally.
STATUS: **GATE-FAILED (round 1), 2026-09-05.** Hostile investor. Verdict:
`gtm/org/reviews/2026-09-05-slide4-a40-a46-hostile-investor-r1.md`.
**THE GATE DID NOT FAIL ON THE FRACTION THIS SLIDE NOMINATES AS ITS WEAK POINT.**
It failed one link further down: **the document under A45 —
`clinkworthy/docs/research-smm-landscape.md` — declares itself on its own line 3
to be a 16-agent research swarm that "grades itself", and carries zero URLs and
100 self-assigned `[VERIFIED]` tags.** Step 4's multiplier is an agent's
assertion that a survey exists. **Law 1, criterion (d) — simulated validation
presented as evidence.** Seven MUST-FIX, five SHOULD-FIX, three arithmetic
non-reconciliations (including A43's 38.6%, which is cross-vintage while its own
grade cell claims one program and one year). **The government counts in steps
1-3 were recomputed independently and are exact — zero errors.**
**DO NOT CONVENE ROUND 2 ON THIS DRAFT.** The recommendation to the chief is
that the deck cannot resolve this; the corpus under it must be graded first.
ORIGINAL STATUS: DRAFT, ungated. Not self-passed (law 7). The persona that applies
is **hostile investor**, and the right first question is **not** "is the count
right" — the counts are hashed and re-checkable. It is **"does the fraction in
step 4 do all the work?"** — because it does.
OWNER: GTM boss · shift 20, 2026-09-04
MANDATE: gap G2 (`gap-list-2026-09-04.md`), the largest hole this org can fill
by itself. Skeleton inputs (i)-(iv); **(iii) ARPU is blocked — see §5.**
RECEIPT: `gtm/raise/model/snapshots/2026-09-04-census-establishment-counts.md`
— every figure below, with fetch times, byte counts and SHA-256 hashes.
NUMBERS RULE (law 4): figures quote `assumptions.md` rows **A40-A46**.

**First breath:** Player 2 is an AI marketing employee for small businesses.
**This slide answers one question — how many businesses could hire it — and
deliberately stops before the second one.**

---

## §1. THE SLIDE

> ### The market, counted from the bottom
>
> **556,857 US firms** run a local, visual business, own their own locations,
> and are small enough that nobody there is a marketing hire.
> *US Census SUSB 2022, employer firms under 20 employees, in the NAICS
> classes this positioning names.* **[A42 — SOURCED]**
>
> Of those, we argue **~245,000** post to social often enough to want the job
> done for them. **That fraction is ARGUED, not measured.**
> *If it is half what we argue: ~123,000. If it is double: ~490,000 — which is
> 88% of every small firm in the segment, so the upside is capped by the count
> itself and the downside is not.* **[A45, A46 — ARGUED]**
>
> **We have not multiplied this by a price.** Both prices are sourced; the
> **mix is not ruled**, and the tier that carries the higher one is waitlisted,
> not purchasable. A revenue number here would be the first invented figure in
> the deck. **[§5]**
>
> **What this count deliberately excludes: every business with no employees.**
> In personal care that is 8.6-18.2× the employer count. **[A44]**

**THE THREE LABELS ON THE SLIDE ARE THE POINT.** SOURCED, ARGUED, and the
missing multiplication. A reader who takes nothing else should take that the
org knows which of its own numbers is which.

---

## §2. THE FUNNEL, EVERY STEP GRADED

| # | Step | Figure | Grade | Where it comes from |
|---|---|---:|---|---|
| 1 | US **employer establishments** in the named NAICS classes | **945,036** | **SOURCED** | CBP 2023, `lfo='-'`, 18 six-digit classes [A40] |
| 2 | → US **employer firms** (one firm = one buying decision) | **681,795** | **SOURCED** | SUSB 2022. Removes 26.4% of locations that belong to multi-location firms [A41, A43] |
| 3 | → firms with **under 20 employees** | **556,857** | **SOURCED count / ARGUED reading** | SUSB 2022 `ENTRSIZE=33`. The *count* is published. That "<20 employees" means "no marketing hire" is **our inference** [A42] |
| 4 | → × **fraction that actively posts** | **× 44%** | **ARGUED** | A30's *"44% post weekly"* — Adobe Express n=433, **vendor-adjacent, its own row says treat as a ceiling** [A45] |
| 5 | = **serviceable market, in units** | **~245,000 firms** | **DERIVED, inheriting ARGUED** | 556,857 × 0.44 [A46] |
| 6 | × ARPU | **NOT COMPUTED** | **BLOCKED** | No tier mix is ruled (G11). See §5 |
| 7 | Top-down analyst TAM, as colour | **NOT FETCHED** | — | Law 2 admits it *after* the bottom-up gates. Deliberately absent |

**Step 1 → step 2 is the step most bottom-up models skip, and it costs 263,241
units.** Counting locations instead of owners would have inflated this slide by
38.6% — and in apparel, where **56.5% of locations belong to multi-location
firms**, it would have inflated it by more than double. Old Navy has hundreds of
locations and one marketing department.

---

## §3. THE SERVICEABLE FRACTION — THE ARGUMENT, IN FULL, BECAUSE IT IS THE WEAK POINT

**This is where a bottom-up model quietly becomes a top-down one.** Steps 1-3
are arithmetic over published government tables. **Step 4 is a judgement**, and
if it is wrong the slide is wrong by exactly that factor.

**What we argue:** that the fraction of these firms posting to social often
enough to want the work done is around **44%**.

**On what basis:** A30 carries *"44% post weekly, 18% daily"* from the SMM
landscape report, sourced to an Adobe Express survey, n=433.

**Why we do not trust it, stated here rather than in a footnote:**

1. **It is vendor-adjacent and A30's own grade cell says treat it as a
   ceiling.** Adobe sells creative software to people who post.
2. **We cannot establish its population from our own table, and the table
   contradicts itself about it.** A14 describes the *same* n=433 survey as
   measuring **"TikTok-active owners."** A30 describes it as **"owners."**
   Those are different denominators. If the survey sampled owners who are
   already social-active, then 44% is not "44% of small firms post weekly" —
   it is "44% of already-posting owners post weekly", which would make it
   **badly overstated as a filter on the whole base.** *This is a defect in
   `assumptions.md`, found by trying to use the row, and it is filed as such.*
3. **It measures posting cadence, not want.** A firm that posts weekly may be
   content. A firm that posts never may be the better customer. **We are using
   a behaviour as a proxy for a need, and we have zero interviews** (G1) to
   tell us whether that proxy holds. Law 6: we are not our customer.

**Therefore the honest form of step 4 is a range, and it is asymmetric:**

| If the fraction is | Serviceable units | Comment |
|---|---:|---|
| 22% (half our argument) | **~123,000** | **Plausible, and arguably the centre** if A14's "TikTok-active" reading of the survey population is the correct one |
| **44% (our argument)** | **~245,000** | Rests on a vendor survey its own row calls a ceiling |
| 88% (double) | **~490,000** | **Near-impossible** — 88% of every firm under 20 employees in five industries |

**THE SHAPE OF THE UNCERTAINTY IS ITSELF A FINDING.** Doubling the fraction
runs into the count; halving it does not. **A range that is not symmetric
around its point estimate is telling you the point estimate sits near the top
of its plausible band**, and this one does. If a reader wants one number,
**~123,000-245,000 firms** is the defensible statement and the point estimate
is the optimistic end of it.

---

## §4. THE EXCLUSION THAT MOVES THE ANSWER MORE THAN THE FRACTION DOES

CBP and SUSB count **employer** businesses. A salon chair rented by a
self-employed stylist is a **nonemployer** and appears in neither.

| NAICS | Employer estab (CBP 2023) | Nonemployers (NES 2023) | Ratio |
|---|---:|---:|---:|
| Barber Shops | 7,789 | 141,769 | **18.2×** |
| Beauty Salons | 84,176 | 838,264 | **10.0×** |
| Nail Salons | 34,417 | 295,977 | **8.6×** |
| Full-Service Restaurants | 258,626 | 61,909 | 0.2× |
| Limited-Service Restaurants | 270,088 | 52,005 | 0.2× |
| Snack / Nonalcoholic Beverage Bars | 85,140 | 19,974 | 0.2× |

**Personal-care nonemployers alone number 1,276,010 — nearly double the entire
employer-firm base this slide is built on.** So the single largest lever on
market size is not the argued fraction at all. **It is a definition: does a
booth-renting stylist with an Instagram count as a shop?**

**We have not answered it, and this slide does not.** The case for including
them is that they are *precisely* the founding ICP — *"too small to hire anyone
for marketing."* The case against is that a one-person operation has the least
money and the ratio is so segment-lopsided (18× in barbering, 0.2× in food)
that including them would silently re-weight the whole market toward personal
care.

**This is a Phin ruling, and it is a bigger one than the tier mix.** Until it
is made, **this slide's number is a floor** and should be said aloud as one.

---

## §5. WHY THERE IS NO DOLLAR FIGURE ON THIS SLIDE

Skeleton input (iii) is *"ARPU from A1/A2 with a stated tier mix."*

- Both prices are **SOURCED** in `assumptions.md` (A1, A2) and neither is
  restated here — law 4, and the price SSOT is `pricing.ts`.
- **No tier mix is RULED anywhere.** (G11.)
- The tier carrying the higher price is settled **WAITLISTED, NOT PRICED**, so
  the mix has a term nobody can currently buy.
- And whether a stranger with a card can complete a purchase at the entry price
  **is still unknown to this org** — `WAITLIST_ONLY` in production is on its
  fifth shift as an open question. *"The price renders"* and *"a stranger can
  pay it"* are different claims, and a revenue slide makes the second.

**So: `SAM_revenue = A46 × ARPU`, and ARPU does not exist.** Writing one would
be the first invented number in the deck, on the slide investors discount
hardest. **The multiplication is one Phin ruling away and it is named as such
rather than filled in.**

---

## §6. WHAT A READER SHOULD DISTRUST, RANKED

1. **Step 4's 44%** — a vendor survey whose population our own table describes
   two different ways. Ranked first because the slide's headline moves 2× on it.
2. **"<20 employees" as a proxy for "no marketing hire"** — an unverified
   inference. A 15-person restaurant group may well have a marketing person; a
   3-person boutique certainly does not.
3. **The segment list itself.** These 18 NAICS classes were chosen to match
   `positioning.md` §6's named verticals. **Nobody has tested that this is the
   right list** — it is a positioning choice inherited, not a researched one,
   and `positioning.md` grades its own ICP resonance `UNTESTED`.
4. **Jewelry and shoe stores (38,074 establishments) are in the count** because
   they are inside the apparel/accessories classes the positioning implies. A
   hostile reader can fairly ask whether a jeweller is a "visual local shop" in
   the sense we mean. **Removing 448210 + 448310 entirely drops step 1 by 4.0%.**
5. **US only.** Neither program is international. No global figure is offered.
6. **The field-name read is cross-vintage.** The Bureau publishes no 2023
   plain-text CBP layout; definitions come from its **2015** layout and were
   checked arithmetically against the 2023 file (757 rows, 0 mismatches).
   **That check proves the fields partition the total; it cannot prove the
   class boundaries are the employee counts the 2015 layout names.**

---

## §7. WHAT THIS SHIFT COULD NOT SOURCE

- **Any social-presence figure.** Neither Census program asks whether a
  business has a social account. **There is no government source for step 4**,
  which is why step 4 is argued.
- **The population of the n=433 survey** — needs the SMM landscape report read
  directly (`clinkworthy/docs/research-smm-landscape.md`). **Closing receipt
  for A45 and the highest-value follow-up on this slide.**
- **SUSB 2023 and CBP 2024** — not published as of 2026-09-04.
- **A nonemployer parallel model.** NES 2023 uses **2022** NAICS (clothing is
  `458*`, not `448*`) and publishes most segments only at 3-4 digits, so only
  six codes match exactly.
- **Any top-down analyst TAM** — deliberately not fetched (law 2).
- **Willingness to pay, at any price, by anyone.** Zero customers, zero
  interviews (G1). **Nothing on this slide is demand evidence.** It is a count
  of businesses that exist.
