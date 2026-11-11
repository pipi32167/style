---
title: "电影感 · Cinematic"
slug: cinematic
category: 精品与戏剧 / Luxe & Dramatic
era: 2000 —
tags: [青橙调, 暗角, 宽画幅, 颗粒]
updated: 2026-10-26
---

# 电影感 · Cinematic

> 电影调色的界面移植：青橙互补、暗部压青、高光偏暖，配宽画幅与胶片颗粒。

| 项目 | 内容 |
| --- | --- |
| 类别 | 精品与戏剧（Luxe & Dramatic） |
| 年代 | 2000 — |
| 关键词 | 青橙调 · 暗角 · 宽画幅 · 颗粒 |
| 主色 | `#e08a3c` | 
| 底色 | `#0e1214` |
| 圆角 | 2px / 4px |
| 控制高度 | 44px |

## 1. 视觉特征

- 暗部偏青（#0e1214），高光偏橙（#e08a3c），中间调低饱和。
- 构图宽画幅（21:9 遮幅），大量黑色留边。
- 文字常压在图像暗部，用轻描边或渐变遮罩保证可读。
- 颗粒与暗角是必要的“胶片”信号。

## 2. 适用与慎用

**适合：** 影视与流媒体、游戏预告、叙事型品牌页、摄影作品集。

**慎用：** 数据产品、需要色彩中性的设计系统、电商商品图。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0e1214` |
| `--color-surface` | background-color | `#151b1e` |
| `--color-surface-alt` | background-color | `#1d2428` |
| `--color-fg` | color | `#eef2f2` |
| `--color-muted` | color | `#9aa8ab` |
| `--color-primary` | background-color | `#e08a3c` |
| `--color-on-primary` | color | `#12100c` |
| `--color-accent` | background-color | `#2f7d84` |
| `--color-accent-2` | background-color | `#e8c79a` |
| `--color-border` | border-color | `#242e33` |
| `--color-disabled` | background-color | `#1a2124` |
| `--color-on-disabled` | color | `#6f7c80` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `500` |
| `--type-tracking` | letter-spacing | `-0.005em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.7` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `2px` |
| `--radius-card` | border-radius | `4px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 30px 80px -40px rgba(0,0,0,.9)` |
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
| `--control-padding-x` | padding-inline | `18px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `#12100c` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#e39d5d` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#151b1e` |
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
  --color-bg: #0e1214;
  --color-surface: #151b1e;
  --color-surface-alt: #1d2428;
  --color-fg: #eef2f2;
  --color-muted: #9aa8ab;
  --color-primary: #e08a3c;
  --color-on-primary: #12100c;
  --color-accent: #2f7d84;
  --color-accent-2: #e8c79a;
  --color-border: #242e33;
  --color-disabled: #1a2124;
  --color-on-disabled: #6f7c80;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 500;
  --type-tracking: -0.005em;
  --type-transform: none;
  --type-leading: 1.7;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 2px;
  --radius-card: 4px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 30px 80px -40px rgba(0,0,0,.9);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 44px;
  --control-padding-x: 18px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: #12100c;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #e39d5d;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #151b1e;
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

1. 遮罩：`linear-gradient(180deg, transparent, rgba(0,0,0,.75))`。
2. 颗粒用 feTurbulence，`opacity:.07`，`mix-blend-mode: overlay`。
3. 暗角用 `radial-gradient(circle, transparent 55%, rgba(0,0,0,.6))`。
4. 色彩只作用于图像与装饰层，正文保持中性白。

## 6. 常见反例

- 整屏青橙对撞，肤色与商品色全失真。
- 正文压在复杂画面中央，没有遮罩。
- 颗粒过重，导致文字边缘发毛。

## 7. 参考

- 时装品牌视觉系统案例（Celine / Bottega）
- 电影调色（Teal & Orange）分析
- 画廊白盒（White Cube）展览设计
