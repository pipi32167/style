/* ==========================================================================
   应用示例 —— 12 个可交互场景，全部使用该风格的真实令牌
   导出：window.DSG_DEMOS = { scenes, render(id), mount(root, id) }
   约定：只重绘列表容器，保留输入框焦点；状态跨风格共享（内容 vs 样式分离）
   ========================================================================== */
(() => {
  'use strict';

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const I = {
    check: '<svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.4 6.3 11.8 13 4.6" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    plus: '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    trash: '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 4.5h10M6.4 4.5V3.2h3.2v1.3M4.6 4.5l.6 8.2h5.6l.6-8.2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    eye: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.6 8S4.1 3.8 8 3.8 14.4 8 14.4 8 11.9 12.2 8 12.2 1.6 8 1.6 8Z" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="8" r="1.9" stroke="currentColor" stroke-width="1.3"/></svg>',
    play: '<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5 3.2 12.4 8 5 12.8Z"/></svg>',
    pause: '<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="4" y="3.4" width="2.6" height="9.2" rx="0.8"/><rect x="9.4" y="3.4" width="2.6" height="9.2" rx="0.8"/></svg>',
    prev: '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M11.6 3.4 5.4 8l6.2 4.6Z"/><rect x="3" y="3.4" width="1.6" height="9.2" rx="0.6"/></svg>',
    next: '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4.4 3.4 10.6 8l-6.2 4.6Z"/><rect x="11.4" y="3.4" width="1.6" height="9.2" rx="0.6"/></svg>',
    search: '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="4.4" stroke="currentColor" stroke-width="1.4"/><path d="M10.4 10.4 14 14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    heart: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 13.2S2.4 9.8 2.4 6.3a2.9 2.9 0 0 1 5.6-1.1 2.9 2.9 0 0 1 5.6 1.1c0 3.5-5.6 6.9-5.6 6.9Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
    cart: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.8 2.6h1.8l1.6 7.6h7l1.6-5.4H4.4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.4" cy="12.6" r="1" fill="currentColor"/><circle cx="11" cy="12.6" r="1" fill="currentColor"/></svg>',
    arrow: '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9M8.6 4.4 12.4 8l-3.8 3.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    inbox: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 11.5 5.2 4.6A1.4 1.4 0 0 1 6.5 3.6h7a1.4 1.4 0 0 1 1.3.9L17 11.5v3.2a1.4 1.4 0 0 1-1.4 1.4H4.4A1.4 1.4 0 0 1 3 14.7v-3.2Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M3 11.6h3.4l.9 1.6h5.4l.9-1.6H17" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
    ok: '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.4"/><path d="M5.2 8.3 7.2 10.3 11 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    alert: '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2.8 14.4 13.2H1.6L8 2.8Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8 6.6v3.1M8 11.5v.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    x: '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.4"/><path d="M5.8 5.8l4.4 4.4M10.2 5.8l-4.4 4.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    send: '<svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.2 8 13.6 2.6 11 13.4 8 9.4 2.2 8Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  };

  const SCENES = [
    { id: 'todo', zh: 'TODO 清单', en: 'Task list', hint: '输入框、勾选态、标签与删除按钮的密度关系。', tokens: ['--input-*', '--radius-control', '--color-accent'] },
    { id: 'auth', zh: '登录表单', en: 'Sign in', hint: '表单密度、焦点环、错误态，以及主次按钮的分层。', tokens: ['--input-*', '--button-*', '--color-accent'] },
    { id: 'dash', zh: '仪表盘', en: 'Dashboard', hint: '等宽数字、状态色与表格线的克制使用。', tokens: ['--card-*', '--shadow-card', '--font-mono'] },
    { id: 'pricing', zh: '定价卡', en: 'Pricing', hint: '卡片层级、推荐徽章与 CTA 权重如何分配。', tokens: ['--card-*', '--button-*', '--radius-card'] },
    { id: 'player', zh: '播放器', en: 'Player', hint: '封面、进度条与圆形控制件的材质表达。', tokens: ['--color-accent', '--shadow-control', '--radius-card'] },
    { id: 'chat', zh: '聊天', en: 'Chat', hint: '气泡圆角、正反配色与滚动区内的视觉节奏。', tokens: ['--color-primary', '--radius-control', '--border-width'] },
    { id: 'shop', zh: '商品卡', en: 'Product card', hint: '价格排版、色板与尺码选择器在窄容器里的对齐。', tokens: ['--radius-card', '--color-accent', '--border-width'] },
    { id: 'settings', zh: '设置项', en: 'Settings', hint: '开关、滑杆、分段控件的高度与圆角一致性。', tokens: ['--size-control', '--radius-control', '--color-accent'] },
    { id: 'states', zh: '空态 / 加载', en: 'States', hint: '空状态、骨架屏与轻提示如何共享同一套令牌。', tokens: ['--color-muted', '--radius-card', '--shadow-card'] },
    { id: 'table', zh: '数据表格', en: 'Data table', hint: '表头、行 hover、状态标签与分页的密度控制。', tokens: ['--space-*', '--color-border', '--font-mono'] },
    { id: 'cmd', zh: '命令面板', en: 'Command palette', hint: '浮层、选中高亮与键盘提示的层级关系。', tokens: ['--shadow-card', '--radius-card', '--color-accent'] },
    { id: 'profile', zh: '个人主页', en: 'Profile', hint: '封面、头像、统计数字与标签页的排版秩序。', tokens: ['--radius-card', '--color-accent', '--font-display'] },
  ];

  /* --------------------------------- 状态 -------------------------------- */
  let uid = 100;
  const S = {
    todo: {
      filter: 'all',
      items: [
        { id: 1, text: '把 81 个风格卡片接到真实令牌', tag: '前端', done: true },
        { id: 2, text: '给详情面板加「应用示例」标签页', tag: '前端', done: true },
        { id: 3, text: '检查深色模式下的对比度', tag: '验收', done: false },
        { id: 4, text: '写一份十分钟上手文档', tag: '文档', done: false },
      ],
    },
    auth: { showPw: false, error: '', ok: false },
    dash: { period: 7 },
    pricing: { yearly: false },
    player: { track: 0, playing: false, progress: 78 },
    chat: {
      msgs: [
        { from: 'in', text: '新版的令牌表我看了，语义层和组件层拆得很清楚。', t: '09:41' },
        { from: 'out', text: '谢谢！现在换主题只需要动语义层那一段。', t: '09:42' },
        { from: 'in', text: '那我把设计稿里的颜色都换成变量名，今天就能同步。', t: '09:43' },
      ],
    },
    shop: { color: 0, size: 1, cart: 0 },
    settings: { notify: true, digest: false, theme: 'system', fontSize: 14, lang: 'zh' },
    states: { view: 'content' },
    table: { filter: 'all', selected: new Set() },
    cmd: { q: '', active: 0 },
    profile: { following: false, tab: 0 },
  };

  const TODOS_TAGS = ['设计', '前端', '文档', '验收'];

  /* ------------------------------- 小工具 -------------------------------- */
  const doneCount = (s) => s.items.filter((i) => i.done).length;
  const pct = (s) => (s.items.length ? Math.round((doneCount(s) / s.items.length) * 100) : 0);

  function todoListHtml(s) {
    const list = s.items.filter((i) => s.filter === 'all' || (s.filter === 'open' ? !i.done : i.done));
    if (!list.length) {
      return `<div class="d-state-box" style="padding:22px 12px">
        <span class="d-state-ico">${I.inbox}</span>
        <p class="d-sm d-muted">这里还没有任务</p>
      </div>`;
    }
    return list
      .map(
        (i) => `<div class="d-todo-item${i.done ? ' is-done' : ''}" data-id="${i.id}">
        <button class="d-todo-check" type="button" aria-pressed="${i.done}" aria-label="切换完成状态" data-act="toggle">${I.check}</button>
        <span class="d-todo-text">${esc(i.text)}</span>
        <span class="d-todo-tag">${esc(i.tag)}</span>
        <button class="d-icon-btn" type="button" aria-label="删除任务" data-act="del">${I.trash}</button>
      </div>`
      )
      .join('');
  }

  function todoHtml(s) {
    const c = (f) => s.items.filter((i) => (f === 'all' ? true : f === 'open' ? !i.done : i.done)).length;
    return `<div class="d-col d-todo">
      <div class="d-row d-between" style="align-items:flex-end">
        <div>
          <p class="d-kicker">今天 · 待办</p>
          <h3 class="d-h2">任务清单</h3>
        </div>
        <div style="text-align:right">
          <b class="d-num" style="font-size:20px">${pct(s)}%</b>
          <p class="d-xs d-muted">${doneCount(s)} / ${s.items.length} 已完成</p>
        </div>
      </div>
      <div class="d-progress"><i style="width:${pct(s)}%"></i></div>
      <form class="d-todo-add" data-form="add">
        <input class="d-input" name="text" placeholder="添加一项待办，回车确认" aria-label="新待办" autocomplete="off">
        <button class="d-btn d-btn--primary" type="submit">${I.plus} 添加</button>
      </form>
      <div class="d-row d-gap-4 d-wrap">
        <button class="d-chip" type="button" data-filter="all" aria-pressed="${s.filter === 'all'}">全部 <span>${c('all')}</span></button>
        <button class="d-chip" type="button" data-filter="open" aria-pressed="${s.filter === 'open'}">进行中 <span>${c('open')}</span></button>
        <button class="d-chip" type="button" data-filter="done" aria-pressed="${s.filter === 'done'}">已完成 <span>${c('done')}</span></button>
      </div>
      <div class="d-todo-list" data-list>${todoListHtml(s)}</div>
      <div class="d-row d-between">
        <span class="d-xs d-muted">${s.items.filter((i) => !i.done).length} 项未完成</span>
        <button class="d-link d-xs" type="button" data-act="clear">清除已完成</button>
      </div>
    </div>`;
  }

  function authHtml(s) {
    if (s.ok) {
      return `<div class="d-col d-auth" style="justify-content:center;min-height:340px;text-align:center">
        <div class="d-avatar d-avatar--lg" style="margin:0 auto;background:var(--d-ok)">${I.check}</div>
        <h3 class="d-h2">登录成功</h3>
        <p class="d-sm d-muted">正在跳转到工作台…</p>
        <div class="d-ok-banner" style="justify-content:center">凭证已保存到本地设备</div>
        <button class="d-btn d-btn--ghost d-block" type="button" data-act="reset-auth">返回登录</button>
      </div>`;
    }
    return `<div class="d-col d-auth">
      <div class="d-logo">◆</div>
      <div>
        <h3 class="d-h2">欢迎回来</h3>
        <p class="d-sm d-muted" style="margin-top:3px">继续你的设计系统工作台</p>
      </div>
      <label class="d-field"><span>邮箱</span>
        <input class="d-input${s.error ? ' is-error' : ''}" name="email" type="email" placeholder="you@studio.com" autocomplete="off">
      </label>
      <label class="d-field"><span>密码</span>
        <span class="d-inputwrap">
          <input class="d-input${s.error ? ' is-error' : ''}" name="pw" type="${s.showPw ? 'text' : 'password'}" placeholder="至少 8 位字符" autocomplete="off">
          <button class="d-eye" type="button" data-act="toggle-pw" aria-label="显示或隐藏密码">${s.showPw ? '隐藏' : '显示'}</button>
        </span>
      </label>
      ${s.error ? `<p class="d-err" data-err>${esc(s.error)}</p>` : ''}
      <button class="d-btn d-btn--primary d-block" type="button" data-act="signin">登录</button>
      <div class="d-divider"><span>或</span></div>
      <button class="d-btn d-btn--ghost d-block" type="button" data-act="signin-sso">使用 SSO 继续</button>
      <p class="d-xs d-muted" style="text-align:center">忘记密码？<button class="d-link d-xs" type="button">重置</button></p>
    </div>`;
  }

  const DASH = {
    7: {
      label: '最近 7 天',
      kpis: [
        { k: '营收', v: '¥48,200', d: '+12.4%', up: true },
        { k: '活跃用户', v: '1,284', d: '+3.1%', up: true },
        { k: '转化率', v: '4.8%', d: '−0.6%', up: false },
      ],
      bars: [42, 58, 51, 73, 66, 88, 96],
    },
    30: {
      label: '最近 30 天',
      kpis: [
        { k: '营收', v: '¥196,400', d: '+8.2%', up: true },
        { k: '活跃用户', v: '5,412', d: '+6.7%', up: true },
        { k: '转化率', v: '4.5%', d: '−0.2%', up: false },
      ],
      bars: [34, 41, 52, 47, 61, 56, 70, 64, 74, 69, 82, 88],
    },
  };

  const TICKETS = [
    { id: '#4821', title: '深色模式下图表对比度不足', st: 'err', lb: '待复审', who: 'MC', t: '2 小时前' },
    { id: '#4818', title: '导出 CSS 时漏掉了卡片变量', st: 'warn', lb: '处理中', who: 'YL', t: '5 小时前' },
    { id: '#4809', title: '移动端筛选条横向溢出', st: 'ok', lb: '已解决', who: 'MC', t: '昨天' },
    { id: '#4802', title: '补齐 12 个应用示例', st: 'ok', lb: '已解决', who: 'CN', t: '昨天' },
    { id: '#4795', title: '对比度：次要文字 3.9:1', st: 'idle', lb: '已关闭', who: 'YL', t: '3 天前' },
  ];

  function dashRows() {
    return TICKETS.slice(0, 4)
      .map(
        (r) => `<tr>
        <td class="d-mono d-xs" style="color:var(--d-muted)">${r.id}</td>
        <td>${esc(r.title)}</td>
        <td><span class="d-status ${r.st}"><i class="d-dot"></i>${r.lb}</span></td>
        <td class="d-mono d-xs">${r.who}</td>
      </tr>`
      )
      .join('');
  }

  function dashHtml(s) {
    const d = DASH[s.period];
    const max = Math.max(...d.bars);
    return `<div class="d-col">
      <div class="d-row d-between d-wrap">
        <div>
          <p class="d-kicker">Overview</p>
          <h3 class="d-h2">运营概览</h3>
        </div>
        <div class="d-seg" role="group" aria-label="时间范围">
          <button type="button" data-period="7" aria-pressed="${s.period === 7}">7 天</button>
          <button type="button" data-period="30" aria-pressed="${s.period === 30}">30 天</button>
        </div>
      </div>
      <div class="d-kpis">
        ${d.kpis
          .map(
            (k) => `<div class="d-card d-kpi">
            <span class="d-kicker">${k.k}</span>
            <b class="d-num">${k.v}</b>
            <span class="d-delta ${k.up ? 'up' : 'down'}">${k.up ? '▲' : '▼'} ${k.d}</span>
          </div>`
          )
          .join('')}
      </div>
      <div class="d-card">
        <div class="d-row d-between" style="margin-bottom:2px">
          <span class="d-sm d-strong">每日活跃</span>
          <span class="d-xs d-muted">${d.label}</span>
        </div>
        <div class="d-bars">
          ${d.bars.map((b) => `<span style="height:${Math.round((b / max) * 100)}%" title="${b}"></span>`).join('')}
        </div>
      </div>
      <div class="d-card d-table">
        <table>
          <thead><tr><th>工单</th><th>标题</th><th>状态</th><th>负责人</th></tr></thead>
          <tbody>${dashRows()}</tbody>
        </table>
      </div>
    </div>`;
  }

  const PLANS = [
    { name: '入门', desc: '个人探索', m: 0, y: 0, cta: '免费开始', features: ['1 个项目', '基础令牌导出', '社区支持'] },
    { name: '专业', desc: '独立设计师', m: 68, y: 54, cta: '选择专业', featured: true, features: ['无限项目', 'CSS + Markdown 导出', '团队评论', '优先支持'] },
    { name: '团队', desc: '设计系统小组', m: 168, y: 134, cta: '联系销售', features: ['SSO 与权限', '设计系统审计', '私有组件库', '专属成功经理'] },
  ];

  function plansHtml(s) {
    return PLANS.map((p) => {
      const price = s.yearly ? p.y : p.m;
      return `<div class="d-card d-plan${p.featured ? ' is-featured' : ''}">
        ${p.featured ? '<span class="d-badge d-badge--accent">最受欢迎</span>' : ''}
        <span class="d-kicker">${p.name}</span>
        <div class="d-price">${price === 0 ? '¥0' : `¥${price}`}<small>/ 月</small></div>
        <p class="d-xs d-muted" style="margin-top:-4px">${s.yearly && price > 0 ? '按年计费，一次结清' : p.desc}</p>
        <div class="d-hr"></div>
        <ul>${p.features.map((f) => `<li>${I.check}<span>${f}</span></li>`).join('')}</ul>
        <button class="d-btn ${p.featured ? 'd-btn--primary' : ''} d-block" type="button" style="margin-top:auto">${p.cta}</button>
      </div>`;
    }).join('');
  }

  function pricingHtml(s) {
    return `<div class="d-col">
      <div style="text-align:center">
        <h3 class="d-h2">选择你的方案</h3>
        <p class="d-sm d-muted" style="margin-top:3px">随时可以升级或降级</p>
      </div>
      <div class="d-row d-center">
        <div class="d-seg" role="group" aria-label="计费周期">
          <button type="button" data-bill="m" aria-pressed="${!s.yearly}">月付</button>
          <button type="button" data-bill="y" aria-pressed="${s.yearly}">年付 · 省 20%</button>
        </div>
      </div>
      <div class="d-plans">${plansHtml(s)}</div>
      <p class="d-xs d-muted" style="text-align:center">价格不含税 · 支持随时取消</p>
    </div>`;
  }

  const TRACKS = [
    { title: 'Midnight Drive', artist: 'Kaito Mori', len: 252, cover: 'NOCTURNE' },
    { title: 'Analog Rain', artist: 'Sable', len: 228, cover: 'SABLE' },
    { title: 'Late Train', artist: 'Mono Lake', len: 302, cover: 'MONO LAKE' },
  ];
  const mmss = (sec) => `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, '0')}`;

  function playerHtml(s) {
    const t = TRACKS[s.track];
    const p = Math.min(s.progress, t.len);
    return `<div class="d-col d-player">
      <div class="d-cover"><span>${t.cover}</span></div>
      <div class="d-row d-between">
        <div style="min-width:0">
          <h3 class="d-h3">${t.title}</h3>
          <p class="d-xs d-muted">${t.artist}</p>
        </div>
        <button class="d-icon-btn" type="button" aria-label="收藏">${I.heart}</button>
      </div>
      <div class="d-progress d-progress--lg" data-seek style="cursor:pointer"><i data-fill style="width:${(p / t.len) * 100}%"></i></div>
      <div class="d-row d-between">
        <span class="d-time" data-cur>${mmss(p)}</span>
        <span class="d-time">${mmss(t.len)}</span>
      </div>
      <div class="d-row d-center d-gap-6">
        <button class="d-btn d-btn--ghost d-btn--icon" type="button" data-act="prev" aria-label="上一首">${I.prev}</button>
        <button class="d-play" type="button" data-act="play" aria-label="${s.playing ? '暂停' : '播放'}">${s.playing ? I.pause : I.play}</button>
        <button class="d-btn d-btn--ghost d-btn--icon" type="button" data-act="next" aria-label="下一首">${I.next}</button>
      </div>
      <div class="d-row d-gap-6">
        <span class="d-xs d-muted">音量</span>
        <input class="d-range" type="range" min="0" max="100" value="72" aria-label="音量">
      </div>
    </div>`;
  }

  function chatHtml(s) {
    return `<div class="d-chat">
      <div class="d-chat-head d-row d-between">
        <div class="d-row d-gap-6">
          <span class="d-avatar">M</span>
          <div>
            <b class="d-sm">Mia Chen</b>
            <p class="d-xs d-muted" style="display:flex;align-items:center;gap:4px"><i class="d-dot"></i>在线</p>
          </div>
        </div>
        <span class="d-badge">${s.msgs.length} 条</span>
      </div>
      <div class="d-chat-body" data-body>
        ${s.msgs
          .map(
            (m) => `<div class="d-bubble ${m.from === 'out' ? 'out' : ''}">${esc(m.text)}<time>${m.t}</time></div>`
          )
          .join('')}
        <div class="d-typing" aria-label="对方正在输入"><i></i><i></i><i></i></div>
      </div>
      <form class="d-composer" data-form="chat">
        <input class="d-input" name="msg" placeholder="输入消息…" aria-label="消息输入" autocomplete="off">
        <button class="d-btn d-btn--primary d-btn--icon" type="submit" aria-label="发送">${I.send}</button>
      </form>
    </div>`;
  }

  const COLORS = [
    { name: '沙', hex: '#d8c3a5' },
    { name: '墨', hex: '#33333a' },
    { name: '橄榄', hex: '#6b7f4a' },
  ];

  function shopHtml(s) {
    return `<div class="d-shop">
      <div class="d-product-img"><span>LINEN SHIRT</span></div>
      <div class="d-col" style="gap:9px">
        <div class="d-row d-gap-4 d-wrap">
          <span class="d-badge d-badge--accent">新品</span>
          <span class="d-badge">-33%</span>
        </div>
        <h3 class="d-h2">亚麻短袖衬衫</h3>
        <div class="d-row d-gap-6">
          <span class="d-stars">★★★★★</span>
          <span class="d-xs d-muted">4.8 · 126 条评价</span>
        </div>
        <div class="d-row d-gap-6">
          <b class="d-price">¥399<s>¥599</s></b>
        </div>
        <div>
          <p class="d-xs d-muted" style="margin-bottom:4px">颜色 · ${COLORS[s.color].name}</p>
          <div class="d-swatches">${COLORS.map((c, i) => `<button class="d-swatch" type="button" data-color="${i}" aria-pressed="${s.color === i}" aria-label="颜色 ${c.name}" style="background:${c.hex}"></button>`).join('')}</div>
        </div>
        <div>
          <p class="d-xs d-muted" style="margin-bottom:4px">尺码</p>
          <div class="d-sizes">${['S', 'M', 'L', 'XL'].map((z, i) => `<button class="d-size" type="button" data-size="${i}" aria-pressed="${s.size === i}">${z}</button>`).join('')}</div>
        </div>
        <button class="d-btn d-btn--primary d-block" type="button" data-act="add-cart">${I.cart} 加入购物车</button>
        <p class="d-xs d-muted">购物车里已有 <b data-cart>${s.cart}</b> 件 · 48 小时内发货</p>
      </div>
    </div>`;
  }

  function settingsHtml(s) {
    return `<div class="d-col d-settings">
      <div>
        <h3 class="d-h2">设置</h3>
        <p class="d-xs d-muted" style="margin-top:3px">这些控件决定界面的手感和密度</p>
      </div>
      <div class="d-card">
        <div class="d-setting">
          <div><b class="d-sm">桌面通知</b><p class="d-xs d-muted">新消息与提及时提醒</p></div>
          <button class="d-switch" type="button" role="switch" aria-checked="${s.notify}" data-switch="notify" aria-label="桌面通知"><i></i></button>
        </div>
        <div class="d-hr" style="margin:10px 0"></div>
        <div class="d-setting">
          <div><b class="d-sm">每周摘要</b><p class="d-xs d-muted">周一早上发送一封邮件</p></div>
          <button class="d-switch" type="button" role="switch" aria-checked="${s.digest}" data-switch="digest" aria-label="每周摘要"><i></i></button>
        </div>
      </div>
      <div class="d-card">
        <div class="d-setting">
          <div><b class="d-sm">外观</b><p class="d-xs d-muted">跟随系统或手动指定</p></div>
          <div class="d-seg" role="group" aria-label="外观">
            <button type="button" data-theme="light" aria-pressed="${s.theme === 'light'}">浅色</button>
            <button type="button" data-theme="dark" aria-pressed="${s.theme === 'dark'}">深色</button>
            <button type="button" data-theme="system" aria-pressed="${s.theme === 'system'}">系统</button>
          </div>
        </div>
        <div class="d-hr" style="margin:10px 0"></div>
        <div class="d-setting">
          <div style="flex:1">
            <b class="d-sm">正文字号</b>
            <p class="d-xs d-muted" style="margin-bottom:6px">用于长文本阅读</p>
            <div class="d-slider-row">
              <input class="d-range" type="range" min="12" max="20" value="${s.fontSize}" data-size-range aria-label="正文字号">
              <span class="d-slider-val" data-size-val>${s.fontSize}px</span>
            </div>
          </div>
        </div>
        <div class="d-hr" style="margin:10px 0"></div>
        <div class="d-setting">
          <b class="d-sm">语言</b>
          <select class="d-select" data-lang aria-label="语言">
            <option value="zh"${s.lang === 'zh' ? ' selected' : ''}>简体中文</option>
            <option value="en"${s.lang === 'en' ? ' selected' : ''}>English</option>
            <option value="ja"${s.lang === 'ja' ? ' selected' : ''}>日本語</option>
          </select>
        </div>
      </div>
      <p class="d-xs d-muted">字号预览：<span data-preview style="font-size:${s.fontSize}px">设计是内容与约束之间的对话。</span></p>
    </div>`;
  }

  function statesHtml(s) {
    let box = '';
    if (s.view === 'empty') {
      box = `<div class="d-state-box">
        <span class="d-state-ico">${I.inbox}</span>
        <b class="d-h3">还没有任何项目</b>
        <p class="d-xs d-muted" style="max-width:26ch">从一份设计令牌开始，或者导入现有主题。</p>
        <button class="d-btn d-btn--primary" type="button" data-act="create">${I.plus} 新建项目</button>
      </div>`;
    } else if (s.view === 'loading') {
      box = `<div class="d-card">
        <div class="d-skel-list">
          <div class="d-skel w40"></div>
          <div class="d-skel w80"></div>
          <div class="d-skel w60"></div>
          <div class="d-skel d-skel-card" style="margin-top:6px"></div>
          <div class="d-skel w60"></div>
        </div>
        <p class="d-xs d-muted" style="margin-top:12px">正在加载 3 个项目…</p>
      </div>`;
    } else {
      box = `<div class="d-col-tight">
        ${['品牌升级 · 2026 春', '风格标本册 v1.2', '低代码后台 · 设计交接']
          .map(
            (t, i) => `<div class="d-card d-row d-between" style="padding:10px 12px">
            <div class="d-row d-gap-6"><span class="d-avatar" style="width:24px;height:24px;font-size:9px">${String.fromCharCode(65 + i)}</span>
            <div><b class="d-sm">${t}</b><p class="d-xs d-muted">${8 + i * 3} 个页面 · 更新于 ${i + 1} 天前</p></div></div>
            <span class="d-status ok"><i class="d-dot"></i>进行中</span>
          </div>`
          )
          .join('')}
      </div>`;
    }
    return `<div class="d-col d-states">
      <div class="d-row d-between d-wrap">
        <div>
          <h3 class="d-h2">状态设计</h3>
          <p class="d-xs d-muted">空态、加载态与轻提示，同一套令牌</p>
        </div>
        <div class="d-seg" role="group" aria-label="内容状态">
          <button type="button" data-view="content" aria-pressed="${s.view === 'content'}">内容</button>
          <button type="button" data-view="empty" aria-pressed="${s.view === 'empty'}">空态</button>
          <button type="button" data-view="loading" aria-pressed="${s.view === 'loading'}">加载</button>
        </div>
      </div>
      <div data-state-box style="min-height:200px;display:grid;align-items:center">${box}</div>
      <div class="d-row d-gap-4 d-wrap">
        <button class="d-btn d-btn--sm" type="button" data-toast="ok">成功提示</button>
        <button class="d-btn d-btn--sm" type="button" data-toast="warn">警告提示</button>
        <button class="d-btn d-btn--sm" type="button" data-toast="err">错误提示</button>
      </div>
      <div class="d-toast-wrap" data-toasts></div>
    </div>`;
  }

  function tableRows(s) {
    const rows = TICKETS.filter((r) => s.filter === 'all' || r.st === s.filter);
    return rows
      .map(
        (r) => `<tr class="${s.selected.has(r.id) ? 'is-selected' : ''}" data-row="${r.id}">
        <td style="width:26px"><input class="d-check" type="checkbox" ${s.selected.has(r.id) ? 'checked' : ''} aria-label="选择 ${r.id}"></td>
        <td class="d-mono d-xs" style="color:var(--d-muted)">${r.id}</td>
        <td>${esc(r.title)}</td>
        <td><span class="d-status ${r.st}"><i class="d-dot"></i>${r.lb}</span></td>
        <td class="d-mono d-xs">${r.who}</td>
        <td class="d-xs d-muted">${r.t}</td>
      </tr>`
      )
      .join('');
  }

  function tableHtml(s) {
    return `<div class="d-col">
      <div class="d-row d-between d-wrap">
        <div>
          <h3 class="d-h2">工单</h3>
          <p class="d-xs d-muted">24 个未关闭 · 本周新增 7</p>
        </div>
        <div class="d-row d-gap-6 d-wrap">
          <select class="d-select d-input--sm" data-status aria-label="按状态筛选">
            <option value="all"${s.filter === 'all' ? ' selected' : ''}>全部状态</option>
            <option value="err"${s.filter === 'err' ? ' selected' : ''}>待复审</option>
            <option value="warn"${s.filter === 'warn' ? ' selected' : ''}>处理中</option>
            <option value="ok"${s.filter === 'ok' ? ' selected' : ''}>已解决</option>
          </select>
          <button class="d-btn d-btn--primary d-btn--sm" type="button">${I.plus} 新建</button>
        </div>
      </div>
      <div class="d-card d-table">
        <table>
          <thead><tr>
            <th style="width:26px"><input class="d-check" type="checkbox" data-all aria-label="全选"></th>
            <th>编号</th><th>标题</th><th>状态</th><th>负责人</th><th>更新</th>
          </tr></thead>
          <tbody data-rows>${tableRows(s)}</tbody>
        </table>
      </div>
      <div class="d-row d-between d-xs d-muted">
        <span>${s.selected.size ? `已选 ${s.selected.size} 项` : '1–5 / 24'}</span>
        <div class="d-row d-gap-4">
          <button class="d-btn d-btn--sm" type="button" disabled>上一页</button>
          <button class="d-btn d-btn--sm" type="button">下一页</button>
        </div>
      </div>
    </div>`;
  }

  const CMDS = [
    { g: '导航', items: [{ name: '打开风格库', key: 'G S' }, { name: '查看当前风格令牌', key: 'G T' }, { name: '查看 Markdown 指南', key: 'G M' }] },
    { g: '操作', items: [{ name: '复制整份 CSS', key: '⌘ C' }, { name: '复制当前场景色板', key: '⌘ ⇧ C' }, { name: '切换深浅主题', key: '⌘ ⇧ L' }, { name: '下载设计令牌 JSON', key: '⌘ D' }] },
  ];
  function cmdFlat() {
    return CMDS.flatMap((grp, gi) => grp.items.map((it, ii) => ({ ...it, g: grp.g, gi, ii })));
  }
  function cmdListHtml(s) {
    const q = s.q.trim().toLowerCase();
    let flat = cmdFlat().filter((it) => !q || (it.g + ' ' + it.name).toLowerCase().includes(q));
    if (!flat.length) return `<div style="padding:22px;text-align:center" class="d-xs d-muted">没有匹配的命令</div>`;
    if (s.active >= flat.length) s.active = 0;
    let out = '';
    let lastG = null;
    flat.forEach((it, idx) => {
      if (it.g !== lastG) {
        out += `<div class="d-cmd-group">${it.g}</div>`;
        lastG = it.g;
      }
      out += `<button class="d-cmd-item" type="button" data-idx="${idx}" aria-selected="${idx === s.active}">
        ${I.search}<span>${esc(it.name)}</span><small>${it.key}</small></button>`;
    });
    return out;
  }

  function cmdHtml(s) {
    return `<div class="d-cmd">
      <div class="d-cmd-panel">
        <div class="d-cmd-input">
          ${I.search}
          <input name="cmd" placeholder="搜索命令、页面或操作…" value="${esc(s.q)}" aria-label="搜索命令" autocomplete="off">
          <span class="d-badge">ESC</span>
        </div>
        <div class="d-cmd-list" data-cmd-list>${cmdListHtml(s)}</div>
        <div class="d-cmd-foot"><span><kbd>↑</kbd><kbd>↓</kbd> 选择</span><span><kbd>↵</kbd> 执行</span><span><kbd>esc</kbd> 关闭</span><span style="margin-left:auto">${cmdFlat().length} 个命令</span></div>
      </div>
      <div class="d-toast-wrap" data-toasts></div>
    </div>`;
  }

  function profileHtml(s) {
    const tabs = ['作品', '收藏', '关于'];
    const thumbs = ['品牌系统', '移动端', '字体试验'];
    return `<div class="d-col d-profile">
      <div class="d-cover-strip"></div>
      <div class="d-row d-between d-profile-head">
        <span class="d-avatar d-avatar--lg">MC</span>
        <button class="d-btn ${s.following ? '' : 'd-btn--primary'} d-btn--sm" type="button" data-act="follow">${s.following ? '已关注' : '关注'}</button>
      </div>
      <div>
        <h3 class="d-h2">Mia Chen</h3>
        <p class="d-xs d-muted">@miachen · 上海</p>
      </div>
      <p class="d-sm">界面设计师，正在做一本给同行看的风格标本册。相信约束比自由更能长出细节。</p>
      <div class="d-stats">
        <span><b>128</b>作品</span><span><b>2.4k</b>关注者</span><span><b>186</b>关注</span>
      </div>
      <div class="d-tabs" role="tablist">
        ${tabs.map((t, i) => `<button type="button" role="tab" data-ptab="${i}" aria-selected="${s.tab === i}">${t}</button>`).join('')}
      </div>
      <div class="d-thumbs">
        ${thumbs.map((t) => `<div class="d-thumb">${t}</div>`).join('')}
      </div>
    </div>`;
  }

  const RENDER = {
    todo: todoHtml,
    auth: authHtml,
    dash: dashHtml,
    pricing: pricingHtml,
    player: playerHtml,
    chat: chatHtml,
    shop: shopHtml,
    settings: settingsHtml,
    states: statesHtml,
    table: tableHtml,
    cmd: cmdHtml,
    profile: profileHtml,
  };

  /* -------------------------------- Toast -------------------------------- */
  const TOAST_META = {
    ok: { ico: I.ok, msg: '已保存更改' },
    warn: { ico: I.alert, msg: '网络不稳定，正在重试' },
    err: { ico: I.x, msg: '保存失败，请重试' },
  };
  function toast(root, kind, msg) {
    const wrap = root.querySelector('[data-toasts]');
    if (!wrap) return;
    const meta = TOAST_META[kind] || TOAST_META.ok;
    const el = document.createElement('div');
    el.className = `d-toast ${kind === 'ok' ? '' : kind}`;
    el.innerHTML = `${meta.ico}<span>${esc(msg || meta.msg)}</span>`;
    wrap.appendChild(el);
    setTimeout(() => {
      el.style.transition = 'opacity .2s ease, transform .2s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(4px)';
      setTimeout(() => el.remove(), 220);
    }, 2400);
  }

  /* ------------------------------- 交互绑定 ------------------------------ */
  let playerTimer = null;

  function mount(root, id) {
    if (playerTimer) {
      clearInterval(playerTimer);
      playerTimer = null;
    }
    const q = (sel) => root.querySelector(sel);
    const qa = (sel) => [...root.querySelectorAll(sel)];
    const rerenderList = (sel, html) => {
      const el = q(sel);
      if (el) el.innerHTML = html;
    };

    const click = (sel, fn) =>
      qa(sel).forEach((el) =>
        el.addEventListener('click', (e) => {
          e.preventDefault();
          fn(el, e);
        })
      );

    if (id === 'todo') {
      const s = S.todo;
      q('[data-form="add"]').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = q('[name="text"]');
        const text = input.value.trim();
        if (!text) {
          input.focus();
          return;
        }
        s.items.unshift({ id: ++uid, text, tag: TODOS_TAGS[s.items.length % TODOS_TAGS.length], done: false });
        input.value = '';
        refresh();
      });
      click('[data-filter]', (el) => {
        s.filter = el.dataset.filter;
        qa('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === s.filter)));
        rerenderList('[data-list]', todoListHtml(s));
      });
      q('[data-list]').addEventListener('click', (e) => {
        const btn = e.target.closest('[data-act]');
        const item = e.target.closest('.d-todo-item');
        if (!btn || !item) return;
        const target = s.items.find((i) => i.id === Number(item.dataset.id));
        if (!target) return;
        if (btn.dataset.act === 'toggle') target.done = !target.done;
        if (btn.dataset.act === 'del') s.items = s.items.filter((i) => i.id !== target.id);
        refresh();
      });
      click('[data-act="clear"]', () => {
        s.items = s.items.filter((i) => !i.done);
        refresh();
      });
      function refresh() {
        q('[data-list]').innerHTML = todoListHtml(s);
        q('.d-progress > i').style.width = pct(s) + '%';
        const head = q('.d-todo .d-num');
        if (head) head.textContent = pct(s) + '%';
        const sub = q('.d-todo .d-xs.d-muted');
        if (sub) sub.textContent = `${doneCount(s)} / ${s.items.length} 已完成`;
        qa('[data-filter]').forEach((b) => {
          const f = b.dataset.filter;
          const n = s.items.filter((i) => (f === 'all' ? true : f === 'open' ? !i.done : i.done)).length;
          b.innerHTML = `${f === 'all' ? '全部' : f === 'open' ? '进行中' : '已完成'} <span>${n}</span>`;
        });
      }
    }

    if (id === 'auth') {
      const s = S.auth;
      click('[data-act="toggle-pw"]', () => {
        s.showPw = !s.showPw;
        const inp = q('[name="pw"]');
        inp.type = s.showPw ? 'text' : 'password';
        q('[data-act="toggle-pw"]').textContent = s.showPw ? '隐藏' : '显示';
      });
      click('[data-act="signin"], [data-act="signin-sso"]', (el) => {
        const email = (q('[name="email"]')?.value || '').trim();
        if (el.dataset.act === 'signin' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          s.error = '请输入有效的邮箱地址';
          qa('[name="email"], [name="pw"]').forEach((i) => i.classList.add('is-error'));
          if (q('[data-err]')) q('[data-err]').textContent = s.error;
          else {
            const p = document.createElement('p');
            p.className = 'd-err';
            p.dataset.err = '';
            p.textContent = s.error;
            q('[data-act="signin"]').before(p);
          }
          q('[name="email"]').focus();
          return;
        }
        s.ok = true;
        s.error = '';
        paint();
      });
      click('[data-act="reset-auth"]', () => {
        s.ok = false;
        paint();
      });
      function paint() {
        const holder = document.createElement('div');
        holder.innerHTML = authHtml(s);
        const next = holder.firstElementChild;
        q('.d-auth').replaceWith(next);
        mount(root, 'auth');
      }
    }

    if (id === 'dash') {
      const s = S.dash;
      click('[data-period]', (el) => {
        s.period = Number(el.dataset.period);
        const holder = document.createElement('div');
        holder.innerHTML = dashHtml(s);
        q('.demo-canvas > *').replaceWith(holder.firstElementChild);
        mount(root, 'dash');
      });
    }

    if (id === 'pricing') {
      const s = S.pricing;
      click('[data-bill]', (el) => {
        s.yearly = el.dataset.bill === 'y';
        qa('[data-bill]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.bill === el.dataset.bill)));
        rerenderList('.d-plans', plansHtml(s));
      });
    }

    if (id === 'player') {
      const s = S.player;
      const tick = () => {
        const t = TRACKS[s.track];
        s.progress = Math.min(s.progress + 1, t.len);
        const fill = q('[data-fill]');
        const cur = q('[data-cur]');
        if (fill) fill.style.width = (s.progress / t.len) * 100 + '%';
        if (cur) cur.textContent = mmss(s.progress);
        if (s.progress >= t.len) {
          s.playing = false;
          clearInterval(playerTimer);
          playerTimer = null;
          const btn = q('[data-act="play"]');
          if (btn) btn.innerHTML = I.play;
        }
      };
      if (s.playing) playerTimer = setInterval(tick, 1000);
      click('[data-act="play"]', (el) => {
        s.playing = !s.playing;
        el.innerHTML = s.playing ? I.pause : I.play;
        if (playerTimer) {
          clearInterval(playerTimer);
          playerTimer = null;
        }
        if (s.playing) playerTimer = setInterval(tick, 1000);
      });
      click('[data-act="next"], [data-act="prev"]', (el) => {
        s.track = (s.track + (el.dataset.act === 'next' ? 1 : TRACKS.length - 1)) % TRACKS.length;
        s.progress = 0;
        const holder = document.createElement('div');
        holder.innerHTML = playerHtml(s);
        q('.d-player').replaceWith(holder.firstElementChild);
        mount(root, 'player');
      });
      const seek = q('[data-seek]');
      if (seek)
        seek.addEventListener('click', (e) => {
          const r = seek.getBoundingClientRect();
          s.progress = Math.round(((e.clientX - r.left) / r.width) * TRACKS[s.track].len);
          tick();
        });
    }

    if (id === 'chat') {
      const s = S.chat;
      const body = q('[data-body]');
      const typing = body.querySelector('.d-typing');
      body.scrollTop = body.scrollHeight;
      q('[data-form="chat"]').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = q('[name="msg"]');
        const text = input.value.trim();
        if (!text) return;
        const now = new Date();
        const t = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        s.msgs.push({ from: 'out', text, t });
        const el = document.createElement('div');
        el.className = 'd-bubble out';
        el.innerHTML = `${esc(text)}<time>${t}</time>`;
        body.insertBefore(el, typing);
        input.value = '';
        body.scrollTop = body.scrollHeight;
        q('.d-badge').textContent = `${s.msgs.length} 条`;
      });
    }

    if (id === 'shop') {
      const s = S.shop;
      click('[data-color]', (el) => {
        s.color = Number(el.dataset.color);
        qa('[data-color]').forEach((b) => b.setAttribute('aria-pressed', String(b === el)));
        const label = q('.d-shop p.d-xs.d-muted');
        if (label) label.textContent = `颜色 · ${COLORS[s.color].name}`;
      });
      click('[data-size]', (el) => {
        s.size = Number(el.dataset.size);
        qa('[data-size]').forEach((b) => b.setAttribute('aria-pressed', String(b === el)));
      });
      click('[data-act="add-cart"]', () => {
        s.cart += 1;
        const b = q('[data-cart]');
        if (b) b.textContent = String(s.cart);
        const wrap = document.createElement('div');
        wrap.className = 'd-toast-wrap';
        root.appendChild(wrap);
        wrap.innerHTML = `<div class="d-toast">${I.ok}<span>已加入购物车 · ${COLORS[s.color].name}</span></div>`;
        setTimeout(() => wrap.remove(), 2400);
      });
    }

    if (id === 'settings') {
      const s = S.settings;
      click('[data-switch]', (el) => {
        const key = el.dataset.switch;
        s[key] = !s[key];
        el.setAttribute('aria-checked', String(s[key]));
      });
      click('[data-theme]', (el) => {
        s.theme = el.dataset.theme;
        qa('[data-theme]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.theme === s.theme)));
      });
      const range = q('[data-size-range]');
      if (range)
        range.addEventListener('input', () => {
          s.fontSize = Number(range.value);
          q('[data-size-val]').textContent = s.fontSize + 'px';
          q('[data-preview]').style.fontSize = s.fontSize + 'px';
        });
      const lang = q('[data-lang]');
      if (lang) lang.addEventListener('change', () => (s.lang = lang.value));
    }

    if (id === 'states') {
      const s = S.states;
      click('[data-view]', (el) => {
        s.view = el.dataset.view;
        qa('[data-view]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === s.view)));
        const holder = document.createElement('div');
        holder.innerHTML = statesHtml(s);
        q('.d-states').replaceWith(holder.firstElementChild);
        mount(root, 'states');
      });
      click('[data-toast]', (el) => toast(root, el.dataset.toast));
      click('[data-act="create"]', () => {
        toast(root, 'ok', '已创建项目草稿');
      });
    }

    if (id === 'table') {
      const s = S.table;
      const rows = q('[data-rows]');
      rows.addEventListener('click', (e) => {
        const tr = e.target.closest('[data-row]');
        if (!tr) return;
        const rid = tr.dataset.row;
        if (e.target.matches('input[type="checkbox"]') || e.target.closest('td') === tr.children[0]) {
          if (s.selected.has(rid)) s.selected.delete(rid);
          else s.selected.add(rid);
        } else {
          if (s.selected.has(rid)) s.selected.delete(rid);
          else s.selected.add(rid);
        }
        tr.classList.toggle('is-selected', s.selected.has(rid));
        const cb = tr.querySelector('input[type="checkbox"]');
        if (cb) cb.checked = s.selected.has(rid);
        const foot = q('.d-col > .d-row.d-between.d-xs.d-muted span');
        if (foot) foot.textContent = s.selected.size ? `已选 ${s.selected.size} 项` : '1–5 / 24';
      });
      const status = q('[data-status]');
      if (status)
        status.addEventListener('change', () => {
          s.filter = status.value;
          s.selected.clear();
          rows.innerHTML = tableRows(s);
          const all = q('[data-all]');
          if (all) all.checked = false;
        });
      const all = q('[data-all]');
      if (all)
        all.addEventListener('change', () => {
          const ids = TICKETS.filter((r) => s.filter === 'all' || r.st === s.filter).map((r) => r.id);
          s.selected = new Set(all.checked ? ids : []);
          rows.innerHTML = tableRows(s);
        });
    }

    if (id === 'cmd') {
      const s = S.cmd;
      const input = q('[name="cmd"]');
      const list = q('[data-cmd-list]');
      const repaint = () => {
        list.innerHTML = cmdListHtml(s);
        bindItems();
      };
      const bindItems = () =>
        qa('[data-idx]').forEach((el) =>
          el.addEventListener('click', () => {
            s.active = Number(el.dataset.idx);
            repaint();
            const name = cmdFlat().filter((x) => !s.q.trim() || (x.g + ' ' + x.name).toLowerCase().includes(s.q.trim().toLowerCase()))[s.active];
            if (name) toast(root, 'ok', `已执行：${name.name}`);
          })
        );
      bindItems();
      input.addEventListener('input', () => {
        s.q = input.value;
        s.active = 0;
        repaint();
      });
      input.addEventListener('keydown', (e) => {
        const flat = cmdFlat().filter((x) => !s.q.trim() || (x.g + ' ' + x.name).toLowerCase().includes(s.q.trim().toLowerCase()));
        if (!flat.length) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          s.active = (s.active + (e.key === 'ArrowDown' ? 1 : flat.length - 1)) % flat.length;
          repaint();
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          toast(root, 'ok', `已执行：${flat[s.active].name}`);
        }
      });
    }

    if (id === 'profile') {
      const s = S.profile;
      click('[data-act="follow"]', (el) => {
        s.following = !s.following;
        el.textContent = s.following ? '已关注' : '关注';
        el.classList.toggle('d-btn--primary', !s.following);
      });
      click('[data-ptab]', (el) => {
        s.tab = Number(el.dataset.ptab);
        qa('[data-ptab]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.ptab === el.dataset.ptab)));
      });
    }
  }

  window.DSG_DEMOS = {
    scenes: SCENES,
    render(id) {
      const fn = RENDER[id];
      return fn ? fn(S[id]) : '';
    },
    mount,
    state: S,
  };
})();

export default window.DSG_DEMOS;
