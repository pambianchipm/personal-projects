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
