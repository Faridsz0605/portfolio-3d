# Full SEO Audit Report
## faridsz0605.github.io/portfolio-3d/
**Date:** 2026-03-04
**Audited by:** 4 specialized SEO agents (Technical, Content, Schema, Performance)

---

## Executive Summary

**Overall SEO Health Score: 29 / 100**

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 25% | 38/100 | 9.5 |
| Content Quality | 25% | 41/100 | 10.3 |
| On-Page SEO | 20% | 35/100 | 7.0 |
| Schema / Structured Data | 10% | 0/100 | 0.0 |
| Performance (Core Web Vitals) | 10% | 15/100 | 1.5 |
| Images | 5% | 5/100 | 0.3 |
| AI Search Readiness | 5% | 18/100 | 0.9 |
| **TOTAL** | **100%** | | **29.5 / 100** |

**Business type detected:** Developer/ML Engineer Personal Portfolio
**Stack:** React 19 + Vite 6 + Three.js + GSAP + GitHub Pages

### Top 5 Critical Issues
1. **Pure Client-Side Rendering** — Googlebot gets `<div id="root"></div>`. Bing and AI crawlers see nothing at all.
2. **Images are catastrophically oversized** — `project1.png` is **7.9 MB** at 2784×1536. Total page weight: 21+ MB.
3. **Zero structured data** — No JSON-LD, no Microdata, no valid Open Graph tags.
4. **No robots.txt, no sitemap.xml** — Crawlers cannot be guided; Google may not even know this URL exists.
5. **Broken Open Graph tags** — `property="Farid Sayago"` instead of `og:description` / `og:type`.

### Top 5 Quick Wins (under 30 minutes each)
1. Create `public/robots.txt` + `public/sitemap.xml` → 10 minutes
2. Fix broken OG tags + add `og:image`, `og:url`, `og:type`, `og:canonical` → 10 minutes
3. Add `<script type="application/ld+json">` Person + ProfilePage schema → 20 minutes
4. Fix favicon MIME type (`image/svg+xml` → `image/png`) → 2 minutes
5. Convert `fav.png` (4.8 MB) to a 64×64 WebP → 5 minutes

---

## Technical SEO

**Score: 38 / 100**

### CRITICAL

#### C-1: Pure Client-Side Rendering
Every crawlers sees this body:
```html
<body>
  <div id="root"></div>
</body>
```
All content — experience, skills, projects, titles — is invisible to Bingbot, Apple, and AI crawlers. Google does render JS but defers it days/weeks. For a portfolio meant to be discovered by recruiters, this is the most damaging single issue on the site.

**Fix:** Migrate to Astro (ideal for 3D island components) or use `vite-plugin-ssg` / `react-snap` for pre-rendering at build time.

#### C-2: No robots.txt (404)
```
GET /portfolio-3d/robots.txt → 404
```
**Fix:** Create `/public/robots.txt`:
```txt
User-agent: *
Allow: /

Sitemap: https://faridsz0605.github.io/portfolio-3d/sitemap.xml
```

