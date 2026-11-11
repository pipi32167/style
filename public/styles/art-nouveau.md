---
title: "新艺术运动 · Art Nouveau"
slug: art-nouveau
category: 历史运动 / Historic Movements
era: 1890 — 1910
tags: [藤蔓曲线, 有机, 手工艺, 花卉]
updated: 2026-10-26
---

# 新艺术运动 · Art Nouveau

> 从自然中抽取“鞭线”：藤蔓、花茎与女性发丝般的曲线，包裹出一整套有机的装饰语言。

| 项目 | 内容 |
| --- | --- |
| 类别 | 历史运动（Historic Movements） |
| 年代 | 1890 — 1910 |
| 关键词 | 藤蔓曲线 · 有机 · 手工艺 · 花卉 |
| 主色 | `#4f7a53` | 
| 底色 | `#f6f0e4` |
| 圆角 | 20px / 28px |
| 控制高度 | 46px |

## 1. 视觉特征

- 所有线条都有生命：S 形曲线、藤蔓缠绕、无直角。
- 色板取自植物与矿石：苔绿、赭石、暗玫红、奶油白。
- 边框与分隔用曲线纹样，不用直线。
- 字体为高对比衬线，字号偏大，字距舒展。

## 2. 适用与慎用

**适合：** 香水与美妆、精品酒店、手工艺品牌、插画型品牌站。

**慎用：** 数据产品、需要密集操作的后台、移动端信息列表。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f6f0e4` |
| `--color-surface` | background-color | `#fbf6ec` |
| `--color-surface-alt` | background-color | `#efe5d2` |
| `--color-fg` | color | `#2c2a24` |
| `--color-muted` | color | `#5f5a4c` |
| `--color-primary` | background-color | `#4f7a53` |
| `--color-on-primary` | color | `#fbf6ec` |
| `--color-accent` | background-color | `#b0793f` |
| `--color-accent-2` | background-color | `#8c4a5f` |
| `--color-border` | border-color | `#c8b394` |
| `--color-disabled` | background-color | `#e8ddc9` |
| `--color-on-disabled` | color | `#9b8f79` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `500` |
| `--type-tracking` | letter-spacing | `0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.7` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `20px` |
| `--radius-card` | border-radius | `28px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 2px 6px rgba(76,64,44,.10)` |
| `--shadow-card` | box-shadow | `0 18px 40px rgba(76,64,44,.14)` |
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
| `--button-fg` | color | `#fbf6ec` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#496c4b` |
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
| `--card-border` | border | `1px solid #d8c6a8` |
| `--card-radius` | border-radius | `var(--radius-card)` |
| `--card-shadow` | box-shadow | `var(--shadow-card)` |
| `--card-padding` | padding | `var(--space-4)` |
| `--card-blur` | backdrop-filter | `var(--backdrop-blur)` |


```css
:root {
  /* 色彩与语义 · Color & Semantic */
  --color-bg: #f6f0e4;
  --color-surface: #fbf6ec;
  --color-surface-alt: #efe5d2;
  --color-fg: #2c2a24;
  --color-muted: #5f5a4c;
  --color-primary: #4f7a53;
  --color-on-primary: #fbf6ec;
  --color-accent: #b0793f;
  --color-accent-2: #8c4a5f;
  --color-border: #c8b394;
  --color-disabled: #e8ddc9;
  --color-on-disabled: #9b8f79;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 500;
  --type-tracking: 0.01em;
  --type-transform: none;
  --type-leading: 1.7;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 20px;
  --radius-card: 28px;
  --border-width: 1px;
  --shadow-control: 0 2px 6px rgba(76,64,44,.10);
  --shadow-card: 0 18px 40px rgba(76,64,44,.14);
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
  --button-fg: #fbf6ec;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #496c4b;
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
  --card-border: 1px solid #d8c6a8;
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

1. 用 SVG 路径做装饰边框（可缩放、可换色）。
2. 曲线只用在大容器边界与分隔处，内部保持简洁。
3. 每屏最多两个装饰纹样，其余留白。
4. 正文行高 1.7，字号 17px 起步以匹配装饰尺度。

## 6. 常见反例

- 曲线滥用导致结构松散，读者找不到入口。
- 把纹样做成贴图背景，与内容毫无关系。
- 在移动端堆满装饰边框，内容区被压缩。

## 7. 参考

- Wikipedia — Bauhaus / De Stijl / 构成主义
- Josef Müller-Brockmann《Grid Systems》
- MoMA 平面设计收藏
