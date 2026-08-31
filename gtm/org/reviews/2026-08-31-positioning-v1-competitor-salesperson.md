# Gate review — positioning framework v1 · persona: competitor's salesperson

DATE: 2026-08-31 · shift 1 · reviewer: independent spawned agent (Holo-rep
persona + freelance-SMM objections; spot-checked receipts against cited
sources, incl. `research-smm-landscape.md` lines 11/59/257 and
`console/app/landing/content.ts`) · artifact: `gtm/market/positioning.md`

## VERDICT: PASS-WITH-NOTES

Survives the four hard-fail criteria. UNTESTED stamps used honestly, not as
fig leaf; fact base verified to exist and say what the artifact says;
competitor characterized MORE conservatively than the internal dossier
(reviewer-sourced gaps only, spot-check caveat carried). The most dangerous
attacks (zero customers, price flip, employee accountability, freelancer
floor) are answered or explicitly disclosed and routed.

## Required edits (all applied same shift — see artifact changelog)

1. "$300–1,500 entry freelancer packages" borrowed the Clutch VERIFIED grade;
   in the source it is untagged and elsewhere "$300–500" → downgraded to
   directional/unverified with honest range.
2. `ENTRY_AVAILABLE = false` mis-cited to `lib/pricing.ts` → corrected to
   `app/landing/content.ts` (test-asserted in `landing-content.test.ts`).
3. §7 "never-sleeping engagement drafting" was a present-tense superiority
   claim for a product no customer can currently receive → gated inline
   ("shown in operator console; not yet customer-deliverable").
4. "Put the phone down" vs "every post needs your click" tension had its
   answer only in the RTB table → approval-in-advance (auto-post toggle,
   `auto-publish.ts`) surfaced in the benefits where the objection lands.
5. Holo pricing spot-check caveat carried to §2 where $12–48 first appears.
6. Benefit 3 "statistically honest reporting" is engineer catnip and
   weaponizable ("their reports admit failure") → owner-language note added;
   REWORK REQUIRED before any external surface.

## Sharpest attack lines (for the objection bank, backlog item 2)

- "They have zero customers. Zero. Ask them for one reference."
- "You can't even sign up — their own code says ENTRY_AVAILABLE = false."
- "Every post gated on your click IS the always-on burden, rebranded."
- "I'll show 200 assets shipped; they'll show a p-value apology."
- "If you weren't going to spend $500/mo anyway, $299 isn't a bargain, it's
  an invoice."
- "You're getting the drafting half of a freelancer at 60% of a
  freelancer's price."

## Adjacent risk flagged (not this artifact's violation)

The Holo dossier lives at `clinkworthy/docs/competitor-holo.md` — inside the
product repo law 8 names as a surface internal competitive material must not
reach. If that repo is or becomes client-visible, "deliberately slippery
pricing" etc. is exactly the leak law 8 exists to prevent. → Raised to the
chief via inbox.
