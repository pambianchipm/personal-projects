# Front door — THE COPY OVERHAUL (v1, for the gate)

STATUS: **IN-GATE (round 1)** — drafted this shift, not self-passed.
OWNER: GTM boss · shift 15 continuation, 2026-09-03
BRIEF: the chief's directive at the top of `gtm/org/inbox.md`, 2026-09-04.
SUPERSEDES, where they differ: `MARKETING.md` COPY v3's waitlist H2 and sub,
`content.ts` HERO / PROOF_STRIP / PLATFORM.title / BUILT_FOR.title / META.
DOES NOT SUPERSEDE: `gtm/market/copy/waitlist-front-door.md` (PHIN-APPROVED
copy — see §5, where it is kept and where it moves).

**First breath (law 5):** Player 2 is an **AI marketing employee** for a small
business. It happens to come with a platform. This file is the front door's
copy under that frame — hero, sub, section headers, and the waitlist.

---

## 0. THE DIAGNOSIS I AM WRITING AGAINST, restated so the gate can check me

The chief's finding, and I accept it without argument: **the copy is not limp
because it is honest. It is limp because it is DEFENSIVE.**

The two exhibits, both live in the corpus today:

- *"Player2 is in alpha and we're letting shops in a few at a time."*
  (`MARKETING.md` COPY v3 waitlist sub)
- *"Nothing to pay to join."* (`MARKETING.md` COPY v3 waitlist price line)

Neither is false. Both **answer an objection the reader has not raised yet** —
"is this real?", "will you charge me?" — and a sentence that pre-empts a
suspicion is the sentence that plants it. Meanwhile **"Come hire Player 2"** is
bold, is Phin's own line, and is **completely true**. So the axis was never
honesty-vs-excitement.

**The rule I drafted to, in one line: excitement is SPECIFICITY plus
CERTAINTY.** Every hedge below was removed by making the sentence more exact,
never by making it braver than the receipt.

**The unlock I used, and the gate should hold me to it:** a waitlist is the one
surface where describing something unbuilt is fully honest, because the reader
knows by definition they are waiting. **Future tense is the format, not a
hedge.** So §3 describes the employee's Tuesday morning in detail rather than
gesturing at it. That is the one place in this file where I deliberately used
more words, not fewer.

**Written for a moving hero.** Phin is building a demo hero in parallel. Every
H1 below is short enough to sit over motion and none of them describes a
picture the demo will already be showing.

---

## 1. THE STRIKE LIST — both dead lines, every instance, closed by a grep

Chief: *"BOTH NAMED LINES ARE DEAD. Strike them everywhere."*

**Grep run against `pambianchipm/clinkworthy` @ `a996b86`** (read-only clone;
this org never writes there — `boss.md`). Pattern:
`runs while you run|cannot hire a 5|five-person|5-person`.

**14 instances in 8 files. Not 3.** The directive named three
(`MARKETING.md:18`, `content.ts:224`, `opengraph-image.tsx:12`); the grep found
eleven more, which is exactly the failure mode the inherited lock note warns
about — *fixes land in one place and not the other.*

| # | File | Line | Which line | Class |
|---|---|---|---|---|
| 1 | `console/app/landing/content.ts` | 82–83 | `titleTop`/`titleBottom` "Marketing that runs / while you run the shop." | **SHIPS — must change** |
| 2 | `console/app/landing/content.ts` | 105 | `PROOF_STRIP` "Built for shops that cannot hire a 5-person marketing team." | **SHIPS — must change** |
| 3 | `console/app/landing/content.ts` | 161 | `BUILT_FOR.title` "Shops that cannot hire a five-person team." | **SHIPS — must change** |
| 4 | `console/app/landing/content.ts` | 224 | `META.title` | **SHIPS — must change** |
| 5 | `console/app/landing/opengraph-image.tsx` | 12 | `alt` | **SHIPS — must change** |
| 6 | `docs/design/redesign-2026-09/MARKETING.md` | 18 | H1 spec | Spec — must change |
| 7 | `docs/design/redesign-2026-09/MARKETING.md` | 40 | Built-for H2 spec | Spec — must change |
| 8 | `docs/player2-landing-design.md` | 192 | proof strip | Spec — must change |
| 9 | `docs/player2-landing-design.md` | 243 | built-for H2 | Spec — must change |
| 10 | `docs/design/redesign-2026-09/Player2 Marketing.dc.html` | 44 | prototype H1 | Design file — restage |
| 11 | `docs/design/redesign-2026-09/Player2 Marketing.dc.html` | 108 | prototype H2 | Design file — restage |
| 12 | `docs/design/.../screenshots/marketing/NOTES.md` | 87, 108 | screenshot notes | **Historical record — LEAVE** |
| 13 | `docs/design/.../screenshots/marketing/render.mjs` | 88 | a **string equality test** that asserts the page carries the dead H1 | **BREAKS when #1 lands — must change in the same commit** |
| 14 | `docs/org/inbox.md` 1096, `docs/org/frontdoor.md` 67 | — | prose *about* the line being replaced | **Leave — correct as history** |

