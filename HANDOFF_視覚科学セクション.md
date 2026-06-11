# 引き継ぎ: 視覚科学（特別編）セクション

> このドキュメントは「視覚心理・視覚に関する認知科学」の大規模特別セクションの記録。
> **中身のコンテンツ（14モジュール）は作成済み**で、`data/vis_*.js` に置いてある。

---

## ✅ 実装ステータス（2026-06-11 更新 — 統合まで完了済み）

当初は「中身だけ作成、統合は次エージェント」という想定だったが、**統合・検証・QA・専用ハブまで実施済み**。
現状サイトを開けば視覚科学セクションは完全に動作する。具体的に完了したのは：

- **配線済み**: `index.html` に14スクリプト追加 / `app.js` の `CATEGORIES` に `vision` 追加 / `style.css` に `vision` 配色（light/dark）。→ 本書 §2 ステップA〜Cは**適用済み**。
- **専用ハブ追加**: トップナビに「👁️ 視覚科学」を追加し、専用ルート `#/vision`（`app.js` の `viewVision`）で、14分野を学びの順（I.神経基盤→II.中次の知覚→III.高次認知→IV.理論・意識→V.記憶・応用）にグループ表示するランディングを実装。
- **ブラウザ検証済み**: 32モジュール登録・コンソールエラー0・ホーム統計（32分野/703問）・学習/演習/SVG/ダークテーマ・演習の正誤フローを実機確認。
- **網羅コンテンツQA済み**: 14モジュールを並列レビュー＋敵対的再検証（177問・29レッスン）。確定不具合は1件のみ（`vis_illusion` のミュラー・リヤー錯視の説明グリフが左右逆）で**修正済み**。誤答・誤帰属は0件。
- **README更新済み**: 収録数を 32分野/149レッスン/703問/1124語 に更新、分野一覧に視覚科学行を追加。

**残りは任意の発展のみ**（§3）。実運用上の必須作業は無い。
§2 のステップA〜Cは「何をどう配線したか」の記録として残してある（再現・移植時の参照用）。

---

## 1. これまでに完了したこと（コンテンツ）

視覚科学を14モジュールに分割し、既存サイトのデータスキーマ（`PsychApp.registerModule`）に
完全準拠した `.js` ファイルとして `data/` に作成済み。**すべて `node --check` と
スキーマ検証（answer範囲・選択肢数・必須フィールド・SVG妥当性）をパス**している。

| # | ファイル | id | タイトル | 絵文字 | レッスン | 問題 |
|---|---|---|---|---|---|---|
| 1 | `data/vis_foundations.js` | `vis_foundations` | 視覚の神経基盤 | 👁️‍🗨️ | 2 | 14 |
| 2 | `data/vis_spatial.js` | `vis_spatial` | 空間視と空間周波数 | 📐 | 2 | 12 |
| 3 | `data/vis_color.js` | `vis_color` | 色と明るさの知覚 | 🎨 | 2 | 12 |
| 4 | `data/vis_motion.js` | `vis_motion` | 運動の知覚 | 🌀 | 2 | 12 |
| 5 | `data/vis_depth.js` | `vis_depth` | 奥行きと立体視 | 🧊 | 2 | 12 |
| 6 | `data/vis_gestalt.js` | `vis_gestalt` | 知覚の体制化 | 🧩 | 2 | 12 |
| 7 | `data/vis_object.js` | `vis_object` | 物体と顔の認識 | 🗿 | 2 | 13 |
| 8 | `data/vis_attention.js` | `vis_attention` | 視覚的注意 | 🔦 | 2 | 12 |
| 9 | `data/vis_eyemov.js` | `vis_eyemov` | 眼球運動と情景知覚 | 🎯 | 2 | 12 |
| 10 | `data/vis_illusion.js` | `vis_illusion` | 錯視のメカニズム | 🌗 | 2 | 12 |
| 11 | `data/vis_bayes.js` | `vis_bayes` | ベイズ知覚と予測符号化 | 🎲 | 2 | 12 |
| 12 | `data/vis_awareness.js` | `vis_awareness` | 視覚的意識と気づき | 💡 | 2 | 12 |
| 13 | `data/vis_memory.js` | `vis_memory` | 視覚記憶とイメージ | 🧠 | 3 | 15 |
| 14 | `data/vis_applied.js` | `vis_applied` | 応用：データ可視化とUIの視覚認知 | 📊 | 2 | 15 |

**合計: 14モジュール / 29レッスン / 177問 / 229用語。** 全モジュール `category: "vision"`。

### 推奨される学習順（＝index.html の読み込み順）
基盤 → 空間/色 → 運動/奥行き → 体制化 → 物体・顔 → 注意 → 眼球運動・情景 →
錯視 → ベイズ・予測符号化 → 意識 → 記憶 → 応用、という
「低次の神経基盤 → 中次の体制化 → 高次の認知・理論 → 応用」の流れで並べてある。
上の表の番号順がそのまま推奨順。

