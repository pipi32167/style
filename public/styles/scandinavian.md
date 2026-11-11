---
title: "北欧风 · Scandinavian"
slug: scandinavian
category: 自然与人文 / Natural & Human
era: 1950 —
tags: [功能, 浅木色, 柔和, 自然光]
updated: 2026-10-26
---

# 北欧风 · Scandinavian

> 为漫长冬夜而生的设计：浅木、白墙、柔和自然光与克制的功能主义，温暖但不甜腻。

| 项目 | 内容 |
| --- | --- |
| 类别 | 自然与人文（Natural & Human） |
| 年代 | 1950 — |
| 关键词 | 功能 · 浅木色 · 柔和 · 自然光 |
| 主色 | `#2f4e6b` | 
| 底色 | `#faf8f5` |
| 圆角 | 8px / 12px |
| 控制高度 | 42px |

## 1. 视觉特征

- 底色为暖白，辅以浅木色与雾蓝、鼠尾草绿。
- 线条简洁、圆角适中（8–14px），阴影极轻。
- 大量自然光感：柔和渐变、低对比图像。
- 字体为几何无衬线，字重 400–600，行高 1.6。

## 2. 适用与慎用

**适合：** 家居与家具、健康与教育、SaaS 工具、非营利机构。

**慎用：** 夜间场景、需要强烈氛围的娱乐产品。

## 3. 设计令牌（CSS Variables）

### 色彩与语义

角色化命名，主题切换只改这一层。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--color-bg` | background-color | `#faf8f5` |
| `--color-surface` | background-color | `#ffffff` |
| `--color-surface-alt` | background-color | `#f2efe9` |
| `--color-fg` | color | `#22262b` |
| `--color-muted` | color | `#5f6870` |
| `--color-primary` | background-color | `#2f4e6b` |
| `--color-on-primary` | color | `#ffffff` |
| `--color-accent` | background-color | `#d98e5a` |
| `--color-accent-2` | background-color | `#a8c3b0` |
| `--color-border` | border-color | `#e6e1d9` |
| `--color-disabled` | background-color | `#efece6` |
| `--color-on-disabled` | color | `#a3a8ad` |

### 字体与排版

展示字体只用于标题，正文与数字各有一档。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--font-display` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-body` | font-family | `"Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif` |
| `--font-mono` | font-family | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--type-weight-display` | font-weight | `600` |
| `--type-tracking` | letter-spacing | `-0.01em` |
| `--type-transform` | text-transform | `none` |
| `--type-leading` | line-height | `1.6` |

### 形状与层次

圆角、描边、阴影、模糊共同决定材质手感。

| 令牌 | CSS 属性 | 值 |
| --- | --- | --- |
| `--radius-control` | border-radius | `8px` |
| `--radius-card` | border-radius | `12px` |
| `--border-width` | border-width | `1px` |
| `--shadow-control` | box-shadow | `0 1px 2px rgba(58,52,44,.06)` |
| `--shadow-card` | box-shadow | `0 2px 10px rgba(58,52,44,.07)` |
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
| `--button-bg` | background-color | `var(--color-primary)` |
| `--button-fg` | color | `var(--color-on-primary)` |
| `--button-radius` | border-radius | `var(--radius-control)` |
| `--button-height` | height | `var(--size-control)` |
| `--button-padding-x` | padding-inline | `var(--control-padding-x)` |
| `--button-border` | border | `var(--border-width) solid transparent` |
| `--button-shadow` | box-shadow | `var(--shadow-control)` |
| `--button-hover-bg` | background-color | `#2d475f` |
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
  --color-bg: #faf8f5;
  --color-surface: #ffffff;
  --color-surface-alt: #f2efe9;
  --color-fg: #22262b;
  --color-muted: #5f6870;
  --color-primary: #2f4e6b;
  --color-on-primary: #ffffff;
  --color-accent: #d98e5a;
  --color-accent-2: #a8c3b0;
  --color-border: #e6e1d9;
  --color-disabled: #efece6;
  --color-on-disabled: #a3a8ad;

  /* 字体与排版 · Typography */
  --font-display: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-body: "Schibsted Grotesk", ui-sans-serif, system-ui, "PingFang SC", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-weight-display: 600;
  --type-tracking: -0.01em;
  --type-transform: none;
  --type-leading: 1.6;

  /* 形状与层次 · Shape & Elevation */
  --radius-control: 8px;
  --radius-card: 12px;
  --border-width: 1px;
  --shadow-control: 0 1px 2px rgba(58,52,44,.06);
  --shadow-card: 0 2px 10px rgba(58,52,44,.07);
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
  --button-bg: var(--color-primary);
  --button-fg: var(--color-on-primary);
  --button-radius: var(--radius-control);
  --button-height: var(--size-control);
  --button-padding-x: var(--control-padding-x);
  --button-border: var(--border-width) solid transparent;
  --button-shadow: var(--shadow-control);
  --button-hover-bg: #2d475f;
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
```

## 5. 实施要点

1. 底色 #faf8f5，卡片 #ffffff，边框 #e6e1d9。
2. 主色选一个冷调（雾蓝），强调色选一个暖调（陶土）。
3. 阴影：`0 2px 8px rgba(58,52,44,.06)`，绝不更重。
4. 圆角统一 1–2 档，避免混用。

## 6. 常见反例

- 所有颜色都低饱和，界面失去焦点。
- 用冷灰替代暖白，北欧变“医院风”。
- 装饰性插画过多，与功能主义冲突。

## 7. 参考

- Wabi-sabi 与日本民艺运动
- Risograph 印刷工艺手册
- 北欧色彩体系（NCS）
