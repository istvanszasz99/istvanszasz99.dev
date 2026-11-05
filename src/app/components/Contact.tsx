import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, ArrowUpRight, Send, Loader2 } from "lucide-react";
import { GitHubDark, LinkedIn } from "@ridemountainpig/svgl-react";
import { Button } from "./Button";
import { useLanguage } from "../i18n/LanguageContext";

const socialArrowVariants = {
  rest: { x: -5, opacity: 0 },
  hover: { x: 0, opacity: 1 },
  tap: { x: 0, opacity: 1 },
};

export function Contact() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<keyof typeof t.contact.errors | null>(
    null,
  );
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
      if (res.ok) {
        setSubmitted(true);
      } else {
        // The Worker's own messages are English only, so go by the status.
        setError(res.status === 400 ? "required" : "send");
      }
    } catch {
      setError("generic");
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
      label: t.contact.emailLabel,
      href: "mailto:istvanszasz99@gmail.com",
      username: "istvanszasz99@gmail.com",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-label={t.contact.ariaLabel}
      className="relative bg-canvas py-32 overflow-hidden"
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

      {/* Lime gradient bg */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 pointer-events-none bg-[radial-gradient(ellipse_at_50%_100%,rgb(var(--glow)/0.07)_0%,transparent_70%)]" />

      {/* Section label */}
      <motion.div
        className="absolute top-12 left-4 tablet:left-16 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-px bg-brand-ink" />
        <span className="font-space text-ink-30 text-[11px] tracking-[0.2em] uppercase">
          {t.contact.label}
        </span>
      </motion.div>

      <div className="max-w-7xl w-11/12 tablet:w-5/6 desktop:w-3/4 wide-screen:max-w-450 mx-auto ">
        {/* Big heading */}
        <div className="text-center mb-20">
          <h2 className="sr-only">{t.contact.srHeading}</h2>
          <div aria-hidden="true">
            <div className="overflow-hidden mb-2">
              <motion.div
                className="font-bebas text-ink text-[clamp(60px,10vw,140px)] wide-screen:text-[190px] leading-[0.9] tracking-[-0.02em]"
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {t.contact.headingWhite}
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                className="font-bebas text-brand-ink text-[clamp(60px,10vw,140px)] wide-screen:text-[190px] leading-[0.9] tracking-[-0.02em]"
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {t.contact.headingAccent}
              </motion.div>
            </div>
          </div>
          <motion.p
            className="font-space text-ink-35 text-base mt-5 tracking-[0.02em]"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: Info */}
          <div>
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <p className="font-space text-ink-50 text-[15px] leading-[1.8] mb-8">
                {t.contact.intro}
              </p>

              {/* Availability indicator */}
              <div className="flex items-center justify-center gap-3 mb-10 tablet:justify-start">
                <div className="w-3 h-3 rounded-full bg-brand-fill animate-pulse" />
                <span className="font-space text-brand-ink text-[13px] tracking-[0.08em] uppercase">
                  {t.contact.available}
                </span>
              </div>
            </motion.div>

            {/* Socials */}
            <div className="space-y-3">
              {socials.map((social, i) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <Button
                    variant="ghost"
                    size="none"
                    href={social.href}
                    target="_blank"
                    rel={social.rel}
                    className="w-full py-4 px-5"
                  >
                    <span className="flex w-full items-center justify-between">
                      <span className="flex items-center gap-4">
                        <social.icon
                          width={18}
                          height={18}
                          className={social.icon === Mail ? undefined : "**:fill-current"}
                        />
                        <span className="text-left">
                          <span className="block font-space text-[14px]">
                            {social.label}
                          </span>
                          <span className="block font-space text-[12px] opacity-50">
                            {social.username}
                          </span>
                        </span>
                      </span>
                      <motion.span
                        variants={socialArrowVariants}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.span>
                    </span>
                  </Button>
                </motion.div>
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
                    label: t.contact.nameLabel,
                    type: "text",
                    placeholder: t.contact.namePlaceholder,
                  },
                  {
                    key: "email",
                    label: t.contact.addressLabel,
                    type: "email",
                    placeholder: t.contact.addressPlaceholder,
                  },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-space text-ink-40 text-[11px] tracking-[0.15em] uppercase block mb-2">
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
                        className={`input-field w-full px-5 py-4 bg-transparent outline-none font-space text-ink text-[15px] rounded-none ${
                          focused === field.key
                            ? "border-brand-hairline"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <label className="font-space text-ink-40 text-[11px] tracking-[0.15em] uppercase block mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    placeholder={t.contact.messagePlaceholder}
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
                    className={`input-field w-full px-5 py-4 bg-transparent outline-none resize-none font-space text-ink text-[15px] rounded-none ${
                      focused === "message"
                        ? "border-brand-hairline"
                        : ""
                    }`}
                  />
                </div>

                {error && (
                  <p className="font-space text-error text-[13px]">
                    {t.contact.errors[error]}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  slideOnHover
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.send}
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <motion.div
                className="flex flex-col items-center justify-center h-80 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-brand-fill flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <span className="text-on-brand text-[28px]">✓</span>
                </motion.div>
                <div className="font-bebas text-ink text-[40px] mb-2">
                  {t.contact.sentHeading}
                </div>
                <p className="font-space text-ink-40 text-[14px] leading-[1.7]">
                  {t.contact.sentBody}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
