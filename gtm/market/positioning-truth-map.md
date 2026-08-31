# Player 2 — positioning-truth map: what makes "AI marketing employee" TRUE

STATUS: DRAFT → IN-GATE this shift
OWNER: GTM boss · shift 2, 2026-08-31
MANDATE: Approved item 0b (Phin, 31 Aug, priority raised) — audit the
frame-of-reference-B promise (`gtm/market/positioning.md`, PHIN-APPROVED)
against the shipped product, surface by surface; rank what's missing by
employee-feel-per-build-cost.
RULED, 31 Aug (design around as settled): **the employee is the default
experience — no mode toggle. An INITIATIVE DIAL (quiet / standard /
proactive) governs how often it speaks up, never whether it is an
employee.** Serious counterarguments recorded as NOTES in §6, per Phin's
instruction — not re-litigated.
HARD RULE riding along: **the employee is always visibly AI — never a fake
human persona.** Applies to every surface proposed here (§7).
ROUTING RULE: every product ask in this file is PROPOSED only. It goes to
Phin for approval BEFORE the chief files anything to the build org's lane.
GATE: skeptical SMB owner + competitor's salesperson.

**First breath (frame-of-reference rule):** Player 2 is an AI marketing
employee for small businesses. This document is the audit of that sentence
against the code: which parts of "employee" the product already delivers,
which parts are missing for the FELT experience, and in what order to close
the gap.

**Validation provenance (law 1):** every "the product does X" claim below is
receipted to clinkworthy code or docs read this shift (31 Aug 2026, repo
read-only). Every "an owner would FEEL Y" claim is `UNTESTED` — zero real
owners have experienced any of this as an employee or otherwise. The
employee-feel rankings in §5 are build-cost-informed judgment, not measured
resonance; interviews (backlog item 5) are the test.

---

## 1. What "employee" promises (the bar to audit against)

An employee, as opposed to a tool: (a) you can talk to it and it acts;
(b) it starts conversations — it doesn't wait to be opened; (c) it has a
work rhythm you can feel (the week); (d) it brings judgment, not just
output — recommendations with reasons; (e) it's accountable — shows its
work, admits misses, asks for help when stuck. These five are the audit
axes below; they're also exactly the five candidate gaps Phin's mandate
named. `UNTESTED` that owners weight them this way — the axes come from the
mandate and from what "employee" means in ordinary usage, not from
interviews.

## 2. What already delivers employee-feel (receipts, read 31 Aug)

| Surface | What ships today | Receipt |
|---|---|---|
| **Conductor chat** | The console home IS a chat with the employee: goal in, campaign threads out, with a per-request mode chip (Auto / Plan / Build). The conductor plans against memory, drafts, schedules — and by construction cannot publish ("there is deliberately NO publish tool — the agent's reach ends at drafts") | `console/app/(app)/home/page.tsx` (thread chat, ModePicker); `console/lib/agent.ts` header |
| **Approvals queue** | Dedicated approvals surface; approval-in-advance via the Calendar's Auto-post toggle ("the conductor can never flip auto_post, only Phin's UI can") | `console/app/(app)/approvals/`; `console/lib/auto-publish.ts` header |
| **Weekly digest** | Composed from "the tables that record what we actually did"; the forward-looking line comes from the claims engine "and nowhere else"; an empty week "is a real state, not a prompt to invent one." Member-visible card on home | `console/lib/digest.ts` header; `console/app/api/digest/route.ts`; `WeeklyDigestCard` on home |
| **Monthly recap** | Immutable monthly snapshots frozen per channel; recap email composed and sent — **to the operator only** (deliberate: "mailing a client is outbound communication… a decision that is his to make") | `console/lib/claims.ts` (freeze + recap block, ~L354–386) |
| **[Apply] memory** | A published claim can be applied into agent memory as a standing preference — only a claim the engine actually proved ("Only a published claim can be applied — this one the engine declined to state") | `console/lib/claims-pure.ts` `planClaimApply` |
| **Engagement drafting** | Replies drafted under house-voice enforcement ("a reply is the highest-stakes prose this system writes per word"); outbound queue where "NOTHING posts automatically — the client's account is the asset, and the tap stays human" | `console/lib/engagement-draft.ts`; `console/lib/outbound.ts` headers |
| **Horizon Guard** | Nightly, "an empty day on the board is a defect": fills gaps as DRAFT slots from evergreen/recycle, max 2/night, "draft-then-notify, always"; novel themes go to the decision brief as suggestions | `console/lib/horizon.ts` header |
| **Optimizers (organic + ads)** | Deterministic nightly recommendations; "it PROPOSES, Phin applies or dismisses"; "no spend change without explicit approval showing the amount" | `console/lib/organic-optimizer.ts`, `console/lib/ad-optimizer.ts` headers |
| **Honest reporting** | Claims engine: registry whitelist, n floors, FDR correction, max-2 published, suppressed claims persisted WITH reasons | `console/lib/claims.ts` header (gates in `lib/trends.ts`) |
| **Failure alerting** | "The market's #1 complaint about every competitor is silent publishing failures; we alert proactively instead" | `console/lib/notify.ts` header |
| **48-hour first week** | Paid signup → first-week calendar generated, adversarially reviewed, saved UNARMED — "every slot lands needing the client's tap" — and the client is emailed "Your first week is ready." The product's ONE existing client-initiated touch, and it's onboarding-only | `console/lib/onboarding-week.ts` header + L258 (`sendEmail(clientEmail, …)`) |

