---
title: "Gruvbox 主题"
slug: gruvbox
category: 编辑器主题 / Editor Themes
era: 2012 —
tags: [复古, 暖土色, 高对比, 怀旧]
updated: 2026-10-26
---

# Gruvbox 主题 · Gruvbox

> 复古暖土色的暗色主题：棕黄底配砖红、橄榄绿与芥末黄，像一台老式终端。

| 项目 | 内容 |
| --- | --- |
| 类别 | 编辑器主题（Editor Themes） |
| 年代 | 2012 — |
| 关键词 | 复古 · 暖土色 · 高对比 · 怀旧 |
| 主色 | `#fabd2f` | 
| 底色 | `#282828` |
| 圆角 | 6px / 10px |
| 控制高度 | 38px |

## 1. 视觉特征

- 底 #282828，表面 #3c3836，文本 #ebdbb2。
- 强调：红 #fb4934、绿 #b8bb26、黄 #fabd2f、蓝 #83a598。
- 暖色占主导，蓝色仅作状态。
- 对比高于 Nord 与 Catppuccin，适合明亮环境。

## 2. 适用与慎用

**适合：** 编辑器与终端、复古风格工具、播客与音乐产品。

**慎用：** 冷色调品牌、需要精确色彩传达的设计工具。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#282828` |
| `--color-surface` | background-color | `#3c3836` |
| `--color-surface-alt` | background-color | `#504945` |
| `--color-fg` | color | `#ebdbb2` |
| `--color-muted` | color | `#a89984` |
| `--color-primary` | background-color | `#fabd2f` |
| `--color-on-primary` | color | `#282828` |
| `--color-accent` | background-color | `#fb4934` |
| `--color-accent-2` | background-color | `#b8bb26` |
| `--color-border` | border-color | `#504945` |
| `--color-disabled` | background-color | `#32302f` |
| `--color-on-disabled` | color | `#7c6f64` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `0` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `6px` |
| `--radius-card` | border-radius | `10px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 4px 14px rgba(0,0,0,.5)` |
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
| `--button-hover-bg` | background-color | `#f7c247` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#3c3836` |
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
  --color-bg: #282828;
  --color-surface: #3c3836;
  --color-surface-alt: #504945;
  --color-fg: #ebdbb2;
  --color-muted: #a89984;
  --color-primary: #fabd2f;
  --color-on-primary: #282828;
  --color-accent: #fb4934;
  --color-accent-2: #b8bb26;
  --color-border: #504945;
  --color-disabled: #32302f;
  --color-on-disabled: #7c6f64;

  /* 字体与排版 · Typography */
  --font-display: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 6px;
  --radius-card: 10px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 4px 14px rgba(0,0,0,.5);
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
  --button-hover-bg: #f7c247;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #3c3836;
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

1. 表面阶梯：#282828 → #3c3836 → #504945。
2. 正文 #ebdbb2（约 9:1），弱化 #a89984。
3. 按钮用 #fabd2f 配 #282828 文字。
4. 给图片加轻微暖色滤镜（sepia .08）。

## 6. 常见反例

- 暖色叠加过多，页面像发黄的旧照片。
- 把 #928374（弱化色）用于正文，对比不足。
- 加入冷白色，破坏整体暖调。

## 7. 参考

- 各主题官方配色仓库（GitHub）
- WCAG 对比度校验
- 编辑器 ANSI 16 色映射
