---
title: "超椭圆圆润 · Squircle Soft UI"
slug: squircle
category: 现代界面 / Modern UI
era: 2021 —
tags: [大圆角, 柔和, 亲和, 超椭圆]
updated: 2026-10-26
---

# 超椭圆圆润 · Squircle Soft UI

> 所有容器都是超椭圆（squircle）：介于圆角矩形和圆形之间，视觉上比普通圆角更饱满。

| 项目 | 内容 |
| --- | --- |
| 类别 | 现代界面（Modern UI） |
| 年代 | 2021 — |
| 关键词 | 大圆角 · 柔和 · 亲和 · 超椭圆 |
| 主色 | `#ff7a45` | 
| 底色 | `#fff8f2` |
| 圆角 | 16px / 28px |
| 控制高度 | 48px |

## 1. 视觉特征

- 容器圆角约为短边的 25%–35%，用超椭圆而非普通 border-radius。
- 控件高度大（44–52px），图标圆润，字重偏中粗。
- 阴影非常柔，几乎没有方向性。
- 配色低饱和 + 一个暖色强调，避免冷硬。

## 2. 适用与慎用

**适合：** 消费级 App、健康与亲子产品、需要亲和力的订阅工具。

**慎用：** 专业工具、数据表格、需要紧凑对齐的后台。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#fff8f2` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#fdeee2` |
| `--color-fg` | color | `#2a1e17` |
| `--color-muted` | color | `#7a6558` |
| `--color-primary` | background-color | `#ff7a45` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#12b886` |
| `--color-accent-2` | background-color | `#4c6ef5` |
| `--color-border` | border-color | `#f3e0cf` |
| `--color-disabled` | background-color | `#f7ece2` |
| `--color-on-disabled` | color | `#b9a493` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `650` |
| `--type-tracking` | letter-spacing | `-0.015em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `16px` |
| `--radius-card` | border-radius | `28px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 2px 6px rgba(122,101,88,.10)` |
| `--shadow-card` | box-shadow | `0 12px 30px rgba(122,101,88,.12)` |
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
| `--size-control` | height | `48px` |
| `--control-padding-x` | padding-inline | `22px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#d9693d` |
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
  --color-bg: #fff8f2;
  --color-surface: #ffffff;
  --color-surface-alt: #fdeee2;
  --color-fg: #2a1e17;
  --color-muted: #7a6558;
  --color-primary: #ff7a45;
  --color-on-primary: #ffffff;
  --color-accent: #12b886;
  --color-accent-2: #4c6ef5;
  --color-border: #f3e0cf;
  --color-disabled: #f7ece2;
  --color-on-disabled: #b9a493;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 650;
  --type-tracking: -0.015em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 16px;
  --radius-card: 28px;
  --border-width: 1px;
  --shadow-control: 0 2px 6px rgba(122,101,88,.10);
  --shadow-card: 0 12px 30px rgba(122,101,88,.12);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 48px;
  --control-padding-x: 22px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d9693d;
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

1. 用 `clip-path: path()` 或 SVG squircle 近似超椭圆。
2. 圆角与内边距保持 1:1 关系，视觉重心才稳。
3. 内部元素圆角必须小于容器圆角（内圆角 = 外圆角 − 内边距）。
4. 给主 CTA 保留唯一的强对比色。

## 6. 常见反例

- 所有尺寸都用 999px，界面变成一排药丸。
- 超椭圆用在表格与列表里，对齐关系全部破坏。
- 柔和配色 + 柔和阴影 + 柔和字体，整体糊成一团。

## 7. 参考

- Material Design 3 Guidelines
- Apple Human Interface Guidelines
- WCAG 2.2 对比度与焦点可见性
