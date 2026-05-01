import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <a href="#hero" className="logo">
            <span className="logo-mark" aria-hidden="true">
              F
            </span>
            <span>Farid Sayago</span>
          </a>

          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-meta">
            <a href="#contact" className="available">
              <span className="blue-dot" /> Available for work
            </a>
            <span className="h-6 w-px bg-line" />
            <span>v1.0.0</span>
            <span aria-hidden="true">☼</span>
          </div>

          <div className="flex items-center justify-end lg:hidden">
            <button
              className="hamburger lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav>
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a href={link} onClick={closeMenu}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mobile-contact-btn" onClick={closeMenu}>
            Available for work
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default NavBar;
