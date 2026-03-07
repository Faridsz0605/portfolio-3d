const BASE = import.meta.env.BASE_URL;

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "AI", imgPath: `${BASE}images/ideas.svg` },
  { text: "Concepts", imgPath: `${BASE}images/concepts.svg` },
  { text: "Ideas", imgPath: `${BASE}images/designs.svg` },
  { text: "Code", imgPath: `${BASE}images/code.svg` },
  { text: "AI", imgPath: `${BASE}images/ideas.svg` },
  { text: "Concepts", imgPath: `${BASE}images/concepts.svg` },
  { text: "Ideas", imgPath: `${BASE}images/designs.svg` },
  { text: "Code", imgPath: `${BASE}images/code.svg` },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "+", label: "Papers Written/Collaborated" },
  { value: 30, suffix: "+", label: "Certifications" },
  { value: 5, suffix: "+", label: "Ongoing Projects" },
];

const logoIconsList = [
  { imgPath: `${BASE}images/logos/company-logo-1.svg`, name: "Django", isDjango: true },
  { imgPath: `${BASE}images/logos/company-logo-2.svg`, name: "PostgreSQL" },
  { imgPath: `${BASE}images/logos/company-logo-3.svg`, name: "Anthropic" },
  { imgPath: `${BASE}images/logos/company-logo-4.svg`, name: "Flask" },
  { imgPath: `${BASE}images/logos/company-logo-5.svg`, name: "ModelContextProtocol" },
  { imgPath: `${BASE}images/logos/company-logo-6.svg`, name: "Terraform", isIcon: true },
  { imgPath: `${BASE}images/logos/company-logo-7.svg`, name: "MDX", isIcon: true },
  { imgPath: `${BASE}images/logos/company-logo-8.svg`, name: "Prisma", isIcon: true },
  { imgPath: `${BASE}images/logos/company-logo-9.svg`, name: "GitHub" },
  { imgPath: `${BASE}images/logos/company-logo-10.svg`, name: "Kubernetes", isIcon: true },
  { imgPath: `${BASE}images/logos/company-logo-11.svg`, name: "Python", isIcon: true },
  { imgPath: `${BASE}images/logos/company-logo-12.svg`, name: "Go", isIcon: true },
];

const abilities = [
  {
    imgPath: `${BASE}images/seo.png`,
    title: "Quality Focus",
    desc: "Delivering high-impact results through a relentless drive for mastery and an uncompromising eye for detail.",
  },
  {
    imgPath: `${BASE}images/chat.png`,
    title: "Assertive Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: `${BASE}images/time.png`,
    title: "Power Documentation",
    desc: "Markdown-based documentation integrated with Notion to centralize knowledge, track team progress in real time, and keep every stakeholder aligned throughout the project lifecycle.",
  },
];

const techStackImgs = [
  {
    name: "AWS & Cloud",
    imgPath: `${BASE}images/logos/react.png`,
  },
  {
    name: "Python Developer",
    imgPath: `${BASE}images/logos/python.svg`,
  },
  {
    name: "Docker & Kubernetes",
    imgPath: `${BASE}images/logos/docker-logo.glb`,
  },
  {
    name: "AI Agents Orchestration",
    imgPath: `${BASE}images/logos/three.png`,
  },
  {
    name: "Business Intelligence",
    imgPath: `${BASE}images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: "Linux-Enthusiast",
    modelPath: `${BASE}models/arch-logo.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
    position: [0, -0.65, 0],
  },
  {
    name: "API Design",
    modelPath: `${BASE}models/python-transformed.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "AWS & Cloud",
    modelPath: `${BASE}models/aws-logo.glb`,
    scale: 0.35,
    rotation: [0, 0, 0],
  },
  {
    name: "Dockerization & Orchestration",
    modelPath: `${BASE}models/kubernetes-logo.glb`,
    scale: 50,
    rotation: [0.5, 0, 0],
  },
  {
    name: "Git & Version Control",
    modelPath: `${BASE}models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Delivers high-impact results with exceptional analytical rigor. Quickly absorbs complex information and identifies improvement opportunities with full transparency and efficiency.",
    imgPath: `${BASE}images/exp2.webp`,
    logoPath: `${BASE}images/logo1.svg`,
    logoBg: "bg-white",
    title: "Lead Investigator",
    company: "Universidad Santo Tomás",
    date: "June 2022 – January 2026",
    responsibilities: [
      "Designed and implemented econometric models for academic publications using R and Python.",
      "Delivered research insights through Business Intelligence visualizations.",
      "Developed statistical sampling instruments and parameterization tools.",
    ],
  },
  {
    review:
      "Brings a deeply analytical approach to big data environments with near-zero ramp-up time. Engineers scalable solutions to complex edge cases while maintaining data transparency and workflow efficiency.",
    imgPath: `${BASE}images/exp2.webp`,
    logoPath: `${BASE}images/logo1.svg`,
    logoBg: "bg-white",
    title: "Associate Investigator",
    company: "Universidad Santo Tomás",
    date: "June 2024 – January 2025",
    responsibilities: [
      "Built Big Data processing scripts for foreign trade research using Dask and Python.",
      "Applied ethical AI standards within the research workflow.",
      "Automated data pipelines to handle large-scale external trade datasets.",
    ],
  },
  {
    review:
      "Proactive professional who delivers fast, efficient results. Leverages specialized tools to solve complex problems with a strong human-centric and ethical approach.",
    imgPath: `${BASE}images/exp1.png`,
    logoPath: `${BASE}images/intcomex.jpeg`,
    logoClass: "object-cover",
    title: "Data Analyst",
    company: "Intcomex",
    date: "June 2025 – January 2026",
    responsibilities: [
      "Automated dashboards from OLAP cube queries for Human Capital, Finance, and Accounting teams.",
      "Delivered data modeling and analysis with operational impact across 14+ countries.",
      "Built ETL pipelines with Python and delivered insights via Power BI with documented workflows.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: `${BASE}images/logo1.svg`,
  },
  {
    name: "logo2",
    imgPath: `${BASE}images/logo2.png`,
  },
  {
    name: "logo3",
    imgPath: `${BASE}images/logo3.png`,
  },
];


const socialImgs = [
  {
    name: "github",
    imgPath: `${BASE}images/github.svg`,
    link: "https://github.com/faridsz0605",
  },
  {
    name: "linkedin",
    imgPath: `${BASE}images/linkedin.png`,
    link: "https://www.linkedin.com/in/faridsayago/",
  },
  {
    name: "x",
    imgPath: `${BASE}images/x.png`,
    link: "https://x.com/farids0805",
  },
  {
    name: "insta",
    imgPath: `${BASE}images/insta.png`,
    link: "https://www.instagram.com/farid_sayago7/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
