"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"

export function AboutSection() {
  return (
    <section id="about" className="py-[var(--space-section)] px-6 md:px-[120px] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1200px] text-center">
        <SectionReveal>
          <blockquote
            className="text-[20px] md:text-[24px] leading-relaxed text-[var(--text-primary)] max-w-[640px] mx-auto mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            &ldquo;In an age where AI can draw any interface,
            <br />
            I do what AI cannot &mdash;
            <br />
            <strong>judge which interface should exist.</strong>&rdquo;
          </blockquote>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-[var(--text-secondary)] text-[14px] mb-6">
            Evelyn Wu &middot; Senior Product Designer &middot; 5+ years fintech &amp; web3
          </p>
          <a
            href="#about-detail"
            className="text-[var(--accent-brass)] text-[14px] font-medium hover:underline transition-colors duration-150"
          >
            More about me &rarr;
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}
