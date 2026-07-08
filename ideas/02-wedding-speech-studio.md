# Idea #2 Deep Dive — Wedding Speech & Toast Studio

Guided AI speech drafting + rehearsal for best-man / maid-of-honor / parent speeches.
One-time pricing. GTM: programmatic SEO + TikTok. Solo dev, ~2–3 week build.

---

## 1. MLP Feature Spec

### Positioning statement
"Don't wing the most-watched 4 minutes of your year." A guided studio that interviews you
about the couple, drafts a speech that sounds like *you*, and coaches you until you can
deliver it confidently.

### Core user journey (the MLP is exactly this path, nothing else)
1. **Land** on an SEO page (e.g., "Best man speech for your brother — 12 real examples")
   or the homepage.
2. **Start free**: pick role (best man / MOH / father / mother / other), tone slider
   (heartfelt ↔ funny), speech length target (2 / 3.5 / 5 min).
3. **Guided interview** (the differentiator): 10–14 chat-style questions with smart
   follow-ups — how you met, one specific story that shows who they are, what their partner
   changed about them, an inside joke, what you want them to feel. Voice-note answers
   accepted (transcribed) — people tell stories better than they type them.
4. **Draft reveal**: full speech, structured with labeled beats (cold open → story → turn to
   partner → toast). Free users see the first ~40% + structure outline; paywall to unlock.
5. **Pay** (one-time, Stripe checkout, no account required — magic-link email receipt
   doubles as auth).
6. **Revision loop**: inline "make this funnier / shorter / less clichéd / more about her"
   per-paragraph regeneration, plus 3 full re-drafts included.
7. **Rehearsal mode**: teleprompter with adjustable scroll speed, pause markers where
   laughs/tears are expected, a countdown timer, and a "record yourself" playback (browser
   MediaRecorder, stored locally — no infra).
8. **Export**: clean PDF, phone-friendly cue-card view, email-to-self.

### Build scope (2–3 weeks)
| Week | Ship |
|---|---|
| 1 | Next.js app: intake flow, LLM pipeline (interview → outline → draft → revise), paywall + Stripe one-time checkout |
| 2 | Teleprompter/rehearsal mode, exports, 30–50 programmatic SEO pages (template: role × relationship × tone with real example speeches), analytics (PostHog) |
| 3 (buffer) | Voice-note input, polish, laugh-beat markers, launch assets |

### Explicitly cut from MLP
Accounts/dashboards, mobile app, other speech types (graduation/retirement — same engine,
add in month 2 as new SEO surface), collaboration ("send to a friend for feedback" — v2
viral hook), multilingual, vow writing (separate intent, add later).

### LLM pipeline notes
- Two-stage: interview answers → structured "story bank" JSON → outline → draft. Never
  one-shot; that's how you get generic ChatGPT-sounding speeches (the #1 quality complaint
  category-wide).
- Hard rules in the system prompt: no "for those who don't know me", no "webster's dictionary
  defines", ban the top 20 wedding-speech clichés explicitly.
- Keep the user's own phrases from voice notes verbatim where possible — the speech should
  contain sentences only they could have said.

### Pricing
- **$39 one-time** per speech (test $29/$49). Includes 3 re-drafts + rehearsal mode.
- **$59 "calm package"**: everything + unlimited revisions + a printed-style cue card PDF +
  "emergency shortening" (cut 5 min → 2.5 min the morning of).
- No subscription. The customer is done in 2 weeks and that's fine — volume business.

### Success metrics (kill/continue at day 45)
- SEO pages indexed and ≥500 organic visits/wk trending up, OR one short-form channel
  clip >100k views
- Visit → interview-start ≥ 12%
- Interview-complete → paid ≥ 8% (this is the number the business lives on)
- ≥ 30 sales ($1k+) in the first 45 days of real traffic

---

## 2. Competitor Teardown

*(researched July 2026)*

<!-- TEARDOWN -->

---

## 3. Week-by-Week Launch Plan

**Seasonality note:** July start = you're building *into* peak wedding season (Aug–Oct
speeches are being written right now) and will be fully SEO-indexed by engagement season
(Dec–Feb), which feeds next year's compounding. Good timing.

### Week 0 — Validate the content angle before writing code
- Register domain, ship a one-page landing ("Your best man speech, written and rehearsed.
  $39.") with email capture + a 3-question survey (whose wedding, when, what are you stuck on).
- Start the TikTok account **now**: 1/day. Formats to test: "rating best man speeches from
  movies", "things to never say in a MOH speech", "POV: your speech is in 48 hours".
  You're testing hooks, not selling.
- Write 5 of the SEO example pages by hand to learn what quality bar ranks.

### Weeks 1–2 — Build (per spec above)
- Keep posting daily; build-in-public devlog on X ("building a wedding speech studio in
  2 weeks") — wedding tech has a surprisingly engaged founder audience.
- Recruit 5 beta users from waitlist + r/weddingplanning lurking (give it free, watch them
  use it on a call — the interview questions will need rewrites, this is where MLP quality
  comes from).

### Week 3 — Soft launch
- Turn on Stripe. Ship all 30–50 SEO pages. Submit sitemap, request indexing.
- Post the product to r/weddingplanning and r/bestman **as a story, not an ad** ("I had to
  give a best man speech, panicked, built this") — follow each subreddit's self-promo rules.
- TikTok shifts to product-visible content: screen-record the interview → draft reveal
  moment (it demos well: question, question, question → *full speech appears*).

### Week 4 — Launch week
- Product Hunt launch (Tuesday). Wedding products do fine there; the real value is the
  backlink + social proof strip for the landing page.
- Pitch 10 wedding-content newsletters/blogs a free "speech panic kit" collab.
- Start the second content pillar: real (anonymized, permissioned) before/after speech
  glow-ups — this is the format most likely to hit.

### Weeks 5–8 — The grind loop (repeat weekly)
- 5–7 short-form posts/wk, double down on the single best-performing format.
- Add 10 SEO pages/wk (new relationship × tone combos; then "speech for second marriage",
  "bilingual wedding toast" long-tail).
- Watch Search Console: any page ranking 5–15 gets manually upgraded (more examples,
  an embedded free tool teaser).
- Weekly: read every session recording of interview-drop-off; fix the worst question.
- Test price A/B ($29 vs $39) once you have ~200 checkouts of data.

### Weeks 9–12 — Compound or kill
- If metrics pass: add graduation/retirement/rehearsal-dinner speeches (same engine, 3×
  the SEO surface), add "send to a friend for feedback" (viral loop), consider vows.
- If SEO is working but conversion isn't: the product isn't good enough yet — do 10 more
  user calls before touching the funnel.
- If neither channel shows signal by day 60 with consistent execution: kill per the
  pre-committed metric and take the SEO learnings to idea #5.
