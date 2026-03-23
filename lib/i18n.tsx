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
    en: "Senior Product Designer · High-Stakes Digital Products",
    zh: "資深產品設計師 · 高風險數位產品",
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
  "hero.metric.years": { en: "YEARS IN DESIGN", zh: "年設計經驗" },
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
    en: "Evelyn Wu · Senior Product Designer · 10+ years in design, 7+ in product design",
    zh: "Evelyn Wu · 資深產品設計師 · 10 年以上設計經驗，7 年以上產品設計",
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

  // ═══════════════════════════════════════════════
  // About Page
  // ═══════════════════════════════════════════════

  "about.page.label": { en: "About", zh: "關於我" },
  "about.page.title": {
    en: "I walk the trail first.",
    zh: "出發之前，我會先自己走一遍。",
  },
  "about.page.subtitle": {
    en: "Like taking kids hiking — I scout the steep sections, the rest stops, and the retreat points before anyone else steps on the path.",
    zh: "就像帶小孩去爬山——我會先找到太陡的路段、休息點、和撤退路線，然後才讓其他人上路。",
  },

  // Climbing metaphor
  "about.climb.label": { en: "The Hiking Metaphor", zh: "爬山隱喻" },
  "about.climb.title": {
    en: "Design is route-finding, not decorating.",
    zh: "設計是找路，不是裝飾。",
  },
  "about.climb.p1": {
    en: "Every product decision is a fork in the trail. Some paths look smooth but lead to cliffs. Some look rough but get you to the summit safely.",
    zh: "每個產品決策都是步道上的分岔路。有些路看起來平坦，但通往懸崖。有些路看起來崎嶇，但能安全到達山頂。",
  },
  "about.climb.p2": {
    en: "My job isn't to make the trail feel effortless. It's to make sure everyone reaches the top — informed, prepared, and without losing anything along the way.",
    zh: "我的工作不是讓步道感覺毫不費力。而是確保每個人都能到達山頂——知情的、有準備的、路上不會損失任何東西。",
  },
  "about.climb.steep": { en: "Too steep", zh: "太陡" },
  "about.climb.rest": { en: "Rest stop", zh: "休息點" },
  "about.climb.retreat": { en: "Retreat point", zh: "撤退點" },
  "about.climb.summit": { en: "Summit", zh: "山頂" },

  // Philosophy pillars
  "about.phil.label": { en: "How I Design", zh: "我怎麼做設計" },
  "about.phil.title": {
    en: "Explore. Decide. Own.",
    zh: "探索。決策。承擔。",
  },
  "about.explore.title": { en: "Explore", zh: "探索" },
  "about.explore.body": {
    en: "I don't start with solutions. I map the terrain — user interviews, data, edge cases, stakeholder constraints. The goal isn't to find the right answer. It's to see the full landscape before choosing a direction.",
    zh: "我不從解決方案開始。我先測量地形——用戶訪談、數據、邊界情境、利害關係人的限制。目標不是找到正確答案，而是在選擇方向之前看見完整的地貌。",
  },
  "about.decide.title": { en: "Decide", zh: "決策" },
  "about.decide.body": {
    en: "Every design involves trade-offs. I make them explicit — what we gain, what we lose, and why this path is worth the cost. I'd rather defend a deliberate choice than ship a default nobody questioned.",
    zh: "每個設計都涉及取捨。我把它們說清楚——我們得到什麼、失去什麼、為什麼這條路值得付出代價。比起交付一個沒人質疑過的預設值，我更願意為一個深思熟慮的選擇辯護。",
  },
  "about.own.title": { en: "Own", zh: "承擔" },
  "about.own.body": {
    en: "I stay with the consequences. When my assumption hurts users, I fix it same-day. When the data says my design was wrong, I say it first. Ownership isn't credit — it's accountability.",
    zh: "我會留下來面對結果。當我的假設傷害了用戶，我當天修正。當數據說我的設計是錯的，我第一個承認。Ownership 不是功勞——是責任。",
  },

  // AI section
  "about.ai.label": { en: "How I Use AI", zh: "我怎麼用 AI" },
  "about.ai.title": {
    en: "AI is my thinking partner. Decisions are mine.",
    zh: "AI 是我的思考夥伴。決策是我做的。",
  },
  "about.ai.body": {
    en: "In an age where AI can generate any interface, I do what AI cannot — judge which interface should exist.",
    zh: "在 AI 能畫出任何介面的時代，我做的是 AI 做不到的事——判斷哪個介面不該存在。",
  },
  "about.ai.1": {
    en: "Analyze user interview transcripts for patterns",
    zh: "分析用戶訪談逐字稿，找出模式",
  },
  "about.ai.2": {
    en: "Generate edge cases and stress-test assumptions",
    zh: "產生邊界情境，壓力測試假設",
  },
  "about.ai.3": {
    en: "Rapidly explore multiple visual directions",
    zh: "快速探索多種視覺方向",
  },
  "about.ai.4": {
    en: "But every final decision goes through my judgment",
    zh: "但每一個最終決策，都經過我的判斷",
  },

  // Journey
  "about.journey.label": { en: "My Path", zh: "我的路徑" },
  "about.journey.title": {
    en: "From new media art to high-stakes product design.",
    zh: "從新媒體藝術到高風險產品設計。",
  },
  "about.journey.1.title": { en: "Art School", zh: "藝術學院" },
  "about.journey.1.body": {
    en: "Taipei National University of the Arts, New Media Art. Learned to think in systems, question assumptions, and create experiences — not just interfaces.",
    zh: "台北藝術大學，新媒體藝術學系。學會用系統思考、質疑假設、創造體驗——不只是介面。",
  },
  "about.journey.2.title": { en: "Enterprise → Crypto", zh: "企業 → 加密貨幣" },
  "about.journey.2.body": {
    en: "IBM taught me engineering constraints. Crypto taught me what happens when design fails in irreversible systems — real money, real consequences.",
    zh: "IBM 教會我工程限制。加密貨幣教會我當設計在不可逆系統中失敗會發生什麼——真金白銀、真實後果。",
  },
  "about.journey.3.title": { en: "Design Ownership", zh: "Design Ownership" },
  "about.journey.3.body": {
    en: "At BitoGroup and ThunderCore, I learned that the designer's job isn't just to draw — it's to see the gap and fill it, even when nobody asked.",
    zh: "在幣託和 ThunderCore，我學到設計師的工作不只是畫圖——是看見缺口，然後補上去，即使沒有人要求。",
  },
  "about.journey.4.title": { en: "Remote & Global", zh: "遠端 & 全球" },
  "about.journey.4.body": {
    en: "ExistLive — my first US-based remote role. Proved I can lead design across time zones, ship independently, and communicate async.",
    zh: "ExistLive——我第一個美國公司的遠端職位。證明我能跨時區主導設計、獨立交付、非同步溝通。",
  },

  // Closing
  "about.closing": {
    en: "My name is Evelyn, and this is how I design —",
    zh: "我叫 Evelyn，這是我做設計的方式——",
  },
  "about.closing.slogan": {
    en: "See the risk before the click.",
    zh: "在點擊之前，看見風險。",
  },
  "about.cta.work": { en: "View my work", zh: "查看我的作品" },
  "about.cta.contact": { en: "Get in touch", zh: "聯繫我" },

  // ═══════════════════════════════════════════════
  // Resume Section
  // ═══════════════════════════════════════════════

  "resume.label": { en: "Resume", zh: "履歷" },
  "resume.download": { en: "Download PDF", zh: "下載 PDF" },
  "resume.summary": {
    en: "Designer with 10+ years in design, 7+ focused on product design for high-stakes digital products where user errors have irreversible consequences — from 0→1 financial MVPs to growth at 400K+ MAU scale. At BitoGroup, designed a product from experiment to 25% of company revenue (+34% conversion). Operate end-to-end: user research, product strategy, design systems, and dev handoff. Experienced in fully remote, async-first workflows — documented design rationale and structured cross-timezone collaboration across distributed teams.",
    zh: "10 年以上設計經驗，其中 7 年以上專注於高風險數位產品設計——用戶錯誤將造成不可逆後果的產品，從零到一金融 MVP 到 40 萬+ MAU 規模的成長優化。在幣託集團將一個實驗產品設計成公司 25% 營收（轉換率 +34%）。端到端執行：用戶研究、產品策略、設計系統到開發交付。具備全遠端異步工作經驗——以文件驅動設計決策、結構化跨時區協作。",
  },

  "resume.exp": { en: "Experience", zh: "經歷" },

  "resume.exp1.company": { en: "ExistLive", zh: "ExistLive" },
  "resume.exp1.role": { en: "Senior Product Designer", zh: "Senior Product Designer" },
  "resume.exp1.period": { en: "Feb 2024 – Aug 2024 · Remote, US-based", zh: "2024/02 – 2024/08 · 遠端，美國公司" },
  "resume.exp1.bullets": {
    en: "Sole designer for a US-based music-tech startup. Led end-to-end product design from concept to MVP launch — defined information architecture, user flows, and interaction patterns across mobile app and web platform. Built and documented a scalable design system in Figma. Operated async across 3 time zones (Taiwan · US · Ukraine), delivering daily written updates with design rationale and annotated Figma files.",
    zh: "美國音樂科技新創的唯一設計師。主導端到端產品設計——從概念到 MVP 上線，定義資訊架構、用戶流程與互動模式（行動 App + 網頁平台）。在 Figma 建立並記錄可擴展的設計系統。跨三個時區（台灣·美國·烏克蘭）異步協作，每日撰寫設計進度更新並附上設計理由與標註的 Figma 檔案。",
  },

  "resume.exp2.company": { en: "ThunderCore", zh: "ThunderCore" },
  "resume.exp2.role": { en: "Product Designer", zh: "Product Designer" },
  "resume.exp2.period": { en: "Feb 2021 – Aug 2023", zh: "2021/02 – 2023/08" },
  "resume.exp2.bullets": {
    en: "Redesigned deposit flow for a mobile wallet with 400K+ MAU, reducing friction in high-stakes operations where errors mean permanent loss of funds. Built and maintained the product's design system to ensure consistency across features. Designed referral program that drove +20% MAU growth and contributed to a 16% increase in token value. Facilitated cross-functional workshops for a cross-chain asset transfer product (multi-million dollar migration goal), shifting team consensus from UI modernization to risk-disclosure-first approach. Led internationalization across 11 languages, coordinating with regional GMs and recommending Lokalise to improve translation workflows. Mentored a UX intern for 6 months (went on to top HCI program in Seattle) and coached a junior designer. Rated \"Above Expectation\" — recognized for highest cross-team integration capability.",
    zh: "為 40 萬+ MAU 的行動錢包重新設計入金流程，降低高風險操作的摩擦——在這些操作中，錯誤意味著資金永久損失。建立並維護產品設計系統，確保跨功能的一致性。設計推薦計畫推動 MAU 成長 +20%，同時帶動代幣價值上升 16%。主導跨鏈資產轉移產品的跨部門工作坊（千萬美元級遷移目標），將團隊共識從 UI 現代化轉向風險揭露優先。主導 11 種語言的國際化，與各國 GM 協調翻譯並建議採用 Lokalise 改善流程。帶領 UX 實習生 6 個月（後赴 University of Washington）並指導初階設計師。績效評為「Above Expectation」——被評為團隊中整合能力最高。",
  },

  "resume.exp3.company": { en: "BitoGroup", zh: "幣託集團" },
  "resume.exp3.role": { en: "Product Designer", zh: "Product Designer" },
  "resume.exp3.period": { en: "Aug 2019 – Feb 2021", zh: "2019/08 – 2021/02" },
  "resume.exp3.bullets": {
    en: "Designed BitoDebt from 0→1 through 3 iterations — a financial product where every interaction involves real capital at risk. +34% conversion (22%→56%), 100% sell-out rate, +57% trading volume. Product grew from experiment to 25% of company revenue. Partnered with UX research firm (UserXPer) on mixed-methods study: 9 in-depth interviews, 36 survey responses, and data analysis across 83K+ user records and 760K+ transactions — producing 3 user personas that informed product strategy. Identified collaboration bottleneck and drove migration from Sketch+Zeplin to Figma, enabling real-time design review via shareable links for leadership, marketing, and support teams.",
    zh: "從零到一設計 BitoDebt，歷經 3 次迭代——每個互動都涉及真實資金風險的金融產品。轉換率 +34%（22%→56%），每檔完售，交易量 +57%，從實驗成長為公司 25% 營收。與悠識數位合作進行混合研究：9 位深度訪談、36 份問卷、分析 83K+ 用戶紀錄與 760K+ 交易——產出 3 個 Persona 指導產品策略。發現協作瓶頸，推動全團隊從 Sketch+Zeplin 遷移至 Figma，讓主管、行銷、客服可透過連結即時查看設計。",
  },

  "resume.exp4.company": { en: "IBM", zh: "IBM" },
  "resume.exp4.role": { en: "UI Developer", zh: "UI Developer" },
  "resume.exp4.period": { en: "2018", zh: "2018" },
  "resume.exp4.bullets": {
    en: "Built production UI for E.SUN Bank's field CRM system serving tens of thousands of bankers — embedded on-site to map banker workflows and translate requirements into responsive, interactive prototypes.",
    zh: "為玉山銀行行員外訪 CRM 系統建置產品介面，服務數萬名行員——駐點理解行員工作流程，將需求轉化為響應式互動原型。",
  },

  "resume.skills": { en: "Skills", zh: "技能" },
  "resume.skills.design": { en: "Design", zh: "設計" },
  "resume.skills.design.list": {
    en: "Figma, FigJam, Design Systems, Interaction Design, Prototyping, Wireframing, User Flows, Information Architecture, Responsive Design, Visual Design, Accessibility (WCAG), Product Strategy",
    zh: "Figma、FigJam、設計系統、互動設計、Prototyping、Wireframing、User Flows、資訊架構、響應式設計、視覺設計、無障礙設計（WCAG）、產品策略",
  },
  "resume.skills.research": { en: "Research", zh: "研究" },
  "resume.skills.research.list": {
    en: "User Interviews, Usability Testing, Surveys, Persona Development, Journey Mapping, Data-informed Design",
    zh: "用戶訪談、易用性測試、問卷調查、Persona、Journey Mapping、數據驅動設計",
  },
  "resume.skills.data": { en: "Data & Analysis", zh: "數據分析" },
  "resume.skills.data.list": {
    en: "Google Analytics, Hotjar, Funnel Analysis, A/B Testing",
    zh: "Google Analytics、Hotjar、漏斗分析、A/B Testing",
  },
  "resume.skills.facilitation": { en: "Facilitation", zh: "引導" },
  "resume.skills.facilitation.list": {
    en: "Cross-functional Workshops, Stakeholder Alignment, Design Critique, Async Communication, Jira, Miro, Notion, ClickUp",
    zh: "跨部門工作坊、利害關係人對齊、設計評審（Design Critique）、異步溝通、Jira、Miro、Notion、ClickUp",
  },

  "resume.edu": { en: "Education", zh: "學歷" },
  "resume.edu.school": {
    en: "Taipei National University of the Arts",
    zh: "國立臺北藝術大學",
  },
  "resume.edu.dept": {
    en: "Department of New Media Art · 2010–2015",
    zh: "新媒體藝術學系 · 2010–2015",
  },

  "resume.cert": { en: "Certifications", zh: "證照" },
  "resume.cert.ga": {
    en: "Google Analytics Individual Qualification (2021)",
    zh: "Google Analytics 個人認證（2021）",
  },
  "resume.cert.ideo": {
    en: "IDEO — Design Kit: Human-Centered Design (2019)",
    zh: "IDEO — 以人為本的設計（2019）",
  },

  "resume.community": { en: "Community", zh: "社群" },
  "resume.community.ltux": {
    en: "Ladies that UX Taipei — Director (2021–2022). Organized 6+ events (50–100 attendees each), facilitated user research workshops.",
    zh: "Ladies that UX 台北 — 負責人（2021–2022）。舉辦 6+ 場活動（每場 50-100 人），帶領使用者研究工作坊。",
  },
  "resume.community.uxy": {
    en: "UXY — Workshop Program Lead (2024–Present). Curate monthly design & AI workshops for 500+ annual participants (4.5/5 satisfaction). Sourced international speakers including accessibility (A11Y) practitioners.",
    zh: "UXY — 工作坊策劃負責人（2024–至今）。每月策劃設計與 AI 工作坊，年度 500+ 人參加（滿意度 4.5/5）。邀請海外講者包括無障礙（A11Y）設計師。",
  },

  // ═══════════════════════════════════════════════
  // Deposit Case Study
  // ═══════════════════════════════════════════════

  // Deposit — Hero
  "dp.label": { en: "TT Wallet · Mobile App · 2021–2023", zh: "TT Wallet · 行動 App · 2021–2023" },
  "dp.title": {
    en: "They asked for an entry point. I delivered an information architecture.",
    zh: "他們要我加一個入口。我交付了一套資訊架構。",
  },
  "dp.subtitle": {
    en: "I received a feature request to add a credit card payment entry. I discovered the real problem was a broken deposit flow architecture — and redesigned the entire system.",
    zh: "我接到「串接刷卡服務，加一個入口」的需求。我發現真正的問題是入金流程的資訊架構混亂——然後重新設計了整個系統。",
  },
  "dp.role": {
    en: "Product Designer — Research, Strategy, UI/UX, Flow Design",
    zh: "Product Designer — 研究、策略、UI/UX、流程設計",
  },
  "dp.team": { en: "Product, Engineering, Marketing", zh: "產品、工程、行銷" },
  "dp.duration": { en: "2021–2023", zh: "2021–2023" },
  "dp.m.reframe": { en: "PROBLEM REFRAMING", zh: "問題重構" },
  "dp.m.architecture": { en: "ARCHITECTURE ADOPTED", zh: "架構沿用" },
  "dp.m.data": { en: "QUANTIFIED DATA", zh: "量化數據" },

  // Deposit — The Brief
  "dp.brief.label": { en: "The Brief", zh: "我接到的需求" },
  "dp.brief.title": {
    en: "\"Add a credit card entry point.\"",
    zh: "「串接刷卡服務，加一個入口。」",
  },
  "dp.brief.desc": {
    en: "The task seemed straightforward: integrate a third-party credit card service and add an entry point to the wallet. On the surface, a one-day feature request.",
    zh: "任務看起來很直接：串接第三方刷卡服務，加一個入口。表面上，這是一天的工作。",
  },
  "dp.brief.quote": {
    en: "Let TT Wallet users buy crypto with credit cards, and clean up the deposit entry points.",
    zh: "讓 TT Wallet 使用者能用信用卡買到加密貨幣，同時把錢包裡的入金入口整理乾淨。",
  },

  // Deposit — Real Problem
  "dp.problem.label": { en: "What I Actually Saw", zh: "我看到的真正問題" },
  "dp.problem.title": {
    en: "It's not about missing entry points — the architecture is creating confusion.",
    zh: "不是入口不夠，是架構在製造混亂。",
  },
  "dp.problem.desc": {
    en: "When I examined the existing user paths, I found the real issue hidden behind \"clean up entry points\":",
    zh: "當我開始檢視現有的使用路徑時，我發現「整理入口」背後藏著一個資訊架構問題：",
  },
  "dp.problem.p1": {
    en: "Users confused Deposit (transfer existing crypto), Buy Crypto (credit card purchase), and Receive (accept transfers)",
    zh: "使用者搞混 Deposit（轉入已有的幣）、Buy Crypto（刷卡買幣）、Receive（接收轉帳）",
  },
  "dp.problem.p2": {
    en: "Entry point locations, naming, and user mental models were completely misaligned",
    zh: "這三個功能在錢包裡的入口位置、命名、和使用者的心智模型完全對不上",
  },
  "dp.problem.p3": {
    en: "Once users took the wrong path, the next step was a credit card payment or an external wallet transfer — irreversible",
    zh: "一旦走錯，後面就是刷卡付款或從外部錢包發送交易——不可逆",
  },
  "dp.problem.callout": {
    en: "If I just \"add an entry point,\" I'm adding complexity to an already chaotic architecture, making the problem worse.",
    zh: "如果我只是「加一個入口」，等於在一個已經混亂的架構上再加一個選項，讓問題更嚴重。",
  },
  "dp.problem.reframe": {
    en: "I proposed to the team: this isn't an \"add entry point\" problem — it's an \"the deposit flow's information architecture needs a redesign\" problem. The team agreed to let me redefine the design scope.",
    zh: "我向團隊提出：這不是「加入口」的問題，是「入金流程的資訊架構需要重設計」的問題。團隊同意讓我重新定義設計範圍。",
  },

  // Deposit — v0 Design
  "dp.v0.label": { en: "First Instinct (v0)", zh: "第一版設計（v0）" },
  "dp.v0.title": {
    en: "It looked smart. I killed it myself.",
    zh: "看起來很聰明。我自己推翻了它。",
  },
  "dp.v0.tag": {
    en: "Judgment: Overturn your own design when the assumption fails.",
    zh: "判斷：當假設不成立，推翻自己的設計。",
  },
  "dp.v0.desc": {
    en: "My first instinct: since users can't tell which function they need, just ask them.",
    zh: "我的第一直覺：既然使用者搞不清楚自己要用哪個功能，那就先問他。",
  },
  "dp.v0.design": {
    en: "v0: Ask \"Do you have crypto?\" at the start of the deposit flow → branch to Transfer or Credit Card flow.",
    zh: "v0：在 Deposit 流程開頭先問使用者「你有幣嗎？」→ 分流到轉帳或刷卡流程。",
  },
  "dp.v0.assumption": {
    en: "Assumption: users can accurately describe their own state — the product just needs to ask the right question.",
    zh: "背後的假設：使用者能清楚描述自己的狀態，產品只要問對問題，就能幫他走到正確的路。",
  },
  "dp.v0.flaw.title": { en: "Why I killed v0", zh: "為什麼我推翻了 v0" },
  "dp.v0.flaw.body": {
    en: "Different people interpret \"Do you have crypto?\" completely differently:",
    zh: "不同人對「我有沒有 crypto」的理解完全不同——",
  },
  "dp.v0.flaw1": {
    en: "Some think: \"Do I have crypto in TT Wallet?\"",
    zh: "有人理解成「在 TT Wallet 裡有沒有」",
  },
  "dp.v0.flaw2": {
    en: "Some think: \"Have I ever owned crypto in my life?\"",
    zh: "有人理解成「我人生中有沒有」",
  },
  "dp.v0.flaw3": {
    en: "Some aren't sure if they still have any",
    zh: "有些人不確定自己還有沒有幣",
  },
  "dp.v0.flaw4": {
    en: "Some only remember when they see a token name from another exchange",
    zh: "有些人是看到幣名，才想起自己在某個交易所還有",
  },
  "dp.v0.flaw.insight": {
    en: "v0 wasn't helping users choose — it was forcing them to make a judgment they couldn't reliably make, then locking them into a potentially wrong path.",
    zh: "我的 v0 設計不是在幫使用者分類——而是在要求他先做出一個他不一定能回答的判斷，然後把他鎖進一條可能是錯的路。",
  },
  "dp.v0.table.before": {
    en: "Users don't know which entry to take",
    zh: "使用者不知道該走哪個入口",
  },
  "dp.v0.table.after": {
    en: "Users lack sufficient context to judge their own state before choosing",
    zh: "使用者在做出選擇前，缺乏足夠的脈絡來判斷自己的狀態",
  },
  "dp.v0.table.before2": {
    en: "Need a classification mechanism",
    zh: "需要一個分類機制",
  },
  "dp.v0.table.after2": {
    en: "Need an architecture that lets users \"see\" their own state",
    zh: "需要一個讓使用者自己「看見」自己狀態的架構",
  },

  // Deposit — Final Design
  "dp.final.label": { en: "Final Design", zh: "最終設計" },
  "dp.final.title": {
    en: "Let users see reality — don't classify them.",
    zh: "讓使用者看見現實，而不是替他歸類。",
  },
  "dp.final.desc": {
    en: "After killing v0, I redesigned the entire deposit flow architecture based on three principles.",
    zh: "推翻 v0 之後，我重新設計了整個入金流程的架構，基於三個原則。",
  },
  "dp.final.p1.title": {
    en: "Side by side, no recommendation",
    zh: "並列，不推薦",
  },
  "dp.final.p1.body": {
    en: "Deposit and Buy Crypto coexist as equals, switchable at any time. No visual recommendation, no Next Best Action, no default path. The system can't know the user's asset situation better than they do.",
    zh: "Deposit 與 Buy Crypto 並列存在，允許隨時切換。沒有視覺推薦、沒有 Next Best Action、沒有預設路徑。系統不可能比使用者更了解他自己的資產狀況。",
  },
  "dp.final.p1.caption": {
    en: "v0 vs Final: avoiding visual recommendation — intentional equal weight",
    zh: "v0 vs Final：避免視覺推薦——刻意平等權重",
  },
  "dp.final.p2.title": {
    en: "Concrete options over abstract questions",
    zh: "用具體選項取代抽象問題",
  },
  "dp.final.p2.body": {
    en: "Instead of asking \"Do you have crypto?\", directly show the supported token list. Users identify their own state through concrete options: which tokens they recognize, which they actually hold, which are currently unavailable.",
    zh: "不再問「你有沒有幣」，而是直接展示系統支援的幣種列表。讓使用者透過具體選項來辨識自己的狀態：哪些幣他熟悉、哪些他其實還有、哪些目前不可用。",
  },
  "dp.final.p2.insight": {
    en: "This was the core shift from v0 to Final: from \"asking users who they are\" to \"showing reality so users recognize themselves.\"",
    zh: "這是 v0 到 Final 最核心的轉變：從「問使用者他是誰」變成「展示現實讓使用者自己認出自己」。",
  },
  "dp.final.p3.title": {
    en: "Delayed commitment — fully reversible until the last step",
    zh: "延遲承諾——全程可逆，直到最後一步",
  },
  "dp.final.p3.body": {
    en: "After entering the deposit flow, users can still switch between Buy and Deposit. Token and Network choices remain reversible. Only the final step (\"Pay Now\") triggers an irreversible action.",
    zh: "進入 Deposit 流程後，仍可切換 Buy / Deposit。Token 與 Network 的選擇仍可返回。只有在最後一步（「立即支付」）才進入不可逆行為。",
  },
  "dp.final.p3.caption": {
    en: "Full flow: no payment yet (reversible) → user control (step back) → payment confirmed (irreversible)",
    zh: "完整流程：尚未付款（可逆）→ 使用者控制（可返回）→ 確認付款（不可逆）",
  },

  // Deposit — Architecture Comparison
  "dp.arch.label": { en: "Architecture Comparison", zh: "架構對比" },
  "dp.arch.title": {
    en: "From high-risk pipeline to safe exploration zone.",
    zh: "從高風險管道到安全探索區。",
  },
  "dp.arch.desc": {
    en: "v0 required users to make a judgment before seeing their asset reality — one wrong call cascades into irreversible consequences. The Final design turns every choice into reversible exploration — users can always go back until they press \"Pay Now.\"",
    zh: "v0 要求使用者在看見資產現狀前就做判斷，一旦錯誤就是連鎖反應。Final 把所有選擇都變成可逆的探索——使用者在按下「立即支付」前，始終可以回頭。",
  },
  "dp.arch.v0": { en: "v0 Architecture: High Risk", zh: "v0 架構：高風險" },
  "dp.arch.final": { en: "Final Architecture: Safe Buffer Zone", zh: "最終架構：安全緩衝區" },

  // Deposit — Honest Disclosure
  "dp.honest.label": { en: "Honest Disclosure", zh: "誠實揭露" },
  "dp.honest.title": {
    en: "This case has no quantified outcome data.",
    zh: "這個案例沒有最終的量化數據。",
  },
  "dp.honest.body": {
    en: "I did not obtain production environment data during the tracking phase due to organizational resource allocation changes. The architecture logic was adopted in subsequent versions, indicating team alignment with this design direction. But I cannot provide conversion rate or support ticket before/after numbers.",
    zh: "在專案推行後的追蹤階段，因為組織資源調度，我未能取得生產環境的數據。此架構邏輯沿用至後續版本，代表團隊認同這個設計方向。但我無法提供轉換率或客服案件量的 before/after 數字。",
  },
  "dp.honest.what": { en: "What I Delivered", zh: "我交付了什麼" },
  "dp.honest.w1": {
    en: "Redesigned the entire deposit flow information architecture",
    zh: "重新設計入金流程的資訊架構",
  },
  "dp.honest.w2": {
    en: "Established \"side by side + concrete options + delayed commitment\" framework",
    zh: "建立「並列不推薦 + 具體選項取代抽象問題 + 延遲承諾」的架構原則",
  },
  "dp.honest.w3": {
    en: "Architecture adopted in subsequent versions",
    zh: "此架構沿用至後續版本",
  },

  // Deposit — Reflections
  "dp.reflect.label": { en: "Reflections", zh: "反思" },
  "dp.reflect.title": {
    en: "Three things I learned from reframing a brief.",
    zh: "重新定義需求，我學到的三件事。",
  },
  "dp.reflect.1.title": {
    en: "Feature requests often hide architecture problems.",
    zh: "功能需求的背後經常藏著架構問題。",
  },
  "dp.reflect.1.body": {
    en: "\"Add an entry point\" looked like a one-day job. But if I had only added an entry, I'd be stacking complexity onto an already chaotic architecture. A senior designer's value isn't executing faster — it's recognizing \"this brief is asking the wrong question\" before executing.",
    zh: "「加一個入口」看起來是一天的工作。但如果我真的只加了一個入口，等於在一個已經混亂的架構上疊加複雜度。Senior designer 的價值不是執行得更快，而是在執行前辨識出「這個 brief 問錯了問題」。",
  },
  "dp.reflect.2.title": {
    en: "Overturning your own design is harder than overturning someone else's — but more valuable.",
    zh: "推翻自己的設計，比推翻別人的更難——但更值得。",
  },
  "dp.reflect.2.body": {
    en: "v0 was my own design, and it was logically sound. Killing it meant admitting \"my first instinct was wrong.\" But if I had stuck with v0 due to sunk cost, users would pay for my ego.",
    zh: "v0 是我自己做的設計，邏輯上也說得通。推翻它需要承認「我的第一直覺是錯的」。但如果我因為沉沒成本而堅持 v0，使用者要為我的面子買單。",
  },
  "dp.reflect.3.title": {
    en: "\"The system doesn't know the user's state\" is an architecture decision.",
    zh: "承認「系統不知道使用者的狀態」，是一個架構決策。",
  },
  "dp.reflect.3.body": {
    en: "v0's failure taught me: the system can't know the user's asset situation better than they do. This isn't a UI decision (whether to ask a question) — it's an architecture decision (whether the system should assume it knows who the user is). Choosing \"don't assume\" reshapes the entire flow structure.",
    zh: "v0 的失敗讓我理解：系統不可能比使用者更了解他自己的資產狀況。這不是一個 UI 決定（要不要問問題），而是一個架構決定（系統是否應該假設自己知道使用者是誰）。選擇「不假設」，會連帶影響整個流程的結構。",
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
