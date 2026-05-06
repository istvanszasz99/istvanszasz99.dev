import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  once = true,
  tag: Tag = "div",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      <span className="inline-block">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.08,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function CharReveal({ text, className = "", delay = 0, once = true }: CharRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px" });

  const chars = text.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {chars.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.025,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
