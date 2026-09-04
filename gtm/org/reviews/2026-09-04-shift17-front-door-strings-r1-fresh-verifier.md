# Gate verdict — `front-door-strings-v1.md` round 1 — FRESH VERIFIER

FILED VERBATIM by the GTM boss, shift 17, 2026-09-04. **Not edited, not
summarised, not reordered.** The boss's disposition is a separate file
(`2026-09-04-shift17-front-door-strings-r1-disposition.md`).

ARTIFACT: `gtm/market/copy/front-door-strings-v1.md` (round 1, IN-GATE)
PERSONA: fresh verifier — every file:line citation opened against
`pambianchipm/clinkworthy@9b5b484`; every string against
`position-v2-the-hire.md` §6.2.
BLIND? **No.** The artifact's header carries Phin's ruling on Hero A.

---

I have read the artifact, §6.2/§6.3, the channel authority, and opened every file:line citation. Verdict below.

## VERDICT: **FAIL**

Four gate-blocking classes. (1) One receipt is not merely off-by-N but points at a different item, and the text actually sitting at those lines — `waitlist-front-door.md:74-76`, "the hero is canon and locked… changing the hero is a spec change for the build org, not a copy edit" — **forbids the thing §1 does**; the file cited its own prohibition as support for something else. (2) The file asserts "the approval claim is §4, once" while `content.ts:87` (`'…You approve. It ships.'`), `:167` (`'You approve from your phone. It ships.'`) and `:178` (`'Nothing goes out until you say so.'`) appear in no Replaces table in the file — three unqualified approval claims survive on the same page, one of them the exact sentence standing constraint 5 names as affirmatively false. (3) §1 quotes the §6.2 PROHIBITED row that its own hero trips, marks it OPEN, and ships the string anyway inside a file labelled SHIPPABLE — and the not-applied remedy it proposes (`JOINING SOON`) is itself a soft date, contradicting the PHIN-APPROVED `waitlist-front-door.md:26`. (4) Two frames of reference are missing entirely: `waitlist-gate.ts:34` makes `WAITLIST_ONLY` **default ON** so `POST /api/scan/checkout` 403s (`checkout/route.ts:37-38`), and `tier.ts:46` shows entry buys neither `ads` nor `arm_auto_publish` — so both "runs your Meta ads" and the band's advance-arming clause describe an `os`-only entitlement, receipted against a platform grade that says nothing about entitlement. The file's line-number discipline is otherwise genuinely good: of ~78 citations, 71 hold exactly.

## MUST-FIX

**1. `waitlist-front-door.md:74-76` is WRONG, and the real text at those lines forbids §1.**
Artifact §2: *"**Zero owners have read it** — `waitlist-front-door.md:74-76`."*
What is at `:74-76`: item **(ii)** — *"**The hero is canon and locked.** `content.ts:82` carries 'Canon (spec §4.2). Do not rewrite.' Changing the hero is a **spec change for the build org**, not a copy edit — do not treat the mockup's hero as approved copy."* The zero-owners claim is item **(i)** at `:71-73`. So the pointer is wrong by three lines onto a different item, and the item it landed on is a standing bar on §1's entire hero rewrite (new Kicker, H1, Sub, both CTAs).
· Receipt: `/home/user/personal-projects/gtm/market/copy/waitlist-front-door.md:71-73` and `:74-76`.
· **Remedy:** repoint the zero-owners citation to `:71-73`; add `:74-76` to §1 as a **constraint the file must answer**, not as support — §1 either routes the hero to the build org as a spec change or withdraws it. **Check I ran on my own remedy:** it proposes no customer-facing string, so no §6.2 row (availability, iMessage-by-paraphrase, channel/count, price, approval-qualifier, competitor) has anything to catch, and it asserts no reader reaction, so constraint 6 does not apply. Its blind spot: I compared two line ranges in one file by eye; it does not tell me whether other citations in the artifact point at neighbouring items in files I read only at the cited range.

