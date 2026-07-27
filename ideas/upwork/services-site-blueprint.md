# Services Website Blueprint — Second Client Channel

Spec'd 2026-07-27; build in a follow-up session. One-page site that mirrors the Upwork
catalog ladder so both channels sell the same three offers at the same prices.

## Why a site (and what it is NOT)

- **Is:** a credibility anchor + direct-booking channel for clients who find Phin via
  LinkedIn/X, referrals, or search — no Upwork fee, no platform algorithm.
- **Is not:** a way to move Upwork clients off-platform. Upwork ToS: clients you meet
  through Upwork stay on Upwork (~24 months) unless you pay the conversion fee. The two
  funnels never cross. Don't link the site from the Upwork profile.
- Also becomes the portfolio URL for proposals *outside* Upwork and the footer link on
  everything else (LinkedIn, X bio, email signature).

## Positioning

Productized AI consulting — same anti-hype voice as the Upwork profile: "I find the
process that eats your hours and automate it. If AI isn't the fix, I'll say so."
Full-time independent consultant (ex-Meta) — availability and focus are part of the
pitch. Fixed prices displayed openly (rare among consultants; instantly filters
tire-kickers and signals confidence).

## Page structure (single page + booking)

1. **Hero** — headline on the outcome, not the tech. Working angle: "Your business,
   minus the busywork." Subhead: one sentence of who this is for. CTA: "Book a fit
   call" (15 min, free). Secondary CTA: "See services & prices."
2. **Proof strip** — Ex-Meta (built an AI system serving ~35 eng teams), Accenture
   (Fortune 500 delivery), AutoFinder/Lexicon (ships solo). Logos only where usage
   rights are clear; otherwise text.
3. **Three offers** — cards mirroring the catalog exactly (Audit $250–850, Automation
   Build $1,250–4,500, Chatbot/Agent $1,000–3,500), each with the Standard tier
   spotlighted, "starting at" pricing, and a 2-line what-you-get. Same tier names as
   Upwork so cross-channel buyers recognize the offer.
4. **How it works** — the 5 project steps, generalized (intake → call → build/analyze →
   deliver → handoff). Emphasize: documented handoff, no lock-in.
5. **The honest section** — short block: "When I'll tell you not to hire me." This is
   the differentiator; it converts the skeptics who bounce off hype-y AI consultants.
6. **FAQ** — reuse the listing FAQs (confidentiality, tools, maintenance, what if
   nothing's worth automating).
7. **Booking CTA** — Cal.com (free tier, embeds cleanly) for the 15-min fit call +
   a short intake form (same 5 intake questions as the Upwork listings). Fallback:
   FormSubmit → email, same pattern as clinkworthy's waitlist.

## Stack

- Static Next.js (App Router) + plain CSS — same conventions as clinkworthy; no CMS,
  copy lives in the repo.
- Deploy: new Vercel project. Code in `services-site/` in a repo TBD at build time
  (personal-projects works; separate repo is cleaner if Vercel connects per-repo).
- Analytics: Vercel Analytics or PostHog (already used in Lexicon).

## Domain

Shortlist to check at build time (~$10–15/yr): `phinpambianchi.com` (personal brand,
never goes stale), `pambianchi.ai` (short, category signal, pricier), or a service-brand
name if one emerges. Recommendation: personal name — consultants are hired as people,
and it compounds with LinkedIn/X presence.

## Launch checklist (build session)

1. Buy domain, scaffold site, wire Cal.com + intake form, deploy on Vercel.
2. Write the 3 case-study blurbs (Meta anonymized-pattern rules from the profile doc
   apply — nothing beyond what the resume already discloses).
3. Point LinkedIn/X bios + email signature at it.
4. SEO seed (later, not launch-blocking): 3–5 pages targeting long-tail intents
   ("AI audit for small business", "automate [industry] intake", "custom RAG chatbot
   cost") — same programmatic-SEO muscle as the clinkworthy plan.

*(Former item: "confirm Meta outside-work policy" — moot as of 2026-07: Phin has left
Meta. No employer-policy blocker on the site or the Upwork profile.)*
