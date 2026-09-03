# Front door — THE COPY OVERHAUL (v2, round-2 edits applied)

STATUS: **GATE-FAILED (round 1) → ROUND-2 EDITS APPLIED, NOT RE-VERIFIED.**
**All three personas returned FAIL.** Every MUST-FIX below is applied and
marked; **no fresh verifier has run against v2, so nothing here is GATED and
nothing may cascade.** The next shift's first act is that verifier.
OWNER: GTM boss · shift 15 continuation, 2026-09-03
GATES: skeptical SMB owner · competitor's salesperson · salty journalist.
Verdicts, all verbatim: `gtm/org/reviews/2026-09-03-shift15-front-door-overhaul-three-gates.md`
BRIEF: the chief's directive at the top of `gtm/org/inbox.md`, 2026-09-04.
CODE RECEIPTS: `gtm/market/copy/front-door-overhaul-receipts.md` (R1–R8).
SUPERSEDES, where they differ: `MARKETING.md` COPY v3's waitlist block;
`content.ts` `HERO`, `PROOF_STRIP`, `PLATFORM.title`+kicker, `HOW.title`+kicker,
`BUILT_FOR.title`+kicker, the closing CTA, `META.title`, `META.description`,
`opengraph-image.tsx`. *(Scope corrected at r1 — the v1 header listed five
targets and the file changed nine. Salesperson SHOULD-FIX 5.)*
DOES NOT SUPERSEDE: `gtm/market/copy/waitlist-front-door.md` (PHIN-APPROVED).

**THE LICENCE THIS FILE STANDS ON IS ITSELF GATE-FAILED, and v1 did not say
so.** Every "may say / may not say" ruling below is quoted from
`position-v2-the-hire.md` §6.2 — **an artifact whose own header says it is
GATE-FAILED and may not be cascaded.** Its §6.2 table is the most-tested part
of it and the boss is using it as the ban list because it is the only one that
exists; **that is a choice, not a warrant.** *(Journalist MUST-FIX 9. It was
the disclosure that mattered most and it was the one that was missing.)*

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

### HERO A — "Come hire Player2." *(recommended; all three gates agreed)*

> **Kicker** YOUR NEXT HIRE
>
> # Come hire Player2.
>
> **Sub:** Your marketing employee. It writes the week's posts, publishes them
> to Instagram and Facebook, runs your Meta ads, and tells you which ones moved
> units.
>
> **Primary CTA** Start with a free scan · **Secondary** Watch it work

**Every gate named this the answer.** The salesperson: *"genuinely unattackable
as a sentence… my frame is a volume ladder; this refuses my unit and I have no
counter."* **It is Phin's line, kept, and the file says so plainly** — the
journalist's note that recommending the founder's own sentence is *"a thin
claim to an overhaul"* is fair and is not argued with.

**Four r1 corrections inside this block:** the approval clause is gone; the
kicker is no longer a three-part all-caps triad (**the device, not the nouns,
was what read as a platform** — journalist SHOULD-FIX 1) and no longer opens on
"HIRING", which one gate misread as a job ad; *"moved anything"* is restored to
**"moved units"**, which is the live copy and is more specific, not less
(journalist SHOULD-FIX 2); and **"Watch it work a week" loses "a week"** — the
tour is six demos and the extra word was an unsourced claim about it
(salesperson SHOULD-FIX 8). **The CTA order is also restored** — v1 silently
promoted the tour above the scan, a conversion change it never flagged.

### HERO B — "You've been doing two jobs."

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
in any hero to a completeness adjective.

### HERO C — REPLACED. The v1 version contradicted a Phin ruling.

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

### 3.1 THE REWRITE (round-2)

> **Kicker** THE EMPLOYEE
>
> ## H2 — Get in line for your Player2.
>
> **Sub:** Your employee will message you on a Tuesday morning — *"the reel
> from Saturday is still going. Want one more like it this week?"* — in the
> chat apps you already use. **You answer the way you answer anyone, and that
> reply is what posts it.** No app to open.
> **We're building it now.**
>
> **Form:** email · **"What do you sell, and how do you post today?"**
> *(placeholder: "Neighborhood bakery — my daughter posts when she remembers."*
> **Both carried unchanged from `MARKETING.md:182–184` — not new writing.**)
>
> **CTA:** Get in line
>
> **Under the form, in small type — the PHIN-APPROVED block, moved not
> rewritten:** *The employee isn't built yet. We're not taking money for it.
> No date, because we don't have one.*

**EIGHT r1 CORRECTIONS, each traced to the gate that forced it:**

