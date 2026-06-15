/* === 楽観性の心理学（特別編） ポジティブ・イリュージョン (opt_illusions) === */
PsychApp.registerModule({
  id: "opt_illusions",
  title: "ポジティブ・イリュージョン",
  emoji: "✨",
  category: "optimism",
  tagline: "Taylor & Brown(1988)の3要素統合・統制の幻想・平均以上効果・自己高揚／自己奉仕・well-being論争",
  overview: `<p>楽観性バイアスは、社会心理学のリスク認知研究として始まった現象であるが、それを<strong>精神的健康（well-being）</strong>の理論へと格上げしたのが <em>Taylor & Brown（1988）</em> の<strong>ポジティブ・イリュージョン（positive illusions）</strong>論である。彼らは、自己・統制・将来に関する3種の相互関連した肯定的な幻想が、抑うつでないふつうの人々の心の健康を支えていると論じた。本モジュールでは、この理論の中身（L1）と、それを構成する3要素の各論および「幻想は本当に健康に良いのか」という<strong>well-being論争</strong>（L2）を、原典に忠実に概観する。</p>
  <div class="callout note"><b>位置づけ</b>：楽観性バイアス（将来の確率判断の歪み）は、ポジティブ・イリュージョンの<strong>第3要素</strong>に相当する。既存の<a href="#/module/social">社会心理学</a>で学んだ<em>自己奉仕バイアス（self-serving bias）</em>は、ここで扱う自己高揚の家族に属する概念であり、本モジュールはそれをより深く掘り下げるものである。</div>`,
  lessons: [
    {
      title: "Taylor & Brown(1988) — 幻想と精神的健康",
      body: `
        <p><em>Taylor & Brown</em> は1988年、<em>Psychological Bulletin</em>（103巻2号, 193–210）に <strong>"Illusion and well-being"</strong> を発表した。彼らの主張は、当時の常識を真っ向から覆すものであった。</p>
        <h3>従来の通念への挑戦</h3>
        <p>それまでの心理学では、<strong>正確な現実認識こそが精神的健康に必須である</strong>と広く信じられてきた。世界を歪みなく見られる人が健康で、現実を歪めて見る人は不適応だ、という考えである。これに対し <em>Taylor & Brown</em> は、むしろ逆だと論じた。すなわち、<strong>ふつうの（抑うつでない）人々は現実を体系的に歪めて肯定的に見ており、その歪みこそが精神的健康（well-being）を促進している</strong>、というのである。</p>
        <div class="callout key"><b>本論文の中心命題</b>：正確な自己認識ではなく、<strong>軽度に肯定的に歪んだ自己認識</strong>こそが、良好な精神的健康・他者への思いやり・生産的で創造的な活動・困難から立ち直る力を支えている。</div>
        <h3>3種の相互関連した肯定的幻想</h3>
        <p>彼らは、健康な心を支える幻想を次の3つに整理した。これらは互いに関連し合っている。</p>
        <table>
          <tr><th>幻想</th><th>内容</th></tr>
          <tr><td><b>(1) 非現実的に肯定的な自己評価</b></td><td>自分を実際以上に望ましい人物だと評価する（後述の平均以上効果に対応）。</td></tr>
          <tr><td><b>(2) 統制感・熟達感の誇張</b></td><td>自分が出来事をどれだけ統制できるかを過大評価する（統制の幻想に対応）。</td></tr>
          <tr><td><b>(3) 非現実的楽観主義</b></td><td>将来に対して非現実的に明るい見通しをもつ（<a href="#/module/opt_unrealistic">非現実的楽観主義</a>＝楽観性バイアスに対応）。</td></tr>
        </table>
        <p>このうち第3要素の<strong>非現実的楽観主義（unrealistic optimism）</strong>こそが、本特別編で扱う楽観性バイアスにほかならない。<em>Taylor & Brown</em> は、3要素を「ポジティブ・イリュージョン」という1つの傘の下にまとめ上げることで、ばらばらに研究されていた現象群を<strong>精神的健康という共通の機能</strong>のもとに統合してみせたのである。</p>
        <h3>がん患者研究という起源</h3>
        <p>この理論の着想は、<em>Taylor（1983）</em>の<strong>乳がん患者を対象とした研究</strong>に起源をもつ。深刻な病に直面した患者たちが、客観的には根拠の乏しい肯定的な信念（「自分は病気を統制できている」「自分は他の患者よりうまく対処している」など）を抱くことで、むしろ良好に適応していく様子が観察された。<strong>脅威的な現実に直面したときこそ、肯定的な幻想が心理的な適応を助ける</strong>——この臨床的観察が、健常者一般へと拡張されてポジティブ・イリュージョン論となった。</p>
        <div class="callout example"><b>例</b>：重い病気・離別・事故といった脅威に直面した人ほど、「自分は乗り越えられる」「これには意味がある」といった肯定的な意味づけを行う。客観的には楽観しすぎかもしれないが、その信念が立ち直り（回復）を支える、というのが本理論の見立てである。</div>
        <div class="callout warn"><b>「抑うつでない人」が前提</b>：この理論はあくまで<strong>健常者</strong>の心の働きを説明するものである。抑うつをもつ人々ではこれらの肯定的幻想が欠如しがちであり、彼らはむしろ現実をより正確に見ている可能性が指摘されてきた（<a href="#/module/opt_depression">抑うつリアリズム</a>を参照）。健常者の楽観と抑うつ者の正確さは、しばしば鏡像の関係として論じられる。</div>
      `,
      figure: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="270" rx="14" fill="#f5f7fd"/>
        <text x="240" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">ポジティブ・イリュージョンの3要素</text>
        <rect x="58" y="56" width="120" height="52" rx="9" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="118" y="78" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">(1) 肯定的な</text>
        <text x="118" y="94" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">自己評価</text>
        <rect x="302" y="56" width="120" height="52" rx="9" fill="#fdeccf" stroke="#f0a020" stroke-width="2"/>
        <text x="362" y="78" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">(2) 統制感の</text>
        <text x="362" y="94" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">誇張</text>
        <rect x="180" y="124" width="120" height="52" rx="9" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="240" y="146" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">(3) 非現実的</text>
        <text x="240" y="162" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">楽観主義</text>
        <rect x="150" y="214" width="180" height="40" rx="10" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2.5"/>
        <text x="240" y="239" text-anchor="middle" font-size="13" font-weight="800" fill="#1d2433">精神的健康（well-being）</text>
        <defs>
          <marker id="oi_arr" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15c4a8"/></marker>
        </defs>
        <line x1="118" y1="108" x2="200" y2="212" stroke="#15c4a8" stroke-width="2.5" marker-end="url(#oi_arr)"/>
        <line x1="362" y1="108" x2="280" y2="212" stroke="#15c4a8" stroke-width="2.5" marker-end="url(#oi_arr)"/>
        <line x1="240" y1="176" x2="240" y2="212" stroke="#15c4a8" stroke-width="2.5" marker-end="url(#oi_arr)"/>
        <text x="240" y="194" text-anchor="middle" font-size="9.5" fill="#5b6478">3つの幻想が相互に関連しつつ心の健康を支える（Taylor & Brown 1988）</text>
      </svg>`,
      figcaption: "Taylor & Brown（1988）は、肯定的な自己評価・統制感の誇張・非現実的楽観主義という3種の相互関連した幻想が、精神的健康（well-being）を促進すると論じた。楽観性バイアスはこのうち第3要素に相当する。",
      terms: [
        { term: "ポジティブ・イリュージョン（positive illusions）", def: "自己・統制・将来に関する3種の肯定的幻想を統合したTaylor & Brown(1988)の概念。" },
        { term: "精神的健康（well-being）", def: "良好な適応・対人関係・生産性・回復力を含む心の健康。本理論はこれを幻想が支えるとした。" },
        { term: "Illusion and well-being", def: "Psychological Bulletin 103(2):193–210に載ったTaylor & Brown(1988)の論文題。" },
        { term: "従来の通念への挑戦", def: "正確な現実認識こそ精神的健康に必須という旧説を、肯定的な歪みが健康を支えると覆した点。" },
        { term: "3種の肯定的幻想", def: "(1)肯定的な自己評価、(2)統制感の誇張、(3)非現実的楽観主義の相互関連した3要素。" },
        { term: "Taylor(1983)のがん患者研究", def: "乳がん患者の肯定的信念が適応を助けた観察。ポジティブ・イリュージョン論の起源。" },
        { term: "非現実的楽観主義（第3要素）", def: "将来を非現実的に明るく見る幻想。本特別編で扱う楽観性バイアスに対応する。" },
        { term: "脅威下の適応", def: "深刻な現実に直面したときほど肯定的幻想が心理的回復を助けるとする見立て。" },
      ],
    },
    {
      title: "3要素の各論と well-being 論争",
      body: `
        <p>ポジティブ・イリュージョンを構成する3要素は、それぞれ別個の研究伝統の中で確立されてきた。ここでは前2要素（統制感・自己評価）の古典研究を確認し、最後にこの理論をめぐる<strong>批判と反論</strong>を両論併記する。</p>
        <h3>第2要素：統制の幻想（Langer, 1975）</h3>
        <p><strong>統制の幻想（illusion of control）</strong>は、<em>Langer（1975）</em>が <em>Journal of Personality and Social Psychology</em>（32巻, 311–328）の <strong>"The illusion of control"</strong> で示した現象である。人々は、<strong>純粋に偶然に支配される結果に対してすら、自分が結果を統制できると過大評価する</strong>。</p>
        <p><em>Langer</em> は、本来スキル（技能）が結果を左右する状況に特有の要因が、偶然の状況に紛れ込むと不適切な自信を生むと論じた。その要因が次の4つである。</p>
        <ul>
          <li><strong>競争（competition）</strong>：相手と競う場面が含まれると、統制感が高まる。</li>
          <li><strong>選択（choice）</strong>：自分で選ぶ余地があると（例：くじを自分で選ぶ）、統制感が高まる。</li>
          <li><strong>親近性（familiarity）</strong>：課題に馴染みがあると、統制感が高まる。</li>
          <li><strong>関与（involvement）</strong>：自分が積極的に関わると、統制感が高まる。</li>
        </ul>
        <div class="callout example"><b>例</b>：宝くじを「自分で選んで買った人」は、機械に「割り当てられた人」よりも、当たりへの自信が高く、その券を高値でないと手放そうとしない。当選確率は同じであるにもかかわらず、である。</div>
        <h3>第1要素：平均以上効果（Alicke, 1985）</h3>
        <p><strong>平均以上効果（better-than-average effect）</strong>は、<em>Alicke（1985）</em>が集団レベルの現象として記述したものである。<strong>大多数の人が、自分をさまざまな望ましい特性において「平均以上」だと評価する</strong>。しかし定義上、全員が平均以上であることは<strong>統計的に不可能</strong>である。したがって、この評価の集積は集団としての系統的な歪みを示している。</p>
        <p>これは、自分を望ましく見せようとする<strong>自己高揚（self-enhancement）</strong>、および成功を自分に・失敗を状況に帰属する<strong>自己奉仕バイアス（self-serving bias）</strong>の系譜に連なる現象であり、<em>Alicke et al.（1995, JPSP 68:804–825）</em>でさらに精緻化された。これが、ポジティブ・イリュージョンの第1要素（肯定的な自己評価）の実体である。</p>
        <div class="callout tip"><b>3要素の対応関係</b>：(1)肯定的な自己評価＝平均以上効果（<em>Alicke, 1985</em>）／(2)統制感の誇張＝統制の幻想（<em>Langer, 1975</em>）／(3)非現実的楽観主義＝<a href="#/module/opt_unrealistic">非現実的楽観主義</a>（<em>Weinstein, 1980</em>）。<em>Taylor & Brown（1988）</em>は、この3つを精神的健康のもとで束ねたのである。</div>
        <h3>well-being 論争：幻想は本当に健康に良いのか</h3>
        <p>「肯定的幻想が精神的健康を促進する」という主張は、強い反論を招いた。代表が <em>Colvin & Block（1994, Psychological Bulletin）</em> である。彼らは <em>Taylor & Brown（1988）</em> の主張を批判的に検討し、<strong>「ポジティブ・イリュージョンが精神的健康を促進するという主張は証明されていない」</strong>と結論づけた。</p>
        <p>これに対し、同じ1994年に <em>Taylor & Brown</em> は <strong>"Positive illusions and well-being revisited: separating fact from fiction（事実とフィクションを分ける）"</strong> で反論を行った。こうして、幻想が健康を促進するのか否かをめぐる論争が形成された。</p>
        <div class="callout warn"><b>両論を併記すべき論点</b>：この well-being 論争は<strong>未決着</strong>である。「肯定的幻想は心の健康を支える」（<em>Taylor & Brown</em>）と「その因果的効用は証明されていない」（<em>Colvin & Block</em>）の<strong>両方の立場</strong>を、断定せずに理解しておくことが学術的に誠実である。本モジュールの主張を「確立した事実」として受け取らないこと。</div>
        <p>なお、数学的に「偶然の出来事ですら統制できると感じる」のがなぜ誤りなのか、確率の感覚を底上げしたい読者は、特別コース「<a href="bayes/index.html">ベイズの階段</a>」で条件付き確率を補強するとよい。</p>
      `,
      figure: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="250" rx="14" fill="#f5f7fd"/>
        <text x="240" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">平均以上効果：全員は平均以上になれない</text>
        <line x1="55" y1="200" x2="455" y2="200" stroke="#1d2433" stroke-width="1.5"/>
        <line x1="255" y1="60" x2="255" y2="200" stroke="#5b6478" stroke-width="1.5" stroke-dasharray="5 4"/>
        <text x="255" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#5b6478">真の平均</text>
        <rect x="300" y="96" width="120" height="104" rx="6" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="360" y="126" text-anchor="middle" font-size="11" font-weight="800" fill="#e0566b">自己評価の</text>
        <text x="360" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="#e0566b">大半がここ</text>
        <text x="360" y="160" text-anchor="middle" font-size="10.5" fill="#1d2433">「自分は</text>
        <text x="360" y="175" text-anchor="middle" font-size="10.5" fill="#1d2433">平均以上」</text>
        <rect x="90" y="150" width="120" height="50" rx="6" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="150" y="172" text-anchor="middle" font-size="10.5" fill="#1d2433">本来あるべき</text>
        <text x="150" y="187" text-anchor="middle" font-size="10.5" fill="#1d2433">下半分の人々</text>
        <text x="150" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="#5b6cf0">平均未満（半数）</text>
        <text x="360" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#e0566b">平均以上（半数のはず）</text>
        <text x="240" y="228" text-anchor="middle" font-size="9.5" fill="#5b6478">大多数が「自分は平均以上」と答えるが、それは統計的に不可能な系統的歪みである</text>
      </svg>`,
      figcaption: "平均以上効果（Alicke, 1985）。本来、平均以上の人と平均未満の人は半々のはずだが、大多数が「自分は平均以上」と評価する。これは集団としての系統的な自己高揚の歪みを示す。",
      terms: [
        { term: "統制の幻想（illusion of control）", def: "偶然に支配される結果ですら統制できると過大評価する傾向（Langer, 1975）。" },
        { term: "スキル状況特有の4要因", def: "競争・選択・親近性・関与。偶然の状況に紛れ込むと不適切な自信を生む。" },
        { term: "平均以上効果（better-than-average effect）", def: "大多数が自分を平均以上と評価する現象。統計的に不可能な系統的歪み（Alicke, 1985）。" },
        { term: "自己高揚（self-enhancement）", def: "自分を望ましく見せようとする傾向。平均以上効果の背後にある動機。" },
        { term: "自己奉仕バイアス（self-serving bias）", def: "成功を自分に・失敗を状況に帰属する傾向。自己高揚の家族に属する。" },
        { term: "Colvin & Block(1994)の批判", def: "ポジティブ・イリュージョンが精神的健康を促進する主張は証明されていないとした批判。" },
        { term: "separating fact from fiction", def: "1994年にTaylor & Brownが批判へ反論した論文の副題。事実と虚構を分ける意。" },
        { term: "well-being論争", def: "肯定的幻想が健康に良いか否かをめぐる未決着の論争。両論併記が誠実とされる。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "<em>Taylor & Brown（1988）</em>の論文 \"Illusion and well-being\" が掲載された学術誌として正しいのはどれか。", choices: ["Nature", "Psychological Bulletin", "Health Psychology", "Journal of Behavioral Medicine"], answer: 1, explain: "Taylor & Brown(1988)は Psychological Bulletin（103巻2号, 193–210）に \"Illusion and well-being\" を発表した。", difficulty: 1 },
    { type: "mcq", stem: "<em>Taylor & Brown（1988）</em>のポジティブ・イリュージョン論が挑戦した「従来の通念」とは何か。", choices: ["楽観主義は遺伝で決まるという通念", "正確な現実認識こそが精神的健康に必須であるという通念", "抑うつは現実を歪めて見るという通念", "幻想はすべて病的であるという通念"], answer: 1, explain: "彼らは、正確な現実認識が精神的健康に必須だという従来の通念に挑戦し、むしろ肯定的に歪んだ認識が健康を支えると論じた。", difficulty: 2 },
    { type: "mcq", stem: "ポジティブ・イリュージョンを構成する「3種の相互関連した肯定的幻想」に<strong>含まれない</strong>ものはどれか。", choices: ["非現実的に肯定的な自己評価", "統制感・熟達感の誇張", "非現実的楽観主義", "過去の出来事の正確な記憶"], answer: 3, explain: "3要素は(1)肯定的な自己評価、(2)統制感の誇張、(3)非現実的楽観主義である。「過去の正確な記憶」は含まれない。", difficulty: 2 },
    { type: "mcq", stem: "本特別編で扱う楽観性バイアスは、ポジティブ・イリュージョンの3要素のうちどれに相当するか。", choices: ["第1要素（肯定的な自己評価）", "第2要素（統制感の誇張）", "第3要素（非現実的楽観主義）", "どの要素にも対応しない"], answer: 2, explain: "楽観性バイアスは将来の確率判断の歪みであり、第3要素の非現実的楽観主義（unrealistic optimism）に対応する。", difficulty: 1 },
    { type: "mcq", stem: "ポジティブ・イリュージョン理論の臨床的な起源とされるのはどの研究か。", choices: ["Langer(1975)のくじの研究", "Taylor(1983)のがん（乳がん）患者研究", "Weinstein(1980)の大学生のリスク認知研究", "Alicke(1985)の特性評価研究"], answer: 1, explain: "本理論は、脅威に直面したがん患者の肯定的信念が適応を助けた Taylor(1983) の観察に起源をもつ。", difficulty: 2 },
    { type: "mcq", stem: "<em>Langer（1975）</em>が示した「統制の幻想（illusion of control）」の定義として最も適切なのはどれか。", choices: ["スキルで決まる結果を運のせいにする傾向", "偶然に支配される結果ですら自分が統制できると過大評価する傾向", "他者の成功を妬む傾向", "リスクを実際より高く見積もる傾向"], answer: 1, explain: "統制の幻想とは、純粋に偶然に支配される結果に対してすら、人々が自分の統制力を過大評価する現象である。", difficulty: 2 },
    { type: "mcq", stem: "<em>Langer（1975）</em>が、偶然の状況で不適切な自信を生む「スキル状況に特有の要因」として挙げたものの組み合わせはどれか。", choices: ["年齢・性別・人種・国籍", "競争・選択・親近性・関与", "尤度・事前・事後・精度", "弁別性・合意性・一貫性・安定性"], answer: 1, explain: "Langer は、競争・選択・親近性・関与という、本来スキル状況に特有の要因が偶然状況に紛れ込むと不適切な自信を生むとした。", difficulty: 3 },
    { type: "mcq", stem: "「平均以上効果（better-than-average effect）」を集団レベルの現象として記述したのは誰か。", choices: ["Alicke（1985）", "Colvin & Block（1994）", "Scheier & Carver（1985）", "Kahneman & Tversky（1979）"], answer: 0, explain: "平均以上効果は Alicke(1985) が記述し、Alicke et al.(1995, JPSP 68:804–825) で精緻化された。", difficulty: 2 },
    { type: "mcq", stem: "平均以上効果が「系統的な歪み」とみなされる理由として最も適切なのはどれか。", choices: ["平均という概念が心理学に存在しないから", "大多数が自分を平均以上と評価するのは統計的に不可能だから", "誰も自分を正確に評価できないから", "平均は常に上方に偏っているから"], answer: 1, explain: "定義上、全員が平均以上であることはありえない。大多数が「平均以上」と答える集積は集団としての系統的な自己高揚を示す。", difficulty: 2 },
    { type: "mcq", stem: "平均以上効果や肯定的な自己評価は、どのバイアスの系譜に連なる現象として位置づけられるか。", choices: ["計画錯誤・内側の視点", "自己高揚（self-enhancement）・自己奉仕バイアス（self-serving bias）", "抑うつリアリズム・悲観主義", "基本的帰属錯誤・行為者観察者バイアス"], answer: 1, explain: "肯定的な自己評価は、自己高揚および自己奉仕バイアスの系譜に連なり、Alicke et al.(1995)で精緻化された。", difficulty: 2 },
    { type: "mcq", stem: "ポジティブ・イリュージョン論をめぐる well-being 論争について、<em>Colvin & Block（1994）</em>の立場として正しいのはどれか。", choices: ["肯定的幻想が精神的健康を促進することは決定的に証明された", "肯定的幻想が精神的健康を促進するという主張は証明されていない", "肯定的幻想は抑うつを直接引き起こす", "肯定的幻想は加齢とともに消失する"], answer: 1, explain: "Colvin & Block(1994, Psychological Bulletin)は、ポジティブ・イリュージョンが精神的健康を促進するという主張は証明されていないと結論した。", difficulty: 2 },
    { type: "mcq", stem: "<em>Colvin & Block（1994）</em>の批判に対し、同年 <em>Taylor & Brown</em> が反論を行った論文の副題はどれか。", choices: ["separating fact from fiction（事実とフィクションを分ける）", "a cautionary note（警告的覚書）", "Why valence matters（価数がなぜ重要か）", "sadder but wiser（悲しいほど賢明）"], answer: 0, explain: "Taylor & Brown は \"Positive illusions and well-being revisited: separating fact from fiction\" で反論した。", difficulty: 3 },
    { type: "mcq", stem: "ポジティブ・イリュージョン論をめぐる well-being 論争に対し、学部教材として最も適切な扱い方はどれか。", choices: ["幻想は健康に良いと断定して教える", "幻想は健康に悪いと断定して教える", "促進派（Taylor & Brown）と批判派（Colvin & Block）の両論を併記して、未決着であることを示す", "論争は存在しないことにして触れない"], answer: 2, explain: "well-being 論争は未決着であり、促進を支持する立場とそれを証明されていないとする立場の両論を断定せず併記するのが誠実である。", difficulty: 1 },
  ],
});