#### C-3: No sitemap.xml (404)
```
GET /portfolio-3d/sitemap.xml → 404
```
**Fix:** Create `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://faridsz0605.github.io/portfolio-3d/</loc>
    <lastmod>2026-03-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

#### C-4: Three.js Bundles Block Rendering
```
three-vendor-Cn5xr9tB.js  →  1.27 MB  (synchronous parse before React mounts)
gsap-vendor-eVHqVK2q.js   →  77 KB
index-CLGK-H2r.js         →  72 KB
optimized-room.glb         →  806 KB  (preloaded, but Three.js must init first)
```
Estimated LCP: **>4 seconds** on mid-tier mobile. Poor threshold.

### HIGH

#### H-1: Broken Open Graph Tags
```html
<!-- index.html lines 18-22 — INVALID -->
<meta property="Farid Sayago" content="I'm Farid Sayago..." />
<meta property="Farid Sayago" content="website" />
```
Should be:
```html
<meta property="og:description" content="ML Engineer & DevOps from Colombia..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://faridsz0605.github.io/portfolio-3d/" />
<meta property="og:image" content="https://faridsz0605.github.io/portfolio-3d/images/og-preview.png" />
```

#### H-2: No Canonical Tag
No `<link rel="canonical">`. Add:
```html
<link rel="canonical" href="https://faridsz0605.github.io/portfolio-3d/" />
```

#### H-3: Missing og:image + twitter:image
All social shares render with no thumbnail. Fix:
```html
<meta property="og:image" content="https://faridsz0605.github.io/portfolio-3d/images/og-preview.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="https://faridsz0605.github.io/portfolio-3d/images/og-preview.png" />
<meta name="twitter:card" content="summary_large_image" />
```
(Create `og-preview.png` as a 1200×630 screenshot of the hero.)

#### H-4: Title/Identity Inconsistency
| Tag | Value |
|-----|-------|
| `<title>` | "ML engineer & DevOps Engineer" |
| `twitter:title` | "Aspiring DevOps Engineer" |
| Hero paragraph | "aspiring DevOps engineer" |
| Meta description | "Passionate ML Engineer & DevOps" |

Pick one identity. "Aspiring" contradicts 3+ years of documented experience. Remove it.

### MEDIUM

#### M-1: No Mobile Navigation
`NavBar.jsx` renders only `<nav className="desktop">` — no hamburger menu. Google uses mobile-first indexing. If nav is hidden on mobile, section anchor links are uncrawlable.

#### M-2: Wrong Favicon MIME Type
```html
<!-- index.html line 5 -->
<link rel="icon" type="image/svg+xml" href="/portfolio-3d/images/fav.png" />
```
Fix: `type="image/png"` and replace `fav.png` (4.8 MB, 2048×2048) with a 64×64 PNG (<10 KB).

#### M-3: Security Headers (GitHub Pages limitation)
Missing: `X-Frame-Options`, `Content-Security-Policy`, `Referrer-Policy`, `Permissions-Policy`. HSTS is present (via GitHub Pages/Fastly). To fix: migrate to Netlify or Cloudflare Pages.

### LOW

#### L-1: Missing `<meta name="author">`
```html
<meta name="author" content="Farid Sayago" />
```

#### L-2: Cache-Control: max-age=600
GitHub Pages caches all assets for only 10 minutes. Hashed Vite bundles should be `immutable`. GitHub Pages limitation — fix by migrating to Netlify/Cloudflare Pages.

---

## Content Quality

**Score: 41 / 100**

### E-E-A-T Assessment

| Pillar | Score | Primary Issue |
|--------|-------|---------------|
| Experience | 9/20 | No certification links, no project URLs, anonymous employer logos |
| Expertise | 12/25 | Soft skills copy is generic, JS-only renders skills invisible |
| Authoritativeness | 7/25 | No GitHub link anywhere, no external references |
| Trustworthiness | 13/30 | Identity inconsistency, "Terms & Conditions" link goes nowhere |

### Critical Content Issues

#### CC-1: Multiple H1 Tags
The Hero section renders **3 separate `<h1>` tags** for a single animated phrase. `TitleHeader` also uses `<h1>` for every section title. Total H1 count: 4+.
**Fix:** Wrap all three Hero spans in ONE `<h1>`. Change all `TitleHeader` components to render `<h2>`.

#### CC-2: No GitHub Link
A developer portfolio with no GitHub link in navigation or footer is a fatal omission for recruiter E-E-A-T. The `socialImgs` array in `constants/index.js` has Instagram, X, and LinkedIn — but no GitHub.

#### CC-3: Project Descriptions are Critically Thin

| Project | Words | Links |
|---------|-------|-------|
| wiener-git | 22 | None |
| WHTTP HTTP Server | 31 | None |
| Wiener Tickets ML | 12 | None |

Minimum for meaningful content: 80-100 words per project, plus GitHub repo link.

#### CC-4: Placeholder Testimonials Reference "Adrian"
`constants/index.js` lines 187-231 contain a `// TODO` comment and testimonials that say "Adrian" — copied from the original tutorial template and never updated. These are commented out in `App.jsx` but the data still exists. Delete lines 188-231 entirely.

#### CC-5: Anonymous Employer Logos
Experience cards use `logo1.png`, `logo2.png`, `logo3.png` with no company names. From a crawler perspective, these are three unnamed former employers. Add a `company` field with actual organization names.

#### CC-6: "Aspiring" Undercuts Authority
Hero copy: "an aspiring DevOps engineer from Colombia" — but the experience section shows 3+ years of professional roles at 3 organizations. This inconsistency actively hurts E-E-A-T.

#### CC-7: Word Count Below Minimum
Static HTML words: ~0 (everything rendered by JS)
After JS execution: ~380-420 words
Minimum for homepage type: 500 words
**Below threshold even after JavaScript renders.**

---

## Schema / Structured Data

**Score: 0 / 100**

**Zero structured data found.** No JSON-LD, no Microdata, no RDFa.

### Recommended JSON-LD (add to `<head>` in `index.html`)

#### Block 1: ProfilePage + Person (Priority 1)
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "dateCreated": "2024-01-01",
  "dateModified": "2026-03-04",
  "url": "https://faridsz0605.github.io/portfolio-3d/",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago",
    "name": "Farid Sayago",
    "url": "https://faridsz0605.github.io/portfolio-3d/",
    "jobTitle": "ML Engineer & DevOps Engineer",
    "nationality": { "@type": "Country", "name": "Colombia" },
    "knowsAbout": [
      "Python", "Machine Learning", "DevOps", "MLOps",
      "AWS", "Kubernetes", "Docker", "Terraform",
      "Data Pipelines", "Business Intelligence", "PostgreSQL", "Django"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/faridsayago/",
      "https://x.com/farids0805",
      "https://www.instagram.com/farid_sayago7/"
    ]
  }
}
</script>
```

#### Block 2: WebSite (Priority 2)
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://faridsz0605.github.io/portfolio-3d/#website",
  "url": "https://faridsz0605.github.io/portfolio-3d/",
  "name": "Farid Sayago — Portfolio",
  "author": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" },
  "inLanguage": "en"
}
</script>
```

