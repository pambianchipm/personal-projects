# Idea #4 Deep Dive — Photo Declutter Swipe App

"Tinder for your camera roll": swipe to delete, month-by-month sessions, storage-saved
counter. iOS-first. GTM: TikTok organic + ASO. Subscription with hard paywall.
Solo dev, ~2–3 week build.

---

## 1. MLP Feature Spec

### Positioning statement
"Clean 10 years of camera roll, one satisfying month at a time." The differentiation bet is
**session design + emotional framing** (revisiting memories, not doing chores) in a category
whose incumbents are utilitarian and ad-cluttered.

### Core user journey
1. **Onboarding (90 seconds, does the selling)**: request photo permission → immediately
   show *their* numbers: total photos, screenshots count, estimated GB reclaimable, "photos
   from [oldest month] you haven't seen since". Personalized shock value = the paywall setup.
2. **Hard paywall** right after the value reveal, before first session (weekly with 3-day
   trial + annual). Category-standard and it works; the free taste is *seeing their stats*,
   not cleaning.
3. **First session**: current month, capped at ~50 photos so it completes in <2 min.
   Swipe left = trash, right = keep, up = favorite. Undo. Haptics + tiny dopamine
   animations on every 10th delete. End-of-session card: "You freed 412 MB" — **designed
   to be screenshot-shareable** (this is the organic loop).
4. **Month-by-month map**: a grid of every month you've had a phone; cleaned months get a
   checkmark. Completion mechanics (fill the map) drive retention better than streaks for
   a finite-job app.
5. **Batch delete confirmation** → photos go to iOS "Recently Deleted" (30-day safety net —
   lean on this in copy: "nothing is gone forever for 30 days").
6. **Monthly ritual hook**: notification on the 1st — "January is ready to clean" + "One
   year ago this month" memory resurface (pleasant, not chore-like).

