/* === 横文字（カタカナ語）特別編 言語・意味・概念 (kana_language) === */
PsychApp.registerModule({
  id: "kana_language",
  title: "言語・意味・概念の横文字",
  emoji: "🗣️",
  category: "katakana",
  tagline: "言語・意味・概念分野の頻出カタカナ語を頻出順に。意味から単語を当てる演習つき",
  overview: `<p>ここでは、言語・意味・概念の研究で頻出する横文字（カタカナ語）を、論文での出現頻度の高い順に整理する。カテゴリの表し方をめぐる<strong>プロトタイプ</strong>と<strong>エグゼンプラー</strong>の対立、知識の枠組みである<strong>スキーマ</strong>と<strong>スクリプト</strong>、語句の意味と文脈依存の意味を分ける<strong>セマンティクス／プラグマティクス</strong>など、似た語が多く混同しやすい領域である。語義の違いを意識して整理しておきたい。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "頻出カタカナ語（言語・意味・概念）",
      body: `
        <p>言語・意味・概念分野でよく目にする語を頻出順に並べる。番号は<strong>頻出順（だいたいの目安）</strong>である。知識の枠組み系（スキーマ・スクリプト）と、カテゴリ表象系（プロトタイプ・エグゼンプラー）を取り違えないように。</p>
        <ol class="kana-rank">
          <li><b>スキーマ（schema）</b> … 経験から作られる知識の枠組み。理解や記憶を方向づける。</li>
          <li><b>プロトタイプ（prototype）</b> … カテゴリの典型例・平均像。概念表象のモデル。</li>
          <li><b>セマンティクス / プラグマティクス（semantics / pragmatics）</b> … 語句そのものの意味 と 文脈・話者意図に依存する意味。</li>
          <li><b>スクリプト（script）</b> … 出来事の定型的な流れの知識（例：レストラン・スクリプト）。</li>
          <li><b>エグゼンプラー（exemplar）</b> … 個々の具体例の記憶でカテゴリを表すとする対立モデル。</li>
          <li><b>メンタルレキシコン / 心内辞書（mental lexicon）</b> … 頭の中の語彙の貯蔵庫。</li>
          <li><b>プロダクション（production）</b> … 「条件→行動」のルール。ACT-R など認知アーキテクチャの単位。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：カテゴリを「典型例・平均像」で表すのがプロトタイプ、「個々の具体例の集まり」で表すのがエグゼンプラー。知識全般の枠組みがスキーマ、出来事の定型的な流れに特化したのがスクリプト。</div>
      `,
      terms: [
        { term: "スキーマ（schema）", def: "経験から作られる知識の枠組み。理解や記憶を方向づける。" },
        { term: "プロトタイプ（prototype）", def: "カテゴリの典型例・平均像。概念表象のモデル。" },
        { term: "セマンティクス / プラグマティクス（semantics / pragmatics）", def: "語句そのものの意味 と 文脈・話者意図に依存する意味。" },
        { term: "スクリプト（script）", def: "出来事の定型的な流れの知識（例：レストラン・スクリプト）。" },
        { term: "エグゼンプラー（exemplar）", def: "個々の具体例の記憶でカテゴリを表すとする対立モデル。" },
        { term: "メンタルレキシコン / 心内辞書（mental lexicon）", def: "頭の中の語彙の貯蔵庫。" },
        { term: "プロダクション（production）", def: "「条件→行動」のルール。ACT-R など認知アーキテクチャの単位。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "経験を通して作られる知識の一般的な枠組み。新しい情報の理解や記憶を方向づけ、欠けた部分を補わせるはたらきをもつ。", choices: ["スキーマ（schema）", "スクリプト（script）", "プロトタイプ（prototype）", "プロダクション（production）"], answer: 0, explain: "知識全般の枠組みはスキーマ。出来事の定型的な流れに特化したのがスクリプトで、より限定的。", difficulty: 1 },
    { type: "mcq", stem: "あるカテゴリの典型例・平均像にあたる表象。概念をその「中心的なイメージ」によって表すとする立場。", choices: ["エグゼンプラー（exemplar）", "プロトタイプ（prototype）", "スキーマ（schema）", "メンタルレキシコン / 心内辞書（mental lexicon）"], answer: 1, explain: "典型例・平均像で概念を表すのがプロトタイプ。個々の具体例の記憶で表すのが対立するエグゼンプラー。", difficulty: 2 },
    { type: "mcq", stem: "語句そのものが持つ意味と、文脈や話者の意図に依存して生じる意味とを対比して指す対の用語。", choices: ["エンコーディング / リトリーバル（encoding / retrieval）", "トップダウン / ボトムアップ（top-down / bottom-up）", "セマンティクス / プラグマティクス（semantics / pragmatics）", "プライアー / ポステリア（prior / posterior）"], answer: 2, explain: "語の字義的意味と文脈依存的意味の対はセマンティクス／プラグマティクス。記憶の符号化と取り出しの対はエンコーディング／リトリーバル。", difficulty: 2 },
    { type: "mcq", stem: "「レストランに入って注文し食べて支払う」のような、出来事の定型的な流れについての知識。", choices: ["スクリプト（script）", "スキーマ（schema）", "プロダクション（production）", "プロトタイプ（prototype）"], answer: 0, explain: "出来事の定型的な流れの知識はスクリプト。知識の枠組み全般を指すスキーマの、出来事系列に特化した下位概念にあたる。", difficulty: 2 },
    { type: "mcq", stem: "カテゴリを、典型像ではなく出会った個々の具体例の記憶の集まりとして表すとするモデル。", choices: ["プロトタイプ（prototype）", "エグゼンプラー（exemplar）", "スクリプト（script）", "スキーマ（schema）"], answer: 1, explain: "個々の具体例の記憶でカテゴリを表すのがエグゼンプラー。典型例・平均像で表すプロトタイプと対立する。", difficulty: 3 },
    { type: "mcq", stem: "頭の中にある語彙の貯蔵庫。語の意味・音・綴りなどの情報が蓄えられているとされる心的な辞書。", choices: ["スキーマ（schema）", "プロダクション（production）", "メンタルレキシコン / 心内辞書（mental lexicon）", "エグゼンプラー（exemplar）"], answer: 2, explain: "頭の中の語彙の貯蔵庫がメンタルレキシコン（心内辞書）。知識の枠組み一般を指すスキーマとは別。", difficulty: 2 },
    { type: "mcq", stem: "「もし条件Cが成り立てば行動Aを行う」という形のルール。ACT-R などの認知アーキテクチャで処理の単位とされる。", choices: ["プロダクション（production）", "スクリプト（script）", "プロトタイプ（prototype）", "メンタルレキシコン / 心内辞書（mental lexicon）"], answer: 0, explain: "「条件→行動」のルールがプロダクション。出来事の定型的な流れの知識であるスクリプトとは異なる。", difficulty: 3 },
  ],
});
