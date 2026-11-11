---
title: "波西米亚大地色 · Boho Earthy"
slug: boho-earthy
category: 自然与人文 / Natural & Human
era: 2015 —
tags: [陶土, 沙色, 民族纹, 温暖]
updated: 2026-10-26
---

# 波西米亚大地色 · Boho Earthy

> 陶土、沙丘与手工编织：温暖的土色系配民族纹样，界面像一块晒过太阳的亚麻布。

| 项目 | 内容 |
| --- | --- |
| 类别 | 自然与人文（Natural & Human） |
| 年代 | 2015 — |
| 关键词 | 陶土 · 沙色 · 民族纹 · 温暖 |
| 主色 | `#b4542f` | 
| 底色 | `#f7efe4` |
| 圆角 | 12px / 20px |
| 控制高度 | 46px |

## 1. 视觉特征

- 色板：陶土红、赭石、橄榄、沙色、奶油白。
- 纹理：编织、拱形、太阳纹，几何但不精确。
- 圆角偏大，边框用暖灰而非纯黑。
- 字体为衬线与手写混排，字距舒展。

## 2. 适用与慎用

**适合：** 手作与民宿、咖啡与烘焙、瑜伽与疗愈、婚礼策划。

**慎用：** 企业软件、冷色调品牌、需要高对比的密集界面。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f7efe4` |
| `--color-surface` | background-color | `#fffaf3` |
| `--color-surface-alt` | background-color | `#efe1d0` |
| `--color-fg` | color | `#33251a` |
| `--color-muted` | color | `#6d5744` |
| `--color-primary` | background-color | `#b4542f` |
| `--color-on-primary` | color | `#fffaf3` |
| `--color-accent` | background-color | `#7c8a56` |
| `--color-accent-2` | background-color | `#d9a066` |
| `--color-border` | border-color | `#e3d2bd` |
| `--color-disabled` | background-color | `#eee2d3` |
| `--color-on-disabled` | color | `#9d8a76` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.7` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `12px` |
| `--radius-card` | border-radius | `20px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 2px 6px rgba(90,60,40,.10)` |
| `--shadow-card` | box-shadow | `0 14px 34px rgba(90,60,40,.14)` |
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
| `--size-control` | height | `46px` |
| `--control-padding-x` | padding-inline | `20px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `#fffaf3` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#9d4c2b` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `var(--color-surface)` |
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
| `--card-border` | border | `1px solid #e8d8c4` |
| `--card-radius` | border-radius | `var(--radius-card)` |
| `--card-shadow` | box-shadow | `var(--shadow-card)` |
| `--card-padding` | padding | `var(--space-4)` |
| `--card-blur` | backdrop-filter | `var(--backdrop-blur)` |


```css
:root {
  /* 色彩与语义 · Color & Semantic */
  --color-bg: #f7efe4;
  --color-surface: #fffaf3;
  --color-surface-alt: #efe1d0;
  --color-fg: #33251a;
  --color-muted: #6d5744;
  --color-primary: #b4542f;
  --color-on-primary: #fffaf3;
  --color-accent: #7c8a56;
  --color-accent-2: #d9a066;
  --color-border: #e3d2bd;
  --color-disabled: #eee2d3;
  --color-on-disabled: #9d8a76;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0.01em;
  --type-transform: none;
  --type-leading: 1.7;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 12px;
  --radius-card: 20px;
  --border-width: 1px;
  --shadow-control: 0 2px 6px rgba(90,60,40,.10);
  --shadow-card: 0 14px 34px rgba(90,60,40,.14);
  --backdrop-blur: none;

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
  --button-bg: var(--color-primary);
  --button-fg: #fffaf3;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #9d4c2b;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: var(--color-surface);
  --input-border: var(--border-width) solid var(--color-border);
  --input-radius: var(--radius-control);
  --input-height: var(--size-control);
  --input-padding-x: var(--control-padding-x);
  --input-shadow: none;
  --input-blur: var(--backdrop-blur);

  /* 卡片 · Card · Component */
  --card-bg: var(--color-surface);
  --card-border: 1px solid #e8d8c4;
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

1. 主色明度差 ≥ 40%，保证对比。
2. 纹样用 SVG pattern，透明度 10%–18%。
3. 卡片圆角 12–20px，阴影带暖色（rgba(90,60,40,.12)）。
4. 拱形元素用 `border-radius: 999px 999px 0 0`。

## 6. 常见反例

- 土色纯度不够，页面显脏。
- 纹样无节制铺满，失去呼吸感。
- 在土色上用深棕文字，对比度不足。

## 7. 参考

- Wabi-sabi 与日本民艺运动
- Risograph 印刷工艺手册
- 北欧色彩体系（NCS）
