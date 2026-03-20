"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "en" | "zh"

interface I18nContextType {
  locale: Locale
  t: (key: string) => string
  toggle: () => void
}

const translations: Record<string, Record<Locale, string>> = {
  // Header
  "nav.work": { en: "Work", zh: "作品" },
  "nav.about": { en: "About", zh: "關於" },
  "nav.resume": { en: "Resume", zh: "履歷" },

  // Hero
  "hero.label": {
    en: "Senior Product Designer · Fintech & Web3",
    zh: "資深產品設計師 · 金融科技 & Web3",
  },
  "hero.headline1": { en: "See the risk", zh: "在點擊之前" },
  "hero.headline2": { en: "before the click.", zh: "看見風險。" },
  "hero.subtitle": {
    en: "I design trust into high-stakes decisions.",
    zh: "我將信任設計進高風險的決策中。",
  },
  "hero.subtitle2": {
    en: "Four cases. Four types of seeing. This is how I judge.",
    zh: "四個案例。四種看見。這是我做判斷的方式。",
  },
  "hero.cta.work": { en: "View Work", zh: "查看作品" },
  "hero.cta.contact": { en: "Get in Touch", zh: "聯繫我" },
  "hero.metric.years": { en: "YEARS FINTECH", zh: "年金融科技經驗" },
  "hero.metric.products": { en: "PRODUCTS SHIPPED", zh: "個產品上線" },
  "hero.metric.conversion": { en: "BEST CONVERSION LIFT", zh: "最佳轉換提升" },

  // Cases
  "case.bitodebt.tag": { en: "BITODEBT · FINTECH", zh: "BITODEBT · 金融科技" },
  "case.bitodebt.saw": { en: "I saw: my blind spot", zh: "我看見：自己的盲點" },
  "case.bitodebt.title": {
    en: "From experiment\nto market leader",
    zh: "從實驗\n到市場領導者",
  },
  "case.bitodebt.desc": {
    en: "My assumption hurt users. I caught it same-day — then grew the product to market leader.",
    zh: "我的假設正在傷害用戶。我當天就發現了——然後把產品做到了市場領導者。",
  },
  "case.deposit.tag": { en: "TT WALLET · DEPOSIT", zh: "TT WALLET · 入金" },
  "case.deposit.saw": { en: "I saw: past the brief", zh: "我看見：brief 背後的真問題" },
  "case.deposit.title": {
    en: "Reveal before\nthey commit",
    zh: "在承諾之前\n先揭露真相",
  },
  "case.deposit.desc": {
    en: "They asked for an entry point. I redesigned the entire flow.",
    zh: "他們要我加入口，我重新定義了整個流程。",
  },
  "case.referral.tag": { en: "TT WALLET · REFERRAL", zh: "TT WALLET · 推薦計畫" },
  "case.referral.saw": { en: "I saw: the timing", zh: "我看見：介入的時機" },
  "case.referral.title": {
    en: "Honest over\noptimised",
    zh: "誠實\n勝過優化",
  },
  "case.referral.desc": {
    en: "Right judgment, wrong timing. I learned when to push and when to wait.",
    zh: "對的判斷，錯的時間。我學到了何時該推進、何時該等待。",
  },
  "case.bridge.tag": { en: "THUNDERCORE · BRIDGE", zh: "THUNDERCORE · 跨鏈橋" },
  "case.bridge.saw": { en: "I saw: the room", zh: "我看見：團隊需要先對齊" },
  "case.bridge.title": {
    en: "When smooth\nis dangerous",
    zh: "當順暢\n反而危險",
  },
  "case.bridge.desc": {
    en: "I paused the project to align the team first — redefining good UX for irreversible flows.",
    zh: "我暫停了專案，先讓團隊對齊——重新定義不可逆流程的好 UX。",
  },
  "case.read": { en: "Read case study", zh: "閱讀案例" },
  "case.conversion": { en: "CONVERSION", zh: "轉換率" },
  "case.trading": { en: "TRADING VOL.", zh: "交易量" },
  "case.support": { en: "SUPPORT TICKETS", zh: "客訴工單" },
  "case.mau": { en: "MAU", zh: "月活躍用戶" },
  "case.ux": { en: "UX STANDARD", zh: "UX 標準" },

  // Philosophy
  "phil.label": { en: "Four Ways of Seeing", zh: "四種看見" },
  "phil.headline1": { en: "Each time, seeing at", zh: "每一次，在更大的" },
  "phil.headline2": { en: "a wider aperture.", zh: "鏡頭下看見。" },
  "phil.01.title": { en: "Blind Spot", zh: "盲點" },
  "phil.01.sub": { en: "BitoDebt — Self-correction", zh: "BitoDebt — 自我修正" },
  "phil.02.title": { en: "Past the Brief", zh: "Brief 背後" },
  "phil.02.sub": { en: "Deposit — Analytical refusal", zh: "Deposit — 分析後拒絕" },
  "phil.03.title": { en: "The Timing", zh: "時機" },
  "phil.03.sub": { en: "Referral — Strategic patience", zh: "Referral — 策略性等待" },
  "phil.04.title": { en: "The Room", zh: "全局" },
  "phil.04.sub": { en: "Bridge — Organizational diagnosis", zh: "Bridge — 組織診斷" },

  // About
  "about.quote1": {
    en: '"In an age where AI can draw any interface,',
    zh: "「在 AI 能畫出任何介面的時代，",
  },
  "about.quote2": { en: "I do what AI cannot —", zh: "我做的是 AI 做不到的事——" },
  "about.quote3": {
    en: 'judge which interface should exist."',
    zh: "判斷哪個介面不該存在。」",
  },
  "about.bio": {
    en: "Evelyn Wu · Senior Product Designer · 5+ years fintech & web3",
    zh: "Evelyn Wu · 資深產品設計師 · 5+ 年金融科技 & Web3",
  },
  "about.more": { en: "More about me →", zh: "更多關於我 →" },

  // Closing
  "closing.line1": {
    en: '"My name is Evelyn,',
    zh: "「我叫 Evelyn，",
  },
  "closing.line2": {
    en: 'and this is how I see design —"',
    zh: "這是我看待設計的方式——」",
  },
  "closing.slogan": {
    en: "See the risk before the click.",
    zh: "在點擊之前，看見風險。",
  },

  // Footer
  "footer.headline1": { en: "Let's find the", zh: "讓我們一起" },
  "footer.headline2": { en: "right path together.", zh: "找到對的路。" },
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const toggle = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "zh" : "en"))
  }, [])

  const t = useCallback(
    (key: string) => {
      return translations[key]?.[locale] ?? key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, t, toggle }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
