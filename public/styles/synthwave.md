---
title: "合成波 · Synthwave"
slug: synthwave
category: 复古与数字怀旧 / Retro & Nostalgia
era: 2005 —
tags: [霓虹, 透视网格, 落日, 80 年代]
updated: 2026-10-26
---

# 合成波 · Synthwave

> 80 年代科幻与电子乐的视觉复刻：品红落日、透视霓虹网格、铬金属字与无尽公路。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 2005 — |
| 关键词 | 霓虹 · 透视网格 · 落日 · 80 年代 |
| 主色 | `#ff2e97` | 
| 底色 | `#120a1f` |
| 圆角 | 2px / 6px |
| 控制高度 | 42px |

## 1. 视觉特征

- 经典三件套：品红→橙的落日、紫色地平线、青色透视网格。
- 字形带铬金属渐变与描边，常配斜体。
- 整体压暗，霓虹只做点缀，不做大面积填充。
- 扫描线与噪点是必要的年代滤镜。

## 2. 适用与慎用

**适合：** 音乐与游戏、活动海报、汽车与潮流品牌、科幻叙事。

**慎用：** 政务金融、需要清晰层级的产品界面。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#120a1f` |
| `--color-surface` | background-color | `#1c1030` |
| `--color-surface-alt` | background-color | `#26163f` |
| `--color-fg` | color | `#efe7ff` |
| `--color-muted` | color | `#a99bc9` |
| `--color-primary` | background-color | `#ff2e97` |
| `--color-on-primary` | color | `#120a1f` |
| `--color-accent` | background-color | `#00e5ff` |
| `--color-accent-2` | background-color | `#ffc93c` |
| `--color-border` | border-color | `#3a1f5c` |
| `--color-disabled` | background-color | `#241539` |
| `--color-on-disabled` | color | `#7a6a94` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `800` |
| `--type-tracking` | letter-spacing | `0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.4` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `2px` |
| `--radius-card` | border-radius | `6px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 0 12px rgba(255,46,151,.5)` |
| `--shadow-card` | box-shadow | `0 0 48px rgba(0,229,255,.22)` |
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
| `--button-bg` | background-color | `linear-gradient(135deg,#ff2e97,#7c3aed)` |
| `--button-fg` | color | `#ffffff` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid rgba(0,229,255,.6)` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#fc4faa` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#1c1030` |
| `--input-border` | border | `1px solid #3a1f5c` |
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
  --color-bg: #120a1f;
  --color-surface: #1c1030;
  --color-surface-alt: #26163f;
  --color-fg: #efe7ff;
  --color-muted: #a99bc9;
  --color-primary: #ff2e97;
  --color-on-primary: #120a1f;
  --color-accent: #00e5ff;
  --color-accent-2: #ffc93c;
  --color-border: #3a1f5c;
  --color-disabled: #241539;
  --color-on-disabled: #7a6a94;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 800;
  --type-tracking: 0.01em;
  --type-transform: none;
  --type-leading: 1.4;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 2px;
  --radius-card: 6px;
  --border-width: 1px;
  --shadow-control: 0 0 12px rgba(255,46,151,.5);
  --shadow-card: 0 0 48px rgba(0,229,255,.22);
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
  --button-bg: linear-gradient(135deg,#ff2e97,#7c3aed);
  --button-fg: #ffffff;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid rgba(0,229,255,.6);
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #fc4faa;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #1c1030;
  --input-border: 1px solid #3a1f5c;
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

1. 透视网格：`linear-gradient` 双向叠加 + `transform: perspective()`。
2. 落日用 `radial-gradient` + 横向条纹遮罩。
3. 霓虹光晕用 `filter: drop-shadow(0 0 6px currentColor)`。
4. 正文用 #e8e2ff，霓虹只用于标题与装饰。

## 6. 常见反例

- 霓虹色直接铺满，失去夜空的深邃感。
- 网格线过粗，产生摩尔纹。
- 正文用霓虹色，暗底上完全读不清。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
