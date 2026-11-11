---
title: "水彩晕染 · Watercolor"
slug: watercolor
category: 自然与人文 / Natural & Human
era: 2010 —
tags: [晕染, 透明叠色, 柔和, 纸感]
updated: 2026-10-26
---

# 水彩晕染 · Watercolor

> 颜料的透明叠加：边缘不规则的水痕、纸张吸色与柔和的色彩过渡，界面像一张湿画纸。

| 项目 | 内容 |
| --- | --- |
| 类别 | 自然与人文（Natural & Human） |
| 年代 | 2010 — |
| 关键词 | 晕染 · 透明叠色 · 柔和 · 纸感 |
| 主色 | `#6f92c4` | 
| 底色 | `#fdfcf9` |
| 圆角 | 16px / 24px |
| 控制高度 | 44px |

## 1. 视觉特征

- 色块边缘必须有水痕：不规则的柔和衰减。
- 颜色通过透明度叠加，而不是混合出新的实色。
- 纸张纹理贯穿全页，但透明度 ≤ 8%。
- 字体常用衬线或手写，与晕染柔度匹配。

## 2. 适用与慎用

**适合：** 婚礼与活动、香氛与护肤、插画师作品集、疗愈类产品。

**慎用：** 科技工具、需要精确边缘的图表、暗色场景。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#fdfcf9` |
| `--color-surface` | background-color | `rgba(255,255,255,.85)` |
| `--color-surface-alt` | background-color | `#f5f1ea` |
| `--color-fg` | color | `#2a2a2e` |
| `--color-muted` | color | `#66656a` |
| `--color-primary` | background-color | `#6f92c4` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#e2a3b0` |
| `--color-accent-2` | background-color | `#b9d3a8` |
| `--color-border` | border-color | `#e8e3da` |
| `--color-disabled` | background-color | `#f1ede6` |
| `--color-on-disabled` | color | `#a6a29b` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `500` |
| `--type-tracking` | letter-spacing | `0.005em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.7` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `16px` |
| `--radius-card` | border-radius | `24px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 2px 8px rgba(111,146,196,.12)` |
| `--shadow-card` | box-shadow | `0 12px 30px rgba(111,146,196,.14)` |
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
| `--button-hover-bg` | background-color | `#637fa9` |
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
  --color-bg: #fdfcf9;
  --color-surface: rgba(255,255,255,.85);
  --color-surface-alt: #f5f1ea;
  --color-fg: #2a2a2e;
  --color-muted: #66656a;
  --color-primary: #6f92c4;
  --color-on-primary: #ffffff;
  --color-accent: #e2a3b0;
  --color-accent-2: #b9d3a8;
  --color-border: #e8e3da;
  --color-disabled: #f1ede6;
  --color-on-disabled: #a6a29b;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 500;
  --type-tracking: 0.005em;
  --type-transform: none;
  --type-leading: 1.7;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 16px;
  --radius-card: 24px;
  --border-width: 1px;
  --shadow-control: 0 2px 8px rgba(111,146,196,.12);
  --shadow-card: 0 12px 30px rgba(111,146,196,.14);
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
  --button-hover-bg: #637fa9;
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

1. 晕染用多个 `radial-gradient` 叠加 + `filter: blur(30px)`。
2. 叠色用 `mix-blend-mode: multiply`。
3. 纸张纹理用 feTurbulence，叠加 `soft-light`。
4. 内容区加 85% 白色底，保证文字可读。

## 6. 常见反例

- 用纯色块代替晕染，气质全无。
- 颜色叠加过多，画面灰浊。
- 在深色背景上用水彩，失去纸感。

## 7. 参考

- Wabi-sabi 与日本民艺运动
- Risograph 印刷工艺手册
- 北欧色彩体系（NCS）
