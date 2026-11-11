---
title: "拼贴杂志 · Collage / Zine"
slug: collage-zine
category: 粗野与实验 / Brutal & Experimental
era: 1976 —
tags: [剪贴, 胶带, 扫描件, 手作]
updated: 2026-10-26
---

# 拼贴杂志 · Collage / Zine

> 剪刀、胶带与复印机的产物：照片剪影、报纸碎片、错位贴纸与手写标注拼在一张纸上。

| 项目 | 内容 |
| --- | --- |
| 类别 | 粗野与实验（Brutal & Experimental） |
| 年代 | 1976 — |
| 关键词 | 剪贴 · 胶带 · 扫描件 · 手作 |
| 主色 | `#1a1a1a` | 
| 底色 | `#efe9dd` |
| 圆角 | 0px / 2px |
| 控制高度 | 40px |

## 1. 视觉特征

- 每个元件都应有物理属性：纸边、胶带、钉书钉、投影。
- 元素之间允许遮挡，但关键信息不能被压住。
- 色板来自旧纸：米白、砖红、墨绿、炭黑。
- 字体混排：印刷衬线 + 手写 + 打字机。

## 2. 适用与慎用

**适合：** 独立杂志、乐队与展览、创意工作室官网、限定商品页。

**慎用：** B2B 产品、需要精确导航的后台、移动端小屏。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#efe9dd` |
| `--color-surface` | background-color | `#fffaf0` |
| `--color-surface-alt` | background-color | `#e3d9c6` |
| `--color-fg` | color | `#1a1a1a` |
| `--color-muted` | color | `#5c5347` |
| `--color-primary` | background-color | `#1a1a1a` |
| `--color-on-primary` | color | `#fffaf0` |
| `--color-accent` | background-color | `#c8452a` |
| `--color-accent-2` | background-color | `#2d6a4f` |
| `--color-border` | border-color | `#1a1a1a` |
| `--color-disabled` | background-color | `#ded5c4` |
| `--color-on-disabled` | color | `#958b7c` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.55` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `2px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `3px 3px 0 rgba(26,26,26,.85)` |
| `--shadow-card` | box-shadow | `6px 6px 0 rgba(26,26,26,.75)` |
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
| `--control-padding-x` | padding-inline | `14px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-accent)` |
| `--button-fg` | color | `#fffaf0` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #1a1a1a` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#1a1a1a` |
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
  --color-bg: #efe9dd;
  --color-surface: #fffaf0;
  --color-surface-alt: #e3d9c6;
  --color-fg: #1a1a1a;
  --color-muted: #5c5347;
  --color-primary: #1a1a1a;
  --color-on-primary: #fffaf0;
  --color-accent: #c8452a;
  --color-accent-2: #2d6a4f;
  --color-border: #1a1a1a;
  --color-disabled: #ded5c4;
  --color-on-disabled: #958b7c;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.55;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 2px;
  --border-width: 1px;
  --shadow-control: 3px 3px 0 rgba(26,26,26,.85);
  --shadow-card: 6px 6px 0 rgba(26,26,26,.75);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 40px;
  --control-padding-x: 14px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-accent);
  --button-fg: #fffaf0;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #1a1a1a;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #1a1a1a;
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

1. 用 `filter: grayscale(1) contrast(1.2)` 统一照片质感。
2. 胶带用半透明黄 + `rotate(-2deg)` + 轻微阴影。
3. 纸张纹理用 SVG feTurbulence，透明度 6%。
4. 保证至少一条清晰的视觉动线引导阅读。

## 6. 常见反例

- 用现成贴纸素材堆叠，缺少真实扫描质感。
- 随机旋转所有元素，失去“编辑”的判断。
- 背景纯白，纸感全无。

## 7. 参考

- Web Brutalism 讨论（Bloomberg / Awwwards 访谈）
- Anti-design 与后数字平面设计
- CSS `box-shadow` 硬阴影技巧
