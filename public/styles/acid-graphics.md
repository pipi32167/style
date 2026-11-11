---
title: "酸性平面 · Acid Graphics"
slug: acid-graphics
category: 粗野与实验 / Brutal & Experimental
era: 2019 —
tags: [荧光, 液化字形, Y2K, 锐舞]
updated: 2026-10-26
---

# 酸性平面 · Acid Graphics

> 锐舞传单的当代版本：酸性绿与品红在纯黑上互撞，字形被拉扯液化，网格故意扭曲。

| 项目 | 内容 |
| --- | --- |
| 类别 | 粗野与实验（Brutal & Experimental） |
| 年代 | 2019 — |
| 关键词 | 荧光 · 液化字形 · Y2K · 锐舞 |
| 主色 | `#ccff00` | 
| 底色 | `#050505` |
| 圆角 | 2px / 4px |
| 控制高度 | 44px |

## 1. 视觉特征

- 只用 2–3 个荧光色，纯黑承托，绝不加灰度过渡。
- 字形要“变形”：拉伸、倾斜、液化、描边重复。
- 元素带金属铬质感（chrome gradient）或高对比描边。
- 构图密集、边缘溢出，制造压迫感。

## 2. 适用与慎用

**适合：** 音乐节与俱乐部、潮流服饰、游戏皮肤、Z 世代消费产品。

**慎用：** 企业官网、医疗金融、任何需要建立长期信任的品牌。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#050505` |
| `--color-surface` | background-color | `#121212` |
| `--color-surface-alt` | background-color | `#1c1c1c` |
| `--color-fg` | color | `#f4f4f4` |
| `--color-muted` | color | `#9a9a9a` |
| `--color-primary` | background-color | `#ccff00` |
| `--color-on-primary` | color | `#050505` |
| `--color-accent` | background-color | `#ff00aa` |
| `--color-accent-2` | background-color | `#00e5ff` |
| `--color-border` | border-color | `#ccff00` |
| `--color-disabled` | background-color | `#222222` |
| `--color-on-disabled` | color | `#6a6a6a` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `800` |
| `--type-tracking` | letter-spacing | `-0.03em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.35` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `2px` |
| `--radius-card` | border-radius | `4px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 0 12px rgba(204,255,0,.45)` |
| `--shadow-card` | box-shadow | `0 0 40px rgba(255,0,170,.28)` |
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
| `--button-fg` | color | `#050505` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#d3fd2c` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#121212` |
| `--input-border` | border | `1px solid #ccff00` |
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
  --color-bg: #050505;
  --color-surface: #121212;
  --color-surface-alt: #1c1c1c;
  --color-fg: #f4f4f4;
  --color-muted: #9a9a9a;
  --color-primary: #ccff00;
  --color-on-primary: #050505;
  --color-accent: #ff00aa;
  --color-accent-2: #00e5ff;
  --color-border: #ccff00;
  --color-disabled: #222222;
  --color-on-disabled: #6a6a6a;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 800;
  --type-tracking: -0.03em;
  --type-transform: none;
  --type-leading: 1.35;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 2px;
  --radius-card: 4px;
  --border-width: 1px;
  --shadow-control: 0 0 12px rgba(204,255,0,.45);
  --shadow-card: 0 0 40px rgba(255,0,170,.28);
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
  --button-fg: #050505;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d3fd2c;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #121212;
  --input-border: 1px solid #ccff00;
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

1. 底色 #050505，荧光色明度必须极高（L>85）。
2. 铬效果：`linear-gradient(180deg,#fff,#8a8a8a 40%,#fff 60%,#3a3a3a)` 配合 `background-clip: text`。
3. 描边文字用 `-webkit-text-stroke: 1px #ccff00`。
4. 把动效限制在 1–2 个元素，其余保持静止。

## 6. 常见反例

- 荧光色放在白底上，刺眼且对比不足。
- 所有文字都做液化，标题失去可读性。
- 缺少铬金属或噪点细节，只剩一屏荧光色块。

## 7. 参考

- Web Brutalism 讨论（Bloomberg / Awwwards 访谈）
- Anti-design 与后数字平面设计
- CSS `box-shadow` 硬阴影技巧
