---
title: "Frutiger Aero"
slug: frutiger-aero
category: 复古与数字怀旧 / Retro & Nostalgia
era: 2004 — 2013
tags: [玻璃高光, 自然, 水滴, 科技乐观]
updated: 2026-10-26
---

# Frutiger Aero · Frutiger Aero

> 2000 年代中期的“科技自然主义”：蓝天、草绿、水泡、玻璃高光，Windows Vista 与 Wii 的共同记忆。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 2004 — 2013 |
| 关键词 | 玻璃高光 · 自然 · 水滴 · 科技乐观 |
| 主色 | `#35b6f6` | 
| 底色 | `#d9f0ff` |
| 圆角 | 18px / 22px |
| 控制高度 | 46px |

## 1. 视觉特征

- 高光是标志：每个控件顶部都有一条白色反光。
- 色板：天空蓝、草绿、水青，配白色玻璃面板。
- 元素圆润饱满，图标带体积感与水滴质感。
- 背景常为云、草、水，饱和度略高。

## 2. 适用与慎用

**适合：** 怀旧科技主题、环保与健康品牌、游戏与音乐、公益活动。

**慎用：** 硬核开发者工具、极简品牌、需要冷静感的金融产品。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#d9f0ff` |
| `--color-surface` | background-color | `rgba(255,255,255,.55)` |
| `--color-surface-alt` | background-color | `rgba(255,255,255,.32)` |
| `--color-fg` | color | `#083b5c` |
| `--color-muted` | color | `#3f6f8c` |
| `--color-primary` | background-color | `#35b6f6` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#7ed957` |
| `--color-accent-2` | background-color | `#b3ecff` |
| `--color-border` | border-color | `rgba(255,255,255,.8)` |
| `--color-disabled` | background-color | `rgba(255,255,255,.4)` |
| `--color-on-disabled` | color | `#7c9db2` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `650` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `18px` |
| `--radius-card` | border-radius | `22px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `inset 0 1px 0 rgba(255,255,255,.95), 0 6px 16px rgba(53,182,246,.22)` |
| `--shadow-card` | box-shadow | `inset 0 1px 0 rgba(255,255,255,.95), 0 18px 44px rgba(53,182,246,.26)` |
| `--backdrop-blur` | backdrop-filter | `blur(6px) saturate(140%)` |

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
| `--button-bg` | background-color | `linear-gradient(180deg,#7fd4ff,#35b6f6)` |
| `--button-fg` | color | `#06344f` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#2da0da` |
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
  --color-bg: #d9f0ff;
  --color-surface: rgba(255,255,255,.55);
  --color-surface-alt: rgba(255,255,255,.32);
  --color-fg: #083b5c;
  --color-muted: #3f6f8c;
  --color-primary: #35b6f6;
  --color-on-primary: #ffffff;
  --color-accent: #7ed957;
  --color-accent-2: #b3ecff;
  --color-border: rgba(255,255,255,.8);
  --color-disabled: rgba(255,255,255,.4);
  --color-on-disabled: #7c9db2;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 650;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 18px;
  --radius-card: 22px;
  --border-width: 1px;
  --shadow-control: inset 0 1px 0 rgba(255,255,255,.95), 0 6px 16px rgba(53,182,246,.22);
  --shadow-card: inset 0 1px 0 rgba(255,255,255,.95), 0 18px 44px rgba(53,182,246,.26);
  --backdrop-blur: blur(6px) saturate(140%);

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
  --button-bg: linear-gradient(180deg,#7fd4ff,#35b6f6);
  --button-fg: #06344f;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #2da0da;
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

1. 玻璃高光：`linear-gradient(180deg,rgba(255,255,255,.85),rgba(255,255,255,.15) 48%,transparent)`。
2. 圆角 14–22px，可用 `border-radius: 50%` 做水泡。
3. 背景图层与内容层分离，内容区加白色半透明底。
4. 控制阴影柔和，最大不超过 20px 模糊。

## 6. 常见反例

- 缺少高光只剩浅蓝渐变，辨识度不足。
- 把自然照片当背景却压不住文字。
- 控件全部做成玻璃球，可读性极差。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
