# Receipts read from source this shift, for the copy overhaul

CONFIDENTIAL (law 8, internal-audit class — this file audits our own claims).
OWNER: GTM boss · shift 15 continuation, 2026-09-03; **corrected and extended
at shift 16's r3 gate, 2026-09-03.**
Read from `pambianchipm/clinkworthy` @ `a996b86`, read-only clone.
**RE-VERIFIED at `ebac7d1` (2026-09-03T23:32Z) at the r3 gate**, by BOTH the
boss and the fresh verifier, independently. **`a996b86` is not an object in the
read-only clone**, so nothing could be diffed: every receipt was re-checked
**by content**. All eight held on substance; four had line drift, listed at the
foot. **Two were WRONG and are corrected below as R2′ and R4′. R9–R11 are new.**

Every row names the file and line. **This is a code read, not an artifact quote** — which
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
- ~~It says nothing about whose card the ad spend lands on, which is the SMB
  gate's actual unanswered question (*"spent on what? whose money?"*). **Still
  UNANSWERED, still barred.**~~ **← WRONG. See R2′.**

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

---

## R7 — **THE WAITLIST PHIN COMPLAINED ABOUT IS NOT ON THE INTERNET. It is a spec.**

Checked because the overhaul's §3 rewrites "the live version" and I wanted to
know what "live" meant. **It is not live.**

- `git log origin/main --oneline | grep -i "item 22\|waitlist"` on
  `pambianchipm/clinkworthy` @ `a996b86` → **no commits.**
- `grep -i waitlist console/app/landing/*.tsx` → **no matches.** The landing
  page has no waitlist section, no waitlist form, and no waitlist copy.
- What IS rendered at `#pricing` today: `console/app/landing/page.tsx:187-202`
  renders `PRICING.kicker`, `PRICING.title` and **both tier cards with live
  prices**, and `ENTRY_AVAILABLE = true` (`content.ts:56`).

**So: item 22 — the waitlist gate, which `docs/org/frontdoor.md` describes as
"mid-flight, shift 1 of 3 done" — has not merged. The two plan cards are still
up and the path to a card is still open.**

**Three consequences, and the second is the one that changes how this shift is
handed off:**

1. **Phin was reacting to `MARKETING.md` COPY v3, not to a page.** His words
   were *"the CTA join waitlist is way too like honest reading"* — that H2
   exists only in the copy spec. **Nothing needs to be un-shipped**; the
   overhaul lands in a section that has not been built yet, which is the
   cheapest possible moment to change it.
2. **The overhaul's §3 therefore rewrites a SPEC, and its §1 strike list
   rewrites LIVE code.** Those are two different cascade requests with two
   different urgencies, and this org has been treating the front door as one
   thing. **The strike list is the urgent half** — the dead lines Phin killed
   are on the internet right now; the waitlist H2 is not.
3. **`waitlist-front-door.md`'s constraint 3 gets sharper.** It records entry
   as LIVE at $59 and asks, unanswered, whether Phin wants it de-emphasised.
   **The real question is bigger: item 22 would remove the checkout entirely,
   and it is stalled.** Until it lands, the front door both leads with a
   waitlist and sells a subscription. **Still not asked of Phin. Still not
   assumed either way.**

**NOT CHECKED:** why item 22 stalled, and whether the front-door boss is
blocked on it. Visible from `docs/org/frontdoor.md` only as *"shift 1 of 3
done"*, which was written before `a996b86` and may be stale. **Not this org's
lane** — it is the build org's item and the chief's to chase.

---

## R8 — **§6.2's MANDATORY QUALIFIER USES A WORD THE BUILD ORG'S OWN TEST SUITE BANS.** For the chief; this org cannot fix it.

Checked because the SMB gate rejected *"armed in advance"* **by ear** — *"'Armed'
is a burglar alarm or a bomb… I have read that clause three times and I still
could not tell you what I'd be agreeing to."* A persona reaction is not
evidence (law 1), so I went to the code. **There is a receipt, and it is
enforced.**

| Receipt | Where | What it says |
|---|---|---|
| The banned-word list | `console/lib/__tests__/design-system.test.ts:685` | `const BANNED_WORDS = ['conductor', 'arming', 'red-teamed', 'standing watches', 'api tier', 'sweep']` |
| It is a **test**, not a guideline | same file, `:781`, `:789` | asserts `"arming a post to publish on its own"` **fails** |
| It already caught this exact word once | `console/lib/tier.ts:80-86` | *"'arming' and 'sweeps' are BANNED RENDERED WORDS (DESIGN.md glossary), and this table said both until the day something rendered it."* |

