# Front door — THE COPY OVERHAUL (v3, round-3 edits applied)

STATUS: **GATE-FAILED (round 3) → ROUND-3 EDITS APPLIED, NOT RE-VERIFIED.**
**THE REVIEW BUDGET IS NOW SPENT** (3 rounds, `boss.md`), so there is no
round-4 gate to lean on. **Nothing here is GATED and nothing may cascade.**
A capped loop gets a retro — it is §8.
OWNER: GTM boss · shift 16, 2026-09-03
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

## 4. SECTION HEADERS

| Section | WAS | **NOW** |
|---|---|---|
| Proof strip | "Built for shops that cannot hire a 5-person marketing team." | **"Three posts in your voice, before you pay anything."** |
| Platform | "The marketing runtime for the shop." | **"It writes. It posts. It runs the ads. It tells you what worked."** |
| — kicker | THE PLATFORM | **WHAT IT DOES** |
| How it works | "From a goal to a live campaign." | **"You say one sentence. It brings back a week."** *(all three gates: keep exactly)* |
| — kicker | HOW IT WORKS | **A WEEK, START TO FINISH** |
| Built for | "Shops that cannot hire a five-person team." | **"Who's writing your posts at 11pm?"** |
| — kicker | BUILT FOR | **WHO IT WORKS FOR** |
| Closing CTA | "See your shop the way Player2 does." | **"Let it read your shop and write you three posts. Then decide."** |
| Meta / OG title | "Player2 — marketing that runs while you run the shop" | **"Player2 — the AI marketing employee for your shop"** |
| Meta description | *(current)* | **"Player2 is an AI marketing employee. It writes your posts, publishes them to Instagram and Facebook, runs your Meta ads, and tells you what worked. Nothing posts and nothing spends until you say so — post by post, or set once for the times you choose. Start with a free scan."** |
| Footer tagline | "the marketing OS with an operator" | **"your marketing employee"** — **RULED at COPY v2 and NOT SHIPPED**: `console/app/scan/page.tsx:629` still renders the old one. *Ruled ≠ shipped.* |

**FOUR HEADERS REPLACED OUTRIGHT AT r1:**

- **The proof strip.** v1's *"the one hire you make this year that starts before
  you finish reading this page"* is **withdrawn on three counts**: nothing
  starts before you finish reading (**the scan is `disabled` until you type a
  URL *and* an email** — `scan/page.tsx:148,315`, and there is **no latency
  receipt anywhere**, law 2); it is a claim about the reader's staffing plans;
  and under a hero about hiring it attaches to **the employee, which is not
  available today** — the one thing §6.2 bars outright. **v1 flagged it and
  shipped it anyway.** The journalist's line stands: *"Flagging a line you are
  shipping is not a control; it is a note for the inquest."* **The replacement
  claims only what `HERO.freeNote` backs.**
- **The Platform header.** v1's *"It comes with a whole marketing department.
  You only ever talk to the employee."* is **withdrawn on both clauses.**
  *"A whole marketing department"* is **the completeness claim returning** —
  the directive killed a team count stated as an insult and v1 put the team
  back as a promise, **in the competitor's own unit** (*"the output of a
  team"*). *"You only ever talk to the employee"* **asserts a talking surface
  that is 0-of-4 shipped**, in the present tense, **outside the waitlist
  panel** — which is exactly the sentence §6.2 bars and the reason it gives.
  **The replacement is four shipped verbs and no adjective.**
- **Built for.** *"You are already doing this job at 11pm"* asserts a fact about
  a stranger — **invented biography, which is what this org calls a fabricated
  receipt when a competitor does it.** *(The SMB owner liked it because it was
  true of him; that is one person and it is not evidence.)* **As a question it
  keeps the recognition and asserts nothing.** *"Hand it over"* is also gone —
  it promises delegation and delivers an approval queue.
