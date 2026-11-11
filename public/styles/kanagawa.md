---
title: "Kanagawa 主题"
slug: kanagawa
category: 编辑器主题 / Editor Themes
era: 2020 —
tags: [浮世绘, 墨蓝, 和风, 低饱和]
updated: 2026-10-26
---

# Kanagawa 主题 · Kanagawa

> 取自《神奈川冲浪里》的配色：墨蓝底、浪白、朱红与藤紫，暗色里带着和风的克制。

| 项目 | 内容 |
| --- | --- |
| 类别 | 编辑器主题（Editor Themes） |
| 年代 | 2020 — |
| 关键词 | 浮世绘 · 墨蓝 · 和风 · 低饱和 |
| 主色 | `#7e9cd8` | 
| 底色 | `#1f1f28` |
| 圆角 | 4px / 8px |
| 控制高度 | 38px |

## 1. 视觉特征

- 底 #1f1f28，表面 #2a2a37，文本 #dcd7ba（宣纸白）。
- 主色浪蓝 #7e9cd8，朱红 #c34043，藤紫 #957fb8。
- 色相偏冷，但文本暖白，形成和风对比。
- 几乎不用渐变，靠色面与留白。

## 2. 适用与慎用

**适合：** 写作与阅读、编辑器、日式品牌与内容站。

**慎用：** 需要西式现代感的品牌、明亮环境。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#1f1f28` |
| `--color-surface` | background-color | `#2a2a37` |
| `--color-surface-alt` | background-color | `#363646` |
| `--color-fg` | color | `#dcd7ba` |
| `--color-muted` | color | `#a6a69c` |
| `--color-primary` | background-color | `#7e9cd8` |
| `--color-on-primary` | color | `#16161d` |
| `--color-accent` | background-color | `#c34043` |
| `--color-accent-2` | background-color | `#957fb8` |
| `--color-border` | border-color | `#363646` |
| `--color-disabled` | background-color | `#25252f` |
| `--color-on-disabled` | color | `#72726d` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `0.005em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.7` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `4px` |
| `--radius-card` | border-radius | `8px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 6px 20px rgba(15,15,22,.55)` |
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
| `--size-control` | height | `38px` |
| `--control-padding-x` | padding-inline | `14px` |

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
| `--button-hover-bg` | background-color | `#8fa7d3` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#2a2a37` |
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
  --color-bg: #1f1f28;
  --color-surface: #2a2a37;
  --color-surface-alt: #363646;
  --color-fg: #dcd7ba;
  --color-muted: #a6a69c;
  --color-primary: #7e9cd8;
  --color-on-primary: #16161d;
  --color-accent: #c34043;
  --color-accent-2: #957fb8;
  --color-border: #363646;
  --color-disabled: #25252f;
  --color-on-disabled: #72726d;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0.005em;
  --type-transform: none;
  --type-leading: 1.7;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 4px;
  --radius-card: 8px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 6px 20px rgba(15,15,22,.55);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 38px;
  --control-padding-x: 14px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #8fa7d3;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #2a2a37;
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

1. 表面阶梯：#1f1f28 → #2a2a37 → #363646。
2. 正文 #dcd7ba（约 10:1），弱化 #a6a69c。
3. 朱红只用于关键状态与装饰线。
4. 标题可用衬线，正文用 grotesk。

## 6. 常见反例

- 朱红大面积使用，和风的含蓄被破坏。
- 文本用纯白，宣纸感消失。
- 加入霓虹色，与浮世绘气质冲突。

## 7. 参考

- 各主题官方配色仓库（GitHub）
- WCAG 对比度校验
- 编辑器 ANSI 16 色映射
