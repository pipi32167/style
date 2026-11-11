---
title: "Apple 风格 · Apple HIG"
slug: apple-hig
category: 现代界面 / Modern UI
era: 2019 —
tags: [系统字体, 克制, 半透明导航, SF Symbols]
updated: 2026-10-26
---

# Apple 风格 · Apple HIG

> 以内容为中心的系统级语言：SF 字体、克制的分割线、半透明导航栏与恰到好处的圆角。

| 项目 | 内容 |
| --- | --- |
| 类别 | 现代界面（Modern UI） |
| 年代 | 2019 — |
| 关键词 | 系统字体 · 克制 · 半透明导航 · SF Symbols |
| 主色 | `#007aff` | 
| 底色 | `#f2f2f7` |
| 圆角 | 10px / 14px |
| 控制高度 | 44px |

## 1. 视觉特征

- 层级靠字号与字重，而不是颜色与边框。
- 分割线 0.5px，颜色 rgba(0,0,0,.08)。
- 导航栏与工具栏半透明 + 背景模糊，滚动时内容透出。
- 强调色只有一个（系统蓝），其余颜色全部来自内容本身。

## 2. 适用与慎用

**适合：** iOS / macOS 应用、需要原生质感的跨端产品、订阅型工具。

**慎用：** 强品牌表达、需要复杂数据密度的企业后台。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f2f2f7` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#e5e5ea` |
| `--color-fg` | color | `#000000` |
| `--color-muted` | color | `#8e8e93` |
| `--color-primary` | background-color | `#007aff` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#ff3b30` |
| `--color-accent-2` | background-color | `#34c759` |
| `--color-border` | border-color | `rgba(60,60,67,.12)` |
| `--color-disabled` | background-color | `#e9e9ee` |
| `--color-on-disabled` | color | `#aeaeb2` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `ui-sans-serif, system-ui, -apple-system, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `ui-sans-serif, system-ui, -apple-system, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `-0.022em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.45` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `10px` |
| `--radius-card` | border-radius | `14px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 2px 10px rgba(0,0,0,.06)` |
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
| `--control-padding-x` | padding-inline | `16px` |

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
| `--button-hover-bg` | background-color | `#0064d1` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `var(--color-surface)` |
| `--input-border` | border | `1px solid rgba(60,60,67,.12)` |
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
  --color-bg: #f2f2f7;
  --color-surface: #ffffff;
  --color-surface-alt: #e5e5ea;
  --color-fg: #000000;
  --color-muted: #8e8e93;
  --color-primary: #007aff;
  --color-on-primary: #ffffff;
  --color-accent: #ff3b30;
  --color-accent-2: #34c759;
  --color-border: rgba(60,60,67,.12);
  --color-disabled: #e9e9ee;
  --color-on-disabled: #aeaeb2;

  /* 字体与排版 · Typography */
  --font-display: ui-sans-serif, system-ui, -apple-system, "PingFang SC", sans-serif;
  --font-body: ui-sans-serif, system-ui, -apple-system, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: -0.022em;
  --type-transform: none;
  --type-leading: 1.45;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 10px;
  --radius-card: 14px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 2px 10px rgba(0,0,0,.06);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 44px;
  --control-padding-x: 16px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #0064d1;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: var(--color-surface);
  --input-border: 1px solid rgba(60,60,67,.12);
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

1. 字号阶梯：34 / 28 / 22 / 17 / 15 / 13 / 11。
2. 正文 17px，行高 1.4–1.5，字距 -0.022em。
3. 卡片 12–16px 圆角，投影 `0 2px 10px rgba(0,0,0,.06)`。
4. 点击区域 ≥ 44pt，图标线条 1.5pt。

## 6. 常见反例

- 把所有卡片都加重阴影，苹果的层级是极轻的。
- 圆角随意取值（7px、11px、15px 混用）。
- 自造图标风格，与 SF Symbols 线宽不一致。

## 7. 参考

- Material Design 3 Guidelines
- Apple Human Interface Guidelines
- WCAG 2.2 对比度与焦点可见性
