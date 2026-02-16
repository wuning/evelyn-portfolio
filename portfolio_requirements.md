# Evelyn Wu 作品集開發需求文件

## 專案概述

### 目標
打造一個互動式作品集網站，展示 Evelyn Wu 作為 Product Designer 在高風險金融產品中的設計決策能力，同時證明她是一位會使用 AI 的 Product Builder。

### 目標公司
- Google
- Notion
- Figma
- Netskope
- 其他重視 product thinking 和 ethical design 的科技公司

### 核心訊息
「在高風險產品中，每個設計決定都是分岔路。我選擇誠實、可逆、保護用戶。」

---

## 設計師背景

### Evelyn 的核心特質
1. **Responsibility-driven Designer**
   - 願意犧牲轉換率來保護用戶
   - 在不可逆的金融操作中，寧願讓流程「不那麼順」也要確保用戶做出正確判斷
   - 相信「順暢不是無感，而是有把握」

2. **Systems Thinker**
   - 不只改介面，而是重新設計「責任結構」
   - 關注「判斷發生的時刻」而非「介面美化」
   - 擅長識別結構性問題

3. **Honest Communicator**
   - 公開討論失敗案例（Referral 上線 2 週就下架）
   - 明確說明 trade-offs（接受轉換率下降 8%）
   - 不用設計掩蓋複雜性

4. **AI-assisted Product Builder**
   - 會用 AI 輔助思考，但保留人類判斷
   - 理解 AI 是工具，不是替代品

### 四個核心案例

#### 案例 1: BitoDebt - 債權認購平台
- **情境**: 設計台灣首個虛擬貨幣債權理財產品
- **問題**: 用戶不理解債權概念,在高風險金融產品中需要建立信任
- **我的選擇**: 三階段迭代 - MVP簡化 → 視覺敘事建立信任 → 數據驅動優化
- **Trade-off**:
  - ✅ 投資轉換率從 22% → 56% (+34%)
  - ✅ 平台交易額 +57%
  - ✅ 訂單轉化率達 100%
  - ❌ 支付方式假設錯誤導致用戶抱怨(快速修正)
- **核心洞察**: 
  - 在金融產品中,「順暢」不等於「快速」,而是「讓用戶有把握」
  - 永遠用數據驗證假設,不要相信設計師的直覺
  - 每個細節(如預設選項)都可能造成巨大摩擦

#### 案例 2: TT Wallet 入金流程
- **情境**: 設計信用卡購買加密貨幣的流程
- **問題**: 用戶對「我有沒有 crypto」的理解完全不同
- **我的選擇**: 放棄「問問題分流」，改為「直接展示幣種列表」
- **Trade-off**: 
  - ✅ 客服諮詢減少 23%
  - ✅ 用戶在付錢前就能發現走錯路
  - ❌ 轉換率下降 8%
- **核心洞察**: 在不可逆的金融操作中，預判式設計可能變成陷阱

#### 案例 2: TT Wallet Referral
- **情境**: 設計推薦計畫來拉新用戶
- **問題**: 新用戶在建立信任前就被要求存款
- **我的選擇**: 提早揭露獎勵用途，而非用高誘因掩蓋複雜性
- **Trade-off**:
  - ✅ MAU 成長 20%
  - ✅ 虛假帳號減少
  - ❌ DAU 未達目標，功能 2 週後下架
- **核心洞察**: 誠實比轉換率重要；在不完美條件下，不誤導就是負責

#### 案例 3: ThunderCore Bridge
- **情境**: 團隊想優化跨鏈轉帳介面
- **問題**: 流程太順了，用戶在未理解前就完成不可逆操作
- **我的選擇**: 暫緩介面優化，先重新定義「判斷發生的時刻」
- **Trade-off**:
  - ✅ 團隊重新定義「好體驗」
  - ✅ 避免讓問題更嚴重
  - ❌ 沒有產出新介面
- **核心洞察**: 有時候最重要的設計決策是「現在不該做什麼」

---

## 網站架構

### 整體流程
```
首頁 (5 秒決定)
  ↓
快速測驗 (30 秒體驗我的思考方式)
  ↓
JD 分析工具 (AI 驅動，展示我會用 AI)
  ↓
三個互動案例 (5-10 分鐘深度了解)
  ↓
AI 使用展示 (證明我是 Product Builder)
  ↓
關於我 + 聯絡方式
```

### 頁面詳細規劃

#### 1. 首頁 (Landing Page)
**目標**: 5 秒內抓住注意力

**視覺元素**:
- 開場動畫：一條線延伸，遇到分岔點
- 大標題：「在高風險產品中，每個設計決定都是分岔路」
- 副標題：「我選擇誠實、可逆、保護用戶」

