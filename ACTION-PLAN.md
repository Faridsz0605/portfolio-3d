# SEO Action Plan
**Site:** https://faridsz0605.github.io/portfolio-3d/
**Date:** 2026-03-04
**Current Score:** 34 / 100
**Target Score:** 72 / 100 (85+ with SSG migration)

---

## CRITICAL — Fix Today (blocks all indexing improvements)

### 1. Create og-preview.png *(~10 min)*
The source `index.html` already has `<meta property="og:image" content=".../images/og-preview.png" />` but the file doesn't exist.

```bash
# Take a screenshot of the hero at 1200x630
# Use any method: browser devtools, Playwright, screenshot tool
# Save as:
public/images/og-preview.png
```

All social sharing (LinkedIn, Twitter/X, Slack, Discord) will fail without this file, even after rebuilding.

### 2. Rebuild and Deploy *(~5 min)*
```bash
npm run build
# push dist/ to gh-pages branch or trigger your GitHub Actions workflow
```

This one command fixes **11 issues simultaneously**:
- ✅ robots.txt (404 → 200)
- ✅ sitemap.xml (404 → 200)
- ✅ canonical tag added
- ✅ OG tags corrected (og:description, og:type, og:url, og:image)
- ✅ Twitter card upgraded to summary_large_image
- ✅ 3 JSON-LD schema blocks live
- ✅ meta author added
- ✅ Correct favicon (fav-small.png + image/png MIME)
- ✅ Title: "MLOps Engineer" (consistent)
- ✅ Description: keyword-dense, no filler

**Projected score after steps 1-2: ~46/100** (+12 points)

---

## HIGH — Fix Within 1 Week

### 3. Fix Schema Errors in index.html *(~20 min)*

Fix before the next rebuild so schema deploys correctly.

#### a) Fix `competencyRequired` on Occupation
```json
// WRONG — "skills" is not valid on Occupation
"hasOccupation": { "@type": "Occupation", "skills": [...] }

// CORRECT
"hasOccupation": { "@type": "Occupation", "competencyRequired": ["Python", "AWS", "Kubernetes", "Docker", "Terraform", "MLOps", "Machine Learning", "Data Pipelines", "AI Agent Orchestration"] }
```

#### b) Fix `creativeWorkStatus`
```json
// WRONG — bare string
"creativeWorkStatus": "InProgress"

// CORRECT — full schema.org URI
"creativeWorkStatus": "https://schema.org/InProgress"
```

#### c) Upgrade `image` to `ImageObject`
```json
// WRONG
"image": "https://faridsz0605.github.io/portfolio-3d/images/fav.png"

// CORRECT
"image": { "@type": "ImageObject", "url": "https://faridsz0605.github.io/portfolio-3d/images/fav-small.png", "width": 64, "height": 64 }
```

#### d) Add `codeRepository` to each SoftwareSourceCode
```json
// Add to each project block:
"codeRepository": "https://github.com/faridsz0605/YOUR-ACTUAL-REPO-NAME"
```
Replace with your actual GitHub repo slugs.

### 4. Add Review Schema (4th JSON-LD block in index.html) *(~15 min)*
The testimonial data already exists in `expCards`. Use it.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago",
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Farid is an exceptionally sharp investigator who delivers rapid, high-impact results. He possesses a remarkable ability to quickly absorb complex information and propose innovative solutions to blind spots we hadn't even recognized.",
      "author": { "@type": "Organization", "name": "Universidad Santo Tomás" },
      "itemReviewed": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" }
    },
    {
      "@type": "Review",
      "reviewBody": "Farid is an exceptional investigator who brings a deeply analytical, assertive approach to big data environments. His ramp-up time is virtually non-existent and he consistently queries beyond the obvious.",
      "author": { "@type": "Organization", "name": "Universidad Santo Tomás" },
      "itemReviewed": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" }
    },
    {
      "@type": "Review",
      "reviewBody": "Farid is an exceptionally proactive and focused professional who consistently delivers fast, efficient results. He excels at leveraging specialized tools to solve complex problems.",
      "author": { "@type": "Organization", "name": "Intcomex" },
      "itemReviewed": { "@id": "https://faridsz0605.github.io/portfolio-3d/#farid-sayago" }
    }
  ]
}
</script>
```

### 5. Fix Experience Counter *(~2 min)*
File: `src/constants/index.js` line 34

```js
// WRONG — says 1+ but timeline is June 2022 – Jan 2026
{ value: 1, suffix: "+", label: "Years of Experience" }

