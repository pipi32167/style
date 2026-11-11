---
title: "像素艺术 · Pixel Art"
slug: pixel-art
category: 复古与数字怀旧 / Retro & Nostalgia
era: 1985 —
tags: [8-bit, 硬边, 调色板限制, 游戏]
updated: 2026-10-26
---

# 像素艺术 · Pixel Art

> 在有限调色板与硬边像素里做设计：无抗锯齿、无渐变、无圆角，每个像素都要有意义。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 1985 — |
| 关键词 | 8-bit · 硬边 · 调色板限制 · 游戏 |
| 主色 | `#ffcd75` | 
| 底色 | `#1a1c2c` |
| 圆角 | 0px / 0px |
| 控制高度 | 40px |

## 1. 视觉特征

- 调色板限制在 8–16 色，禁止渐变与半透明。
- 所有边缘为硬边，缩放必须整数倍（image-rendering: pixelated）。
- 间距使用 4/8 的倍数，保证像素网格对齐。
- 字体用像素字体或等宽，字距固定。

## 2. 适用与慎用

**适合：** 独立游戏、开发者工具彩蛋、复古主题社区、活动视觉。

**慎用：** 长文阅读、复杂表单、需要高分辨率的现代产品首屏。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#1a1c2c` |
| `--color-surface` | background-color | `#29366f` |
| `--color-surface-alt` | background-color | `#3b5dc9` |
| `--color-fg` | color | `#f4f4f4` |
| `--color-muted` | color | `#94b0c2` |
| `--color-primary` | background-color | `#ffcd75` |
| `--color-on-primary` | color | `#1a1c2c` |
| `--color-accent` | background-color | `#ef7d57` |
| `--color-accent-2` | background-color | `#41a6f6` |
| `--color-border` | border-color | `#566c86` |
| `--color-disabled` | background-color | `#333c57` |
| `--color-on-disabled` | color | `#94b0c2` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-body` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `0.02em` |
| `--type-transform` | text-transform | `uppercase` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `0px` |
| `--border-width` | border-width | `2px` |
| `--shadow-control` | box-shadow | `4px 4px 0 #0d0f1a` |
| `--shadow-card` | box-shadow | `6px 6px 0 #0d0f1a` |
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
| `--size-control` | height | `40px` |
| `--control-padding-x` | padding-inline | `14px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `#1a1c2c` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `2px solid #0d0f1a` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#fdd48c` |
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
  --color-bg: #1a1c2c;
  --color-surface: #29366f;
  --color-surface-alt: #3b5dc9;
  --color-fg: #f4f4f4;
  --color-muted: #94b0c2;
  --color-primary: #ffcd75;
  --color-on-primary: #1a1c2c;
  --color-accent: #ef7d57;
  --color-accent-2: #41a6f6;
  --color-border: #566c86;
  --color-disabled: #333c57;
  --color-on-disabled: #94b0c2;

  /* 字体与排版 · Typography */
  --font-display: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-body: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: 0.02em;
  --type-transform: uppercase;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 0px;
  --border-width: 2px;
  --shadow-control: 4px 4px 0 #0d0f1a;
  --shadow-card: 6px 6px 0 #0d0f1a;
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 40px;
  --control-padding-x: 14px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: #1a1c2c;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 2px solid #0d0f1a;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #fdd48c;
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

1. `image-rendering: pixelated` 必须加到所有位图元素。
2. 边框用 box-shadow 模拟像素阶梯，避免 border-radius。
3. 建立 8px 基准网格，1 单位 = 1 像素块。
4. 正文可退回系统字体，像素风只做标题与装饰。

## 6. 常见反例

- 用矢量图形缩小再称像素风，边缘是模糊的。
- 非整数倍缩放，像素被拉伸成长方形。
- 像素字体用于正文，阅读极慢。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
