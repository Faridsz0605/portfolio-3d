import { logoIconsList } from "../constants";

const LogoIcon = ({ icon, index }) => {
  const sizeClass = icon.isDjango ? "h-[60px]" : icon.isIcon ? "h-[53px]" : "h-11";

  return (
    <div className="flex-none flex-center marquee-item">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className={`w-auto object-contain ${sizeClass}`}
        loading={index > 3 ? "lazy" : "eager"}
      />
    </div>
  );
};

const LogoShowcase = () => (
  <section className="px-5 py-12 md:px-12 xl:px-20">
    <div className="logo-rail">
      <p className="mono-label mb-6 text-center">Tools & technologies I use</p>
      <div className="marquee">
        <div className="marquee-box">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-${index}`} icon={icon} index={index} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon
              key={`${icon.name}-repeat-${index}`}
              icon={icon}
              index={index + logoIconsList.length}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LogoShowcase;
