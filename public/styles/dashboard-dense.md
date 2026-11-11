---
title: "数据密集仪表盘 · Dense Dashboard"
slug: dashboard-dense
category: 现代界面 / Modern UI
era: 2015 —
tags: [高密度, 表格, 对齐, 监控]
updated: 2026-10-26
---

# 数据密集仪表盘 · Dense Dashboard

> 为“一屏看完全部指标”而生：32px 行高、等宽数字、克制的色彩与严格的栅格对齐。

| 项目 | 内容 |
| --- | --- |
| 类别 | 现代界面（Modern UI） |
| 年代 | 2015 — |
| 关键词 | 高密度 · 表格 · 对齐 · 监控 |
| 主色 | `#1d4ed8` | 
| 底色 | `#f8fafc` |
| 圆角 | 6px / 8px |
| 控制高度 | 32px |

## 1. 视觉特征

- 控件高度 30–34px，行高 32px，边距 8px 起步。
- 数字使用 tabular-nums，右对齐，单位弱化显示。
- 颜色只用于表达状态（正常/警告/错误），不用来装饰。
- 用边框界定区域，阴影几乎不用。

## 2. 适用与慎用

**适合：** 运营后台、监控大屏、金融与物流系统、BI 工具。

**慎用：** 消费级 App 首屏、品牌营销页。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f8fafc` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#f1f5f9` |
| `--color-fg` | color | `#0f172a` |
| `--color-muted` | color | `#64748b` |
| `--color-primary` | background-color | `#1d4ed8` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#dc2626` |
| `--color-accent-2` | background-color | `#0f766e` |
| `--color-border` | border-color | `#e2e8f0` |
| `--color-disabled` | background-color | `#f1f5f9` |
| `--color-on-disabled` | color | `#94a3b8` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `0` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.45` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `6px` |
| `--radius-card` | border-radius | `8px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 1px 2px rgba(15,23,42,.05)` |
| `--backdrop-blur` | backdrop-filter | `none` |

### 间距与尺寸

4 的倍数起步，密度由 --space-* 统一调节。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--space-1` | padding | `3px` |
| `--space-2` | padding | `6px` |
| `--space-3` | padding | `9px` |
| `--space-4` | padding | `12px` |
| `--space-5` | padding | `18px` |
| `--space-6` | padding | `24px` |
| `--size-control` | height | `32px` |
| `--control-padding-x` | padding-inline | `10px` |

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
| `--button-hover-bg` | background-color | `#1a44b9` |
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
  --color-bg: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-alt: #f1f5f9;
  --color-fg: #0f172a;
  --color-muted: #64748b;
  --color-primary: #1d4ed8;
  --color-on-primary: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #0f766e;
  --color-border: #e2e8f0;
  --color-disabled: #f1f5f9;
  --color-on-disabled: #94a3b8;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0;
  --type-transform: none;
  --type-leading: 1.45;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 6px;
  --radius-card: 8px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 1px 2px rgba(15,23,42,.05);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 3px;
  --space-2: 6px;
  --space-3: 9px;
  --space-4: 12px;
  --space-5: 18px;
  --space-6: 24px;
  --size-control: 32px;
  --control-padding-x: 10px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #1a44b9;
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

1. 建立 8px 栅格，所有间距为其倍数。
2. `font-variant-numeric: tabular-nums` 必须开启。
3. 表头 sticky，相邻行底色差 2% 明度。
4. 状态色同时配图标或文案，避免只靠颜色传达。

## 6. 常见反例

- 用 48px 的大按钮，一屏放不下三行数据。
- 给每张卡片加重投影，密集界面瞬间变噪音。
- 数字用比例字体，列与列对不齐。

## 7. 参考

- Material Design 3 Guidelines
- Apple Human Interface Guidelines
- WCAG 2.2 对比度与焦点可见性
