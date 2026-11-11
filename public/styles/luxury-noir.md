---
title: "黑金奢华 · Luxury Noir"
slug: luxury-noir
category: 精品与戏剧 / Luxe & Dramatic
era: 1920 —
tags: [黑金, 极简, 衬线, 克制]
updated: 2026-10-26
---

# 黑金奢华 · Luxury Noir

> 极深的黑、极细的金与极大的留白：不做装饰，只靠材质与比例传达价格。

| 项目 | 内容 |
| --- | --- |
| 类别 | 精品与戏剧（Luxe & Dramatic） |
| 年代 | 1920 — |
| 关键词 | 黑金 · 极简 · 衬线 · 克制 |
| 主色 | `#c8a97e` | 
| 底色 | `#0c0b0a` |
| 圆角 | 0px / 2px |
| 控制高度 | 48px |

## 1. 视觉特征

- 黑分三层（#0c0b0a / #131211 / #1b1917），金色只占 5%。
- 金字使用金属渐变，不用单一实色。
- 标题为高对比衬线，字距 0.14em 以上，全大写或全小写。
- 图像少而大，暗调、局部高光、无背景杂讯。

## 2. 适用与慎用

**适合：** 珠宝与香水、私人银行与地产、精品酒店、限量产品页。

**慎用：** 大众消费产品、需要高信息密度的界面、年轻化社交产品。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#0c0b0a` |
| `--color-surface` | background-color | `#141312` |
| `--color-surface-alt` | background-color | `#1b1917` |
| `--color-fg` | color | `#f2ece1` |
| `--color-muted` | color | `#a89e8d` |
| `--color-primary` | background-color | `#c8a97e` |
| `--color-on-primary` | color | `#141210` |
| `--color-accent` | background-color | `#c8a97e` |
| `--color-accent-2` | background-color | `#7d6b4f` |
| `--color-border` | border-color | `#2a2724` |
| `--color-disabled` | background-color | `#1a1817` |
| `--color-on-disabled` | color | `#6f665a` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `400` |
| `--type-tracking` | letter-spacing | `0.14em` |
| `--type-transform` | text-transform | `uppercase` |
| `--type-leading` | line-height | `1.8` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `0px` |
| `--radius-card` | border-radius | `2px` |
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
| `--size-control` | height | `48px` |
| `--control-padding-x` | padding-inline | `28px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `transparent` |
| `--button-fg` | color | `#c8a97e` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `1px solid #c8a97e` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#d0b590` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `transparent` |
| `--input-border` | border | `1px solid #2a2724` |
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
  --color-bg: #0c0b0a;
  --color-surface: #141312;
  --color-surface-alt: #1b1917;
  --color-fg: #f2ece1;
  --color-muted: #a89e8d;
  --color-primary: #c8a97e;
  --color-on-primary: #141210;
  --color-accent: #c8a97e;
  --color-accent-2: #7d6b4f;
  --color-border: #2a2724;
  --color-disabled: #1a1817;
  --color-on-disabled: #6f665a;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 400;
  --type-tracking: 0.14em;
  --type-transform: uppercase;
  --type-leading: 1.8;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 0px;
  --radius-card: 2px;
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
  --size-control: 48px;
  --control-padding-x: 28px;

  /* 按钮 · Button · Component */
  --button-bg: transparent;
  --button-fg: #c8a97e;
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: 1px solid #c8a97e;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #d0b590;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: transparent;
  --input-border: 1px solid #2a2724;
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

1. 金属金：`linear-gradient(100deg,#7d5f2a,#e5cf9a 48%,#a8842f 56%,#f2e6c4)`。
2. 正文最小 15px，字重 300 以上，行高 1.8。
3. 页面最大内容宽度 1100px，区块间距 ≥ 120px。
4. 只保留一个主 CTA，其余为文本链接。

## 6. 常见反例

- 金色面积过大，奢华感立刻变成廉价感。
- 在深黑底上用细体小字，对比与字重双不足。
- 塞入折扣信息与多个 CTA，价格感崩塌。

## 7. 参考

- 时装品牌视觉系统案例（Celine / Bottega）
- 电影调色（Teal & Orange）分析
- 画廊白盒（White Cube）展览设计
