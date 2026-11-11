---
title: "终端命令行 · Terminal / CLI"
slug: terminal-cli
category: 复古与数字怀旧 / Retro & Nostalgia
era: 1970 —
tags: [等宽, 荧光绿, 光标, 无装饰]
updated: 2026-10-26
---

# 终端命令行 · Terminal / CLI

> 把界面还原成一台终端：等宽字体、荧光绿、块状光标与无边框的分隔线。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 1970 — |
| 关键词 | 等宽 · 荧光绿 · 光标 · 无装饰 |
| 主色 | `#33ff66` | 
| 底色 | `#0c0c0c` |
| 圆角 | 0px / 0px |
| 控制高度 | 34px |

## 1. 视觉特征

- 只用等宽字体，字号 13–14px，行高 1.6。
- 色板：黑底 + 一档荧光绿/琥珀色 + 高亮白。
- 分隔用 `─ │ ┌ ┐` 等制表符或 1px 线。
- 交互反馈是光标闪烁与字符回显，不做弹性动画。

## 2. 适用与慎用

**适合：** 开发者工具文档、安全产品、极客社区、状态页。

**慎用：** 面向大众的消费应用、需要图像表达的产品。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0c0c0c` |
| `--color-surface` | background-color | `#141414` |
| `--color-surface-alt` | background-color | `#1b1b1b` |
| `--color-fg` | color | `#d6ffd6` |
| `--color-muted` | color | `#7fae7f` |
| `--color-primary` | background-color | `#33ff66` |
| `--color-on-primary` | color | `#0c0c0c` |
| `--color-accent` | background-color | `#33ff66` |
| `--color-accent-2` | background-color | `#ffb000` |
| `--color-border` | border-color | `#1f2a1f` |
| `--color-disabled` | background-color | `#181818` |
| `--color-on-disabled` | color | `#5c6b5c` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-body` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `400` |
| `--type-tracking` | letter-spacing | `0` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.65` |

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
| `--size-control` | height | `34px` |
| `--control-padding-x` | padding-inline | `12px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `transparent` |
| `--button-fg` | color | `#33ff66` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #33ff66` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#50ff7a` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#0c0c0c` |
| `--input-border` | border | `1px solid #33ff66` |
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
  --color-bg: #0c0c0c;
  --color-surface: #141414;
  --color-surface-alt: #1b1b1b;
  --color-fg: #d6ffd6;
  --color-muted: #7fae7f;
  --color-primary: #33ff66;
  --color-on-primary: #0c0c0c;
  --color-accent: #33ff66;
  --color-accent-2: #ffb000;
  --color-border: #1f2a1f;
  --color-disabled: #181818;
  --color-on-disabled: #5c6b5c;

  /* 字体与排版 · Typography */
  --font-display: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-body: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 400;
  --type-tracking: 0;
  --type-transform: none;
  --type-leading: 1.65;

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
  --size-control: 34px;
  --control-padding-x: 12px;

  /* 按钮 · Button · Component */
  --button-bg: transparent;
  --button-fg: #33ff66;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #33ff66;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #50ff7a;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #0c0c0c;
  --input-border: 1px solid #33ff66;
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

1. `font-variant-ligatures: none`，避免连字破坏等宽。
2. 用 `::after` 做块状光标，1s 步进闪烁。
3. 可用 `text-shadow: 0 0 6px currentColor` 做 CRT 余光。
4. 正文降到 80% 亮度的绿，标题才用满亮度。

## 6. 常见反例

- 正文用纯荧光绿长时间阅读，眼睛酸痛。
- 混入圆角按钮与彩色图标，气质破碎。
- 所有文字都大写，可读性下降。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
