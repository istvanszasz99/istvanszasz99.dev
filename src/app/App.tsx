import "../styles/fonts.css";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechSkills } from "./components/TechSkills";
import { TechMarquee } from "./components/TechMarquee";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

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
        <Hero />
        <About />
        <TechSkills />
        <TechMarquee />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
