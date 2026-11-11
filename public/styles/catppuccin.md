---
title: "Catppuccin Mocha"
slug: catppuccin
category: 编辑器主题 / Editor Themes
era: 2021 —
tags: [柔和暗色, 马卡龙, 低对比, 多口味]
updated: 2026-10-26
---

# Catppuccin Mocha · Catppuccin

> “柔和到甜”的暗色主题：低对比、粉彩点缀，长时间盯屏也不刺眼，且提供多种明暗口味。

| 项目 | 内容 |
| --- | --- |
| 类别 | 编辑器主题（Editor Themes） |
| 年代 | 2021 — |
| 关键词 | 柔和暗色 · 马卡龙 · 低对比 · 多口味 |
| 主色 | `#cba6f7` | 
| 底色 | `#1e1e2e` |
| 圆角 | 8px / 14px |
| 控制高度 | 40px |

## 1. 视觉特征

- Mocha 底色 #1e1e2e，表面 #313244，文本 #cdd6f4。
- 强调色柔和：mauve #cba6f7、pink #f5c2e7、blue #89b4fa。
- 文字对比刻意压低（正文约 9:1），强调用色相而非亮度。
- 四套口味（Latte / Frappé / Macchiato / Mocha）共享同一语义命名。

## 2. 适用与慎用

**适合：** 需要长时间使用的编辑器、写作工具、个人仪表盘。

**慎用：** 需要强烈强调的营销页、强光环境、低质量显示器。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#1e1e2e` |
| `--color-surface` | background-color | `#181825` |
| `--color-surface-alt` | background-color | `#313244` |
| `--color-fg` | color | `#cdd6f4` |
| `--color-muted` | color | `#a6adc8` |
| `--color-primary` | background-color | `#cba6f7` |
| `--color-on-primary` | color | `#1e1e2e` |
| `--color-accent` | background-color | `#f5c2e7` |
| `--color-accent-2` | background-color | `#89b4fa` |
| `--color-border` | border-color | `#313244` |
| `--color-disabled` | background-color | `#26263a` |
| `--color-on-disabled` | color | `#7f849c` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.65` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `8px` |
| `--radius-card` | border-radius | `14px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `0 6px 20px rgba(17,17,27,.6)` |
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
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#cbaff6` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#181825` |
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
  --color-bg: #1e1e2e;
  --color-surface: #181825;
  --color-surface-alt: #313244;
  --color-fg: #cdd6f4;
  --color-muted: #a6adc8;
  --color-primary: #cba6f7;
  --color-on-primary: #1e1e2e;
  --color-accent: #f5c2e7;
  --color-accent-2: #89b4fa;
  --color-border: #313244;
  --color-disabled: #26263a;
  --color-on-disabled: #7f849c;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.65;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 8px;
  --radius-card: 14px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: 0 6px 20px rgba(17,17,27,.6);
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
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #cbaff6;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #181825;
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

1. 把口味做成 CSS 变量集，切换 `data-theme` 即可。
2. 阴影用带色相的深色（rgba(17,17,27,.6)）而非纯黑。
3. 强调色最多两个同屏，避免马卡龙色互相稀释。
4. 正文 #cdd6f4，弱化 #a6adc8（不低于 4.5:1）。

## 6. 常见反例

- 把柔和理解成“低对比”，正文降到 3:1 以下。
- 同一页面混用两套口味，色调断裂。
- 在 Mocha 上用纯黑阴影，产生肮脏的边缘。

## 7. 参考

- 各主题官方配色仓库（GitHub）
- WCAG 对比度校验
- 编辑器 ANSI 16 色映射
