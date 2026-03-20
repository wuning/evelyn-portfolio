"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { useI18n } from "@/lib/i18n"

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section id="about" className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1200px] text-center">
        <SectionReveal>
          <blockquote
            className="text-[20px] md:text-[24px] leading-relaxed text-[var(--text-primary)] max-w-[640px] mx-auto mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("about.quote1")}
            <br />
            {t("about.quote2")}
            <br />
            <strong>{t("about.quote3")}</strong>
          </blockquote>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-[var(--text-secondary)] text-[14px] mb-6">
            {t("about.bio")}
          </p>
          <a
            href="/about"
            className="text-[var(--accent-brass)] text-[14px] font-medium hover:underline transition-colors duration-150"
          >
            {t("about.more")}
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}
