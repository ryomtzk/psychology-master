/* === 横文字（カタカナ語）特別編 統計・方法論 (kana_stats) === */
PsychApp.registerModule({
  id: "kana_stats",
  title: "統計・方法論の横文字",
  emoji: "📊",
  category: "katakana",
  tagline: "統計・研究方法論で頻出するカタカナ語を頻出順に。意味から単語を当てる演習つき",
  overview: `<p>心理学・認知科学の論文を読むと、統計や研究デザインの話に横文字（カタカナ語）が大量に登場する。ここではそれらを、研究論文での<strong>出現頻度の高い順</strong>に整理する。バイアスやエフェクトサイズのような最頻出語から、コリニアリティやディマンドキャラクタリスティクスのような周辺・応用語まで、混同しやすい対をそろえて並べた。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "コア（最頻出）",
      body: `
        <p>まずは論文で最もよく目にする語から。番号は<strong>頻出順（だいたいの目安）</strong>である。効果の大きさ・偏り・変数の役割をめぐる基本語が並ぶ。</p>
        <ol class="kana-rank">
          <li><b>バイアス（bias）</b> … 推定値の系統的な偏り。文脈で意味が変わる。</li>
          <li><b>エフェクトサイズ（effect size）</b> … 効果の大きさの指標。Cohen's d、η²、r など。</li>
          <li><b>パワー（statistical power）</b> … 効果が本当にあるとき、それを検出できる確率（1−β）。</li>
          <li><b>モデレーター（moderator）</b> … 2変数の関係の強さや向きを変える第三の変数。交互作用として検出される。</li>
          <li><b>メディエーター（mediator）</b> … X→Yの効果を媒介する変数。X→M→Yという経路でメカニズムを表す。</li>
          <li><b>コンファウンダー / 交絡変数（confounder）</b> … XとYの両方に影響し、見かけの相関を生む厄介な変数。</li>
          <li><b>コバリエイト / 共変量（covariate）</b> … 関心の中心ではないが、誤差を減らすため統制する変数。</li>
          <li><b>アウトライアー / 外れ値（outlier）</b> … 分布から大きく外れた観測値。処理次第で結論が変わりうる。</li>
          <li><b>セレクションバイアス（selection bias）</b> … 標本の選ばれ方が偏り、母集団を代表しなくなること。</li>
          <li><b>ロバスト（robust）</b> … 前提が多少崩れても結果が頑健であること。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：効果を「調整」するのがモデレーター、「媒介」するのがメディエーター。XとYの両方に影響して見かけの相関を生むのがコンファウンダー、誤差を減らすために投入するだけの脇役がコバリエイト。</div>
      `,
      terms: [
        { term: "バイアス（bias）", def: "推定値の系統的な偏り。サンプリングバイアス・確証バイアスなど文脈で意味が変わる。" },
        { term: "エフェクトサイズ（effect size）", def: "効果の大きさの指標。Cohen's d、η²、r など。p値と違いサンプルサイズに依存しにくい。" },
        { term: "パワー（statistical power）", def: "本当に効果があるときにそれを検出できる確率。1−β。" },
        { term: "モデレーター（moderator）", def: "2変数の関係の強さや向きを変える第三の変数。交互作用として検出される。" },
        { term: "メディエーター（mediator）", def: "X→Yの効果を媒介する変数。X→M→Yという経路でメカニズムを表す。" },
        { term: "コンファウンダー / 交絡変数（confounder）", def: "XとYの両方に影響し、見かけ上の相関を生む厄介な変数。統制しないと因果を誤る。" },
        { term: "コバリエイト / 共変量（covariate）", def: "主たる関心ではないが、誤差を減らすために統制する変数。ANCOVAなどで投入する。" },
        { term: "アウトライアー / 外れ値（outlier）", def: "分布から大きく外れた観測値。処理の仕方で結論が変わりうる。" },
        { term: "セレクションバイアス（selection bias）", def: "標本の選ばれ方が偏り、母集団を代表しなくなること。" },
        { term: "ロバスト（robust）", def: "前提が多少崩れても結果が頑健であること。再現しやすく安定した効果。" },
      ],
    },
    {
      title: "周辺・応用",
      body: `
        <p>続いて、デザイン上の手続きや、回帰・メタ分析・実験統制で出てくる語。やや専門的だが論文では確実に登場する。</p>
        <ol class="kana-rank" start="11">
          <li><b>カウンターバランス（counterbalancing）</b> … 順序効果を相殺するため、条件提示順を入れ替える手続き。</li>
          <li><b>マニピュレーションチェック（manipulation check）</b> … 操作（独立変数）が意図通り効いたかを確認する測定。</li>
          <li><b>シーリング / フロア効果（ceiling / floor effect）</b> … 課題が易/難しすぎて得点が天井・床に張りつく現象。</li>
          <li><b>キャリブレーション（calibration）</b> … 主観的確信度と実際の正答率の対応。よく合えば「良い」。</li>
          <li><b>アーティファクト（artifact）</b> … 手続きや測定の副作用で生じた、本質的でない見かけの効果。</li>
          <li><b>コリニアリティ / 多重共線性（collinearity）</b> … 説明変数どうしが強く相関し、回帰係数が不安定になる状態。</li>
          <li><b>ヘテロジニアティ / 異質性（heterogeneity）</b> … 効果が研究間・個人間で一様でないこと。メタ分析で問題になる。</li>
          <li><b>ディマンドキャラクタリスティクス（demand characteristics）</b> … 被験者が実験意図を察し、それに合わせて振る舞う手がかり。</li>
          <li><b>ディコンファウンド（deconfound）</b> … 交絡を取り除いて、純粋な効果を見えるようにすること。</li>
        </ol>
        <div class="callout warn"><b>混同注意</b>：手続きの副作用で生じた見かけの効果が<b>アーティファクト</b>、被験者が意図を察して生む偏りが<b>ディマンドキャラクタリスティクス</b>。交絡そのものが<b>コンファウンダー</b>、その交絡を除く操作が<b>ディコンファウンド</b>。</div>
      `,
      terms: [
        { term: "カウンターバランス（counterbalancing）", def: "順序効果を相殺するため、条件提示順を被験者間で入れ替える手続き。" },
        { term: "マニピュレーションチェック（manipulation check）", def: "操作（独立変数）が意図通り効いたかを確認する測定。" },
        { term: "シーリング / フロア効果（ceiling / floor effect）", def: "課題が易しすぎる/難しすぎて、得点が天井・床に張りつき差が出ない現象。" },
        { term: "キャリブレーション（calibration）", def: "主観的確信度と実際の正答率の対応。よく合っていれば「キャリブレーションが良い」。" },
        { term: "アーティファクト（artifact）", def: "実験手続きや測定の副作用で生じた、本質的でない見かけの効果。" },
        { term: "コリニアリティ / 多重共線性（collinearity）", def: "説明変数どうしが強く相関し、回帰係数が不安定になる状態。" },
        { term: "ヘテロジニアティ / 異質性（heterogeneity）", def: "効果が研究間・個人間で一様でないこと。メタ分析で問題になる。" },
        { term: "ディマンドキャラクタリスティクス（demand characteristics）", def: "被験者が実験意図を察し、それに合わせて振る舞ってしまう手がかり。" },
        { term: "ディコンファウンド（deconfound）", def: "交絡を取り除いて、純粋な効果を見えるようにすること。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "推定値に系統的に生じる偏り。標本の選び方や測定、判断のクセなど、さまざまな場面で問題になる総称的な語。", choices: ["バイアス（bias）", "アウトライアー / 外れ値（outlier）", "ロバスト（robust）", "パワー（statistical power）"], answer: 0, explain: "系統的な偏り一般を指すのがバイアス。外れ値はアウトライアー、頑健さはロバスト。", difficulty: 1 },
    { type: "mcq", stem: "効果の「大きさ」を表す指標。Cohen's d や η²、r など。p値と違ってサンプルサイズに依存しにくい。", choices: ["パワー（statistical power）", "エフェクトサイズ（effect size）", "キャリブレーション（calibration）", "バイアス（bias）"], answer: 1, explain: "効果の大きさそのものを表すのがエフェクトサイズ。検出確率はパワー。", difficulty: 1 },
    { type: "mcq", stem: "本当に効果が存在するとき、検定でそれを正しく検出できる確率。1−βに等しい。", choices: ["エフェクトサイズ（effect size）", "コバリエイト / 共変量（covariate）", "パワー（statistical power）", "キャリブレーション（calibration）"], answer: 2, explain: "効果を検出できる確率（1−β）がパワー。効果の大きさはエフェクトサイズで別概念。", difficulty: 1 },
    { type: "mcq", stem: "2変数の関係の『強さや向き』を変える第三の変数。ある変数の水準によってX→Yの効果が変わるとき、それを指す語はどれか。", choices: ["メディエーター（mediator）", "コンファウンダー / 交絡変数（confounder）", "コバリエイト / 共変量（covariate）", "モデレーター（moderator）"], answer: 3, explain: "効果の強さ・向きを調整するのがモデレーターで、交互作用として現れる。媒介するのはメディエーター。", difficulty: 2 },
    { type: "mcq", stem: "X→Yの効果を『媒介』する変数。X→M→Yという経路で効果が伝わり、「なぜ効くのか」のメカニズムを表す。", choices: ["メディエーター（mediator）", "モデレーター（moderator）", "コンファウンダー / 交絡変数（confounder）", "コバリエイト / 共変量（covariate）"], answer: 0, explain: "効果を媒介してメカニズムを表すのがメディエーター。効果の向き・強さを変えるのはモデレーター。", difficulty: 2 },
    { type: "mcq", stem: "原因と結果の両方に影響を与え、見かけ上の相関を生んでしまう厄介な変数。統制しないと因果を誤る。", choices: ["コバリエイト / 共変量（covariate）", "コンファウンダー / 交絡変数（confounder）", "モデレーター（moderator）", "アウトライアー / 外れ値（outlier）"], answer: 1, explain: "両方に影響して見かけの相関を生むのがコンファウンダー（交絡）。誤差低減のために入れる脇役はコバリエイト。", difficulty: 2 },
    { type: "mcq", stem: "主たる関心ではないが、誤差を減らすために統計的に統制する変数。ANCOVAなどで投入する。", choices: ["コンファウンダー / 交絡変数（confounder）", "モデレーター（moderator）", "コバリエイト / 共変量（covariate）", "メディエーター（mediator）"], answer: 2, explain: "誤差低減のために統制する脇役の変数がコバリエイト。見かけの相関を生む厄介者はコンファウンダー。", difficulty: 2 },
    { type: "mcq", stem: "分布から大きく外れた観測値。どう処理するかで結論が変わりうるため扱いに注意がいる。", choices: ["アウトライアー / 外れ値（outlier）", "バイアス（bias）", "アーティファクト（artifact）", "ロバスト（robust）"], answer: 0, explain: "分布から大きく外れた個々の値がアウトライアー。系統的な偏り一般はバイアス。", difficulty: 1 },
    { type: "mcq", stem: "標本の選ばれ方が偏ったために、その標本が母集団を代表しなくなってしまうこと。", choices: ["ヘテロジニアティ / 異質性（heterogeneity）", "セレクションバイアス（selection bias）", "コリニアリティ / 多重共線性（collinearity）", "アーティファクト（artifact）"], answer: 1, explain: "標本抽出の偏りで代表性が失われるのがセレクションバイアス。効果のばらつき一般は異質性。", difficulty: 2 },
    { type: "mcq", stem: "前提が多少崩れても結果が頑健で、再現しやすく安定していること。「〜な効果」という形で使う。", choices: ["バイアス（bias）", "パワー（statistical power）", "ロバスト（robust）", "キャリブレーション（calibration）"], answer: 2, explain: "前提が崩れても頑健であることがロバスト。検出確率はパワーで別概念。", difficulty: 1 },
    { type: "mcq", stem: "順序効果を相殺するため、条件を提示する順番を被験者間で入れ替える実験手続き。", choices: ["マニピュレーションチェック（manipulation check）", "カウンターバランス（counterbalancing）", "キャリブレーション（calibration）", "ディコンファウンド（deconfound）"], answer: 1, explain: "提示順を入れ替えて順序効果を相殺するのがカウンターバランス。操作が効いたか確かめるのはマニピュレーションチェック。", difficulty: 2 },
    { type: "mcq", stem: "操作した独立変数が意図どおりに効いたかどうかを、別の測定で確認すること。", choices: ["カウンターバランス（counterbalancing）", "キャリブレーション（calibration）", "マニピュレーションチェック（manipulation check）", "アーティファクト（artifact）"], answer: 2, explain: "操作の効きを確認する測定がマニピュレーションチェック。提示順を入れ替えるのはカウンターバランス。", difficulty: 2 },
    { type: "mcq", stem: "課題が易しすぎたり難しすぎたりして、得点が上限・下限に張りつき、条件差が出なくなる現象。", choices: ["シーリング / フロア効果（ceiling / floor effect）", "アウトライアー / 外れ値（outlier）", "ヘテロジニアティ / 異質性（heterogeneity）", "セレクションバイアス（selection bias）"], answer: 0, explain: "得点が天井・床に張りついて差が消えるのがシーリング/フロア効果。外れ値はアウトライアー。", difficulty: 2 },
    { type: "mcq", stem: "主観的な確信度が、実際の正答率とどれだけ対応しているか。両者がよく合っていれば「良い」とされる。", choices: ["パワー（statistical power）", "キャリブレーション（calibration）", "ロバスト（robust）", "マニピュレーションチェック（manipulation check）"], answer: 1, explain: "確信度と正答率の対応がキャリブレーション。効果の検出確率はパワーで無関係。", difficulty: 2 },
    { type: "mcq", stem: "実験手続きや測定の副作用で生じた、本質的でない見かけの効果。", choices: ["バイアス（bias）", "アウトライアー / 外れ値（outlier）", "アーティファクト（artifact）", "ディマンドキャラクタリスティクス（demand characteristics）"], answer: 2, explain: "手続き・測定の副作用による見かけの効果がアーティファクト。被験者が意図を察して生む偏りはディマンドキャラクタリスティクス。", difficulty: 3 },
    { type: "mcq", stem: "説明変数どうしが強く相関しているために、回帰係数の推定が不安定になってしまう状態。", choices: ["ヘテロジニアティ / 異質性（heterogeneity）", "セレクションバイアス（selection bias）", "コリニアリティ / 多重共線性（collinearity）", "アウトライアー / 外れ値（outlier）"], answer: 2, explain: "説明変数間の強い相関で回帰係数が不安定になるのがコリニアリティ（多重共線性）。効果のばらつきは異質性。", difficulty: 3 },
    { type: "mcq", stem: "効果の大きさが研究間や個人間で一様でなく、ばらついていること。メタ分析でとくに問題になる。", choices: ["コリニアリティ / 多重共線性（collinearity）", "ヘテロジニアティ / 異質性（heterogeneity）", "セレクションバイアス（selection bias）", "シーリング / フロア効果（ceiling / floor effect）"], answer: 1, explain: "効果が研究間・個人間で一様でないことが異質性（ヘテロジニアティ）。説明変数間の相関は多重共線性。", difficulty: 3 },
    { type: "mcq", stem: "被験者が実験の意図を察し、それに合わせて振る舞ってしまうきっかけとなる、課題中の手がかり。", choices: ["ディマンドキャラクタリスティクス（demand characteristics）", "アーティファクト（artifact）", "セレクションバイアス（selection bias）", "マニピュレーションチェック（manipulation check）"], answer: 0, explain: "被験者が意図を察して振る舞いを変える手がかりがディマンドキャラクタリスティクス。手続きの副作用による見かけの効果はアーティファクト。", difficulty: 3 },
    { type: "mcq", stem: "交絡を取り除いて、興味の対象である純粋な効果を見えるようにすること。", choices: ["カウンターバランス（counterbalancing）", "キャリブレーション（calibration）", "マニピュレーションチェック（manipulation check）", "ディコンファウンド（deconfound）"], answer: 3, explain: "交絡を除いて純粋な効果を取り出す操作がディコンファウンド。交絡変数そのものはコンファウンダー。", difficulty: 3 },
  ],
});
