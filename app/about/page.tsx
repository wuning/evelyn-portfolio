"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { useI18n } from "@/lib/i18n"
import { ArrowLeft } from "lucide-react"

function TrailMarker({ label, position }: { label: string; position: string }) {
  return (
    <div className={`absolute ${position} flex items-center gap-2`}>
      <div className="w-2 h-2 rounded-full bg-[var(--accent-brass)]" />
      <span className="text-[11px] text-[var(--accent-brass)] font-medium whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

function PhilosophyPillar({
  number,
  title,
  body,
  delay,
}: {
  number: string
  title: string
  body: string
  delay: number
}) {
  return (
    <SectionReveal delay={delay}>
      <div className="bg-[var(--bg-dark-surface)] rounded-[12px] p-6 h-full">
        <span
          className="text-[12px] font-medium tracking-[0.1em] block mb-3"
          style={{ color: "var(--accent-deep)" }}
        >
          {number}
        </span>
        <h3
          className="text-[20px] mb-3 text-[var(--bg-primary)]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed text-[#A8A29E]">{body}</p>
      </div>
    </SectionReveal>
  )
}

function JourneyStep({
  number,
  title,
  body,
  delay,
}: {
  number: string
  title: string
  body: string
  delay: number
}) {
  return (
    <SectionReveal delay={delay}>
      <div className="flex gap-5">
        <div className="flex flex-col items-center shrink-0">
          <div
            className="w-8 h-8 rounded-full border-2 border-[var(--accent-brass)] flex items-center justify-center text-[12px] font-medium text-[var(--accent-brass)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {number}
          </div>
          <div className="w-px flex-1 bg-[var(--border-subtle)] mt-2" />
        </div>
        <div className="pb-8">
          <h4
            className="text-[16px] text-[var(--text-primary)] mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </h4>
          <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
            {body}
          </p>
        </div>
      </div>
    </SectionReveal>
  )
}

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[800px]">
          <SectionReveal>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-[13px] text-[var(--text-muted)] hover:text-[var(--accent-brass)] transition-colors duration-150 mb-12"
            >
              <ArrowLeft size={14} />
              {t("case.back")}
            </a>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <p className="section-label mb-4">{t("about.page.label")}</p>
            <h1
              className="text-[32px] md:text-[42px] mb-6 text-[var(--text-primary)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("about.page.title")}
            </h1>
            <p className="text-[18px] leading-relaxed text-[var(--text-secondary)] max-w-[640px]">
              {t("about.page.subtitle")}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Climbing Metaphor — Visual Trail */}
      <section className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[800px]">
          <SectionReveal>
            <p className="section-label mb-4">{t("about.climb.label")}</p>
            <h2
              className="mb-8 text-[var(--text-primary)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("about.climb.title")}
            </h2>
          </SectionReveal>

          {/* Abstract trail visualization */}
          <SectionReveal delay={0.1}>
            <div className="relative rounded-[16px] bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-8 md:p-12 mb-8 overflow-hidden">
              {/* SVG trail path */}
              <svg
                viewBox="0 0 600 200"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Trail path */}
                <path
                  d="M 30 170 Q 100 170 140 140 Q 180 110 200 120 Q 230 135 260 100 Q 290 65 340 80 Q 380 92 400 60 Q 430 25 480 40 Q 530 55 570 30"
                  stroke="var(--accent-brass)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity="0.6"
                />
                {/* Markers */}
                <circle cx="140" cy="140" r="4" fill="var(--accent-brass)" opacity="0.8" />
                <circle cx="260" cy="100" r="4" fill="var(--accent-brass)" opacity="0.8" />
                <circle cx="400" cy="60" r="4" fill="var(--accent-brass)" opacity="0.8" />
                <circle cx="570" cy="30" r="6" fill="var(--accent-brass)" />
                {/* Labels */}
                <text x="120" y="162" fill="var(--accent-brass)" fontSize="11" fontFamily="Inter, sans-serif">
                  {t("about.climb.steep")}
                </text>
                <text x="240" y="122" fill="var(--accent-brass)" fontSize="11" fontFamily="Inter, sans-serif">
                  {t("about.climb.rest")}
                </text>
                <text x="370" y="82" fill="var(--accent-brass)" fontSize="11" fontFamily="Inter, sans-serif">
                  {t("about.climb.retreat")}
                </text>
                <text x="548" y="54" fill="var(--accent-brass)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">
                  {t("about.climb.summit")}
                </text>
                {/* Walker */}
                <circle cx="30" cy="170" r="5" fill="var(--text-primary)" />
              </svg>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="space-y-4">
              <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {t("about.climb.p1")}
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {t("about.climb.p2")}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Philosophy — Explore, Decide, Own */}
      <section className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-dark)]">
        <div className="mx-auto max-w-[800px]">
          <SectionReveal>
            <p className="section-label mb-4" style={{ color: "var(--accent-deep)" }}>
              {t("about.phil.label")}
            </p>
            <h2
              className="mb-12 text-[var(--bg-primary)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("about.phil.title")}
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PhilosophyPillar
              number="01"
              title={t("about.explore.title")}
              body={t("about.explore.body")}
              delay={0.1}
            />
            <PhilosophyPillar
              number="02"
              title={t("about.decide.title")}
              body={t("about.decide.body")}
              delay={0.2}
            />
            <PhilosophyPillar
              number="03"
              title={t("about.own.title")}
              body={t("about.own.body")}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* How I Use AI */}
      <section className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[800px]">
          <SectionReveal>
            <p className="section-label mb-4">{t("about.ai.label")}</p>
            <h2
              className="mb-4 text-[var(--text-primary)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("about.ai.title")}
            </h2>
            <p
              className="text-[16px] leading-relaxed text-[var(--text-secondary)] mb-10"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              {t("about.ai.body")}
            </p>
          </SectionReveal>

          <div className="space-y-3">
            {[
              { text: t("about.ai.1"), isLast: false },
              { text: t("about.ai.2"), isLast: false },
              { text: t("about.ai.3"), isLast: false },
              { text: t("about.ai.4"), isLast: true },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div
                  className={`flex items-start gap-4 rounded-[12px] border p-5 ${
                    item.isLast
                      ? "border-[var(--accent-brass)] bg-[var(--bg-primary)]"
                      : "border-[var(--border-subtle)] bg-[var(--bg-primary)]"
                  }`}
                >
                  <span
                    className={`text-[13px] font-medium mt-0.5 shrink-0 ${
                      item.isLast ? "text-[var(--accent-brass)]" : "text-[var(--text-muted)]"
                    }`}
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.isLast ? "→" : `0${i + 1}`}
                  </span>
                  <p
                    className={`text-[15px] ${
                      item.isLast
                        ? "text-[var(--text-primary)] font-medium"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-[800px]">
          <SectionReveal>
            <p className="section-label mb-4">{t("about.journey.label")}</p>
            <h2
              className="mb-12 text-[var(--text-primary)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("about.journey.title")}
            </h2>
          </SectionReveal>

          <div>
            <JourneyStep
              number="1"
              title={t("about.journey.1.title")}
              body={t("about.journey.1.body")}
              delay={0.1}
            />
            <JourneyStep
              number="2"
              title={t("about.journey.2.title")}
              body={t("about.journey.2.body")}
              delay={0.15}
            />
            <JourneyStep
              number="3"
              title={t("about.journey.3.title")}
              body={t("about.journey.3.body")}
              delay={0.2}
            />
            <JourneyStep
              number="4"
              title={t("about.journey.4.title")}
              body={t("about.journey.4.body")}
              delay={0.25}
            />
          </div>
        </div>
      </section>

      {/* Closing + CTA */}
      <section className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-dark)]">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionReveal>
            <p
              className="text-[20px] md:text-[24px] leading-relaxed text-[#A8A29E] mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("about.closing")}
            </p>
            <p
              className="text-[24px] md:text-[32px] text-[var(--accent-deep)] mb-12"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("about.closing.slogan")}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#work"
                className="rounded-[8px] bg-[var(--accent-brass)] px-6 py-3 text-[14px] font-medium text-white transition-colors duration-150 hover:bg-[var(--accent-brass-hover)]"
              >
                {t("about.cta.work")}
              </a>
              <a
                href="mailto:evelynwu.design@gmail.com"
                className="rounded-[8px] border border-[var(--accent-deep)] px-6 py-3 text-[14px] font-medium text-[var(--accent-deep)] transition-all duration-150 hover:bg-[var(--accent-deep)] hover:text-[var(--bg-dark)]"
              >
                {t("about.cta.contact")}
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
