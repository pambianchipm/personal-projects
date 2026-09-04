# Front door — THE COPY OVERHAUL (v3, round-3 edits applied)

STATUS: **CLOSED — SUPERSEDED BY SHIPPED COPY.** 2026-09-04, shift 19, under
the GATE CLAIMS, NOT CRAFT doctrine (`clinkworthy@da3a061:docs/org/boss.md`).
**This file is not open work, not awaiting a round 4, and not a live copy
source.** Its contents below are UNCHANGED from the round-3 edit pass and are
kept as the record of what was tested; the header is the only thing this shift
touched. §8's retro stands and is now the most useful part of it.

> **WHAT SURVIVED.** One thing: **HERO A**, drafted here as one of three
> candidates and carried into `front-door-strings-v1.md` §1. Phin ruled it and
> then authorized it as canon, and it is live — `kicker: 'YOUR NEXT HIRE'` /
> `title: 'Come hire Player2.'` on `https://www.p2labs.ai/landing`, read
> 2026-09-04, sourced at `console/app/landing/content.ts` (`HERO`),
> `clinkworthy` `main@95db0ce`. **B and C were closed by that ruling and stay
> below as the record of what was tested, not as options.**
>
> **WHAT DID NOT SURVIVE: every other string, every section rewrite, and the
> §5 safety-band replacement.** None of it reached the site. The front-door org
> rewrote `/landing`, `/scan`, `/tour` and `/services` in the product repo on
> 3–4 Sep and shipped them; `main` auto-deploys, so merging was shipping.
> **WHERE THE SHIPPED STRINGS ACTUALLY LIVE:**
> `console/app/landing/content.ts`, `console/app/landing/tour-copy.ts`,
> `console/app/services/page.tsx`, with `docs/channel-readiness.md` and
> `docs/design/redesign-2026-09/MARKETING.md` governing them — all in
> `pambianchipm/clinkworthy`, **which this org reads and never writes.**
>
> **THE LICENCE PROBLEM THIS FILE DISCLOSED IS NOW SETTLED FROM THE OTHER
> END.** This file stood on `position-v2-the-hire.md` §6.2 while saying so in
> its own header, and it was right to flag that as a choice rather than a
> warrant. The ban list is no longer the front door's governing authority:
> `docs/channel-readiness.md` **exists** and is named by the class-2 doctrine
> as the capability authority, and `content.ts`'s own comments cite it above
> `HERO.sub`. §6.2's other prohibitions are re-examined in
> `gtm/market/position-v2-framing-v1.md` §4 rather than here.
OWNER: GTM boss · shift 16, 2026-09-03T23:35Z–2026-09-04T00:05Z (the shift crossed midnight UTC)
GATES: r1 — skeptical SMB owner · competitor's salesperson · salty journalist,
all three FAIL. r3 — **fresh verifier, run blind**, FAIL: 14 MUST-FIX,
10 SHOULD-FIX. Verdicts verbatim:
`gtm/org/reviews/2026-09-03-shift15-front-door-overhaul-three-gates.md` and
`gtm/org/reviews/2026-09-03-shift16-front-door-overhaul-r3-fresh-verifier.md`
BRIEF: the chief's directive in `gtm/org/inbox.md`, 2026-09-04.
RULED: **Phin picked HERO A** — *"yeah A is def the move."* **B and C are
CLOSED** and stay below as the record of what was tested, not as live options.
**The r3 gate did not know that** and was not told; that is why its verdict on
A is worth anything.
CODE RECEIPTS: `gtm/market/copy/front-door-overhaul-receipts.md` (R1–R9).
**Re-verified at `clinkworthy@ebac7d1`** this shift — a FRESHER commit than the
receipts' `a996b86`, which is not an object in the read-only clone, so drift
was assessed **by content, never by diff**.
SUPERSEDES, where they differ: `MARKETING.md` COPY v3's waitlist block;
`content.ts` `HERO`, `PROOF_STRIP`, `PLATFORM.title`+kicker, `HOW.title`+kicker,
`BUILT_FOR.title`+kicker, `META.title`, `META.description`,
`opengraph-image.tsx`. *(Scope corrected again at r3: the v2 header listed "the
closing CTA" as a `content.ts` target. **`content.ts` has no closing-CTA string
at all** — `grep -n "CTA" console/app/landing/content.ts` returns nothing. See
§4.)*
DOES NOT SUPERSEDE: `gtm/market/copy/waitlist-front-door.md` (PHIN-APPROVED).

**THE LICENCE THIS FILE STANDS ON IS ITSELF GATE-FAILED, and v1 did not say
so.** Every "may say / may not say" ruling below is quoted from
`position-v2-the-hire.md` §6.2 — **an artifact whose own header says it is
GATE-FAILED and may not be cascaded.** Its §6.2 table is the most-tested part
of it and the boss is using it as the ban list because it is the only one that
exists; **that is a choice, not a warrant.** *(Journalist MUST-FIX 9. It was
the disclosure that mattered most and it was the one that was missing.)*
**And this shift deviates from §6.2's MANDATORY qualifier in the open — see §5.**

**WHAT ROUND 3 FOUND, and it is the reason this file is still not GATED.**
The fresh verifier re-ran the strike list cold and **confirmed 25 in 10,
exactly** — the corrections it was sent to attack held on the thing they were
made for. It failed the file on something else: **thirteen of its fourteen
MUST-FIX are claims the file makes ABOUT ITS OWN CORRECTIONS that are not
true.** *"All four are fixed"* (two were open). *"Now true; grep-checked"* (a
grep cannot check tense). *"The ONLY approval claim on the page"* (three).
*"The copy no longer implies a cadence"* (the staged Tuesday was still there).
*"Moved not rewritten"* — of copy an owner approved, **from which a whole
clause had been deleted and nowhere recorded.**

**THE FINDING OF THIS SHIFT, and it is against the gate rather than the
draft.** The verifier's own remedy for its best catch — the 275-character meta
description that truncates before its qualifier — **was a 152-character line
reading *"Nothing posts or spends without your click"*: the unqualified form
§6.2 bars, affirmatively false against armed posting, and `PRINCIPLE` verbatim.
The correction to the correction carried the same defect as the correction.**
That is **four rounds running**. It is now the most reliable fact this org
knows about itself, and §8 is what to do about it.

**First breath (law 5):** Player2 is an **AI marketing employee** for a small
business. It happens to come with a platform. This file is the front door's
copy under that frame.

---

## 0. THE DIAGNOSIS — and the two sentences of it that are UNTESTED

The chief's finding, accepted: **the copy is not limp because it is honest. It
is limp because it is DEFENSIVE.** The two exhibits, both live:

- *"Player2 is in alpha and we're letting shops in a few at a time."*
- *"Nothing to pay to join."*

Neither is false. Both answer an objection the reader has not raised.

**The rule this file was drafted to — and BOTH HALVES OF IT ARE `UNTESTED`:**

> **`UNTESTED`:** *a sentence that pre-empts a suspicion is the sentence that
> plants it.*
> **`UNTESTED`:** *excitement is SPECIFICITY plus CERTAINTY.*

