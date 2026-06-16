/* ============================================================
   ゼロから学ぶ心理学 — 共通エンジン (app.js)
   - モジュール自己登録レジストリ
   - ハッシュルーター
   - 間隔反復クイズ (Leitner box + localStorage)
   - 進捗 / 用語集 / 模擬試験
   ============================================================ */
(function () {
  "use strict";

  const STORE_KEY = "psych_master_srs_v1";
  const PREF_KEY = "psych_master_prefs_v1";

  // Leitnerボックス: 復習間隔（日）
  const BOX_INTERVAL = [0, 1, 2, 4, 8, 16];
  const MAX_BOX = 5;
  // このボックスに達したら「習得済み」。習熟度ゲージは box の進み具合を MASTER_BOX で割った加重平均で表す
  // （正解1回ごとに box が1つ進むので、1周＝約33%、2周＝約67%、3周で100%）
  const MASTER_BOX = 3;
  const DAY = 86400000;

  const CATEGORIES = [
    { id: "found", label: "基礎・方法論" },
    { id: "biocog", label: "生物・認知の基礎" },
    { id: "dsp", label: "発達・社会・個人差" },
    { id: "applied", label: "臨床・応用" },
    { id: "vision", label: "視覚科学（特別編）" },
    { id: "optimism", label: "楽観性の心理学（特別編）" },
  ];

  const App = {
    modules: [],
    byId: {},
    _booted: false,

    /* ---------- モジュール登録 ---------- */
    registerModule(mod) {
      if (!mod || !mod.id) return;
      mod.lessons = mod.lessons || [];
      mod.questions = (mod.questions || []).map((q, i) => {
        q.id = q.id || "q" + (i + 1);
        return q;
      });
      this.modules.push(mod);
      this.byId[mod.id] = mod;
    },

    /* ---------- 永続化 ---------- */
    loadStore() {
      try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
      catch (e) { return {}; }
    },
    saveStore(s) { try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) {} },
    loadPrefs() {
      try { return JSON.parse(localStorage.getItem(PREF_KEY)) || {}; }
      catch (e) { return {}; }
    },
    savePrefs(p) { try { localStorage.setItem(PREF_KEY, JSON.stringify(p)); } catch (e) {} },

    qKey(modId, qId) { return modId + "::" + qId; },

    getRec(modId, qId) {
      const s = this.loadStore();
      return s[this.qKey(modId, qId)] || { box: 0, last: 0, seen: 0, correct: 0, wrong: 0 };
    },

    // 回答を記録 → Leitnerボックス更新
    recordAnswer(modId, qId, isCorrect) {
      const s = this.loadStore();
      const k = this.qKey(modId, qId);
      const r = s[k] || { box: 0, last: 0, seen: 0, correct: 0, wrong: 0 };
      r.seen++;
      r.last = Date.now();
      if (isCorrect) { r.correct++; r.box = Math.min(MAX_BOX, r.box + 1); }
      else { r.wrong++; r.box = Math.max(0, r.box - 1); }
      s[k] = r;
      this.saveStore(s);
      return r;
    },

    isDue(rec) {
      if (!rec || rec.seen === 0) return false; // 未学習はdueではなく「新規」
      const interval = BOX_INTERVAL[rec.box] * DAY;
      return Date.now() - rec.last >= interval;
    },

    /* ---------- 集計 ---------- */
    moduleStats(mod) {
      const s = this.loadStore();
      let seen = 0, mastered = 0, due = 0, correct = 0, total = 0, points = 0;
      mod.questions.forEach((q) => {
        const r = s[this.qKey(mod.id, q.id)];
        if (r && r.seen > 0) {
          seen++;
          correct += r.correct;
          total += r.seen;
          points += Math.min(r.box, MASTER_BOX); // 習熟度は box の進み具合（加重）で測る
          if (r.box >= MASTER_BOX) mastered++;
          if (this.isDue(r)) due++;
        }
      });
      const n = mod.questions.length || 1;
      const maxPoints = n * MASTER_BOX;
      return {
        total: mod.questions.length,
        seen, mastered, due,
        points, maxPoints,
        mastery: Math.round((points / maxPoints) * 100),
        coverage: Math.round((seen / n) * 100),
        accuracy: total ? Math.round((correct / total) * 100) : null,
      };
    },

    dueQuestions(limit) {
      const out = [];
      const s = this.loadStore();
      this.modules.forEach((mod) => {
        mod.questions.forEach((q) => {
          const r = s[this.qKey(mod.id, q.id)];
          if (r && r.seen > 0 && this.isDue(r)) out.push({ mod, q, box: r.box });
        });
      });
      out.sort((a, b) => a.box - b.box);
      return limit ? out.slice(0, limit) : out;
    },

    totalDue() { return this.dueQuestions().length; },

    overallStats() {
      let total = 0, seen = 0, mastered = 0, points = 0, maxPoints = 0;
      this.modules.forEach((m) => {
        const st = this.moduleStats(m);
        total += st.total; seen += st.seen; mastered += st.mastered;
        points += st.points; maxPoints += st.maxPoints;
      });
      return { total, seen, mastered, mastery: maxPoints ? Math.round((points / maxPoints) * 100) : 0 };
    },

    /* ---------- ユーティリティ ---------- */
    shuffle(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    esc(str) {
      return String(str == null ? "" : str)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    },
    el(html) {
      const t = document.createElement("template");
      t.innerHTML = html.trim();
      return t.content.firstElementChild;
    },
    toast(msg) {
      let t = document.getElementById("toast");
      if (!t) { t = this.el('<div id="toast" class="toast"></div>'); document.body.appendChild(t); }
      t.textContent = msg;
      t.classList.add("show");
      clearTimeout(this._toastT);
      this._toastT = setTimeout(() => t.classList.remove("show"), 1900);
    },
    scoreRing(pct, size) {
      size = size || 120;
      const r = size / 2 - 10, c = 2 * Math.PI * r;
      const off = c * (1 - pct / 100);
      const color = pct >= 80 ? "var(--good)" : pct >= 50 ? "var(--warn)" : "var(--bad)";
      return `<svg class="score-ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <circle class="ring-track" cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke-width="11"/>
        <circle class="ring-fill" cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke-width="11"
          stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${off}"
          transform="rotate(-90 ${size/2} ${size/2})"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".34em" font-size="${size*0.26}" font-weight="800" fill="var(--ink)">${pct}<tspan font-size="${size*0.13}">%</tspan></text>
      </svg>`;
    },

    // 数値カウントアップ演出（[data-n] 要素対象、reduced-motion時は即時表示）
    animateCounts(root) {
      const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
      root.querySelectorAll("[data-n]").forEach((el) => {
        const n = +el.dataset.n || 0, suf = el.dataset.suffix || "";
        if (reduce || n <= 0) { el.textContent = n + suf; return; }
        const t0 = performance.now(), dur = 700;
        const step = (t) => {
          const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(n * e) + suf;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },

    /* ---------- ルーター ---------- */
    boot() {
      if (this._booted) return;
      this._booted = true;
      // テーマ（未設定ならベイズの階段サブサイトの設定を引き継ぐ）
      const prefs = this.loadPrefs();
      const theme = prefs.theme || localStorage.getItem("bayes-stairs-theme");
      if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
      this.updateThemeIcon();
      document.getElementById("theme-toggle").addEventListener("click", () => this.toggleTheme());
      window.addEventListener("hashchange", () => this.route());
      // 並び順を category & 登録順で安定化
      this.route();
    },

    toggleTheme() {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      if (dark) document.documentElement.removeAttribute("data-theme");
      else document.documentElement.setAttribute("data-theme", "dark");
      const p = this.loadPrefs(); p.theme = dark ? "light" : "dark"; this.savePrefs(p);
      // ベイズの階段サブサイトにもテーマを反映
      try { localStorage.setItem("bayes-stairs-theme", p.theme); } catch (e) {}
      this.updateThemeIcon();
    },
    updateThemeIcon() {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      const btn = document.getElementById("theme-toggle");
      if (btn) btn.textContent = dark ? "☀️" : "🌙";
    },

    setNav(name) {
      document.querySelectorAll(".topnav a").forEach((a) =>
        a.classList.toggle("active", a.dataset.nav === name));
    },
    updateDueBadge() {
      const b = document.getElementById("due-badge");
      const n = this.totalDue();
      if (!b) return;
      if (n > 0) { b.textContent = n; b.classList.remove("hidden"); }
      else b.classList.add("hidden");
    },
    setTopProgress(pct) {
      const bar = document.querySelector("#topbar-progress span");
      if (bar) bar.style.width = pct + "%";
    },

    route() {
      const hash = location.hash || "#/";
      const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);
      const app = document.getElementById("app");
      app.scrollTop = 0; window.scrollTo(0, 0);
      // 前画面のリスナー後始末 + 画面遷移アニメーション
      if (this._spyHandler) { window.removeEventListener("scroll", this._spyHandler); this._spyHandler = null; }
      if (this._keyHandler) { document.removeEventListener("keydown", this._keyHandler); this._keyHandler = null; }
      app.classList.remove("route-in"); void app.offsetWidth; app.classList.add("route-in");
      this.updateDueBadge();

      if (parts.length === 0) return this.viewHome(app);
      const [head, a, b] = parts;
      if (head === "module" && a) {
        const mod = this.byId[a];
        if (!mod) return this.viewHome(app);
        if (b === "learn") return this.viewLearn(app, mod);
        if (b === "quiz") return this.viewQuiz(app, mod);
        return this.viewModule(app, mod);
      }
      if (head === "vision") return this.viewVision(app);
      if (head === "optimism") return this.viewOptimism(app);
      if (head === "review") return this.viewReview(app);
      if (head === "exam") return this.viewExam(app);
      if (head === "glossary") return this.viewGlossary(app);
      if (head === "progress") return this.viewProgress(app);
      return this.viewHome(app);
    },

    /* ====================================================
       ホーム / ダッシュボード
    ==================================================== */
    viewHome(app) {
      this.setNav("home");
      const o = this.overallStats();
      this.setTopProgress(o.mastery);
      const due = this.totalDue();

      let html = `<section class="hero">
        <h1>学部心理学を、ゼロから体系的に。</h1>
        <p>研究の中で心理学の知識が必要になった研究者のための網羅的学習サイト。${this.modules.length}分野を「ビジュアル解説」と「反復演習」で着実に定着させます。間違えた問題は<b>間隔反復</b>で自動的に復習キューへ。</p>
        <div class="hero-stats">
          <div class="hero-stat"><b data-n="${this.modules.length}">0</b><span>学習分野</span></div>
          <div class="hero-stat"><b data-n="${o.total}">0</b><span>演習問題</span></div>
          <div class="hero-stat"><b data-n="${o.mastery}" data-suffix="%">0%</b><span>総合習熟度</span></div>
          <div class="hero-stat"><b data-n="${due}">0</b><span>本日の復習</span></div>
        </div>
      </section>`;

      if (due > 0) {
        html += `<div class="callout key" style="display:flex;align-items:center;gap:16px;justify-content:space-between;flex-wrap:wrap">
          <span style="font-size:15px"><b>${due}問</b>が復習予定です。間隔反復で長期記憶へ定着させましょう。</span>
          <a href="#/review" class="btn btn-primary">復習を始める →</a></div>`;
      }

      // カテゴリごとにモジュールを表示
      CATEGORIES.forEach((cat) => {
        const mods = this.modules.filter((m) => (m.category || "found") === cat.id);
        if (!mods.length) return;
        html += `<div class="cat-block" data-cat="${cat.id}"><div class="cat-head"><i class="cat-dot"></i>${cat.label}</div><div class="grid">`;
        mods.forEach((m) => { html += this.moduleCard(m); });
        html += `</div></div>`;
      });

      // 特別コース: ベイズの階段（bayes/ 配下のサブサイト）
      html += this.bayesCourseBanner();

      // 未分類
      const others = this.modules.filter((m) => !CATEGORIES.some((c) => c.id === (m.category || "found")));
      if (others.length) {
        html += `<div class="cat-block"><div class="cat-head">その他</div><div class="grid">`;
        others.forEach((m) => { html += this.moduleCard(m); });
        html += `</div></div>`;
      }

      app.innerHTML = html;
      app.querySelectorAll("[data-goto]").forEach((c) =>
        c.addEventListener("click", () => { location.hash = c.dataset.goto; }));
      this.animateCounts(app);
    },

    /* ====================================================
       視覚科学（特別編）ハブ
    ==================================================== */
    viewVision(app) {
      this.setNav("vision");
      const groups = [
        { label: "I. 神経基盤 — 網膜から皮質へ", ids: ["vis_foundations", "vis_spatial", "vis_color"] },
        { label: "II. 中次の知覚 — 運動・奥行き・体制化", ids: ["vis_motion", "vis_depth", "vis_gestalt"] },
        { label: "III. 高次認知 — 認識・注意・情景", ids: ["vis_object", "vis_attention", "vis_eyemov"] },
        { label: "IV. 理論と意識 — 錯視・推論・気づき", ids: ["vis_illusion", "vis_bayes", "vis_awareness"] },
        { label: "V. 記憶と応用", ids: ["vis_memory", "vis_applied"] },
      ];
      const vmods = this.modules.filter((m) => m.category === "vision");
      const nLessons = vmods.reduce((a, m) => a + (m.lessons || []).length, 0);
      const nQs = vmods.reduce((a, m) => a + (m.questions || []).length, 0);

      let html = `<section class="hero" data-cat="vision">
        <h1>👁️ 視覚科学 <span style="font-size:.5em;font-weight:800;vertical-align:middle;color:var(--cat);background:var(--cat-soft);padding:3px 12px;border-radius:999px;margin-left:8px">特別編</span></h1>
        <p>視覚心理学と視覚に関する認知科学の知見を体系的にまとめた特別セクション。網膜での神経処理から、空間・色・運動・奥行きの知覚、知覚の体制化、物体と顔の認識、注意と眼球運動、錯視、ベイズ的推論と予測符号化、視覚的意識、視覚記憶、そして可視化への応用までを、<b>「脳が外界を能動的に構成する」</b>という一貫した視点で扱う。低次の神経基盤から高次の認知・計算理論へと積み上げる構成である。</p>
        <div class="hero-stats">
          <div class="hero-stat"><b data-n="${vmods.length}">0</b><span>モジュール</span></div>
          <div class="hero-stat"><b data-n="${nLessons}">0</b><span>レッスン</span></div>
          <div class="hero-stat"><b data-n="${nQs}">0</b><span>演習問題</span></div>
        </div>
      </section>`;

      html += `<div class="callout key"><b>おすすめの学び方</b>：番号順（I→V）に進むと、神経基盤 → 中次の知覚 → 高次認知 → 理論・意識 → 記憶・応用、という依存関係に沿って無理なく積み上がる。各モジュールは「📖 学ぶ → ✏️ 演習する」を1セットにし、間違えた問題は自動で復習キューに入る。</div>`;

      groups.forEach((g) => {
        const mods = g.ids.map((id) => this.byId[id]).filter(Boolean);
        if (!mods.length) return;
        html += `<div class="cat-block" data-cat="vision"><div class="cat-head"><i class="cat-dot"></i>${g.label}</div><div class="grid">`;
        mods.forEach((m) => { html += this.moduleCard(m); });
        html += `</div></div>`;
      });

      app.innerHTML = html;
      app.querySelectorAll("[data-goto]").forEach((c) =>
        c.addEventListener("click", () => { location.hash = c.dataset.goto; }));
      this.animateCounts(app);
    },

    /* ====================================================
       楽観性の心理学（特別編）ハブ
    ==================================================== */
    viewOptimism(app) {
      this.setNav("optimism");
      const groups = [
        { label: "I. 現象 — 楽観性バイアスとは何か", ids: ["opt_intro", "opt_unrealistic"] },
        { label: "II. 概念の家系図 — 関連する幻想と特性", ids: ["opt_illusions", "opt_dispositional", "opt_planning"] },
        { label: "III. メカニズム — 神経科学的転回", ids: ["opt_neuro", "opt_updating"] },
        { label: "IV. 境界条件と方法論的論争", ids: ["opt_depression", "opt_controversy"] },
        { label: "V. 応用と現代的展開", ids: ["opt_applied"] },
      ];
      const omods = this.modules.filter((m) => m.category === "optimism");
      const nLessons = omods.reduce((a, m) => a + (m.lessons || []).length, 0);
      const nQs = omods.reduce((a, m) => a + (m.questions || []).length, 0);

      let html = `<section class="hero" data-cat="optimism">
        <h1>🌈 楽観性の心理学 <span style="font-size:.5em;font-weight:800;vertical-align:middle;color:var(--cat);background:var(--cat-soft);padding:3px 12px;border-radius:999px;margin-left:8px">特別編</span></h1>
        <p><b>楽観性バイアス（optimism bias）</b>——将来のよい出来事を過大に、悪い出来事を過小に見積もる体系的な傾向——を軸に、その研究史を体系的にたどる特別セクション。Weinstein による<b>非現実的楽観主義</b>の発見から、Taylor &amp; Brown の<b>ポジティブ・イリュージョン</b>、計画錯誤、Sharot らによる<b>信念更新の非対称性</b>の神経科学、抑うつとの鏡像関係、そして現象の存在自体を問う<b>統計的人工産物説</b>の論争まで。「確立された知見」と「方法論的論争」を<b>両面から</b>誠実に扱う、研究者のための一望図である。</p>
        <div class="hero-stats">
          <div class="hero-stat"><b data-n="${omods.length}">0</b><span>モジュール</span></div>
          <div class="hero-stat"><b data-n="${nLessons}">0</b><span>レッスン</span></div>
          <div class="hero-stat"><b data-n="${nQs}">0</b><span>演習問題</span></div>
        </div>
      </section>`;

      html += `<div class="callout key"><b>おすすめの学び方</b>：番号順（I→V）に進むと、<b>現象の発見 → 概念の整理 → 神経メカニズム → 境界条件と論争 → 応用</b>という研究史の流れに沿って積み上がる。各モジュールは「📖 学ぶ → ✏️ 演習する」を1セットにし、間違えた問題は自動で復習キューに入る。論争を扱う回（IV）は、特定の立場を断定せず両論を併記している。</div>`;

      groups.forEach((g) => {
        const mods = g.ids.map((id) => this.byId[id]).filter(Boolean);
        if (!mods.length) return;
        html += `<div class="cat-block" data-cat="optimism"><div class="cat-head"><i class="cat-dot"></i>${g.label}</div><div class="grid">`;
        mods.forEach((m) => { html += this.moduleCard(m); });
        html += `</div></div>`;
      });

      app.innerHTML = html;
      app.querySelectorAll("[data-goto]").forEach((c) =>
        c.addEventListener("click", () => { location.hash = c.dataset.goto; }));
      this.animateCounts(app);
    },

    // ベイズの階段（サブサイト）の進捗は bayes-stairs-progress（完了レッスンID配列）を参照
    bayesCourseBanner() {
      const BAYES_TOTAL = 38; // bayes/assets/js/curriculum.js の本編レッスン数（付録を除く）
      let done = 0;
      try { done = (JSON.parse(localStorage.getItem("bayes-stairs-progress")) || []).length; }
      catch (e) {}
      done = Math.min(done, BAYES_TOTAL);
      const pct = Math.round((done / BAYES_TOTAL) * 100);
      return `<div class="cat-block">
        <div class="cat-head"><i class="cat-dot" style="--cat:#2f6fde"></i>特別コース</div>
        <a class="course-banner" href="bayes/index.html">
          <div class="course-banner-icon">🪜</div>
          <div class="course-banner-body">
            <h3>ベイズの階段 <span class="course-banner-tag">ベイズ統計 専用コース</span></h3>
            <p>中学数学の確率から出発し、条件付き確率・ベイズの定理・MCMC・PyMCによる実践モデリングまでを全6レベル・${BAYES_TOTAL}レッスンで一段ずつ。心理統計の先にあるベイズ統計を、腰を据えて学べる読み物形式のコース。</p>
            <div class="card-meta"><span>完了レッスン</span><span class="mastery-num">${done} / ${BAYES_TOTAL}（${pct}%）</span></div>
            <div class="mini-bar"><span style="width:${pct}%"></span></div>
          </div>
          <span class="course-banner-cta btn btn-primary">コースを開く →</span>
        </a>
      </div>`;
    },

    moduleCard(m) {
      const st = this.moduleStats(m);
      return `<div class="card" data-cat="${m.category || "found"}" data-goto="#/module/${m.id}">
        <div class="card-top">
          <div class="card-emoji">${m.emoji || "📘"}</div>
          <div>
            <h3>${this.esc(m.title)}</h3>
            <div class="card-tag">${st.total}問 ・ ${m.lessons.length}レッスン</div>
          </div>
        </div>
        <p>${this.esc(m.tagline || "")}</p>
        <div class="card-meta">
          <span>習熟度</span><span class="mastery-num">${st.mastery}%</span>
        </div>
        <div class="mini-bar"><span style="width:${st.mastery}%"></span></div>
      </div>`;
    },

    /* ====================================================
       モジュール概要
    ==================================================== */
    viewModule(app, mod) {
      this.setNav(null);
      const st = this.moduleStats(mod);
      this.setTopProgress(st.mastery);

      let lessons = mod.lessons.map((l, i) =>
        `<a class="toc-link card" style="cursor:pointer;padding:14px 18px;flex-direction:row;align-items:center;gap:12px"
            data-goto="#/module/${mod.id}/learn" data-lesson="${i}">
           <span class="card-emoji" style="width:38px;height:38px;font-size:16px">${i + 1}</span>
           <div><h3 style="font-size:15px">${this.esc(l.title)}</h3></div>
         </a>`).join("");

      app.innerHTML = `
        <div class="crumb"><a href="#/">ホーム</a> › <span>${this.esc(mod.title)}</span></div>
        <div class="mod-header" data-cat="${mod.category || "found"}">
          <div class="card-emoji">${mod.emoji || "📘"}</div>
          <div>
            <h1>${this.esc(mod.title)}</h1>
            <p>${this.esc(mod.tagline || "")}</p>
          </div>
          <div class="mod-header-actions">
            <a href="#/module/${mod.id}/learn" class="btn btn-ghost">📖 学ぶ</a>
            <a href="#/module/${mod.id}/quiz" class="btn btn-primary">✏️ 演習する</a>
          </div>
        </div>

        <div class="stat-grid">
          <div class="stat-box"><b>${mod.lessons.length}</b><span>レッスン</span></div>
          <div class="stat-box"><b>${st.total}</b><span>演習問題</span></div>
          <div class="stat-box"><b>${st.mastery}%</b><span>習熟度</span></div>
          <div class="stat-box"><b>${st.accuracy == null ? "—" : st.accuracy + "%"}</b><span>正答率</span></div>
        </div>

        ${mod.overview ? `<div class="lesson"><div class="lesson-body">${mod.overview}</div></div>` : ""}

        <h2 class="section-title"><span class="pill">CONTENTS</span> レッスン一覧</h2>
        <div class="grid">${lessons}</div>

        <div class="center" style="margin-top:30px">
          <a href="#/module/${mod.id}/quiz" class="btn btn-primary btn-lg">この分野の演習を始める →</a>
        </div>`;

      app.querySelectorAll("[data-goto]").forEach((c) =>
        c.addEventListener("click", () => {
          if (c.dataset.lesson != null) sessionStorage.setItem("scrollLesson", c.dataset.lesson);
          location.hash = c.dataset.goto;
        }));
    },

    /* ====================================================
       学習ビュー
    ==================================================== */
    viewLearn(app, mod) {
      this.setNav(null);
      const toc = mod.lessons.map((l, i) =>
        `<a data-jump="lesson-${i}">${i + 1}. ${this.esc(l.title)}</a>`).join("");

      const lessons = mod.lessons.map((l, i) => `
        <article class="lesson" id="lesson-${i}">
          <h2><span class="lesson-no">${i + 1}</span>${this.esc(l.title)}</h2>
          <div class="lesson-body">${l.body || ""}</div>
          ${l.figure ? `<figure class="figure">${l.figure}${l.figcaption ? `<figcaption>${this.esc(l.figcaption)}</figcaption>` : ""}</figure>` : ""}
          ${(l.terms && l.terms.length) ? `<div class="terms"><h4>🔑 キーワード</h4><div class="term-grid">${
            l.terms.map((t) => `<dl class="term"><dt>${this.esc(t.term)}</dt><dd>${this.esc(t.def)}</dd></dl>`).join("")
          }</div></div>` : ""}
        </article>`).join("");

      app.innerHTML = `
        <div class="crumb"><a href="#/">ホーム</a> › <a href="#/module/${mod.id}">${this.esc(mod.title)}</a> › <span>学習</span></div>
        <div class="learn-layout">
          <aside class="lesson-toc"><div class="toc-card"><h4>${mod.emoji || "📘"} 目次</h4>${toc}
            <a href="#/module/${mod.id}/quiz" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:12px">演習へ →</a>
          </div></aside>
          <div>${lessons}
            <div class="center" style="margin-top:24px">
              <a href="#/module/${mod.id}/quiz" class="btn btn-primary btn-lg">学んだ内容を演習で確認 →</a>
            </div>
          </div>
        </div>`;

      app.querySelectorAll("[data-jump]").forEach((a) =>
        a.addEventListener("click", () => {
          const t = document.getElementById(a.dataset.jump);
          if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
        }));

      // 目次の現在地ハイライト（スクロールスパイ）
      const tocLinks = Array.from(app.querySelectorAll("[data-jump]"));
      const spy = () => {
        let cur = 0;
        mod.lessons.forEach((_, i) => {
          const s = document.getElementById("lesson-" + i);
          if (s && s.getBoundingClientRect().top < 150) cur = i;
        });
        tocLinks.forEach((a, i) => a.classList.toggle("cur", i === cur));
      };
      this._spyHandler = spy;
      window.addEventListener("scroll", spy, { passive: true });
      spy();

      const sl = sessionStorage.getItem("scrollLesson");
      if (sl != null) {
        sessionStorage.removeItem("scrollLesson");
        const t = document.getElementById("lesson-" + sl);
        if (t) setTimeout(() => t.scrollIntoView({ block: "start" }), 60);
      }
    },

    /* ====================================================
       クイズエンジン
    ==================================================== */
    startQuiz(questions, opts) {
      // questions: [{mod, q}]
      this.quizState = {
        items: questions,
        idx: 0,
        correct: 0,
        wrong: [],
        opts: opts || {},
        answered: false,
      };
      this.renderQuestion();
    },

    viewQuiz(app, mod) {
      this.setNav(null);
      // SRS優先 + 未学習 を混ぜて出題（dueと新規を前に、習得済みを後ろに）
      const s = this.loadStore();
      const due = [], fresh = [], known = [];
      mod.questions.forEach((q) => {
        const r = s[this.qKey(mod.id, q.id)];
        if (!r || r.seen === 0) fresh.push({ mod, q });
        else if (this.isDue(r)) due.push({ mod, q });
        else known.push({ mod, q });
      });
      const ordered = this.shuffle(due).concat(this.shuffle(fresh), this.shuffle(known));
      if (!ordered.length) {
        app.innerHTML = `<div class="crumb"><a href="#/module/${mod.id}">${this.esc(mod.title)}</a> › <span>演習</span></div>
          <div class="empty"><div class="big">🎉</div><p>この分野には問題がまだ登録されていません。</p></div>`;
        return;
      }
      this._quizCtx = { app, mod, title: mod.title };
      this.startQuiz(ordered, { backHash: "#/module/" + mod.id, title: mod.title });
    },

    viewReview(app) {
      this.setNav("review");
      const due = this.dueQuestions();
      if (!due.length) {
        app.innerHTML = `<div class="empty"><div class="big">✅</div>
          <h2>復習はすべて完了です！</h2>
          <p>現在、復習予定の問題はありません。各分野で新しい問題に挑戦すると、間違えた問題が間隔反復で戻ってきます。</p>
          <a href="#/" class="btn btn-primary" style="margin-top:14px">分野を選ぶ →</a></div>`;
        return;
      }
      const items = this.shuffle(due).map((d) => ({ mod: d.mod, q: d.q })).slice(0, 30);
      this._quizCtx = { app, title: "復習セッション" };
      this.startQuiz(items, { backHash: "#/", title: "復習セッション", isReview: true });
    },

    viewExam(app) {
      this.setNav("exam");
      app.innerHTML = `
        <div class="crumb"><a href="#/">ホーム</a> › <span>模擬試験</span></div>
        <section class="hero">
          <h1>模擬試験</h1>
          <p>全分野から問題をランダムに出題する総合テストです。範囲・問題数を選んで挑戦しましょう。本番形式で実力を確認できます。</p>
        </section>
        <div class="lesson">
          <h3 style="margin-top:0">出題範囲</h3>
          <div class="tag-cluster" id="exam-mods">
            <button class="chip on" data-mod="all">全分野</button>
            ${this.modules.map((m) => `<button class="chip" data-mod="${m.id}">${m.emoji} ${this.esc(m.title)}</button>`).join("")}
          </div>
          <h3>問題数</h3>
          <div class="tag-cluster" id="exam-count">
            <button class="chip" data-n="10">10問</button>
            <button class="chip on" data-n="20">20問</button>
            <button class="chip" data-n="40">40問</button>
            <button class="chip" data-n="60">60問</button>
          </div>
          <div class="center" style="margin-top:24px">
            <button class="btn btn-primary btn-lg" id="start-exam">試験を開始 →</button>
          </div>
        </div>`;

      let selMod = "all", selN = 20;
      app.querySelectorAll("#exam-mods .chip").forEach((c) =>
        c.addEventListener("click", () => {
          app.querySelectorAll("#exam-mods .chip").forEach((x) => x.classList.remove("on"));
          c.classList.add("on"); selMod = c.dataset.mod;
        }));
      app.querySelectorAll("#exam-count .chip").forEach((c) =>
        c.addEventListener("click", () => {
          app.querySelectorAll("#exam-count .chip").forEach((x) => x.classList.remove("on"));
          c.classList.add("on"); selN = +c.dataset.n;
        }));
      app.querySelector("#start-exam").addEventListener("click", () => {
        let pool = [];
        const mods = selMod === "all" ? this.modules : [this.byId[selMod]];
        mods.forEach((m) => m.questions.forEach((q) => pool.push({ mod: m, q })));
        pool = this.shuffle(pool).slice(0, selN);
        if (!pool.length) { this.toast("問題がありません"); return; }
        this._quizCtx = { app, title: "模擬試験" };
        this.startQuiz(pool, { backHash: "#/exam", title: "模擬試験", isExam: true });
      });
    },

    renderQuestion() {
      const st = this.quizState;
      const app = this._quizCtx.app;
      if (st.idx >= st.items.length) return this.renderResult();

      const { mod, q } = st.items[st.idx];
      st.answered = false;
      // 選択肢シャッフル（正解indexを追跡）
      const choiceObjs = q.choices.map((c, i) => ({ text: c, correct: i === q.answer }));
      st.shuffled = this.shuffle(choiceObjs);
      const pct = Math.round((st.idx / st.items.length) * 100);
      this.setTopProgress(pct);
      const diff = q.difficulty || 1;
      const diffLabel = ["", "基礎", "標準", "応用"][diff] || "標準";
      const keys = ["A", "B", "C", "D", "E", "F"];

      app.innerHTML = `
        <div class="quiz-wrap">
          <div class="crumb"><a href="${st.opts.backHash || "#/"}">← 終了</a> › <span>${this.esc(st.opts.title || "演習")}</span></div>
          <div class="quiz-head">
            <span class="quiz-count">${st.idx + 1} / ${st.items.length}</span>
            <div class="quiz-progress"><span style="width:${pct}%"></span></div>
            <span class="quiz-count">正解 ${st.correct}</span>
          </div>
          <div class="qcard" data-cat="${mod.category || "found"}">
            <div class="q-meta">
              <span class="q-tag">${mod.emoji || ""} ${this.esc(mod.title)}</span>
              <span class="q-tag diff${diff}">${diffLabel}</span>
            </div>
            <div class="q-stem">${q.stem}</div>
            <div class="choices" id="choices">
              ${st.shuffled.map((c, i) =>
                `<button class="choice" data-i="${i}"><span class="key">${keys[i]}</span><span>${c.text}</span></button>`).join("")}
            </div>
            <div id="explain-slot"></div>
            <div class="quiz-foot">
              <span class="kbd-hint">キー <span class="kbd">A</span>–<span class="kbd">${keys[st.shuffled.length-1]}</span> で選択・<span class="kbd">Enter</span> で次へ</span>
              <button class="btn btn-primary" id="next-btn" disabled>次の問題 →</button>
            </div>
          </div>
        </div>`;

      const choiceBtns = app.querySelectorAll(".choice");
      choiceBtns.forEach((btn) =>
        btn.addEventListener("click", () => this.answer(+btn.dataset.i)));
      const nextBtn = app.querySelector("#next-btn");
      nextBtn.addEventListener("click", () => this.nextQuestion());

      // キーボード操作
      this._keyHandler = (e) => {
        if (!st.answered) {
          const idx = "abcdef".indexOf(e.key.toLowerCase());
          if (idx >= 0 && idx < st.shuffled.length) this.answer(idx);
        } else if (e.key === "Enter") { this.nextQuestion(); }
      };
      document.removeEventListener("keydown", this._prevKey || (() => {}));
      this._prevKey = this._keyHandler;
      document.addEventListener("keydown", this._keyHandler);
    },

    answer(choiceIdx) {
      const st = this.quizState;
      if (st.answered) return;
      st.answered = true;
      const { mod, q } = st.items[st.idx];
      const chosen = st.shuffled[choiceIdx];
      const isCorrect = chosen.correct;
      this.recordAnswer(mod.id, q.id, isCorrect);
      if (isCorrect) st.correct++;
      else st.wrong.push({ mod, q });

      const app = this._quizCtx.app;
      const btns = app.querySelectorAll(".choice");
      btns.forEach((b, i) => {
        b.disabled = true;
        if (st.shuffled[i].correct) b.classList.add("correct");
        else if (i === choiceIdx) b.classList.add("wrong");
        else b.classList.add("dim");
      });
      const slot = app.querySelector("#explain-slot");
      slot.innerHTML = `<div class="explain ${isCorrect ? "ok" : "ng"}">
        <b class="verdict ${isCorrect ? "ok-ink" : "ng-ink"}">${isCorrect ? "✓ 正解！" : "✗ 不正解"}</b>
        ${q.explain ? this.esc(q.explain) : ""}
      </div>`;
      app.querySelector("#next-btn").disabled = false;
      app.querySelector("#next-btn").focus();
      this.updateDueBadge();
    },

    nextQuestion() {
      const st = this.quizState;
      if (!st.answered) return;
      st.idx++;
      this.renderQuestion();
    },

    renderResult() {
      const st = this.quizState;
      const app = this._quizCtx.app;
      document.removeEventListener("keydown", this._keyHandler);
      const total = st.items.length;
      const pct = Math.round((st.correct / total) * 100);
      this.setTopProgress(this.overallStats().mastery);
      const grade = pct >= 90 ? "🏆 素晴らしい！しっかり定着しています。"
        : pct >= 70 ? "👍 良い調子。間違えた問題を復習しましょう。"
        : pct >= 50 ? "📚 もう一歩。解説を読み直して再挑戦を。"
        : "🔁 基礎から復習しましょう。繰り返すほど定着します。";

      const wrongList = st.wrong.length
        ? `<div style="text-align:left;margin-top:8px">
            <h4 style="color:var(--ink-faint);font-size:13px">復習が必要な問題 (${st.wrong.length})</h4>
            ${st.wrong.slice(0, 12).map((w) =>
              `<div style="font-size:13px;color:var(--ink-soft);padding:6px 0;border-bottom:1px solid var(--line)">
                <b style="color:var(--ink)">${w.mod.emoji} ${this.esc(w.mod.title)}</b><br>${this.stripTags(w.q.stem).slice(0, 60)}…</div>`).join("")}
           </div>`
        : `<p style="color:var(--good);font-weight:700">全問正解！🎉</p>`;

      app.innerHTML = `
        <div class="result">
          ${this.scoreRing(pct, 140)}
          <h2>${st.correct} / ${total} 問正解</h2>
          <p class="grade">${grade}</p>
          <div class="result-stats">
            <div class="result-stat g"><b>${st.correct}</b><span>正解</span></div>
            <div class="result-stat b"><b>${st.wrong.length}</b><span>不正解</span></div>
            <div class="result-stat"><b>${pct}%</b><span>正答率</span></div>
          </div>
          ${wrongList}
          <div class="btn-row" style="justify-content:center;margin-top:26px">
            ${st.wrong.length ? `<button class="btn btn-accent" id="retry-wrong">間違えた問題を復習 (${st.wrong.length})</button>` : ""}
            <a href="${st.opts.backHash || "#/"}" class="btn btn-ghost">終了する</a>
          </div>
        </div>`;

      const rw = app.querySelector("#retry-wrong");
      if (rw) rw.addEventListener("click", () => {
        const items = this.shuffle(st.wrong.slice());
        this.startQuiz(items, st.opts);
      });
      this.updateDueBadge();
    },

    stripTags(s) { return String(s || "").replace(/<[^>]+>/g, ""); },

    /* ====================================================
       進捗
    ==================================================== */
    viewProgress(app) {
      this.setNav("progress");
      const o = this.overallStats();
      this.setTopProgress(o.mastery);
      const rows = this.modules.map((m) => {
        const st = this.moduleStats(m);
        return `<tr data-goto="#/module/${m.id}">
          <td><b>${m.emoji} ${this.esc(m.title)}</b></td>
          <td>${st.coverage}%</td>
          <td><div class="bar-cell"><div class="mini-bar"><span style="width:${st.mastery}%"></span></div><span style="width:42px;text-align:right">${st.mastery}%</span></div></td>
          <td>${st.accuracy == null ? "—" : st.accuracy + "%"}</td>
          <td>${st.due || "—"}</td>
        </tr>`;
      }).join("");

      app.innerHTML = `
        <div class="crumb"><a href="#/">ホーム</a> › <span>進捗</span></div>
        <h2 class="section-title"><span class="pill">DASHBOARD</span> 学習の進捗</h2>
        <div class="stat-grid">
          <div class="stat-box"><b>${o.mastery}%</b><span>総合習熟度</span></div>
          <div class="stat-box"><b>${o.mastered}/${o.total}</b><span>習得済み問題</span></div>
          <div class="stat-box"><b>${o.seen}</b><span>挑戦済み問題</span></div>
          <div class="stat-box"><b>${this.totalDue()}</b><span>復習待ち</span></div>
        </div>
        <table class="prog-table">
          <thead><tr><th>分野</th><th>進度</th><th>習熟度</th><th>正答率</th><th>復習待ち</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="center" style="margin-top:24px">
          <button class="btn btn-ghost" id="reset-progress">学習データをリセット</button>
        </div>`;

      app.querySelectorAll("[data-goto]").forEach((r) =>
        r.addEventListener("click", () => { location.hash = r.dataset.goto; }));
      app.querySelector("#reset-progress").addEventListener("click", () => {
        if (confirm("すべての学習データ（習熟度・復習キュー）を削除します。よろしいですか？")) {
          localStorage.removeItem(STORE_KEY);
          this.toast("学習データをリセットしました");
          this.route();
        }
      });
    },

    /* ====================================================
       用語集
    ==================================================== */
    allTerms() {
      const terms = [];
      this.modules.forEach((m) =>
        m.lessons.forEach((l) =>
          (l.terms || []).forEach((t) => terms.push({ ...t, mod: m.title, emoji: m.emoji }))));
      terms.sort((a, b) => a.term.localeCompare(b.term, "ja"));
      return terms;
    },

    viewGlossary(app) {
      this.setNav("glossary");
      const terms = this.allTerms();
      app.innerHTML = `
        <div class="crumb"><a href="#/">ホーム</a> › <span>用語集</span></div>
        <h2 class="section-title"><span class="pill">GLOSSARY</span> 心理学用語集 <small style="color:var(--ink-faint);font-weight:600">(${terms.length}語)</small></h2>
        <input class="glossary-search" id="gloss-q" placeholder="🔍 用語を検索（例: 古典的条件づけ, ワーキングメモリ, 認知的不協和 …）" autofocus>
        <div id="gloss-list"></div>`;

      const list = app.querySelector("#gloss-list");
      const render = (filter) => {
        const f = (filter || "").trim().toLowerCase();
        const items = terms.filter((t) =>
          !f || t.term.toLowerCase().includes(f) || (t.def || "").toLowerCase().includes(f));
        if (!items.length) { list.innerHTML = `<div class="empty">該当する用語が見つかりません。</div>`; return; }
        list.innerHTML = items.slice(0, 400).map((t) =>
          `<dl class="gloss-item"><dt>${this.esc(t.term)} <span class="gloss-mod">${t.emoji} ${this.esc(t.mod)}</span></dt>
            <dd>${this.esc(t.def)}</dd></dl>`).join("");
      };
      render("");
      app.querySelector("#gloss-q").addEventListener("input", (e) => render(e.target.value));
    },
  };

  window.PsychApp = App;
})();
