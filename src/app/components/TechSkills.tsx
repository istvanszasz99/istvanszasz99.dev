import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  Layers,
  Server,
  Smartphone,
  Box,
  Paintbrush,
  Container,
  Database,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Button } from "./Button";

/* ─── Data ───────────────────────────────────────────────────── */
const skills = [
  {
    id: 1,
    icon: <Layers size={24} />,
  },
  {
    id: 2,
    icon: <Server size={24} />,
  },
  {
    id: 6,
    icon: <Container size={24} />,
  },
  {
    id: 7,
    icon: <Database size={24} />,
  },
  {
    id: 3,
    icon: <Smartphone size={24} />,
  },
  {
    id: 4,
    icon: <Box size={24} />,
  },
  {
    id: 5,
    icon: <Paintbrush size={24} />,
  },
] as const;

/* ─── Stacking card ──────────────────────────────────────────── */
function SkillCard({
  skill,
  i,
}: {
  skill: (typeof skills)[number];
  i: number;
}) {
  const ref = useRef(null);
  const { t } = useLanguage();
  const text = t.skills.cards[skill.id];

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
      className="sticky w-full p-8 border border-line-10 flex flex-col justify-start items-start gap-4 bg-canvas-raised origin-top"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
    >
      <motion.div
        className="text-brand-ink"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
      >
        {skill.icon}
      </motion.div>
      <span className="text-ink text-xl font-bold font-['Roboto'] leading-7">
        {text.heading}
      </span>
      <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
        {text.body.map((item, j) => (
          <li
            key={j}
            className="flex items-center gap-2 text-ink-40 text-base font-normal font-['Roboto'] leading-6"
          >
            <span className="text-brand-ink shrink-0 text-[8px]">◆</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export function TechSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      ref={ref}
      aria-label={t.skills.ariaLabel}
      className="relative bg-canvas py-32"
    >
      {/* GEO: sr-only skills summary for AI crawlers */}
      <article className="sr-only" aria-hidden="true">
        <h2>Technical Skills of István Zoltán Szász</h2>
        <section>
          <h3>Frontend Development</h3>
          <ul>
            <li>React, Next.js, and TypeScript development</li>
            <li>Styling with Tailwind CSS and Motion</li>
            <li>Responsive Web Design and Mobile-first approach</li>
            <li>Search Engine Optimisation (SEO) and web performance</li>
            <li>Chrome DevTools debugging</li>
          </ul>
        </section>
        <section>
          <h3>Backend Development</h3>
          <ul>
            <li>
              Next.js, Node.js, and Express.js for server-side development
            </li>
            <li>REST API design and implementation</li>
            <li>Authentication, validation, and secure server-side logic</li>
          </ul>
        </section>

        <section>
          <h3>DevOps</h3>
          <ul>
            <li>CI/CD pipelines automated with GitHub Actions</li>
            <li>Containerised applications with Docker</li>
            <li>Container orchestration and scaling with Kubernetes</li>
            <li>
              Cloud deployment and serverless hosting for production releases
            </li>
          </ul>
        </section>

        <section>
          <h3>Databases</h3>
          <ul>
            <li>Relational data modelling and querying with PostgreSQL and SQL</li>
            <li>Document-based storage with MongoDB and NoSQL</li>
            <li>Flexible, typed API data fetching with GraphQL</li>
          </ul>
        </section>

        <section>
          <h3>Mobile Development</h3>
          <ul>
            <li>Cross-platform apps with React Native</li>
            <li>Development with Android Studio and Expo</li>
            <li>Mobile UI/UX best practices</li>
          </ul>
        </section>
        <section>
          <h3>3D Development</h3>
          <ul>
            <li>3D modelling with Unreal Engine 5 and Twinmotion</li>
            <li>Game development with Unreal Engine 5</li>
            <li>Level design and world-building</li>
            <li>Blueprints visual scripting and C++ programming</li>
          </ul>
        </section>
        <section>
          <h3>UI/UX Design</h3>
          <ul>
            <li>UI design and UX research principles</li>
            <li>Design systems and component libraries (Shadcn/ui)</li>
            <li>Responsive design for desktop, tablet, and mobile</li>
            <li>Wireframing and prototyping with Figma</li>
          </ul>
        </section>
      </article>

      {/* Side label — matches About positioning */}
      <motion.div
        className="absolute top-12 left-4 tablet:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-brand-ink" />
        <span className="font-space text-ink-30 text-[11px] tracking-[0.2em] uppercase">
          {t.skills.label}
        </span>
      </motion.div>

      <div className="max-w-7xl w-11/12 tablet:w-5/6 desktop:w-3/4 wide-screen:max-w-450 mx-auto flex flex-col justify-start items-center gap-20">
        <div className="w-full flex flex-col desktop:flex-row justify-start items-start gap-20">
          {/* ── Left: heading + description + CTA (sticky while cards scroll) ── */}
          <div className="w-full desktop:flex-1 flex flex-col justify-start items-start gap-8 desktop:sticky top-24 self-start">
            {/* Heading */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="overflow-hidden self-stretch text-center tablet:text-left">
                  <motion.h2
                    className="font-bebas text-ink text-[clamp(60px,8vw,110px)] wide-screen:text-[150px] leading-[0.9] m-0"
                    initial={{ y: "110%" }}
                    animate={isInView ? { y: "0%" } : {}}
                    transition={{
                      duration: 0.9,
                      delay: 0.1,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    {t.skills.headingWhite}{" "}
                    <span className="text-brand-ink">
                      {t.skills.headingAccent}
                    </span>
                  </motion.h2>
                </div>

                <motion.p
                  className="self-stretch text-ink-40 text-lg font-normal font-['Roboto'] leading-7"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  {t.skills.paragraphs[0]}
                </motion.p>

                {/* Additional description */}
                <motion.p
                  className="self-stretch text-ink-40 text-base font-normal font-['Roboto'] leading-7"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {t.skills.paragraphs[1]}
                </motion.p>

                <motion.p
                  className="self-stretch text-ink-40 text-base font-normal font-['Roboto'] leading-7"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.35 }}
                >
                  {t.skills.paragraphs[2]}
                </motion.p>
              </div>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex w-full items-center justify-center gap-6 tablet:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <Button variant="ghost" href="#tech-stack">
                {t.skills.cta}
              </Button>
            </motion.div>
          </div>

          {/* ── Right: stacking skill cards ── */}
          <div className="w-full desktop:flex-1 flex flex-col justify-start items-start">
            {skills.map((skill, i) => (
              <SkillCard key={skill.id} skill={skill} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
