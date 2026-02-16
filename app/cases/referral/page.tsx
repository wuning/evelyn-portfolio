"use client"

import { CaseLayout } from "@/components/sections/CaseLayout"
import { CaseScene } from "@/components/sections/CaseScene"
import { ForkRoad } from "@/components/interactive/ForkRoad"
import { DraggableTimeline } from "@/components/interactive/DraggableTimeline"
import { SectionReveal } from "@/components/animations/SectionReveal"

const roads = [
  {
    id: "visual",
    label: "A",
    title: "視覺驅動",
    pros: ["轉換率最高", "視覺衝擊力強", "短期數據好看"],
    cons: ["誇大報酬預期", "吸引投機用戶", "長期信任受損"],
    accentColor: "var(--color-warning)",
  },
  {
    id: "info",
    label: "B",
    title: "資訊驅動",
    pros: ["規則透明", "減少糾紛", "合規友善"],
    cons: ["資訊量過大", "用戶可能看不完", "轉換率中等"],
    accentColor: "var(--text-muted)",
  },
  {
    id: "value",
    label: "C",
    title: "價值導向",
    pros: ["提早說清楚用途", "減少虛假帳號", "建立長期信任"],
    cons: ["吸引力相對低", "短期 DAU 不高", "需要更多教育"],
    isEvelyn: true,
    accentColor: "var(--color-success)",
  },
]

const timelineEvents = [
  {
    id: "launch",
    time: "Week 0",
    title: "Referral 上線",
    detail: "選擇 Version C：提早揭露獎勵用途，而非用高誘因掩蓋複雜性。MAU 開始成長。",
  },
  {
    id: "week1",
    time: "Week 1",
    title: "初期數據",
    detail: "MAU 成長 20%，虛假帳號減少。但 DAU 成長不如預期——用戶註冊了但不活躍。",
    insight: "誠實設計吸引了對的人，但留存需要更多。",
  },
  {
    id: "week2",
    time: "Week 2",
    title: "功能下架",
    detail: "DAU 未達目標，團隊決定下架 Referral 功能。這算失敗嗎？",
    insight: "在不完美條件下，不誤導就是負責。",
  },
  {
    id: "reflect",
    time: "After",
    title: "反思",
    detail:
      "如果選了 Version A，短期數據會更好看，但會吸引大量投機用戶。下架時造成的信任傷害會更大。誠實比轉換率重要。",
    insight: "誠實比轉換率重要；在不完美條件下，不誤導就是負責。",
  },
]

export default function ReferralPage() {
  return (
    <CaseLayout
      title="TT Wallet Referral"
      subtitle="TT Wallet · 2023"
      tags={["growth", "honest-design", "trade-offs", "referral"]}
      metrics={[
        { label: "MAU Growth", value: "+20%" },
        { label: "Fake Accounts", value: "↓" },
        { label: "DAU Target", value: "未達", positive: false },
      ]}
      coreInsight="誠實比轉換率重要；在不完美條件下，不誤導就是負責。"
    >
      <CaseScene
        number={1}
        title="背景"
        description="團隊目標：用 Referral 拉新用戶。問題：新用戶在建立信任前就被要求存款。三個設計方向，各有取捨。"
      />

      <CaseScene
        number={2}
        title="三條路"
        description="點擊任一條路，看它的優缺點。然後看我選了哪一條。"
        bg="secondary"
      >
        <ForkRoad roads={roads} />
      </CaseScene>

      <CaseScene
        number={3}
        title="上線與下架"
        description="拖動時間軸，看 Referral 從上線到下架的完整過程。"
      >
        <DraggableTimeline events={timelineEvents} />
      </CaseScene>

      <CaseScene
        number={4}
        title="這算失敗嗎？"
        bg="secondary"
      >
        <SectionReveal>
          <div className="space-y-6">
            <div className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6">
              <p className="mb-3 text-[15px] text-[var(--text-primary)]">
                從數據看——是的。DAU 沒達標，功能被下架。
              </p>
              <p className="text-[15px] text-[var(--text-secondary)]">
                但如果選了 Version A，短期數據會更好看，卻會吸引大量投機用戶。
                下架時造成的信任傷害會更大。
              </p>
            </div>
            <div className="rounded-[12px] border border-[var(--border-accent)] bg-[var(--accent-dim)] p-6 text-center">
              <p className="text-[16px] leading-relaxed text-[var(--text-primary)]">
                「<span className="text-[var(--accent-text)]">誠實比轉換率重要。</span>
                <br />
                在不完美條件下，不誤導就是負責。」
              </p>
            </div>
          </div>
        </SectionReveal>
      </CaseScene>
    </CaseLayout>
  )
}