**互動提示**:
- 「滾動開始你的選擇 ↓」
- 立刻進入第一個互動測驗

#### 2. 快速測驗頁面
**目標**: 讓訪客體驗我的思考方式

**測驗內容**:
```
情境：
你是 TT Wallet 的產品設計師
用戶要用信用卡買加密貨幣
但有些人已經有幣，有些人沒有

你會怎麼設計入金流程？

□ A. 先問用戶「你有沒有 crypto？」再分流
   （快速、直覺、減少選擇）

□ B. 直接展示所有幣種，讓用戶自己判斷
   （複雜、但誠實、可逆）

□ C. 用 AI 判斷用戶可能需要什麼
   （聰明、省事、但可能誤判）
```

**互動效果**:
1. 用戶選擇後
2. 畫面分裂成三個平行宇宙（使用分屏動畫）
3. 每個選項顯示可能後果：
   - 選項 A: 轉換率 ↑15%，客服 ↑40%，用戶付錢後才發現錯誤
   - 選項 B: 轉換率 ↓8%，客服 ↓23%，用戶付錢前能發現問題
   - 選項 C: 看似聰明，用戶失去判斷，長期信任 ↓

4. 顯示「我的選擇」：
   ```
   我選了 B
   這是為什麼 → [進入完整案例]
   ```

#### 3. JD 分析工具頁面
**目標**: 展示 AI 使用能力 + 提供實用價值

**介面設計**:
```
[大標題]
「看看這個職位是否需要我的技能」

[文字輸入框 - 大尺寸，placeholder]
把你想僱用我的 Job Description 貼在這裡...

[按鈕]
→ 用 AI 分析這個職位
```

**分析流程**:
1. 顯示 loading 動畫（優雅的載入效果，不要太長）
2. AI 實時分析：
   - 提取關鍵能力要求
   - 對比三個案例
   - 生成匹配度分析

**結果展示**:
```
這個職位需要：
✓ 在高風險產品中做決策 
  → 匹配案例：TT Wallet 入金流程
  
✓ 平衡商業目標和用戶保護 
  → 匹配案例：TT Wallet Referral
  
✓ 挑戰既有流程 
  → 匹配案例：ThunderCore Bridge

匹配度：87%

[按鈕] 看詳細案例
[按鈕] 下載客製化摘要 (PDF)
```

**技術需求**:
- 串接 Claude API（使用 Sonnet 4）
- Prompt 設計要能：
  1. 提取 JD 中的核心能力要求
  2. 找出與 Evelyn 三個案例的關聯
  3. 生成簡潔的匹配分析
  4. 可選：生成 PDF 摘要

#### 4. 互動案例頁面（三個案例）

**共同設計原則**:
- 使用 scrollytelling（滾動敘事）
- 每個案例分 5 個場景
- 在關鍵決策點加入互動元素

**案例 1: TT Wallet 入金流程**

場景結構：
```
場景 1: 問題揭露
- 標題：「用戶搞不清楚 Deposit / Buy Crypto / Receive」
- 互動：點擊不同用戶角色，看他們如何誤解問題
- 視覺：用戶對話氣泡，顯示不同理解

場景 2: 我的第一版設計（V0）
- 標題：「我的第一個直覺：用問題分流」
- 視覺：流程圖動畫
- 互動：可以點擊流程看細節

場景 3: 發現問題
- 標題：「為什麼我推翻了 V0」
- 互動：4 個用戶對同一問題的不同理解
- 視覺：分裂的對話框

場景 4: 決策時刻（核心互動）
- 標題：「我的設計轉向」
- **互動元素：拖動天秤**
  ```
  [左邊] 轉換率
  - 問題分流
  - 快速完成
  - +15% 轉換
  
  [右邊] 用戶信任
  - 幣種列表
  - 誠實揭露
  - -8% 轉換
  
  [天秤中間有滑桿]
  拖動看不同平衡點的後果
  
  [我的選擇標記]
  天秤停在「信任 > 轉換率」
  ```

場景 5: 結果與反思
- 數據卡片動畫浮現
- 客服諮詢 ↓23%
- 用戶返回修改 ↑15%（這是好事）
- 我學到的事：「順暢不是無感，而是有把握」
```

**案例 2: TT Wallet Referral**

