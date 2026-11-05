import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Translation } from "../i18n/en";

/* ─── Logo helper ────────────────────────────────────────────── */
function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-12 h-12 object-contain"
      draggable={false}
      loading="lazy"
      decoding="async"
    />
  );
}

/* ─── Data ───────────────────────────────────────────────────── */
// Text for each id lives in src/app/i18n.
const workExperience = [
  {
    id: 1,
    link: "/document/Molnarcodes_ajanlolevel.pdf",
    badge: "",
    logo: "/image/icon/molnarcodes-logo.png",
  },
];

const education = [
  { id: 1, link: "", badge: "", logo: "/image/icon/oe-logo.png" },
  { id: 2, link: "", badge: "", logo: "/image/icon/bm-logo.png" },
];

const certifications = [
  {
    id: 1,
    link: "https://www.coursera.org/account/accomplishments/specialization/BNZ0AWF2YDZA",
    badge: "",
    logo: "/image/icon/microsoft-logo.png",
  },
  {
    id: 2,
    link: "https://www.coursera.org/account/accomplishments/specialization/W8VH1LBNYHRF",
    badge: "",
    logo: "/image/icon/ibm-logo.png",
  },
  {
    id: 3,
    link: "https://www.coursera.org/account/accomplishments/specialization/JXXAG4WMAGRH",
    badge: "",
    logo: "/image/icon/meta-logo.png",
  },
  {
    id: 4,
    link: "https://www.coursera.org/account/accomplishments/specialization/6I3G0SPNS8O3",
    badge: "",
    logo: "/image/icon/meta-logo.png",
  },
];

type EntryText = Translation["experience"]["education"][1];

function withText(
  items: { id: number; link: string; badge: string; logo: string }[],
  texts: Record<number, EntryText>,
): Entry[] {
  return items.map((item) => ({ ...item, ...texts[item.id] }));
}

/* ─── Reusable entry row ─────────────────────────────────────── */
interface Entry {
  id: number;
  title: string;
  department: string;
  description: string;
  location: string;
  type: string;
  link: string;
  badge: string;
  logo: string;
  logoAlt: string;
}

