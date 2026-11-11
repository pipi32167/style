---
title: "侘寂 · Wabi-sabi"
slug: wabi-sabi
category: 自然与人文 / Natural & Human
era: 15 世纪 —
tags: [不完美, 粗陶, 留白, 时间痕迹]
updated: 2026-10-26
---

# 侘寂 · Wabi-sabi

> 接纳不完美与无常：粗陶质感、褪色、不对称与残缺，用“少而旧”代替“多而新”。

| 项目 | 内容 |
| --- | --- |
| 类别 | 自然与人文（Natural & Human） |
| 年代 | 15 世纪 — |
| 关键词 | 不完美 · 粗陶 · 留白 · 时间痕迹 |
| 主色 | `#6b6553` | 
| 底色 | `#ece6da` |
| 圆角 | 2px / 6px |
| 控制高度 | 42px |

## 1. 视觉特征

- 色板来自土地与旧纸：灰米、陶土、苔绿、炭褐。
- 材质有颗粒感：纸、陶、麻，避免纯色平滑块面。
- 构图不对称，允许元素偏居一角与大量留空。
- 字体为克制的衬线或手写，字号小、字距松。

## 2. 适用与慎用

**适合：** 茶与器皿、陶艺与手作、民宿与生活方式品牌、冥想与疗愈产品。

**慎用：** 科技与金融、需要精确反馈的工具、面向儿童的产品。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#ece6da` |
| `--color-surface` | background-color | `#f4efe4` |
| `--color-surface-alt` | background-color | `#e3dbc9` |
| `--color-fg` | color | `#3a352c` |
| `--color-muted` | color | `#6b6455` |
| `--color-primary` | background-color | `#6b6553` |
| `--color-on-primary` | color | `#f8f4ea` |
| `--color-accent` | background-color | `#8c6f4a` |
| `--color-accent-2` | background-color | `#7a8a6a` |
| `--color-border` | border-color | `#d6cdb9` |
| `--color-disabled` | background-color | `#e2dacb` |
| `--color-on-disabled` | color | `#9a9484` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `400` |
| `--type-tracking` | letter-spacing | `0.02em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.8` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `2px` |
| `--radius-card` | border-radius | `6px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 1px 0 rgba(58,53,44,.10)` |
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
| `--size-control` | height | `42px` |
| `--control-padding-x` | padding-inline | `16px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `transparent` |
| `--button-fg` | color | `#3a352c` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #8c8272` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#625c4c` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `rgba(255,255,255,.35)` |
| `--input-border` | border | `1px solid #c9bfa9` |
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
  --color-bg: #ece6da;
  --color-surface: #f4efe4;
  --color-surface-alt: #e3dbc9;
  --color-fg: #3a352c;
  --color-muted: #6b6455;
  --color-primary: #6b6553;
  --color-on-primary: #f8f4ea;
  --color-accent: #8c6f4a;
  --color-accent-2: #7a8a6a;
  --color-border: #d6cdb9;
  --color-disabled: #e2dacb;
  --color-on-disabled: #9a9484;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 400;
  --type-tracking: 0.02em;
  --type-transform: none;
  --type-leading: 1.8;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 2px;
  --radius-card: 6px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 1px 0 rgba(58,53,44,.10);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 42px;
  --control-padding-x: 16px;

  /* 按钮 · Button · Component */
  --button-bg: transparent;
  --button-fg: #3a352c;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #8c8272;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #625c4c;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: rgba(255,255,255,.35);
  --input-border: 1px solid #c9bfa9;
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

1. 纹理用 SVG feTurbulence，透明度 5%–8%。
2. 边界用 1px 不规则虚线或手绘 SVG，避免精确圆角。
3. 正文对比 ≥ 7:1（#3a352c on #ece6da）。
4. 留白比例 40%–60%，元素集中在一条不对称轴上。

## 6. 常见反例

- 把侘寂做成“脏”，对比度不足导致不可读。
- 加入高饱和色或金属光泽，气质立刻破裂。
- 对称居中构图，与侘寂的随性相悖。

## 7. 参考

- Wabi-sabi 与日本民艺运动
- Risograph 印刷工艺手册
- 北欧色彩体系（NCS）