1. **H2 → alternate 1.** *"Get first pick"* is **withdrawn**. Both the SMB
   owner and the salesperson identified it as the ordering promise
   `waitlist-front-door.md` already struck once — *"you'll be first"* — **coming
   back by synonym**, and the salesperson added the second defect: **there is
   nothing to pick.** One product, one tier. v1's defence was circular.
   *(Journalist preferred alt 2, "The employee is next"; **the SMB owner killed
   it** — "'next' is a date wearing a disguise" — and on a line about a
   dateless waitlist the owner's read wins. **Recorded as a live disagreement
   between two gates, not resolved by picking the flattering one.**)*
2. **"It asks what actually sold. It puts more behind what did." — DELETED.**
   Three separate kills: **present-tense employee** (§6.2 bars it, and v1's own
   §6 falsely claimed there was none); **it is §2.2's missing fact (c)**, the
   payback sentence, printed as though it existed; and **it rebuilt the
   ad-spend attack inside the waitlist panel** — *"it puts more money behind
   whatever you told it worked… what's the cap?"* — which is worse than the
   assembly §5 was built to prevent, because §5 was watching the hero.
   *(All three gates.)*
3. **The Tuesday question is disambiguated.** v1's *"want me to run that again
   tonight?"* is ambiguous between an organic re-post and a **paid boost** —
   *"the attack surface, not a defence."* The replacement asks for **one more
   post**, which is unambiguously organic.
4. **"that reply is the approval" → "that reply is what posts it."** v1's
   wording collided head-on with §5's *"spend always waits for a click"* — *"is
   a text message a click? Pick one."* The new wording says exactly what the
   reply does (**it posts**) and cannot be read as authorising spend.
5. **"We're building it now, and the waitlist is who we build it with." —
   SECOND CLAUSE DELETED.** The journalist: *"describes a design-partner
   program: a relationship, a cadence, someone reading your reply and coming
   back. There is no mechanism"* — and the email path is BLOCKED on Resend.
   **"We're building it now" is the whole true sentence and it survives alone.**
6. **The under-form line is DELETED and replaced by the approved block.** v1's
   *"Tell us what would make it worth hiring and it goes on the list of what it
   does"* was, in the salesperson's grading, **the biggest unbacked promise in
   the file** — a feature commitment on a backlog that is Phin's, made to every
   stranger who types in a box. **And "we read every one of these" has no read
   path**, because what the form does on submit is unbuilt.
7. **"No app to open" restored.** Phin's ruling; the gate that saw it called it
   *"the strongest four words in the document."* **Cited as a ruling, not as
   persona praise** — see correction 8.
8. **Persona reactions are no longer used as arguments anywhere in this file.**
   v1 cited gate approval three times as a reason to keep or move copy while
   §7 said personas are not evidence. *(Journalist MUST-FIX 11. Law 1.)*
   **Phin's approval is evidence and is cited as such; a persona liking a line
   is not and is now cited only as a finding, never as a warrant.**

**WHAT THE PANEL STILL DOES NOT SAY, and the reader will ask:** how often it
messages you, and what happens if you are busy that Tuesday. **§2.2 records
both as facts that do not exist.** The copy no longer implies an answer to
either — v1's version implied a cadence by staging a Tuesday and implied
consequence-free silence by never mentioning it. **Naming the gap is not the
same as closing it, and it is not closed.**

### 3.2 THE H2 ALTERNATES, with the gates' split recorded

1. **"Get in line for your Player2."** — **taken.** SMB: *"Plain, a bit cold,
   and completely true… this is the one I'd sign."*
2. *"The employee is next. Get in line."* — journalist's pick, **SMB's veto**:
   implies a schedule we do not have.
3. *"Be one of the first shops with a Player2."* — same ordering promise,
   quieter. **Refused for the same reason as "first pick."**

### 3.3 THE PRICE LINE — deleted, replaced by nothing

Two reasons, first outranking second: **§6.2 bars both halves of its phrasing**;
and the employee tier is **WAITLISTED, NOT PRICED** (§4.2, settled), so any
number beside it prices a different tier. **`$59/mo` stays sayable on the entry
surface, quoted from `pricing.ts`, exactly as today.**

**The SMB owner's objection to deleting "Nothing to pay to join" is recorded
and NOT adopted:** he said moving *"we're not taking money for it"* into small
type **buries the strongest sentence in the corpus.** **The counter, and it is
the brief:** that sentence is reassurance, and reassurance at the top of a panel
is the defensiveness Phin killed. **It is under the form, where a reader
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
