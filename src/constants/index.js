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
  {
    name: "Testimonials",
    link: "#testimonials",
  },
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
  { value: 4, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Certifications" },
  { value: 4, suffix: "+", label: "Ongoing Side Projects" },
];

const logoIconsList = [
  {
    imgPath: `${BASE}images/logos/company-logo-1.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-2.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-3.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-4.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-5.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-6.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-7.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-8.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-9.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-10.png`,
  },
  {
    imgPath: `${BASE}images/logos/company-logo-11.png`,
  },
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
    desc: "'Knowledge is a treasure and it should not be locked away.' Let's learn from each other.",
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
  },
  {
    name: "Backend Developer",
    modelPath: `${BASE}models/python-transformed.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "AWS & Cloud",
    modelPath: `${BASE}models/aws-logo.glb`,
    scale: 0.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Dockerization & Orchestation",
    modelPath: `${BASE}models/docker-logo.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Always Learning",
    modelPath: `${BASE}models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Farid is an exceptionally proactive and focused professional who consistently delivers fast, efficient results. He excels at leveraging specialized tools to solve complex problems, all while ensuring his solutions maintain a strong, human-centric approach. Highly ethical and deeply driven, Farid would be a tremendous asset to any team.",
    imgPath: `${BASE}images/exp1.png`,
    logoPath: `${BASE}images/logo1.png`,
    title: "Data Analyst",
    date: "June 2025 – January 2026",
    responsibilities: [
      "Built and automated dashboards from OLAP cube queries to support business decision-making for Human Capital, Finance, and Accounting teams.",
      "Delivered data modeling and analysis with operational impact across 14+ countries.",
      "Automated ETL pipelines with Python, managed version control with Git and GitHub, and delivered insights via Power BI with Jupyter Notebook documentation.",
    ],
  },
  {
    review: "Farid is an exceptional investigator who brings a deeply analytical, assertive approach to big data environments. When integrating into major projects, his ramp-up time is virtually non-existent; he quickly masters complex data ecosystems to accelerate project timelines. Most impressively, Farid consistently queries beyond the obvious. He engineered highly efficient, scalable solutions to systemic edge cases our core team had not even contemplated. His commitment to data transparency, optimized workflows, and rigorous efficiency makes him a formidable asset to any technical team.",
    imgPath: `${BASE}images/exp2.png`,
    logoPath: `${BASE}images/logo2.png`,
    title: "Associate Investigator",
    date: "June 2024 – January 2025",
    responsibilities: [
      "Implemented Big Data processing scripts for a foreign trade research project, using tools such as Dask.",
      "Applied ethical standards in the use of AI tools integrated into the research workflow.",
      "Automated data pipelines with Python to handle large volumes of external trade data.",
    ],
  },
  {
    review: "Farid is an exceptionally sharp investigator who delivers rapid, high-impact results. He possesses a remarkable ability to quickly absorb complex information and propose innovative solutions to blind spots we hadn't even recognized. Throughout our engagement, he operated with absolute transparency and rigorous efficiency. He is a highly proactive professional and a decisive asset to any team.",
    imgPath: `${BASE}images/exp3.png`,
    logoPath: `${BASE}images/logo3.png`,
    title: "Lead Investigator",
    date: "June 2022 – January 2026",
    responsibilities: [
      "Led the design and implementation of econometric models for academic publications, developing sampling and parameterization tools using R and Python.",
      "Visualized research insights using Business Intelligence tools.",
      "Designed and implemented various statistical sampling instruments.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: `${BASE}images/logo1.png`,
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

// TODO: Replace placeholder testimonials with real quotes from peers and collaborators.
const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: `${BASE}images/client1.png`,
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: `${BASE}images/client3.png`,
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: `${BASE}images/client2.png`,
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: `${BASE}images/client5.png`,
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: `${BASE}images/client4.png`,
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: `${BASE}images/client6.png`,
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: `${BASE}images/insta.png`,
    link: "https://www.instagram.com/farid_sayago7/",
  },
  {
    name: "x",
    imgPath: `${BASE}images/x.png`,
    link: "https://x.com/farids0805",
  },
  {
    name: "linkedin",
    imgPath: `${BASE}images/linkedin.png`,
    link: "https://www.linkedin.com/in/faridsayago/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
