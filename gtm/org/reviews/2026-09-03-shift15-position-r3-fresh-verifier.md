# Round-3 fresh verifier — `position-v2-the-hire.md` — shift 15

CONFIDENTIAL — internal-audit class (law 8).

FILED BY: boss, shift 15 (2026-09-03), executing shift 14's handoff, whose
first line was *"NEXT SHIFT'S FIRST ACT, NOT NEGOTIABLE: the round-3 fresh
verifier."*

**VERDICT: FAIL.** Four gate-blocking findings, 16 required edits, **all
applied this shift.** The artifact is **NOT GATED and may not be cascaded.**

**Fan-out disclosure:** one fresh verifier (Opus 5), not a persona — a
receipts-and-consistency auditor, per the review budget's "round 3 = fresh
verifier." It had not seen rounds 1 or 2. The three carry-ins named in shift
14's handoff went into its brief verbatim, as did the two standing rules
adopted that shift.

**Ledger filed BEFORE the edit pass**, per the rule shift 14 adopted after
breaking it. The full 64-row ledger, its scope note, its four required-edit
sections and its disclosed-floor answer are reproduced verbatim below.

---

## The two carry-ins that CLOSED, and the boss says so plainly

**Carry-in B — the Viktor receipt chain: CLOSED.** All four hashes recompute
byte-for-byte against the raw bytes retained in-repo. The verifier refused to
trust §1a's account of its own repair and recomputed instead — which is the
correct method and is why this can be called closed. Two soft over-claims
remain (the extraction is not re-derivable from the stated method alone
because of an appended JSON-LD block; and a "20,000 appears once" count is
now wrong in its own repaired file). Neither is gate-blocking; both fixed.

**Carry-in C — `allowance.ts` custody: CLOSED as an audit, and it found no
fabrication.** Every quotation is now line-located: **5 byte-exact**, 1 with
a silently elided word ("8 a week" for "8 videos a week"), 2 that were
**derivations typeset as quotations** ("4 of 4 videos this week", "3 of 4"),
and 1 whose enforcement receipt pointed at the wrong test file. All four
defects fixed with line numbers this shift. §7.15's self-grade was accurate.

## The four gate-blocking findings, verified by the boss before acting

| # | Finding | Boss's independent verification |
|---|---|---|
| **F-1** | §1.6's shippable hero block still contained a sentence §6.2 **bars** — the r2 MUST-FIX was applied in one of the two places the sentence lives | `grep -n "ad budget is yours, set by you"` → **2 hits**, L209 (ship block) and L840 (PROHIBITED column). Confirmed. **This was a live path to a false claim on a landing page.** Removed; the count is now 1, in the prohibited column only |
| **F-2** | The r2 entry-price correction was **itself wrong**: its ~$72.8/mo assumed seconds-based metering | `xai-video.ts:49` `MAX_VIDEO_SECONDS = 10`; `:52` `clampDuration`; `:208` and `:217` both wrap `meterGeneration(…, 'video', …)`; `allowance.ts:44` `video: 4`, `:100` `allowed: used < limit`. **The meter counts CALLS clamped to ten seconds.** A 30 s Reel is a three-call chain against a four-call weekly allowance — ceiling ~$24.27/mo, not $72.80. Confirmed |
| **F-3** | §4.0 reported a **cost share as a gross position** — in the paragraph written to fix an over-claim | `37/59 = 62.7%` is the COST share; gross there is `(59−37)/59 = +37.3%`; bad end `(59−76)/59 = −28.8%`. Flattered the good end by ~26 points. Confirmed |
| **F-4** | `channel-readiness.md`, cited as "the authority" for §3.1 and in §2.1, **does not exist** | `find /home/user/clinkworthy -iname '*channel*readiness*'` → nothing; `docs/` carries `channel-analytics-design.md`, not it. Round 2 could not open it because the repo was absent; round 3 had the repo and it is still absent. Confirmed |

**On F-2, the distinction that matters and that the boss is recording
against itself:** the r2 conclusion — *entry pricing is UNRESOLVED* — was
**right**, and it survives. Its stated reason was wrong. An unproven claim
carrying a graded row's number is worse than an unlabelled guess, because it
inherits a grade it did not earn. The corrected section now says entry is
unresolved because **A21's reasoning layer is PROJECTED and unmeasured and
A39's top end exceeds the price** — not because video is underwater, which
shipped code says it is not.