#### Block 3: SoftwareSourceCode projects (Priority 3)
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareSourceCode",
      "name": "wiener-git",
      "description": "A Git clone written in Python to understand version management systems.",
      "programmingLanguage": { "@type": "ComputerLanguage", "name": "Python" },
      "author": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" }
    },
    {
      "@type": "SoftwareSourceCode",
      "name": "WHTTP — HTTP Server in C",
      "description": "An HTTP server in C to improve knowledge of code security and API abstractions.",
      "programmingLanguage": { "@type": "ComputerLanguage", "name": "C" },
      "author": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" }
    },
    {
      "@type": "SoftwareSourceCode",
      "name": "Wiener Tickets — ML Ticket Prediction",
      "description": "Machine learning model for ticket prediction with end-to-end MLOps workflow.",
      "programmingLanguage": { "@type": "ComputerLanguage", "name": "Python" },
      "author": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" }
    }
  ]
}
</script>
```

---

## Performance (Core Web Vitals)

**Estimated grades: LCP Poor | INP Needs Improvement | CLS Needs Improvement**

### Image Weight — THE Biggest Problem

| Image | Actual Size | Dimensions | Target | Reduction |
|-------|-------------|------------|--------|-----------|
| `project1.png` | **7.9 MB** | 2784×1536 | <200 KB WebP | 97% |
| `fav.png` | **4.8 MB** | 2048×2048 | <10 KB PNG | 99.8% |
| `project2.png` | **2.7 MB** | 2752×1536 | <150 KB WebP | 94% |
| `exp2.png` | **2.1 MB** | 2752×1536 | <150 KB WebP | 94% |
| **Total** | **~17.5 MB** | | **~510 KB** | **97%** |

These 4 files alone account for 17.5 MB of uncompressed PNG. Converting to WebP at display dimensions would save ~17 MB.

### LCP Issues
- Hero `<h1>` starts at `opacity: 0` via GSAP `fromTo` — LCP text is invisible until JS executes
- `three-vendor.js` (1.27 MB) must parse before React mounts
- No `fetchpriority="high"` on LCP candidate image
- No `loading="lazy"` on below-fold images

### INP Issues
- `TechStack` section creates one `<Canvas>` (WebGL context) **per icon** — 5 simultaneous WebGL contexts at scroll
- GSAP ScrollTrigger on many elements competes on main thread

### CLS Issues
- All `<img>` tags missing `width` and `height` attributes
- Google Fonts loaded via `@import` inside CSS file (render-blocking chain, causes FOUT)
- Fix: Move font to `<link rel="preload">` in HTML `<head>` or self-host

### Caching
`cache-control: max-age=600` on ALL assets including hashed bundles. GitHub Pages limitation.
Fix: Migrate to Netlify or Cloudflare Pages (free tier available).

---

## AI Search Readiness

**Score: 18 / 100**

AI crawlers (GPTBot, ClaudeBot, PerplexityBot) **do not execute JavaScript**. They see:
- `<title>` ✓
- `<meta name="description">` ✓
- Broken OG tags ✗
- Empty `<div id="root">` — all content invisible ✗
- No JSON-LD schema ✗

**What would make this AI-citable:** JSON-LD schema (highest ROI) + SSG pre-rendering (architectural fix).

---

## Files to Change

| File | Changes Needed |
|------|---------------|
| `index.html` | Fix OG tags, add canonical, add JSON-LD blocks, fix favicon MIME, add author meta |
| `public/robots.txt` | Create new file |
| `public/sitemap.xml` | Create new file |
| `public/images/project1.png` | Convert to WebP, resize to max 1400px wide |
| `public/images/project2.png` | Convert to WebP, resize to max 1400px wide |
| `public/images/fav.png` | Resize to 64×64, save as PNG, replace |
| `public/images/exp2.png` | Convert to WebP, resize to max 800px wide |
| `src/sections/Hero.jsx` | Fix multiple `<h1>` tags, fix `alt="person"` on word images |
| `src/components/TitleHeader.jsx` | Change `<h1>` to `<h2>` for section titles |
| `src/constants/index.js` | Delete placeholder testimonials (lines 188-231), add GitHub to socialImgs, add company names to expCards |
| `src/sections/ShowcaseSection.jsx` | Add GitHub/demo links per project, expand descriptions |
| `src/components/NavBar.jsx` | Add mobile hamburger menu |
| `src/index.css` | Move `@import` Google Fonts to `<link>` in HTML head |
