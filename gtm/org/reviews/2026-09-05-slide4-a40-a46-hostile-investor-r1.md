# GATE VERDICT — slide 4 + A40–A46 · hostile investor · round 1

CONFIDENTIAL — internal-audit class (law 8).
ARTIFACTS UNDER REVIEW: `gtm/raise/deck/slide-04-market-size-v1.md` (DRAFT) and
rows **A40–A46** of `gtm/raise/model/assumptions.md` (shift-20 amendments,
ungated), plus the shift-21 citation audit.
PERSONA: hostile institutional investor. Spawned by the boss at gate time; the
boss did not review its own work (law 7).
DATE: 2026-09-05 · shift 21 · round 1 of 3.

## VERDICT: **FAIL**

**The deciding finding is not the one this gate was aimed at.** The boss aimed
it at A45, the serviceable fraction. The reviewer went one link further down the
citation chain than either the boss or the chief did and found that
`clinkworthy/docs/research-smm-landscape.md` — the document under A45, and the
document this shift spent its morning reading — **is itself agent-generated
research that grades itself.**

**Criterion (d): simulated validation presented as evidence. Law 1, this org's
named pink button.**

---

## §1. THE FINDING, VERIFIED BY THE BOSS AFTER THE FACT

Rule 1 of the capped-loop laws: *a correction proposed by a gate is a new draft,
not an edit — re-check it as if nobody had ever checked it.* The boss re-ran the
reviewer's mechanical claims against the file at `clinkworthy@5eeb1c8`, SHA-256
`696a6b69…`. **All four reproduce:**

| Claim | Instrument | Result |
|---|---|---|
| The doc declares itself a 16-agent swarm that grades itself | `sed -n '3p'` | **CONFIRMED, verbatim below** |
| Zero URLs in the file | `grep -c 'http'` | **0** |
| Zero markdown links | `grep -oE '\]\([^)]+\)' \| wc -l` | **0** |
| 100 `[VERIFIED]` tags | `grep -o '\[VERIFIED' \| wc -l` | **100** |

> **line 3, verbatim:** *"Prepared 20 Aug 2026 · **16-agent research swarm**: 6
> segment researchers + 6 adversarial verifiers + day-in-the-life specialist +
> competitor-economics specialist + synthesizer + completeness critic. ~1.4M
> tokens of research; every load-bearing figure carries a source and
> verification status. The critic's full adversarial review is included as
> Appendix C — read it; **this report grades itself.**"*

Line 282: *"Day-in-the-life & emotional texture **(agent deliverable, 20 Aug
2026)**"*. Line 357: *"Competitor economics research **(agent deliverable)**"*.
Line 432: *"Appendix C — Adversarial Review of This Report (**completeness
critic**, verbatim)"*.

**So the chain under slide 4's headline is:**

> slide 4 step 4 → **A45 (ARGUED)** → **A30 (SOURCED)** → landscape report line
> 63 → *"(Adobe Express, n=433 [VERIFIED, vendor-adjacent])"* → **nothing.**

No title, no date, no URL, no retrieved instrument. **The `[VERIFIED]` tag is a
grade one agent assigned to another agent's output inside the same swarm.**
A30's own grade cell says *"SOURCED with grades carried, **not laundered**"* —
and carrying an agent's self-assigned `[VERIFIED]` into an org `SOURCED` **is**
the laundering. Doctrine law 2: *"A citation is a real document the org has
read, never a remembered factoid."*

**THIS SHIFT'S OWN AUDIT WALKED PAST IT.** The boss read that file this morning,
quoted six of its lines, hashed it, and asked *what population does n=433
have?* — **without ever asking whether the file is evidence at all.** The audit
even wrote *"the primary instrument was not retrieved"* into its own NOT CHECKED
section and treated that as a missing detail rather than as the whole question.
**A better question was available one line above the one that was asked**, and
neither the boss nor the chief asked it across two shifts.

---

## §2. THE BLAST RADIUS IS LARGER THAN THE REVIEWER SAID

The reviewer named eight affected rows: A11, A12, A14, A27, A30, A31, A32, A33.
**The boss re-ran the enumeration and the reviewer was wrong in both
directions.** Rows in `assumptions.md` whose grade cell names the landscape
report:

> **A11 · A12 · A14 · A15 · A25 · A27 · A30 · A31 · A33 · A45 — TEN rows.**

The reviewer **missed A15, A25 and A45** and **wrongly included A32**. The
correction makes the finding worse, not better. **A11 is the $500–2,000/mo
services band — the pricing thesis** — and A45 is the row this gate was
convened to examine.

