# Receipts read from source this shift, for the copy overhaul

CONFIDENTIAL (law 8, internal-audit class — this file audits our own claims).
OWNER: GTM boss · shift 15 continuation, 2026-09-03.
Read from `pambianchipm/clinkworthy` @ `a996b86`, read-only clone. Every row
names the file and line. **This is a code read, not an artifact quote** — which
is the whole reason it exists.

## R1 — ARMING CANNOT TOUCH SPEND. **VERIFIED IN SOURCE.**

`front-door-overhaul-v1.md` §5 routes around §6.2's "runs your Meta ads" +
"armed in advance" ban by asserting that arming is a POSTING mechanism, not a
spend mechanism. That assertion rested on a quote of the truth map inside
`position-v2-the-hire.md` §1.6 — an artifact quoting an artifact. **It is now
traced to the code:**

| Receipt | Where | What it says |
|---|---|---|
| The capability's own client-facing label | `console/lib/tier.ts:107` | `arm_auto_publish: 'posting on a schedule without a click'` |
| The comment on the capability | `console/lib/tier.ts:32` | *"the ⚡ toggle: a slot that publishes without a click"* |
| **`ads` is a SEPARATE capability** | `console/lib/tier.ts:109` | `ads: 'ads and boosts'` — a different key in the same map |
| The arming chokepoint | `console/lib/db/scheduled.ts:83` | `requireCapability(workspaceId, 'arm_auto_publish')` |
| **The armed runner touches no money** | `console/lib/auto-publish.ts` | **grep for `ads\|spend\|budget\|boost` over the whole file returns NOTHING.** `runAutoPublish` reads scheduled slots where `slot.autoPost` is set and calls `publishSlot` to a channel. There is no spend path in it. |

**Therefore §5's sentence is backed, and NOT CHECKED (ii) in the overhaul is
closed.** An owner cannot arm spend, because the thing arming arms is a
posting slot and the runner behind it has no money code in it.

## R2 — THE AD-SPEND HUMAN GATE, and what it does and does not cover

Found while checking R1. **This bears on §6.2's barred sentence** *"Your ad
budget is yours, set by you, and separate from the subscription — NOT SAYABLE
UNTIL VERIFIED"*, which was moved to the PROHIBITED column at gate r2 for
having no receipt. **Part of it now has one. I am not promoting it myself** —
§6.2 lives in a gated artifact and the chief owns edits to it (the same
law-4-note pattern §1.6 already uses). **Recorded here for the chief.**

| Receipt | Where | What it says |
|---|---|---|
| The module's own header | `console/lib/meta-ads.ts:3` | *"lifetime budget and end date. **HUMAN GATE IS ABSOLUTE** — this module is only…"* |
| The launch path | `console/lib/meta-ads.ts:241-242` | *"this launch function is ONLY reachable from `/api/ads/launch` after Phin approves a draft **with the budget shown**."* |
| Every spend entry point is capability-gated | `meta-ads.ts:121,330,407,423` | `requireCapability(ws, 'ads')` at four chokepoints |
| Each launch is bounded | `meta-ads.ts:325,330` | campaign → one ad set with a **lifetime budget + end date** |

**WHAT THIS DOES NOT ESTABLISH, stated plainly so nobody over-reads it:**
- It establishes a **per-launch** budget shown at a human approval. It does
  **not** establish the **account-level standing ceiling** that
  `position-v2-the-hire.md` §3.2 records as **RULED and UNBUILT**. Those are
  two different things and only the first is in the code.
- `bid_strategy: 'LOWEST_COST_WITHOUT_CAP'` (`:144`, `:364`) is a **bid**
  strategy, not an absent budget cap. The lifetime budget is the cap. **Do not
  cite this line as either a reassurance or an alarm** — it is neither.
- It says nothing about whose card the ad spend lands on, which is the SMB
  gate's actual unanswered question (*"spent on what? whose money?"*). **Still
  UNANSWERED, still barred.**

## R3 — THE HERO IS CODE-COMMENTED "DO NOT REWRITE"

`console/app/landing/content.ts:82` — `/** Canon (spec §4.2). Do not rewrite.
The <br> falls after "runs". */`. Phin's directive outranks it, but the comment
must come out in the same edit or the file contradicts itself.

