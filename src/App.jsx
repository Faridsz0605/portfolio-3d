import { lazy, Suspense } from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";

// Hero is the only eager WebGL Canvas. Everything else stays lazy to keep the
// context budget safe and the first screen fast.
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => (
  <div className="site-shell">
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </Suspense>
  </div>
);

export default App;
