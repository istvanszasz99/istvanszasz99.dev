import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";

function AnimatedNumber({
  target,
  delay = 0,
}: {
  target: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => motionValue.set(target), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, motionValue, target, delay]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return <span ref={ref}>{isInView ? display : ""}</span>;
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
      className="relative bg-[#080808] py-32 overflow-hidden"
    >
      <div className="noise-overlay" />

      {/* Section label */}
      <motion.div
        className="absolute top-12 left-4 sm:left-8 md:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-[#ccff00]" />
        <span className="font-space text-white/30 text-[11px] tracking-[0.2em] uppercase">
          About Me
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
                  { num: 20, suffix: "+", label: "Projects completed" },
                  { num: 50, suffix: "+", label: "Technologies" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-bebas text-[#ccff00] text-[42px] leading-none">
                      <AnimatedNumber target={stat.num} delay={0} />
                      {stat.suffix}
                    </div>
                    <div className="font-space text-white/35 text-[10px] tracking-[0.12em] uppercase mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: text content */}
        <div>
          <div className="overflow-hidden mb-8">
            <motion.span
              className="font-bebas text-white text-[100px] leading-[0.9] block whitespace-nowrap"
              initial={{ y: "110%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              ABOUT <span className="text-[#ccff00]">ME</span>
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
            years old Full-Stack Developer from Hungary with a Bachelor's degree
            in Computer Science Engineering from Óbuda University.
          </motion.p>

          <motion.p
            className="font-space text-white/45 text-[15px] leading-[1.8] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            I built a solid foundation in both Front-End and Back-End
            development. Over 5 years of experience building modern web
            applications with a strong focus on React and the modern JavaScript
            ecosystem. Expertise in React, Vite, Next.js, TypeScript, and
            scalable backend integrations for high-performance web platforms.
          </motion.p>

          {/* Attributes */}
          <div className="space-y-3">
            {[
              {
                label: "Soft Skills",
                value: "Problem-solving , Communication , Teamwork",
              },
              {
                label: "Hobbies",
                value: "Hobby Cooking , Gaming , Following F1 & WEC",
              },
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