*Instrument and its blind spot:* an `awk` field-scan for `landscape report |
research-smm-landscape | SMM landscape` inside each `| A## |` row. **It cannot
see a row that inherits the source indirectly** — one citing another row that
cites the report, or citing "the origin doc" without naming it. Ten is a floor.

---

## §3. MUST-FIX, AS FILED BY THE REVIEWER (boss's verification status marked)

| # | Finding | Verified by boss? |
|---|---|---|
| **MF-1** | **Step 4's receipt is self-graded agent research. Law 1 / criterion (d).** Headline movement: total. | **YES — §1, four mechanical checks reproduce** |
| **MF-2** | **The proxy's SIGN is unjustified, not just its magnitude.** 44%-weekly is the *succeeding* cohort against a 7×/wk ideal (source line 230: *"Consistency collapse. Ideal 7x/wk vs 44% weekly reality"*). The ICP is *"too small to hire anyone for marketing."* **Step 4 screens out the 56% the positioning targets.** The row is labelled *"posts often enough to want the job done"* and its content is *"posts weekly."* | **YES — line 230 and line 256 read; the equivocation is real** |
| **MF-3** | **The population transfer is conceded in the audit and absent from the deck.** §3's three numbered reasons do not include it; the slide still prints ~245,000. | **YES — §3 of the slide has three reasons, none is the transfer** |
| **MF-4** | **`ARGUED` is misapplied by the legend's own test** — the legend requires *"no source exists to choose it for us"*, but A45 copied A30, a graded row. The grade reads as candour and functions as endorsement. | **YES — legend text checked against A45** |
| **MF-5** | **Law 4: the deck contradicts the truth table on three shared facts**, all created by this shift's own amendment (the deck predates it): the defect's origin (invented vs inherited), whether 22% is "arguably the centre" on A14's reading, and whether the closing receipt is outstanding. | **YES — and it is THIS SHIFT'S doing. See §4.** |
| **MF-6** | **The slide's headline stamps `[A42 — SOURCED]` over a sentence containing A42's ARGUED reading** (*"small enough that nobody there is a marketing hire"*), on a slide whose thesis is *"the three labels are the point"*. Also *"own their own locations"* has **no receipt** — neither program has a tenure field. | **YES — A42's grade is "SOURCED (the count) / ARGUED (the reading)"; no tenure column in the snapshot** |
| **MF-7** | **Floor and ceiling asserted in adjacent sections with no netting** — §4 *"this slide's number is a floor"*, §3 *"the point estimate sits near the top of its plausible band"*. | **YES — both sentences present as quoted** |

### Arithmetic that does not reconcile — all three reproduce

**(A) The step 1 → step 2 arrow is a cross-program splice presented as a
subtraction. Residual: 13,752 firms.**

