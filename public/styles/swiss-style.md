---
title: "瑞士国际主义 · Swiss Style"
slug: swiss-style
category: 历史运动 / Historic Movements
era: 1950 — 1970
tags: [网格系统, 无衬线, 左对齐, 客观]
updated: 2026-10-26
---

# 瑞士国际主义 · Swiss Style

> 用数学网格与无衬线字体建立绝对秩序，让信息本身成为主角，装饰性降到零。

| 项目 | 内容 |
| --- | --- |
| 类别 | 历史运动（Historic Movements） |
| 年代 | 1950 — 1970 |
| 关键词 | 网格系统 · 无衬线 · 左对齐 · 客观 |
| 主色 | `#e2231a` | 
| 底色 | `#ffffff` |
| 圆角 | 0px / 0px |
| 控制高度 | 40px |

## 1. 视觉特征

- 严格的栏网格（常见 12 栏），全部左对齐、绝不居中。
- Helvetica 类无衬线，字号阶梯少而极端。
- 只用黑、白与一个强调红，靠字号与留白制造层级。
- 图像裁切大胆，可跨栏出血。

## 2. 适用与慎用

**适合：** 出版物、机构官网、数据叙事、建筑与设计工作室。

**慎用：** 强调情感与趣味的消费产品、儿童与娱乐场景。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#ffffff` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#f2f2f0` |
| `--color-fg` | color | `#111111` |
| `--color-muted` | color | `#5c5c58` |
| `--color-primary` | background-color | `#e2231a` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#e2231a` |
| `--color-accent-2` | background-color | `#111111` |
| `--color-border` | border-color | `#111111` |
| `--color-disabled` | background-color | `#e8e8e5` |
| `--color-on-disabled` | color | `#8f8f8a` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Helvetica Neue", "Arial", "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Helvetica Neue", "Arial", "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `-0.025em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.35` |

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
| `--size-control` | height | `40px` |
| `--control-padding-x` | padding-inline | `14px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `#111111` |
| `--button-fg` | color | `#ffffff` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#bc2018` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#ffffff` |
| `--input-border` | border | `1px solid #111111` |
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
  --color-surface: #ffffff;
  --color-surface-alt: #f2f2f0;
  --color-fg: #111111;
  --color-muted: #5c5c58;
  --color-primary: #e2231a;
  --color-on-primary: #ffffff;
  --color-accent: #e2231a;
  --color-accent-2: #111111;
  --color-border: #111111;
  --color-disabled: #e8e8e5;
  --color-on-disabled: #8f8f8a;

  /* 字体与排版 · Typography */
  --font-display: "Helvetica Neue", "Arial", "PingFang SC", sans-serif;
  --font-body: "Helvetica Neue", "Arial", "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: -0.025em;
  --type-transform: none;
  --type-leading: 1.35;

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
  --size-control: 40px;
  --control-padding-x: 14px;

  /* 按钮 · Button · Component */
  --button-bg: #111111;
  --button-fg: #ffffff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #bc2018;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #ffffff;
  --input-border: 1px solid #111111;
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

1. 定义 4–5 档字号，最小 12px、最大 72px 以上，不用中间档。
2. 所有文本块 `text-align: left`，行宽 60–75 字符。
3. 用 `column-gap` 与 `max-width` 显式表达网格。
4. 强调色只用于一处（页码、分类或关键数字）。

## 6. 常见反例

- 只学“无衬线 + 黑红”，却没有网格，页面松散。
- 居中对齐与散乱字距，与瑞士风格直接冲突。
- 字号阶梯过多（7 档以上），秩序感消失。

## 7. 参考

- Wikipedia — Bauhaus / De Stijl / 构成主义
- Josef Müller-Brockmann《Grid Systems》
- MoMA 平面设计收藏
