import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => {
      setScrolled(y > 50);
    });
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
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
        className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-400 ease-in-out ${
          scrolled
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/5"
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
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="no-underline px-5 py-2 border border-[#ccff00] rounded-full text-[#ccff00] font-space text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 hover:bg-[#ccff00] hover:text-[#050505]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {item.label}
                </motion.a>
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
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
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
