---
title: "噪点渐变 · Grain Gradient"
slug: grain-gradient
category: 拟态与材质 / Morphism
era: 2022 —
tags: [颗粒, 网格渐变, 柔和, 复古数字]
updated: 2026-10-26
---

# 噪点渐变 · Grain Gradient

> 把高饱和网格渐变压上一层细颗粒，柔光里带粗粝感，是当代 SaaS 与独立品牌最常用的背景配方。

| 项目 | 内容 |
| --- | --- |
| 类别 | 拟态与材质（Morphism） |
| 年代 | 2022 — |
| 关键词 | 颗粒 · 网格渐变 · 柔和 · 复古数字 |
| 主色 | `#6d28d9` | 
| 底色 | `#f7f4ff` |
| 圆角 | 12px / 24px |
| 控制高度 | 44px |

## 1. 视觉特征

- 渐变要“糊”：多层径向渐变交叠，避免双色线性渐变的塑料感。
- 噪点透明度 4%–10%，颗粒尺寸 1–2px，起到消除色带的作用。
- 内容区永远压在渐变之上，用纯色卡片承载文字。
- 配色控制在 3 个色相以内，其中一个必须是暖色。

## 2. 适用与慎用

**适合：** 品牌落地页、作品集、AI 产品视觉、播客与音乐封面。

**慎用：** 数据看板主体、需要长时间阅读的文档。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f7f4ff` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#f2edff` |
| `--color-fg` | color | `#17152a` |
| `--color-muted` | color | `#5f5b78` |
| `--color-primary` | background-color | `#6d28d9` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#f97316` |
| `--color-accent-2` | background-color | `#06b6d4` |
| `--color-border` | border-color | `#e6e1f5` |
| `--color-disabled` | background-color | `#eee9fb` |
| `--color-on-disabled` | color | `#a9a4bf` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `650` |
| `--type-tracking` | letter-spacing | `-0.02em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `12px` |
| `--radius-card` | border-radius | `24px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 2px 6px rgba(109,40,217,.12)` |
| `--shadow-card` | box-shadow | `0 30px 60px -30px rgba(109,40,217,.35)` |
| `--backdrop-blur` | backdrop-filter | `none` |

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
| `--size-control` | height | `44px` |
| `--control-padding-x` | padding-inline | `18px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `linear-gradient(135deg,#7c3aed,#f97316)` |
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid rgba(255,255,255,.25)` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#5e25ba` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `var(--color-surface)` |
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
| `--card-border` | border | `var(--border-width) solid var(--color-border)` |
| `--card-radius` | border-radius | `var(--radius-card)` |
| `--card-shadow` | box-shadow | `var(--shadow-card)` |
| `--card-padding` | padding | `var(--space-4)` |
| `--card-blur` | backdrop-filter | `var(--backdrop-blur)` |


```css
:root {
  /* 色彩与语义 · Color & Semantic */
  --color-bg: #f7f4ff;
  --color-surface: #ffffff;
  --color-surface-alt: #f2edff;
  --color-fg: #17152a;
  --color-muted: #5f5b78;
  --color-primary: #6d28d9;
  --color-on-primary: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #06b6d4;
  --color-border: #e6e1f5;
  --color-disabled: #eee9fb;
  --color-on-disabled: #a9a4bf;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 650;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 12px;
  --radius-card: 24px;
  --border-width: 1px;
  --shadow-control: 0 2px 6px rgba(109,40,217,.12);
  --shadow-card: 0 30px 60px -30px rgba(109,40,217,.35);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 44px;
  --control-padding-x: 18px;

  /* 按钮 · Button · Component */
  --button-bg: linear-gradient(135deg,#7c3aed,#f97316);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid rgba(255,255,255,.25);
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #5e25ba;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: var(--color-surface);
  --input-border: var(--border-width) solid var(--color-border);
  --input-radius: var(--radius-control);
  --input-height: var(--size-control);
  --input-padding-x: var(--control-padding-x);
  --input-shadow: none;
  --input-blur: var(--backdrop-blur);

  /* 卡片 · Card · Component */
  --card-bg: var(--color-surface);
  --card-border: var(--border-width) solid var(--color-border);
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

1. 用 SVG `feTurbulence` 生成颗粒，`mix-blend-mode: overlay`。
2. 渐变层与颗粒层分离，颗粒不参与布局。
3. 给颗粒层 `pointer-events: none` 与 `opacity: .06`。
4. 提供无颗粒的 `prefers-reduced-motion` / 低端设备回退。

## 6. 常见反例

- 噪点用半透明白色 PNG 平铺，屏幕缩放后出现摩尔纹。
- 渐变跨越 5 个以上色相，视觉噪音压过内容。
- 颗粒叠在文字上，小字直接糊掉。

## 7. 参考

- CSS `backdrop-filter` 与多重 `box-shadow` 实践
- Apple Human Interface Guidelines — Materials
- Material Design 3 — Elevation
