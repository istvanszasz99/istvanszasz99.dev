import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { TextReveal } from "./TextReveal";

function CountUp({
  end,
  suffix = "",
  delay = 0,
}: {
  end: number;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay }}
      >
        {isInView ? end : 0}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

export function About() {
  const ref = useRef(null);
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
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      <div className="noise-overlay" />

      {/* Section label */}
      <motion.div
        className="absolute top-12 left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-[#ccff00]" />
        <span className="font-space text-white/30 text-[11px] tracking-[0.2em] uppercase">
          About Me
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto  grid grid-cols-2 gap-20 items-center">
        {/* Left: visual card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Big letter */}
          <div className="absolute -left-8 -top-12 select-none pointer-events-none font-bebas text-[300px] text-[#ccff00]/4 leading-none z-0">
            I
          </div>

          <motion.div
            className="relative z-10 rounded-2xl overflow-hidden border border-white/10"
            style={{ y: imgY }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {/* Profile visual */}
            <div className="w-full h-105 relative flex items-end bg-[linear-gradient(145deg,#111111_0%,#0d1a0d_50%,#111111_100%)]">
              {/* Decorative code block */}
              <div className="absolute top-8 left-8 right-8">
                <motion.div
                  className="p-5 rounded-xl border border-white/5 bg-black/40 backdrop-blur-[10px]"
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
                    { key: "const", val: "developer", color: "#ccff00" },
                    {
                      key: "name",
                      val: '"István Zoltán Szász"',
                      color: "#88d8b0",
                    },
                    {
                      key: "age",
                      val: "26",
                      color: "#ccff00",
                    },
                    {
                      key: "gender",
                      val: '"Male"',
                      color: "#88d8b0",
                    },
                    {
                      key: "location",
                      val: '"Érd, Hungary"',
                      color: "#88d8b0",
                    },
                    {
                      key: "role",
                      val: '"Full-Stack Developer"',
                      color: "#88d8b0",
                    },
                    { key: "available", val: "true", color: "#ccff00" },
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
                      ) : i === 6 ? (
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
                          <span className="font-mono text-white/30 text-[13px]">
                            {"}"}
                          </span>
                        </>
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
                </motion.div>
              </div>

              {/* Stats at bottom */}
              <div className="w-full p-6 grid grid-cols-3 gap-4 border-t border-white/10">
                {[
                  { num: 5, suffix: "+", label: "Years Exp" },
                  { num: 20, suffix: "+", label: "Projects" },
                  { num: 10, suffix: "+", label: "Technologies" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-bebas text-[#ccff00] text-[42px] leading-none">
                      <CountUp
                        end={stat.num}
                        suffix={stat.suffix}
                        delay={0.5 + i * 0.1}
                      />
                    </div>
                    <div className="font-space text-white/35 text-[10px] tracking-[0.12em] uppercase mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute -right-8 top-1/3 bg-[#ccff00] px-4 py-3 rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 6 } : {}}
            transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <div className="font-space text-[#050505] text-[11px] font-bold tracking-wider text-center">
              <div>Available</div>
              <div>for work</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: text content */}
        <div>
          <div className="overflow-hidden mb-2">
            <motion.span
              className="font-bebas text-white text-[100px] leading-[0.9] block"
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              ABOUT
            </motion.span>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.span
              className="font-bebas text-[#ccff00] text-[100px] leading-[0.9] block"
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              ME
            </motion.span>
          </div>

          <motion.p
            className="font-space text-white/60 text-base leading-[1.8] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            I'm a{" "}
            {new Date().getFullYear() -
              1999 -
              (new Date() < new Date(new Date().getFullYear(), 9, 2)
                ? 1
                : 0)}{" "}
            years old Full-Stack Developer from Hungary. Recently graduated with
            a Bachelor's degree as Computer Science Engineer at Óbuda
            University.
          </motion.p>

          <motion.p
            className="font-space text-white/45 text-[15px] leading-[1.8] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            I built a solid foundation in both Front-End and Back-End
            development. Experienced in building and maintaining robust web
            applications using a wide range of modern technologies.
          </motion.p>

          {/* Attributes */}
          <div className="space-y-3">
            {[
              { label: "Location", value: "Budapest, Hungary" },
              { label: "Education", value: "BSc Computer Science Engineering" },
              { label: "University", value: "Óbuda University" },
              { label: "Status", value: "Open to opportunities", accent: true },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 py-3 border-b border-white/5"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              >
                <span className="font-space text-white/30 text-[12px] tracking-widest uppercase w-25 shrink-0">
                  {item.label}
                </span>
                <span
                  className={`font-space text-[14px] ${item.accent ? "text-[#ccff00]" : "text-white/70"}`}
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