**Two findings the directive could not have known, and they are the reason the
grep was worth running:**

- **`render.mjs:88` is a guard that fails closed on the new copy.** It selects
  the landing view by `t.includes('Marketing that runs while you run the shop')`.
  Ship the new hero without touching it and the screenshot tooling stops
  finding the landing page. **It must change in the same commit as `content.ts`.**
- **`content.ts:82` carries `/** Canon (spec §4.2). Do not rewrite. */`.** The
  hero is code-commented as unrewritable. **Phin's directive outranks the
  comment**, but the comment must be *removed*, not left contradicting the file
  under it. `waitlist-front-door.md` NOT-CHECKED (ii) flagged this and it is
  now answered: the owner has ordered the rewrite.

**Cascade note (law 3 / `boss.md`): none of these edits are this org's to make.**
This is a draft for the chief to relay to the front-door boss. It changes
nothing until they build it and Phin ships it.

---

## 2. THREE HEROES — the chief asked for alternatives, not a pick

All three are built on the same reposition: **not a marketing platform. An AI
employee that happens to have a platform.** None names a price, a date, a
count, a competitor, or a channel we cannot post to.

### HERO A — "Come hire Player 2." *(Phin's own line, and my recommendation)*

> **Kicker** HIRING · WRITING · POSTING
>
> # Come hire Player 2.
>
> **Sub:** Your marketing employee. It writes the week's posts, publishes them
> to Instagram and Facebook, runs your Meta ads, and tells you which ones
> actually moved anything. You approve. It ships.
>
> **Primary CTA** Watch it work a week · **Secondary** Start with a free scan

**Why A.** It is the only one of the three where **the H1 is a command to the
reader and every word of it is already true** — the chief's own read, and I
agree with it. Four words, so a moving hero can carry it. "Come" does the
excitement; "hire" does the reposition; there is no adjective anywhere.

### HERO B — "You've been doing two jobs." *(the reader's line, not ours)*

> **Kicker** YOUR SECOND JOB
>
> # You've been doing two jobs.
> # Hire someone for the second one.
>
> **Sub:** Player 2 is an AI marketing employee. It plans the week, writes
> every post, publishes to Instagram and Facebook, and runs your Meta ads —
> and it hands the work back to you before any of it goes out.
>
> **Primary CTA** Watch it work a week · **Secondary** Start with a free scan

**Why B.** The only candidate that opens **inside the owner's head instead of
inside our product.** It is also the direct replacement for the dead "cannot
hire a 5-person team" line: same insight, no self-pity, no naming of what they
cannot afford. **Its risk is length under a moving hero** — two lines of H1
over motion is a design constraint I cannot resolve from here.

### HERO C — "Your Tuesday, with a marketing employee." *(the vivid one)*

> **Kicker** MEET YOUR PLAYER 2
>
> # Somebody else is doing your marketing on Tuesday.
>
> **Sub:** Player 2 writes the week, publishes to Instagram and Facebook, and
> runs your Meta ads. The whole week lands in front of you before a single
> post goes out. You tap approve. It handles the rest.
>
> **Primary CTA** Watch it work a week · **Secondary** Start with a free scan

