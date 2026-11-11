---
title: "液态玻璃 · Liquid Glass"
slug: liquid-glass
category: 拟态与材质 / Morphism
era: 2025 —
tags: [折射, 高饱和模糊, 胶囊, Apple]
updated: 2026-10-26
---

# 液态玻璃 · Liquid Glass

> Apple 在 iOS 26 引入的材质：玻璃会随背后内容实时重新着色，边缘有镜面高光与轻微折射。

| 项目 | 内容 |
| --- | --- |
| 类别 | 拟态与材质（Morphism） |
| 年代 | 2025 — |
| 关键词 | 折射 · 高饱和模糊 · 胶囊 · Apple |
| 主色 | `#0a84ff` | 
| 底色 | `#eef1f6` |
| 圆角 | 999px / 28px |
| 控制高度 | 44px |

## 1. 视觉特征

- 高饱和模糊（saturate 180%+）比单纯的模糊更接近真实玻璃。
- 所有控件趋向胶囊：全圆角、等高、边缘一圈 1px 亮边。
- 文字永远压在玻璃之上，而不是玻璃内部。
- 玻璃之间的间距要足够，边缘相贴会产生“脏边”。

## 2. 适用与慎用

**适合：** 移动端浮层、悬浮工具条、媒体播放器、相机与地图类界面。

**慎用：** 低性能设备、需要长时间阅读的正文、结构复杂的企业表单。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#eef1f6` |
| `--color-surface` | background-color | `rgba(255,255,255,.55)` |
| `--color-surface-alt` | background-color | `rgba(255,255,255,.32)` |
| `--color-fg` | color | `#101418` |
| `--color-muted` | color | `#56606b` |
| `--color-primary` | background-color | `#0a84ff` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#5e5ce6` |
| `--color-accent-2` | background-color | `#30d158` |
| `--color-border` | border-color | `rgba(255,255,255,.72)` |
| `--color-disabled` | background-color | `rgba(255,255,255,.35)` |
| `--color-on-disabled` | color | `#8a929c` |

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
| `--type-leading` | line-height | `1.5` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `999px` |
| `--radius-card` | border-radius | `28px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `inset 0 1px 0 rgba(255,255,255,.9), 0 8px 24px rgba(16,24,40,.14)` |
| `--shadow-card` | box-shadow | `inset 0 1px 0 rgba(255,255,255,.95), 0 24px 60px rgba(16,24,40,.18)` |
| `--backdrop-blur` | backdrop-filter | `blur(28px) saturate(200%)` |

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
| `--control-padding-x` | padding-inline | `20px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `linear-gradient(180deg,#3d9bff,#0a7ce8)` |
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid rgba(255,255,255,.55)` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#0b70d5` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `rgba(255,255,255,.62)` |
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
  --color-bg: #eef1f6;
  --color-surface: rgba(255,255,255,.55);
  --color-surface-alt: rgba(255,255,255,.32);
  --color-fg: #101418;
  --color-muted: #56606b;
  --color-primary: #0a84ff;
  --color-on-primary: #ffffff;
  --color-accent: #5e5ce6;
  --color-accent-2: #30d158;
  --color-border: rgba(255,255,255,.72);
  --color-disabled: rgba(255,255,255,.35);
  --color-on-disabled: #8a929c;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.5;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 999px;
  --radius-card: 28px;
  --border-width: 1px;
  --shadow-control: inset 0 1px 0 rgba(255,255,255,.9), 0 8px 24px rgba(16,24,40,.14);
  --shadow-card: inset 0 1px 0 rgba(255,255,255,.95), 0 24px 60px rgba(16,24,40,.18);
  --backdrop-blur: blur(28px) saturate(200%);

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 44px;
  --control-padding-x: 20px;

  /* 按钮 · Button · Component */
  --button-bg: linear-gradient(180deg,#3d9bff,#0a7ce8);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid rgba(255,255,255,.55);
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #0b70d5;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: rgba(255,255,255,.62);
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

1. `backdrop-filter: blur(28px) saturate(200%)`，配合 1px 白色 70% 描边。
2. 用 `box-shadow: inset 0 1px 0 rgba(255,255,255,.9)` 模拟顶面反光。
3. 在容器外层加 `isolation: isolate`，避免模糊穿透到无关图层。
4. 提供 `prefers-reduced-transparency` 回退为不透明底色。

## 6. 常见反例

- 只用 blur 不做 saturate，玻璃会显得像磨砂塑料。
- 在玻璃上再叠一层半透明渐变，文字对比度崩掉。
- 给每个按钮都套玻璃，界面失去主次。

## 7. 参考

- CSS `backdrop-filter` 与多重 `box-shadow` 实践
- Apple Human Interface Guidelines — Materials
- Material Design 3 — Elevation
