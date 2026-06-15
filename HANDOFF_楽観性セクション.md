# 引き継ぎ: 楽観性の心理学（特別編）セクション

> 「楽観性バイアス（optimism bias）」の研究史を体系的にたどる大規模特別セクション。
> コンテンツ（10モジュール）・配線・検証・専用ハブまで**実装＆ブラウザ検証まで完了済み**。
> 元資料は `~/Downloads/楽観性バイアス.md`（Weinstein → Taylor & Brown → Sharot の発展史と方法論的論争の年表）。

---

## ✅ 実装ステータス（2026-06-15 完了）

サイトを開けば楽観性セクションは完全に動作する。完了したのは：

- **コンテンツ作成**: `data/opt_*.js` に10モジュール（22レッスン / 演習129問 / 用語159語、すべて `category:"optimism"`）。並列ワークフローで執筆し、各モジュールを別エージェントが出典照合・スキーマ・SVGで敵対的に検証＋自己修復。
- **配線済み**: `index.html` に10スクリプト追加 + ナビ「🌈 楽観性」追加 / `app.js` の `CATEGORIES` に `optimism` + ルート `#/optimism`（`viewOptimism`）/ `style.css` に `optimism` 配色（light=`#d98a3d` / dark=`#e6a861`）。
- **専用ハブ追加**: 専用ルート `#/optimism` で、10分野を研究史の順（I.現象→II.概念の家系図→III.メカニズム→IV.境界条件と論争→V.応用）にグループ表示するランディングを実装（`viewVision` と同じ作り）。
- **ブラウザ検証済み**: 42モジュール登録・コンソールエラー0・ホーム統計（42分野/832問）・ハブ（5グループ/10カード）・学習（図22枚すべてテーマ非依存）・演習（選択肢シャッフルでも正誤判定・スコア加算・解説表示）・用語集/模擬試験への自動合流・ダークテーマで図が可読、を実機確認。
- **監査スクリプト**: 全129問のスキーマ妥当性（4択・answer範囲・explain・difficulty）と全 `#/module/...` 相互リンクの実在性を機械チェックし、**壊れたリンク0・スキーマ違反0**。
- **README / index.html メタ更新済み**: 収録数を 42分野/171レッスン/832問/1283語 に更新、分野一覧に楽観性行と専用ハブ説明を追加。

---

## 1. モジュール一覧（学び順 = index.html の読み込み順 = ハブの表示順）

| # | ファイル | id | タイトル | 絵文字 | L | Q | 主に扱う研究 |
|---|---|---|---|---|---|---|---|
| 1 | `data/opt_intro.js` | `opt_intro` | 楽観性バイアスとは | 🌈 | 2 | 13 | Sharot(2011)の定義・約80%・抑うつ例外・三系譜・論争の予告 |
| 2 | `data/opt_unrealistic.js` | `opt_unrealistic` | 非現実的楽観主義の起源 | 🎓 | 2 | 13 | Weinstein(1980/1982)・比較法・自己中心性・脱バイアス抵抗 |
| 3 | `data/opt_illusions.js` | `opt_illusions` | ポジティブ・イリュージョン | ✨ | 2 | 13 | Taylor & Brown(1988)3要素・Langer・Alicke・Colvin & Block論争 |
| 4 | `data/opt_dispositional.js` | `opt_dispositional` | 気質的楽観主義とLOT | 🧭 | 2 | 13 | Scheier & Carver(1985)・LOT/LOT-R・特性／状態の区別 |
| 5 | `data/opt_planning.js` | `opt_planning` | 計画錯誤 | 📅 | 2 | 12 | Kahneman & Tversky(1979)・内/外の視点・Buehler(1994) |
| 6 | `data/opt_neuro.js` | `opt_neuro` | 楽観性バイアスの脳 | 🧠 | 2 | 13 | Sharot ら(2007)・扁桃体・rACC |
| 7 | `data/opt_updating.js` | `opt_updating` | 信念更新の非対称性 | 🔄 | 2 | 13 | Sharot(2011)rIFG・L-DOPA・TMS・価数依存性 |
| 8 | `data/opt_depression.js` | `opt_depression` | 抑うつとの鏡像関係 | 🌧️ | 3 | 13 | 抑うつリアリズム・Korn/Garrett(2014)・再現性危機 |
| 9 | `data/opt_controversy.js` | `opt_controversy` | 統計的人工産物説と論争 | ⚖️ | 3 | 13 | Harris & Hahn(2011)・直接/間接法・Shah(2016)・両論併記 |
| 10 | `data/opt_applied.js` | `opt_applied` | 応用と現代的展開 | 🩺 | 2 | 13 | COVID-19の比較楽観主義・序論執筆の作法 |

