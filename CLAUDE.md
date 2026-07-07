# CLAUDE.md — aiaiaiads.com project specification

> Rename this file to `CLAUDE.md` and keep it in the repo root. It is the single
> source of truth for every Claude Code session on this project.

## What we are building

**aiaiaiads.com** — the marketing website of an AI-driven advertising network that
connects two audiences:

- **Advertisers** (brands, media buyers, affiliates) who buy traffic.
- **Publishers** (site owners, bloggers, app owners) who monetize traffic.

The site is a static marketing/SEO site. The actual ad platform (login, dashboards)
lives on separate subdomains and is only linked from here.

Reference for *category conventions only* (never copy text or visuals):
typical ad-network sites such as Adsterra, PropellerAds, Monetag.
All copy on this site must be original.

## Tech stack

- **Hugo** (extended), already installed locally. Target version >= 0.140.
- No external theme. We build our own theme in `/layouts` + `/assets`.
- CSS: plain SCSS via Hugo Pipes (`css.Sass`). No Tailwind, no JS frameworks.
- JS: small vanilla JS only (mobile nav, language switcher, FAQ accordions, tabs).
- Forms: static form posting to a placeholder endpoint `{{FORM_ENDPOINT}}`
  (Formspree-compatible markup).
- Deployment target: any static host (Netlify/Cloudflare Pages). Build = `hugo --minify`.

## Languages (critical — design for this from day one)

| Code | Language | URL prefix | Status |
|---|---|---|---|
| `en` | English | `/` (default, no prefix) | phase 1 — full content |
| `zh` | 简体中文 (Simplified Chinese) | `/zh/` | phase 2 |
| `id` | Bahasa Indonesia | `/id/` | phase 2 |
| `ru` | Русский | `/ru/` | phase 2 |

Rules:

1. Content lives in per-language directories: `content/en/`, `content/zh/`,
   `content/id/`, `content/ru/`. Configure `contentDir` per language.
2. Every layout string (buttons, nav, footer, form labels, 404) goes through
   `i18n/` files (`i18n/en.toml` etc.). **Never hard-code UI strings in templates.**
3. Every page template must emit `hreflang` alternates and an `x-default`.
4. The language switcher shows only languages where a translation of the current
   page exists (`.Translations`), plus the current one; it links to the translated
   page, not to the homepage.
5. Dates, numbers: use Hugo's localized formatting (`time.Format` with `.Language`).
6. Typography must handle Latin, Cyrillic and CJK (see design brief): font stack
   includes a CJK fallback; avoid `letter-spacing` on body text; line-height 1.7
   works for all four languages.
7. Text expansion: Russian and Indonesian run ~15–30% longer than English.
   Buttons, cards and nav must not have fixed widths that clip text.

## Content model

```
content/
  en/
    _index.md                 # homepage
    advertisers/_index.md
    publishers/_index.md
    ad-formats/
      _index.md               # overview / live-demo hub
      popunder.md
      in-page-push.md
      interstitial.md
      banner.md
      native.md
      direct-link.md
      pulse-widget.md         # our "proprietary" format page
    pricing-models/_index.md
    referral-program/_index.md
    about/_index.md
    contact/_index.md
    faq/_index.md
    blog/
      _index.md
      <post-bundles>/index.md
    legal/
      terms-advertisers.md
      terms-publishers.md
      privacy.md
      cookies.md
  zh/ ... (same tree, translated)
  id/ ...
  ru/ ...
```

Front matter conventions:

- `title`, `description` (used for meta description), `translationKey`
  (same key across languages so Hugo links translations).
- Page-type front matter param `layout` only when a page needs a custom layout;
  otherwise section templates.
- Ad-format pages share params: `format_icon`, `audience: [advertisers, publishers]`,
  `pricing: [CPM, CPC, CPA]`, `summary_advertisers`, `summary_publishers`.

## Placeholders policy

Real business numbers are not known yet. Copy uses tokens that MUST survive into
the built site until the owner replaces them:

`{{STAT_GEOS}}`, `{{STAT_PUBLISHERS}}`, `{{STAT_IMPRESSIONS_MO}}`,
`{{STAT_CAMPAIGNS}}`, `{{MIN_DEPOSIT}}`, `{{MIN_PAYOUT}}`, `{{PAYOUT_SCHEDULE}}`,
`{{SUPPORT_EMAIL}}`, `{{COMPANY_LEGAL}}`, `{{COMPANY_ADDRESS}}`,
`{{SIGNUP_ADVERTISER_URL}}`, `{{SIGNUP_PUBLISHER_URL}}`,
`{{LOGIN_ADVERTISER_URL}}`, `{{LOGIN_PUBLISHER_URL}}`, `{{FORM_ENDPOINT}}`.

Put them in `hugo.toml` under `[params.placeholders]` and render via a partial
`placeholder.html`, so replacing a value once updates the whole site in all languages.

## SEO baseline

- One `<h1>` per page; meta description from front matter `description`.
- OpenGraph + Twitter cards partial; per-language `og:locale`.
- `sitemap.xml` (Hugo default, multilingual), `robots.txt`.
- Canonical URLs; trailing slashes; `defaultContentLanguageInSubdir = false`.
- JSON-LD: `Organization` on homepage, `FAQPage` on /faq/, `Article` on blog posts.

## Quality bar / definition of done

- `hugo --minify` builds with zero warnings.
- Lighthouse: performance and accessibility >= 95 on home page.
- No layout breakage at 360px width in any of the 4 languages.
- All internal links resolve in all languages (`hugo --printPathWarnings`).
- No English strings visible on /zh/, /id/, /ru/ pages except brand names.

## Brand voice (English)

Confident, concrete, lightly playful — the brand name is a wink ("ai-ai-ai").
Short sentences. No hype words ("revolutionary", "cutting-edge"). Speak in
outcomes: fill rates, eCPM, conversions, payout speed. Address the reader as "you".

## Translation workflow

To add a language version of a page:

1. Copy the EN file from `content/en/` to `content/xx/` (same path).
2. Keep the `translationKey` identical to the EN version.
3. Translate `title`, `description`, and body content.
4. Translate all front matter params that contain user-visible text (e.g.
   `hero_h1`, `hero_sub`, `two_doors`, `benefits`, `faq_advertisers`, etc.).
5. Keep all `{{...}}` placeholder tokens intact — never translate them.
6. Update `i18n/xx.toml` — translate every string, remove "TODO:" prefix.
7. Update the `[languages.xx.menus.main]` block in `hugo.toml` — translate
   menu `name` values, remove "TODO:" prefix.
8. Build and verify: `hugo --printPathWarnings` should show zero warnings;
   check the translated page renders with no English strings (except brand names).