**Why C, and why I did not recommend it.** It is the most *felt* of the three
and it is the one that pairs best with a demo hero, because the demo is a
Tuesday. **But "somebody else is doing your marketing" is the sentence closest
to a claim** — it reads as staffing, and the SMB gate is the right check on
whether that tips. I brought it because the chief asked for a range and this is
the far end of it.

**All three drop the kicker "ORGANIC · PAID · OPTIMIZE"**, which is three
category nouns describing a platform — the exact frame the directive retires.

---

## 3. THE WAITLIST — Phin's specific complaint, rewritten

### 3.0 What is wrong with the live version, clause by clause

Current (`MARKETING.md` COPY v3, Phin-ruled 3 Sep, now superseded by his own
newer directive):

> Kicker `EARLY ACCESS` · H2 **"Join the waitlist for early access and updates."**
> Sub: *"Player2 is in alpha and we're letting shops in a few at a time. Tell us
> what you sell and we'll invite you when there's room for your kind of shop."*
> Price line: *"Founding rate from $59/mo when you're invited. Nothing to pay to join."*

- **The H2 describes the form, not the job.** "Join the waitlist" is what the
  button does. Putting it in the headline spends the largest type on the page
  restating the smallest promise.
- **"in alpha" and "a few at a time"** — two hedges in one sentence, both
  answering "is this real?", which nobody asked.
- **"Nothing to pay to join"** — the purest example in the corpus. Nobody
  expects to pay to join a waitlist.

**AND A LAW-4 DEFECT I FOUND WHILE READING IT, which is not a style note:**
the price line **"Founding rate from $59/mo"** violates **two separate bans in
`position-v2-the-hire.md` §6.2** — *"the phrase 'founding rate' applied to $59
— A2 owns that term"* and *"'from $59'"*, both in the PROHIBITED column.
**It is live in the ruled copy spec.** It comes out below regardless of which
H2 is picked, and **the chief should carry it to the front-door boss as a
correction, not as part of this overhaul** — it is true independent of anything
Phin said this week.

### 3.1 THE REWRITE (recommended)

> **Kicker** YOUR PLAYER 2
>
> ## H2 — Get first pick of your Player 2.
>
> **Sub:** Your employee will message you on a Tuesday morning: *"the reel from
> Saturday did the numbers — want me to run that again tonight?"* You answer
> the way you answer anyone, in the chat apps you already use, and that reply
> is the approval. It asks what actually sold. It puts more behind what did.
> **We're building it now, and the waitlist is who we build it with.**
>
> **Form:** email · **"What do you sell, and how do you post today?"**
> *(placeholder: "Neighborhood bakery — my daughter posts when she remembers.")*
>
> **CTA:** Get in line
>
> **Under the form:** We read every one of these. Tell us what would make it
> worth hiring and it goes on the list of what it does.

**What each move is doing, so the gate can attack the reasoning and not just
the words:**

- **The H2 names a benefit that is certain and specific instead of the
  mechanism.** "First pick" is true of a list you are early on and it does not
  promise an order, a date, or a rate — the three things `waitlist-front-door.md`
  struck at r1. It is the same ask; it just pays the reader instead of the form.
- **Future tense used as format.** *"will message you"* is not a hedge here.
  The reader is on a waitlist; that is what waitlists are.
- **The Tuesday sentence is the whole unlock.** It is the concrete thing the
  org has been gesturing at for four shifts, and every clause traces:
  the surface is *"the chat apps you already use"* (**required exactly** — §6.2
  bars "where you already text" as iMessage-by-paraphrase); *a reply is the
  approval* is Phin's ruling and the gate's *"strongest four words in the
  document"*; *"asks what actually sold"* is §2.2 property 4 and **is answerable
  in one tap**, which §2.2 requires of every question we print.
- **"We're building it now, and the waitlist is who we build it with"**
  replaces both hedges with one certain sentence. It says the same thing
  ("not ready") as an invitation rather than an apology, and it is exactly as
  true.
- **"Nothing to pay to join" and "in alpha" and "a few at a time" are gone**,
  and no substitute for any of them was written.
- **The under-form line stops reassuring and starts promising a response.**
  It is a commitment the org can keep with zero infrastructure — reading is
  not sending. It carefully does **not** promise a reply email; see §5.

