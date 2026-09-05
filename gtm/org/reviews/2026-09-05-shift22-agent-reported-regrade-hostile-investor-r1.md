# GATE VERDICT — the `AGENT-REPORTED` regrade (shift 22), hostile investor, round 1

CONFIDENTIAL — internal-audit class (law 8).

**VERDICT: FAIL (round 1 of 3).** Ten MUST-FIX, eight SHOULD-FIX.
**Subject:** the shift-22 regrade itself — the new legend grade, the
re-enumeration to eleven rows, and the propagation into slide 4 and the gap list.
**Reviewer:** one hostile-investor persona agent, spawned at gate time. Solo
otherwise.
**Scope of the diff reviewed:** `9348c77..HEAD` at review time (4 files).

---

## WHY THIS VERDICT MATTERS MORE THAN ITS CONTENTS

**The shift's whole subject was a provenance failure, and the gate found a
provenance failure IN THE FIX — in the self-serving direction, in three files.**
The regrade removed two rows from the contaminated list on a stated ground of
*"a retrieved, hashed primary instrument"*, and **for A15 no such instrument
exists**. One hash was supplied and allowed to cover two rows of very different
quality. **That is the same error class as the one being repaired, committed by
the repair, one shift after the same error class was committed by the gate built
to prevent it.**

**Second, and structurally worse: the regrade touched two files. The gate found
eight more still stating the superseded grades**, including `skeleton.md`, a
GATED deck artifact carrying a standing instruction to print the swarm's own
`[VERIFIED]` tag onto a future slide. **The scan that produced the eleven rows
reads only `assumptions.md` and could never have found them** — a limitation the
regrade itself had named in its own blind-spot list, and then did not act on.

---

## MUST-FIX — disposition

| # | Finding | Disposition |
|---|---|---|
| **MF-1** | *"retrieved, hashed primary instrument"* false for A15, in three files | **FIXED.** Corrected in `assumptions.md`; A15 and A25 separated and each described accurately. `grep -in 'sha\|hash\|http 200\|bytes\|curl'` over the Holo snapshot returns **zero matches**; it is Phin's verbatim paste, Trustpilot header from a screenshot, `tryholo.ai` egress-blocked from every box here. |
| **MF-2** | A15's exemption lives only in header prose; its grade cell still reads DIRECTIONAL → the removal is circular | **PARTLY.** Recorded as **UNSETTLED** and filed as **G18**. The grade cell is deliberately NOT upgraded: that is a revaluation (law 7) and doing it inside the pass that benefits from it is this shift's own failure mode. |
| **MF-3** | `clinkworthy/docs/competitor-holo.md` — A15's cited source — is ungraded and is a sibling of the swarm report | **OPEN, filed as G18.** Not answerable from this repo; the file is not in this tree. |
| **MF-4** | Eight other files state superseded grades; `skeleton.md` instructs a slide to print `[VERIFIED]` | **FIXED.** All eight patched. |
| **MF-5** | `gap-list:93` states A46 at ARGUED inside the file the regrade amended | **FIXED.** |
| **MF-6** | `slide-04` quote block labels A42's inference `SOURCED`, breaking the ARGUED legend's same-surface rule on the slide's most quotable sentence | **FIXED.** |
| **MF-7** | `gap-list:103` still calls the A14/A30 divergence *"a defect in `assumptions.md`"* — mirror of the slide 4 sentence rewritten in the same commit | **FIXED.** |
| **MF-8** | *"(b) IS DONE"* — banned self-claim, over a set the same header calls a floor | **FIXED.** Replaced with what was applied, the instrument, and its limits. |
| **MF-9** | *"ten rows carry the org's SOURCED grade"* — it was **five** | **FIXED.** |
| **MF-10** | The load-bearing instrument retained no receipt; shift 21's weaker scan had one | **FIXED.** Script + raw output filed and hashed: `snapshots/2026-09-05-shift22-rowscan.py` (SHA-256 `bfb081f2…`) and `…-rowscan-receipt.md`. |

**EIGHT FIXED, ONE PARTLY, ONE OPEN.** The two not closed are the same finding:
**A15's provenance, now G18.**

---

## WHAT THE GATE CONFIRMED IN THIS ORG'S FAVOUR, RECORDED BECAUSE IT CUTS THAT WAY

- **"No figure changed" HOLDS.** The reviewer re-derived it independently:
  `git diff -U0` through a numeric-token extractor, plus a per-row value-cell
  byte comparison of all thirteen touched rows against `9348c77`. **No
  removed-only numeric tokens. Twelve of thirteen value cells byte-identical;
  A45's differs only by the grade label inside it.**
- **A25's removal is sound**, verified against the fetch record independently.
- **The claim that this shift answered none of slide 4's seven MUST-FIX is
  honest.** The reviewer checked.
- **On showability the shift is right:** the reviewer retrieved no primary
  instrument either.

## THE REVIEWER'S OWN DISCLOSED LIMITS

- **`clinkworthy` is not in this tree.** Every claim about the corpus — line 3,
  `grep -c 'http'` = 0, the 100 `[VERIFIED]` tags, SHA-256 `696a6b69…` — is
  taken on shift 21's receipt. **None was re-derived.**
- Its own enumeration threw a false positive (A38, matched `§1.3`) and it calls
  its own list **a floor**, for the same reason ours is one.
- The live-surface claim is **unfalsifiable from this repo** — no site code here.
- It did not check whether any of the eleven figures is TRUE.

---

## THE ROUND-2 QUESTION IS NOT THE ROUND-1 QUESTION

Round 1 asked *is the relabel honest*. It now is, except for A15. **Round 2 must
not be convened on the relabel.** The corollary applies exactly as it did to
slide 4: the remaining defect is not in the labels, it is that **no primary
instrument exists behind any of the eleven rows.** That is recommendation (b),
chief-approved, Adobe Express n=433 first.

**G17 STAYS OPEN. G18 IS NEW. Slide 4 STAYS GATE-FAILED with seven MUST-FIX
untouched.**
