---
title: "中世纪现代 · Mid-Century Modern"
slug: mid-century-modern
category: 历史运动 / Historic Movements
era: 1945 — 1969
tags: [原子时代, 橄榄绿, 芥末黄, 细腿家具]
updated: 2026-10-26
---

# 中世纪现代 · Mid-Century Modern

> 战后乐观主义的产物：芥末黄、橄榄绿与陶土橙，斜切几何与轻盈的线条，温暖又克制。

| 项目 | 内容 |
| --- | --- |
| 类别 | 历史运动（Historic Movements） |
| 年代 | 1945 — 1969 |
| 关键词 | 原子时代 · 橄榄绿 · 芥末黄 · 细腿家具 |
| 主色 | `#d96f32` | 
| 底色 | `#f2e8d5` |
| 圆角 | 8px / 12px |
| 控制高度 | 42px |

## 1. 视觉特征

- 色板：芥末黄、橄榄绿、陶土橙、奶油白、炭黑。
- 几何偏“原子时代”：星芒、水滴形、斜切矩形。
- 字体为几何无衬线或衬线混排，字距舒展。
- 大量留白 + 细线条插画，避免厚重描边。

## 2. 适用与慎用

**适合：** 生活方式品牌、咖啡馆与家居、播客、需要温度的内容站。

**慎用：** 高密度后台、需要未来感的 AI 产品。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f2e8d5` |
| `--color-surface` | background-color | `#fff8ea` |
| `--color-surface-alt` | background-color | `#e9dcc3` |
| `--color-fg` | color | `#2b2b28` |
| `--color-muted` | color | `#5f5b4e` |
| `--color-primary` | background-color | `#d96f32` |
| `--color-on-primary` | color | `#fff8ea` |
| `--color-accent` | background-color | `#2f6b5e` |
| `--color-accent-2` | background-color | `#e3b23c` |
| `--color-border` | border-color | `#d9c9a8` |
| `--color-disabled` | background-color | `#e8ddc7` |
| `--color-on-disabled` | color | `#9b9179` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.65` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `8px` |
| `--radius-card` | border-radius | `12px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 1px 3px rgba(43,43,40,.08)` |
| `--shadow-card` | box-shadow | `0 6px 18px rgba(43,43,40,.10)` |
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
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#ba6330` |
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
  --color-bg: #f2e8d5;
  --color-surface: #fff8ea;
  --color-surface-alt: #e9dcc3;
  --color-fg: #2b2b28;
  --color-muted: #5f5b4e;
  --color-primary: #d96f32;
  --color-on-primary: #fff8ea;
  --color-accent: #2f6b5e;
  --color-accent-2: #e3b23c;
  --color-border: #d9c9a8;
  --color-disabled: #e8ddc7;
  --color-on-disabled: #9b9179;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.65;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 8px;
  --radius-card: 12px;
  --border-width: 1px;
  --shadow-control: 0 1px 3px rgba(43,43,40,.08);
  --shadow-card: 0 6px 18px rgba(43,43,40,.10);
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
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #ba6330;
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

1. 色板控制在 5 色内，饱和度 40%–65%。
2. 插画线条 1.5px，圆角 2–6px。
3. 卡片阴影极轻（0 2px 6px rgba(0,0,0,.08)）。
4. 标题可用衬线，正文用 grotesk，形成温度对比。

## 6. 常见反例

- 颜色饱和度过高，变成“复古贴纸”而不是中世纪现代。
- 所有元素都加纹理，失去轻盈感。
- 用霓虹色破坏温暖的中性色盘。

## 7. 参考

- Wikipedia — Bauhaus / De Stijl / 构成主义
- Josef Müller-Brockmann《Grid Systems》
- MoMA 平面设计收藏