## R4 — A SCREENSHOT GUARD FAILS CLOSED ON THE NEW HERO

`docs/design/redesign-2026-09/screenshots/marketing/render.mjs:88` selects the
landing view by `t.includes('Marketing that runs while you run the shop')`.
**It is a string equality test on the dead line.** Ship the new hero without it
and the tooling stops finding the landing page. Same commit or it breaks.

## NOT CHECKED

- Whether `postingHoursET` / `brand-config` defaults match the posting windows
  `MARKETING.md` prints for the tour (X 9am / FB 10 / IG noon ET). **Not
  traced.** No copy in the overhaul states a posting time, so nothing rests on
  it — but the tour spec does, and that is someone's law-4 item.
- The downgrade behaviour at `console/lib/downgrade.ts:85,109` — a tenant moved
  from os to entry **keeps slots armed while they had it** (`tier.ts:79`,
  flagged OPEN for Phin in the source). **No copy may say arming is an OS-only
  behaviour without addressing this**, and none of mine does.
- Meta App Review status. Unknown to this org, and everything in R2 rests on it
  for any account that is not ours (`docs/channel-readiness.md`).

---

## R5 — **A LIVE DEFECT ON THE FRONT DOOR, found while checking R2.** Not mine to fix; filed for the chief.

**`console/app/api/scan/route.ts:47` tells a stranger their scan result will be
emailed to them. Nothing emails it to them.**

> `{ error: 'Enter a real email — the scan result also goes there.' }`

**Traced, not assumed:**
- The only send in the whole route is at `:99-109`: `sendAlert(...)`, commented
  in the source as **"Operator alert — best-effort (needs RESEND configured)"**,
  and its payload is addressed to the operator — it *contains* the lead's email
  as a field rather than going to it.
- The scan result itself is **returned in the JSON response** (`:114+`) and
  rendered on screen. There is no second delivery.
- `console/lib/` has exactly one mail module, `digest-email.ts`. There is no
  scan-result mailer.

**Why this is a real finding and not a nit: THIS EXACT DEFECT WAS ALREADY
FIXED ONCE, IN A DIFFERENT FILE.** `MARKETING.md` COPY v2 changed the hero
disclaimer for it and tagged the reason inline — *"(TRUTH — nothing emails the
result to the lead; the alert goes to Phin)"* — replacing *"that is where the
result goes"* with *"so we can follow up on what it found."*

**The fix landed in the marketing copy and not in the route's own error
string.** That is precisely the failure mode this shift's lock claim was
written against: *fixes land in one of two places, so grep for every instance,
not the first.* It held for the two dead hero lines and it held here.

**Note the live `content.ts` HERO.freeNote still carries the OLD wording too** —
`content.ts:100-101`: *"We ask for an email because that is where the result
goes."* COPY v2's correction is **specced and unshipped**. So the claim is live
in **two** places, not one.

**Not this org's to fix** (`boss.md`: read clinkworthy, never write there), and
**out of scope of the copy overhaul** — it is in `app/api/`, which is not even
the front-door boss's territory (`docs/org/frontdoor.md` FILE-NOT-EDIT list).
**It goes to the chief as a cascade item on its own, and it is true regardless
of anything Phin ruled this week.**

---

## R6 — "It brings back a week" (§4's How-it-works header) — BACKED, and by the safest possible route

The header *"You say one sentence. It brings back a week."* is not a new claim.
**`MARKETING.md` COPY v2 already ships "A week planned from one sentence" as an
Entry feature, tagged TRUTH** against `lib/tier.ts`'s entry capability set.
The overhaul's header is that ruled line in the active voice.

Traced one level further this shift, so it rests on code and not only on the
ruling: `console/lib/grok.ts:587` — the generation prompt asks for
*"4 distinct content-batch briefs for **this week**"*. **A week is the unit the
generator actually works in.**

**The header states NO COUNT, deliberately.** The shipped unit is 4 batch
briefs; `MARKETING.md`'s tour prototype draws a **7-day strip**, and A8 rules
**4 videos a week**. Three different numbers attach to "a week" depending on
which artifact you read — **a law-4 hazard, flagged for the chief** — and the
header avoids all of it by naming the period and not the quantity. **Any copy
that puts a number next to "a week" needs that disagreement settled first.**