**The audit's headline:** the employee's HANDS and its HONESTY are built.
What's thin is its VOICE — almost every surface above is pull (the owner
must open the console) or operator-facing. An employee you only hear from
when you walk to its desk is a tool with good manners. `UNTESTED` as
owner-felt experience, but this is the structural reading of the table.

## 3. The five gaps, assessed (not presumed)

### Gap 1 — Initiative: the employee never opens a conversation

**What exists:** all the raw material — Horizon knows the empty days,
optimizers know what to change, Pulse knows what's new, the digest composer
knows the week, `sendEmail` can reach "clients, not just the operator"
(`notify.ts`). **What's missing:** any surface where the employee INITIATES:
no proactive check-in, no "what I need from you" asks queue (photos, event
dates, a decision on a recommendation), no unprompted "your Tuesday is
empty, I drafted two options." The one recurring outbound email that exists
(monthly recap) deliberately goes to the operator, not the client.
**Build read:** composition + delivery infra exist; the build is an asks
data model + a scheduled outbound touch + dial governance. Medium-low.

### Gap 2 — Message-it-anywhere: you can't text your employee

**What exists:** chat, but only inside the console (home page threads). The
MCP door (`lib/mcp.ts`) is an operator connector, key-gated — explicitly
"NOT a new OS," and not a client channel. **What's missing:** the owner
emailing/texting "we're closed Monday, push the posts" and the conductor
acting on it. **Build read:** highest cost of the five — inbound channel
(SMS or parsed email), sender→workspace identity (depends on productization
Phase 1–2 auth/RLS, `docs/productization-v1.md`), intent routing with the
same no-publish ceiling, abuse handling. High. **Sequencing note:** this is
the most employee-FEELING interaction of all (`UNTESTED`) but it is gated
on accounts existing at all.

### Gap 3 — The weekly ritual: halves exist, the loop doesn't close

**What exists:** Horizon refills the board nightly (drafts); the digest is
composed and rendered on demand; onboarding-week already generates a full
week ("within 48h, your first-week calendar, drafted and waiting").
**What's missing:** the RITUAL — Monday: "here's your week, one tap to
approve it" pushed TO the owner; Friday: the digest ARRIVES instead of
waiting in the console. Neither email exists; the digest has no send path,
only a GET route. **Build read:** lowest cost of the five — the composers
and `sendEmail` exist; the build is two scheduled sends, a one-tap
week-approval action, and copy. Low.

### Gap 4 — The CMO layer: judgment exists, but speaks like a dashboard

