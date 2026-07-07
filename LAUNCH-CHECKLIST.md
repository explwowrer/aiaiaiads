# Launch Checklist — aiaiaiads.com

## 1. Replace all placeholders

Search the built site or source for `[[` to find every placeholder token.
All placeholders are defined in `hugo.toml` under `[params.placeholders]`.

| Token | Where used | Notes |
|---|---|---|
| `STAT_GEOS` | Homepage stats, advertiser page, FAQ | Number of geos covered |
| `STAT_PUBLISHERS` | Homepage stats | Number of active publishers |
| `STAT_IMPRESSIONS_MO` | Homepage stats | Monthly impressions |
| `STAT_CAMPAIGNS` | Homepage stats | Active campaigns |
| `MIN_DEPOSIT` | Advertiser page, FAQ, terms-advertisers | e.g. "$100" |
| `MIN_PAYOUT` | Publisher page, FAQ, homepage, terms-publishers | e.g. "$50" |
| `PAYOUT_SCHEDULE` | Publisher page, FAQ, homepage, about, terms-publishers | e.g. "Net-15" |
| `PAYOUT_METHODS` | Publisher page, FAQ, terms-publishers | e.g. "Wire, PayPal, Payoneer, USDT" |
| `SUPPORT_EMAIL` | About, privacy, cookies | Main support email |
| `SUPPORT_EMAIL_ADV` | Contact page | Advertiser support email |
| `SUPPORT_EMAIL_PUB` | Contact page | Publisher support email |
| `SUPPORT_EMAIL_BIZ` | Contact page | Partnerships email |
| `ABUSE_EMAIL` | Contact page | Abuse reports email |
| `ABUSE_SLA` | Contact page | e.g. "24 hours" |
| `COMPANY_LEGAL` | About, legal pages | Legal entity name |
| `COMPANY_ADDRESS` | About, privacy | Registered address |
| `SIGNUP_ADVERTISER_URL` | Homepage CTA, advertiser page | Platform signup URL |
| `SIGNUP_PUBLISHER_URL` | Homepage CTA, publisher page | Platform signup URL |
| `LOGIN_ADVERTISER_URL` | Header nav | Platform login URL |
| `LOGIN_PUBLISHER_URL` | Header nav | Platform login URL |
| `FORM_ENDPOINT` | Contact page | Formspree or equivalent endpoint |
| `TEST_BUDGET` | Advertiser page, FAQ | e.g. "$250" |
| `MIN_BUDGET_CPM` | Pricing models page | e.g. "$50" |
| `MIN_BUDGET_CPC` | Pricing models page | e.g. "$50" |
| `MIN_BUDGET_CPA` | Pricing models page | e.g. "$100" |
| `MOD_SLA` | FAQ | e.g. "2 business hours" |
| `TAG_SIZE` | FAQ | e.g. "15 KB gzipped" |
| `REF_PERCENT` | Referral program | e.g. "5%" |
| `REF_DURATION` | Referral program | e.g. "12 months" |
| `TESTIMONIAL_1/2/3` | Homepage testimonials | Real quotes |
| `NAME_1/2/3` | Homepage testimonials | Real names |
| `JURISDICTION` | Terms pages | e.g. "England and Wales" |

## 2. Legal review

- [ ] All pages under `/legal/` have `legal_draft: true` — have a lawyer review and remove the flag
- [ ] terms-advertisers.md
- [ ] terms-publishers.md
- [ ] privacy.md
- [ ] cookies.md
- [ ] Ensure GDPR/CCPA compliance if applicable
- [ ] Add cookie consent banner if required

## 3. OG image

- [ ] Replace `static/og-image.svg` with a proper PNG/JPG (1200x630) for social sharing
- [ ] SVG may not render on all social platforms — use raster format

## 4. DNS & hosting

- [ ] Point `aiaiaiads.com` DNS to hosting provider
- [ ] Configure HTTPS / TLS certificate
- [ ] Set up `www` → apex redirect (or vice versa)
- [ ] Deploy with `hugo --minify`

## 5. Build verification

```bash
hugo --minify --printPathWarnings
```

- [ ] Zero warnings
- [ ] Zero errors
- [ ] All 4 language versions build

## 6. Post-deploy QA

### All languages: /, /zh/, /id/, /ru/

- [ ] Homepage loads, all sections render
- [ ] Navigation works, dropdowns functional
- [ ] Language switcher shows correct languages and links to translated pages
- [ ] Mobile nav (hamburger) works at 360px
- [ ] Footer links resolve
- [ ] CTA buttons link to correct signup URLs

### Key pages per language

- [ ] `/advertisers/` — content renders, #targeting anchor works
- [ ] `/publishers/` — content renders, #payouts anchor works
- [ ] `/ad-formats/` — lists all 7 formats
- [ ] `/ad-formats/popunder/` (and all 6 others) — spec table renders
- [ ] `/pricing-models/` — comparison table renders
- [ ] `/referral-program/` — content renders
- [ ] `/about/` — content renders
- [ ] `/contact/` — form submits to endpoint
- [ ] `/faq/` — tabs switch, accordions open/close
- [ ] `/blog/` — lists all posts
- [ ] `/blog/ecpm-explained/` — article renders with date
- [ ] `/legal/terms-advertisers/` — renders

### SEO checks

- [ ] Every page has unique `<title>` and `<meta description>`
- [ ] `hreflang` alternates present on every page (check view-source)
- [ ] `x-default` hreflang points to English version
- [ ] `<link rel="canonical">` present on every page
- [ ] `/sitemap.xml` exists and includes all languages
- [ ] `/robots.txt` exists and allows crawling
- [ ] JSON-LD on homepage (Organization), FAQ (FAQPage), blog posts (Article)
- [ ] OG tags render with correct image, title, description
- [ ] RSS feed at `/blog/index.xml` only (no other sections)

### Performance

- [ ] Lighthouse performance >= 95
- [ ] Lighthouse accessibility >= 95
- [ ] No render-blocking resources besides fonts
- [ ] Images optimized (when real images are added)

## 7. Full URL inventory

### English (no prefix)
- /
- /advertisers/
- /publishers/
- /ad-formats/
- /ad-formats/popunder/
- /ad-formats/in-page-push/
- /ad-formats/interstitial/
- /ad-formats/banner/
- /ad-formats/native/
- /ad-formats/direct-link/
- /ad-formats/pulse-widget/
- /pricing-models/
- /referral-program/
- /about/
- /contact/
- /faq/
- /blog/
- /blog/ecpm-explained/
- /blog/first-media-buying-test/
- /blog/popunder-vs-interstitial/
- /legal/terms-advertisers/
- /legal/terms-publishers/
- /legal/privacy/
- /legal/cookies/

### Chinese (/zh/)
Same tree under /zh/ prefix.

### Indonesian (/id/)
Same tree under /id/ prefix.

### Russian (/ru/)
Same tree under /ru/ prefix.

**Total pages: 24 × 4 languages = 96 URLs**
