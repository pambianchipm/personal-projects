# Gate verdicts — shift 13 (Holo dossier + Card 3, rebuilt from primary evidence)

CONFIDENTIAL — internal-audit class (law 8).

FILED BY: boss, shift 13 (2026-09-03). Two independent reviewer agents,
two rounds each. Per the standing M1 rule, ledgers are filed verbatim
and counts never substitute for cells. **Both gates FAILED round 1;
the competitor's salesperson FAILED round 2 as well.** 23 + 16 = **39
required edits, all applied. Nothing was argued down.**

**Fan-out disclosure:** two persona reviewers (Opus 5) — competitor's
salesperson in Holo's seat, and skeptical SMB owner (a four-chair salon).
No fresh verifier this shift: the r2 verdicts converged on one diagnosis
and both named the residual work explicitly, so a third round would have
re-derived what both had already written. **The chief confirms; the boss
does not self-pass.**

---

## The finding both gates reached independently, and it is not the one the boss expected

> **"You do not have a truthfulness problem any more. You have a
> propagation problem, and on a sales instrument that is the same thing
> arriving one meeting later."** — SMB owner, r2

Three corrections this shift reached the **dossier** and stopped before
the **battle card**: the revenue-ingest limit, the onboarding concession,
and the disqualification floor. The card is the page a person speaks
from. Both reviewers found this independently, from opposite personas.

**Adopted as a standing rule, written into both artifacts:** *any
correction to a shared fact is applied to the battle card FIRST and the
dossier second, never the reverse. A correction that has not reached the
card has not been made.*

The worst instance was the boss's: applying the refund fix **appended**
the correction instead of replacing the text it corrected, so the card
stated the credits term twice in one breath, wrong version first. The
salesperson graded that **"worse than r1"** and was right.

---

## Gate 1 — competitor's salesperson (Holo's seat) — FAIL r1 → FAIL r2 (narrow)

### What the boss got wrong about Holo, and had to be shown

| Claim the boss shipped | What the ground truth said | Source |
|---|---|---|
| "No human anywhere in it" | Holo **sells support**: a Support row on the pricing page (Standard email / Priority), and a Trustpilot profile **replying to 85% of negative reviews within two weeks** | Snapshot §1 line 39 and §2 — **the table the boss transcribed itself** |
| Refund "refundable in 90-day expiring credits" | §4.2 says Holo **may** issue credits — the option was dropped | Snapshot §3 |
| Refund "consumer rights waived" | §2.1/2.2: waived **"to the extent permitted by law"** — the qualifier was dropped | Snapshot §3 |
| "Their onboarding still beats ours" | Conceded on **their own ad copy**, against a *"Getting started 2/10"* checklist in the same capture. Neither product's first minute has ever been timed | Snapshot Addendum 2 |
| "Reports on what happened" | The Analytics tab was **never opened**; Learnings was seen in **empty state only** | Snapshot §4 |

**The absence rule at the top of the dossier was broken by the dossier.**
That is the third instance of this defect class across shifts 12–13, and
every time a reviewer found it, not the boss.

### What the boss got wrong about Player 2 — the more expensive half

| Claim the boss shipped | What the code said |
|---|---|
| "Revenue traced to a post — **shipped with file receipts**" | UTMs at publish are real (`attribution.ts`, `utm_content` = post id). **Automatic revenue ingest is not shipped**: `db/conversions.ts` marks GA4 ingest *"future"*; the client-facing string is *"log sales to trace revenue"* (`claims-pure.ts`); the recap totals **per channel per month, not per post**; and `COMPARISON_REGISTRY` holds format, daypart-bucket, boost, cadence-week — **no revenue dimension.** The engine tests engagement |
| The loop row scored their observed Learnings surface NOT OBSERVED, and **our [Apply] button** — a human click — as "Yes" | On a page defining the differentiator as *"without the user carrying it."* **Our own receipt was the user carrying it.** Restated as persistence-after-one-click |
| "Holo cannot copy it by shipping a page" | An unreceipted claim **about them**, inside a section headed "stated as what WE do." And the named-person receipt **does not exist** — no SLA, named owner or response commitment anywhere in the repo |
| Positioning line: three claims, "each with a shipped receipt" | **Two of the three had no receipt by the same file's own testimony, ~110 lines above.** Only the click gate is shipped |

