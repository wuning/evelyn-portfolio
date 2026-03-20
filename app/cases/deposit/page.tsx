"use client"

import { CaseLayout } from "@/components/sections/CaseLayout"
import { CaseScene } from "@/components/sections/CaseScene"
import { SectionReveal } from "@/components/animations/SectionReveal"
import { BalanceScale } from "@/components/interactive/BalanceScale"
import { useI18n } from "@/lib/i18n"

function PrincipleCard({
  number,
  title,
  body,
  imgSrc,
  imgAlt,
  caption,
  insight,
}: {
  number: string
  title: string
  body: string
  imgSrc: string
  imgAlt: string
  caption: string
  insight?: string
}) {
  return (
    <SectionReveal>
      <div className="mb-12">
        <div className="flex items-baseline gap-3 mb-4">
          <span
            className="text-[13px] font-medium text-[var(--accent-brass)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {number}
          </span>
          <h4
            className="text-[18px] text-[var(--text-primary)]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </h4>
        </div>
        <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] mb-6">
          {body}
        </p>
        <div className="rounded-[12px] overflow-hidden border border-[var(--border-subtle)] mb-3">
          <img src={imgSrc} alt={imgAlt} className="w-full h-auto" />
        </div>
        <p className="text-[12px] text-[var(--text-muted)] italic text-center mb-4">
          {caption}
        </p>
        {insight && (
          <p
            className="text-center text-[14px] text-[var(--accent-brass)]"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            {insight}
          </p>
        )}
      </div>
    </SectionReveal>
  )
}

