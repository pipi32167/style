---
title: "千禧年 · Y2K"
slug: y2k
category: 复古与数字怀旧 / Retro & Nostalgia
era: 1997 — 2004
tags: [铬金属, 水泡, 银色, 未来乐观]
updated: 2026-10-26
---

# 千禧年 · Y2K

> 世纪之交对未来的想象：银色铬金属、半透明水泡、婴儿蓝与热粉，一切都在闪光。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 1997 — 2004 |
| 关键词 | 铬金属 · 水泡 · 银色 · 未来乐观 |
| 主色 | `#ff2fa0` | 
| 底色 | `#eef6ff` |
| 圆角 | 999px / 16px |
| 控制高度 | 44px |

## 1. 视觉特征

- 材质是主角：铬金属渐变、透明亚克力泡泡、拉丝银。
- 配色：银灰、婴儿蓝、热粉、荧光绿，饱和度偏高。
- 控件圆润到接近胶囊，带内高光与镜面反射。
- 字体偏科技感无衬线，常配斜体与拉伸。

## 2. 适用与慎用

**适合：** 潮流与美妆、音乐与游戏、Z 世代品牌、限定发布页。

**慎用：** 企业后台、严肃出版、需要长期可维护的设计系统。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#eef6ff` |
| `--color-surface` | background-color | `linear-gradient(180deg,#ffffff,#e0eaf6)` |
| `--color-surface-alt` | background-color | `#d8e4f2` |
| `--color-fg` | color | `#1b2a3a` |
| `--color-muted` | color | `#5d7186` |
| `--color-primary` | background-color | `#ff2fa0` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#38bdf8` |
| `--color-accent-2` | background-color | `#a3e635` |
| `--color-border` | border-color | `#b9cbe0` |
| `--color-disabled` | background-color | `#e4ecf5` |
| `--color-on-disabled` | color | `#94a7ba` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.5` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `999px` |
| `--radius-card` | border-radius | `16px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `inset 0 1px 0 #ffffff, 0 4px 10px rgba(56,120,190,.18)` |
| `--shadow-card` | box-shadow | `inset 0 1px 0 #ffffff, 0 14px 34px rgba(56,120,190,.20)` |
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
| `--control-padding-x` | padding-inline | `20px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `linear-gradient(180deg,#ff6fc0,#ff2fa0)` |
| `--button-fg` | color | `#ffffff` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#d62e8e` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `rgba(255,255,255,.85)` |
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
  --color-bg: #eef6ff;
  --color-surface: linear-gradient(180deg,#ffffff,#e0eaf6);
  --color-surface-alt: #d8e4f2;
  --color-fg: #1b2a3a;
  --color-muted: #5d7186;
  --color-primary: #ff2fa0;
  --color-on-primary: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #a3e635;
  --color-border: #b9cbe0;
  --color-disabled: #e4ecf5;
  --color-on-disabled: #94a7ba;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.5;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 999px;
  --radius-card: 16px;
  --border-width: 1px;
  --shadow-control: inset 0 1px 0 #ffffff, 0 4px 10px rgba(56,120,190,.18);
  --shadow-card: inset 0 1px 0 #ffffff, 0 14px 34px rgba(56,120,190,.20);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 44px;
  --control-padding-x: 20px;

  /* 按钮 · Button · Component */
  --button-bg: linear-gradient(180deg,#ff6fc0,#ff2fa0);
  --button-fg: #ffffff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d62e8e;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: rgba(255,255,255,.85);
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

1. 铬：`linear-gradient(180deg,#fff,#b9c6d4 38%,#f4f8fc 50%,#8fa1b5 62%,#fff)`。
2. 内高光用 `inset 0 1px 0 #fff`，外投影保持柔和。
3. 泡泡效果：半透明白 + `backdrop-filter: blur(4px)` + 高光点。
4. 一屏只留一个镜面材质主角。

## 6. 常见反例

- 银色只用灰色代替，缺少铬的明暗跳变。
- 所有元素都在闪光，视觉焦点消失。
- 在现代浏览器里用旧式位图渐变，放大即糊。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
