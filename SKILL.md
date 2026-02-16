---
name: portfolio-design-system
description: Evelyn Wu portfolio design system. Use this skill whenever building or modifying any visual element of the portfolio. Contains the definitive color, typography, spacing, component styles, and animation rules. ALL other portfolio skills should reference this skill first.
---

# Portfolio Design System

## Direction: Dark Neo-Grotesque

Dark background + blue accent + Inter tight-tracking headlines. The feel is: precise, modern, confident — like Adaline.ai meets a high-end design portfolio.

**Mood:** Adaline.ai × Linear × Vercel
**NOT:** Serif editorial, startup gradient chaos, generic SaaS

## Color Tokens

```css
:root {
  /* Backgrounds */
  --bg-primary: #0B0D11;
  --bg-secondary: #12141A;
  --bg-card: #16181F;
  --bg-card-hover: #1C1E27;
  --bg-overlay: rgba(11, 13, 17, 0.72);

  /* Text */
  --text-primary: #E8E6E3;
  --text-secondary: #8A8F9D;
  --text-muted: #555B6E;

  /* Accent */
  --accent: #0066FF;
  --accent-dim: rgba(0, 102, 255, 0.10);
  --accent-glow: rgba(0, 102, 255, 0.25);
  --accent-text: #4D94FF;

  /* Semantic */
  --color-danger: #E05252;
  --color-success: #4CAF6A;
  --color-warning: #E0A030;

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-medium: rgba(255, 255, 255, 0.10);
  --border-accent: rgba(0, 102, 255, 0.20);
}
```

## Typography

```css
:root {
  /* Fonts */
  --font-display: 'Inter', 'Noto Sans TC', system-ui, sans-serif;
  --font-body: 'Inter', 'Noto Sans TC', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Scale */
  --text-hero: clamp(36px, 5.5vw, 56px);
  --text-h1: clamp(30px, 4vw, 48px);
  --text-h2: clamp(22px, 3vw, 34px);
  --text-h3: 20px;
  --text-body: 15px;
  --text-small: 13px;
  --text-micro: 11px;

  /* Line heights */
  --leading-tight: 1.15;
  --leading-normal: 1.6;
  --leading-relaxed: 1.8;

  /* Letter spacing */
  --tracking-headline: -0.04em;
  --tracking-tight: -0.02em;
  --tracking-normal: -0.01em;
  --tracking-wide: 0.04em;
  --tracking-caps: 0.12em;
}
```

### Font Usage Rules

| Element | Font | Weight | Size | Tracking | Color |
|---------|------|--------|------|----------|-------|
| Hero headline | Inter | 600 | --text-hero | -0.04em | --text-primary |
| Section title (H2) | Inter | 600 | --text-h2 | -0.04em | --text-primary |
| Card title (H3) | Inter | 600 | --text-h3 | -0.04em | --text-primary |
| Section label (uppercase) | Inter | 500 | --text-micro | 0.12em | --text-muted |
| Body text | Inter | 400 | --text-body | -0.01em | --text-secondary |
| Metrics / tags | JetBrains Mono | 400 | --text-micro | 0.04em | --accent-text |
| Buttons | Inter | 500 | --text-small | 0.02em | varies |

### Font Rendering
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
font-feature-settings: "calt" 1, "kern" 1;
```

### Chinese Typography Note
- Inter does NOT support Chinese characters
- Chinese text falls back to Noto Sans TC (sans-serif)
- Import `Noto Sans TC` as explicit Chinese fallback

## Spacing

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-section: 120px;
}
```

## Border Radius

```css
:root {
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;
}
```

## Component Styles

### Cards
```
background: var(--bg-card)
border: 1px solid var(--border-subtle)
border-radius: var(--radius-lg)
padding: var(--space-xl)

hover (non-tilt):
  scale: 1.02
  border-color: var(--border-accent)
  background: var(--bg-card-hover)
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1)

hover (tilt — 3D perspective, desktop only):
  perspective: 1200px
  max-rotation: 6deg (X and Y)
  scale: 1.02
  transition: transform 400ms cubic-bezier(0, 0, 0.2, 1)
```

