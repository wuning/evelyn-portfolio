"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { useI18n } from "@/lib/i18n"

export function PhilosophySection() {
  const { t } = useI18n()

  const pillars = [
    { number: "01", title: t("phil.01.title"), sub: t("phil.01.sub") },
    { number: "02", title: t("phil.02.title"), sub: t("phil.02.sub") },
    { number: "03", title: t("phil.03.title"), sub: t("phil.03.sub") },
    { number: "04", title: t("phil.04.title"), sub: t("phil.04.sub") },
  ]

  return (
    <section className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-dark)]">
      <div className="mx-auto max-w-[1200px]">
        <SectionReveal>
          <p className="section-label mb-4" style={{ color: "var(--accent-deep)" }}>
            {t("phil.label")}
          </p>
          <h2
            className="mb-16 max-w-[500px] text-[var(--bg-primary)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("phil.headline1")}
            <br />
            {t("phil.headline2")}
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.number} delay={i * 0.1}>
              <div className="bg-[var(--bg-dark-surface)] rounded-[12px] p-6 h-full">
                <span
                  className="text-[12px] font-medium tracking-[0.1em] block mb-3"
                  style={{ color: "var(--accent-deep)" }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="text-[18px] mb-2 text-[var(--bg-primary)]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-[13px] text-[#78716C]">{pillar.sub}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
