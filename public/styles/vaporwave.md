---
title: "蒸汽波 · Vaporwave"
slug: vaporwave
category: 复古与数字怀旧 / Retro & Nostalgia
era: 2010 —
tags: [粉紫, 大理石, 日语, Windows 95]
updated: 2026-10-26
---

# 蒸汽波 · Vaporwave

> 对 90 年代消费主义的温柔嘲讽：粉色天空、罗马石膏像、日文招牌与 Windows 窗口漂浮在无限空间。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 2010 — |
| 关键词 | 粉紫 · 大理石 · 日语 · Windows 95 |
| 主色 | `#ff71ce` | 
| 底色 | `#ffe8fb` |
| 圆角 | 4px / 4px |
| 控制高度 | 42px |

## 1. 视觉特征

- 色板固定：樱花粉、电光青、薄荷绿、淡紫，全部高亮度低饱和。
- 元素：罗马柱、石膏像、棕榈、Windows 窗口、日文与英文混排。
- 构图悬浮、居中、对称，带轻微透视与发光。
- 字体常为明朝体或衬线斜体，配 VHS 扫描线。

## 2. 适用与慎用

**适合：** 音乐与厂牌、潮流服饰、展览与派对、亚文化社区。

**慎用：** 企业服务、教育、任何需要严肃可信度的场景。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#ffe8fb` |
| `--color-surface` | background-color | `rgba(255,255,255,.62)` |
| `--color-surface-alt` | background-color | `rgba(255,255,255,.34)` |
| `--color-fg` | color | `#2a0a3a` |
| `--color-muted` | color | `#6b3f7d` |
| `--color-primary` | background-color | `#ff71ce` |
| `--color-on-primary` | color | `#2a0a3a` |
| `--color-accent` | background-color | `#01cdfe` |
| `--color-accent-2` | background-color | `#b967ff` |
| `--color-border` | border-color | `#e3b6ea` |
| `--color-disabled` | background-color | `rgba(255,255,255,.5)` |
| `--color-on-disabled` | color | `#9a7aa8` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `0.02em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `4px` |
| `--radius-card` | border-radius | `4px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 0 12px rgba(255,113,206,.55)` |
| `--shadow-card` | box-shadow | `0 0 28px rgba(1,205,254,.35)` |
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
| `--size-control` | height | `42px` |
| `--control-padding-x` | padding-inline | `16px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `linear-gradient(135deg,#ff71ce,#b967ff)` |
| `--button-fg` | color | `#ffffff` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#d95eb3` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `rgba(255,255,255,.7)` |
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
  --color-bg: #ffe8fb;
  --color-surface: rgba(255,255,255,.62);
  --color-surface-alt: rgba(255,255,255,.34);
  --color-fg: #2a0a3a;
  --color-muted: #6b3f7d;
  --color-primary: #ff71ce;
  --color-on-primary: #2a0a3a;
  --color-accent: #01cdfe;
  --color-accent-2: #b967ff;
  --color-border: #e3b6ea;
  --color-disabled: rgba(255,255,255,.5);
  --color-on-disabled: #9a7aa8;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0.02em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 4px;
  --radius-card: 4px;
  --border-width: 1px;
  --shadow-control: 0 0 12px rgba(255,113,206,.55);
  --shadow-card: 0 0 28px rgba(1,205,254,.35);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 42px;
  --control-padding-x: 16px;

  /* 按钮 · Button · Component */
  --button-bg: linear-gradient(135deg,#ff71ce,#b967ff);
  --button-fg: #ffffff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d95eb3;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: rgba(255,255,255,.7);
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

1. 背景用双色线性渐变 + 网格线，透明度 20%。
2. 扫描线 `repeating-linear-gradient` 叠在最上层，opacity .06。
3. 元素加 4–8px 的青色发光投影。
4. 整体压缩饱和度 10%，模拟 VHS 褪色。

## 6. 常见反例

- 只堆粉色渐变，缺少 90 年代符号，气质不到位。
- 日文乱用（语义错误）会立刻露馅。
- 高饱和粉 + 高饱和青同屏互撞，眼睛疲劳。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