場景結構：
```
場景 1: 背景
- 團隊目標：用 Referral 拉新用戶
- 問題：新用戶在建立信任前就被要求存款

場景 2: 三個設計方向
- **互動元素：分岔路選擇**
  ```
  [視覺]
  道路分成三條
  
  [左路] Version A: 視覺驅動
  - 強調高報酬
  - 轉換率高
  - 但誤導用戶
  
  [中路] Version B: 資訊驅動
  - 規則寫清楚
  - 安全但複雜
  
  [右路] Version C: 價值導向
  - 提早說清楚用途
  - 誠實但吸引力低
  
  [互動]
  點擊任一條路
  3D 視角跟著路走
  看到盡頭的不同後果
  ```

場景 3: 我的選擇
- 選了 Version C
- 視覺：路徑高亮，其他兩條暗淡

場景 4: 上線與下架
- 時間軸動畫
- 上線 2 週後下架
- MAU ↑20%，但 DAU 未達標

場景 5: 反思
- 「這算失敗嗎？」
- 「誠實比轉換率重要」
- 「在不完美條件下，不誤導就是負責」
```

**案例 3: ThunderCore Bridge**

場景結構：
```
場景 1: 初始需求
- 團隊想優化介面
- 「看起來更現代」

場景 2: 我察覺的問題
- **互動元素：時間軸拖動**
  ```
  [視覺]
  橫向時間軸
  標記關鍵時刻
  
  [互動]
  拖動時間點
  看每個階段的思考
  
  [關鍵時刻 1]
  「錯誤不是發生在最後一步」
  
  [關鍵時刻 2]
  「而是發生在選擇的當下」
  
  [關鍵時刻 3]
  「流程太順了反而是風險」
  ```

場景 3: 工作坊設計
- 我如何讓團隊看見問題
- 不是說服，而是引導發現

場景 4: 達成共識
- 暫緩介面優化
- 重新定義「好體驗」

場景 5: 反思
- 「設計師的工作不只是畫圖」
- 「有時候最重要的決策是『不做什麼』」
```

#### 5. AI 使用展示頁面
**目標**: 證明我是 Product Builder，會用 AI 但有判斷力

**內容結構**:
```
[標題]
「我如何用 AI 輔助設計」

[副標題]
「AI 是我的思考夥伴，不是替代品」

[四個實際案例]

1. 分析用戶訪談
   - 用 AI 整理 50+ 訪談逐字稿
   - 找出模式和 pain points
   - **但最終的洞察是我提煉的**

2. 生成 Edge Cases
   - 用 AI 窮舉可能的錯誤情境
   - 測試流程的穩健性
   - **但風險評估是我做的**

3. 快速視覺探索
   - 用 AI 生成多個設計方向
   - 加速 ideation
   - **但最終選擇是我判斷的**

4. JD 分析工具（你剛才用的）
   - 這個工具本身就是展示
   - 展示我會整合 AI 到產品中

[互動元素：AI 對話模擬]
「問我任何關於案例的問題」

[輸入框]
用戶可以輸入問題

[AI 回答]
基於三個案例內容
使用 RAG（檢索增強生成）
確保回答準確
```

**技術需求**:
- 串接 Claude API
- 實作簡單的 RAG（向量搜尋案例內容）
- 或更簡單：用 long context 把三個案例都放進 system prompt

#### 6. 關於我頁面
**內容**:
```
[照片 - 可選]

[一段話介紹]
我是 Evelyn Wu，一位專注於高風險產品的 Product Designer。
我相信好的設計不是讓流程「無感」，而是讓用戶「有把握」。
在不可逆的決定之前，用戶應該看見完整的資訊。

[核心能力]
- 高風險產品設計（金融、Web3）
- Ethical Design & User Protection
- AI-assisted Product Building
- 工作坊設計與團隊共識

[工具]
Figma, Framer, Claude API, React, Notion

[語言]
繁體中文（母語）
English (Professional)

[聯絡方式]
Email: [...]
LinkedIn: [...]
GitHub: [...]（如果有作品集 repo）

[下載完整履歷]
[按鈕] Download Resume (PDF)
```

---

## 視覺設計規範

### 色彩系統
```
主色調：
- 黑色：#000000（主文字、線條）
- 白色：#FFFFFF（背景）
- 深藍：#1E3A8A（強調色、互動元素、連結）

輔助色：
- 灰色 900: #111827（次要文字）
- 灰色 400: #9CA3AF（輔助文字）
- 灰色 100: #F3F4F6（背景區塊）

狀態色：
- 成功/正面：#10B981（綠色）
- 警告/權衡：#F59E0B（橘色）
- 錯誤/負面：#EF4444（紅色）
```

### 字體系統
```
英文字體：Inter
- Headings: 600-700 weight
- Body: 400-500 weight

中文字體：Noto Sans TC
- Headings: 500-700 weight
- Body: 400-500 weight

字階：
- H1: 48px / 64px (line-height)
- H2: 36px / 48px
- H3: 24px / 32px
- Body: 16px / 24px
- Small: 14px / 20px
```

