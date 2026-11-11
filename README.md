# Design Style Gallery

81 种界面设计风格的 CSS 设计令牌与实现指南，单页应用。

- 线上：https://style.million-ai.com
- 部署：Cloudflare Pages 项目 `style`（`style-68o.pages.dev`）
- 数据：`src/data/styles.js`（每种风格 55 个令牌）
- 指南：`public/styles/<slug>.md`，运行时按需拉取

## 开发

```bash
npm install
npm run dev        # http://127.0.0.1:17402
```

## 构建与部署

```bash
npm run build      # 产物在 dist/
npm run deploy     # 构建并直传 Cloudflare Pages
```

推送到 `main` 会通过 GitHub Actions（`.github/workflows/deploy.yml`）自动部署。

## 结构

```
index.html           Vite 入口（首屏主题脚本在此）
src/main.js          样式与模块入口
src/app.js           交互：搜索 / 筛选 / 明暗 / 详情面板 / 令牌表
src/demos.js         12 个可交互应用示例
src/data/styles.js   81 种风格的结构化数据
src/styles/          全站样式与示例样式
public/              字体、图标、OG 图、81 份 Markdown 指南、robots/sitemap
```

## 路由

Hash 路由，无需服务端重写：

- `#/s/<slug>` 打开详情，`?tab=overview|demo|tokens|md` 指定视图
- 示例：https://style.million-ai.com/#/s/neumorphism?tab=tokens
