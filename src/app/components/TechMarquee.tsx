import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  HTML5,
  CSS,
  TailwindCSS,
  JavaScript,
  TypeScript,
  ReactLight,
  Vite,
  Nextjs,
  Redux,
  ExpressjsDark,
  Nodejs,
  Python,
  Django,
  CSharp,
  MicrosoftNET,
  Docker,
  Kubernetes,
  MicrosoftAzure,
  MySQLLight,
  SQLite,
  GraphQL,
  MongoDBDark,
  Git,
  GitHubDark,
  GitHubCopilotDark,
  Figma,
  AstroDark,
  CPlusPlus,
  UnrealEngineDark,
  PostgreSQL,
  Electron,
  ClaudeAI,
  VisualStudioCode,
  Windows,
  MicrosoftOffice,
} from "@ridemountainpig/svgl-react";

/* ─── Tech stack data ─────────────────────────────────────────── */
interface Tech {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const techs: Tech[] = [
  { name: "HTML5", color: "#E34F26", icon: <HTML5 width={32} height={32} /> },
  { name: "CSS", color: "#264DE4", icon: <CSS width={32} height={32} /> },
  {
    name: "Tailwind",
    color: "#38BDF8",
    icon: <TailwindCSS width={32} height={32} />,
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: <JavaScript width={32} height={32} />,
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: <TypeScript width={32} height={32} />,
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: <ReactLight width={32} height={32} />,
  },
  { name: "Vite", color: "#646CFF", icon: <Vite width={32} height={32} /> },
  {
    name: "Next.js",
    color: "#ffffff",
    icon: <Nextjs width={32} height={32} />,
  },
  { name: "Redux", color: "#764ABC", icon: <Redux width={32} height={32} /> },
  {
    name: "Express.js",
    color: "#ffffff",
    icon: <ExpressjsDark width={32} height={32} />,
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: <Nodejs width={32} height={32} />,
  },
  { name: "Python", color: "#3776AB", icon: <Python width={32} height={32} /> },
  { name: "Django", color: "#092E20", icon: <Django width={32} height={32} /> },
  { name: "C#", color: "#239120", icon: <CSharp width={32} height={32} /> },
  {
    name: ".NET",
    color: "#512BD4",
    icon: <MicrosoftNET width={32} height={32} />,
  },
  { name: "Docker", color: "#2496ED", icon: <Docker width={32} height={32} /> },
  {
    name: "Kubernetes",
    color: "#326CE5",
    icon: <Kubernetes width={32} height={32} />,
  },
  {
    name: "Chrome DevTools",
    color: "#4587F3",
    icon: (
      <img
        src="/image/icon/chromeDevTools.png"
        width={32}
        height={32}
        alt="Chrome DevTools"
      />
    ),
  },
  {
    name: "Azure",
    color: "#0089D6",
    icon: <MicrosoftAzure width={32} height={32} />,
  },
  {
    name: "MySQL",
    color: "#4479A1",
    icon: <MySQLLight width={32} height={32} />,
  },
  { name: "SQLite", color: "#003B57", icon: <SQLite width={32} height={32} /> },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: <PostgreSQL width={32} height={32} />,
  },
  {
    name: "GraphQL",
    color: "#E10098",
    icon: <GraphQL width={32} height={32} />,
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: <MongoDBDark width={32} height={32} />,
  },
  { name: "Git", color: "#F05032", icon: <Git width={32} height={32} /> },
  {
    name: "GitHub",
    color: "#ffffff",
    icon: <GitHubDark width={32} height={32} />,
  },
  {
    name: "Copilot",
    color: "#ffffff",
    icon: <GitHubCopilotDark width={32} height={32} />,
  },
  {
    name: "Claude AI",
    color: "#000000",
    icon: <ClaudeAI width={32} height={32} />,
  },
  { name: "Figma", color: "#A259FF", icon: <Figma width={32} height={32} /> },
  {
    name: "Astro",
    color: "#FF5D01",
    icon: <AstroDark width={32} height={32} />,
  },
  {
    name: "Android Studio",
    color: "#3DDC84",
    icon: (
      <img
        src="/image/icon/androidstudio.png"
        width={32}
        height={32}
        alt="Android Studio"
      />
    ),
  },
  {
    name: "Expo",
    color: "#000020",
    icon: <img src="/image/icon/expo.png" width={32} height={32} alt="Expo" />,
  },
  { name: "C++", color: "#00599C", icon: <CPlusPlus width={32} height={32} /> },
  {
    name: "Unreal Engine",
    color: "#0E1128",
    icon: <UnrealEngineDark width={32} height={32} />,
  },
  {
    name: "Twinmotion",
    color: "#0E1128",
    icon: (
      <img
        src="/image/icon/twinmotion.png"
        width={32}
        height={32}
        alt="Twinmotion"
      />
    ),
  },
  {
    name: "Electron",
    color: "#47848F",
    icon: <Electron width={32} height={32} />,
  },
  {
    name: "Visual Studio Code",
    color: "#007ACC",
    icon: <VisualStudioCode width={32} height={32} />,
  },
  {
    name: "macOS",
    color: "#999999",
    icon: (
      <img src="/image/icon/macOS.png" width={32} height={32} alt="macOS" />
    ),
  },
  {
    name: "Windows",
    color: "#0078D6",
    icon: <Windows width={32} height={32} />,
  },
  {
    name: "Microsoft Office",
    color: "#D83B01",
    icon: <MicrosoftOffice width={32} height={32} />,
  },
];

