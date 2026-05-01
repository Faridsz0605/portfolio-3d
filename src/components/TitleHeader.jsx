const TitleHeader = ({ title, sub }) => {
  return (
    <div className="mx-auto mb-14 max-w-4xl text-center">
      <p className="mono-label mb-5 text-electric">{sub}</p>
      <h2 className="display-title text-5xl text-ink md:text-7xl">{title}</h2>
    </div>
  );
};

export default TitleHeader;
