# Full SEO Audit Report
**Site:** https://faridsz0605.github.io/portfolio-3d/
**Date:** 2026-03-04
**Business Type:** Developer Portfolio — MLOps / DevOps Engineer (Colombia)
**Audited by:** 5 specialized SEO subagents (Technical, Content/E-E-A-T, Schema, Performance, Visual)

---

## Overall SEO Health Score: 34 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 25% | 42/100 | 10.5 |
| Content Quality | 25% | 54/100 | 13.5 |
| On-Page SEO | 20% | 35/100 | 7.0 |
| Schema / Structured Data | 10% | 0/100 (live) | 0 |
| Performance (CWV) | 10% | 22/100 | 2.2 |
| Images | 5% | 15/100 | 0.75 |
| AI Search Readiness | 5% | 38/100 | 1.9 |
| **TOTAL** | | | **35.85 → 34** |

> Schema scores **52/100 in source** but **0/100 live** due to a stale build.
> Content improved from 41→54 since previous audit — many fixes are already in source.

---

## ⚠️ ALERT #0: STALE BUILD — Most Impactful Single Issue

The live site runs a **stale dist build**. Source `index.html` has all recent SEO work. The deployed dist does NOT.

| What's fixed in `index.html` (source) | What's live at the URL |
|----------------------------------------|------------------------|
| 3 JSON-LD schema blocks | ZERO structured data |
| Correct OG tags (`og:description`, `og:type`) | `property="Farid Sayago"` — broken |
| `<link rel="canonical">` | Missing |
| Sitemap reference in robots.txt | `robots.txt` → 404 |
| `sitemap.xml` with correct URL | `sitemap.xml` → 404 |
| `og:image`, `og:url`, `og:image:width/height` | Missing |
| `meta name="author"` | Missing |
| Correct favicon: `fav-small.png`, `type="image/png"` | Old broken favicon |
| Title: "MLOps Engineer" | "ML engineer & DevOps Engineer" |

**One command fixes 11 of 19 issues:**
```bash
npm run build
# then push dist/ to your gh-pages branch or trigger your CI
```

---

## Executive Summary

### Top 5 Critical Issues
1. **Stale dist** — live site is missing ALL SEO improvements made since last commit
2. **og:image file missing** — `public/images/og-preview.png` does not exist; every social share will fail even after rebuild
3. **Pure client-side rendering** — Googlebot sees `<div id="root"></div>`; all content invisible to non-JS crawlers (Bing, AI crawlers)
4. **1.27 MB Three.js bundle** — blocks rendering; LCP estimated >4s on mobile (POOR threshold)
5. **17.5 MB of unoptimized PNG images** — `project1.png` (7.9 MB), `fav.png` (4.8 MB), `project2.png` (2.7 MB)

### Top 5 Quick Wins (< 30 min each)
1. **Rebuild + deploy** — fixes schema, OG, canonical, robots, sitemap instantly
2. **Create `og-preview.png`** — screenshot the hero at 1200×630, place in `public/images/`
3. **Switch to existing WebP** — `project1.webp` and `project2.webp` already exist in `public/images/`; just update constants
4. **Fix experience counter** — says "1+ Years" but timeline shows June 2022–Jan 2026 (3.5 years)
5. **Fix "Orchestation" typo** — in `constants/index.js` line 117

---

## Technical SEO — 42 / 100

### CRITICAL

#### C-1: Pure Client-Side Rendering
Every crawler without JS execution sees:
```html
<body>
  <div id="root"></div>
</body>
```
All experience, skills, projects, and contact are invisible to Bingbot, Apple, and AI crawlers (GPTBot, ClaudeBot, PerplexityBot). Google renders JS but defers it by days to weeks.

**Fix options:**
- `vite-plugin-ssg` for static generation at build time (pragmatic, low effort)
- Astro with Three.js island components (best long-term for 3D portfolios)
- `<noscript>` fallback with key content (minimal, immediate)

#### C-2: robots.txt → 404 on Live Site
```
GET https://faridsz0605.github.io/portfolio-3d/robots.txt → 404
```
File exists at `public/robots.txt` (correct content). Fix: rebuild and deploy.

#### C-3: sitemap.xml → 404 on Live Site
```
GET https://faridsz0605.github.io/portfolio-3d/sitemap.xml → 404
```
File exists at `public/sitemap.xml` (correct content). Fix: rebuild and deploy.

#### C-4: Three.js Bundle Blocks All Rendering
```
three-vendor.js    1.27 MB  (synchronous parse before React can mount anything)
gsap-vendor.js       77 KB
index.js             72 KB
optimized-room.glb  806 KB  (preloaded, but Three.js must init first)
```
Estimated LCP: **> 4 seconds on mobile**. Fails Core Web Vitals.