**2. Three unqualified approval claims are left live, and the file counts them as one.**
Artifact §3 receipt: *"Meta description carries **no** approval claim | the approval claim is §4, **once**."* §4's Replaces table names `content.ts:184`, `:112`, `:151`, `:277` and two tests. It names neither `:87`, `:167` nor `:178`.
· Receipt: `grep -n "You approve\|It ships\|until you say so" /home/user/clinkworthy/console/app/landing/content.ts` returns `:87 sub: '…You approve. It ships.'`, `:151`, `:167 'You approve from your phone. It ships.'`, `:178 'Nothing goes out until you say so.'`. `:87` is the live hero sub the file's own new Sub displaces, and it is absent from §1's Replaces table too. Against `console/lib/tier.ts:107` (`'posting on a schedule without a click'`) and `docs/design/redesign-2026-09/MARKETING.md:45`, all three are false as written.
· **Remedy:** add `content.ts:87`, `:167`, `:178` as rows in §4's Replaces table, and strike the word "once", replacing it with the grep string above and its output. **Check I ran on my remedy:** it adds retirement rows and a named instrument, proposes no new copy — §6.2 has no surface to bite; it removes rather than adds unqualified approval claims (constraint 5); it states no reader reaction. Blind spot: that grep matches four phrasings I typed and scans one file, so an approval claim worded differently, or living in a component or the tour rather than `content.ts`, is not in its output and I have not enumerated those.

**3. §1's hero trips a §6.2 PROHIBITED row, is marked OPEN, and ships anyway — and the file's own proposed fix trips a different rule.**
Artifact §1: Kicker `YOUR NEXT HIRE`, H1 `Come hire Player2.`, sitting under the file's own First breath *"Player2 is an AI marketing employee."* The file states the defect itself: *"the hero states availability, and the employee is not built… carries no waitlist signal."*
· Receipt: `position-v2-the-hire.md` §6.2 PROHIBITED column — *"Anything implying the employee is available today"* (verbatim, confirmed in the table). And the file's own not-applied remedy, `YOUR NEXT HIRE · JOINING SOON`, asserts a timeframe against `waitlist-front-door.md:26` — *"No date, because we don't have one."* — which the same artifact carries as PHIN-APPROVED verbatim three sections later.
· **Remedy:** `YOUR NEXT HIRE · NOT BUILT YET`, built from the PHIN-APPROVED words at `waitlist-front-door.md:22` (*"The employee isn't built yet."*), with the H1 held for Phin. **Check I ran on my remedy, row by row against §6.2:** availability row — the kicker negates availability in the same band rather than a band lower; iMessage/paraphrase row — no channel named; channel/count/logo row — none present; price rows and "founding rate" — none present; approval-qualifier row — no approval claim present; competitor row — none. Against the standing constraints: no date (unlike `JOINING SOON`), no count, no customer number. Blind spot, and it is the whole blind spot: I compared a string to a written ban list. A ban list is not a reader; whether `NOT BUILT YET` reads as "come be first in line" rather than "the door is open" is untested, and zero owners have read my kicker either.

**4. `WAITLIST_ONLY` is default-ON and the file never opens it — the funnel the hero starts terminates in a 403.**
Artifact §5 offers `console/app/landing/content.ts:56` — `ENTRY_AVAILABLE = true` — as its only availability receipt.
· Receipt: `console/lib/waitlist-gate.ts:34` — `if (raw === undefined) return true`, under a header at `:12` reading **"DEFAULT ON. An absent variable means GATED"**; `console/app/api/scan/checkout/route.ts:37-38` returns 403 `WAITLIST_REFUSAL`; that refusal string is `waitlist-gate.ts:44` — *"Player2 is invite-only right now."* `console/app/landing/page.tsx:190` says the same in a comment: *"the door is closed at the route, not at the button."* `ENTRY_AVAILABLE = true` and the gate are different facts and the file carries only the one that flatters the hero.
· **Remedy:** add a §5 row citing `waitlist-gate.ts:34` and `checkout/route.ts:37-38`, and raise as an OPEN for Phin what `Come hire Player2.` + `Start with a free scan` terminates in while the gate is on. **Check on my remedy:** no string proposed, so §6.2 is not engaged; it adds a disclosure rather than a claim, and asserts nothing about a reader.

**5. "runs your Meta ads" and the band's advance-arming clause are `os`-only entitlements receipted against a platform grade.**
Artifact §1 Sub *"runs your Meta ads"* → `docs/channel-readiness.md:15` (Meta ads SHIPPED). Artifact §4 band *"or once, in advance, for the posts you set to go out on their own"* → `console/lib/tier.ts:107`.
· Receipt: `console/lib/tier.ts:46` — `entry: ['calendar', 'caption_advice', 'research', 'analytics', 'generate']`, which contains neither `ads` nor `arm_auto_publish`; `:53` puts `arm_auto_publish` in `os`; `:79` states plainly *"an entry tenant cannot arm."* `channel-readiness.md:15` grades the platform; it says nothing about who is entitled. The artifact opened `tier.ts:107` and `:109` and did not open `:46`, nine lines above.
· **Remedy:** add `tier.ts:46` to both receipt rows and open the question of which tier the front door is describing, since the live waitlist price string (`content.ts:225`) quotes the entry number. **Check on my remedy:** it adds two receipts and one OPEN, no copy — §6.2 clear; it makes no completeness claim about channels and no price claim.

