/* ============================================================
   発達心理学  (developmental)
   ============================================================ */
PsychApp.registerModule({
  id: "developmental",
  title: "発達心理学",
  emoji: "🌱",
  category: "dsp",
  tagline: "発達の論点・ピアジェとヴィゴツキー・愛着・エリクソン・道徳性・生涯発達",
  overview: `<p>発達心理学（developmental psychology）は、<strong>受精から死に至るまでの生涯にわたる心身の変化と安定</strong>を科学的に研究する分野である。身体・運動・知覚・認知・言語・情動・社会性・道徳・人格といった諸側面が、年齢とともにどのように変化し、何が変化を生むのかを問う。本分野では、遺伝と環境をめぐる基本論点から、ピアジェ・ヴィゴツキーの認知発達理論、ボウルビィの愛着、エリクソンの心理社会的発達、コールバーグの道徳性、そして青年期から老年期までの生涯発達を概観する。</p>`,
  lessons: [
    {
      title: "発達の基本論点と研究法",
      body: `
        <p>発達心理学は、人の<strong>生涯（life-span）</strong>を通じた変化と安定を扱う。その営みの根底には、繰り返し問われてきたいくつかの<strong>基本論点（developmental issues）</strong>がある。これらは「どちらか一方が正しい」というより、<em>程度の問題</em>として現代では捉えられている。</p>
        <h3>三つの中心的論点</h3>
        <h4>① 遺伝と環境（nature と nurture）</h4>
        <p>発達は生まれつきの<strong>遺伝（nature）</strong>によるのか、経験や養育などの<strong>環境（nurture）</strong>によるのか。現代の答えは「両方の<strong>相互作用</strong>」である。たとえば身長は遺伝の影響が強いが栄養（環境）にも左右される。遺伝の影響度を集団内で示す指標が<strong>遺伝率（heritability）</strong>であり、双生児研究や養子研究で推定される。さらに、遺伝的素因が特定の環境を引き寄せる<strong>遺伝－環境相関</strong>や、同じ環境でも遺伝型により反応が異なる<strong>遺伝－環境交互作用</strong>、経験が遺伝子発現を調整する<strong>エピジェネティクス</strong>も注目される。</p>
        <h4>② 連続性 と 段階性（continuity と discontinuity）</h4>
        <p>発達は坂道のように<strong>連続的・量的</strong>に進むのか、それとも階段のように<strong>段階的・質的</strong>に飛躍するのか。学習理論は連続性を、ピアジェやエリクソンの<strong>段階理論</strong>は質的に異なる段階の存在を強調する。</p>
        <h4>③ 安定 と 変化（stability と change）</h4>
        <p>幼少期の特性（気質・知能など）は生涯を通じて<strong>安定</strong>しているのか、それとも<strong>変化</strong>しうるのか。気質はある程度安定する一方、経験により変化する面もある。</p>
        <div class="callout note"><b>初期経験の役割</b>：人生早期の経験がその後を強く規定するという考え（初期経験の重要性）と、後の経験で取り戻せるという可塑性（plasticity）の議論も、安定－変化論点の一部である。<strong>臨界期・敏感期</strong>（特定の発達が起こりやすい限られた時期）の存在も関わる。</div>
        <h3>発達を調べる研究デザイン</h3>
        <table>
          <tr><th>方法</th><th>やり方</th><th>長所</th><th>短所</th></tr>
          <tr><td><b>横断法</b></td><td>異なる年齢の人を<em>同時期に一度</em>比較</td><td>短時間・低コスト</td><td><strong>コホート効果</strong>と年齢効果が混同する</td></tr>
          <tr><td><b>縦断法</b></td><td>同じ人を<em>長期間</em>追跡</td><td>個人内変化を直接捉える</td><td>長時間・脱落・反復測定の影響</td></tr>
          <tr><td><b>系列法</b></td><td>横断と縦断を組み合わせる</td><td>両者の弱点を補う</td><td>設計が複雑</td></tr>
        </table>
        <div class="callout warn"><b>コホート効果（cohort effect）に注意</b>：横断法で「高齢者ほど知能検査の点が低い」と出ても、それは加齢のせいとは限らない。生まれた世代（コホート）ごとの教育機会や栄養の違いが原因かもしれない。これが横断法の最大の弱点である。</div>
      `,
      figure: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">横断法 と 縦断法</text>
        <g font-size="12">
          <text x="20" y="55" font-weight="700" fill="#5b6cf0">横断法（一度に比較）</text>
          <rect x="20" y="65" width="70" height="34" rx="6" fill="#e9ebfe" stroke="#5b6cf0"/><text x="55" y="86" text-anchor="middle">5歳児</text>
          <rect x="100" y="65" width="70" height="34" rx="6" fill="#e9ebfe" stroke="#5b6cf0"/><text x="135" y="86" text-anchor="middle">10歳児</text>
          <rect x="180" y="65" width="70" height="34" rx="6" fill="#e9ebfe" stroke="#5b6cf0"/><text x="215" y="86" text-anchor="middle">15歳児</text>
          <text x="135" y="118" text-anchor="middle" fill="#5b6478">2026年に同時測定</text>
        </g>
        <g font-size="12">
          <text x="300" y="55" font-weight="700" fill="#15c4a8">縦断法（追跡）</text>
          <rect x="300" y="65" width="70" height="34" rx="6" fill="#d8f6ee" stroke="#15c4a8"/><text x="335" y="86" text-anchor="middle">5歳</text>
          <rect x="380" y="65" width="70" height="34" rx="6" fill="#d8f6ee" stroke="#15c4a8"/><text x="415" y="86" text-anchor="middle">10歳</text>
          <rect x="460" y="65" width="70" height="34" rx="6" fill="#d8f6ee" stroke="#15c4a8"/><text x="495" y="86" text-anchor="middle">15歳</text>
          <text x="415" y="118" text-anchor="middle" fill="#5b6478">同一人物を2026→2036→…</text>
        </g>
        <g stroke="#15c4a8" stroke-width="2"><line x1="370" y1="82" x2="380" y2="82"/><line x1="450" y1="82" x2="460" y2="82"/></g>
        <text x="20" y="160" font-size="13" font-weight="700" fill="#e0566b">横断法の弱点：世代差（コホート効果）と加齢効果が区別できない</text>
        <text x="20" y="185" font-size="12" fill="#5b6478">縦断法の弱点：時間・費用がかかり、参加者の脱落が起こりやすい</text>
      </svg>`,
      figcaption: "横断法は複数の年齢層を同時に比較し（速いがコホート効果に弱い）、縦断法は同じ人を追跡する（変化を直接捉えるが時間と脱落の問題がある）。",
      terms: [
        { term: "発達 (development)", def: "受精から死までの生涯にわたる心身の変化と安定。" },
        { term: "遺伝と環境 (nature-nurture)", def: "発達を規定するのは遺伝か環境かという論点。現代は両者の相互作用とみる。" },
        { term: "連続性 vs 段階性", def: "発達が量的に連続的か、質的に異なる段階を経るかという論点。" },
        { term: "コホート効果", def: "生まれた世代の違いに由来する差。横断法で年齢効果と混同される。" },
        { term: "横断法", def: "異なる年齢の人を同時期に一度だけ比較する研究法。" },
        { term: "縦断法", def: "同じ人を長期間にわたり追跡する研究法。" },
        { term: "臨界期・敏感期", def: "特定の発達が起こりやすい、限られた時期。" },
      ],
    },
    {
      title: "出生前〜乳児期の身体・知覚発達",
      body: `
        <p>発達は誕生で始まるのではなく、<strong>受精の瞬間</strong>から始まる。出生前期（prenatal period）は約38週で、三つの段階に分かれる。</p>
        <h3>出生前の3期</h3>
        <table>
          <tr><th>期</th><th>時期</th><th>主な出来事</th></tr>
          <tr><td><b>胚芽期 (germinal)</b></td><td>受精〜約2週</td><td>接合子の細胞分裂と子宮壁への着床</td></tr>
          <tr><td><b>胎芽期 (embryonic)</b></td><td>2〜8週</td><td>主要器官・神経系の形成。<strong>催奇形因子に最も脆弱</strong></td></tr>
          <tr><td><b>胎児期 (fetal)</b></td><td>9週〜出生</td><td>器官の成熟と急速な成長。胎動・反射の出現</td></tr>
        </table>
        <div class="callout warn"><b>催奇形因子（テラトゲン, teratogen）</b>：胎児に害を与える外的物質・要因。アルコール（<strong>胎児性アルコール症候群, FAS</strong>）、ニコチン、特定の薬物、風疹などの感染症、放射線などが含まれる。害の大きさは<strong>時期</strong>（胎芽期が最も危険）、量、遺伝的感受性に依存する。</div>
        <h3>新生児の反射</h3>
        <p>新生児は無力に見えるが、生存と発達のための<strong>原始反射（reflex）</strong>を備えている。多くは数か月で消失し、随意運動に置き換わる。</p>
        <ul>
          <li><strong>把握反射</strong>：手のひらに触れると握りしめる。</li>
          <li><strong>ルーティング反射（探索反射）</strong>：頬に触れるとそちらを向き口を開く（哺乳に役立つ）。</li>
          <li><strong>吸啜反射</strong>：口に入ったものを吸う。</li>
          <li><strong>モロー反射（驚愕反射）</strong>：大きな音などで両腕を広げて抱きつくような動き。</li>
          <li><strong>バビンスキー反射</strong>：足裏をなでると足指が扇状に開く。</li>
        </ul>
        <h3>乳児の知覚能力</h3>
        <p>かつて新生児は「混沌とした世界」を見ていると考えられたが、研究法（<strong>馴化法</strong>＝飽きると注視時間が減る性質や、<strong>選好注視法</strong>＝好む刺激を長く見る性質を利用）の発達により、想像以上に有能であることが分かった。</p>
        <ul>
          <li><strong>視覚</strong>：生後は視力が低い（約20〜30cmにピント、母の顔の距離）。<em>顔</em>や対比の強い図形を好む（ファンツの選好注視研究）。</li>
          <li><strong>奥行き知覚</strong>：<strong>ギブソンとウォークの「視覚的断崖（visual cliff）」</strong>実験。ガラス板で覆った見かけの崖を、ハイハイ可能になった乳児（約6か月以降）は渡るのを嫌がり、奥行き知覚の存在が示された。</li>
          <li><strong>聴覚</strong>：出生時すでに機能し、<em>母の声</em>や母語を好む。</li>
        </ul>
        <h3>運動発達の原則</h3>
        <p>運動発達には方向性がある。<strong>頭部から尾部へ（cephalocaudal）</strong>＝首すわり→座る→立つ→歩く、<strong>中心から末梢へ（proximodistal）</strong>＝体幹から腕・手・指へ。順序はほぼ普遍的だが、達成<em>時期</em>には個人差・文化差がある。</p>
      `,
      figure: `<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">視覚的断崖（ギブソン &amp; ウォーク）</text>
        <rect x="30" y="60" width="220" height="90" fill="#e9ebfe" stroke="#5b6cf0"/>
        <text x="140" y="50" text-anchor="middle" font-size="12" fill="#5b6478">浅い側（模様が近い）</text>
        <rect x="250" y="60" width="20" height="90" fill="#c9cfe0"/>
        <rect x="270" y="120" width="220" height="30" fill="#e9ebfe" stroke="#5b6cf0" opacity="0.5"/>
        <line x1="270" y1="60" x2="490" y2="60" stroke="#c9cfe0" stroke-dasharray="4 3"/>
        <line x1="270" y1="60" x2="490" y2="120" stroke="#c9cfe0" stroke-dasharray="4 3"/>
        <text x="380" y="50" text-anchor="middle" font-size="12" fill="#5b6478">深い側（見かけの崖）</text>
        <text x="380" y="170" text-anchor="middle" font-size="11" fill="#e0566b">ガラスで覆われ落ちないが…</text>
        <circle cx="245" cy="52" r="9" fill="#f0a020"/>
        <text x="120" y="190" font-size="12" fill="#1d2433">乳児は深い側を渡るのを嫌がる → 奥行き知覚の証拠</text>
      </svg>`,
      figcaption: "視覚的断崖。ハイハイできる乳児はガラスで安全が確保されていても「深い側」を渡ろうとせず、生後早期から奥行きを知覚していることが示された。",
      terms: [
        { term: "胎芽期 (embryonic period)", def: "受精2〜8週。主要器官が形成され、催奇形因子に最も脆弱な時期。" },
        { term: "催奇形因子 (teratogen)", def: "胎児に害を与える外的要因。アルコール・薬物・感染症など。" },
        { term: "胎児性アルコール症候群 (FAS)", def: "妊娠中の飲酒による胎児の発達障害。顔貌異常・発達遅滞など。" },
        { term: "原始反射", def: "新生児が備える生得的反射（把握・ルーティング・モローなど）。" },
        { term: "視覚的断崖", def: "ギブソンとウォークの実験装置。乳児の奥行き知覚を示した。" },
        { term: "選好注視法", def: "乳児が好む刺激を長く見る性質を利用した知覚研究法。ファンツが用いた。" },
        { term: "頭部から尾部への原則", def: "運動発達が頭側から足側へ進むこと（首すわり→歩行）。" },
      ],
    },
    {
      title: "ピアジェの認知発達理論",
      body: `
        <p>スイスの<strong>ジャン・ピアジェ（Jean Piaget）</strong>は、子どもを「小さな大人」ではなく、大人とは<strong>質的に異なる思考</strong>をする存在と捉えた。子どもは受動的に知識を受け取るのではなく、環境と関わりながら自ら知識を<strong>構成</strong>する能動的な「小さな科学者」だとする立場を<strong>構成主義</strong>という。</p>
        <h3>理論の基本概念</h3>
        <ul>
          <li><strong>シェマ（schema）</strong>：世界を理解するための心的な枠組み・行動のパターン。</li>
          <li><strong>同化（assimilation）</strong>：新しい経験を<em>既存のシェマに取り込む</em>こと（例：四足動物をすべて「ワンワン」と呼ぶ）。</li>
          <li><strong>調節（accommodation）</strong>：既存のシェマでは合わないとき、<em>シェマ自体を修正・新設する</em>こと（例：猫は犬と違うと学び新シェマを作る）。</li>
          <li><strong>均衡化（equilibration）</strong>：同化と調節のバランスをとり、認知的な釣り合いを回復しようとする働き。発達を駆動する力。</li>
        </ul>
        <h3>認知発達の4段階</h3>
        <table>
          <tr><th>段階</th><th>おおよその年齢</th><th>特徴</th></tr>
          <tr><td><b>感覚運動期</b></td><td>0〜2歳</td><td>感覚と運動で世界を理解。<strong>対象の永続性</strong>の獲得</td></tr>
          <tr><td><b>前操作期</b></td><td>2〜7歳</td><td>象徴機能・言語の発達。<strong>自己中心性・アニミズム</strong>、<strong>保存が未成立</strong></td></tr>
          <tr><td><b>具体的操作期</b></td><td>7〜11歳</td><td><strong>保存・可逆性</strong>の獲得。論理的だが具体物に限られる</td></tr>
          <tr><td><b>形式的操作期</b></td><td>11歳〜</td><td><strong>抽象的・仮説演繹的思考</strong>が可能に</td></tr>
        </table>
        <h4>感覚運動期：対象の永続性</h4>
        <p><strong>対象の永続性（object permanence）</strong>とは、物が見えなくなっても存在し続けると理解すること。獲得前の乳児は、おもちゃを布で隠すと探そうとしない（「見えない＝存在しない」）。生後8か月頃から探索が見られる。</p>
        <h4>前操作期：自己中心性・アニミズム・保存の未成立</h4>
        <p><strong>自己中心性（egocentrism）</strong>＝自分の視点と他者の視点を区別できないこと。<strong>「三つ山課題」</strong>で、子どもは反対側の人形にも自分と同じ景色が見えると答える。<strong>アニミズム</strong>＝無生物にも生命や意図があると考えること（「お月さまがついてくる」）。そして<strong>保存（conservation）の未成立</strong>＝見かけが変わると量・数・体積も変わると考える。同じ水を細長いコップに移すと「増えた」と判断する（中心化と非可逆的思考のため）。</p>
        <h4>具体的操作期：保存・可逆性</h4>
        <p>保存が成立し、操作を<strong>頭の中で元に戻せる（可逆性）</strong>ようになる。脱中心化が進み、分類や系列化も可能になる。ただし論理は<em>目の前の具体物</em>に縛られる。</p>
        <h4>形式的操作期：抽象的思考</h4>
        <p>「もし〜ならば」という<strong>仮説演繹的推論</strong>や、抽象的・体系的な思考が可能になる。あらゆる可能性を組み合わせて検討できる。</p>
        <div class="callout warn"><b>ピアジェ理論への批判</b>：①子どもの能力を<strong>過小評価</strong>していた（課題を簡単にすると、より早期に対象の永続性や保存を示す。ベイラージョンの研究など）。②発達は段階的に一斉に進むより<strong>領域ごと・連続的</strong>な面がある。③<strong>文化・社会的要因の軽視</strong>（ヴィゴツキーの批判）。④形式的操作に至らない大人もいる。</div>
      `,
      figure: `<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">ピアジェの認知発達 4段階</text>
        <line x1="30" y1="95" x2="540" y2="95" stroke="#c9cfe0" stroke-width="3"/>
        <g text-anchor="middle" font-size="11">
          <circle cx="90" cy="95" r="7" fill="#5b6cf0"/><text x="90" y="75" font-weight="700">感覚運動期</text><text x="90" y="120" fill="#5b6478">0〜2歳</text><text x="90" y="135" fill="#5b6478">対象の永続性</text>
          <circle cx="225" cy="95" r="7" fill="#15c4a8"/><text x="225" y="75" font-weight="700">前操作期</text><text x="225" y="120" fill="#5b6478">2〜7歳</text><text x="225" y="135" fill="#5b6478">自己中心性・保存未成立</text>
          <circle cx="370" cy="95" r="7" fill="#f0a020"/><text x="370" y="75" font-weight="700">具体的操作期</text><text x="370" y="120" fill="#5b6478">7〜11歳</text><text x="370" y="135" fill="#5b6478">保存・可逆性</text>
          <circle cx="500" cy="95" r="7" fill="#e0566b"/><text x="500" y="75" font-weight="700">形式的操作期</text><text x="500" y="120" fill="#5b6478">11歳〜</text><text x="500" y="135" fill="#5b6478">抽象的思考</text>
        </g>
      </svg>`,
      figcaption: "ピアジェの4段階。各段階は質的に異なる思考様式をもち、感覚運動期から形式的操作期へと不可逆的な順序で進むとされる。",
      terms: [
        { term: "シェマ", def: "世界を理解するための心的枠組み・行動パターン。" },
        { term: "同化と調節", def: "同化は新経験を既存シェマに取り込むこと、調節はシェマ自体を修正すること。" },
        { term: "均衡化", def: "同化と調節のバランスをとり認知的釣り合いを回復する働き。発達を駆動する。" },
        { term: "対象の永続性", def: "物が見えなくなっても存在し続けると理解すること。感覚運動期に獲得。" },
        { term: "自己中心性", def: "自分と他者の視点を区別できないこと。前操作期の特徴。三つ山課題で示される。" },
        { term: "保存 (conservation)", def: "見かけが変わっても量・数・体積は変わらないという理解。具体的操作期に成立。" },
        { term: "可逆性", def: "操作を頭の中で元に戻せること。具体的操作期に獲得。" },
        { term: "形式的操作", def: "抽象的・仮説演繹的な思考。最終段階。" },
      ],
    },
    {
      title: "ヴィゴツキーと社会文化理論",
      body: `
        <p>ロシアの心理学者<strong>レフ・ヴィゴツキー（Lev Vygotsky）</strong>は、ピアジェが個人内の構成を重視したのに対し、認知発達は<strong>社会的・文化的な相互作用に根ざす</strong>と主張した。子どもは、より熟達した他者（親・教師・年長者）との関わりを通じて思考を内面化していく。この立場を<strong>社会文化理論（sociocultural theory）</strong>という。</p>
        <h3>発達の最近接領域（ZPD）</h3>
        <p>中心概念が<strong>発達の最近接領域（Zone of Proximal Development, ZPD）</strong>である。これは、<strong>子どもが一人ではできないが、援助があればできる</strong>範囲を指す。</p>
        <ul>
          <li><strong>すでにできる水準</strong>（独力での達成水準）と</li>
          <li><strong>援助があればできる水準</strong>（潜在的発達水準）の<em>あいだ</em>がZPD。</li>
        </ul>
        <div class="callout key">教育は、すでにできること（過去の発達）ではなく、<strong>ZPDに働きかける</strong>ことで発達を前に引き出す。「発達の後を追う」のではなく「発達を先導する」のが良い教育だとヴィゴツキーは考えた。</div>
        <h3>足場かけ（scaffolding）</h3>
        <p><strong>足場かけ（scaffolding）</strong>とは、ZPDで学習者を支える一時的な援助のことである（用語自体はウッドやブルーナーによる）。建築の足場のように、子どもが自力でできるようになるにつれて援助を徐々に減らし（フェーディング）、最終的には取り外す。ヒントを出す、手本を見せる、難しい部分を肩代わりする、などが含まれる。</p>
        <h3>私的言語（private speech）</h3>
        <p>幼児が一人で遊びながら声に出して独り言を言うことがある。ピアジェはこれを未熟な自己中心的言語とみなしたが、ヴィゴツキーは<strong>私的言語（private speech）</strong>を<strong>思考と自己制御の道具</strong>と捉えた。難しい課題ほど私的言語が増えること、やがてそれが<strong>内言（内的発話）</strong>として頭の中に取り込まれ、思考そのものになると考えた。つまり「外的な対話 → 私的言語 → 内言」という<strong>内面化</strong>の道筋である。</p>
        <h3>文化的道具（cultural tools）</h3>
        <p>ヴィゴツキーは、思考が<strong>文化的道具</strong>に媒介されると強調した。最も重要な道具が<strong>言語</strong>であり、ほかに数体系、文字、記憶術、コンピュータなども含まれる。これらは文化を通じて世代から世代へ受け継がれ、何を・どう考えられるかを形づくる。したがって発達は文化によって異なりうる。</p>
        <div class="callout tip"><b>ピアジェ vs ヴィゴツキー</b>：ピアジェは「個人 → 社会」（自ら構成してから社会に出る）、ヴィゴツキーは「社会 → 個人」（社会的相互作用が内面化されて個人の思考になる）と方向が逆。前者は普遍的段階を、後者は文化的多様性と教育・他者の役割を強調する。</div>
      `,
      figure: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">発達の最近接領域（ZPD）</text>
        <circle cx="210" cy="135" r="100" fill="#fdeef0" stroke="#e0566b" stroke-dasharray="5 4"/>
        <circle cx="210" cy="135" r="62" fill="#fff5e6" stroke="#f0a020"/>
        <circle cx="210" cy="135" r="30" fill="#d8f6ee" stroke="#15c4a8"/>
        <text x="210" y="139" text-anchor="middle" font-size="11" font-weight="700">独力で<tspan x="210" dy="14">できる</tspan></text>
        <text x="210" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#c87a00">ZPD</text>
        <text x="210" y="106" text-anchor="middle" font-size="10" fill="#5b6478">援助があればできる</text>
        <text x="210" y="55" text-anchor="middle" font-size="11" fill="#e0566b">まだできない（援助でも届かない）</text>
        <text x="60" y="215" font-size="11" fill="#1d2433">足場かけ（scaffolding）は ZPD に働きかける援助</text>
      </svg>`,
      figcaption: "発達の最近接領域（ZPD）。独力でできる水準と、援助があれば届く水準のあいだの帯。教育や足場かけはこの領域に働きかけて発達を前に引き出す。",
      terms: [
        { term: "社会文化理論", def: "認知発達が社会的・文化的相互作用に根ざすとするヴィゴツキーの理論。" },
        { term: "発達の最近接領域 (ZPD)", def: "独力ではできないが、援助があればできる範囲。教育が働きかける領域。" },
        { term: "足場かけ (scaffolding)", def: "ZPDで学習者を支える一時的援助。上達に応じて徐々に減らす。" },
        { term: "私的言語 (private speech)", def: "幼児の独り言。思考と自己制御の道具で、やがて内言になる。" },
        { term: "内言 (内的発話)", def: "頭の中での発話。私的言語が内面化したもの。思考の道具。" },
        { term: "文化的道具", def: "思考を媒介する文化的手段。言語・数体系・文字など。" },
        { term: "内面化", def: "外的・社会的な活動が個人の内的な心的過程に取り込まれる過程。" },
      ],
    },
    {
      title: "愛着と社会情動的発達",
      body: `
        <p><strong>愛着（attachment, アタッチメント）</strong>とは、乳児と特定の養育者とのあいだに形成される<strong>強い情緒的な絆</strong>である。社会情動的発達の出発点であり、後の対人関係の基盤となる。</p>
        <h3>ハーロウのアカゲザル実験</h3>
        <p>かつては「愛着は授乳（空腹を満たすこと）から生じる」と考えられた（二次的動因説）。これに対し<strong>ハリー・ハーロウ（Harlow）</strong>は、子ザルに二体の代理母を与えた。<strong>針金製で哺乳瓶のついた母</strong>と、<strong>布製で柔らかいが乳の出ない母</strong>である。子ザルは授乳のとき以外は<strong>布の母にしがみつき</strong>、怖いとき布の母に逃げ込んだ。これは愛着の核が<strong>接触の心地よさ（contact comfort, 接触慰安）</strong>であり、空腹充足ではないことを示した。</p>
        <h3>ボウルビィの愛着理論</h3>
        <p><strong>ジョン・ボウルビィ（John Bowlby）</strong>は、愛着を<strong>進化的に適応的な生得的システム</strong>と捉えた。乳児は微笑・泣き・しがみつきなどで養育者を近くに引き寄せ、保護を得て生存確率を高める。養育者は<strong>安全基地（secure base）</strong>となり、子どもはそこを拠点に世界を探索し、不安なときに戻る。</p>
        <h3>エインズワースのストレンジ・シチュエーション法</h3>
        <p><strong>メアリー・エインズワース（Ainsworth）</strong>は、養育者との分離・再会への反応を観察する<strong>ストレンジ・シチュエーション法（SSP）</strong>を考案し、愛着の質を分類した。</p>
        <table>
          <tr><th>分類</th><th>分離時</th><th>再会時</th><th>探索</th></tr>
          <tr><td><b>安定型 (B)</b></td><td>多少動揺</td><td>養育者を求め、慰められると落ち着く</td><td>安全基地として活発に探索</td></tr>
          <tr><td><b>回避型 (A)</b></td><td>ほとんど動揺せず</td><td>養育者を避ける・無視する</td><td>養育者に無関心</td></tr>
          <tr><td><b>抵抗／アンビバレント型 (C)</b></td><td>強く動揺</td><td>接触を求めつつ怒り、慰められにくい</td><td>探索が乏しい</td></tr>
          <tr><td><b>無秩序型 (D)</b></td><td colspan="2">矛盾した・混乱した行動（近づきつつ固まる等）。虐待・養育者の脅威との関連</td><td>一貫しない</td></tr>
        </table>
        <div class="callout note">無秩序型（disorganized）はメインらが後から追加した分類で、最も不安定とされる。A・B・Cはエインズワースの当初の三分類である。</div>
        <h3>内的作業モデル</h3>
        <p>愛着経験は、<strong>内的作業モデル（internal working model）</strong>＝「自分は愛される価値があるか」「他者は頼れるか」という心的な表象として内面化される。これが後の対人関係や、自分が親になったときの養育を方向づけると考えられる。</p>
        <h3>気質（temperament）</h3>
        <p>愛着には養育の質だけでなく、子ども自身の<strong>気質</strong>（生得的な情動・行動の傾向）も関わる。<strong>トマスとチェス（Thomas &amp; Chess）</strong>の縦断研究は、乳児を大きく三つに分類した。</p>
        <ul>
          <li><strong>扱いやすい子（easy）</strong>：規則的でおおむね機嫌がよく、新奇な状況に適応しやすい（約40%）。</li>
          <li><strong>扱いにくい子（difficult）</strong>：不規則で反応が強く、新奇場面で泣きやすい（約10%）。</li>
          <li><strong>立ち上がりの遅い子（slow-to-warm-up）</strong>：新奇場面で当初引っ込むが、徐々に慣れる（約15%）。</li>
        </ul>
        <div class="callout tip"><b>適合の良さ（goodness of fit）</b>：発達の良し悪しは気質だけでなく、子の気質と養育環境・親の関わり方が<strong>うまく噛み合うか</strong>で決まるという考え方。</div>
      `,
      figure: `<svg viewBox="0 0 540 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">ストレンジ・シチュエーション法による愛着分類</text>
        <g font-size="12">
          <rect x="20" y="45" width="240" height="50" rx="8" fill="#d8f6ee" stroke="#15c4a8"/>
          <text x="32" y="65" font-weight="700">安定型 (B)</text><text x="32" y="83" fill="#5b6478">安全基地、再会で慰められる</text>
          <rect x="280" y="45" width="240" height="50" rx="8" fill="#e9ebfe" stroke="#5b6cf0"/>
          <text x="292" y="65" font-weight="700">回避型 (A)</text><text x="292" y="83" fill="#5b6478">分離に動じず、再会で避ける</text>
          <rect x="20" y="105" width="240" height="50" rx="8" fill="#fff5e6" stroke="#f0a020"/>
          <text x="32" y="125" font-weight="700">抵抗／アンビバレント型 (C)</text><text x="32" y="143" fill="#5b6478">強く動揺、怒り、慰めにくい</text>
          <rect x="280" y="105" width="240" height="50" rx="8" fill="#fdeef0" stroke="#e0566b"/>
          <text x="292" y="125" font-weight="700">無秩序型 (D)</text><text x="292" y="143" fill="#5b6478">矛盾・混乱した行動（後年追加）</text>
        </g>
        <text x="20" y="185" font-size="11" fill="#5b6478">A・B・C はエインズワースの三分類、D はメインらが追加</text>
      </svg>`,
      figcaption: "ストレンジ・シチュエーション法による愛着の4分類。安定型（B）が最も適応的とされ、回避型（A）・抵抗型（C）が不安定型、無秩序型（D）は後に追加された最も不安定なタイプ。",
      terms: [
        { term: "愛着 (attachment)", def: "乳児と特定の養育者の間に形成される強い情緒的絆。" },
        { term: "接触慰安 (contact comfort)", def: "ハーロウが示した、柔らかい接触がもたらす安心感。愛着の核。" },
        { term: "安全基地", def: "子どもが探索の拠点とし、不安時に戻る養育者の機能。ボウルビィ。" },
        { term: "ストレンジ・シチュエーション法", def: "分離・再会への反応で愛着の質を測るエインズワースの観察法。" },
        { term: "安定型/回避型/抵抗型/無秩序型", def: "愛着の4分類。安定型が最も適応的、無秩序型は最も不安定。" },
        { term: "内的作業モデル", def: "自己と他者についての心的表象。後の対人関係を方向づける。" },
        { term: "気質 (temperament)", def: "生得的な情動・行動の傾向。トマスとチェスが3類型を提唱。" },
        { term: "適合の良さ (goodness of fit)", def: "子の気質と養育環境がうまく噛み合うかが発達を左右するという考え。" },
      ],
    },
    {
      title: "社会性・道徳・人格の発達",
      body: `
        <p>本レッスンでは、生涯にわたる人格形成（エリクソン）、道徳的判断の発達（コールバーグ）、そして養育の型（バウムリンド）を扱う。</p>
        <h3>エリクソンの心理社会的発達理論</h3>
        <p><strong>エリク・エリクソン（Erik Erikson）</strong>は、フロイトの心理性的発達を拡張し、発達は<strong>生涯にわたる8段階</strong>を経るとした。各段階には乗り越えるべき<strong>心理社会的危機（crisis）</strong>があり、その解決が人格を形づくる。フロイトと違い、社会・対人関係を重視し、青年期以降も扱う点が画期的だった。</p>
        <table>
          <tr><th>段階（年齢）</th><th>危機（対立）</th><th>達成される徳</th></tr>
          <tr><td>乳児期（0〜1）</td><td><b>基本的信頼 vs 不信</b></td><td>希望</td></tr>
          <tr><td>幼児前期（1〜3）</td><td><b>自律性 vs 恥・疑惑</b></td><td>意志</td></tr>
          <tr><td>幼児後期（3〜6）</td><td><b>自発性 vs 罪悪感</b></td><td>目的</td></tr>
          <tr><td>学童期（6〜12）</td><td><b>勤勉性 vs 劣等感</b></td><td>有能感</td></tr>
          <tr><td>青年期（12〜20）</td><td><b>同一性 vs 同一性拡散</b></td><td>忠誠</td></tr>
          <tr><td>成人前期（20〜40）</td><td><b>親密性 vs 孤立</b></td><td>愛</td></tr>
          <tr><td>成人期（40〜65）</td><td><b>生殖性（世代性）vs 停滞</b></td><td>世話</td></tr>
          <tr><td>老年期（65〜）</td><td><b>統合 vs 絶望</b></td><td>英知</td></tr>
        </table>
        <div class="callout key">青年期の<strong>「同一性 vs 同一性拡散」</strong>が最も有名。自分は何者かという問いに取り組み、アイデンティティを確立する課題である（次レッスンで詳述）。</div>
        <h3>コールバーグの道徳性発達理論</h3>
        <p><strong>ローレンス・コールバーグ（Kohlberg）</strong>は、ピアジェを発展させ、<strong>道徳的ジレンマ（「ハインツのジレンマ」＝妻を救うため高価な薬を盗むべきか）</strong>への<em>判断の理由づけ</em>を分析し、道徳的推論を<strong>3水準6段階</strong>に分けた。重要なのは<em>どう答えるか</em>ではなく<em>なぜそう判断するか</em>である。</p>
        <table>
          <tr><th>水準</th><th>段階</th><th>判断の基準</th></tr>
          <tr><td rowspan="2"><b>前慣習的水準</b></td><td>1 罰と服従</td><td>罰を避けるか／権威に従う</td></tr>
          <tr><td>2 道具的互恵</td><td>自分の利益・損得（取引）</td></tr>
          <tr><td rowspan="2"><b>慣習的水準</b></td><td>3 良い子志向</td><td>他者の承認・良い子と思われたい</td></tr>
          <tr><td>4 法と秩序</td><td>社会の規則・法を守る義務</td></tr>
          <tr><td rowspan="2"><b>後慣習的水準</b></td><td>5 社会契約</td><td>法は合意で成り、人権に資すべき</td></tr>
          <tr><td>6 普遍的倫理</td><td>普遍的な倫理原理・良心</td></tr>
        </table>
        <div class="callout warn"><b>コールバーグへの批判</b>：<strong>ギリガン（Gilligan）</strong>は、コールバーグの理論が「正義の倫理」に偏り、女性に多いとされる<strong>「ケア（思いやり）の倫理」</strong>を低く評価していると批判した。ほかに文化的偏り、判断と実際の行動のズレも指摘される。</div>
        <h3>バウムリンドの養育スタイル</h3>
        <p><strong>ダイアナ・バウムリンド（Baumrind）</strong>は、養育を<strong>「応答性（温かさ・受容）」と「要求性（統制・期待）」</strong>の二軸で整理した。</p>
        <table>
          <tr><th>型</th><th>応答性</th><th>要求性</th><th>子の傾向</th></tr>
          <tr><td><b>権威的 (authoritative)</b></td><td>高</td><td>高</td><td>自律的・有能・社会的に良好（最も望ましい）</td></tr>
          <tr><td><b>権威主義的 (authoritarian)</b></td><td>低</td><td>高</td><td>従順だが不安・低い自尊心</td></tr>
          <tr><td><b>許容的 (permissive)</b></td><td>高</td><td>低</td><td>衝動的・自己統制が弱い</td></tr>
          <tr><td><b>放任的 (neglectful)</b></td><td>低</td><td>低</td><td>自己統制・適応に最も問題</td></tr>
        </table>
        <div class="callout tip"><b>混同注意</b>：<strong>権威的（authoritative）</strong>は「温かさ＋しっかりした基準」で最も望ましい型。<strong>権威主義的（authoritarian）</strong>は「冷たく支配的」で別物。名前が似ているので注意。</div>
      `,
      figure: `<svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">エリクソンの心理社会的発達 8段階</text>
        <g font-size="11">
          <rect x="20" y="35" width="480" height="34" rx="6" fill="#e9ebfe" stroke="#5b6cf0"/><text x="30" y="56">① 乳児期：基本的信頼 vs 不信 → <tspan font-weight="700">希望</tspan></text>
          <rect x="20" y="73" width="480" height="34" rx="6" fill="#e9ebfe" stroke="#5b6cf0"/><text x="30" y="94">② 幼児前期：自律性 vs 恥・疑惑 → <tspan font-weight="700">意志</tspan></text>
          <rect x="20" y="111" width="480" height="34" rx="6" fill="#e9ebfe" stroke="#5b6cf0"/><text x="30" y="132">③ 幼児後期：自発性 vs 罪悪感 → <tspan font-weight="700">目的</tspan></text>
          <rect x="20" y="149" width="480" height="34" rx="6" fill="#e9ebfe" stroke="#5b6cf0"/><text x="30" y="170">④ 学童期：勤勉性 vs 劣等感 → <tspan font-weight="700">有能感</tspan></text>
          <rect x="20" y="187" width="480" height="34" rx="6" fill="#fff5e6" stroke="#f0a020"/><text x="30" y="208">⑤ 青年期：同一性 vs 同一性拡散 → <tspan font-weight="700">忠誠</tspan></text>
          <rect x="20" y="225" width="480" height="34" rx="6" fill="#d8f6ee" stroke="#15c4a8"/><text x="30" y="246">⑥ 成人前期：親密性 vs 孤立 → <tspan font-weight="700">愛</tspan></text>
          <rect x="20" y="263" width="480" height="34" rx="6" fill="#d8f6ee" stroke="#15c4a8"/><text x="30" y="284">⑦ 成人期：生殖性（世代性）vs 停滞 → <tspan font-weight="700">世話</tspan></text>
          <rect x="20" y="301" width="480" height="34" rx="6" fill="#fdeef0" stroke="#e0566b"/><text x="30" y="322">⑧ 老年期：統合 vs 絶望 → <tspan font-weight="700">英知</tspan></text>
        </g>
      </svg>`,
      figcaption: "エリクソンの8段階。各段階に固有の心理社会的危機があり、その解決を通じて固有の「徳」が得られる。青年期（⑤）の同一性確立が最もよく知られる。",
      terms: [
        { term: "心理社会的発達 (エリクソン)", def: "生涯を8段階に分け、各段階の心理社会的危機の解決で人格が形成されるとする理論。" },
        { term: "心理社会的危機", def: "各段階で乗り越えるべき対立課題（例：信頼 vs 不信）。" },
        { term: "生殖性（世代性）vs 停滞", def: "成人期の危機。次世代の育成や貢献か、自己への停滞か。" },
        { term: "統合 vs 絶望", def: "老年期の危機。人生を意味あるものと受容できるか、後悔と絶望か。" },
        { term: "コールバーグの道徳性発達", def: "道徳的判断の理由づけを3水準6段階に分けた理論。ハインツのジレンマを用いる。" },
        { term: "後慣習的水準", def: "コールバーグ最高水準。社会契約・普遍的倫理原理に基づく判断。" },
        { term: "ギリガンの批判", def: "コールバーグが正義の倫理に偏り、ケア（思いやり）の倫理を軽視したとの批判。" },
        { term: "権威的養育 (authoritative)", def: "応答性も要求性も高い養育。最も望ましい結果と関連。権威主義的とは別物。" },
      ],
    },
    {
      title: "青年期〜老年期の発達",
      body: `
        <p>発達は成人で終わらない。本レッスンでは青年期から老年期までの<strong>生涯発達</strong>を概観する。</p>
        <h3>青年期：身体とアイデンティティ</h3>
        <p>青年期は<strong>第二次性徴（puberty）</strong>＝性ホルモンの増加による身体の急成長と生殖能力の獲得で始まる。女子の<strong>初経（初潮）</strong>、男子の<strong>精通</strong>が代表的指標。成熟の<em>早い／遅い</em>タイミングは心理に影響しうる（早熟の男子は有利な面、早熟の女子は不利な面が報告される）。脳では<strong>前頭前野</strong>の成熟が遅く、感情・報酬系が先行するため、衝動性やリスク選好が高まりやすい。</p>
        <h4>マーシャの同一性地位</h4>
        <p>エリクソンの「同一性 vs 拡散」を発展させ、<strong>ジェームズ・マーシャ（Marcia）</strong>は、<strong>「危機（探求, exploration）」</strong>を経験したか、<strong>「コミットメント（傾倒）」</strong>をしているかの2軸で、<strong>4つの同一性地位</strong>を区別した。</p>
        <table>
          <tr><th>地位</th><th>危機（探求）</th><th>コミットメント</th><th>状態</th></tr>
          <tr><td><b>同一性達成</b></td><td>経験した</td><td>している</td><td>探求の末に自分の選択を確立（最も成熟）</td></tr>
          <tr><td><b>モラトリアム</b></td><td>最中</td><td>まだ</td><td>探求中で迷っている状態</td></tr>
          <tr><td><b>早期完了（権威受容）</b></td><td>していない</td><td>している</td><td>探求せず親等の価値をそのまま採用</td></tr>
          <tr><td><b>同一性拡散</b></td><td>していない</td><td>していない</td><td>探求もせず方向も定まらない</td></tr>
        </table>
        <div class="callout tip"><b>早期完了 と モラトリアムの違い</b>：早期完了は「悩まず親の価値をそのまま受け入れた」状態、モラトリアムは「今まさに悩み探求している（未決定）」状態。コミットメントの有無で見分ける。</div>
        <h3>成人期</h3>
        <p>成人前期はエリクソンの<strong>親密性</strong>（パートナーや友人との深い関係）、成人中期は<strong>生殖性（世代性, generativity）</strong>＝次世代の育成・社会への貢献が課題となる。いわゆる「中年の危機」は誰にでも必ず起きるわけではない。職業や家族における役割が中心になる時期である。</p>
        <h3>高齢期の認知と知能</h3>
        <p>加齢ですべての能力が一様に衰えるわけではない。<strong>キャッテルとホーン</strong>は知能を二種に分けた。</p>
        <ul>
          <li><strong>流動性知能（fluid intelligence）</strong>：新奇な問題を素早く処理・推論する能力。情報処理速度など。<strong>成人前期にピークを迎え、加齢とともに低下しやすい</strong>。</li>
          <li><strong>結晶性知能（crystallized intelligence）</strong>：経験で蓄積された知識・語彙・判断力。<strong>高齢まで維持・向上しやすい</strong>。</li>
        </ul>
        <p>記憶では、加齢で<strong>エピソード記憶やワーキングメモリ</strong>が低下しやすい一方、<strong>意味記憶や手続き記憶</strong>は保たれやすい。なお、<strong>認知症（dementia）</strong>は正常な加齢とは異なる病的な認知低下であり、<strong>アルツハイマー型</strong>が代表である。社会情動面では、残り時間を意識して情動的に満たされる関係を重視する<strong>社会情動的選択性理論（カーステンセン）</strong>が、高齢者の幸福感（ポジティビティ効果）を説明する。</p>
        <h3>死の受容</h3>
        <p><strong>エリザベス・キューブラー＝ロス（Kübler-Ross）</strong>は、終末期患者の観察から<strong>死の受容の5段階</strong>を提唱した：<strong>否認 → 怒り → 取引 → 抑うつ → 受容</strong>。ただしこれは固定的な順序ではなく、人により行きつ戻りつし、すべてを経るとは限らない点に注意が必要である。</p>
      `,
      figure: `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">マーシャの同一性地位（2軸4類型）</text>
        <line x1="60" y1="60" x2="60" y2="270" stroke="#1d2433" stroke-width="1.5"/>
        <line x1="60" y1="270" x2="420" y2="270" stroke="#1d2433" stroke-width="1.5"/>
        <text x="30" y="160" font-size="11" transform="rotate(-90 30 160)" text-anchor="middle">コミットメント →</text>
        <text x="240" y="295" font-size="11" text-anchor="middle">危機（探求） →</text>
        <rect x="75" y="75" width="160" height="85" rx="8" fill="#fff5e6" stroke="#f0a020"/>
        <text x="155" y="110" text-anchor="middle" font-size="12" font-weight="700">早期完了</text>
        <text x="155" y="130" text-anchor="middle" font-size="10" fill="#5b6478">探求なし／傾倒あり</text>
        <rect x="245" y="75" width="160" height="85" rx="8" fill="#d8f6ee" stroke="#15c4a8"/>
        <text x="325" y="110" text-anchor="middle" font-size="12" font-weight="700">同一性達成</text>
        <text x="325" y="130" text-anchor="middle" font-size="10" fill="#5b6478">探求あり／傾倒あり</text>
        <rect x="75" y="170" width="160" height="85" rx="8" fill="#fdeef0" stroke="#e0566b"/>
        <text x="155" y="205" text-anchor="middle" font-size="12" font-weight="700">同一性拡散</text>
        <text x="155" y="225" text-anchor="middle" font-size="10" fill="#5b6478">探求なし／傾倒なし</text>
        <rect x="245" y="170" width="160" height="85" rx="8" fill="#e9ebfe" stroke="#5b6cf0"/>
        <text x="325" y="205" text-anchor="middle" font-size="12" font-weight="700">モラトリアム</text>
        <text x="325" y="225" text-anchor="middle" font-size="10" fill="#5b6478">探求中／傾倒まだ</text>
      </svg>`,
      figcaption: "マーシャの同一性地位。危機（探求）の有無とコミットメント（傾倒）の有無の2軸で、同一性達成・モラトリアム・早期完了・同一性拡散の4類型に分かれる。",
      terms: [
        { term: "第二次性徴 (puberty)", def: "性ホルモン増加による身体の急成長と生殖能力の獲得。青年期の始まり。" },
        { term: "同一性地位 (マーシャ)", def: "危機（探求）とコミットメントの有無で分けた4類型。" },
        { term: "モラトリアム", def: "探求の最中でコミットメント未決定の状態。" },
        { term: "早期完了（権威受容）", def: "探求せず親などの価値をそのまま採用しコミットした状態。" },
        { term: "生殖性（世代性）", def: "次世代の育成・社会貢献という成人中期の課題。エリクソン。" },
        { term: "流動性知能", def: "新奇な問題を処理・推論する能力。加齢で低下しやすい。" },
        { term: "結晶性知能", def: "経験で蓄積された知識・語彙。高齢まで維持・向上しやすい。" },
        { term: "死の受容の5段階", def: "キューブラー＝ロスの否認・怒り・取引・抑うつ・受容。順序は固定的でない。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "発達における「nature-nurture問題」が問うているのは何か。", choices: ["遺伝と環境のどちらが発達を規定するか", "連続的か段階的かという発達の様式", "発達が安定か変化かという論点", "横断法と縦断法のどちらが優れるか"], answer: 0, explain: "nature（遺伝）とnurture（環境）のどちらが発達を規定するかという論点。現代では両者の相互作用とみなされる。", difficulty: 1 },
    { type: "mcq", stem: "異なる年齢の人々を同じ時期に一度だけ比較する研究法はどれか。", choices: ["縦断法", "横断法", "事例研究法", "実験法"], answer: 1, explain: "横断法は複数の年齢層を同時に比較する。短時間で済むが、世代差（コホート効果）と年齢効果が混同する弱点がある。", difficulty: 1 },
    { type: "mcq", stem: "横断法の最大の弱点とされるものはどれか。", choices: ["参加者の脱落が多い", "コホート効果と年齢効果が混同される", "長い時間と費用がかかる", "因果関係を全く検討できない"], answer: 1, explain: "横断法では年齢による差なのか生まれた世代（コホート）による差なのか区別できない。これがコホート効果の問題である。", difficulty: 2 },
    { type: "mcq", stem: "出生前期のうち、主要器官が形成され催奇形因子に最も脆弱な時期はどれか。", choices: ["胚芽期", "胎芽期", "胎児期", "新生児期"], answer: 1, explain: "胎芽期（受精2〜8週）に主要器官と神経系が形成されるため、テラトゲンの影響が最も大きい。", difficulty: 2 },
    { type: "mcq", stem: "頬に触れるとそちらを向いて口を開く、哺乳に役立つ新生児反射はどれか。", choices: ["モロー反射", "バビンスキー反射", "ルーティング反射（探索反射）", "把握反射"], answer: 2, explain: "ルーティング反射（探索反射）は、頬への刺激に向かって口を開く反射で、乳を探す行動に役立つ。", difficulty: 2 },
    { type: "mcq", stem: "ギブソンとウォークの「視覚的断崖」実験が示したことは何か。", choices: ["乳児の色覚の発達", "乳児が早期から奥行きを知覚すること", "乳児の言語理解", "新生児の聴覚の優位性"], answer: 1, explain: "ハイハイできる乳児はガラスで安全でも『深い側』を渡るのを嫌がり、生後早期から奥行き知覚が存在することを示した。", difficulty: 1 },
    { type: "mcq", stem: "ピアジェ理論で、新しい経験を既存のシェマに取り込むことを何というか。", choices: ["調節", "同化", "均衡化", "内面化"], answer: 1, explain: "同化（assimilation）は新情報を既存のシェマに取り込むこと。シェマ自体を修正するのは調節である。", difficulty: 2 },
    { type: "mcq", stem: "物が見えなくなっても存在し続けると理解する「対象の永続性」が獲得されるのは、ピアジェのどの段階か。", choices: ["感覚運動期", "前操作期", "具体的操作期", "形式的操作期"], answer: 0, explain: "対象の永続性は感覚運動期（0〜2歳）に獲得される。生後8か月頃から隠した物を探す行動が見られる。", difficulty: 2 },
    { type: "mcq", stem: "細いコップに水を移すと量が増えたと判断する子どもは、ピアジェのどの段階の特徴を示しているか。", choices: ["保存が成立した具体的操作期", "保存が未成立の前操作期", "形式的操作期", "感覚運動期"], answer: 1, explain: "見かけの変化に惑わされ量が変わると考えるのは、保存が未成立な前操作期の特徴（中心化・非可逆性）である。", difficulty: 2 },
    { type: "mcq", stem: "ピアジェの「三つ山課題」で典型的に明らかになる前操作期の特徴はどれか。", choices: ["保存の成立", "自己中心性", "可逆性", "仮説演繹的思考"], answer: 1, explain: "三つ山課題では、子どもが反対側の人形にも自分と同じ景色が見えると答える。これは他者視点をとれない自己中心性を示す。", difficulty: 2 },
    { type: "mcq", stem: "ピアジェ理論への批判として最も適切なものはどれか。", choices: ["子どもの能力を過大評価していた", "課題を簡単にすると子はより早期に能力を示し、能力を過小評価していた", "無意識を過度に重視した", "学習を一切扱わなかった"], answer: 1, explain: "課題を子どもに分かりやすくすると、対象の永続性や保存をより早期に示すことが分かり、ピアジェは能力を過小評価していたとされる。", difficulty: 3 },
    { type: "mcq", stem: "「子どもが一人ではできないが援助があればできる範囲」を指すヴィゴツキーの概念はどれか。", choices: ["シェマ", "発達の最近接領域（ZPD）", "対象の永続性", "内的作業モデル"], answer: 1, explain: "ZPD（発達の最近接領域）は、独力での達成水準と援助があれば届く水準の間の帯。教育が働きかける領域である。", difficulty: 1 },
    { type: "mcq", stem: "ZPDで学習者を支え、上達に応じて徐々に減らしていく一時的援助を何というか。", choices: ["足場かけ（scaffolding）", "強化", "同化", "馴化"], answer: 0, explain: "足場かけ（scaffolding）は、建築の足場のように学習者を支え、自力でできるようになると外していく援助である。", difficulty: 1 },
    { type: "mcq", stem: "幼児の独り言（私的言語）について、ヴィゴツキーの見方はどれか。", choices: ["未熟で消すべき自己中心的言語", "思考と自己制御の道具であり、やがて内言になる", "言語障害の兆候", "愛着の表れ"], answer: 1, explain: "ヴィゴツキーは私的言語を思考と自己制御の道具とみなし、それが内面化して内言（頭の中の発話）になると考えた。", difficulty: 2 },
    { type: "mcq", stem: "ピアジェとヴィゴツキーの違いとして最も適切なものはどれか。", choices: ["ピアジェは社会から個人へ、ヴィゴツキーは個人から社会への方向を強調", "ピアジェは個人内構成、ヴィゴツキーは社会的相互作用の内面化を強調", "両者とも文化差を否定した", "ヴィゴツキーは段階説、ピアジェは社会文化説"], answer: 1, explain: "ピアジェは子が自ら構成する個人内の過程を、ヴィゴツキーは社会的相互作用が内面化されて思考になる過程を重視した。", difficulty: 3 },
    { type: "mcq", stem: "ハーロウのアカゲザル実験が示したのは、愛着の核が何であるかという点である。それはどれか。", choices: ["授乳（空腹の充足）", "接触の心地よさ（contact comfort）", "視覚的刺激", "罰の回避"], answer: 1, explain: "子ザルは乳の出ない布の母にしがみつき、怖いとき逃げ込んだ。愛着の核は接触慰安であり空腹充足ではないと示された。", difficulty: 1 },
    { type: "mcq", stem: "乳児が探索の拠点とし、不安なときに戻ってくる養育者の機能を、ボウルビィは何と呼んだか。", choices: ["内的作業モデル", "安全基地", "敏感期", "適合の良さ"], answer: 1, explain: "安全基地（secure base）は、子どもが世界を探索する拠点であり、不安時に戻る避難所となる養育者の機能を指す。", difficulty: 2 },
    { type: "mcq", stem: "ストレンジ・シチュエーション法で、分離にあまり動じず再会時に養育者を避ける愛着タイプはどれか。", choices: ["安定型", "回避型", "抵抗／アンビバレント型", "無秩序型"], answer: 1, explain: "回避型（A）は分離にほとんど動揺せず、再会時に養育者を避ける・無視する。養育者を安全基地として用いにくい。", difficulty: 2 },
    { type: "mcq", stem: "愛着の4分類のうち、後にメインらによって追加され、虐待などとの関連が指摘される最も不安定なタイプはどれか。", choices: ["安定型", "回避型", "抵抗型", "無秩序型"], answer: 3, explain: "無秩序型（D）は近づきつつ固まるなど矛盾・混乱した行動を示し、後年追加された。最も不安定で、虐待等との関連が指摘される。", difficulty: 2 },
    { type: "mcq", stem: "子どもの生得的な情動・行動傾向を「扱いやすい・扱いにくい・立ち上がりが遅い」に分類した研究者は誰か。", choices: ["ボウルビィ", "エインズワース", "トマスとチェス", "ハーロウ"], answer: 2, explain: "トマスとチェス（Thomas & Chess）の縦断研究が、気質を扱いやすい・扱いにくい・立ち上がりの遅い子の3類型に分けた。", difficulty: 2 },
    { type: "mcq", stem: "エリクソンの心理社会的発達理論で、青年期の中心的危機はどれか。", choices: ["基本的信頼 vs 不信", "勤勉性 vs 劣等感", "同一性 vs 同一性拡散", "統合 vs 絶望"], answer: 2, explain: "青年期の危機は『同一性 vs 同一性拡散』。自分は何者かという問いに取り組み、アイデンティティを確立する課題である。", difficulty: 1 },
    { type: "mcq", stem: "エリクソンの老年期（最終段階）の危機はどれか。", choices: ["親密性 vs 孤立", "生殖性 vs 停滞", "統合 vs 絶望", "自律性 vs 恥・疑惑"], answer: 2, explain: "老年期の危機は『統合 vs 絶望』。人生を意味あるものとして受容できるか、後悔と絶望に陥るかが問われ、得られる徳は英知。", difficulty: 2 },
    { type: "mcq", stem: "コールバーグの道徳性発達理論が分析の中心としたのは何か。", choices: ["子どもがジレンマにどう答えるか（結論）", "子どもがなぜそう判断するか（理由づけ）", "子どもの感情反応の強さ", "親の道徳観の影響"], answer: 1, explain: "コールバーグはハインツのジレンマへの『結論』ではなく、その『理由づけ（推論）』に注目し、3水準6段階に分けた。", difficulty: 2 },
    { type: "mcq", stem: "コールバーグの道徳性発達で、罰を避けることや権威への服従を基準とするのはどの水準か。", choices: ["前慣習的水準", "慣習的水準", "後慣習的水準", "超慣習的水準"], answer: 0, explain: "前慣習的水準（段階1・2）は、罰の回避や自己の損得を基準とする。普遍的倫理原理は最高の後慣習的水準である。", difficulty: 2 },
    { type: "mcq", stem: "コールバーグの理論が『正義の倫理』に偏り『ケア（思いやり）の倫理』を軽視していると批判したのは誰か。", choices: ["バウムリンド", "ギリガン", "マーシャ", "キューブラー＝ロス"], answer: 1, explain: "ギリガン（Gilligan）は、コールバーグの理論が正義中心で、女性に多いとされるケアの倫理を低く評価していると批判した。", difficulty: 3 },
    { type: "mcq", stem: "バウムリンドの養育スタイルで、応答性も要求性もともに高く、最も望ましい結果と関連するのはどれか。", choices: ["権威主義的 (authoritarian)", "権威的 (authoritative)", "許容的 (permissive)", "放任的 (neglectful)"], answer: 1, explain: "権威的（authoritative）養育は温かさ（応答性）と適切な統制（要求性）がともに高く、子の自律性・有能感と関連する。名の似た権威主義的とは別物。", difficulty: 3 },
    { type: "mcq", stem: "マーシャの同一性地位で、探求の最中だがまだコミットメントしていない状態はどれか。", choices: ["同一性達成", "モラトリアム", "早期完了", "同一性拡散"], answer: 1, explain: "モラトリアムは危機（探求）の最中で、まだコミットメントが定まっていない状態。探求を経てコミットすると同一性達成となる。", difficulty: 2 },
    { type: "mcq", stem: "加齢に伴って低下しやすい一方、もう一方は高齢まで維持されやすい。低下しやすいのはどちらか。", choices: ["結晶性知能", "流動性知能", "意味記憶", "語彙力"], answer: 1, explain: "流動性知能（新奇な問題の処理・推論）は成人前期にピークを迎え加齢で低下しやすい。結晶性知能（蓄積された知識）は維持されやすい。", difficulty: 2 },
    { type: "mcq", stem: "キューブラー＝ロスが提唱した『死の受容の5段階』の順序として正しいものはどれか。", choices: ["怒り→否認→取引→抑うつ→受容", "否認→怒り→取引→抑うつ→受容", "抑うつ→否認→怒り→取引→受容", "否認→取引→怒り→受容→抑うつ"], answer: 1, explain: "5段階は否認→怒り→取引→抑うつ→受容。ただし順序は固定的でなく、行きつ戻りつし全段階を経るとは限らない点に注意。", difficulty: 2 },
  ],
});
