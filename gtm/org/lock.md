RELEASED 2026-09-04T15:2xZ — boss (session v7, Opus 5), shift 18, on-demand
shift fired by the chief after its 05:4x ruling. Ran 14:45Z–15:2xZ.

## WHAT LANDED

**The first live audit. This org read the product on the internet instead of
reading itself.**

- `gtm/market/live-front-door-audit-2026-09-04.md` — **NEW. DRAFT, ungated.**
  13 findings at `clinkworthy@851fad4`, graded (a) breach / (b) over-claim /
  (c) the positioning is now wrong. Both of Phin's questions answered with
  reasoning and with the objection to my own answer named.
- `gtm/org/inbox.md` — the notice, in Phin's terms: four for him, two decisions,
  five for the chief, three near-misses.
- **NOT TOUCHED, deliberately:** `front-door-strings-v1.md` (the chief closed
  it), and **the clinkworthy repo — read only, written never.**
- **Fan-out: none.** Solo. Receipt audit instead of a gate: 80 citations, 80
  resolved.

## THE NEXT SHIFT'S FIRST ACT

**Not another audit pass. Two of the thirteen findings are THIS ORG'S OWN FILE
to fix, and they need a gate this shift did not run.**

1. **F11 — `position-v2-the-hire.md:307-308` and §3.1 both say
   `channel-readiness.md` DOES NOT EXIST. It does.** The brief now hands that
   file to us as the authority on capability claims. Amending those sections is
   **a new draft of a claim-bearing sentence** and takes a gate. Do that before
   anything cites §2.1 again.
2. **F4 — `$299` names three things** (the checkout figure, the `os` tier, and a
   human-run service on `/services`) while §4.2 settles the employee tier as
   *"not for any page."* **That is a packaging decision in this org's own lane
   and no copy change can close it.** It wants a proposal, not a finding.

**Everything else on the list belongs to the front-door or build orgs and went
out as a recommendation, not a draft. Do not write their strings.**

## THE THING THIS SHIFT LEARNED, AND IT IS ABOUT THE BRIEF ITSELF

**The brief handed me a premise and the premise was wrong.** It carried the
chief's reasoning that the entry tier *"cannot publish or answer anyone."*
`lib/db/scheduled.ts:77-78` says, in the repo's own words, **"entry plans
schedule and publish by hand"** — the capability gate fires only on **arming**,
and the manual publish route has no tier gate at all.

**Nobody was careless. The tier map reads like the premise is true** —
`tier.ts:46` simply lacks `arm_auto_publish`, and the natural reading of a
missing capability called *auto publish* is "cannot publish." **The correction
lives in a comment on the chokepoint, three files away from the list.**

**So rule 1 extends one more step, and this is the shift's addition to it:
a correction to a claim-bearing sentence is a new draft — INCLUDING when the
sentence arrived in your own brief.** Shift 17 found the rule catches the gate
and catches the author. **It also catches the instruction.** The most convinced
party in the room this shift was the one that wrote the task, and its
recommendation was reasoned from a fact that the code contradicts.

**The recommendation survived the correction and got better for it.** The answer
is still "move arming to entry" — but the reason is no longer *"it cannot
publish"*, it is *"a queue you must visit to click is a place you go, and our own
test says an employee comes to you."* **A recommendation whose premise you have
re-derived is worth more than one you inherited, even when the answer does not
move.**

## WHAT THIS ORG STILL CANNOT DO

**It still cannot read `WAITLIST_ONLY` in production, and this shift declined
the one route to it** — the only external observation is a POST to a live
payment endpoint, which is an outward action. **Four shifts of pricing copy have
now been reasoned against a flag nobody in this org can see.** The next person
who can should just be asked.

**And `/proof` has never been read as a page by anyone here.** It is the surface
that carries a prospect's real numbers, it is the one place fabricated counts
would do the most damage, backlog item 33 still has no guard for that class, and
**every finding this org has ever filed about it is source-read.** A single valid
`lead`+`token` link from Phin would close that gap in one shift.
