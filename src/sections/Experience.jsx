import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".experience-row",
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section id="experience" className="section-padding" ref={containerRef}>
      <TitleHeader title="Experience built around delivery." sub="05 Timeline" />

      <div className="mx-auto max-w-[1720px] rounded-xl glass-panel px-5 md:px-8">
        {expCards.map((card, index) => (
          <article key={card.title} className="experience-row exp-card-wrapper">
            <div className="flex items-start gap-4">
              <div className={`timeline-logo ${card.logoBg ?? ""}`}>
                <img
                  src={card.logoPath}
                  alt={`${card.company} logo`}
                  className={`h-full w-full ${card.logoClass ?? "object-contain"}`}
                />
              </div>
              <div>
                <p className="font-mono text-sm text-electric">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  {card.date}
                </p>
              </div>
            </div>

            <div>
              <div className="grid gap-4 lg:grid-cols-[minmax(15rem,18rem)_minmax(0,1fr)] lg:items-start xl:grid-cols-[minmax(17rem,20rem)_minmax(0,1fr)]">
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.05em] text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-muted-strong">{card.company}</p>
                </div>
                <p className="w-full max-w-none text-sm leading-6 text-muted">
                  {card.review}
                </p>
              </div>

              <ul className="mt-8 grid gap-3 md:grid-cols-3">
                {card.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="rounded-lg border border-line bg-night-100/50 p-4 text-sm leading-6 text-muted-strong"
                  >
                    <span className="mr-2 text-electric">›</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