/* ─── Individual tech pill ────────────────────────────────────── */
interface TechPillProps {
  tech: Tech;
}

const TechPill = ({ tech }: TechPillProps) => (
  <div className="flex items-center gap-3 px-5 py-3 rounded-full select-none shrink-0 group transition-colors duration-300">
    <span className="transition-transform duration-300 group-hover:scale-110">
      {tech.icon}
    </span>
    <span className="text-sm font-semibold tracking-wide whitespace-nowrap text-white/40">
      {tech.name}
    </span>
  </div>
);

/* ─── Single scrolling row ────────────────────────────────────── */
interface MarqueeRowProps {
  items: Tech[];
  direction?: "left" | "right";
  speed?: number;
}

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 40,
}: MarqueeRowProps) => {
  // Duplicate for seamless loop
  const doubled = [...items, ...items, ...items];
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-transparent" />

      <div
        className={`flex gap-4 w-max ${animClass} group/row`}
        style={
          {
            "--marquee-duration": `${speed}s`,
          } as React.CSSProperties
        }
      >
        {doubled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

/* ─── Main exported component ─────────────────────────────────── */
export function TechMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20% 0px" });

  const rowOne = techs;

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      className="relative bg-[#080808] py-32 overflow-hidden w-full"
    >
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
          Tools &amp; Technologies
        </span>
      </motion.div>

      <div className="flex flex-col items-center gap-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="self-stretch px-16 inline-flex justify-center items-center gap-2"
        >
          <div className="w-full text-center">
            <div className="overflow-hidden mb-3">
              <motion.h2
                className="font-bebas text-white text-[clamp(60px,8vw,110px)] leading-[0.9] m-0 whitespace-nowrap"
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                TOOLS &amp; <span className="text-[#ccff00]">TECHNOLOGIES</span>
              </motion.h2>
            </div>
            <motion.p
              className="text-white/40 text-lg font-normal font-['Roboto'] leading-7"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              A collection of languages, frameworks and tools I use to build
              fast, scalable &amp; beautiful products.
            </motion.p>
          </div>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="self-stretch flex flex-col justify-start items-center gap-5"
        >
          <MarqueeRow items={rowOne} direction="left" speed={50} />
        </motion.div>
      </div>
    </section>
  );
}

export default TechMarquee;