// CORRECT
{ value: 3, suffix: "+", label: "Years of Experience" }
```

A quality rater sees "1+ Years" with three roles spanning 3.5 years below it. This is the most damaging trust signal on the page.

### 6. Switch Project Images to Existing WebP Files *(~5 min)*
File: `src/constants/index.js` — ShowcaseSection references

The WebP versions **already exist in `public/images/`**. Just update the references:
```js
// CHANGE project1.png → project1.webp
// CHANGE project2.png → project2.webp
// exp2.webp is already referenced ✓
```
Saves ~10.6 MB of image weight instantly. **Biggest performance win with zero effort.**

### 7. Fix Dead "Terms & Conditions" Link *(~2 min)*
File: `src/sections/Footer.jsx` line 8 (approximate)

`<p>Terms & Conditions</p>` with no href. Remove it or link to a real page. A broken trust signal is worse than no trust signal.

### 8. Fix Typography Issues in Constants *(~5 min)*
File: `src/constants/index.js`

```js
// line 117 — TYPO
"Dockerization & Orchestation"  →  "Dockerization & Orchestration"

// line 123 — NOT A SKILL
"Always Learning"  →  "Git & Version Control"
```

### 9. Add GitHub Links to Project Cards *(~30 min)*
File: `src/sections/ShowcaseSection.jsx`

An MLOps engineer portfolio with no repo links on projects is a recruiter red flag. Add "View on GitHub" link to each project card pointing to the actual repo.

### 10. Create `public/llms.txt` *(~10 min)*

```txt
# Farid Sayago — MLOps Engineer Portfolio

Farid Sayago is an MLOps Engineer and DevOps specialist from Colombia.
He specializes in Python, data pipelines, AWS, Kubernetes, Docker, Terraform, and AI agent orchestration.

## Professional Experience
- Data Analyst at Intcomex (June 2025 – January 2026): Power BI dashboards, OLAP ETL pipelines, 14+ countries
- Lead Investigator at Universidad Santo Tomás (June 2022 – January 2026): Econometric models, R, Python, academic publications
- Associate Investigator at Universidad Santo Tomás (June 2024 – January 2025): Big Data with Dask, automated data pipelines

## Projects
- wiener-git: Python implementation of a Git clone for understanding version management internals
- WHTTP: HTTP server written in C for hands-on study of API security and communication abstractions
- Wiener Tickets: End-to-end MLOps workflow for ML-based ticket prediction using Python

## Tech Stack
Python, AWS, Kubernetes, Docker, Terraform, Django, Flask, PostgreSQL, Git, Linux, Go, Anthropic MCP

## Contact
LinkedIn: https://www.linkedin.com/in/faridsayago/
GitHub: https://github.com/faridsz0605
X: https://x.com/farids0805
```

**Projected score after steps 3-10: ~62/100** (+16 points)

---

## MEDIUM — Fix Within 1 Month

### 11. Expand Project Descriptions to 80+ Words Each *(~1 hour)*
File: `src/sections/ShowcaseSection.jsx` or via constants

| Project | Current | Target |
|---------|---------|--------|
| wiener-git | ~22 words | 80+ words |
| WHTTP HTTP Server | ~31 words | 80+ words |
| Wiener Tickets ML | **~12 words** | 120+ words (flagship project!) |

Each description should cover: the problem, the approach, the tech used, the key challenge, and the outcome.

### 12. Add width/height to All `<img>` Tags *(~30 min)*
Prevents Cumulative Layout Shift. Every `<img>` needs explicit dimensions matching its display size.

### 13. Add Mobile Hamburger Menu to NavBar *(~1 hour)*
Google mobile-first indexing. Section anchor links invisible on mobile = crawlers miss them.

### 14. Move Google Fonts to `<link rel="preload">` *(~15 min)*
File: `src/index.css` — find `@import url(...)` for fonts and move to `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Mona+Sans:...">
```

Or self-host the fonts entirely for best performance.

### 15. Add `fetchpriority="high"` to Room GLB Preload *(~2 min)*
File: `index.html`

```html
<!-- FROM -->
<link rel="preload" href="/portfolio-3d/models/optimized-room.glb" as="fetch" crossorigin="anonymous" />

