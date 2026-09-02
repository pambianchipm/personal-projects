# Chief's confirmation verdict — Shift 10 (D-ruling executions), both gates

CONFIDENTIAL — internal-audit class (law 8).

VERIFIER: chief-of-staff confirmation verifier (independent of both shift-10 reviewer agents).
BRANCH / HEAD: `claude/b2c-mlp-ideas-gtm-76bs8z` @ `c2ea9285e20b19b9bdb9d1fd862c8fdd7d86a65e` (pulled 2026-09-02; 5 commits fast-forwarded, 72e8f04..c2ea928).
MODE: read-only; recomputation by script (`recompute.py`, same directory); no repo edits.

FILES READ (all under `/home/user/personal-projects/`):
- `gtm/org/inbox.md` (notice + chief's rulings entry), `gtm/org/ops-log.md` (shift-10 entry), `gtm/org/lock.md`
- `gtm/org/reviews/2026-09-02-shift10-both-gates.md` (the verdict under review)
- `gtm/raise/model/anthropic-bound.md`, `gtm/raise/model/assumptions.md` (A1–A21), `gtm/raise/model/model-v1.md` (full), `gtm/raise/model/snapshots/` (listing)
- `gtm/raise/deck/skeleton.md` (header, slides 8–9, prior stub, coverage ledger)
- `gtm/raise/outbox/founding-terms-letter.md`, `gtm/market/concepts/recruit-and-run.md`, `gtm/market/concepts/interview-kit.md` (§0, §2 rotation, §3 feature table/batches, §4–5), `gtm/market/concepts/concept-cards.md` (header, section list)
- `gtm/raise/risk-register.md` (R5, R10, R12, R13), `gtm/market/objection-bank.md` (O3/O4/O7/O10, P-F), `gtm/raise/accelerators.md` (terms lines), `gtm/doctrine/gtm-doctrine.md` (laws 1–9)
- `git diff a9efb42..c2ea928` on: objection-bank, risk-register, model-v1 (and `--stat` for all 12 files)
- The bundled Claude API pricing reference (the "Anthropic model/pricing reference" A20 cites) — re-read to reproduce the A20 cell.
- NOT AVAILABLE in this repo: `clinkworthy/` (agent.ts, pulse.ts, outbound.ts). Code caps are taken as the verifier's code-read; see NOTE n1.

---

## 1. Claim-by-claim

### Artifact 1 — `anthropic-bound.md` (A20/A21)

| Check | Result | Evidence |
|---|---|---|
| Every number traces to a row or an in-line derivation | TRUE | §1 inputs table grades each input; §2 shows per-cell arithmetic ("32 × 15K = 480K in ($2.40) + 48K out ($1.20) = $3.60"); A20/A21 rows exist in assumptions.md (l.48–49) |
| Light ≈$12 / naive-heavy ≈$38 per workspace/month | TRUE — reproduces | my recompute: $12.15 (20.6% of $59) / $38.35 (65.0%) — see ledger |
| Stacked with A9 → "$37–76 vs $59" | TRUE | $12.15+$25 = 37.2; $38.35+$38 = 76.4; heavy all-in > $59 ⇒ "plausibly underwater at heavy use" is the right verb for PROJECTED inputs |
| Full OS absorbs all-in at ~12–25%; reasoning alone ~4–13% | TRUE | 37.2/299 = 12.4%, 76.4/299 = 25.5%; 12.15/299 = 4.1%, 38.35/299 = 12.8% |
| List prices cited with a source line AND date | PARTIAL | Value $5/$25 per MTok reproduces against the bundled reference I re-read (its table is self-dated "cached: 2026-06-24"). But the source line names no document path/URL, and no snapshot (page text + hash) exists in `snapshots/` — only the xAI one. Grade SOURCED rests on a tool-bundled reference, which the org's own shift-9 doctrine says is not a snapshot. Disclosed twice (RE-VERIFY flag; ops-log "Web: none, Claude prices via the bundled reference, disclosed"). → MINOR m1 |
| Token counts labelled PROJECTED, "no metering exists" | TRUE | §1 row: "**PROJECTED — invented, no metering exists**; the entire bound inherits this grade"; §3 note 2; A21 grade column repeats it |
| Says plainly the closing receipt is Phin's Anthropic invoice ÷ workspaces | TRUE | §3 note 2 (bold) and A21 grade column |
| Names what own-media changes in THIS bound | PARTIAL | §3 note 3 says own-media flips A9 toward zero but "does NOT flip this bound — scripting/captioning still spend reasoning tokens" and the scenario "must price BOTH lines". It does not say the reasoning line may GROW (more transcription/edit-list/caption-style calls per clip) nor that transcription is a third, separately unpriced line (A5's exclusion). Qualitative, not quantified. → MINOR m5 |
| CONFIDENTIAL header | TRUE | line 3 |
| §4 "R5 sync shipped" | TRUE | risk-register diff: R5 mitigation now carries "Anthropic sub-exposure now BOUNDED by scenario ($12–38/mo entry, PROJECTED — anthropic-bound.md, A21; closing receipt = the Anthropic invoice)" |
| §4 "slide 8 still says 'generation-margin' and points here" | FALSE (cosmetic) | Slide 8 text contains neither the phrase "generation-margin" nor any pointer to the bound; it points to model-v1 only. The bound reaches slide 8 only by reference through model-v1 §1. → MINOR m3 |
| Conductor cap disclosure (32 first turn, +16/user turn, ~L1081) | UNVERIFIABLE here | clinkworthy not in this repo; disclosure is present and internally consistent; not contradicted → NOTE n1 |

### Artifact 2 — Slide 9 (`skeleton.md` l.165–191)

| Check | Result | Evidence |
|---|---|---|
| $150,000 salary floor × 12 months = $150,000 component | TRUE | row 1, grade RULED (A18/A19); A18 $150,000/yr, A19 12 months |
| Every other component listed with a grade | TRUE | AI COGS $5–10k (PROJECTED scenario); infra $3–6k (PROJECTED); legal $10–20k (PROJECTED); CAC discovery $5–10k (PROJECTED); contingency ~15% $26–30k (PROJECTED) |
| 15% contingency and sum → "≈$200k–$225k" | TRUE — reproduces | components 173k–196k; ×1.15 = 198,950–225,400. Contingency 25,950–29,400 (doc "$26–30k" — the $30k is a round-up of 29.4k; NOTE n2) |
| AI-COGS row is coherent with A9+A21 | TRUE (sanity) | 10 cust-eq × ($25–38 + $12–38) × 12 = $4.4k–9.1k ≈ "$5–10k" |
| Range argued from milestones, not a round number | TRUE (adequately) | Components are 12-month cost lines; "Milestones bought" names the five deliverables; two components are tied to named milestones (legal → lawyer brief R12/D5 + pilot terms; CAC discovery → first ~100+ scans / the model's three measurables). The $250k round ceiling is struck with reason in-line. Component↔milestone mapping is not one-to-one, but the number is a sum, not an anchor |
| Slide says the NUMBER stays Phin's | TRUE | Ask-range grade cell: "the NUMBER is Phin's, and widening any component honestly widens the range"; instrument "Phin's call with counsel" |
| Any top-down market figure (law 2) | NONE | A13 anchors are sourced accelerator terms (accelerators.md l.27, l.44–46), used as scale comparators, not market size |
| Prior stub retained for lineage | TRUE | l.193–210 |

### Artifact 3 — A17 + §3a

| Check | Result | Evidence |
|---|---|---|
| Policy RULED (30-day full refund on request) | TRUE | A17 value: "POLICY RULED (Phin D2): full refund on request, first 30 days"; matches the chief's D2 entry verbatim |
| Rate graded stricter than the relay label, disclosed | TRUE | chief relayed "DIRECTIONAL until observed"; A17 grades the rate PROJECTED and says why ("no secondhand source was read, so this table grades it PROJECTED"). PROJECTED is the lower rung on the doctrine ladder; the disagreement is written into the row |
| §3a cells reproduce from A-rows | TRUE | (1−r)×$393 − r×$31 at r = 5/10/15% → 371.8 / 350.6 / 329.4 → doc "≈ $372 / $351 / $329". $393 = $27.5/0.07 (model §3); $31 = mid-band A9 (31.5) = $59 − $27.5. Refunder-COGS term at 10% = $3.10, correctly described as already netted |
| Formula stated, no double-count | TRUE | gate-corrected sentence present; the "$3.10 extra CAC" claim is now explicitly "never to be double-counted" |
| Same-file law-4 break (§1 BOUNDED vs §4 unpriced) closed | TRUE | model-v1 diff: both §1 and §4 now say "now BOUNDED ~$12–38/mo entry, A21 … still excluded from these margin cells" |

### Artifact 4 — `founding-terms-letter.md`

| Check | Result | Evidence |
|---|---|---|
| (a) No "never/ever" absolutes of the barred class | TRUE, with a reading note | Remaining: "if you ever join" (l.35), "if we ever shut down" (l.48) — conditionals that widen the recipient's option; agree with the journalist's ruling. Two absolutes of Phin's OWN conduct survive: "What you keep, always" (l.45) and "your data goes with you, never silently" (l.49). These are the D4 written wind-down commitment made customer-facing — promises within Phin's control, not capability/market absolutes — so not the barred class, but Phin should send them knowing they are promises. → NOTE n3 |
| (b) AI visibly AI where the product is described | TRUE | l.23 "I built Player 2, an AI marketing employee for small businesses"; letter is signed by Phin (the human), which is the right signer — the AI is described, not impersonated |
| (c) Promises nothing unshipped as present: export | TRUE | "(export included)" gone; l.46–50 is commitment language ("If you leave, we hand you everything … This letter is that commitment, in writing"); R10 records export as "APPROVED, build pending" and this sentence as the customer-facing draft. "in files you can use" is a promise of an action Phin can perform manually, not a shipped feature — acceptable (NOTE n6) |
| (c) Refund posture matches D2 | TRUE (by non-contradiction) | Free pilot; no refund sentence needed or present; nothing contradicts the 30-day policy |
| (c) D6 credit shape drafted AND bracketed as Phin's knowing-confirm | TRUE | l.33–38: "we extend your free months, and if you ever join as a paying shop, you start with credit at the founding rate … [PHIN: … confirm or reshape it, but the sentence may not send with the remedy undefined.]" — blocking bracket present |
| (c) Open-ended founding-rate lock flagged | TRUE | header l.9–11 names both knowing-confirm items; notice repeats them |
| (d) "What they give us" explicit: feedback cadence / permission to quote / named contact | PARTIAL | cadence: "a short call every couple of weeks" ✓; permission: "to learn from what works on your accounts" + "name you as our first shop" ✓ — but permission to QUOTE their words/reactions is not asked, while the Phin-notes (l.78–79) say their reactions are law-1 evidence captured like interview notes; named contact on the shop's side: implied by addressing [NAME], not asked. → MINOR m4 |
| (d) "The exit" explicit | TRUE | l.57–58 "No contract at all: say the word and we stop, same day"; l.45–50 what they keep on leaving |
| (e) CONFIDENTIAL header | TRUE | l.3, plus law-3 QUEUED DRAFT, SENT-BY: — (unsent) |
| (f) Pilot shop unnamed (D3) | TRUE | "[NAME]" placeholder; "ONE founding shop"; header "shop TBD" |
| Present-tense product claims match shipped rows | TRUE | "plans a week of posts … writes them in your voice, publishes on your schedule, tells you honestly what worked"; "Nothing posts and nothing is spent without your OK" — all present-tense (non-"coming") rows of the kit's feature table; dogfooding disclosure carried (l.52–55). Roadmap items deliberately excluded (notes l.75–77) |

### Artifact 5 — recruit message + run sheet (`recruit-and-run.md`)

| Check | Result | Evidence |
|---|---|---|
| Two sentences, no pitch | TRUE | S1 "I'm doing some research … I genuinely just need your opinions." S2 "Coffee's on me — would sometime this week work?" No product name, no offer, no positioning phrase |
| Reveals no card codes / company positioning | TRUE | no "Player 2", "Loma", M/T/K/R, "AI marketing employee", or any KSP language; the "what is it?" deflection line is in the rules, not the message |
| Barred absolute removed | TRUE | "nothing to buy, ever" → "nothing to buy"; the retained "never converts into a pitch" (l.19) is an internal rule, not outward text |
| Run sheet ledger matches the kit | PARTIAL | Ground rules ✓ (confidential / can't hurt feelings / name made up / not a pitch = kit l.51–54); rotation ✓ (points to kit table); batches ✓ (rows 1–5 then 6–9 = kit l.132–136, nine rows counted); moments a–f ✓; contamination rule ✓; capture "knew of Player 2" ✓. GAP: the run sheet says "the kit's TWO unmarked ledger items" (card R, card T) — the kit's ledger (l.37–46) carries a THIRD: the feature table's "Posting that never fails silently" row (batch 1, row 4) reaches the operator today, and "so I'd get told?" gets the honest line, not a yes. The run sheet does not name it. → MINOR m2 |

### 6 — Law-4 web

Grep of `gtm/` for $200k, $225k, $250k, $12, $38, $12–38, $37–76, 20–65, 4–13, 12–25, A17, A18, A19, A20, A21 (reviews file excluded):
- All live statements agree: bound §2/§3, A21, model-v1 §1/§4, R5, slide 9, inbox notice, ops-log, lock. No disagreeing value found.
- $250k survives only as struck/explained text (slide 9 in-line "gate-corrected: the earlier $250k ceiling…", inbox, ops-log) — not as a live claim.
- Old "unpriced Anthropic layer" wording: model-v1 §1 and §4 both replaced (diff confirms); no surviving "unpriced" reasoning-layer claim outside A7/`grok-2-image` (a different, still-true finding).
- R5/A21 sync: VERIFIED in the register diff (the r1 finding that §4 claimed an unshipped sync is closed).
- O3/O7 RECEIPTED via D2's sentence; P-F parked with D8 on the record; R10/R12/R13 carry D4/D5/D7 — all in the diffs, all consistent with the chief's rulings entry.
- One mis-described cross-reference (bound §4 → slide 8), not a number disagreement: m3.

### 7 — Honesty of the notice

| Notice claim | Verdict | Evidence |
|---|---|---|
| "all GATED (two reviewers, both FAIL-r1 → PASS-r2)" | TRUE | verdict file; STATUS lines on all four artifacts |
| "~20–65 points of $59 — light ≈$12, naive-heavy ≈$38, stacked $37–76 vs $59, full OS ~12–25%" | TRUE | recomputed |
| "plausibly underwater at heavy use on today's architecture" | TRUE | 76.4 > 59 at PROJECTED inputs; hedge appropriate |
| "closing receipt is Phin's Anthropic invoice ÷ workspaces" | TRUE | bound §3.2, A21 |
| "This also QUANTIFIES why his own-media direction matters to the MODEL" | OVERSTATED | the bound explains it qualitatively (A9 → ~0, this line stays) and defers pricing to chief task 2; nothing about own-media is quantified |
| "Slide 9 DRAFTED from D10: graded components + 15% → ≈$200k–$225k; gate cut an unbacked $250k" | TRUE | recomputed; verdict r1 item |
| "anchored to A13's real checks; the NUMBER stays Phin's" | TRUE | slide text |
| "A17 … policy RULED; rate PROJECTED — graded stricter than the relay label, disclosed" | TRUE | A17 row |
| "journalist r1 killed '(export included)' … two 'ever' absolutes … a two-clicks UI" | TRUE | verdict file; current letter text has none of the three |
| r2 quote: "the most quotable line gets BETTER if it leaks. No story here. Ship it to Phin." | OVERSTATED (attribution) | the verdict file puts "the rare line that gets STRONGER if it leaks" in ROUND 1; round 2's quote is only "No story here. Ship it to Phin." Paraphrase + round shift; cosmetic |
| "Verdict filed (1 file, both personas, 14 edits)" | TRUE on count; see MAJOR M1 on form | 7 + 7 = 14; one file |
| "PHIN'S TWO KNOWING-CONFIRMS … bracket is blocking" | TRUE | letter l.9–11, l.36–38 |
| NOT CHECKED (i)–(v) | TRUE and useful | (ii) is exactly m1's exposure, honestly pre-disclosed |
| Does the verdict file contain a WRITTEN ledger or a COUNT? | COUNT | "29-cell written ledger, 24 exact" is reported, not reproduced; the file is "condensed faithfully". No their/mine/match cells appear anywhere in the repo. → MAJOR M1 |

---

## 2. Arithmetic ledger (theirs / mine / match)

Inputs: A20 $5/MTok in, $25/MTok out; A1 $59; A2 $299; A9 $25–38; A18 $150,000; A19 12 mo; model §3 LTV@7% $393.

| # | Cell | Theirs | Mine | Match |
|---|---|---|---|---|
| 1 | Light conductor job (10 calls × 8K/1K) | ~$0.65 | $0.650 | ✓ |
| 2 | Heavy conductor job (32 × 15K/1.5K) | $3.60 ($2.40 in + $1.20 out) | $3.600 (2.40 + 1.20) | ✓ |
| 3 | Conductor, light (4 jobs) | $2.60 | $2.60 | ✓ |
| 4 | Conductor, heavy (8 jobs) | $28.80 | $28.80 | ✓ |
| 5 | Pulse/day (10K/2K) | ~$0.10 | $0.100 | ✓ |
| 6 | Pulse/month | $3.00 | $3.00 | ✓ |
| 7 | Draft (2K/0.3K) ×10/day ×30 | $5.25 | $5.25 | ✓ |
| 8 | Review (20K/2K) ×~2/wk | $1.30 | $1.286 (×8.57) / $1.30 (×8.67) | ✓ (rounding) |
| 9 | Total light | ≈$12 (≈20%) | $12.15 (20.6%) | ✓ |
| 10 | Total heavy | ≈$38 (≈65%) | $38.35 (65.0%) | ✓ |
| 11 | Stacked all-in | $37–76 | $37.2–76.4 | ✓ |
| 12 | Full-OS all-in share | ~12–25% | 12.4–25.5% | ✓ |
| 13 | Full-OS reasoning-only share | ~4–13% | 4.1–12.8% | ✓ |
| 14 | A20 list price vs the cited reference | $5 / $25, cached 2026-06-24 | reference table: claude-opus-5 $5.00 / $25.00, "cached: 2026-06-24" | ✓ (value) — source form: m1 |
| 15 | Slide 9 salary component | $150,000 | 150,000 × 12/12 | ✓ |
| 16 | Slide 9 component sum (pre-contingency) | (not stated) | $173k–$196k | — |
| 17 | Contingency 15% | ~$26–30k | $25,950–$29,400 | ✓ (30k is a round-up; n2) |
| 18 | Ask range | ≈$200k–$225k | $198,950–$225,400 | ✓ |
| 19 | AI-COGS row sanity (≤10 cust-eq × (A9+A21) × 12) | ~$5–10k | $4.4k–$9.1k | ✓ (consistent) |
| 20 | Refunder COGS $31 | $31 | A9 mid 31.5 = 59 − 27.5 | ✓ |
| 21 | §3a r=5% | ≈$372 | 371.8 | ✓ |
| 22 | §3a r=10% | ≈$351 | 350.6 | ✓ |
| 23 | §3a r=15% | ≈$329 | 329.4 | ✓ |
| 24 | Refunder term at 10% | ~$3.10 | 3.10 | ✓ |
| 25 | Entry LTV base | $393 | 27.5/0.07 = 392.9 | ✓ |
| 26 | Edit count | 14 (7+7) | 7 + 7 | ✓ |

26/26 reproducing (one rounding note). No cell disagrees.

---

## 3. Findings

**MAJOR**
- **M1 — The verdict file carries a count, not the written ledger.** The chief's confirm of shift 9 made "FAIL-then-PASS with a written their/mine/match ledger" the shape every model gate takes. `2026-09-02-shift10-both-gates.md` reports "29-cell written ledger, 24 exact" and "verified with recomputation" but reproduces no cells; the ledger exists nowhere in the repo. The substance survives because this confirmation recomputed every headline cell (26/26 above), but the record does not let a later reader audit the verifier's arithmetic or which 5 of 29 were inexact. Process finding; not a number error.

**MINOR**
- **m1 — A20's SOURCED grade rests on an unnamed, tool-bundled reference.** The source line ("Anthropic model/pricing reference read this shift, cache-dated 2026-06-24") names no document path or URL; there is no snapshot (page text + hash) in `snapshots/`; the org's own shift-9 doctrine says a tool's answer is not a snapshot. The value reproduces against the reference (ledger #14) and the RE-VERIFY flag plus the ops-log "Web: none … disclosed" line make it honest — but the row should name the document it read, and either snapshot the live pricing page or carry the grade as "SOURCED (bundled reference, cached)" until it does.
- **m2 — Run sheet's ledger is one item short of the kit's.** Step 6 says "the kit's two unmarked ledger items" (card R alerting; card T brochure lines). The kit's ledger (l.37–46) has a third: the feature table's "Posting that never fails silently" row (batch 1, row 4) shares card R's operator-only limit and has its own scripted honest line. Phin will hit that row in batch 1 with nothing on the sheet.
- **m3 — Bound §4 mis-describes slide 8.** "the slide itself still says 'generation-margin' and points here for the gap" — slide 8 says neither; it points to model-v1 only. Cross-reference error, not a number disagreement; fix the sentence (or add the pointer to slide 8 — Phin's call, since slide 8 is a STUB).
- **m4 — Letter's "what they give us" lacks permission-to-quote.** The letter asks for a cadence, learning-from-accounts, and naming rights, but not permission to quote their reactions — which the Phin-notes (l.78–79) say will be captured as law-1 evidence. A named contact on the shop's side is implied, not asked. Both are one-line edits for Phin's pass.
- **m5 — Own-media effect on this bound is named, not quantified; and the direction of change is under-stated.** §3 note 3 says the direction does not flip the reasoning line and defers to chief task 2. It does not say the line can GROW (script + beats + edit-list + caption-style calls per own-media clip) nor that transcription is a third unpriced line (A5's exclusion). The notice's "quantifies" is the overstatement; the bound's own text is honest but soft.

**NOTE**
- n1 — Code caps (`MAX_TOOL_CALLS` 32; +16/user-turn at ~L1081; daily Pulse cron; ≤20 outbound queue) are not verifiable from this repo (clinkworthy absent). Taken as the reviewer's code-read; internally consistent; not contradicted.
- n2 — Contingency "$26–30k": computed $25,950–$29,400; "$30k" rounds up. The ask range still lands at ≈$200k–$225k.
- n3 — Two absolutes of Phin's own conduct survive in the letter ("What you keep, always"; "never silently"). They are the D4 wind-down commitment in customer words and within his control — outside the barred class (which bars capability/market absolutes) — but he should send them as promises knowingly.
- n4 — Notice attributes the "gets BETTER if it leaks" quote to r2; the verdict file has it in r1 as "STRONGER". Cosmetic.
- n5 — D2's "four videos a month" is correctly absent from the letter (free pilot grants the full service); the journalist's ruling on that point is right.
- n6 — "in files you can use" (l.47) is a promise of an action, not a shipped export feature; acceptable under the O4 guard, but Phin should know the hand-over is manual until build item ships (R10: APPROVED, build pending).
- n7 — Lock released (lock.md l.1); ops-log entry carries fan-out disclosure (2 reviewers × 2 rounds, token weights) and "Web: none" — the honesty machinery is intact.

---

## 4. Honesty note

The notice is materially honest. Every number it states reproduces; every ruling it quotes matches the chief's entry; the NOT CHECKED list pre-discloses the one substantive exposure (A20's source form) before I found it. Two overstatements, both rhetorical: "quantifies why own-media matters to the MODEL" (it explains, and schedules the quantification), and a misattributed round-2 quote. The verdict file itself is where the shortfall lives: it summarizes a ledger the house rule says must be written down, and the summary is what a future reader would have to trust. This confirmation did not trust it — it recomputed — and found nothing wrong underneath.

---

## 5. Recommendation

**CONFIRM GATED (with notes).** The four artifacts hold: every headline cell recomputes from graded rows; the grades are stricter than the relays where they differ and say so; the letter promises nothing unshipped, is visibly from a human about an AI, names no shop, and carries both knowing-confirm brackets; the recruit message is two clean sentences; law-4 is intact across the corpus including the R5/A21 sync.

Conditions carried into the next shift (none blocks release of the letter and recruit docs to Phin for edit+send):
1. **M1** — append the 29-cell their/mine/match ledger (or the reviewer's raw ledger output) to `2026-09-02-shift10-both-gates.md`; from here, a gate verdict without the written cells is not a gate verdict.
2. **m1** — name the A20 source document in the row; snapshot the live Anthropic pricing page (page text + hash) before any term-sheet use, per the RE-VERIFY flag already on the row.
3. **m2** — add the feature-table "never fails silently" row to run-sheet step 6 before printing.
4. **m3** — correct bound §4's slide-8 sentence.
5. **m4 / n3** — for Phin's edit pass: add permission-to-quote and a named shop contact to "What I ask"; read "always"/"never silently" as the promises they are.
6. **m5** — when chief task 2 (own-media model scenario) runs, it must price three lines, not two: generation (A9 → ~0), reasoning (A21, may grow per clip), and transcription (A5's exclusion, still unpriced).