### 3.2 ALTERNATE H2s, if "first pick" reads as an ordering promise

The SMB gate is the right judge of this and I expect it to push. In descending
order of my confidence:

1. **"Get in line for your Player 2."** — plainest; keeps the possessive.
2. **"The employee is next. Get in line."** — leads on the thing, not the queue.
3. **"Be one of the first shops with a Player 2."** — closest to the live
   version's meaning with none of its hedging.

**Not recommended: "Join the waitlist for early access."** It is what is there
now, minus two words, and it is the sentence Phin complained about.

### 3.3 THE PRICE LINE — replaced, not deleted

Current: *"Founding rate from $59/mo when you're invited. Nothing to pay to join."*

**Replacement:** — nothing. **Delete the line and print no price on the
waitlist panel.**

Two reasons, and the first outranks the second: (a) **§6.2 bars both halves of
its phrasing**, and (b) the employee tier is **WAITLISTED, NOT PRICED**
(§4.2, settled) — so any number next to it is a number for a different tier
sitting under a headline about this one. **`$59/mo` remains sayable on the
entry surface, quoted from `pricing.ts`, exactly as it is today.**

---

## 4. SECTION HEADERS — the platform stops being the subject

Every header below moves the sentence's subject from *the software* to *the
employee doing the work*. Each is paired with the line it replaces.

| Section | WAS | **NOW** |
|---|---|---|
| Proof strip | "Built for shops that cannot hire a 5-person marketing team." | **"The one hire you make this year that starts before you finish reading this page."** |
| Platform | "The marketing runtime for the shop." | **"It comes with a whole marketing department. You only ever talk to the employee."** |
| — kicker | THE PLATFORM | **WHAT IT COMES WITH** |
| How it works | "From a goal to a live campaign." | **"You say one sentence. It brings back a week."** |
| — kicker | HOW IT WORKS | **A WEEK, START TO FINISH** |
| Built for | "Shops that cannot hire a five-person team." | **"You are already doing this job at 11pm. Hand it over."** |
| — kicker | BUILT FOR | **WHO IT WORKS FOR** |
| Closing CTA | "See your shop the way Player2 does." | **"Let it read your shop and write you three posts. Then decide."** |
| Meta / OG title | "Player2 — marketing that runs while you run the shop" | **"Player2 — the AI marketing employee for your shop"** |
| Meta description | *(current)* | **"Player2 is an AI marketing employee. It writes your posts, publishes them to Instagram and Facebook, runs your Meta ads, and tells you what worked. Nothing goes out without your approval. Start with a free scan."** |
| Footer tagline | "the marketing OS with an operator" | **"your marketing employee"** *(already ruled COPY v2; this file only notes that the reposition finally agrees with it)* |

**The proof strip is the header I am least sure of** and I am saying so before
a persona does: *"starts before you finish reading this page"* is a claim about
the **scan**, and it is true of the scan (it reads public pages and writes three
posts, no card — `content.ts` HERO.freeNote). But it sits under a hero about
**hiring an employee**, and a reader may attach it to the employee, which is
**not available today** — the one thing §6.2 bars outright. **Flagged into the
gate rather than defended.**

---

## 5. THE APPROVAL SENTENCE — and the one trap I had to route around

`PRINCIPLE` is canon and stays: **"Nothing spends or posts without your click."**

But §6.2 sets two constraints that **collide** on a page that says both "runs
your Meta ads" and anything about approval:

- The claim *without* the armed-in-advance qualifier is **prohibited** (it
  invites *"so it does post without me"*).
- *"Runs your Meta ads"* paired *with* "armed in advance" is **also
  prohibited** — because the owner-facing spend ceiling is **RULED and
  UNBUILT**, so a reader can assemble "they run my ad account, I can
  pre-approve, and there is no cap" from our own two sentences.

**Naming the collision rather than picking a side and hoping:** the arming
mechanism (`Calendar` → Auto-post) applies to **posting slots**. It is not a
spend mechanism. So the sentence that satisfies both bans is the one that says
so out loud:

