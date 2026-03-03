import { lazy, Suspense } from "react";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Navbar from "./components/NavBar";

// Lazy load sections that have no WebGL Canvas — safe to defer
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Footer = lazy(() => import("./sections/Footer"));

// Hero, TechStack and Contact stay eager — they each own WebGL Canvas elements.
// Lazy-mounting multiple Canvas components simultaneously saturates the browser's
// WebGL context pool and causes THREE.WebGLRenderer: Context Lost.

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
    </Suspense>
    <TechStack />
    <Suspense fallback={null}>
      <Testimonials />
      <Contact />
      <Footer />
    </Suspense>
  </>
);

export default App;
