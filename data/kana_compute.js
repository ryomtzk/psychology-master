/* === 横文字（カタカナ語）特別編 計算論・モデリング (kana_compute) === */
PsychApp.registerModule({
  id: "kana_compute",
  title: "計算論・モデリングの横文字",
  emoji: "🤖",
  category: "katakana",
  tagline: "計算論・モデリング分野の頻出カタカナ語を頻出順に。意味から単語を当てる演習つき。",
  overview: `<p>ベイズ推論・強化学習・予測符号化・機械学習といった計算論的アプローチでは、英語由来のカタカナ語が議論の骨格を作る。ここではこの分野で頻出する横文字（カタカナ語）を、研究論文での出現頻度の高い順に整理する。意味のよく似た対（プライアー／ポステリア、エクスプロレーション／エクスプロイテーション、オーバーフィッティング／レギュラリゼーションなど）を並べてあるので、違いを意識しながら覚えていきたい。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "コア（最頻出）",
      body: `
        <p>まずは最もよく目にする語から。ベイズ推論と強化学習の中核語が中心である。番号は<strong>頻出順（だいたいの目安）</strong>である。</p>
        <ol class="kana-rank">
          <li><b>ベイジアン（Bayesian）</b> … 事前信念を観測で更新する確率的推論の枠組み。知覚・学習のモデルで主流。</li>
          <li><b>プライアー / ポステリア（prior / posterior）</b> … 事前確率 と 観測後に更新された事後確率。</li>
          <li><b>ライクリフッド / 尤度（likelihood）</b> … あるパラメータのもとでデータが得られる尤もらしさ。</li>
          <li><b>プレディクションエラー / 予測誤差（prediction error）</b> … 予測と実際のズレ。学習を駆動する信号。</li>
          <li><b>プレディクティブコーディング / 予測符号化（predictive coding）</b> … 脳が入力を予測し、予測誤差だけを上位へ伝えるという理論。</li>
          <li><b>リワード / 報酬（reward）</b> … 強化学習で行動価値を更新する基準量。</li>
          <li><b>バリュー / 価値（value）</b> … 将来得られる報酬の期待値。意思決定の中核変数。</li>
          <li><b>ポリシー / 方策（policy）</b> … 状態に対してどの行動を選ぶかの規則。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：観測<strong>前</strong>の信念がプライアー、観測<strong>後</strong>に更新された信念がポステリア。尤度は「パラメータのもとでデータが出る確からしさ」で、向きが逆。</div>
        <div class="callout note"><b>報酬まわりの区別</b>：いま受け取る量が<strong>リワード（報酬）</strong>、その将来期待値が<strong>バリュー（価値）</strong>、行動の選び方の規則が<strong>ポリシー（方策）</strong>。</div>
      `,
      terms: [
        { term: "ベイジアン（Bayesian）", def: "事前信念を観測で更新する確率的推論の枠組み。知覚・学習のモデルで主流。" },
        { term: "プライアー / ポステリア（prior / posterior）", def: "事前確率 と 観測後に更新された事後確率。" },
        { term: "ライクリフッド / 尤度（likelihood）", def: "あるパラメータのもとでデータが得られる尤もらしさ。" },
        { term: "プレディクションエラー / 予測誤差（prediction error）", def: "予測と実際のズレ。学習を駆動する信号（RLの報酬予測誤差など）。" },
        { term: "プレディクティブコーディング / 予測符号化（predictive coding）", def: "脳が入力を予測し、予測誤差だけを上位へ伝えるという理論。" },
        { term: "リワード / 報酬（reward）", def: "強化学習で行動価値を更新する基準量。" },
        { term: "バリュー / 価値（value）", def: "将来得られる報酬の期待値。意思決定の中核変数。" },
        { term: "ポリシー / 方策（policy）", def: "状態に対してどの行動を選ぶかの規則。" },
      ],
    },
    {
      title: "周辺・応用",
      body: `
        <p>続いて、機械学習寄りの手法やモデル化に関わる語、そして統合理論の語へ。番号は<strong>頻出順（だいたいの目安）</strong>の続きである。</p>
        <ol class="kana-rank">
          <li><b>オーバーフィッティング / 過学習（overfitting）</b> … 訓練データに合わせすぎ、新規データへ般化しなくなること。</li>
          <li><b>エクスプロレーション / エクスプロイテーション（exploration / exploitation）</b> … 未知を探るか、既知の良い選択肢を活用するかのトレードオフ。</li>
          <li><b>グラディエント / 勾配（gradient）</b> … 誤差を減らす方向を示す微分。勾配降下で学習が進む。</li>
          <li><b>レギュラリゼーション / 正則化（regularization）</b> … 過学習を抑えるためモデルの複雑さに罰則を課す手法。</li>
          <li><b>ジェネレーティブモデル（generative model）</b> … データがどう生成されるかを表す確率モデル。知覚＝逆問題を解くという見方。</li>
          <li><b>エンベディング（embedding）</b> … 単語や概念を意味的な近さが反映されるベクトル空間に配置した表現。</li>
          <li><b>フリーエナジー（free energy）</b> … 予測誤差を統合した量で、これを最小化するよう脳が働くとするFristonの原理。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：訓練データに過剰適合してしまう<strong>問題</strong>がオーバーフィッティング、それを<strong>抑える手法</strong>がレギュラリゼーション。原因と対策の関係。</div>
        <div class="callout note"><b>探索と活用</b>：エクスプロレーション（探索）とエクスプロイテーション（活用）はトレードオフの両極。どちらか一方ではなくバランスを取る点が要点。</div>
      `,
      terms: [
        { term: "オーバーフィッティング / 過学習（overfitting）", def: "訓練データに合わせすぎ、新規データへ般化しなくなること。" },
        { term: "エクスプロレーション / エクスプロイテーション（exploration / exploitation）", def: "未知を探るか、既知の良い選択肢を活用するかのトレードオフ。" },
        { term: "グラディエント / 勾配（gradient）", def: "誤差を減らす方向を示す微分。勾配降下で学習が進む。" },
        { term: "レギュラリゼーション / 正則化（regularization）", def: "過学習を抑えるためモデルの複雑さに罰則を課す手法。" },
        { term: "ジェネレーティブモデル（generative model）", def: "データがどう生成されるかを表す確率モデル。知覚＝逆問題を解くという見方。" },
        { term: "エンベディング（embedding）", def: "単語や概念を意味的な近さが反映されるベクトル空間に配置した表現。" },
        { term: "フリーエナジー（free energy）", def: "予測誤差を統合した量で、これを最小化するよう脳が働くとするFristonの原理。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "事前にもっている信念を、得られた観測データによって確率的に更新していく推論の枠組み。知覚や学習のモデルで広く使われる。", choices: ["ベイジアン（Bayesian）", "ジェネレーティブモデル（generative model）", "プレディクティブコーディング / 予測符号化（predictive coding）", "フリーエナジー（free energy）"], answer: 0, explain: "事前信念を観測で更新する確率推論の枠組みがベイジアン。生成モデルや予測符号化はその応用・関連理論。", difficulty: 1 },
    { type: "mcq", stem: "観測する前にもっている確率と、観測したあとに更新された確率。この対をなす二つを指す語。", choices: ["リワード / 報酬（reward）", "プライアー / ポステリア（prior / posterior）", "ライクリフッド / 尤度（likelihood）", "バリュー / 価値（value）"], answer: 1, explain: "観測前がプライアー、観測後の更新結果がポステリア。尤度はパラメータのもとでデータが出る確からしさで別物。", difficulty: 2 },
    { type: "mcq", stem: "あるパラメータを仮定したとき、手元のデータがどれだけ得られやすいかという尤もらしさ。", choices: ["プライアー / ポステリア（prior / posterior）", "バリュー / 価値（value）", "グラディエント / 勾配（gradient）", "ライクリフッド / 尤度（likelihood）"], answer: 3, explain: "パラメータのもとでのデータの出やすさが尤度。事前・事後の確率（プライアー／ポステリア）とは向きが逆。", difficulty: 2 },
    { type: "mcq", stem: "脳やモデルが立てた予測と、実際に入ってきたものとのズレ。学習を駆動する信号として働く。", choices: ["リワード / 報酬（reward）", "ライクリフッド / 尤度（likelihood）", "プレディクションエラー / 予測誤差（prediction error）", "フリーエナジー（free energy）"], answer: 2, explain: "予測と実際のズレが予測誤差で、学習を駆動する。報酬は更新の基準量、自由エネルギーは誤差を統合した量。", difficulty: 1 },
    { type: "mcq", stem: "脳は入力を絶えず予測し、予測しきれなかったズレだけを上位の領域へ送る、とする理論。", choices: ["プレディクティブコーディング / 予測符号化（predictive coding）", "ベイジアン（Bayesian）", "ジェネレーティブモデル（generative model）", "ポリシー / 方策（policy）"], answer: 0, explain: "予測誤差だけを上位へ伝える理論が予測符号化。ベイジアンは一般的枠組み、生成モデルはデータ生成過程の表現。", difficulty: 2 },
    { type: "mcq", stem: "強化学習で、行動の価値を更新する基準となる、その場で受け取る量。", choices: ["バリュー / 価値（value）", "リワード / 報酬（reward）", "ポリシー / 方策（policy）", "グラディエント / 勾配（gradient）"], answer: 1, explain: "いま受け取る基準量が報酬。将来期待値は価値、行動選択の規則は方策で、混同しやすい三つ組。", difficulty: 1 },
    { type: "mcq", stem: "将来にわたって得られる報酬の期待値。意思決定の中核となる変数。", choices: ["リワード / 報酬（reward）", "ポリシー / 方策（policy）", "バリュー / 価値（value）", "プレディクションエラー / 予測誤差（prediction error）"], answer: 2, explain: "将来報酬の期待値が価値。その場の量である報酬とは区別される。方策は行動の選び方の規則。", difficulty: 2 },
    { type: "mcq", stem: "それぞれの状態に対して、どの行動を選ぶかを定める規則。", choices: ["ポリシー / 方策（policy）", "バリュー / 価値（value）", "リワード / 報酬（reward）", "エンベディング（embedding）"], answer: 0, explain: "状態から行動を決める規則が方策。価値は将来報酬の期待値、報酬はその場の基準量で役割が異なる。", difficulty: 2 },
    { type: "mcq", stem: "訓練データに合わせすぎてしまい、新しいデータにうまく般化できなくなる状態。", choices: ["レギュラリゼーション / 正則化（regularization）", "オーバーフィッティング / 過学習（overfitting）", "グラディエント / 勾配（gradient）", "ジェネレーティブモデル（generative model）"], answer: 1, explain: "訓練データへの過剰適合が過学習。それを抑える手法が正則化で、両者は問題と対策の関係。", difficulty: 1 },
    { type: "mcq", stem: "まだ知らない選択肢を試すか、すでに分かっている良い選択肢を使うか、という二者のトレードオフ。", choices: ["エクスプロレーション / エクスプロイテーション（exploration / exploitation）", "プライアー / ポステリア（prior / posterior）", "オーバーフィッティング / 過学習（overfitting）", "コンソリデーション / 固定化（consolidation）"], answer: 0, explain: "探索と活用のトレードオフがこの語。事前・事後の確率対や過学習とは無関係。", difficulty: 2 },
    { type: "mcq", stem: "誤差を最も減らせる方向を示す微分。これに沿って降下することで学習が進む。", choices: ["フリーエナジー（free energy）", "ライクリフッド / 尤度（likelihood）", "グラディエント / 勾配（gradient）", "バリュー / 価値（value）"], answer: 2, explain: "誤差を減らす方向の微分が勾配で、勾配降下に使う。自由エネルギーや尤度は最小化・最大化の対象量。", difficulty: 1 },
    { type: "mcq", stem: "モデルが複雑になりすぎないよう罰則を課し、過剰な適合を抑えるための手法。", choices: ["オーバーフィッティング / 過学習（overfitting）", "レギュラリゼーション / 正則化（regularization）", "グラディエント / 勾配（gradient）", "エンベディング（embedding）"], answer: 1, explain: "複雑さに罰則を課して過学習を抑える手法が正則化。過学習はその抑えるべき問題そのもの。", difficulty: 2 },
    { type: "mcq", stem: "データがどのように生成されるかを表す確率モデル。知覚を逆問題として解くという見方につながる。", choices: ["プレディクティブコーディング / 予測符号化（predictive coding）", "ポリシー / 方策（policy）", "レギュラリゼーション / 正則化（regularization）", "ジェネレーティブモデル（generative model）"], answer: 3, explain: "データの生成過程を表す確率モデルが生成モデル。予測符号化はそれを脳の処理として実装する理論。", difficulty: 2 },
    { type: "mcq", stem: "単語や概念を、意味的な近さが距離に反映されるようなベクトル空間上の点として表す表現。", choices: ["グラディエント / 勾配（gradient）", "ジェネレーティブモデル（generative model）", "エンベディング（embedding）", "バリュー / 価値（value）"], answer: 2, explain: "意味的近さを反映するベクトル表現がエンベディング。勾配や生成モデルとは役割が異なる。", difficulty: 2 },
    { type: "mcq", stem: "予測誤差を統合した量で、これを最小化するように脳が働くとするFristonの原理に登場する量。", choices: ["フリーエナジー（free energy）", "プレディクションエラー / 予測誤差（prediction error）", "リワード / 報酬（reward）", "ライクリフッド / 尤度（likelihood）"], answer: 0, explain: "誤差を統合し最小化対象とする量が自由エネルギー。予測誤差はその構成要素であり、同一ではない。", difficulty: 3 },
  ],
});
