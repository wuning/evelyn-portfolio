"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { useI18n } from "@/lib/i18n"

export function ClosingSection() {
  const { t } = useI18n()

  return (
    <section className="py-[var(--space-section)] px-6 md:px-[120px]">
      <div className="mx-auto max-w-[1200px] text-center">
        <SectionReveal>
          <p
            className="text-[20px] md:text-[24px] leading-relaxed text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("closing.line1")}
            <br />
            {t("closing.line2")}
          </p>
          <p
            className="text-[24px] md:text-[32px] text-[var(--accent-brass)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("closing.slogan")}
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
