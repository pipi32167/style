---
title: "蓝图工程 · Blueprint"
slug: blueprint
category: 复古与数字怀旧 / Retro & Nostalgia
era: 1842 —
tags: [青色线稿, 方格纸, 技术制图, 标注]
updated: 2026-10-26
---

# 蓝图工程 · Blueprint

> 工程蓝图的语言：深蓝底、青色线条、精确网格与尺寸标注，用“未完成”表达专业与诚实。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 1842 — |
| 关键词 | 青色线稿 · 方格纸 · 技术制图 · 标注 |
| 主色 | `#7fd4ff` | 
| 底色 | `#0b2a45` |
| 圆角 | 0px / 0px |
| 控制高度 | 38px |

## 1. 视觉特征

- 底色为深蓝，线条为青色，标注色用暖黄。
- 网格 8px/32px 双层，始终可见但极淡。
- 元素以线稿呈现，允许虚线、剖面线与尺寸标注。
- 字体为等宽或技术风无衬线，全大写。

## 2. 适用与慎用

**适合：** 建筑与工程、硬件产品、技术文档、设计系统说明页。

**慎用：** 消费品营销、需要温暖感的产品、儿童场景。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0b2a45` |
| `--color-surface` | background-color | `rgba(10,45,75,.65)` |
| `--color-surface-alt` | background-color | `rgba(18,62,99,.7)` |
| `--color-fg` | color | `#dcefff` |
| `--color-muted` | color | `#8fb8d6` |
| `--color-primary` | background-color | `#7fd4ff` |
| `--color-on-primary` | color | `#062033` |
| `--color-accent` | background-color | `#ffd166` |
| `--color-accent-2` | background-color | `#7fd4ff` |
| `--color-border` | border-color | `rgba(127,212,255,.38)` |
| `--color-disabled` | background-color | `rgba(127,212,255,.12)` |
| `--color-on-disabled` | color | `#6f93ad` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-body` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `400` |
| `--type-tracking` | letter-spacing | `0.02em` |
| `--type-transform` | text-transform | `uppercase` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `0px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `none` |
| `--shadow-card` | box-shadow | `none` |
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
| `--button-bg` | background-color | `transparent` |
| `--button-fg` | color | `#7fd4ff` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #7fd4ff` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#90d9ff` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `rgba(6,32,51,.5)` |
| `--input-border` | border | `1px dashed rgba(127,212,255,.6)` |
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
  --color-bg: #0b2a45;
  --color-surface: rgba(10,45,75,.65);
  --color-surface-alt: rgba(18,62,99,.7);
  --color-fg: #dcefff;
  --color-muted: #8fb8d6;
  --color-primary: #7fd4ff;
  --color-on-primary: #062033;
  --color-accent: #ffd166;
  --color-accent-2: #7fd4ff;
  --color-border: rgba(127,212,255,.38);
  --color-disabled: rgba(127,212,255,.12);
  --color-on-disabled: #6f93ad;

  /* 字体与排版 · Typography */
  --font-display: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-body: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 400;
  --type-tracking: 0.02em;
  --type-transform: uppercase;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 0px;
  --border-width: 1px;
  --shadow-control: none;
  --shadow-card: none;
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
  --button-bg: transparent;
  --button-fg: #7fd4ff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #7fd4ff;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #90d9ff;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: rgba(6,32,51,.5);
  --input-border: 1px dashed rgba(127,212,255,.6);
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

1. 双层网格：`repeating-linear-gradient` 小格 8px + 大格 64px。
2. 线条 1px，颜色 `rgba(127,212,255,.5)`。
3. 标注文字 11px 等宽，配引线与端点圆。
4. 给内容区加 6% 的白色底，保证正文可读。

## 6. 常见反例

- 线稿过密，页面变成一团蓝线。
- 网格过亮，压过内容。
- 把蓝图风用在照片与插画上，质感冲突。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
