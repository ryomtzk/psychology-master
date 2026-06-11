/* =========================================================
 * curriculum.js — サイト全体の単一情報源 (Single Source of Truth)
 * ---------------------------------------------------------
 * ナビゲーション・レベルマップ・前後リンク・進捗計算は
 * すべてこのファイルから自動生成される。
 * レッスンの追加・改名は必ずここを更新すること。
 * (fetch を使わず file:// でも動くよう、JSグローバル変数として定義)
 * ========================================================= */

window.CURRICULUM = {
  siteName: "ベイズの階段",
  tagline: "中学数学から最前線まで、一段ずつ。",

  levels: [
    {
      id: 0,
      slug: "level0",
      title: "確率の直感をつくる",
      subtitle: "中学レベルの数学だけで「確率で考える」感覚を育てる",
      color: "#1f9d63",
      lessons: [
        { id: "0-1", file: "0-1.html", title: "確率ってなんだろう", summary: "サイコロとくじ引きで確率の意味を体感する" },
        { id: "0-2", file: "0-2.html", title: "場合の数の数え方", summary: "樹形図と表で「すべての可能性」を漏れなく数える" },
        { id: "0-3", file: "0-3.html", title: "割合・比・パーセント", summary: "確率の計算に必要な割合の感覚を固める" },
        { id: "0-4", file: "0-4.html", title: "表で整理する確率", summary: "クロス集計表(分割表)で2つの条件を同時に扱う" },
        { id: "0-5", file: "0-5.html", title: "「逆向き」の確率 — ベイズへの入り口", summary: "「結果から原因を推測する」というベイズの核心を数えて体験する" }
      ]
    },
    {
      id: 1,
      slug: "level1",
      title: "条件付き確率とベイズの定理",
      subtitle: "ベイズ統計の心臓部を、数え上げから式へと橋渡しする",
      color: "#1187a8",
      lessons: [
        { id: "1-1", file: "1-1.html", title: "条件付き確率", summary: "「〜だとわかったとき」の確率 P(A|B) を定義する" },
        { id: "1-2", file: "1-2.html", title: "同時確率と周辺確率", summary: "P(A,B) と P(A) の関係を分割表で理解する" },
        { id: "1-3", file: "1-3.html", title: "ベイズの定理の導出", summary: "条件付き確率の定義から定理を自力で導く" },
        { id: "1-4", file: "1-4.html", title: "事前確率・尤度・事後確率", summary: "ベイズの定理の各部品に名前と意味を与える" },
        { id: "1-5", file: "1-5.html", title: "病気の検査問題 — 偽陽性のパラドックス", summary: "精度99%の検査で陽性でも病気とは限らない理由" },
        { id: "1-6", file: "1-6.html", title: "モンティ・ホール問題と迷惑メールフィルタ", summary: "有名問題と実用例でベイズの定理を使い倒す" }
      ]
    },
    {
      id: 2,
      slug: "level2",
      title: "確率分布と尤度",
      subtitle: "高校〜大学初年級。点の確率から「分布」へ視野を広げる",
      color: "#2f6fde",
      lessons: [
        { id: "2-1", file: "2-1.html", title: "確率変数と確率分布", summary: "結果に数を割り当て、確率の全体像をグラフで見る" },
        { id: "2-2", file: "2-2.html", title: "二項分布とポアソン分布", summary: "回数を数える場面で現れる2大離散分布" },
        { id: "2-3", file: "2-3.html", title: "連続型の分布 — 一様分布と正規分布", summary: "確率密度という考え方と面積=確率の感覚" },
        { id: "2-4", file: "2-4.html", title: "期待値・分散・標準偏差", summary: "分布を数個の数で要約する道具" },
        { id: "2-5", file: "2-5.html", title: "尤度 — データから見た「もっともらしさ」", summary: "確率と尤度の違い。ベイズ推定の主役を導入する" },
        { id: "2-6", file: "2-6.html", title: "ベータ分布 — 確率の確率", summary: "「コインの表が出る確率」自体を分布で表す" }
      ]
    },
    {
      id: 3,
      slug: "level3",
      title: "ベイズ推定の基礎",
      subtitle: "データで信念を更新する。ベイズ統計の本体に入る",
      color: "#6c53e0",
      lessons: [
        { id: "3-1", file: "3-1.html", title: "ベイズ更新 — 学習する確率", summary: "事後分布が次の事前分布になる、逐次更新の考え方" },
        { id: "3-2", file: "3-2.html", title: "ベータ・二項モデル", summary: "最も基本的なベイズモデルを手計算で完走する" },
        { id: "3-3", file: "3-3.html", title: "共役事前分布", summary: "計算がきれいに閉じる事前分布のファミリー" },
        { id: "3-4", file: "3-4.html", title: "正規分布のベイズ推定", summary: "平均と分散の推定。精度(precision)という見方" },
        { id: "3-5", file: "3-5.html", title: "事後分布の要約 — MAP推定と信用区間", summary: "分布から一つの答えと不確かさの幅を取り出す" },
        { id: "3-6", file: "3-6.html", title: "頻度論 vs ベイズ — 信頼区間と信用区間", summary: "2つの統計学の考え方の違いを公平に比較する" },
        { id: "3-7", file: "3-7.html", title: "モデル比較とベイズファクター", summary: "どちらの仮説がデータをよく説明するかを測る" }
      ]
    },
    {
      id: 4,
      slug: "level4",
      title: "計算ベイズ — MCMCと近似推論",
      subtitle: "解析的に解けない事後分布を、計算機の力で攻略する",
      color: "#a845c8",
      lessons: [
        { id: "4-1", file: "4-1.html", title: "解析的に解けない事後分布", summary: "なぜ計算手法が必要なのか。正規化定数の壁" },
        { id: "4-2", file: "4-2.html", title: "モンテカルロ法の考え方", summary: "乱数で積分を近似する。サンプルで分布を代表する" },
        { id: "4-3", file: "4-3.html", title: "メトロポリス・ヘイスティングス法", summary: "最初のMCMC。受理・棄却のルールを実装レベルで理解" },
        { id: "4-4", file: "4-4.html", title: "ギブスサンプリング", summary: "条件付き分布を順番にサンプルする戦略" },
        { id: "4-5", file: "4-5.html", title: "ハミルトニアンモンテカルロとNUTS", summary: "物理のアナロジーで高次元を効率よく探索する" },
        { id: "4-6", file: "4-6.html", title: "収束診断とサンプリングの実務", summary: "trace plot・R̂・有効サンプルサイズの読み方" },
        { id: "4-7", file: "4-7.html", title: "変分推論入門", summary: "サンプリングせず最適化で事後分布を近似する" }
      ]
    },
    {
      id: 5,
      slug: "level5",
      title: "実践ベイズモデリング",
      subtitle: "PyMCを使い、現実のデータ分析にベイズを適用する",
      color: "#d23369",
      lessons: [
        { id: "5-1", file: "5-1.html", title: "PyMCではじめるベイズ推定", summary: "環境構築と最初のモデル。Level 3の手計算を再現する" },
        { id: "5-2", file: "5-2.html", title: "ベイズ線形回帰", summary: "回帰係数を分布で推定し、予測の不確かさを語る" },
        { id: "5-3", file: "5-3.html", title: "ベイズロジスティック回帰", summary: "分類問題と一般化線形モデルへの拡張" },
        { id: "5-4", file: "5-4.html", title: "階層ベイズモデル", summary: "グループ構造を持つデータ。部分プーリングの威力" },
        { id: "5-5", file: "5-5.html", title: "状態空間モデルと時系列", summary: "時間とともに変化するパラメータを追跡する" },
        { id: "5-6", file: "5-6.html", title: "ベイズ機械学習 — ナイーブベイズとガウス過程", summary: "機械学習の中のベイズ的アイデアを概観する" },
        { id: "5-7", file: "5-7.html", title: "ベイズワークフロー — モデル構築から検証まで", summary: "事前予測チェック・事後予測チェック・モデル批判の実務" }
      ]
    }
  ],

  appendix: {
    slug: "appendix",
    title: "付録",
    subtitle: "つまずいたときに戻ってくる場所",
    color: "#8a8577",
    lessons: [
      { id: "a-1", file: "a-1.html", title: "数学の準備① — 文字式とシグマ記法", summary: "Σ記法・添字・累乗の読み書き" },
      { id: "a-2", file: "a-2.html", title: "数学の準備② — 微分積分の最小限", summary: "Level 2以降に必要な微積分だけを最短で" },
      { id: "a-3", file: "a-3.html", title: "用語集", summary: "全レッスンの用語を五十音順で引ける" },
      { id: "a-4", file: "a-4.html", title: "記号表", summary: "P(A|B), ∝, 〜 などの記号の読み方一覧" },
      { id: "a-5", file: "a-5.html", title: "参考文献と次に読む本", summary: "レベル別のおすすめ書籍・教材" }
    ]
  }
};
