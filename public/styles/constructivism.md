---
title: "构成主义 · Constructivism"
slug: constructivism
category: 历史运动 / Historic Movements
era: 1915 — 1930
tags: [对角线, 工业, 红黑, 宣传]
updated: 2026-10-26
---

# 构成主义 · Constructivism

> 把信息变成动势：对角线构图、粗壮无衬线、红黑对撞，像一张正在传播的工业宣言。

| 项目 | 内容 |
| --- | --- |
| 类别 | 历史运动（Historic Movements） |
| 年代 | 1915 — 1930 |
| 关键词 | 对角线 · 工业 · 红黑 · 宣传 |
| 主色 | `#c0392b` | 
| 底色 | `#efe6d8` |
| 圆角 | 0px / 0px |
| 控制高度 | 42px |

## 1. 视觉特征

- 构图以 30°–45° 对角线为骨架，元素沿斜线排布。
- 红 + 黑 + 米白三色，色块大而硬。
- 字重极端（900 与 400），标题常用大写与拉伸。
- 几何元素（圆、矩形、粗线）承担叙事而非装饰。

## 2. 适用与慎用

**适合：** 文化海报、展览视觉、运动品牌、活动宣传页。

**慎用：** 需要安静阅读的产品文档、需要中性感的金融界面。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#efe6d8` |
| `--color-surface` | background-color | `#f7f0e3` |
| `--color-surface-alt` | background-color | `#e2d6c2` |
| `--color-fg` | color | `#111111` |
| `--color-muted` | color | `#574f42` |
| `--color-primary` | background-color | `#c0392b` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#111111` |
| `--color-accent-2` | background-color | `#d9a441` |
| `--color-border` | border-color | `#111111` |
| `--color-disabled` | background-color | `#ded1bb` |
| `--color-on-disabled` | color | `#8e8471` |

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
| `--type-leading` | line-height | `1.25` |

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
| `--button-hover-bg` | background-color | `#a13226` |
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
  --color-bg: #efe6d8;
  --color-surface: #f7f0e3;
  --color-surface-alt: #e2d6c2;
  --color-fg: #111111;
  --color-muted: #574f42;
  --color-primary: #c0392b;
  --color-on-primary: #ffffff;
  --color-accent: #111111;
  --color-accent-2: #d9a441;
  --color-border: #111111;
  --color-disabled: #ded1bb;
  --color-on-disabled: #8e8471;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 800;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.25;

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
  --button-hover-bg: #a13226;
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

.card { transform: rotate(-1.2deg); }
```

## 5. 实施要点

1. 在容器上设一条主对角线，所有元素与之平行或垂直。
2. 用 `clip-path` 或旋转的色块制造斜向切割。
3. 标题字号 ≥ 2.5 倍正文字号，行高 1.05–1.15。
4. 正文回到正交，避免斜排段落。

## 6. 常见反例

- 对角线方向混乱（同时有 30° 与 -45°），画面打架。
- 标题全大写导致长标题不可读。
- 把构成主义理解成“红色 + 斜条”，缺少结构逻辑。

## 7. 参考

- Wikipedia — Bauhaus / De Stijl / 构成主义
- Josef Müller-Brockmann《Grid Systems》
- MoMA 平面设计收藏
