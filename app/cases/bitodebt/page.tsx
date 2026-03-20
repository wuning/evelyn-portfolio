"use client"

import { CaseLayout } from "@/components/sections/CaseLayout"
import { CaseScene } from "@/components/sections/CaseScene"
import { DraggableTimeline } from "@/components/interactive/DraggableTimeline"
import { SectionReveal } from "@/components/animations/SectionReveal"
import { Counter } from "@/components/animations/Counter"
import { useI18n } from "@/lib/i18n"

function QuoteCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6">
      <p
        className="text-[15px] leading-relaxed text-[var(--text-primary)] mb-3"
        style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-[12px] text-[var(--text-muted)]">— {author}</p>
    </div>
  )
}

function OutcomeCard({
  result,
  insight,
  bg = "light",
}: {
  result: string
  insight: string
  bg?: "light" | "dark"
}) {
  const isDark = bg === "dark"
  return (
    <SectionReveal>
      <div
        className={`rounded-[12px] p-6 mt-8 border ${
          isDark
            ? "border-[var(--bg-dark-surface)] bg-[var(--bg-dark-surface)]"
            : "border-[var(--border-subtle)] bg-[var(--bg-surface)]"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p
              className="text-[10px] tracking-[0.1em] uppercase mb-2"
              style={{ color: "var(--accent-brass)" }}
            >
              Result
            </p>
            <p
              className={`text-[15px] leading-relaxed ${
                isDark ? "text-[var(--bg-primary)]" : "text-[var(--text-primary)]"
              }`}
            >
              {result}
            </p>
          </div>
          <div className="flex-1">
            <p
              className="text-[10px] tracking-[0.1em] uppercase mb-2"
              style={{ color: "var(--accent-brass)" }}
            >
              Insight
            </p>
            <p
              className={`text-[14px] leading-relaxed italic ${
                isDark ? "text-[#A8A29E]" : "text-[var(--text-secondary)]"
              }`}
              style={{ fontFamily: "Georgia, serif" }}
            >
              {insight}
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

export default function BitoDebtPage() {
  const { t } = useI18n()

  const timelineEvents = [
    {
      id: "mvp",
      time: t("bd.tl.phase1"),
      title: t("bd.tl.phase1.title"),
      detail: t("bd.tl.phase1.detail"),
      insight: t("bd.tl.phase1.insight"),
    },
    {
      id: "visual",
      time: t("bd.tl.phase2"),
      title: t("bd.tl.phase2.title"),
      detail: t("bd.tl.phase2.detail"),
      insight: t("bd.tl.phase2.insight"),
    },
    {
      id: "data",
      time: t("bd.tl.phase3"),
      title: t("bd.tl.phase3.title"),
      detail: t("bd.tl.phase3.detail"),
      insight: t("bd.tl.phase3.insight"),
    },
  ]

  return (
    <CaseLayout
      label={t("bd.label")}
      title={t("bd.title")}
      subtitle={t("bd.subtitle")}
      role={t("bd.role")}
      team={t("bd.team")}
      duration={t("bd.duration")}
      metrics={[
        { label: t("bd.m.conversion"), value: "+34%" },
        { label: t("bd.m.sellout"), value: "100%" },
        { label: t("bd.m.trading"), value: "+57%" },
        { label: t("bd.m.revenue"), value: "25%" },
      ]}
    >
      {/* Section 2 — Challenge */}
      <CaseScene
        label={t("bd.challenge.label")}
        title={t("bd.challenge.title")}
        description={t("bd.challenge.desc")}
        bg="surface"
      >
        <SectionReveal>
          <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] mb-8">
            {t("bd.challenge.body")}
          </p>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { quote: t("bd.quote.p8"), author: t("bd.quote.p8.author") },
            { quote: t("bd.quote.p9"), author: t("bd.quote.p9.author") },
            { quote: t("bd.quote.p7"), author: t("bd.quote.p7.author") },
          ].map((q, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <QuoteCard quote={q.quote} author={q.author} />
            </SectionReveal>
          ))}
        </div>
      </CaseScene>

      {/* Section 3 — Iteration 01: MVP */}
      <CaseScene
        label={t("bd.iter1.label")}
        title={t("bd.iter1.title")}
        tag={t("bd.iter1.tag")}
        description={t("bd.iter1.desc")}
        bg="dark"
      >
        <SectionReveal>
          <p className="text-[15px] leading-relaxed text-[#A8A29E] mb-6">
            {t("bd.iter1.body")}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="rounded-[12px] overflow-hidden mb-4">
            <img
              src="/images/bitodebt/mvp-wireframe.png"
              alt="MVP wireframe — subscription flow"
              className="w-full h-auto"
            />
          </div>
          <p className="text-[12px] text-[#78716C] italic text-center">
            {t("bd.iter1.caption")}
          </p>
        </SectionReveal>

        <OutcomeCard
          result={t("bd.iter1.result")}
          insight={t("bd.iter1.insight")}
          bg="dark"
        />
      </CaseScene>

      {/* Section 4 — Iteration 02: Visual Trust */}
      <CaseScene
        label={t("bd.iter2.label")}
        title={t("bd.iter2.title")}
        tag={t("bd.iter2.tag")}
        description={t("bd.iter2.desc")}
        bg="light"
      >
        {/* Mood Board + Product Redesign */}
        <SectionReveal>
          <div className="rounded-[12px] overflow-hidden mb-3">
            <img
              src="/images/bitodebt/trust-moodboard.png"
              alt="Magic Bean mood board and product homepage redesign"
              className="w-full h-auto"
            />
          </div>
          <div className="flex justify-between text-[11px] text-[var(--text-muted)] italic mb-8 px-1">
            <span>{t("bd.iter2.before")}</span>
            <span>{t("bd.iter2.brand")}</span>
            <span>{t("bd.iter2.after")}</span>
          </div>
        </SectionReveal>

        {/* Magic Bean mascot */}
        <SectionReveal delay={0.1}>
          <div className="flex justify-center mb-6">
            <img
              src="/images/bitodebt/magic-bean-hero.png"
              alt="Magic Bean — BitoDebt brand mascot"
              className="w-[280px] md:w-[360px] h-auto drop-shadow-lg"
            />
          </div>
        </SectionReveal>

        {/* Brand story callout */}
        <SectionReveal delay={0.2}>
          <div
            className="rounded-[12px] border-l-4 bg-[var(--bg-surface)] p-6"
            style={{ borderLeftColor: "var(--accent-brass)" }}
          >
            <p
              className="text-[15px] leading-relaxed text-[var(--text-primary)]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("bd.iter2.callout")}
            </p>
          </div>
        </SectionReveal>

        <OutcomeCard
          result={t("bd.iter2.result")}
          insight={t("bd.iter2.insight")}
        />
      </CaseScene>

      {/* Section 5 — Iteration 03: Wrong Assumption */}
      <CaseScene
        label={t("bd.iter3.label")}
        title={t("bd.iter3.title")}
        tag={t("bd.iter3.tag")}
        description={t("bd.iter3.desc")}
        bg="surface"
      >
        {/* Before/After payment UI */}
        <SectionReveal>
          <div className="rounded-[12px] overflow-hidden mb-3">
            <img
              src="/images/bitodebt/payment-before-after.png"
              alt="Payment UI before and after: USDT default → BITO default with discount"
              className="w-full h-auto"
            />
          </div>
          <div className="flex justify-between text-[11px] text-[var(--text-secondary)] italic mb-8 px-1">
            <span>{t("bd.iter3.before")}</span>
            <span>{t("bd.iter3.after")}</span>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p
            className="text-center text-[14px] text-[var(--accent-brass)] mb-8"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            {t("bd.iter3.fix")}
          </p>
        </SectionReveal>

        {/* User feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[t("bd.iter3.fb1"), t("bd.iter3.fb2")].map((fb, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-5">
                <p
                  className="text-[14px] text-[var(--text-primary)] italic"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &ldquo;{fb}&rdquo;
                </p>
                <p className="text-[11px] text-[var(--text-muted)] mt-2">— Telegram</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </CaseScene>

      {/* Section 6 — Trust Insight */}
      <CaseScene
        label={t("bd.trust.label")}
        title={t("bd.trust.title")}
        description={t("bd.trust.desc")}
        bg="dark"
      >
        <SectionReveal>
          <div className="space-y-3 mb-8">
            {[t("bd.trust.signal1"), t("bd.trust.signal2"), t("bd.trust.signal3")].map(
              (signal, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-[15px] text-[#A8A29E]"
                >
                  <span
                    className="text-[var(--accent-deep)] text-[14px] font-medium mt-0.5"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {i + 1}.
                  </span>
                  {signal}
                </div>
              )
            )}
          </div>
        </SectionReveal>

        {/* Strategy shift table */}
        <SectionReveal delay={0.1}>
          <div className="rounded-[12px] bg-[var(--bg-dark-surface)] p-6">
            <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--accent-deep)] mb-4">
              {t("bd.trust.shift")}
            </p>
            <div className="space-y-4">
              {[
                { before: t("bd.trust.s1.before"), after: t("bd.trust.s1.after") },
                { before: t("bd.trust.s2.before"), after: t("bd.trust.s2.after") },
                { before: t("bd.trust.s3.before"), after: t("bd.trust.s3.after") },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center text-[14px]"
                >
                  <span className="text-[#78716C] line-through">{row.before}</span>
                  <span className="text-[var(--accent-deep)]">→</span>
                  <span className="text-[var(--bg-primary)]">{row.after}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <DraggableTimeline events={timelineEvents} />
        </SectionReveal>
      </CaseScene>

      {/* Section 7 — Cross-team Collaboration */}
      <CaseScene
        label={t("bd.collab.label")}
        title={t("bd.collab.title")}
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: t("bd.collab.legal.title"),
              body: t("bd.collab.legal.body"),
            },
            {
              title: t("bd.collab.mktg.title"),
              body: t("bd.collab.mktg.body"),
            },
            {
              title: t("bd.collab.cs.title"),
              body: t("bd.collab.cs.body"),
            },
          ].map((card, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 h-full">
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
            </SectionReveal>
          ))}
        </div>
      </CaseScene>

      {/* Section 8 — Results */}
      <CaseScene
        label={t("bd.results.label")}
        title={t("bd.results.title")}
        bg="dark"
      >
        <SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: 34, suffix: "%", label: t("bd.m.conversion"), sub: "22% → 56%" },
              { value: 100, suffix: "%", label: t("bd.m.sellout"), sub: t("bd.results.sellout.sub") },
              { value: 57, suffix: "%", label: t("bd.m.trading"), sub: t("bd.results.trading.sub") },
              { value: 25, suffix: "%", label: t("bd.m.revenue"), sub: t("bd.results.revenue.sub") },
            ].map((m, i) => (
              <div key={m.label} className="text-center">
                <div
                  className="text-[32px] mb-1"
                  style={{ fontFamily: "Georgia, serif", color: "var(--accent-deep)" }}
                >
                  <Counter value={m.value} suffix={m.suffix} duration={1500 + i * 200} />
                </div>
                <p className="text-[11px] tracking-[0.08em] uppercase text-[var(--bg-primary)] mb-0.5">
                  {m.label}
                </p>
                <p className="text-[11px] text-[#78716C]">{m.sub}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* SOLD OUT — campaign milestone */}
        <SectionReveal delay={0.05}>
          <div className="flex justify-center mb-10">
            <img
              src="/images/bitodebt/sold-out.png"
              alt="BitoDebt SOLD OUT — 100% subscribed"
              className="w-[240px] md:w-[300px] h-auto rounded-[12px]"
            />
          </div>
        </SectionReveal>

        {/* Final product page */}
        <SectionReveal delay={0.1}>
          <div className="rounded-[12px] overflow-hidden mb-4">
            <img
              src="/images/bitodebt/product-final.png"
              alt="Final BitoDebt product page with FAQ, user testimonials and media coverage"
              className="w-full h-auto"
            />
          </div>
          <p className="text-[12px] text-[#78716C] italic text-center mb-10">
            {t("bd.results.final.caption")}
          </p>
        </SectionReveal>

        {/* User testimonial */}
        <SectionReveal delay={0.3}>
          <div className="max-w-[640px] mx-auto text-center">
            <p
              className="text-[18px] leading-relaxed text-[var(--bg-primary)] mb-4"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              &ldquo;{t("bd.results.testimonial")}&rdquo;
            </p>
            <p className="text-[13px] text-[#78716C]">— Bob, {t("bd.results.testimonial.author")}</p>
          </div>
        </SectionReveal>
      </CaseScene>

      {/* Section 9 — Reflections */}
      <CaseScene
        label={t("bd.reflect.label")}
        title={t("bd.reflect.title")}
        bg="surface"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: t("bd.reflect.1.title"), body: t("bd.reflect.1.body") },
            { title: t("bd.reflect.2.title"), body: t("bd.reflect.2.body") },
            { title: t("bd.reflect.3.title"), body: t("bd.reflect.3.body") },
            { title: t("bd.reflect.4.title"), body: t("bd.reflect.4.body") },
          ].map((card, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6 h-full">
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
            </SectionReveal>
          ))}
        </div>
      </CaseScene>
    </CaseLayout>
  )
}
