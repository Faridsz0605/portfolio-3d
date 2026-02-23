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
  { text: "AI", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Ideas", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "AI", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Ideas", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Certifications" },
  { value: 4, suffix: "+", label: "Ongoing Side Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-impact results through a relentless drive for mastery and an uncompromising eye for detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Assertive Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "Power Documentation",
    desc: "'Knowledge is a treasure and it should not be locked away.' Let's learn from each other.",
  },
];

// TODO: Replace 2D logo images in /public/images/logos/ with the correct tech stack icons.
// Affected entries: AWS & Cloud, Docker & Kubernetes, AI Agents Orchestration, Business Intelligence.
// Python already has a matching file: /images/logos/python.svg
const techStackImgs = [
  {
    name: "AWS & Cloud",
    imgPath: "/images/logos/react.png", // TODO: replace with AWS logo
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Docker & Kubernetes",
    imgPath: "/images/logos/node.png", // TODO: replace with Docker logo
  },
  {
    name: "AI Agents Orchestration",
    imgPath: "/images/logos/three.png", // TODO: replace with AI agents logo
  },
  {
    name: "Business Intelligence",
    imgPath: "/images/logos/git.svg", // TODO: replace with BI tools logo
  },
];

// TODO: Replace 3D model files (.glb) in /public/models/ with the correct tech stack icons.
// Current models (React, Python, Node, Three.js, Git) are placeholders.
// Needed: AWS, Docker & Kubernetes, AI Agents Orchestration, Business Intelligence tools.
// See README.md for full TODO list.
const techStackIcons = [
  {
    name: "Linux-Enthusiast",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "AWS & Cloud",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Dockerization & Orchestation",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Always Learning",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    // TODO: replace with real employer review
    review: "— TODO: add employer testimonial —",
    imgPath: "/images/exp1.png", // TODO: replace with Intcomex-related image
    logoPath: "/images/logo1.png", // TODO: replace with Intcomex logo
    title: "Data Analyst",
    date: "June 2025 – January 2026",
    responsibilities: [
      "Built and automated dashboards from OLAP cube queries to support business decision-making for Human Capital, Finance, and Accounting teams.",
      "Delivered data modeling and analysis with operational impact across 14+ countries.",
      "Automated ETL pipelines with Python, managed version control with Git and GitHub, and delivered insights via Power BI with Jupyter Notebook documentation.",
    ],
  },
  {
    // TODO: replace with real employer review
    review: "— TODO: add employer testimonial —",
    imgPath: "/images/exp2.png", // TODO: replace with Universidad Santo Tomas-related image
    logoPath: "/images/logo2.png", // TODO: replace with Universidad Santo Tomas logo
    title: "Associate Investigator",
    date: "June 2024 – January 2025",
    responsibilities: [
      "Implemented Big Data processing scripts for a foreign trade research project, using tools such as Dask.",
      "Applied ethical standards in the use of AI tools integrated into the research workflow.",
      "Automated data pipelines with Python to handle large volumes of external trade data.",
    ],
  },
  {
    // TODO: replace with real employer review
    review: "— TODO: add employer testimonial —",
    imgPath: "/images/exp3.png", // TODO: replace with Semillero-related image
    logoPath: "/images/logo3.png", // TODO: replace with Semillero logo
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
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// TODO: Replace placeholder testimonials with real quotes from peers and collaborators.
const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

// TODO: Update Footer component (src/sections/Footer.jsx) to wrap social icons in <a> tags
// using the `link` field below so the icons become clickable.
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/farid_sayago7/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/farids0805",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
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
