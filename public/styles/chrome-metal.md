---
title: "液态金属 · Liquid Chrome"
slug: chrome-metal
category: 精品与戏剧 / Luxe & Dramatic
era: 2023 —
tags: [镜面, 铬, 反光, 未来]
updated: 2026-10-26
---

# 液态金属 · Liquid Chrome

> 镜面金属的未来感：银色铬渐变、扭曲反射与高光条，界面像一块被打磨过的液态金属。

| 项目 | 内容 |
| --- | --- |
| 类别 | 精品与戏剧（Luxe & Dramatic） |
| 年代 | 2023 — |
| 关键词 | 镜面 · 铬 · 反光 · 未来 |
| 主色 | `#c9ccd4` | 
| 底色 | `#0b0b0d` |
| 圆角 | 16px / 24px |
| 控制高度 | 48px |

## 1. 视觉特征

- 铬渐变必须包含多个明暗跳变，不能是单段渐变。
- 高光条（specular）是灵魂，位置统一在顶部 30%。
- 底色偏冷灰黑，让银色跳出来。
- 文字用深色压在亮金属上，或用白色压在暗金属上。

## 2. 适用与慎用

**适合：** 音乐与潮流、3D 与 AI 产品、汽车、概念型发布会。

**慎用：** 可读性优先的产品界面、需要长时间阅读的页面。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0b0b0d` |
| `--color-surface` | background-color | `#131317` |
| `--color-surface-alt` | background-color | `#1b1b21` |
| `--color-fg` | color | `#f5f5f7` |
| `--color-muted` | color | `#a6a8b0` |
| `--color-primary` | background-color | `#c9ccd4` |
| `--color-on-primary` | color | `#0b0b0d` |
| `--color-accent` | background-color | `#8b95a5` |
| `--color-accent-2` | background-color | `#e8edf5` |
| `--color-border` | border-color | `#2a2a31` |
| `--color-disabled` | background-color | `#1a1a1f` |
| `--color-on-disabled` | color | `#71737c` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `-0.03em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.5` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `16px` |
| `--radius-card` | border-radius | `24px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `inset 0 1px 0 rgba(255,255,255,.75), 0 8px 24px rgba(0,0,0,.6)` |
| `--shadow-card` | box-shadow | `inset 0 1px 0 rgba(255,255,255,.5), 0 30px 60px -30px rgba(200,210,230,.28)` |
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
| `--size-control` | height | `48px` |
| `--control-padding-x` | padding-inline | `22px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `linear-gradient(165deg,#f7f9fc,#9aa3b2 22%,#e8edf5 38%,#6d7686 52%,#dfe6f0 70%,#8b95a5)` |
| `--button-fg` | color | `#0b0b0d` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#d1d3da` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#131317` |
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
  --color-bg: #0b0b0d;
  --color-surface: #131317;
  --color-surface-alt: #1b1b21;
  --color-fg: #f5f5f7;
  --color-muted: #a6a8b0;
  --color-primary: #c9ccd4;
  --color-on-primary: #0b0b0d;
  --color-accent: #8b95a5;
  --color-accent-2: #e8edf5;
  --color-border: #2a2a31;
  --color-disabled: #1a1a1f;
  --color-on-disabled: #71737c;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: -0.03em;
  --type-transform: none;
  --type-leading: 1.5;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 16px;
  --radius-card: 24px;
  --border-width: 1px;
  --shadow-control: inset 0 1px 0 rgba(255,255,255,.75), 0 8px 24px rgba(0,0,0,.6);
  --shadow-card: inset 0 1px 0 rgba(255,255,255,.5), 0 30px 60px -30px rgba(200,210,230,.28);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 48px;
  --control-padding-x: 22px;

  /* 按钮 · Button · Component */
  --button-bg: linear-gradient(165deg,#f7f9fc,#9aa3b2 22%,#e8edf5 38%,#6d7686 52%,#dfe6f0 70%,#8b95a5);
  --button-fg: #0b0b0d;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d1d3da;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #131317;
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

1. 铬：`linear-gradient(165deg,#f7f9fc,#9aa3b2 22%,#e8edf5 38%,#6d7686 52%,#dfe6f0 70%,#8b95a5)`。
2. 加 `background-blend-mode: screen` 与细噪点模拟反射。
3. 文字压在铬上时加 `text-shadow: 0 1px 0 rgba(255,255,255,.6)`。
4. 铬只用于标题与主视觉，正文用纯色。

## 6. 常见反例

- 用灰色模拟金属，缺少镜面跳变。
- 铬材质覆盖全文，文字完全不可读。
- 光源方向不一致，金属看起来像塑料。

## 7. 参考

- 时装品牌视觉系统案例（Celine / Bottega）
- 电影调色（Teal & Orange）分析
- 画廊白盒（White Cube）展览设计
