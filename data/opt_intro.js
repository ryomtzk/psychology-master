/* === 楽観性の心理学（特別編） 楽観性バイアスとは (opt_intro) === */
PsychApp.registerModule({
  id: "opt_intro",
  title: "楽観性バイアスとは",
  emoji: "🌈",
  category: "optimism",
  tagline: "定義と二要素・約80%という普及率・抑うつという例外・認知バイアスの一種・概念の三系譜",
  overview: `<p>多くの人は、自分が平均より長生きし健康でいられると考え、離婚やがん、失業の確率を実際より低く見積もる。こうした<strong>将来に対する系統的な楽観の偏り</strong>を、神経科学者 <em>Tali Sharot</em> は「人間の心が生み出す最大の欺瞞の一つ」と呼んだ。本セクション「楽観性の心理学（特別編）」では、この<strong>楽観性バイアス（optimism bias）</strong>を、<em>Weinstein（1980）</em>に始まり <em>Taylor &amp; Brown（1988）</em>を経て <em>Sharot ら（2007–）</em>の神経科学へ至る三つの研究系譜から概観する。同時に、2011年以降に提起された<strong>統計的人工産物（statistical artifact）説</strong>をはじめとする方法論的論争にも目を向け、「確立された知見」と「未解決の論争」の両面を誠実に扱う。本モジュールはその<em>表紙</em>として、定義・普及率・例外・概念地図を整理する。</p>
  <div class="callout note"><b>確率を扱う土台が欲しいとき</b>：楽観性バイアスの核心である「信念の更新」は、本来ベイズ的な確率の更新と比較して論じられる。条件付き確率やベイズの定理そのものは、特別コース「<a href="bayes/index.html">ベイズの階段</a>」で中学数学から段階的に学べる。本セクションの数学的補強に適している。</div>`,
  lessons: [
    {
      title: "現象としての楽観性バイアス",
      body: `
        <p><strong>楽観性バイアス（optimism bias）</strong>とは、将来において自分が<strong>ポジティブな出来事を経験する可能性を過大評価し</strong>、<strong>ネガティブな出来事を経験する可能性を過小評価する</strong>という、体系的な認知的傾向を指す（<em>Sharot, 2011, Current Biology</em>）。重要なのは、これが単なる気分の問題ではなく、確率判断そのものが一方向へ系統的に歪むという点である。神経科学者 <em>Tali Sharot</em> は、これを「人間の心が生み出す最大の欺瞞の一つ」と表現している。</p>
        <div class="callout key"><b>二要素定義</b>：楽観性バイアスは（1）<strong>ポジティブ事象の生起確率の過大評価</strong>と（2）<strong>ネガティブ事象の生起確率の過小評価</strong>という二つの方向の偏りからなる。良い未来は実際より「ありそう」に、悪い未来は実際より「ありそうにない」と見積もられる。</div>
        <h3>具体例</h3>
        <p>楽観性バイアスは日常のさまざまな判断に現れる。人々は次のような傾向を一貫して示す。</p>
        <ul>
          <li>自分は平均より<strong>長生きし、健康である</strong>と考える。</li>
          <li><strong>離婚・がん・失業</strong>の確率を実際より過小評価する。</li>
          <li><strong>職業的成功</strong>の見込みを過大評価する。</li>
        </ul>
        <div class="callout example"><b>離婚率の例（Sharot, TED 2012）</b>：西欧の離婚率は約<strong>40%</strong>であるにもかかわらず、新婚者に自分が離婚する確率を尋ねると、その大半は「<strong>0%</strong>」と答える。集団全体の統計を知識として知っていてもなお、「自分だけは例外」という見積もりが揺るがない点に、このバイアスの強固さが表れている。</div>
        <h3>どれほど普及しているか</h3>
        <p><em>Sharot（2011, Current Biology 21(23):R941–R945）</em>の総説によれば、<strong>ほとんどの推定（most estimates）で人口の約80%が楽観性バイアスを示す</strong>とされる。さらにこの偏りは特定の集団に限られず、<strong>性別・人種・国籍・年齢を超えて観察される（observed across gender, race, nationality and age）</strong>。Sharot はここから、楽観的な誤りは人間本性に不可欠な部分のようだ、と論じている。</p>
        <div class="callout warn"><b>「約80%」の読み方に注意</b>：この約80%という数値は <em>Sharot（2011）</em>の総説および一般向け講演に基づく<strong>推定値（most estimates）</strong>であり、原著による厳密な疫学的測定ではない。「人口の8割が楽観的」という確定した事実としてではなく、「Sharot（2011）による概数の推定」として理解すべきである。</div>
        <h3>唯一かつ重要な例外 — 抑うつ</h3>
        <p>楽観性バイアスがこれほど広く観察される一方で、<strong>一貫した例外</strong>が存在する。それが<strong>抑うつ（depression）を持つ人々</strong>である。Sharot（2011）は、楽観性バイアスが「<strong>注目すべきことに、抑うつを持つ人々の間では見られない（notably, not among people with depression）</strong>」と述べている。抑うつにおいてこのバイアスが顕著に欠如するという事実は、後に「楽観性は<em>健常な認知</em>の特徴ではないか」という重要な問いへとつながっていく。この抑うつとの鏡像関係は <a href="#/module/opt_depression">抑うつリアリズム</a>のモジュールで詳しく扱う。</p>
        <div class="callout tip"><b>要点</b>：楽観性バイアスは「良い未来を過大評価し悪い未来を過小評価する」二要素の偏りであり、人口の約8割（推定）に、属性を超えて広く見られる。ただし抑うつ者ではこの偏りが欠如する。</div>
      `,
      figure: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="270" rx="14" fill="#f5f7fd"/>
        <text x="240" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">楽観性バイアスの二要素</text>
        <line x1="240" y1="56" x2="240" y2="210" stroke="#c9cfe0" stroke-width="1.5"/>
        <text x="120" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#15c4a8">ポジティブな出来事</text>
        <text x="360" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#e0566b">ネガティブな出来事</text>
        <text x="120" y="90" text-anchor="middle" font-size="9.5" fill="#5b6478">（昇進・長寿・成功）</text>
        <text x="360" y="90" text-anchor="middle" font-size="9.5" fill="#5b6478">（離婚・がん・失業）</text>
        <line x1="60" y1="180" x2="180" y2="180" stroke="#1d2433" stroke-width="1.2"/>
        <line x1="300" y1="180" x2="420" y2="180" stroke="#1d2433" stroke-width="1.2"/>
        <rect x="80" y="150" width="34" height="30" fill="#bfe9df" stroke="#15c4a8" stroke-width="1.5"/>
        <text x="97" y="170" text-anchor="middle" font-size="9" fill="#1d2433">実際</text>
        <rect x="126" y="118" width="34" height="62" fill="#15c4a8"/>
        <text x="143" y="142" text-anchor="middle" font-size="9" fill="#ffffff" font-weight="700">見積</text>
        <rect x="320" y="118" width="34" height="62" fill="#f0b8c1" stroke="#e0566b" stroke-width="1.5"/>
        <text x="337" y="152" text-anchor="middle" font-size="9" fill="#1d2433">実際</text>
        <rect x="366" y="150" width="34" height="30" fill="#e0566b"/>
        <text x="383" y="170" text-anchor="middle" font-size="9" fill="#ffffff" font-weight="700">見積</text>
        <text x="120" y="200" text-anchor="middle" font-size="10.5" fill="#15c4a8" font-weight="700">過大評価 ↑</text>
        <text x="360" y="200" text-anchor="middle" font-size="10.5" fill="#e0566b" font-weight="700">過小評価 ↓</text>
        <text x="240" y="240" text-anchor="middle" font-size="9.5" fill="#5b6478">良い未来は実際より「ありそう」に、悪い未来は「ありそうにない」と見積もられる</text>
        <text x="240" y="256" text-anchor="middle" font-size="9.5" fill="#5b6478">人口の約80%（推定）に、性別・人種・国籍・年齢を超えて観察される</text>
      </svg>`,
      figcaption: "楽観性バイアスは二要素からなる。ポジティブな出来事の生起確率は実際より過大に、ネガティブな出来事は過小に見積もられる。Sharot（2011）の推定では人口の約80%に、属性を超えて観察される。",
      terms: [
        { term: "楽観性バイアス（optimism bias）", def: "良い未来を過大評価し悪い未来を過小評価する体系的な認知傾向。" },
        { term: "二要素定義", def: "ポジティブ事象の過大評価とネガティブ事象の過小評価という二方向の偏り。" },
        { term: "Tali Sharot", def: "楽観性バイアスを神経科学的に研究し総説で広めた研究者。" },
        { term: "離婚率の例", def: "離婚率約40%でも新婚者の多くが自分は0%と答える典型例（Sharot 2012）。" },
        { term: "普及率（約80%）", def: "Sharot 2011が most estimates として示した人口の楽観バイアス保有率の推定。" },
        { term: "属性を超えた観察", def: "性別・人種・国籍・年齢を超えて楽観性バイアスが見られること。" },
        { term: "抑うつという例外", def: "抑うつを持つ人々では楽観性バイアスが顕著に欠如するという一貫した例外。" },
      ],
    },
    {
      title: "認知バイアスとしての位置づけと概念地図",
      body: `
        <p>楽観性バイアスは、心理学が研究してきた多数の<strong>認知バイアス（cognitive bias）</strong>の一つである。認知バイアスとは、判断や推論が<strong>系統的に（ランダムではなく一定方向へ）合理性から逸脱する</strong>現象を指す。楽観性バイアスの場合、その逸脱は「将来を実際より明るく見積もる」という方向に一貫して現れる。</p>
        <h3>関連概念の地図</h3>
        <p>楽観性バイアスは孤立した概念ではなく、自己評価や将来予測をめぐる<strong>近接概念の家族</strong>の中に位置づけられる。主要な関連概念と、その起源を整理する。</p>
        <table>
          <tr><th>概念</th><th>起源・提唱</th><th>内容</th></tr>
          <tr><td><b>非現実的楽観主義<br>(unrealistic optimism)</b></td><td><em>Weinstein（1980）</em></td><td>自分のリスクを「平均的な他者」より低く見積もる傾向。分野の出発点。</td></tr>
          <tr><td><b>比較楽観主義<br>(comparative optimism)</b></td><td>自他比較の枠組み</td><td>楽観性を「自己 vs. 他者」の比較として操作化した測定枠組み。</td></tr>
          <tr><td><b>ポジティブ・イリュージョン<br>(positive illusions)</b></td><td><em>Taylor &amp; Brown（1988）</em></td><td>自己・統制・将来に関する3種の肯定的幻想。楽観主義はその一角。</td></tr>
          <tr><td><b>計画錯誤<br>(planning fallacy)</b></td><td><em>Kahneman &amp; Tversky（1979）</em></td><td>課題の所要時間・コストを過小評価する傾向。</td></tr>
          <tr><td><b>信念更新の非対称性<br>(asymmetric belief updating)</b></td><td><em>Sharot ら</em></td><td>良い知らせは強く取り込むが悪い知らせは弱く取り込む神経メカニズム。</td></tr>
          <tr><td><b>抑うつリアリズム<br>(depressive realism)</b></td><td><em>Alloy &amp; Abramson（1979）</em></td><td>抑うつ者がより正確な判断を行うとする「悲しいほど賢明」仮説。</td></tr>
        </table>
        <p>これらの概念は、それぞれ独立のモジュールで詳述する。<a href="#/module/opt_unrealistic">非現実的楽観主義</a>、<a href="#/module/opt_illusions">ポジティブ・イリュージョン</a>、<a href="#/module/opt_planning">計画錯誤</a>、<a href="#/module/opt_updating">信念更新の非対称性</a>、<a href="#/module/opt_depression">抑うつリアリズム</a>を順に参照されたい。</p>
        <h3>研究史の三系譜</h3>
        <p>楽観性バイアスは単一の研究伝統から生まれたのではなく、性格の異なる<strong>三つの研究系譜が合流して</strong>形成された概念である。</p>
        <ul>
          <li><strong>(a) 社会心理学的なリスク認知研究</strong>（<em>Weinstein, 1980</em>）：人々が自分のリスクを過小評価することを実証し、「非現実的楽観主義」を定義した起源的研究。</li>
          <li><strong>(b) 精神的健康と適応の理論</strong>（<em>Taylor &amp; Brown, 1988</em>）：肯定的な幻想がむしろ<em>well-being</em>を促進すると論じ、楽観性を「健常な認知の特徴」として位置づけた。</li>
          <li><strong>(c) 認知神経科学</strong>（<em>Sharot et al., 2007–</em>）：fMRI などを用いて楽観性バイアスの神経基盤と維持メカニズムを解明した。</li>
        </ul>
        <h3>本セクションの方針 — 二つの顔を併記する</h3>
        <p>ここまでの内容は、長く「確立された知見」として扱われてきた。しかし2011年以降、<em>Harris &amp; Hahn</em> による<strong>統計的人工産物（statistical artifact）説</strong>が、楽観性を測定する<strong>比較法（comparison method）</strong>の妥当性そのものを問うた。彼らは、完全に合理的（楽観的でない）なエージェントでもデータが「楽観的」に見えうることをシミュレーションで示し、現象の<em>存在自体</em>に疑問を投げかけた。</p>
        <div class="callout warn"><b>本セクションの基本姿勢</b>：本「楽観性の心理学（特別編）」は、楽観性バイアスを単に「ある」と断定して紹介するのではなく、<strong>「確立された知見」と「方法論的論争」を両面から</strong>扱う。各古典的知見を学んだうえで、<em>Harris &amp; Hahn（2011）</em>系の統計的人工産物説や、抑うつリアリズムの再現性問題（<em>Dev et al., 2022</em> など）にも目を配る。詳細は <a href="#/module/opt_controversy">統計的人工産物説</a>のモジュールで扱う。</div>
        <div class="callout tip"><b>要点</b>：楽観性バイアスは認知バイアスの一種であり、非現実的楽観主義・ポジティブ・イリュージョン・計画錯誤・信念更新の非対称性・抑うつリアリズムといった概念群の中心に位置する。社会心理学・適応理論・神経科学の三系譜が合流して成立し、近年は統計的人工産物説による論争の只中にある。</div>
      `,
      figure: `<svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="360" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">楽観性バイアスをめぐる概念地図</text>
        <defs>
          <marker id="oi_line" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><circle cx="4" cy="4" r="2" fill="#5b6478"/></marker>
        </defs>
        <line x1="260" y1="185" x2="130" y2="95" stroke="#c9cfe0" stroke-width="1.4"/>
        <line x1="260" y1="185" x2="390" y2="95" stroke="#c9cfe0" stroke-width="1.4"/>
        <line x1="260" y1="185" x2="70" y2="185" stroke="#c9cfe0" stroke-width="1.4"/>
        <line x1="260" y1="185" x2="450" y2="185" stroke="#c9cfe0" stroke-width="1.4"/>
        <line x1="260" y1="185" x2="130" y2="278" stroke="#c9cfe0" stroke-width="1.4"/>
        <line x1="260" y1="185" x2="390" y2="278" stroke="#c9cfe0" stroke-width="1.4"/>
        <circle cx="260" cy="185" r="52" fill="#5b6cf0"/>
        <text x="260" y="180" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">楽観性</text>
        <text x="260" y="196" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">バイアス</text>
        <g font-size="9.5" text-anchor="middle">
          <rect x="60" y="64" width="140" height="46" rx="8" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="1.4"/>
          <text x="130" y="84" font-weight="700" fill="#1d2433">非現実的楽観主義</text>
          <text x="130" y="100" fill="#5b6478">Weinstein 1980</text>
          <rect x="320" y="64" width="140" height="46" rx="8" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="1.4"/>
          <text x="390" y="84" font-weight="700" fill="#1d2433">ポジティブ・イリュージョン</text>
          <text x="390" y="100" fill="#5b6478">Taylor &amp; Brown 1988</text>
          <rect x="10" y="162" width="130" height="46" rx="8" fill="#d8f6ee" stroke="#15c4a8" stroke-width="1.4"/>
          <text x="75" y="182" font-weight="700" fill="#1d2433">比較楽観主義</text>
          <text x="75" y="198" fill="#5b6478">自他比較の枠組み</text>
          <rect x="385" y="162" width="130" height="46" rx="8" fill="#fdeccf" stroke="#f0a020" stroke-width="1.4"/>
          <text x="450" y="182" font-weight="700" fill="#1d2433">計画錯誤</text>
          <text x="450" y="198" fill="#5b6478">Kahneman &amp; Tversky 1979</text>
          <rect x="60" y="258" width="140" height="46" rx="8" fill="#fdeccf" stroke="#f0a020" stroke-width="1.4"/>
          <text x="130" y="278" font-weight="700" fill="#1d2433">信念更新の非対称性</text>
          <text x="130" y="294" fill="#5b6478">Sharot ら</text>
          <rect x="320" y="258" width="140" height="46" rx="8" fill="#fbdce2" stroke="#e0566b" stroke-width="1.4"/>
          <text x="390" y="278" font-weight="700" fill="#1d2433">抑うつリアリズム</text>
          <text x="390" y="294" fill="#5b6478">Alloy &amp; Abramson 1979</text>
        </g>
        <text x="260" y="338" text-anchor="middle" font-size="9.5" fill="#5b6478">三系譜（社会心理学・適応理論・神経科学）が合流し、近年は統計的人工産物説の論争下にある</text>
      </svg>`,
      figcaption: "楽観性バイアスを中心に置いた関連概念の地図。非現実的楽観主義・ポジティブ・イリュージョン・比較楽観主義・計画錯誤・信念更新の非対称性・抑うつリアリズムが周囲に布置する。これらは社会心理学・適応理論・神経科学の三系譜の合流から生まれた。",
      terms: [
        { term: "認知バイアス（cognitive bias）", def: "判断や推論が系統的に合理性から逸脱する現象の総称。" },
        { term: "非現実的楽観主義", def: "自分のリスクを平均的他者より低く見積もる傾向（Weinstein 1980）。" },
        { term: "ポジティブ・イリュージョン", def: "自己・統制・将来に関する3種の肯定的幻想（Taylor & Brown 1988）。" },
        { term: "計画錯誤", def: "課題の所要時間やコストを過小評価する傾向（Kahneman & Tversky 1979）。" },
        { term: "信念更新の非対称性", def: "良い知らせは強く悪い知らせは弱く取り込む更新の偏り（Sharot ら）。" },
        { term: "研究史の三系譜", def: "社会心理学的リスク認知・適応理論・認知神経科学の合流。" },
        { term: "統計的人工産物説", def: "比較法では合理的でも楽観的に見えうるとする批判（Harris & Hahn 2011）。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "楽観性バイアス（optimism bias）の「二要素定義」として最も適切なのはどれか。", choices: ["過去の出来事を肯定的に記憶し、否定的な出来事を忘れる傾向", "ポジティブな将来事象の確率を過大評価し、ネガティブな将来事象の確率を過小評価する傾向", "他者を過大評価し、自己を過小評価する傾向", "将来のすべての出来事を一様に楽観的に見る気分の状態"], answer: 1, explain: "楽観性バイアスは、ポジティブ事象の生起確率の過大評価とネガティブ事象の生起確率の過小評価という二方向の偏りからなる（Sharot, 2011）。気分の問題ではなく確率判断の系統的な歪みである点が重要。", difficulty: 1 },
    { type: "mcq", stem: "楽観性バイアスを「人間の心が生み出す最大の欺瞞の一つ」と表現した研究者は誰か。", choices: ["Weinstein", "Kahneman", "Tali Sharot", "Taylor"], answer: 2, explain: "神経科学者 Tali Sharot がこの表現を用いた。彼女は2011年の総説（Current Biology）で楽観性バイアスを広く普及させた。", difficulty: 1 },
    { type: "mcq", stem: "Sharot が TED 講演（2012）で挙げた離婚率の例として正しいのはどれか。", choices: ["西欧の離婚率は約40%だが、新婚者の大半は自分の離婚確率を「0%」と答える", "西欧の離婚率は約80%だが、新婚者は自分の離婚確率を正しく見積もる", "新婚者は自分の離婚確率を平均より高く見積もる", "離婚率と新婚者の見積もりは一致する"], answer: 0, explain: "西欧の離婚率は約40%であるにもかかわらず、新婚者の多くは自分の離婚確率を0%と答える。集団統計を知っていても「自分は例外」という見積もりが揺るがない、楽観性バイアスの典型例である。", difficulty: 1 },
    { type: "mcq", stem: "Sharot（2011, Current Biology）が示した楽観性バイアスの普及率に関する記述として最も正確なのはどれか。", choices: ["厳密な疫学調査により人口の正確に80%と測定された", "ほとんどの推定（most estimates）で人口の約80%が示すとされる推定値である", "人口の約40%にのみ見られる", "西欧諸国でのみ約80%に見られる"], answer: 1, explain: "「約80%」は most estimates に基づく推定値であり、厳密な疫学的測定ではない。学術的には「Sharot（2011）による推定」として限定的に引用するのが適切である。", difficulty: 2 },
    { type: "mcq", stem: "Sharot（2011）が述べた楽観性バイアスの分布について正しいのはどれか。", choices: ["若年層にのみ見られる", "西洋の男性に特有である", "性別・人種・国籍・年齢を超えて観察される", "高学歴者にのみ見られる"], answer: 2, explain: "Sharot（2011）は、楽観性バイアスが性別・人種・国籍・年齢を超えて観察される（observed across gender, race, nationality and age）と述べている。", difficulty: 1 },
    { type: "mcq", stem: "楽観性バイアスの「唯一かつ重要な例外」として、出典で一貫して指摘されているのはどの集団か。", choices: ["高齢者", "抑うつ（depression）を持つ人々", "子ども", "ギャンブル経験者"], answer: 1, explain: "Sharot（2011）は、楽観性バイアスが「注目すべきことに、抑うつを持つ人々の間では見られない（notably, not among people with depression）」と述べている。これが後に「楽観性は健常な認知の特徴か」という問いにつながる。", difficulty: 2 },
    { type: "mcq", stem: "「認知バイアス（cognitive bias）」の説明として最も適切なのはどれか。", choices: ["記憶の容量が不足することで生じる偶発的な誤り", "判断や推論が系統的に（一定方向へ）合理性から逸脱する現象", "感覚器官の物理的な限界による知覚の歪み", "意図的に他者を欺こうとする行為"], answer: 1, explain: "認知バイアスは、判断や推論がランダムにではなく一定方向へ系統的に合理性から逸脱する現象を指す。楽観性バイアスはその一種で、将来を明るく見積もる方向に偏る。", difficulty: 1 },
    { type: "mcq", stem: "次の概念とその起源（提唱者）の組み合わせとして誤っているものはどれか。", choices: ["非現実的楽観主義 — Weinstein（1980）", "ポジティブ・イリュージョン — Taylor & Brown（1988）", "計画錯誤 — Kahneman & Tversky（1979）", "抑うつリアリズム — Sharot（2011）"], answer: 3, explain: "抑うつリアリズム（depressive realism）の起源は Alloy & Abramson（1979）である。Sharot は信念更新の非対称性などの神経科学的研究で知られる。", difficulty: 2 },
    { type: "mcq", stem: "楽観性バイアスが合流して形成された「三系譜」に含まれないものはどれか。", choices: ["社会心理学的なリスク認知研究（Weinstein, 1980）", "精神的健康と適応の理論（Taylor & Brown, 1988）", "認知神経科学（Sharot et al., 2007–）", "精神分析的な無意識の理論（Freud）"], answer: 3, explain: "三系譜は、(a) 社会心理学的リスク認知（Weinstein）、(b) 精神的健康と適応の理論（Taylor & Brown）、(c) 認知神経科学（Sharot ら）である。精神分析は含まれない。", difficulty: 2 },
    { type: "mcq", stem: "ポジティブ・イリュージョン（Taylor & Brown, 1988）が論じた、肯定的幻想と精神的健康（well-being）の関係として最も適切なのはどれか。", choices: ["肯定的幻想は精神的健康を損なう", "肯定的幻想がむしろ well-being を促進しうると論じた", "幻想は well-being と無関係だと論じた", "幻想は抑うつを直接引き起こすと論じた"], answer: 1, explain: "Taylor & Brown（1988）は、自己・統制・将来に関する肯定的幻想がむしろ精神的健康を促進しうると論じ、正確な現実認識が健康に必須という通念に挑戦した。これにより楽観性が「健常な認知の特徴」として位置づけられた。", difficulty: 2 },
    { type: "mcq", stem: "Harris & Hahn（2011）が提起した「統計的人工産物（statistical artifact）説」の主張として、出典に忠実なのはどれか。", choices: ["楽観性バイアスは抑うつ者にのみ生じる", "比較法による研究では、合理的（楽観的でない）エージェントでもデータが楽観的に見えうるため、現象の存在自体に疑問がある", "楽観性バイアスは神経科学的に完全に証明されている", "楽観性バイアスは女性にのみ見られる人工産物である"], answer: 1, explain: "Harris & Hahn（2011）は、比較法を用いた研究では完全に合理的なエージェントでもデータが「楽観的」に見えうることをシミュレーションで示し、現象の存在自体に疑問を投げかけた。本セクションはこの論争を断定せず両論併記で扱う。", difficulty: 3 },
    { type: "mcq", stem: "本セクション「楽観性の心理学（特別編）」が掲げる、知見の扱い方の基本姿勢として最も適切なのはどれか。", choices: ["楽観性バイアスは完全に確立された事実として断定的に紹介する", "楽観性バイアスは存在しない人工産物だと結論づける", "「確立された知見」と「方法論的論争」を両面から扱い、断定を避ける", "神経科学的知見のみを唯一の根拠として扱う"], answer: 2, explain: "本セクションは、古典的な「確立された知見」と、Harris & Hahn（2011）系の統計的人工産物説や抑うつリアリズムの再現性問題（Dev et al., 2022 など）といった「方法論的論争」を両面から誠実に扱う方針をとる。", difficulty: 2 },
    { type: "mcq", stem: "比較楽観主義（comparative optimism）の説明として最も適切なのはどれか。", choices: ["過去と現在を比較して楽観的になること", "楽観性を「自己 vs. 他者」の比較として操作化した測定枠組み", "楽観性と悲観性を比較する性格検査", "国際比較によって楽観性を測る手法"], answer: 1, explain: "比較楽観主義は、楽観性を「自己」と「他者」の比較として操作化した測定枠組みであり、Weinstein（1980）の非現実的楽観主義の測定法に連なる。", difficulty: 3 },
  ],
});