### Buttons - Primary
```
background: var(--accent)
color: #FFFFFF
border: none
border-radius: var(--radius-sm)
padding: 10px 24px
font: Inter 500 13px, tracking 0.02em

hover: scale 1.05, background #0052CC. 150ms
active: scale 0.98
```

### Buttons - Ghost
```
background: transparent
color: var(--accent-text)
border: 1px solid var(--border-accent)

hover: scale 1.05, background var(--accent-dim). 150ms
active: scale 0.98
```

### Tags / Chips
```
font: JetBrains Mono 400 10px
color: var(--text-muted)
padding: 3px 10px
border-radius: var(--radius-full)
border: 1px solid var(--border-subtle)
letter-spacing: 0.04em
```

### Input Fields
```
background: rgba(255, 255, 255, 0.03)
border: 1px solid var(--border-subtle)
border-radius: var(--radius-sm)
padding: 10px 16px
color: var(--text-primary)
font: Inter 400 14px

focus:
  border-color: var(--accent)
  box-shadow: 0 0 0 2px var(--accent-dim)
```

## Animation Rules

### Easing Functions
```css
:root {
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out-aggressive: cubic-bezier(0, 0, 0.2, 1);   /* primary */
  --ease-smooth: cubic-bezier(0.4, 0, 0.1, 1);
}
```

### Lenis Smooth Scroll
```
library: lenis
duration: 1.2
easing: exponential ease-out
smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 2
scroll-to-top on route change (immediate)
```

### Standard Entrance (scroll-triggered)
```
from: opacity 0, translateY(20px)
to: opacity 1, translateY(0)
duration: 0.7s
easing: cubic-bezier(0, 0, 0.2, 1)
stagger: 0.08-0.1s between siblings
trigger: IntersectionObserver, threshold 0.15, once
```

### 3D Perspective Card Tilt (useTilt hook)
```
perspective: 1200px
max-rotation: 6deg (X and Y axes)
scale-on-hover: 1.02
transition: transform 400ms cubic-bezier(0, 0, 0.2, 1)
desktop only (mouse events, no touch)
resets to flat on mouse leave
```

### Count-up Number Animation (useCountUp hook)
```
trigger: IntersectionObserver (threshold 0.3)
duration: 1500ms
easing: ease-out cubic (1 - (1-t)^3)
supports: prefixes (#, $), suffixes (%, M, k), decimals
stagger: 150ms between metrics
fires once
```

### Glassmorphism (Header on scroll)
```
background: rgba(11, 13, 17, 0.72)
backdrop-filter: blur(24px) saturate(1.8)
border-bottom: 1px solid var(--border-subtle)
transition: all 0.4s ease
```

### Hover Effects
```
cards (non-tilt): scale(1.02), border-color change. 0.3s
cards (tilt): 3D perspective + scale(1.02). 400ms
buttons: scale(1.05), background change. 150ms
buttons active: scale(0.98)
links: color change. 150ms
```

### Page Transitions (Framer Motion)
```
exit: opacity 0, translateY(-10px). 0.4s
enter: opacity 0 → 1, translateY(10px → 0). 0.4s
easing: cubic-bezier(0, 0, 0.2, 1)
```

## Layout Rules

- Max content width: 1000px
- Card grid: `repeat(auto-fit, minmax(320px, 1fr))` with 24px gap
- Section padding: 120px vertical, 24px horizontal
- Mobile: single column, 80px section padding, 16px horizontal padding

## Header
```
position: fixed, height: 64px
background: transparent → glassmorphism on scroll
backdrop-filter: blur(24px) saturate(1.8) on scroll
border-bottom: transparent → var(--border-subtle) on scroll
transition: all 0.4s ease
z-index: 100
```

## Scroll Progress Bar
```
position: fixed, top: 0, height: 2px
background: linear-gradient(90deg, var(--accent), var(--accent-glow))
z-index: 200
```

## Dark Mode Only
This portfolio is dark mode only. No light mode toggle needed.

## Responsive Breakpoints
```
sm: 640px, md: 768px, lg: 1024px, xl: 1280px
```

## Google Fonts Import
```
Inter (300, 400, 500, 600, 700) — display + body
JetBrains Mono (400, 500) — mono
Noto Sans TC (400, 500, 700) — Chinese fallback
```
