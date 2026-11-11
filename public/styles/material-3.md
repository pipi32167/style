---
title: "Material 3 · Material You"
slug: material-3
category: 现代界面 / Modern UI
era: 2021 —
tags: [动态取色, 胶囊按钮, 色调面, Android]
updated: 2026-10-26
---

# Material 3 · Material You

> Google 的第三代设计语言：从一张种子色推导五档色调面，按钮全胶囊，强调大圆角与状态层。

| 项目 | 内容 |
| --- | --- |
| 类别 | 现代界面（Modern UI） |
| 年代 | 2021 — |
| 关键词 | 动态取色 · 胶囊按钮 · 色调面 · Android |
| 主色 | `#6750a4` | 
| 底色 | `#fef7ff` |
| 圆角 | 999px / 16px |
| 控制高度 | 40px |

## 1. 视觉特征

- 由一张种子色推导 primary / secondary / tertiary 三组色调。
- 容器用 surface-container 五档（lowest → highest）表达层级。
- 按钮为全圆角，高度 40px，左右内边距 24px。
- 状态层（hover 8%、focus 10%、pressed 12%）叠加在底色上。

## 2. 适用与慎用

**适合：** Android 应用、跨端产品、需要系统级取色的场景。

**慎用：** 品牌视觉强约束的营销页、需要精确表达密度的桌面后台。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#fef7ff` |
| `--color-surface` | background-color | `#f7f2fa` |
| `--color-surface-alt` | background-color | `#ece6f0` |
| `--color-fg` | color | `#1d1b20` |
| `--color-muted` | color | `#49454f` |
| `--color-primary` | background-color | `#6750a4` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#7d5260` |
| `--color-accent-2` | background-color | `#625b71` |
| `--color-border` | border-color | `#cac4d0` |
| `--color-disabled` | background-color | `#e7e0ec` |
| `--color-on-disabled` | color | `#a5a0aa` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `0.005em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.55` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `999px` |
| `--radius-card` | border-radius | `16px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 1px 3px rgba(0,0,0,.14)` |
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
| `--size-control` | height | `40px` |
| `--control-padding-x` | padding-inline | `24px` |

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
| `--button-hover-bg` | background-color | `#5a468c` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `var(--color-surface-alt)` |
| `--input-border` | border | `1px solid transparent` |
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
  --color-bg: #fef7ff;
  --color-surface: #f7f2fa;
  --color-surface-alt: #ece6f0;
  --color-fg: #1d1b20;
  --color-muted: #49454f;
  --color-primary: #6750a4;
  --color-on-primary: #ffffff;
  --color-accent: #7d5260;
  --color-accent-2: #625b71;
  --color-border: #cac4d0;
  --color-disabled: #e7e0ec;
  --color-on-disabled: #a5a0aa;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0.005em;
  --type-transform: none;
  --type-leading: 1.55;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 999px;
  --radius-card: 16px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 1px 3px rgba(0,0,0,.14);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 40px;
  --control-padding-x: 24px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #5a468c;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: var(--color-surface-alt);
  --input-border: 1px solid transparent;
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

1. 用 HCT 色彩空间生成 0–100 的色调阶梯，主色取 tone 40。
2. 组件底色引用 surface-container 变量而非硬编码。
3. 阴影极轻，层级主要靠色调面区分。
4. 动效使用 emphasized easing（cubic-bezier(.2,0,0,1)），时长 300–500ms。

## 6. 常见反例

- 只用主色一档，从不用 surface 层级，界面变成大白板。
- 把 tonal palette 当普通调色板随意取色，色调关系断裂。
- 按钮用 8px 圆角——那不是 Material 3。

## 7. 参考

- Material Design 3 Guidelines
- Apple Human Interface Guidelines
- WCAG 2.2 对比度与焦点可见性
