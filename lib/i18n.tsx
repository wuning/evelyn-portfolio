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

  // Case shared
  "case.back": { en: "Back to Work", zh: "返回作品" },
  "case.role": { en: "ROLE", zh: "角色" },
  "case.team": { en: "TEAM", zh: "團隊" },
  "case.duration": { en: "DURATION", zh: "時間" },
  "case.next": { en: "Next case study", zh: "下一個案例" },
  "case.all": { en: "View All Cases", zh: "查看所有案例" },

  // BitoDebt — Hero
  "bd.label": { en: "BitoDebt · Fintech · 2019–2020", zh: "BitoDebt · 金融科技 · 2019–2020" },
  "bd.title": {
    en: "From experiment to 25% of company revenue",
    zh: "從實驗性產品到佔公司營收 25%",
  },
  "bd.subtitle": {
    en: "I designed Taiwan's first fixed-income digital asset product — from MVP to market leader, through three iterations of trust, compliance, and product-market fit.",
    zh: "我設計了台灣首個固定收益數位資產產品——從 MVP 到市場領先，歷經信任、合規與產品市場契合的三次迭代。",
  },
  "bd.role": {
    en: "Design Owner — Research, Strategy, UI/UX, Visual, Brand",
    zh: "Design Owner — 研究、策略、UI/UX、視覺、品牌",
  },
  "bd.team": { en: "2–6 people · Legal, PM, Eng, CS", zh: "2–6 人 · 法務、PM、工程、客服" },
  "bd.duration": { en: "1 year", zh: "1 年" },
  "bd.m.conversion": { en: "CONVERSION LIFT", zh: "投資轉換率" },
  "bd.m.sellout": { en: "SELL-OUT RATE", zh: "每檔完售" },
  "bd.m.trading": { en: "TRADING VOL.", zh: "平台交易額" },
  "bd.m.revenue": { en: "COMPANY REVENUE", zh: "佔公司總營收" },

  // BitoDebt — Challenge
  "bd.challenge.label": { en: "Challenge", zh: "挑戰" },
  "bd.challenge.title": {
    en: "Nobody trusts a product they've never seen.",
    zh: "沒有人信任一個他們從沒見過的產品。",
  },
  "bd.challenge.desc": {
    en: "Taiwan's first fixed-income digital asset product: users deposit stablecoins, receive principal plus fixed interest (8.5% APY) at maturity.",
    zh: "台灣首個固定收益數位資產產品：用戶存入穩定幣，到期領回本金加固定利息（年化 8.5%）。",
  },
  "bd.challenge.body": {
    en: "The problem wasn't usability — it was courage. Users understood the flow, but didn't dare press \"Subscribe.\"",
    zh: "問題不是不會用——是不敢用。用戶看懂了流程，但不敢按下「認購」。",
  },
  "bd.quote.p8": {
    en: "After it matures, how do I get my money back?",
    zh: "到期後，我的錢怎麼拿回來？",
  },
  "bd.quote.p8.author": { en: "Participant P8", zh: "受訪者 P8" },
  "bd.quote.p9": {
    en: "Locked for too long — what if the exchange goes down?",
    zh: "綁太久，交易所倒了怎麼辦？",
  },
  "bd.quote.p9.author": { en: "Participant P9", zh: "受訪者 P9" },
  "bd.quote.p7": {
    en: "I'd feel more confident once more people in Taiwan are talking about it.",
    zh: "等幣託在台灣比較多人在討論後，可能會比較有信心",
  },
  "bd.quote.p7.author": { en: "Participant P7", zh: "受訪者 P7" },

  // BitoDebt — Iteration 01
  "bd.iter1.label": { en: "Iteration 01", zh: "迭代 01" },
  "bd.iter1.title": { en: "Ship first, don't chase perfection.", zh: "先活下來，不追求完美。" },
  "bd.iter1.tag": {
    en: "Judgment: Strip it down to the skeleton.",
    zh: "判斷：砍到只剩骨架。",
  },
  "bd.iter1.desc": {
    en: "Team of 2, strict legal compliance. I stripped the product to minimum: one subscription flow, plain language, zero visual packaging.",
    zh: "團隊只有 2 人，法務合規要求嚴格。我把產品砍到最小：一條認購流程、白話語言、零視覺包裝。",
  },
  "bd.iter1.body": {
    en: "The hardest part wasn't designing the flow — it was naming the product. \"Debt rights\" was the legally approved term — accurate, compliant, but users couldn't understand it. I spent weeks negotiating with legal: they guarded compliance, I guarded user comprehension. Final decision: keep the legal name, but translate it into plain language at every touchpoint.",
    zh: "最花時間的不是設計流程，而是產品命名。「債權」是法務認可的用語——合法、準確，但對用戶來說幾乎等於聽不懂。我花了好幾週和法務來回：他們守合規，我守用戶理解。最終決定：保留法定名稱，但在每個用戶接觸點用白話翻譯。",
  },
  "bd.iter1.caption": {
    en: "MVP wireframe — one flow, nothing extra.",
    zh: "MVP wireframe——一條流程，沒有多餘的東西。",
  },
  "bd.iter1.result": {
    en: "Launched successfully. Conversion rate: 22%.",
    zh: "順利上線。轉換率 22%。",
  },
  "bd.iter1.insight": {
    en: "Users came and looked, but didn't dare press \"Subscribe.\"",
    zh: "用戶進來看了，但不敢按「認購」。",
  },

  // BitoDebt — Iteration 02
  "bd.iter2.label": { en: "Iteration 02", zh: "迭代 02" },
  "bd.iter2.title": { en: "Make the abstract tangible.", zh: "讓抽象變具體。" },
  "bd.iter2.tag": {
    en: "Judgment: Trust matters more than flow.",
    zh: "判斷：信任問題比流程問題重要。",
  },
  "bd.iter2.desc": {
    en: "Data showed users didn't distrust the flow — they distrusted the concept. I needed to make \"fixed-income digital assets\" feel real, not scary.",
    zh: "數據顯示，用戶不是不信任流程——是不信任概念。我需要讓「固定收益數位資產」這件事變得真實，而不是可怕。",
  },
  "bd.iter2.before": {
    en: "Before: plain text, no visual identity",
    zh: "之前：純文字，沒有視覺識別",
  },
  "bd.iter2.brand": {
    en: "\"Magic Bean\": a growth metaphor I initiated",
    zh: "魔豆：我自己發起的成長隱喻",
  },
  "bd.iter2.after": {
    en: "Result: brand + education + social proof",
    zh: "成果：品牌 + 教育內容 + 社會證明",
  },
  "bd.iter2.callout": {
    en: "The Magic Bean concept wasn't in anyone's brief. I saw the product needed a visual story to lower the cognitive barrier, created a Mood Board on my own, then handed the entire visual system to the marketing team to extend. That's design ownership in a team of 2.",
    zh: "魔豆概念不在任何人的 brief 裡。我看到產品需要一個能降低認知門檻的視覺故事，自己做了 Mood Board，然後把整套視覺語言交給行銷團隊延伸到行銷素材。這就是 2 人團隊裡的 design ownership。",
  },
  "bd.iter2.result": {
    en: "Page views ×2.5–3.5, longer dwell time, more users entering subscription flow.",
    zh: "頁面瀏覽量 ×2.5–3.5，停留時間延長，更多用戶進入認購流程。",
  },
  "bd.iter2.insight": {
    en: "But conversion didn't scale proportionally — more visitors, but completion didn't keep up.",
    zh: "但轉換率沒有等比增加——進來的人多了，完成認購的人沒跟上。",
  },

  // BitoDebt — Iteration 03
  "bd.iter3.label": { en: "Iteration 03", zh: "迭代 03" },
  "bd.iter3.title": {
    en: "My assumption was hurting users.",
    zh: "我的假設正在傷害用戶。",
  },
  "bd.iter3.tag": {
    en: "Judgment: Admit, fix, learn — same day.",
    zh: "判斷：承認、修正、學習——當天完成。",
  },
  "bd.iter3.desc": {
    en: "After launch, customer service reported an emergency: \"Users are furious — they can't find the BITO payment option.\" I had assumed most users wouldn't hold much BITO (platform token), so I defaulted to USDT. That assumption was wrong. 75% of long-term users held significant BITO and wanted the fee discount (20% → 10%). Some had already paid the higher fee. In fintech, a wrong default isn't \"inconvenient\" — it causes real losses.",
    zh: "產品上線後，客服在緊急會議上說：「用戶氣急敗壞，說找不到 BITO 支付選項。」我設計支付介面時，假設多數用戶不會持有太多 BITO（平台幣），所以把 USDT 支付放在左邊作為預設。這個假設是錯的。75% 的長期用戶持有大量 BITO，想用 BITO 支付來享受手續費折扣（20% → 10%）。有些人已經用較高手續費完成交易，事後才發現自己多付了錢。在金融產品中，錯誤的預設不是「不方便」——是「造成損失」。",
  },
  "bd.iter3.before": {
    en: "Default: USDT (my assumption)",
    zh: "預設：USDT（我的假設）",
  },
  "bd.iter3.after": {
    en: "Fixed: BITO default + discount visible",
    zh: "修正：BITO 預設 + 折扣清楚可見",
  },
  "bd.iter3.fix": {
    en: "Just swapped left and right, changed the default. Fixed same day. Support complaints dropped to zero.",
    zh: "只是調換了左右位置和預設值。當天修正。客服抱怨歸零。",
  },
  "bd.iter3.fb1": {
    en: "Thanks, I finally bought it.",
    zh: "謝謝，我終於買到了。",
  },
  "bd.iter3.fb2": {
    en: "This is exactly what I wanted — simple and straightforward.",
    zh: "這正是我想要的，簡單且直接。",
  },

  // BitoDebt — Trust Insight
  "bd.trust.label": { en: "Key Finding", zh: "關鍵發現" },
  "bd.trust.title": {
    en: "Trust can't be designed — only proven.",
    zh: "信任不能被設計出來，只能被證實。",
  },
  "bd.trust.desc": {
    en: "After fixing the payment issue, I conducted a second round of user interviews. The finding changed everything: trust didn't come from my design. It came from three external signals.",
    zh: "修正支付問題後，我做了第二輪用戶訪談。發現改變了一切：信任不是來自我的設計。而是來自三個外部信號。",
  },
  "bd.trust.signal1": {
    en: "Seeing others profit (people sharing returns in community groups)",
    zh: "看到別人賺錢了（社群裡有人曬投資報表）",
  },
  "bd.trust.signal2": {
    en: "Seeing a physical presence (the company has offices, real people)",
    zh: "看到有實體存在（公司有辦公室、有人出來說明）",
  },
  "bd.trust.signal3": {
    en: "Friends are talking about it (word of mouth on PTT, Telegram)",
    zh: "朋友都在討論（PTT、Telegram 有口碑）",
  },
  "bd.trust.shift": { en: "Strategy Shift", zh: "策略轉向" },
  "bd.trust.s1.before": {
    en: "Visual metaphors to spark imagination",
    zh: "用視覺隱喻製造想像空間",
  },
  "bd.trust.s1.after": {
    en: "Charts showing real returns",
    zh: "用數字圖表展示真實收益",
  },
  "bd.trust.s2.before": {
    en: "Simple bullet-point rules",
    zh: "簡單條列規則",
  },
  "bd.trust.s2.after": {
    en: "FAQ, user feedback, media coverage",
    zh: "加入 FAQ、用戶回饋、媒體好評",
  },
  "bd.trust.s3.before": {
    en: "Make the product \"look professional\"",
    zh: "讓產品「看起來專業」",
  },
  "bd.trust.s3.after": {
    en: "Make the product \"proven trustworthy\"",
    zh: "讓產品「被證實可信」",
  },

  // BitoDebt — Collaboration
  "bd.collab.label": { en: "How I Collaborate", zh: "我如何和其他人合作" },
  "bd.collab.title": {
    en: "No authority, still drove change.",
    zh: "沒有權限，照樣推動。",
  },
  "bd.collab.legal.title": {
    en: "\"Naming alone was a battle\"",
    zh: "「光是命名就是一場仗」",
  },
  "bd.collab.legal.body": {
    en: "\"Debt rights\" was what legal required — accurate, compliant, but users couldn't understand it. Weeks of back and forth. They held the line: compliance. I held the line: user comprehension. Final call: keep the legal name, translate at every touchpoint.",
    zh: "「債權」是法務要求的——合法、準確，但用戶聽不懂。來回數週。他們守底線：合規。我守底線：用戶理解。最終：法定名稱不變，但每個接觸點都用白話翻譯。",
  },
  "bd.collab.mktg.title": {
    en: "\"I initiated the brand, they amplified it\"",
    zh: "「我發起的品牌，他們放大」",
  },
  "bd.collab.mktg.body": {
    en: "The Magic Bean visual system wasn't marketing's brief. I created the Mood Board, built the concept, then handed the visual language to marketing to extend across campaigns.",
    zh: "魔豆視覺系統不是行銷部門的 brief。我自己做了 Mood Board、建立概念，然後把整套視覺語言交給行銷在活動中延伸使用。",
  },
  "bd.collab.cs.title": {
    en: "\"My fastest user research channel\"",
    zh: "「我最快的用戶研究管道」",
  },
  "bd.collab.cs.body": {
    en: "After the BITO payment incident, I joined user Telegram groups, attended weekly CS meetings, recruited interview participants through CS. The most critical design fix came from a forwarded complaint — not from data analysis.",
    zh: "BITO 支付事件後，我加入用戶 Telegram 群組、每週參加客服會議、透過客服招募訪談對象。最關鍵的設計修正來自一條轉發的抱怨——不是來自數據分析。",
  },

  // BitoDebt — Results
  "bd.results.label": { en: "Results", zh: "成果" },
  "bd.results.title": {
    en: "From experiment to core business.",
    zh: "從實驗產品到核心業務。",
  },
  "bd.results.sellout.sub": {
    en: "Sold out within a day",
    zh: "一天內搶光",
  },
  "bd.results.trading.sub": {
    en: "Exceeded target",
    zh: "超過目標",
  },
  "bd.results.revenue.sub": {
    en: "Of company total",
    zh: "佔公司總營收",
  },
  "bd.results.final.placeholder": {
    en: "Final Product Page",
    zh: "最終產品頁面",
  },
  "bd.results.final.caption": {
    en: "Years later, the live version is still my original design.",
    zh: "多年後線上版本依然是我當初的設計。",
  },
  "bd.results.soldout.caption": {
    en: "Every single batch — sold out within a day.",
    zh: "每一檔產品，一天內完售。",
  },
  "bd.results.testimonial": {
    en: "Since using BitoDebt, I can finally sleep in peace. The anxiety of waking up at midnight to find my assets cut in half is gone. Now 30% of my crypto portfolio is in BitoDebt — it gives me stable returns and peace of mind.",
    zh: "自從使用 BitoDebt 後，我終於能安心睡覺了。過去那種擔心半夜醒來資產縮水一半的焦慮已經消失。現在我 30% 的加密資產都配置在 BitoDebt 上，這給了我穩定的收益和心理安全感。",
  },
  "bd.results.testimonial.author": {
    en: "long-term user",
    zh: "長期用戶",
  },

  // BitoDebt — Reflections
  "bd.reflect.label": { en: "Reflections", zh: "反思" },
  "bd.reflect.title": {
    en: "Four things I learned building a trust product.",
    zh: "做一個信任型產品，我學到的四件事。",
  },
  "bd.reflect.1.title": {
    en: "Challenge your most confident assumption.",
    zh: "挑戰你最有信心的假設。",
  },
  "bd.reflect.1.body": {
    en: "The payment default error taught me: in fintech, a designer's intuition is the most dangerous thing.",
    zh: "支付預設值的錯誤教會我：在金融產品中，設計師的直覺是最危險的東西。",
  },
  "bd.reflect.2.title": {
    en: "Trust can't be designed — only proven.",
    zh: "信任不能被設計出來，只能被證實。",
  },
  "bd.reflect.2.body": {
    en: "No visual metaphor beats a real user's feedback screenshot. What a designer can do is not block the sources of trust.",
    zh: "再漂亮的視覺隱喻，都比不上一個真實用戶的回饋截圖。設計師能做的是不要擋住信任的來源。",
  },
  "bd.reflect.3.title": {
    en: "The fastest research channel is inside your company.",
    zh: "最快的用戶研究管道就在公司裡面。",
  },
  "bd.reflect.3.body": {
    en: "The most critical design fix didn't come from interviews or analytics — it came from a forwarded complaint from CS. But that wasn't luck — I had proactively built that relationship.",
    zh: "最關鍵的設計修正不是來自訪談或數據，而是來自客服轉發的一條抱怨。但這不是偶然——是我主動建立了合作關係。",
  },
  "bd.reflect.4.title": {
    en: "Design ownership means seeing the gap and filling it.",
    zh: "Design ownership 是自己看到缺口，然後補上去。",
  },
  "bd.reflect.4.body": {
    en: "The Magic Bean concept wasn't in anyone's brief. I saw the need, did it myself, then handed it to marketing to scale.",
    zh: "魔豆概念不在任何人的 brief 裡。我看到需求、自己做了、然後交給行銷延伸。",
  },

  // BitoDebt — Timeline
  "bd.tl.phase1": { en: "Phase 1", zh: "第一階段" },
  "bd.tl.phase1.title": { en: "MVP — Ship First", zh: "MVP 簡化上線" },
  "bd.tl.phase1.detail": {
    en: "Users didn't understand the concept. We chose a minimal MVP — kept only the core purchase flow, removed all non-essential info, let users complete the basic operation first.",
    zh: "用戶不理解債權概念。我們選擇極簡 MVP——只保留核心購買流程，移除所有非必要資訊，讓用戶先能完成基本操作。",
  },
  "bd.tl.phase1.insight": {
    en: "Let the product survive first, then educate the market.",
    zh: "先讓產品活下來，再慢慢教育市場。",
  },
  "bd.tl.phase2": { en: "Phase 2", zh: "第二階段" },
  "bd.tl.phase2.title": { en: "Visual Narrative Builds Trust", zh: "視覺敘事建立信任" },
  "bd.tl.phase2.detail": {
    en: "Added charts for maturity rates, historical performance, and trust indicators. Evolved from \"usable\" to \"trustable\" — using information transparency instead of marketing persuasion.",
    zh: "加入圖表化到期利率、歷史成效資訊和信任指標。從「能用」進化到「敢用」——用資訊透明度取代行銷說服。",
  },
  "bd.tl.phase2.insight": {
    en: "In fintech, transparency is the best marketing.",
    zh: "金融產品中，資訊透明就是最好的行銷。",
  },
  "bd.tl.phase3": { en: "Phase 3", zh: "第三階段" },
  "bd.tl.phase3.title": { en: "Data-Driven Correction", zh: "數據驅動優化" },
  "bd.tl.phase3.detail": {
    en: "Tracked conversion at every step, discovered the payment default caused massive friction. After a quick fix, order completion hit 100%.",
    zh: "追蹤每個步驟的轉換數據，發現支付方式預設選項造成巨大摩擦。快速修正後，訂單轉化率達 100%。",
  },
  "bd.tl.phase3.insight": {
    en: "Always validate assumptions with data — never trust a designer's intuition.",
    zh: "永遠用數據驗證假設，不要相信設計師的直覺。",
  },
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
