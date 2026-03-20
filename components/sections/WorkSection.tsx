"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const cases = [
  {
    tag: "BITODEBT · FINTECH",
    saw: "I saw: my blind spot",
    title: "From experiment\nto market leader",
    description:
      "My assumption hurt users. I caught it same-day — then grew the product to market leader.",
    metrics: [
      { label: "CONVERSION", value: "+34%" },
      { label: "TRADING VOL.", value: "+57%" },
    ],
    href: "/cases/bitodebt",
    featured: true,
  },
  {
    tag: "TT WALLET · DEPOSIT",
    saw: "I saw: past the brief",
    title: "Reveal before\nthey commit",
    description:
      "They asked for an entry point. I redesigned the entire flow.",
    metrics: [{ label: "SUPPORT TICKETS", value: "−23%" }],
    href: "/cases/deposit",
    featured: false,
  },
  {
    tag: "TT WALLET · REFERRAL",
    saw: "I saw: the timing",
    title: "Honest over\noptimised",
    description:
      "Right judgment, wrong timing. I learned when to push and when to wait.",
    metrics: [{ label: "MAU", value: "+20%" }],
    href: "/cases/referral",
    featured: false,
  },
  {
    tag: "THUNDERCORE · BRIDGE",
    saw: "I saw: the room",
    title: "When smooth\nis dangerous",
    description:
      "I paused the project to align the team first — redefining good UX for irreversible flows.",
    metrics: [{ label: "UX STANDARD", value: "Redefined" }],
    href: "/cases/bridge",
    featured: false,
  },
]

function CaseRow({
  caseItem,
  index,
}: {
  caseItem: (typeof cases)[0]
  index: number
}) {
  const imageLeft = index % 2 !== 0

  const contentBlock = (
    <div
      className={`flex flex-col justify-center p-8 md:p-12 ${
        caseItem.featured
          ? "bg-[var(--bg-dark)] text-[var(--bg-primary)] rounded-[12px]"
          : "bg-[var(--bg-surface)] rounded-[12px]"
      }`}
    >
      <p
        className="text-[11px] font-medium tracking-[0.15em] uppercase mb-2"
        style={{ color: "var(--accent-brass)" }}
      >
        {caseItem.tag}
      </p>
      <p
        className={`text-[13px] mb-4 ${
          caseItem.featured
            ? "text-[var(--accent-deep)]"
            : "text-[var(--accent-brass)]"
        }`}
        style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
      >
        {caseItem.saw}
      </p>
      <h3
        className={`text-[24px] md:text-[28px] leading-tight mb-4 whitespace-pre-line ${
          caseItem.featured ? "text-[var(--bg-primary)]" : "text-[var(--text-primary)]"
        }`}
        style={{ fontFamily: "Georgia, serif" }}
      >
        {caseItem.title}
      </h3>
      <p
        className={`text-[14px] leading-relaxed mb-6 ${
          caseItem.featured ? "text-[#A8A29E]" : "text-[var(--text-secondary)]"
        }`}
      >
        {caseItem.description}
      </p>
      <div className="flex flex-wrap gap-8">
        {caseItem.metrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-0.5">
            <span
              className="text-[20px] font-light tracking-tight"
              style={{
                fontFamily: "Georgia, serif",
                color: caseItem.featured
                  ? "var(--accent-deep)"
                  : "var(--accent-brass)",
              }}
            >
              {m.value}
            </span>
            <span
              className={`text-[10px] tracking-[0.1em] uppercase ${
                caseItem.featured ? "text-[#78716C]" : "text-[var(--text-muted)]"
              }`}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  const imageBlock = (
    <div
      className={`flex items-center justify-center rounded-[12px] min-h-[280px] md:min-h-full ${
        caseItem.featured ? "bg-[var(--bg-dark-surface)]" : "bg-[var(--bg-surface)]"
      }`}
    >
      <span className="text-[var(--text-muted)] text-[13px]">
        [ {caseItem.tag.split(" · ")[0]} Preview ]
      </span>
    </div>
  )

  return (
    <SectionReveal delay={index * 0.1}>
      <motion.a
        href={caseItem.href}
        className="group block"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[12px] overflow-hidden border border-[var(--border-subtle)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
          {imageLeft ? (
            <>
              {imageBlock}
              {contentBlock}
            </>
          ) : (
            <>
              {contentBlock}
              {imageBlock}
            </>
          )}
        </div>
        <div className="flex items-center gap-1 mt-3 text-[var(--accent-brass)] text-[13px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Read case study</span>
          <ArrowUpRight size={14} />
        </div>
      </motion.a>
    </SectionReveal>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="py-[var(--space-2xl)] px-6 md:px-[120px]">
      <div className="mx-auto max-w-[1200px] space-y-6">
        {cases.map((caseItem, i) => (
          <CaseRow key={caseItem.tag} caseItem={caseItem} index={i} />
        ))}
      </div>
    </section>
  )
}
