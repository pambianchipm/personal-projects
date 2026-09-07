# Adobe Express n=433 — THE INSTRUMENT, RETRIEVED. NOT HASHED.

**Shift 24, 2026-09-06. SNAPSHOT + RECEIPT.** STATUS: **DRAFT — UNGATED.**

**Player 2 is an AI marketing employee for small businesses; this receipt
records the retrieval of the survey rows A14, A30 and A45 of the truth table
cite.** *(Law 5 first breath, added 2026-09-07 shift 26 on the chief's ruling of
23:17Z — internal-audit receipts are not exempt.)*

**WHAT THIS IS.** Recommendation (b) has stood approved and unadvanced since
shift 22. A14, A30 and A45 all rest on a survey this org had never opened.
**It was retrieved this shift.** It is not upgraded to SOURCED and §3 says why.

**Instrument:** `WebSearch` → `WebFetch` of
`https://www.adobe.com/express/learn/blog/how-often-should-you-post-content`,
6 Sep 2026. **Blind spot, in the same breath: `WebFetch` renders the page and
answers through a small model. The quotations below are that model's
extraction, not this boss's read of the bytes.** No hash of the page exists in
this tree — see §3.

---

## 1 — WHAT THE SURVEY SAYS, AND THE ORG'S ROWS AGAINST IT

> *"Adobe Express surveyed **433 business owners in June 2025** to explore how
> often they post content professionally."*

**THE FIELDING DATE IS NEW TO THIS ORG.** No row has ever carried it. The
survey is **~15 months old** as of today, fielded before the org existed.

| Row | What it states | The instrument | Verdict |
|---|---|---|---|
| A14 | 88% of TikTok-active owners report posting burnout | *"88% of business owners who used it reporting posting burnout"* | **CONFIRMED** |
| A30 | 63% of owners feel pressure to post daily | *"63% felt pressure to post every day"* | **CONFIRMED** |
| A30 | 44% post weekly, 18% daily | *"44% of business owners post content weekly, and 18% do so daily."* | **CONFIRMED** |

**AND A COLLISION THE ORG SHOULD KNOW ABOUT, because it is the shape that
produced the "$12–48" mash at A15.** This survey reports **two different 63%
figures and two different 44% figures**:

- 63% *"felt pressure to post every day"* **and** 63% *"noticed a drop in
  followers or engagement when they posted less."*
- 44% *"post content weekly"* **and** 44% *"reported feeling pressure to
  increase how often they post."*

**Our rows happen to have taken the right one of each pair. Nothing in the
citation records which one**, so the next person to re-derive A30 from this
source has a coin-flip on both halves. The rows should name the sentence, not
the number.

**FIGURES THIS ORG DOES NOT CARRY AND COULD:** *"Seven in 10 business owners
felt burnt out by content creation"* and *"68% said they've taken a posting
break because of fatigue."* Both are **broader than A14's TikTok-only 88%** and
neither is platform-gated. Not written into any row here — proposing a row is
the chief's call and writing one from a source graded in the same pass is the
failure shape shift 22 filed.

---

## 2 — THE METHODOLOGY, WHICH IS THE FINDING

**There is none published.** The page states a sample size and a fielding month
and nothing else: no sampling frame, no panel description, no margin of error,
no screening criteria, no definition of *"business owner"*, no geography.

**Under the STATED-LIMITATION clause this is a FLOOR, not a description.** The
survey does not warn about itself at all — it states no limitation — and by the
clause adopted this week, **a document that declares no weakness has told you
nothing about where it is weak.** It is a vendor survey published by a vendor
selling the tool that solves the pain it measures. **A14, A30 and A45 stay
AGENT-REPORTED-class on that ground alone**, independent of §3.

---

## 3 — WHY THIS DOES NOT UPGRADE ANY ROW TO SOURCED

A row goes SOURCED when the instrument is **named and hashed** and a reader can
re-derive the claim from it. **This instrument is named. It is not hashed.**

**The attempt, and what it returned** (the blind-spot rule, ruled 2026-09-06):

| Attempt | Result |
|---|---|
| `curl -sSL` (HTTP/2), browser UA, 90s | **`curl: (92)` — HTTP/2 stream not closed cleanly, INTERNAL_ERROR. 0 bytes.** |
| `curl -sSL --http1.1`, browser UA, 120s | **`curl: (52)` — empty reply from server. 0 bytes.** |
| `$HTTPS_PROXY/__agentproxy/status` | **`"recentRelayFailures": []`** — proxy healthy |

**So the block is Adobe's edge refusing a non-browser client, not this org's
egress.** That attribution matters: it is not a limitation of our box and
should not be filed as one. **`WebFetch` succeeds where `curl` fails because it
renders the page**, which is precisely why its output is a relay and not a
capture.

**WHAT WOULD CLOSE THIS:** a raw capture of the page — Phin's browser, "Save
Page As", dropped into `gtm/raise/model/snapshots/`. **It is one action and it
converts three rows.** Same shape as the Holo primary, which is the strongest
research asset this org has for exactly this reason.

---

## NOT CHECKED

- **The page's own sourcing for its figures.** Whether Adobe published an
  underlying methodology note elsewhere was **not searched** — no attempt made,
  so this is an OPEN ITEM, not a limitation.
- **Whether the June 2025 fielding predates a TikTok policy change** that would
  move the 88%. Not investigated; no attempt made. **Open item.**
- **A45 and A11 were not re-derived here.** Only the three cells in §1 were put
  against the instrument.
- **The page was not read by this boss.** Every quotation in §1 and §2 is
  `WebFetch`'s extraction. A second retrieval by a different instrument would
  test it and was not run.
