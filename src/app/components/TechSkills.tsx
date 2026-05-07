import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  Layers,
  Server,
  Smartphone,
  Box,
  Paintbrush,
  ArrowUpRight,
} from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────── */
const skills = [
  {
    id: 1,
    icon: <Layers size={24} />,
    heading: "Frontend Development",
    body: "React, Next.js, TypeScript, Vite, Tailwind CSS — building fast, accessible, pixel-perfect UIs with modern tooling and component-driven architecture.",
  },
  {
    id: 2,
    icon: <Server size={24} />,
    heading: "Backend Development",
    body: "Node.js, Express, REST & GraphQL APIs, PostgreSQL, MongoDB — designing scalable server-side systems with clean separation of concerns.",
  },
  {
    id: 3,
    icon: <Smartphone size={24} />,
    heading: "Mobile Development",
    body: "React Native — shipping cross-platform iOS and Android apps from a shared codebase with native feel and performance.",
  },
  {
    id: 4,
    icon: <Box size={24} />,
    heading: "3D Development",
    body: "Three.js, React Three Fiber — creating immersive 3D scenes and interactive experiences directly in the browser.",
  },
  {
    id: 5,
    icon: <Paintbrush size={24} />,
    heading: "UI/UX Design",
    body: "Figma, design systems, motion design — crafting intuitive interfaces and smooth interactions that delight users.",
  },
];

/* ─── Stacking card ──────────────────────────────────────────── */
function SkillCard({
  skill,
  i,
}: {
  skill: (typeof skills)[number];
  i: number;
}) {
  const ref = useRef(null);

  // While this card is pinned to the top, scale it down as the next one slides in
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        top: `${88 + i * 20}px`,
        zIndex: i + 1,
      }}
      className="sticky p-8 border border-white/10 flex flex-col justify-start items-start gap-4 bg-[#0a0a0a] origin-top"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
    >
      <motion.div
        className="text-[#ccff00]"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
      >
        {skill.icon}
      </motion.div>
      <span className="text-white text-xl font-bold font-['Roboto'] leading-7">
        {skill.heading}
      </span>
      <span className="text-white/40 text-base font-normal font-['Roboto'] leading-6">
        {skill.body}
      </span>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export function TechSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section id="tech-skills" ref={ref} className="relative bg-[#050505] py-32">
      <div className="noise-overlay" />

      {/* Side label — matches About positioning */}
      <motion.div
        className="absolute top-12 left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-[#ccff00]" />
        <span className="font-space text-white/30 text-[11px] tracking-[0.2em] uppercase">
          Tech Skills
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-16 flex flex-col justify-start items-center gap-20">
        <div className="w-full flex flex-row justify-start items-start gap-20">
          {/* ── Left: heading + description + CTA (sticky while cards scroll) ── */}
          <div className="flex-1 flex flex-col justify-start items-start gap-8 sticky top-24 self-start">
            {/* Heading */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="overflow-hidden">
                  <motion.h2
                    className="font-bebas text-white text-[clamp(60px,8vw,110px)] leading-[0.9] m-0"
                    initial={{ y: "110%" }}
                    animate={isInView ? { y: "0%" } : {}}
                    transition={{
                      duration: 0.9,
                      delay: 0.1,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    TECH <span className="text-[#ccff00]">SKILLS</span>
                  </motion.h2>
                </div>

                <motion.p
                  className="self-stretch text-white/40 text-lg font-normal font-['Roboto'] leading-7"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  A focused set of technologies I've refined across real-world
                  projects — from interactive frontends to production-ready
                  backend services and everything in between.
                </motion.p>
              </div>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <a
                href="#tech-stack"
                className="px-6 py-3 border border-white/20 text-white text-base font-['Roboto'] hover:border-[#ccff00] hover:text-[#ccff00] transition-colors duration-200"
              >
                View Tools &amp; Technologies
              </a>
            </motion.div>
          </div>

          {/* ── Right: stacking skill cards ── */}
          <div className="flex-1 flex flex-col justify-start items-start">
            {skills.map((skill, i) => (
              <SkillCard key={skill.id} skill={skill} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