**6. The footer tagline is a reordered variant of the ruled string, cited with no line number.**
Artifact §3: `Player2 · your marketing employee · by P2 Labs` | *"ruled at COPY v2 — `docs/design/redesign-2026-09/MARKETING.md`"*.
· Receipt: `docs/design/redesign-2026-09/MARKETING.md:133` — **Footer tagline** (FRAME; ruled): `"Player2 · P2 Labs · your marketing employee"`. Different order, and "by" is not in the ruled string. The citation also carries no line number, which the artifact's own header at line 14 forbids: *"EVERY RECEIPT IN THIS FILE IS A FILE AND A LINE NUMBER."*
· **Remedy:** ship the ruled string byte-for-byte and cite `MARKETING.md:133`. **Check on my remedy:** the string is a frame tagline — no price, no channel, no count, no approval claim, no competitor, no date, so no §6.2 row is tripped by the reordering itself. What my remedy does **not** settle: whether "your marketing employee" in a footer implies the employee is available today under §6.2. That is the same open question as MUST-FIX 3 and my remedy leaves it open rather than closing it.

**7. The Meta description states "Not built yet" of the whole product, against the artifact's own receipt.**
Artifact §3: `Player2 — an AI marketing employee for your shop. Not built yet: get in line. …`
· Receipt: the artifact's own §5 cites `console/app/landing/content.ts:56` — `ENTRY_AVAILABLE = true`, and `waitlist-front-door.md:51` states *"The entry tier is LIVE today."* What is unbuilt is the employee tier (`position-v2` §2.4: 0-of-4 properties shipped), not Player2. As written the site-wide description is false in the under-claiming direction, and it collides with the same page's `Start with a free scan`.
· **Remedy:** scope the clause to its subject — `The employee isn't built yet: get in line.` **Check on my remedy:** it is the PHIN-APPROVED sentence at `waitlist-front-door.md:22` with the same subject the approval covers; §6.2 availability row — it negates availability rather than implying it; no date, no count, no channel completeness, no approval claim, no competitor. Blind spot: my replacement is longer by five characters, so the truncation arithmetic in §3's receipt row no longer describes it and would need recomputing — I have not recomputed it.

**8. The illustrative employee quotation in §2's Sub has no receipt.**
Artifact §2 Sub: *"— 'the reel from Saturday is still going. Want one more like it this week?' —"*.
· Receipt: absent. §2's receipt table covers *"message you in the chat apps you already use"* (`waitlist-front-door.md:23`) and *"it will post when you reply"* (`:24`); no row covers the quoted sentence. It is new copy invented in this file, it depicts an unbuilt channel (`position-v2` §2.4), and it depicts ongoing-performance detection in that channel. The second half is one-tap answerable per `position-v2` §2.2 rule 4; the first half is a claim about what the employee will say and carries nothing.
· **Remedy:** either drop the quotation, or add a receipt row and mark the sentence `UNTESTED` alongside the OPEN already in §2. **Check on my remedy:** dropping copy trips no §6.2 row; it does not reintroduce an availability implication, and it asserts no reader reaction.

## SHOULD-FIX

