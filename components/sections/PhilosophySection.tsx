"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"

const pillars = [
  { number: "01", title: "Blind Spot", sub: "BitoDebt — Self-correction" },
  { number: "02", title: "Past the Brief", sub: "Deposit — Analytical refusal" },
  { number: "03", title: "The Timing", sub: "Referral — Strategic patience" },
  { number: "04", title: "The Room", sub: "Bridge — Organizational diagnosis" },
]

export function PhilosophySection() {
  return (
    <section className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-dark)]">
      <div className="mx-auto max-w-[1200px]">
        <SectionReveal>
          <p className="section-label mb-4" style={{ color: "var(--accent-deep)" }}>
            Four Ways of Seeing
          </p>
          <h2
            className="mb-16 max-w-[500px] text-[var(--bg-primary)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Each time, seeing at
            <br />a wider aperture.
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
