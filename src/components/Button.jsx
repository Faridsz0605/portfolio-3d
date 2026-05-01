/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      href={id ? `#${id}` : undefined}
      onClick={(e) => {
        e.preventDefault();

        const target = id ? document.getElementById(id) : null;

        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={className ?? ""}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.currentTarget.click();
        }
      }}
    >
      <div className="button-primary group">
        <p className="text">{text}</p>
        <span aria-hidden="true">↗</span>
      </div>
    </a>
  );
};

export default Button;
