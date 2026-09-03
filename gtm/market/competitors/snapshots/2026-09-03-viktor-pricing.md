# PRIMARY SNAPSHOT — Viktor (viktor.com), pricing + "hire an AI employee"

CONFIDENTIAL — internal competitor intelligence (doctrine law 8). Nothing in
this file reaches an external surface without its own receipt and Phin's click.

STATUS: OBSERVED (the two pages below, as fetched) / NOT OBSERVED (everything
this file marks NOT OBSERVED — chiefly the credit-bundle ladder, which is
rendered client-side and is not in the bytes we hold)
CAPTURED BY: GTM boss, shift 14, 2026-09-03
WHY: the chief's 20:00 entry asked for the "Victor AI" AI-employee model that
Phin named, snapshotted per the doctrine rather than taken from his word or
the chief's. The chief's 20:25 entry graded the prior read **THIRD-PARTY,
UNVERIFIED** because two of its sources were direct competitors' blogs. This
file replaces that read with a primary capture and **corrects it in one
material place** (see §5).

## 1. Fetch record (the receipt — reproducible)

| | Page A | Page B |
|---|---|---|
| URL | `https://viktor.com/pricing` | `https://viktor.com/hire-an-ai-employee` |
| Fetched (UTC) | 2026-09-03T20:20:35Z | 2026-09-03T20:20:35Z |
| HTTP | 200 | 200 |
| Raw bytes | 360,375 | 378,418 |
| SHA-256 (raw HTML) | `4bc28025bdb80bf66be6e420cae6920f9d25ff6e1fdd1b55d1f30f7c68869881` | `4d074e56692038bdcee5330f8dfd2bb3e332f4a1abb144168ccd26f999cb7f09` |
| Retained RAW HTML | `2026-09-03-viktor-pricing.raw.html` | `2026-09-03-viktor-hire.raw.html` |
| Retained extracted text | `2026-09-03-viktor-pricing.extracted.txt` | `2026-09-03-viktor-hire.extracted.txt` |
| SHA-256 (extracted), **AMENDED 2026-09-03** | `349f17eca7f911f27a59bbde23cf76dfbc49536fa04967ff2f2c88425b833566` | `209d09907caf43b624ab83a3384cd57839c3b9d74fcee557cd4031fa00bbbcaf` |
| ~~SHA-256 (extracted), as first recorded~~ | ~~`1176ffec…`~~ | ~~`9fcaf4a9…`~~ |

Method: `curl -L`, script/style stripped, tags to newlines, entities
unescaped, blank lines dropped. Every cell below is quoted from the retained
text, not from memory.

## 1a. AMENDMENT 2026-09-03 — the receipt was defective and is now complete

**Caught at the competitor-salesperson gate (round 1 by a wrong diagnosis,
round 2 precisely). Recorded here because a receipt that is quietly repaired
is not a receipt.**

**What was wrong.** The extraction stripped `<script>` blocks, and with them
the page's **FAQPage JSON-LD — every FAQ answer.** §3 below then quoted those
answers under a heading promising *"verbatim from the retained text"* while
the retained text did not contain them. **Eight quoted strings were affected**,
audited string-by-string against the pre-amendment file
(`git show 1b601a6`): *"Viktor pricing is workspace-based…"*, *"roll over for
one month"*, *"Free trial and bonus credits never expire"*, *"The only
difference is how many credits you get"*, *"Most solo users find 20K–40K
plenty for a month"*, *"Roughly 40-200 tasks…"*, *"sensitive actions wait for
your approval"*, and *"One hire can support every department"*. Those eight
carry A37's no-feature-tiering grade, §5.2 and both legs of §5.3 in the
position, and §2.3's approvals row. **The three strings the r1 gate happened
to name were not the scope; two of those three were present all along.**

**What was NOT wrong, and the record must say so:** every string is real and
verbatim on the page. The r1 charge of fabrication was mistaken.

**The fix, and why it is now reproducible by a second reader.** The raw HTML
is **retained in this directory** and hashes to the values recorded above —
`4bc28025…` and `4d074e56…`, unchanged since the fetch. The JSON-LD was
recovered **from those retained bytes, nothing re-fetched**, appended to each
`.extracted.txt` under a dated amendment block, and the extracted hashes in
§1 updated in the same commit. **Anyone can now re-run the extraction against
the retained raw file and reproduce both hashes.** The earlier version of this
amendment did not retain the raw bytes and did not update §1's hashes, so the
receipt failed its own verification test for one commit; that is recorded
rather than erased.

**Limit of the method, still standing:** the plan card's credit-bundle
selector is a client-side listbox. The bytes contain only its **default**
option. Any figure for another bundle is NOT OBSERVED here, whatever a blog
says.

## 2. Plans, as printed

| Plan | Price, as printed | Allowance, as printed |
|---|---|---|
| Free | `$0 / month` | `up to $100 in free credits` · `Free credits never expire` |
| **Team** (`Most popular`) | **`$100 / month`** | **`40,000 credits monthly`** (the listbox default) |
| Enterprise | `Custom` | `Volume credit pricing with discounts` |