<!-- TO -->
<link rel="preload" href="/portfolio-3d/models/optimized-room.glb" as="fetch" crossorigin="anonymous" fetchpriority="high" />
```

### 16. Add `loading="lazy"` to Below-Fold Images *(~20 min)*
Files: `ShowcaseSection.jsx`, `Experience.jsx`, `Footer.jsx`

```jsx
// Add to every below-the-fold image:
<img loading="lazy" width={800} height={450} src={...} alt={...} />
```

### 17. Consolidate 5 TechStack Canvas Elements Into 1 *(~2 hours)*
Current: `TechIconCardExperience` creates one `<Canvas>` per icon = 5 WebGL contexts just for TechStack.
Total: 7 WebGL contexts (Hero + 5 TechStack + Contact). Near browser limit on mobile.

Fix: Create a single shared `<Canvas>` in `TechStack.jsx` that renders all 5 icons as separate `<group>` nodes. Reduces from 7 to 3 total WebGL contexts.

### 18. Add `<noscript>` Fallback With Key Content *(~30 min)*
In `index.html` `<body>`:

```html
<noscript>
  <main>
    <h1>Farid Sayago — MLOps Engineer</h1>
    <p>MLOps Engineer from Colombia specializing in Python, AWS, Kubernetes, Docker, Terraform, and AI agent orchestration.</p>
    <h2>Contact</h2>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/faridsayago/">linkedin.com/in/faridsayago</a></p>
    <p>GitHub: <a href="https://github.com/faridsz0605">github.com/faridsz0605</a></p>
  </main>
</noscript>
```

**Projected score after steps 11-18: ~72/100** (+10 points)

---

## LOW — Backlog

### 19. Migrate from GitHub Pages to Netlify or Cloudflare Pages
Benefits:
- Cache-Control `immutable` on hashed Vite bundles (currently max-age=600)
- Custom security headers: CSP, X-Frame-Options, Referrer-Policy
- Deploy previews for branch testing
- Better support for edge caching

### 20. Consider SSG Migration (Long-term, Highest Impact)
For a portfolio targeting Google search discovery, pure client-side rendering is the architectural blocker.

| Option | Effort | Score Impact |
|--------|--------|-------------|
| `vite-plugin-ssg` | Low | +8–12 pts |
| Astro + Three.js islands | High | +15–20 pts |
| Next.js 15 + static export | High | +15–20 pts |

SSG alone could push the score from 72 → 85+.

### 21. Add `rel="me"` to Social Links in Footer
Enables IndieAuth identity verification. Helps Google associate this portfolio with LinkedIn/GitHub profiles in Knowledge Graph.

### 22. Add `alumniOf` to Person Schema
Add Universidad Santo Tomás as `alumniOf` in the JSON-LD Person block.

---

## Score Progression

| Phase | Actions | Projected Score |
|-------|---------|----------------|
| Current state | — | **34 / 100** |
| Critical (steps 1–2) | og-preview + rebuild | **46 / 100** |
| High (steps 3–10) | schema fixes + content + llms.txt | **62 / 100** |
| Medium (steps 11–18) | performance + content depth | **72 / 100** |
| SSG migration (step 20) | pre-rendering | **85+ / 100** |
