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
import { Button } from "./Button";

/* ─── Data ───────────────────────────────────────────────────── */
const skills = [
  {
    id: 1,
    icon: <Layers size={24} />,
    heading: "Frontend Development",
    body: [
      "Development with React, Next.js & TypeScript",
      "Styling with Tailwind CSS & Motion",
      "Responsive Web Design & Mobile-first approach",
      "Search engine optimization (SEO)",
    ],
  },
  {
    id: 2,
    icon: <Server size={24} />,
    heading: "Backend Development",
    body: [
      "Next.js, Node.js & Express.js for server-side development",
      "REST API design and implementation",
      "Authentication, validation and secure server-side logic",
    ],
  },
  {
    id: 6,
    icon: <Container size={24} />,
    heading: "DevOps",
    body: [
      "CI/CD pipelines automated with GitHub Actions",
      "Containerised applications with Docker",
      "Container orchestration and scaling with Kubernetes",
      "Cloud deployment and serverless hosting for production releases",
    ],
  },
  {
    id: 7,
    icon: <Database size={24} />,
    heading: "Databases",
    body: [
      "Relational data modelling and querying with PostgreSQL & SQL",
      "Document-based storage with MongoDB & NoSQL",
      "Flexible, typed API data fetching with GraphQL",
    ],
  },
  {
    id: 3,
    icon: <Smartphone size={24} />,
    heading: "Mobile Development",
    body: [
      "Cross-platform apps with React Native",
      "development with Android Studio and Expo",
      "Mobile UI/UX best practices",
    ],
  },
  {
    id: 4,
    icon: <Box size={24} />,
    heading: "3D Development",
    body: [
      "3D modelling with Unreal Engine 5 & Twinmotion",
      "Game development with Unreal Engine 5",
      "Level design and world-building",
      "Blueprints visual scripting & C++ programming",
    ],
  },
  {
    id: 5,
    icon: <Paintbrush size={24} />,
    heading: "UI/UX Design",
    body: [
      "UI design & UX research principles",
      "Design systems & component libraries",
      "Responsive design for desktop, tablet and mobile",
      "Wireframing and prototyping with Figma",
    ],
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
      className="sticky w-full p-8 border border-white/10 flex flex-col justify-start items-start gap-4 bg-[#0a0a0a] origin-top"
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
      <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
        {skill.body.map((item, j) => (
          <li
            key={j}
            className="flex items-center gap-2 text-white/40 text-base font-normal font-['Roboto'] leading-6"
          >
            <span className="text-[#ccff00] shrink-0 text-[8px]">◆</span>
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

  return (
    <section
      id="skills"
      ref={ref}
      aria-label="Technical skills of István Zoltán Szász"
      className="relative bg-[#050505] py-32"
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
        className="absolute top-12 left-4 sm:left-8 md:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-[#ccff00]" />
        <span className="font-space text-white/30 text-[11px] tracking-[0.2em] uppercase">
          Tech Skills
        </span>
      </motion.div>

      <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto flex flex-col justify-start items-center gap-20">
        <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-20">
          {/* ── Left: heading + description + CTA (sticky while cards scroll) ── */}
          <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-8 lg:sticky top-24 self-start">
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
                  Proficient across the modern web stack—React, Next.js,
                  TypeScript, and Node.js—delivering scalable applications with
                  responsive UI, optimized performance, and production-grade
                  deployment workflows using Docker, Kubernetes, and cloud
                  platforms.
                </motion.p>

                {/* Additional description */}
                <motion.p
                  className="self-stretch text-white/40 text-base font-normal font-['Roboto'] leading-7"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  With expertise in frontend frameworks, backend architecture,
                  mobile development, and emerging technologies like 3D graphics
                  and game engines, I create comprehensive digital solutions
                  that combine aesthetic design with robust functionality.
                </motion.p>

                <motion.p
                  className="self-stretch text-white/40 text-base font-normal font-['Roboto'] leading-7"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.35 }}
                >
                  Beyond technical proficiency, I'm passionate about solving
                  complex problems through clean, maintainable code and creating
                  seamless user experiences. I stay current with industry trends
                  and best practices, constantly exploring new technologies to
                  expand my skill set and deliver innovative solutions.
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
              <Button variant="ghost" href="#tech-stack">
                View Tools &amp; Technologies
              </Button>
            </motion.div>
          </div>

          {/* ── Right: stacking skill cards ── */}
          <div className="w-full lg:flex-1 flex flex-col justify-start items-start">
            {skills.map((skill, i) => (
              <SkillCard key={skill.id} skill={skill} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