### 内容面の特徴（正確性は監修済み）
- 文体・体裁は既存の `data/sensation.js` 等と完全に揃えてある（である調、`<strong>`/`<em>`
  ハイライト、専門語の初出英語併記、`callout`、`<table>`、`terms`、SVG図）。
- 研究者・知見の帰属は確立した内容に限定して監修済み（Hubel & Wiesel / Kuffler / Hartline /
  Campbell & Robson / Land のRetinex / Adelson のチェッカーシャドウ / Reichardt / Julesz /
  Ernst & Banks 2002 / Treisman & Gelade 1980 / Simons & Chabris / Biederman のジオン /
  Marr の3段階 / Quiroga / Kanwisher のFFA / Sperling 1960 / Luck & Vogel 1997 /
  Shepard & Metzler 1971 / Cleveland & McGill 1984 / Rao & Ballard 1999 / Weiskrantz の盲視 ほか）。
- 各SVG図は**テーマ非依存**にするため先頭に薄い背景矩形
  `<rect ... rx="14" fill="#f5f7fd"/>` を入れてある（後述）。

---

## 2. まだやっていないこと（＝あなたの作業）

**重要: `data/vis_*.js` はまだ `index.html` から読み込まれていない。**
意図的に「中身だけ先に」作った状態なので、現時点でサイトを開いても新セクションは表示されない。
以下を行うと表示・学習・演習・模試・用語集・進捗のすべてに自動的に組み込まれる
（共通エンジン `assets/js/app.js` がモジュールを汎用的に扱うため、エンジン側の改修は原則不要）。

### ステップ A — `index.html` に14行を追加（必須）
既存のデータ読み込みの最後（`data/industrial.js` の行＝67行目付近）の直後に、推奨順で追加する。

```html
<!-- 視覚科学（特別編） -->
<script src="data/vis_foundations.js"></script>
<script src="data/vis_spatial.js"></script>
<script src="data/vis_color.js"></script>
<script src="data/vis_motion.js"></script>
<script src="data/vis_depth.js"></script>
<script src="data/vis_gestalt.js"></script>
<script src="data/vis_object.js"></script>
<script src="data/vis_attention.js"></script>
<script src="data/vis_eyemov.js"></script>
<script src="data/vis_illusion.js"></script>
<script src="data/vis_bayes.js"></script>
<script src="data/vis_awareness.js"></script>
<script src="data/vis_memory.js"></script>
<script src="data/vis_applied.js"></script>
```

### ステップ B — `vision` カテゴリを登録（必須）
`assets/js/app.js` の `CATEGORIES` 配列（19〜24行目付近）に1要素を追加する。
これで14モジュールがホームで1ブロックにまとまって表示される。

```js
const CATEGORIES = [
  { id: "found",   label: "基礎・方法論" },
  { id: "biocog",  label: "生物・認知の基礎" },
  { id: "dsp",     label: "発達・社会・個人差" },
  { id: "applied", label: "臨床・応用" },
  { id: "vision",  label: "視覚科学（特別編）" },   // ← 追加
];
```

> 追加しなくても動く（未分類なら自動で「その他」ブロックに出る）が、
> 専用ブロックにしたいので追加を推奨。**「特別編」を目立たせたいなら配列の先頭に置く**のも可。

### ステップ C — カテゴリの配色を追加（推奨）
`assets/css/style.css` の59〜66行目付近に、既存4カテゴリと同形式で `vision` の色を足す。
既存は found=青紫 / biocog=ティール / dsp=黄土 / applied=ローズ。視覚＝紫系などが衝突しにくい。

```css
[data-cat="vision"] {--cat:#8a63c2;--cat-soft:#f1ecf9}
[data-theme="dark"] [data-cat="vision"] {--cat:#b08fe0;--cat-soft:color-mix(in srgb,#b08fe0 13%,#161b27)}
```

`--cat` はカードの上端ライン・問題タグ・ドット等に使われる（`data-cat` 属性経由）。
モジュールカード／問題カードは `data-cat="vision"` が自動付与されるのでCSSだけでよい。

### ステップ D — 動作確認
1. ローカルサーバで開く: `python3 -m http.server 8123` → `http://localhost:8123`
2. ホームに「視覚科学（特別編）」ブロックと14枚のカードが出ることを確認。
3. 1モジュール開いて、レッスン本文・SVG図・キーワード・演習（4択＋即時解説）が出るか確認。
4. ダークテーマに切替え、**SVG図の文字が潰れないこと**を確認（背景矩形を入れてあるので可読のはず）。
5. 「模擬試験（全分野）」「用語集」「進捗」に視覚科学が混ざって出ることを確認。

---

## 3. 「特別セクション」としての強化アイデア（任意・発展）

ステップA〜Dで“普通の分野群”としては完成する。ユーザは「**大規模な特別セクション**」を
望んでいるので、もう一段の特別扱いをするなら以下が候補（必要に応じて取捨選択）。

- **専用ランディング/ハブページ**: `#/vision` のような専用ルートを `app.js` のルータに追加し、
  「視覚科学とは」「14モジュールの地図（依存関係の図）」「おすすめ学習経路」を載せた表紙を作る。
  ホームから大きめのバナーで誘導すると“特別感”が出る。