> **Nothing posts and nothing spends without your yes — post by post, or armed
> in advance for the posting slots you pick. Spend always waits for a click.**

That carries the qualifier (ban 1 satisfied) and makes the dangerous assembly
impossible to build (ban 2's actual concern closed), and it agrees with the
shipped line `MARKETING.md` already prints: *"On both plans, nothing spends
without your click."*

**This sentence is the single highest-risk item in this file and I am putting
it to the gate as a question, not a conclusion.** If the salesperson gate can
still assemble the ad-cap attack from it, **the fallback is to drop "runs your
Meta ads" from the hero sub** and let it live in the Platform section, away
from any approval language. Heroes A, B and C all survive that edit.

### Where the PHIN-APPROVED waitlist block goes

`waitlist-front-door.md`'s block is **approved copy and I am not overwriting
it.** It was praised by both gates and by Phin, and its strongest clause —
*"it isn't built yet, and we're not taking money for it"* — is **not the
defensive register the chief diagnosed**; it is a plain statement about the
thing itself, which is what the directive asks for.

**My recommendation: it moves from the H2 slot to the panel's footing**, under
the form, in small type, where it does the reassurance work for the reader who
scrolls looking for the catch — instead of being the first thing shouted at
the reader who has not yet looked for one. **Same words, different altitude.**

**I am flagging this as a decision for the chief and NOT executing it as
settled**, because it edits the placement of copy an owner has approved.

---

## 6. WHAT I DELIBERATELY DID NOT WRITE

Named so the gate checks for absence, not just presence:

- **No date, no count, no cohort size, no "X shops on the list."**
- **No channel completeness.** Instagram, Facebook and Meta ads only.
  **X and Reddit are not named anywhere in this file** (§6.2 bars both). TikTok
  and Google Ads appear nowhere — I did not even use the licensed *"TikTok and
  Google Ads are coming"*, because on a hero it reads as a roadmap promise
  where it is currently a channel-readiness fact.
- **No comparative claim about Holo or Viktor**, and no "unlike other tools."
- **No present-tense employee.** Every employee capability is future tense and
  sits inside the waitlist panel, which is the surface where that is the format.
- **No "unlimited", no "seamless", no "effortless", no "10x", no "revolution."**
- **No refund contrast**, though the owner lifted law 8's gag on it. It needs
  **all five A34 clauses exactly or none**, and five clauses of a competitor's
  refund policy is not front-door copy. It belongs in the seller's hands.

---

## 7. NOT CHECKED

- (i) **No owner has seen any of this. Zero interviews have run.** Every claim
  about how this lands is `UNTESTED` (law 1). The gates below are personas and
  personas are not evidence.
- (ii) **I did not verify the arming mechanism in code this shift.** §5 rests on
  the truth map's record of the Calendar Auto-post toggle, quoted in
  `position-v2-the-hire.md` §1.6 — **a read of an artifact, not of
  `console/lib/`.** If arming can be applied to ad spend, §5's sentence is
  wrong and the fallback in §5 is the answer.
- (iii) **Whether the hero can carry two lines of H1** (Hero B) over Phin's
  moving demo. Design call, not mine.
- (iv) **Whether "first pick" survives an SMB owner.** It is the one word in §3
  doing real lifting and the alternates in §3.2 exist because I expect a fight.
- (v) **What the waitlist does on submit** is still a build item, unchanged
  from `waitlist-front-door.md` NOT CHECKED (iv). **§3.1's under-form line
  promises reading, not replying, for exactly this reason** — the email path is
  BLOCKED on Phin's Resend setup and nothing may promise a send.
- (vi) **Whether entry ($59, LIVE today) should be de-emphasised** under a
  front door that leads with the employee. Open since `waitlist-front-door.md`
  constraint 3 and **still not asked of Phin.**
- (vii) **Two waitlists exist in the corpus** — item 22's product-wide alpha
  gate and the employee-tier waitlist — and this file **treats them as one
  panel** because the front door now leads with the hire. **That is my call,
  not a ruling**, and if the chief wants them separate, §3 is the employee one
  and item 22's needs its own H2.
- (viii) **The strike list's line numbers are from `a996b86`** and will drift.
