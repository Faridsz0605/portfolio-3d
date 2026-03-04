import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p className="text-white-50 text-sm">MLOps Engineer Portfolio</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} href={socialImg.link} target="_blank" rel="me noopener noreferrer" className="icon">
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Farid Sayago. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
