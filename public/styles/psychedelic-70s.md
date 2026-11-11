---
title: "七十年代迷幻 · Psychedelic 70s"
slug: psychedelic-70s
category: 历史运动 / Historic Movements
era: 1967 — 1976
tags: [波浪, 大地色, 液化字, 唱片封套]
updated: 2026-10-26
---

# 七十年代迷幻 · Psychedelic 70s

> 嗑药年代的海报语言：融化般的波浪字、橙棕橄榄色盘、同心圆与太阳纹，一切都在流动。

| 项目 | 内容 |
| --- | --- |
| 类别 | 历史运动（Historic Movements） |
| 年代 | 1967 — 1976 |
| 关键词 | 波浪 · 大地色 · 液化字 · 唱片封套 |
| 主色 | `#c1531d` | 
| 底色 | `#f3e3c3` |
| 圆角 | 24px / 32px |
| 控制高度 | 46px |

## 1. 视觉特征

- 色板是大地色 + 焦橙：赭石、芥末、橄榄、砖红、奶油。
- 字形液态：拉长、波浪、连笔，常用手绘风。
- 背景用同心圆、太阳纹、波浪带，可轻微旋转。
- 构图偏满，但用一个亮色焦点拉开层次。

## 2. 适用与慎用

**适合：** 音乐厂牌、复古市集、精酿与咖啡、文化节。

**慎用：** 企业官网、数据产品、需要清晰层级的移动端。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f3e3c3` |
| `--color-surface` | background-color | `#fbf1d9` |
| `--color-surface-alt` | background-color | `#e8d3ab` |
| `--color-fg` | color | `#3b2412` |
| `--color-muted` | color | `#6b4d31` |
| `--color-primary` | background-color | `#c1531d` |
| `--color-on-primary` | color | `#fbf1d9` |
| `--color-accent` | background-color | `#6b7f2a` |
| `--color-accent-2` | background-color | `#d9a520` |
| `--color-border` | border-color | `#3b2412` |
| `--color-disabled` | background-color | `#e6d2ae` |
| `--color-on-disabled` | color | `#9b7f5e` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `0.005em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `24px` |
| `--radius-card` | border-radius | `32px` |
| `--border-width` | border-width | `2px` |
| `--shadow-control` | box-shadow | `0 2px 8px rgba(59,36,18,.14)` |
| `--shadow-card` | box-shadow | `0 16px 40px rgba(59,36,18,.18)` |
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
| `--control-padding-x` | padding-inline | `20px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `#fbf1d9` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `2px solid #3b2412` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#a94b1b` |
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
  --color-bg: #f3e3c3;
  --color-surface: #fbf1d9;
  --color-surface-alt: #e8d3ab;
  --color-fg: #3b2412;
  --color-muted: #6b4d31;
  --color-primary: #c1531d;
  --color-on-primary: #fbf1d9;
  --color-accent: #6b7f2a;
  --color-accent-2: #d9a520;
  --color-border: #3b2412;
  --color-disabled: #e6d2ae;
  --color-on-disabled: #9b7f5e;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: 0.005em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 24px;
  --radius-card: 32px;
  --border-width: 2px;
  --shadow-control: 0 2px 8px rgba(59,36,18,.14);
  --shadow-card: 0 16px 40px rgba(59,36,18,.18);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 46px;
  --control-padding-x: 20px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: #fbf1d9;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 2px solid #3b2412;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #a94b1b;
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

1. 波浪字用 `transform: skew`/SVG 路径实现，仅限标题。
2. 大地色搭配一个高亮（奶油白或亮橙）作为呼吸点。
3. 纹理用 SVG feTurbulence 叠加 8%  opacity。
4. 正文回到中性无衬线，行高 1.7。

## 6. 常见反例

- 波浪字用在正文，可读性为零。
- 色板过脏，缺少亮点导致整屏发闷。
- 把迷幻等同于“彩虹渐变”，失去 70 年代的土质感。

## 7. 参考

- Wikipedia — Bauhaus / De Stijl / 构成主义
- Josef Müller-Brockmann《Grid Systems》
- MoMA 平面设计收藏
