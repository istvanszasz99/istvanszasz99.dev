import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring, useInView } from "motion/react";

export function AnimatedNumber({
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
