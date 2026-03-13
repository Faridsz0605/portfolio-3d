import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text .line",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src={`${import.meta.env.BASE_URL}images/bg.png`} alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content — takes 50% on desktop, full width on mobile */}
        <header className="flex flex-col justify-center xl:w-1/2 w-full md:px-20 px-5 relative z-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                <span className="line block">
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span
                          key={index}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
                <span className="line block">into Real Solutions</span>
                <span className="line block">that Deliver Results</span>
              </h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hey, I&apos;m Farid — MLOps Engineer from Colombia building data pipelines,
              cloud infrastructure and AI systems. Let&apos;s build something together.
            </p>

            <Button
              text="See my work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model — takes 50% on desktop, absolute overlay on mobile */}
        <figure className="xl:w-1/2 xl:h-full xl:relative absolute inset-0 z-10" aria-label="3D animated room scene" role="img">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
