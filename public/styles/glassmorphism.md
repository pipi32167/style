---
title: "玻璃拟态 · Glassmorphism"
slug: glassmorphism
category: 拟态与材质 / Morphism
era: 2020 —
tags: [磨砂, 透明, 背景模糊, 彩色底]
updated: 2026-10-26
---

# 玻璃拟态 · Glassmorphism

> 半透明面板浮在彩色背景之上，用背景模糊与一圈浅色描边制造“隔着玻璃看世界”的层次。

| 项目 | 内容 |
| --- | --- |
| 类别 | 拟态与材质（Morphism） |
| 年代 | 2020 — |
| 关键词 | 磨砂 · 透明 · 背景模糊 · 彩色底 |
| 主色 | `#2563eb` | 
| 底色 | `#e8eefc` |
| 圆角 | 14px / 22px |
| 控制高度 | 42px |

## 1. 视觉特征

- 透明 + 模糊 + 浅色描边 + 柔和投影，四个要素缺一不可。
- 背景必须有颜色或图案，否则玻璃没有可折射的内容，看上去只是灰色块。
- 描边用白色 40%–70% 透明，模拟玻璃边缘的高光。
- 多层玻璃叠加时，每一层透明度递减，避免文字被反复糊掉。

## 2. 适用与慎用

**适合：** 浮层、侧边栏、数据仪表盘、营销页头图、音乐与影像类产品。

**慎用：** 纯文字长页、低端设备（backdrop-filter 开销大）、需要精确读数的密集表格。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#e8eefc` |
| `--color-surface` | background-color | `rgba(255,255,255,.42)` |
| `--color-surface-alt` | background-color | `rgba(255,255,255,.24)` |
| `--color-fg` | color | `#0f172a` |
| `--color-muted` | color | `#475569` |
| `--color-primary` | background-color | `#2563eb` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#a855f7` |
| `--color-accent-2` | background-color | `#06b6d4` |
| `--color-border` | border-color | `rgba(255,255,255,.65)` |
| `--color-disabled` | background-color | `rgba(255,255,255,.30)` |
| `--color-on-disabled` | color | `#64748b` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `-0.015em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `14px` |
| `--radius-card` | border-radius | `22px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 4px 16px rgba(15,23,42,.10)` |
| `--shadow-card` | box-shadow | `0 10px 36px rgba(15,23,42,.16)` |
| `--backdrop-blur` | backdrop-filter | `blur(18px) saturate(160%)` |

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
| `--button-bg` | background-color | `linear-gradient(180deg, #2563eb, #1d4ed8)` |
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid rgba(255,255,255,.5)` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#2155c8` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `rgba(255,255,255,.55)` |
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
| `--card-border` | border | `1px solid rgba(255,255,255,.6)` |
| `--card-radius` | border-radius | `var(--radius-card)` |
| `--card-shadow` | box-shadow | `var(--shadow-card)` |
| `--card-padding` | padding | `var(--space-4)` |
| `--card-blur` | backdrop-filter | `var(--backdrop-blur)` |


```css
:root {
  /* 色彩与语义 · Color & Semantic */
  --color-bg: #e8eefc;
  --color-surface: rgba(255,255,255,.42);
  --color-surface-alt: rgba(255,255,255,.24);
  --color-fg: #0f172a;
  --color-muted: #475569;
  --color-primary: #2563eb;
  --color-on-primary: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #06b6d4;
  --color-border: rgba(255,255,255,.65);
  --color-disabled: rgba(255,255,255,.30);
  --color-on-disabled: #64748b;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: -0.015em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 14px;
  --radius-card: 22px;
  --border-width: 1px;
  --shadow-control: 0 4px 16px rgba(15,23,42,.10);
  --shadow-card: 0 10px 36px rgba(15,23,42,.16);
  --backdrop-blur: blur(18px) saturate(160%);

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
  --button-bg: linear-gradient(180deg, #2563eb, #1d4ed8);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid rgba(255,255,255,.5);
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #2155c8;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: rgba(255,255,255,.55);
  --input-border: var(--border-width) solid var(--color-border);
  --input-radius: var(--radius-control);
  --input-height: var(--size-control);
  --input-padding-x: var(--control-padding-x);
  --input-shadow: none;
  --input-blur: var(--backdrop-blur);

  /* 卡片 · Card · Component */
  --card-bg: var(--color-surface);
  --card-border: 1px solid rgba(255,255,255,.6);
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

1. 面板背景不超过 55% 不透明度，模糊半径 12–24px。
2. 为不支持 backdrop-filter 的环境提供 `@supports not` 回退为 90% 不透明底色。
3. 文字层单独加 1–2% 的深色底，保证玻璃上文字对比度。
4. 一张页面最多两层玻璃叠加。

## 6. 常见反例

- 在纯白背景上做玻璃，结果只是一张浅灰卡片。
- 正文放在玻璃面板上却仍用 60% 透明度，导致文字发灰。
- 对整页应用 backdrop-filter，滚动直接掉帧。

## 7. 参考

- CSS `backdrop-filter` 与多重 `box-shadow` 实践
- Apple Human Interface Guidelines — Materials
- Material Design 3 — Elevation