### Deliberately in MLP (cheap, high-leverage)
- Screenshot-only mode (screenshots are the #1 guilt pile; also a TikTok content angle).
- Storage-saved lifetime counter on home screen.
- Share card generation (the end-of-session stat card, watermarked).

### Explicitly cut from MLP
Android (iOS first — TikTok's US audience + higher willingness to pay), AI duplicate/similar
clustering (iOS has native duplicate detection; don't compete with it in v1 — different
wedge), video cleaning (add fast-follow, big storage numbers), cloud backup anything,
widgets, iPad.

### Build notes (2–3 weeks, Swift/SwiftUI recommended over RN for Photos API + haptics feel)
| Week | Ship |
|---|---|
| 1 | PhotoKit integration, swipe engine w/ haptics, month sessions, trash batching |
| 2 | Onboarding stats reveal, paywall (RevenueCat), month map, share card |
| 3 | Polish animations (this app lives or dies on *feel*), notifications, App Store assets, TestFlight |

- Paywall: RevenueCat + a remote-config'd paywall (test weekly $3.99 w/ trial vs $4.99;
  annual $24.99 vs $29.99). Show annual as "save 88%" anchored to weekly.
- App size and session speed matter: all on-device, no accounts, no backend at all in MLP.
  Zero infra cost, App Store handles payments. Privacy story ("your photos never leave your
  phone") is both true and a marketing asset against AI-cleaner competitors.

### Success metrics (kill/continue at day 45)
- One TikTok >250k views OR sustained 20+ installs/day organic
- Onboarding → trial start ≥ 8% (paywall health)
- Trial → paid ≥ 35% (category benchmark for hard-paywall utility)
- Day-7 retention of payers ≥ 25% (they must come back for a 2nd session)
- ~$1k total revenue by day 45

---

## 2. Competitor Teardown

*(researched July 2026)*

### Market snapshot — bigger than it looks
Consumers spend **~$40M/month** on storage-cleaner apps; the top 10 earners grossed $197M
in 2024 and were on pace to roughly double in 2025. >95% of revenue is iOS
([Appfigures report](https://appfigures.com/resources/insights/20250606?f=1)). The category
has consolidated around **MWM**, a French publisher that has now bought four swipe-cleaner
apps: Swipewipe (2024), Slidebox, Photo Purge, and **Picnic (April 2026, at ~$4M ARR)** —
which also means a plausible acquirer exists for anyone who builds a few hundred K ARR here.

Two archetypes: (a) swipe-first, Gen-Z, **TikTok-grown** apps (Swipewipe, Picnic — this
product's lane) and (b) utility-bundle "cleaner" apps grown via Apple Search Ads with
brutal weekly paywalls (Cleanup, Cleaner Guru — they make most of the money and most of
the enemies).

### The field at a glance

| Competitor | Price | Traction | Weakness to exploit |
|---|---|---|---|
| [Swipewipe](https://apps.apple.com/us/app/photo-cleaner-swipewipe/id1583884012) (MWM) | **$8.99–9.99/wk or $109.99/yr** | ~400K downloads & ~$1M revenue/mo; 4.7★/47K ratings. The direct incumbent — month sessions, streaks, storage stats | Priced at the top of the category ("highest price seen for a cleaner app"); ad-stuffed free tier (20 swipes per ad) |
| [Picnic](https://www.eu-startups.com/2026/04/london-based-photo-organising-startup-picnic-acquired-by-french-app-publisher-mwm/) (MWM, Apr 2026) | subscription | 1.5M users in 18 mo, ~$4M ARR, profitable | Proves the market is **not winner-take-all** — a second swipe app hit $4M ARR after Swipewipe dominated |
| [Cleanup](https://apps.apple.com/us/app/cleanup-phone-storage-cleaner/id1510944943) | $4.99–7.99/wk | ~2M downloads & **~$10M revenue in one month** (category ceiling); 500K+ ratings | "Is it a scam?" Apple forum threads; paywall ambush after work is done; 5 free deletions/day |
| [Cleaner Guru](https://macpaw.com/how-to/cleaner-guru-review) | $6.99–7.99/wk | ~1M downloads / ~$5M/mo | Paywall appears *after* you've selected photos to delete — the most-hated pattern in the category |
| [Cleaner Kit](https://bpmobile.com/apps/cleanerkit) (BPMobile) | weekly sub | ~300K downloads / ~$2M/mo; 4.4★ | Also got TikTok virality for its "Tinder feed" — confirms the format works repeatedly |
| [Slidebox](https://slidebox.co) (MWM) | $4.99/mo / $49.99/yr | 4.8★, Apple Editors' Choice, the 2015 OG | Organizer, not a game — no sessions/streaks; lifetime purchases broke after acquisition (angry users) |
| [CleanMy®Phone](https://macpaw.com/support/cleanmyphone/faq) (MacPaw) | **~$25/yr** | 4.6★/21K; premium, privacy-forward | No swipe game at all — proves your $25/yr price point works, but competes on AI dedupe, not ritual |
| [Photo Purge](https://apps.apple.com/us/app/photo-purge-swipe-delete/id6468278116) (MWM) | $129.99 lifetime | tiny (99 ratings) | Its liked feature — storage goals + progress bar — is worth stealing |
| Daily Delete / Ollie | — | $3.5M-VC-backed AI curation app that **pivoted to plain daily swipe-cleaning** | The pivot itself is the datapoint: demand landed on the simple ritual, not AI curation |

### The Swipewipe playbook (copy this — it's documented)
1. Solo indie dev (Adam O'Kane, 2021). Product Hunt launch flopped. Then **organic TikTok
   virality took it from 15K to 300K MAU in two months** — no paid spend.
2. Post-acquisition, MWM industrialized it: 200+ TikTok Spark Ads/month whitelisting
   creator UGC; one creator video (after 19 variations) cratered CPI → 75× revenue growth
   in 3 months, top-10 App Store in 15 countries
   ([Ramdam case study](https://www.ramd.am/success-story/how-a-single-tiktok-ad-propelled-swipewipe-app-into-the-top-10-app-store-2)).
3. Formats that worked: camera-roll-shame confessions ("my 23,000 photos"), swiping-ASMR,
   before/after storage numbers, "the app that lets you clear photos like Tinder"
   explainers — which is now literally a TikTok discover page. This matches the Week-0
   content plan below almost exactly.

### Confirmed gaps (mapped to the spec)
1. **Price umbrella.** Swipewipe wants $110/yr; Cleanup et al. $5–8/wk. The planned
   $3.99/wk / ~$25–30/yr sits *under* the umbrella — you can run TikToks saying "the swipe
   app that doesn't cost $100 a year." CleanMy®Phone proves $25/yr converts.
2. **Trust positioning is free ammunition.** The category's top earners have a
   scam-adjacent reputation (viral "predatory cleanup apps charged my grandmother
   $7.99/week" post, Apple forum scam threads, paywall ambushes). "One fair price,
   on-device, undo everything, cancel anytime" is a *marketable* differentiator, not just
   ethics.
3. **Shareable results screens are under-exploited** — the spec's screenshot-able
   end-of-session card ("freed 18GB") is the organic loop none of the incumbents push hard.
4. **The "before you pay Apple" angle is unused**: position against the iCloud upgrade nag
   ("clean instead of paying Apple $2.99/mo forever") — emotionally resonant, absent from
   incumbent creative.
5. **Polish wins ratings**: recurring incumbent complaints are ads, deletion bugs, Live
   Photo handling, forced review prompts. Slidebox's 4.8★ → Apple editorial attention shows
   ratings compound.
6. Android is ~empty (>95% of revenue is iOS) — correct to ignore for v1, real option later.

### Paywall benchmarks (validates the spec's monetization)
Weekly plans now drive ~55% of subscription revenue in this space and convert 1–7× better
than annual ([Superwall](https://superwall.com/blog/the-paywall-tactics-behind-usd100k-month-apps/));
onboarding paywalls drive ~50% of trial starts for top apps
([RevenueCat](https://www.revenuecat.com/blog/growth/how-top-apps-approach-paywalls/)).
Keep the hard paywall — but with pricing stated clearly *before* the trial, both to avoid
App Store rejection risk (Apple is scrutinizing cleaner-clone dark patterns) and because
honesty is the positioning.

### Threats to respect
- **Apple sherlocking**: iOS has native exact-duplicate merge, but iOS 26's Photos redesign
  added **no swipe-triage or similar-photo cleanup**. Apple will never build the *game*
  (streaks, dopamine, storage-saved ritual) — so the mitigation is already the strategy:
  the product is the ritual, not the dedupe algorithm.
- **MWM's war chest**: they own the top swipe apps and can outbid you on every creator and
  keyword. You can't outspend them; you can out-authentic them (solo-founder
  build-in-public is itself a proven TikTok format) and undercut on price.
- **Content saturation**: pure "look at this app" content is years old. Needs a fresher
  hook — digital-minimalism/self-care framing, streak culture, New-Year and
  storage-full-moment seasonality.
- ASA head terms ("phone cleaner") are unwinnable for a solo founder — long-tail swipe
  terms + TikTok-created branded search are the ASO lane (matches the spec).

---

## 3. Week-by-Week Launch Plan

This idea is a **content-market-fit bet**: the app is simple; the business is whether your
TikTok content hits. So the plan front-loads content validation harder than the others.

### Week 0 — Validate content BEFORE building
- Create the TikTok account. Post daily *without any app*: clean your own camera roll
  manually on camera. Formats to test:
  - "Cleaning 10 years of camera roll, day 1" (series/POV)
  - "Your screenshots folder is why your phone is full" (call-out)
  - "Rating the weirdest photos I found from 2016" (nostalgia/comedy)
  - Storage-number reveals ("watch this number") — satisfying/ASMR angle
- **Gate:** if nothing beats ~10k views in 2 weeks of daily posting, iterate hooks another
  week before writing code. The app without the content engine is a zombie.
- Meanwhile: file Apple dev account (do this day 1 — review/setup takes time), name + icon
  concepts tested as a TikTok poll.

### Weeks 1–3 — Build (per spec above), keep posting
- Continue daily posts; start weaving in the build ("I'm making the app that does this").
- TestFlight to 20–30 beta users recruited from TikTok comments (comment "BETA" → link).
  Their session recordings tune swipe feel and the paywall moment.
- Prepare ASO: title/subtitle targeting "delete photos, clean storage, photo cleanup";
  screenshots that look like the TikToks (continuity from content → store page converts).

### Week 4 — Launch
- App Store release. Every TikTok now ends with the app doing the thing the manual videos did.
- The money format to nail this week: **screen-recorded swipe session with real reactions**
  to old photos + the storage counter going up. Post 2/day, different hooks, same core.
- Ask every TestFlight user for a Day-1 review (ratings velocity matters for ASO).
- Do NOT bother with Product Hunt for this one — wrong audience; TikTok comments are your
  launch forum.

### Weeks 5–8 — The grind loop (repeat weekly)
- 10–14 posts/wk (2/day) — this category's winners post at volume. Rotate 3 proven formats,
  test 1 new one weekly. Repost winners to Reels + Shorts (free reach, same asset).
- Watch which video themes drive installs (App Store connect sources + a link-in-bio with
  UTM) — double down by theme, not by video.
- Weekly paywall experiment via RevenueCat (price, trial length, paywall copy) — one
  variable at a time.
- Reply to every comment for the first month; comment-section jokes become next videos.
- Localize store listing to top 5 non-US English markets (free installs).

### Weeks 9–12 — Compound or kill
- If content hit but conversion is weak: it's the paywall/onboarding — run 5 user tests of
  the first 90 seconds; don't add features.
- If conversion fine but content plateaued: hire 2–3 micro UGC creators ($50–100/video from
  your <$5k budget) to widen the content surface; also start a second account with a
  different persona/format.
- If both work: ship video-cleaning (bigger GB numbers = better content), then Android.
- Kill condition: 60 days of consistent 2/day posting with no video >100k and <10
  installs/day → the content angle is wrong; take the swipe engine and reskin for an
  adjacent declutter niche (email? files?) or move on.
