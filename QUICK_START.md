# Evelyn Wu Portfolio - Quick Start Guide

## 📋 已完成的準備工作

✅ **完整需求文件** (`portfolio_requirements.md`)
- 三個核心案例的詳細描述
- 完整網站架構規劃
- 視覺設計系統（顏色、字體、動畫）
- 所有頁面的詳細設計

✅ **開發者 Skill** (`SKILL.md`)
- 所有互動元素的實作程式碼
- shadcn/ui 元件使用指南
- Adaline.ai 風格的 8+ 動畫範例
- Claude API 整合教學

✅ **技術棧確認**
- Next.js 14+ (App Router)
- Framer Motion
- shadcn/ui
- Tailwind CSS
- Lenis (smooth scroll)

✅ **設計智慧參考**
- [UI UX Pro Max Skill](https://ui-ux-pro-max-skill.nextlevelbuilder.io/) — AI 設計智慧工具
- 提供 50+ 風格、97 色票、57 字體配對、99 UX 準則
- 安裝方式：`npm install -g uipro-cli && uipro init --ai claude`
- GitHub: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- 支援 Next.js / React / shadcn 等 9+ 技術棧
- 用法：請求 UI/UX 設計時自動啟動，產生完整設計系統（色彩、字體、間距、效果、反模式）

---

## 🚀 立即開始（3 種方式）

### 方式 1: 讓 Claude Code 自動建立專案

1. **在終端機執行 Claude Code**:
```bash
claude-code
```

2. **貼上這段指令**:
```
根據 /mnt/skills/user/evelyn-portfolio/SKILL.md，
建立一個完整的 Next.js 作品集專案。

請：
1. 初始化 Next.js + TypeScript + Tailwind
2. 安裝所有必要套件（Framer Motion, shadcn/ui）
3. 建立專案結構
4. 實作首頁 Hero section（參考 Adaline.ai 風格）
5. 設定環境變數範本
```

Claude Code 會自動：
- ✅ 建立完整專案結構
- ✅ 安裝所有依賴
- ✅ 設定 shadcn/ui
- ✅ 建立基礎元件
- ✅ 實作動畫效果

---

### 方式 2: 手動建立（完整掌控）

```bash
# 1. 建立 Next.js 專案
npx create-next-app@latest evelyn-portfolio \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir

cd evelyn-portfolio

# 2. 安裝核心套件
npm install framer-motion @anthropic-ai/sdk lucide-react

# 3. 初始化 shadcn/ui
npx shadcn-ui@latest init

# 選擇：
# - Style: Default
# - Base color: Slate
# - CSS variables: Yes

# 4. 安裝常用 shadcn 元件
npx shadcn-ui@latest add button card input textarea \
  slider tabs progress accordion badge hover-card \
  radio-group scroll-area avatar skeleton

# 5. 建立專案結構
mkdir -p components/{sections,interactive,animations}
mkdir -p app/{cases/{deposit,referral,bridge},api/{analyze-jd,chat}}
mkdir -p lib

# 6. 設定環境變數
cat > .env.local << EOF
ANTHROPIC_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF

# 7. 啟動開發伺服器
npm run dev
```

---

### 方式 3: 使用 AI 助手逐步建立

**階段 1: 首頁 Hero**
```
請根據 SKILL.md 的 "Complete Example: Homepage Hero Section"，
建立 app/page.tsx 和相關動畫元件。

要包含：
- 漸層背景動畫
- 標題 stagger 效果
- 數字滾動 counter
- Scroll indicator
```

**階段 2: 快速測驗**
```
建立 components/sections/QuickQuiz.tsx，
實作三選一的互動測驗，
顯示三個平行宇宙的後果。

使用 shadcn/ui 的 RadioGroup 和 Card。
```

**階段 3: JD 分析工具**
```
建立：
1. components/sections/JDAnalysis.tsx（前端）
2. app/api/analyze-jd/route.ts（後端）
3. lib/claude.ts（API client）

實作 Claude API 整合。
```

---

## 📂 建議的開發順序

### Week 1: 核心結構
- [ ] 專案初始化
- [ ] 建立 Hero section
- [ ] 設定設計系統（顏色、字體）
- [ ] 實作基礎動畫元件

### Week 2: 互動元素
- [ ] 快速測驗 section
- [ ] JD 分析工具
- [ ] Claude API 整合
- [ ] 第一個案例頁面（TT Wallet Deposit）

### Week 3: 案例頁面
- [ ] BalanceScale 互動元件
- [ ] ForkRoad 互動元件
- [ ] Timeline 互動元件
- [ ] 完成三個案例頁面

### Week 4: 優化上線
- [ ] AI 使用展示頁面
- [ ] About 頁面
- [ ] SEO 優化
- [ ] 效能優化
- [ ] 部署到 Vercel

---

## 🎨 重要的設計決策參考

### 從 Adaline.ai 學到的
1. **數字要會動** - 用 Counter 元件讓統計數字滾動
2. **卡片要 stagger** - 不要同時出現，要依序浮現
3. **滾動要觸發** - 進入視窗才觸發動畫，節省效能
4. **Hover 要有回饋** - 卡片 hover 要有微微的 scale 和 shadow
5. **3D 感很重要** - 產品截圖加入 perspective 和滑鼠追蹤

### Evelyn 的核心價值
- **誠實 > 華麗** - 動畫要有目的，不是裝飾
- **清楚 > 快速** - 寧願多一個步驟，也要讓用戶理解
- **數據支持** - 每個 claim 都要有數字
- **展示過程** - 不只展示結果，要展示思考過程

---

## 🔧 常用程式碼片段

### 建立新的 Section
```tsx
// components/sections/MySection.tsx
"use client"

import { SectionReveal } from "@/components/animations/SectionReveal"

export function MySection() {
  return (
    <SectionReveal delay={0.2}>
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">Section Title</h2>
        {/* Your content */}
      </div>
    </SectionReveal>
  )
}
```

### 加入 Counter
```tsx
import { Counter } from "@/components/animations/Counter"

<div className="text-4xl font-bold">
  <Counter value={23} suffix="%" />
</div>
```

### 使用 shadcn Card
```tsx
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

<MotionCard
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
>
  <CardContent>
    {/* Content */}
  </CardContent>
</MotionCard>
```

---

## 🐛 常見問題

### Q: Framer Motion 的動畫在 Next.js 中不工作？
```tsx
// 記得加 "use client"
"use client"

import { motion } from "framer-motion"
```

### Q: shadcn/ui 元件找不到？
```bash
# 確認有安裝
npx shadcn-ui@latest add [component-name]

# 檢查 components.json 是否存在
cat components.json
```

### Q: Claude API 回應太慢？
```tsx
// 加入 loading 狀態
const [loading, setLoading] = useState(false)

// 使用 Skeleton
import { Skeleton } from "@/components/ui/skeleton"
{loading && <Skeleton className="h-4 w-full" />}
```

### Q: 動畫在手機上卡頓？
```tsx
// 在小螢幕減少動畫
const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

<motion.div
  animate={reduceMotion ? {} : { y: [0, 10, 0] }}
>
```

---

## 📚 關鍵文件

1. **portfolio_requirements.md** - 完整需求和設計規範
2. **SKILL.md** - 開發者實作指南
3. **This file (QUICK_START.md)** - 快速開始

---

## 🎯 檢查清單：第一次 Commit 前

- [ ] 專案可以正常 `npm run dev`
- [ ] shadcn/ui 已初始化
- [ ] 環境變數已設定（`.env.local`）
- [ ] 基礎元件已建立（Hero, Counter）
- [ ] Git 已初始化並加入 `.gitignore`

```bash
# Git 初始化
git init
git add .
git commit -m "Initial commit: Next.js + Framer Motion + shadcn/ui"
```

---

## 💡 Pro Tips

1. **先做 MVP，再做完美**
   - Week 1 只要能看到首頁動畫就好
   - 不要一開始就追求完美

2. **常常 commit**
   - 每完成一個 section 就 commit
   - 方便回退

3. **用 Vercel Preview**
   - 每個 commit 都能產生預覽連結
   - 方便分享給朋友看

4. **先讀 SKILL.md**
   - 裡面有完整的程式碼範例
   - 可以直接複製貼上

5. **善用 Claude Code**
   - 讓 AI 幫你產生重複的元件
   - 你專注在設計決策

---

## 🚢 部署到 Vercel

```bash
# 1. 安裝 Vercel CLI
npm i -g vercel

# 2. 登入
vercel login

# 3. 部署
vercel

# 4. 設定環境變數（在 Vercel Dashboard）
# - ANTHROPIC_API_KEY
# - NEXT_PUBLIC_SITE_URL

# 5. 綁定自訂網域（可選）
# 在 Vercel Dashboard 設定
```

---

## 需要幫助？

- 查看 **SKILL.md** 的完整程式碼範例
- 查看 **portfolio_requirements.md** 的設計規範
- 使用 Claude Code 自動生成元件
- 參考 Adaline.ai 的動畫效果

**祝你建立一個超讚的作品集！** 🎉