1. *"`Who's writing your posts at 11pm?` | asserts nothing; a question."* — a claim about how a string lands, stated as fact, unlabelled, in a file whose §6 says every such claim is `UNTESTED`. It is also not accurate on its face: the question presupposes that nobody is writing them and that the reader posts at 11pm. **Remedy:** replace the receipt cell with `UNTESTED — presupposes the reader has an 11pm posting problem; zero owners have read it`. Checked: no copy proposed, no §6.2 surface.
2. *"A search result renders ~155 characters"* — the only load-bearing number in §3's truncation row and the one clause with no receipt. **Remedy:** cite a source or mark the figure `NOT CHECKED`. Same check as above.
3. §6.2's row **"'Runs your Meta ads' paired with 'armed in advance' — NOT SAYABLE as a pair"** is never named in the artifact. §4's band arguably clears it by separating ads from advance-arming, and the file deserves credit for that — but it discloses one §6.2 deviation (`slots`/`arming`) and is silent on this one, so the record does not show the row was read. **Remedy:** name the row and state how the band clears it.
4. The 30-day refund is absent from every string. `position-v2` §2.5 argues it is the answer to the burned owner, §6.1 promotes it out of a footnote, §6.2 lists it as sayable twice, and `waitlist-front-door.md:58-62` records the law-8 gag lifted. The strings hand a burned owner nothing — an objection the copy cannot answer.
5. *"Join the waitlist and we'll come to you when it's ready"* is marked **DELETED** on this file's own authority, while its header says **DOES NOT SUPERSEDE: `waitlist-front-door.md` (PHIN-APPROVED)**. Deleting an approved clause is superseding it. The reasoning (`waitlist/route.ts:31-34`) is sound and the receipt holds; the disposition exceeds the file's stated authority. **Remedy:** mark it HELD pending the chief rather than DELETED.
6. §5 names **X** and **Reddit**, which §6.2 bars from copy ("X or Reddit named at all"). They sit in a not-covered note rather than a shipping string, but the artifact also carries Reddit as **BLOCKED** (per `channel-readiness.md:17`, the authority I was given) while `position-v2` §3.1 and §6.2 regrade it **NOT CHECKED**. Two gated artifacts disagree and this file reconciles neither.
7. §3 receipts a shipping string to `position-v2-the-hire.md` §1.6 — a file whose own STATUS reads **"GATE-FAILED (round 4)… It is not GATED and may not be cascaded."** §1.6 is inside the amended licence, so this is not fatal, but a section reference with no line number to an uncascadable file is the weakest receipt in the artifact.
8. §1's Sub drops *"today"* and the *"TikTok and Google Ads are coming"* half from §6.2's licensed platform sentence, without disclosing the deviation — while the same file discloses its §4 deviation prominently.

## RECEIPT AUDIT

| Citation | What I found on opening it | Verdict |
|---|---|---|
| `content.ts:84`, `:85`, `:86` | Canon comment; `titleTop`; `titleBottom` | HOLDS |
| `content.ts:103-104` | `freeNote`, "three posts in your voice, before you pay anything. No card." | HOLDS |
| `content.ts:107`, `:110`, `:111`, `:112` | PROOF_STRIP; kicker; title; lede | HOLDS |
| `content.ts:121` | `title: 'Paid',`. "moves units" is at `:122` | **DRIFTED → :122** |
| `content.ts:134`, `:135`, `:151`, `:156`, `:162`, `:163`, `:184` | all as quoted | HOLDS |
| `content.ts:217`–`:219`, `:225`, `:226`, `:231`–`:233`, `:247` | all as quoted, byte-for-byte | HOLDS |
| `content.ts:239-246` | comment block opens at `:238` | DRIFTED → `:238-246` |
| `content.ts:275`, `:277`, `:56` | META title; META description; `ENTRY_AVAILABLE = true` | HOLDS |
| `opengraph-image.tsx:12`, `:90`, `:91` | `alt`; both `<div>`s | HOLDS |
| `landing-content.test.ts:76`, `:77`, `:78`, `:378`, `:73-86`, `:62-71` | canon asserts; PRINCIPLE regex; slopCheck over PROSE | HOLDS |
| `render.mjs:88` | `t.includes('Marketing that runs while you run the shop')` | HOLDS |
| `landing/page.tsx:192`, `:195`, `:205` | `<section id="waitlist">`; `WAITLIST.title` h2; `<WaitlistForm />` | HOLDS |
| `channel-readiness.md:13`, `:14`, `:15` | Instagram SHIPPED, Facebook SHIPPED, Meta ads SHIPPED; reply `:359`/`:372` in the Engage cells | HOLDS |
| `channel-readiness.md:16`–`:19` | X PARTIAL; Reddit **BLOCKED on credentials**; TikTok SHELL ONLY; Google Ads LABEL ONLY | HOLDS |
| `meta.ts:420-425`, `:467-472` | `like_count`/`comments_count`; likes/comments/shares | HOLDS |
| `meta.ts:359`, `:372` | `replyToInstagramComment`, `replyToFacebookComment` | HOLDS |
| `claims-pure.ts:388`, `:389` | both branch strings verbatim | HOLDS |
| `grok.ts:587` | "4 distinct content-batch briefs for this week" | HOLDS |
| `scan/page.tsx:302`, `:337`, `:681` | H1; `disabled={!url.trim() || !email.trim()}`; footer tagline | HOLDS |
| `scan/welcome/page.tsx:194` | same footer tagline | HOLDS |
| `tour/page.tsx:162`, `:10` | "Watch one week go out."; "one week of Player2" | HOLDS |
| `waitlist/route.ts:31-34` | "Nothing here sends email. That is the standing rule…" | HOLDS |
| `tier.ts:107`, `:109` | `'posting on a schedule without a click'`; `ads: 'ads and boosts'` | HOLDS |
| `scheduled.ts:83` | `requireCapability(workspaceId, 'arm_auto_publish')` | HOLDS |
| `auto-publish.ts` grep | re-ran `grep -nEi "ads\|spend\|budget\|boost"` — no output, exit 1 | HOLDS |
| `ads/launch/route.ts:11-14`, `:13`, `:21-23`, `:30-31`, `:36-41` | HARD HUMAN GATE comment; confirm refusal; workspace check; $5–$500 / 1–30 days | HOLDS |
| `ads/launch/route.ts:25` | blank line. `getActiveWorkspace()` is at `:26` | **DRIFTED → :26** |
| `meta-ads.ts:7`, `:327` | "bills the workspace's OWN ad account"; "Spend bills the workspace's own ad account" | HOLDS |
| `design-system.test.ts:685` | `BANNED_WORDS = ['conductor','arming','red-teamed','standing watches','api tier','sweep']` | HOLDS for `arming`; does **not** support the "no `slots`" half — `slots` is not in the list |
| `brand-config.ts:26`, `:105` | `DEFAULT_POST_HOURS`; the spread-merge | HOLDS |
| `agent.ts:74` | "postingHoursET if discussed" | HOLDS |
| `MARKETING.md:44`, `:45` | Entry list naming "Instagram, Facebook, X and Reddit"; "Autopilot… no click needed" | HOLDS |
| `MARKETING.md:46` | `Footer line with pink dot: "On both plans, nothing spends without your click."` The quoted autopilot/soften note is at **`:47`** | **DRIFTED → :47** |
| `MARKETING.md` (footer tagline, no line) | `:133` rules `"Player2 · P2 Labs · your marketing employee"` — different order from the artifact's string | **WRONG** |
| `position-v2` §6.2 PROHIBITED quote (§1) | verbatim in the §6.2 table | HOLDS |
| `position-v2` §1.6 (§3) | text present; source is GATE-FAILED and cited without a line number | HOLDS as text, weak as a receipt |
| `waitlist-front-door.md:22`, `:23`, `:24`, `:25`, `:26`, `:23-24`, `:40` | all verbatim as claimed | HOLDS |
| `waitlist-front-door.md:74-76` | item **(ii)**, "the hero is canon and locked… a spec change for the build org, not a copy edit". The zero-owners claim is `:71-73` | **WRONG** |
| "character 77" / "159 characters" | `len == 159`; "get in line." closes at the 77th character | HOLDS |
| "~155 characters" (search-result render width) | no receipt anywhere in the file | no receipt |
| **Not cited anywhere, and load-bearing:** `content.ts:87`, `:167`, `:178`; `waitlist-gate.ts:34`, `:44`; `checkout/route.ts:37-38`; `tier.ts:46`, `:53`, `:79` | see MUST-FIX 2, 4, 5 | missing |

