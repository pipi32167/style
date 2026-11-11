---
title: "未来主义 · Futurism"
slug: futurism
category: 历史运动 / Historic Movements
era: 1909 — 1930
tags: [速度, 斜线, 动能, 机械]
updated: 2026-10-26
---

# 未来主义 · Futurism

> 意大利未来主义宣言的视觉版：速度线、重复残影与斜向排版，一切都在向前冲。

| 项目 | 内容 |
| --- | --- |
| 类别 | 历史运动（Historic Movements） |
| 年代 | 1909 — 1930 |
| 关键词 | 速度 · 斜线 · 动能 · 机械 |
| 主色 | `#00f0ff` | 
| 底色 | `#0b0b12` |
| 圆角 | 2px / 4px |
| 控制高度 | 42px |

## 1. 视觉特征

- 速度线、放射线与重复错位的“残影”是核心语法。
- 所有排版倾向斜向，字号极端拉伸。
- 冷色金属（青、银）配一个高饱和警示色。
- 构图重心偏下或偏角，制造失衡的动势。

## 2. 适用与慎用

**适合：** 汽车与运动品牌、科技发布会、电竞与游戏、音乐现场。

**慎用：** 需要静态阅读的文档、需要稳定性的金融服务。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0b0b12` |
| `--color-surface` | background-color | `#14141d` |
| `--color-surface-alt` | background-color | `#1c1c28` |
| `--color-fg` | color | `#eef2ff` |
| `--color-muted` | color | `#9aa2bd` |
| `--color-primary` | background-color | `#00f0ff` |
| `--color-on-primary` | color | `#06121a` |
| `--color-accent` | background-color | `#ff2bd6` |
| `--color-accent-2` | background-color | `#7c5cff` |
| `--color-border` | border-color | `#262a3b` |
| `--color-disabled` | background-color | `#1a1e2a` |
| `--color-on-disabled` | color | `#6f7690` |

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
| `--radius-control` | border-radius | `2px` |
| `--radius-card` | border-radius | `4px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 0 0 1px #00f0ff inset` |
| `--shadow-card` | box-shadow | `0 0 40px rgba(0,240,255,.22)` |
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
| `--button-bg` | background-color | `transparent` |
| `--button-fg` | color | `#00f0ff` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #00f0ff` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#2bf0ff` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#14141d` |
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
  --color-bg: #0b0b12;
  --color-surface: #14141d;
  --color-surface-alt: #1c1c28;
  --color-fg: #eef2ff;
  --color-muted: #9aa2bd;
  --color-primary: #00f0ff;
  --color-on-primary: #06121a;
  --color-accent: #ff2bd6;
  --color-accent-2: #7c5cff;
  --color-border: #262a3b;
  --color-disabled: #1a1e2a;
  --color-on-disabled: #6f7690;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 800;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.3;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 2px;
  --radius-card: 4px;
  --border-width: 1px;
  --shadow-control: 0 0 0 1px #00f0ff inset;
  --shadow-card: 0 0 40px rgba(0,240,255,.22);
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
  --button-bg: transparent;
  --button-fg: #00f0ff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #00f0ff;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #2bf0ff;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #14141d;
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

1. 速度线用 `repeating-linear-gradient` 并限制在装饰层。
2. 标题用 `font-stretch` 或 `transform: skewX(-8deg)`。
3. 残影用两层伪元素偏移 4px，透明度 30%。
4. 动效时长 ≤ 400ms，且尊重 `prefers-reduced-motion`。

## 6. 常见反例

- 斜排段落导致颈部疲劳，正文必须正交。
- 速度线铺满全屏，主体被淹没。
- 残影效果用在高对比小字上，直接模糊不可读。

## 7. 参考

- Wikipedia — Bauhaus / De Stijl / 构成主义
- Josef Müller-Brockmann《Grid Systems》
- MoMA 平面设计收藏
