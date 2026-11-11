---
title: "极繁主义 · Maximalism"
slug: maximalism
category: 粗野与实验 / Brutal & Experimental
era: 2018 —
tags: [密集, 满屏, 图案叠加, 多彩]
updated: 2026-10-26
---

# 极繁主义 · Maximalism

> 拒绝留白：图案、渐变、贴纸、大字报层层叠加，用信息密度本身制造冲击。

| 项目 | 内容 |
| --- | --- |
| 类别 | 粗野与实验（Brutal & Experimental） |
| 年代 | 2018 — |
| 关键词 | 密集 · 满屏 · 图案叠加 · 多彩 |
| 主色 | `#ff2e88` | 
| 底色 | `#fef2ff` |
| 圆角 | 8px / 16px |
| 控制高度 | 46px |

## 1. 视觉特征

- 密度要有节奏：三个高密度区块之间必须有一个呼吸区。
- 图案叠加控制在两层，第三层开始糊。
- 色彩多但明度分层清晰，保证文字压得住。
- 元素边缘可溢出容器，制造“还没装下”的感觉。

## 2. 适用与慎用

**适合：** 时尚电商、美妆与潮玩、音乐节、需要“记忆点”的活动页。

**慎用：** 工具型产品、需要专注阅读的页面、老年用户界面。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#fef2ff` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#ffe6fb` |
| `--color-fg` | color | `#20002c` |
| `--color-muted` | color | `#6b2b7a` |
| `--color-primary` | background-color | `#ff2e88` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#00d1ff` |
| `--color-accent-2` | background-color | `#ffd400` |
| `--color-border` | border-color | `#20002c` |
| `--color-disabled` | background-color | `#f0dcf2` |
| `--color-on-disabled` | color | `#a887b0` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `800` |
| `--type-tracking` | letter-spacing | `-0.025em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.4` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `8px` |
| `--radius-card` | border-radius | `16px` |
| `--border-width` | border-width | `2px` |
| `--shadow-control` | box-shadow | `4px 4px 0 #20002c` |
| `--shadow-card` | box-shadow | `8px 8px 0 #20002c` |
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
| `--size-control` | height | `46px` |
| `--control-padding-x` | padding-inline | `20px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `#ffffff` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#d72677` |
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
  --color-bg: #fef2ff;
  --color-surface: #ffffff;
  --color-surface-alt: #ffe6fb;
  --color-fg: #20002c;
  --color-muted: #6b2b7a;
  --color-primary: #ff2e88;
  --color-on-primary: #ffffff;
  --color-accent: #00d1ff;
  --color-accent-2: #ffd400;
  --color-border: #20002c;
  --color-disabled: #f0dcf2;
  --color-on-disabled: #a887b0;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 800;
  --type-tracking: -0.025em;
  --type-transform: none;
  --type-leading: 1.4;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 8px;
  --radius-card: 16px;
  --border-width: 2px;
  --shadow-control: 4px 4px 0 #20002c;
  --shadow-card: 8px 8px 0 #20002c;
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 46px;
  --control-padding-x: 20px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: #ffffff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d72677;
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

1. 建立“密度地图”：先画三档密度，再往里填内容。
2. 文字区块加不透明底（哪怕 90%），确保可读。
3. 限定 4 个色相 + 黑 + 米白，其余靠明度变化。
4. 移动端减少叠加层数，优先保留主视觉。

## 6. 常见反例

- 全屏满铺，没有任何视觉落点。
- 图案透明度乱调，背景灰成一片。
- 把极繁当借口，忽略字号与行高的基本功。

## 7. 参考

- Web Brutalism 讨论（Bloomberg / Awwwards 访谈）
- Anti-design 与后数字平面设计
- CSS `box-shadow` 硬阴影技巧
