"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"
import { CaseCard } from "./CaseCard"

const cases = [
  {
    title: "BitoDebt 債權認購平台",
    subtitle: "Bito · 2024",
    description:
      "設計台灣首個虛擬貨幣債權理財產品。三階段迭代：MVP 簡化 → 視覺敘事建立信任 → 數據驅動優化。",
    tags: ["fintech", "trust-building", "data-driven"],
    metrics: [
      { label: "Conversion", value: "+34%" },
      { label: "Transaction Vol.", value: "+57%" },
      { label: "Order Rate", value: "100%" },
    ],
    href: "/cases/bitodebt",
  },
  {
    title: "TT Wallet 入金流程",
    subtitle: "TT Wallet · 2023",
    description:
      "重新設計信用卡購買加密貨幣的流程。放棄問題分流，改為直接展示幣種列表——選擇誠實揭露而非預判式設計。",
    tags: ["crypto", "ethical-design", "user-protection"],
    metrics: [
      { label: "Support Tickets", value: "-23%" },
      { label: "Conversion", value: "-8%", positive: false },
      { label: "User Self-correct", value: "+15%" },
    ],
    href: "/cases/deposit",
  },
  {
    title: "TT Wallet Referral",
    subtitle: "TT Wallet · 2023",
    description:
      "設計推薦計畫來拉新用戶。提早揭露獎勵用途，而非用高誘因掩蓋複雜性。上線 2 週後下架——誠實比轉換率重要。",
    tags: ["growth", "honest-design", "trade-offs"],
    metrics: [
      { label: "MAU", value: "+20%" },
      { label: "Fake Accounts", value: "↓" },
      { label: "DAU Target", value: "未達", positive: false },
    ],
    href: "/cases/referral",
  },
  {
    title: "ThunderCore Bridge",
    subtitle: "ThunderCore · 2023",
    description:
      "團隊想優化跨鏈轉帳介面，但流程太順反而是風險。暫緩介面優化，先重新定義「判斷發生的時刻」。",
    tags: ["cross-chain", "systems-thinking", "saying-no"],
    metrics: [
      { label: "Redefined UX", value: "✓" },
      { label: "Prevented Risk", value: "✓" },
      { label: "New UI", value: "∅", positive: false },
    ],
    href: "/cases/bridge",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-[var(--space-section)] px-6">
      <div className="mx-auto max-w-[1000px]">
        <SectionReveal>
          <p className="section-label mb-4">Selected Work</p>
          <h2 className="mb-4 text-[var(--text-primary)]">
            每個設計決定都是分岔路
          </h2>
          <p className="mb-16 max-w-[520px] text-[var(--text-secondary)] text-[15px] leading-relaxed">
            在高風險產品中，我選擇誠實、可逆、保護用戶。
            以下是四個真實的設計選擇——包括 trade-offs。
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((caseItem, i) => (
            <CaseCard key={caseItem.title} {...caseItem} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
