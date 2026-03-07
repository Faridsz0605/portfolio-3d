import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} className={`w-auto object-contain ${icon.isDjango ? "h-[50px]" : icon.isIcon ? "h-[53px]" : "h-11"}`} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <p className="text-white-50 text-center text-sm uppercase tracking-widest mb-4 font-light">
      Tools & Technologies I Use
    </p>
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