**These are copywriting maxims with no receipt, they are load-bearing for the
entire rewrite, and v1 left them unlabelled** while §7 claimed a blanket
disclosure covered them. Law 1 requires the label *"inline, everywhere it
appears"* and does not accept blankets, by its own text. *(Journalist MUST-FIX
10. Applied here and at every later restatement.)*

**The unlock, and its limit.** A waitlist is the one surface where describing
something unbuilt is fully honest — the reader knows they are waiting. **Future
tense is the format, not a hedge.** But the journalist drew the line v1 walked
over: **the waitlist frame licenses the TENSE. It does not license inventing
the MECHANISM.** §2.2 records three facts that do not exist — how often it
asks, what degrades if you do not reply, and what comes back. **v1's waitlist
paragraph wrote all three.** §3 no longer does.

**Written for a moving hero.** Phin is building a demo hero in parallel; every
H1 is short enough to sit over motion.

---

## 1. THE STRIKE LIST — CORRECTED. v1's grep was wrong, and two gates caught it.

**v1 said "14 instances in 8 files" and credited a grep with finding them. The
grep could not have found the most important one.** The live hero is
`titleTop: 'Marketing that runs'` + `titleBottom: 'while you run the shop.'` —
**two separate string literals**, so the pattern `runs while you run` cannot
match it. **Row 1 of v1's table came from the chief's directive and was
credited to a search that is structurally blind to it.**

**That is the exact defect this shift's lock claim was written against**, and
it was committed in the table that claimed to have avoided it. Both the
salesperson and the journalist found it independently. **Recorded here rather
than quietly repaired.**

**THE CORRECTED RUN.** Concat-safe pattern, every fragment searched separately:

```
grep -rnE "Marketing that runs|marketing that runs|while you run the shop|cannot hire a 5|five-person|5-person|hire a five" .
```

**→ 25 instances in 10 files** (was: 14 in 8).

| # | File | Lines | Class |
|---|---|---|---|
| 1 | `console/app/landing/content.ts` | **83, 84** *(not 82–83 — 82 is the comment)* | **SHIPS — the hero itself** |
| 2 | `console/app/landing/content.ts` | 105 `PROOF_STRIP` | **SHIPS** |
| 3 | `console/app/landing/content.ts` | 161 `BUILT_FOR.title` | **SHIPS** |
| 4 | `console/app/landing/content.ts` | 224 `META.title` | **SHIPS** |
| 5 | `console/app/landing/opengraph-image.tsx` | 12 (`alt`) | **SHIPS** |
| 6 | `console/app/landing/opengraph-image.tsx` | **90, 91** | **SHIPS — MISSED BY v1 ENTIRELY.** The OG card **paints the dead hero as two divs.** v1 listed only the `alt` string. |
| 7 | **`console/lib/__tests__/landing-content.test.ts`** | **73, 74** | **BUILD-BREAKING — MISSED BY v1 ENTIRELY.** |
| 8 | `docs/design/redesign-2026-09/MARKETING.md` | 18, 40 | Spec |
| 9 | `docs/player2-landing-design.md` | 159, 160, 192, 243 | Spec |
| 10 | `docs/design/.../Player2 Marketing.dc.html` | 44, 108 | Prototype |
| 11 | `docs/design/.../screenshots/marketing/render.mjs` | 88 | Prototype guard — **see the correction below** |
| 12 | `docs/design/.../screenshots/marketing/NOTES.md` | 87, 108 | **Historical record — LEAVE** |
| 13 | `docs/org/inbox.md` 494, 495, 1096 · `docs/org/frontdoor.md` 67 | — | **Prose about the replacement — LEAVE** |

**Plus one the corrected pattern STILL cannot match, and it is named rather
than counted:** `NOTES.md:76` reads *`H1 breaks as "Marketing that / runs while
you / run the shop."`* — broken by slashes, so no contiguous fragment hits.
Found by the salesperson by eye. **Historical class, leave it.** **A grep is a
floor, not a proof, and this line is the standing example.**

### THE REAL SAME-COMMIT COUPLING — v1 named the wrong file

**v1 said `render.mjs:88` "must change in the same commit as `content.ts`."
That is WRONG.** `render.mjs` drives the **`.dc.html` design prototype** — its
`SRC` is a scratchpad path outside the repo and it reads `#dc-root`, never
`content.ts`. It is coupled to rows 10 and 11, not to the shipping code.
*(Journalist MUST-FIX 7.)*

**The real blocker is row 7, and nobody had it until the salesperson's audit:**

```js
// console/lib/__tests__/landing-content.test.ts:70-77
test('the canon lines are on the page, unrewritten', () => {
  assert.equal(HERO.titleTop, 'Marketing that runs')
  assert.equal(HERO.titleBottom, 'while you run the shop.')
  assert.equal(PRINCIPLE, 'Nothing spends or posts without your click.')
  assert.equal(PRICING.title, 'Put the other player in.')
})
```

**`npm test` FAILS the moment the hero changes.** That test is the enforcement
arm of the `Do not rewrite` comment at `content.ts:82`, and it also **hard-locks
`PRINCIPLE`** — which matters for §5. **The build org must retire this test in
the same commit, and it needs Phin's directive quoted in the commit message,
because the test exists specifically to stop this edit.**

**Cascade note (law 3 / `boss.md`): none of these edits are this org's to make.**
This is a draft for the chief to relay. It changes nothing until the build org
builds it and Phin ships it.

---

## 2. THREE HEROES — approval claims removed from all three

**THE STRUCTURAL FIX, and it resolves the same MUST-FIX in all three gates:
NO HERO CARRIES AN APPROVAL CLAIM.** v1 put one in each — *"You approve. It
ships."*, *"before any of it goes out"*, *"before a single post goes out"* —
and **all three were the unqualified form §6.2 bars**, and the last two are
**affirmatively false** against armed slots and against `MARKETING.md:45`
(*"Autopilot: posts that pass your rules go out on your schedule, no click
needed"*). *(All three gates, MUST-FIX.)*

**The approval claim now appears ONCE on the page, fully qualified, in its own
band — §5.** One safety sentence, stated once, is also the fix for the
salesperson's law-4-inside-one-artifact finding (v1 had four different
statements of the safety model).

### HERO A — "Come hire Player2." — **RULED. This is the hero.**

**Phin, 2026-09-04: *"yeah A is def the move."*** B and C below are CLOSED.

> **Kicker** YOUR NEXT HIRE
>
> # Come hire Player2.
>
> **Sub:** Your marketing employee. It writes the week's posts, publishes them
> to Instagram and Facebook, runs your Meta ads, and tells you which ones moved
> units.
>
> **Primary CTA** Start with a free scan · **Secondary** Watch it work a week

**Every gate named this the answer, and the r3 verifier — which was never told
Phin had picked it — did not attack the line itself.** The salesperson:
*"genuinely unattackable as a sentence… my frame is a volume ladder; this
refuses my unit and I have no counter."*

**THE JOURNALIST'S DISSENT STAYS ON THE PAGE, per the chief's ruling, because
it is still true of the winner.** Of Hero B: *"the only line in the document
written by someone who has met a shop owner… fight harder for this one."*
**A is the founder's own sentence, and recommending it was, in the
journalist's words, "a thin claim to an overhaul."** That is not argued with.
**A won on being UNATTACKABLE, not on being the best-observed sentence** —
and the next rewrite should know which of those two this page bought.

