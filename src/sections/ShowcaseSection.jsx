import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              {/* TODO: replace with actual project screenshot */}
              <img src={`${import.meta.env.BASE_URL}images/project1.png`} alt="Personal Portfolio" />
            </div>
            <div className="text-content">
              <h2>
                My Own Portfolio — Old hardware self-hosted web page
              </h2>
              <p className="text-white-50 md:text-xl">
                Self-hosted on old hardware using Docker, Cloudflare Tunnels, and a Linux server. Built with React, Three.js, Tailwind CSS, and Git.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                {/* TODO: replace with actual project screenshot */}
                <img
                  src={`${import.meta.env.BASE_URL}images/project2.png`}
                  alt="Self-hosted Home-lab"
                />
              </div>
              <h2>Self-hosted Home-lab — 3 node Kubernetes cluster lab</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                {/* TODO: replace with actual project screenshot */}
                <img src={`${import.meta.env.BASE_URL}images/project3.png`} alt="Compliance Dashboard for HR Analysis" />
              </div>
              <h2>High-level Compliance Dashboard — Automated BI dashboard for HR and financial decision-making across 14+ countries</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
