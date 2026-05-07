import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* ─── Tech stack data ─────────────────────────────────────────── */
interface Tech {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const ReactIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="3.5"
      stroke="#61DAFB"
      strokeWidth="1.2"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="3.5"
      stroke="#61DAFB"
      strokeWidth="1.2"
      fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="3.5"
      stroke="#61DAFB"
      strokeWidth="1.2"
      fill="none"
      transform="rotate(120 12 12)"
    />
  </svg>
);

const JSIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect width="24" height="24" rx="2" fill="#F7DF1E" />
    <text
      x="3"
      y="19"
      fontFamily="Arial"
      fontWeight="bold"
      fontSize="12"
      fill="#000"
    >
      JS
    </text>
  </svg>
);

const TSIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect width="24" height="24" rx="2" fill="#3178C6" />
    <text
      x="2"
      y="19"
      fontFamily="Arial"
      fontWeight="bold"
      fontSize="11"
      fill="#fff"
    >
      TS
    </text>
  </svg>
);

const HTMLIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path d="M2 2l1.8 20.4L12 24l8.2-1.6L22 2H2z" fill="#E34F26" />
    <path d="M12 22.4V4H20.4l-1.8 16.2L12 22.4z" fill="#EF652A" />
    <path
      d="M7.2 9.6h4.8V7.2H4.8L5.6 16l6.4 1.6V15l-4-.8-.4-4.6z"
      fill="#fff"
    />
    <path
      d="M16.8 9.6H12v2.4h4.6l-.4 3.2-4.2.8V18l6.4-1.6.8-6.8H16.8z"
      fill="#fff"
    />
  </svg>
);

const CSSIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path d="M2 2l1.8 20.4L12 24l8.2-1.6L22 2H2z" fill="#264DE4" />
    <path d="M12 22.4V4H20.4l-1.8 16.2L12 22.4z" fill="#2965F1" />
    <path d="M7.8 9.6H12V7.2H5.6l.8 8 5.6 1.6V14.4l-4-.8-.2-4z" fill="#fff" />
    <path
      d="M16.2 9.6H12v2.4h4l-.4 3.2L12 16v2.4l5.6-1.6.8-7.2H16.2z"
      fill="#fff"
    />
  </svg>
);

const NodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#339933" />
    <path
      d="M8 15V9l4 2.5L16 9v6"
      stroke="#fff"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GitIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M22.16 10.94L13.06.84a1.64 1.64 0 00-2.12 0L8.9 2.88l2.68 2.68a1.95 1.95 0 012.46 2.46l2.58 2.58a1.95 1.95 0 11-1.17 1.17l-2.4-2.4v6.32a1.95 1.95 0 11-1.6-.08V9.21a1.95 1.95 0 01-1.06-2.56L7.73 4 1.84 9.9a1.64 1.64 0 000 2.12l9.1 9.1a1.64 1.64 0 002.12 0l9.1-9.1a1.64 1.64 0 000-2.08z"
      fill="#F05032"
    />
  </svg>
);

const FigmaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path d="M8 2h4a4 4 0 010 8H8V2z" fill="#F24E1E" />
    <path d="M8 10h4a4 4 0 010 8H8v-8z" fill="#A259FF" />
    <path d="M8 18a4 4 0 100-8 4 4 0 000 8z" fill="#0ACF83" />
    <path d="M8 2H4a4 4 0 000 8h4V2z" fill="#FF7262" />
    <path d="M4 10a4 4 0 100 8 4 4 0 000-8z" fill="#1ABCFE" />
  </svg>
);

const TailwindIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.1 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C7.38 17 8.5 18 11 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.5 12 7 12z"
      fill="#38BDF8"
    />
  </svg>
);

const NextIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <circle cx="12" cy="12" r="10" fill="#000" />
    <path d="M7 8h1.5l5.5 8H12.5L7 8z" fill="#fff" />
    <path d="M14 8h1.5v8H14V8z" fill="#fff" />
  </svg>
);

const PythonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M11.9 2C7.3 2 7.6 4 7.6 4v2h4.4v.6H5.5S2 6.3 2 11s3 4.3 3 4.3h1.8v-2.1s-.1-3 3-3h5.1s2.9.05 2.9-2.8V4.8S18.4 2 11.9 2zm-1.3 1.7a.9.9 0 110 1.8.9.9 0 010-1.8z"
      fill="#366A96"
    />
    <path
      d="M12.1 22c4.6 0 4.3-2 4.3-2v-2h-4.4v-.6h6.5S22 17.7 22 13s-3-4.3-3-4.3h-1.8v2.1s.1 3-3 3H9.1s-2.9-.05-2.9 2.8v3.6S5.6 22 12.1 22zm1.3-1.7a.9.9 0 110-1.8.9.9 0 010 1.8z"
      fill="#FFC331"
    />
  </svg>
);

const DockerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M13.5 8.5h2v2h-2v-2zM11 8.5h2v2h-2v-2zM8.5 8.5h2v2h-2v-2zM6 8.5h2v2H6v-2zM11 6h2v2h-2V6zM13.5 6h2v2h-2V6z"
      fill="#2496ED"
    />
    <path
      d="M22 10.5s-.8-1.5-3-1.2c-.3-2.5-2.8-3.3-2.8-3.3s-1.3 1.5-.3 3.5H3.5S2.5 13 4 15s3.8 2 3.8 2H18s3-1 4-3.5l-1.5-.5 1.5-2.5z"
      fill="#2496ED"
      fillOpacity="0.8"
    />
  </svg>
);

const VSCodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M17 1.5L8.5 9.5 4 6 1.5 7.5v9l2.5 1.5 4.5-3.5 8.5 8 3-1.5v-19L17 1.5z"
      fill="#007ACC"
    />
    <path
      d="M17 1.5l-8.5 8-4.5-3.5-2.5 1.5v9l2.5 1.5 4.5-3.5 8.5 8 3-1.5v-19L17 1.5z"
      fill="#1BA1E2"
      fillOpacity="0.4"
    />
    <path
      d="M17 22.5L8.5 14.5 4 18l-2.5-1.5v-9l2.5-1.5 4.5 3.5L17 1.5l3 1.5v19l-3 .5z"
      fill="#0062A3"
      fillOpacity="0.5"
    />
  </svg>
);

const techs: Tech[] = [
  { name: "React", color: "#61DAFB", icon: <ReactIcon /> },
  { name: "JavaScript", color: "#F7DF1E", icon: <JSIcon /> },
  { name: "TypeScript", color: "#3178C6", icon: <TSIcon /> },
  { name: "HTML5", color: "#E34F26", icon: <HTMLIcon /> },
  { name: "CSS3", color: "#264DE4", icon: <CSSIcon /> },
  { name: "Node.js", color: "#339933", icon: <NodeIcon /> },
  { name: "Git", color: "#F05032", icon: <GitIcon /> },
  { name: "Figma", color: "#A259FF", icon: <FigmaIcon /> },
  { name: "Tailwind", color: "#38BDF8", icon: <TailwindIcon /> },
  { name: "Next.js", color: "#ffffff", icon: <NextIcon /> },
  { name: "Python", color: "#FFC331", icon: <PythonIcon /> },
  { name: "Docker", color: "#2496ED", icon: <DockerIcon /> },
  { name: "VS Code", color: "#007ACC", icon: <VSCodeIcon /> },
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
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-[#050505] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-[#050505] to-transparent" />

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
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const rowOne = techs;

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      className="relative bg-[#050505] py-16 overflow-hidden w-full"
    >
      <div className="noise-overlay" />
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
          <MarqueeRow items={rowOne} direction="left" speed={35} />
        </motion.div>
      </div>
    </section>
  );
}

export default TechMarquee;
