---
title: "新装饰 · Neo Art Deco"
slug: neo-artdeco
category: 精品与戏剧 / Luxe & Dramatic
era: 2018 —
tags: [深绿, 黄铜, 几何线条, 对称]
updated: 2026-10-26
---

# 新装饰 · Neo Art Deco

> 用当代手法重写装饰艺术：墨绿与黄铜、细密放射线、对称构图，去掉过度的金色堆砌。

| 项目 | 内容 |
| --- | --- |
| 类别 | 精品与戏剧（Luxe & Dramatic） |
| 年代 | 2018 — |
| 关键词 | 深绿 · 黄铜 · 几何线条 · 对称 |
| 主色 | `#c9a227` | 
| 底色 | `#0e1a16` |
| 圆角 | 0px / 4px |
| 控制高度 | 46px |

## 1. 视觉特征

- 主色墨绿 + 黄铜，白与米色作为呼吸。
- 放射线、扇形、阶梯纹以细线呈现（1px）。
- 严格对称，中心轴明确。
- 字体为高对比衬线，字距 0.1em 以上。

## 2. 适用与慎用

**适合：** 精品酒店与酒吧、高端地产、珠宝、剧院与演出。

**慎用：** 科技工具、面向年轻人的轻量产品。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0e1a16` |
| `--color-surface` | background-color | `#13221d` |
| `--color-surface-alt` | background-color | `#1a2b25` |
| `--color-fg` | color | `#f0e8d8` |
| `--color-muted` | color | `#a9b3a9` |
| `--color-primary` | background-color | `#c9a227` |
| `--color-on-primary` | color | `#0e1a16` |
| `--color-accent` | background-color | `#7ea08a` |
| `--color-accent-2` | background-color | `#c9a227` |
| `--color-border` | border-color | `#2a3b33` |
| `--color-disabled` | background-color | `#17251f` |
| `--color-on-disabled` | color | `#71857a` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `500` |
| `--type-tracking` | letter-spacing | `0.1em` |
| `--type-transform` | text-transform | `uppercase` |
| `--type-leading` | line-height | `1.75` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `4px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 30px 60px -30px rgba(0,0,0,.8)` |
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
| `--control-padding-x` | padding-inline | `22px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `transparent` |
| `--button-fg` | color | `#c9a227` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #c9a227` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#d0af47` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `transparent` |
| `--input-border` | border | `1px solid #2a3b33` |
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
  --color-bg: #0e1a16;
  --color-surface: #13221d;
  --color-surface-alt: #1a2b25;
  --color-fg: #f0e8d8;
  --color-muted: #a9b3a9;
  --color-primary: #c9a227;
  --color-on-primary: #0e1a16;
  --color-accent: #7ea08a;
  --color-accent-2: #c9a227;
  --color-border: #2a3b33;
  --color-disabled: #17251f;
  --color-on-disabled: #71857a;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 500;
  --type-tracking: 0.1em;
  --type-transform: uppercase;
  --type-leading: 1.75;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 4px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 30px 60px -30px rgba(0,0,0,.8);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 46px;
  --control-padding-x: 22px;

  /* 按钮 · Button · Component */
  --button-bg: transparent;
  --button-fg: #c9a227;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #c9a227;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d0af47;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: transparent;
  --input-border: 1px solid #2a3b33;
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

1. 细线纹样用 `repeating-conic-gradient` 或 SVG。
2. 黄铜色 #c9a227 只用于线条与图标，不做大面积填充。
3. 对称布局通过 `grid` + `justify-items:center` 实现。
4. 移动端保留一条中心装饰线即可。

## 6. 常见反例

- 金线过粗，变成廉价的“土豪金”。
- 纹样与内容无关联，纯装饰噪音。
- 在移动端仍保持严格对称，留白被压缩。

## 7. 参考

- 时装品牌视觉系统案例（Celine / Bottega）
- 电影调色（Teal & Orange）分析
- 画廊白盒（White Cube）展览设计
