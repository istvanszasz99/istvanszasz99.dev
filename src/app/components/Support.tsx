import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Coffee } from "lucide-react";
import { Button } from "./Button";
import { useLanguage } from "../i18n/LanguageContext";

const REVOLUT_URL = "https://revolut.me/istvanszasz99";

// Revolut mark (Simple Icons, CC0), shown as an app-icon tile in the button's inverted colors.
const REVOLUT_MARK =
  "M20.9133 6.9566C20.9133 3.1208 17.7898 0 13.9503 0H2.424v3.8605h10.9782c1.7376 0 3.177 1.3651 3.2087 3.043.016.84-.2994 1.633-.8878 2.2324-.5886.5998-1.375.9303-2.2144.9303H9.2322a.2756.2756 0 0 0-.2755.2752v3.431c0 .0585.018.1142.052.1612L16.2646 24h5.3114l-7.2727-10.094c3.6625-.1838 6.61-3.2612 6.61-6.9494zM6.8943 5.9229H2.424V24h4.4704z";

// QR code for REVOLUT_URL (29×29 modules, error correction M).
const QR_PATH =
  "M0 0.5h7m1 0h4m1 0h3m3 0h2m1 0h7M0 1.5h1m5 0h1m1 0h2m1 0h3m2 0h1m1 0h1m1 0h1m1 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m2 0h2m5 0h1m2 0h2m1 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m1 0h1m1 0h3m1 0h2m1 0h1m2 0h1m1 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m3 0h1m1 0h1m1 0h1m1 0h2m1 0h1m2 0h1m1 0h3m1 0h1M0 5.5h1m5 0h1m2 0h3m1 0h1m1 0h2m2 0h2m1 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M8 7.5h1m1 0h1m1 0h1m2 0h6M0 8.5h1m1 0h2m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h4m1 0h1m2 0h1m1 0h2M7 9.5h2m1 0h2m1 0h3m1 0h8m3 0h1M0 10.5h4m1 0h2m4 0h3m2 0h1m1 0h1m2 0h2m1 0h1m1 0h2M0 11.5h5m2 0h3m1 0h1m4 0h1m2 0h1m2 0h3m3 0h1M0 12.5h2m1 0h2m1 0h3m1 0h1m3 0h2m1 0h1m1 0h1m5 0h2M0 13.5h1m1 0h1m1 0h1m4 0h3m2 0h1m1 0h4m1 0h2m3 0h3M1 14.5h2m1 0h1m1 0h3m1 0h1m2 0h1m1 0h3m1 0h4m1 0h1m1 0h3M0 15.5h1m4 0h1m1 0h1m6 0h1m1 0h1m2 0h2m2 0h2m2 0h1M0 16.5h3m2 0h3m1 0h1m1 0h2m1 0h2m2 0h4m2 0h2m1 0h1M1 17.5h1m5 0h1m3 0h1m2 0h1m1 0h3m2 0h1m1 0h1m1 0h3M0 18.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h6m1 0h1m2 0h2m1 0h1M3 19.5h3m3 0h1m3 0h2m2 0h1m8 0h1M1 20.5h1m1 0h1m1 0h4m2 0h5m1 0h10M8 21.5h2m1 0h2m5 0h1m1 0h1m3 0h5M0 22.5h7m1 0h1m1 0h2m2 0h1m1 0h2m1 0h2m1 0h1m1 0h2m1 0h1M0 23.5h1m5 0h1m1 0h2m3 0h2m1 0h1m1 0h1m1 0h1m3 0h2m2 0h1M0 24.5h1m1 0h3m1 0h1m4 0h1m4 0h2m2 0h5m1 0h2M0 25.5h1m1 0h3m1 0h1m1 0h4m1 0h1m1 0h1m1 0h4m2 0h3m2 0h1M0 26.5h1m1 0h3m1 0h1m1 0h1m3 0h3m1 0h2m2 0h1m2 0h1m2 0h1m1 0h1M0 27.5h1m5 0h1m3 0h1m3 0h1m5 0h1m1 0h1m2 0h1m1 0h1M0 28.5h7m1 0h1m1 0h2m1 0h4m1 0h3m1 0h2m1 0h1m1 0h1";

export function Support() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <section
      id="support"
      ref={sectionRef}
      aria-label={t.support.ariaLabel}
      className="relative bg-canvas py-5 overflow-hidden"
    >
      <div className="max-w-7xl w-11/12 tablet:w-5/6 desktop:w-3/4 wide-screen:max-w-450 mx-auto">
        <motion.div
          className="flex flex-col items-center gap-6 text-center tablet:flex-row tablet:justify-between tablet:gap-10 tablet:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Text and button */}
          <div className="max-w-xl">
            <div className="flex items-center justify-center gap-3 mb-3 tablet:justify-start">
              <Coffee size={16} className="text-brand-ink" aria-hidden="true" />
              <span className="font-space text-ink-50 text-[11px] tracking-[0.2em] uppercase">
                {t.support.label}
              </span>
            </div>
            <h2 className="font-bebas text-ink text-[clamp(36px,4vw,52px)] leading-[0.95] tracking-[-0.01em] mb-3">
              {t.support.headingWhite}{" "}
              <span className="text-brand-ink">{t.support.headingAccent}</span>
            </h2>
            <p className="font-space text-ink-50 text-[15px] leading-[1.7] mb-5">
              {t.support.body}
            </p>
            <Button
              href={REVOLUT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2">
                {t.support.button}
                <span
                  className="flex size-[18px] shrink-0 items-center justify-center rounded-[5px] bg-on-brand text-ink"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" width={10} height={10} fill="currentColor">
                    <path d={REVOLUT_MARK} />
                  </svg>
                </span>
              </span>
            </Button>
          </div>

          {/* QR code: always black on white, so it scans in both themes */}
          <figure className="flex flex-col items-center gap-2 shrink-0">
            <div className="rounded-lg bg-white p-2">
              <svg
                viewBox="0 0 29 29"
                shapeRendering="crispEdges"
                className="block w-28 h-28 laptop:w-32 laptop:h-32"
                role="img"
                aria-label={t.support.qrAlt}
              >
                <path stroke="#000" d={QR_PATH} />
              </svg>
            </div>
            <figcaption className="font-space text-ink-50 text-[12px] tracking-[0.02em] max-w-48 text-center">
              {t.support.qrCaption}
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
