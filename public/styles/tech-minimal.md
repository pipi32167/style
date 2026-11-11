---
title: "科技极简 · Tech Minimal"
slug: tech-minimal
category: 现代界面 / Modern UI
era: 2021 —
tags: [黑底, 发丝线, 等宽标签, 开发者]
updated: 2026-10-26
---

# 科技极简 · Tech Minimal

> Vercel / Linear 一派的开发者美学：近黑底色、1px 发丝边框、等宽字体标签与极少量边缘光。

| 项目 | 内容 |
| --- | --- |
| 类别 | 现代界面（Modern UI） |
| 年代 | 2021 — |
| 关键词 | 黑底 · 发丝线 · 等宽标签 · 开发者 |
| 主色 | `#ededed` | 
| 底色 | `#0a0a0a` |
| 圆角 | 6px / 10px |
| 控制高度 | 40px |

## 1. 视觉特征

- 底色 #0a0a0a，容器 #0f0f10，描边 #262626，三档足够。
- 小标签用等宽大写 + 0.08em 字距，强化工程感。
- 标题用强对比白 + 紧字距，正文降一档灰度。
- 渐变只做“边缘光”，不做大面积填充。

## 2. 适用与慎用

**适合：** 开发者工具、API 产品、基础设施与 AI 平台、技术博客。

**慎用：** 面向大众的消费产品、需要温暖感的医疗与教育场景。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0a0a0a` |
| `--color-surface` | background-color | `#0f0f10` |
| `--color-surface-alt` | background-color | `#161617` |
| `--color-fg` | color | `#ededed` |
| `--color-muted` | color | `#a1a1a1` |
| `--color-primary` | background-color | `#ededed` |
| `--color-on-primary` | color | `#0a0a0a` |
| `--color-accent` | background-color | `#0070f3` |
| `--color-accent-2` | background-color | `#50e3c2` |
| `--color-border` | border-color | `#262626` |
| `--color-disabled` | background-color | `#1a1a1a` |
| `--color-on-disabled` | color | `#6e6e6e` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `-0.02em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `6px` |
| `--radius-card` | border-radius | `10px` |
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
| `--size-control` | height | `40px` |
| `--control-padding-x` | padding-inline | `14px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `#0a0a0a` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#ededed` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#0f0f10` |
| `--input-border` | border | `1px solid #262626` |
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
  --color-bg: #0a0a0a;
  --color-surface: #0f0f10;
  --color-surface-alt: #161617;
  --color-fg: #ededed;
  --color-muted: #a1a1a1;
  --color-primary: #ededed;
  --color-on-primary: #0a0a0a;
  --color-accent: #0070f3;
  --color-accent-2: #50e3c2;
  --color-border: #262626;
  --color-disabled: #1a1a1a;
  --color-on-disabled: #6e6e6e;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 6px;
  --radius-card: 10px;
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
  --size-control: 40px;
  --control-padding-x: 14px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: #0a0a0a;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #ededed;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #0f0f10;
  --input-border: 1px solid #262626;
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

1. `border: 1px solid #262626`，hover 提到 #3a3a3a。
2. 卡片内边距 20–24px，区块间距 64px。
3. 用 linear-gradient 做 1px 顶部高光模拟边缘光。
4. 正文 15px / 1.65，最大行宽 680px。

## 6. 常见反例

- 整页纯黑 + 纯白，缺少中间灰导致刺眼。
- 把等宽字体用于正文段落，阅读效率下降。
- 发丝线用 2px 以上，精致感消失。

## 7. 参考

- Material Design 3 Guidelines
- Apple Human Interface Guidelines
- WCAG 2.2 对比度与焦点可见性
