---
title: "Windows 95"
slug: windows-95
category: 复古与数字怀旧 / Retro & Nostalgia
era: 1995 — 2001
tags: [灰色面板, 凹陷按钮, 标题栏, 像素]
updated: 2026-10-26
---

# Windows 95 · Windows 95

> 灰面板、内凹边框与蓝色标题栏：信息密度高、层级靠 3D 斜角线表达，一切都能被拖拽。

| 项目 | 内容 |
| --- | --- |
| 类别 | 复古与数字怀旧（Retro & Nostalgia） |
| 年代 | 1995 — 2001 |
| 关键词 | 灰色面板 · 凹陷按钮 · 标题栏 · 像素 |
| 主色 | `#000080` | 
| 底色 | `#d4d0c8` |
| 圆角 | 0px / 0px |
| 控制高度 | 26px |

## 1. 视觉特征

- 面板统一 #c0c0c0，靠 1px 亮/暗斜角表达凸起与凹陷。
- 标题栏为深蓝渐变，文字白色加粗。
- 按钮按下时白边与灰边互换，产生物理位移。
- 字体为像素化无衬线，字号只有 11/12px 两档。

## 2. 适用与慎用

**适合：** 复古主题站点、极客玩笑与彩蛋、游戏内 UI、活动主题页。

**慎用：** 真实产品界面、移动端、需要无障碍支持的系统。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#d4d0c8` |
| `--color-surface` | background-color | `#c0c0c0` |
| `--color-surface-alt` | background-color | `#a8a49c` |
| `--color-fg` | color | `#000000` |
| `--color-muted` | color | `#3b3b3b` |
| `--color-primary` | background-color | `#000080` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#008080` |
| `--color-accent-2` | background-color | `#800000` |
| `--color-border` | border-color | `#808080` |
| `--color-disabled` | background-color | `#c8c4bc` |
| `--color-on-disabled` | color | `#8a8a8a` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-body` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `700` |
| `--type-tracking` | letter-spacing | `0` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.5` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `0px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `inset 1px 1px 0 #ffffff, inset -1px -1px 0 #404040` |
| `--shadow-card` | box-shadow | `inset 1px 1px 0 #ffffff, inset -1px -1px 0 #404040` |
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
| `--size-control` | height | `26px` |
| `--control-padding-x` | padding-inline | `8px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `#c0c0c0` |
| `--button-fg` | color | `#000000` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #ffffff` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#000069` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `#ffffff` |
| `--input-border` | border | `inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff` |
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
  --color-bg: #d4d0c8;
  --color-surface: #c0c0c0;
  --color-surface-alt: #a8a49c;
  --color-fg: #000000;
  --color-muted: #3b3b3b;
  --color-primary: #000080;
  --color-on-primary: #ffffff;
  --color-accent: #008080;
  --color-accent-2: #800000;
  --color-border: #808080;
  --color-disabled: #c8c4bc;
  --color-on-disabled: #8a8a8a;

  /* 字体与排版 · Typography */
  --font-display: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-body: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 700;
  --type-tracking: 0;
  --type-transform: none;
  --type-leading: 1.5;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 0px;
  --border-width: 1px;
  --shadow-control: inset 1px 1px 0 #ffffff, inset -1px -1px 0 #404040;
  --shadow-card: inset 1px 1px 0 #ffffff, inset -1px -1px 0 #404040;
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 26px;
  --control-padding-x: 8px;

  /* 按钮 · Button · Component */
  --button-bg: #c0c0c0;
  --button-fg: #000000;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #ffffff;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #000069;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: #ffffff;
  --input-border: inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff;
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

1. 凸起：`border-top:1px solid #fff; border-left:1px solid #fff; border-right:1px solid #404040; border-bottom:1px solid #404040`。
2. 凹陷把颜色顺序反转。
3. 窗口标题栏 `linear-gradient(90deg,#000080,#1084d0)`。
4. 正文改用现代字体与 15px，保留外壳复古。

## 6. 常见反例

- 用现代圆角阴影替代斜角线，年代感消失。
- 把 11px 像素字用于正文，阅读成本极高。
- 颜色过于还原导致对比度不足（灰底灰字）。

## 7. 参考

- Vaporwave / Synthwave 视觉谱系
- Windows 95 UI 规范
- Frutiger Aero 档案（Archive.org）
