---
title: "Web 2.0 光泽 · Web 2.0 Gloss"
slug: web2-gloss
category: 复古与数字怀旧 / Retro & Nostalgia
era: 2004 — 2012
tags: [渐变按钮, 倒影, 圆角, 徽章]
updated: 2026-10-26
---

# Web 2.0 光泽 · Web 2.0 Gloss

> 每个人都在做社交网站的年代：糖果渐变按钮、顶部高光、倒影 Logo 与闪亮徽章。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 2004 — 2012 |
| 关键词 | 渐变按钮 · 倒影 · 圆角 · 徽章 |
| 主色 | `#2f7ed8` | 
| 底色 | `#eef2f7` |
| 圆角 | 10px / 14px |
| 控制高度 | 40px |

## 1. 视觉特征

- 按钮 = 上浅下深的线性渐变 + 1px 深色描边 + 内高光。
- 标题常带倒影与斜体，配色是蓝 + 橙。
- 图标有体积、有光泽，最好带一点点描边。
- 圆角 8–14px，阴影明显但模糊半径小。

## 2. 适用与慎用

**适合：** 怀旧主题站点、复古 SaaS 彩蛋、活动专题页。

**慎用：** 现代产品主界面、移动端、需要精致感的品牌。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#eef2f7` |
| `--color-surface` | background-color | `linear-gradient(180deg,#ffffff,#e6ecf4)` |
| `--color-surface-alt` | background-color | `#dfe6ef` |
| `--color-fg` | color | `#23384f` |
| `--color-muted` | color | `#5b7189` |
| `--color-primary` | background-color | `#2f7ed8` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#f5a623` |
| `--color-accent-2` | background-color | `#5cc9a7` |
| `--color-border` | border-color | `#b8c6d8` |
| `--color-disabled` | background-color | `#e6ecf3` |
| `--color-on-disabled` | color | `#93a4b8` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.55` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `10px` |
| `--radius-card` | border-radius | `14px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `inset 0 1px 0 rgba(255,255,255,.8), 0 2px 4px rgba(35,56,79,.18)` |
| `--shadow-card` | box-shadow | `inset 0 1px 0 #ffffff, 0 10px 22px rgba(35,56,79,.16)` |
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
| `--control-padding-x` | padding-inline | `16px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `linear-gradient(180deg,#67b3f5,#2f7ed8)` |
| `--button-fg` | color | `#ffffff` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #1f5c9f` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#2d71bf` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#ffffff` |
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
  --color-bg: #eef2f7;
  --color-surface: linear-gradient(180deg,#ffffff,#e6ecf4);
  --color-surface-alt: #dfe6ef;
  --color-fg: #23384f;
  --color-muted: #5b7189;
  --color-primary: #2f7ed8;
  --color-on-primary: #ffffff;
  --color-accent: #f5a623;
  --color-accent-2: #5cc9a7;
  --color-border: #b8c6d8;
  --color-disabled: #e6ecf3;
  --color-on-disabled: #93a4b8;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.55;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 10px;
  --radius-card: 14px;
  --border-width: 1px;
  --shadow-control: inset 0 1px 0 rgba(255,255,255,.8), 0 2px 4px rgba(35,56,79,.18);
  --shadow-card: inset 0 1px 0 #ffffff, 0 10px 22px rgba(35,56,79,.16);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 40px;
  --control-padding-x: 16px;

  /* 按钮 · Button · Component */
  --button-bg: linear-gradient(180deg,#67b3f5,#2f7ed8);
  --button-fg: #ffffff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #1f5c9f;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #2d71bf;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #ffffff;
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

1. 按钮：`linear-gradient(#67b3f5,#2f7ed8)` + `inset 0 1px 0 rgba(255,255,255,.6)`。
2. 描边取渐变的深色端，不用纯黑。
3. 倒影用 `-webkit-box-reflect: below 4px`（或 SVG 镜像）且仅限 Logo。
4. 把糖果色限制在 CTA，正文区保持中性。

## 6. 常见反例

- 渐变方向错误（上深下浅），按钮看起来是凹的。
- 倒影用在高对比小字，直接糊成一片。
- 全家桶式光泽叠加，页面像 2008 年的导航站。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