**THE PRECISE STATUS, because the technicality matters and I will not overstate
it:** the guard matches `\barming\b`. **The qualifier §6.2 mandates says
"armed", not "arming", so it would pass the test on a word ending.** It does
not pass the glossary's intent, and it did not pass a reader.

**Why this is the chief's and not mine.** `position-v2-the-hire.md` §6.2 makes
the armed-in-advance qualifier **mandatory** — the same claim without it is in
the PROHIBITED column. So the position artifact **requires** front-door copy to
render a word the product's own design glossary bans and a bakery owner cannot
parse. **That is a law-4 collision between two orgs' rulebooks, and §6.2 is a
gated artifact this org may not edit** (the same constraint §1.6 records for
its own law-4 notes).

**The boss's recommendation, for the chief to rule on:** keep the qualifier's
*meaning*, which is load-bearing and correct, and change its *words* to the
plain-English form — **"or set once, in advance, for the times you choose."**
Same mechanism (`slot.autoPost`, R1), same protection, no banned word, and it
survives being read out loud. **Not applied to §6.2 by me.**


---

## R2′ — **CORRECTION TO R2. THE RECEIPT STOPPED ONE CLAUSE SHORT OF ITS OWN ANSWER.**

Found independently by the boss and by the r3 fresh verifier, this shift.

R2 quoted `console/lib/meta-ads.ts:3` and concluded the question *"spent on
what? whose money?"* was **"Still UNANSWERED, still barred."** **The comment it
was quoting continues four lines further and answers it.** `meta-ads.ts:1-7`:

> `// Budget caps are enforced at Meta (lifetime_budget + end_time).`
> **`// Ad spend bills the workspace's OWN ad account (adAccountId on its meta`**
> **`// connection).`**

Restated at `meta-ads.ts:326`: *"Spend bills the workspace's own ad account."*

**THIS IS THE SAME CUSTODY DEFECT THE OVERHAUL CHARGES v1 WITH.** At Hero B,
v1 quoted `content.ts:82`'s comment truncated and then used the missing half as
an argument; the overhaul called that a custody defect and corrected it.
**R2 did the same thing to `meta-ads.ts`, in the receipts file whose entire
purpose is that artifacts quoting artifacts is how this org gets things
wrong** — and then propagated *"UNANSWERED"* into the overhaul's §7(i).

**What is now answered:** whose money. **What is still NOT:** the
**account-level standing ceiling**, which `position-v2` §3.2 records as RULED
and UNBUILT. **Those remain two different things.** R2's careful line on that
distinction was right and survives intact.

**Consequence for §6.2, for the chief and NOT taken by this org:** the barred
sentence *"Your ad budget is yours, set by you, and separate from the
subscription"* is barred **"NOT SAYABLE UNTIL VERIFIED."** Its first two
clauses are now verified in source (here and R11). **§6.2 is a gated artifact
this org may not edit. Recommendation: lift the bar on the verified clauses.**

## R4′ — **CORRECTION TO R4. IT STILL ASSERTED THE COUPLING §1 CORRECTED.**

R4 reads *"Ship the new hero without it and the tooling stops finding the
landing page. **Same commit or it breaks.**"* — **the exact claim the overhaul's
§1 corrected as WRONG at r1** (journalist MUST-FIX 7). `render.mjs:28`'s `SRC`
is a scratchpad path **outside the repo** and the script reads `#dc-root`; it
never touches `content.ts`.

**Re-scoped:** `render.mjs:88` is coupled to the **`.dc.html` design
prototype** (strike-list rows 10–11), **not** to the shipping code. **The
correction landed in the artifact and not in the receipt it rests on** — which
is the same one-of-two-places failure R5 exists to record. *(r3 SHOULD-FIX 4.)*

## R9 — COMMENT REPLIES ARE SHIPPED, AND NO COPY HAS EVER USED THEM

| Receipt | Where | What it says |
|---|---|---|
| Instagram reply | `console/lib/meta.ts:359` | comment **reply**, graded **SHIPPED** |
| Facebook reply | `console/lib/meta.ts:372` | comment **reply**, graded **SHIPPED** |
| The authority's own read | `docs/channel-readiness.md` | Instagram *"goes further than most competitors' 'generate and download', covering Reels, Stories, **comment replies** and metrics read-back"* |

**Used in the r3 waitlist sub** (*"answer the comments underneath them"*).
**It is the only genuinely new capability claim this overhaul adds, and it cost
nothing** — it was shipped before this org existed and every previous round
walked past it.

