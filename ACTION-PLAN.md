# SEO Action Plan
## faridsz0605.github.io/portfolio-3d/
**Generated:** 2026-03-04 | **Score:** 29/100 | **Target:** 70+/100

---

## CRITICAL — Fix Immediately (< 2 hours total)

### C-1: Create robots.txt [5 min]
Create `/public/robots.txt`:
```txt
User-agent: *
Allow: /

Sitemap: https://faridsz0605.github.io/portfolio-3d/sitemap.xml
```

### C-2: Create sitemap.xml [5 min]
Create `/public/sitemap.xml`:
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

### C-3: Fix index.html meta tags [20 min]
**File:** `index.html`

Replace lines 18-22 (the broken `property="Farid Sayago"` tags) with:
```html
<meta property="og:description" content="ML Engineer & DevOps Engineer from Colombia specializing in Python, data pipelines, MLOps, and cloud infrastructure." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://faridsz0605.github.io/portfolio-3d/" />
<meta property="og:image" content="https://faridsz0605.github.io/portfolio-3d/images/og-preview.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://faridsz0605.github.io/portfolio-3d/images/og-preview.png" />
<link rel="canonical" href="https://faridsz0605.github.io/portfolio-3d/" />
<meta name="author" content="Farid Sayago" />
```

Also fix the twitter:title to match the main title (remove "Aspiring").
Also fix the favicon line:
```html
<link rel="icon" type="image/png" href="/portfolio-3d/images/fav.png" />
```

### C-4: Add JSON-LD Schema [20 min]
**File:** `index.html` — add inside `<head>` before `</head>`:

```html
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
    "knowsAbout": ["Python", "Machine Learning", "DevOps", "MLOps", "AWS", "Kubernetes", "Docker", "Terraform", "Data Pipelines", "Business Intelligence", "PostgreSQL", "Django"],
    "sameAs": [
      "https://www.linkedin.com/in/faridsayago/",
      "https://x.com/farids0805",
      "https://www.instagram.com/farid_sayago7/"
    ]
  }
}
</script>
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

---

## HIGH — Fix Within 1 Week

### H-1: Crush the images [2-3 hours]
This is the single biggest performance win. Tools: `cwebp`, `squoosh.app`, or `sharp`.

```bash
# Install cwebp: sudo pacman -S libwebp
cwebp -q 80 public/images/project1.png -o public/images/project1.webp -resize 1400 0
cwebp -q 80 public/images/project2.png -o public/images/project2.webp -resize 1400 0
cwebp -q 80 public/images/exp2.png -o public/images/exp2.webp -resize 800 0
# Favicon: resize to 64x64 PNG
convert public/images/fav.png -resize 64x64 public/images/fav-small.png
```

Then update `ShowcaseSection.jsx` and other components to use `.webp` files. Add `width` and `height` to every `<img>` tag. Add `loading="lazy"` to below-fold images.

**Expected result:** Page weight drops from 21 MB to ~4 MB. LCP drops from >4s to <2.5s.

### H-2: Fix H1 structure [30 min]
**File:** `src/sections/Hero.jsx` + `src/components/TitleHeader.jsx`

The Hero renders 3 separate `<h1>` tags. Wrap them in one `<h1>` with `<span>` children.
`TitleHeader` renders `<h1>` for every section title — change all to `<h2>`.

### H-3: Fix hero opacity:0 LCP [15 min]
**File:** `src/sections/Hero.jsx`

The hero H1 starts invisible. GSAP should animate FROM opacity:1, not from 0.
Change `gsap.fromTo` to `gsap.from` (not fromTo) so the initial painted state is visible.

### H-4: Add GitHub to footer and nav [15 min]
**File:** `src/constants/index.js`

Add to `socialImgs`:
```js
{
  name: "github",
  imgPath: `${BASE}images/github.png`,
  link: "https://github.com/faridsz0605",
},
```
(Add a GitHub icon PNG to `/public/images/`)

### H-5: Remove placeholder testimonials [10 min]
**File:** `src/constants/index.js` lines 188-231

Delete the entire `testimonials` array referencing "Adrian". These are template leftovers.

### H-6: Fix font loading [10 min]
**File:** `src/index.css` and `index.html`

Move the `@import "https://fonts.googleapis.com/..."` from the CSS file to `index.html` as a proper preload chain:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap" />
```
Remove the `@import` from the CSS file.

### H-7: Add links to project cards [1 hour]
**File:** `src/sections/ShowcaseSection.jsx`

Add GitHub repo links and expand each project description to 80-100 words. Include: problem statement, tech stack used, what you learned.

---

## MEDIUM — Fix Within 1 Month

### M-1: Add company names to experience cards
**File:** `src/constants/index.js`

Add a `company` field to each `expCards` entry with the actual organization name. Crawlers currently see anonymous employers.

### M-2: Add certification links
The counter claims "20+ Certifications" but zero are linked. Add at least 3-5 Credly/AWS/Google badge links somewhere on the page.

### M-3: Add mobile hamburger menu
**File:** `src/components/NavBar.jsx`

Google uses mobile-first indexing. The nav is desktop-only right now. Add a mobile menu (hamburger) that exposes the navigation links on small screens.

### M-4: Fix alt text on word slider images
**File:** `src/sections/Hero.jsx` line ~41

`alt="person"` on the rotating keyword images is wrong. Use the word text as alt or empty `alt=""` if decorative.

### M-5: Create og:image (1200×630 preview image)
Take a screenshot of the hero section and save as `public/images/og-preview.png`. This is what appears when the URL is shared on LinkedIn/Slack/Twitter.

### M-6: Add SoftwareSourceCode JSON-LD for projects
Add the third JSON-LD block from `FULL-AUDIT-REPORT.md` to `index.html`.

### M-7: Fix "Terms & Conditions" footer text
Either create an actual page or remove the text entirely. A dead link to a non-existent policy page signals an incomplete site.

---

## LOW — Backlog

### L-1: Consolidate identity across all copy
Remove every instance of "aspiring" from hero copy, twitter meta, and anywhere else. You have 3+ years of professional ML/data roles — commit to the senior framing.

### L-2: Fix multiple Canvas contexts in TechStack
Each tech icon has its own `<Canvas>` (WebGL context). Refactor to a single shared Canvas with instanced meshes, or use `IntersectionObserver` to defer context creation until the section enters the viewport.

### L-3: Migrate to Netlify/Cloudflare Pages
Unlocks: custom cache headers (`immutable` for hashed bundles), security headers (CSP, X-Frame-Options, Referrer-Policy), better CDN edge locations.

### L-4: Consider Astro migration (long-term)
Astro generates static HTML at build time with Three.js as an island component. This eliminates the CSR problem entirely while keeping the 3D experience. Major architectural investment but maximum SEO impact.

### L-5: Add `rel="preconnect"` for EmailJS
```html
<link rel="preconnect" href="https://api.emailjs.com" />
```

---

## Expected Score After Fixes

| Phase | Fixes Done | Expected Score |
|-------|-----------|---------------|
| Critical fixes only (2 hrs) | robots, sitemap, meta, schema | ~45/100 |
| + High fixes (1 week) | images, H1, fonts, GitHub link | ~62/100 |
| + Medium fixes (1 month) | company names, mobile nav, certifications | ~72/100 |
| + SSG/SSR migration | Astro or vite-plugin-ssg | ~85/100 |