---

## RETRO — the review budget's three rounds are spent (protocol: "a capped loop gets a retro")

Four gates and a fresh verifier ran across shifts 14–15. Every one failed.
The question a retro owes is not "were the reviewers right" — they were, on
every finding the boss could independently verify — but **why four rounds did
not converge.**

**1. The corrections did not travel.** F-1 is the same defect shift 13's
gates named: a fix applied to one of the two places a fact lives. Shift 13
adopted a propagation rule for the competitor artifacts (card first, dossier
second). **That rule was never generalised**, so the position artifact
repeated the failure in a file with no card/dossier split at all. *Rule
proposed: a correction is not applied until `grep` shows every instance of
the corrected string is either fixed or explicitly marked superseded — and
the grep goes in the verdict.*

**2. A correction was trusted because it was self-critical.** The r2 entry-
price finding read as the boss marking down its own recommendation, which is
the shape of an honest finding — and it was wrong on its premise. **Nobody
checked it against code because it was uncomfortable.** *Rule proposed: a
self-indicting correction gets the same receipt check as a flattering one.
The direction a claim points is not evidence about it.*

**3. Three rounds asked four different questions.** r1 and r2 were persona
gates; r3 was a receipts auditor. The receipts auditor found four blockers
in one pass that three persona rounds had not — because personas attack the
argument and auditors attack the citations, and this artifact's defects were
overwhelmingly citation defects. *Rule proposed: an artifact whose load is
receipts (a pricing argument, a channel table) gets the auditor FIRST, not
third.*

**4. The disclosed floor was doing less work than it looked like.** §7 listed
18 honest gaps and still omitted the shift's most consequential finding —
entry pricing unresolved — which lived only in a parenthetical inside a
sub-point. The verifier's line is the one to keep: **"A finding buried in a
parenthetical is disclosed to the auditor, not to the reader."** *Rule
proposed: if a finding changes a recommendation, it goes in the floor list or
it has not been disclosed.*

**What is genuinely strong here, and the retro should say it:** law 1 handling
is the best in the tree — `UNTESTED` inline at all eight resonance sites, the
roleplay biography explicitly regraded to nothing at §2.5, and the chief's own
inversion quote removed rather than repaired when it proved UNSOURCED. The
verifier's summary: *"This file discloses more against itself than any
artifact I have audited."* It still failed, and both of those things are true.

---

## The verifier's raw output, verbatim

