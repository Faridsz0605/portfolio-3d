# Farid Sayago — Personal Portfolio

Interactive 3D personal portfolio. Self-hosted on old hardware using Cloudflare Tunnels and a Linux server.

Built on top of a Three.js + React + GSAP template and customized with personal content, real work experience, and original projects.

---

## Tech Stack

### Portfolio (this project)
- React 19
- Three.js / React Three Fiber / Drei
- GSAP (scroll animations)
- Tailwind CSS
- Vite

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
|---------|-------------|-------|
| My Own Portfolio | Old hardware self-hosted web page | React, Three.js, Tailwind CSS, Docker, Cloudflare Tunnels, Linux |
| Self-hosted Home-lab | 3 node Kubernetes cluster lab | Docker & Kubernetes, Talos Linux, Python |
| High-level Compliance Dashboard | Automated BI dashboard for HR and financial decision-making across 14+ countries | Python, Jupyter Notebooks, AI Orchestration, Markdown |

---

## Quick Start

**Prerequisites:** Git, Node.js, pnpm

```bash
git clone <repo-url>
cd 3d-portfolio
pnpm install
```

**Environment variables** — create a `.env` file:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

**Run:**

```bash
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## TODO

### 3D Model Icons (`/public/models/`)
Current `.glb` files are placeholders from the original template (React, Node.js, Three.js, Git). They need to be replaced with proper tech stack models:

- [ ] AWS & Cloud → source or create `aws-transformed.glb`
- [ ] Docker & Kubernetes → source or create `docker-transformed.glb`
- [ ] AI Agents Orchestration → source or create `ai-agents-transformed.glb`
- [ ] Business Intelligence → source or create `bi-tools-transformed.glb`
- [ ] Python → already exists: `python-transformed.glb` (keep)

Models must be in `.glb` format, optimized with `gltf-transform`. Reference: `techStackIcons` in `src/constants/index.js`.

### 2D Logo Images (`/public/images/logos/`)
- [ ] Replace `react.png` entry with AWS logo for the `techStackImgs` array
- [ ] Replace `node.png` entry with Docker logo
- [ ] Replace `three.png` entry with an AI agents icon
- [ ] Replace `git.svg` entry with a BI tools icon

### Project Screenshots (`/public/images/`)
- [ ] Replace `project1.png` with screenshot of the personal portfolio
- [ ] Replace `project2.png` with screenshot of the Home-lab setup
- [ ] Replace `project3.png` with screenshot of the Compliance Dashboard

### Experience Cards (`src/constants/index.js` — `expCards`)
- [ ] Replace `imgPath` placeholders (exp1.png, exp2.png, exp3.png) with real images
- [ ] Replace `logoPath` placeholders (logo1.png, logo2.png, logo3.png) with company logos
- [ ] Add real employer review quotes to the `review` field

### Testimonials (`src/constants/index.js` — `testimonials`)
- [ ] Replace all 6 placeholder testimonials with real quotes from peers and collaborators

### Social Links (`src/sections/Footer.jsx`)
- [ ] Wrap social icons in `<a>` tags using the `link` field already present in `socialImgs` (see `src/constants/index.js`)

### EmailJS
- [ ] Configure EmailJS credentials in `.env` to enable the contact form
