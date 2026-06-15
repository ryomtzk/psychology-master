/* === 楽観性の心理学（特別編） 応用と現代的展開 (opt_applied) === */
PsychApp.registerModule({
  id: "opt_applied",
  title: "応用と現代的展開",
  emoji: "🩺",
  category: "optimism",
  tagline: "COVID-19の比較楽観主義・公衆衛生リスク・楽観の機能と適応・脱バイアスの難しさ・序論執筆の推奨",
  overview: `<p>楽観性バイアス（optimism bias）は、実験室のなかだけの現象ではない。自分は感染しにくい・大病にはかからない・事故には遭わないという見積もりは、現実の健康行動を左右する。本モジュールでは、まず<strong>COVID-19パンデミック</strong>という公衆衛生の現場で楽観性バイアスがどう働いたかを概観し、続いて本セクション全体を締めくくる総合として、<strong>楽観の機能と適応</strong>・<strong>脱バイアスの難しさ</strong>・そして<strong>研究者が序論を執筆する際の実務的指針</strong>をまとめる。楽観性バイアスは適応的でもあり有害でもありうる<em>両義的</em>な現象であり、その両面を併せ持つことを最後まで見失わないことが本セクションの主題である。</p>
  <div class="callout note"><b>本モジュールの位置づけ</b>：本モジュールは楽観性セクションの締めくくりにあたる。起源（<a href="#/module/opt_unrealistic">非現実的楽観主義</a>）・方法論的論争（<a href="#/module/opt_controversy">統計的人工産物説</a>）・抑うつとの関係（<a href="#/module/opt_depression">抑うつリアリズム</a>）といった各論を踏まえて読むと、応用と総合の意義がより明確になる。</div>`,
  lessons: [
    {
      title: "COVID-19と公衆衛生 — 楽観はリスクになるか",
      body: `
        <p>感染症の流行下では、「自分は感染しにくい」という見積もりが、マスク着用・手洗い・社会的距離といった<strong>防護行動（protective behaviour）</strong>の採否を左右する。COVID-19パンデミックは、楽観性バイアスが公衆衛生上の現実的なリスクを持ちうることを、大規模なデータで再注目させた事例である。</p>
        <h3>比較楽観主義の確認</h3>
        <p>パンデミックの初期から、人々が自分の感染確率を<strong>平均的な他者より低く</strong>見積もる傾向、すなわち<strong>比較楽観主義（comparative optimism）</strong>が複数の研究で確認された。<em>Wise et al.（2020, Royal Society Open Science）</em>や<em>Kuper-Smith et al.（2021）</em>は、人々が自身の感染リスクを他者比で過小評価する比較楽観主義を示し、それが防護行動にどう影響するかを検討した。これは、<a href="#/module/opt_unrealistic">非現実的楽観主義</a>を「自己 vs. 他者」の比較として操作化する古典的な枠組み（Weinstein, 1980）が、現実の感染症リスク認知にそのまま現れた例といえる。</p>
        <div class="callout example"><b>例：比較楽観主義の測り方</b>　「あなた自身がCOVID-19に感染する確率は、同年代の平均的な人と比べて高いか・低いか」を尋ねる。多くの回答者が「平均より低い」と答えるが、<em>全員が平均以下であることは統計的にありえない</em>。この論理が、非現実的楽観主義を「系統的誤り」として定義する根拠であった（Weinstein, 1980）。</div>
        <h3>大規模研究：楽観と防護行動の負の相関</h3>
        <p>とくに重要なのが、欧州4か国（<strong>フランス・イタリア・スイス・英国</strong>）の<strong>n = 12,378</strong>を対象とした大規模調査（<em>McColl et al.（2022, International Journal of Environmental Research and Public Health 19(1):436）</em>）である。この研究は、<strong>比較的非現実的楽観主義（comparative unrealistic optimism）が防護行動の採用と負の相関を示す</strong>と報告した。すなわち、自分の感染リスクを他者比で低く見積もる人ほど、マスク着用や距離確保といった防護行動をとりにくい、という関係である。</p>
        <table>
          <tr><th>研究</th><th>主な知見</th></tr>
          <tr><td><b>Wise et al.（2020, RSOS）</b></td><td>自己の感染確率を他者比で過小評価する比較楽観主義を確認し、防護行動への影響を検討。</td></tr>
          <tr><td><b>Kuper-Smith et al.（2021）</b></td><td>比較楽観主義を示し、防護行動との関連を検討。</td></tr>
          <tr><td><b>McColl et al.（2022, IJERPH）</b></td><td>欧州4か国 n = 12,378。比較的非現実的楽観主義は防護行動の採用と<strong>負の相関</strong>。</td></tr>
        </table>
        <div class="callout warn"><b>楽観は公衆衛生では有害になりうる</b>　平時には適応的に働きうる楽観性バイアスも、感染症対策のように「正確なリスク認知に基づく行動」が集団の安全を左右する場面では、防護行動を抑制する方向に働きうる。楽観の<em>両義性</em>がもっとも鮮明に現れる文脈である。</div>
        <h3>解釈上の注意</h3>
        <p>ただし、これらの知見を読む際には、楽観性バイアスの測定そのものに関する<a href="#/module/opt_controversy">方法論的論争</a>を忘れてはならない。比較法（comparison method）による「楽観」の測定には、合理的なエージェントでも楽観的に見えるデータが生じうるという統計的人工産物説（Harris &amp; Hahn, 2011）が提起されている。したがって、相関の解釈は慎重に行う必要がある。とはいえ、公衆衛生の現場で「自己リスクの過小評価が防護行動と負に相関する」という関係が大規模に観察された事実は、楽観性バイアス研究の社会的含意を考えるうえで重要である。</p>
      `,
      figure: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="500" height="250" rx="14" fill="#f5f7fd"/>
        <text x="250" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">比較楽観主義 → 防護行動は減る</text>
        <line x1="60" y1="200" x2="470" y2="200" stroke="#1d2433" stroke-width="1.5"/>
        <line x1="60" y1="60" x2="60" y2="200" stroke="#1d2433" stroke-width="1.5"/>
        <text x="40" y="135" text-anchor="middle" font-size="10.5" fill="#5b6478" transform="rotate(-90 40 135)">防護行動の量</text>
        <text x="265" y="228" text-anchor="middle" font-size="10.5" fill="#5b6478">比較楽観主義（自分は感染しにくいと思う度合い）→</text>
        <defs>
          <marker id="oa_arrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e0566b"/></marker>
        </defs>
        <line x1="80" y1="80" x2="450" y2="185" stroke="#e0566b" stroke-width="3" marker-end="url(#oa_arrow)"/>
        <circle cx="110" cy="89" r="4" fill="#5b6cf0"/>
        <circle cx="180" cy="105" r="4" fill="#5b6cf0"/>
        <circle cx="250" cy="135" r="4" fill="#5b6cf0"/>
        <circle cx="320" cy="150" r="4" fill="#5b6cf0"/>
        <circle cx="390" cy="172" r="4" fill="#5b6cf0"/>
        <text x="120" y="70" font-size="10" fill="#15c4a8" font-weight="700">楽観が低い人</text>
        <text x="120" y="84" font-size="9.5" fill="#5b6478">→ よく防護する</text>
        <text x="300" y="120" font-size="10" fill="#e0566b" font-weight="700">楽観が高い人</text>
        <text x="300" y="134" font-size="9.5" fill="#5b6478">→ 防護しにくい</text>
        <text x="250" y="245" text-anchor="middle" font-size="9" fill="#5b6478">欧州4か国 n=12,378（McColl et al. 2022）が報告した負の相関の模式</text>
      </svg>`,
      figcaption: "COVID-19下では、自己の感染リスクを他者比で低く見積もる比較楽観主義が強い人ほど、防護行動をとりにくいという負の相関が大規模に報告された（McColl et al. 2022, 欧州4か国 n=12,378）。",
      terms: [
        { term: "比較楽観主義（comparative optimism）", def: "自分のリスクを平均的な他者より低く見積もる傾向。自他比較に基づく楽観性の測定枠組み。" },
        { term: "防護行動（protective behaviour）", def: "マスク・手洗い・距離確保など、感染リスクを下げる行動。楽観性バイアスがその採否に影響する。" },
        { term: "Wise et al.（2020）", def: "COVID-19下で自己の感染確率を他者比で過小評価する比較楽観主義を示した研究（RSOS）。" },
        { term: "McColl et al.（2022）", def: "欧州4か国 n=12,378の調査（IJERPH）。比較的非現実的楽観主義は防護行動と負の相関と報告。" },
        { term: "比較的非現実的楽観主義", def: "自他比較で自己リスクを過小評価する楽観。COVID-19では防護行動の採用と負に相関した。" },
        { term: "公衆衛生上のリスク", def: "正確なリスク認知が集団の安全を左右する場面で、楽観が防護行動を抑制しうる危険性。" },
      ],
    },
    {
      title: "楽観の機能・適応と研究者へのまとめ",
      body: `
        <p>本セクションを締めくくるにあたり、楽観性バイアスを「良い・悪い」のどちらか一方に還元せず、その<strong>両義性</strong>を踏まえて全体を整理する。あわせて、研究者がこのトピックを論文の序論で扱う際の実務的な指針を示す。</p>
        <h3>楽観は人間本性に不可欠か — Sharot の見立て</h3>
        <p>神経科学者 <em>Tali Sharot</em> は、楽観的な誤りを<strong>人間本性に不可欠な部分のようなもの</strong>として描いている（Sharot, 2011, Current Biology）。総説は、ほとんどの推定で人口の大多数（約80%）が楽観性バイアスを示し、それが性別・人種・国籍・年齢を超えて観察されると述べる。Sharot の見立てでは、楽観は単なる認知的欠陥ではなく、<strong>動機づけ・回復・行動の起点</strong>として機能しうる。困難な目標に向かうエネルギー、挫折からの立ち直り、そもそも一歩を踏み出す動機——これらは「将来は明るい」という幾分の楽観によって支えられている、という見方である。</p>
        <div class="callout key"><b>楽観の両義性</b>　楽観性バイアスは<strong>適応的でありうる</strong>（動機づけ・回復・行動の起点）一方で、<strong>公衆衛生のような場面では有害にもなりうる</strong>（防護行動の抑制）。一方の側面だけを取り出して「楽観は良い／悪い」と断じることはできない。両義的な現象として扱うのが誠実である。</div>
        <h3>脱バイアスの難しさ</h3>
        <p>「楽観が有害なら、正確なリスク認識に修正すればよい」と考えたくなる。しかし楽観性バイアスは<strong>脱バイアス（debiasing）への抵抗</strong>が強いことが知られている。<em>Weinstein &amp; Klein（1995, Health Psychology）</em>は、個人のリスク認知が脱バイアス介入に抵抗することを示した。リスク情報を与えても、人々は自分の楽観的な見積もりを容易には手放さない。これは、<a href="#/module/opt_unrealistic">非現実的楽観主義</a>が単なる知識不足ではなく、より根の深い認知的傾向であることを示唆する。情報提供だけで楽観を是正しようとする公衆衛生介入が難しい理由の一つである。</p>
        <h3>研究者へのまとめ — 序論執筆の推奨</h3>
        <p>最後に、楽観性バイアスを論文の序論で扱う研究者向けに、本セクション全体から導かれる実務的な指針をまとめる。要点は「確立された知見と未解決の論争を、両面とも誠実に併記する」ことである。</p>
        <table>
          <tr><th>論点</th><th>推奨される書き方</th></tr>
          <tr><td><b>定義</b></td><td><em>Sharot（2011, Current Biology）</em>を一次出典に。「ポジティブ事象の過大評価／ネガティブ事象の過小評価」という二要素定義と「人口の約80%」を併せて示す。</td></tr>
          <tr><td><b>起源</b></td><td><em>Weinstein（1980, JPSP）</em>を <strong>pioneering work</strong> として明記。以後の発展（Taylor &amp; Brown, 1988 の理論的統合、Sharot et al., 2007/2011 の神経科学的基礎づけ）を1〜2文で要約。</td></tr>
          <tr><td><b>関連概念</b></td><td><strong>ポジティブ・イリュージョンの3要素</strong>枠組み（Taylor &amp; Brown, 1988）で整理：自己評価の幻想・統制の幻想・非現実的楽観主義。楽観性バイアスは第3要素。</td></tr>
          <tr><td><b>方法論的論争</b></td><td><strong>必ず1段落</strong>割く。<em>Harris &amp; Hahn（2011）</em>の統計的人工産物説と、Sharot 陣営（Garrett &amp; Sharot, 2016/2017）の反論を両論併記する。</td></tr>
          <tr><td><b>抑うつとの関係</b></td><td>Korn et al.（2014）・Garrett et al.（2014）を引きつつ、抑うつリアリズム自体の<strong>再現性問題</strong>（Dev et al., 2022）にも触れ、無批判に提示しない。</td></tr>
        </table>
        <div class="callout warn"><b>断定を避ける</b>　「抑うつ者では楽観バイアスが欠如する」という主張は、近年の事前登録・高検出力研究（Moore &amp; Fresco, 2012; Dev et al., 2022）が頑健性に疑問を呈している。古典的知見、とくに1980年代のものは、再現性危機以降の基準では「歴史的主張」として慎重に扱う。詳細は<a href="#/module/opt_controversy">方法論的論争</a>・<a href="#/module/opt_depression">抑うつとの関係</a>を参照のこと。</div>
        <div class="callout tip"><b>本セクションの歩き方（再訪のすすめ）</b>　序論を書く前に、本セクションの各モジュールを一度ずつ見直すとよい。<a href="#/module/opt_unrealistic">非現実的楽観主義</a>（起源と定義）→ <a href="#/module/opt_controversy">統計的人工産物説</a>（方法論的論争）→ <a href="#/module/opt_depression">抑うつとの関係</a>（鏡像と再現性）→ 本モジュール（応用と総合）の順でたどると、「確立された知見」と「未解決の論争」の両面を自然に押さえられる。なお、比較法・ベースレート・ベイズ的更新といった数学的な土台を補強したいときは、特別コース「<a href="bayes/index.html">ベイズの階段</a>」が役立つ。</div>
      `,
      figure: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="500" height="270" rx="14" fill="#f5f7fd"/>
        <text x="250" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">楽観性バイアスの両義性</text>
        <line x1="250" y1="48" x2="250" y2="96" stroke="#5b6478" stroke-width="3"/>
        <polygon points="250,48 234,80 266,80" fill="#5b6478"/>
        <line x1="120" y1="96" x2="380" y2="96" stroke="#5b6478" stroke-width="4" stroke-linecap="round"/>
        <text x="250" y="118" text-anchor="middle" font-size="10.5" fill="#5b6478">同じ現象が、文脈しだいで両側に傾く</text>
        <rect x="60" y="138" width="170" height="100" rx="10" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <text x="145" y="162" text-anchor="middle" font-size="12.5" font-weight="800" fill="#15c4a8">適応的側面</text>
        <text x="145" y="185" text-anchor="middle" font-size="10.5" fill="#1d2433">動機づけ</text>
        <text x="145" y="204" text-anchor="middle" font-size="10.5" fill="#1d2433">挫折からの回復</text>
        <text x="145" y="223" text-anchor="middle" font-size="10.5" fill="#1d2433">行動の起点</text>
        <rect x="270" y="138" width="170" height="100" rx="10" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="355" y="162" text-anchor="middle" font-size="12.5" font-weight="800" fill="#e0566b">公衆衛生リスク</text>
        <text x="355" y="185" text-anchor="middle" font-size="10.5" fill="#1d2433">防護行動の抑制</text>
        <text x="355" y="204" text-anchor="middle" font-size="10.5" fill="#1d2433">感染確率の過小評価</text>
        <text x="355" y="223" text-anchor="middle" font-size="10.5" fill="#1d2433">脱バイアスへの抵抗</text>
        <text x="250" y="258" text-anchor="middle" font-size="9.5" fill="#5b6478">Sharot：楽観は人間本性に不可欠の部分のよう／一方で有害にもなりうる（両義的）</text>
      </svg>`,
      figcaption: "楽観性バイアスは天秤の支点のような両義的現象である。動機づけ・回復・行動の起点として適応的に働く一方、公衆衛生の場面では防護行動を抑制するリスクともなる。文脈しだいでどちらにも傾く。",
      terms: [
        { term: "楽観の両義性", def: "適応的（動機づけ・回復・行動の起点）でありうる一方、公衆衛生では有害にもなりうる二面性。" },
        { term: "Sharot の見立て", def: "楽観的な誤りは人間本性に不可欠な部分のようだとする見方（Sharot, 2011）。" },
        { term: "脱バイアス（debiasing）への抵抗", def: "リスク情報を与えても楽観的見積もりが容易に修正されない頑健さ（Weinstein & Klein, 1995）。" },
        { term: "序論執筆の推奨", def: "定義はSharot(2011)、起源はWeinstein(1980)を明記し、論争と再現性問題も併記する指針。" },
        { term: "pioneering work", def: "起源的研究の意。楽観性バイアスではWeinstein(1980)を起源として明記すべき位置づけ。" },
        { term: "ポジティブ・イリュージョンの3要素", def: "自己評価の幻想・統制の幻想・非現実的楽観主義。楽観性バイアスは第3要素（Taylor & Brown, 1988）。" },
        { term: "両論併記", def: "確立された知見と方法論的論争（Harris & Hahn 2011 等）を序論で両面とも記すべきという原則。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "COVID-19パンデミック下で複数の研究が確認した「比較楽観主義（comparative optimism）」とは、どのような傾向か。", choices: ["自分の感染確率を平均的な他者より<em>低く</em>見積もる傾向", "自分の感染確率を平均的な他者より<em>高く</em>見積もる傾向", "他者の感染確率を実際より低く見積もる傾向", "感染確率について自他を区別しない傾向"], answer: 0, explain: "比較楽観主義とは、自分のリスクを「平均的な他者」より低く見積もる傾向である。Wise et al.(2020)やKuper-Smith et al.(2021)がCOVID-19下でこれを確認した。", difficulty: 1 },
    { type: "mcq", stem: "COVID-19下の比較楽観主義を示した研究として出典に挙げられている組み合わせはどれか。", choices: ["Langer(1975)とAlloy & Abramson(1979)", "Wise et al.(2020)とKuper-Smith et al.(2021)", "Scheier & Carver(1985)とAlicke(1985)", "Rao & Ballard(1999)とFriston"], answer: 1, explain: "Wise et al.(2020, Royal Society Open Science)とKuper-Smith et al.(2021)が、自己の感染確率を他者比で過小評価する比較楽観主義を示した。", difficulty: 1 },
    { type: "mcq", stem: "欧州4か国（フランス・イタリア・スイス・英国）の n=12,378 を対象とした大規模調査（McColl et al., 2022, IJERPH）が報告した、比較的非現実的楽観主義と防護行動の関係はどれか。", choices: ["正の相関（楽観的な人ほど防護する）", "負の相関（楽観的な人ほど防護しにくい）", "相関は見られなかった", "U字型の関係だった"], answer: 1, explain: "McColl et al.（2022）は、比較的非現実的楽観主義が防護行動の採用と<em>負の相関</em>を示すと報告した。自己リスクを他者比で低く見積もる人ほど防護行動をとりにくい。", difficulty: 2 },
    { type: "mcq", stem: "「比較楽観主義は適応的でありうるが、公衆衛生の場面では有害にもなりうる」という記述が表しているのは何か。", choices: ["楽観性バイアスが存在しないということ", "楽観性バイアスの両義性（文脈しだいで適応的にも有害にもなる）", "楽観性バイアスが常に有害であること", "楽観性バイアスが性格特性であること"], answer: 1, explain: "楽観は動機づけ・回復・行動の起点として適応的に働きうる一方、防護行動を抑制して公衆衛生リスクともなる。これが楽観の両義性である。", difficulty: 2 },
    { type: "mcq", stem: "Sharot(2011, Current Biology)が楽観性バイアスについて述べた見立てとして、出典に最も忠実なのはどれか。", choices: ["楽観的な誤りは人間本性に不可欠な部分のようであり、性別・人種・国籍・年齢を超えて観察される", "楽観性バイアスは西欧の若年男性にのみ見られる", "楽観性バイアスは抑うつ者でとくに強い", "楽観性バイアスは訓練でしか獲得されない"], answer: 0, explain: "Sharot(2011)は、ほとんどの推定で人口の大多数（約80%）が楽観性バイアスを示し、それが人間本性に不可欠な部分のようで、性別・人種・国籍・年齢を超えて観察されると述べた。", difficulty: 2 },
    { type: "mcq", stem: "Sharotの見立てにおいて、楽観が「適応的」とされるのはどのような機能を持つからか。最も適切なものを選べ。", choices: ["記憶の正確さを高める", "動機づけ・回復・行動の起点となる", "感覚入力の精度を高める", "他者への同調を強める"], answer: 1, explain: "Sharotの見立てでは、楽観は動機づけ・回復・行動の起点として機能しうる。困難に向かうエネルギーや立ち直りを支える側面が「適応的」とされる。", difficulty: 2 },
    { type: "mcq", stem: "Weinstein & Klein(1995, Health Psychology)が示した、楽観性バイアスに関する知見はどれか。", choices: ["楽観は加齢とともに自然に消える", "個人のリスク認知は脱バイアス介入に抵抗する", "楽観は薬物投与で完全に除去できる", "楽観は抑うつ者で反転する"], answer: 1, explain: "Weinstein & Klein(1995)は、個人のリスク認知が脱バイアス介入に抵抗することを示した。リスク情報を与えても楽観的見積もりは容易に修正されない。", difficulty: 2 },
    { type: "mcq", stem: "脱バイアス（debiasing）が難しいという事実が、公衆衛生の介入に対して持つ含意として最も適切なのはどれか。", choices: ["リスク情報の提供だけでは楽観の是正が難しい場合がある", "情報提供は常に楽観を完全に除去する", "楽観は介入なしに必ず消える", "楽観の修正には性格検査が必須である"], answer: 0, explain: "脱バイアスへの抵抗が強いため、リスク情報を与えるだけでは人々の楽観的見積もりを是正しきれないことがある。情報提供型介入の限界を示唆する。", difficulty: 3 },
    { type: "mcq", stem: "研究者が序論で楽観性バイアスの<em>定義</em>を述べる際、一次出典として推奨される文献はどれか。", choices: ["Weinstein(1980, JPSP)", "Sharot(2011, Current Biology)", "Langer(1975, JPSP)", "Scheier & Carver(1985, Health Psychology)"], answer: 1, explain: "定義はSharot(2011, Current Biology)を一次出典とし、「ポジティブ事象の過大評価／ネガティブ事象の過小評価」という二要素定義と「人口の約80%」を併せて示すことが推奨される。", difficulty: 2 },
    { type: "mcq", stem: "序論で楽観性バイアスの<em>起源</em>を記す際、「pioneering work」として明記すべきとされる研究はどれか。", choices: ["Taylor & Brown(1988)", "Sharot et al.(2007)", "Weinstein(1980)", "Harris & Hahn(2011)"], answer: 2, explain: "起源はWeinstein(1980, JPSP)の非現実的楽観主義をpioneering workとして明記し、その後の理論的統合（Taylor & Brown, 1988）と神経科学的基礎づけ（Sharot et al., 2007/2011）の三段階を要約するとよい。", difficulty: 2 },
    { type: "mcq", stem: "序論で関連概念を整理する枠組みとして推奨される「ポジティブ・イリュージョンの3要素」（Taylor & Brown, 1988）に<em>含まれない</em>ものはどれか。", choices: ["自己評価の幻想", "統制の幻想", "非現実的楽観主義", "計画錯誤"], answer: 3, explain: "ポジティブ・イリュージョンの3要素は、自己評価の幻想・統制の幻想・非現実的楽観主義である。計画錯誤（Kahneman & Tversky, 1979）は別系譜の概念で、この3要素には含まれない。", difficulty: 3 },
    { type: "mcq", stem: "序論で「方法論的論争」を扱う際、出典が求める書き方として最も適切なのはどれか。", choices: ["Harris & Hahnの統計的人工産物説のみを正しいものとして述べる", "Sharot陣営の主張のみを正しいものとして述べる", "Harris & Hahn(2011)の人工産物説とSharot陣営(Garrett & Sharot, 2016/2017)の反論を両論併記する", "方法論的論争には触れない"], answer: 2, explain: "出典は、Harris & Hahn(2011)の統計的人工産物説とSharot陣営の反論を両論併記し、「現象は確立されているが測定方法には未解決の論争がある」という現状認識を示すことを推奨している。一方に断定しない。", difficulty: 3 },
    { type: "mcq", stem: "序論で抑うつとの関係を扱う場合、出典が求める姿勢として最も適切なのはどれか。", choices: ["「抑うつ者では楽観バイアスが欠如する」と断定して提示する", "Korn et al.(2014)らを引きつつ、抑うつリアリズム自体の再現性問題（Dev et al., 2022）にも触れ、無批判に提示しない", "抑うつとの関係には一切触れない", "抑うつリアリズムは完全に再現されていると述べる"], answer: 1, explain: "出典は、Korn et al.(2014)やGarrett et al.(2014)を引きつつ、抑うつリアリズム自体の再現性問題（Moore & Fresco, 2012; Dev et al., 2022）にも触れ、「抑うつ者では楽観バイアスが欠如する」と無批判に断定しないことを求めている。", difficulty: 3 },
  ],
});
