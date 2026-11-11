---
title: "Monokai 主题"
slug: monokai
category: 编辑器主题 / Editor Themes
era: 2006 —
tags: [经典, 高饱和, 粉绿, Sublime]
updated: 2026-10-26
---

# Monokai 主题 · Monokai

> Sublime Text 的默认主题，也是最有辨识度的暗色配色：黑底、粉红、青绿与橙黄的高饱和碰撞。

| 项目 | 内容 |
| --- | --- |
| 类别 | 编辑器主题（Editor Themes） |
| 年代 | 2006 — |
| 关键词 | 经典 · 高饱和 · 粉绿 · Sublime |
| 主色 | `#a6e22e` | 
| 底色 | `#272822` |
| 圆角 | 4px / 8px |
| 控制高度 | 38px |

## 1. 视觉特征

- 底 #272822，表面 #383830，文本 #f8f8f2。
- 粉 #f92672、青 #66d9ef、绿 #a6e22e、橙 #fd971f。
- 高饱和对比是特征，但也最容易过量。
- 界面用色块面积必须小，否则刺眼。

## 2. 适用与慎用

**适合：** 编辑器与终端、代码展示、极客风格品牌页。

**慎用：** 大面积阅读界面、需要克制的高级感产品。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#272822` |
| `--color-surface` | background-color | `#383830` |
| `--color-surface-alt` | background-color | `#49483e` |
| `--color-fg` | color | `#f8f8f2` |
| `--color-muted` | color | `#a59f85` |
| `--color-primary` | background-color | `#a6e22e` |
| `--color-on-primary` | color | `#1d1e19` |
| `--color-accent` | background-color | `#f92672` |
| `--color-accent-2` | background-color | `#66d9ef` |
| `--color-border` | border-color | `#49483e` |
| `--color-disabled` | background-color | `#32332c` |
| `--color-on-disabled` | color | `#75715e` |

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
| `--radius-control` | border-radius | `4px` |
| `--radius-card` | border-radius | `8px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 4px 16px rgba(0,0,0,.5)` |
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
| `--button-hover-bg` | background-color | `#b5e651` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#383830` |
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
  --color-bg: #272822;
  --color-surface: #383830;
  --color-surface-alt: #49483e;
  --color-fg: #f8f8f2;
  --color-muted: #a59f85;
  --color-primary: #a6e22e;
  --color-on-primary: #1d1e19;
  --color-accent: #f92672;
  --color-accent-2: #66d9ef;
  --color-border: #49483e;
  --color-disabled: #32332c;
  --color-on-disabled: #75715e;

  /* 字体与排版 · Typography */
  --font-display: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 4px;
  --radius-card: 8px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 4px 16px rgba(0,0,0,.5);
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
  --button-hover-bg: #b5e651;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #383830;
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

1. 只取 2 个语法色作为品牌强调，其余留给代码块。
2. 表面阶梯：#272822 → #383830 → #49483e。
3. 正文 #f8f8f2（约 13:1），弱化 #a59f85。
4. 按钮用 #a6e22e 或 #66d9ef 配深色文字。

## 6. 常见反例

- 高饱和色大面积铺开，视觉疲劳。
- 在 UI 里照搬语法高亮的全部色相。
- 深灰底加纯黑描边，边缘发闷。

## 7. 参考

- 各主题官方配色仓库（GitHub）
- WCAG 对比度校验
- 编辑器 ANSI 16 色映射