**The `$50` figure, exactly where it appears and where it does not.** It is
NOT on a plan card. It appears in the page `<title>` — *"Viktor Pricing: Free
to Start, Plans From $50/Month"* — in the meta description, and in the footer
CTA on both pages: *"Start free with $100 in credits, then $50 a month."* The
hire page's FAQ states it as prose: *"Paid plans start at $50 per month for
the whole workspace, not per seat."*

So **$50/mo is an OBSERVED "from" claim in their own copy**, and **$100/mo for
40,000 credits is the only OBSERVED plan card.** Both imply the same unit
rate — $2.50 per 1,000 credits — and that arithmetic is the only support for
the third-party claim of "$50/mo for 20,000 credits." **The 20,000 figure
appears on the page once, in an FAQ question, with no price attached.** Record
it as PLAUSIBLE-UNCONFIRMED, not as a plan.

## 3. Terms, verbatim from the retained text

*(Eight of the strings below are FAQ answers recovered by the §1a amendment. They are verbatim from the retained raw HTML and are now in the retained extracted text.)*

- **No seats.** `Is there a per-seat charge?` → *"No. Viktor pricing is
  workspace-based. Your team shares the same workspace credits."* Plan card:
  *"No per-seat licenses, no minimums, no surprise platform tiers as you
  scale."*
- **Rollover, bounded.** Card: *"Unused credits roll over to next month."*
  FAQ: *"Unused monthly plan credits now roll over for one month… Free trial
  and bonus credits never expire."*
- **No feature tiering at all.** `Do I get access to all features on every
  plan?` → *"Yes. Every plan includes all integrations, all capabilities,
  Viktor Spaces, scheduled tasks. Everything. **The only difference is how
  many credits you get.**"*
- **Everything is metered.** Section head: *"Credits power everything."*
  *"Every credit reflects the model work done across Anthropic, OpenAI, and
  others."* *"Scheduled automations run on credits too. Frequency matters."*
- **Published task costs.** `Quick Tasks 100-300 credits` ·
  `Complex Workflows 500-1,500 credits` · `Full Projects 2,000-5,000 credits`.
  FAQ: *"Roughly 40-200 tasks depending on complexity… Most solo users find
  20K-40K plenty for a month."*
- **Surface.** *"Lives in Slack and Microsoft Teams"*, *"Works across 3,200+
  tools"*, install *"from the Slack App Directory or Microsoft Teams."*
- **Approval model.** *"sensitive actions wait for your approval."*
- **Self-printed trust figures** (theirs, on their own page — never carry as
  third-party): `4.9 on G2`, `60,000+ workspaces hired Viktor`, `SOC 2
  compliant`, a named logo row, and two case-study panels.
- **Their hiring copy.** `Hire an AI Employee. Not Another Tool.` ·
  `One hire. The output of a team.` · `Your whole team gets an analyst, an ops
  lead, and an engineer. For the price of lunch.`
- **Their competitive set**, from their own nav: *vs ChatGPT, vs OpenClaw, vs
  Claude Tag, vs Tasklet, vs Lindy Teammate, vs Grok Bot, vs Superhuman Go.*

## 4. NOT OBSERVED — do not fill these in from a blog

- The credit-bundle ladder above/below 40,000 (client-side listbox).
- Whether a $50 plan exists as a purchasable card, and what allowance it
  carries. The "from $50" prose is theirs; the mapping to 20,000 is not.
- Overage / top-up pricing beyond the card phrases *"Top up on demand"* and
  *"Auto-topups with monthly spend cap."*
- What a credit costs them, their margin, or the model routing behind
  *"smart caching."*
- Any churn, retention or realised-ARPU figure. **Nothing here says whether
  land-cheap-expand-on-usage actually works for them** — only that they run it.
- Whether the free $100 converts. No funnel data is printed.

## 5. The correction this capture makes to the record

The chief's 20:25 entry carried, at THIRD-PARTY UNVERIFIED: *"credit-based, no
per-seat fee, entry around $50/mo for 20k credits, credits mapped to model
usage."*

**Three of four hold on primary capture.** Credit-based: OBSERVED. No
per-seat: OBSERVED, in their own FAQ. Credits mapped to model usage: OBSERVED,
near-verbatim. **The fourth is where the third-party read was thin:** "$50/mo
for 20k credits" is a *from*-price in prose plus an unpriced FAQ number, and
the only plan card the page prints is **$100/mo for 40,000**. A buyer landing
on that page sees $100, not $50. **That is a 2× difference in the anchor, and
it is the whole reason the doctrine says snapshot before use.**

## 6. The finding that actually bears on our shift

**Viktor meters the mind.** Thinking, asking, reporting, scheduled
check-ins — all of it spends credits, by their own text. Phin has RULED the
opposite for us (build item 31). **This snapshot does not re-open that
ruling; it establishes that the one real AI-employee comparable we can observe
does the opposite, so our split is a genuine bet and not a consensus.** It is
graded as such in the position's objection section.

**And their hiring frame is not novel.** *"Hire an AI Employee. Not Another
Tool."* is their headline, at 60,000+ claimed workspaces. Ours is novel **in
the SMB social-marketing category**, which is a narrower and defensible claim
than "nobody says this."
