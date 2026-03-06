

<div align="center">

# Farid Sayago — 3D Portfolio

**Data scientist, operations and infrastructure focused dev.**

<!-- TODO: Replace with custom domain once configured -->
[![Live Site](https://img.shields.io/badge/Live-GitHub_Pages-22272E?style=for-the-badge&logo=githubpages&logoColor=white)](https://faridsz0605.github.io/portfolio-3d/)
[![Fork of adrianhajdin](https://img.shields.io/badge/Fork_of-adrianhajdin%2F3d--portfolio-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/adrianhajdin/3d-portfolio)

---

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-0.174-black?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=black)](https://gsap.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![EmailJS](https://img.shields.io/badge/EmailJS-4-F4A261?style=flat-square&logo=minutemailer&logoColor=white)](https://www.emailjs.com)

</div>

---

## Overview

An interactive, 3D-driven portfolio built with React 19 and Three.js. Features immersive WebGL scenes, scroll-driven animations, and a fully functional contact form — designed to showcase professional work and technical skills in a visually engaging way.

---

## Features

- **3D Interactive Hero** — Immersive room scene powered by `@react-three/fiber` and `@react-three/drei`, with custom lighting and post-processing effects.
- **Animated Tech Stack Icons** — 3D GLB models rendered per technology, auto-centered via `Box3` bounding box computation and individually tuned scales/rotations.
- **Scroll-driven GSAP Animations** — Timeline cards, fade-ins, and parallax effects triggered by `ScrollTrigger` as the user navigates the page.
- **Professional Experience Timeline** — Chronological work history with animated entry cards and gradient timeline.
- **Logo Showcase** — Infinite marquee of company/technology logos.
- **Contact Form** — Functional form integrated with EmailJS — no backend required.
- **Fully Responsive** — Mobile and desktop layouts handled via `react-responsive` and Tailwind breakpoints.
- **Automated CI/CD** — Deployed to GitHub Pages via GitHub Actions on every push to `main`, with stale-deploy prevention via `cancel-in-progress`.

---

## Tech Stack

### Portfolio (this project)

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| 3D Rendering | Three.js · @react-three/fiber · @react-three/drei |
| Post-processing | @react-three/postprocessing |
| Animations | GSAP 3 · ScrollTrigger |
| Styling | Tailwind CSS 4 |
| Contact | EmailJS |
| Build Tool | Vite 6 |
| Deployment | GitHub Pages · GitHub Actions |

### Personal Skills

- AWS & Cloud
- Python
- Docker & Kubernetes
- AI Agents Orchestration & Creation
- Business Intelligence (Power BI, OLAP)
- Git & GitHub
- BASH scripting
- Markdown documentation
- Claude Code
- C
- Rust (learning)
- English (C1)

---

## Projects

| Project | Description | Stack |
|---|---|---|
| My Own Portfolio | Old hardware self-hosted web page | React, Three.js, Tailwind CSS, Docker, Cloudflare Tunnels, Linux |
| Self-hosted Home-lab | 3 node Kubernetes cluster lab | Docker & Kubernetes, Talos Linux, Python |
| High-level Compliance Dashboard | Automated BI dashboard for HR and financial decision-making across 14+ countries | Python, Jupyter Notebooks, AI Orchestration, Markdown |

---

## Getting Started

### Prerequisites

- Node.js `>= 18`
- npm or pnpm

### 1. Fork & Clone

```bash
# Fork this repo on GitHub first, then clone your fork:
git clone https://github.com/<your-username>/portfolio-3d.git
cd portfolio-3d
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file at the root of the project:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get your keys from [emailjs.com](https://www.emailjs.com) — the free tier is enough for a personal portfolio.

### 4. Run Locally

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production

```bash
# Using npm
npm run build

# Using pnpm
pnpm build
```

Output lands in the `dist/` folder.

---

## Deployment

This project deploys automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

To trigger a manual deploy, go to the **Actions** tab in your GitHub repository and run the workflow manually.

---

## TODO

### Assets

**3D Model Icons** (`/public/models/`)
- [ ] AWS & Cloud → source or create `aws-transformed.glb`
- [ ] Docker & Kubernetes → source or create `docker-transformed.glb`
- [ ] AI Agents Orchestration → source or create `ai-agents-transformed.glb`
- [ ] Business Intelligence → source or create `bi-tools-transformed.glb`
- [ ] Python → already exists: `python-transformed.glb` ✓

**2D Logo Images** (`/public/images/logos/`)
- [ ] Replace `react.png` entry with AWS logo in `techStackImgs`
- [ ] Replace `node.png` entry with Docker logo
- [ ] Replace `three.png` entry with an AI agents icon
- [ ] Replace `git.svg` entry with a BI tools icon

**Project Screenshots** (`/public/images/`)
- [ ] Replace `project1.png` with screenshot of the personal portfolio
- [ ] Replace `project2.png` with screenshot of the Home-lab setup
- [ ] Replace `project3.png` with screenshot of the Compliance Dashboard

### Content

- [ ] Replace `exp1.png`, `exp2.png`, `exp3.png` with real experience images (`src/constants/index.js`)
- [ ] Replace `logo1.png`, `logo2.png`, `logo3.png` with actual company logos
- [ ] Wrap social icons in `<a>` tags in `src/sections/Footer.jsx` using the `link` field in `socialImgs`
- [ ] Configure EmailJS credentials in `.env` to activate the contact form
- [ ] Add custom domain once configured (update Live badge URL in this README)

---

## Credits

> This project is a **fork** of the original **3D Portfolio** by [Adrian Hajdin (JS Mastery)](https://github.com/adrianhajdin).
> Original repository: [adrianhajdin/3d-portfolio](https://github.com/adrianhajdin/3d-portfolio)

Customized and extended by **Farid Sayago ([@faridsz0605](https://github.com/Faridsz0605))** — personalized content, 3D assets, real work experience, CI/CD improvements, and UI adjustments.

---

<div align="center">

Built by [Farid Sayago](https://github.com/Faridsz0605)

</div>
