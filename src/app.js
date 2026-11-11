import DATA from './data/styles.js';
import DEMOS_MODULE from './demos.js';

/* Design Style Gallery — 交互
   纯原生 JS：搜索 / 分类 / 明暗 / 详情面板 / 令牌表 / Markdown 指南。
   ========================================================================= */
(() => {
  'use strict';


  const STYLES = DATA.styles;
  const CATS = DATA.cats;
  const BUILD = DATA.build || '0';
  const CAT_MAP = new Map(CATS.map((c, i) => [c.id, { ...c, no: i + 1 }]));
  const ORDER = new Map(STYLES.map((s, i) => [s.slug, i]));

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad3 = (n) => String(n).padStart(3, '0');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const state = {
    q: '',
    cat: 'all',
    slug: null,
    tab: 'overview',
    scene: 'todo',
  };

  /** 每个风格的令牌字典：--token → 值 */
  const varsCache = new Map();
  function varsOf(s) {
    if (varsCache.has(s.slug)) return varsCache.get(s.slug);
    const map = {};
    for (const g of s.groups) for (const row of g.rows) map[row[0]] = row[2];
    varsCache.set(s.slug, map);
    return map;
  }

  /* ------------------------------ 卡片预览 ------------------------------ */
  function artStyle(s) {
    const v = varsOf(s);
    const deco = s.deco || v['--color-bg'];
    const decl = [
      `background:${deco}`,
      `--a-bg:${v['--color-bg']}`,
      `--a-surface:${v['--color-surface']}`,
      `--a-fg:${v['--color-fg']}`,
      `--a-primary:${v['--color-primary']}`,
      `--a-accent:${v['--color-accent']}`,
      `--a-accent2:${v['--color-accent-2']}`,
      `--a-border:${v['--color-border']}`,
      `--a-bw:${s.borderW}px`,
      `--a-r:${s.radius.control}px`,
      `--a-r2:${s.radius.card}px`,
      `--a-sh:${v['--shadow-control']}`,
      `--a-blur:${s.blur || 'none'}`,
      `--a-font:${v['--font-body']}`,
      `--a-mono:${v['--font-mono']}`,
      `--a-serif:${v['--font-display']}`,
      `--a-track:${v['--type-tracking']}`,
    ];
    return decl.join(';');
  }

  function cardHtml(s) {
    const i = ORDER.get(s.slug);
    return `<article class="card" data-slug="${s.slug}" tabindex="0" role="button"
        aria-label="${esc(s.zh)} ${esc(s.en)}，查看设计指导">
      <div class="art art--${s.preview}" style="${artStyle(s)}">
        <span class="idx">${pad3(i + 1)}</span>
        <div class="stage">
          <span class="sh sh1"></span>
          <span class="sh sh2"></span>
          <span class="fld"><i></i>搜索</span>
        </div>
      </div>
      <div class="card-foot">
        <div style="min-width:0">
          <h3 class="card-title">${esc(s.zh)}</h3>
          <p class="card-en">${esc(s.en)}</p>
        </div>
        <span class="detail">详情</span>
      </div>
    </article>`;
  }

  /* -------------------------------- 筛选 -------------------------------- */
  const chipsEl = $('#chips');
  const gridEl = $('#grid');
  const emptyEl = $('#empty');
  const filterNote = $('#filterNote');

  function counts() {
    const map = new Map([['all', STYLES.length]]);
    for (const c of CATS) map.set(c.id, STYLES.filter((s) => s.cat === c.id).length);
    return map;
  }

  function renderChips() {
    const c = counts();
    const chip = (id, label, n) =>
      `<button class="chip" type="button" data-cat="${id}" aria-pressed="${state.cat === id}">${label}<b>${String(n).padStart(2, '0')}</b></button>`;
    chipsEl.innerHTML =
      chip('all', '全部', c.get('all')) +
      CATS.map((cat) => chip(cat.id, cat.zh, c.get(cat.id))).join('');
  }

  function visible() {
    const q = state.q.trim().toLowerCase();
    return STYLES.filter((s) => {
      if (state.cat !== 'all' && s.cat !== state.cat) return false;
      if (!q) return true;
      const hay = [s.zh, s.en, s.era, s.desc, s.best, s.avoid, ...(s.tags || []), CAT_MAP.get(s.cat).zh]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }

  function renderGrid(animate = true) {    const list = visible();
    gridEl.setAttribute('aria-busy', 'true');
    gridEl.innerHTML = list.map(cardHtml).join('');
    emptyEl.hidden = list.length > 0;

    const active = state.cat === 'all' ? null : CAT_MAP.get(state.cat);
    if (state.q && active && list.length === 0) {
      const q = state.q.trim().toLowerCase();
      const elsewhere = STYLES.filter((s) =>
        [s.zh, s.en, s.era, s.desc, s.best, s.avoid, ...(s.tags || [])].join(' ').toLowerCase().includes(q)
      ).length;
      filterNote.innerHTML = elsewhere
        ? `「${esc(active.zh)}」内无匹配 · 全部收藏 <b>${elsewhere}</b> 种`
        : `找到 <b>0</b> 种`;
    } else {
      filterNote.innerHTML = active
        ? `找到 <b>${list.length}</b> 种 · ${active.zh}`
        : state.q
          ? `找到 <b>${list.length}</b> 种 · “${esc(state.q)}”`
          : `<b>${list.length}</b> 种风格 · 08 类`;
    }

    gridEl.setAttribute('aria-busy', 'false');

    const cards = $$('.card', gridEl);
    if (!animate || reduceMotion) {
      cards.forEach((c) => c.classList.add('in'));
      return;
    }
    if (!('IntersectionObserver' in window)) {
      cards.forEach((c) => c.classList.add('in'));
      return;
    }
    cards.forEach((c, i) => {
      if (i < 12) setTimeout(() => c.classList.add('in'), i * 34);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const i = Number(el.dataset.i || 0);
          setTimeout(() => el.classList.add('in'), Math.min(Math.max(i - 12, 0), 8) * 40);
          io.unobserve(el);
        });
      },
      { rootMargin: '120px 0px' }
    );
    cards.forEach((c, i) => {
      c.dataset.i = i;
      if (i >= 12) io.observe(c);
    });
  }

  /* -------------------------------- 主题 -------------------------------- */
  const root = document.documentElement;
  const themeBtn = $('#themeBtn');
  const themeIcon = $('#themeIcon');

  function paintTheme(theme) {
    root.dataset.theme = theme;
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f1011' : '#f1eee7');
    themeIcon.innerHTML =
      theme === 'dark'
        ? `<path d="M13.4 9.6A5.6 5.6 0 0 1 6.4 2.6a5.6 5.6 0 1 0 7 7Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>`
        : `<circle cx="8" cy="8" r="3.2" stroke="currentColor" stroke-width="1.2"/><path d="M8 .8v1.6M8 13.6v1.6M.8 8h1.6M13.6 8h1.6M2.9 2.9l1.1 1.1M12 12l1.1 1.1M13.1 2.9 12 4M4 12l-1.1 1.1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`;
    themeBtn.setAttribute('aria-label', theme === 'dark' ? '切换到浅色主题' : '切换到深色主题');
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem('dsg-theme');
    } catch {}
    const param = new URLSearchParams(location.search).get('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    paintTheme(param === 'dark' || param === 'light' ? param : saved || (prefers ? 'dark' : 'light'));
  }

  themeBtn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    paintTheme(next);
    try {
      localStorage.setItem('dsg-theme', next);
    } catch {}
  });

  /* ------------------------------ 详情面板 ------------------------------ */
  const sheet = $('#sheet');
  const panel = $('#sheetPanel');
  const sheetBody = $('#sheetBody');
  const sheetTitle = $('#sheetTitle');
  const sheetEn = $('#sheetEn');
  const sheetCat = $('#sheetCat');
  const sheetPos = $('#sheetPos');
  const prevBtn = $('#prevBtn');
  const nextBtn = $('#nextBtn');
  const dlMd = $('#dlMd');
  const copyCss = $('#copyCss');

  const mdCache = new Map();
  function getMd(slug) {
    if (!mdCache.has(slug)) {
      mdCache.set(
        slug,
        fetch(`/styles/${slug}.md?v=${BUILD}`)
          .then((r) => (r.ok ? r.text() : Promise.reject(new Error(`HTTP ${r.status}`))))
          .catch(() => '# 指南加载失败\n\n请稍后重试，或直接访问 /styles/' + slug + '.md')
      );
    }
    return mdCache.get(slug);
  }

  function applyVars(s) {
    for (const [name, value] of Object.entries(varsOf(s))) panel.style.setProperty(name, value);
  }

  function paletteHtml(s) {
    const keys = [
      ['bg', '--color-bg'],
      ['surface', '--color-surface'],
      ['fg', '--color-fg'],
      ['primary', '--color-primary'],
      ['accent', '--color-accent'],
      ['accent2', '--color-accent-2'],
      ['border', '--color-border'],
      ['muted', '--color-muted'],
    ];
    return `<div class="palette">${keys
      .map(([k, token]) => {
        const value = s.colors[k];
        return `<div class="sw"><i style="background:${esc(value)}"></i><em>${token.replace('--color-', '')}</em><code>${esc(value)}</code></div>`;
      })
      .join('')}</div>`;
  }

  function demoHtml(s) {
    return `<div class="demo">
      <button class="demo-btn" type="button">主要操作</button>
      <div class="demo-input"><span>搜索风格…</span></div>
      <div class="demo-card">
        <h4>${esc(s.zh)} · 组件预览</h4>
        <p>控制高度 ${s.density.controlH}px · 圆角 ${s.radius.control}px · 卡片 ${s.radius.card}px · 描边 ${s.borderW}px</p>
      </div>
      <div class="demo-meta"><span>button-bg</span><span>input-border</span><span>card-shadow</span><span>blur: ${esc(s.blur || 'none')}</span></div>
    </div>`;
  }

  function overviewHtml(s) {
    const cat = CAT_MAP.get(s.cat);
    const tags = (s.tags || []).map((t) => `<span>${esc(t)}</span>`).join('');
    return `
      <p class="ov-lede">${esc(s.desc)}</p>
      <dl class="ov-grid">
        <div class="ov-cell"><dt>类别 / Category</dt><dd>${esc(cat.zh)} · ${esc(cat.en)}</dd></div>
        <div class="ov-cell"><dt>年代 / Era</dt><dd>${esc(s.era)}</dd></div>
        <div class="ov-cell span2"><dt>关键词 / Tags</dt><dd class="tags">${tags}</dd></div>
        <div class="ov-cell span2"><dt>适合 / Best for</dt><dd>${esc(s.best)}</dd></div>
        <div class="ov-cell span2"><dt>慎用 / Avoid</dt><dd>${esc(s.avoid)}</dd></div>
      </dl>

      <div class="h3-row"><h3>组件预览</h3><span>Live · tokens applied</span></div>
      ${demoHtml(s)}

      <div class="h3-row"><h3>色板</h3><span>Palette</span></div>
      ${paletteHtml(s)}

      <div class="h3-row"><h3>设计特征</h3><span>Visual grammar</span></div>
      <ul class="notes">${(s.notes || []).map((n) => `<li>${esc(n)}</li>`).join('')}</ul>

      <div class="h3-row"><h3>实施要点</h3><span>Implementation</span></div>
      <ul class="notes numbered">${(s.impl || []).map((n) => `<li>${esc(n)}</li>`).join('')}</ul>

      <div class="h3-row"><h3>常见反例</h3><span>Pitfalls</span></div>
      <ul class="notes pitfall">${(s.pitfalls || []).map((n) => `<li>${esc(n)}</li>`).join('')}</ul>
    `;
  }

  function tokensHtml(s) {
    const groups = s.groups
      .map((g, i) => {
        const rows = g.rows
          .map(([name, prop, value, kind]) => {
            const swatch =
              kind === 'swatch' || kind === 'color'
                ? `<span class="chip-sw"><i style="background:${esc(value)}"></i></span>`
                : '';
            return `<div class="tok-row">
              <code class="n">${esc(name)}</code>
              <span class="tok-prop">${esc(prop)}</span>
              <span class="tok-val">${swatch}<span>${esc(value)}</span></span>
            </div>`;
          })
          .join('');
        return `<section class="tok-group">
          <div class="tok-head">
            <span class="tok-no">${String(i + 1).padStart(2, '0')}</span>
            <h3>${esc(g.zh)}</h3>
            <span class="tok-en">${esc(g.en)}</span>
            <p>${esc(g.note)}</p>
          </div>
          ${rows}
        </section>`;
      })
      .join('');
    return `<p class="ov-lede" style="font-size:15px;line-height:1.65;margin-bottom:18px">
        全部 ${s.groups.reduce((n, g) => n + g.rows.length, 0)} 个令牌分三层：语义层（色彩 / 排版 / 形状 / 间距）→ 组件层（按钮 / 输入框 / 卡片）。
        组件只引用语义层，改主题时只动上面那一段即可。</p>${groups}`;
  }

  async function mdHtml(s) {
    const md = await getMd(s.slug);
    const kb = (new Blob([md]).size / 1024).toFixed(1);
    return `<div class="md-bar">
        <span>markdown · ${kb} KB · ${md.split('\n').length} lines</span>
        <button class="mini-btn" type="button" data-copy-md>复制 Markdown</button>
      </div>
      <pre class="md" tabindex="0">${esc(md)}</pre>`;
  }

  const DEMOS = () => DEMOS_MODULE || null;

  /* 主按钮（primary / on-primary）对比度：只在两者都是纯色时计算 */
  function aaHint(s) {
    const hex = (v) => (/^#[0-9a-f]{6}$/i.test(v) ? v : null);
    const a = hex(s.colors.primary);
    const b = hex(s.colors.onPrimary);
    if (!a || !b) return '';
    const lum = (h) => {
      const ch = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((c) =>
        c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
      );
      return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
    };
    const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
    const ratio = (hi + 0.05) / (lo + 0.05);
    if (ratio >= 4.5) return '';
    return `<span class="demo-tok is-warn">主按钮对比 ${ratio.toFixed(1)}:1 · 低于 AA</span>`;
  }

  function demoShellHtml(s) {
    const d = DEMOS();
    if (!d) return '<p class="md-loading">应用示例脚本未加载，请刷新页面。</p>';
    const scenes = d.scenes;
    const active = scenes.find((x) => x.id === state.scene) || scenes[0];
    state.scene = active.id;
    return `<div class="demo-toolbar" role="tablist" aria-label="应用场景">
        ${scenes
          .map(
            (sc) =>
              `<button class="demo-scene" type="button" role="tab" data-scene="${sc.id}" aria-pressed="${sc.id === active.id}">${esc(sc.zh)}<b>${esc(sc.en)}</b></button>`
          )
          .join('')}
      </div>
      <div class="demo-frame">
        <div class="demo-canvas" id="demoCanvas" style="background:${esc(s.deco || 'var(--color-bg)')};--readable-on-accent:${s.readableOnAccent || '#fff'}"></div>
      </div>
      <div class="demo-note">
        <b>${esc(active.zh)} · ${esc(active.en)}</b>
        <span>${esc(active.hint)}</span>
        ${aaHint(s)}
        ${active.tokens.map((t) => `<span class="demo-tok">${esc(t)}</span>`).join('')}
      </div>`;
  }

  function mountDemo() {
    const d = DEMOS();
    const canvas = $('#demoCanvas');
    if (!d || !canvas) return;
    canvas.innerHTML = d.render(state.scene);
    d.mount(canvas, state.scene);
  }

  function renderTab() {
    const s = STYLES[ORDER.get(state.slug)];
    if (!s) return;
    if (state.tab === 'demo') {
      sheetBody.innerHTML = demoShellHtml(s);
      mountDemo();
    } else if (state.tab === 'tokens') {
      sheetBody.innerHTML = tokensHtml(s);
    } else if (state.tab === 'md') {
      sheetBody.innerHTML = `<p class="md-loading">读取 ${esc(s.slug)}.md …</p>`;
      mdHtml(s).then((html) => {
        if (state.tab === 'md' && state.slug === s.slug) sheetBody.innerHTML = html;
      });
    } else {
      sheetBody.innerHTML = overviewHtml(s);
    }
    $$('.tab').forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === state.tab)));
    sheetBody.scrollTop = 0;
  }

  let lastFocus = null;
  function openSheet(slug, { push = true, tab = 'overview' } = {}) {
    const idx = ORDER.get(slug);
    if (idx === undefined) return;
    const s = STYLES[idx];
    lastFocus = document.activeElement;
    state.slug = slug;
    state.tab = ['overview', 'demo', 'tokens', 'md'].includes(tab) ? tab : 'overview';

    applyVars(s);
    sheetCat.textContent = `${String(CAT_MAP.get(s.cat).no).padStart(2, '0')} — ${CAT_MAP.get(s.cat).zh} / ${CAT_MAP.get(s.cat).en}`;
    sheetTitle.textContent = s.zh;
    sheetEn.textContent = `${s.en} · ${s.era}`;
    dlMd.href = `/styles/${s.slug}.md?v=${BUILD}`;
    dlMd.setAttribute('download', `${s.slug}-design-guide.md`);
    copyCss.textContent = '复制 CSS';
    copyCss.classList.remove('done');

    const prev = STYLES[(idx - 1 + STYLES.length) % STYLES.length];
    const next = STYLES[(idx + 1) % STYLES.length];
    prevBtn.querySelector('span').textContent = prev.zh;
    nextBtn.querySelector('span').textContent = next.zh;
    prevBtn.dataset.slug = prev.slug;
    nextBtn.dataset.slug = next.slug;
    sheetPos.textContent = `${pad3(idx + 1)} / ${STYLES.length}`;

    renderTab();
    sheet.hidden = false;
    document.body.classList.add('is-locked');
    panel.focus({ preventScroll: true });

    if (push) {
      const hash = `#/s/${slug}`;
      if (location.hash !== hash) history.pushState({ slug }, '', hash);
    }
  }

  function closeSheet({ push = true } = {}) {
    if (sheet.hidden) return;
    sheet.hidden = true;
    document.body.classList.remove('is-locked');
    state.slug = null;
    if (push) history.pushState({}, '', location.pathname + location.search);
    if (lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true });
  }

  function navigate(dir) {
    const idx = ORDER.get(state.slug);
    if (idx === undefined) return;
    const next = STYLES[(idx + dir + STYLES.length) % STYLES.length];
    openSheet(next.slug, { push: true });
  }

  /* ------------------------------ 事件绑定 ------------------------------ */
  chipsEl.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    state.cat = chip.dataset.cat;
    renderChips();
    renderGrid();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  gridEl.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) openSheet(card.dataset.slug);
  });

  gridEl.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.card');
    if (!card) return;
    e.preventDefault();
    openSheet(card.dataset.slug);
  });

  $('#resetFilter').addEventListener('click', () => {
    state.q = '';
    state.cat = 'all';
    $('#search').value = '';
    renderChips();
    renderGrid();
  });

  const searchEl = $('#search');
  let searchTimer = null;
  searchEl.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.q = searchEl.value;
      renderGrid(false);
    }, 90);
  });
  searchEl.addEventListener('keydown', (e) => {
    if (e.isComposing) return; // 输入法组字中的 Enter / Esc 不属于本组件
    if (e.key === 'Escape' && searchEl.value) {
      e.preventDefault();
      clearTimeout(searchTimer);
      searchEl.value = '';
      state.q = '';
      renderGrid(false);
      return;
    }
    if (e.key === 'Enter') {
      const first = $('.card', gridEl);
      if (first) openSheet(first.dataset.slug);
    }
  });

  $('#shuffleBtn').addEventListener('click', () => {
    let pick = STYLES[Math.floor(Math.random() * STYLES.length)];
    if (STYLES.length > 2 && pick.slug === state.slug) pick = STYLES[(ORDER.get(pick.slug) + 1) % STYLES.length];
    openSheet(pick.slug);
  });

  sheet.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeSheet();
  });

  $$('.tab').forEach((t) =>
    t.addEventListener('click', () => {
      state.tab = t.dataset.tab;
      renderTab();
    })
  );

  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));

  document.addEventListener('keydown', (e) => {
    const mod = e.metaKey || e.ctrlKey;
    if (mod && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchEl.focus();
      searchEl.select();
      return;
    }
    if (e.key === 'Escape') {
      if (!sheet.hidden) closeSheet();
      return;
    }
    if (sheet.hidden) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'Tab') {
      // 简单焦点环：把焦点限制在面板内
      const f = $$('button, a[href], [tabindex="0"]', panel).filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    }
  }

  function flash(btn, label) {
    const old = btn.textContent;
    btn.textContent = label;
    btn.classList.add('done');
    setTimeout(() => {
      btn.textContent = old;
      btn.classList.remove('done');
    }, 1400);
  }

  copyCss.addEventListener('click', async () => {
    const s = STYLES[ORDER.get(state.slug)];
    if (!s) return;
    const md = await getMd(s.slug);
    const blocks = [...md.matchAll(/```css\n([\s\S]*?)```/g)].map((m) => m[1].trim());
    const text = `/* ${s.zh} · ${s.en} — design tokens */\n\n${s.root}\n\n/* ------------------------------ components ------------------------------ */\n\n${blocks.join('\n\n')}`;
    const ok = await copyText(text);
    flash(copyCss, ok ? '已复制 CSS' : '复制失败');
  });

  sheetBody.addEventListener('click', async (e) => {
    const sceneBtn = e.target.closest('[data-scene]');
    if (sceneBtn) {
      state.scene = sceneBtn.dataset.scene;
      renderTab();
      return;
    }
    const btn = e.target.closest('[data-copy-md]');
    if (!btn) return;
    const s = STYLES[ORDER.get(state.slug)];
    if (!s) return;
    const md = await getMd(s.slug);
    const ok = await copyText(md);
    flash(btn, ok ? '已复制' : '复制失败');
  });

  window.addEventListener('popstate', () => {
    const parsed = parseHash();
    if (parsed) openSheet(parsed.slug, { push: false, tab: parsed.tab });
    else closeSheet({ push: false });
  });

  function parseHash() {
    const m = location.hash.match(/^#\/s\/([\w-]+)(?:\?tab=(\w+))?$/);
    if (!m || !ORDER.has(m[1])) return null;
    return { slug: m[1], tab: m[2] || 'overview' };
  }

  /* ------------------------------- 启动 -------------------------------- */
  function boot() {
    initTheme();
    $('#brandCount').textContent = String(STYLES.length);
    $('#heroCount').textContent = String(STYLES.length);
    $('#statStyles').textContent = String(STYLES.length);
    $('#statMd').textContent = String(STYLES.length);
    $('#statCats').textContent = String(CATS.length).padStart(2, '0');
    const tokenCount = STYLES[0].groups.reduce((n, g) => n + g.rows.length, 0);
    $$('[data-token-count]').forEach((el) => (el.textContent = String(tokenCount)));
    renderChips();
    renderGrid(true);

    const parsed = parseHash();
    if (parsed) openSheet(parsed.slug, { push: false, tab: parsed.tab });
  }

  boot();
})();
