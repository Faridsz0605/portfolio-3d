
<div align="center">

# Farid Sayago — 3D Portfolio

**MLOps Engineer from Colombia. Data pipelines, cloud infrastructure, and AI agent orchestration.**

[![Live Site](https://img.shields.io/website?url=https%3A%2F%2Fsayagos.tech&style=for-the-badge&label=Live&up_message=online&down_message=offline&up_color=22c55e&down_color=ef4444)](https://sayagos.tech)
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

**Live at [sayagos.tech](https://sayagos.tech)**

---

## Features

- **3D Interactive Hero** — Immersive room scene powered by `@react-three/fiber` and `@react-three/drei`, with custom lighting and post-processing effects.
- **Animated Tech Stack Icons** — 3D GLB models rendered per technology, auto-centered via `Box3` bounding box computation and individually tuned scales/rotations.
- **Scroll-driven GSAP Animations** — Timeline cards, fade-ins, and parallax effects triggered by `ScrollTrigger` as the user navigates the page.
- **Professional Experience Timeline** — Chronological work history with animated entry cards and gradient timeline.
- **Logo Showcase** — Infinite marquee of company/technology logos.
- **Contact Form** — Functional form integrated with EmailJS — no backend required.
- **Fully Responsive** — Mobile and desktop layouts handled via `react-responsive` and Tailwind breakpoints.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| 3D Rendering | Three.js · @react-three/fiber · @react-three/drei |
| Post-processing | @react-three/postprocessing |
| Animations | GSAP 3 · ScrollTrigger |
| Styling | Tailwind CSS 4 |
| Contact | EmailJS |
| Build Tool | Vite 6 |
| Hosting | Hostinger (Apache) |

---

## Getting Started

### Prerequisites

- Node.js `>= 18`
- pnpm (recommended)

### 1. Fork & Clone

```bash
git clone https://github.com/<your-username>/portfolio-3d.git
cd portfolio-3d
```

### 2. Install Dependencies

```bash
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
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production

```bash
pnpm build
```

Output lands in the `dist/` folder.

---

## Deployment

Hosted on **Hostinger** shared hosting at `sayagos.tech`. Build locally and deploy via Hostinger's file manager or SFTP.

---

## Credits

> This project is a **fork** of the original **3D Portfolio** by [Adrian Hajdin (JS Mastery)](https://github.com/adrianhajdin).
> Original repository: [adrianhajdin/3d-portfolio](https://github.com/adrianhajdin/3d-portfolio)

Customized and extended by **Farid Sayago ([@Faridsz0605](https://github.com/Faridsz0605))** — personalized content, 3D assets, real work experience, SEO optimization, and UI adjustments.

---

<div align="center">

Built by [Farid Sayago](https://sayagos.tech)

</div>
