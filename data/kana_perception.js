/* === 横文字（カタカナ語）特別編 認知・知覚 (kana_perception) === */
PsychApp.registerModule({
  id: "kana_perception",
  title: "認知・知覚の横文字",
  emoji: "🧩",
  category: "katakana",
  tagline: "認知・知覚分野の頻出カタカナ語を頻出順に。意味から単語を当てる演習つき",
  overview: `<p>認知・知覚の研究論文で頻出する横文字（カタカナ語）を、おおよその出現頻度の高い順に整理する。注意・記憶・知覚体制化の基本語から、見落とし現象や恒常性など知覚の不思議に関わる語までを、混同しやすい対を意識しながら並べた。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "コア（最頻出）",
      body: `
        <p>まずは認知・知覚で最もよく目にする語から。番号は<strong>頻出順（だいたいの目安）</strong>である。</p>
        <ol class="kana-rank">
          <li><b>アテンション / 注意（attention）</b> … 限られた処理資源を選択的に配分する機構。選択的・分割・持続などの種類がある。</li>
          <li><b>プライミング（priming）</b> … 先行刺激が後続の処理を無意識に促進・抑制すること。</li>
          <li><b>ゲシュタルト（Gestalt）</b> … 「全体は部分の総和以上」とする知覚体制化の原理群。</li>
          <li><b>アフォーダンス（affordance）</b> … 環境が動物に提供する行為の可能性（Gibson）。椅子は「座れる」をアフォードする。</li>
          <li><b>サリエンス / 顕著性（salience）</b> … 注意を引きつけやすさ。ボトムアップに目立つ特徴。</li>
          <li><b>モダリティ（modality）</b> … 感覚の様式（視覚・聴覚・触覚など）。「クロスモーダル」=様式をまたぐ。</li>
          <li><b>チャンク（chunk）</b> … 記憶でまとめて扱う情報のまとまり。ワーキングメモリ容量の単位。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：注意を「引きつけられやすさ」がサリエンス、その注意を「配分する機構」そのものがアテンション。前者は刺激側の性質、後者は処理側の働き。</div>
      `,
      terms: [
        { term: "アテンション / 注意（attention）", def: "限られた処理資源を選択的に配分する機構。選択的・分割・持続などの種類がある。" },
        { term: "プライミング（priming）", def: "先行刺激が後続の処理を無意識に促進・抑制すること。" },
        { term: "ゲシュタルト（Gestalt）", def: "「全体は部分の総和以上」とする知覚体制化の原理群。" },
        { term: "アフォーダンス（affordance）", def: "環境が動物に対して提供する行為の可能性（Gibson）。椅子は「座れる」をアフォードする。" },
        { term: "サリエンス / 顕著性（salience）", def: "注意を引きつけやすさ。ボトムアップに目立つ特徴。" },
        { term: "モダリティ（modality）", def: "感覚の様式（視覚・聴覚・触覚など）。「クロスモーダル」=様式をまたぐ。" },
        { term: "チャンク（chunk）", def: "記憶でまとめて扱う情報のまとまり。ワーキングメモリ容量の単位。" },
      ],
    },
    {
      title: "周辺・応用",
      body: `
        <p>続いて、結合問題や見落とし現象、知覚の安定性に関わる語。やや専門的だが論文では繰り返し登場する。</p>
        <ol class="kana-rank" start="8">
          <li><b>バインディング / 結合問題（binding problem）</b> … 色・形・動きなど別々に処理された特徴を1つの対象に統合する問題。</li>
          <li><b>チェンジブラインドネス（change blindness）</b> … 場面の変化に気づけない現象。</li>
          <li><b>インアテンショナルブラインドネス（inattentional blindness）</b> … 注意を向けていない顕著な対象を見落とす現象（ゴリラ実験）。</li>
          <li><b>パーセプチュアルコンスタンシー / 知覚恒常性（perceptual constancy）</b> … 網膜像が変わっても対象の大きさ・色を一定と知覚する働き。</li>
          <li><b>フィギュア・グラウンド / 図地（figure-ground）</b> … 視野を「図」と「背景」に分節する知覚組織化。</li>
          <li><b>アンビギュイティ / 多義性（ambiguity）</b> … 一つの入力が複数解釈を許す状態。双安定知覚など。</li>
          <li><b>ジスト / 大意（gist）</b> … 細部でなくシーンや文の全体的な意味。</li>
        </ol>
        <div class="callout warn"><b>混同注意</b>：変化そのものに気づけないのがチェンジブラインドネス、注意外の顕著な対象を見落とすのがインアテンショナルブラインドネス。前者は「変化」、後者は「もとから在る対象」がキーワード。</div>
      `,
      terms: [
        { term: "バインディング / 結合問題（binding problem）", def: "色・形・動きなど別々に処理された特徴を1つの対象に統合する問題。" },
        { term: "チェンジブラインドネス（change blindness）", def: "場面の変化に気づけない現象。" },
        { term: "インアテンショナルブラインドネス（inattentional blindness）", def: "注意を向けていない顕著な対象を見落とす現象（ゴリラ実験）。" },
        { term: "パーセプチュアルコンスタンシー / 知覚恒常性（perceptual constancy）", def: "網膜像が変わっても対象の大きさ・色を一定と知覚する働き。" },
        { term: "フィギュア・グラウンド / 図地（figure-ground）", def: "視野を「図」と「背景」に分節する知覚組織化。" },
        { term: "アンビギュイティ / 多義性（ambiguity）", def: "一つの入力が複数解釈を許す状態。双安定知覚など。" },
        { term: "ジスト / 大意（gist）", def: "細部でなくシーンや文の全体的な意味。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "限られた処理資源を、必要な対象に選択的に振り分ける心の働き。選択的・分割・持続などの種類が区別される。", choices: ["アテンション / 注意（attention）", "サリエンス / 顕著性（salience）", "プライミング（priming）", "モダリティ（modality）"], answer: 0, explain: "処理資源を選択的に配分する機構そのものがアテンション。引きつけられやすさはサリエンス。", difficulty: 1 },
    { type: "mcq", stem: "先に与えられた刺激が、後に続く刺激の処理を無意識のうちに速めたり妨げたりすること。", choices: ["ゲシュタルト（Gestalt）", "プライミング（priming）", "アフォーダンス（affordance）", "チャンク（chunk）"], answer: 1, explain: "先行刺激が後続処理を無意識に促進・抑制するのがプライミング。体制化原理はゲシュタルト。", difficulty: 1 },
    { type: "mcq", stem: "「全体は部分の総和以上である」とする立場に立つ、知覚の体制化原理の総称。", choices: ["アフォーダンス（affordance）", "サリエンス / 顕著性（salience）", "ジスト / 大意（gist）", "ゲシュタルト（Gestalt）"], answer: 3, explain: "全体性を重視する知覚体制化の原理群がゲシュタルト。行為可能性はアフォーダンス。", difficulty: 1 },
    { type: "mcq", stem: "環境が動物に対して差し出す「行為の可能性」を指す概念。椅子は「座れる」を提供する、という言い方をする（Gibson）。", choices: ["アフォーダンス（affordance）", "プライミング（priming）", "コンティンジェンシー（contingency）", "アテンション / 注意（attention）"], answer: 0, explain: "環境が提供する行為可能性がアフォーダンス。行動と結果の随伴関係はコンティンジェンシー。", difficulty: 2 },
    { type: "mcq", stem: "刺激が注意を引きつけやすい度合い。ボトムアップに目立つ特徴のこと。", choices: ["モダリティ（modality）", "サリエンス / 顕著性（salience）", "アンビギュイティ / 多義性（ambiguity）", "ジスト / 大意（gist）"], answer: 1, explain: "目立ちやすさ・注意の引きつけやすさがサリエンス。感覚の様式はモダリティ。", difficulty: 1 },
    { type: "mcq", stem: "視覚・聴覚・触覚といった感覚の様式のこと。これをまたぐ処理を「クロス〜」と呼ぶ。", choices: ["チャンク（chunk）", "サリエンス / 顕著性（salience）", "モダリティ（modality）", "バインディング / 結合問題（binding problem）"], answer: 2, explain: "感覚の様式がモダリティ。様式をまたぐとクロスモーダルになる。", difficulty: 1 },
    { type: "mcq", stem: "記憶の中でひとまとめに扱われる情報の単位。ワーキングメモリ容量を数えるときの単位にもなる。", choices: ["ジスト / 大意（gist）", "チャンク（chunk）", "モダリティ（modality）", "プライミング（priming）"], answer: 1, explain: "まとめて扱う情報のまとまりがチャンク。全体的な意味はジスト。", difficulty: 1 },
    { type: "mcq", stem: "色・形・動きなど、別々の経路で処理された特徴を、いかにして一つの対象として統合するかという問題。", choices: ["バインディング / 結合問題（binding problem）", "フィギュア・グラウンド / 図地（figure-ground）", "アンビギュイティ / 多義性（ambiguity）", "ゲシュタルト（Gestalt）"], answer: 0, explain: "別々に処理された特徴の統合を問うのが結合問題（バインディング）。図と背景の分節は図地。", difficulty: 2 },
    { type: "mcq", stem: "場面に加えられた変化に、観察者がなかなか気づけない現象。", choices: ["インアテンショナルブラインドネス（inattentional blindness）", "チェンジブラインドネス（change blindness）", "アンビギュイティ / 多義性（ambiguity）", "プライミング（priming）"], answer: 1, explain: "「変化」に気づけないのがチェンジブラインドネス。注意外の対象を見落とすのは別語。", difficulty: 2 },
    { type: "mcq", stem: "注意を向けていない、はっきりと目立つ対象を見落としてしまう現象。ゴリラの実験で有名。", choices: ["チェンジブラインドネス（change blindness）", "アンビギュイティ / 多義性（ambiguity）", "インアテンショナルブラインドネス（inattentional blindness）", "サリエンス / 顕著性（salience）"], answer: 2, explain: "注意外の顕著な対象の見落としがインアテンショナルブラインドネス。変化の見落としはチェンジブラインドネス。", difficulty: 3 },
    { type: "mcq", stem: "網膜に映る像が変化しても、対象の大きさや色を一定のものとして知覚し続ける働き。", choices: ["パーセプチュアルコンスタンシー / 知覚恒常性（perceptual constancy）", "フィギュア・グラウンド / 図地（figure-ground）", "ゲシュタルト（Gestalt）", "アフォーダンス（affordance）"], answer: 0, explain: "網膜像が変わっても対象の属性を一定と知覚するのが知覚恒常性。図と背景の分節は図地。", difficulty: 2 },
    { type: "mcq", stem: "視野を、注目される「もの」とその背後に退く「背景」とに分けて組織化する知覚の働き。", choices: ["バインディング / 結合問題（binding problem）", "フィギュア・グラウンド / 図地（figure-ground）", "パーセプチュアルコンスタンシー / 知覚恒常性（perceptual constancy）", "ジスト / 大意（gist）"], answer: 1, explain: "視野を図と背景に分節するのが図地。属性の一定知覚は恒常性。", difficulty: 2 },
    { type: "mcq", stem: "一つの入力が複数の解釈を許してしまう状態。双安定知覚などで現れる。", choices: ["アンビギュイティ / 多義性（ambiguity）", "サリエンス / 顕著性（salience）", "チェンジブラインドネス（change blindness）", "モダリティ（modality）"], answer: 0, explain: "複数解釈を許す状態が多義性（アンビギュイティ）。目立ちやすさはサリエンス。", difficulty: 2 },
    { type: "mcq", stem: "細部ではなく、シーンや文の全体としての大まかな意味のこと。", choices: ["チャンク（chunk）", "ゲシュタルト（Gestalt）", "プライミング（priming）", "ジスト / 大意（gist）"], answer: 3, explain: "全体的な意味の把握がジスト。情報のまとまりはチャンク。", difficulty: 2 },
  ],
});
