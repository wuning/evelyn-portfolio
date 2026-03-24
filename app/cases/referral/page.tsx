"use client"

import { CaseLayout } from "@/components/sections/CaseLayout"
import { CaseScene } from "@/components/sections/CaseScene"
import { ForkRoad } from "@/components/interactive/ForkRoad"
import { DraggableTimeline } from "@/components/interactive/DraggableTimeline"
import { SectionReveal } from "@/components/animations/SectionReveal"
import { useI18n } from "@/lib/i18n"

function useRoads() {
  const { t } = useI18n()
  return [
    {
      id: "visual",
      label: "A",
      title: t("ref.road.a.title"),
      pros: t("ref.road.a.pros").split("|"),
      cons: t("ref.road.a.cons").split("|"),
      accentColor: "var(--text-muted)",
    },
    {
      id: "info",
      label: "B",
      title: t("ref.road.b.title"),
      pros: t("ref.road.b.pros").split("|"),
      cons: t("ref.road.b.cons").split("|"),
      accentColor: "var(--text-muted)",
    },
    {
      id: "value",
      label: "C",
      title: t("ref.road.c.title"),
      pros: t("ref.road.c.pros").split("|"),
      cons: t("ref.road.c.cons").split("|"),
      isEvelyn: true,
      accentColor: "var(--accent-brass)",
    },
  ]
}

function useTimelineEvents() {
  const { t } = useI18n()
  return [
    {
      id: "launch",
      time: "Week 0",
      title: t("ref.tl.launch.title"),
      detail: t("ref.tl.launch.detail"),
    },
    {
      id: "week1",
      time: "Week 1",
      title: t("ref.tl.w1.title"),
      detail: t("ref.tl.w1.detail"),
      insight: t("ref.tl.w1.insight"),
    },
    {
      id: "week2",
      time: "Week 2",
      title: t("ref.tl.w2.title"),
      detail: t("ref.tl.w2.detail"),
      insight: t("ref.tl.w2.insight"),
    },
    {
      id: "reflect",
      time: "After",
      title: t("ref.tl.reflect.title"),
      detail: t("ref.tl.reflect.detail"),
      insight: t("ref.tl.reflect.insight"),
    },
  ]
}

export default function ReferralPage() {
  const { t } = useI18n()
  const roads = useRoads()
  const timelineEvents = useTimelineEvents()

  return (
    <CaseLayout
      title="TT Wallet Referral"
      subtitle={t("ref.subtitle")}
      tags={["growth", "honest-design", "trade-offs", "referral"]}
      metrics={[
        { label: t("ref.metric.mau"), value: "+20%" },
        { label: t("ref.metric.fake"), value: t("ref.metric.fake.val") },
        { label: t("ref.metric.dau"), value: t("ref.metric.dau.val") },
      ]}
      coreInsight={t("ref.insight")}
    >
      <CaseScene
        label="Scene 01"
        title={t("ref.s1.title")}
        description={t("ref.s1.desc")}
      />

      <CaseScene
        label="Scene 02"
        title={t("ref.s2.title")}
        description={t("ref.s2.desc")}
        bg="surface"
      >
        <ForkRoad roads={roads} />
      </CaseScene>

      <CaseScene
        label="Scene 03"
        title={t("ref.s3.title")}
        description={t("ref.s3.desc")}
      >
        <DraggableTimeline events={timelineEvents} />
      </CaseScene>

      <CaseScene
        label="Scene 04"
        title={t("ref.s4.title")}
        bg="surface"
      >
        <SectionReveal>
          <div className="space-y-6">
            <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-6">
              <p className="mb-3 text-[15px] text-[var(--text-primary)]">
                {t("ref.s4.data")}
              </p>
              <p className="text-[15px] text-[var(--text-secondary)]">
                {t("ref.s4.but")}
              </p>
            </div>
            <div className="rounded-[12px] border-l-4 bg-[var(--bg-primary)] p-6 text-center" style={{ borderLeftColor: "var(--accent-brass)" }}>
              <p className="text-[16px] leading-relaxed text-[var(--text-primary)]">
                「<span className="text-[var(--accent-brass)]">{t("ref.s4.quote1")}</span>
                <br />
                {t("ref.s4.quote2")}」
              </p>
            </div>
          </div>
        </SectionReveal>
      </CaseScene>
    </CaseLayout>
  )
}
