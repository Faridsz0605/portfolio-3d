import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const iconRefs = useRef([]);

  useGSAP(() => {
    // Position the single continuous timeline line between first and last icons
    const icons = iconRefs.current.filter(Boolean);
    if (icons.length > 1 && containerRef.current && lineRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const firstIcon = icons[0].getBoundingClientRect();
      const lastIcon = icons[icons.length - 1].getBoundingClientRect();

      const centerX =
        firstIcon.left - containerRect.left + firstIcon.width / 2;
      const startY =
        firstIcon.top - containerRect.top + firstIcon.height / 2;
      const endY =
        lastIcon.top - containerRect.top + lastIcon.height / 2;

      const line = lineRef.current;
      line.style.left = `${centerX - 1}px`;
      line.style.top = `${startY}px`;
      line.style.height = `${endY - startY}px`;
    }

    // Draw the line progressively as user scrolls
    gsap.fromTo(
      lineRef.current,
      { clipPath: "inset(0 0 100% 0)" },
      {
        clipPath: "inset(0 0 0% 0)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom 80%",
          scrub: 0.5,
        },
      },
    );

    // Cards slide in from left
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Text blocks fade in
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="Career Overview."
        />
        <div className="mt-32 relative" ref={containerRef}>
          {/* Single continuous gradient timeline line */}
          <div
            ref={lineRef}
            className="hidden xl:block absolute gradient-line z-30"
          />
          <div className="relative z-40 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      <img
                        src={card.imgPath}
                        alt={`${card.title} at ${card.company}`}
                        className="w-full scale-[0.77]"
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <div className="relative flex-none">
                      <div
                        ref={(el) => (iconRefs.current[index] = el)}
                        className={`timeline-logo ${card.logoBg ?? ""}`}
                      >
                        <img
                          src={card.logoPath}
                          alt={`${card.company} logo`}
                          className={`w-full h-full ${card.logoClass ?? "object-contain p-1"}`}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-3xl">{card.title}</h3>
                      <p className="text-white-50 text-lg mt-1">
                        {card.company}
                      </p>
                      <p className="my-5 text-white-50">
                        🗓️&nbsp;{card.date}
                      </p>
                      <p className="text-[#839CB5] italic">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                        {card.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-lg">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
