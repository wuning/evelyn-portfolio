"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

function useCases() {
  const { t } = useI18n()
  return [
    {
      tag: t("case.bitodebt.tag"),
      saw: t("case.bitodebt.saw"),
      title: t("case.bitodebt.title"),
      description: t("case.bitodebt.desc"),
      metrics: [
        { label: t("case.conversion"), value: "+34%" },
        { label: t("case.trading"), value: "+57%" },
      ],
      href: "/cases/bitodebt",
      featured: true,
      interactive: true,
    },
    {
      tag: t("case.deposit.tag"),
      saw: t("case.deposit.saw"),
      title: t("case.deposit.title"),
      description: t("case.deposit.desc"),
      metrics: [{ label: t("case.support"), value: "−23%" }],
      href: "/cases/deposit",
      featured: false,
      interactive: true,
    },
    {
      tag: t("case.referral.tag"),
      saw: t("case.referral.saw"),
      title: t("case.referral.title"),
      description: t("case.referral.desc"),
      metrics: [{ label: t("case.mau"), value: "+20%" }],
      href: "/cases/referral",
      featured: false,
    },
    {
      tag: t("case.bridge.tag"),
      saw: t("case.bridge.saw"),
      title: t("case.bridge.title"),
      description: t("case.bridge.desc"),
      metrics: [{ label: t("case.ux"), value: "Redefined" }],
      href: "/cases/bridge",
      featured: false,
    },
  ]
}

function CaseRow({
  caseItem,
  index,
}: {
  caseItem: ReturnType<typeof useCases>[0]
  index: number
}) {
  const { t } = useI18n()
  const imageLeft = index % 2 !== 0

  const contentBlock = (
    <div
      className={`flex flex-col justify-center p-8 md:p-12 ${
        caseItem.featured
          ? "bg-[var(--bg-dark)] text-[var(--bg-primary)] rounded-[12px]"
          : "bg-[var(--bg-surface)] rounded-[12px]"
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <p
          className="text-[11px] font-medium tracking-[0.15em] uppercase"
          style={{ color: "var(--accent-brass)" }}
        >
          {caseItem.tag}
        </p>
        {caseItem.interactive && (
          <span className="text-[10px] tracking-[0.08em] uppercase text-[var(--accent-brass)] border border-[var(--accent-brass)] rounded-full px-2 py-0.5 leading-none">
            Interactive Case Study
          </span>
        )}
      </div>
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
          <span>{t("case.read")}</span>
          <ArrowUpRight size={14} />
        </div>
      </motion.a>
    </SectionReveal>
  )
}

export function WorkSection() {
  const cases = useCases()

  return (
    <section id="work" className="py-[var(--space-2xl)] px-6 md:px-[120px]">
      <div className="mx-auto max-w-[1200px] space-y-6">
        {cases.map((caseItem, i) => (
          <CaseRow key={i} caseItem={caseItem} index={i} />
        ))}
      </div>
    </section>
  )
}