### 動畫原則
```
參考：
- Adaline.ai 的核心動畫特點：
  * 數字滾動/翻轉效果（200M+ → 展示數據時）
  * 卡片的 stagger 動畫（依序出現）
  * Parallax scrolling（背景與前景不同速度）
  * 產品截圖的 3D 傾斜效果
  * Scroll-triggered animations（進入視窗才觸發）
  
- Apple 的細緻動畫（subtle, purposeful）
- Linear.app 的流暢感（smooth, fast）
- Height.app 的敘事性（storytelling）

具體規範：
- Easing: 
  * 標準: cubic-bezier(0.4, 0.0, 0.2, 1)
  * 彈性: cubic-bezier(0.34, 1.56, 0.64, 1)
  * 滑順: cubic-bezier(0.16, 1, 0.3, 1)
  
- Duration: 
  * 快速互動：200-300ms
  * 場景切換：400-600ms
  * 敘事動畫：800-1200ms
  * 數字滾動：1500-2000ms
  
- Stagger delay: 100-150ms（卡片依序出現）

- 原則：
  * 所有動畫都要有目的
  * 不要同時動太多東西
  * 保持 60fps
  * 使用 transform 和 opacity（避免 layout shift）
  * 在行動裝置上減少動畫複雜度
```

### 視覺隱喻
```
核心隱喻：「分岔路」

具體應用：
1. 線條
   - 代表設計決策的路徑
   - 遇到選擇時分岔
   - 用顏色區分不同選擇

2. 天秤
   - 代表 trade-off
   - 左右兩邊是不同的價值
   - 可拖動表示「選擇權在你」

3. 時間軸
   - 代表決策過程
   - 可拖動看不同時刻的思考

4. 平行宇宙
   - 代表不同選擇的後果
   - 用分屏動畫展示
```

---

## 技術規範

### 技術棧選擇

**✅ 確定方案: Next.js + Framer Motion + shadcn/ui**

**核心技術**:
```
- Framework: Next.js 14+ (App Router)
- Animation: Framer Motion
- UI Components: shadcn/ui
- Styling: Tailwind CSS
- Typography: Inter + Noto Sans TC
- Deployment: Vercel
- API: Claude API (Sonnet 4)
```

**為什麼選這個組合**:
1. **Next.js 14+**
   - 最佳效能 (Server Components)
   - SEO 友善
   - Image optimization
   - 完整掌控

2. **Framer Motion**
   - 專業級動畫
   - 與 React 無縫整合
   - Gesture 支援
   - 效能優異

3. **shadcn/ui**
   - 可完全客製化的元件
   - 基於 Radix UI (無障礙)
   - Tailwind 原生支援
   - 複製即用，不綁定

4. **Tailwind CSS**
   - 快速原型開發
   - 設計系統一致性
   - 極佳的開發體驗

**其他考慮過的方案**:

~~方案 2: Framer~~
- 雖然快速，但客製化受限
- API 整合較複雜
- 不適合複雜互動邏輯

~~方案 3: Webflow + Make.com~~
- No-code 限制太多
- 動畫能力不足

### API 整合

**Claude API 使用**
```javascript
// JD 分析功能
const analyzeJD = async (jobDescription) => {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{
        role: "user",
        content: `你是 Evelyn Wu 的作品集 AI 助手。

分析以下 Job Description，找出核心能力要求，
並對比 Evelyn 的三個案例，給出匹配度分析。

Evelyn 的案例：
1. TT Wallet 入金流程：在高風險金融產品中，選擇誠實揭露而非預判分流
2. TT Wallet Referral：提早說清楚獎勵用途，即使降低吸引力
3. ThunderCore Bridge：暫緩介面優化，重新定義責任結構

Job Description:
${jobDescription}

請以 JSON 格式回應：
{
  "key_requirements": ["需求1", "需求2", ...],
  "matched_cases": [
    {
      "requirement": "需求",
      "case": "案例名稱",
      "reason": "為什麼匹配"
    }
  ],
  "match_score": 0-100,
  "summary": "一段話總結"
}`
      }]
    })
  });
  return response.json();
};
```

**AI 對話功能**
```javascript
// 使用 RAG 或 long context
const askQuestion = async (question) => {
  const caseStudies = `
  [三個案例的完整內容]
  `;
  
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      system: `你是 Evelyn Wu。根據以下案例內容回答問題：
      
${caseStudies}

