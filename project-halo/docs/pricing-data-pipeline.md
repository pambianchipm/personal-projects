# Project Halo — Price Data Pipeline Research

**Date:** 2026-09-18
**Scope:** Every practical way to get diamond, gemstone, metal and setting price data into an engagement-ring customizer with a price estimator, ranked by cost, legal risk, freshness, coverage and effort.

---

## 0. Executive summary

**The founder's assumption — "scrape it" — is the wrong default.** Not primarily because scraping is illegal (mostly it isn't, for public pages), but because for this specific product category the licensed and affiliate paths are cheap, structured, and legally quiet, while the scraping path collides with an unusually hostile legal development that landed two weeks ago.

Three findings reshape the plan:

1. **The single biggest legal caveat: `Rapaport v. Nivoda` was revived by the Second Circuit on 2026-09-04.** A district court had held in May 2025 that diamond price lists are uncopyrightable facts under the merger doctrine. The Second Circuit vacated that, reasoning that Rapaport's numbers are *expert opinion about hypothetical diamonds*, not observed transaction facts, and therefore may carry enough originality to be copyrightable. This is the live, controlling authority in the circuit Halo would most likely be sued in, and it directly targets the exact act of "copying a diamond price list and showing it next to your own number." See §4.1.
2. **James Allen no longer exists as a data source.** Signet sunset jamesallen.com during its Q2 FY2026 (ended early August 2026); `jamesallen.com` now 301-redirects to `bluenile.com`. Any plan that treats James Allen and Blue Nile as two independent price points is now double-counting one vendor.
3. **Lightbox is dead.** De Beers wound the brand down on 2025-05-09. Lab-grown wholesale has fallen ~96% since 2018 index inception and was still −13% YoY in Q2 2026 — which means *any* lab-grown price model must be refit on a much shorter half-life than natural.

**Recommended spine:** Nivoda API (breadth, free) + affiliate product feeds (per-vendor retail prices, licensed) + GIA Report Results API (identity/join key) + a metals API (daily) + GemGuide (colored stone). Fit a model on those; distribute *your own estimates*, never a stored copy of anyone's price list.

---

## 1. Licensed / official B2B data feeds and APIs

### 1.1 Rapaport / RapNet — **the price list you must not redistribute**

| | |
|---|---|
| What you get | The Rapaport Price List (benchmark $/ct by shape/size/color/clarity), plus RapNet Instant Inventory (live supplier listings), Upload Diamonds, Upload Jewelry |
| Access | Paid Rapaport subscription + Client ID/Client Secret → Bearer login token |
| Format | JSON REST. `GET /pricelist/api/Prices/list?shape=[Round\|Pear]&csvnormalized=true`, `GET /pricelist/api/Prices?shape=&size=&color=&clarity=`, `GET /pricelist/api/Prices/changes?shape=` |
| Fields | shape, low_size, high_size, color, clarity, caratprice, date published |
| Cadence | **Every Thursday, 11:59pm ET** |
| Coverage | White diamonds only, 1–10ct bands, Round and Pear only. **No fancy colored price list.** |

**Restrictions — this is the important part.** The RapTech docs state the lists "are copyrighted and available to subscribers only" and that "It is strictly forbidden to reproduce the Rapaport Price Lists in any form." The RapNet member licence goes further: the licence "does not include the right to create Benchmarks, Derived Data for external use, financial products, Model Training, Generative AI Output, or any external publication or redistribution unless expressly authorized in writing by Rapaport," and the data "may not be sold, redistributed or licensed to any third parties or contained within any commercial product or service."

> **Read that clause against Halo's business model.** A price estimator *is* a "commercial product or service," a fitted model *is* "Derived Data for external use," and training on the list *is* "Model Training." Subscribing to RapNet and using the price list as a model feature is, on the face of the licence, a breach — independent of whether the list is copyrightable. **Recommendation: do not put the Rapaport Price List anywhere in Halo's pipeline.** Use it, if at all, only as an internal offline sanity check under a subscription, and never as a feature, never as a displayed comparison, never in training data.