**FOUR r1 CORRECTIONS INSIDE THIS BLOCK, unchanged:** the approval clause is
gone; the kicker is no longer a three-part all-caps triad (**the device, not
the nouns, was what read as a platform** — journalist SHOULD-FIX 1) and no
longer opens on "HIRING", which one gate misread as a job ad; *"moved
anything"* is restored to **"moved units"**, which is the live copy
(`content.ts:120,154`); and **the CTA order is restored** — v1 silently
promoted the tour above the scan, a conversion change it never flagged.

**ONE r1 CORRECTION REVERSED AT r3 — *"a week"* comes back.** v2 deleted it as
*"an unsourced claim about the tour — the tour is six demos."* **The shipped
tour says otherwise:** `console/app/tour/page.tsx:162` renders **"Watch one
week go out."** and `:10` describes *"one week of Player2."* **"Six demos" is a
SPEC line** (`MARKETING.md:219`) **the file never cited**, and the journalist
had already checked the shipped page and written *"The promise is honoured.
Nobody checked; I did."* **v2 overruled a gate's verified check with an
uncited spec number and recorded no split.** *(r3 MUST-FIX 13.)* **NOT
CHECKED: whether `/tour` contains six discrete scenes** — nobody has
enumerated `tour-engine.tsx`. **Either way the deletion was unsafe**, because
the string a visitor clicks says "one week".

**TWO THINGS TRUE OF THE RULED HERO THAT ARE NOT FIXED, and Phin should see
both rather than have them tidied away.**

