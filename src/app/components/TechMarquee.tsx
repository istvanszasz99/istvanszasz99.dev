import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue } from "motion/react";
import {
  HTML5,
  CSS,
  TailwindCSS,
  JavaScript,
  TypeScript,
  ReactLight,
  Nextjs,
  Redux,
  ExpressjsDark,
  ExpressjsLight,
  Nodejs,
  Python,
  Django,
  CSharp,
  MicrosoftNET,
  Docker,
  Kubernetes,
  MicrosoftAzure,
  GraphQL,
  MongoDBDark,
  Git,
  GitHubDark,
  GitHubLight,
  Figma,
  CPlusPlus,
  UnrealEngineDark,
  PostgreSQL,
  Electron,
  ClaudeAI,
  VisualStudioCode,
  Windows,
  MicrosoftOffice,
  MotionDark,
  MotionLight,
  Cloudflare,
} from "@ridemountainpig/svgl-react";
import { useTheme } from "../theme/ThemeContext";
import { useLanguage } from "../i18n/LanguageContext";

/* ─── Tech stack data ─────────────────────────────────────────── */
interface Tech {
  name: string;
  color: string;
  icon: React.ReactNode;
  /** For icons that would vanish on the light theme's background. */
  iconLight?: React.ReactNode;
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
    name: "Motion",
    color: "#F7DF1E",
    icon: <MotionDark width={32} height={32} />,
    iconLight: <MotionLight width={32} height={32} />,
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
    iconLight: <ExpressjsLight width={32} height={32} />,
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
    name: "Cloudflare",
    color: "#0089D6",
    icon: <Cloudflare width={32} height={32} />,
  },
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
    iconLight: <GitHubLight width={32} height={32} />,
  },
  {
    name: "Claude Code",
    color: "#000000",
    icon: <ClaudeAI width={32} height={32} />,
  },
  { name: "Figma", color: "#A259FF", icon: <Figma width={32} height={32} /> },
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
    // The dark logo is white, so it needs its own dark background on light.
    iconLight: (
      <span className="block rounded-full bg-[#050505]">
        <UnrealEngineDark width={32} height={32} />
      </span>
    ),
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

const TechPill = ({ tech }: TechPillProps) => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-full select-none shrink-0 group transition-colors duration-300">
      <span className="transition-transform duration-300 group-hover:scale-110">
        {theme === "light" && tech.iconLight ? tech.iconLight : tech.icon}
      </span>
      <span className="text-sm font-semibold tracking-wide whitespace-nowrap text-ink-40">
        {tech.name}
      </span>
    </div>
  );
};

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
  const tripled = [...items, ...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const offsetRef = useRef(0);
  const segmentWidthRef = useRef(0);
  const isDragging = useRef(false);
  const velocityRef = useRef(0); // px/ms — inertia after drag
  const isPaused = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.willChange = "transform";

    let isVisible = true;
    let observer: IntersectionObserver | undefined;

    const init = () => {
      segmentWidthRef.current = track.scrollWidth / 3;
      offsetRef.current = -segmentWidthRef.current;
      x.set(offsetRef.current);
      const autoDir = direction === "left" ? -1 : 1;
      const baseSpeed = segmentWidthRef.current / (speed * 1000); // px/ms
      let lastTime: number | null = null;

      const tick = (time: number) => {
        if (!isVisible) {
          rafRef.current = 0;
          return;
        }
        if (lastTime === null) lastTime = time;
        const delta = Math.min(time - lastTime, 50);
        lastTime = time;

        if (!isDragging.current) {
          if (isPaused.current) {
            // coast: decay inertia velocity, no auto-scroll pull
            velocityRef.current *= Math.pow(0.94, delta);
            offsetRef.current += velocityRef.current * delta;
          } else {
            // auto-scroll: blend velocity toward base speed
            velocityRef.current +=
              (autoDir * baseSpeed - velocityRef.current) *
              (1 - Math.pow(0.92, delta));
            offsetRef.current += velocityRef.current * delta;
          }

          // Seamless wrap
          const seg = segmentWidthRef.current;
          if (offsetRef.current <= -seg * 2) offsetRef.current += seg;
          if (offsetRef.current >= 0) offsetRef.current -= seg;

          x.set(offsetRef.current);
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);

      // Stop the loop while off screen, and resume it without a time jump.
      observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !rafRef.current) {
          lastTime = null;
          rafRef.current = requestAnimationFrame(tick);
        }
      });
      observer.observe(track);
    };

    const frame = requestAnimationFrame(init);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(rafRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [direction, speed, x]);

  return (
    <div className="marquee-grab relative w-full overflow-hidden [cursor:var(--cursor-grab)] active:[cursor:var(--cursor-grabbing)]">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-transparent" />

      <motion.div
        ref={trackRef}
        className="flex gap-4 w-max select-none"
        style={{ x }}
        drag="x"
        dragMomentum={false}
        whileDrag={{ opacity: 0.85, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onDragStart={() => {
          isDragging.current = true;
          if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
          isPaused.current = false;
        }}
        onDrag={() => {
          // sync offsetRef so seamless-wrap logic stays in range
          let off = x.get();
          const seg = segmentWidthRef.current;
          if (seg > 0) {
            while (off <= -seg * 2) off += seg;
            while (off >= 0) off -= seg;
            if (off !== x.get()) x.set(off);
            offsetRef.current = off;
          }
        }}
        onDragEnd={(_, info) => {
          isDragging.current = false;
          // carry fling velocity from Motion into our inertia system (px/s → px/ms)
          velocityRef.current = info.velocity.x / 1000;
          offsetRef.current = x.get();
          isPaused.current = true;
          pauseTimerRef.current = setTimeout(() => {
            isPaused.current = false;
          }, 5000);
        }}
      >
        {tripled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
};

/* ─── Main exported component ─────────────────────────────────── */
export function TechMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const isInView = useInView(containerRef, { once: true, margin: "-20% 0px" });

  const rowOne = techs;

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      aria-label={t.tools.ariaLabel}
      className="relative bg-canvas-alt py-32 overflow-hidden w-full"
    >
      {/* GEO: sr-only tools list for AI crawlers */}
      <article className="sr-only" aria-hidden="true">
        <h2>Tools and Technologies used by István Zoltán Szász</h2>
        <ul>
          {techs.map((tech) => (
            <li key={tech.name}>{tech.name}</li>
          ))}
        </ul>
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
          {t.tools.label}
        </span>
      </motion.div>

      <div className="flex flex-col items-center gap-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="self-stretch inline-flex justify-center items-center gap-2"
        >
          <div className="max-w-7xl w-11/12 tablet:w-5/6 desktop:w-3/4 wide-screen:max-w-450 text-center">
            <div className="overflow-hidden mb-3">
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
                {t.tools.headingWhite}{" "}
                <span className="text-brand-ink">{t.tools.headingAccent}</span>
              </motion.h2>
            </div>
            <motion.p
              className="text-ink-40 text-lg font-normal font-['Roboto'] leading-7"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {t.tools.description}
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
