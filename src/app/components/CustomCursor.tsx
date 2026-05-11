import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "motion/react";

export function CustomCursor() {
  const isTouchDevice =
    typeof window !== "undefined" &&
    (navigator.maxTouchPoints > 0 || "ontouchstart" in window);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });
  const followerX = useSpring(0, { stiffness: 120, damping: 20 });
  const followerY = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a, button");
      if (link) {
        setIsHovering(true);
        const text = (link as HTMLElement).dataset.cursor || "";
        setCursorText(text);
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY, followerX, followerY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-9999 pointer-events-none mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-[#ccff00]"
          animate={{
            width: isClicking ? 6 : 8,
            height: isClicking ? 6 : 8,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Follower ring */}
      <motion.div
        className="fixed top-0 left-0 z-9998 pointer-events-none"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border border-[#ccff00] flex items-center justify-center overflow-hidden"
          animate={{
            width: isHovering ? 65 : isClicking ? 28 : 40,
            height: isHovering ? 65 : isClicking ? 28 : 40,
            backgroundColor: isHovering
              ? "rgba(204,255,0,0.15)"
              : "transparent",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {cursorText && (
            <motion.span
              className="text-[#ccff00] text-[9px] uppercase tracking-widest font-medium text-center px-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
