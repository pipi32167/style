---
title: "黏土拟态 · Claymorphism"
slug: claymorphism
category: 拟态与材质 / Morphism
era: 2021 —
tags: [3D, 蓬松, 内阴影, 糖果色]
updated: 2026-10-26
---

# 黏土拟态 · Claymorphism

> 控件像捏出来的黏土玩具：大圆角、厚内高光、外投影，体积感强但边缘柔软。

| 项目 | 内容 |
| --- | --- |
| 类别 | 拟态与材质（Morphism） |
| 年代 | 2021 — |
| 关键词 | 3D · 蓬松 · 内阴影 · 糖果色 |
| 主色 | `#8b5cf6` | 
| 底色 | `#eef0ff` |
| 圆角 | 18px / 30px |
| 控制高度 | 48px |

## 1. 视觉特征

- 三重阴影：外投影给体积、内顶光给高光、内底影给收口。
- 圆角极大，控制件近似胶囊或超椭圆，绝不出现直角。
- 配色是低饱和糖果色，主色与底色明度接近但色相拉开。
- 图标与插画同样需要 3D 黏土质感，扁平图标会破坏整体。

## 2. 适用与慎用

**适合：** 儿童与教育产品、消费级 App、活动页、插画型品牌站。

**慎用：** 金融后台、法律与医疗等需要严肃感与高信息密度的场景。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#eef0ff` |
| `--color-surface` | background-color | `#f7f5ff` |
| `--color-surface-alt` | background-color | `#e7e4ff` |
| `--color-fg` | color | `#2f2a44` |
| `--color-muted` | color | `#6b6685` |
| `--color-primary` | background-color | `#8b5cf6` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#f472b6` |
| `--color-accent-2` | background-color | `#38bdf8` |
| `--color-border` | border-color | `#ffffff` |
| `--color-disabled` | background-color | `#e6e2f5` |
| `--color-on-disabled` | color | `#a49fbb` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `18px` |
| `--radius-card` | border-radius | `30px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `inset -4px -4px 8px rgba(124,58,237,.22), inset 4px 4px 8px #ffffff, 0 10px 20px rgba(76,29,149,.16)` |
| `--shadow-card` | box-shadow | `inset -6px -6px 16px rgba(124,58,237,.16), inset 6px 6px 16px #ffffff, 0 22px 44px rgba(76,29,149,.18)` |
| `--backdrop-blur` | backdrop-filter | `none` |

### 间距与尺寸

4 的倍数起步，密度由 --space-* 统一调节。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--space-1` | padding | `5px` |
| `--space-2` | padding | `10px` |
| `--space-3` | padding | `15px` |
| `--space-4` | padding | `20px` |
| `--space-5` | padding | `30px` |
| `--space-6` | padding | `40px` |
| `--size-control` | height | `48px` |
| `--control-padding-x` | padding-inline | `20px` |

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
| `--button-hover-bg` | background-color | `#7a53d6` |
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
| `--input-shadow` | box-shadow | `inset 3px 3px 8px rgba(124,58,237,.14), inset -3px -3px 8px #ffffff` |
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
  --color-bg: #eef0ff;
  --color-surface: #f7f5ff;
  --color-surface-alt: #e7e4ff;
  --color-fg: #2f2a44;
  --color-muted: #6b6685;
  --color-primary: #8b5cf6;
  --color-on-primary: #ffffff;
  --color-accent: #f472b6;
  --color-accent-2: #38bdf8;
  --color-border: #ffffff;
  --color-disabled: #e6e2f5;
  --color-on-disabled: #a49fbb;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 18px;
  --radius-card: 30px;
  --border-width: 1px;
  --shadow-control: inset -4px -4px 8px rgba(124,58,237,.22), inset 4px 4px 8px #ffffff, 0 10px 20px rgba(76,29,149,.16);
  --shadow-card: inset -6px -6px 16px rgba(124,58,237,.16), inset 6px 6px 16px #ffffff, 0 22px 44px rgba(76,29,149,.18);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 5px;
  --space-2: 10px;
  --space-3: 15px;
  --space-4: 20px;
  --space-5: 30px;
  --space-6: 40px;
  --size-control: 48px;
  --control-padding-x: 20px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #7a53d6;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: var(--color-surface);
  --input-border: var(--border-width) solid var(--color-border);
  --input-radius: var(--radius-control);
  --input-height: var(--size-control);
  --input-padding-x: var(--control-padding-x);
  --input-shadow: inset 3px 3px 8px rgba(124,58,237,.14), inset -3px -3px 8px #ffffff;
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

1. 内阴影用主色的深色版本，外阴影用主色的低透明版本。
2. 圆角半径 ≥ 高度的 1/3 才有蓬松感。
3. 给按钮加 2–4% 的 hover 放大，强化“可捏”的直觉。
4. 限制一屏内最多两种糖果色，否则变成儿童乐园。

## 6. 常见反例

- 内阴影用了纯黑，边缘会脏；必须用带色相的深色。
- 把黏土按钮放进扁平卡片里，两种材质互相打架。
- 阴影半径超过元素高度的 1.2 倍，形状会溶成一团。

## 7. 参考

- CSS `backdrop-filter` 与多重 `box-shadow` 实践
- Apple Human Interface Guidelines — Materials
- Material Design 3 — Elevation
