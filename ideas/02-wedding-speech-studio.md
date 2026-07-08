# Idea #2 Deep Dive — Wedding Speech & Toast Studio

Guided AI speech drafting + rehearsal for best-man / maid-of-honor / parent speeches.
One-time pricing. GTM: programmatic SEO + TikTok + targeted paid. Solo dev, ~2–3 week build.

> **DECISION (July 2026): This is the one.** Chosen for buildability, validated $29–49
> one-time price point, unclaimed write+rehearse+deliver bundle, and a real unfair
> advantage: founder's brother works in a wedding band (see §4).

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

---

## 4. The Wedding Band Advantage (unfair advantage playbook)

Founder's brother plays in a wedding band → he is in the room for 2–5 real speeches
**every weekend**. That's 100+ live speeches a year. Use him four ways:

### 4a. Quality control that no competitor can buy
- **Weekly speech autopsy**: after each gig, a 10-minute debrief — which speech landed,
  which died, why. What got laughs vs. what got polite silence, where people checked
  phones, ideal length in practice (bands know: shorter than anyone thinks). This feedback
  goes directly into the prompt rules and the laugh-beat markers in rehearsal mode.
- **Blind voice test**: for every prompt-pipeline change, he reads 3 drafts — can he tell
  which is AI? Would this fly at a real reception? Ship nothing that fails his read.
- This makes the anti-cliché ruleset *empirical*, not guessed — a real moat over
  competitors tuning prompts from their desks.

### 4b. Content engine (the TikTok cheat code)
The research showed nobody in this category has credible faces. A wedding-band member is
inherently credible wedding content:
- "I hear 3 wedding speeches every weekend — here's what the good ones do"
- "Wedding band member rates famous movie best-man speeches"
- "Things we've actually heard in best man speeches" (band-eye-view stories)
- Duets/stitches of viral wedding speech clips with musician commentary
He doesn't need to be the founder-face daily; even 1–2 co-created videos a week is a
content pillar competitors can't copy.

### 4c. The vendor channel (untouched per research)
Bands, DJs and MCs watch bad speeches ruin receptions weekly — they *want* speeches to be
better, and they talk to every wedding party weeks before the event.
- Start with brother's band: a QR card in their gig kit / booking confirmation email —
  "giving a toast? don't wing it" with a band-specific discount code (doubles as tracking).
- Then his network: every band shares bills with other bands, DJs, planners. Offer a 20–30%
  affiliate cut. Even 20 vendors × 2 referrals/month at $39 is real money at zero CAC —
  and it's the channel the research explicitly flagged as unclaimed (Provenance runs it
  for officiants/ceremonies; nobody runs it for toasts).

### 4d. Social proof / positioning
"Built with the people who hear 100+ wedding speeches a year." That single line, plus his
face on the landing page, attacks the category's trust vacuum (no pure-play competitor has
Trustpilot presence or credible humans attached).

---

## 5. Paid Acquisition Plan (budget-honest version)

**Reality check first:** on a <$5k total budget, paid ads are a *validation instrument*,
not a growth engine. Unit economics box: $39 price ≈ ~$35 gross margin → blended CAC must
stay under ~$15 for the math to breathe. Cap total paid spend at **$1.5–2k** until organic
+ SEO prove the funnel converts; scale paid only from revenue.

### Channel order (by intent, which is by ROI)
1. **Google Search — start here (~60% of paid budget, $15–20/day)**
   - Exact/phrase match on high-intent long-tail only: "best man speech generator",
     "ai maid of honor speech writer", "help writing best man speech", "father of the
     bride speech help". Skip broad "best man speech" (informational, content sites own it).
   - Expect low volume — that's fine; the job is measuring **click → interview-start →
     paid** with real strangers. ~50 paid interview-starts is enough data.
   - Negative keywords from day 2 ("free", "examples", "template" initially — test later).
   - This channel maps perfectly to a panic-purchase: someone searching at 11pm two weeks
     out is your buyer.
2. **TikTok Spark Ads — only after an organic post works (~25%)**
   - Do not cold-launch TikTok ads with made-for-ads creative. Post organic daily first
     (per §3 launch plan); when one hits, whitelist/spark it with $20/day. The
     Swipewipe/Ramdam case study is the template: creator-style content, many variations.
   - Brother-content (4b) is the ad creative pipeline.
3. **Meta (FB/IG) — last, retargeting only (~15%)**
   - Cold-targeting speech-givers on Meta is hard (you can find engaged couples, but the
     buyer is their best friend/sibling — no targeting segment exists for "was just asked
     to be best man").
   - Use it for: retargeting interview-abandoners (highest-ROI audience you'll have) and,
     later, lookalikes on purchasers once there are 100+.
   - IG placement skews to the MOH demographic; creative = testimonial/reaction clips.

### Measurement bar (pre-commit before spending)
- Kill a channel after $500 spent with CAC > $30 trending flat.
- Keep any channel with CAC < $15 and refill from revenue.
- Attribution: UTM everything + a one-question "how did you hear about us" on checkout
  (last-click lies, especially for TikTok).

### Seasonality lever
Bid up May–October (speech-writing panic season, 1–4 weeks before weddings) and
December–February for engagement-season vow/planning adjacency; drop bids in the trough.

---

## 6. Naming Decision — Clinkworthy

**Chosen name: Clinkworthy** (clinkworthy.com — available at $11.25/yr as of July 2026;
grab clinkready.com as a redirect too).

### Why it won
- Distinctive coined word → you can own branded search entirely (competitors like
  "Nail The Speech" and "Wedding Speech App" are stuck with generic names).
- No "AI" in the name — consistent with the authenticity positioning ("no one will know").
- Works as in-product language: the final quality-check state is "Clinkworthy ✓".
- It's an adjective → free tagline: **"Make it clinkworthy."**
- Warm and lightly funny without being a joke brand; safe for the heartfelt end of the
  tone slider too.

### Diligence (July 2026)
- Domain: available (checked via registrar API).
- Existing usage: none as a company/product/mark — only casual adjective use in Amazon
  wine-gift-set copy. No app, no SaaS, no wedding business found under the name.
- Adjacent marks that are NOT conflicts: Clink.money (fintech), Waterford's dead 2009
  "Clink-Clink" iPhone app, a trivial "CLINK" GPT wrapper on yeschat.ai.
- Never use: "Toastmaster(s)", "Speechcraft" — Toastmasters International trademarks.

### Remaining manual checklist (do before/at purchase)
- [ ] Buy clinkworthy.com (+ clinkready.com redirect) — ~$22 total
- [ ] 2-min USPTO TESS search for "clinkworthy" (expected clean — coined word)
- [ ] Register @clinkworthy on TikTok, Instagram, X, YouTube (web search shows no
      existing profiles, but verify by hand — handles matter as much as the domain
      for the content channels)
- [ ] Runner-up shortlist if anything surfaces: clinkready.com, heartfelttoast.com,
      bettertoast.com (avoid nailyourtoast.com — collides with competitor Nail The Speech)

