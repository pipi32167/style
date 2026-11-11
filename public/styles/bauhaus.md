---
title: "包豪斯 · Bauhaus"
slug: bauhaus
category: 历史运动 / Historic Movements
era: 1919 — 1933
tags: [三原色, 基本形, 功能主义, 几何]
updated: 2026-10-26
---

# 包豪斯 · Bauhaus

> 圆、方、三角与红黄蓝：把艺术拉回工坊，用最少的形与色解决功能问题。

| 项目 | 内容 |
| --- | --- |
| 类别 | 历史运动（Historic Movements） |
| 年代 | 1919 — 1933 |
| 关键词 | 三原色 · 基本形 · 功能主义 · 几何 |
| 主色 | `#d13b2e` | 
| 底色 | `#f4f1e8` |
| 圆角 | 0px / 0px |
| 控制高度 | 42px |

## 1. 视觉特征

- 只用圆、方、三角三种基本形，允许旋转与重叠。
- 色板是红黄蓝三原色 + 黑 + 米白纸色。
- 网格可见：线、块、字都在同一套模数上。
- 字体为几何无衬线，字距紧，标题常用小写。

## 2. 适用与慎用

**适合：** 文化机构、设计教育、建筑事务所、产品发布页。

**慎用：** 需要情感温度的母婴产品、需要复杂层级的后台。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f4f1e8` |
| `--color-surface` | background-color | `#faf8f1` |
| `--color-surface-alt` | background-color | `#e9e4d6` |
| `--color-fg` | color | `#111111` |
| `--color-muted` | color | `#5a564c` |
| `--color-primary` | background-color | `#d13b2e` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#1f4fa8` |
| `--color-accent-2` | background-color | `#e8b52b` |
| `--color-border` | border-color | `#111111` |
| `--color-disabled` | background-color | `#e2ddcf` |
| `--color-on-disabled` | color | `#8f8a7d` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `-0.02em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.4` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `0px` |
| `--border-width` | border-width | `2px` |
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
| `--size-control` | height | `42px` |
| `--control-padding-x` | padding-inline | `16px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `#ffffff` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#ae3329` |
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
  --color-bg: #f4f1e8;
  --color-surface: #faf8f1;
  --color-surface-alt: #e9e4d6;
  --color-fg: #111111;
  --color-muted: #5a564c;
  --color-primary: #d13b2e;
  --color-on-primary: #ffffff;
  --color-accent: #1f4fa8;
  --color-accent-2: #e8b52b;
  --color-border: #111111;
  --color-disabled: #e2ddcf;
  --color-on-disabled: #8f8a7d;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.4;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 0px;
  --border-width: 2px;
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
  --size-control: 42px;
  --control-padding-x: 16px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: #ffffff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #ae3329;
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

1. 用 8 栏网格，所有元素对齐到栏线或其中点。
2. 主色占 60%，第二色 30%，第三色 10%。
3. 阴影与圆角全部设为 0 或 2px。
4. 标题可用 `text-transform: lowercase` 呼应包豪斯排版。

## 6. 常见反例

- 三原色等量使用，画面失去重心；必须有一色主导。
- 把包豪斯做成“复古海报”贴图，忽略其功能主义内核。
- 圆角与阴影乱入，几何纯度被破坏。

## 7. 参考

- Wikipedia — Bauhaus / De Stijl / 构成主义
- Josef Müller-Brockmann《Grid Systems》
- MoMA 平面设计收藏