**Scope note (the verifier's own).** *"I verified, at cell level: the three
carry-ins (A entry price, B Viktor hashes, C `allowance.ts` custody) in full;
doctrine laws 1, 2, 4, 5, 8; every `A#` row the file cites by ID; every
competitor string the file quotes; every code receipt the file names, against
`/home/user/clinkworthy` at `65cd3f6`. I did **not** re-litigate settled r1/r2
findings, and I did not audit §1.1–§1.2 rhetoric beyond its receipts. Nothing
was modified. Where I allege absence, the grep and its result are shown."*

### Carry-in A — the entry-price correction

| # | Cell | Theirs | Mine (shown) | Verdict |
|---|---|---|---|---|
| 1 | §4.1 heading | `### 4.1 Entry (A1): HOLD $59. Do not drop to $29.` | The r2 correction sits 40 lines below and says the opposite: *"entry's price is unresolved… not that $59 is right and $29 is wrong."* Heading unchanged from the superseded basis | **MISMATCH** |
| 2 | §4.1 recommendation | `**Recommendation:** entry stays **$59/mo**.` | The correction is quarantined inside an italic parenthetical inside sub-point 1 of a four-point list. The section's two load-bearing sentences still assert the pre-correction verdict. **The "cosmetic, not argued" failure the carry-in predicted** | **MISMATCH** |
| 3 | §4.1(c) $72.8 | *"the same ruled allowance is ~$72.8/mo against a $59 price"* | `17.3333×4.20 = 72.79986` reproduces — **but the premise is false against shipped code.** `xai-video.ts:52` `clampDuration` caps every call at `MAX_VIDEO_SECONDS = 10` (L49); both entrypoints meter (`:208`, `:217`). The allowance meters **calls, not seconds** (`allowance.ts:44 video: 4`; `:100 allowed: used < limit`). A 30 s Reel = a 3-call chain = 3 of the 4 weekly units. Shipped ceiling = `17.3333 × $1.40 = $24.27`/mo. **Over-states by ~3× and is unreachable without a code change** | **MISMATCH** |
| 4 | §4.0 | *"entry's gross position ranges from roughly 63% down to negative"* | `37/59 = 0.6271` → **62.7% is the COST share, not the gross position.** Gross at that end `(59−37)/59 = 37.3%`; bad end `−28.8%`. **A cost ratio reported as a margin, flattering the good end by ~26 points — inside the paragraph written to correct an over-claim** | **MISMATCH** |
| 5–10 | A9/A21/A39 band, §4.1 reasons 1–2, A9 floor, image tail | as cited | `25/59=42.4%`, `38/59=64.4%`, `25+12=37`, `38+38=76`; `17.3333×1.40=24.2666`, `×2.00=34.667`; A9 floor $24.87; image tail $0.6–3 | **MATCH** |
| 9 | §4.0 image price | *"$0.02–0.07 each, which is noise"* | Byte-exact in `allowance.ts:35–37` — but **A7 says $0.02–0.08** (widened 2 Sep). A price disagreeing with the truth table, uncaveated | **PARTIAL (law 4)** |
| 11 | §7 disclosed floor (18 items) | — | `grep -n '72.8\|unresolved'` in §7 → **zero**. **The floor does not contain "entry pricing is unresolved" — the single most consequential open item this shift produced** | **MISMATCH** |

### Carry-in B — the Viktor receipt chain (recomputed, not trusted)

| # | Cell | Theirs | Mine (recomputed) | Verdict |
|---|---|---|---|---|
| 12 | raw hash, page A | `4bc28025…69881` / 360,375 B | `sha256sum` → `4bc28025bdb80bf66be6e420cae6920f9d25ff6e1fdd1b55d1f30f7c68869881`; `wc -c` → `360375` | **MATCH** |
| 13 | raw hash, page B | `4d074e56…cb7f09` / 378,418 B | `sha256sum` → `4d074e56692038bdcee5330f8dfd2bb3e332f4a1abb144168ccd26f999cb7f09`; `wc -c` → `378418` | **MATCH** |
| 14 | amended extracted hash A | `349f17ec…833566` | recomputes exactly | **MATCH** |
| 15 | amended extracted hash B | `209d0990…bbbcaf` | recomputes exactly | **MATCH** |
| 16 | §5.0 | *"The raw-HTML hashes are unchanged, because the bytes are."* | Both prefixes reproduce. **Carry-in B is closed: all four hashes recompute against retained bytes in-repo** | **MATCH** |
| 17 | §1a | *"Anyone can now re-run the extraction and reproduce both hashes."* | Not reproducible from the stated method alone — the extracted files carry an appended dated JSON-LD block the method line does not describe. **The hashes verify the retained artifacts; they do not verify a re-derivation** | **PARTIAL** |
| 18–21, 25–27 | "Shared across your whole workspace", "One hire can support every department", "No credit card, no sales call", the three plan cards, task-cost bands, §5.3 quotes, §1.3 hire-page lines | quoted as verbatim | `grep -Fic` → 1, 1, 2/2/1, and all card/band strings present. Lines joined across the extractor's tag-newlines — inherent to the method, **not fabrication** | **MATCH** |
| 22 | §5.1 | *"`20,000` appears once."* | `grep -o '20,000' \| wc -l` → **2** (visible FAQ heading + the same question duplicated inside the §1a amendment). Substance holds; **the count statement is now wrong in its own retained file** | **PARTIAL** |
| 23 | §5.1 | *"`$50/mo` … in their `<title>`, meta description and both footer CTAs"* | All three locations confirmed — but the literal `$50/mo` appears **nowhere**; the page says `$50/Month`, `$50/month`, `$50 a month` | **PARTIAL** |
| 24 | §5.2 | *"**No feature tiering at all**"* | Quote verbatim — **but the retained plan cards contradict it**: Team adds top-ups, auto-topups with spend cap, workspace sharing; Enterprise adds per-user spend cap, volume pricing, invoicing. **The seller's claim printed as OBSERVED fact, then imported as a recommendation in §5.3** | **PARTIAL** |
| 28 | §1.5 "for the price of lunch" | quoted | `grep -n 'lunch'` → `viktor-pricing.extracted.txt:212`, byte-exact. *(First grep against the hire file alone returned 0; recorded per the standing rule, because a zero on the wrong file is not a fabrication finding)* | **MATCH** |

### Carry-in C — `allowance.ts` chain of custody (`grep -n` against the real file)

| # | Cell | Mine | Verdict |
|---|---|---|---|
| 29 | image-price reasoning | `allowance.ts:35–37`, byte-exact | **MATCH — no line cited in artifact** |
| 30 | *"8 a week was $48–69/month…"* | `:32–34` reads **"8 videos a week"** — one word silently elided, no ellipsis | **PARTIAL** |
| 31 | `allowed: used < limit` = hard refusal | `:100`, byte-exact; truth table `:88–89` | **MATCH — L100** |
| 32 | *"4 of 4 videos this week — resets Monday"* | `grep -n '4 of 4'` → **0**. Correct **derivation** from `counterLabel` (`:121`) + `counterLines` (`:144`) at `video: 4`; the file's own examples use the **stale 8-cap** (`:114`, `:116`) | **PARTIAL — derivation typeset as quotation** |
| 33 | *"3 of 4 videos this week"* | `grep -n '3 of 4'` → **0**; source example is `3 of 8` (`:114`) | **PARTIAL — same** |
| 34 | `AllowanceVerdict` carries `remaining` | `:72–79` | **MATCH — L78** |
| 35 | *"COUNT, NEVER COST"* "enforced by a build-failing test" | `:9` byte-exact. **Enforcement claim mis-points:** `:12–14` says the guard is `design-system.test.ts`, on client surfaces, and "predates this file… not rebuilt here." A real guard exists at `console/lib/__tests__/allowance.test.ts:80, 85, 204` — **not the one the artifact points at** | **PARTIAL** |
| 36–38 | `image: null` uncapped; A8 + `allowance.ts` both say four a WEEK; objection-bank O3's "four videos a month" | `:42–45`; `:44` + `:35`; objection-bank L49 byte-exact | **MATCH — the 4× law-4 defect is real and correctly assigned to the bank** |
| 39 | §7.15 self-grade | Confirmed by rows 29–37: 5 byte-exact, 2 derivations-as-quotes, 1 elision, 1 mis-pointed. **Zero line numbers anywhere.** Self-grade accurate | **MATCH** |

### Laws 5, 8, 2, 4, 1

| # | Cell | Mine | Verdict |
|---|---|---|---|
| 40 | Law 5 first breath | Category named in the first breath, matching assumptions.md's own line, with §3.1's non-completeness discipline | **MATCH** |
| 41 | Law 8 cascade boundary | Fully-formed shippable copy exists **outside** the licensed set: §1.6 ("What copy may say TODAY"), §3.1's platform sentence, §6.1 ("The position, in one paragraph"). **Either the header's licence is wrong or three copy blocks are unlicensed** | **MISMATCH** |
| 42 | §1.6 vs §6.2 | *"Your ad budget is yours, set by you, and separate from the subscription"* — **licensed in §1.6's ship block, PROHIBITED in §6.2.** The r2 MUST-FIX was applied to §6.2 only. §1.6 says "Verify it is true before it ships" — a footnote where §6.2 requires a bar. **The most dangerous single defect in the artifact: a fast-reading copy org lifts the hero block, not the table** | **MISMATCH (gate-blocking)** |
| 44 | §2.1/§3.1 `channel-readiness.md` | `find / -name '*channel*readiness*'` → **no results**; `docs/` has 29 entries, not it. Clone is real and current (`65cd3f6`). **The most operationally load-bearing table in the file rests on a file that is not there** | **MISMATCH (gate-blocking)** |
| 45 | §3.1 grades, independent of 44 | Corroborated in code: `channel-data.ts:22 SHELL_PLATFORMS = ['tiktok']`; `api/channels/route.ts:4`; Google Ads only a prompt label (`grok.ts:408`); X publish ships while X engagement is tier-gated → PARTIAL fair. **5 of 7 rows corroborated** | **PARTIAL — content corroborated, citation unopenable** |
| 46 | §3.1 Reddit "BLOCKED on credentials" | Not corroborated; code treats Reddit as a copy-paste channel, same class as TikTok. No credential-blocking receipt found. Errs safe, but unreceipted | **UNSCORED** |
| 47–50, 53, 54 | `ENTRY_AVAILABLE = true` (content.ts:56); `ENTRY_CENTS = 5900` (pricing.ts:19); ad-optimizer `$500` cap + `+$25` steps; auto-publish approval guardrail; `mcp.ts` operator connector; A3 `$499` "defined but ungated" | each opened and confirmed at the named line | **MATCH** |
| 51 | §2.4 email gate | Gate is **`RESEND_API_KEY` + `ALERT_EMAIL`** (`notify.ts:38, 44`), not `CRON_SECRET` — which gates a *caller* (`api/metrics/refresh/route.ts:20`); `sendAlert` is also called from the Stripe webhook, which is not CRON-gated. Phin's open decisions are **D13 and D14** | **PARTIAL — wrong env gate named** |
| 52 | §1.4 `WAITLIST_ONLY` | `grep -rn 'WAITLIST_ONLY'` → **0 results.** Consistent with the file's own note that item 22 is APPROVED not shipped — **but the backticked symbol reads as shipped code** | **PARTIAL** |
| 55 | A1/A2/A3/A5/A6/A8/A9/A11/A17/A21/A22/A39 | each checked against its row; all values, grades and caveats reproduce | **MATCH** |
| 56 | A15 | value cell reproduces — **but A15's grade column still reads `DIRECTIONAL … never load-bearing alone`** while the artifact leans on the OBSERVED half. Disclosed at §7.16, assigned to the chief | **PARTIAL (disclosed)** |
| 57 | A34 pointer | The cycle-end/top-up fact lives in the **snapshot**, not in A34's row | **PARTIAL** |
| 58 | A37 / A38 | `grep -o 'A[0-9]\{1,2\}'` → **no A37, no A38.** Both rows exist and hold exactly these facts. **The file routes around the truth table to the snapshot for every Viktor number** | **MISMATCH (law 4 form)** |
| 59 | Holo "24/7 cancel, no lock-in" | `grep -Fic` → 0 **because the snapshot line-wraps it**; wrap-tolerant grep finds it at `:53–54`. **Not fabricated** *(recorded per the standing rule — this is exactly the trap that produced r1's false fabrication charge)* | **MATCH** |
| 60–62 | Holo "Done-for-you ad creatives", "One subscription, every channel"; Viktor's four self-printed claims; the chief's inversion quote | present as quoted; competitor-**lack** claims correctly struck and replaced with `NOT OBSERVED`; the inversion quote confirmed absent from the Holo snapshot and **removed rather than repaired** | **MATCH** |
| 63–64 | Law 1 | `UNTESTED` inline at §1.1 (×2), §1.4, §1.6, §2.2, §2.5, §3.3, §4.1.4, §5.3.3; §2.5 regrades the SMB gate's invented biography to *"not evidence of anything"*; A22's external prohibition reproduced verbatim. **"Provenance handling is the strongest part of this artifact"** | **MATCH** |

### The verifier's disclosed-floor answer, verbatim

> **No — but it is unusually close, and the gap is narrow and specific.**
> …§7 carries 18 honest gaps, §7.14 states outright that it is not GATED,
> §7.15 flags the exact `allowance.ts` custody defect I was sent to test…
> That is the disclosed floor working.
>
> **Four things are presented as settled that the receipts do not support:**
> 1. **"HOLD $59"** is presented as a settled recommendation while the file's
>    own body says entry pricing is unresolved. *A finding buried in a
>    parenthetical is disclosed to the auditor, not to the reader.*
> 2. **"~$72.8/mo"** is arithmetic on a premise the shipped meter
>    contradicts. *An unproven claim labelled as derived from a graded row is
>    worse than an unlabelled guess, because it inherits a grade it did not
>    earn.*
> 3. **"roughly 63%" gross position** is a cost share reported as a margin —
>    wrong by 26 points in the business's favour.
> 4. **§3.1's channel table** rests on an authority file that does not exist.
>    The grades happen to be largely right, *which is luck, not process.*
>
> Plus one presentation defect that is not a truth defect but is the most
> dangerous line in the file: **§1.6 still ships a sentence §6.2 bars.**

## Boss disposition

All 16 required edits applied this shift, each verified against source before
application (the four gate-blockers independently re-derived — see the table
above). **Nothing was argued down.** The artifact remains **GATE-FAILED** and
uncascadable; a round-4 confirmation that the edits landed is the next
shift's first act. The retro above is filed because the review budget's three
rounds are spent.
