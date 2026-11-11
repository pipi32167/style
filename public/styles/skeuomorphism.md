---
title: "拟物风格 · Skeuomorphism"
slug: skeuomorphism
category: 拟态与材质 / Morphism
era: 2007 — 2013 巅峰
tags: [皮革, 拉丝金属, 渐变, 拟真材质]
updated: 2026-10-26
---

# 拟物风格 · Skeuomorphism

> 用渐变、内阴影与纹理复刻真实材质：皮革缝线、拉丝铝、玻璃按钮、纸张纹理。

| 项目 | 内容 |
| --- | --- |
| 类别 | 拟态与材质（Morphism） |
| 年代 | 2007 — 2013 巅峰 |
| 关键词 | 皮革 · 拉丝金属 · 渐变 · 拟真材质 |
| 主色 | `#8b5e34` | 
| 底色 | `#efe3cf` |
| 圆角 | 7px / 12px |
| 控制高度 | 38px |

## 1. 视觉特征

- 每个控件都要回答“它是什么做的”：皮革、金属、玻璃还是纸。
- 顶部高光 + 底部暗边 + 细描边，是拟物按钮的三件套。
- 纹理以 repeating-linear-gradient 或噪点贴图实现，不要用大图。
- 字体偏衬线或圆润无衬线，配合字母阴影强化立体感。

## 2. 适用与慎用

**适合：** 复古主题的应用、桌面级仿真工具、需要“实体感”的品牌小站、游戏 HUD。

**慎用：** 现代数据产品、移动端首屏、需要快速迭代的设计系统。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#efe3cf` |
| `--color-surface` | background-color | `linear-gradient(180deg,#fdf8ef,#e9dcc4)` |
| `--color-surface-alt` | background-color | `#e3d3b6` |
| `--color-fg` | color | `#3b2f22` |
| `--color-muted` | color | `#7a6a54` |
| `--color-primary` | background-color | `#8b5e34` |
| `--color-on-primary` | color | `#fff8ec` |
| `--color-accent` | background-color | `#b23a2f` |
| `--color-accent-2` | background-color | `#2f6d4f` |
| `--color-border` | border-color | `#c9b28c` |
| `--color-disabled` | background-color | `#ddcbaa` |
| `--color-on-disabled` | color | `#9c8a70` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `0` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.65` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `7px` |
| `--radius-card` | border-radius | `12px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `inset 0 1px 0 #fffef8, 0 2px 4px rgba(59,47,34,.28)` |
| `--shadow-card` | box-shadow | `inset 0 1px 0 #fffdf6, 0 10px 20px rgba(59,47,34,.22)` |
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
| `--size-control` | height | `38px` |
| `--control-padding-x` | padding-inline | `14px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `linear-gradient(180deg,#a97a4a,#7d5228)` |
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #4e3218` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#7d5631` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `linear-gradient(180deg,#f3e8d4,#fbf6ec)` |
| `--input-border` | border | `1px solid #b9a17b` |
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
| `--card-border` | border | `1px solid #c2a97f` |
| `--card-radius` | border-radius | `var(--radius-card)` |
| `--card-shadow` | box-shadow | `var(--shadow-card)` |
| `--card-padding` | padding | `var(--space-4)` |
| `--card-blur` | backdrop-filter | `var(--backdrop-blur)` |


```css
:root {
  /* 色彩与语义 · Color & Semantic */
  --color-bg: #efe3cf;
  --color-surface: linear-gradient(180deg,#fdf8ef,#e9dcc4);
  --color-surface-alt: #e3d3b6;
  --color-fg: #3b2f22;
  --color-muted: #7a6a54;
  --color-primary: #8b5e34;
  --color-on-primary: #fff8ec;
  --color-accent: #b23a2f;
  --color-accent-2: #2f6d4f;
  --color-border: #c9b28c;
  --color-disabled: #ddcbaa;
  --color-on-disabled: #9c8a70;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0;
  --type-transform: none;
  --type-leading: 1.65;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 7px;
  --radius-card: 12px;
  --border-width: 1px;
  --shadow-control: inset 0 1px 0 #fffef8, 0 2px 4px rgba(59,47,34,.28);
  --shadow-card: inset 0 1px 0 #fffdf6, 0 10px 20px rgba(59,47,34,.22);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 38px;
  --control-padding-x: 14px;

  /* 按钮 · Button · Component */
  --button-bg: linear-gradient(180deg,#a97a4a,#7d5228);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #4e3218;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #7d5631;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: linear-gradient(180deg,#f3e8d4,#fbf6ec);
  --input-border: 1px solid #b9a17b;
  --input-radius: var(--radius-control);
  --input-height: var(--size-control);
  --input-padding-x: var(--control-padding-x);
  --input-shadow: none;
  --input-blur: var(--backdrop-blur);

  /* 卡片 · Card · Component */
  --card-bg: var(--color-surface);
  --card-border: 1px solid #c2a97f;
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

1. 全局固定一个光源方向（左上 45°），所有阴影遵循同一逻辑。
2. 金属用多段 linear-gradient 制造拉丝条带，纸用 2% 噪点。
3. 描边取材质基色的深色版本，不要用纯黑。
4. 为高 DPI 屏幕准备 2x 纹理，避免噪点糊成灰色。

## 6. 常见反例

- 只加渐变不加纹理，看起来像 2010 年的廉价按钮。
- 粗描边 + 重投影同时使用，控件像贴纸。
- 高光方向不统一（有的从左上、有的从右上）。

## 7. 参考

- CSS `backdrop-filter` 与多重 `box-shadow` 实践
- Apple Human Interface Guidelines — Materials
- Material Design 3 — Elevation
