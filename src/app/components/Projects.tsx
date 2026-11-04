import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GitHubDark } from "@ridemountainpig/svgl-react";
import { Button } from "./Button";
import { useTheme } from "../theme/ThemeContext";
import { useLanguage } from "../i18n/LanguageContext";
import { en } from "../i18n/en";

const projects = [
  {
    id: 1,
    tech: ["React", "Tailwind CSS", "Responsive Design", "Chrome DevTools"],
    image: "./image/solidfinances.hu.webp",
    color: "#00ffcc",
    colorLight: "#00705c",
    github: "",
    live: "https://solidfinances.hu",
  },
  {
    id: 2,
    tech: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Shadcn.ui",
      "Responsive Design",
      "Chrome DevTools",
    ],
    image: "./image/mindenegyseg.hu.webp",
    color: "#00ffcc",
    colorLight: "#00705c",
    github: "",
    live: "https://mindenegyseg.hu",
  },
  {
    id: 3,
    tech: ["Unreal Engine 5", "Twinmotion", "C++"],
    image: "./image/3d-campus.webp",
    color: "#ff5f9e",
    colorLight: "#b8185e",
    github: "https://github.com/istvanszasz99/OE-AMK_University_Thesis_Project",
    live: "",
  },
] as const;

// The sr-only block stays in English for crawlers.
const crawlerProjects = projects.map((p) => ({
  ...p,
  ...en.projects.items[p.id],
}));

export function Projects() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const { theme } = useTheme();
  const localizedProjects = projects.map((p) => ({
    ...p,
    ...t.projects.items[p.id],
    color: theme === "light" ? p.colorLight : p.color,
  }));
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-label={t.projects.ariaLabel}
      className="relative bg-canvas-alt overflow-hidden py-32"
    >
      {/* GEO: sr-only project details for AI crawlers */}
      <article className="sr-only" aria-hidden="true">
        <h2>Featured Projects by István Zoltán Szász</h2>
        {crawlerProjects.map((p) => (
          <article key={p.id}>
            <h3>{p.title}</h3>
            <dl>
              <dt>Category</dt>
              <dd>{p.category}</dd>
              <dt>Technologies</dt>
              <dd>{p.tech.join(", ")}</dd>
              <dt>Description</dt>
              <dd>{p.description}</dd>
              {p.live && (
                <>
                  <dt>Live URL</dt>
                  <dd>
                    <a href={p.live}>
                      {p.live}
                    </a>
                  </dd>
                </>
              )}
              {p.github && (
                <>
                  <dt>Repository</dt>
                  <dd>
                    <a href={p.github}>
                      {p.github}
                    </a>
                  </dd>
                </>
              )}
            </dl>
          </article>
        ))}
      </article>

      {/* Side label — matches About positioning */}
      <motion.div
        className="absolute top-12 left-4 sm:left-8 md:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-brand-ink" />
        <span className="font-space text-ink-30 text-[11px] tracking-[0.2em] uppercase">
          {t.projects.label}
        </span>
      </motion.div>

      <div className="flex flex-col justify-start items-center gap-20 overflow-hidden w-full">
        {/* ── Section header ── */}
        <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto">
          <div className="flex items-end justify-between">
            <div>
              <div className="overflow-hidden">
                <motion.h2
                  className="font-bebas text-ink text-[clamp(60px,8vw,110px)] leading-[0.9] m-0"
                  initial={{ y: "110%" }}
                  animate={isInView ? { y: "0%" } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.1,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  {t.projects.headingWhite}{" "}
                  <span className="text-brand-ink">
                    {t.projects.headingAccent}
                  </span>
                </motion.h2>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="ghost"
                shape="underline"
                href="https://github.com/istvanszasz99?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-space text-[13px] tracking-[0.08em] uppercase">
                  {t.projects.viewAll}
                </span>
                <ArrowUpRight size={16} />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* ── Alternating project sections ── */}
        <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto flex flex-col justify-start items-start gap-20">
          {localizedProjects.map((project, i) => {
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
                  <h3 className="self-stretch text-ink text-4xl font-bold font-['Roboto'] leading-12">
                    {project.title}
                  </h3>
                  {/* Description */}
                  <div className="self-stretch text-ink-50 text-lg font-normal font-['Roboto'] leading-7">
                    {project.description}
                  </div>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] border border-line-10 font-space text-ink-40 tracking-[0.06em] uppercase"
                      >
                        {t.projects.techLabels[tag] ?? tag}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Button
                        variant="ghost"
                        shape="circle"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t.projects.onGitHub(project.title)}
                      >
                        <GitHubDark
                          width={16}
                          height={16}
                          className="**:fill-current"
                        />
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        variant="ghost"
                        shape="circle"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t.projects.liveSite(project.title)}
                      >
                        <ExternalLink size={16} />
                      </Button>
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
            <Button
              variant="ghost"
              shape="pill"
              href="https://github.com/istvanszasz99?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubDark width={18} height={18} className="**:fill-current" />
              {t.projects.more}
              <ArrowUpRight size={14} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