**What exists:** the decision brief takes Horizon suggestions + fresh Pulse
themes; optimizers produce recommendations with rationale; [Apply] turns
proven claims into standing preferences; budget discipline is enforced
($500 lifetime cap, +$25 scale steps — `ad-optimizer.ts`). **What's
missing:** these speak as system output ("recommendations," "findings"),
not as YOUR EMPLOYEE'S advice ("I'd move Thursday's budget to the reel —
it's outperforming 3:1"); and there is no channel-mix / where-to-spend
counsel composed across organic + paid. **Build read:** mostly voice,
framing, and one composed surface over existing data. Low-medium.

### Gap 5 — Accountability: the substance is built, the confession isn't

**What exists:** the strongest differentiator in the audit — suppressed
claims persisted with reasons, digest that refuses to invent a good week,
"nothing new today" honored as a Pulse output, proactive failure alerts.
No competitor in the Holo teardown does any of this (positioning.md §5).
**What's missing:** first-person ownership on client-facing surfaces ("this
didn't work, here's what I'm changing") and a client-visible escalation
("I'm stuck on X, flagging a human") — today's alerting is operator-only.
**Build read:** low for the framing; the mechanism exists. The escalation
path needs a small real mechanism (who is "the human" a client's employee
escalates to — the operator? support?). This is also the survivability
answer to positioning.md §2's "who do I yell at" risk.

## 4. What this means for the POSITIONING (the claim-side consequences)

- **Claimable today, with receipts:** "you can message it and it acts"
  (console chat), "nothing posts or spends without your click," "it shows
  its work and won't pretend" (claims engine), "your first week is drafted
  within 48 hours." These are RTB-grade now (§2 table).
- **NOT claimable yet — label as roadmap anywhere it appears:** "it checks
  in with you," "text it like a freelancer," "your Monday plan arrives,"
  "it tells you when it's stuck." Law 2: any external surface using these
  before they ship is a gate-fail.
- **The frame's exposure:** until at least the weekly ritual + initiative
  exist, "employee" leans on the owner walking to the console. The
  positioning survives (the hands and honesty are real) but the FELT
  employee — the part Phin called the huge value prop — is §5's build list.
  `UNTESTED` where the felt threshold actually is; interviews should probe
  which of the five axes owners name unprompted.

## 5. The ranking — employee-feel-per-build-cost

| Rank | Gap | Feel (judgment, `UNTESTED`) | Build cost (from §3) | Why this order |
|---|---|---|---|---|
| 1 | **Weekly ritual** (Monday plan push + one-tap approve + Friday digest push) | High — a work rhythm is the most legible employee signal | **Low** (composers + email exist) | Cheapest large step; also the floor the dial's "quiet" must respect (§6) |
| 2 | **Initiative + asks queue** (check-ins; "what I need from you: photos, dates, decisions") | Very high — initiating is the tool/employee line | Medium-low | Rides on ritual infra; asks queue also solves the product's real need for owner inputs |
| 3 | **CMO voice** (recommendations composed as your employee's advice; channel-mix counsel) | Medium-high | Low-medium | Reframes already-built judgment; feeds slide 6 of the deck too |
| 4 | **Accountability, first person** (owns misses on client surfaces; client-visible escalation) | Medium standalone — but it's what makes ranks 1–3 SURVIVABLE | Low (framing) + small escalation mechanism | Do with ranks 1–3, not after: an employee that initiates but never owns a miss is a liability amplifier |
| 5 | **Message-it-anywhere** (SMS/email → conductor) | Highest single interaction | **High**, gated on productization Phases 1–2 | Right feature, wrong sequence — schedule behind accounts/RLS, not behind doubt |

**The shape of the answer to Phin's question:** "what would make it feel
like a CMO employee" is not one feature — it's the voice loop (ritual →
initiative → CMO voice → owned misses), buildable mostly from parts that
already exist, with message-it-anywhere as the capstone once accounts are
real.

## 6. The initiative dial (ruled — design consequences)

Settled per Phin 31 Aug: employee is the default, no mode toggle; the dial
— **quiet / standard / proactive** — governs frequency of employee-initiated
touches only.

- **What the dial governs:** check-in cadence, asks-queue nudge frequency,
  whether recommendations arrive as they're found (proactive) or batch into
  the ritual (standard/quiet).
