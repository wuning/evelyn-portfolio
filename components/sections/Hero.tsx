"use client"

import { motion } from "framer-motion"
import { Counter } from "@/components/animations/Counter"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()

  const metrics = [
    { value: 10, suffix: "+", label: t("hero.metric.years") },
    { value: 4, suffix: "+", label: t("hero.metric.products") },
    { value: 34, suffix: "%", label: t("hero.metric.conversion") },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-[120px] pt-32 pb-20 md:pt-40 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="section-label mb-6"
        >
          {t("hero.label")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0, 0, 0.2, 1] }}
          className="mb-6 max-w-[700px]"
          style={{ fontFamily: "Georgia, 'Instrument Serif', serif" }}
        >
          {t("hero.headline1")}
          <br className="hidden md:block" />
          {t("hero.headline2")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0, 0, 0.2, 1] }}
          className="max-w-[520px] text-[var(--text-secondary)] text-[18px] leading-relaxed mb-4"
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0, 0, 0.2, 1] }}
          className="max-w-[520px] text-[var(--text-secondary)] text-[14px] leading-relaxed mb-10"
        >
          {t("hero.subtitle2")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0, 0, 0.2, 1] }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#work"
            className="rounded-[8px] bg-[var(--accent-brass)] px-6 py-3 text-[14px] font-medium text-white tracking-[0.02em] transition-all duration-200 hover:bg-[var(--accent-brass-hover)] hover:shadow-lg active:scale-[0.98]"
          >
            {t("hero.cta.work")}
          </a>
          <a
            href="#contact"
            className="rounded-[8px] border border-[var(--accent-brass)] bg-transparent px-6 py-3 text-[14px] font-medium text-[var(--accent-brass)] tracking-[0.02em] transition-all duration-200 hover:bg-[var(--accent-brass-dim)] active:scale-[0.98]"
          >
            {t("hero.cta.contact")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0, 0, 0.2, 1] }}
          className="flex flex-wrap gap-12 md:gap-16"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div
                className="text-[28px] font-light text-[var(--text-primary)] tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <Counter
                  value={metric.value}
                  suffix={metric.suffix}
                  duration={1500 + i * 150}
                />
              </div>
              <span className="text-[var(--text-muted)] text-[10px] font-medium tracking-[0.12em] uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
