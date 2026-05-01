import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-reveal",
      { y: 34, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        <header className="hero-copy">
          <div className="hero-reveal mono-label flex items-center gap-4">
            <span className="blue-dot" /> Hello, I&apos;m Farid
          </div>

          <h1 className="hero-reveal hero-title display-title">
            Building <em>human-made</em> workflows for an AI-powered world.
          </h1>

          <p className="hero-reveal hero-description">
            I&apos;m an MLOps and data engineer from Colombia building reliable
            pipelines, cloud infrastructure, and AI systems that stay useful
            after the demo ends.
          </p>

          <div className="hero-reveal hero-actions">
            <Button text="View Work" id="work" />
            <a href="#contact" className="button-secondary">
              Let&apos;s Talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <div className="hero-visual" aria-label="Featured project overview">
          <div className="hero-3d-layout" aria-hidden="true">
            <HeroExperience />
          </div>

          <article className="hero-reveal terminal-window mt-8 lg:mt-0">
            <div className="terminal-bar">
              <div className="terminal-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>Featured Project: Wiener Tickets</span>
              <a
                href="https://github.com/faridsz0605/wiener-tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-electric md:inline"
              >
                ~/projects/wiener-tickets
              </a>
            </div>

            <div className="terminal-body">
              <div>
                <p>
                  <span className="terminal-prompt">›</span> Wiener Tickets is
                  an end-to-end MLOps pipeline for IT support ticket
                  classification.
                </p>
                <p>
                  <span className="terminal-prompt">›</span> Focused on
                  reproducibility, model lifecycle design, and operational
                  clarity.
                </p>
              </div>

              <div>
                <p>
                  <b>› MY ROLE</b>
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Pipeline architecture</li>
                  <li>Model training workflow</li>
                  <li>Docker-ready deployment path</li>
                </ul>
              </div>

              <div>
                <p>
                  <b>› PROCESS</b>
                </p>
                <ol className="mt-2 grid gap-1">
                  <li>
                    <strong>01</strong> Data ingestion and cleaning
                  </li>
                  <li>
                    <strong>02</strong> Feature engineering
                  </li>
                  <li>
                    <strong>03</strong> Supervised classification
                  </li>
                  <li>
                    <strong>04</strong> Experiment tracking
                  </li>
                  <li>
                    <strong>05</strong> Retraining strategy
                  </li>
                </ol>
              </div>
            </div>

            <footer className="terminal-footer">
              <span>
                <span className="terminal-prompt">›</span> STATUS:{" "}
                <b>In progress</b>
              </span>
              <a
                href="https://github.com/faridsz0605/wiener-tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-link"
              >
                View Project →
              </a>
            </footer>
          </article>

          <div className="hero-reveal copy-strip">
            <p className="font-mono text-sm text-muted">
              <span className="text-electric">› farid.sayago</span> // available
              for AI, data, and cloud systems
            </p>
            <a href="#contact" className="terminal-link">
              Contact
            </a>
          </div>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
