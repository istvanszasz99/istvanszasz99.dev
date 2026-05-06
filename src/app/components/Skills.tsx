import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const skillCategories = [
  {
    id: "frontend",
    title: "Front-End",
    color: "#ccff00",
    icon: "◈",
    description: "Building performant and beautiful interfaces",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "TailwindCSS", level: 92 },
      { name: "HTML/CSS", level: 98 },
      { name: "Next.js", level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Back-End",
    color: "#00ffcc",
    icon: "◉",
    description: "Scalable server-side solutions",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python / Django", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "FastAPI", level: 78 },
      { name: "Express.js", level: 87 },
      { name: "GraphQL", level: 72 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    color: "#ff9f00",
    icon: "◇",
    description: "Cross-platform mobile development",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Electron", level: 80 },
      { name: "PWA", level: 82 },
      { name: "iOS / Android", level: 75 },
    ],
  },
  {
    id: "3d",
    title: "3D / Creative",
    color: "#ff5f9e",
    icon: "◈",
    description: "3D environments and animations",
    skills: [
      { name: "Three.js", level: 78 },
      { name: "GSAP", level: 85 },
      { name: "Blender", level: 72 },
      { name: "WebGL", level: 65 },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    color: "#7c9eff",
    icon: "◎",
    description: "Infrastructure and deployment",
    skills: [
      { name: "Docker", level: 83 },
      { name: "Kubernetes", level: 75 },
      { name: "OpenShift", level: 70 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Docker",
  "Kubernetes",
  "Python",
  "Next.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "GSAP",
  "Three.js",
  "Blender",
  "Electron",
  "OpenShift",
  "GraphQL",
  "REST API",
  "TailwindCSS",
  "Figma",
  "Git",
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className="mb-4"
      style={{ "--sc": color } as React.CSSProperties}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-space text-white/70 text-[13px]">{name}</span>
        <motion.span
          className="font-space text-(--sc) text-[12px] tracking-wider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.4 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-px w-full bg-white/10 overflow-hidden rounded-full">
        <motion.div
          className="h-full rounded-full bg-(--sc)"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.33, 1, 0.68, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      <div className="noise-overlay" />

      {/* Big BG text */}
      <div className="absolute right-0 top-0 select-none pointer-events-none opacity-[0.025] font-bebas text-[320px] text-white leading-none">
        SKILLS
      </div>

      {/* Section label */}
      <motion.div
        className="absolute top-12 left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-[#ccff00]" />
        <span className="font-space text-white/30 text-[11px] tracking-[0.2em] uppercase">
          02 / Skills
        </span>
      </motion.div>

      <div className="max-w-350 mx-auto px-16">
        {/* Heading */}
        <div className="mb-16">
          <div className="overflow-hidden">
            <motion.h2
              className="font-bebas text-white text-[clamp(60px,8vw,110px)] leading-[0.9] tracking-[-0.01em] m-0"
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              EXPERTISE & <span className="text-[#ccff00]">SKILLS</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-[300px_1fr] gap-12">
          {/* Category tabs */}
          <div className="space-y-2">
            {skillCategories.map((cat, i) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="w-full text-left px-5 py-4 border border-(--btn-border) bg-(--btn-bg) transition-all relative overflow-hidden group"
                style={
                  {
                    "--cc": cat.color,
                    "--btn-border":
                      activeCategory === cat.id
                        ? cat.color
                        : "rgba(255,255,255,0.1)",
                    "--btn-bg":
                      activeCategory === cat.id
                        ? `${cat.color}10`
                        : "transparent",
                  } as React.CSSProperties
                }
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                whileHover={{ borderColor: `${cat.color}80` }}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-(--cc)"
                    layoutId="activeBorder"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <span className="text-(--cc) text-[18px]">{cat.icon}</span>
                  <div>
                    <div
                      className={`font-space text-[14px] font-semibold tracking-wider ${
                        activeCategory === cat.id
                          ? "text-(--cc)"
                          : "text-white/70"
                      }`}
                    >
                      {cat.title}
                    </div>
                    <div className="font-space text-white/25 text-[11px] mt-0.5">
                      {cat.skills.length} skills
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Skill bars panel */}
          <motion.div
            key={activeCategory}
            className="p-8 border border-white/5 bg-white/2 rounded-2xl"
            style={{ "--ac": active.color } as React.CSSProperties}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="font-bebas text-(--ac) text-[48px] leading-none mb-2">
                {active.title}
              </div>
              <p className="font-space text-white/35 text-[13px] tracking-wider">
                {active.description}
              </p>
            </div>

            <div>
              {active.skills.map((skill, i) => (
                <SkillBar
                  key={`${activeCategory}-${skill.name}`}
                  name={skill.name}
                  level={skill.level}
                  color={active.color}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech stack marquee */}
        <div className="mt-20 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="shrink-0 px-5 py-2.5 border border-white/10 rounded-full font-space text-white/40 text-[13px] tracking-[0.06em] whitespace-nowrap"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
