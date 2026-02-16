"use client"

import { CaseLayout } from "@/components/sections/CaseLayout"
import { CaseScene } from "@/components/sections/CaseScene"
import { DraggableTimeline } from "@/components/interactive/DraggableTimeline"
import { SectionReveal } from "@/components/animations/SectionReveal"

const timelineEvents = [
  {
    id: "request",
    time: "Day 1",
    title: "初始需求",
    detail: "團隊想優化跨鏈轉帳介面——「看起來更現代」。表面上是 UI 升級的需求。",
  },
  {
    id: "discover",
    time: "Day 3",
    title: "察覺問題",
    detail: "深入研究後發現：錯誤不是發生在最後一步，而是發生在「選擇的當下」。用戶在不理解的情況下就完成了不可逆操作。",
    insight: "錯誤不是發生在最後一步，而是發生在選擇的當下。",
  },
  {
    id: "insight",
    time: "Day 5",
    title: "核心洞察",
    detail: "流程太順了反而是風險。在不可逆的跨鏈轉帳中，「順暢」可能讓用戶跳過關鍵判斷點。優化介面只會讓問題更隱蔽。",
    insight: "流程太順了反而是風險。",
  },
  {
    id: "workshop",
    time: "Week 2",
    title: "工作坊設計",
    detail: "我沒有直接說服團隊，而是設計了一場工作坊。讓團隊成員自己走一次跨鏈流程，親身體驗問題。不是說服，而是引導發現。",
    insight: "設計師的工作不只是畫圖，還包括引導團隊看見問題。",
  },
  {
    id: "consensus",
    time: "Week 3",
    title: "達成共識",
    detail: "團隊達成共識：暫緩介面優化，先重新定義「好體驗」。不是「更快完成」，而是「更有把握地完成」。",
    insight: "有時候最重要的設計決策是「現在不該做什麼」。",
  },
]

export default function BridgePage() {
  return (
    <CaseLayout
      title="ThunderCore Bridge"
      subtitle="ThunderCore · 2023"
      tags={["cross-chain", "systems-thinking", "saying-no", "workshop"]}
      metrics={[
        { label: "Redefined UX", value: "✓" },
        { label: "Prevented Risk", value: "✓" },
        { label: "New UI Shipped", value: "∅", positive: false },
      ]}
      coreInsight="有時候最重要的設計決策是「現在不該做什麼」。設計師的工作不只是畫圖。"
    >
      <CaseScene
        number={1}
        title="初始需求"
        description="團隊想優化跨鏈轉帳介面——「看起來更現代」。這是一個 UI 升級的需求。但我察覺到更深層的問題。"
      />

      <CaseScene
        number={2}
        title="我察覺的問題"
        description="拖動時間軸，看我從「接到需求」到「達成共識」的完整思考過程。每個時間點都有一個關鍵轉折。"
        bg="secondary"
      >
        <DraggableTimeline events={timelineEvents} />
      </CaseScene>

      <CaseScene
        number={3}
        title="工作坊設計"
        description="我如何讓團隊看見問題？不是說服，而是引導發現。"
      >
        <SectionReveal>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "體驗式教學",
                desc: "讓團隊成員自己走一次跨鏈流程",
              },
              {
                step: "02",
                title: "問題可視化",
                desc: "標記每個「用戶可能做錯決定」的時刻",
              },
              {
                step: "03",
                title: "重新定義",
                desc: "從「更快完成」轉向「更有把握地完成」",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5"
              >
                <span
                  className="mt-0.5 font-mono text-[13px] font-medium text-[var(--accent-text)]"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
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
        number={4}
        title="反思"
        bg="secondary"
      >
        <SectionReveal>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
                <p className="mb-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--color-success)]">
                  What We Achieved
                </p>
                <ul className="space-y-2 text-[14px] text-[var(--text-secondary)]">
                  <li>✓ 團隊重新定義「好體驗」</li>
                  <li>✓ 避免讓問題更嚴重</li>
                  <li>✓ 建立了設計決策的新框架</li>
                </ul>
              </div>
              <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
                <p className="mb-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--color-danger)]">
                  What We Didn&apos;t Ship
                </p>
                <ul className="space-y-2 text-[14px] text-[var(--text-secondary)]">
                  <li>✗ 沒有產出新介面</li>
                  <li>✗ 短期沒有可量化的成果</li>
                  <li>→ 但避免了更大的風險</li>
                </ul>
              </div>
            </div>
            <div className="rounded-[12px] border border-[var(--border-accent)] bg-[var(--accent-dim)] p-6 text-center">
              <p className="text-[16px] leading-relaxed text-[var(--text-primary)]">
                「<span className="text-[var(--accent-text)]">設計師的工作不只是畫圖。</span>
                <br />
                有時候最重要的決策是『不做什麼』。」
              </p>
            </div>
          </div>
        </SectionReveal>
      </CaseScene>
    </CaseLayout>
  )
}
