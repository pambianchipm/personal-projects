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

*(researched July 2026; some vendor pages blocked automated fetches — spot-check exact
prices before relying on them)*

### The field at a glance

| Competitor | Price | What it is | Weakness to exploit |
|---|---|---|---|
| [Provenance](https://www.provenance.co) | Free tier; tools ~$30 each | Funded category leader (~$4M seed, Upfront Ventures; 150k+ couples). Vow/Ceremony/Toast Builders | **Couple-centric** — vows and ceremony first; guest speakers (best man/MOH) are a bolt-on audience, not the core user |
| [ToastWiz](https://www.toastwiz.com) | $39.90 one-time | Pure-play incumbent: guided form → 4 drafts **emailed to you** | Batch-and-email model, no in-app revision loop, no rehearsal/delivery help |
| [SpeechyAI](https://www.speechy.com) | $29.99 one-time (cut from $65) | UK human-speechwriting firm (ex-BBC writers) productized; 40–50 question intake | Questionnaire takes 45–60 min; 3 drafts, **no editing**; few roles |
| [Nail The Speech](https://www.nailthespeech.com) | $29.99 one-time, 90-day access | **Closest analog**: voice input, 44 roles, sentence-level editing, one-click refinements, TTS practice | TTS listening ≠ user rehearsal; no teleprompter; zero trust signals (no reviews/press); 90-day cap |
| [Wedding Speech App](https://weddingspeech.app) | $29 one-time / 3 speeches | Built by Green Wedding Shoes (major blog) — strong in-app editing, unlimited edits | **Ends at PDF export** — no delivery features; distribution is their blog, not a moat vs you |
| [Verble](https://www.verble.app) | ~$20 one-time / $8–25 mo | Generalist speech tool — **the only one with a real teleprompter + webcam rehearsal** | Not wedding-native; confused subscription pricing for a one-and-done occasion |
| [Bridesmaid for Hire](https://bridesmaidforhire.com) | Free tools; human service $$$$ | Jen Glantz's SEO machine — "127 MOH speech examples" ranks top-5 | AI tools are lead magnets, not products; human service priced out of mass market |
| Free-tool tier (AI Wedding Toast, Easy-Peasy, HyperWrite, Junia…) | Free | SERP-cloggers monetizing adjacent subscriptions | Generic one-field intake → generic output; no wedding depth |
| App Store tier (WedSpeak, Best Man Speech AI) | $0.99–15 | Race-to-the-bottom mobile apps | Scathing reviews ("$15 for only 3 edits", "Copilot did an INSANELY better job. For free") — web is where $29–49 lives |

### How people actually solve this today (the substitute ladder)
Free (ChatGPT + free generators) → **$29–40 dedicated AI tools ← your segment, validated
4× over** → $90–225 Fiverr human writers (category avg ~$89) → $500+ bespoke (UK:
£80–150/minute). Your $39 sits exactly on the established price point.

### The emotional insight that should drive positioning
The #1 anxiety in this market is **"will I get caught using AI"** — viral shaming stories
recur ("it's like he didn't even try"), people call admitting ChatGPT use "cringe", while
the winning anecdote is an AI-assisted MOH speech where "the bride had no idea AI was
involved." Nobody currently markets the authenticity guarantee: *"we interview you like a
speechwriter would — the stories are yours."* Voice-note intake is the feature-shaped
version of that promise. This validates the spec's interview-first design as the core bet,
not a nice-to-have.

### Confirmed gaps (mapped to the spec)
1. **Write + rehearse + deliver as one wedding-native bundle is unclaimed.** Every wedding
   writer stops at text/PDF; the only teleprompter belongs to a generalist (Verble) with
   subscription pricing. The rehearsal mode is the paid differentiator free tools can't
   cheaply match.
2. **Revision loop quality is a marketable feature with documented complaints behind it**
   (ToastWiz: none; SpeechyAI: none; WedSpeak: $15 for 3 edits, users furious). "Unlimited
   sentence-level refinement, one-time price" goes on the pricing page.
3. **Intake-time sweet spot is open**: SpeechyAI's 45–60 min is too long, free tools' one
   field is too shallow. The spec's 10–14 question / ~12-minute voice-friendly interview is
   the defensible middle.
4. **Father-of-the-bride and couple speeches are under-served** — older, most terrified,
   highest willingness to pay. Worth its own SEO cluster early.
5. **Trust vacuum**: none of the pure-plays have Trustpilot presence. First to 200+ verified
   reviews wins the comparison shopper. Start collecting from sale #1.
6. **UK/Commonwealth wedge**: best-man culture is stronger there and the ranking sites are
   dated content plays; localized British-humor tone is cheap to ship.
7. **Untouched distribution channels**: wedding planners, DJs/MCs (who watch bad speeches
   weekly), officiant networks, groomsmen-gift boxes. Provenance proved the affiliate/
   officiant motion for ceremonies — nobody runs it for toasts.

### SEO reality check
"Best man speech examples"-type SERPs are owned by **content sites** (The Knot, Brilliant
Earth, Bridesmaid for Hire), not products — winnable only with genuinely good example
content, which is also the conversion surface. "Wedding speech generator" SERPs *are*
products, with free tools ranking above paid. Nail The Speech shows the current playbook:
programmatic role pages + `/vs/` comparison pages + self-published listicles. Copy it and
out-execute on product trust.

### Threats to respect
- **ChatGPT keeps improving for free** — the product must win on packaging (interview,
  wedding know-how, rehearsal), and the rehearsal features are the part a chat window
  can't replicate.
- **Fast copycats**: 15+ entrants in 3 years; features get cloned in months. Trust
  (reviews) + SEO compounding + channel relationships are the actual moats.
- **Super-app bundling**: The Knot/Zola/Joy could ship a free toast tool to captive
  audiences; Provenance could push harder into toasts.
- **Google AI Overviews** compressing the informational funnel everyone depends on —
  another reason the TikTok leg matters.
- **One-time pricing = perpetual acquisition treadmill** — accepted trade-off; mitigate
  with the day-after keepsake upsells and multi-speech households (parents + siblings).

### Market size sanity check
~2M US weddings/yr × 3–5 speeches each ≈ **6–10M first-time, anxious speech-givers per
year in the US alone**, before the UK/AU/CA markets where the tradition is stronger.

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
