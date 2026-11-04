import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Download } from "lucide-react";
import { GitHubDark, LinkedIn } from "@ridemountainpig/svgl-react";
import { AnimatedNumber } from "./AnimatedNumber";

const roles = [
  "Computer Science Engineer",
  "Junior Full-Stack Developer",
  "Frontend Specialist",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.slice(0, displayText.length - 1)
            : current.slice(0, displayText.length + 1),
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const lines = ["ISTVAN", "{ZOLTAN} SZASZ"];

  return (
    <section
      id="home"
      ref={containerRef}
      aria-label="Introduction — István Zoltán Szász, Junior Full-Stack Developer"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505] py-32"
    >
      {/* GEO: sr-only entity summary — rendered in DOM for AI crawlers that execute JS */}
      <article
        className="sr-only"
        aria-hidden="true"
      >
        <h1>István Zoltán Szász</h1>
        <p>
          István Zoltán Szász (also written Istvan Zoltan Szasz, username
          istvanszasz99) is a Junior Full-Stack Web Developer and Computer
          Science Engineer from Érd, Hungary. He builds modern, responsive web
          applications and specialises in React, Next.js, TypeScript, and the
          modern JavaScript ecosystem. He holds a BSc in Computer Science
          Engineering from Óbuda University (February 2025) and previously
          worked as a Full-Stack Web Developer at MolnarCodes (remote, March
          2026 – May 2026). He is open to freelance projects, full-time roles,
          and collaborations.
        </p>
        <dl>
          <dt>Role</dt>
          <dd>
            Junior Full-Stack Developer, Frontend Specialist, Computer Science
            Engineer
          </dd>
          <dt>Location</dt>
          <dd>Érd, Hungary</dd>
          <dt>Email</dt>
          <dd>istvanszasz99@gmail.com</dd>
          <dt>GitHub</dt>
          <dd>
            <a href="https://github.com/istvanszasz99" rel="me">
              github.com/istvanszasz99
            </a>
          </dd>
          <dt>LinkedIn</dt>
          <dd>
            <a href="https://linkedin.com/in/istvanszasz99" rel="me">
              linkedin.com/in/istvanszasz99
            </a>
          </dd>
          <dt>Certifications</dt>
          <dd>
            4 — Microsoft, IBM and Meta professional certificates (Coursera)
          </dd>
          <dt>Projects completed</dt>
          <dd>10+</dd>
          <dt>Technologies</dt>
          <dd>30+</dd>
          <dt>Status</dt>
          <dd>Open to opportunities</dd>
        </dl>
      </article>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04] bg-grid" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -right-40 w-150 h-150 rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.08)_0%,transparent_70%)]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-40 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.05)_0%,transparent_70%)]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />

      <motion.div
        className="relative z-10 max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto"
        style={{ y, opacity }}
      >
        {/* Tag line */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="w-8 h-px bg-[#ccff00]" />
          <span className="font-space text-[#ccff00] text-[12px] tracking-[0.2em] uppercase">
            Personal Website
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-4">
          {lines.map((line, lineIdx) => (
            <div key={lineIdx} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: 0.7 + lineIdx * 0.15,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={`font-bebas text-[clamp(80px,14vw,200px)] leading-[0.9] tracking-[-0.02em] m-0 ${
                  lineIdx === 0 ? "text-white" : "text-[#ccff00]"
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Typewriter role */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <div className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
          <span className="font-space text-white/60 text-[clamp(16px,2vw,22px)] tracking-wider">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-[#ccff00]"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Bio text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="font-space text-white/45 text-[15px] leading-[1.8] max-w-140 mb-6"
        >
          Junior Full-Stack Web Developer from Hungary with a Bachelor's degree
          in Computer Science Engineering from Óbuda University.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex items-center gap-5 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
        >
          <motion.a
            href="/document/Resume_EN.pdf"
            download="Istvan_Zoltan_Szasz_Resume_EN.pdf"
            className="relative group overflow-hidden px-8 py-4 bg-[#ccff00] no-underline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35 }}
              style={{ originX: 0 }}
            />
            <span className="relative flex items-center gap-2 font-space text-[#050505] text-[14px] tracking-[0.08em] uppercase font-semibold">
              Download Resume
              <Download size={16} />
            </span>
          </motion.a>

          <motion.a
            href="https://github.com/istvanszasz99"
            target="_blank"
            rel="me noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 border border-white/20 no-underline"
            whileHover={{ borderColor: "rgba(204,255,0,0.5)", scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <GitHubDark
              width={18}
              height={18}
              className="**:fill-current text-white/70"
            />
            <span className="font-space text-white/70 text-[14px] tracking-[0.06em] uppercase">
              GitHub
            </span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/istvanszasz99"
            target="_blank"
            rel="me noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 border border-white/20 no-underline"
            whileHover={{ borderColor: "rgba(204,255,0,0.5)", scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <LinkedIn
              width={18}
              height={18}
              className="**:fill-current text-white/70"
            />
            <span className="font-space text-white/70 text-[14px] tracking-[0.06em] uppercase">
              LinkedIn
            </span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex items-center gap-12 mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.7 }}
        >
          {[
            { value: 4, label: "Certifications" },
            { value: 10, label: "Projects Completed" },
            { value: 30, label: "Technologies" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-bebas text-[#ccff00] text-[48px] leading-none">
                <AnimatedNumber target={stat.value} delay={2} />+
              </span>
              <span className="font-space text-white/40 text-[12px] tracking-widest uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 right-0 sm:right-2 md:right-8 lg:right-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <span className="font-space text-white/30 text-[11px] tracking-[0.15em] uppercase writing-vertical-rl">
          Scroll
        </span>
        <motion.div
          className="w-px h-16 bg-linear-to-b from-[#ccff00] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
