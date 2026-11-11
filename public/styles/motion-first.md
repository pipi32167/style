---
title: "动效优先 · Motion First"
slug: motion-first
category: 现代界面 / Modern UI
era: 2019 —
tags: [微交互, 物理曲线, 状态过渡, 深色]
updated: 2026-10-26
---

# 动效优先 · Motion First

> 界面像有惯性：元素有质量、转场有方向、状态变化用弹簧曲线而非线性时间。

| 项目 | 内容 |
| --- | --- |
| 类别 | 现代界面（Modern UI） |
| 年代 | 2019 — |
| 关键词 | 微交互 · 物理曲线 · 状态过渡 · 深色 |
| 主色 | `#e7ff4f` | 
| 底色 | `#0a0a0b` |
| 圆角 | 14px / 20px |
| 控制高度 | 46px |

## 1. 视觉特征

- 每个交互都要有一句“为什么动”：吸引注意、表达因果、维持上下文。
- 时长 120–320ms，入场慢、退场快。
- 使用弹簧或 cubic-bezier(.2,.8,.2,1)，避免线性。
- 位移与透明度同步变化，不做孤立淡入。

## 2. 适用与慎用

**适合：** 创意工具、AI 产品、演示型站点、需要表达“活”的产品。

**慎用：** 低端设备、长时间表单、需要稳定阅读的文档。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0a0a0b` |
| `--color-surface` | background-color | `#141416` |
| `--color-surface-alt` | background-color | `#1d1d20` |
| `--color-fg` | color | `#f2f2f3` |
| `--color-muted` | color | `#9b9ba2` |
| `--color-primary` | background-color | `#e7ff4f` |
| `--color-on-primary` | color | `#0a0a0b` |
| `--color-accent` | background-color | `#7c5cff` |
| `--color-accent-2` | background-color | `#4ff0c1` |
| `--color-border` | border-color | `#26262a` |
| `--color-disabled` | background-color | `#1c1c1f` |
| `--color-on-disabled` | color | `#6b6b72` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `-0.025em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.45` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `14px` |
| `--radius-card` | border-radius | `20px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 0 0 1px rgba(231,255,79,.25)` |
| `--shadow-card` | box-shadow | `0 24px 60px -24px rgba(231,255,79,.28)` |
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
| `--size-control` | height | `46px` |
| `--control-padding-x` | padding-inline | `20px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `#0a0a0b` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#e9fd6d` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#141416` |
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
  --color-bg: #0a0a0b;
  --color-surface: #141416;
  --color-surface-alt: #1d1d20;
  --color-fg: #f2f2f3;
  --color-muted: #9b9ba2;
  --color-primary: #e7ff4f;
  --color-on-primary: #0a0a0b;
  --color-accent: #7c5cff;
  --color-accent-2: #4ff0c1;
  --color-border: #26262a;
  --color-disabled: #1c1c1f;
  --color-on-disabled: #6b6b72;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: -0.025em;
  --type-transform: none;
  --type-leading: 1.45;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 14px;
  --radius-card: 20px;
  --border-width: 1px;
  --shadow-control: 0 0 0 1px rgba(231,255,79,.25);
  --shadow-card: 0 24px 60px -24px rgba(231,255,79,.28);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 46px;
  --control-padding-x: 20px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: #0a0a0b;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #e9fd6d;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #141416;
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

1. 统一三条曲线：enter / exit / emphasis，写进 CSS 变量。
2. 只动 transform 与 opacity，避免布局抖动。
3. 列表 stagger 延迟 30–50ms，总数不超过 8 项。
4. 谨慎使用 `will-change`，避免图层爆炸。

## 6. 常见反例

- 所有元素都做入场动画，页面像幻灯片。
- hover 动效 500ms 以上，操作变迟钝。
- 忽略 prefers-reduced-motion。

## 7. 参考

- Material Design 3 Guidelines
- Apple Human Interface Guidelines
- WCAG 2.2 对比度与焦点可见性
