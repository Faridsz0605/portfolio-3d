import { abilities } from "../constants";

const FeatureCards = () => (
  <section className="section-padding pt-0">
    <div className="mx-auto max-w-[1720px]">
      <div className="section-kicker">
        <span className="blue-dot" /> 03 Operating Principles
      </div>
    </div>
    <div className="feature-grid">
      {abilities.map(({ imgPath, title, desc }, index) => (
        <div
          key={title}
          className="principle-card group relative flex min-h-80 flex-col overflow-hidden"
        >
          <div className="absolute -right-14 -top-14 size-44 rounded-full bg-electric-soft blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

          <div className="relative mb-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span className="text-electric">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>Principle</span>
          </div>

          <div className="relative mb-8 flex size-20 items-center justify-center rounded-2xl border border-line bg-night-100/70 shadow-[0_0_40px_rgba(63,124,255,0.12)]">
            <img
              src={imgPath}
              alt=""
              className="size-12 object-contain opacity-90 mix-blend-screen"
              loading="lazy"
            />
          </div>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-ink">
            {title}
          </h3>
          <p className="mt-4 text-base leading-7 text-muted-strong">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureCards;