export default function DepositPage() {
  const { t } = useI18n()

  return (
    <CaseLayout
      label={t("dp.label")}
      title={t("dp.title")}
      subtitle={t("dp.subtitle")}
      role={t("dp.role")}
      team={t("dp.team")}
      duration={t("dp.duration")}
      metrics={[
        { label: t("dp.m.reframe"), value: "✓" },
        { label: t("dp.m.architecture"), value: "✓" },
        { label: t("dp.m.data"), value: "∅", positive: false },
      ]}
    >
      {/* Section 2 — The Brief */}
      <CaseScene
        label={t("dp.brief.label")}
        title={t("dp.brief.title")}
        description={t("dp.brief.desc")}
        bg="surface"
      >
        <SectionReveal>
          <div
            className="rounded-[12px] border-l-4 bg-[var(--bg-primary)] p-6"
            style={{ borderLeftColor: "var(--accent-brass)" }}
          >
            <p
              className="text-[16px] leading-relaxed text-[var(--text-primary)]"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              &ldquo;{t("dp.brief.quote")}&rdquo;
            </p>
            <p className="text-[12px] text-[var(--text-muted)] mt-3">— Product Brief</p>
          </div>
        </SectionReveal>
      </CaseScene>

      {/* Section 3 — The Real Problem */}
      <CaseScene
        label={t("dp.problem.label")}
        title={t("dp.problem.title")}
        description={t("dp.problem.desc")}
        bg="dark"
      >
        <SectionReveal>
          <div className="space-y-3 mb-8">
            {[t("dp.problem.p1"), t("dp.problem.p2"), t("dp.problem.p3")].map(
              (point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-[#A8A29E]"
                >
                  <span className="text-[var(--accent-deep)] mt-0.5 shrink-0">!</span>
                  {point}
                </div>
              )
            )}
          </div>
        </SectionReveal>

        {/* Error propagation diagram */}
        <SectionReveal delay={0.1}>
          <div className="rounded-[12px] overflow-hidden bg-white mb-6">
            <img
              src="/images/deposit/error-propagation.png"
              alt="Error propagation: from misunderstanding to irreversible consequence"
              className="w-full h-auto"
            />
          </div>
        </SectionReveal>

        {/* Key callout */}
        <SectionReveal delay={0.2}>
          <div className="rounded-[12px] bg-[var(--bg-dark-surface)] p-6">
            <p
              className="text-[15px] leading-relaxed text-[var(--bg-primary)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("dp.problem.callout")}
            </p>
            <p className="text-[14px] text-[#A8A29E] mt-4 leading-relaxed">
              {t("dp.problem.reframe")}
            </p>
          </div>
        </SectionReveal>
      </CaseScene>

      {/* Section 4 — v0 Design */}
      <CaseScene
        label={t("dp.v0.label")}
        title={t("dp.v0.title")}
        tag={t("dp.v0.tag")}
        description={t("dp.v0.desc")}
        bg="surface"
      >
        <SectionReveal>
          <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6 mb-6">
            <p className="text-[14px] text-[var(--text-primary)] mb-3 font-medium">
              {t("dp.v0.design")}
            </p>
            <p className="text-[13px] text-[var(--text-secondary)] italic">
              {t("dp.v0.assumption")}
            </p>
          </div>
        </SectionReveal>

        {/* Why I killed v0 */}
        <SectionReveal delay={0.1}>
          <h4
            className="text-[16px] text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("dp.v0.flaw.title")}
          </h4>
          <p className="text-[15px] text-[var(--text-secondary)] mb-4">
            {t("dp.v0.flaw.body")}
          </p>
          <div className="space-y-2 mb-6">
            {[t("dp.v0.flaw1"), t("dp.v0.flaw2"), t("dp.v0.flaw3"), t("dp.v0.flaw4")].map(
              (flaw, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-[14px] text-[var(--text-secondary)]"
                >
                  <span className="text-[var(--accent-brass)] shrink-0 mt-0.5">•</span>
                  {flaw}
                </div>
              )
            )}
          </div>
        </SectionReveal>

        {/* Core insight */}
        <SectionReveal delay={0.2}>
          <div
            className="rounded-[12px] border-l-4 bg-[var(--bg-primary)] p-6 mb-8"
            style={{ borderLeftColor: "var(--accent-brass)" }}
          >
            <p
              className="text-[15px] leading-relaxed text-[var(--text-primary)]"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              {t("dp.v0.flaw.insight")}
            </p>
          </div>
        </SectionReveal>

        {/* Reframing table */}
        <SectionReveal delay={0.3}>
          <div className="rounded-[12px] bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-6">
            <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--accent-brass)] mb-4">
              Problem Reframing
            </p>
            <div className="space-y-4">
              {[
                { before: t("dp.v0.table.before"), after: t("dp.v0.table.after") },
                { before: t("dp.v0.table.before2"), after: t("dp.v0.table.after2") },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center text-[14px]"
                >
                  <span className="text-[var(--text-muted)] line-through">{row.before}</span>
                  <span className="text-[var(--accent-brass)]">→</span>
                  <span className="text-[var(--text-primary)]">{row.after}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </CaseScene>

      {/* Section 5 — Final Design: 3 Principles */}
      <CaseScene
        label={t("dp.final.label")}
        title={t("dp.final.title")}
        description={t("dp.final.desc")}
        bg="light"
      >
        <PrincipleCard
          number="01"
          title={t("dp.final.p1.title")}
          body={t("dp.final.p1.body")}
          imgSrc="/images/deposit/wallet-entry-comparison.png"
          imgAlt="v0 vs Final wallet entry — avoiding visual recommendation"
          caption={t("dp.final.p1.caption")}
        />
        <PrincipleCard
          number="02"
          title={t("dp.final.p2.title")}
          body={t("dp.final.p2.body")}
          imgSrc="/images/deposit/token-list.png"
          imgAlt="Token list — concrete options instead of abstract question"
          caption={t("dp.final.p2.title")}
          insight={t("dp.final.p2.insight")}
        />
        <PrincipleCard
          number="03"
          title={t("dp.final.p3.title")}
          body={t("dp.final.p3.body")}
          imgSrc="/images/deposit/reversibility-flow.png"
          imgAlt="Three-screen flow: reversible → user control → irreversible"
          caption={t("dp.final.p3.caption")}
        />
      </CaseScene>

      {/* Section 6 — Architecture Comparison */}
      <CaseScene
        label={t("dp.arch.label")}
        title={t("dp.arch.title")}
        description={t("dp.arch.desc")}
        bg="dark"
      >
        <SectionReveal>
          <div className="mb-10">
            <BalanceScale
              leftLabel="轉化效率"
              rightLabel="決策安全"
              leftItems={["問題分流", "快速完成", "預測式推薦"]}
              rightItems={["並列選項", "狀態揭露", "延遲承諾"]}
              leftMetric="Faster conversion"
              rightMetric="Safer decisions"
              evelynChoice={70}
            />
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="rounded-[12px] overflow-hidden bg-white mb-6">
            <img
              src="/images/deposit/v0-vs-final-architecture.png"
              alt="v0 high-risk architecture vs Final safe buffer zone architecture"
              className="w-full h-auto"
            />
          </div>
          <div className="flex justify-between text-[11px] text-[#78716C] italic px-1 mb-8">
            <span>{t("dp.arch.v0")}</span>
            <span>{t("dp.arch.final")}</span>
          </div>
        </SectionReveal>

        {/* Decision matrix */}
        <SectionReveal delay={0.1}>
          <div className="rounded-[12px] overflow-hidden bg-white mb-4">
            <img
              src="/images/deposit/decision-matrix.png"
              alt="Designer's decision matrix: conversion efficiency vs decision safety"
              className="w-full h-auto"
            />
          </div>
          <p className="text-[12px] text-[#78716C] italic text-center mb-6">
            {t("dp.final.p1.title")}
          </p>
        </SectionReveal>

        {/* Responsibility boundary */}
        <SectionReveal delay={0.2}>
          <div className="rounded-[12px] overflow-hidden mb-4">
            <img
              src="/images/deposit/responsibility-boundary.png"
              alt="Design responsibility boundary: acceptable friction vs unacceptable consequences"
              className="w-full h-auto"
            />
          </div>
        </SectionReveal>
      </CaseScene>

      {/* Section 7 — Honest Disclosure */}
      <CaseScene
        label={t("dp.honest.label")}
        title={t("dp.honest.title")}
        bg="surface"
      >
        <SectionReveal>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] mb-8">
            {t("dp.honest.body")}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6">
              <p className="mb-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--accent-brass)]">
                {t("dp.honest.what")}
              </p>
              <ul className="space-y-2 text-[14px] text-[var(--text-secondary)]">
                <li>✓ {t("dp.honest.w1")}</li>
                <li>✓ {t("dp.honest.w2")}</li>
                <li>✓ {t("dp.honest.w3")}</li>
              </ul>
            </div>
            <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6">
              <p className="mb-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)]">
                {t("dp.m.data")}
              </p>
              <ul className="space-y-2 text-[14px] text-[var(--text-secondary)]">
                <li>✗ No production conversion rate data</li>
                <li>✗ No support ticket before/after</li>
                <li>→ Architecture logic adopted in subsequent versions</li>
              </ul>
            </div>
          </div>
        </SectionReveal>
      </CaseScene>

      {/* Section 8 — Reflections */}
      <CaseScene
        label={t("dp.reflect.label")}
        title={t("dp.reflect.title")}
        bg="light"
      >
        <div className="space-y-4">
          {[
            { title: t("dp.reflect.1.title"), body: t("dp.reflect.1.body") },
            { title: t("dp.reflect.2.title"), body: t("dp.reflect.2.body") },
            { title: t("dp.reflect.3.title"), body: t("dp.reflect.3.body") },
          ].map((card, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
                <div className="flex items-start gap-4">
                  <span
                    className="text-[13px] font-medium text-[var(--accent-brass)] mt-0.5 shrink-0"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h4
                      className="text-[16px] mb-3 text-[var(--text-primary)]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {card.title}
                    </h4>
                    <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
                      {card.body}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </CaseScene>
    </CaseLayout>
  )
}
