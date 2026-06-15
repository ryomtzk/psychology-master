/* === 楽観性の心理学（特別編） 気質的楽観主義とLOT (opt_dispositional) === */
PsychApp.registerModule({
  id: "opt_dispositional",
  title: "気質的楽観主義とLOT",
  emoji: "🧭",
  category: "optimism",
  tagline: "Scheier & Carver(1985)・一般化された結果期待・LOT/LOT-R・状態としてのバイアスとの区別・健康と学習性楽観",
  overview: `<p>「楽観的だ」という言葉は、二つの異なるものを指しうる。一つは、未来の確率判断が体系的に歪む<strong>楽観性バイアス（optimism bias）</strong>——良い出来事を過大に、悪い出来事を過小に見積もる傾向であり、もう一つは、人生全般に良いことを期待するという比較的安定した<strong>性格特性（personality trait）</strong>としての楽観主義である。本モジュールは後者、すなわち <em>Scheier &amp; Carver</em>（1985）が <strong>Life Orientation Test（LOT）</strong> で測定可能にした<strong>気質的楽観主義（dispositional optimism）</strong>を扱い、これが「確率判断の歪み」とは概念的に別物であることを中核に据える。両者は混同されやすいため、まず区別を立て、そのうえで健康アウトカムや学習性楽観への接続を概観する。</p>
  <div class="callout warn"><b>序論で混同しないこと</b>：楽観性バイアスの論文を読む際、しばしば「楽観主義」という同じ語が<em>特性</em>と<em>確率判断の歪み</em>の両方に使われる。両者を一語で済ませると議論が混乱する。本モジュールはこの区別を明示するためにある。</div>`,
  lessons: [
    {
      title: "気質的楽観主義とLOT — 確率判断の歪みとは別物である",
      body: `
        <p>これまでのモジュールで扱ってきた<a href="#/module/opt_unrealistic">非現実的楽観主義（unrealistic optimism）</a>や<strong>楽観性バイアス（optimism bias）</strong>は、いずれも「ある特定の出来事について、自分が経験する確率をどう見積もるか」という<strong>確率判断（probability judgment）</strong>の歪みであった。これに対して本講で扱う<strong>気質的楽観主義（dispositional optimism）</strong>は、特定の確率判断ではなく、人生全般に対して良い結果を期待するかどうかという、比較的安定した<strong>性格特性（personality trait）</strong>である。</p>
        <h3>Scheier &amp; Carver（1985）とLOTの開発</h3>
        <p><em>Scheier &amp; Carver</em> は <em>Health Psychology</em>（4巻, 219–247, 1985年）において、気質的楽観主義を測定する自己報告式の尺度<strong>Life Orientation Test（LOT, 生活指向性検査）</strong>を開発した。LOTは「先のことについて、私はたいてい最善を期待する」といった項目への同意度を尋ね、その人がどれだけ良い結果を一般に期待しているかを得点化する。</p>
        <div class="callout key"><b>一般化された結果期待</b>：Scheier &amp; Carver は気質的楽観主義を<strong>一般化された結果期待（generalized outcome expectancy）</strong>として概念化した。すなわち、特定の場面に限らず<em>人生全般にわたって</em>良い結果が起こると期待する、安定した傾向のことである。「来月の試験に受かる確率は何％か」といった個別の確率見積もりとは、抽象度のレベルが異なる。</div>
        <p>この尺度は後に <em>Scheier, Carver, &amp; Bridges</em>（1994）によって <strong>LOT-R（Life Orientation Test–Revised, 改訂版）</strong>へと改訂された。LOT-Rは項目を精選し、楽観主義の測定をより明確にしたものである。今日「気質的楽観主義」を測る研究の多くは、このLOTまたはLOT-Rを用いている。</p>
        <h3>確率判断の歪み（楽観性バイアス）との区別</h3>
        <p>本講の最重要点は、<strong>気質的楽観主義と楽観性バイアスは概念的に異なる</strong>という区別である。両者は名前が似ているために混同されやすいが、測定しているものが違う。</p>
        <table>
          <tr><th>観点</th><th>気質的楽観主義（特性）</th><th>楽観性バイアス（確率判断の歪み）</th></tr>
          <tr><td><b>正体</b></td><td>安定した性格特性</td><td>確率見積もりの体系的な歪み</td></tr>
          <tr><td><b>測定するもの</b></td><td>人生全般への一般化された結果期待</td><td>特定の出来事を経験する確率の見積もり</td></tr>
          <tr><td><b>代表的測定</b></td><td>LOT / LOT-R（Scheier &amp; Carver）</td><td>比較法による自他リスク比較（Weinstein 1980 など）</td></tr>
          <tr><td><b>「正確さ」の問い</b></td><td>必ずしも問わない（期待の高低を測る）</td><td>現実からのズレ・非現実性を問う</td></tr>
        </table>
        <p>言い換えれば、気質的楽観主義は<em>「あなたはどれだけ良いことを期待する人か」</em>という<strong>個人差</strong>を測るのに対し、楽観性バイアスは<em>「人々の確率見積もりは現実からどれだけ歪んでいるか」</em>という<strong>判断の歪み</strong>を問う。前者は高くても低くても「歪んでいる」とは限らないが、後者はそもそも非現実性（バイアス）を含意する概念である。</p>
        <div class="callout tip"><b>区別の覚え方</b>：気質的楽観主義は「どんな人か（特性）」、楽観性バイアスは「どう判断が歪むか（確率の偏り）」。LOTが測るのは前者であって、特定の確率がどれだけ非現実的かではない。</div>
        <div class="callout note">なお、特性としての楽観主義（trait）と、特定場面で一時的に生じる状態（state）としての楽観も区別される。LOTは<strong>特性（比較的安定したその人の傾向）</strong>を測ることを意図した尺度である。状態との区別は次講で改めて整理する。</div>
        <div class="callout example"><b>例</b>：LOT得点の高いAさんは、仕事でも健康でも人間関係でも「だいたいうまくいくだろう」と一般に期待しがちである（特性）。これは「来年インフルエンザにかかる確率を平均より低く見積もる」という特定事象の確率判断（バイアスの測定対象）とは、別の水準の話である。</div>
      `,
      figure: `<svg viewBox="0 0 540 290" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="540" height="290" rx="14" fill="#f5f7fd"/>
        <text x="270" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">「楽観的」の二つの意味</text>
        <rect x="28" y="48" width="232" height="210" rx="10" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <rect x="280" y="48" width="232" height="210" rx="10" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="144" y="74" text-anchor="middle" font-size="13" font-weight="800" fill="#5b6cf0">気質的楽観主義</text>
        <text x="144" y="92" text-anchor="middle" font-size="10.5" fill="#5b6478">dispositional optimism（特性）</text>
        <text x="396" y="74" text-anchor="middle" font-size="13" font-weight="800" fill="#e0566b">楽観性バイアス</text>
        <text x="396" y="92" text-anchor="middle" font-size="10.5" fill="#5b6478">optimism bias（確率の歪み）</text>
        <line x1="44" y1="104" x2="244" y2="104" stroke="#5b6cf0" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="296" y1="104" x2="496" y2="104" stroke="#e0566b" stroke-width="1" stroke-dasharray="3 3"/>
        <g font-size="11" fill="#1d2433">
          <text x="44" y="128">測るもの：</text>
          <text x="58" y="146" font-size="10.5" fill="#5b6478">人生全般への</text>
          <text x="58" y="162" font-size="10.5" fill="#5b6478">一般化された結果期待</text>
          <text x="44" y="188">道具：</text>
          <text x="58" y="206" font-size="10.5" fill="#5b6478">LOT / LOT-R</text>
          <text x="44" y="232">問い：</text>
          <text x="58" y="250" font-size="10.5" fill="#5b6478">「どれだけ期待する人か」</text>
        </g>
        <g font-size="11" fill="#1d2433">
          <text x="296" y="128">測るもの：</text>
          <text x="310" y="146" font-size="10.5" fill="#5b6478">特定事象の確率の</text>
          <text x="310" y="162" font-size="10.5" fill="#5b6478">見積もりの歪み</text>
          <text x="296" y="188">道具：</text>
          <text x="310" y="206" font-size="10.5" fill="#5b6478">自他リスク比較（比較法）</text>
          <text x="296" y="232">問い：</text>
          <text x="310" y="250" font-size="10.5" fill="#5b6478">「現実からどれだけ歪むか」</text>
        </g>
        <text x="270" y="280" text-anchor="middle" font-size="9.5" fill="#5b6478">名前は似るが測定しているものが違う。混同しないことが重要である。</text>
      </svg>`,
      figcaption: "「楽観的」という語は二つの異なるものを指す。気質的楽観主義（LOTで測る性格特性）は人生全般への期待の高低を、楽観性バイアスは特定事象の確率判断の歪みを問う。抽象度も測定法も異なる。",
      terms: [
        { term: "気質的楽観主義（dispositional optimism）", def: "人生全般に良い結果を期待する、比較的安定した性格特性。" },
        { term: "一般化された結果期待（generalized outcome expectancy）", def: "特定場面に限らず人生全般で良い結果を期待する傾向。気質的楽観主義の中核概念。" },
        { term: "Life Orientation Test（LOT）", def: "Scheier & Carver(1985)が開発した気質的楽観主義の自己報告式尺度。" },
        { term: "LOT-R", def: "Scheier, Carver, & Bridges(1994)による改訂版LOT。項目を精選した。" },
        { term: "性格特性（trait）", def: "場面を超えて比較的安定した個人差。状態（state）と対比される。" },
        { term: "楽観性バイアス（optimism bias）", def: "特定事象の確率を良い方へ体系的に歪めて見積もる傾向。特性とは別概念。" },
        { term: "確率判断（probability judgment）", def: "ある出来事が自分に起こる確率の見積もり。バイアス研究の測定対象。" },
        { term: "Scheier & Carver(1985)", def: "Health Psychology誌でLOTを発表し、気質的楽観主義を確立した研究。" },
      ],
    },
    {
      title: "健康アウトカムと学習性楽観への接続",
      body: `
        <p>気質的楽観主義が注目されてきた大きな理由の一つは、それが<strong>健康（health）</strong>と関連すると論じられてきた点にある。LOTで測られる楽観主義の高さは、免疫機能の良好さや術後回復の良さと関連すると論じられてきた。<em>Scheier &amp; Carver</em> による楽観主義はもともと <em>Health Psychology</em> 誌で発表されたとおり、健康心理学の文脈で展開してきた概念である。この健康との関連は、<a href="#/module/health">健康・ストレスのモジュール</a>で扱う楽観性とも接続する。</p>
        <div class="callout warn"><b>慎重さが必要</b>：気質的楽観主義と健康の関連はしばしば論じられるが、具体的な効果量や被験者数を伴う個別研究の数値をここで断定することは控える。本講では「楽観主義が良好な健康アウトカムと関連すると論じられる」という記述レベルにとどめ、関連の方向や因果の強さは慎重に扱う。</div>
        <h3>セリグマンの学習性楽観と説明スタイル</h3>
        <p>楽観主義を「持って生まれた特性」だけでなく、後天的に学べるものとして捉える流れもある。<em>セリグマン（Seligman）</em>は、出来事の原因をどう説明するかという<strong>説明スタイル（explanatory style）</strong>に注目した。悪い出来事を「永続的・全般的・内的」に説明する悲観的スタイルと、「一時的・限定的・外的」に説明する楽観的スタイルがあり、後者の習得を<strong>学習性楽観（learned optimism）</strong>と呼ぶ。これは「変えられない気質」ではなく「学習しうる思考の様式」として楽観主義を捉え直す視点である。</p>
        <div class="callout note">セリグマンは元来<strong>学習性無力感（learned helplessness）</strong>の研究者であり、その対極として学習性楽観・<strong>ポジティブ心理学（positive psychology）</strong>へと展開した。説明スタイルや感情・幸福の話題は<a href="#/module/emotion">感情のモジュール</a>とも接続する。</div>
        <h3>気質（trait）・状態（state）・確率判断の三層を整理する</h3>
        <p>本特別編で扱ってきた「楽観」に関わる概念を、抽象度の異なる三つの層として整理しておく。区別しておくと、論文を読むときに「いま何の話をしているのか」を見失わずに済む。</p>
        <table>
          <tr><th>層</th><th>正体</th><th>例・測定</th></tr>
          <tr><td><b>気質（trait）</b></td><td>場面を超えて安定した性格特性としての楽観主義</td><td>LOT / LOT-R（Scheier &amp; Carver）</td></tr>
          <tr><td><b>状態（state）</b></td><td>その時々で一時的に変動する楽観的な気分・見通し</td><td>特定場面で一時的に高まる楽観</td></tr>
          <tr><td><b>確率判断の歪み</b></td><td>特定事象の確率を良い方へ歪める認知バイアス</td><td>自他リスク比較・信念更新の非対称性</td></tr>
        </table>
        <p>LOTが測るのは一番上の<strong>気質</strong>であり、楽観性バイアス研究が問題にするのは一番下の<strong>確率判断の歪み</strong>である。これらは互いに関連しうるが、同一ではない。前講で述べたとおり、名前が似ているからといって同じものとして扱ってはならない。</p>
        <div class="callout key"><b>本講のまとめ</b>：気質的楽観主義（LOTで測る特性）は健康アウトカムと関連すると論じられ、セリグマンの学習性楽観は楽観を「学べる説明スタイル」として捉え直した。いずれも<em>特性・状態の水準</em>の話であり、特定の<em>確率判断の歪み</em>としての楽観性バイアスとは層が異なる。この三層の区別を保つことが、楽観性研究を読むうえでの土台になる。</div>
        <div class="callout tip"><b>数学的な補強</b>：「確率判断の歪み」を厳密に論じるには、事前確率・事後確率・ベイズ更新といった確率の言葉が役立つ。条件付き確率やベイズの定理そのものは特別コース「<a href="bayes/index.html">ベイズの階段</a>」で段階的に学べる。</div>
      `,
      figure: `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="500" height="300" rx="14" fill="#f5f7fd"/>
        <text x="250" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">楽観に関わる三つの層</text>
        <rect x="70" y="48" width="360" height="56" rx="9" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="250" y="72" text-anchor="middle" font-size="13" font-weight="800" fill="#5b6cf0">気質（trait）</text>
        <text x="250" y="92" text-anchor="middle" font-size="10.5" fill="#5b6478">安定した性格特性 ／ LOT・LOT-R で測定</text>
        <rect x="70" y="122" width="360" height="56" rx="9" fill="#fdeccf" stroke="#f0a020" stroke-width="2"/>
        <text x="250" y="146" text-anchor="middle" font-size="13" font-weight="800" fill="#f0a020">状態（state）</text>
        <text x="250" y="166" text-anchor="middle" font-size="10.5" fill="#5b6478">その時々で変動する一時的な楽観</text>
        <rect x="70" y="196" width="360" height="56" rx="9" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="250" y="220" text-anchor="middle" font-size="13" font-weight="800" fill="#e0566b">確率判断の歪み</text>
        <text x="250" y="240" text-anchor="middle" font-size="10.5" fill="#5b6478">特定事象の確率を良い方へ歪める認知バイアス</text>
        <text x="40" y="80" font-size="10" fill="#5b6478" transform="rotate(-90 40 80)">抽象的・安定</text>
        <text x="40" y="234" font-size="10" fill="#5b6478" transform="rotate(-90 40 234)">具体的・場面的</text>
        <text x="250" y="278" text-anchor="middle" font-size="9.5" fill="#5b6478">LOTは最上層を、楽観性バイアス研究は最下層を扱う。関連しうるが同一ではない。</text>
      </svg>`,
      figcaption: "楽観に関わる概念は抽象度の異なる三層に整理できる。気質（LOTで測る特性）・状態（一時的変動）・確率判断の歪み（楽観性バイアス）。LOTは最上層を、バイアス研究は最下層を対象とする。",
      terms: [
        { term: "健康アウトカム（health outcome）", def: "気質的楽観主義は免疫機能や術後回復の良さと関連すると論じられる。" },
        { term: "説明スタイル（explanatory style）", def: "出来事の原因を永続的/一時的・全般的/限定的・内的/外的のどう説明するかの様式。" },
        { term: "学習性楽観（learned optimism）", def: "楽観的な説明スタイルを後天的に習得できるとするセリグマンの考え。" },
        { term: "学習性無力感（learned helplessness）", def: "統制不能な経験から無力感が学習される現象。セリグマンの初期研究。" },
        { term: "ポジティブ心理学（positive psychology）", def: "強みや幸福など人の良好な機能に注目する心理学。セリグマンが提唱。" },
        { term: "状態（state）としての楽観", def: "その時々で一時的に変動する楽観。安定した気質（trait）と対比される。" },
        { term: "三層の区別", def: "楽観を気質・状態・確率判断の歪みの三層に分けて整理する見方。" },
        { term: "Scheier, Carver, & Bridges(1994)", def: "LOTをLOT-Rへ改訂し、気質的楽観主義の測定を精緻化した研究。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "気質的楽観主義（dispositional optimism）を測定する尺度として、Scheier & Carver(1985)が開発したものはどれか。", choices: ["LOT（Life Orientation Test）", "ベック抑うつ尺度（BDI）", "ビッグファイブ尺度（NEO-PI）", "自尊感情尺度（RSES）"], answer: 0, explain: "Scheier & Carver(1985, Health Psychology 4:219-247)はLife Orientation Test（LOT）を開発し、気質的楽観主義を測定可能にした。後にLOT-Rへ改訂された。", difficulty: 1 },
    { type: "mcq", stem: "Scheier & Carverが気質的楽観主義を概念化した際に用いた中核概念はどれか。", choices: ["信念更新の非対称性", "一般化された結果期待（generalized outcome expectancy）", "統制の幻想", "計画錯誤"], answer: 1, explain: "気質的楽観主義は、特定場面に限らず人生全般にわたって良い結果を期待する『一般化された結果期待』として概念化された。", difficulty: 2 },
    { type: "mcq", stem: "気質的楽観主義と楽観性バイアスの関係について、本モジュールが最も強調する点はどれか。", choices: ["両者は完全に同一の概念である", "両者は概念的に異なるが混同されやすい", "気質的楽観主義は楽観性バイアスの一種である", "楽観性バイアスは気質的楽観主義の下位尺度である"], answer: 1, explain: "気質的楽観主義（安定した性格特性）と楽観性バイアス（特定事象の確率判断の歪み）は概念的に異なるが、名前が似ているため混同されやすい。この区別を立てることが重要である。", difficulty: 2 },
    { type: "mcq", stem: "LOTが測定しているものとして最も適切なのはどれか。", choices: ["特定の出来事を経験する確率の見積もりの歪み", "人生全般に良い結果を期待する程度（一般化された結果期待）", "ある日の一時的な気分の高さだけ", "抑うつ症状の重さ"], answer: 1, explain: "LOTは特定事象の確率判断ではなく、人生全般への一般化された結果期待、すなわち気質的楽観主義の高低を測る。", difficulty: 2 },
    { type: "mcq", stem: "Scheier, Carver, & Bridges(1994)が行ったこととして正しいのはどれか。", choices: ["LOTをLOT-Rへ改訂した", "楽観性バイアスの神経基盤を発見した", "抑うつリアリズムを提唱した", "計画錯誤を命名した"], answer: 0, explain: "Scheier, Carver, & Bridges(1994)はLOTをLOT-R（改訂版）へと改訂し、項目を精選して測定を明確化した。", difficulty: 2 },
    { type: "mcq", stem: "「特定の出来事について自分が経験する確率を良い方へ体系的に歪めて見積もる」傾向を指すのは、次のどちらの概念か。", choices: ["気質的楽観主義（LOTで測る特性）", "楽観性バイアス（確率判断の歪み）", "一般化された結果期待", "学習性楽観"], answer: 1, explain: "確率判断の歪みは楽観性バイアスに当たる。気質的楽観主義は確率の歪みではなく、人生全般への期待という性格特性である。", difficulty: 2 },
    { type: "mcq", stem: "気質（trait）と状態（state）の区別について、LOTの位置づけとして正しいのはどれか。", choices: ["LOTはその場限りの状態を測ることを意図している", "LOTは比較的安定した特性（trait）を測ることを意図している", "LOTは確率判断の歪みそのものを測る", "LOTは抑うつ状態を測る"], answer: 1, explain: "LOTは一時的な状態ではなく、場面を超えて比較的安定した性格特性としての楽観主義（trait）を測ることを意図した尺度である。", difficulty: 2 },
    { type: "mcq", stem: "気質的楽観主義と健康との関連について、本モジュールが採る記述の姿勢として最も適切なのはどれか。", choices: ["具体的な効果量と被験者数を断定的に提示する", "免疫機能や術後回復との関連が論じられる、という記述レベルにとどめる", "健康とは無関係であると結論する", "因果関係が完全に証明されたと述べる"], answer: 1, explain: "気質的楽観主義は免疫機能や術後回復の良さと関連すると論じられるが、個別研究の具体的数値を創作・断定せず、関連が論じられるという記述レベルにとどめるのが誠実である。", difficulty: 2 },
    { type: "mcq", stem: "セリグマンの「学習性楽観（learned optimism）」が前提とする、出来事の原因をどう捉えるかの様式を何と呼ぶか。", choices: ["説明スタイル（explanatory style）", "一般化された結果期待", "信念更新", "比較法"], answer: 0, explain: "学習性楽観は、悪い出来事を一時的・限定的・外的に説明する楽観的な説明スタイル（explanatory style）を後天的に習得できるとする考えである。", difficulty: 2 },
    { type: "mcq", stem: "セリグマンの研究の流れとして正しい組み合わせはどれか。", choices: ["学習性無力感 → 学習性楽観・ポジティブ心理学", "ポジティブ心理学 → 学習性無力感", "気質的楽観主義の測定 → LOTの放棄", "計画錯誤 → 統制の幻想"], answer: 0, explain: "セリグマンは元来、学習性無力感の研究者であり、その対極として学習性楽観・ポジティブ心理学へと展開した。", difficulty: 2 },
    { type: "mcq", stem: "本モジュールが提示する「楽観に関わる三層」の組み合わせとして正しいのはどれか。", choices: ["気質・状態・確率判断の歪み", "尤度・事前・事後", "永続性・全般性・内在性", "弁別性・合意性・一貫性"], answer: 0, explain: "楽観に関わる概念は、気質（trait, LOTで測る特性）・状態（state, 一時的変動）・確率判断の歪み（楽観性バイアス）の三層に整理できる。", difficulty: 3 },
    { type: "mcq", stem: "「楽観に関わる三層」のうち、LOTが対象とする層と楽観性バイアス研究が対象とする層の組み合わせとして正しいのはどれか。", choices: ["LOT=確率判断の歪み／バイアス研究=気質", "LOT=気質／バイアス研究=確率判断の歪み", "LOT=状態／バイアス研究=気質", "両者とも状態を扱う"], answer: 1, explain: "LOTは最上層の気質（安定した性格特性）を、楽観性バイアス研究は最下層の確率判断の歪みを対象とする。関連しうるが同一ではない。", difficulty: 3 },
    { type: "mcq", stem: "次のうち、Scheier & Carver(1985)の出典として正しい記載はどれか。", choices: ["Nature(2007)", "Health Psychology(4巻, 219-247, 1985)", "Psychological Review(118巻, 1号)", "Journal of Personality and Social Psychology(39巻, 806-820)"], answer: 1, explain: "Scheier & Carver(1985)はHealth Psychology 4巻219-247頁に掲載された。JPSP 39:806-820はWeinstein(1980)、Psychological Review 118(1)はHarris & Hahn(2011)である。", difficulty: 3 },
  ],
});