### The reviewer's r2 answer to the boss's own question, verbatim

> **"Did E7 cost you the wedge? No. It cost you the *bluff*, and the
> honest version is stronger against a real owner… an owner who has been
> sold 'AI attribution' twice before will believe *'we tag every post,
> you log the sale, and we tell you which post preceded it — or we tell
> you we can't tell yet'* faster than he believes a black box."**

And on the boss's other question — whether conceding Holo's support row
over-corrected:

> **"Support is not accountability. My Support row answers *tickets*…
> Nobody at Holo owns the sentence *'this month didn't work and here is
> what I am changing.'*"** — adopted as the card's cell.

---

## Gate 2 — skeptical SMB owner (four-chair salon) — FAIL r1 → PASS-WITH-NOTES r2

### The strategic finding, which no one in this org would have reached

Asked directly whether "someone who booked" still beats "followers" now
that the owner must type the sales in herself, she **inverted it**:

> **"No. It inverts… Square already tells me who came in and what they
> paid. What I have never had is the line between the post and the
> person walking through the door… And you're now telling me that *I*
> draw it — by hand, at the end of a nine-hour day on my feet… I am the
> least reliable person in the building to do that job, because I'm the
> one who was busy. That's why I'd be buying you."**

And then the fix, out of the org's own file:

> **"Have the human on the operated tier do the logging… twenty minutes
> of theirs against an hour of mine… *That* is what $299 buys, and it's
> the only version of this I'd sign. Right now your card charges me $299
> to do data entry for software."**

**This is the shift's most important output and it is a product/pricing
question for Phin, not a boss call.** It is in no SLA, scope doc or price
page; the card carries it flagged `UNTESTED` and NOT YET COMMITTED.

### On saying "you would be our first" out loud

> **"It buys you trust in *you* and costs you trust in *it*, and at $299
> the second one wins… you just told me my four chairs are the test, and
> you didn't tell me what I get for being the test."**

Her fix, also from the org's own table: A2 is a **$299 founding rate
against a $499 standard** — the rate locked for the life of the account,
a named person's direct number, first call on what gets built. *"Honesty
that costs the buyer and returns them nothing is a warning, not a
disclosure."* Applied.

### Other r1 findings, all applied

- **The card hid its own price gap** — "Why they win: $12 against $59"
  while its own table listed $499. The honest gap is **25× against A2,
  41× against A3**; only A1 is within 5×.
- **Zero inline `UNTESTED`** in the dossier's 270 lines and in Card 3,
  while Cards 1, 2 and 4 each carried them. Now six and several.
- **The disqualifier could never fire** — set at a ~$50 ceiling that our
  own $59 entry clears by nine dollars. Raised to ~$100, with the reason
  written down.
- **"n floors and FDR correction"** barred as buyer-facing language.
- **A persona quote the shift-12 sweep missed** — Card 1's *"in the
  owner's own words"*, which the earlier grep missed because it searched
  for "the reviewer's". Found out of scope by the reviewer, fixed.
- **"Who do you talk to when it goes wrong" is no longer our strong
  question.** Holo answers 85% of its angry reviews; we have answered
  none, because we have had none. The card now says so before a prospect
  does.

---

## Residuals the boss is NOT closing on its own authority

- **The operated-tier logging proposal** — a pricing and scope decision
  for Phin. Flagged, not adopted.
- **The named human** — landmine 4 no longer ships with a blank, but the
  receipt (an SLA, a name, a response commitment) does not exist. Until
  it does, that landmine is not askable.
- **Whether a Holo learning re-enters Holo's generation** — unchanged,
  and it still decides the position. The chief's Addendum 3 raises the
  prior; it settles nothing and is quotable nowhere.
- **The tension the boss hands back:** the chief's sharpened wedge, *"we
  count sales, not signals,"* was written before both gates reported and
  inherits the same receipt gap — we do not automatically count sales
  either. Recorded in the dossier's open-question section.
