import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const skillNotes = [
  "Operational tooling and daily Linux-first workflows.",
  "ML workflows, API boundaries, and production-minded Python systems.",
  "Cloud infrastructure patterns for resilient data and AI services.",
  "Containerized environments and orchestration-ready deployment paths.",
  "Version control discipline, clean history, and reproducible delivery.",
];

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".skill-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
        },
      },
    );
  });

  return (
    <section id="skills" className="section-padding">
      <TitleHeader
        title="Technical systems, not buzzwords."
        sub="04 Skills"
      />

      <div className="tech-grid">
        {techStackIcons.map((techStackIcon, index) => (
          <article key={techStackIcon.name} className="skill-card">
            <div className="mb-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted">
              <span className="text-electric">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>Core</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
              {techStackIcon.name}
            </h3>
            <p className="mt-5 leading-7 text-muted-strong">{skillNotes[index]}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
