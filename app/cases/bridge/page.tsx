"use client"

import { CaseLayout } from "@/components/sections/CaseLayout"
import { CaseScene } from "@/components/sections/CaseScene"
import { DraggableTimeline } from "@/components/interactive/DraggableTimeline"
import { SectionReveal } from "@/components/animations/SectionReveal"
import { useI18n } from "@/lib/i18n"

function useTimelineEvents() {
  const { t } = useI18n()
  return [
    {
      id: "request",
      time: "Day 1",
      title: t("br.tl.request.title"),
      detail: t("br.tl.request.detail"),
    },
    {
      id: "discover",
      time: "Day 3",
      title: t("br.tl.discover.title"),
      detail: t("br.tl.discover.detail"),
      insight: t("br.tl.discover.insight"),
    },
    {
      id: "insight",
      time: "Day 5",
      title: t("br.tl.insight.title"),
      detail: t("br.tl.insight.detail"),
      insight: t("br.tl.insight.insight"),
    },
    {
      id: "workshop",
      time: "Week 2",
      title: t("br.tl.workshop.title"),
      detail: t("br.tl.workshop.detail"),
      insight: t("br.tl.workshop.insight"),
    },
    {
      id: "consensus",
      time: "Week 3",
      title: t("br.tl.consensus.title"),
      detail: t("br.tl.consensus.detail"),
      insight: t("br.tl.consensus.insight"),
    },
  ]
}

export default function BridgePage() {
  const { t } = useI18n()
  const timelineEvents = useTimelineEvents()

  return (
    <CaseLayout
      title="ThunderCore Bridge"
      subtitle={t("br.subtitle")}
      tags={["cross-chain", "systems-thinking", "saying-no", "workshop"]}
      metrics={[
        { label: t("br.metric.ux"), value: "✓" },
        { label: t("br.metric.risk"), value: "✓" },
        { label: t("br.metric.ship"), value: "∅", positive: false },
      ]}
      coreInsight={t("br.insight")}
    >
      <CaseScene
        label="Scene 01"
        title={t("br.s1.title")}
        description={t("br.s1.desc")}
      />

      <CaseScene
        label="Scene 02"
        title={t("br.s2.title")}
        description={t("br.s2.desc")}
        bg="surface"
      >
        <DraggableTimeline events={timelineEvents} />
      </CaseScene>

      <CaseScene
        label="Scene 03"
        title={t("br.s3.title")}
        description={t("br.s3.desc")}
      >
        <SectionReveal>
          <div className="space-y-4">
            {[
              { step: "01", title: t("br.ws.1.title"), desc: t("br.ws.1.desc") },
              { step: "02", title: t("br.ws.2.title"), desc: t("br.ws.2.desc") },
              { step: "03", title: t("br.ws.3.title"), desc: t("br.ws.3.desc") },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5"
              >
                <span className="mt-0.5 text-[13px] font-medium text-[var(--accent-brass)]">
                  {item.step}
                </span>
                <div>
                  <p className="text-[14px] font-medium text-[var(--text-primary)]">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </CaseScene>

      <CaseScene
        label="Scene 04"
        title={t("br.s4.title")}
        bg="surface"
      >
        <SectionReveal>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6">
                <p className="mb-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--accent-brass)]">
                  {t("br.achieved.label")}
                </p>
                <ul className="space-y-2 text-[14px] text-[var(--text-secondary)]">
                  <li>✓ {t("br.achieved.1")}</li>
                  <li>✓ {t("br.achieved.2")}</li>
                  <li>✓ {t("br.achieved.3")}</li>
                </ul>
              </div>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6">
                <p className="mb-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)]">
                  {t("br.notship.label")}
                </p>
                <ul className="space-y-2 text-[14px] text-[var(--text-secondary)]">
                  <li>✗ {t("br.notship.1")}</li>
                  <li>✗ {t("br.notship.2")}</li>
                  <li>{t("br.notship.3")}</li>
                </ul>
              </div>
            </div>
            <div className="rounded-[12px] border-l-4 bg-[var(--bg-primary)] p-6 text-center" style={{ borderLeftColor: "var(--accent-brass)" }}>
              <p className="text-[16px] leading-relaxed text-[var(--text-primary)]">
                「<span className="text-[var(--accent-brass)]">{t("br.quote1")}</span>
                <br />
                {t("br.quote2")}」
              </p>
            </div>
          </div>
        </SectionReveal>
      </CaseScene>
    </CaseLayout>
  )
}
