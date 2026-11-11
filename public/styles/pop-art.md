---
title: "波普艺术 · Pop Art"
slug: pop-art
category: 历史运动 / Historic Movements
era: 1955 — 1970
tags: [本戴点, 漫画, 高饱和, 复制]
updated: 2026-10-26
---

# 波普艺术 · Pop Art

> 把漫画分格、本戴网点与商业广告色搬进美术馆，用复制与放大嘲弄高雅。

| 项目 | 内容 |
| --- | --- |
| 类别 | 历史运动（Historic Movements） |
| 年代 | 1955 — 1970 |
| 关键词 | 本戴点 · 漫画 · 高饱和 · 复制 |
| 主色 | `#ff2d55` | 
| 底色 | `#ffe94d` |
| 圆角 | 0px / 0px |
| 控制高度 | 46px |

## 1. 视觉特征

- 黑描边 + 平涂高饱和色 + 网点（halftone）。
- 构图来自漫画分格：粗黑框、对话框、拟声词。
- 同一元素重复出现，强化“复制”的概念。
- 字体为漫画感手写或粗体无衬线。

## 2. 适用与慎用

**适合：** 潮流零售、展览与演出、食品与饮料、社交媒体campaign。

**慎用：** 企业服务、需要精密感的工具、医疗与金融。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#ffe94d` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#fff3a8` |
| `--color-fg` | color | `#111111` |
| `--color-muted` | color | `#4a4a3f` |
| `--color-primary` | background-color | `#ff2d55` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#1e90ff` |
| `--color-accent-2` | background-color | `#111111` |
| `--color-border` | border-color | `#111111` |
| `--color-disabled` | background-color | `#f2e6a8` |
| `--color-on-disabled` | color | `#8f8a63` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `800` |
| `--type-tracking` | letter-spacing | `-0.02em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.3` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `0px` |
| `--border-width` | border-width | `3px` |
| `--shadow-control` | box-shadow | `4px 4px 0 #111111` |
| `--shadow-card` | box-shadow | `7px 7px 0 #111111` |
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
| `--size-control` | height | `46px` |
| `--control-padding-x` | padding-inline | `18px` |

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
| `--button-hover-bg` | background-color | `#d42849` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `var(--color-surface)` |
| `--input-border` | border | `3px solid #111111` |
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
  --color-bg: #ffe94d;
  --color-surface: #ffffff;
  --color-surface-alt: #fff3a8;
  --color-fg: #111111;
  --color-muted: #4a4a3f;
  --color-primary: #ff2d55;
  --color-on-primary: #ffffff;
  --color-accent: #1e90ff;
  --color-accent-2: #111111;
  --color-border: #111111;
  --color-disabled: #f2e6a8;
  --color-on-disabled: #8f8a63;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 800;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.3;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 0px;
  --border-width: 3px;
  --shadow-control: 4px 4px 0 #111111;
  --shadow-card: 7px 7px 0 #111111;
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 46px;
  --control-padding-x: 18px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: #ffffff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d42849;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: var(--color-surface);
  --input-border: 3px solid #111111;
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

1. 网点用 `radial-gradient(circle,#000 1px,transparent 1.5px)` + `background-size:6px 6px`。
2. 所有色块加 3px 黑边，圆角为 0。
3. 拟声词用旋转 -6° 的大字，作为装饰图层。
4. 控制网点层 opacity ≤ .3，避免缩小失真。

## 6. 常见反例

- 只用高饱和色但没有黑描边，失去波普的印刷感。
- 网点过度使用，缩小后产生摩尔纹。
- 把版权角色直接拿来用——注意知识产权。

## 7. 参考

- Wikipedia — Bauhaus / De Stijl / 构成主义
- Josef Müller-Brockmann《Grid Systems》
- MoMA 平面设计收藏
