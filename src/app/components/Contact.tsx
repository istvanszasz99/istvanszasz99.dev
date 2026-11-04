import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, ArrowUpRight, Send, Loader2 } from "lucide-react";
import { GitHubDark, LinkedIn } from "@ridemountainpig/svgl-react";

export function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      icon: GitHubDark,
      label: "GitHub",
      href: "https://github.com/istvanszasz99",
      username: "@istvanszasz99",
      rel: "me noopener noreferrer",
    },
    {
      icon: LinkedIn,
      label: "LinkedIn",
      href: "https://linkedin.com/in/istvanszasz99",
      username: "in/istvanszasz99",
      rel: "me noopener noreferrer",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:istvanszasz99@gmail.com",
      username: "istvanszasz99@gmail.com",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-label="Contact István Zoltán Szász for freelance, full-time, or collaboration opportunities"
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      {/* GEO: sr-only contact details for AI crawlers */}
      <article className="sr-only" aria-hidden="true">
        <h2>Contact István Zoltán Szász</h2>
        <p>
          István Zoltán Szász is open to freelance projects, full-time roles,
          and exciting collaborations. Whether you have a project in mind or
          want to discuss opportunities, he can be reached via email or social
          profiles below.
        </p>
        <address>
          <dl>
            <dt>Email</dt>
            <dd>
              <a href="mailto:istvanszasz99@gmail.com">
                istvanszasz99@gmail.com
              </a>
            </dd>
            <dt>GitHub</dt>
            <dd>
              <a
                href="https://github.com/istvanszasz99"
                rel="me"
              >
                github.com/istvanszasz99
              </a>
            </dd>
            <dt>LinkedIn</dt>
            <dd>
              <a
                href="https://linkedin.com/in/istvanszasz99"
                rel="me"
              >
                linkedin.com/in/istvanszasz99
              </a>
            </dd>
            <dt>Location</dt>
            <dd>Érd, Hungary</dd>
            <dt>Availability</dt>
            <dd>Open to freelance, full-time, and collaboration</dd>
          </dl>
        </address>
      </article>
      <div className="noise-overlay" />

      {/* Lime gradient bg */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 pointer-events-none bg-[radial-gradient(ellipse_at_50%_100%,rgba(204,255,0,0.07)_0%,transparent_70%)]" />

      {/* Section label */}
      <motion.div
        className="absolute top-12 left-4 sm:left-8 md:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-[#ccff00]" />
        <span className="font-space text-white/30 text-[11px] tracking-[0.2em] uppercase">
          Contact
        </span>
      </motion.div>

      <div className="max-w-7xl w-11/12 sm:w-11/12 md:w-5/6 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto ">
        {/* Big heading */}
        <div className="text-center mb-20">
          <h2 className="sr-only">Let&apos;s Build Something Great</h2>
          <div aria-hidden="true">
            <div className="overflow-hidden mb-2">
              <motion.div
                className="font-bebas text-white text-[clamp(60px,10vw,140px)] leading-[0.9] tracking-[-0.02em]"
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                LET&apos;S BUILD
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                className="font-bebas text-[#ccff00] text-[clamp(60px,10vw,140px)] leading-[0.9] tracking-[-0.02em]"
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                SOMETHING GREAT
              </motion.div>
            </div>
          </div>
          <motion.p
            className="font-space text-white/35 text-base mt-5 tracking-[0.02em]"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Open to freelance projects, full-time roles & exciting
            collaborations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: Info */}
          <div>
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <p className="font-space text-white/50 text-[15px] leading-[1.8] mb-8">
                Whether you have a project in mind or want to collaborate, my
                inbox is always open. I'll get back to you as soon as possible.
              </p>

              {/* Availability indicator */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-3 h-3 rounded-full bg-[#ccff00] animate-pulse" />
                <span className="font-space text-[#ccff00] text-[13px] tracking-[0.08em] uppercase">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Socials */}
            <div className="space-y-3">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel={social.rel}
                  className="flex items-center justify-between py-4 px-5 border border-white/10 group no-underline"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          borderColor: "rgba(255,255,255,0.1)",
                          backgroundColor: "rgba(0,0,0,0)",
                        }
                      : {}
                  }
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  whileHover={{
                    borderColor: "rgba(204,255,0,0.4)",
                    backgroundColor: "rgba(204,255,0,0.04)",
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{
                    scale: 0.98,
                    borderColor: "rgba(204,255,0,0.4)",
                    backgroundColor: "rgba(204,255,0,0.04)",
                    transition: { duration: 0.1 },
                  }}
                >
                  <div className="flex items-center gap-4">
                    <social.icon
                      width={18}
                      height={18}
                      className="**:fill-current text-white/40"
                    />
                    <div>
                      <div className="font-space text-white/80 text-[14px]">
                        {social.label}
                      </div>
                      <div className="font-space text-white/30 text-[12px]">
                        {social.username}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ x: -5, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={16} className="text-[#ccff00]" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  {
                    key: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "Your Name",
                  },
                  {
                    key: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "Your Email Address",
                  },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-space text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2">
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formState[field.key as keyof typeof formState]}
                        onChange={(e) =>
                          setFormState((prev) => ({
                            ...prev,
                            [field.key]: e.target.value,
                          }))
                        }
                        onFocus={() => setFocused(field.key)}
                        onBlur={() => setFocused(null)}
                        required
                        className={`input-field w-full px-5 py-4 bg-transparent outline-none font-space text-white text-[15px] rounded-none ${
                          focused === field.key
                            ? "border-[rgba(204,255,0,0.5)]"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <label className="font-space text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    className={`input-field w-full px-5 py-4 bg-transparent outline-none resize-none font-space text-white text-[15px] rounded-none ${
                      focused === "message"
                        ? "border-[rgba(204,255,0,0.5)]"
                        : ""
                    }`}
                  />
                </div>

                {error && (
                  <p className="font-space text-red-400 text-[13px]">{error}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 flex items-center justify-center gap-3 bg-[#ccff00] relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                  whileTap={loading ? {} : { scale: 0.98 }}
                >
                  {!loading && (
                    <motion.span
                      className="absolute inset-0 bg-white"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.35 }}
                      style={{ originX: 0 }}
                    />
                  )}
                  <motion.span
                    className="relative flex items-center gap-3 font-space text-[#050505] text-[14px] font-bold tracking-widest uppercase"
                    whileHover={loading ? {} : { x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </motion.span>
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="flex flex-col items-center justify-center h-80 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#ccff00] flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <span className="text-[28px]">✓</span>
                </motion.div>
                <div className="font-bebas text-white text-[40px] mb-2">
                  MESSAGE SENT!
                </div>
                <p className="font-space text-white/40 text-[14px] leading-[1.7]">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
