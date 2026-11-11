---
title: "粗野主义 · Brutalism"
slug: brutalism
category: 粗野与实验 / Brutal & Experimental
era: 2014 —
tags: [默认样式, 无装饰, HTML 本色, 反设计]
updated: 2026-10-26
---

# 粗野主义 · Brutalism

> 把浏览器默认样式、系统字体与裸露的 HTML 结构直接摆上台面，拒绝一切装饰性打磨。

| 项目 | 内容 |
| --- | --- |
| 类别 | 粗野与实验（Brutal & Experimental） |
| 年代 | 2014 — |
| 关键词 | 默认样式 · 无装饰 · HTML 本色 · 反设计 |
| 主色 | `#000000` | 
| 底色 | `#f2f2f0` |
| 圆角 | 0px / 0px |
| 控制高度 | 36px |

## 1. 视觉特征

- 使用系统默认字体与默认链接蓝，不加圆角与阴影。
- 结构即设计：表格、hr、ul 直接可见。
- 字号阶梯极端（正文 16px，标题 56px 以上）。
- 留白要么极大，要么极小，不做中间态。

## 2. 适用与慎用

**适合：** 个人博客、实验项目、艺术机构、技术文档。

**慎用：** 商业转化页、需要建立信任的产品、移动端复杂交互。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f2f2f0` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#e6e6e3` |
| `--color-fg` | color | `#000000` |
| `--color-muted` | color | `#4a4a4a` |
| `--color-primary` | background-color | `#000000` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#0000ee` |
| `--color-accent-2` | background-color | `#cc0000` |
| `--color-border` | border-color | `#000000` |
| `--color-disabled` | background-color | `#dcdcd8` |
| `--color-on-disabled` | color | `#8a8a86` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `0` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.5` |

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
| `--size-control` | height | `36px` |
| `--control-padding-x` | padding-inline | `10px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `#ffffff` |
| `--button-fg` | color | `#000000` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #000000` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#000000` |
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
  --color-bg: #f2f2f0;
  --color-surface: #ffffff;
  --color-surface-alt: #e6e6e3;
  --color-fg: #000000;
  --color-muted: #4a4a4a;
  --color-primary: #000000;
  --color-on-primary: #ffffff;
  --color-accent: #0000ee;
  --color-accent-2: #cc0000;
  --color-border: #000000;
  --color-disabled: #dcdcd8;
  --color-on-disabled: #8a8a86;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: 0;
  --type-transform: none;
  --type-leading: 1.5;

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
  --size-control: 36px;
  --control-padding-x: 10px;

  /* 按钮 · Button · Component */
  --button-bg: #ffffff;
  --button-fg: #000000;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #000000;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #000000;
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

1. 保留 `font-family: Times, serif` 或系统 UI 字体，不做字体加载。
2. 链接保留下划线，visited 用紫色——这是有意的历史引用。
3. 用 `border: 1px solid #000` 划分区块，不做卡片。
4. 移动端单列，最大宽度 72ch。

## 6. 常见反例

- 以为“丑”就是粗野，实际缺少排版控制，页面只是坏掉了。
- 正文用 12px，粗野不等于难读。
- 在粗野外观里塞入精心设计的渐变按钮，气质割裂。

## 7. 参考

- Web Brutalism 讨论（Bloomberg / Awwwards 访谈）
- Anti-design 与后数字平面设计
- CSS `box-shadow` 硬阴影技巧
