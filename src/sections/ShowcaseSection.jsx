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
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

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
        },
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/project1.webp`}
                alt="wiener-git project screenshot"
                width="1400"
                height="776"
                loading="eager"
                className="project-screenshot"
              />
            </div>
            <div className="text-content">
              <h2>wiener-git</h2>
              <p className="text-white-50 md:text-xl">
                A Python implementation of Git's core internals — blob, tree,
                and commit objects — built from scratch to deeply understand
                version control systems. The project covers content-addressable
                storage, SHA-1 hashing, object serialization, and CLI design
                patterns. Writing Git by hand forced a real understanding of how
                branching, staging, and history traversal actually work under the
                hood, beyond what any tutorial can convey.
              </p>
              <a
                href="https://github.com/faridsz0605/wiener-git"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white-50 hover:text-white transition-colors"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/github.svg`}
                  alt="GitHub"
                  width="16"
                  height="16"
                  loading="lazy"
                />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#00000000]">
                <img
                  src={`${import.meta.env.BASE_URL}images/project2.webp`}
                  alt="WHTTP HTTP Server in C project screenshot"
                  width="1400"
                  height="784"
                  loading="lazy"
                  className="project-screenshot"
                />
              </div>
              <h2>WHTTP — HTTP Server in C [IN PROGRESS]</h2>
              <p className="text-white-50">
                An HTTP/1.1 server written from scratch in C, handling raw
                socket I/O, request parsing, and response formatting without
                any framework. Built under the Wiener Studios umbrella to gain
                hands-on mastery of API security primitives — buffer boundaries,
                header injection, and connection management. The real challenge
                was building a robust parser that handles malformed requests
                safely, which forced a precise understanding of the HTTP spec at
                the byte level.
              </p>
              <a
                href="https://github.com/faridsz0605/whttp"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-white-50 hover:text-white transition-colors"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/github.svg`}
                  alt="GitHub"
                  style={{ width: 16, height: 16, flexShrink: 0 }}
                  loading="lazy"
                />
                View on GitHub
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#00000000]">
                <img
                  src={`${import.meta.env.BASE_URL}images/project3.webp`}
                  alt="Wiener Tickets ML Ticket Prediction project screenshot"
                  width="1400"
                  height="784"
                  loading="lazy"
                  className="project-screenshot"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${import.meta.env.BASE_URL}images/project3.png`;
                  }}
                />
              </div>
              <h2>Wiener Tickets — ML Ticket Prediction [IN PROGRESS]</h2>
              <p className="text-white-50">
                An end-to-end MLOps pipeline for predicting IT support ticket
                categories using supervised classification models in Python. The
                project implements the full ML lifecycle: data ingestion,
                feature engineering, model training with scikit-learn, experiment
                tracking, and automated retraining triggers. Built to demonstrate
                production-grade ML workflow design — not just a notebook, but a
                versioned, reproducible pipeline deployable to cloud
                infrastructure with Docker and CI/CD integration.
              </p>
              <a
                href="https://github.com/faridsz0605/wiener-tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-white-50 hover:text-white transition-colors"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/github.svg`}
                  alt="GitHub"
                  style={{ width: 16, height: 16, flexShrink: 0 }}
                  loading="lazy"
                />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
