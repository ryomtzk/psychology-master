/* === 楽観性の心理学（特別編） 非現実的楽観主義の起源 (opt_unrealistic) === */
PsychApp.registerModule({
  id: "opt_unrealistic",
  title: "非現実的楽観主義の起源",
  emoji: "🎓",
  category: "optimism",
  tagline: "Weinstein(1980)という出発点・比較法という測定・健康リスク認知・自己中心性・脱バイアスへの抵抗",
  overview: `<p>楽観性バイアス研究の出発点は、健康リスクをめぐる素朴な疑問にある。人はなぜ「自分だけは大丈夫」と考えるのか。1970年代に断片的に蓄積された健康リスク認知の証拠を、<strong>系統的な認知傾向</strong>として初めて体系化したのが <em>Neil D. Weinstein</em>(1980)であった。本モジュールでは、この<strong>非現実的楽観主義(unrealistic optimism)</strong>という概念がどのように生まれ、どんな測定方法によって支えられ、そしてその測定方法がのちに大きな方法論的論争(<a href="#/module/opt_controversy">統計的人工産物説</a>)の火種となっていくのか、起源にさかのぼって整理する。</p>
  <div class="callout note"><b>「起源的研究(pioneering work)」とは</b>：Weinstein(1980, <em>Journal of Personality and Social Psychology</em> 39:806–820)は、楽観性バイアス研究全体の出発点とされる記念碑的論文である。以後の研究はすべて、ここで定義された概念と測定法を継承・批判する形で展開した。</div>`,
  lessons: [
    {
      title: "Weinstein(1980) — 起源的研究",
      body: `
        <p>「自分が交通事故に遭う確率は、ほかの人より低い」——多くの人がこう感じる。だが<strong>全員が自分を平均以下だと主張するなら、その全員が同時に正しいことはありえない</strong>。この単純だが強力な論理から、楽観性バイアス研究は始まった。</p>
        <h3>前史：健康リスク認知の断片的証拠（1970年代）</h3>
        <p>Weinstein 以前にも、人々が自分のリスクを過小評価する傾向は散発的に報告されていた。<em>Robertson</em>(1977)は<strong>自動車事故</strong>について、<em>Harris &amp; Guten</em>(1979)は<strong>健康行動</strong>について、人々が自分を平均的他者より安全だと見積もる傾向の手がかりを示していた。しかしこれらは断片的な観察にとどまり、現象を一般的・体系的に定義するには至っていなかった。Weinstein の体系的研究は、この土壌の上に成立したのである。</p>
        <h3>Weinstein(1980)の研究デザイン</h3>
        <p><em>Weinstein</em>(1980)は、<strong>258名の大学生</strong>に<strong>42の出来事</strong>を提示し、それぞれについて「<strong>自分の可能性が同級生(classmates)と比べてどれだけ違うか</strong>」を見積もらせた。出来事にはポジティブなもの（よい仕事に就く、家を所有する、長生きする等）とネガティブなもの（離婚する、がんになる、自殺を試みる等）の両方が含まれていた。</p>
        <div class="callout key"><b>主要な結果(ps &lt; .001)</b>：学生は<strong>ポジティブな出来事については自分の可能性を「平均以上」</strong>と、<strong>ネガティブな出来事については「平均以下」</strong>と評価した。つまり「よいことは自分に起こりやすく、悪いことは自分には起こりにくい」と、体系的に偏って判断したのである。</div>
        <h3>「平均以下効果」の論理 — なぜこれが「誤り」なのか</h3>
        <p>個々人が「自分は平均以下のリスクだ」と答えること自体は、誰か一人については正しいかもしれない。問題は<strong>集団全体で見たとき</strong>である。定義上、全員が同時に平均以下であることは統計的に不可能だ。それにもかかわらず集団の平均的な回答が「平均以下」に偏るなら、それは個人の正確な自己評価では説明できない<strong>系統的誤り(systematic error)</strong>である。Weinstein はこの論理に基づき、この偏りを<strong>非現実的楽観主義(unrealistic optimism)</strong>と名づけた。</p>
        <div class="callout tip"><b>「非現実的」の意味</b>：ここでの「非現実的(unrealistic)」とは、特定の個人の予測が外れているという意味ではない。<em>集団レベルで見ると論理的に成り立たないほど楽観に偏っている</em>、という統計的・論理的な意味での「非現実」である。この点は、のちの<a href="#/module/opt_controversy">統計的人工産物説</a>を理解する鍵にもなる。</div>
        <h3>この論文が分野の出発点である理由</h3>
        <p>Weinstein(1980)が決定的だったのは、(1)<strong>多数の出来事を一括して</strong>扱い現象の一般性を示した点、(2)ポジティブ／ネガティブ両価の出来事で<strong>対称的なパターン</strong>を見いだした点、(3)「平均以下の主張は集団では矛盾する」という<strong>明快な論理</strong>でバイアスを定義した点にある。これにより、それまで散発的だったリスク認知の観察が、<strong>一つの命名された現象</strong>として研究可能になった。以後の楽観性バイアス研究——<a href="#/module/opt_illusions">ポジティブ・イリュージョン</a>論や<a href="#/module/opt_neuro">神経科学的研究</a>——は、いずれもこの起源に連なっている。</p>
        <div class="callout warn"><b>注意：気質的楽観主義との区別</b>：Weinstein のいう非現実的楽観主義は「<strong>特定の確率判断の歪み</strong>」であって、<em>Scheier &amp; Carver</em>(1985)が測定した性格特性としての<strong>気質的楽観主義(dispositional optimism)</strong>とは概念的に別物である。両者は名前が似ているが混同してはならない。</div>
      `,
      figure: `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="290" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">Weinstein(1980) 自己 vs 平均の見積もり</text>
        <line x1="60" y1="155" x2="470" y2="155" stroke="#1d2433" stroke-width="1.5"/>
        <text x="62" y="172" font-size="10" fill="#5b6478">＝「同級生の平均」の基準線（0）</text>
        <text x="30" y="100" font-size="10.5" fill="#5b6478" transform="rotate(-90 30 100)">自己の見積もり</text>
        <text x="44" y="74" text-anchor="middle" font-size="10" fill="#15c4a8">平均より高</text>
        <text x="44" y="240" text-anchor="middle" font-size="10" fill="#e0566b">平均より低</text>
        <rect x="120" y="95" width="90" height="60" rx="6" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <text x="165" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2433">ポジティブ</text>
        <text x="165" y="137" text-anchor="middle" font-size="10" fill="#5b6478">な出来事</text>
        <text x="165" y="88" text-anchor="middle" font-size="10" fill="#15c4a8" font-weight="700">自分＞平均</text>
        <rect x="310" y="155" width="90" height="60" rx="6" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="355" y="180" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2433">ネガティブ</text>
        <text x="355" y="197" text-anchor="middle" font-size="10" fill="#5b6478">な出来事</text>
        <text x="355" y="232" text-anchor="middle" font-size="10" fill="#e0566b" font-weight="700">自分＜平均</text>
        <text x="260" y="272" text-anchor="middle" font-size="10" fill="#5b6478">よいことは自分に起こりやすく、悪いことは自分に起こりにくい（ps &lt; .001）</text>
      </svg>`,
      figcaption: "Weinstein(1980)の結果模式。258名の大学生は、ポジティブな出来事では自分を「平均より高い」と、ネガティブな出来事では「平均より低い」と評価した。両価で対称的に楽観へ偏るこのパターンが、非現実的楽観主義として定義された。",
      terms: [
        { term: "非現実的楽観主義(unrealistic optimism)", def: "自分のリスクを平均的他者より低く見積もる体系的傾向。Weinstein(1980)が定義した。" },
        { term: "Weinstein(1980)", def: "258名に42の出来事を評価させ非現実的楽観主義を定義した、分野の起源的研究。" },
        { term: "起源的研究(pioneering work)", def: "後続研究すべての出発点となる記念碑的研究。Weinstein(1980)が該当する。" },
        { term: "系統的誤り(systematic error)", def: "集団全体で見ると論理的に成り立たないほど一方向へ偏った判断のずれ。" },
        { term: "Robertson(1977)", def: "自動車事故のリスク認知について、Weinstein 以前の断片的証拠を示した前史的研究。" },
        { term: "Harris & Guten(1979)", def: "健康行動についてリスク過小評価の手がかりを示した、前史的研究の一つ。" },
        { term: "気質的楽観主義(dispositional optimism)", def: "性格特性としての楽観性。確率判断の歪みである非現実的楽観主義とは別概念。" },
      ],
    },
    {
      title: "健康への感受性・自己中心性・脱バイアス抵抗",
      body: `
        <p>起源的研究のあと、<em>Weinstein</em> 自身が現象の<strong>適用範囲・原因・頑健さ</strong>を相次いで検証した。本レッスンでは、(1)健康問題への拡張、(2)自己中心性という原因、(3)脱バイアス介入への抵抗、という三つの発展を追う。</p>
        <h3>健康・生命に関わる問題への拡張（Weinstein 1982）</h3>
        <p><em>Weinstein</em>(1982, <em>Journal of Behavioral Medicine</em> 5:441–460)は、<strong>100名</strong>の大学生に<strong>45の健康・生命に関わる問題</strong>（心臓発作、がん、薬物依存など）を評価させた。その結果、<strong>34のハザードで有意な楽観バイアス</strong>が認められた。さらに、どんな条件で楽観が強まるかも明らかになった。</p>
        <ul>
          <li><strong>統制可能性の認知</strong>：「自分の努力で避けられる」と思える問題ほど、楽観バイアスが大きくなる。</li>
          <li><strong>経験の欠如</strong>：その問題をまだ経験していない人ほど、楽観バイアスが大きくなる。</li>
        </ul>
        <div class="callout example"><b>例</b>：「肺がん」は禁煙という自分の努力で避けられると感じられやすいため楽観が強く出やすいが、自分で統制しにくい問題では楽観は相対的に小さい。「自分はコントロールできる」という感覚が楽観を膨らませるのである。</div>
        <h3>自己中心性(egocentrism)という原因（Weinstein &amp; Lachendro 1982）</h3>
        <p>なぜ人は自分を平均以下だと考えるのか。<em>Weinstein &amp; Lachendro</em>(1982)は、その一因として<strong>自己中心性(egocentrism)</strong>を挙げた。人は比較を求められたとき、<strong>自分のリスク低減要因（自分はシートベルトを締める、運動している等）には注意を向けるが、他者も同様の要因をもっていることを十分に考慮しない</strong>。その結果、自分だけが特別に安全に見えてしまう。これは悪意や見栄ではなく、<strong>比較における情報処理の偏り</strong>として理解される。</p>
        <h3>比較法(comparison method)という測定 — のちの論争の火種</h3>
        <p>ここまでの一連の研究に共通するのは、<strong>「自分」を「平均的他者」と比べさせる</strong>という測定方法である。これを<strong>比較法(comparison method)</strong>と呼ぶ。比較法は非現実的楽観主義を簡便に検出できる一方、<strong>測定法そのものが楽観に見えるパターンを生みうる</strong>という疑いを後年招くことになる。</p>
        <div class="callout warn"><b>論争への伏線</b>：比較法という測定の妥当性は、のちに <em>Harris &amp; Hahn</em>(2011)らによって根底から問われる。「合理的（非楽観的）なエージェントでも、比較法のデータは楽観的に見えうる」という<strong>統計的人工産物(statistical artifact)説</strong>である。詳細は<a href="#/module/opt_controversy">方法論的論争のモジュール</a>で扱う。起源のモジュールでは「比較法が論争の火種になった」という点だけ押さえておきたい。</div>
        <h3>脱バイアスへの抵抗（Weinstein &amp; Klein 1995）</h3>
        <p>では、楽観バイアスは教育や情報提供で簡単に取り除けるのか。<em>Weinstein &amp; Klein</em>(1995, <em>Health Psychology</em> 14:132–140)は、<strong>個人のリスク認知が脱バイアス介入に抵抗する</strong>ことを示した。リスク要因の情報を与えたり比較を促したりしても、人々の楽観的な自己評価は容易には修正されなかったのである。これは、楽観性バイアスが<strong>表面的な思い違いではなく、根深い認知傾向</strong>であることを示唆する。</p>
        <div class="callout key"><b>本レッスンのまとめ</b>：Weinstein は起源的研究のあと、(1)健康問題でも現象が広く成り立つこと、(2)<strong>統制可能性の認知</strong>と<strong>経験の欠如</strong>が楽観を強めること、(3)その一因が<strong>自己中心性</strong>であること、(4)楽観が<strong>脱バイアスに抵抗する</strong>ことを示した。そして、これらすべてを支えた<strong>比較法</strong>という測定が、のちの論争の中心になる。</div>
      `,
      figure: `<svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="270" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">自己中心性が楽観を生む仕組み</text>
        <defs>
          <marker id="opt_un_ar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6478"/></marker>
        </defs>
        <rect x="40" y="60" width="180" height="64" rx="9" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="130" y="86" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">自分のリスク低減要因</text>
        <text x="130" y="104" text-anchor="middle" font-size="10" fill="#5b6478">（運動する・気をつける）</text>
        <text x="130" y="118" text-anchor="middle" font-size="10" fill="#15c4a8" font-weight="700">→よく考慮する</text>
        <rect x="300" y="60" width="180" height="64" rx="9" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="390" y="86" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">他者のリスク低減要因</text>
        <text x="390" y="104" text-anchor="middle" font-size="10" fill="#5b6478">（他者も気をつけている）</text>
        <text x="390" y="118" text-anchor="middle" font-size="10" fill="#e0566b" font-weight="700">→十分考えない</text>
        <line x1="130" y1="124" x2="220" y2="178" stroke="#5b6478" stroke-width="2" marker-end="url(#opt_un_ar)"/>
        <line x1="390" y1="124" x2="300" y2="178" stroke="#5b6478" stroke-width="2" marker-end="url(#opt_un_ar)"/>
        <rect x="150" y="182" width="220" height="44" rx="9" fill="#fdeccf" stroke="#f0a020" stroke-width="2"/>
        <text x="260" y="202" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">「自分だけ特別に安全」</text>
        <text x="260" y="219" text-anchor="middle" font-size="10" fill="#5b6478">＝非現実的楽観主義</text>
        <text x="260" y="252" text-anchor="middle" font-size="10" fill="#5b6478">自己情報に偏った比較（自己中心性）が楽観を生む（Weinstein &amp; Lachendro 1982）</text>
      </svg>`,
      figcaption: "自己中心性(egocentrism)の模式。人は自分のリスク低減要因にはよく注意を向けるが、他者も同様の要因をもつことを十分に考慮しない。この比較の偏りが「自分だけ特別に安全」という非現実的楽観主義を生む。",
      terms: [
        { term: "Weinstein(1982)", def: "100名に45の健康問題を評価させ、34のハザードで楽観バイアスを示した研究。" },
        { term: "統制可能性の認知", def: "自分の努力で避けられると感じられる問題ほど楽観バイアスが大きくなる要因。" },
        { term: "経験の欠如", def: "その問題を未経験の人ほど楽観バイアスが大きくなる要因。" },
        { term: "自己中心性(egocentrism)", def: "自分のリスク低減要因ばかり考慮し他者の要因を軽視する比較の偏り。楽観の一因。" },
        { term: "比較法(comparison method)", def: "自己を平均的他者と比べさせる測定法。のちの統計的人工産物論争の火種となった。" },
        { term: "Weinstein & Klein(1995)", def: "個人のリスク認知が脱バイアス介入に抵抗することを示した研究。" },
        { term: "脱バイアスへの抵抗", def: "情報提供などの介入でも楽観的自己評価が容易に修正されない頑健さ。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "楽観性バイアス研究の「起源的研究(pioneering work)」とされ、非現実的楽観主義(unrealistic optimism)を定義したのは誰の研究か。", choices: ["Taylor &amp; Brown(1988)", "Langer(1975)", "Sharot et al.(2007)", "Weinstein(1980)"], answer: 3, explain: "Weinstein(1980, JPSP 39:806–820)が258名に42の出来事を評価させ、非現実的楽観主義を定義した。これが分野全体の出発点とされる。", difficulty: 1 },
    { type: "mcq", stem: "Weinstein(1980)の研究で、参加者は何を基準に各出来事の自分の可能性を見積もったか。", choices: ["過去の自分", "同級生（平均的他者）と比べてどれだけ違うか", "専門家の統計値", "テレビ報道の頻度"], answer: 1, explain: "参加者は「自分の可能性が同級生(classmates)と比べてどれだけ違うか」を見積もった。この自他比較こそが比較法(comparison method)である。", difficulty: 2 },
    { type: "mcq", stem: "Weinstein(1980)で観察された主要なパターンとして正しいのはどれか（ps &lt; .001）。", choices: ["ポジティブな出来事もネガティブな出来事も平均以下と評価した", "ポジティブな出来事は平均以上、ネガティブな出来事は平均以下と評価した", "すべての出来事を平均どおりと評価した", "ネガティブな出来事だけを平均以上と評価した"], answer: 1, explain: "ポジティブな出来事については自分を平均以上、ネガティブな出来事については平均以下と評価した。よいことは起こりやすく悪いことは起こりにくいという両価で対称的な楽観の偏りである。", difficulty: 2 },
    { type: "mcq", stem: "「全員が自分のリスクを平均以下だと主張するならそれは誤りだ」という論理が成り立つのはなぜか。", choices: ["平均以下の人が実際にいないから", "集団全体で見ると全員が同時に平均以下であることは統計的に不可能だから", "リスクは主観的で測定できないから", "大学生は楽観的だから"], answer: 1, explain: "個人については平均以下が正しいこともあるが、集団全体で全員が同時に平均以下であることは定義上ありえない。それでも平均的回答が平均以下に偏るなら、それは系統的誤りである。", difficulty: 2 },
    { type: "mcq", stem: "Weinstein(1980)以前の「前史」にあたる健康リスク認知の断片的証拠として、出典に挙げられているのはどれか。", choices: ["Festinger(1954)とSchachter(1959)", "Robertson(1977, 自動車事故)とHarris &amp; Guten(1979, 健康行動)", "Asch(1951)とMilgram(1963)", "Kahneman &amp; Tversky(1979)とLanger(1975)"], answer: 1, explain: "Robertson(1977)は自動車事故、Harris &amp; Guten(1979)は健康行動について、人々が自分を平均的他者より安全と見積もる断片的証拠を示し、Weinstein の体系的研究の土壌となった。", difficulty: 2 },
    { type: "mcq", stem: "Weinstein(1982, J Behav Med)の健康問題に関する研究の内容として正しいのはどれか。", choices: ["100名が45の健康・生命に関わる問題を評価し、34のハザードで有意な楽観バイアスが認められた", "258名が42の出来事を評価し、すべてで悲観バイアスが認められた", "1000名が脳画像課題を行い扁桃体の活動を測定した", "抑うつ患者だけを対象に更新課題を行った"], answer: 0, explain: "Weinstein(1982)は100名に45の健康・生命に関わる問題を評価させ、34のハザードで有意な楽観バイアスを見いだした。統制可能性の認知や経験の欠如が楽観を強める要因として同定された。", difficulty: 2 },
    { type: "mcq", stem: "Weinstein(1982)で、楽観バイアスを「大きくする」要因として同定されたのはどれか。", choices: ["問題を統制できないと感じること", "その問題を過去に経験していること", "統制可能性の認知（自分の努力で避けられると思えること）と経験の欠如", "他者と一切比較しないこと"], answer: 2, explain: "「自分の努力で避けられる」と思える（統制可能性の認知）問題ほど、また未経験の問題ほど楽観バイアスは大きくなった。「自分はコントロールできる」という感覚が楽観を膨らませる。", difficulty: 3 },
    { type: "mcq", stem: "Weinstein &amp; Lachendro(1982)が非現実的楽観主義の一因として位置づけた概念はどれか。", choices: ["認知的不協和", "傍観者効果", "自己中心性(egocentrism)", "計画錯誤"], answer: 2, explain: "彼らは自己中心性(egocentrism)を一因とした。人は自分のリスク低減要因には注意を向けるが、他者も同様の要因をもつことを十分考慮しないため、自分だけが特別に安全に見えてしまう。", difficulty: 2 },
    { type: "mcq", stem: "自己中心性(egocentrism)による楽観の説明として最も適切なのはどれか。", choices: ["他者を見下したいという見栄から生じる", "自分のリスク低減要因に注意が偏り、他者の同様の要因を十分考慮しない比較の偏りから生じる", "脳の扁桃体の損傷から生じる", "報酬への過敏さから生じる"], answer: 1, explain: "自己中心性は悪意や見栄ではなく、比較における情報処理の偏りとして理解される。自分の安全要因ばかり考慮し他者の要因を軽視するため、自分だけが特別に安全に見える。", difficulty: 3 },
    { type: "mcq", stem: "Weinstein 一連の研究で用いられ、のちに方法論的論争の火種となった測定方法は何と呼ばれるか。", choices: ["比較法(comparison method)", "随伴性判断課題", "ストループ課題", "信念更新課題"], answer: 0, explain: "自己を平均的他者と比較させる比較法(comparison method)が用いられた。この測定法の妥当性が、のちに統計的人工産物説によって問われることになる。", difficulty: 2 },
    { type: "mcq", stem: "比較法をめぐる後年の論争について、出典の記述に最も忠実な選択肢はどれか。", choices: ["比較法は完全に妥当で、楽観性バイアスの存在に異論はないとされる", "比較法は脳画像研究によって完全に否定された", "Harris &amp; Hahn(2011)らは、合理的なエージェントでも比較法のデータは楽観的に見えうるとする統計的人工産物説を提起した", "比較法は抑うつ患者にしか使えない"], answer: 2, explain: "出典は両論を併記している。Harris &amp; Hahn(2011)らは、合理的（非楽観的）なエージェントでも比較法のデータが楽観的に見えうるという統計的人工産物説を提起し、現象の存在自体をめぐる論争が続いている。断定を避けるのが誠実である。", difficulty: 3 },
    { type: "mcq", stem: "Weinstein &amp; Klein(1995, Health Psychology)が示したのはどれか。", choices: ["楽観バイアスは情報提供で簡単に消える", "個人のリスク認知が脱バイアス介入に抵抗する", "抑うつ者では楽観が増す", "比較法は信頼性が低い"], answer: 1, explain: "Weinstein &amp; Klein(1995)は、リスク情報の提供などの脱バイアス介入を行っても、人々の楽観的な自己評価が容易には修正されないことを示した。楽観が根深い認知傾向であることを示唆する。", difficulty: 2 },
    { type: "mcq", stem: "Weinstein のいう非現実的楽観主義と、Scheier &amp; Carver(1985)の気質的楽観主義(dispositional optimism)の関係として正しいのはどれか。", choices: ["両者は完全に同じ概念である", "気質的楽観主義のほうが先に提唱された", "両者とも脳画像でのみ測定される", "非現実的楽観主義は特定の確率判断の歪み、気質的楽観主義は性格特性であり、概念的に区別される"], answer: 3, explain: "非現実的楽観主義は「特定の確率判断の歪み」であり、気質的楽観主義は「一般化された結果期待」という性格特性である。名前は似るが概念的に別物で、混同してはならない。", difficulty: 3 },
  ],
});