function EntryRow({ exp, i }: { exp: Entry; i: number }) {
  return (
    <motion.div
      key={exp.id}
      className="self-stretch py-6 border-t border-line-10 flex flex-col tablet:flex-row items-start tablet:justify-between gap-4 tablet:gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
    >
      {/* Icon / Logo placeholder */}
      <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
        <Logo src={exp.logo} alt={exp.logoAlt} />
      </div>

      {/* Left: subtitle title + bold institution/company */}
      <div className="flex flex-col gap-1 flex-1">
        <div>
          <span className="text-ink-40 text-sm font-space tracking-wide">
            {exp.title}
          </span>
          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-block align-middle text-ink-30 hover:text-brand-ink transition-colors duration-200"
            >
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
        <span className="text-ink text-xl font-bold font-['Roboto'] leading-7">
          {exp.department}
        </span>
        {exp.description && (
          <p className="text-ink-50 text-sm font-['Roboto'] leading-6 mt-2 max-w-2xl">
            {exp.description}
          </p>
        )}
      </div>

      {/* Right: date range + badge + location */}
      <div className="flex flex-col items-start tablet:items-end gap-1 shrink-0">
        <div className="flex items-center gap-1">
          {/* if current --> use gap-2*/}{" "}
          {/* Right: date range + badge + location */}
          <span className="text-ink-50 text-sm font-['Roboto'] whitespace-nowrap">
            {exp.type}
          </span>
          {exp.badge && (
            <span className="text-ink-50 text-sm font-['Roboto'] whitespace-nowrap">
              {/* if Current --> px-2 py-0.5 rounded-sm text-[11px] font-semibold font-space tracking-wide bg-[#ccff00]/15 text-brand-ink border border-brand-ink/30 */}
              {exp.badge}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={12} className="text-ink-30 shrink-0" />
          <span className="text-ink-30 text-xs font-['Roboto']">
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
        <span className="text-brand-ink">{icon}</span>
        <h3 className="font-bebas text-ink-70 text-2xl tracking-widest uppercase m-0">
          {label}
        </h3>
      </div>
      {/* Entries */}
      <div className="flex flex-col">
        {entries.map((exp, i) => (
          <EntryRow key={exp.id} exp={exp} i={i} />
        ))}
        <div className="w-full border-t border-line-10" />
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export function Experience() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-label={t.experience.ariaLabel}
      className="relative bg-canvas py-32 overflow-hidden"
    >
      {/* GEO: sr-only Experience + Education + Certifications for AI crawlers */}
      <article className="sr-only" aria-hidden="true">
        <h2>
          Work Experience, Education and Certifications of István Zoltán Szász
        </h2>

        <section>
          <h3>Work Experience</h3>
          <article>
            <h4>Full-Stack Web Developer at MolnarCodes</h4>
            <dl>
              <dt>Employer</dt>
              <dd>MolnarCodes</dd>
              <dt>Period</dt>
              <dd>March 2026 – May 2026</dd>
              <dt>Type</dt>
              <dd>Full-time, Remote</dd>
              <dt>Responsibilities</dt>
              <dd>
                <ul>
                  <li>
                    Optimised and made client websites and web interfaces fully
                    responsive.
                  </li>
                  <li>
                    Proposed UI/UX improvements and implemented them following
                    joint discussion, and implemented SEO and GEO (Generative
                    Engine Optimization) to improve visibility in search engines
                    and AI-powered search.
                  </li>
                  <li>
                    Independently integrated Next.js, Tailwind CSS, shadcn/ui
                    and GSAP into production work.
                  </li>
                  <li>
                    Refactored client codebases and resolved bugs to improve
                    readability, maintainability and performance.
                  </li>
                </ul>
              </dd>
            </dl>
          </article>
        </section>

        <section>
          <h3>Education</h3>
          <article
          >
            <h4>BSc Computer Science Engineering — Óbuda University</h4>
            <dl>
              <dt>Institution</dt>
              <dd>Óbuda University, Alba Regia Faculty of Engineering</dd>
              <dt>Location</dt>
              <dd>Székesfehérvár, Hungary</dd>
              <dt>Period</dt>
              <dd>September 2019 – February 2025</dd>
              <dt>Credential</dt>
              <dd>Bachelor of Science degree</dd>
              <dt>Thesis</dt>
              <dd>
                Simulation of the Óbuda University Campus in a 3D Environment
                using Unreal Engine 5
              </dd>
            </dl>
          </article>
          <article>
            <h4>
              High School Diploma — Bálint Márton Vocational Secondary School
            </h4>
            <dl>
              <dt>Specialisation</dt>
              <dd>Computer Science</dd>
              <dt>Location</dt>
              <dd>Törökbálint, Hungary</dd>
              <dt>Period</dt>
              <dd>September 2014 – May 2019</dd>
            </dl>
          </article>
        </section>

        <section>
          <h3>Professional Certifications</h3>
          <ul>
            <li>
              Microsoft Full-Stack Developer Professional Certificate —
              Coursera, 2025
            </li>
            <li>
              IBM Full-Stack JavaScript Developer Professional Certificate —
              Coursera, 2025
            </li>
            <li>
              Meta Full-Stack Developer Professional Certificate — Coursera,
              2024–2025
            </li>
            <li>Meta React Native Specialisation — Coursera, 2024</li>
          </ul>
        </section>
      </article>

      {/* Section label — absolute, side positioned (matches About) */}
      <motion.div
        className="absolute top-12 left-4 tablet:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-brand-ink" />
        <span className="font-space text-ink-30 text-[11px] tracking-[0.2em] uppercase">
          {t.experience.label}
        </span>
      </motion.div>

      <div className="max-w-7xl w-11/12 tablet:w-5/6 desktop:w-3/4 wide-screen:max-w-450 mx-auto flex flex-col items-center gap-20">
        {/* ── Header ── */}
        <div className="w-full max-w-3xl flex flex-col items-center gap-4">
          <div className="overflow-hidden w-full text-center">
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
              {t.experience.headingWhite}{" "}
              <span className="text-brand-ink">
                {t.experience.headingAccent}
              </span>
            </motion.h2>
          </div>

          <motion.p
            className="text-center text-ink-40 text-lg font-normal font-['Roboto'] leading-7 max-w-140"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {t.experience.description}
          </motion.p>
        </div>

        {/* ── Three sections ── */}
        <EntrySection
          label={t.experience.workLabel}
          icon={<Briefcase size={20} />}
          entries={withText(workExperience, t.experience.work)}
        />

        <EntrySection
          label={t.experience.educationLabel}
          icon={<GraduationCap size={20} />}
          entries={withText(education, t.experience.education)}
        />

        <EntrySection
          label={t.experience.certificationsLabel}
          icon={<Award size={20} />}
          entries={withText(certifications, t.experience.certifications)}
        />
      </div>
    </section>
  );
}

export default Experience;
