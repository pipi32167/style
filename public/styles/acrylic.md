---
title: "亚克力 · Acrylic"
slug: acrylic
category: 拟态与材质 / Morphism
era: 2017 —
tags: [Windows, 半透明, 噪点, 层级]
updated: 2026-10-26
---

# 亚克力 · Acrylic

> Windows Fluent 的亚克力材质：带色调的磨砂层叠加细噪点，既有玻璃的层次又保留可读性。

| 项目 | 内容 |
| --- | --- |
| 类别 | 拟态与材质（Morphism） |
| 年代 | 2017 — |
| 关键词 | Windows · 半透明 · 噪点 · 层级 |
| 主色 | `#0067c0` | 
| 底色 | `#e9edf2` |
| 圆角 | 4px / 8px |
| 控制高度 | 34px |

## 1. 视觉特征

- 与玻璃拟态的区别：亚克力更“哑”，透明度更低（约 70%），并且必须叠噪点。
- 圆角克制（4–8px），描边极细，控件接近系统原生。
- 层与层之间用 1px 发光描边分隔，而不是重投影。
- 主色取系统蓝，其余颜色饱和度压低。

## 2. 适用与慎用

**适合：** 桌面应用、系统面板、需要层次但又要读得清的后台。

**慎用：** 高饱和品牌页、移动端低端机、需要绝对色准的图形工作区。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#e9edf2` |
| `--color-surface` | background-color | `rgba(249,249,249,.72)` |
| `--color-surface-alt` | background-color | `rgba(255,255,255,.45)` |
| `--color-fg` | color | `#1b1b1b` |
| `--color-muted` | color | `#5f5f5f` |
| `--color-primary` | background-color | `#0067c0` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#0067c0` |
| `--color-accent-2` | background-color | `#8a2be2` |
| `--color-border` | border-color | `rgba(0,0,0,.09)` |
| `--color-disabled` | background-color | `rgba(0,0,0,.05)` |
| `--color-on-disabled` | color | `#9a9a9a` |

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
| `--shadow-control` | box-shadow | `0 1px 2px rgba(0,0,0,.10)` |
| `--shadow-card` | box-shadow | `0 8px 16px rgba(0,0,0,.12)` |
| `--backdrop-blur` | backdrop-filter | `blur(30px) saturate(125%)` |

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
| `--input-border` | border | `1px solid rgba(0,0,0,.16)` |
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
| `--card-border` | border | `1px solid rgba(255,255,255,.6)` |
| `--card-radius` | border-radius | `var(--radius-card)` |
| `--card-shadow` | box-shadow | `var(--shadow-card)` |
| `--card-padding` | padding | `var(--space-4)` |
| `--card-blur` | backdrop-filter | `var(--backdrop-blur)` |


```css
:root {
  /* 色彩与语义 · Color & Semantic */
  --color-bg: #e9edf2;
  --color-surface: rgba(249,249,249,.72);
  --color-surface-alt: rgba(255,255,255,.45);
  --color-fg: #1b1b1b;
  --color-muted: #5f5f5f;
  --color-primary: #0067c0;
  --color-on-primary: #ffffff;
  --color-accent: #0067c0;
  --color-accent-2: #8a2be2;
  --color-border: rgba(0,0,0,.09);
  --color-disabled: rgba(0,0,0,.05);
  --color-on-disabled: #9a9a9a;

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
  --shadow-control: 0 1px 2px rgba(0,0,0,.10);
  --shadow-card: 0 8px 16px rgba(0,0,0,.12);
  --backdrop-blur: blur(30px) saturate(125%);

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
  --input-border: 1px solid rgba(0,0,0,.16);
  --input-radius: var(--radius-control);
  --input-height: var(--size-control);
  --input-padding-x: var(--control-padding-x);
  --input-shadow: none;
  --input-blur: var(--backdrop-blur);

  /* 卡片 · Card · Component */
  --card-bg: var(--color-surface);
  --card-border: 1px solid rgba(255,255,255,.6);
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

1. 透明度 70%–80%，模糊 30px，saturate 125%。
2. 噪点用 SVG feTurbulence 生成，透明度 3%。
3. 浮层边缘加 `1px solid rgba(0,0,0,.06)` 与白色内高光。
4. 提供关闭透明的系统级开关（`prefers-reduced-transparency`）。

## 6. 常见反例

- 省略噪点层，亚克力退化成普通的半透明矩形。
- 圆角过大（20px+），不再是 Fluent 语言。
- 把亚克力用在本身已经很花的背景上，噪点变成脏点。

## 7. 参考

- CSS `backdrop-filter` 与多重 `box-shadow` 实践
- Apple Human Interface Guidelines — Materials
- Material Design 3 — Elevation
