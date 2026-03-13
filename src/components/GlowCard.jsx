import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  // refs for all the cards
  const cardRefs = useRef([]);

  // Rotate the glow effect on pointer move (works for mouse AND touch)
  const handlePointerMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const pointerX = e.clientX - rect.left - rect.width / 2;
    const pointerY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(pointerY, pointerX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onPointerMove={handlePointerMove(index)}
      className="card card-border timeline-card rounded-xl p-4 mb-5 break-inside-avoid-column flex flex-col"
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src={`${import.meta.env.BASE_URL}images/star.png`} alt="star" className="size-4" />
        ))}
      </div>
      <div className="mb-2">
        <p className="text-white-50 text-sm">{card.review}</p>
      </div>
      <div className="mt-auto pt-4" />
      {children}
    </div>
  );
};

export default GlowCard;
