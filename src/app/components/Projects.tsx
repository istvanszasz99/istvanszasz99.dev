import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./ui/brand-icons";

const projects = [
  {
    id: 1,
    title: "Meta Back-End Developer Certification Capstone",
    category: "Web Development",
    description:
      "A comprehensive capstone project for Meta's Back-End Developer Professional Certificate — featuring RESTful APIs, database design, and full authentication.",
    tech: ["Python", "Django", "REST API", "MySQL", "Djoser"],
    image:
      "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwQVBJJTIwY29kZSUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3Njg0Mzc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#ccff00",
    github: "https://github.com/istvanszasz99",
    live: "#",
  },
  {
    id: 2,
    title: "Meta Front-End Developer Certification Capstone",
    category: "Web Development",
    description:
      "Front-end capstone for Meta's Professional Certificate — a fully responsive React application with advanced UX patterns and component architecture.",
    tech: ["React", "JavaScript", "CSS3", "Figma", "Jest"],
    image:
      "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGRhcmslMjB1aXxlbnwxfHx8fDE3NzY4NDM3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#00ffcc",
    github: "https://github.com/istvanszasz99",
    live: "#",
  },
  {
    id: 3,
    title: "Meta React Native Specialization Capstone",
    category: "Mobile Development",
    description:
      "Cross-platform mobile application built with React Native for Meta's specialization. Features navigation, local storage, and API integration.",
    tech: ["React Native", "Expo", "AsyncStorage", "REST API"],
    image:
      "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc2ODQzNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#ff9f00",
    github: "https://github.com/istvanszasz99",
    live: "#",
  },
  {
    id: 4,
    title: "Simulation of the University Campus in 3D",
    category: "3D Development",
    description:
      "An immersive 3D simulation of a university campus environment built in Blender and rendered in a real-time WebGL viewer. Includes dynamic lighting and exploration.",
    tech: ["Blender", "Three.js", "WebGL", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1635821620693-b6863c79db72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWVyaWFsJTIwM0QlMjByZW5kZXJ8ZW58MXx8fHwxNzc2ODQzNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#ff5f9e",
    github: "https://github.com/istvanszasz99",
    live: "#",
  },
];

export function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#050505] overflow-hidden py-32"
    >
      <div className="noise-overlay" />

      <div className="flex flex-col justify-start items-center gap-20 overflow-hidden w-full">
        {/* ── Section header ── */}
        <div className="w-full max-w-7xl px-8">
          <div className="flex items-end justify-between">
            <div>
              {/* Label */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="w-6 h-px bg-[#ccff00]" />
                <span className="font-space text-white/30 text-[11px] tracking-[0.2em] uppercase">
                  Projects
                </span>
              </motion.div>
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
                  FEATURED <span className="text-[#ccff00]">WORKS</span>
                </motion.h2>
              </div>
            </div>
            <motion.a
              href="https://github.com/istvanszasz99?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 no-underline pb-1 border-b border-white/20"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ borderColor: "#ccff00" }}
            >
              <span className="font-space text-white/50 text-[13px] tracking-[0.08em] uppercase">
                View All on GitHub
              </span>
              <ArrowUpRight size={16} className="text-white/50" />
            </motion.a>
          </div>
        </div>

        {/* ── Alternating project sections ── */}
        <div className="w-full max-w-7xl px-8 flex flex-col justify-start items-start gap-20">
          {rest.map((project, i) => {
            const alignRight = i % 2 === 1;
            return (
              <motion.div
                key={project.id}
                className="self-stretch flex flex-row items-center gap-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                {/* Image — left on even, right on odd (CSS order) */}
                <div
                  className={`w-1/2 h-95 rounded-2xl overflow-hidden shrink-0 ${
                    alignRight ? "order-last" : "order-first"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-1/2 flex flex-col justify-start items-start gap-6">
                  {/* Category */}
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full border font-space text-[10px] tracking-widest uppercase"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}60`,
                        backgroundColor: `${project.color}18`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  {/* Title */}
                  <div className="self-stretch text-white text-4xl font-bold font-['Roboto'] leading-12">
                    {project.title}
                  </div>
                  {/* Description */}
                  <div className="self-stretch text-white/50 text-lg font-normal font-['Roboto'] leading-7">
                    {project.description}
                  </div>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[10px] border border-white/10 font-space text-white/40 tracking-[0.06em] uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center no-underline bg-white/5 border border-white/10"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: project.color,
                      }}
                    >
                      <GithubIcon size={16} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="w-10 h-10 rounded-full flex items-center justify-center no-underline bg-white/5 border border-white/10"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: project.color,
                      }}
                    >
                      <ExternalLink size={16} className="text-white" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* ── More Projects Button ── */}
          <motion.div
            className="self-stretch flex justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <motion.a
              href="https://github.com/istvanszasz99?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 no-underline group"
              whileHover={{
                borderColor: "#ccff00",
                backgroundColor: "rgba(204,255,0,0.06)",
              }}
              transition={{ duration: 0.2 }}
            >
              <GithubIcon
                size={18}
                className="text-white/50 group-hover:text-[#ccff00] transition-colors duration-200"
              />
              <span className="font-space text-white/50 text-[13px] tracking-[0.08em] uppercase group-hover:text-[#ccff00] transition-colors duration-200">
                More Projects
              </span>
              <ArrowUpRight
                size={14}
                className="text-white/30 group-hover:text-[#ccff00] transition-colors duration-200"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