## R10 — THE ATTRIBUTION CLAIM IS CONDITIONAL, AND THE PRODUCT SAYS SO BETTER THAN THE COPY DOES

Checked because Hero A's ruled sub ends *"tells you which ones **moved units**."*

| Receipt | Where | What it says |
|---|---|---|
| Engagement read-back — **unconditional** | `meta.ts:420-427` | Instagram: `like_count`, `comments_count` |
| — | `meta.ts:465-471` | Facebook: likes, comments, shares |
| **Revenue tracing — CONDITIONAL** | `claims-pure.ts:386-389` | `revenueCents > 0` → *"At least $X traced this month — **walk-ins not counted**."* · else → *"**No conversions tagged to this channel this month — log sales to trace revenue.**"* |

**So the shipped product traces revenue ONLY from conversions the owner tags,
and refuses to invent a floor when there are none.** *"Moved units"*, stated
flat in a hero, promises attribution the product delivers **conditionally**.

**The phrase is not new** — it is live at `content.ts:120` and `:154` — **so it
is not struck.** But **the in-app copy is more careful than the front-door
copy**, which is the wrong way round, and the §4 Platform header states the
same idea in its unconditional form (*"tells you what worked"*, backed by the
engagement rows above). **For Phin: it is his ruled sub.** *(Overhaul §2.)*

**And it is the source of the best line in the r3 waitlist** — *"when it can
trace a sale back to a post, it'll tell you which post. When it can't, it'll
tell you that too."* **The product's honesty is a boast, not a hedge.**

## R11 — **A PER-CAMPAIGN SPEND CEILING IS BUILT, IT IS THE CUSTOMER'S CLICK, AND NO COPY SAYS SO**

| Receipt | Where | What it says |
|---|---|---|
| The gate, in its own words | `console/app/api/ads/launch/route.ts:11-14` | *"**HARD HUMAN GATE** (paid-scope rule 1): launching spends money. Requires `confirm:true` from the Ads-page button **that displayed the budget**. The conductor's `draft_ad_campaign` tool has no path here."* |
| It refuses without it | `route.ts:20-22` | no `confirm` → 400, *"Launching an ad campaign spends money — requires confirm: true."* |
| **It is the account holder's own click** | `route.ts:26,30` | `getActiveWorkspace()`, and the draft must belong to that workspace |
| **Caps re-validated AT the gate** | `route.ts:36-41` | **lifetime budget $5–$500**; **run length 1–30 days** — *"never trust the stored row alone"* |
| Whose money | `meta-ads.ts:7`, `:326` | the workspace's **own ad account** |

**`meta-ads.ts:241`'s "after Phin approves" is the single-tenant present tense
of this same gate** — the route itself is workspace-scoped.

**WHAT THIS DOES NOT ESTABLISH, stated plainly so nobody over-reads it a second
time:** it is a **per-campaign** cap. **It is NOT the account-level standing
ceiling** `position-v2` §3.2 records as RULED and UNBUILT. R2 drew that line
correctly and it holds.

**Why this matters more than any other receipt this shift.** The hire frame's
two hardest objections are *"whose money"* and *"what if it runs away."*
**Both now have specific, certain, checkable answers** — your own ad account ·
nothing launches without a click on a button showing the budget · $5–$500 a
campaign, 1–30 days. **The directive's rule was that excitement is SPECIFICITY
plus CERTAINTY. This is the most specific and certain material on the
property and no copy anywhere uses a word of it.** **Not shipped into copy by
this shift** — §6.2 governs and is the chief's. **Filed as the single
highest-value unblocked asset available to the next rewrite.**

---

## LINE DRIFT CORRECTED AT r3 (`a996b86` → `ebac7d1`) — all substance held

- R8's `tier.ts:80-86` "BANNED RENDERED WORDS" comment → **~`:102-106`**
  (`:79` now holds the downgrade comment).
- R2's four `requireCapability(ws, 'ads')` cites were the **import** lines;
  the calls are at **`meta-ads.ts:122, 331, 408, 424`**.
- Overhaul §1 row 13: `docs/org/inbox.md` 494/495/1096 → **557/558/1159**.
- Overhaul §3.0: the `MARKETING.md` ⚠ "and updates" block → **`:189`**.

**AND ONE MORE INSTANCE R5 DID NOT NAME.** R5 found the false *"we email you
the result"* claim in two places (`api/scan/route.ts:47`, `content.ts` the
`freeNote` string). **There is a third: the doc comment directly above
`freeNote`** (`content.ts` ~`:99`) — *"it takes an email because that is where
the result is sent."* **The receipt that exists to prove "grep for every
instance, not the first" found two of three.**