1. **"Tells you which ones moved units" is CONDITIONAL and the hero states it
   flat.** Engagement read-back is unconditional and shipped (`meta.ts:420-427`
   likes+comments; `:465-471` likes+comments+shares). **Unit attribution is
   not.** `claims-pure.ts:386-389` traces revenue **only from conversions the
   owner tags**, and says so out loud when it cannot:
   *"No conversions tagged to this channel this month — log sales to trace
   revenue."* / *"At least $X traced this month — walk-ins not counted."*
   **The product is more careful in-app than this hero is on the front door.**
   The phrase is live copy (`content.ts:154`) and is not new, so it is not
   struck — **but it is the least defensible clause in a ruled line, and the
   §4 header states the same idea in its unconditionally-true form ("tells you
   what worked"). If one of the two shortens, it should be this one.**
   **For Phin, because it is his ruled sub and not the boss's to rewrite.**
2. **The hero asserts availability in the strings that travel alone.**
   `position-v2` §1.6's "may say TODAY" block is a **four-line unit** whose
   fourth line is *"**Coming:** your employee messages you where you already
   are. **Join the waitlist for early access.**"* **HERO A and `META.title`
   lift lines 1–2 and drop line 4.** §6.2 PROHIBITED: *"anything implying the
   employee is available today."* *(r3 MUST-FIX 10, 43.)* **`META.description`
   is fixed in §4. The HERO is NOT** — a kicker reading YOUR NEXT HIRE over
   *"Come hire Player2"* says the door is open, and **the only thing that says
   otherwise is small type under a form in a lower band** *(r3 MUST-FIX 44:
   the salesperson's assembly is still half-standing)*. **Recommendation for
   the chief, NOT applied because it edits a ruled line: the kicker becomes
   `YOUR NEXT HIRE · JOINING SOON`, or the hero band carries the waitlist
   signal.** Unresolved, and it is the largest live defect on the page.

### HERO B — "You've been doing two jobs." — **CLOSED. Kept as the record.**

> **Kicker** YOUR SECOND JOB
>
> # You've been doing two jobs.
> # Hire someone for the second one.
>
> **Sub:** Player2 is an AI marketing employee. It plans the week, writes the
> posts, publishes to Instagram and Facebook, and runs your Meta ads.
>
> **Primary CTA** Start with a free scan · **Secondary** Watch it work

**The journalist's dissent is recorded and is not overruled quietly:** *"the
only line in the document written by someone who has met a shop owner… fight
harder for this one."* **And the design objection v1 raised against it was
wrong** — `content.ts:82`'s full comment reads *"The `<br>` falls after
'runs'"*, so **the H1 slot already carries a documented two-line break.** v1
quoted that comment truncated, which is a custody defect, and then used the
missing half as a reason to demote this hero. *(Journalist SHOULD-FIX 6.)*
**B's real cost is that "two jobs" is `UNTESTED` resonance** — but so is every
line here, and the salesperson graded it **claim-safe**.

**"writes every post" → "writes the posts"**: *"every"* was the nearest thing
in any hero to a completeness adjective. *(r3 SHOULD-FIX 5: the three surfaces
said "the posts" / "the week's posts" / "your posts". **Settled on the ruled
hero's form — "the week's posts" — everywhere it appears, including
`META.description`.** B's own line is left as it was written, because B is
closed and this block is a record of what was tested.)*

### HERO C — **CLOSED. Kept as the record.** (v1's version contradicted a Phin ruling and was withdrawn at r1.)

**v1's Hero C was "Somebody else is doing your marketing on Tuesday." It is
withdrawn, not defended.** `position-v2` §0's ruled ledger: **"There is no
service tier. Nobody from Player 2 operates anybody's account"** — Phin, 3 Sep.
**v1 flagged the line as "reads as staffing" and handed it to the gate as a
taste question. It was not a taste question; it was a copy line asserting a
tier the owner has ruled does not exist**, and v1 never cited the ruling.
*(Salesperson MUST-FIX 6. The SMB owner independently: "Close the tab.")*

**The replacement, keeping what C was for — the vivid end of the range:**

> **Kicker** ONE SENTENCE IN
>
> # Tell it what you want. Read the week it wrote.
>
> **Sub:** Player2 is an AI marketing employee. You give it a goal in one
> sentence; it comes back with the week — posts written, ready for Instagram
> and Facebook, with the ads it would run behind them.
>
> **Primary CTA** Start with a free scan · **Secondary** Watch it work

**Why this one is safe where C was not:** every verb is layer 1 and shipped, it
names no actor, and it describes **the exact thing Phin's demo hero animates**
(a sentence typed, a week appearing). It is the candidate that most needs the
moving hero and does least without it.

---

## 3. THE WAITLIST — Phin's specific complaint

### 3.0 What is wrong with the version he complained about

> Kicker `EARLY ACCESS` · H2 **"Join the waitlist for early access and updates."**
> Sub: *"Player2 is in alpha and we're letting shops in a few at a time…"*
> Price line: *"Founding rate from $59/mo when you're invited. Nothing to pay to join."*

- **The H2 describes the form, not the job.** The largest type on the page
  restates the smallest promise.
- **"in alpha" and "a few at a time"** — two hedges, one sentence, both
  answering "is this real?"
- **"Nothing to pay to join"** — `UNTESTED` that nobody expects to pay; the SMB
  owner pushed back that he **has** paid a deposit for early access before.
  **v1 stated it as a fact about customers and it is not one.**

**CREDIT WHERE v1 WITHHELD IT.** v1 described COPY v3 as pure defensive mush.
**It was not** — `MARKETING.md:188` carries a ⚠ block flagging *"and updates"*
as an unkeepable promise gated on Resend, and says do not ship it. **COPY v3
caught its own trap in the paragraph v1 skipped.** *(Journalist SHOULD-FIX 5.)*

**THE LAW-4 DEFECT, unchanged and verified by two gates:** *"Founding rate from
$59/mo"* violates **two** §6.2 bans — *"founding rate" applied to $59* (A2 owns
that term) and *"from $59"*. **Live in a ruled spec.** Carried to the chief as
a standing correction, **true independent of anything Phin said this week.**

### 3.1 THE REWRITE (round-3) — Phin's original complaint, answered

**This is the surface Phin actually objected to** (*"the CTA join waitlist is
way too like honest reading… I want it to exude excitement… omg I CANT
WAIT"*), and **r2 did not answer him.** r2's H2 — *"Get in line for your
Player2."* — is the line the SMB gate called *"plain, **a bit cold**, and
completely true."* **Cold is the complaint.** The gate graded it safe; nobody
graded it against the brief.

> **Kicker** THE EMPLOYEE
>
> ## H2 — Come hire it before it's built.
>
> **Sub:** Your Player2 will message you in the chat apps you already use —
> *"the reel from Saturday is still going. Want one more like it this week?"*
> — and it will post when you reply. It'll write the week, publish to
> Instagram and Facebook, run your Meta ads, and answer the comments
> underneath them. And when it can trace a sale back to a post, it'll tell you
> which post. When it can't, it'll tell you that too. **No app to open.**
>
> **Form:** email · **"What do you sell, and how do you post today?"**
> *(placeholder: "Neighborhood bakery — my daughter posts when she remembers."*
> **Both carried unchanged from `MARKETING.md:182–184` — not new writing**,
> verified verbatim at the r3 gate.)
>
> **CTA:** Get in line
>
> **Under the form, in small type:** *The employee isn't built yet. We're not
> taking money for it. No date, because we don't have one.*

#### EVERY CLAUSE, AND WHAT BACKS IT

| Clause | Backing |
|---|---|
| "message you in the chat apps you already use" | **PHIN-APPROVED verbatim** (`waitlist-front-door.md`) |
| "it will post when you reply" | **PHIN-APPROVED verbatim**, tense restored — see correction 2 |
| "write the week" *(no count)* | R6 — `grok.ts:587` *"4 distinct content-batch briefs for this week"*; `MARKETING.md` Entry *"A week planned from one sentence"* (TRUTH) |
| "publish to Instagram and Facebook" | `docs/channel-readiness.md` — both **SHIPPED** |
| "run your Meta ads" | `docs/channel-readiness.md` — **SHIPPED** |
| **"answer the comments underneath them"** | **R9 — `meta.ts:359` (IG reply), `:372` (FB reply), both graded SHIPPED.** *(NEW. A shipped capability no copy on this property has ever used.)* |
| "when it can trace a sale back to a post… when it can't, it'll tell you that too" | **R10 — `claims-pure.ts:386-389`, the two branches verbatim** |
| "No app to open." | Phin's ruling |

#### WHAT CHANGED FROM r2, AND WHY

1. **H2: "Get in line for your Player2." → "Come hire it before it's built."**
   **This is the shift's answer to Phin, and it is the chief's diagnosis
   executed rather than described.** The old copy apologised for the employee
   being unbuilt (*"in alpha"*, *"a few at a time"*, *"nothing to pay to
   join"*); r2 stopped apologising but went quiet. **This takes the same fact
   and makes it the invitation.** It rhymes with the ruled hero, and **it is
   STRONGER on the standing constraint than r2 was**: *"before it's built"*
   **states** the door is shut, where *"get in line"* only implies it.
2. **The approved clause's TENSE is restored.** r2 wrote *"You answer the way
   you answer anyone, and **that reply is what posts it**"* — present tense,
   indicative, asserting an unbuilt mechanism as fact, **inside the panel
   whose whole licence is the future tense.** The owner's own approved
   construction is *"and **post when you reply**"*, governed by *"will"*.
   **r2's correction fixed the spend collision and left the tense worse than
   the sentence it edited.** *(r3 MUST-FIX 7, ledger 37.)*
3. **"on a Tuesday morning" is DELETED.** r2 kept the staged Tuesday **and
   simultaneously claimed to have removed it** — *"the copy no longer implies
   an answer… v1's version implied a cadence by staging a Tuesday."* The
   Tuesday was still two paragraphs above. **The illustrative message
   survives; the recurring day does not**, so no cadence is implied by
   staging. *(r3 MUST-FIX 8, ledger 38.)*
4. **"answer the comments underneath them" is ADDED.** Shipped on both
   channels since before this org existed, and named in `channel-readiness.md`
   as the thing *"Instagram in particular goes further than most competitors'
   'generate and download'"* on. **No copy has ever used it.**
5. **The traced-sale pair is ADDED, and it is the most on-brief sentence in
   the file.** It is not a hedge — **it is a behaviour, stated with
   certainty**, and the behaviour is that the employee refuses to invent a
   number. *"Excitement is SPECIFICITY plus CERTAINTY"* is the rule the
   directive gave; this is the only line on the page that gets its excitement
   from being **more** rigorous rather than less.

#### THE PHIN-APPROVED BLOCK — WHAT WAS ACTUALLY DONE TO IT

**r2 said the block was "moved not rewritten" and "is not overwritten." Both
were false.** *(r3 MUST-FIX 6, ledger 36.)* The approved block is **five**
clauses; r2 printed **three**, dismembered clause 2 into its sub, and
**deleted clause 4 outright without recording it.**

**Clause 4 is: *"Join the waitlist and we'll come to you when it's ready."***

**It stays deleted, and here is the reason, stated instead of hidden:** it
promises an outbound send, and **the email path is BLOCKED on Resend** — the
only mail module in `console/lib/` is `digest-email.ts`, and R5 establishes
there is no lead-facing mailer. **Shipping an owner-approved sentence we
cannot honour is worse than declining to ship it.** **But this is a decision
about copy an owner approved, so it is the chief's to confirm, not the boss's
to take silently** — which is exactly what r2 did.

**Clause 2 is reassembled honestly rather than dismembered:** its *"ask what
actually sold"* is **not** the phrase r1 killed. r1 killed *"It asks what
actually sold. It puts more behind what did."* — **present tense, plus an
autonomous-ad-spend clause.** The **future-tense asking** is approved copy and
was never the defect. This file's §3.1 correction 2 (r1) should not be read as
overruling `waitlist-front-door.md`; it did not, and the r3 rewrite states the
same idea in the branch the claims engine actually ships.

### 3.1a THE LIVE OBJECTION AGAINST THE NEW H2 — recorded, not answered

**"Come hire it before it's built" can be read as a RESERVATION** — that
signing up secures you the employee. That is the same family as the ordering
promise `waitlist-front-door.md` struck once already (*"you'll be first"*).
**Mitigation, and it is partial:** the approved under-form block sets the real
promise and sits directly beneath. **`UNTESTED`: that a reader takes the H2 as
an invitation rather than a guarantee. Zero owners have read it.**

**REFUSED, each against the ban it hits:**
- *"Get first pick"* / *"Be one of the first shops"* — ordering promise,
  struck once already.
- *"The employee is next."* — implies a schedule (SMB veto at r1).
- *"Hire it now. It starts when it's finished."* — *"hire it now"* implies the
  door is open. §6.2 bars it outright.

**WHAT THE PANEL STILL DOES NOT SAY, and the reader will ask:** how often it
messages you, and what happens if you are busy that Tuesday. **§2.2 records
both as facts that do not exist.** The copy no longer implies an answer to
either — v1's version implied a cadence by staging a Tuesday and implied
consequence-free silence by never mentioning it. **Naming the gap is not the
same as closing it, and it is not closed.**

### 3.2 THE H2 ALTERNATES, with the gates' split recorded

1. **"Come hire it before it's built."** — **TAKEN at r3.** Answers the brief;
   states the closed door in the H2 itself. Live objection in §3.1a.
2. *"Get in line for your Player2."* — **r2's pick, now the alternate.** SMB:
   *"Plain, a bit cold, and completely true… this is the one I'd sign."*
   **Kept as the safe fallback**: if the chief judges the reservation risk in
   alternate 1 unacceptable, this is the line to fall back to, and it costs
   the brief rather than the truth.
3. *"The employee is next. Get in line."* — journalist's pick, **SMB's veto**:
   implies a schedule we do not have. **Closed.**
4. *"Be one of the first shops with a Player2."* — ordering promise, quieter.
   **Refused for the same reason as "first pick." Closed.**

### 3.3 THE PRICE LINE — deleted, replaced by nothing

Two reasons, first outranking second: **§6.2 bars both halves of its phrasing**;
and the employee tier is **WAITLISTED, NOT PRICED** (§4.2, settled), so any
number beside it prices a different tier. **`$59/mo` stays sayable on the entry
surface, quoted from `pricing.ts`, exactly as today.**

**The SMB owner's objection to deleting "Nothing to pay to join" is recorded
and NOT adopted:** he said moving *"we're not taking money for it"* into small
type **buries the strongest sentence in the corpus.** **The counter, and it is
the brief:** that sentence is reassurance, and — **`UNTESTED`, and this is the
maxim doing its single most load-bearing piece of work in the file, which is
why r2 leaving it unlabelled here mattered (r3 ledger 45)** — reassurance at
the top of a panel is the defensiveness Phin killed. **It is under the form, where a reader
looking for the catch will find it.** *(v1 called this "same words, different
altitude" — the journalist correctly named that phrase as itself hollow. It
means: move it down the page.)*

---

## 4. SECTION HEADERS — re-checked UNDER HERO A

| Section | WAS | **NOW** |
|---|---|---|
| Proof strip | "Built for shops that cannot hire a 5-person marketing team." | **"Three posts in your voice, before you pay anything."** |
| Platform | "The marketing runtime for the shop." | **"It writes. It posts. It runs the ads. It tells you what worked."** |
| — kicker | THE PLATFORM | **THE JOB** *(was WHAT IT DOES at r2 — see below)* |
| How it works | "From a goal to a live campaign." | **"You say one sentence. It brings back a week."** *(all three gates: keep exactly)* |
| — kicker | HOW IT WORKS | **A WEEK, START TO FINISH** |
| Built for | "Shops that cannot hire a five-person team." | **"Who's writing your posts at 11pm?"** |
| — kicker | BUILT FOR | **WHO IT WORKS FOR** |
| Closing CTA | *(spec, not shipped — see below)* | **"Let it read your public pages and write you three posts. Then decide."** |
| Meta / OG title | "Player2 — marketing that runs while you run the shop" | **"Player2 — the AI marketing employee for your shop"** *(availability defect UNFIXED — §2 Hero A, point 2)* |
| Meta description | *(live, 149 chars)* | **"Player2 — an AI marketing employee for your shop. Not built yet: get in line. Writes the week's posts, publishes to Instagram and Facebook, runs your Meta ads."** *(159)* |
| Footer tagline | "the marketing OS with an operator" | **"your marketing employee"** — **RULED at COPY v2 and NOT SHIPPED in TWO live pages**: `scan/page.tsx:629` **and `scan/welcome/page.tsx:194`. *Ruled ≠ shipped, in both or neither.* |

**THE FOUR r1 REPLACEMENTS STAND** and the r3 gate confirmed their grounding:
the proof strip claims only what `HERO.freeNote` backs (`content.ts:102`) and
the withdrawn *"starts before you finish reading this page"* is correctly
killed by `scan/page.tsx:148,315` (the scan is `disabled` until a URL **and**
an email are typed); the Platform header is four shipped verbs and no
adjective, with the completeness claim and the nonexistent talking surface
both gone; *"Built for"* asserts nothing as a question; and the meta
description no longer ships the unqualified approval claim.

**FIVE r3 CORRECTIONS:**

- **THE META DESCRIPTION IS RE-ORDERED, NOT JUST SHORTENED — and the ordering
  IS the fix.** r2's ran **275 characters**; a search result renders ~155, so
  **the qualifier — the entire content of the r1 fix — was the part that got
  cut**, leaving *"…runs your Meta ads, and tells you what worked. Nothing
  post"*. *(r3 MUST-FIX 9. Best catch in the verdict.)*
  **The verifier's proposed replacement is NOT taken**, and this is the one
  place this shift overrides a MUST-FIX remedy: it reads *"Nothing posts or
  spends without your click"* — **the unqualified form §6.2 bars, `PRINCIPLE`
  verbatim, and affirmatively false against `MARKETING.md:45`'s autopilot.**
  **The remedy carried the defect it was fixing.**
  **The boss's rule instead, and it generalises: a claim that is only true
  WITH its qualifier must not be written for a medium that renders it without
  one.** So the meta description **carries no approval claim at all** — the
  safety model lives on the page, in §5, where it has room. **And the string
  is ordered so that what truncates is harmless:** *"Not built yet: get in
  line"* closes at **character 77**, safely inside any truncation, and the
  clause at risk is a channel name. **`MARKETING.md:115` rules "keep the live
  one" and this row overrides it — now cited, which r2 did not do.**
- **The footer tagline renders in TWO live pages, not one** —
  `scan/page.tsx:629` and `scan/welcome/page.tsx:194`. r2 inherited a gate's
  single-instance grep instead of re-running it, **in the file whose §1 exists
  because a grep was incomplete.** *(r3 MUST-FIX 11, ledger 39.)*
- **The closing CTA: r2's coupling note was wrong in three ways.** It said the
  string is *"two strings — both change, or neither."*
  1. **There are THREE spec strings**, not two: `MARKETING.md:114`, `:118`,
     and **`FRONTDOOR-PLAN.md:480`** — the third named for the author in the
     r1 verdict and dropped. *(r3 MUST-FIX 12.)*
  2. **`content.ts` has no closing-CTA string at all.** `grep -n "CTA"` over
     `console/app/landing/content.ts` returns nothing. **The v2 header listed
     it as a `content.ts` target.** The "WAS" column was quoting a **spec**,
     unlabelled, in a file whose §1 discipline is exactly the ships/spec
     distinction.
  3. **The one LIVE string says something else again.**
     `console/app/scan/page.tsx:280` renders **"See your business the way our
     system does."** — *"business"*, not *"shop"*, and **"our system", not
     "Player2"**. The specs disagree with each other too (`MARKETING.md:50`,
     `.dc.html:145` and `NOTES.md:122` all say *"your business"*).
     **So the live page does not carry the brand name in its own H1**, and
     this is the footer-tagline defect a second time. **For the chief.**
- **"Let it read your shop" → "your public pages".** The SMB gate said *"it
  reads my public pages, not my shop"* and r2 neither applied nor declined it.
  `HERO.freeNote` (`content.ts:102`) says **"we read your public pages."**
  *(r3 SHOULD-FIX 6.)*
- **The kicker THE PLATFORM → THE JOB** (r2 had WHAT IT DOES). Under **YOUR
  NEXT HIRE**, it states the reposition — *an employee that happens to have a
  platform* — through the page's spine rather than arguing it. Low stakes.

**ONE THING HERO A CREATES THAT r2 COULD NOT HAVE SEEN, and it is NOT fixed
here.** Hero A's sub and the Platform header now carry **the same four verbs
in the same order, twice on one page**. Neither is wrong; **together they are a
page that says its one thing twice and its second thing never.** Which one
shortens is a layout decision that depends on the moving hero Phin is building
and **this org cannot see it.** **Recommendation for the chief: shorten the
HERO sub**, because it is where the idea appears in its least defensible form
(*"moved units"*, conditional — §2), while the header's *"tells you what
worked"* is engagement read-back and unconditionally true.

**`slopCheck` — r2 discarded a check a gate had actually run.** The five
rewritten strings are run by `landing-content.test.ts:44–67`. r2 wrote *"the
build org must run that suite; this org cannot"*, deleting the salesperson's
*"I checked them; they clear today."* **Both are recorded now:** a gate checked
them and reported clear; **this org still cannot execute the suite**, and the
r3 verifier could not either (read-only clone, no install). *(r3 SHOULD-FIX 8;
r3 NOT CHECKED.)*

## 5. THE SAFETY BAND — one band, in plain English, and it is not §6.2's words

**r1's sentence failed on four counts. r2 said "all four are fixed." TWO WERE
OPEN, by the file's own text** *(r3 MUST-FIX 1, ledger 30)*:

1. **"your yes" loosened the canon word.** The SMB owner: *"'Click' is a
   specific physical act I performed. 'Yes' is anything you later decide was a
   yes."* **r2 replaced it with "until you say so" — the same softening in
   different words**, and then reported the count closed. **The gate's line was
   *"Keep 'click,' or say both and mean it"* and it was never closed.**
2. **"armed" and "slots" are not English to the reader.** *"'Armed' is a
   burglar alarm or a bomb. 'Slots' is a machine at a casino… I have read that
   clause three times and I still could not tell you what I'd be agreeing to."*
   `design-system.test.ts:685` lists `'arming'` in `BANNED_WORDS`, enforced by
   test (R8). **CLOSED and stays closed.**
3. **It did not close the ad-spend attack.** **CLOSED** at r1, at source.
4. **It left `PRINCIPLE` alive one paragraph above it.** **STILL OPEN** — §5
   itself says the `PRINCIPLE` change is *"NOT applied here"*, three paragraphs
   after claiming all four were fixed.

**AND r2 INTRODUCED TWO NEW DEFECTS IN THE COURSE OF FIXING THE OLD ONES.**

- **It was LOOSER than the shipped string it replaces.** The live
  `META.description` (`content.ts:226`) already contains the canon physical
  act — *"Nothing posts or spends without your click"* — and r2's replacement
  dropped it. *(r3 ledger 31.)*
- **"the times you choose" is UNBACKED, and r2 cited R1 as its warrant.**
  R1 verifies `slot.autoPost`. **It says nothing about time-choosing.**
  `brand-config.ts:26` supplies `DEFAULT_POST_HOURS = { X: 9, Facebook: 10,
  Instagram: 12 }` as a **default** (merged at `:105`), and `agent.ts:74`
  collects owner hours **only "if discussed."** **A safety sentence citing a
  receipt that does not cover its claim.** *(r3 MUST-FIX 2, ledger 32.)*
- **And one the r3 gate did not name: r2's qualifier attached to BOTH verbs.**
  *"Nothing posts and nothing spends until you say so — post by post, or set
  once for the times you choose"* reads, on the spend half, as **you may
  pre-authorise spend for chosen times.** **That is false.** Arming is
  posting-only (R1) and **every ad launch requires `confirm:true` at the gate,
  every time** (R11). **The correction closed a banned word and opened a false
  reading.**

**THE ROUND-3 BAND:**

> **Nothing posts and nothing spends without your click — one post at a time,
> or once, in advance, for the posts you set to go out on their own. Ads are
> never set in advance: every campaign waits for its own click, on a button
> that shows you the budget.**

| Test | Result |
|---|---|
| Canon word restored | **Yes** — "click", both halves. Closes count 1. |
| Qualifier present (§6.2 ban 1) | **Yes** — "or once, in advance…" |
| Banned word | **None.** No "arm/armed/arming", no "slots". |
| Time claim | **None made.** Closes MUST-FIX 2 without using an unreadable word. |
| Posting mechanism | R1 — `tier.ts:107` *"posting on a schedule without a click"*; `auto-publish.ts` gates on `slot.autoPost` and has no spend path |
| Spend mechanism | **R11 — `api/ads/launch/route.ts:11-14`** *"Requires `confirm:true` from the Ads-page button that displayed the budget"*; `:20-22` refuses without it; `:26,:30` scope it to the caller's own workspace |
| Readable aloud | Yes |

**THIS DEVIATES FROM §6.2's MANDATORY QUALIFIER AND SAYS SO.** §6.2 mandates
*"armed in advance for the slots you choose"*, and the r3 verifier's remedy was
to restore its word **"slots"** on the ground that it is accurate to the code.
**It is accurate. It is also the word a reader told us, on the record, they
could not parse after three attempts, and its stem is in the build org's
`BANNED_WORDS` test.** **The boss takes neither word** — not the unbacked
*"times"*, not the unreadable *"slots"* — and drops the time claim entirely.
**That is an override of a MUST-FIX remedy AND of a MANDATORY clause in a
gated artifact this org may not edit. Recorded here in the open rather than
taken quietly, and it is the chief's to rule on.** R8's recommendation stands.

**THE APPROVAL CLAIM APPEARS TWICE ON THE PAGE, NOT ONCE.** r2 said *"the ONLY
approval claim on the page"* and §6 said *"it appears once."* **It appeared
three times** — §5, the meta description (rendered into `metadata`,
`openGraph` **and** `twitter` at `layout.tsx:34–46`), and §3.1. *(r3 MUST-FIX
5, ledger 35.)* **After §4's fix it appears twice: here, and in the waitlist
panel in the FUTURE tense** (*"it will post when you reply"*). **No hero
carries one — that part of the claim was always true and is the best structural
decision of round 1.**

### THE `PRINCIPLE` COLLISION — named, not decided, and it is bigger than copy

`PRINCIPLE` = *"Nothing spends or posts without your click."* It is
**test-asserted** at `landing-content.test.ts:75`, alongside the hero.

**It is also, read strictly, the exact form §6.2 prohibits.** So the org's own
canon line and the org's own ban list contradict each other, **and a test
enforces the banned side.**

**The boss's recommendation, for the chief — NOT applied here:** `PRINCIPLE`
becomes the sentence above, and the same commit that retires the hero
assertions retires the `PRINCIPLE` assertion. **This is a spec change touching
a canon line and a test, and it is not a copy edit.** *(Journalist MUST-FIX 4;
salesperson SHOULD-FIX 3.)*

**AND THE COLLISION IS ALREADY LIVE, WORSE, IN A RULED SPEC:**
`MARKETING.md:45` sells **"Autopilot: posts that pass your rules go out on your
schedule, no click needed"** — which flatly contradicts `PRINCIPLE` **today**,
with no help from this file. **`MARKETING.md`'s own ⚠ note anticipated it:**
*"If autopilot posts without a click, the 'nothing posts' promise elsewhere
must soften to 'nothing spends'."* **Nobody actioned it.** **This is the
single most load-bearing law-4 defect on the front door and it is not this
shift's to rule.**

### Where the PHIN-APPROVED block goes — and what was done to it

**r2 said the block "is not overwritten" and was "moved not rewritten." Both
sentences were false and are deleted.** *(r3 MUST-FIX 6.)* The full accounting
is in §3.1: **five approved clauses, three printed, clause 2 reworded, clause 4
deleted.** `waitlist-front-door.md` itself is untouched and stays
PHIN-APPROVED; **this file edited it in place while claiming not to.**

**Recommendation unchanged and still a recommendation: the block moves from the
H2 slot to under the form**, where it answers the reader who goes looking for
the catch. **A decision for the chief, because it repositions and now also
shortens copy an owner approved.**

## 6. WHAT THIS FILE DOES NOT DO — corrected AGAIN, because v2's version was also false

**v1 claimed "No present-tense employee" and printed two. v2 fixed that and
then claimed things about itself that were not true either.** Three of them,
all caught at r3. **This is the third consecutive round in which this section
was the least accurate part of the file** — a list of absences is the easiest
thing to write from memory and the hardest to check, which is precisely why it
keeps failing.

- **No employee CAPABILITY in the present tense.** The employee *frame*
  ("Player2 is an AI marketing employee") **is** present tense and **is**
  licensed by §1.6's "may say today" column. Every unbuilt capability —
  messaging you, asking, replying-as-approval — is future tense and sits
  **inside the waitlist panel**.
  ***v2 said "Now true; grep-checked." It was NOT true*** — §3.1 printed *"that
  reply **is** what posts it"*, present tense, indicative — ***and a grep
  cannot check tense.*** **Crediting a grep with a check it is structurally
  incapable of is the exact error §1 exists to record, committed in the
  section that lists the file's virtues.** *(r3 MUST-FIX 3, ledger 33.)*
  **Fixed at r3 by restoring the owner's own future-tense construction**
  (*"it will post when you reply"*), and **checked by reading every copy block,
  not by grepping.**
- **No channel COMPLETENESS in the shipped-capability claims.** Instagram,
  Facebook and Meta ads, all graded SHIPPED in `docs/channel-readiness.md`.
  **Neither X nor Reddit appears in any copy block**, per §6.2.
  ***v2's version — "Instagram, Facebook and Meta ads only" — was false of its
  own §3.1***, which names a further channel class: **"the chat apps you
  already use."** The phrase is licensed (`position-v2` §2.2 property 3;
  PHIN-APPROVED) and stays. **But it has ZERO shipped members** —
  clinkworthy `backlog.md:1846-47` *"Email only… **No SMS, no chat channel, no
  push**"*, item P6 **HELD** — and the absence list said the opposite.
  *(r3 MUST-FIX 4, ledger 34.)* **A licensed claim is not an absent one.**
- **No date, no count, no cohort size, no queue position.** Checked at r3
  against every copy block. Holds.
- **No comparative claim about a competitor.** Holds.
- **No "unlimited", "seamless", "effortless", "10x", "revolution."** Holds.
- **No refund contrast**, though the owner lifted the gag: it needs **all five
  A34 clauses exactly or none**, and five clauses of a rival's refund policy is
  not front-door copy. Holds.
- **NO approval claim in ANY HERO — and that one was always true.** It is the
  best structural decision round 1 made and all three r1 gates asked for it.
  **But "it appears once, in §5" was false**: it appeared three times.
  **After §4's fix it appears TWICE** — §5, and the waitlist panel in the
  future tense. *(r3 MUST-FIX 5.)*
- **THE PAGE SHIPS A §6.2-PROHIBITED PAIR, and no previous round said so.**
  §6.2: *"'Runs your Meta ads' paired with 'armed in advance' — NOT SAYABLE as
  a pair… Ship the ceiling, or do not pair the claims."* **The page ships
  both** (Hero A's sub + §5's band). **R1 is a genuine defeater** — arming
  cannot reach spend — **but R1 promoted its own finding over a ban while R2,
  in the same file, declined to promote its finding on the ground that §6.2 is
  the chief's.** Same rule, two answers. *(r3 SHOULD-FIX 2.)* **Now disclosed;
  the chief rules.** And see R11: **a per-campaign ceiling IS built** ($5–$500
  lifetime, 1–30 days, re-validated at the gate), which is not the
  account-level standing ceiling §6.2 is asking for, but is not nothing.

## 7. NOT CHECKED

**The order is: what a READER meets first, then what an AUTHOR got wrong, then
the standing floor.** v1's floor listed eight items and every one was someone
else's fault; v2's led with the author's own errors, which was better; **r3
found that both had buried the two objections a hiring hero most invites and
neither could answer.** Those go first now.

### The objections this copy CANNOT answer — new at r3, and blocking

- (a) **ACCOUNTABILITY. "If it posts something wrong on a schedule I set once,
  who is accountable?"** The frame is *come hire*, which imports a person's
  accountability. **The copy answers this nowhere and cannot**: §6.2 bars
  *"anything about who the AI discloses itself to"* until Phin rules. **§5's
  band is the only sentence that touches it and it names the exact branch in
  which nobody looked** — the posts you set to go out on their own. Under this
  org's own bar (*a gate fails on an objection the artifact cannot answer*)
  **this is blocking, and no previous round listed it.** *(r3 MUST-FIX 14.)*
- (b) **WAGE. "I can hire a real freelancer for $299."** Correctly not
  answered — `position-v2` §7(4) bars an invented wage number (BLS 403) —
  **and incorrectly not disclosed** by two rounds, under a frame that puts the
  word *hire* in the H1. *(r3 SHOULD-FIX 1.)*
- (c) **THE AVAILABILITY ASSEMBLY IS STILL HALF-STANDING.** *"Come hire
  Player2"* at the top, *"The employee isn't built yet"* in small type under a
  form in a lower band. r1 removed the proof-strip leg and recorded the fix;
  **nobody recorded that the pair survives.** §4 fixed the meta description;
  **the HERO is not fixed** (§2, point 2), and **it is the largest live defect
  on the page.** *(r3 MUST-FIX 10, 43, 44.)*

### What the AUTHOR got wrong, this round and last

- (d) **Thirteen of r3's fourteen MUST-FIX are claims this file made ABOUT ITS
  OWN CORRECTIONS that were not true.** *"All four are fixed"*, *"Now true;
  grep-checked"*, *"the ONLY approval claim"*, *"the copy no longer implies a
  cadence"*, *"moved not rewritten"*. **None of them changed a word a reader
  sees. Every one of them told the next reader that a thing was checked when
  it was not**, which is the failure mode that costs a round every time.
- (e) **The corrections keep carrying the defect.** r1 fixed v1's hero
  approval claims and left the meta description's; r2 fixed the banned word
  and opened a false reading on spend; **and the r3 GATE's own remedy for its
  best catch restored `PRINCIPLE` verbatim.** **Four rounds. See §8.**
- (f) **v1's strike-list grep was wrong and the file credited it anyway.**
  Corrected at r1 to **25 in 10**, and **the r3 verifier re-ran it cold and
  confirmed 25 in 10 exactly** — better than the gate that forced it (the
  salesperson's competing count of 22-in-11 was wrong). **The one thing three
  rounds have made solid.**
- (g) **A gate's verified check was overruled by an uncited spec number.**
  *"a week"* was deleted on *"the tour is six demos"*; the shipped tour says
  *"Watch one week go out."* (`tour/page.tsx:162`). Restored at r3.
- (h) **Two receipts were wrong and one of them hid its own answer.** R2
  truncated `meta-ads.ts` one clause before *"Ad spend bills the workspace's
  OWN ad account"* and then wrote *"still UNANSWERED"* — **the same custody
  defect this file charges v1 with at Hero B.** R4 still asserted a coupling §1
  had corrected. **Both fixed in the receipts file; see R2′, R4′, R11.**

### The standing floor

- (i) **No owner has seen any of this. Zero interviews. Every claim about how
  it lands is `UNTESTED`** (law 1) — **including the new H2**, whose
  reservation risk (§3.1a) is a guess about a reader nobody has met.
  **Personas are not evidence and this file does not use them as arguments.**
- (j) **The ad-spend ANSWER improved this shift and is still partial.**
  **Answered:** whose money (the workspace's own ad account, `meta-ads.ts:7`),
  and the per-campaign ceiling ($5–$500 lifetime, 1–30 days, re-validated at
  the gate — R11). **Still RULED and UNBUILT:** the **account-level standing
  ceiling**. Two different things; only the first is in the code.
- (k) **What the waitlist does on submit** is a build item; the email path is
  BLOCKED on Resend. **No copy on the panel promises a send or a reply — and
  the approved clause that did (*"we'll come to you when it's ready"*) is
  deleted for that reason, now on the record (§3.1).**
- (l) **Whether entry ($59, LIVE) should be de-emphasised** — open four
  shifts, **still not asked of Phin.** **Item 22 has still not merged**,
  re-verified this shift at `ebac7d1`: `grep -ri waitlist console/app/landing/`
  returns nothing and `ENTRY_AVAILABLE = true`. The front door still both leads
  with a waitlist that does not exist and sells a subscription that does.
- (m) **Two waitlists treated as one panel** — the boss's call, not a ruling.
- (n) **The italicised chat bubble is a picture of an unbuilt product.** The
  SMB gate raised it at r1; two rounds changed its CONTENTS and neither
  addressed the OBJECT. *(r3 SHOULD-FIX 7.)* **Unresolved.**
- (o) **`slopCheck` has not been run by this org and cannot be.** A gate
  reports the five strings clear today; the r3 verifier could not execute the
  suite either (read-only clone). **The build org must run it.**
- (p) **Line numbers drift.** r3 corrected: `inbox.md` 494/495/1096 →
  **557/558/1159**; the `MARKETING.md` ⚠ block 188 → **189**; R8's `tier.ts`
  cite → **~102-106**; R2's `requireCapability` lines were the imports (calls
  at **122/331/408/424**). **All substance held.**
- (q) **`a996b86` IS NOT AN OBJECT IN THE READ-ONLY CLONE.** The r3 verifier
  could not diff the receipts' commit against `ebac7d1` and re-verified all
  eight **by content only**. All eight are true **now**; **nobody can certify
  that none drifted in substance.**
- (r) **Meta App Review status** is unknown to this org, and everything in R2
  and R11 rests on it for any account that is not ours.
- (s) **Whether Phin's demo hero animates what §2's Hero C claimed** — no
  receipt exists; the artifact is unbuilt. Hero C is closed, so it costs
  nothing now.
- (t) **NOT RE-GATED, AND THERE IS NO ROUND LEFT.** These are round-3 edits on
  a round-3 FAIL. **The 3-round budget is spent.** *(`boss.md`)* Three
  consecutive rounds found the defects were in the previous corrections.
  **Assume that is true of these edits too — but do not assume another round
  fixes it. §8 is why.**

---

## 8. THE RETRO A CAPPED LOOP REQUIRES

`boss.md`: *"3 rounds default; round 3 = fresh verifier… a capped loop gets a
retro."* **This loop is capped and it did not converge.** The retro is one
finding, and it is not "the author was careless."

**THE PATTERN, across four rounds and three different reviewers:**

| Round | Fixed | Broke in the fixing |
|---|---|---|
| v1 → r1 | approval claims out of all three heroes | left the unqualified claim in the meta description, the most syndicated string on the property |
| r1 → r2 | banned word out of §5; qualifier in | *"until you say so"* re-loosened the canon act; *"the times you choose"* cited a receipt that does not cover it; the qualifier attached to *spends* and made a false reading |
| r2 → r3 | — | **the r3 GATE's own remedy restored `PRINCIPLE` verbatim** — the unqualified form the file exists to kill |

**Three different authors, one shape.** The defect is not in anyone's care.
**It is that a correction is written under the assumption that the thing being
corrected is the only thing at risk**, and it is written by whoever is most
convinced they now understand the defect — which is the worst possible state
in which to write a safety sentence.

**WHAT THIS ORG SHOULD CHANGE, and it is cheap:**

1. **A correction to a claim-bearing sentence is a NEW DRAFT, not an edit.**
   It gets re-read against the source **as if nobody had ever checked it** —
   including corrections proposed by a gate. **The r3 remedy proves a gate's
   proposal needs the same treatment as an author's.** Nobody was checking the
   checkers, and this shift only caught it because the boss read the remedy
   against §6.2 before applying it.
2. **Never write "fixed", "now true", "checked", or "only" about your own
   work.** Write **what** was checked, **with what**, and let the next reader
   grade it. **Thirteen of fourteen MUST-FIX this round were sentences of this
   shape.** They cost a full round each time and they change nothing a reader
   sees. **This is the single highest-yield rule available to this org.**
3. **Name the tool's blind spot in the same sentence as its result.** *"Grep
   for every instance"* did not stop *"grep-checked"* being written about
   **tense**. The lock already says *a grep is a floor, not a proof*; it needs
   to say **what this particular grep could not see.**

**WHAT SHOULD HAPPEN TO THIS ARTIFACT, and the boss will not pretend it is
close.** The strike list (§1) is **solid, twice-verified, and the urgent
half** — those lines are on the internet now. **§1 can go to the chief on its
own.** The copy (§§2–5) is **better than r2 and still carries one live
blocking defect** — the hero's availability assembly (§7(c)) — **which cannot
be closed by this org because it edits a line Phin ruled.** **Recommendation:
cascade §1; hold §§2–5 for a ruling on §7(c) rather than spending a fourth
round on prose that is already close.**
