---
title: "日式极简 · Japanese Minimal"
slug: japanese-minimal
category: 自然与人文 / Natural & Human
era: 1990 —
tags: [留白, 朱色, 细线, 克制]
updated: 2026-10-26
---

# 日式极简 · Japanese Minimal

> 以“间”为核心：大量空白、极细的分割线与一点朱红，信息像被恭敬地摆放。

| 项目 | 内容 |
| --- | --- |
| 类别 | 自然与人文（Natural & Human） |
| 年代 | 1990 — |
| 关键词 | 留白 · 朱色 · 细线 · 克制 |
| 主色 | `#1c1c1a` | 
| 底色 | `#faf9f6` |
| 圆角 | 0px / 2px |
| 控制高度 | 46px |

## 1. 视觉特征

- 底色接近白但带暖（#faf9f6），永不用纯白。
- 强调色只有一个朱红，用量极小（一点或一条线）。
- 分割线 1px，颜色极浅，靠留白而非边框分区。
- 字体：中文用细黑或宋，拉丁用细体无衬线，字距 +0.04em。

## 2. 适用与慎用

**适合：** 生活方式品牌、旅馆与餐饮、出版物、冥想与工具类产品。

**慎用：** 需要高信息密度的后台、强调冲击力的营销页。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#faf9f6` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#f3f1ec` |
| `--color-fg` | color | `#1c1c1a` |
| `--color-muted` | color | `#6f6d66` |
| `--color-primary` | background-color | `#1c1c1a` |
| `--color-on-primary` | color | `#faf9f6` |
| `--color-accent` | background-color | `#b33a2b` |
| `--color-accent-2` | background-color | `#1c1c1a` |
| `--color-border` | border-color | `#e2dfd8` |
| `--color-disabled` | background-color | `#eeece7` |
| `--color-on-disabled` | color | `#a5a29a` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Instrument Serif", "Songti SC", "Georgia", serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `400` |
| `--type-tracking` | letter-spacing | `0.04em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.9` |

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
| `--size-control` | height | `46px` |
| `--control-padding-x` | padding-inline | `18px` |

### 按钮 · Button

组件私有变量，全部引用语义层，不写死色值。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--button-bg` | background-color | `#1c1c1a` |
| `--button-fg` | color | `#faf9f6` |
| `--button-radius` | border-radius | `0px` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#1c1c1a` |
| `--button-disabled-bg` | background-color | `var(--color-disabled)` |

### 输入框 · Input

与按钮共用圆角与高度，保证行内对齐。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--input-bg` | background-color | `transparent` |
| `--input-border` | border | `1px solid #d8d5cc` |
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
  --color-bg: #faf9f6;
  --color-surface: #ffffff;
  --color-surface-alt: #f3f1ec;
  --color-fg: #1c1c1a;
  --color-muted: #6f6d66;
  --color-primary: #1c1c1a;
  --color-on-primary: #faf9f6;
  --color-accent: #b33a2b;
  --color-accent-2: #1c1c1a;
  --color-border: #e2dfd8;
  --color-disabled: #eeece7;
  --color-on-disabled: #a5a29a;

  /* 字体与排版 · Typography */
  --font-display: "Instrument Serif", "Songti SC", "Georgia", serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 400;
  --type-tracking: 0.04em;
  --type-transform: none;
  --type-leading: 1.9;

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
  --size-control: 46px;
  --control-padding-x: 18px;

  /* 按钮 · Button · Component */
  --button-bg: #1c1c1a;
  --button-fg: #faf9f6;
  --button-radius: 0px;
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #1c1c1a;
  --button-disabled-bg: var(--color-disabled);

  /* 输入框 · Input · Component */
  --input-bg: transparent;
  --input-border: 1px solid #d8d5cc;
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

1. 区块间距 96–160px，行高 1.9。
2. 只在关键分隔处用 1px 线，线色 #e2dfd8。
3. 数字与标题用 300 字重，正文 400。
4. 一条竖线或一枚圆点承载品牌色即可。

## 6. 常见反例

- 留白不足，只是“白色背景 + 小字”。
- 朱红用成大色块，克制感消失。
- 用粗黑字重，与整体轻盈感冲突。

## 7. 参考

- Wabi-sabi 与日本民艺运动
- Risograph 印刷工艺手册
- 北欧色彩体系（NCS）
