---
title: "便当盒布局 · Bento Grid"
slug: bento-grid
category: 现代界面 / Modern UI
era: 2022 —
tags: [网格, 模块化, 功能陈列, 大小对比]
updated: 2026-10-26
---

# 便当盒布局 · Bento Grid

> 把内容切成大小不一的圆角格子，像日式便当一样拼在一起，一屏讲完产品的所有卖点。

| 项目 | 内容 |
| --- | --- |
| 类别 | 现代界面（Modern UI） |
| 年代 | 2022 — |
| 关键词 | 网格 · 模块化 · 功能陈列 · 大小对比 |
| 主色 | `#1d1d1f` | 
| 底色 | `#ffffff` |
| 圆角 | 12px / 20px |
| 控制高度 | 44px |

## 1. 视觉特征

- 所有格子共用同一套圆角与间距（16–24px）。
- 必须有一个主格（2×2）作为视觉锚点，其余为 1×1 或 1×2。
- 每格只表达一个信息点：标题 + 一句话 + 一个视觉。
- 格子内部留白 ≥ 24px，避免内容贴边。

## 2. 适用与慎用

**适合：** 产品功能页、SaaS 落地页、发布会页面、个人作品集。

**慎用：** 线性叙事的长文、需要严格阅读顺序的表单。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#ffffff` |
| `--color-surface` | background-color | `#f5f5f7` |
| `--color-surface-alt` | background-color | `#ececf0` |
| `--color-fg` | color | `#1d1d1f` |
| `--color-muted` | color | `#6e6e73` |
| `--color-primary` | background-color | `#1d1d1f` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#ff375f` |
| `--color-accent-2` | background-color | `#0a84ff` |
| `--color-border` | border-color | `#e5e5ea` |
| `--color-disabled` | background-color | `#f0f0f4` |
| `--color-on-disabled` | color | `#b0b0b8` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `650` |
| `--type-tracking` | letter-spacing | `-0.02em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.5` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `12px` |
| `--radius-card` | border-radius | `20px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 2px 8px rgba(0,0,0,.04)` |
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
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#1d1d1f` |
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
  --color-bg: #ffffff;
  --color-surface: #f5f5f7;
  --color-surface-alt: #ececf0;
  --color-fg: #1d1d1f;
  --color-muted: #6e6e73;
  --color-primary: #1d1d1f;
  --color-on-primary: #ffffff;
  --color-accent: #ff375f;
  --color-accent-2: #0a84ff;
  --color-border: #e5e5ea;
  --color-disabled: #f0f0f4;
  --color-on-disabled: #b0b0b8;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 650;
  --type-tracking: -0.02em;
  --type-transform: none;
  --type-leading: 1.5;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 12px;
  --radius-card: 20px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 2px 8px rgba(0,0,0,.04);
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
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #1d1d1f;
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

1. `grid-template-columns: repeat(4,minmax(0,1fr))`，主格 `span 2 / span 2`。
2. 间距统一 16px，容器最大宽度 1200px。
3. 移动端降为单列，顺序按重要性重排。
4. 每格给一个 hover 微交互（内容上浮 2px）。

## 6. 常见反例

- 格子大小完全随机，读者不知道该先看哪里。
- 每格塞进三个卖点，便当盒变成杂物箱。
- 用不一致的圆角与间距，网格立刻松散。

## 7. 参考

- Material Design 3 Guidelines
- Apple Human Interface Guidelines
- WCAG 2.2 对比度与焦点可见性