**合計: 10モジュール / 22レッスン / 129問 / 159用語。**

### 内容面の方針
- 文体・体裁は既存の `data/social.js`・`data/vis_bayes.js` と完全に揃えてある（である調、`<strong>`/`<em>` ハイライト、専門語の初出英語併記、`callout`、`<table>`、`terms`、theme-safe SVG）。
- 研究の帰属・数値・年号・誌名は元資料（`楽観性バイアス.md`）に忠実。**論争点（統計的人工産物説・抑うつリアリズムの再現性）はどちらの立場も断定せず両論併記**。これは元資料の Recommendations / Caveats の指示に従ったもの。
- 各 SVG 図はテーマ非依存にするため先頭に薄い背景矩形 `<rect ... fill="#f5f7fd"/>` を入れてある（vis_* と同方式）。

---

## 2. 配線の記録（再現・移植時の参照用）

| 対象 | 変更 |
|---|---|
| `index.html` | `<head>` の meta/OGP を 42分野/832問へ更新。`topnav` に `<a href="#/optimism" data-nav="optimism">🌈 楽観性</a>`。vis ブロックの直後に `data/opt_*.js` を10行追加。 |
| `assets/js/app.js` | `CATEGORIES` に `{ id:"optimism", label:"楽観性の心理学（特別編）" }`。`route()` に `if (head === "optimism") return this.viewOptimism(app);`。`bayesCourseBanner` の直前に `viewOptimism(app)` メソッド（5グループ構成、`viewVision` と同型）。 |
| `assets/css/style.css` | カテゴリ配色に `[data-cat="optimism"]{--cat:#d98a3d;--cat-soft:#fbeede}` と dark 版 `{--cat:#e6a861;…}`。 |
| `README.md` | 収録数・分野一覧表・機能一覧（🌈楽観性ハブ）を更新。 |

共通エンジン（クイズ/間隔反復/模試/用語集/進捗）は**汎用処理**なので、エンジン側の追加改修は不要（カテゴリ登録とルートのみ）。

---

## 3. 既知の軽微事項（任意・実害なし）

- 各問の静的な正解インデックスは index=1 に寄りがちだが、**エンジンが描画時に選択肢をシャッフルし `correct` フラグで判定する**ため表示上は毎回ランダムで実害なし（vis_* と同じ仕様）。
- 一部モジュールは元資料に直接記載のない正確な一般知識で補強している箇所がある（例: `opt_dispositional` の健康アウトカム＝既存 `health.js` と整合、学習性楽観＝既存 `emotion.js` と整合）。事実誤りではなく、既存分野との橋渡しを意図したもの。
- 数値は元資料の表記に忠実（例: Buehler 1994 の 33.9/48.6/55.5日、Moore & Fresco 2012 の d=−.07、Dolinski et al. の n=12,378）。一次文献引用前には原著の該当頁を確認するのが安全（元資料 Caveats と同じ注意）。

---

## 4. 監査スクリプト（再検証したいとき）

`node /tmp/opt_audit.js`（または同等のもの）で、`data/` の全モジュールを stub ロードし、(1) スキーマ妥当性、(2) 図のテーマ非依存 rect、(3) 全 `#/module/...` 相互リンクの実在性、(4) 各種カウントを一括チェックできる。スクリプトは作業時の一時ファイルなので、再利用するなら `tools/` 等に保存しておくとよい。
