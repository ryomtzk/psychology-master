/* === 横文字（カタカナ語）特別編 神経科学 (kana_neuro) === */
PsychApp.registerModule({
  id: "kana_neuro",
  title: "神経科学の横文字",
  emoji: "🧠",
  category: "katakana",
  tagline: "神経科学の頻出カタカナ語を頻出順に。意味からカタカナ語を当てる演習つき",
  overview: `<p>fMRIや電気生理、計算神経科学の論文を読むと、訳語より英語まじりのカタカナのまま使われる用語が多い。ここでは<strong>神経科学で頻出する横文字（カタカナ語）</strong>を、研究論文での出現頻度の高い順に整理する。可塑性・結合・振動・表象といった、脳の「働き方」を語るための基礎語彙が中心である。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "コア（最頻出）",
      body: `
        <p>まずは最もよく目にする語から。番号は<strong>頻出順（だいたいの目安）</strong>である。脳がどう変わり、どうつながり、どんなリズムで情報を表すか、という基本概念が並ぶ。</p>
        <ol class="kana-rank">
          <li><b>プラスティシティ / 可塑性（plasticity）</b> … 経験で神経結合が変化する性質。学習・回復の基盤。</li>
          <li><b>コネクティビティ（connectivity）</b> … 脳領域間の結合。構造的/機能的/実効的に区別される。</li>
          <li><b>トップダウン / ボトムアップ（top-down / bottom-up）</b> … 知識・期待による上位からの制御と、感覚入力に駆動される下位からの処理。</li>
          <li><b>オシレーション / 神経振動（oscillation）</b> … θ・α・γなど周波数帯ごとの周期的脳活動。注意や記憶と関連。</li>
          <li><b>デフォルトモードネットワーク（DMN）</b> … 課題に従事していない安静時に活動が高まる脳ネットワーク。自己・内省と関連。</li>
          <li><b>レプリゼンテーション / 表象（representation）</b> … 脳・モデルが情報を符号化して保持する内的状態。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：「結合そのもの」を指すのがコネクティビティ、「結合が変わる性質」を指すのがプラスティシティ。リズムを指すオシレーションとは別物。</div>
      `,
      terms: [
        { term: "プラスティシティ / 可塑性（plasticity）", def: "経験で神経結合が変化する性質。学習・回復の基盤。" },
        { term: "コネクティビティ（connectivity）", def: "脳領域間の結合。構造的/機能的/実効的(effective)に区別される。" },
        { term: "トップダウン / ボトムアップ（top-down / bottom-up）", def: "知識・期待による上位からの制御と、感覚入力に駆動される下位からの処理。" },
        { term: "オシレーション / 神経振動（oscillation）", def: "θ・α・γなど周波数帯ごとの周期的脳活動。注意や記憶と関連。" },
        { term: "デフォルトモードネットワーク（DMN）", def: "課題に従事していない安静時に活動が高まる脳ネットワーク。自己・内省と関連。" },
        { term: "レプリゼンテーション / 表象（representation）", def: "脳・モデルが情報を符号化して保持する内的状態。" },
      ],
    },
    {
      title: "周辺・応用",
      body: `
        <p>続いて、解析手法や符号化の方式、皮質地図など、やや専門的な語を頻出順に挙げる。</p>
        <ol class="kana-rank">
          <li><b>ニューラルコリレート（neural correlate）</b> … ある心的状態に対応する神経活動。NCC=意識の神経相関が有名。</li>
          <li><b>デコーディング（decoding）</b> … 神経活動パターンから刺激や心的内容を読み出す解析。逆はエンコーディング。</li>
          <li><b>エクサイテーション / インヒビション（excitation / inhibition）</b> … 興奮性と抑制性。両者のバランス(E/Iバランス)が安定動作の鍵。</li>
          <li><b>ポピュレーションコーディング（population coding）</b> … 単一細胞でなく、多数ニューロンの活動パターンで情報を表す方式。</li>
          <li><b>トノトピー / レチノトピー（tonotopy / retinotopy）</b> … 音の周波数・網膜位置が皮質上に地図状に並ぶ秩序ある対応関係。</li>
        </ol>
        <div class="callout warn"><b>混同注意</b>：「読み出す解析」がデコーディング、「対応する活動そのもの」がニューラルコリレート。表象（レプリゼンテーション）は保持される内的状態を指し、これらとは層が違う。</div>
      `,
      terms: [
        { term: "ニューラルコリレート（neural correlate）", def: "ある心的状態に対応する神経活動。NCC=意識の神経相関が有名。" },
        { term: "デコーディング（decoding）", def: "神経活動パターンから刺激や心的内容を読み出す解析。逆はエンコーディング。" },
        { term: "エクサイテーション / インヒビション（excitation / inhibition）", def: "興奮性と抑制性。両者のバランス(E/Iバランス)が安定動作の鍵。" },
        { term: "ポピュレーションコーディング（population coding）", def: "単一細胞でなく、多数ニューロンの活動パターンで情報を表す方式。" },
        { term: "トノトピー / レチノトピー（tonotopy / retinotopy）", def: "音の周波数・網膜位置が皮質上に地図状に並ぶ秩序ある対応関係。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "経験によって神経結合が変化していく性質。学習や損傷からの回復を支える基盤とされる。", choices: ["プラスティシティ / 可塑性（plasticity）", "コネクティビティ（connectivity）", "オシレーション / 神経振動（oscillation）", "デコーディング（decoding）"], answer: 0, explain: "「変化する性質」を指すのがプラスティシティ。コネクティビティは結合そのもの、オシレーションは周期的活動。", difficulty: 1 },
    { type: "mcq", stem: "脳領域どうしの結合のこと。構造的・機能的・実効的の3種に区別して論じられる。", choices: ["プラスティシティ / 可塑性（plasticity）", "コネクティビティ（connectivity）", "ポピュレーションコーディング（population coding）", "レプリゼンテーション / 表象（representation）"], answer: 1, explain: "領域間の結合そのものを指すのがコネクティビティ。結合が変わる性質はプラスティシティ。", difficulty: 1 },
    { type: "mcq", stem: "知識や期待による上位からの制御と、感覚入力に駆動される下位からの処理という、情報の流れの2方向を対にした概念。", choices: ["エクサイテーション / インヒビション（excitation / inhibition）", "エンコーディング / デコーディング（encoding / decoding）", "トップダウン / ボトムアップ（top-down / bottom-up）", "トノトピー / レチノトピー（tonotopy / retinotopy）"], answer: 2, explain: "上位制御と感覚駆動の対はトップダウン/ボトムアップ。興奮/抑制の対はエクサイテーション/インヒビション。", difficulty: 1 },
    { type: "mcq", stem: "θ・α・γといった周波数帯ごとに見られる、周期的な脳活動。注意や記憶との関連で語られる。", choices: ["コネクティビティ（connectivity）", "ニューラルコリレート（neural correlate）", "プラスティシティ / 可塑性（plasticity）", "オシレーション / 神経振動（oscillation）"], answer: 3, explain: "周波数帯ごとの周期的活動はオシレーション。心的状態に対応する活動一般はニューラルコリレート。", difficulty: 1 },
    { type: "mcq", stem: "課題に取り組んでいない安静時に、かえって活動が高まる脳ネットワーク。自己や内省と結びつけられる。", choices: ["ポピュレーションコーディング（population coding）", "デフォルトモードネットワーク（DMN）", "コネクティビティ（connectivity）", "オシレーション / 神経振動（oscillation）"], answer: 1, explain: "安静時に活動が高まるネットワークがデフォルトモードネットワーク。結合一般を指すコネクティビティとは別。", difficulty: 2 },
    { type: "mcq", stem: "脳やモデルが情報を符号化して保ち持つ内的な状態。情報がどう「持たれているか」を指す語。", choices: ["デコーディング（decoding）", "ニューラルコリレート（neural correlate）", "レプリゼンテーション / 表象（representation）", "コネクティビティ（connectivity）"], answer: 2, explain: "情報を保持する内的状態がレプリゼンテーション（表象）。それを読み出す解析がデコーディング。", difficulty: 2 },
    { type: "mcq", stem: "ある心的状態に対応して生じる神経活動。意識との対応を論じる文脈で特に有名な概念。", choices: ["ニューラルコリレート（neural correlate）", "デコーディング（decoding）", "レプリゼンテーション / 表象（representation）", "ポピュレーションコーディング（population coding）"], answer: 0, explain: "心的状態に対応する活動がニューラルコリレート。読み出す解析手法はデコーディング。", difficulty: 2 },
    { type: "mcq", stem: "神経活動のパターンから、提示された刺激や心的内容を読み出そうとする解析手法。", choices: ["レプリゼンテーション / 表象（representation）", "ニューラルコリレート（neural correlate）", "オシレーション / 神経振動（oscillation）", "デコーディング（decoding）"], answer: 3, explain: "活動パターンから内容を読み出す解析がデコーディング。保持される内的状態は表象。", difficulty: 2 },
    { type: "mcq", stem: "興奮性と抑制性の対。両者のつり合い（E/Iバランス）が回路の安定した動作の鍵とされる。", choices: ["トップダウン / ボトムアップ（top-down / bottom-up）", "トノトピー / レチノトピー（tonotopy / retinotopy）", "エクサイテーション / インヒビション（excitation / inhibition）", "エンコーディング / デコーディング（encoding / decoding）"], answer: 2, explain: "興奮と抑制の対はエクサイテーション/インヒビション。上位制御と感覚駆動の対はトップダウン/ボトムアップ。", difficulty: 2 },
    { type: "mcq", stem: "単一の細胞ではなく、多数のニューロンの活動パターン全体で情報を表すという符号化の方式。", choices: ["ポピュレーションコーディング（population coding）", "コネクティビティ（connectivity）", "デフォルトモードネットワーク（DMN）", "プラスティシティ / 可塑性（plasticity）"], answer: 0, explain: "集団の活動パターンで情報を表すのがポピュレーションコーディング。領域間の結合はコネクティビティ。", difficulty: 3 },
    { type: "mcq", stem: "音の周波数や網膜上の位置が、皮質の上に地図状に秩序立てて並ぶ対応関係。", choices: ["ニューラルコリレート（neural correlate）", "トノトピー / レチノトピー（tonotopy / retinotopy）", "ポピュレーションコーディング（population coding）", "コネクティビティ（connectivity）"], answer: 1, explain: "皮質上の地図状の秩序ある対応がトノトピー/レチノトピー。集団による符号化はポピュレーションコーディング。", difficulty: 3 },
  ],
});
