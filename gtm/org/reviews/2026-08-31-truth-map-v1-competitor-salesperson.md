# Gate verdict — positioning-truth-map v1 — competitor's salesperson

CONFIDENTIAL — internal-audit class (law 8).

FILED BY: boss, shift 2 (2026-08-31). Independent reviewer agent, spawned at
gate time. Verdict below is the reviewer's (condensed only where tabular;
all findings preserved). Boss disposition at the end.

---

VERDICT: **PASS-WITH-NOTES**

"I came in wanting a FAIL. I sell against these people. The doc is honest
to a degree that would be suicidal on an external surface — and it knows
it's internal, labels every product ask PROPOSED, and keeps its
claimable-today list inside what the code actually enforces. I could not
catch §4 lying about the code. I caught it compressing one step, one
self-contradiction, and one answer that leans on an unapproved ruling."

## Receipts spot-check — 15 checks, ALL CONFIRMED, nothing mis-cited

agent.ts ("NO publish tool" verbatim, L4); mcp.ts ("NOT a new OS,"
`p2_live_` gating, no publish/arm/spend tools); organic-optimizer.ts
("PROPOSES, Phin applies or dismisses"); ad-optimizer.ts (approval quote +
`TOTAL_BUDGET_CAP_CENTS = 50_000`, `SCALE_STEP_CENTS = 2500`);
engagement-draft.ts (highest-stakes-prose quote + `enforceHouseVoice`);
outbound.ts ("NOTHING posts automatically" verbatim); horizon.ts (all
quotes + autoPost always false); digest.ts + api/digest route (GET only —
"no send path" admission accurate); claims.ts ~L353–386 (operator-only
recap verbatim; honest-reporting gates confirmed); claims-pure.ts L313
(planClaimApply guard verbatim); notify.ts (both quotes); onboarding-week
.ts (header + L258 email — but see edit 1: the chain starts at "Promote a
paid lead," an operator-only click, `api/leads/promote/route.ts` →
`requireOperator`; nightly backstop in `api/metrics/refresh/route.ts`
~L403 fires only for already-promoted leads); auto-publish.ts (verbatim);
mode-picker + home page (labels verbatim; ModePicker/ThreadMessages/
WeeklyDigestCard mounted); productization-v1.md (Phases 1–2 = auth + RLS,
"the long pole").

## The lines I'd weaponize, and whether they're answerable

1. "Their own audit says the employee never opens a conversation" —
   answerable (internal audit ranking exactly this gap; §4 never claims
   check-ins); also slightly false as stated: the onboarding email is the
   counterexample the artifact should exploit → edit 4.
2. "You can't text your employee" — answerable: labeled roadmap, sequenced
   with a stated structural reason; §4 forbids external use before ship.
3. "No client accounts exist — every 'your click' is their founder's
   click" — true and disclosed (§8.3), but §4's claimable-today bullet
   lacked the local qualifier → edit 3.
4. "Even they let you mute their employee" — good sales-floor answer, but
   as filed it leaned on the ritual floor, which is PROPOSED (P1,
   unruled) → edit 2 (answer must survive P1 going either way).
5. "A tool with good manners" / "quietly degrades to tool-with-digest" —
   lethal quotes if leaked; internal honesty correct per doctrine; leak
   exposure is a document-handling question (note 1).
6. "Their client never even gets the monthly report" — answered: the
   artifact receipts the code comment explaining why (client mail is the
   owner-side human's decision) — same discipline that gates spend.
7. "Their 48-hour promise has a human in the loop" — was NOT answerable
   because §2 compressed the promote click → edit 1; after the fix the
   answer is easy (concierge onboarding at founding-partner scale, bounded
   backstop).

Does the artifact arm competitors more than it has to? "No. It is
internal, gated, routing-ruled, and every damning admission is attached to
a ranked, costed fix."

Doctrine check: first-breath present; UNTESTED discipline present; no
simulated validation anywhere; receipts verified.

## REQUIRED EDITS

1. §2 48-hour row: stop compressing the operator promote step; name it and
   cite the promote route + promoted-only backstop scope.
2. §6 note (3): make the mute-attack answer independent of P1 — name the
   P1 contingency or carry the invariant-gates fallback.
3. §4 claimable-today bullet: carry the "operator-console truth" qualifier
   locally (cross-reference §8.3).
4. §2 row: "client-initiated touch" → employee-initiated client touch; Gap
   1 should acknowledge the single onboarding-only counterexample ("opens
   exactly one conversation, once, then goes silent").

## Notes (non-blocking)

- Leak surface: this file contains the most quotable self-indictments in
  the org; consider extending law 8's explicit cover to truth-map-class
  audits or a CONFIDENTIAL header.
- The approval-in-advance seam: cite positioning.md benefit 2's answer
  ("the toggle IS the click, in advance") in the §2 approvals row so the
  two docs visibly agree.
- §5 rank 4's framing is the best thing in the document; the
  suppressed-claims machinery "genuinely has no analogue in my
  (Holo-class) bag; my only sales counter is price and 'it's not shipped
  to clients yet,' which is a clock, not a moat."
- The "two controls, two names, never one widget" rule should survive into
  the build spec verbatim.

---

## Boss disposition (same shift)

All four required edits applied to `gtm/market/positioning-truth-map.md`:
(1) promote step + routes named in §2 row; (2) §6 note (3) rewritten as
two-layer answer (invariant gates + P1-contingent floor, re-file rule
stated); (3) §4 qualifier carried locally; (4) phrase corrected to
"employee-initiated client touch" and Gap 1 now states "opens exactly one
conversation, once." Non-blocking notes applied: CONFIDENTIAL header line
added (law-8 extension question flagged to chief), §2 approvals row now
cites positioning.md benefit 2's answer.
