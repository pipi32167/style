---
title: "新粗野主义 · Neubrutalism"
slug: neubrutalism
category: 粗野与实验 / Brutal & Experimental
era: 2021 —
tags: [粗描边, 硬阴影, 高饱和, 反精致]
updated: 2026-10-26
---

# 新粗野主义 · Neubrutalism

> 3px 黑边 + 零模糊硬阴影 + 荧光撞色，把网页做成一叠可以拍的贴纸。

| 项目 | 内容 |
| --- | --- |
| 类别 | 粗野与实验（Brutal & Experimental） |
| 年代 | 2021 — |
| 关键词 | 粗描边 · 硬阴影 · 高饱和 · 反精致 |
| 主色 | `#111111` | 
| 底色 | `#fffdf5` |
| 圆角 | 6px / 10px |
| 控制高度 | 44px |

## 1. 视觉特征

- 所有容器统一 3px 实线黑边，圆角小于 12px。
- 阴影无模糊：`6px 6px 0 #111`，悬停时位移让阴影“收紧”。
- 配色是黑 + 一个荧光主色 + 一个撞色，白底不参与层次。
- 字体偏 grotesk 粗体，标题可以大到 72px 以上。

## 2. 适用与慎用

**适合：** 开发者工具、独立 SaaS、创意工作室、面向年轻用户的消费产品。

**慎用：** 金融与医疗等信任敏感行业、需要长时间阅读的长文。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#fffdf5` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#fff3c4` |
| `--color-fg` | color | `#111111` |
| `--color-muted` | color | `#4d4d4d` |
| `--color-primary` | background-color | `#111111` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#ff6bd6` |
| `--color-accent-2` | background-color | `#ffd400` |
| `--color-border` | border-color | `#111111` |
| `--color-disabled` | background-color | `#e8e4d8` |
| `--color-on-disabled` | color | `#8a8578` |

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
| `--type-leading` | line-height | `1.45` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `6px` |
| `--radius-card` | border-radius | `10px` |
| `--border-width` | border-width | `3px` |
| `--shadow-control` | box-shadow | `4px 4px 0 #111111` |
| `--shadow-card` | box-shadow | `6px 6px 0 #111111` |
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
| `--button-bg` | background-color | `var(--color-accent-2)` |
| `--button-fg` | color | `#111111` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#111111` |
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
  --color-bg: #fffdf5;
  --color-surface: #ffffff;
  --color-surface-alt: #fff3c4;
  --color-fg: #111111;
  --color-muted: #4d4d4d;
  --color-primary: #111111;
  --color-on-primary: #ffffff;
  --color-accent: #ff6bd6;
  --color-accent-2: #ffd400;
  --color-border: #111111;
  --color-disabled: #e8e4d8;
  --color-on-disabled: #8a8578;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 800;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.45;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 6px;
  --radius-card: 10px;
  --border-width: 3px;
  --shadow-control: 4px 4px 0 #111111;
  --shadow-card: 6px 6px 0 #111111;
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
  --button-bg: var(--color-accent-2);
  --button-fg: #111111;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #111111;
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

.button:hover { transform: translate(2px,2px); box-shadow: 2px 2px 0 #111111; }
```

## 5. 实施要点

1. 把边框宽度、阴影偏移写成变量：`--bw:3px; --sh:6px`。
2. hover：`translate(2px,2px)` + 阴影减到 4px，模拟按压。
3. 为描边预留 `box-sizing: border-box`，避免对齐错位。
4. 正文仍用 16px / 1.6，反精致不等于反可读。

## 6. 常见反例

- 阴影带模糊，立刻变回普通卡片。
- 描边忽粗忽细（2px、4px 混用），整套语言失效。
- 荧光色超过三个，视觉噪音盖过内容。

## 7. 参考

- Web Brutalism 讨论（Bloomberg / Awwwards 访谈）
- Anti-design 与后数字平面设计
- CSS `box-shadow` 硬阴影技巧
