---
title: "有机形态 · Organic Blob"
slug: organic-blob
category: 自然与人文 / Natural & Human
era: 2020 —
tags: [流体, 不规则, 柔软, 呼吸感]
updated: 2026-10-26
---

# 有机形态 · Organic Blob

> 没有一条直线：所有容器都是不规则曲线，像细胞、水滴与鹅卵石，界面在呼吸。

| 项目 | 内容 |
| --- | --- |
| 类别 | 自然与人文（Natural & Human） |
| 年代 | 2020 — |
| 关键词 | 流体 · 不规则 · 柔软 · 呼吸感 |
| 主色 | `#5c8d63` | 
| 底色 | `#f3f7f2` |
| 圆角 | 999px / 40px |
| 控制高度 | 48px |

## 1. 视觉特征

- 容器用 `border-radius: 60% 40% 55% 45% / 45% 55% 45% 55%` 一类不规则值。
- 色板柔和：苔绿、陶土、雾蓝，饱和度 35%–55%。
- 图形与插画同源，都是曲线语言。
- 动效慢而连续（6–12s 循环），像呼吸。

## 2. 适用与慎用

**适合：** 健康与冥想、儿童与家庭、食品饮料、创意工作室。

**慎用：** 数据表格、企业后台、需要严格对齐的多列布局。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#f3f7f2` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#e7f0e6` |
| `--color-fg` | color | `#20302a` |
| `--color-muted` | color | `#5c6f65` |
| `--color-primary` | background-color | `#5c8d63` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#c98a5e` |
| `--color-accent-2` | background-color | `#8fb8c9` |
| `--color-border` | border-color | `#dbe6d9` |
| `--color-disabled` | background-color | `#e9f0e8` |
| `--color-on-disabled` | color | `#9aa89f` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `0` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.7` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `999px` |
| `--radius-card` | border-radius | `40px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 4px 12px rgba(32,48,42,.08)` |
| `--shadow-card` | box-shadow | `0 18px 40px rgba(32,48,42,.10)` |
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
| `--control-padding-x` | padding-inline | `22px` |

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
| `--button-hover-bg` | background-color | `#517c59` |
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
| `--card-border` | border | `var(--border-width) solid var(--color-border)` |
| `--card-radius` | border-radius | `var(--radius-card)` |
| `--card-shadow` | box-shadow | `var(--shadow-card)` |
| `--card-padding` | padding | `var(--space-4)` |
| `--card-blur` | backdrop-filter | `var(--backdrop-blur)` |


```css
:root {
  /* 色彩与语义 · Color & Semantic */
  --color-bg: #f3f7f2;
  --color-surface: #ffffff;
  --color-surface-alt: #e7f0e6;
  --color-fg: #20302a;
  --color-muted: #5c6f65;
  --color-primary: #5c8d63;
  --color-on-primary: #ffffff;
  --color-accent: #c98a5e;
  --color-accent-2: #8fb8c9;
  --color-border: #dbe6d9;
  --color-disabled: #e9f0e8;
  --color-on-disabled: #9aa89f;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: 0;
  --type-transform: none;
  --type-leading: 1.7;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 999px;
  --radius-card: 40px;
  --border-width: 1px;
  --shadow-control: 0 4px 12px rgba(32,48,42,.08);
  --shadow-card: 0 18px 40px rgba(32,48,42,.10);
  --backdrop-blur: none;

  /* 间距与尺寸 · Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --size-control: 48px;
  --control-padding-x: 22px;

  /* 按钮 · Button · Component */
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #517c59;
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

.card { border-radius: 60% 40% 55% 45% / 45% 55% 45% 55%; }
```

## 5. 实施要点

1. 把 blob 限制在装饰与图像遮罩，正文容器保持矩形。
2. 用 `clip-path` 或 `border-radius` 生成，注意内边距 ≥ 32px。
3. 给 blob 加轻微 morph 动画（`border-radius` 关键帧）。
4. 网格仍存在，只是被柔化。

## 6. 常见反例

- 所有元素都不规则，页面失去结构。
- blob 内的文字溢出边界，可读性归零。
- 动效过快，变成令人焦虑的抽搐。

## 7. 参考

- Wabi-sabi 与日本民艺运动
- Risograph 印刷工艺手册
- 北欧色彩体系（NCS）
