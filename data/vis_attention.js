/* ============================================================
   視覚的注意  (vis_attention)
   ============================================================ */
PsychApp.registerModule({
  id: "vis_attention",
  title: "視覚的注意",
  emoji: "🔦",
  category: "vision",
  tagline: "スポットライト・特徴統合理論・視覚探索・非注意性盲・変化盲・注意の瞬き",
  overview: `<p>視野には常に膨大な情報があるが、私たちが詳しく処理できるのはその一部にすぎない。<strong>視覚的注意</strong>はこの限られた資源を配分する選択の働きである。本分野では、注意を<strong>スポットライト</strong>になぞらえる比喩から出発し、Posnerの手がかり法、Treismanの<strong>特徴統合理論（FIT）</strong>、特徴探索と結合探索の区別を学ぶ。後半では注意の限界が引き起こす劇的な見落とし——<strong>非注意性盲</strong>（見えないゴリラ）・<strong>変化盲</strong>・<strong>注意の瞬き</strong>——を取り上げ、私たちが世界を「すべて見ている」という主観がいかに錯覚を含むかを検討する。</p>`,
  lessons: [
    {
      title: "注意の選択と特徴統合",
      body: `
        <p>注意はどこに、どのように向けられるのか。古典的な比喩と精密な実験パラダイムが、選択の単位と結合の仕組みを明らかにしてきた。</p>
        <h3>スポットライトとズームレンズ</h3>
        <p>視覚的注意はしばしば<strong>スポットライト（spotlight）</strong>に例えられる。光の当たった領域だけが詳しく処理され、注意は視野を移動できる。<strong>ズームレンズ（zoom lens）</strong>の比喩はさらに、注意領域の<em>広さを調整できる</em>ことを加える。広く浅くか、狭く深くかというトレードオフがある。</p>
        <h3>手がかり法と注意の向け方</h3>
        <p><strong>Posner の手がかり法（Posner cueing task）</strong>は、標的に先立って位置の手がかりを与え、反応時間を測る。手がかりが正しい位置（有効試行）なら速く、誤った位置（無効試行）なら遅い。注意の向け方には2種類ある。</p>
        <ul>
          <li><strong>内発的注意（endogenous）</strong>：中央の矢印などの<em>象徴的手がかり</em>に従って自発的・随意的に向ける。比較的ゆっくり生じる。</li>
          <li><strong>外発的注意（exogenous）</strong>：周辺の急な点滅などに<em>自動的・反射的</em>に引き寄せられる。速いが一過性。</li>
        </ul>
        <p>外発的に手がかられた位置では、しばらく後（およそ300ms以降）にかえって反応が遅くなる<strong>復帰抑制（inhibition of return, IOR）</strong>が生じる。一度向けた場所への再注目を抑え、新たな対象への探索を促す働きと解される。</p>
        <h3>特徴統合理論（FIT）</h3>
        <p><strong>Treisman と Gelade（1980）の特徴統合理論（feature integration theory, FIT）</strong>は注意の役割を「結合」に置く。理論は2段階からなる。</p>
        <ul>
          <li><strong>前注意段階（preattentive stage）</strong>：色・方位・大きさなどの基本特徴が、注意なしに<em>並列に・独立に</em>視野全体で登録される。</li>
          <li><strong>焦点的注意段階</strong>：注意が同じ位置にある複数の特徴を<strong>結合（feature binding）</strong>し、一つの統合された対象を構成する。</li>
        </ul>
        <div class="callout key"><b>結合と注意</b>：個々の特徴は注意なしに検出できるが、「赤くて縦長」のように特徴を<strong>正しく束ねる</strong>には焦点的注意が必要である。注意は「何があるか」より「何と何が同じ場所にあるか」を解く。</div>
        <h3>視覚探索 — 特徴探索と結合探索</h3>
        <p>FITは<strong>視覚探索（visual search）</strong>の結果でよく検証される。</p>
        <table>
          <tr><th>種類</th><th>標的</th><th>反応時間と項目数</th></tr>
          <tr><td><b>特徴探索</b></td><td>単一特徴で定義（例：緑の中の赤）</td><td>並列処理で<b>pop-out</b>。項目数にほぼ依存せず一定。</td></tr>
          <tr><td><b>結合探索</b></td><td>複数特徴の結合で定義（例：赤い縦線を緑の縦・赤の横の中で探す）</td><td>系列的探索。項目数にほぼ<b>比例</b>して増加。</td></tr>
        </table>
        <p>注意が不十分な条件では<strong>錯誤結合（illusory conjunctions）</strong>——例えば赤い線と緑の円から「緑の線」を見たと報告する——が生じる。特徴が誤って束ねられる現象で、結合に注意が必要であることの証拠とされる。</p>
        <div class="callout tip"><b>発展</b>：<strong>ガイデッドサーチ（Guided Search, Wolfe）</strong>は、前注意的な特徴情報が注意を有望な位置へ<em>誘導</em>するとし、純粋な系列探索を修正した。<strong>負荷理論（load theory, Lavie）</strong>は、知覚負荷が高いと無関連情報の処理（妨害）が減ると説明する。</div>
      `,
      figure: `<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="540" height="240" rx="14" fill="#f5f7fd"/>
        <text x="150" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="#1d2433">特徴探索（pop-out）</text>
        <g>
          <line x1="60" y1="55" x2="60" y2="80" stroke="#15c4a8" stroke-width="5"/>
          <line x1="110" y1="55" x2="110" y2="80" stroke="#15c4a8" stroke-width="5"/>
          <line x1="160" y1="55" x2="160" y2="80" stroke="#15c4a8" stroke-width="5"/>
          <line x1="85" y1="100" x2="85" y2="125" stroke="#15c4a8" stroke-width="5"/>
          <line x1="135" y1="100" x2="135" y2="125" stroke="#e0566b" stroke-width="5"/>
          <line x1="185" y1="100" x2="185" y2="125" stroke="#15c4a8" stroke-width="5"/>
          <line x1="60" y1="145" x2="60" y2="170" stroke="#15c4a8" stroke-width="5"/>
          <line x1="110" y1="145" x2="110" y2="170" stroke="#15c4a8" stroke-width="5"/>
          <line x1="160" y1="145" x2="160" y2="170" stroke="#15c4a8" stroke-width="5"/>
        </g>
        <text x="150" y="200" text-anchor="middle" font-size="11" fill="#5b6478">赤い標的が即座に飛び出す</text>
        <text x="150" y="218" text-anchor="middle" font-size="11" fill="#5b6478">反応時間は項目数に依存しない</text>
        <line x1="270" y1="40" x2="270" y2="220" stroke="#e9ebfe" stroke-width="2"/>
        <text x="400" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="#1d2433">結合探索（系列的）</text>
        <g>
          <line x1="320" y1="55" x2="320" y2="80" stroke="#e0566b" stroke-width="5"/>
          <line x1="375" y1="52" x2="400" y2="52" stroke="#15c4a8" stroke-width="5"/>
          <line x1="430" y1="55" x2="430" y2="80" stroke="#15c4a8" stroke-width="5"/>
          <line x1="345" y1="100" x2="345" y2="125" stroke="#15c4a8" stroke-width="5"/>
          <line x1="400" y1="100" x2="400" y2="125" stroke="#e0566b" stroke-width="5"/>
          <line x1="445" y1="112" x2="470" y2="112" stroke="#e0566b" stroke-width="5"/>
          <line x1="320" y1="145" x2="320" y2="170" stroke="#15c4a8" stroke-width="5"/>
          <line x1="370" y1="162" x2="395" y2="162" stroke="#15c4a8" stroke-width="5"/>
          <line x1="430" y1="145" x2="430" y2="170" stroke="#e0566b" stroke-width="5"/>
        </g>
        <text x="400" y="200" text-anchor="middle" font-size="11" fill="#5b6478">赤い縦線を一つずつ確認</text>
        <text x="400" y="218" text-anchor="middle" font-size="11" fill="#5b6478">反応時間は項目数に比例</text>
      </svg>`,
      figcaption: "視覚探索。特徴探索では単一特徴の標的がpop-outし反応時間は項目数に依存しない。結合探索では系列的探索が必要で反応時間が項目数に比例する。",
      terms: [
        { term: "スポットライト / ズームレンズ", def: "注意を移動する光の輪、さらに広さを調整できるレンズになぞらえる比喩。" },
        { term: "Posnerの手がかり法", def: "標的に先立つ位置手がかりで反応時間を測る課題。有効試行で速く無効試行で遅い。" },
        { term: "内発的 / 外発的注意", def: "前者は象徴手がかりに従う随意的注意、後者は周辺刺激に引かれる自動的注意。" },
        { term: "復帰抑制（IOR）", def: "外発的に手がかられた位置への反応が後に遅くなる現象。再注目を抑え新規探索を促す。" },
        { term: "特徴統合理論（FIT）", def: "前注意的に並列登録された特徴を、焦点的注意が結合するとする理論（Treisman & Gelade 1980）。" },
        { term: "特徴探索 / 結合探索", def: "前者は単一特徴でpop-out（項目数に非依存）、後者は系列的で反応時間が項目数に比例。" },
        { term: "錯誤結合（illusory conjunctions）", def: "注意が不十分なとき特徴が誤って束ねられる現象。結合に注意が必要であることの証拠。" },
        { term: "ガイデッドサーチ / 負荷理論", def: "特徴情報が注意を誘導するとする説（Wolfe）と、知覚負荷で妨害量が変わるとする説（Lavie）。" },
      ],
    },
    {
      title: "注意の限界 — 見落とし",
      body: `
        <p>注意が選択である以上、選ばれなかったものは深く処理されない。その帰結は、しばしば直観に反するほど大きな「見落とし」として現れる。</p>
        <h3>非注意性盲 — 見えないゴリラ</h3>
        <p><strong>非注意性盲（inattentional blindness）</strong>は、注意を向けていない<em>顕著な対象</em>が目に映っていても気づかれない現象である。<strong>Mack と Rock</strong>が体系的に示し、<strong>Simons と Chabris</strong>の「<strong>見えないゴリラ</strong>」実験で広く知られた。観察者がバスケットボールのパスを数える課題に没頭していると、画面を横切るゴリラの着ぐるみに約半数が気づかない。</p>
        <div class="callout key"><b>含意</b>：私たちは「視野に入ったものはすべて見える」と思いがちだが、<strong>気づき（awareness）には注意が必要</strong>である。網膜に像が結ばれていても、注意がなければ意識に上らないことがある。</div>
        <h3>変化盲</h3>
        <p><strong>変化盲（change blindness）</strong>は、場面の<em>変化そのもの</em>に注意が向かないと、たとえ大きな変化でも気づかないという現象である。<strong>Rensink のフリッカー法</strong>では、2枚の画像の間に短い空白を挟んで交互提示すると、変化が大きくても発見に長くかかる。空白が変化に伴う<em>動きの信号（トランジェント）</em>をかき消すため、変化が注意を自動的に引かなくなるのである。漸進的なゆっくりした変化や、映画のカットのつなぎ目でも変化盲は生じる。</p>
        <h3>注意の瞬き</h3>
        <p><strong>注意の瞬き（attentional blink）</strong>は、時間的な注意の限界を示す。<strong>RSVP（高速逐次視覚提示）</strong>で項目を次々に提示し、その中の2つの標的を報告させると、第1標的（T1）の検出後<strong>およそ200〜500ミリ秒</strong>の間に現れた第2標的（T2）の検出率が大きく落ちる。T1の処理に注意資源が占有され、直後のT2が一時的に取りこぼされる。興味深いことに、T1の<em>直後</em>（約100ms以内）のT2はかえって報告されやすい（ラグ1の猶予）。</p>
        <h3>バイアス競合 — 限界の神経基盤</h3>
        <p><strong>バイアス競合（biased competition, Desimone & Duncan）</strong>は、複数の対象が同じ受容野で<em>神経表現を奪い合い（競合し）</em>、注意がそのうち一方に有利なバイアスをかけて勝たせる、という理論である。注意の限界も選択も、この競合の解決として統一的に理解される。</p>
        <div class="callout warn"><b>「すべて見ている」という錯覚</b>：非注意性盲・変化盲・注意の瞬きはいずれも、豊かで連続した視覚体験という主観と、実際に詳細に処理される情報量の<em>大きな乖離</em>を露わにする。見えている感じは、必要に応じて注意で取り出せるという潜在的可用性に支えられている。</div>
      `,
      figure: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="220" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">注意の瞬き（RSVPでの時間的限界）</text>
        <line x1="40" y1="150" x2="480" y2="150" stroke="#5b6478" stroke-width="2"/>
        <g font-size="10" fill="#5b6478">
          <text x="40" y="170">0</text>
          <text x="200" y="170">200ms</text>
          <text x="340" y="170">500ms</text>
        </g>
        <rect x="55" y="110" width="26" height="40" fill="#5b6cf0"/>
        <text x="68" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="#5b6cf0">T1</text>
        <text x="68" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">検出</text>
        <path d="M120 150 Q220 60 340 150" fill="#e0566b" fill-opacity="0.16" stroke="#e0566b" stroke-width="2"/>
        <text x="230" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#e0566b">T2を取りこぼす窓</text>
        <text x="230" y="108" text-anchor="middle" font-size="10" fill="#5b6478">約200〜500msに検出率が低下</text>
        <text x="408" y="120" text-anchor="middle" font-size="11" fill="#15c4a8" font-weight="700">回復</text>
        <path d="M395 150 L420 150" stroke="#15c4a8" stroke-width="3"/>
      </svg>`,
      figcaption: "注意の瞬き。第1標的（T1）の検出後およそ200〜500msの間に現れた第2標的（T2）は検出率が大きく低下する。",
      terms: [
        { term: "非注意性盲（inattentional blindness）", def: "注意を向けていない顕著な対象に気づかない現象。Simons & Chabrisの見えないゴリラが有名。" },
        { term: "見えないゴリラ実験", def: "パスを数える課題に没頭すると画面を横切るゴリラに約半数が気づかない実験。気づきに注意が必要なことを示す。" },
        { term: "変化盲（change blindness）", def: "注意が向かない変化に、大きくても気づかない現象。フリッカー法・漸進変化・映画のつなぎで生じる。" },
        { term: "フリッカー法（Rensink）", def: "2画像の間に空白を挟んで交互提示する手法。空白が変化の動き信号を消すため変化の発見が困難になる。" },
        { term: "注意の瞬き（attentional blink）", def: "RSVPでT1検出後約200〜500msのT2の検出率が低下する時間的注意の限界。" },
        { term: "RSVP（高速逐次視覚提示）", def: "同じ位置に項目を高速で次々提示する手法。時間的注意の研究に用いられる。" },
        { term: "バイアス競合（biased competition）", def: "対象が神経表現を競合し注意が一方を有利にする理論（Desimone & Duncan）。" },
        { term: "視覚の大いなる錯覚（grand illusion）", def: "豊かに見える主観と実際に処理される情報量の乖離を指す概念。見落とし現象が露わにする。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "視覚的注意を「光の当たった領域だけが詳しく処理され、視野を移動できる」と表す古典的な比喩はどれか。", choices: ["フィルター", "スポットライト", "ボトルネック", "バッファ"], answer: 1, explain: "注意はしばしばスポットライトに例えられる。ズームレンズの比喩はさらに注意領域の広さを調整できることを加える。", difficulty: 1 },
    { type: "mcq", stem: "Posnerの手がかり法において、中央の矢印などの象徴的手がかりに従い随意的・自発的に向ける注意はどれか。", choices: ["外発的注意", "内発的注意", "分割的注意", "持続的注意"], answer: 1, explain: "内発的注意（endogenous）は象徴的手がかりに従う随意的注意で比較的ゆっくり生じる。外発的注意は周辺刺激に自動的に引かれる。", difficulty: 2 },
    { type: "mcq", stem: "外発的に手がかられた位置への反応が、しばらく後にかえって遅くなる現象はどれか。", choices: ["復帰抑制（IOR）", "プライミング", "順応", "馴化"], answer: 0, explain: "復帰抑制（inhibition of return）は一度向けた場所への再注目を抑え、新たな対象への探索を促す働きと解される。", difficulty: 2 },
    { type: "mcq", stem: "特徴統合理論（FIT, Treisman & Gelade）における焦点的注意の主な役割はどれか。", choices: ["特徴を並列に登録する", "同じ位置の複数の特徴を結合して一つの対象を作る", "網膜像を反転する", "色を波長に変換する"], answer: 1, explain: "FITでは前注意段階で特徴が並列に独立登録され、焦点的注意がそれらを結合（feature binding）して統合された対象を構成する。", difficulty: 2 },
    { type: "mcq", stem: "緑の縦線の中から赤の縦線を探すような「特徴探索」で、反応時間と項目数の関係はどうなるか。", choices: ["項目数に比例して増加する", "項目数にほぼ依存せず一定（pop-out）", "項目数の2乗に比例する", "項目数が増えるほど短くなる"], answer: 1, explain: "単一特徴で定義される標的は並列処理でpop-outし、反応時間は項目数にほぼ依存しない。", difficulty: 1 },
    { type: "mcq", stem: "「赤い縦線を、緑の縦線と赤の横線の中から探す」結合探索で予測される反応時間は何か。", choices: ["項目数に依存せず一定", "項目数にほぼ比例して増加する", "常にゼロに近い", "特徴探索より速い"], answer: 1, explain: "結合探索は系列的処理を要し、反応時間が項目数にほぼ比例して増加する。これはFITの予測と一致する。", difficulty: 2 },
    { type: "mcq", stem: "注意が不十分なときに、赤い線と緑の円から「緑の線」を見たと報告するような、特徴が誤って束ねられる現象はどれか。", choices: ["錯誤結合（illusory conjunctions）", "残像", "マスキング", "両眼視野闘争"], answer: 0, explain: "錯誤結合は注意が不十分なとき特徴が誤って結合される現象で、結合に焦点的注意が必要であることの証拠とされる。", difficulty: 3 },
    { type: "mcq", stem: "Simons と Chabris の「見えないゴリラ」実験が示した現象はどれか。", choices: ["変化盲", "非注意性盲", "注意の瞬き", "復帰抑制"], answer: 1, explain: "課題に没頭すると画面を横切るゴリラに約半数が気づかない。これは注意を向けていない顕著な対象を見落とす非注意性盲である。", difficulty: 1 },
    { type: "mcq", stem: "Rensinkのフリッカー法で、画像の間に短い空白を挟むと変化の発見が難しくなるのはなぜか。", choices: ["空白が網膜を疲労させるから", "空白が変化に伴う動きの信号（トランジェント）を消し、変化が注意を自動的に引かなくなるから", "空白で記憶が完全に消えるから", "空白が両眼視差を生むから"], answer: 1, explain: "通常は変化に伴う局所的な動き信号が注意を引くが、空白がこの信号をかき消すため、変化が自動的に注意を引かず発見が困難になる。", difficulty: 3 },
    { type: "mcq", stem: "RSVPで第1標的の検出後およそ200〜500msの間に現れた第2標的の検出率が低下する現象はどれか。", choices: ["変化盲", "注意の瞬き（attentional blink）", "非注意性盲", "錯誤結合"], answer: 1, explain: "注意の瞬きは時間的注意の限界を示す現象で、T1の処理に資源が占有され直後のT2が一時的に取りこぼされる。", difficulty: 2 },
    { type: "mcq", stem: "複数の対象が同じ受容野で神経表現を奪い合い、注意が一方に有利なバイアスをかけて勝たせるとする理論はどれか。", choices: ["特徴統合理論", "バイアス競合（Desimone & Duncan）", "ゲートコントロール理論", "二重符号化説"], answer: 1, explain: "バイアス競合理論は、対象が神経表現を競合し注意がその解決にバイアスをかけるとし、注意の限界と選択を統一的に説明する。", difficulty: 3 },
    { type: "mcq", stem: "非注意性盲・変化盲・注意の瞬きが共通して示すのはどのような点か。", choices: ["視野のすべてが常に詳細に処理されていること", "豊かに見える主観と実際に詳細処理される情報量の大きな乖離", "注意は無限の容量をもつこと", "網膜像がなくても見えること"], answer: 1, explain: "これらの現象は、連続して豊かに見えるという主観と、実際に詳しく処理される情報量との乖離（視覚の大いなる錯覚）を露わにする。", difficulty: 2 },
  ],
});
