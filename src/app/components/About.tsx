import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Lightbulb, MessagesSquare, Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const ref = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="about"
      ref={ref}
      aria-label={t.about.ariaLabel}
      className="relative bg-canvas-alt py-32 overflow-hidden"
    >
      {/* GEO: sr-only About summary — semantic HTML for AI entity extraction */}
      <article
        className="sr-only"
        aria-hidden="true"
      >
        <h2>About István Zoltán Szász</h2>
        <p>
          István Zoltán Szász is a Junior Full-Stack Developer from Hungary. He
          earned a Bachelor of Science in Computer Science Engineering from
          Óbuda University, Alba Regia Faculty of Engineering, Székesfehérvár,
          graduating in February 2025. He builds modern web applications focused
          on React, Next.js, TypeScript, and scalable backend integrations,
          working across the entire stack from user interface to debugging and
          deployment.
        </p>
        <dl>
          <dt>Location</dt>
          <dd>Érd, Hungary</dd>
          <dt>Degree</dt>
          <dd>
            BSc Computer Science Engineering, Óbuda University, 2025
          </dd>
          <dt>Soft Skills</dt>
          <dd>Problem-solving, Communication, Teamwork</dd>
          <dt>Hobbies</dt>
          <dd>
            Hobby cooking, Hardware repair (laptops, PCs, phones and tablets),
            Following Formula 1 and WEC motorsport
          </dd>
          <dt>Availability</dt>
          <dd>
            Open to opportunities — freelance, full-time, and collaboration
          </dd>
          <dt>Core stack</dt>
          <dd>React, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js</dd>
        </dl>
      </article>

      {/* Section label */}
      <motion.div
        className="absolute top-12 left-4 sm:left-8 md:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-brand-ink" />
        <span className="font-space text-ink-30 text-[11px] tracking-[0.2em] uppercase">
          {t.about.label}
        </span>
      </motion.div>

      <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: visual card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.div
            className="relative z-10 rounded-2xl overflow-hidden border border-line-10"
            style={{ y: imgY }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {/* Profile visual */}
            <div className="w-full h-130 min-[375px]:h-115 sm:h-105 lg:h-115 xl:h-105 relative flex items-end bg-[linear-gradient(145deg,#111111_0%,#0d1a0d_50%,#111111_100%)]">
              {/* Decorative code block */}
              <div className="absolute top-8 left-8 right-8">
                <motion.div
                  className="p-5 rounded-xl border border-white/5 bg-black/40"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 font-space text-white/20 text-[11px]">
                      profile.ts
                    </span>
                  </div>
                  {[
                    { key: "const", val: "developer", color: "var(--card-accent)" },
                    {
                      key: "name",
                      val: '"István Zoltán Szász"',
                      color: "#88d8b0",
                    },
                    {
                      key: "stack",
                      val: '"React · Next.js · TypeScript"',
                      color: "#88d8b0",
                    },
                    {
                      key: "location",
                      val: '"Érd, Hungary"',
                      color: "#88d8b0",
                    },
                    {
                      key: "role",
                      val: '"Junior Full-Stack Developer"',
                      color: "#88d8b0",
                    },
                    { key: "available", val: "true", color: "var(--card-accent)" },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 py-0.5"
                      style={{ "--lc": line.color } as React.CSSProperties}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                    >
                      {i === 0 ? (
                        <span className="font-mono text-[#7c9eff] text-[13px]">
                          {line.key}{" "}
                          <span className="text-(--lc)">{line.val}</span> ={" "}
                          {"{"}
                        </span>
                      ) : (
                        <>
                          <span className="font-mono text-white/25 text-[13px]">
                            &nbsp;&nbsp;
                          </span>
                          <span className="font-mono text-white/50 text-[13px]">
                            {line.key}:{" "}
                          </span>
                          <span className="font-mono text-(--lc) text-[13px]">
                            {line.val}
                          </span>
                        </>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    className="flex items-center gap-2 py-0.5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.6, duration: 0.4 }}
                  >
                    <span className="font-mono text-[#7c9eff] text-[13px]">
                      {"}"}
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Soft skills at bottom */}
              <div className="w-full px-2 min-[375px]:px-4 py-5 border-t border-white/10">
                <h3 className="m-0 mb-3 text-center font-space text-white/40 text-[10px] font-normal leading-normal tracking-[0.2em] uppercase">
                  {t.about.softSkillsLabel}
                </h3>
                <ul className="m-0 p-0 list-none grid grid-cols-3 gap-2">
                  {[
                    { Icon: Lightbulb, label: t.about.softSkills.problemSolving },
                    { Icon: MessagesSquare, label: t.about.softSkills.communication },
                    { Icon: Users, label: t.about.softSkills.teamwork },
                  ].map(({ Icon, label }) => (
                    <li
                      key={label}
                      className="flex flex-col items-center gap-1.5 text-center"
                    >
                      <Icon
                        size={22}
                        aria-hidden="true"
                        className="text-card-accent"
                      />
                      <span className="font-space text-white/70 text-[11px] leading-snug">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: text content */}
        <div>
          <div className="overflow-hidden mb-8">
            <motion.h2
              className="font-bebas text-ink text-[100px] leading-[0.9] block whitespace-nowrap"
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {t.about.headingWhite}{" "}
              <span className="text-brand-ink">{t.about.headingAccent}</span>
            </motion.h2>
          </div>

          <motion.p
            className="font-space text-ink-60 text-base leading-[1.8] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {t.about.lead}
          </motion.p>

          <motion.p
            className="font-space text-ink-45 text-[15px] leading-[1.8] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            {t.about.body}
          </motion.p>

          {/* Attributes */}
          <div className="space-y-3">
            {[
              {
                label: t.about.hobbiesLabel,
                value: t.about.hobbies,
              },
              { label: t.about.statusLabel, value: t.about.status, accent: true },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 py-3 border-b border-line-5"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              >
                <span className="font-space text-ink-30 text-[12px] tracking-widest uppercase w-25 shrink-0">
                  {item.label}
                </span>
                <span
                  className={`font-space text-[14px] ${item.accent ? "text-brand-ink" : "text-ink-70"}`}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
