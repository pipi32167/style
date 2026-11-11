---
title: "装饰艺术 · Art Deco"
slug: art-deco
category: 历史运动 / Historic Movements
era: 1920 — 1939
tags: [金色, 对称, 阶梯纹, 奢华几何]
updated: 2026-10-26
---

# 装饰艺术 · Art Deco

> 爵士时代的奢华几何：对称构图、阶梯状线条、黑金配色与拉长的衬线字形。

| 项目 | 内容 |
| --- | --- |
| 类别 | 历史运动（Historic Movements） |
| 年代 | 1920 — 1939 |
| 关键词 | 金色 · 对称 · 阶梯纹 · 奢华几何 |
| 主色 | `#c9a227` | 
| 底色 | `#0f0f12` |
| 圆角 | 0px / 2px |
| 控制高度 | 44px |

## 1. 视觉特征

- 严格对称 + 阶梯形（stepped）轮廓 + 扇形放射纹。
- 黑金为主，可加墨绿或酒红；金属用渐变而非纯色。
- 字体为拉长的衬线或几何大写，字距宽（0.1em 以上）。
- 装饰框线成组出现，宽窄一致。

## 2. 适用与慎用

**适合：** 酒店与餐饮、珠宝与香水、剧院与展览、高端活动页。

**慎用：** 科技工具、需要轻量感的消费产品、移动端小屏。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0f0f12` |
| `--color-surface` | background-color | `#17171c` |
| `--color-surface-alt` | background-color | `#1f1e24` |
| `--color-fg` | color | `#f0e6d2` |
| `--color-muted` | color | `#b9ad92` |
| `--color-primary` | background-color | `#c9a227` |
| `--color-on-primary` | color | `#14120a` |
| `--color-accent` | background-color | `#e8d9a0` |
| `--color-accent-2` | background-color | `#1f5f5b` |
| `--color-border` | border-color | `#3a3325` |
| `--color-disabled` | background-color | `#22212a` |
| `--color-on-disabled` | color | `#7d7660` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `400` |
| `--type-tracking` | letter-spacing | `0.12em` |
| `--type-transform` | text-transform | `uppercase` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `2px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 0 0 1px #c9a227 inset` |
| `--shadow-card` | box-shadow | `0 24px 60px -30px rgba(201,162,39,.5)` |
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
| `--control-padding-x` | padding-inline | `22px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `linear-gradient(100deg,#8a6a1f,#e8cf87 45%,#a9822c 55%,#f3e3b0)` |
| `--button-fg` | color | `#14120a` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #e8d9a0` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#d0ae46` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#17171c` |
| `--input-border` | border | `1px solid #3a3325` |
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
  --color-bg: #0f0f12;
  --color-surface: #17171c;
  --color-surface-alt: #1f1e24;
  --color-fg: #f0e6d2;
  --color-muted: #b9ad92;
  --color-primary: #c9a227;
  --color-on-primary: #14120a;
  --color-accent: #e8d9a0;
  --color-accent-2: #1f5f5b;
  --color-border: #3a3325;
  --color-disabled: #22212a;
  --color-on-disabled: #7d7660;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 400;
  --type-tracking: 0.12em;
  --type-transform: uppercase;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 2px;
  --border-width: 1px;
  --shadow-control: 0 0 0 1px #c9a227 inset;
  --shadow-card: 0 24px 60px -30px rgba(201,162,39,.5);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 44px;
  --control-padding-x: 22px;

  /* 按钮 · Button · Component */
  --button-bg: linear-gradient(100deg,#8a6a1f,#e8cf87 45%,#a9822c 55%,#f3e3b0);
  --button-fg: #14120a;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #e8d9a0;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d0ae46;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #17171c;
  --input-border: 1px solid #3a3325;
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

1. 金属渐变：`linear-gradient(100deg,#8a6a1f,#e8cf87 45%,#a9822c 55%,#f3e3b0)`。
2. 用 `repeating-linear-gradient` 做放射/阶梯纹。
3. 标题 `letter-spacing:.14em` + 大写，副标题字号不超过标题 1/3。
4. 深色页面务必给金色文字配 4.5:1 以上对比。

## 6. 常见反例

- 金色用 #ffd700 实色，显得廉价；要用多段渐变。
- 装饰纹样无节制铺满，主体被淹没。
- 字距不够，缺少 1920 年代的呼吸感。

## 7. 参考

- Wikipedia — Bauhaus / De Stijl / 构成主义
- Josef Müller-Brockmann《Grid Systems》
- MoMA 平面设计收藏