## WHAT I COULD NOT CHECK

- **Instrument: `sed`/`awk` line reads and `grep` against the working tree at `9b5b484` (grafted clone, `git status` clean).** Blind spot: a grafted clone has no history, so I confirmed the tree matches the commit the artifact names but cannot confirm the artifact's claim that its numbers were *read* at that commit rather than carried forward from `ebac7d1` and coincidentally landing.
- **Instrument: reading each cited range plus a few lines either side.** Blind spot: a citation that lands on plausible text a few lines from the intended item passes this instrument — which is exactly the failure mode of `waitlist-front-door.md:74-76`, and I caught that one only because I had read the whole short file. For the long files I read windows, so a similar near-miss elsewhere would not have surfaced.
- **Instrument: string comparison against §6.2's written rows.** Blind spot: it cannot tell whether a reader takes `Come hire Player2.` as a door or a queue. Zero owners have read the artifact's strings, and zero have read my proposed replacements; every landing claim in this review, mine included, is `UNTESTED`.
- **`npm test` did not run** — same reason the artifact gives: no dependencies in this clone. So `landing-content.test.ts:73-86` and the `slopCheck` at `:62-71` are unexecuted against both the artifact's strings and my proposed ones; I read the assertions, I did not run them.
- **`docs/design/redesign-2026-09/MARKETING.md` COPY v2/v3 precedence.** `:133` rules the footer tagline and `:152` says COPY v3 "overrides COPY v2's pricing block and every self-serve CTA". I read both lines; I did not trace whether anything later in that file supersedes `:133`, so my MUST-FIX 6 remedy rests on the ruling being current.
- **Reddit's true grade.** My brief names `channel-readiness.md` as the only channel authority and it says BLOCKED; `position-v2` §3.1 says NOT CHECKED on code receipts. I did not adjudicate between two gated artifacts, and neither does the artifact under review.
