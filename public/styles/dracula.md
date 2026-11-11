---
title: "Dracula 主题"
slug: dracula
category: 编辑器主题 / Editor Themes
era: 2013 —
tags: [暗色, 紫色, 吸血, 终端]
updated: 2026-10-26
---

# Dracula 主题 · Dracula

> 最知名的暗色配色：深灰紫底、薰衣草主色与粉紫强调，对比柔和但不含糊。

| 项目 | 内容 |
| --- | --- |
| 类别 | 编辑器主题（Editor Themes） |
| 年代 | 2013 — |
| 关键词 | 暗色 · 紫色 · 吸血 · 终端 |
| 主色 | `#bd93f9` | 
| 底色 | `#282a36` |
| 圆角 | 8px / 12px |
| 控制高度 | 38px |

## 1. 视觉特征

- 底色 #282a36，前景 #f8f8f2，中间色 #6272a4。
- 主色紫 #bd93f9，次要粉 #ff79c6，状态绿 #50fa7b。
- 页面容器比底色深一档（#21222c），浮层再深一档。
- 正文对比约 12:1，次要文字仍保持 4.5:1 以上。

## 2. 适用与慎用

**适合：** 编辑器与终端主题、开发者工具夜间模式、代码文档。

**慎用：** 亮光和户外环境、以图表为主需要高色准的界面。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#282a36` |
| `--color-surface` | background-color | `#21222c` |
| `--color-surface-alt` | background-color | `#44475a` |
| `--color-fg` | color | `#f8f8f2` |
| `--color-muted` | color | `#8b9bc7` |
| `--color-primary` | background-color | `#bd93f9` |
| `--color-on-primary` | color | `#21222c` |
| `--color-accent` | background-color | `#ff79c6` |
| `--color-accent-2` | background-color | `#50fa7b` |
| `--color-border` | border-color | `#44475a` |
| `--color-disabled` | background-color | `#343746` |
| `--color-on-disabled` | color | `#7b85a8` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `-0.005em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `8px` |
| `--radius-card` | border-radius | `12px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 4px 16px rgba(0,0,0,.45)` |
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
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#c8a5f8` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#21222c` |
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
  --color-bg: #282a36;
  --color-surface: #21222c;
  --color-surface-alt: #44475a;
  --color-fg: #f8f8f2;
  --color-muted: #8b9bc7;
  --color-primary: #bd93f9;
  --color-on-primary: #21222c;
  --color-accent: #ff79c6;
  --color-accent-2: #50fa7b;
  --color-border: #44475a;
  --color-disabled: #343746;
  --color-on-disabled: #7b85a8;

  /* 字体与排版 · Typography */
  --font-display: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: -0.005em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 8px;
  --radius-card: 12px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 4px 16px rgba(0,0,0,.45);
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
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #c8a5f8;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #21222c;
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

1. 表面阶梯：bg #282a36 → surface #21222c → surfaceAlt #44475a。
2. 主色只用于交互元素与强调数值。
3. 语法高亮色需限制在文本内，不做大色块。
4. 给图片与视频加 1px #44475a 描边。

## 6. 常见反例

- 把紫色大面积用作背景，暗色主题失去沉稳。
- 忽略 #6272a4 作为“弱化”色时的对比不足（约 3.1:1）。
- 混入纯白 #fff 破坏整体的暖灰调。

## 7. 参考

- 各主题官方配色仓库（GitHub）
- WCAG 对比度校验
- 编辑器 ANSI 16 色映射