- **The meta description.** v1's shipped **the unqualified approval claim** —
  *"Nothing goes out without your approval"* — **and deleted the spend half
  entirely** while the same sentence said *"runs your Meta ads."* **All three
  gates named it the worst line in the file**, because a meta description
  travels alone into a search result or a link unfurl with no page around it.
  **The replacement carries both halves and the qualifier, in plain English.**

**ONE THING v1 CHANGED HERE AND DID NOT SAY:** the closing CTA replaces
`MARKETING.md:114`, but *"See your shop the way Player2 does"* is **two
strings** — it is also the **`/scan` idle H1** at `:118`. **Changing one and
not the other manufactures the exact divergence §1 is about.** Both change, or
neither. *(Salesperson SHOULD-FIX 6.)*

**The five rewritten strings are run by `slopCheck` in
`landing-content.test.ts:44–67`** — `PROOF_STRIP`, `PLATFORM.title`,
`HOW.title`, `BUILT_FOR.title`, `META.description`. **The build org must run
that suite; this org cannot.** *(Salesperson SHOULD-FIX 10.)*

---

## 5. THE APPROVAL SENTENCE — one sentence, once, in plain English

**v1 wrote:** *"Nothing posts and nothing spends without your yes — post by
post, or armed in advance for the posting slots you pick. Spend always waits
for a click."*

**It failed on four counts and all four are fixed:**

1. **"your yes" loosened the canon word.** The SMB owner: *"'Click' is a
   specific physical act I performed. 'Yes' is anything you later decide was a
   yes."* **A safety sentence is the one place a word may not get softer.**
