"use client"

import { CaseLayout } from "@/components/sections/CaseLayout"
import { CaseScene } from "@/components/sections/CaseScene"
import { DraggableTimeline } from "@/components/interactive/DraggableTimeline"
import { SectionReveal } from "@/components/animations/SectionReveal"
import { Counter } from "@/components/animations/Counter"

const timelineEvents = [
  {
    id: "mvp",
    time: "Phase 1",
    title: "MVP 簡化上線",
    detail:
      "用戶不理解債權概念。我們選擇極簡 MVP——只保留核心購買流程，移除所有非必要資訊，讓用戶先能完成基本操作。",
    insight: "先讓產品活下來，再慢慢教育市場。",
  },
  {
    id: "visual",
    time: "Phase 2",
    title: "視覺敘事建立信任",
    detail:
      "加入圖表化到期利率、歷史成效資訊和信任指標。從「能用」進化到「敢用」——用資訊透明度取代行銷說服。",
    insight: "金融產品中，資訊透明就是最好的行銷。",
  },
  {
    id: "data",
    time: "Phase 3",
    title: "數據驅動優化",
    detail:
      "追蹤每個步驟的轉換數據，發現支付方式預設選項造成巨大摩擦。快速修正後，訂單轉化率達 100%。",
    insight: "永遠用數據驗證假設，不要相信設計師的直覺。",
  },
  {
    id: "result",
    time: "Result",
    title: "三階段成果",
    detail:
      "投資轉換率從 22% 提升到 56%，平台交易額增加 57%。但支付方式的假設錯誤也提醒我們——每個預設選項都可能造成巨大摩擦。",
    insight: "在金融產品中，「順暢」不等於「快速」，而是「讓用戶有把握」。",
  },
]

export default function BitoDebtPage() {
  return (
    <CaseLayout
      title="BitoDebt 債權認購平台"
      subtitle="Bito · 2024"
      tags={["fintech", "trust-building", "data-driven", "crypto"]}
      metrics={[
        { label: "Conversion Lift", value: "+34%" },
        { label: "Transaction Vol.", value: "+57%" },
        { label: "Order Rate", value: "100%" },
      ]}
      coreInsight="在金融產品中，「順暢」不等於「快速」，而是「讓用戶有把握」。永遠用數據驗證假設，不要相信設計師的直覺。"
    >
      <CaseScene
        number={1}
        title="問題揭露"
        description="設計台灣首個虛擬貨幣債權理財產品。用戶不理解「債權」概念——這不是介面問題，而是信任問題。如何讓用戶在不理解的情況下敢投入真金白銀？"
      />

      <CaseScene
        number={2}
        title="三階段迭代"
        description="我們沒有一次到位，而是分三個階段逐步建立用戶信任。拖動下方時間軸，看每個階段的思考過程。"
        bg="secondary"
      >
        <DraggableTimeline events={timelineEvents} />
      </CaseScene>

      <CaseScene
        number={3}
        title="數據說話"
        description="支付方式的預設選項假設錯誤，導致用戶抱怨。我們快速修正，驗證了「每個細節都可能造成巨大摩擦」。"
      >
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: 34, suffix: "%", label: "Conversion Lift", sub: "22% → 56%" },
              { value: 57, suffix: "%", label: "Transaction Volume", sub: "平台交易額增長" },
              { value: 100, suffix: "%", label: "Order Completion", sub: "訂單轉化率" },
            ].map((m, i) => (
              <div
                key={m.label}
                className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 text-center"
              >
                <div
                  className="mb-1 font-mono text-[32px] font-medium text-[var(--accent-text)]"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  <Counter value={m.value} suffix={m.suffix} duration={1500 + i * 200} />
                </div>
                <p className="text-[12px] font-medium text-[var(--text-primary)]">
                  {m.label}
                </p>
                <p className="text-[11px] text-[var(--text-muted)]">{m.sub}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </CaseScene>

      <CaseScene
        number={4}
        title="Trade-offs 與反思"
        bg="secondary"
      >
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
              <p className="mb-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--color-success)]">
                What Worked
              </p>
              <ul className="space-y-2 text-[14px] text-[var(--text-secondary)]">
                <li>✓ 三階段迭代有效建立信任</li>
                <li>✓ 數據驅動找到真正痛點</li>
                <li>✓ 訂單轉化率達 100%</li>
              </ul>
            </div>
            <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
              <p className="mb-3 text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--color-danger)]">
                What I Learned
              </p>
              <ul className="space-y-2 text-[14px] text-[var(--text-secondary)]">
                <li>✗ 支付方式假設錯誤導致用戶抱怨</li>
                <li>✗ 預設選項的影響力被低估</li>
                <li>→ 每個細節都需要數據驗證</li>
              </ul>
            </div>
          </div>
        </SectionReveal>
      </CaseScene>
    </CaseLayout>
  )
}