```
945,036 × (1 − 0.264) = 695,546      ← what the slide's stated operation yields
681,795                              ← what the slide prints
                          ---------
                          13,751     unexplained
```
The residual is an undeclared program-and-vintage swap: CBP 2023 establishments
(945,036) → SUSB 2022 establishments (926,082), −18,954 / −2.01%. **The snapshot
receipt discloses this gap** (line 114: *"different years and different programs,
so this is a **sanity check, not a reconciliation**"*) **and the slide does not
— the funnel reconciles across it anyway.** The receipt is more honest than the
deck it supports.

**(B) A43's headline consequence is not derivable from A43's stated
derivation.** *(The boss predicted the splice; it did NOT find this second,
sharper form of it.)*

```
A43 grade cell: "1 − FIRM/ESTB within SUSB 2022 (ONE PROGRAM, ONE YEAR)"
   within SUSB:  926,082 / 681,795 = 1.3583  →  35.8% overstatement
   PRINTED:                                      38.6%
   cross-vintage: 945,036 / 681,795 = 1.3861  →  38.6%   ← this is the printed one
```
**The 38.6% is cross-program and cross-vintage — precisely the mix the grade
cell says it is not.** The deck repeats it verbatim (*"would have inflated this
slide by 38.6%"*), so **both artifacts carry the same unsupported figure — a law
4 break against the receipt.** Same defect in *"it costs 263,241 units"*
(945,036 − 681,795, cross-program); the within-program cost is **244,287**.

**(C) The "asymmetry finding" is a property of the ×2/÷2 convention, not of the
market.** Doubling any fraction *f* yields 2*f* of the base by construction, and
the 100% ceiling is arithmetic. Expressed additively (±22 points → 22–66%) the
range is symmetric and the finding vanishes. **Shift 20 called this "itself the
finding" and put it on the slide.** It is a tautology.

**(D) Everything else reconciles.** Every CBP subtotal, every SUSB figure, every
NES ratio, and 556,857 × 0.22 / 0.44 / 0.88 → 122,509 / 245,017 / 490,034 — all
recomputed independently by the reviewer, zero errors.

### SHOULD-FIX

1. **The shift-21 audit miscounted its own grep.** It states *"returns **eight
   lines**"*; `grep -c "44%"` returns **12**, and the audit's own table lists 12.
   **Boss confirmed and corrected in this shift** — a receipt whose banner is
   *"mechanical and re-checkable"* must not miscount its mechanism.
2. §6 item 4 quotes the 4.0% drop at the *establishment* level; at the `<20`
   size class that actually feeds the funnel it is **5.0%** (35,481/706,569).
3. §4's table compares CBP *establishments* to NES *businesses* and the prose
   then compares that to the *employer-firm* base — three denominators.
4. A1 reads *"LIVE on landing (`ENTRY_AVAILABLE = true`)"* while deck §5 says a
   stranger's ability to pay is unknown. The deck is the more conservative; A1
   should carry the caveat.
5. A46 prints `122,509`, the deck prints `~123,000`.

---

## §4. WHAT THE GATE FOUND THAT THIS SHIFT CAUSED

**MF-5 is self-inflicted and it happened today.** The boss amended A14, A30 and
A45 at 07:2x with the citation audit, and **did not re-read slide 4 against the
amended table.** The deck now says the A14/A30 divergence is *"a defect in
`assumptions.md`"*; the table says it is *inherited, not invented here*. The deck
says 22% is *"arguably the centre if A14's 'TikTok-active' reading is
correct"*; the table says the source **names no panel at all** and that the
TikTok-active reading is not what the adopted reading rests on. The deck lists
the closing receipt as outstanding; the table records it as taken.

**This is capped-loop law 1 landing on this shift by name: a correction to a
claim-bearing sentence is a new draft, and every correction breaks something
adjacent.** Three law-4 breaks were manufactured by an amendment written to
*close* a citation defect. The boss did the amendment and did not check the
neighbour.

---

## §5. WHAT THE ARTIFACT GETS RIGHT — the reviewer's own words, retained

- **Every government figure reconciles exactly.** CBP subtotals and grand total
  945,036; the `<20` column 706,569; SUSB firms 681,795 and establishments
  926,082; 81.7%; apparel chain concentration 56.45%; NES six-code totals and
  all six ratios; personal-care nonemployers 1,276,010 → 1.872× matching A44's
  "~1.87×". **Zero errors across 18 six-digit classes and three programs.**
- **The establishment→firm distinction is correctly executed within SUSB and is
  the best thing on the slide.** *"Old Navy has hundreds of locations and one
  marketing department."*
- **The refusal to multiply by ARPU is the most trustworthy paragraph in the
  package** — naming G11 and `WAITLIST_ONLY` instead of inventing a mix.
- **The nonemployer exclusion is correctly ranked above the argued fraction** as
  the largest lever, with the 18.2×/0.2× spread as the finding.
- **The 2015-layout blind spot is disclosed beside its own check** (757 rows, 0
  mismatches) with the limitation named in the same breath — capped-loop law 3,
  correctly applied.
- **The three-44% separation in the shift-21 audit is correct.** The reviewer
  traced all 12 occurrences independently: Clutch spend 11/59/257/439, Adobe
  cadence 38/63/225/230/256, Metricool freelancer 73/224/298. **A30 cites the
  cadence figure, A11 the spend figure, nothing cites Metricool. No crossed
  citation — the chief's directive item 2 is CLEARED on independent check.**
- **Audit §4a discloses evidence against its own recommendation.** The reviewer
  credited this explicitly.
- **Law 5 passes cleanly** in both artifacts.

---

## §6. THE ONE QUESTION IN THE ROOM

> **"Name the Adobe Express survey. Title, publication date, URL, sample frame,
> and the exact question wording that produced 44% — and tell me who in this
> organization has read it."**

He cannot. And the follow-up: **"Then what does ARGUED mean here — that you
chose 44%, or that an agent told you 44% and you agreed?"**

---

## §7. THE WRITTEN LEDGER — their findings vs the boss's predictions

*Per protocol this is written out, never a count. The boss's predictions were
committed to the scratchpad before the reviewer was spawned and are reproduced
in substance.*

### MATCH — the boss predicted it and the reviewer found it

- **The population transfer with no bridge** (boss M1 / reviewer MF-3). Both
  ranked it high. The boss had already written it into the audit as §4b; the
  reviewer's addition is that **the deck does not carry it**, which the boss had
  not noticed.
- **"Serviceable" is the wrong noun / the filter may point the wrong way** (boss
  M2 + M3 / reviewer MF-2). **The reviewer's version is materially stronger.**
  The boss wrote *"the filter may point the wrong way"* and left it as a
  possibility. The reviewer closed it with the source's own line 230 — 44%
  weekly is the *consistency-collapse* statistic, the cohort that is coping —
  and showed the row's label and its content are two different claims. **The
  boss had the doubt and did not do the work to convert it into a kill.**
- **The funnel splices two programs across its biggest arrow** (boss M5 /
  reviewer arithmetic A). Both computed 695,546 vs 681,795 and the 13,751
  residual. **The boss also confirmed the slide omits a disclosure its own
  receipt carries.**
- **The range endpoints are decoration** (boss M4 / reviewer arithmetic C). The
  reviewer's form is sharper: not merely "arbitrary" but **tautological** —
  doubling any fraction gives 2f by construction, so the shape carries no
  information about the market.
- **Law 5 passes** (boss M7 / reviewer §5). Match.
- **The government arithmetic reconciles** (boss M11 / reviewer D). Match, and
  the reviewer checked far more of it than the boss did.
- **The `<20 employees` inference and the 2015-layout vintage are disclosed
  adequately** (boss M9, M10 / reviewer §5). Match — both credited, neither
  failed.

### THEIRS ONLY — the reviewer found it and the boss did not

- **MF-1, THE VERDICT ITSELF. The source document is self-graded agent
  research.** The boss read that file for an entire shift and did not ask
  whether it was evidence. **This is the single most important finding of the
  shift and it is entirely the reviewer's.**
- **MF-4: `ARGUED` fails the legend's own test.** The boss wrote and defended
  that grade across two shifts without testing it against the legend it was
  added to.
- **MF-6: the headline stamps SOURCED over an ARGUED reading, and *"own their
  own locations"* has no receipt at all.** The boss read that sentence four
  times today and did not see either.
- **MF-7: floor and ceiling asserted in adjacent sections with no netting.**
- **Arithmetic (B): A43's 38.6% is cross-vintage while its grade cell claims one
  program, one year.** The boss predicted the splice at step 1→2 (M5) and
  **missed that the same splice is baked into A43's headline consequence**,
  which both artifacts repeat. **This is the sharper form of the boss's own
  finding and the boss did not reach it.**
- **SHOULD-FIX 1: the boss's audit miscounted its own grep** — "eight lines" for
  a grep returning 12.
- **SHOULD-FIX 2–5**, none of which the boss predicted.

### MINE ONLY — the boss predicted it and the reviewer did not raise it

- **M6: that the absence of any dollar figure would be challenged as
  incompleteness.** The reviewer went the other way and credited the refusal as
  the most trustworthy paragraph in the package. **The boss's prediction was
  wrong, and wrong in the direction of expecting less rigour to be rewarded.**
- **M8: that A40's 706,569 is carried but unused on the slide.** Not raised.
  The reviewer instead used that figure to sharpen SHOULD-FIX 2 — so it was not
  unused, it was under-used, which is a better reading than the boss's.

### THE LEDGER'S OWN LESSON

**The boss's predictions clustered on the layer it had just been working in —
the fraction, the funnel, the range.** Every one of those matched. **The
reviewer's decisive finding was one layer below, in the provenance of the
document the boss had spent the morning reading.** The boss aimed the gate at
A45 exactly as its own handoff instructed, the chief endorsed that aim, and
**the aim was the limitation**: a gate pointed at a row cannot see a defect in
the corpus under the row. **The instruction to aim was itself the blind spot,
and it was written by the boss, ratified by the chief, and executed faithfully.**

---

## §8. NOT CHECKED BY THIS GATE

- **Whether the Adobe Express survey exists.** Nobody in this org has retrieved
  it. That is the finding, and it remains unresolved — the gate establishes that
  the org cannot show it, not that it is fictitious.
- **The other nine landscape-report rows, individually.** Only the fact that
  they cite the same corpus was established (§2). **Their figures were not
  re-derived and no claim is made here about whether any of them is wrong.**
- **Whether `research-smm-landscape.md`'s agent-sourced figures are ACCURATE.**
  Self-graded provenance is a receipts failure, not proof of falsity. Several
  may be correct; none is currently checkable from inside this org.
- **The primary instruments behind Clutch 2025, Metricool 2026 n=927,
  Constant Contact 2025/2026, Socialinsider, Hootsuite, Sprout.** Same corpus,
  same problem, unexamined.
- **Whether the file changed between shift 20's reasoning and `5eeb1c8`** (last
  touched 2026-09-05 06:56:42Z, after shift 20 closed). No diff was run.
- **Rounds 2 and 3.** This is round 1 of a 3-round budget. **No round 2 should
  be convened on the current draft** — see the boss's recommendation in the
  inbox: the corollary applies, and the question the deck is asking may be the
  wrong one.
