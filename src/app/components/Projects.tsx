import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
} from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Meta Back-End Developer Certification Capstone",
    category: "Web Development",
    description:
      "A comprehensive capstone project for Meta's Back-End Developer Professional Certificate — featuring RESTful APIs, database design, and full authentication.",
    tech: ["Python", "Django", "REST API", "MySQL", "Djoser"],
    image:
      "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwQVBJJTIwY29kZSUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3Njg0Mzc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#ccff00",
    number: "01",
    github: "https://github.com/istvanszasz99",
    live: "#",
  },
  {
    id: 2,
    title: "Meta Front-End Developer Certification Capstone",
    category: "Web Development",
    description:
      "Front-end capstone for Meta's Professional Certificate — a fully responsive React application with advanced UX patterns and component architecture.",
    tech: ["React", "JavaScript", "CSS3", "Figma", "Jest"],
    image:
      "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGRhcmslMjB1aXxlbnwxfHx8fDE3NzY4NDM3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#00ffcc",
    number: "02",
    github: "https://github.com/istvanszasz99",
    live: "#",
  },
  {
    id: 3,
    title: "Meta React Native Specialization Capstone",
    category: "Mobile Development",
    description:
      "Cross-platform mobile application built with React Native for Meta's specialization. Features navigation, local storage, and API integration.",
    tech: ["React Native", "Expo", "AsyncStorage", "REST API"],
    image:
      "https://images.unsplash.com/photo-1757165792338-b4e8a88ae1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc2ODQzNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#ff9f00",
    number: "03",
    github: "https://github.com/istvanszasz99",
    live: "#",
  },
  {
    id: 4,
    title: "Simulation of the University Campus in 3D",
    category: "3D Development",
    description:
      "An immersive 3D simulation of a university campus environment built in Blender and rendered in a real-time WebGL viewer. Includes dynamic lighting and exploration.",
    tech: ["Blender", "Three.js", "WebGL", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1635821620693-b6863c79db72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWVyaWFsJTIwM0QlMjByZW5kZXJ8ZW58MXx8fHwxNzc2ODQzNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#ff5f9e",
    number: "04",
    github: "https://github.com/istvanszasz99",
    live: "#",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      <motion.div
        className="relative overflow-hidden border border-white/10 rounded-2xl cursor-pointer group [transform-style:preserve-3d] [perspective:1000px]"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ borderColor: `${project.color}40` }}
        data-cursor="VIEW"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            className="w-full h-full"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(5,5,5,0.95)_100%)]" />

          {/* Project number */}
          <div className="absolute top-4 left-5 font-bebas text-[var(--pc)] text-[13px] tracking-[0.15em]">
            {project.number}
          </div>

          {/* Category badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full border font-space text-[var(--pc)] text-[10px] tracking-[0.1em] uppercase border-[var(--pc40)] bg-[var(--pc15)]">
            {project.category}
          </div>

          {/* Hover actions */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center no-underline bg-[#050505]/90 border border-white/20"
              whileHover={{ scale: 1.1, backgroundColor: project.color }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} className="text-white" />
            </motion.a>
            <motion.a
              href={project.live}
              className="w-12 h-12 rounded-full flex items-center justify-center no-underline bg-[#050505]/90 border border-white/20"
              whileHover={{ scale: 1.1, backgroundColor: project.color }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} className="text-white" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 bg-[#0d0d0d]">
          <h3 className="font-space text-white text-[16px] font-semibold leading-[1.4] mb-2.5">
            {project.title}
          </h3>
          <p className="font-space text-white/40 text-[13px] leading-[1.7] mb-4">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-[10px] border border-white/10 font-space text-white/40 tracking-[0.06em] uppercase"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom line animated */}
        <motion.div
          className="w-full h-0.5 bg-[var(--pc)]"
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
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
          03 / Projects
        </span>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-16">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-bebas text-white text-[clamp(60px,8vw,110px)] leading-[0.9] m-0"
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                FEATURED <span className="text-[#ccff00]">WORK</span>
              </motion.h2>
            </div>
          </div>

          <motion.a
            href="https://github.com/istvanszasz99"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 no-underline group pb-1 border-b border-white/20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            whileHover={{ borderColor: "#ccff00" }}
          >
            <span className="font-space text-white/50 text-[13px] tracking-[0.08em] uppercase">
              View All on GitHub
            </span>
            <ArrowUpRight size={16} className="text-white/50" />
          </motion.a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