回答風格：
- 誠實、直接
- 展示思考過程
- 說明 trade-offs
- 不過度包裝`,
      messages: [{
        role: "user",
        content: question
      }]
    })
  });
  return response.json();
};
```

### 效能要求
```
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90
- 所有動畫保持 60fps
- 圖片懶加載
- API 回應加 loading 狀態
```

### SEO 要求
```
Meta Tags:
- Title: "Evelyn Wu - Product Designer for High-Risk Products"
- Description: "在高風險產品中做出負責任的設計決策。專注金融、Web3 產品的 UX 設計。"
- OG Image: 設計一張社群分享圖

Structured Data:
- Person schema
- Portfolio schema
```

---

## 內容撰寫指南

### 語氣與風格
```
✓ 做到：
- 誠實、直接
- 展示思考過程
- 說明 trade-offs
- 用數據支持
- 承認失敗

✗ 避免：
- 過度包裝
- 只說成功
- 隱藏代價
- 用行話炫技
- 假裝完美
```

### 文案範例

**好的文案**:
```
「我選擇讓轉換率下降 8%，
因為我不想讓用戶在付錢後才發現走錯路。」
```

**不好的文案**:
```
「通過優化用戶體驗，
我們成功提升了用戶滿意度。」
（太模糊，沒有具體 trade-off）
```

---

## 開發階段規劃

### Phase 1: MVP（2-3 週）
```
□ 首頁 + 開場動畫
□ 快速測驗（一個選擇題）
□ 一個完整互動案例（TT Wallet 入金）
□ 關於我頁面
□ 基本 RWD
```

### Phase 2: AI 功能（1-2 週）
```
□ JD 分析工具
□ 串接 Claude API
□ AI 對話功能
□ PDF 生成（可選）
```

### Phase 3: 完整案例（2-3 週）
```
□ 第二個案例（Referral）
□ 第三個案例（Bridge）
□ 所有互動元素
□ 動畫打磨
```

### Phase 4: 優化（1 週）
```
□ 效能優化
□ SEO 優化
□ 跨瀏覽器測試
□ 手機版優化
```

---

## 成功指標

### 量化指標
```
- 停留時間 > 3 分鐘（證明有深度參與）
- JD 分析工具使用率 > 30%
- 至少看完一個完整案例 > 50%
- 跳出率 < 40%
```

### 質化指標
```
- HR/Hiring Manager 的反饋
- 是否產生面試邀請
- 是否被分享（LinkedIn, Twitter）
- 是否有人說「這個作品集很特別」
```

---

## 附錄：參考資源

### 靈感網站
```
- Adaline.ai（核心參考）
  * 分階段滾動動畫 (scroll-triggered)
  * 數字翻轉效果 (200M+ API calls)
  * 卡片式內容呈現
  * 深色/淺色主題切換
  * 產品截圖的 3D 透視感
  * 引用卡片的動態載入

- Linear.app（簡潔動畫）
  * 極簡黑白設計
  * 流暢的頁面轉場
  * 細緻的 micro-interactions

- Height.app（敘事性滾動）
  * 一條線的視覺隱喻
  * 持續滾動的故事感

- Stripe.com（數據視覺化）
  * 複雜概念的簡化呈現
  * 動態圖表

- Apple.com（細緻動畫）
  * 產品級的動畫品質
  * 視差滾動 (parallax)

- The Pudding（互動敘事）
  * 數據驅動的故事
  * 互動式圖表
```

### 技術文件
```
- Framer Motion: https://www.framer.com/motion/
- Claude API: https://docs.anthropic.com/
- Scrollytelling: https://pudding.cool/process/scrollytelling-sticky/
```

### 設計資源
```
- Inter 字體: https://rsms.me/inter/
- Noto Sans TC: https://fonts.google.com/noto/specimen/Noto+Sans+TC
- Heroicons: https://heroicons.com/
```

---

## 最後檢查清單

在開發前確認：
```
□ Evelyn 確認三個案例的內容
□ 準備好所有數據（轉換率、客服數據等）
□ 決定技術棧（Framer vs Next.js）
□ 申請 Claude API key
□ 準備網域名稱
□ 設計 OG 圖片
□ 撰寫履歷 PDF
```

在上線前確認：
```
□ 所有連結可用
□ 手機版正常
□ Loading 狀態完整
□ API 錯誤處理
□ 分析工具（GA4）
□ 最後一次校對文案
```

---

**這份文件的目的**：
讓任何開發者（包括 AI）讀完後，能夠：
1. 理解 Evelyn 的背景和價值觀
2. 知道網站要達成什麼目標
3. 清楚每個頁面的結構和互動
4. 能夠開始實作

**下一步**：
根據選擇的技術棧，開始建立專案架構。
