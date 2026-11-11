---
title: "报纸排版 · Newspaper"
slug: newspaper
category: 复古与数字怀旧 / Retro & Nostalgia
era: 1700 —
tags: [多栏, 衬线, 细分隔线, 黑白]
updated: 2026-10-26
---

# 报纸排版 · Newspaper

> 以信息密度取胜的报纸版式：多栏正文、粗细分级的横线、黑体大标题与极窄的行距。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 1700 — |
| 关键词 | 多栏 · 衬线 · 细分隔线 · 黑白 |
| 主色 | `#171512` | 
| 底色 | `#f3efe6` |
| 圆角 | 0px / 0px |
| 控制高度 | 36px |

## 1. 视觉特征

- 正文 3–5 栏，栏间距 24px，首栏可加大字号。
- 标题用高对比衬线，字号跨栏，副标题降两档。
- 分隔线有粗有细（3px 与 1px），构成节奏。
- 只用黑白与一个套红，禁止圆角与阴影。

## 2. 适用与慎用

**适合：** 新闻与媒体、长篇报道、每日简报产品、机构通讯。

**慎用：** 移动端优先的轻量应用、需要大图表达的电商。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f3efe6` |
| `--color-surface` | background-color | `#f8f5ee` |
| `--color-surface-alt` | background-color | `#eae4d6` |
| `--color-fg` | color | `#171512` |
| `--color-muted` | color | `#4f4a41` |
| `--color-primary` | background-color | `#171512` |
| `--color-on-primary` | color | `#f8f5ee` |
| `--color-accent` | background-color | `#8c1c13` |
| `--color-accent-2` | background-color | `#171512` |
| `--color-border` | border-color | `#cfc7b5` |
| `--color-disabled` | background-color | `#e6e0d2` |
| `--color-on-disabled` | color | `#8e8778` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.5` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `0px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `none` |
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
| `--size-control` | height | `36px` |
| `--control-padding-x` | padding-inline | `12px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `#171512` |
| `--button-fg` | color | `#f8f5ee` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#171512` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `transparent` |
| `--input-border` | border | `1px solid #171512` |
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
  --color-bg: #f3efe6;
  --color-surface: #f8f5ee;
  --color-surface-alt: #eae4d6;
  --color-fg: #171512;
  --color-muted: #4f4a41;
  --color-primary: #171512;
  --color-on-primary: #f8f5ee;
  --color-accent: #8c1c13;
  --color-accent-2: #171512;
  --color-border: #cfc7b5;
  --color-disabled: #e6e0d2;
  --color-on-disabled: #8e8778;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.5;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 0px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: none;
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 36px;
  --control-padding-x: 12px;

  /* 按钮 · Button · Component */
  --button-bg: #171512;
  --button-fg: #f8f5ee;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #171512;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: transparent;
  --input-border: 1px solid #171512;
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

1. `column-count: 3; column-gap: 24px;` 配合 `break-inside: avoid`。
2. 首段用 `::first-letter` 做下沉大写（drop cap）。
3. 用 `border-top: 3px double` 或 1px 实线分级。
4. 移动端降为单栏，标题跨栏关系取消。

## 6. 常见反例

- 栏宽过宽（>90 字符），阅读视线疲劳。
- 标题层级只有字号差，没有字重与字体差。
- 在窄屏仍保持多栏，字被压成竖条。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
