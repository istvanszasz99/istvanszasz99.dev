import { lazy, Suspense } from "react";
import "../styles/fonts.css";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

// Below-the-fold components — loaded only after the initial paint
const About = lazy(() =>
  import("./components/About").then((m) => ({ default: m.About })),
);
const TechSkills = lazy(() =>
  import("./components/TechSkills").then((m) => ({ default: m.TechSkills })),
);
const TechMarquee = lazy(() =>
  import("./components/TechMarquee").then((m) => ({ default: m.TechMarquee })),
);
const Experience = lazy(() =>
  import("./components/Experience").then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import("./components/Projects").then((m) => ({ default: m.Projects })),
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact })),
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({ default: m.Footer })),
);

export default function App() {
  return (
    <>
      {/* Global noise overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero is eager — it's the LCP element */}
        <Hero />
        {/* Everything below the fold is lazily loaded */}
        <Suspense fallback={null}>
          <About />
          <TechSkills />
          <TechMarquee />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
