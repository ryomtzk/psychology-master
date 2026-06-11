/* =====================================================================
 * main.js — サイト共通スクリプト
 * ---------------------------------------------------------------------
 * すべて curriculum.js (window.CURRICULUM) を情報源として動く。
 * 各ページは <body> に以下の data 属性を持つこと:
 *   data-root      : サイトルートへの相対パス ("", "../", "../../")
 *   data-level     : "0"〜"5" / "appendix" / なし(トップ等)
 *   data-lesson-id : "3-2" など (レッスンページのみ)
 *
 * 機能:
 *   1. テーマ切替 (light/dark, localStorage 永続化)
 *   2. サイドバー カリキュラムナビ自動生成 (#sidebar-nav)
 *   3. レベルマップ自動生成 (#level-map — トップページ)
 *   4. レッスン一覧自動生成 (#lesson-list — レベル目次ページ)
 *   5. 前後レッスンナビ自動生成 (#lesson-nav)
 *   6. ページ内目次生成 (#toc — 本文の h2 から)
 *   7. 進捗管理 (localStorage, 完了ボタン #complete-btn)
 *   8. クイズ (.quiz)
 *   9. モバイル用サイドバー開閉 (#sidebar-toggle)
 * ===================================================================== */

(function () {
  "use strict";

  var C = window.CURRICULUM;
  if (!C) return;

  var body = document.body;
  var ROOT = body.dataset.root || "";
  var LEVEL = body.dataset.level;           // "0".."5" | "appendix" | undefined
  var LESSON_ID = body.dataset.lessonId;    // "3-2" など | undefined

  /* ---------- 共通ヘルパー ---------- */

  // levels + appendix をまとめて「グループ」として扱う
  function allGroups() {
    return C.levels.concat([C.appendix]);
  }

  function groupKey(group) {
    return group.slug === "appendix" ? "appendix" : String(group.id);
  }

  function lessonUrl(group, lesson) {
    var dir = group.slug === "appendix" ? "appendix/" : "levels/" + group.slug + "/";
    return ROOT + dir + lesson.file;
  }

  function groupIndexUrl(group) {
    var dir = group.slug === "appendix" ? "appendix/" : "levels/" + group.slug + "/";
    return ROOT + dir + "index.html";
  }

  // 全レッスンをカリキュラム順に平坦化 (前後ナビ用。付録は除く)
  function flatLessons() {
    var out = [];
    C.levels.forEach(function (lv) {
      lv.lessons.forEach(function (ls) {
        out.push({ group: lv, lesson: ls });
      });
    });
    return out;
  }

  /* ---------- 0. 親サイト(ゼロから学ぶ心理学)へのリンク ---------- */
  /* このサイトは「ゼロから学ぶ心理学」(../index.html) のサブサイトとして配置されている */

  var PARENT_PREFS_KEY = "psych_master_prefs_v1"; // 親サイトのテーマ設定(JSON)

  function initParentLink() {
    var brand = document.querySelector(".site-header .brand");
    if (!brand) return;
    var a = document.createElement("a");
    a.className = "parent-link";
    a.href = ROOT + "../index.html";
    a.innerHTML = '<span aria-hidden="true">🧠</span><span class="parent-link-label">心理学サイトへ</span>';
    brand.insertAdjacentElement("afterend", a);
  }

  /* ---------- 1. テーマ切替 ---------- */

  var THEME_KEY = "bayes-stairs-theme";

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  // 親サイト(心理学)のテーマ設定を読む。未設定なら null
  function parentTheme() {
    try {
      return (JSON.parse(localStorage.getItem(PARENT_PREFS_KEY)) || {}).theme || null;
    } catch (e) {
      return null;
    }
  }

  function initTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (!saved && parentTheme()) {
      // 親サイト側の設定を引き継ぎ、各ページ先頭のちらつき防止スクリプトにも効かせる
      saved = parentTheme();
      localStorage.setItem(THEME_KEY, saved);
    }
    var theme = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    applyTheme(theme);

    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        localStorage.setItem(THEME_KEY, next);
        // 親サイトにもテーマを反映
        try {
          var prefs = JSON.parse(localStorage.getItem(PARENT_PREFS_KEY)) || {};
          prefs.theme = next;
          localStorage.setItem(PARENT_PREFS_KEY, JSON.stringify(prefs));
        } catch (e) {}
        applyTheme(next);
      });
    }
  }

  /* ---------- 7. 進捗管理 (他機能より先に定義) ---------- */

  var PROGRESS_KEY = "bayes-stairs-progress";

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function setProgress(ids) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(ids));
  }

  function isDone(id) {
    return getProgress().indexOf(id) !== -1;
  }

  function toggleDone(id) {
    var ids = getProgress();
    var i = ids.indexOf(id);
    if (i === -1) ids.push(id);
    else ids.splice(i, 1);
    setProgress(ids);
  }

  function groupProgress(group) {
    var done = group.lessons.filter(function (ls) { return isDone(ls.id); }).length;
    return { done: done, total: group.lessons.length };
  }

  function totalProgress() {
    var total = 0, done = 0;
    C.levels.forEach(function (lv) {
      var p = groupProgress(lv);
      total += p.total;
      done += p.done;
    });
    return { done: done, total: total };
  }

  /* ---------- 2. サイドバーナビ生成 ---------- */

  function renderSidebar() {
    var el = document.getElementById("sidebar-nav");
    if (!el) return;

    allGroups().forEach(function (group) {
      var key = groupKey(group);
      var details = document.createElement("details");
      details.className = "sidebar-group";
      if (key === LEVEL) details.open = true;

      var label = group.slug === "appendix" ? "付録" : "Level " + group.id;
      var summary = document.createElement("summary");
      summary.innerHTML =
        '<span class="lv-dot" style="background:' + group.color + '"></span>' +
        '<span>' + label + " " + group.title + "</span>";
      details.appendChild(summary);

      var ul = document.createElement("ul");
      group.lessons.forEach(function (ls) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = lessonUrl(group, ls);
        a.innerHTML = '<span class="done-mark">✔</span><span>' + ls.id + " " + ls.title + "</span>";
        if (ls.id === LESSON_ID) a.classList.add("is-current");
        if (isDone(ls.id)) a.classList.add("is-done");
        li.appendChild(a);
        ul.appendChild(li);
      });
      details.appendChild(ul);
      el.appendChild(details);
    });
  }

  /* ---------- 3. レベルマップ生成 (トップページ) ---------- */

  function renderLevelMap() {
    var el = document.getElementById("level-map");
    if (!el) return;

    allGroups().forEach(function (group) {
      var p = groupProgress(group);
      var pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
      var label = group.slug === "appendix" ? "APPENDIX" : "LEVEL " + group.id;

      var a = document.createElement("a");
      a.className = "level-card";
      a.href = groupIndexUrl(group);
      a.style.setProperty("--lv", group.color);
      a.innerHTML =
        '<span class="lv-num">' + label + "</span>" +
        '<span class="lv-title">' + group.title + "</span>" +
        '<span class="lv-subtitle">' + group.subtitle + "</span>" +
        '<span class="lv-meta">' +
        "<span>全" + p.total + "レッスン</span>" +
        "<span>" + p.done + "/" + p.total + " 完了</span>" +
        "</span>" +
        '<span class="progress-bar"><span style="width:' + pct + '%"></span></span>';
      el.appendChild(a);
    });
  }

  /* ---------- 4. レッスン一覧生成 (レベル目次ページ) ---------- */

  function renderLessonList() {
    var el = document.getElementById("lesson-list");
    if (!el) return;

    var group = allGroups().find(function (g) { return groupKey(g) === LEVEL; });
    if (!group) return;

    group.lessons.forEach(function (ls) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = lessonUrl(group, ls);
      a.innerHTML =
        '<span class="ls-id">' + ls.id + (isDone(ls.id) ? " ✔" : "") + "</span>" +
        '<span class="ls-title">' + ls.title + "</span>" +
        '<span class="ls-summary">' + ls.summary + "</span>";
      li.appendChild(a);
      el.appendChild(li);
    });
  }

  /* ---------- 5. 前後レッスンナビ生成 ---------- */

  function renderLessonNav() {
    var el = document.getElementById("lesson-nav");
    if (!el || !LESSON_ID) return;

    var flat = flatLessons();
    var idx = flat.findIndex(function (x) { return x.lesson.id === LESSON_ID; });
    if (idx === -1) return;

    var prev = flat[idx - 1];
    var next = flat[idx + 1];

    if (prev) {
      var pa = document.createElement("a");
      pa.className = "nav-prev";
      pa.href = lessonUrl(prev.group, prev.lesson);
      pa.innerHTML =
        '<span class="nav-dir">← 前のレッスン</span>' +
        '<span class="nav-title">' + prev.lesson.id + " " + prev.lesson.title + "</span>";
      el.appendChild(pa);
    }
    if (next) {
      var na = document.createElement("a");
      na.className = "nav-next";
      na.href = lessonUrl(next.group, next.lesson);
      na.innerHTML =
        '<span class="nav-dir">次のレッスン →</span>' +
        '<span class="nav-title">' + next.lesson.id + " " + next.lesson.title + "</span>";
      el.appendChild(na);
    }
  }

  /* ---------- 6. ページ内目次生成 ---------- */

  function renderToc() {
    var toc = document.getElementById("toc");
    var bodyEl = document.querySelector(".lesson-body");
    if (!toc || !bodyEl) return;

    var heads = bodyEl.querySelectorAll("h2");
    if (!heads.length) return;

    var ul = document.createElement("ul");
    heads.forEach(function (h, i) {
      if (!h.id) h.id = "sec-" + (i + 1);
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      ul.appendChild(li);
    });
    toc.appendChild(ul);

    // スクロールに応じて現在地をハイライト
    var links = ul.querySelectorAll("a");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    heads.forEach(function (h) { observer.observe(h); });
  }

  /* ---------- 7b. ヘッダー進捗 / 完了ボタン ---------- */

  function renderHeaderProgress() {
    var el = document.getElementById("header-progress");
    if (!el) return;
    var p = totalProgress();
    var pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
    el.innerHTML =
      "<span>" + p.done + "/" + p.total + "</span>" +
      '<span class="progress-bar" style="width:90px"><span style="width:' + pct + '%"></span></span>';
  }

  function initCompleteButton() {
    var btn = document.getElementById("complete-btn");
    if (!btn || !LESSON_ID) return;
    var area = btn.closest(".complete-area");

    function refresh() {
      var done = isDone(LESSON_ID);
      btn.textContent = done ? "✔ 完了済み (クリックで取り消し)" : "このレッスンを完了にする";
      if (area) area.classList.toggle("is-done", done);
    }

    btn.addEventListener("click", function () {
      toggleDone(LESSON_ID);
      refresh();
      renderHeaderProgress();
    });
    refresh();
  }

  /* ---------- 8. クイズ ---------- */

  function initQuizzes() {
    document.querySelectorAll(".quiz").forEach(function (quiz) {
      var answer = quiz.dataset.answer;
      quiz.querySelectorAll(".quiz-option").forEach(function (opt) {
        opt.addEventListener("click", function () {
          if (quiz.classList.contains("is-answered")) return;
          quiz.classList.add("is-answered");
          quiz.querySelectorAll(".quiz-option").forEach(function (o) {
            if (o.dataset.key === answer) o.classList.add("is-correct");
            else if (o === opt) o.classList.add("is-wrong");
            o.disabled = true;
          });
        });
      });
    });
  }

  /* ---------- 9. モバイルサイドバー ---------- */

  function initSidebarToggle() {
    var btn = document.getElementById("sidebar-toggle");
    var sidebar = document.querySelector(".sidebar");
    if (!btn || !sidebar) return;
    btn.addEventListener("click", function () {
      sidebar.classList.toggle("is-open");
    });
    document.addEventListener("click", function (e) {
      if (!sidebar.contains(e.target) && !btn.contains(e.target)) {
        sidebar.classList.remove("is-open");
      }
    });
  }

  /* ---------- 起動 ---------- */

  initParentLink();
  initTheme();
  renderSidebar();
  renderLevelMap();
  renderLessonList();
  renderLessonNav();
  renderToc();
  renderHeaderProgress();
  initCompleteButton();
  initQuizzes();
  initSidebarToggle();
})();