- **What it never governs:** the approval gates (publish/spend clicks are
  invariant at every setting), the honesty machinery, and the **weekly
  ritual floor** — even "quiet" keeps Monday plan + Friday digest.
  An employee who never reports isn't a quiet employee; it's an absent one.
  This floor is a design decision this artifact proposes, for Phin's yes/no
  (§7, ask P1).
- **Do not conflate with the existing mode chip:** the console already has a
  per-REQUEST ConductorMode — Auto/Plan/Build ("Player2 decides: advise or
  build" / "Recommend only" / "Execute") on the chat composer
  (`console/components/mode-picker.tsx`). That is task scope for one
  message. The dial is a workspace-level setting about unprompted contact.
  Two controls, two names, never one widget — naming/UX collision is the
  first thing a build spec must prevent.
- **NOTES — counterarguments recorded, not re-litigated (per the ruling):**
  (1) A dial concentrates support burden into a preference surface
  ("too chatty" / "went silent") that a no-toggle default wouldn't have;
  the ritual floor caps the damage at the quiet end. (2) Defaults are
  destiny: if "standard" is tuned timid to avoid annoyance, the employee
  positioning quietly degrades to tool-with-digest — the tuning of standard
  IS the positioning, and should be treated as a launch decision, not a
  constant in code. (3) A competitor can frame the dial as "even they let
  you mute their 'employee'" — answer exists (you can ask a human employee
  to batch updates too; you can't mute the approvals), file it to the
  objection bank (backlog item 2).

## 7. Product asks — PROPOSED, awaiting Phin (routing rule: nothing goes to
the build org until he approves)

- **P1 — Ritual floor ruling:** confirm that quiet mode keeps Monday plan +
  Friday digest (the §6 floor). One yes/no; everything below inherits it.
- **P2 — The weekly ritual** (rank 1): Friday digest email send path +
  Monday "your week, one tap" proposal email with a one-tap approve action.
  Uses existing composers, `sendEmail`, and the approval model.
- **P3 — Asks queue + check-ins** (rank 2): a `asks` data model (photo
  requests, event dates, pending decisions), surfaced in console + woven
  into ritual emails; dial-governed cadence.
- **P4 — CMO voice pass** (rank 3): recommendations/decision-brief surfaces
  composed in the employee's first-person voice, always visibly AI; one new
  composed channel-mix counsel block over existing optimizer + claims data.
- **P5 — First-person accountability** (rank 4): owned-miss language on
  client-facing digest/recap surfaces; client-visible "escalated to a
  human" state — needs a decision on who receives the escalation.
- **P6 — Message-it-anywhere** (rank 5): hold until productization Phases
  1–2 land; then spec inbound email/SMS → conductor with the same
  no-publish ceiling.
- **Hard rule on all of the above:** every new employee-voiced surface
  self-identifies as AI (e.g. signed "Player 2 — your AI marketing
  employee"). No human name, no fake headshot, ever. (Claims law; also the
  lawyer-brief item on "employee" framing, positioning.md §8.3.)

## 8. Honest floor

1. Every feel/resonance judgment here is `UNTESTED` — the ranking is
   build-cost-informed argument, not evidence. Interviews (item 5) should
   test which axes owners actually name.
2. Build costs are a strategist's read of the codebase, not the build org's
   estimates; the build org may re-rank ranks 1–4 among themselves. Rank 5's
   "gated on accounts" is structural, not an estimate.
3. The product is pre-productization (no client accounts, Meta OAuth
   pending, `docs/productization-v1.md`) — every client-facing surface
   proposed here lands inside that arc, not before it.
4. "Employee" legal exposure remains unexamined (lawyer brief, Lane A) —
   nothing here changes that; §7's always-visibly-AI rule is the interim
   mitigation, not the answer.

## 9. What tests this next

- Interview probe (into item 5's kit): describe the five axes as moments
  ("it emails you Monday with the week planned…") and ask which one makes
  it feel like staff vs software — before showing any concept card.
- The dial's "standard" tuning: test reaction to sample cadences (2
  touches/week vs 5) rather than asking in the abstract.
- "Who do I yell at": test whether §3.5's escalation answer actually
  defuses the accountability objection with real owners.