- **トップナビに導線**: `index.html` の `topnav` に「👁️ 視覚科学」リンクを足す。
- **インタラクティブ錯視デモ**: 静的SVGに加え、`vis_illusion` / `vis_motion` / `vis_color` は
  動く/操作できるデモ（CSSアニメや小さな`<canvas>`/JS）にすると学習効果が高い。
  例: 運動残効、ヘルマン格子、同時対比スライダー、ネッカー立方体の反転、ランダムドットステレオグラム。
  → デモは各モジュールの `figure` を差し替えるか、専用レッスンを足す形が無難。
- **既存「感覚・知覚（sensation）」との相互リンク**: sensation は学部入門レベルの視覚を含むので、
  「より深く → 視覚の神経基盤へ」等の導線を張ると体系が繋がる（重複ではなく深掘りの関係）。
- **章間の前後リンク**: 各モジュール末尾に「次のモジュール」リンクを置くと通読しやすい
  （エンジン改修が要るなら overview 末尾に手書きリンクでも可）。
- **難易度バッジ/所要時間**: 特別編は密度が高いので、カードに「発展」バッジや目安時間を付けると親切。

---

## 4. データスキーマ早見表（モジュールを追加・編集する場合）

各 `data/*.js` は次の1関数呼び出しで自己登録する。**エンジンが汎用処理**するので、
このスキーマさえ守れば学習・クイズ・間隔反復・模試・用語集・進捗にすべて自動で乗る。

```js
PsychApp.registerModule({
  id: "vis_xxx",                 // 一意。localStorage の進捗キーに使うので変更厳禁
  title: "タイトル",
  emoji: "🔸",
  category: "vision",            // ホームの分類。CATEGORIES の id と対応
  tagline: "カンマ区切りの内容見出し",
  overview: `<p>分野全体の導入（HTML可）</p>`,
  lessons: [
    {
      title: "レッスン名",
      body: `…HTML（である調・<strong>/<em>・<h3>/<h4>・<table>・<ul>・callout）…`,
      figure: `<svg viewBox="0 0 W H" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">…</svg>`, // 任意
      figcaption: "図の説明（プレーンテキスト1文）",
      terms: [ { term: "用語（English）", def: "1文の定義" } /* …6〜8語 */ ],
    },
    // …
  ],
  questions: [
    { type: "mcq", stem: "問題文", choices: ["A","B","C","D"], answer: 1, explain: "解説", difficulty: 2 },
    // …
  ],
});
```

### 注意点（実装上の事実）
- **`answer` は選択肢の0始まりインデックス**。`app.js` は描画時に選択肢をシャッフルし、
  正誤は `correct` フラグで判定する（`app.js:542-543`）。
  → 本セクションは静的には正解が index 1 に寄っているが、**表示は毎回シャッフルされるため実害なし**。
    気になる場合のみ各 `answer` と `choices` を入れ替えればよい（機能上は不要）。
- **`callout` のクラス**: `key`(🔑要点) / `tip`(💡補足) / `example`(📝例) / `warn`(⚠注意)。
- **SVG図のテーマ対応**: 既存サイトの `.figure` 背景はライト=`--bg-soft`、ダーク=`#10141f`。
  本セクションの図は**先頭に `<rect ... fill="#f5f7fd"/>` を敷いて**どちらのテーマでも可読にしてある。
  既存17分野の図は地色なしの濃色テキストなのでダークでやや見にくい（既存からの仕様）。
  もし全サイトで統一したいなら、別タスクとして既存図にも同じ背景矩形を入れるか、
  `.figure svg text` の色をテーマ変数化する改修が考えられる（本セクションの範囲外）。
- **`emoji`** はカードと見出しのアイコンに使われる。`👁️‍🗨️` のようなZWJ絵文字も可。
- 進捗・間隔反復データは `localStorage` 保存。`id`/`q.id` がキーなので、**公開後に id を変えない**こと。

---

## 5. ファイル一覧（このセクションで新規追加されたもの）

```
data/vis_foundations.js
data/vis_spatial.js
data/vis_color.js
data/vis_motion.js
data/vis_depth.js
data/vis_gestalt.js
data/vis_object.js
data/vis_attention.js
data/vis_eyemov.js
data/vis_illusion.js
data/vis_bayes.js
data/vis_awareness.js
data/vis_memory.js
data/vis_applied.js
HANDOFF_視覚科学セクション.md   （本書）
```

`index.html` / `assets/js/app.js` / `assets/css/style.css` は**未変更**。
ステップA〜C（＋任意でD以降）を適用すれば公開できる。

---

## 6. 反映後に更新するとよい既存記述（任意）

- `README.md`: 「18分野 / 120レッスン / 演習526問 / 用語895語」→
  視覚科学14分野を足すと概算で **32分野 / 149レッスン / 703問 / 1124語** になる（要再カウント）。
  分野一覧の表に「視覚科学（特別編）」行を追加。
- `index.html` の `<meta description>` / OGP 文言に「視覚科学特別編」を追記してもよい。
