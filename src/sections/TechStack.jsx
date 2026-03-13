import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechStackScene from "../components/models/tech_logos/TechStackScene";
import { techStackIcons } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Technical Skills and Stack"
          sub="What I work with and what I bring to the table"
        />

        {/* Single shared Canvas for all 3D tech icons */}
        <div
          className="tech-card w-full xl:h-[50vh] md:h-[60vh] h-[70vh] mt-16 rounded-lg overflow-hidden"
          aria-label="3D tech stack icons: Linux, Python, AWS, Kubernetes, Git"
          role="img"
        >
          <TechStackScene techIcons={techStackIcons} />
        </div>

        {/* Text labels grid below the 3D scene */}
        <div className="tech-grid mt-8">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="flex flex-col items-center justify-center py-5 relative z-10">
                <div className="padding-x w-full">
                  <p className="text-lg 2xl:text-2xl font-semibold text-white-50 text-center">
                    {techStackIcon.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
