"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionReveal } from "@/components/animations/SectionReveal"

type Choice = "A" | "B" | "C" | null

interface OptionResult {
  conversion: string
  support: string
  outcome: string
  verdict: string
  color: string
}

const options: Record<"A" | "B" | "C", { label: string; desc: string }> = {
  A: {
    label: "先問用戶「你有沒有 crypto？」再分流",
    desc: "快速、直覺、減少選擇",
  },
  B: {
    label: "直接展示所有幣種，讓用戶自己判斷",
    desc: "複雜、但誠實、可逆",
  },
  C: {
    label: "用 AI 判斷用戶可能需要什麼",
    desc: "聰明、省事、但可能誤判",
  },
}

const results: Record<"A" | "B" | "C", OptionResult> = {
  A: {
    conversion: "↑15%",
    support: "↑40%",
    outcome: "用戶付錢後才發現走錯路",
    verdict: "短期好看，長期傷信任",
    color: "var(--color-warning)",
  },
  B: {
    conversion: "↓8%",
    support: "↓23%",
    outcome: "用戶付錢前就能發現問題",
    verdict: "Evelyn 的選擇 — 誠實 > 轉換率",
    color: "var(--color-success)",
  },
  C: {
    conversion: "看似 ↑",
    support: "短期 ↓",
    outcome: "用戶失去判斷能力，長期信任 ↓",
    verdict: "聰明但危險，預判式設計是陷阱",
    color: "var(--color-danger)",
  },
}

export function QuickQuiz() {
  const [selected, setSelected] = useState<Choice>(null)

  return (
    <section className="py-[var(--space-section)] px-6 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-[1000px]">
        <SectionReveal>
          <p className="section-label mb-4">Quick Quiz</p>
          <h2 className="mb-3 text-[var(--text-primary)]">
            體驗我的思考方式
          </h2>
          <p className="mb-12 max-w-[520px] text-[var(--text-secondary)] text-[15px] leading-relaxed">
            你是 TT Wallet 的產品設計師。用戶要用信用卡買加密貨幣，
            但有些人已經有幣，有些人沒有。你會怎麼設計入金流程？
          </p>
        </SectionReveal>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {(["A", "B", "C"] as const).map((key, i) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0, 0, 0.2, 1] }}
              onClick={() => setSelected(key)}
              className={`group relative rounded-[16px] border p-6 text-left transition-all duration-300 cursor-pointer ${
                selected === key
                  ? "border-[var(--accent-blue)] bg-[var(--accent-dim)]"
                  : selected !== null
                    ? "border-[var(--border-subtle)] bg-[var(--bg-card)] opacity-50"
                    : "border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)]"
              }`}
            >
              <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border-medium)] text-[11px] font-mono font-medium text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {key}
              </div>
              <p className="mb-2 text-[14px] font-medium text-[var(--text-primary)]">
                {options[key].label}
              </p>
              <p className="text-[12px] text-[var(--text-muted)]">
                {options[key].desc}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Result */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
              className="space-y-6"
            >
              {/* Three parallel outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(["A", "B", "C"] as const).map((key) => {
                  const r = results[key]
                  const isSelected = key === selected
                  const isEvelyn = key === "B"

                  return (
                    <div
                      key={key}
                      className={`rounded-[12px] border p-5 transition-all duration-500 ${
                        isSelected
                          ? "border-[var(--border-accent)] bg-[var(--bg-card-hover)]"
                          : "border-[var(--border-subtle)] bg-[var(--bg-card)] opacity-60"
                      }`}
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <span className="text-[11px] font-mono font-medium text-[var(--text-muted)]"
                          style={{ fontFamily: "var(--font-jetbrains)" }}
                        >
                          選項 {key}
                        </span>
                        {isEvelyn && (
                          <span className="rounded-full bg-[var(--accent-dim)] px-2 py-0.5 text-[9px] font-medium text-[var(--accent-text)] tracking-[0.04em]">
                            MY CHOICE
                          </span>
                        )}
                      </div>
                      <div className="mb-3 space-y-1 font-mono text-[13px]" style={{ fontFamily: "var(--font-jetbrains)" }}>
                        <p>轉換率: <span style={{ color: r.color }}>{r.conversion}</span></p>
                        <p>客服量: <span style={{ color: r.color }}>{r.support}</span></p>
                      </div>
                      <p className="mb-2 text-[12px] text-[var(--text-secondary)]">{r.outcome}</p>
                      <p className="text-[11px] font-medium" style={{ color: r.color }}>
                        {r.verdict}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Evelyn's note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="rounded-[12px] border border-[var(--border-accent)] bg-[var(--accent-dim)] p-6"
              >
                <p className="mb-2 text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--accent-text)]">
                  My Reflection
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--text-primary)]">
                  &ldquo;我選了 B。轉換率下降 8%，但客服諮詢減少 23%。
                  在不可逆的金融操作中，預判式設計可能變成陷阱。
                  <span className="text-[var(--accent-text)]">順暢不是無感，而是有把握。</span>&rdquo;
                </p>
                <a
                  href="/cases/deposit"
                  className="mt-4 inline-block rounded-[6px] border border-[var(--border-accent)] bg-transparent px-5 py-2 text-[12px] font-medium text-[var(--accent-text)] tracking-[0.02em] transition-all duration-150 hover:bg-[var(--accent-blue)] hover:text-white hover:scale-105"
                >
                  看完整案例 →
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
