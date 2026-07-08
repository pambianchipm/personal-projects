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

<!-- TEARDOWN -->

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