Sources: [RapTech price lists](https://raptech.rapaport.com/rapaport-price-lists/) · [RapTech home](https://raptech.rapaport.com/) · [RapNet developer access](https://help.rapnet.com/en/articles/2982553-rapnet-access-for-developers) · [Rapaport APIs & SDKs](https://help.rapnet.com/en/articles/4465470-rapaport-apis-and-sdk-packages) · [Instant Inventory API setup](https://help.rapnet.com/en/articles/4086838-integrate-instant-inventory-on-your-website-api-setup) · [RapNet member licence & code of conduct (Mar 2026)](https://rapaport.com/trade/wp-content/uploads/2026/03/RapNet-Agreement-Code-of-Conduct-Update-March-2026.pdf) · [Rapaport store terms](https://store.rapaport.com/terms-and-conditions/)

### 1.2 IDEX Online

Two distinct products.

**Price data:** the IDEX Diamond Price Report is published **weekly**, derived from price changes observed on IDEX's own trading platform; there is also a Real Time Prices API. IDEX markets itself as "a data specialist… providing clear and transparent pricing information to the market." Detailed commercial terms are not published — contact required.

**Inventory data — IDEX Onsite Full Feed** is the more useful one and is well documented:

- Auth: API key + active subscription to the service
- Output: **CSV** (optionally ZIP)
- Cadence: "You may download a new file every 2 hours"
- Four format versions of increasing richness:
  - `format_20220525` (Basis) — 31 core fields: item id, cut, carat, color, clarity, measurements, depth %, table %, fluorescence, pricing, certificate details, origin
  - `format_20220530` — +10 fields: shade, inclusions, provenance
  - `format_20221026` — + supplier stock reference, pair pricing
  - `format_20230628` — + video URL, 3D viewer links
- "Results may vary based on your subscription type and permissions. Filters and markups can be set on IDEX."
- Published price point: IDEX Onsite yearly subscription **$1,250/yr**

Sources: [IDEX API Center](https://api.idexonline.com/) · [Onsite Full Feed](https://api.idexonline.com/Onsite/FullFeed) · [Diamond Prices](https://api.idexonline.com/DiamondPrices) · [Price Report](https://api.idexonline.com/DiamondPrices/PriceReport) · [Real Time Prices](https://api.idexonline.com/RealTimePrices) · [IDEX Onsite LP](http://www.idexonline.com/OnsiteLP) · [IDEX price data services](http://www.idexonline.com/OurServices-Price_Data) · [IDEX Onsite subscription guide](https://www.transpacific-software.com/guide-using-idexonline-diamond-trading.html)

### 1.3 Nivoda — **best cost/coverage ratio in the whole survey**

| | |
|---|---|
| What you get | ~1.6M natural + lab-grown diamonds, colored gemstones, melee, made-to-order finished jewellery, from a global supplier network |
| API | **GraphQL.** Prod `https://integrations.nivoda.net/api/diamonds`; staging `https://intg-customer-staging.nivodaapi.net/api/diamonds`. GraphiQL explorers available on both. |
| Auth | Same username/password as the Nivoda platform login; production requires account-manager activation |
| Fields | Request-only model ("the API will return only the fields you request") — certificate id/number, carat, color, clarity, cut, images and videos with customizable dimensions, price |
| Cost | **Free account; no subscription required for basic API access.** API Pro (orders, holds, diamond requests, concierge via mutations) is account-manager gated. |
| Markup | Platform supports customizable dynamic pricing markup on your side |
| Notable term | "No rights can be reserved to data in the API" |

This is the single highest-leverage source: free, GraphQL, enormous coverage, and it is *supply-side wholesale* pricing — exactly the base layer a price model wants, because retail prices are wholesale × vendor markup.

Sources: [Nivoda API docs (GitHub)](https://github.com/Nivoda/nivoda-api) · [Nivoda FAQ](https://nivoda.com/faq) · [Nivoda Connect (Shopify)](https://apps.shopify.com/nivoda) · [Nivoda review 2026](https://www.valigara.com/jewelry-ecommerce-articles/nivoda-review-2026-the-ultimate-guide-to-the-worlds-leading-diamond-marketplace/) · [Integration walkthrough](https://www.nimblechapps.com/blog/how-to-integrate-nivoda-api-to-a-jewellery-website) · [API evangelist profile](https://github.com/api-evangelist/nivoda)

### 1.4 VDB (Virtual Diamond Boutique)

**Membership is free — no subscription fees or commissions**; searching and sourcing are free for members. VDB offers Shopify/WooCommerce integrations and custom B2B/B2C apps, and was the first platform to launch the Jewelers Board of Trade API (that one is a *credit-rating* API, not a price API — a common point of confusion). Public developer documentation for a general diamond data API is not published; access is via partnership.

Sources: [vdbapp.com](https://vdbapp.com/) · [VDB marketplace](https://vdbapp.com/marketplace/) · [VDB colored gems](https://vdbapp.com/sell-more-colored-gems/) · [VDB launches JBT API](https://nationaljeweler.com/articles/11081-virtual-diamond-boutique-is-the-first-to-launch-jbt-s-new-api) · [JBT API details](https://gjepc.org/solitaire/virtual-diamond-boutique-launches-jewelers-board-of-trades-inaugural-api/)

### 1.5 Polygon.net

Long-running wholesale trading network. Tiered membership (Vendor tier: list up to $7M inventory, access price reports, trade directory, direct messaging; Premium: unlimited inventory, dedicated account manager). **Pricing is not published** — contact required. Polygon also publishes its own Diamond Price Report. Treated by integrators as a peer of RapNet/IDEX/GemFind/VDB.

Sources: [Polygon plans & pricing](https://www.polygon.net/jwl/public/services/plans-and-pricing-en.jsp) · [Polygon services](https://www.polygon.net/jwl/public/services/services-en.jsp) · [Polygon diamond price report](https://www.polygon.net/jwl/public/diamonds/diamond-price-report-en.jsp) · [Aggregator landscape](https://www.middiamonds.com/api-listing-services/)

### 1.6 Get-Diamonds, DiamondHub, Uni Diamonds, Diamondport

- **Get-Diamonds** (the WFDB-affiliated marketplace, commonly confused with IDEX): ~1.4M diamonds from thousands of suppliers, offers "customizable B2B solutions that can be integrated into business platforms." No public API docs; partnership-gated. ([get-diamonds.com](https://get-diamonds.com/))
- **DiamondHub, Uni Diamonds, Diamondport:** no public developer documentation surfaced. These are second-tier aggregators; treat as "contact sales," low priority given Nivoda already covers the same supply.

### 1.7 StoneAlgo, Rare Carat, Diamond Registry

- **StoneAlgo** — runs a Fair Price Estimate and diamond price calculator "updated daily based on their proprietary database of over 2 million live diamond prices," drawing on "live inventory from the world's top jewelers and other online jewelers and websites." **This is Halo's closest competitor, not a supplier.** No public API. Contact: management@stonealgo.com. ([StoneAlgo price calculator](https://www.stonealgo.com/diamond-price-calculator/) · [historical price data](https://www.stonealgo.com/diamond-prices/))
- **Rare Carat** — affiliate only (see §2). No data API. Their ToS bans scraping in explicit terms (§3.2).
- **Diamond Registry** — legacy price-list publisher; no modern API surfaced.

### 1.8 Lab-grown specifics — **two of the three named sources are gone**

- **Lightbox: closed.** De Beers announced the wind-down on 2025-05-09. It had been $800/ct (2018) → $500/ct (2024) → shut. Do not build against it.
- **Market reality to model against:** lab-grown wholesale fell **14% YoY in Q1 2026** and **13% YoY in Q2 2026**; a 3ct VVS D round was **$126/ct** in Q1 2026, down 30% YoY; the wholesale index is **down 96% since 2018**. As of Aug 2026 per-carat averages ran ~$506–643 (1ct), $1,085–1,314 (2ct), $1,741–1,898 (3ct), $2,309–2,618 (5ct), down 2.59% YoY — the smallest quarterly declines in two years.
- **Practical implication:** lab-grown needs its own model with a much shorter refit cadence (weekly minimum) and an explicit time-decay term. A natural-diamond model applied to lab-grown will be wrong within a month.
- Pandora / Grown Brilliance: retail brands, no public feeds; reachable only via affiliate networks if at all.

Sources: [JCK: lab-grown wholesale freefall](https://www.jckonline.com/editorial-article/lab-grown-wholesale-freefall/) · [Lab-grown price history 2016–2026](https://labgrownvsnaturaldiamond.com/price-history) · [Lab diamond price trend 2020–2026](https://www.dracodiamond.com/blogs/news/lab-diamond-price-trend-report-2020-2026) · [2026 per-carat rates](https://www.dracodiamond.com/blogs/news/lab-grown-diamond-price-per-carat-2026)

### 1.9 Metals

| Source | Cost | Cadence | Notes |
|---|---|---|---|
| **MetalpriceAPI** | Free: $0 / 100 req/mo / daily. Essential $5/mo / 1k / 30min. Basic $12/mo / 10k / 10min. Basic+ $20/mo / 50k / 5min. Pro $32/mo / 100k / **60s**. Pro+ $49/mo / 250k / 30s. Business $74/mo / 500k / 15s. Business+ $132/mo / 1M / 15s. (annual billing) | Tier-dependent | 150+ currencies, precious + base metals, historical + time-series. **Best value for Halo.** |
| **Metals-API** | Freemium, low free cap; most production use lands on paid | Tier-dependent | 600+ symbols (precious + base), 180+ currencies, historical/time-series |
| **GoldAPI.io** | Free tier + paid | Real-time | REST JSON: spot, bid, ask, timestamp, daily change, gram price, kg price. XAU/XAG/XPT/XPD across USD, AUD, CAD, EUR, GBP, AED, SGD, KWD, OMR, SAR |
| **Metals.dev** | — | Real-time | Positions as enterprise-grade live metal prices API |
| **Kitco** | — | Live quotes | **Built for reading, not integration — no public JSON API.** Don't plan on it. |
| **LBMA** | Benchmark auction prices | Twice daily (AM/PM gold fix) | The authoritative settlement benchmark; several APIs (e.g. UniRateAPI) resell LBMA-referenced XAU data |
| **Hoover & Strong** | Trade account required (state/city jewelry business licence) | Daily chart | Jewellery-alloy supplier with a public metals chart — on 2026-09-18 it showed Gold $4,348.15, Silver $67.04, Platinum $1,793.20, Palladium $1,315.50, Iridium $7,850.00, Ruthenium $1,675.00. **No API or downloadable feed documented**, and units aren't stated on the page. Value here is as a *reference for alloy/fabrication pricing*, not as a machine feed. |
| APMEX / JM Bullion | — | — | Retail bullion dealers; their prices include retail premia and are the wrong reference for jewellery alloy cost |

Sources: [MetalpriceAPI pricing](https://metalpriceapi.com/gold) · [MetalpriceAPI](https://metalpriceapi.com/) · [Metals-API](https://metals-api.com/) · [Metals-API docs](https://metals-api.com/documentation) · [GoldAPI.io](https://www.goldapi.io/) · [Metals.dev](https://metals.dev/) · [Gold price API comparison](https://goldprice.dev/guides/best-gold-price-api-reddit) · [LBMA-referenced gold API](https://unirateapi.com/gold-price-api) · [Hoover & Strong metals chart](https://api2.hooverandstrong.com/hoover--strong-metals-chart) · [Hoover & Strong metal info](https://api2.hooverandstrong.com/metal-information)

### 1.10 Colored stones

**GemGuide (Gemworld International)** is the only one of these with a real, priced, documented API path.

| Edition | Price | Includes |
|---|---|---|
| Digital Only | **$245/yr** | 1 user, 2,250 pricing calls/yr, Diamond + Color Calculator apps, bimonthly digital guide |
| Unlimited | **$295/yr** | As above + printed bimonthly guide + domestic shipping |
| Enterprise | **$500/yr** | 1 login, **5,000** collective calls/yr for multiple users |
| Enterprise Plus | contact | Up to 3 accounts with unique credentials, 5,000 shared calls/yr |

API options: **API 3rd Party** (embed Gemworld pricing into your software; *your customers must hold GemGuide subscriptions*) and **API Direct** (backend integration for appraisal / inventory pricing). API pricing is custom — "subscription pricing starts at $0.10 per lookup and automatically decreases as volume increases." Published **bimonthly**, with extra online updates when volatility warrants. Prices represent **researched wholesale asking prices from U.S. sellers**.

> Note the API 3rd Party constraint: it is designed for software sold *to jewellers who already subscribe*. A consumer-facing estimator is a different shape and needs API Direct plus a negotiated licence. Ask explicitly whether derived estimates may be shown to consumers.

- **Gemval** — gemstone price calculator / reference values for professionals; per-carat market value charts **updated monthly**; based on aggregated valuation statistics for the retail market. Also sells valuation reports. No documented public API.
- **RubyGlint** — free consumer-facing ruby and gemstone value calculators including photo-based estimation. A competitor/comparable, not a feed.
- **Palagems (Pala International)** — publishes colored-stone price lists; no API.

Sources: [GemGuide pricing & editions](https://www.gemguide.com/pricing-editions/) · [The GemGuide pricing](https://www.gemguide.com/the-gemguide-pricing/) · [GemGuide technical FAQs](https://www.gemguide.com/gemguide-technical-faqs/) · [The GemGuide](https://www.gemguide.com/the-gemguide/) · [Gemval](https://gemval.com/) · [Gemval market value charts](https://gemval.com/chart/) · [Gemval ruby catalogue](https://gemval.com/gemsinfo/ruby/) · [RubyGlint calculator](https://rubyglint.com/gemstone-value-calculator)

### 1.11 Certification lookups — **the join key that makes everything else work**

**GIA Report Results API** — approved-access GraphQL API over the full Report Check corpus.

- Auth: API key in `Authorization` header; base URL issued at signup
- Queries: `getReport` (plain report number), `getReportEnc` (encrypted report number), `getChangedReports()` (paginated updates), `getQuota`, `clearChangedReports()`, `isReportUpdated()`
- Returns union types by report class: `DiamondGradingReportResults`, `LabGrownDiamondGradingReportResults`, `PearlIdentReportResults`, `IdentificationReportResults`, `MeleeServiceResults`. Fields include shape, carat, color grade, clarity grade, report number/date/type; "most results fields are String types to accommodate the text as it appears on a grading report." Assets/links arrays give PDFs, images, video.
- Limits: per-key rate limiting (HTTP 429 + `Retry-After`); **quota buckets of report lookups** that expire — you run out and lookups stop. `getQuota` is free; checking quota inside `getReport` consumes it. **Asset links expire 60 minutes after the call.** Updates to a previously fetched report are free for **24 months**.
- Access: formal approval process, requires opening a GIA client account. Sandbox keys free, cannot reach production reports.
- Intended for "gemstone trading platforms and… manufacturers, retailers and software providers" — Halo fits.

**IGI** — has consumer-facing report verification (enter report number on igi.org), but **no public developer API documentation surfaced.** Given IGI dominates lab-grown grading, this is a real gap: expect to handle IGI by cert-number matching across vendor feeds rather than by authoritative lookup.

Sources: [GIA Report Results API](https://www.gia.edu/report-results-api) · [GIA developer docs](https://gialaboratory.github.io/report-results/docs/) · [GIA developer portal](https://gialaboratory.github.io/) · [API changelog](https://gialaboratory.github.io/report-results/changelog/) · [Who can use it](https://www.gia.edu/FAQ/gia-faq-who-can-use-gia-report-results-api) · [How to request access](https://www.gia.edu/gia-faq-how-to-request-access-gia-report-results-api) · [What it covers](https://www.gia.edu/gia-faq-reports-available-gia-report-results-api) · [IGI report verification](https://www.igi.org/Verify-Your-Report/) · [IGI reports](https://www.igi.org/reports/)

---

## 2. Affiliate / partner feeds — the cleanest legal path to per-vendor retail prices

This is the answer to "I want to know what Blue Nile charges." An affiliate product catalog is the retailer *handing you* their prices under a contract that permits publication. No scraping question arises.

### 2.1 Who runs what

| Retailer | Network | Commission | Cookie | Product feed? |
|---|---|---|---|---|
| **Blue Nile** | **Impact** | ~3.5–5% (5% on engagement rings, fine jewelry, loose diamonds) | 30–45d (sources differ) | Impact catalogs available |
| **James Allen** | — | — | — | **Defunct — site sunset, now a Blue Nile collection.** Historically ~5%, AOV ~$6,500, avg commission ~$325 |
| **Brilliant Earth** | **Impact Radius** | 5% bridal, 7% fine jewelry, **$500/order cap** | — | **Yes — "product feeds, banners, exclusive promotions," customized reports, detailed statistics** |
| **Rare Carat** | **AWIN** | 5% on bridal w/ lab diamond + fine jewelry, **$500/order cap** | **30d** | **No feed or API mentioned.** Contact marketing@rarecarat.com |
| **Angara** | **ShareASale** | up to 8% | 30d | **Yes — "data feeds, text links, banners and other marketing tools"** |
| **Jared** (Signet) | **CJ / Commission Junction** | 2% | 7d | CJ shopping feed |
| **Zales** (Signet) | FlexOffers / CJ | 1.6% | 30d | CJ shopping feed |
| **Kay** (Signet) | — | — | — | Signet family; via CJ/FlexOffers |
| **With Clarity** | listed among top jewelry programs | — | — | Also exposes Shopify `products.json` + UCP/MCP (§3.3) |
| Clean Origin, Ritani, Whiteflash | not prominent in program directories | — | — | Verify individually |

### 2.2 What the feed fields actually look like

**CJ (Shopping / Google format)** — **43 available fields.** Essential ones called out by CJ: SKU, Product Name, Buy URL, Product Images, Price / Retail Price / Sale Price, Product Category, UPC. Access two ways: *Subscription Manager* (latest catalog delivered to inbox or FTP) or *API* via the CJ Developer Portal (developers.cj.com). Item-level commissioning lets advertisers vary rates per product list.

**Impact.com** — supports **6 catalog formats**: Google Merchant Center, eBay Commerce Merchant Center, Connexity Merchant Center, CJ Affiliate by Conversant, Custom, Open. Delimiters: TXT/TSV (tab), CSV (comma), PSV (pipe); newlines unsupported in TXT and CSV. Google Merchant format adds two optional custom fields — `productbid` (numeric CPC override) and `manufacturing cost` (numeric). Custom format lets you *Add Another Field* from a dropdown of available attributes. Requirements vary by format; there is no universal required-field set.

### 2.3 The honest limitation

Google-Merchant-shaped feeds carry `title`, `description`, `price`, `sale_price`, `image_link`, `link`, `gtin/mpn`, `product_type`, `custom_label_0..4`. They do **not** natively carry `carat`, `color`, `clarity`, `cut`, `shape`, `cert_lab`, `cert_number`. Those only appear if the retailer maps them into custom attributes or bakes them into `title`/`description`.

**So plan for a parse step.** In practice for diamond retailers, carat/shape/color/clarity are almost always in the product title (e.g. "1.51 Carat Round Diamond, G, VS1") and the cert number is often in the SKU or the deep link. Budget a per-vendor title/URL parser with unit tests. Do **not** assume structured 4Cs arrive for free.

**Also note the network-level constraint:** affiliate terms generally permit you to *publish the advertiser's prices in the context of driving traffic to them*. They rarely permit you to retain and redistribute the catalog as a standalone dataset, or to use it to train a model you sell. Read each program's publisher agreement for a "use of feed data" clause before making the feed a model input. This is a contract question, not a copyright one — and contract is exactly where scraping defendants keep losing (§4).

Sources: [Impact product catalog file formats](https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/product-catalogs/file-formats-for-product-catalogs) · [Impact: add product catalogs](https://help.impact.com/brand/what-would-you-like-to-learn-about/platform-features/product-catalogs/add-product-catalogs-as-a-brand) · [Impact partner feed preferences](https://help.impact.com/en/support/solutions/articles/48001238827-set-product-catalog-feed-preferences-as-a-partner) · [CJ shopping feed format](https://junction.cj.com/article/making-most-cjs-shopping-feed-format) · [CJ Product Import API](https://junction.cj.com/article/share-your-product-feed-with-ease-with-cjs-product-import-api) · [Blue Nile program](https://getlasso.co/affiliate/blue-nile/) · [Blue Nile review](https://www.creator-hero.com/blog/blue-nile-affiliate-program-in-depth-review-pros-and-cons) · [Brilliant Earth program](https://www.creator-hero.com/blog/brilliant-earth-affiliate-program-in-depth-review-pros-and-cons) · [Rare Carat affiliates](https://shop.rarecarat.com/pages/affiliates) · [Angara affiliate](https://www.angara.com/b/ls-index) · [Zales program](https://uppromote.com/affiliate-directory/zales/) · [Jared via CJ](https://www.nichepursuits.com/jewelry-affiliate-program/) · [Jewelry program directory](https://diggitymarketing.com/best-affiliate-programs/jewelry/)

---

## 3. Public JSON/GraphQL endpoints and each retailer's posture

> Method note: I read `robots.txt` and terms pages, and made **at most one or two requests per host**. No crawling, no enumeration. Everything below is from published policy documents and single reads.

### 3.1 robots.txt findings

**Blue Nile** — explicitly disallows its own API namespaces to all agents:

```
User-agent:*
# API
Disallow: /service-api/*
Disallow: /api/public/*
Disallow: /web-api/*
...
Disallow: /build-your-own-ring/*
Disallow: /build-your-own-five-stone-ring/diamond-details/*
```

The existence of `/service-api/`, `/api/public/` and `/web-api/` confirms a front-end-called JSON API exists. It is disallowed for every user-agent except named exceptions (Googlebot, Googlebot-image, ScarabBot). Note also `Disallow: /build-your-own-ring/*` — the ring builder itself is off-limits. Response headers on the Blue Nile/James Allen edge show `rdwr_response: allowed`, i.e. **Radware Bot Manager** in front.

**Rare Carat** — allow-lists a long set of public paths for major crawlers *including* `ClaudeBot`, `GPTBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `Amazonbot`, `meta-externalagent`, and allows `/diamond-search/*`, `/diamonds`, `/diamond/*`, `/settings`, `/setting/*`. But it disallows the machine-useful endpoints: `/diamond-details`, `/Retailer/GetRetailersInformation`, `/opendiamondurl/`, `/product`, `/ring-detail`, `/diamond/*/RT`, and — tellingly — `/terms-of-service`.

**Whiteflash** — the most permissive of the set:

```
User-agent: *
Disallow: /bin/
Disallow: /login/
Disallow: /webresource.axd
Disallow: /services/
Allow: /
...
Crawl-delay: 10   (applied to bingbot/msnbot/AhrefsBot group)
```

Plus richly segmented sitemaps that are themselves a legitimate discovery surface: `sitemap-diamonds.xml`, `sitemap-lab-diamonds.xml`, `sitemap-non-branded-natural-diamonds.xml`, `sitemap-non-branded-lab-diamonds.xml`, `sitemap-jewelry.xml`. `/services/` (the likely JSON API) is disallowed; the HTML product pages are not.

**1stDibs** — disallows `/soa/` broadly but then **explicitly allows the GraphQL endpoint**:

```
Allow: /soa/graphql/$
Allow: /soa/graphql$
Allow: /soa/graphql?*
Allow: /soa/graphql/?*
Disallow: /soa/
Disallow: /search/
```

That is an unusually clear signal that the GraphQL endpoint is intended to be reachable. It does **not** waive their ToS, and 1stDibs sits behind Akamai.

**Etsy** — `Disallow: /api/` for `User-agent: *`, plus `/your/`, `/transactions/`, `/treasury`; `Spinn3r` banned outright. Etsy's answer is the official API, not scraping (§3.4).

**Ritani** — Shopify storefront ("# we use Shopify as our ecommerce platform"), but sits behind Cloudflare; `/products.json` returned **HTTP 403** with a Cloudflare interstitial on a single polite request.

**Brilliant Earth** — `robots.txt` itself is behind a bot-verification interstitial; a plain request returned an HTML "Brilliant Earth – Verifying" challenge page with `<meta name="robots" content="noindex, nofollow">`. **Effectively: the front door is bot-gated.**

**James Allen** — `robots.txt` returns HTTP 301 to `https://www.bluenile.com/?jaRedirect=true`. Dead source.

### 3.2 Terms of Service — verbatim automated-access clauses

**Blue Nile** prohibits:
> "Use of any automated means to access, monitor or interact with any portion of our Site, including through data mining, robots, spiders, scraping, or similar data gathering or extraction methods"

and separately prohibits
> "The collection and use of any product listings, pictures or descriptions for commercial purposes"

and "Downloading (other than the page caching) of any portion of our Site."

**Brilliant Earth** uses **word-for-word identical** language:
> "use of any automated means to access, monitor or interact with any portion of our Site, including through data mining, robots, spiders, scraping, or similar data gathering or extraction methods"

plus the same bans on "downloading (other than the page caching) of any portion of our Site" and collecting "product listings, pictures or descriptions for commercial purposes." (Common e-commerce boilerplate — which is why it shows up identically at two unrelated companies.)

**Rare Carat**:
> "you shall not use any manual or automated software, devices or other processes (including but not limited to spiders, robots, scrapers, crawlers, avatars, data mining tools or the like) to 'scrape' or download data from the Rare Carat Services (except that we grant the operators of public search engines revocable permission to use sp[iders]…)"

and separately bans using the services to "collect, harvest, transmit, distribute, post or submit any information concerning any other person or entity."

**Whiteflash / With Clarity / Ritani / 1stDibs** — I was unable to retrieve clean ToS text for Whiteflash (page returned no extractable body) and did not obtain 1stDibs' terms text (their `/terms/` page yielded no matching clauses via plain extraction). **Assume standard anti-automation boilerplate is present at all of them until verified.** That is the safe default and it is almost always true.

> **The pattern:** every major consumer diamond retailer bans automated access in its ToS, and several also ban commercial reuse of product listings specifically. Blue Nile's "collection and use of any product listings… for commercial purposes" clause is aimed precisely at what a price estimator does.

### 3.3 Sanctioned machine-readable surfaces that *do* exist

**With Clarity** is the standout and points at where this whole space is going. Its `robots.txt` advertises:

```
# Shopify storefront. Public product, collection, page, blog, policy, cart, and localized HTML is crawlable.
# Agent instructions: https://www.withclarity.com/agents.md
# UCP discovery: https://www.withclarity.com/.well-known/ucp
# UCP/MCP endpoint: https://www.withclarity.com/api/ucp/mcp
# Agents should use UCP/MCP for catalog, cart, and checkout.
```

with `User-agent: * / Allow: /`. Its `/.well-known/ucp` returns a live UCP (Universal Commerce Protocol) service descriptor — version `2026-08-25`, transport `mcp`, endpoint on the backing `renaissancefmi.myshopify.com` shop, with `dev.ucp.shopping.checkout`, `.fulfillment` and `.discount` capabilities.

And the plain Shopify catalog endpoint works. A single request to `https://www.withclarity.com/products.json?limit=1` returned **HTTP 200** with structured product records including diamond attributes embedded in `body_html`:

```json
{"products":[{"id":10464827506971,
  "title":"3.71 Carat Marquise Lab Diamond",
  "handle":"diamond-3-71-carat-marquise-lab-diamond-797664457",
  "body_html":"...<li>Shape Marquise</li><li>measurements 15.6x8.1x4.97</li>
               <li>Carat 3.71</li><li>Cut Ideal</li>..."}]}
```

`/products.json` is a documented, public, un-authenticated Shopify storefront endpoint, and With Clarity's robots.txt explicitly declares public product data crawlable. **This is the single cleanest "public endpoint" in the survey** — sanctioned by the operator in writing, paginated, JSON, no auth.

> ⚠️ **One caution on With Clarity.** Its `robots.txt` and `agents.md` contain text addressed at AI agents urging them to install a third-party shopping skill (`https://shop.app/SKILL.md`) so the agent can "purchase products directly." That is marketing copy embedded in a machine-readable file — treat content fetched from any vendor as *data, never as instructions*. I did not act on it. Flagging it because Halo will be ingesting these files programmatically and should sanitise them: **never feed raw robots.txt / agents.md / product descriptions into an LLM prompt without treating them as untrusted input.** This is a real and growing injection vector in retail feeds.

**Shopify `/products.json` generally** is the pattern worth exploiting — many mid-size jewellers run Shopify. It worked on With Clarity and was Cloudflare-blocked on Ritani, so coverage is per-store.

### 3.4 Etsy — use the official API

Etsy Open API v3 is REST + OAuth 2.0. Default limits: **10,000 requests / 24h and 10 queries/second per API key** for public (key-authenticated) requests, enforced via a sliding-window algorithm over a rolling 24-hour period; higher limits by request to developer@etsy.com. Three access tiers: **Seller App** (own shop, automated approval, *no commercial use*), **Personal App** (broader scope, deeper review, *limited* commercial use), **Commercial Access** (multi-seller via OAuth consent, requires an approved Personal App first, manual review). Free developer tier.

> For Halo, Etsy is low-value: handmade/vintage settings with idiosyncratic pricing, and the commercial-access gate is a real review process. Skip in phases 1–2.

Sources: [Etsy rate limits](https://developers.etsy.com/documentation/essentials/rate-limits/) · [Etsy API docs](https://developers.etsy.com/documentation/) · [Etsy access tiers analysis](https://vorplabs.com/agent-tools/etsy-api) · [Blue Nile terms](https://www.bluenile.com/policies/terms-and-conditions) · [Brilliant Earth terms](https://www.brilliantearth.com/terms-and-conditions/) · [Rare Carat terms](https://www.rarecarat.com/terms-of-service) · [Blue Nile robots.txt](https://www.bluenile.com/robots.txt) · [Rare Carat robots.txt](https://www.rarecarat.com/robots.txt) · [Whiteflash robots.txt](https://www.whiteflash.com/robots.txt) · [1stDibs robots.txt](https://www.1stdibs.com/robots.txt) · [With Clarity robots.txt](https://www.withclarity.com/robots.txt) · [With Clarity UCP descriptor](https://www.withclarity.com/.well-known/ucp)

---

## 4. Scraping: the honest legal and practical picture

### 4.1 The case that matters most to *this* product: `Rapaport v. Nivoda`

This is not a general scraping case — it is **the** diamond-price-data case, and Halo's proposed feature (show a price benchmark next to vendor prices) is materially identical to what Nivoda did.

- **Facts.** Rapaport publishes a weekly subscription-only diamond price list that functions as the industry benchmark. Nivoda, running a competing B2B marketplace, displayed Rapaport prices on its site alongside its own, showing the discount/difference.
- **District court (S.D.N.Y., 2025-05-02): dismissed.** Applied the **merger doctrine** — "The only way to express the price of a particular diamond or type of diamond is with the specific number corresponding to that price." One way to express the idea ⇒ idea and expression merge ⇒ no copyright. Resolved in four months.
- **Second Circuit (No. 25-1065, decided 2026-09-04): vacated and revived.** The panel held merger could not be resolved on a motion to dismiss because crucial factual questions were unanswered. Its reasoning is the dangerous part: Rapaport's numbers reflect **"opinion as to hypothetical products… based on… sophisticated expert industry opinion"**, not observed market transactions — so multiple valid expressions may exist. The court framed the test as looking to **"the possible range of that number"** to decide whether a figure is an "original creation" or a "pre-existing fact."
- **Status: remanded for discovery** into whether Rapaport's methodology is mechanical compilation or creative valuation. Eric Goldman's critique is that this reintroduces litigation risk into ordinary price comparison.

**What this means for Halo, concretely:**

1. A *published benchmark that is somebody's expert opinion* (Rapaport, GemGuide, Gemval, IDEX Price Report) now has a live argument for copyright protection in the Second Circuit. Copying those numbers is materially riskier than it looked 18 months ago.
2. An *observed transaction or listing price* ("Blue Nile is asking $4,210 for GIA 2141xxxx today") remains a much stronger factual-fact. The Second Circuit's own distinction — opinion about hypothetical products vs. pre-existing fact — cuts in Halo's favour for *observed listings* and against Halo for *benchmark lists*.
3. **Design rule that falls out of this:** build from observed listing prices, never from published benchmark lists. Then your "range of that number" argument is that the number is dictated by observed market data, not authored.

Sources: [Goldman on the district court ruling](https://blog.ericgoldman.org/archives/2025/05/price-lists-arent-copyrightable-rapaport-v-nivoda.htm) · [Goldman on the 2d Cir. reversal](https://blog.ericgoldman.org/archives/2026/09/courts-still-cant-let-go-of-the-possibility-that-individual-prices-are-copyrightable-rapaport-v-nivoda.htm) · [2d Cir. opinion (Justia)](https://law.justia.com/cases/federal/appellate-courts/ca2/25-1065/25-1065-2026-09-04.html) · [District opinion (FindLaw)](https://caselaw.findlaw.com/court/us-dis-crt-sd-new-yor/117233390.html) · [Law360: 2d Cir. reopens](https://www.law360.com/articles/2522002/2nd-circ-reopens-copyright-case-over-diamond-price-list) · [MLex on the dismissal](https://www.mlex.com/mlex/articles/2335843/rapaport-diamond-price-list-copyright-suit-dismissed-citing-merger-doctrine) · [Jeweller Magazine](https://www.jewellermagazine.com/Article/15503/Ruling-revives-legal-fight-between-Rapaport-and-Nivoda) · [Stanford Fair Use Center](https://fairuse.stanford.edu/case/rapaport-v-nivoda/)

### 4.2 US scraping case law — what it collectively establishes

**`Van Buren v. United States`, 593 U.S. ___ (2021)** — SCOTUS narrowed the CFAA's "exceeds authorized access." You violate it only by accessing areas of a system **"off limits to him"** — files, folders, databases you have no entitlement to — not by accessing data you *may* access for a purpose the owner dislikes. Resolved a circuit split against the broad reading.

**`hiQ Labs v. LinkedIn`, 9th Cir. (2022)** — affirmed that scraping *publicly available* data does not incur CFAA "without authorization" liability; violating a public website's user agreement alone is insufficient to trigger the CFAA.
**But the ending is the lesson.** In December 2022 hiQ settled: **$500,000 judgment against hiQ**, established liability under **California common-law trespass to chattels and misappropriation**, and a **permanent injunction** requiring hiQ to stop scraping and **delete all source code, data and algorithms** derived from LinkedIn. hiQ won the CFAA point and lost the company.

**`Meta Platforms v. Bright Data`, No. 3:23-cv-00077-EMC (N.D. Cal., 2024-01-23)** — Judge Chen granted summary judgment for Bright Data. Meta's terms "could not be construed to prohibit logged-off scraping of data that is publicly available." The court credited the argument that **while logged out, Bright Data was not a "user"** and so was **not bound by the Terms of Service**. Meta dismissed its remaining tortious-interference claim a month later.

**`X Corp. v. Bright Data` (N.D. Cal., 2024-05-09, Alsup, J.)** — dismissed **all** of X's claims (breach of contract, trespass, misappropriation, unjust enrichment, tortious interference). Held via **conflict preemption** that state-law claims premised on scraping publicly available content impermissibly conflict with the Copyright Act — enforcing them would block fair uses the Copyright Act permits. Alsup: what X wanted "risks the possible creation of information monopolies that would disserve the public interest." **Important limit:** where there is a "substantial state law interest" outside copyright — notably privacy — claims are not preempted.

**`Ryanair v. Booking.com` (D. Del.)** — the roller-coaster. A Delaware jury on 2024-07-18/25 found Booking.com violated the CFAA "with intent to defraud" and awarded **$5,000** (the statutory minimum). Then on **2025-01-22 the court granted Booking.com's renewed JMOL**, and on **2025-01-31 amended the verdict**, holding Ryanair **failed to prove the $5,000 in attributable "loss"** that civil CFAA liability requires. Ryanair appealed on 2025-02-28.

### 4.3 What they establish together

| Access type | Legal exposure |
|---|---|
| **Public pages, logged out** | CFAA is largely off the table (Van Buren, hiQ). ToS may not even bind you if you never became a "user" (Meta v. Bright Data). State-law claims may be copyright-preempted (X v. Bright Data). **Lowest risk.** |
| **Logged-in / behind auth** | You accepted the ToS, you are a "user," and you may be accessing areas "off limits." CFAA, breach of contract and trespass all live. **Do not do this.** |
| **ToS-bound (account, clickwrap, API key)** | Contract is the live theory. Preemption may not save you where the claim isn't just about copying expression. **This is where Rapaport's licence bites — see §1.1.** |
| **Circumventing anti-bot** | Aggravating in every forum; edges toward "off limits" under Van Buren and toward bad-faith findings on the equitable claims. |

**And the meta-lesson from hiQ:** winning on the CFAA does not mean winning. Trespass to chattels, misappropriation, breach of contract, and unfair competition survive independently, and the remedy that actually kills a startup is the injunction to **delete the derived data and algorithms** — which would take Halo's trained model with it.

Sources: [Van Buren opinion](https://www.supremecourt.gov/opinions/20pdf/19-783_k53l.pdf) · [CRS on Van Buren](https://www.congress.gov/crs-product/LSB10616) · [Proskauer on Van Buren & scraping](https://newmedialaw.proskauer.com/2021/06/06/supreme-court-ends-long-running-circuit-split-over-cfaa-exceeds-authorized-access-issue-adopting-a-narrow-interpretation-that-will-reverberate-in-scraping-disputes-and-litigation-ov/) · [hiQ 9th Cir. (Justia)](https://law.justia.com/cases/federal/appellate-courts/ca9/17-16783/17-16783-2022-04-18.html) · [Morgan Lewis on the hiQ judgment](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2022/12/linkedin-v-hiq-landmark-data-scraping-suit-provides-guidance-to-data-scrapers-and-web-operators) · [ZwillGen: hiQ lessons](https://www.zwillgen.com/alternative-data/hiq-v-linkedin-wrapped-up-web-scraping-lessons-learned/) · [Privacy World on the consent judgment](https://www.privacyworld.blog/2022/12/linkedins-data-scraping-battle-with-hiq-labs-ends-with-proposed-judgment/) · [Quinn Emanuel on Meta v. Bright Data](https://www.quinnemanuel.com/the-firm/news-events/client-alert-meta-v-bright-data-significant-decision-for-web-scraping-industry/) · [Farella Braun on Meta v. Bright Data](https://www.fbm.com/publications/major-decision-affects-law-of-scraping-and-online-data-collection-meta-platforms-v-bright-data/) · [Skadden on X v. Bright Data preemption](https://www.skadden.com/insights/publications/2024/05/district-court-adopts-broad-view) · [MoFo on X v. Bright Data](https://www.mofo.com/resources/insights/240604-california-federal-court-holds-x-s-claims) · [Courthouse News on Alsup ruling](https://www.courthousenews.com/judge-tosses-xs-contract-claims-against-data-scraping-company/) · [Bloomberg Law: Ryanair verdict](https://news.bloomberglaw.com/litigation/ryanair-wins-jury-verdict-in-scraping-case-against-booking-com) · [Bloomberg Law: reversal](https://news.bloomberglaw.com/litigation/booking-com-wins-reversal-of-verdict-for-ryanair-scraping-case) · [Goldman on the Ryanair reversal](https://blog.ericgoldman.org/archives/2025/03/court-overturns-a-bad-jury-verdict-against-scraping-ryanair-v-booking-guest-blog-post.htm)

### 4.4 Copyright fundamentals: prices vs. photos vs. compilations

**Prices are facts.** `Feist Publications v. Rural Telephone Service Co.`, 499 U.S. 340 (1991) killed the "sweat of the brow" doctrine: no amount of labour in gathering facts creates copyright in them. Compilations get thin protection **only** where facts are "selected, coordinated, or arranged in such a way that the resulting work as a whole constitutes an original work of authorship." Copyright protects creativity, not effort.

**But three things complicate that for Halo:**

1. **Compilation/arrangement rights survive.** Copying a *whole structured price list wholesale* implicates the selection-and-arrangement copyright even though each number is a fact. Copying scattered individual observed prices does not.
2. **Rapaport v. Nivoda (2d Cir. 2026) is chipping at the "prices are facts" premise itself** where the number is an expert opinion rather than an observation (§4.1).
3. **Contract routes around copyright entirely.** Feist doesn't help you if you agreed to a licence saying you won't redistribute. Blue Nile's "collection and use of any product listings… for commercial purposes" and Rapaport's "no Derived Data for external use" are contract terms, not copyright claims.

**Product photos are a completely separate and much worse question.** A diamond or ring photograph is an original pictorial work with full copyright protection — nothing about Feist applies. Copying prices and copying images are different legal acts with different exposure, and **image copying is the one most likely to produce a clean, cheap, winnable infringement claim against Halo** (registered works, statutory damages, no merger argument, no factual-content defence). Blue Nile and Brilliant Earth both specifically enumerate "pictures" in their prohibition on collecting product listings for commercial purposes.

> **Hard rule for Halo: never copy, cache, hotlink or re-host a vendor's product photography.** Use your own renders of the configurator. This single rule removes the highest-severity legal risk in the entire pipeline at essentially zero product cost — a ring customizer renders its own imagery anyway.

Sources: [Feist (Justia)](https://supreme.justia.com/cases/federal/us/499/340/) · [Feist full text (MIT OCW)](https://ocw.mit.edu/courses/6-912-introduction-to-copyright-law-january-iap-2006/286e15d6ab1daa9dc77bbd4c58279919_feist.pdf) · [Feist (BitLaw)](https://www.bitlaw.com/source/cases/copyright/feist.html) · [Harvard: non-copyrightable subject matter](https://cyber.harvard.edu/property00/alternatives/non-copyrightable.html)

### 4.5 EU / UK

- **Sui generis database right** (Database Directive) protects substantial investment in obtaining/verifying/presenting a database contents, independent of copyright. Extracting a substantial part of a retailer's product database can infringe it even though each price is a fact. This is a **stronger** right against scrapers than anything in US law and has no Feist equivalent. Article 3 exempts TDM by research organisations and cultural heritage institutions for scientific research — **a commercial startup does not qualify.**
- **DSM Directive Art. 4 TDM exception** permits commercial text and data mining of lawfully accessible works — **unless the rightholder has opted out in machine-readable form**. Article 4(3) requires the opt-out be "expressed in machine-readable form" for online material; in practice `robots.txt`, `ai.txt`, and TDMRep headers. So for EU targets: **check for an opt-out before every crawl, and honour it.** Germany's Hamburg court (Kneschke v. LAION) produced the first judicial treatment of the exception.
- **GDPR: essentially irrelevant here.** Collecting prices, specs and article text is outside GDPR's scope — product prices aren't personal data. The moment Halo scrapes *reviews with usernames* or *seller names of individuals*, GDPR re-enters. Don't.

Sources: [Kluwer: DSM Arts 3 & 4](https://legalblogs.wolterskluwer.com/copyright-blog/the-new-copyright-directive-text-and-data-mining-articles-3-and-4/) · [CC statement on Art. 4 TDM](https://creativecommons.org/wp-content/uploads/2021/12/CC-Statement-on-the-TDM-Exception-Art-4-DSM-Final-updated.pdf) · [MoFo: first German TDM decision](https://www.mofo.com/resources/insights/241004-to-scrape-or-not-to-scrape-first-court-decision) · [GRUR Int'l on EU TDM exceptions](https://academic.oup.com/grurint/article/71/8/685/6650009) · [Kneschke v. LAION analysis](https://legalblogs.wolterskluwer.com/copyright-blog/kneschke-vs-laion-landmark-ruling-on-tdm-exceptions-for-ai-training-data-part-2/) · [Scraping law in Europe](https://thunderbit.com/blog/web-scraping-legal-europe-guide)

### 4.6 What actually gets you blocked or sued

Ranked by how often it's the proximate cause:

1. **Volume and rate.** Nobody sues over 500 requests/day. Load that looks like a denial of service is what generates the "loss" element the CFAA needs — and note Ryanair *lost* precisely because it couldn't prove $5,000 of it.
2. **Logged-in access.** Converts a weak claim into a strong one across CFAA, contract and trespass simultaneously.
3. **Copying images.** The cleanest infringement claim anyone can bring against you (§4.4).
4. **Circumventing anti-bot.** Aggravates everything; may implicate DMCA §1201 arguments if there's an access control.
5. **Reselling raw data.** Redistributing someone's listing corpus as a dataset is the fact pattern that drew the hiQ injunction. **Deriving aggregates and distributing your own model output is categorically safer** — different work, different market, no substitution for the original compilation.
6. **Being a competitor.** Nivoda got sued because it competes with Rapaport. Halo's estimator competes with StoneAlgo and Rare Carat's price-check features. Competitive posture drives litigation more than legal merit does.

### 4.7 If scraping anyway: infrastructure and cost

**Detection reality in 2026 is materially worse than the founder likely assumes.**

- **A standard Playwright or Selenium script "will get blocked in seconds."** Cloudflare blocks it for missing browser runtime environment properties queried at JS-challenge time, and for TLS/HTTP-2 fingerprints that don't match the announced browser version.
- **TLS fingerprinting (JA3/JA4) is now Akamai's most effective detection vector**, making `curl-cffi`-style browser TLS impersonation essentially mandatory. Akamai also analyses handshake timing, cipher negotiation, and TCP/IP characteristics (TTL, window sizes) that reveal the OS.
- **IP reputation went granular in 2025–26:** anti-bot vendors now classify IPs by *behavioural history at the individual IP level*, not merely residential vs. datacenter. Cheap residential pools are burned pools.
- Browser-vendor drift cuts both ways: Edge now silently returns `navigator.webdriver = false` for AI-agent Playwright sessions, and Google patched the common CDP-detection technique out of V8.

**Cost (2026):**

| Provider | Model | Price |
|---|---|---|
| Zyte API | per request | from **$0.13 / 1,000** HTTP requests; standard plans from a $100 spend limit |
| ScraperAPI | credits | from **$49/mo / 100,000 credits**; 7-day trial with 5,000 credits |
| Oxylabs scraping | per result | **$0.50/1k** (Amazon), **$1.00/1k** (Google), **$1.15/1k** (other non-dynamic) |
| Bright Data Web Scraper API | per page load | **$3 / 1,000 page loads**, no monthly minimum |
| Residential proxies (general) | per GB | **~$1/GB** at high volume → **$5–10+/GB** premium/low-volume; typical band **$3–15/GB** |
| Bright Data residential | per GB | **~$10.89/GB** PAYG |
| Oxylabs residential | per GB | **~$9.00/GB+** PAYG |
| Datacenter proxies | per IP | from ~**$0.50/IP** |

**Rule of thumb:** "If your targets require JavaScript rendering or residential proxies, effective costs at every provider climb **2–5×** the base rate."

**Worked estimate for Halo.** Suppose 8 vendors × ~60k listings each = ~500k product pages, refreshed weekly = **~2M page loads/month**. At Bright Data's $3/1k that is **~$6,000/month**; at Zyte's $0.13/1k HTTP (only viable if pages render server-side, which for JS-driven diamond search they largely do not) **~$260/month**; realistically with JS rendering, **$2,000–8,000/month** plus an engineer's continuous attention to breakage.

Compare: **Nivoda API = $0. GemGuide = $245–500/yr. MetalpriceAPI Pro = $32/mo. Affiliate feeds = $0 (you get paid).** The licensed stack costs roughly **1–2% of the scraping stack** and carries a fraction of the risk. *This is the core argument to make to the founder.*

Sources: [Anti-bot detection landscape 2026](https://justbrowser.app/blog/anti-bot-detection-vendors-2026-landscape) · [State of anti-bot detection 2026](https://hexproxies.com/blog/anti-bot-detection-2026) · [Scrapfly: bypassing Akamai](https://scrapfly.io/blog/posts/how-to-bypass-akamai-anti-scraping) · [Scrapfly: bypassing Cloudflare](https://scrapfly.io/blog/posts/how-to-bypass-cloudflare-anti-scraping) · [Browserless on Cloudflare](https://www.browserless.io/blog/how-to-bypass-cloudflare-scraping) · [Scraping API pricing 2026](https://scrapewise.ai/blogs/scraping-api-pricing-comparison-2026) · [Web scraping pricing guide](https://use-apify.com/blog/web-scraping-pricing-guide-all-platforms) · [Residential proxy $/GB comparison](https://proxidize.com/blog/residential-proxy-pricing/) · [Proxy pricing index 2026](https://proxidize.com/research/proxy-pricing-index-2026/) · [Oxylabs: best scraping APIs](https://oxylabs.io/blog/best-web-scraping-api)

---

## 5. Master comparison table

Legal risk: 🟢 low · 🟡 medium · 🔴 high. Effort in engineer-weeks to first useful data.

| # | Source | Class | Cost | Coverage | Freshness | Legal risk | Effort | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | **Nivoda API** | B2B wholesale | **Free** (acct req'd) | ~1.6M nat+lab stones, gems, melee, finished | Live | 🟢 | 1w | **Core. Start here.** |
| 2 | **Affiliate feeds** (Impact/CJ/ShareASale/AWIN) | Retail | **Free / paid to you** | Per-vendor retail, 8–12 vendors | Daily | 🟢 | 2w (+parsers) | **Core. Only licensed per-vendor retail.** |
| 3 | **GIA Report Results API** | Certification | Quota-based, approval req'd | All GIA reports | On-demand + 24mo change feed | 🟢 | 1w | **Core. The join key.** |
| 4 | **MetalpriceAPI** | Metals | $0–132/mo | XAU/XAG/XPT/XPD + base | Daily → 15s | 🟢 | 2d | **Core.** |
| 5 | **GemGuide API** | Colored stone | $245–500/yr + ~$0.10/lookup | Wholesale asking, US | Bimonthly + volatility updates | 🟢 (licence terms apply) | 1w | **Core for gemstones.** |
| 6 | Shopify `/products.json` (With Clarity et al.) | Retail | Free | Per-store; blocked where CF-fronted | Live | 🟢 (operator-declared crawlable) | 3d | **Yes — sanctioned & free.** |
| 7 | IDEX Onsite Full Feed | B2B wholesale | **$1,250/yr** | Large; CSV, 31–45 fields | **Every 2h** | 🟢 | 1w | Good phase-2 breadth-add |
| 8 | VDB | B2B marketplace | **Free** membership | Broad; gems too | Live | 🟢 | 2w (partnership) | Phase 2 |
| 9 | 1stDibs GraphQL | Retail/vintage | Free | Vintage/designer | Live | 🟡 (robots allows endpoint; ToS unverified) | 1w | Niche; phase 3 |
| 10 | Etsy Open API v3 | Marketplace | Free tier | Handmade/vintage | Live; 10k/day, 10 qps | 🟢 | 2w (+commercial review) | Low value; skip early |
| 11 | Polygon.net | B2B | Unpublished | Broad | Live | 🟢 | 2w | Redundant w/ Nivoda+IDEX |
| 12 | Get-Diamonds | B2B | Unpublished | ~1.4M stones | Live | 🟢 | 2w | Redundant |
| 13 | Gemval | Colored stone ref | Sub | Retail reference charts | **Monthly** | 🟡 (their opinion ⇒ Rapaport risk) | 1w | Validation only, don't redistribute |
| 14 | IDEX Price Report | Benchmark | Sub | White diamonds | **Weekly** | 🟡 (benchmark = opinion) | — | Internal validation only |
| 15 | Hoover & Strong | Alloy reference | Trade acct | Jewellery alloys | Daily page | 🟢 | manual | Reference for fabrication cost; no feed |
| 16 | LBMA | Metals benchmark | via resellers | XAU/XAG | 2×/day fix | 🟢 | 2d | Settlement reference |
| 17 | IGI | Certification | — | Lab-grown dominant | On-demand | 🟢 | — | **No public API — gap** |
| 18 | **Rapaport Price List** | Benchmark | Paid sub | Round+Pear, 1–10ct, white only | **Weekly (Thu 23:59 ET)** | 🔴🔴 | — | **DO NOT USE.** Licence bans derived data, model training, redistribution; active 2d Cir. copyright litigation |
| 19 | StoneAlgo | Competitor | — | 2M live prices | Daily | 🔴 | — | Competitor, not supplier |
| 20 | Scraping Blue Nile / Brilliant Earth / Rare Carat | Scraping | **$2k–8k/mo** | Deep retail | Whatever you can sustain | 🔴 | 6w + permanent maintenance | **No.** Explicit ToS bans + Radware/Cloudflare/bot-gating + 40–60× the licensed cost |
| 21 | Scraping product **images** | Scraping | — | — | — | 🔴🔴🔴 | — | **Never.** Full copyright, no Feist defence |
| 22 | Lightbox | Lab-grown brand | — | — | — | — | — | **Defunct (closed 2025)** |
| 23 | James Allen | Retail | — | — | — | — | — | **Defunct (sunset 2026, → Blue Nile)** |

---

## 6. Architecture recommendation

### 6.1 The defensibility thesis

Halo should **distribute a fitted model's output, never a stored copy of anyone's prices.** Three reasons, each grounded in §4:

1. **Feist**: your fitted coefficients are your own original work, not a copy of anyone's compilation.
2. **Rapaport v. Nivoda (2d Cir.)**: the court distinguished authored opinion from observed fact. A model fitted on *observed listing prices* — inputs the Second Circuit itself characterised as the "pre-existing fact" side of the line — is defensible; republishing someone's *benchmark opinion list* is not.
3. **hiQ's ending**: the remedy that kills you is an order to delete derived data. If your derived artefact is a coefficient vector fitted from licensed feeds, there is no tainted corpus to delete.

**Operational rule:** the estimate a user sees must never be traceable to one vendor's listing. If a model can be inverted to recover a specific vendor's price for a specific stone, you have built a redistribution mechanism with extra steps. Enforce k-anonymity (≥5 source listings behind any displayed estimate) and always show a range.

### 6.2 Normalization layer

Every source lands in one `stone_observation` shape. Source-specific adapters do all the dirty work; nothing downstream knows where a row came from.

```
adapters/
  nivoda.py        GraphQL  → StoneObservation
  idex_onsite.py   CSV      → StoneObservation
  affiliate_cj.py  TSV/PSV  → StoneObservation  (+ title parser)
  affiliate_impact.py       → StoneObservation  (+ title parser)
  shopify_products.py       → StoneObservation  (+ body_html parser)
  metals_api.py             → MetalPrice
  gemguide.py               → GemPrice
  gia_reports.py            → Certificate
```

Normalization rules that matter:
- **Grades → ordinals.** color D..Z → 0..22; clarity FL..I3 → 0..10; cut/polish/symmetry EX..P → 0..4. Never regress on strings.
- **Shape → controlled vocabulary** with alias map (`RB`/`Round Brilliant`/`ROUND` → `round`).
- **Carat → decimal(5,3)**, and keep a `carat_bucket` for the well-known price cliffs at 0.30/0.50/0.70/0.90/1.00/1.50/2.00/3.00.
- **Price → always store `price_usd` *and* `price_per_carat_usd`**, plus `currency_original` and `fx_rate_used`.
- **`cert_lab` + `cert_number` is the natural key** for cross-vendor identity (§7).
- **Never store vendor image URLs.** Store `image_present boolean` if you need the signal.

### 6.3 Proposed schema

```sql
-- ---------- provenance ----------
CREATE TABLE source (
  source_id        SERIAL PRIMARY KEY,
  name             TEXT NOT NULL UNIQUE,     -- 'nivoda','cj:bluenile','impact:brilliantearth'
  kind             TEXT NOT NULL,            -- wholesale_api|affiliate_feed|public_json|cert_api|metals|gem_guide
  licence_ref      TEXT,                     -- pointer to the agreement on file
  may_train_model  BOOLEAN NOT NULL,         -- set FALSE for anything Rapaport-like
  may_display_raw  BOOLEAN NOT NULL,         -- can we show this vendor's number verbatim?
  retention_days   INT,
  active           BOOLEAN DEFAULT TRUE
);

CREATE TABLE vendor (
  vendor_id    SERIAL PRIMARY KEY,
  name         TEXT NOT NULL,
  channel      TEXT,                          -- online|brick|marketplace
  parent_group TEXT,                          -- 'Signet' — Blue Nile & James Allen collapse here
  country      TEXT
);

-- ---------- certificates (identity) ----------
CREATE TABLE certificate (
  cert_id        BIGSERIAL PRIMARY KEY,
  lab            TEXT NOT NULL,               -- GIA|IGI|AGS|GCAL
  cert_number    TEXT NOT NULL,
  is_lab_grown   BOOLEAN NOT NULL,
  shape          TEXT, carat NUMERIC(6,3),
  color_ord      SMALLINT, clarity_ord SMALLINT,
  cut_ord        SMALLINT, polish_ord SMALLINT, symmetry_ord SMALLINT,
  fluorescence   TEXT,
  depth_pct      NUMERIC(5,2), table_pct NUMERIC(5,2),
  measurements   TEXT,
  report_date    DATE,
  fetched_at     TIMESTAMPTZ, last_checked_at TIMESTAMPTZ,
  UNIQUE (lab, cert_number)
);

-- ---------- observations (the fact table) ----------
CREATE TABLE stone_observation (
  obs_id          BIGSERIAL PRIMARY KEY,
  source_id       INT REFERENCES source,
  vendor_id       INT REFERENCES vendor,
  cert_id         BIGINT REFERENCES certificate,     -- NULL if uncertified
  lab             TEXT, cert_number TEXT,            -- denormalised for pre-resolution join
  is_lab_grown    BOOLEAN NOT NULL,
  shape           TEXT NOT NULL,
  carat           NUMERIC(6,3) NOT NULL,
  color_ord       SMALLINT, clarity_ord SMALLINT, cut_ord SMALLINT,
  polish_ord      SMALLINT, symmetry_ord SMALLINT, fluorescence TEXT,
  depth_pct       NUMERIC(5,2), table_pct NUMERIC(5,2),
  price_usd            NUMERIC(12,2) NOT NULL,
  price_per_carat_usd  NUMERIC(12,2) NOT NULL,
  price_kind      TEXT NOT NULL,              -- wholesale_ask|retail_list|retail_sale
  currency_original TEXT, fx_rate_used NUMERIC(12,6),
  listing_url_hash  TEXT,                     -- hash, not the URL
  observed_at     TIMESTAMPTZ NOT NULL,
  ingest_batch_id BIGINT
);
CREATE INDEX ON stone_observation (lab, cert_number, observed_at DESC);
CREATE INDEX ON stone_observation (is_lab_grown, shape, carat, observed_at DESC);
CREATE INDEX ON stone_observation (vendor_id, observed_at DESC);

-- ---------- metals & settings ----------
CREATE TABLE metal_price (
  metal_price_id BIGSERIAL PRIMARY KEY,
  source_id      INT REFERENCES source,
  metal          TEXT NOT NULL,               -- XAU|XAG|XPT|XPD
  purity_k       NUMERIC(4,1),                -- 10|14|18|24; NULL = pure spot
  alloy_code     TEXT,                        -- '14KY','18KW','PLAT950'
  usd_per_gram   NUMERIC(12,4) NOT NULL,
  usd_per_dwt    NUMERIC(12,4),
  observed_at    TIMESTAMPTZ NOT NULL
);
CREATE INDEX ON metal_price (metal, purity_k, observed_at DESC);

CREATE TABLE setting_spec (
  setting_id     SERIAL PRIMARY KEY,
  style          TEXT NOT NULL,               -- solitaire|halo|three_stone|pave|vintage
  band_width_mm  NUMERIC(4,2),
  metal_grams    NUMERIC(6,2) NOT NULL,       -- by alloy, for metal-cost component
  side_stone_ctw NUMERIC(6,3) DEFAULT 0,
  side_stone_quality TEXT,
  labor_class    TEXT NOT NULL                -- cast_simple|cast_pave|handmade
);

CREATE TABLE labor_rate (
  labor_rate_id  SERIAL PRIMARY KEY,
  labor_class    TEXT NOT NULL,
  region         TEXT NOT NULL,
  usd_base       NUMERIC(10,2) NOT NULL,
  usd_per_side_stone NUMERIC(10,2) DEFAULT 0,
  effective_from DATE NOT NULL, effective_to DATE
);

-- ---------- gemstones ----------
CREATE TABLE gem_price (
  gem_price_id  BIGSERIAL PRIMARY KEY,
  source_id     INT REFERENCES source,
  species       TEXT NOT NULL,                -- sapphire|ruby|emerald
  variety       TEXT, origin TEXT, treatment TEXT,
  carat_low     NUMERIC(6,2), carat_high NUMERIC(6,2),
  quality_grade TEXT,
  usd_per_carat_low  NUMERIC(12,2),
  usd_per_carat_high NUMERIC(12,2),
  observed_at   TIMESTAMPTZ NOT NULL
);

-- ---------- model artefacts (what you actually ship) ----------
CREATE TABLE price_model (
  model_id      SERIAL PRIMARY KEY,
  class         TEXT NOT NULL,                -- natural_diamond|lab_diamond|gemstone|setting
  version       TEXT NOT NULL,
  trained_at    TIMESTAMPTZ NOT NULL,
  train_window  TSTZRANGE NOT NULL,
  n_observations INT NOT NULL,
  feature_spec  JSONB NOT NULL,
  artefact_uri  TEXT NOT NULL,
  mape          NUMERIC(6,3), rmse NUMERIC(12,2),
  coverage_p80  NUMERIC(5,3),                 -- did 80% of holdout land in the p10–p90 band?
  approved      BOOLEAN DEFAULT FALSE,
  UNIQUE (class, version)
);

CREATE TABLE price_estimate (          -- cache of served estimates, for audit
  estimate_id  BIGSERIAL PRIMARY KEY,
  model_id     INT REFERENCES price_model,
  input_hash   TEXT NOT NULL,
  input_spec   JSONB NOT NULL,
  p10 NUMERIC(12,2), p50 NUMERIC(12,2), p90 NUMERIC(12,2),
  n_support    INT NOT NULL,                  -- must be >= 5 to display
  created_at   TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE vendor_markup (           -- §7 output
  vendor_markup_id BIGSERIAL PRIMARY KEY,
  vendor_id     INT REFERENCES vendor,
  period        DATERANGE NOT NULL,
  multiplier_p50 NUMERIC(6,4) NOT NULL,       -- retail / wholesale
  multiplier_p10 NUMERIC(6,4), multiplier_p90 NUMERIC(6,4),
  n_matched_certs INT NOT NULL,
  computed_at   TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE backtest_run (
  run_id       BIGSERIAL PRIMARY KEY,
  model_id     INT REFERENCES price_model,
  as_of        DATE NOT NULL,
  horizon_days INT NOT NULL,
  mape NUMERIC(6,3), bias NUMERIC(8,4), coverage_p80 NUMERIC(5,3),
  by_segment   JSONB,                          -- per shape/carat-band breakdown
  created_at   TIMESTAMPTZ DEFAULT now()
);
```

### 6.4 The model

Fit **log(price_per_carat)**, not price — diamond pricing is multiplicative and heteroscedastic.

```
log(ppc) ~ spline(carat)                       # captures the 0.90/1.00 cliffs
         + C(shape)
         + color_ord + clarity_ord + cut_ord
         + color_ord:clarity_ord               # the interaction that matters most
         + C(fluorescence)
         + is_lab_grown
         + t                                   # time trend — ESSENTIAL for lab-grown
         + C(vendor) [random effect]           # vendor markup falls out as the RE
```

Serve **quantiles, not a point**: fit p10/p50/p90 via quantile regression (or gradient boosting with pinball loss) and show users a band. This is honest (prices genuinely vary ±15–25% for identical stones — §7), it is better UX, and it makes the "you're republishing our price list" accusation much weaker.

**Calibration & backtesting:**
- Hold out the most recent 2 weeks; measure MAPE and **p80 coverage** (fraction of held-out actuals inside the p10–p90 band; target 0.78–0.82 — if it's 0.95 your bands are uselessly wide, if it's 0.60 you're overconfident).
- **Walk-forward backtest monthly**: refit as-of T, score T+7/T+14/T+30. Store in `backtest_run`.
- Segment metrics by shape × carat band. A global MAPE hides that you're 40% off on 3ct+ marquise.
- **Gate deployment on `price_model.approved`**, flipped only when MAPE and coverage pass thresholds.

### 6.5 Refresh cadence by data class

| Class | Cadence | Job | Rationale |
|---|---|---|---|
| Metals spot | **Hourly** intraday, EOD snapshot persisted | `refresh_metals` | MetalpriceAPI Pro gives 60s; hourly is plenty and cheap |
| Lab-grown listings | **2× weekly** | `ingest_nivoda_lab` | −13% YoY and still moving; stale data is actively wrong |
| Natural listings | **Weekly** | `ingest_nivoda_natural`, `ingest_idex` | Matches the industry's own weekly benchmark rhythm |
| Affiliate retail feeds | **Daily** | `ingest_affiliate_*` | Networks publish daily; sale prices change fast |
| Shopify `products.json` | **Daily**, ≤1 req/s, respect robots | `ingest_shopify` | Cheap, sanctioned |
| Cert lookups | On-demand + **weekly** `getChangedReports()` | `sync_gia_changes` | Free updates for 24mo; watch the quota bucket |
| Colored stone | **Bimonthly** + on volatility notice | `ingest_gemguide` | Matches GemGuide's publication cycle; conserves $0.10/lookup |
| Labor & setting specs | **Quarterly** | manual review | Genuinely slow-moving |
| Model refit — lab | **Weekly** | `train_model:lab_diamond` | Fast-decaying market |
| Model refit — natural | **Bi-weekly** | `train_model:natural_diamond` | Stable market |
| Vendor markup recompute | **Monthly** | `compute_vendor_markup` | Needs a month of cert overlaps to be stable |
| Backtest | **Monthly** | `backtest_walk_forward` | |

```
┌─ hourly ──── refresh_metals ──────────────────────────► metal_price
├─ daily ───── ingest_affiliate_{cj,impact,shareasale,awin}
│              ingest_shopify ──────────────────────────► stone_observation
├─ 2×/week ─── ingest_nivoda_lab ───────────────────────► stone_observation
├─ weekly ──── ingest_nivoda_natural, ingest_idex ──────► stone_observation
│              sync_gia_changes ────────────────────────► certificate
│              train_model:lab_diamond ─────────────────► price_model
├─ bi-weekly ─ train_model:natural_diamond ─────────────► price_model
├─ monthly ─── compute_vendor_markup ───────────────────► vendor_markup
│              backtest_walk_forward ───────────────────► backtest_run
└─ quarterly ─ review labor_rate / setting_spec ────────► labor_rate
```

Idempotency: every job writes with an `ingest_batch_id` and upserts on `(source_id, listing_url_hash, observed_at::date)`. Retain raw payloads 30 days for debugging, then drop — short retention is also a good-faith signal if anyone ever asks.

### 6.6 Presenting the number

- Show **"$4,100 – $4,900, typical $4,450"**, never a bare point estimate.
- Label it: *"Halo estimate — modelled from market data, not a vendor quote."*
- Show `n_support` ("based on 47 comparable stones") — it's a trust signal *and* evidence of aggregation.
- **Suppress when `n_support < 5`.** Say "not enough comparable data" rather than extrapolating.
- Never render a named vendor's specific price next to the estimate unless that vendor's `source.may_display_raw` is true (i.e. you have an affiliate agreement with them). **This is exactly the Nivoda-displaying-Rapaport fact pattern — do not reproduce it.**

---

## 7. Learning per-vendor markup empirically

**The technique is real and it works.** Every GIA-certified diamond gets a unique grading report number, and the industry's virtual-inventory model means the same physical stone is listed by many retailers simultaneously. "Most online vendors list a virtual inventory they do not own" — the stone belongs to a wholesaler who lets several vendors market it. Blue Nile pioneered exactly this: wholesalers supply details, Blue Nile lists them in real time, and acquires the stone only when a customer buys.

**Observed spreads are large.** The same stone can appear on **as many as 5 sites at once**, with differences of **more than $1,000** between vendors for an identical certificate number. Documented examples: the same oval listed on Blue Nile for **$1,200–1,300 more** than on Brilliance.com; the same diamond **$1,200 less** at B2C Jewels than at a chain jeweller.

**Method:**

```sql
-- weekly: retail vs wholesale for the same physical stone
WITH wholesale AS (
  SELECT lab, cert_number, MIN(price_usd) AS w_price
  FROM stone_observation
  WHERE price_kind = 'wholesale_ask'
    AND observed_at > now() - interval '7 days'
  GROUP BY 1,2
),
retail AS (
  SELECT vendor_id, lab, cert_number, MIN(price_usd) AS r_price
  FROM stone_observation
  WHERE price_kind IN ('retail_list','retail_sale')
    AND observed_at > now() - interval '7 days'
  GROUP BY 1,2,3
)
SELECT r.vendor_id,
       count(*)                                        AS n_matched,
       percentile_cont(0.10) WITHIN GROUP (ORDER BY r.r_price/w.w_price) AS m_p10,
       percentile_cont(0.50) WITHIN GROUP (ORDER BY r.r_price/w.w_price) AS m_p50,
       percentile_cont(0.90) WITHIN GROUP (ORDER BY r.r_price/w.w_price) AS m_p90
FROM retail r JOIN wholesale w USING (lab, cert_number)
GROUP BY 1 HAVING count(*) >= 30;
```

**Cautions:**
- **Require n ≥ 30 matched certs per vendor** before trusting a multiplier; markup varies systematically by carat band and shape, so compute it *within* segments where you have the volume.
- **Signet consolidation distorts this.** Blue Nile and the James Allen collection are now one vendor. Collapse them via `vendor.parent_group` or you'll manufacture a fake price spread.
- **Match on cert number, not on 4Cs.** Two different stones with identical 4Cs are genuinely different goods (cut quality, fluorescence, eye-cleanliness) and will produce spurious "markup."
- **Watch for stale listings.** A stone sold last week may linger on three sites. Require the observation to be ≤7 days old on both sides.

**Which sites expose cert numbers:** Blue Nile, Whiteflash (its `sitemap-diamonds.xml` / `sitemap-lab-diamonds.xml` enumerate diamond detail pages), Rare Carat (its Diamond Report / certificate-check feature is built on it), Ritani (publishes a guide on comparing the same diamond across retailers), and effectively every vendor sourcing from Nivoda/IDEX/VDB — the cert number is the primary key in those feeds. **Nivoda and IDEX both return certificate number directly in their APIs**, which means you can get the wholesale side of this ratio entirely from licensed sources and only need the retail side from affiliate feeds. **No scraping is required to run this analysis.**

Sources: [PriceScope: same GIA cert on two sites](https://www.pricescope.com/community/threads/same-gia-cert-number-on-a-diamond-being-on-2-websites.182747/) · [PriceScope: shared inventory](https://www.pricescope.com/community/threads/do-different-vendors-share-the-same-inventory.117641/) · [Beyond4Cs: same diamond on multiple sites](https://beyond4cs.com/2012/11/same-diamond-on-multiple-sites/) · [Ritani: comparing the same diamond across retailers](https://www.ritani.com/blogs/education/how-to-compare-the-same-diamond-across-different-retailers) · [Rare Carat diamond report](https://www.rarecarat.com/diamond-report/sample) · [Blue Nile virtual inventory model](https://www.diamonds.pro/reviews/blue-nile/) · [Blue Nile model history](https://aiinstitute.hbs.edu/platform-rctom/submission/blue-nile-a-hidden-gem-in-the-diamond-and-fine-jewelry-online-marketplace/) · [Diamond Watcher on certificate transparency](https://blog.diamondwatcher.com/how-online-diamond-retailers-compare-on-price-matching-and-certificate-transparency/)

---

## 8. Recommended phased plan

### Phase 0 — Legal groundwork (week 0, before any code)
- [ ] Write a one-page **data policy**: no vendor images ever; no logged-in access; no benchmark price lists; robots.txt honoured; ≤1 req/s per host.
- [ ] **Decide formally not to license the Rapaport Price List.** Document the reasoning (licence bans derived data + model training; active 2d Cir. litigation).
- [ ] Apply for GIA Report Results API access now — it has a formal approval process and a client-account requirement, so it is the long pole.

### Phase 1 — Licensed core (weeks 1–4) → *a working estimator*
- [ ] Nivoda account + GraphQL ingestion → `stone_observation` (wholesale side).
- [ ] MetalpriceAPI Pro ($32/mo) → `metal_price`, hourly.
- [ ] GIA API → `certificate`; wire `getChangedReports()`.
- [ ] Normalization layer + ordinal encoders + shape alias map.
- [ ] First quantile model on natural + lab diamonds; backtest harness; `approved` gate.
- **Cost: ~$40/month. Legal risk: 🟢.** This alone supports a credible estimator.

### Phase 2 — Retail calibration (weeks 5–9) → *per-vendor pricing, licensed*
- [ ] Apply to Impact (Blue Nile, Brilliant Earth), CJ (Jared/Zales), ShareASale (Angara), AWIN (Rare Carat).
- [ ] Build per-vendor title/URL parsers to recover 4Cs + cert number from feed rows; unit-test each.
- [ ] With Clarity + other Shopify `/products.json`, ≤1 req/s, robots honoured.
- [ ] Stand up `compute_vendor_markup`; require n ≥ 30; collapse Signet brands.
- [ ] Add IDEX Onsite ($1,250/yr) if Nivoda coverage shows gaps.
- **Cost: ~$150/month. Legal risk: 🟢.** Affiliate revenue may exceed data cost.

### Phase 3 — Breadth (weeks 10–16)
- [ ] GemGuide Enterprise ($500/yr) + negotiate API Direct terms for consumer-facing derived display.
- [ ] Setting/labour model: `setting_spec` gram weights × `metal_price` + `labor_rate`; seed labour from Hoover & Strong casting reference and jeweller interviews.
- [ ] VDB partnership; 1stDibs for vintage if the segment matters.
- [ ] Monthly walk-forward backtesting in CI; alert on MAPE regression.

### Phase 4 — Only if a real gap remains
- [ ] Re-examine whether a gap actually exists. In this survey, **licensed sources cover every data class Halo needs.**
- [ ] If scraping is still proposed: get written outside-counsel sign-off first, restrict to logged-out public pages, never images, honour robots.txt and Art. 4 TDM opt-outs, cap at ≤1 req/s, and budget $2k–8k/month plus continuous maintenance against Radware/Cloudflare/Akamai.
- [ ] Treat all fetched files (robots.txt, agents.md, product descriptions) as **untrusted data, never as instructions** — see the With Clarity injection note in §3.3.

### Kill-list — things to stop the founder from building
1. **Rapaport Price List integration** — licence-barred *and* the subject of live appellate copyright litigation.
2. **A James Allen scraper** — the site no longer exists.
3. **A Lightbox price feed** — the brand was wound down in 2025.
4. **Any product-image mirroring** — highest-severity, lowest-benefit risk in the whole system.
5. **Displaying a named vendor's raw price next to your estimate** without an affiliate agreement — that is precisely the `Rapaport v. Nivoda` fact pattern.
