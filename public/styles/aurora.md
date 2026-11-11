---
title: "极光渐变 · Aurora UI"
slug: aurora
category: 拟态与材质 / Morphism
era: 2021 —
tags: [深色, 光晕, 网格渐变, 发光]
updated: 2026-10-26
---

# 极光渐变 · Aurora UI

> 深色底上漂浮着大面积的柔光灯带，像极光一样缓慢流动，用来给产品页制造未来感。

| 项目 | 内容 |
| --- | --- |
| 类别 | 拟态与材质（Morphism） |
| 年代 | 2021 — |
| 关键词 | 深色 · 光晕 · 网格渐变 · 发光 |
| 主色 | `#8b5cf6` | 
| 底色 | `#070b18` |
| 圆角 | 12px / 20px |
| 控制高度 | 42px |

## 1. 视觉特征

- 光晕用 2–4 个超大半径 radial-gradient 叠加，边缘必须衰减到透明。
- 底色接近黑但带蓝紫倾向（#070b18），纯黑会让光晕显脏。
- 文字只放在光晕的低亮区，标题用近似白色并加轻微外发光。
- 动效是 20–40 秒的缓慢位移，不能让人察觉在动。

## 2. 适用与慎用

**适合：** AI 与开发者产品落地页、发布会主视觉、SaaS 定价页头图。

**慎用：** 长文阅读、后台表格、需要精确色觉判断的图表。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#070b18` |
| `--color-surface` | background-color | `rgba(255,255,255,.06)` |
| `--color-surface-alt` | background-color | `rgba(255,255,255,.10)` |
| `--color-fg` | color | `#eef2ff` |
| `--color-muted` | color | `#9aa7c7` |
| `--color-primary` | background-color | `#8b5cf6` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#22d3ee` |
| `--color-accent-2` | background-color | `#a78bfa` |
| `--color-border` | border-color | `rgba(255,255,255,.12)` |
| `--color-disabled` | background-color | `rgba(255,255,255,.08)` |
| `--color-on-disabled` | color | `#6b7794` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `-0.02em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `12px` |
| `--radius-card` | border-radius | `20px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 2px 12px rgba(139,92,246,.28)` |
| `--shadow-card` | box-shadow | `0 30px 80px -30px rgba(34,211,238,.35)` |
| `--backdrop-blur` | backdrop-filter | `blur(20px)` |

### 间距与尺寸

4 的倍数起步，密度由 --space-* 统一调节。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--space-1` | padding | `4px` |
| `--space-2` | padding | `8px` |
| `--space-3` | padding | `12px` |
| `--space-4` | padding | `16px` |
| `--space-5` | padding | `24px` |
| `--space-6` | padding | `32px` |
| `--size-control` | height | `42px` |
| `--control-padding-x` | padding-inline | `16px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `linear-gradient(135deg,#8b5cf6,#22d3ee)` |
| `--button-fg` | color | `#06121a` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#9d77f8` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `rgba(255,255,255,.08)` |
| `--input-border` | border | `var(--border-width) solid var(--color-border)` |
| `--input-radius` | border-radius | `var(--radius-control)` |
| `--input-height` | height | `var(--size-control)` |
| `--input-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--input-shadow` | box-shadow | `none` |
| `--input-blur` | backdrop-filter | `var(--backdrop-blur)` |

### 卡片 · Card

页面级容器，阴影与描边二者只取其一为主。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--card-bg` | background-color | `var(--color-surface)` |
| `--card-border` | border | `1px solid rgba(255,255,255,.12)` |
| `--card-radius` | border-radius | `var(--radius-card)` |
| `--card-shadow` | box-shadow | `var(--shadow-card)` |
| `--card-padding` | padding | `var(--space-4)` |
| `--card-blur` | backdrop-filter | `var(--backdrop-blur)` |


```css
:root {
  /* 色彩与语义 · Color & Semantic */
  --color-bg: #070b18;
  --color-surface: rgba(255,255,255,.06);
  --color-surface-alt: rgba(255,255,255,.10);
  --color-fg: #eef2ff;
  --color-muted: #9aa7c7;
  --color-primary: #8b5cf6;
  --color-on-primary: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #a78bfa;
  --color-border: rgba(255,255,255,.12);
  --color-disabled: rgba(255,255,255,.08);
  --color-on-disabled: #6b7794;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 12px;
  --radius-card: 20px;
  --border-width: 1px;
  --shadow-control: 0 2px 12px rgba(139,92,246,.28);
  --shadow-card: 0 30px 80px -30px rgba(34,211,238,.35);
  --backdrop-blur: blur(20px);

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 42px;
  --control-padding-x: 16px;

  /* 按钮 · Button · Component */
  --button-bg: linear-gradient(135deg,#8b5cf6,#22d3ee);
  --button-fg: #06121a;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #9d77f8;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: rgba(255,255,255,.08);
  --input-border: var(--border-width) solid var(--color-border);
  --input-radius: var(--radius-control);
  --input-height: var(--size-control);
  --input-padding-x: var(--control-padding-x);
  --input-shadow: none;
  --input-blur: var(--backdrop-blur);

  /* 卡片 · Card · Component */
  --card-bg: var(--color-surface);
  --card-border: 1px solid rgba(255,255,255,.12);
  --card-radius: var(--radius-card);
  --card-shadow: var(--shadow-card);
  --card-padding: var(--space-4);
  --card-blur: var(--backdrop-blur);
}
```

## 4. 组件实现

```css
/* 按钮 · Button */
.button {
  background-color: var(--button-bg);
  color: var(--button-fg);
  border: var(--button-border);
  border-radius: var(--button-radius);
  height: var(--button-height);
  padding-inline: var(--button-padding-x);
  box-shadow: var(--button-shadow);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: var(--type-tracking);
  text-transform: var(--type-transform);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background-color .18s ease, box-shadow .18s ease, transform .18s ease;
}
.button:hover { background-color: var(--button-hover-bg); }
.button:active { transform: translateY(1px); }
.button:disabled { background-color: var(--button-disabled-bg); color: var(--color-on-disabled); cursor: not-allowed; }

/* 输入框 · Input */
.input {
  background-color: var(--input-bg);
  color: var(--color-fg);
  border: var(--input-border);
  border-radius: var(--input-radius);
  height: var(--input-height);
  padding-inline: var(--input-padding-x);
  box-shadow: var(--input-shadow);
  backdrop-filter: var(--input-blur);
  font-family: var(--font-body);
  font-size: 14px;
  width: 100%;
}
.input::placeholder { color: var(--color-muted); }
.input:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }

/* 卡片 · Card */
.card {
  background-color: var(--card-bg);
  border: var(--card-border);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  backdrop-filter: var(--card-blur);
  padding: var(--card-padding);
  color: var(--color-fg);
}
```

## 5. 实施要点

1. 光晕层用 `filter: blur(80px)` + `opacity: .55`，避免色带。
2. 给渐变加一层 8% 的噪点，消除 8-bit 色阶断层。
3. 渐变动画用 `transform: translate3d` 而非改 background-position。
4. 文字容器必须有独立底色（哪怕 20% 不透明）以保证对比度。

## 6. 常见反例

- 多个高饱和渐变硬叠加，出现断层色带。
- 在光晕中心放正文，对比度肉眼难辨。
- 用 CSS animation 大范围移动模糊层，移动端直接掉帧。

## 7. 参考

- CSS `backdrop-filter` 与多重 `box-shadow` 实践
- Apple Human Interface Guidelines — Materials
- Material Design 3 — Elevation
