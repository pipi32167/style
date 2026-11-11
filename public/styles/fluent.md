---
title: "Fluent Design"
slug: fluent
category: 现代界面 / Modern UI
era: 2017 —
tags: [光感, 深度, 动效, 材质]
updated: 2026-10-26
---

# Fluent Design · Fluent Design

> 微软的设计体系，用光、深度、动效、材质与尺度五个维度统一 Windows 与 Office 的观感。

| 项目 | 内容 |
| --- | --- |
| 类别 | 现代界面（Modern UI） |
| 年代 | 2017 — |
| 关键词 | 光感 · 深度 · 动效 · 材质 |
| 主色 | `#0067c0` | 
| 底色 | `#f3f3f3` |
| 圆角 | 4px / 8px |
| 控制高度 | 34px |

## 1. 视觉特征

- 控件 32–40px 高，圆角 4px，密度明显高于 Material。
- Reveal 高光：悬停时边框出现跟随光标的亮边。
- 层级依靠微妙的描边与 1–2px 的阴影，而不是大投影。
- 动效短促（120–200ms），用 connected animation 表达转场。

## 2. 适用与慎用

**适合：** 桌面级应用、生产力工具、需要键鼠精细操作的后台。

**慎用：** 移动端轻量应用、消费级娱乐产品。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f3f3f3` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#ebebeb` |
| `--color-fg` | color | `#1b1b1b` |
| `--color-muted` | color | `#5d5d5d` |
| `--color-primary` | background-color | `#0067c0` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#0067c0` |
| `--color-accent-2` | background-color | `#7719aa` |
| `--color-border` | border-color | `#e0e0e0` |
| `--color-disabled` | background-color | `#f0f0f0` |
| `--color-on-disabled` | color | `#9d9d9d` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `0` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.5` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `4px` |
| `--radius-card` | border-radius | `8px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 1px 2px rgba(0,0,0,.08)` |
| `--shadow-card` | box-shadow | `0 4px 10px rgba(0,0,0,.10)` |
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
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#0559a2` |
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
  --color-bg: #f3f3f3;
  --color-surface: #ffffff;
  --color-surface-alt: #ebebeb;
  --color-fg: #1b1b1b;
  --color-muted: #5d5d5d;
  --color-primary: #0067c0;
  --color-on-primary: #ffffff;
  --color-accent: #0067c0;
  --color-accent-2: #7719aa;
  --color-border: #e0e0e0;
  --color-disabled: #f0f0f0;
  --color-on-disabled: #9d9d9d;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0;
  --type-transform: none;
  --type-leading: 1.5;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 4px;
  --radius-card: 8px;
  --border-width: 1px;
  --shadow-control: 0 1px 2px rgba(0,0,0,.08);
  --shadow-card: 0 4px 10px rgba(0,0,0,.10);
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
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #0559a2;
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

1. 主色继承系统强调色，可通过 CSS 变量注入。
2. 悬停态用 1px 内描边（rgba(255,255,255,.7)）+ 6% 底色。
3. 焦点框 2px，距控件 1px，符合键盘导航规范。
4. 所有动画提供 `prefers-reduced-motion` 降级。

## 6. 常见反例

- 把所有 Reveal 效果同时打开，界面像霓虹灯。
- 圆角照搬 Material（16px），失去 Fluent 的紧凑感。
- 正文使用 12px 以下，系统缩放后完全糊掉。

## 7. 参考

- Material Design 3 Guidelines
- Apple Human Interface Guidelines
- WCAG 2.2 对比度与焦点可见性
