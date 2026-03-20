"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"

export function ClosingSection() {
  return (
    <section className="py-[var(--space-section)] px-6 md:px-[120px]">
      <div className="mx-auto max-w-[1200px] text-center">
        <SectionReveal>
          <p
            className="text-[20px] md:text-[24px] leading-relaxed text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            &ldquo;My name is Evelyn,
            <br />
            and this is how I see design &mdash;&rdquo;
          </p>
          <p
            className="text-[24px] md:text-[32px] text-[var(--accent-brass)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            See the risk before the click.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