#### C-5: og:image File Does Not Exist
```
GET https://faridsz0605.github.io/portfolio-3d/images/og-preview.png → 404
```
The source `index.html` references this file but it has never been created.
**Fix:** Take a 1200×630 screenshot of the hero section and save as `public/images/og-preview.png`.

### HIGH

#### H-1: Broken Open Graph Tags (live)
```html
<!-- LIVE — BROKEN -->
<meta property="Farid Sayago" content="..." />
<meta property="Farid Sayago" content="website" />

<!-- SOURCE — CORRECT (not yet deployed) -->
<meta property="og:description" content="MLOps Engineer..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://faridsz0605.github.io/portfolio-3d/" />
<meta property="og:image" content="...og-preview.png" />
```
LinkedIn, Slack, Discord, Twitter/X — all social sharing previews are broken.

#### H-2: No Canonical Tag (live)
Present in source `index.html`. Fix: rebuild.

#### H-3: Twitter Card is `summary` Instead of `summary_large_image` (live)
Present correctly in source. Fix: rebuild.

### MEDIUM

#### M-1: No Mobile Navigation
`NavBar.jsx` has only desktop nav. Google uses mobile-first indexing. Section anchor links are not navigable on mobile.

#### M-2: No `<noscript>` Fallback
No fallback HTML for content. The very first Googlebot crawl wave sees nothing.

#### M-3: Security Headers (GitHub Pages limitation)
Missing: `Content-Security-Policy`, `X-Frame-Options`, `Referrer-Policy`. HSTS present via GitHub/Fastly.
Fix: Migrate to Netlify or Cloudflare Pages (free tier).

#### M-4: AI Crawlers Not Explicitly Allowed in robots.txt
Consider explicitly permitting `GPTBot`, `ClaudeBot`, `Google-Extended` for AI search visibility — being crawlable by AI assistants increases brand awareness in a portfolio context.

### LOW

#### L-1: Cache-Control max-age=600 on All Assets
GitHub Pages caches everything for only 10 minutes, including Vite hashed bundles that should be `immutable`. Fix: migrate to Netlify/Cloudflare Pages.

#### L-2: No `rel="me"` on Social Links
Add `rel="me"` to footer social links to enable IndieAuth identity verification.

---

## Content Quality — 54 / 100 *(improved from 41 in previous audit)*

### Improvements Since Last Audit
Multiple issues were fixed in commit `a692407`:
- ✅ Single `<h1>` in Hero (was multiple H1s)
- ✅ `<h2>` on TitleHeader (was h1)
- ✅ "MLOps Engineer" identity consistent across all meta tags
- ✅ GitHub added to socialImgs and JSON-LD sameAs
- ✅ OG tags corrected (not deployed yet, but fixed in source)
- ✅ canonical, robots.txt, sitemap.xml all added
- ✅ fav-small.png + correct MIME type
- ✅ meta author added

### E-E-A-T Breakdown

| Pillar | Score | Primary Gap |
|--------|-------|-------------|
| Experience | 13/20 | "1+ Years" counter contradicts 3.5-year timeline; no project links; no cert proof |
| Expertise | 15/25 | Identity consistent; skill labels generic; "Always Learning" is not a skill |
| Authoritativeness | 11/25 | Schema present; testimonials not rendered; no backlinks; no published work |
| Trustworthiness | 17/30 | Dead "Terms & Conditions" link; no privacy policy; no direct email |

### Remaining Content Issues

#### Content-1: Experience Counter Contradicts Timeline *(HIGH)*
```js
// constants/index.js line 34 — WRONG
{ value: 1, suffix: "+", label: "Years of Experience" }

// expCards shows roles from June 2022 to Jan 2026 — fix to:
{ value: 3, suffix: "+", label: "Years of Experience" }
```
A quality rater sees "1+ Years" while the timeline below shows 3.5 years. This is the most damaging single trust signal on the page.

#### Content-2: Project Descriptions Critically Thin *(HIGH)*
| Project | Words | Links |
|---------|-------|-------|
| wiener-git | ~22 | None |
| WHTTP HTTP Server | ~31 | None |
| Wiener Tickets ML | **~12** | None |

The Wiener Tickets ML project — the flagship for an MLOps engineer — gets 12 words. Minimum: 80-100 words per project + GitHub repo link.

#### Content-3: "Terms & Conditions" is a Dead Link *(HIGH)*
In `Footer.jsx`: `<p>Terms & Conditions</p>` with no `<a>` href. A trust signal that leads nowhere is worse than no trust signal. Remove it or link it to an actual page.

