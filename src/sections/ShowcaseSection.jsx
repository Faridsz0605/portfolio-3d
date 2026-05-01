import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "wiener-git",
    status: "Live",
    href: "https://github.com/faridsz0605/wiener-git",
    image: "images/project1.webp",
    alt: "wiener-git project screenshot",
    featured: true,
    description:
      "A Python implementation of Git internals built from scratch to understand content-addressable storage, object serialization, and CLI design beyond tutorial-level knowledge.",
    stack: ["Python", "CLI", "Git internals"],
  },
  {
    number: "02",
    title: "WHTTP",
    status: "In progress",
    href: "https://github.com/faridsz0605/whttp",
    image: "images/project2.webp",
    alt: "WHTTP HTTP Server in C project screenshot",
    description:
      "An HTTP/1.1 server written in C to practice raw socket I/O, parsing boundaries, response formatting, and security-aware request handling.",
    stack: ["C", "HTTP", "Sockets"],
  },
  {
    number: "03",
    title: "Wiener Tickets",
    status: "In progress",
    href: "https://github.com/faridsz0605/wiener-tickets",
    image: "images/project3.webp",
    fallback: "images/project3.png",
    alt: "Wiener Tickets ML Ticket Prediction project screenshot",
    description:
      "A reproducible MLOps pipeline for ticket classification with data ingestion, feature engineering, supervised training, and retraining strategy.",
    stack: ["Python", "MLOps", "Docker"],
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".project-card",
      { y: 44, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="showcase-inner">
        <div className="section-kicker">
          <span className="blue-dot" /> 01 Selected Work
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <h2 className="display-title text-6xl text-ink md:text-8xl">
            Systems with evidence.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted-strong lg:ml-auto">
            These projects are intentionally low-level and infrastructure-heavy:
            they prove the foundations behind the AI workflows, not just the UI
            around them.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <div className="project-media">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.alt}
                    loading={project.featured ? "eager" : "lazy"}
                    onError={(event) => {
                      if (!project.fallback) return;
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = `${import.meta.env.BASE_URL}${project.fallback}`;
                    }}
                  />
                </div>
              </a>

              <div className="project-content">
                <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  <span className="text-electric">{project.number}</span>
                  <span>{project.status}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink md:text-3xl">
                  {project.title}
                </h3>
                <p className="leading-7 text-muted-strong">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-link inline-flex"
                >
                  View Repository →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
