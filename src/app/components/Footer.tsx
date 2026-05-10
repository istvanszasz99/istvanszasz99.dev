import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";

export function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 py-16 overflow-hidden">
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-[1fr_auto_auto] gap-12 items-center mb-16">
          {/* Brand */}
          <div>
            <div className="font-bebas text-white text-[48px] leading-none mb-2">
              ISTVAN <span className="text-[#ccff00]">{"{ZOLTAN}"} SZASZ</span>
            </div>
            <p className="font-space text-white/30 text-[13px] tracking-wider">
              Full-Stack Developer · Budapest, Hungary
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="no-underline font-space text-white/35 text-[13px] tracking-[0.06em] uppercase hover:text-[#ccff00] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            {[
              {
                Icon: GithubIcon,
                href: "https://github.com/istvanszasz99",
                label: "GitHub",
              },
              {
                Icon: LinkedinIcon,
                href: "https://linkedin.com/in/istvanszasz99",
                label: "LinkedIn",
              },
              {
                Icon: Mail,
                href: "mailto:istvanszasz99@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 no-underline group"
                whileHover={{ x: 4 }}
              >
                <Icon
                  size={16}
                  className="text-white/30 group-hover:text-[#ccff00] transition-colors duration-300"
                />
                <span className="font-space text-white/30 text-[13px] tracking-[0.06em] group-hover:text-[#ccff00] transition-colors duration-300">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <span className="font-space text-white/20 text-[12px] tracking-[0.06em]">
            © {new Date().getFullYear()} Istvan Zoltan Szasz. All rights
            reserved.
          </span>

          <div className="flex items-center gap-6">
            <span className="font-space text-white/20 text-[12px]">
              Built with React · TailwindCSS · Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