#### Content-4: Heading Hierarchy in ShowcaseSection *(MEDIUM)*
The showcase has no parent `<h2>` section title, then uses `<h2>` for each project name. Should be:
```
<h2>Featured Projects</h2>
  <h3>wiener-git</h3>
  <h3>WHTTP...</h3>
  <h3>Wiener Tickets...</h3>
```

#### Content-5: "Orchestation" Typo *(MEDIUM)*
`constants/index.js` line 117: `"Dockerization & Orchestation"` → should be `"Orchestration"`.

#### Content-6: "Always Learning" is Not a Skill *(MEDIUM)*
`constants/index.js` line 123. The Git logo 3D model gets labeled "Always Learning". Rename to "Git & Version Control" or similar.

#### Content-7: No GitHub Links on Project Cards *(HIGH)*
An MLOps engineer portfolio with no repo links on the actual projects is a recruiter red flag. The `socialImgs` footer has GitHub but the project cards have no "View on GitHub" link.

#### Content-8: Testimonials Data Exists But Never Renders *(MEDIUM)*
`expCards` has 3 rich review quotes attributed to real employers. The Testimonials section is commented out in `App.jsx`. These testimonials being invisible means zero rendered social proof and zero Review schema value.

### Word Count
| Source | Words |
|--------|-------|
| Static HTML (crawler-visible) | **~0** |
| After full JS render | **~480** |
| Minimum threshold for homepage | **500** |

The site is below the content floor even with JavaScript fully rendered. With CSR, crawlers see nothing.

---

## Schema / Structured Data — 0/100 (live), 52/100 (source)

### Live Site: ZERO Schema
The deployed dist has no JSON-LD. Google cannot derive structured entity information from this URL.

### Source File: 3 JSON-LD Blocks (Need Rebuild + Corrections)

**Block 1:** `ProfilePage` + nested `Person`
**Block 2:** `WebSite`
**Block 3:** `@graph` with 3× `SoftwareSourceCode`

### Schema Errors to Fix Before Next Rebuild

#### Schema Error 1: Invalid property on Occupation
```json
// WRONG — "skills" is not a valid Schema.org property on Occupation
"hasOccupation": { "@type": "Occupation", "skills": ["Python", ...] }

// CORRECT
"hasOccupation": { "@type": "Occupation", "competencyRequired": ["Python", "AWS", ...] }
```

#### Schema Error 2: Invalid creativeWorkStatus value
```json
// WRONG — bare string is not a valid enumeration
"creativeWorkStatus": "InProgress"

// CORRECT — use the full schema.org URI
"creativeWorkStatus": "https://schema.org/InProgress"
```

#### Schema Error 3: Missing codeRepository on all 3 projects
`SoftwareSourceCode` loses its primary value without a `codeRepository` pointing to GitHub. Add to each project:
```json
"codeRepository": "https://github.com/faridsz0605/YOUR-REPO-NAME"
```

#### Schema Error 4: image should be ImageObject
```json
// WRONG — bare string
"image": "https://...fav.png"

// CORRECT
"image": { "@type": "ImageObject", "url": "https://...fav-small.png", "width": 64, "height": 64 }
```

### Missing HIGH-Value Schema

