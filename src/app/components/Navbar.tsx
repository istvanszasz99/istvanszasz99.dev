import { useCallback, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useScroll,
  AnimatePresence,
  type AnimationPlaybackControls,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SCROLL_SETTLE_MS = 150;
const MOBILE_MENU_CLOSE_MS = 300;

// Nav click speed. Raise the base or max, or lower the px rate, to slow it down.
const SCROLL_BASE_SECONDS = 0.9;
const SCROLL_PX_PER_SECOND = 6000;
const SCROLL_MAX_SECONDS = 2.2;
const UNDERLINE_SECONDS = 0.7;
const UNDERLINE_EASE = [0.65, 0, 0.35, 1] as const;
// No slow start: from Home, one would still be crawling as About comes into view.
const SCROLL_EASE = [0.25, 0.25, 0.4, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const isNavScrolling = useRef(false);
  const scrollUnlockTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const scrollAnimation = useRef<AnimationPlaybackControls>(undefined);

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => {
      setScrolled(y > 50);
    });
    return () => unsub();
  }, [scrollY]);

  const updateActiveSection = useCallback(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ];
    const current = sections.find((id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom > 100;
    });
    if (current) setActiveSection(current);
  }, []);

  // After a nav click the clicked item stays active until scrolling settles, so
  // the underline doesn't step through the sections on the way there.
  const scheduleScrollUnlock = useCallback(() => {
    clearTimeout(scrollUnlockTimer.current);
    scrollUnlockTimer.current = setTimeout(() => {
      isNavScrolling.current = false;
      updateActiveSection();
    }, SCROLL_SETTLE_MS);
  }, [updateActiveSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavScrolling.current) {
        scheduleScrollUnlock();
      } else {
        updateActiveSection();
      }
    };
    // Hand control back as soon as the visitor scrolls for themselves.
    const stopNavScroll = () => scrollAnimation.current?.stop();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", stopNavScroll, { passive: true });
    window.addEventListener("touchstart", stopNavScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", stopNavScroll);
      window.removeEventListener("touchstart", stopNavScroll);
      stopNavScroll();
      clearTimeout(scrollUnlockTimer.current);
    };
  }, [scheduleScrollUnlock, updateActiveSection]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    setActiveSection(id);
    isNavScrolling.current = true;
    clearTimeout(scrollUnlockTimer.current);

    const scrollToSection = () => {
      const target = document.getElementById(id);
      if (!target) {
        scheduleScrollUnlock();
        return;
      }

      const startY = window.scrollY;
      const distance = Math.abs(target.getBoundingClientRect().top);
      scrollAnimation.current?.stop();
      scrollAnimation.current = animate(0, 1, {
        duration: Math.min(
          SCROLL_MAX_SECONDS,
          SCROLL_BASE_SECONDS + distance / SCROLL_PX_PER_SECOND,
        ),
        ease: SCROLL_EASE,
        onUpdate: (progress) => {
          // Re-read the target each frame, since lazy sections can shift it.
          const targetY = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: startY + (targetY - startY) * progress,
            behavior: "instant",
          });
          scheduleScrollUnlock();
        },
      });
    };

    if (mobileOpen) {
      // Let the mobile menu close first.
      setMobileOpen(false);
      setTimeout(scrollToSection, MOBILE_MENU_CLOSE_MS);
    } else {
      scrollToSection();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 py-5 transition-colors duration-400 ease-in-out ${
          scrolled
            ? "bg-[#050505]/95 border-b border-white/5"
            : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
      >
        <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 no-underline"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-full bg-[#ccff00] flex items-center justify-center">
              <span className="font-bebas text-[#050505] text-[14px]">IS</span>
            </div>
            <span className="font-space text-white text-[14px] tracking-wider">
              ISTVAN{" "}
              <span className="text-[#ccff00]">
                {"{"}ZOLTAN{"}"} SZASZ
              </span>
            </span>
          </motion.a>

          {/* Nav links — desktop only */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) => {
              const isContact = item.href === "#contact";
              return isContact ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                >
                  <Button
                    variant="ghost"
                    shape="pill"
                    size="sm"
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative no-underline font-space text-[13px] tracking-[0.08em] uppercase ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[#ccff00]"
                      : "text-white/60"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                >
                  <motion.span whileHover={{ color: "#ccff00" }}>
                    {item.label}
                  </motion.span>
                  {activeSection === item.href.replace("#", "") && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#ccff00]"
                      layoutId="activeNav"
                      transition={{
                        duration: UNDERLINE_SECONDS,
                        ease: UNDERLINE_EASE,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden text-white/60 hover:text-[#ccff00] transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="lg:hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0, overflow: "hidden" }}
              animate={{ opacity: 1, height: "auto", overflow: "visible" }}
              exit={{ opacity: 0, height: 0, overflow: "hidden" }}
              transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 mx-auto py-6 flex flex-col gap-5 items-center">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative no-underline font-space font-extrabold text-[15px] tracking-[0.08em] uppercase transition-colors duration-200 w-fit ${
                      activeSection === item.href.replace("#", "")
                        ? "text-[#ccff00]"
                        : "text-white/60 hover:text-[#ccff00]"
                    }`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    {item.label}
                    {activeSection === item.href.replace("#", "") && (
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#ccff00]" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
