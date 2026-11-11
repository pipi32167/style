---
title: "画廊白盒 · White Cube"
slug: whitecube
category: 精品与戏剧 / Luxe & Dramatic
era: 1970 —
tags: [纯白, 留白, 无装饰, 作品优先]
updated: 2026-10-26
---

# 画廊白盒 · White Cube

> 美术馆的布展逻辑：一切装置消失，只剩白色墙面、均匀光与作品本身。

| 项目 | 内容 |
| --- | --- |
| 类别 | 精品与戏剧（Luxe & Dramatic） |
| 年代 | 1970 — |
| 关键词 | 纯白 · 留白 · 无装饰 · 作品优先 |
| 主色 | `#101010` | 
| 底色 | `#fbfbfa` |
| 圆角 | 0px / 0px |
| 控制高度 | 44px |

## 1. 视觉特征

- 背景接近纯白（#fbfbfa），容器不用卡片与阴影。
- 留白极大，内容宽度受限（≤ 1200px）。
- 文字只有两档：标题与说明，均极简。
- 作品图像均匀布光，不加边框与圆角。

## 2. 适用与慎用

**适合：** 画廊与美术馆、艺术家与摄影师作品集、建筑与设计档案。

**慎用：** 需要强引导的营销页、内容密度高的工具。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#fbfbfa` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#f4f4f2` |
| `--color-fg` | color | `#101010` |
| `--color-muted` | color | `#6b6b6b` |
| `--color-primary` | background-color | `#101010` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#101010` |
| `--color-accent-2` | background-color | `#8a8a8a` |
| `--color-border` | border-color | `#e8e8e6` |
| `--color-disabled` | background-color | `#f0f0ee` |
| `--color-on-disabled` | color | `#a8a8a6` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `400` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.75` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `0px` |
| `--border-width` | border-width | `1px` |
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
| `--size-control` | height | `44px` |
| `--control-padding-x` | padding-inline | `16px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `transparent` |
| `--button-fg` | color | `#101010` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #101010` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#101010` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `transparent` |
| `--input-border` | border | `1px solid #dcdcda` |
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
  --color-bg: #fbfbfa;
  --color-surface: #ffffff;
  --color-surface-alt: #f4f4f2;
  --color-fg: #101010;
  --color-muted: #6b6b6b;
  --color-primary: #101010;
  --color-on-primary: #ffffff;
  --color-accent: #101010;
  --color-accent-2: #8a8a8a;
  --color-border: #e8e8e6;
  --color-disabled: #f0f0ee;
  --color-on-disabled: #a8a8a6;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 400;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.75;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 0px;
  --border-width: 1px;
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
  --size-control: 44px;
  --control-padding-x: 16px;

  /* 按钮 · Button · Component */
  --button-bg: transparent;
  --button-fg: #101010;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #101010;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #101010;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: transparent;
  --input-border: 1px solid #dcdcda;
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

1. 网格 12 栏，图像占 6–12 栏，说明占 3 栏。
2. 说明文字 13px、字距 0.02em、颜色 #6b6b6b。
3. hover 只做轻微透明度或缩放（1.01）。
4. 禁用阴影与圆角，边框仅为 1px #eee。

## 6. 常见反例

- 留白不足，白盒变成白底网页。
- 加入品牌色与装饰图案，作品被干扰。
- 说明文字过小（<12px），信息不可读。

## 7. 参考

- 时装品牌视觉系统案例（Celine / Bottega）
- 电影调色（Teal & Orange）分析
- 画廊白盒（White Cube）展览设计
