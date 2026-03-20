"use client"

import { CaseLayout } from "@/components/sections/CaseLayout"
import { CaseScene } from "@/components/sections/CaseScene"
import { BalanceScale } from "@/components/interactive/BalanceScale"
import { SectionReveal } from "@/components/animations/SectionReveal"
import { Counter } from "@/components/animations/Counter"

export default function DepositPage() {
  return (
    <CaseLayout
      title="TT Wallet 入金流程"
      subtitle="TT Wallet · 2023"
      tags={["crypto", "ethical-design", "user-protection", "deposit"]}
      metrics={[
        { label: "Support Tickets", value: "-23%" },
        { label: "Conversion", value: "-8%" },
        { label: "User Self-correct", value: "+15%" },
      ]}
      coreInsight="在不可逆的金融操作中，預判式設計可能變成陷阱。順暢不是無感，而是有把握。"
    >
      <CaseScene
        label="Scene 01"
        title="問題揭露"
        description="用戶要用信用卡買加密貨幣，但對「Deposit / Buy Crypto / Receive」的理解完全不同。有些人已經有幣，有些人沒有——同一個入口，不同的心理模型。"
      >
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { emoji: "🤔", text: "「我想存幣到錢包」", type: "已有幣的用戶" },
              { emoji: "😕", text: "「我想買幣，但不知道怎麼開始」", type: "新手用戶" },
              { emoji: "😤", text: "「我按了 Deposit 結果不是我要的」", type: "走錯路的用戶" },
              { emoji: "😰", text: "「我付了錢才發現買錯了」", type: "付款後才發現的用戶" },
            ].map((user) => (
              <div
                key={user.text}
                className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5"
              >
                <span className="text-2xl">{user.emoji}</span>
                <p className="mt-2 text-[14px] text-[var(--text-primary)]">
                  {user.text}
                </p>
                <p className="mt-1 text-[11px] text-[var(--text-muted)]">
                  — {user.type}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </CaseScene>

      <CaseScene
        label="Scene 02"
        title="我的第一個直覺（V0）"
        description="先問用戶「你有沒有 crypto？」再分流。看起來很聰明——快速、直覺、減少選擇。但四個用戶對同一問題的理解完全不同。"
        bg="surface"
      />

      <CaseScene
        label="Scene 03"
        title="為什麼我推翻了 V0"
        description="問題分流的前提是用戶能準確判斷自己的狀態。但在加密貨幣領域，這個假設不成立。問「你有沒有 crypto？」可能得到四種完全不同的理解。"
      />

      <CaseScene
        label="Scene 04"
        title="決策時刻"
        description="這是核心的 trade-off：轉換率 vs 用戶信任。拖動天秤看不同平衡點的後果，然後看我的選擇。"
        bg="surface"
      >
        <BalanceScale
          leftLabel="轉換率"
          rightLabel="用戶信任"
          leftItems={["問題分流", "快速完成", "+15% 轉換"]}
          rightItems={["幣種列表", "誠實揭露", "-8% 轉換"]}
          leftMetric="+15% Conversion"
          rightMetric="-23% Support"
          evelynChoice={70}
        />
      </CaseScene>

      <CaseScene
        label="Scene 05"
        title="結果與反思"
      >
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { value: 23, suffix: "%", label: "Support Tickets ↓", color: "var(--accent-brass)" },
              { value: 15, suffix: "%", label: "User Self-correct ↑", color: "var(--accent-brass)" },
              { value: 8, suffix: "%", label: "Conversion ↓", color: "var(--text-muted)" },
            ].map((m, i) => (
              <div
                key={m.label}
                className="rounded-[12px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 text-center"
              >
                <div
                  className="mb-1 text-[28px] font-light"
                  style={{ fontFamily: "Georgia, serif", color: m.color }}
                >
                  <Counter value={m.value} suffix={m.suffix} duration={1500 + i * 200} />
                </div>
                <p className="text-[12px] text-[var(--text-secondary)]">{m.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[12px] border-l-4 bg-[var(--bg-surface)] p-6 text-center" style={{ borderLeftColor: "var(--accent-brass)" }}>
            <p className="text-[15px] leading-relaxed text-[var(--text-primary)]">
              「客服諮詢減少 23%，用戶返回修改增加 15%。
              <br />
              返回修改增加是<span className="text-[var(--accent-brass)]">好事</span>——代表用戶在付錢前就能發現問題。
              <br />
              <span className="text-[var(--accent-brass)]">順暢不是無感，而是有把握。</span>」
            </p>
          </div>
        </SectionReveal>
      </CaseScene>
    </CaseLayout>
  )
}
