import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  ArrowUpRight,
} from "lucide-react";

/* ─── Logo helper ────────────────────────────────────────────── */
function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-12 h-12 object-contain"
      draggable={false}
    />
  );
}

/* ─── Data ───────────────────────────────────────────────────── */
const workExperience = [
  {
    id: 1,
    title: "Full-Stack Web Developer",
    department: "MolnarCodes",
    description: "",
    location: "Remote",
    type: "Mar 2026 –",
    link: "",
    badge: "Present",
    icon: <Logo src="/image/icon/molnarcodes-logo.png" alt="MolnarCodes" />,
  },
];

const education = [
  {
    id: 1,
    title: "Computer Science Engineer (BSc)",
    department: "Óbuda University – Alba Regia Faculty of Engineering",
    description: "",
    location: "Székesfehérvár, Hungary",
    type: "Sep 2019 – Feb 2025",
    link: "",
    badge: "",
    icon: <Logo src="/image/icon/oe-logo.png" alt="Óbuda University" />,
  },
  {
    id: 2,
    title: "High School Diploma, Specialisation in Computer Science",
    department: "Bálint Márton Vocational Secondary School",
    description: "",
    location: "Törökbálint, Hungary",
    type: "Sep 2014 – May 2019",
    link: "",
    badge: "",
    icon: <Logo src="/image/icon/bm-logo.png" alt="Bálint Márton" />,
  },
];

const certifications = [
  {
    id: 1,
    title: "Full-Stack Developer Professional Certificate",
    department: "Microsoft",
    description: "",
    location: "Coursera",
    type: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/BNZ0AWF2YDZA",
    badge: "",
    icon: <Logo src="/image/icon/microsoft-logo.png" alt="Microsoft" />,
  },
  {
    id: 2,
    title: "Full-Stack JavaScript Developer Professional Certificate",
    department: "IBM",
    description: "",
    location: "Coursera",
    type: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/BNZ0AWF2YDZA",
    badge: "",
    icon: <Logo src="/image/icon/ibm-logo.png" alt="IBM" />,
  },
  {
    id: 3,
    title: "Full-Stack Developer Professional Certificate (Frontend & Backend)",
    department: "Meta",
    description: "",
    location: "Coursera",
    type: "2024–2025",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/YQRMQQIC9DXE",
    link2:
      "https://www.coursera.org/account/accomplishments/professional-cert/YHFNRJ8F336H",
    badge: "",
    icon: <Logo src="/image/icon/meta-logo.png" alt="Meta" />,
  },
  {
    id: 4,
    title: "React Native Specialization",
    department: "Meta",
    description: "",
    location: "Coursera",
    type: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/6I3G0SPNS8O3",
    badge: "",
    icon: <Logo src="/image/icon/meta-logo.png" alt="Meta" />,
  },
  {
    id: 5,
    title: "Game Design Professional Certificate",
    department: "Epic Games",
    description: "",
    location: "Coursera",
    type: "",
    link: "",
    badge: "In progress",
    icon: <Logo src="/image/icon/epicgames-logo.png" alt="Epic Games" />,
  },
];

/* ─── Reusable entry row ─────────────────────────────────────── */
interface Entry {
  id: number;
  title: string;
  department: string;
  description: string;
  location: string;
  type: string;
  link: string;
  link2?: string;
  badge: string;
  icon?: React.ReactNode;
}

function EntryRow({ exp, i }: { exp: Entry; i: number }) {
  return (
    <motion.div
      key={exp.id}
      className="self-stretch py-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
    >
      {/* Icon / Logo placeholder */}
      <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
        {exp.icon ?? null}
      </div>

      {/* Left: subtitle title + bold institution/company */}
      <div className="flex flex-col gap-1 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-white/40 text-sm font-space tracking-wide">
            {exp.title}
          </span>
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#ccff00] transition-colors duration-200"
            >
              <ArrowUpRight size={13} />
            </a>
          )}
          {exp.link2 && (
            <a
              href={exp.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#ccff00] transition-colors duration-200"
            >
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
        <span className="text-white text-xl font-bold font-['Roboto'] leading-7">
          {exp.department}
        </span>
      </div>

      {/* Right: date range + badge + location */}
      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-white/50 text-sm font-['Roboto'] whitespace-nowrap">
            {exp.type}
          </span>
          {exp.badge && (
            <span className="px-2 py-0.5 rounded-sm text-[11px] font-semibold font-space tracking-wide bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30">
              {exp.badge}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={12} className="text-white/30 shrink-0" />
          <span className="text-white/30 text-xs font-['Roboto']">
            {exp.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section block ──────────────────────────────────────────── */
function EntrySection({
  label,
  icon,
  entries,
}: {
  label: string;
  icon: React.ReactNode;
  entries: Entry[];
}) {
  return (
    <div className="w-full max-w-4xl flex flex-col gap-2">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#ccff00]">{icon}</span>
        <h3 className="font-bebas text-white/70 text-2xl tracking-widest uppercase m-0">
          {label}
        </h3>
      </div>
      {/* Entries */}
      <div className="flex flex-col">
        {entries.map((exp, i) => (
          <EntryRow key={exp.id} exp={exp} i={i} />
        ))}
        <div className="w-full border-t border-white/10" />
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      <div className="noise-overlay" />

      {/* Section label — absolute, side positioned (matches About) */}
      <motion.div
        className="absolute top-12 left-4 sm:left-8 md:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-[#ccff00]" />
        <span className="font-space text-white/30 text-[11px] tracking-[0.2em] uppercase">
          Experience
        </span>
      </motion.div>

      <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto flex flex-col items-center gap-20">
        {/* ── Header ── */}
        <div className="w-full max-w-3xl flex flex-col items-center gap-4">
          <div className="overflow-hidden w-full text-center">
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
              MY <span className="text-[#ccff00]">Experience</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-center text-white/40 text-lg font-normal font-['Roboto'] leading-7 max-w-140"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            A comprehensive overview of my professional experience, academic
            background, and industry certifications.
          </motion.p>
        </div>

        {/* ── Three sections ── */}
        <EntrySection
          label="Work Experience"
          icon={<Briefcase size={20} />}
          entries={workExperience}
        />

        <EntrySection
          label="Education"
          icon={<GraduationCap size={20} />}
          entries={education}
        />

        <EntrySection
          label="Certifications"
          icon={<Award size={20} />}
          entries={certifications}
        />
      </div>
    </section>
  );
}

export default Experience;