2. **"armed" and "slots" are not English to the reader.** *"'Armed' is a
   burglar alarm or a bomb. 'Slots' is a machine at a casino… I have read that
   clause three times and I still could not tell you what I'd be agreeing to."*
   **And the code agrees: `console/lib/__tests__/design-system.test.ts:685`
   lists `'arming'` in `BANNED_WORDS`, enforced by test** (R8). *(The guard
   matches `\barming\b`, so **"armed" passes on a word ending** — it does not
   pass the glossary's intent and it did not pass a reader.)*
3. **It did not close the attack.** The salesperson rebuilt it from §3.1
   instead — see §3.1 correction 2, now deleted at source.
4. **It left `PRINCIPLE` alive one paragraph above it**, and `PRINCIPLE` **is**
   the banned unqualified form. **Two safety sentences on one page, one
   qualified and one not.**

**THE ROUND-2 SENTENCE — and it is the ONLY approval claim on the page:**

> **Nothing posts and nothing spends until you say so — post by post, or set
> once for the times you choose.**

Qualifier present (ban 1 closed). No banned word. Readable aloud. **Same
mechanism**: `slot.autoPost` on a posting slot, verified in code — R1.

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

### Where the PHIN-APPROVED block goes

`waitlist-front-door.md`'s block is **approved copy and is not overwritten.**
**Recommendation unchanged: it moves from the H2 slot to under the form**,
where it answers the reader who goes looking for the catch. **Flagged as a
decision for the chief, not executed as settled** — it repositions copy an
owner approved.

---

## 6. WHAT THIS FILE DOES NOT DO — corrected, because v1's version was false

**v1 claimed "No present-tense employee." That was untrue of v1's own §3.1**,
which printed two. *(Journalist MUST-FIX 5, SMB MUST-FIX 3.)* **The honest,
narrower version:**

- **No employee CAPABILITY in the present tense.** The employee *frame*
  ("Player2 is an AI marketing employee") **is** present tense and **is
  licensed** by §1.6's "may say today" column. Every unbuilt capability —
  messaging you, asking, replying-as-approval — is future tense and sits
  **inside the waitlist panel**. **Now true; grep-checked.**
- **No date, no count, no cohort size, no queue position.**
- **No channel completeness.** Instagram, Facebook and Meta ads only. **Neither
  X nor Reddit appears in any copy block**, per §6.2. *(v1 boasted about this
  in a way that printed both names in a file that cascades to a copy team;
  they now appear only in this clause.)*
- **No comparative claim about a competitor.** No "unlike other tools."
- **No "unlimited", "seamless", "effortless", "10x", "revolution."**
- **No refund contrast**, though the owner lifted the gag: it needs **all five
  A34 clauses exactly or none**, and five clauses of a rival's refund policy is
  not front-door copy.
- **No approval claim in any hero** — it appears once, in §5.

---

## 7. NOT CHECKED

**v1's floor listed eight items and every one was someone else's fault. The
journalist called it "a press release with a confession-shaped layout" and was
right.** These come first:

- (a) **v1's strike-list grep was wrong and the file credited it anyway.** 25
  instances, not 14; the pattern could not match the target line; **a
  build-breaking test was missed entirely.** Corrected in §1 **because two
  gates found it, not because the author did.**
- (b) **v1 shipped the banned unqualified approval claim in the meta
  description** — in the most syndicated string on the property — **in the same
  file whose §5 explains why that is dangerous.**
- (c) **v1's §6 absence list was false about v1.**
- (d) **This file's entire permission set is quoted from `position-v2-the-hire.md`,
  which is GATE-FAILED and may not be cascaded.** Now in the header. **The ban
  list is the best available, not an authority.**
- (e) **`position-v2` §3.1 and §7(20) assert `channel-readiness.md` DOES NOT
  EXIST.** It exists, at `docs/channel-readiness.md`, and grades **Reddit
  BLOCKED on credentials**, not NOT CHECKED. **No copy here is wrong as a
  result** — nothing names Reddit — **but §6's channel discipline rests on a
  stale reading of its own authority.** For the chief.
- (f) **`MARKETING.md:44` lists "Instagram, Facebook, X and Reddit" as Entry
  features in a live ruled spec.** **X is PARTIAL and Reddit is BLOCKED**;
  §6.2 bars both **named at all**. **v1 audited that document clause by clause,
  found the price defect 135 lines below, and never saw this.** For the chief,
  urgently — it is a live channel claim.
- (g) **The `PRINCIPLE` / `MARKETING.md:45` autopilot contradiction** (§5). Live
  today, load-bearing, and unresolved.

**And the standing ones:**

- (h) **No owner has seen any of this. Zero interviews. Every claim about how it
  lands is `UNTESTED`** (law 1). **Personas are not evidence, and this file no
  longer uses them as arguments** — corrected at r1, where v1 did.
- (i) **R1 closed v1's arming question in code** (`auto-publish.ts` has no spend
  path). **The ad-spend CEILING is still RULED and UNBUILT**, and *"spent on
  what? whose money?"* is **still UNANSWERED** — which is why the waitlist panel
  no longer mentions budget at all.
- (j) **Two gates disagree on the H2** (alt 1 vs alt 2) and the boss took the
  SMB owner's. **Unresolved by evidence; resolved by judgment, and labelled.**
- (k) **What the waitlist does on submit** is a build item; the email path is
  BLOCKED on Resend. **No copy on the panel promises a send or a reply.**
- (l) **Whether entry ($59, LIVE) should be de-emphasised** — open since
  `waitlist-front-door.md`, **still not asked of Phin.** Sharpened by R7:
  **item 22 has not merged**, so the front door today both leads with a
  waitlist and sells a subscription.
- (m) **Two waitlists treated as one panel** — the boss's call, not a ruling.
- (n) **Whether a two-line H1 works over the moving hero** (Hero B). v1 called
  this unresolvable; **`content.ts:82`'s full comment shows the slot already
  breaks across two lines**, so the objection was weaker than v1 claimed.
- (o) **Line numbers are from `a996b86`** and will drift.
- (p) **NOT RE-GATED.** These are round-2 edits on a round-1 FAIL. **No verifier
  has read v2.** Three of this org's last four gate rounds found that the
  defects were **in the previous corrections**, not the original draft.
  **Assume that is true here until someone checks.**
