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
      "Farid is an exceptionally sharp investigator who delivers rapid, high-impact results. He possesses a remarkable ability to quickly absorb complex information and propose innovative solutions to blind spots we hadn't even recognized. Throughout our engagement, he operated with absolute transparency and rigorous efficiency. He is a highly proactive professional and a decisive asset to any team.",
    imgPath: `${BASE}images/exp2.webp`,
    logoPath: `${BASE}images/logo1.svg`,
    logoBg: "bg-white",
    title: "Lead Investigator",
    company: "Universidad Santo Tomás",
    date: "June 2022 – January 2026",
    responsibilities: [
      "Led the design and implementation of econometric models for academic publications, developing sampling and parameterization tools using R and Python.",
      "Visualized research insights using Business Intelligence tools.",
      "Designed and implemented various statistical sampling instruments.",
    ],
  },
  {
    review:
      "Farid is an exceptional investigator who brings a deeply analytical, assertive approach to big data environments. When integrating into major projects, his ramp-up time is virtually non-existent; he quickly masters complex data ecosystems to accelerate project timelines. Most impressively, Farid consistently queries beyond the obvious. He engineered highly efficient, scalable solutions to systemic edge cases our core team had not even contemplated. His commitment to data transparency, optimized workflows, and rigorous efficiency makes him a formidable asset to any technical team.",
    imgPath: `${BASE}images/exp2.webp`,
    logoPath: `${BASE}images/logo1.svg`,
    logoBg: "bg-white",
    title: "Associate Investigator",
    company: "Universidad Santo Tomás",
    date: "June 2024 – January 2025",
    responsibilities: [
      "Implemented Big Data processing scripts for a foreign trade research project, using tools such as Dask.",
      "Applied ethical standards in the use of AI tools integrated into the research workflow.",
      "Automated data pipelines with Python to handle large volumes of external trade data.",
    ],
  },
  {
    review:
      "Farid is an exceptionally proactive and focused professional who consistently delivers fast, efficient results. He excels at leveraging specialized tools to solve complex problems, all while ensuring his solutions maintain a strong, human-centric approach. Highly ethical and deeply driven, Farid would be a tremendous asset to any team.",
    imgPath: `${BASE}images/exp1.png`,
    logoPath: `${BASE}images/intcomex.jpeg`,
    logoClass: "object-cover",
    title: "Data Analyst",
    company: "Intcomex",
    date: "June 2025 – January 2026",
    responsibilities: [
      "Built and automated dashboards from OLAP cube queries to support business decision-making for Human Capital, Finance, and Accounting teams.",
      "Delivered data modeling and analysis with operational impact across 14+ countries.",
      "Automated ETL pipelines with Python, managed version control with Git and GitHub, and delivered insights via Power BI with Jupyter Notebook documentation.",
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
