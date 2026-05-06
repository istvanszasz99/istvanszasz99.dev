import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => {
      setScrolled(y > 50);
    });
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-400 ease-in-out ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
    >
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

      {/* Nav links */}
      <div className="flex items-center gap-8">
        {navItems.map((item, i) => {
          const isContact = item.href === "#contact";
          return isContact ? (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="no-underline px-5 py-2 border border-[#ccff00] rounded-full text-[#ccff00] relative overflow-hidden group font-space text-[13px] tracking-[0.08em] uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
            >
              <motion.span
                className="absolute inset-0 bg-[#ccff00]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
              <span className="relative group-hover:text-[#050505] transition-colors duration-300">
                {item.label}
              </span>
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
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.a>
          );
        })}
      </div>
    </motion.nav>
  );
}
