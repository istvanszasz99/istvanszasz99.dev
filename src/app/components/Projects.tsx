import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GitHubDark } from "@ridemountainpig/svgl-react";

const projects = [
  {
    id: 1,
    title: "Frontend development for solidfinances.hu",
    category: "Web Development",
    description:
      "Frontend development for solidfinances.hu at MolnarCodes, a financial services website. Built with React & Tailwind CSS, and optimized for performance and all screen sizes.",
    tech: ["React", "Tailwind CSS", "Responsive Design", "Chrome DevTools"],
    image: "./image/solidfinances.hu.png",
    color: "#00ffcc",
    github: "",
    live: "https://solidfinances.hu",
  },
  {
    id: 2,
    title: "Full-Stack development for mindenegyseg.hu",
    category: "Web Development",
    description:
      "Full-Stack development for mindenegyseg.hu at MolnarCodes. Built with Next.js & Tailwind CSS, animations with GSAP, and UI components from Shadcn.ui. Fully responsive and optimized for performance.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Shadcn.ui",
      "Responsive Design",
      "Chrome DevTools",
    ],
    image: "./image/mindenegyseg.hu.png",
    color: "#00ffcc",
    github: "",
    live: "https://mindenegyseg.hu",
  },
  {
    id: 3,
    title: "Simulation of the University Campus in 3D Environment",
    category: "3D Development",
    description:
      "A 3D educational simulation, where the user can visit the campus of Óbuda University in Székesfehérvár. The Simulation was created using the Unreal Engine 5 3D graphics engine. It uses high resolution textures to make the environment and buildings look more realistic.",
    tech: ["Unreal Engine 5", "Twinmotion", "C++"],
    image: "./image/3d-campus.png",
    color: "#ff5f9e",
    github: "https://github.com/istvanszasz99/OE-AMK_University_Thesis_Project",
    live: "",
  },
];

export function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-label="Featured projects by István Zoltán Szász"
      className="relative bg-[#080808] overflow-hidden py-32"
    >
      {/* GEO: sr-only project details for AI crawlers */}
      <article className="sr-only" aria-hidden="true">
        <h2>Featured Projects by István Zoltán Szász</h2>
        {projects.map((p) => (
          <article
            key={p.id}
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h3 itemProp="name">{p.title}</h3>
            <dl>
              <dt>Category</dt>
              <dd>{p.category}</dd>
              <dt>Technologies</dt>
              <dd>{p.tech.join(", ")}</dd>
              <dt>Description</dt>
              <dd itemProp="description">{p.description}</dd>
              {p.live && (
                <>
                  <dt>Live URL</dt>
                  <dd>
                    <a href={p.live} itemProp="url">
                      {p.live}
                    </a>
                  </dd>
                </>
              )}
              {p.github && (
                <>
                  <dt>Repository</dt>
                  <dd>
                    <a href={p.github} itemProp="codeRepository">
                      {p.github}
                    </a>
                  </dd>
                </>
              )}
            </dl>
          </article>
        ))}
      </article>
      <div className="noise-overlay" />

      {/* Side label — matches About positioning */}
      <motion.div
        className="absolute top-12 left-4 sm:left-8 md:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-[#ccff00]" />
        <span className="font-space text-white/30 text-[11px] tracking-[0.2em] uppercase">
          Projects
        </span>
      </motion.div>

      <div className="flex flex-col justify-start items-center gap-20 overflow-hidden w-full">
        {/* ── Section header ── */}
        <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto">
          <div className="flex items-end justify-between">
            <div>
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
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      borderColor: "rgba(255,255,255,0.2)",
                    }
                  : {}
              }
              transition={{ delay: 0.5 }}
              whileHover={{ borderColor: "#ccff00" }}
              whileTap={{ scale: 0.96, borderColor: "#ccff00" }}
            >
              <span className="font-space text-white/50 text-[13px] tracking-[0.08em] uppercase">
                View All on GitHub
              </span>
              <ArrowUpRight size={16} className="text-white/50" />
            </motion.a>
          </div>
        </div>

        {/* ── Alternating project sections ── */}
        <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto flex flex-col justify-start items-start gap-20">
          {projects.map((project, i) => {
            const alignRight = i % 2 === 1;
            return (
              <motion.div
                key={project.id}
                className={`self-stretch flex flex-col items-center gap-16 ${alignRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                {/* Image — left on even, right on odd (CSS order) */}
                <div className="w-full lg:w-1/2 h-95 rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-6">
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
                  <h3 className="self-stretch text-white text-4xl font-bold font-['Roboto'] leading-12">
                    {project.title}
                  </h3>
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
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center no-underline bg-white/5 border border-white/10"
                        animate={{
                          scale: 1,
                          backgroundColor: "rgba(255,255,255,0.05)",
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: project.color,
                        }}
                        whileTap={{
                          scale: 0.92,
                          backgroundColor: project.color,
                        }}
                      >
                        <GitHubDark
                          width={16}
                          height={16}
                          className="**:fill-current text-white"
                        />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center no-underline bg-white/5 border border-white/10"
                        animate={{
                          scale: 1,
                          backgroundColor: "rgba(255,255,255,0.05)",
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: project.color,
                        }}
                        whileTap={{
                          scale: 0.92,
                          backgroundColor: project.color,
                        }}
                      >
                        <ExternalLink size={16} className="text-white" />
                      </motion.a>
                    )}
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
              animate={{
                scale: 1,
                borderColor: "rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              whileHover={{
                borderColor: "#ccff00",
                backgroundColor: "rgba(204,255,0,0.06)",
              }}
              whileTap={{
                scale: 0.96,
                borderColor: "#ccff00",
                backgroundColor: "rgba(204,255,0,0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <GitHubDark
                width={18}
                height={18}
                className="**:fill-current text-white/50 group-hover:text-[#ccff00] transition-colors duration-200"
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