#### Review Schema (HIGH priority — unlocks rich result potential)
The `expCards` testimonials map directly to `Review` on `Person`. Add as a 4th JSON-LD block:
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago",
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Farid is an exceptionally sharp investigator who delivers rapid, high-impact results...",
      "author": { "@type": "Organization", "name": "Universidad Santo Tomás" },
      "itemReviewed": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" }
    },
    {
      "@type": "Review",
      "reviewBody": "Farid is an exceptional investigator who brings a deeply analytical, assertive approach to big data environments...",
      "author": { "@type": "Organization", "name": "Universidad Santo Tomás" },
      "itemReviewed": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" }
    },
    {
      "@type": "Review",
      "reviewBody": "Farid is an exceptionally proactive and focused professional who consistently delivers fast, efficient results...",
      "author": { "@type": "Organization", "name": "Intcomex" },
      "itemReviewed": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" }
    }
  ]
}
</script>
```

### Google Rich Result Eligibility
| Type | Eligible? | Reason |
|------|-----------|--------|
| Person Knowledge Panel | Potentially | ProfilePage + Person + sameAs is the exact pattern Google uses |
| Review Snippets | Conditional | Non-standard on Person; supported by Bing/AI crawlers |
| Breadcrumbs | N/A | Single-page SPA |
| SoftwareApplication | No | Would need `SoftwareApplication` type with `applicationCategory` |

---

## Performance (Core Web Vitals) — 22 / 100

### Estimated Grades
- **LCP: POOR** (estimated >4s on mobile)
- **INP: NEEDS IMPROVEMENT** (7 WebGL contexts + heavy JS parse)
- **CLS: NEEDS IMPROVEMENT** (all `<img>` missing width/height)

### Critical Asset Inventory
```
three-vendor.js      1.27 MB   ← synchronous parse blocks React mount
optimized-room.glb    806 KB   ← preloaded eagerly
kubernetes-logo.glb   626 KB   ← loaded at TechStack scroll
aws-logo.glb          455 KB   ← loaded at TechStack scroll
gsap-vendor.js         77 KB
index.js               72 KB
index.css              36 KB
```

### Image Weight — THE Biggest Quick Win
| File | Current | Format | Target | Savings |
|------|---------|--------|--------|---------|
| `project1.png` | **7.9 MB** | PNG | `project1.webp` already exists | 97% |
| `fav.png` | **4.8 MB** | PNG | `fav-small.png` already exists | 99.8% |
| `project2.png` | **2.7 MB** | PNG | `project2.webp` already exists | 94% |
| `exp2.png` | **2.1 MB** | PNG | `exp2.webp` already exists | 94% |
| **Total** | **~17.5 MB** | | **~360 KB** | **98%** |

The WebP versions of project1, project2, and exp2 **already exist in `public/images/`**. Only `constants/index.js` needs updating to reference them.

### LCP Issues
- Hero `<h1>` starts at `opacity: 0` via GSAP — LCP text invisible until JS executes
- No `fetchpriority="high"` on the preloaded GLB
- No `loading="lazy"` on below-fold images

### INP Issues (7 WebGL Contexts — Near Browser Limit)
```
HeroExperience (room model)           1 Canvas
TechIconCardExperience × 5           5 Canvas  ← one per icon
ContactExperience (computer model)   1 Canvas
─────────────────────────────────────────────
TOTAL                                7 WebGL contexts
```
Browser limit: 8–16 contexts. On mobile this is fragile. Fix: consolidate all 5 TechStack icons into ONE shared `<Canvas>`.

### CLS Issues
- All `<img>` tags missing `width` and `height` attributes → layout shifts on image load
- Google Fonts loaded via `@import` inside CSS → render-blocking chain, FOUT

---

## Images — 15 / 100

| Issue | Files Affected |
|-------|---------------|
| Massive PNG files | project1.png (7.9 MB), fav.png (4.8 MB), project2.png (2.7 MB), exp2.png (2.1 MB) |
| WebP alternatives exist but unused | project1.webp, project2.webp, exp2.webp already in `public/images/` |
| All `<img>` missing width/height | All project, exp, logo images → causes CLS |
| alt="" on animated word images | Hero section: ideas.svg, concepts.svg, designs.svg, code.svg |
| Wrong MIME on favicon link | `type="image/svg+xml"` for a .png file (fixed in source, not deployed) |

---

## AI Search Readiness — 38 / 100

AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do not execute JavaScript. They see:

### What AI Crawlers Extract From Source (after rebuild)
| Signal | Status |
|--------|--------|
| `<title>` | ✅ "Farid Sayago — MLOps Engineer \| Portfolio" |
| `meta name="description"` | ✅ 120-char description with Python, AWS, Kubernetes |
| OG tags | ✅ All correct in source |
| JSON-LD ProfilePage + Person | ✅ name, jobTitle, nationality, knowsAbout, sameAs |
| JSON-LD WebSite | ✅ url, name, author reference |
| JSON-LD SoftwareSourceCode × 3 | ⚠️ Present but missing codeRepository |
| Body content | ❌ ABSENT — pure CSR |

### What Would Make This AI-Citable
1. **JSON-LD schema** — already in source, needs rebuild + error fixes
2. **Add `codeRepository`** to each SoftwareSourceCode — highest single-field ROI
3. **SSR/SSG** — makes all content extractable without JS
4. **`public/llms.txt`** — structured info for AI crawlers (see ACTION-PLAN.md)

---

## Files That Need Changes

| File | Changes Required |
|------|-----------------|
| `index.html` | Fix schema errors (competencyRequired, creativeWorkStatus, ImageObject), add Review schema, add codeRepository |
| `public/images/og-preview.png` | **Create this file** — 1200×630 screenshot of hero |
| `src/constants/index.js` | Fix exp counter (1→3 years), switch project1/2 to .webp, fix "Orchestation" typo, fix "Always Learning" label |
| `src/sections/ShowcaseSection.jsx` | Add GitHub links per project, expand descriptions to 80+ words, fix h2→h3 |
| `src/sections/Footer.jsx` | Fix dead "Terms & Conditions" link (remove or link it) |
| `src/components/NavBar.jsx` | Add mobile hamburger menu |
| `src/index.css` | Move Google Fonts @import to `<link rel="preload">` in HTML head |
| `public/llms.txt` | Create — structured AI-readable content |
