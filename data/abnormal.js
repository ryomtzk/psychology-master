/* ============================================================
   精神病理学・異常心理学  (abnormal)
   ============================================================ */
PsychApp.registerModule({
  id: "abnormal",
  title: "精神病理学・異常心理学",
  emoji: "🩺",
  category: "applied",
  tagline: "異常の定義と分類(DSM)・不安症・気分障害・統合失調症・各障害と病因モデル",
  overview: `<p>異常心理学（abnormal psychology）は、<strong>精神障害（mental disorder）</strong>の症状・分類・原因・経過を科学的に研究する分野である。「異常」をどう定義するかという問いから出発し、DSM-5 や ICD-11 による診断分類、不安症・気分障害・統合失調症などの主要障害を概観する。各障害は単一の原因ではなく、生物的・心理的・社会的要因が相互作用して生じる<strong>素因ストレスモデル</strong>の枠組みで理解される。本分野は臨床心理学・公認心理師実務の基礎となる。</p>`,
  lessons: [
    {
      title: "異常の定義と視点 — 何を「異常」とみなすか",
      body: `
        <p>「異常（abnormal）」とは何かを一義的に決めるのは難しい。心理学では複数の基準を組み合わせて判断する。代表的な枠組みが、英語の頭文字をとった<strong>「4つのD」（the 4 Ds）</strong>である。</p>
        <h3>異常をとらえる4つのD</h3>
        <table>
          <tr><th>基準</th><th>内容</th><th>限界・注意</th></tr>
          <tr><td><b>Deviance（逸脱）</b></td><td>統計的にまれ、または社会規範から外れる</td><td>まれ＝異常ではない（天才も統計的逸脱）。規範は文化で変わる。</td></tr>
          <tr><td><b>Distress（苦痛）</b></td><td>本人が強い苦痛・不快を感じる</td><td>苦痛を感じない障害もある（躁状態など）。</td></tr>
          <tr><td><b>Dysfunction（機能障害）</b></td><td>日常生活・仕事・対人関係に支障</td><td>適応的機能の障害が臨床上もっとも重視される。</td></tr>
          <tr><td><b>Danger（危険）</b></td><td>自己または他者への危険</td><td>実際に危険を伴う障害は少数。過度に強調すべきでない。</td></tr>
        </table>
        <div class="callout key">どれか一つで決めるのではなく、<strong>複数の基準を総合</strong>して判断する。とりわけ <strong>Dysfunction（機能障害）と Distress（苦痛）</strong>が臨床的に重要である。統計的なまれさ（逸脱）だけでは異常とは言えない点に注意。</div>
        <h3>正常と異常は連続している</h3>
        <p>正常と異常は明確な境界で二分されるのではなく、<strong>連続体（スペクトラム）</strong>として捉えるのが現代的である。誰しも不安や落ち込みを経験するが、それが過度・持続的で機能を損なうときに障害とみなされる。</p>
        <h3>異常を説明するモデル</h3>
        <h4>医学（生物医学）モデル</h4>
        <p>精神障害を脳・神経伝達物質・遺伝などの<strong>身体的異常による「病気」</strong>とみなす。薬物療法の根拠となる一方、心理社会的要因を軽視しがちと批判される。</p>
        <h4>素因ストレスモデル（diathesis-stress model）</h4>
        <p>障害は、生まれもった<strong>素因（diathesis：遺伝的・生物的な脆弱性）</strong>と、後天的な<strong>ストレス（stress：環境からの負荷）</strong>が組み合わさって発症するとする。素因が強い人は弱いストレスでも発症し、素因が弱い人は強いストレスを要する。多くの障害に適用される有力な枠組みである。</p>
        <h4>生物心理社会モデル（biopsychosocial model）</h4>
        <p>障害を<strong>生物的（遺伝・脳）・心理的（思考・感情・学習）・社会的（家族・文化・ストレス）</strong>要因の相互作用として総合的に理解する。現代の標準的視点である。</p>
        <h3>スティグマ（stigma）</h3>
        <p>精神障害には誤解や偏見にもとづく<strong>スティグマ（社会的烙印）</strong>が伴いやすい。「危険」「怠け」といった偏見は、受診の遅れや社会的孤立を招く。スティグマの低減は公衆衛生上の重要課題である。</p>
        <div class="callout warn">かつて同性愛は精神障害とされたが、1973年にアメリカ精神医学会が診断分類から削除した。「異常」の定義が<strong>時代・文化・社会的価値観に左右される</strong>ことを示す代表例である。</div>
      `,
      figure: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="230" y="24" text-anchor="middle" font-size="15" font-weight="800" fill="#1d2433">異常をとらえる「4つのD」</text>
        <circle cx="230" cy="170" r="40" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="230" y="166" text-anchor="middle" font-size="12" font-weight="700">異常の</text>
        <text x="230" y="182" text-anchor="middle" font-size="12" font-weight="700">判断</text>
        <g font-size="12" font-weight="700" text-anchor="middle">
          <rect x="60" y="55" width="150" height="44" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="135" y="74">Deviance</text><text x="135" y="90" font-size="11" font-weight="400">逸脱（規範外・まれ）</text>
          <rect x="250" y="55" width="150" height="44" rx="10" fill="#fdeecf" stroke="#f0a020"/><text x="325" y="74">Distress</text><text x="325" y="90" font-size="11" font-weight="400">苦痛</text>
          <rect x="60" y="240" width="150" height="44" rx="10" fill="#fde0e5" stroke="#e0566b"/><text x="135" y="259">Dysfunction</text><text x="135" y="275" font-size="11" font-weight="400">機能障害</text>
          <rect x="250" y="240" width="150" height="44" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="325" y="259">Danger</text><text x="325" y="275" font-size="11" font-weight="400">危険</text>
        </g>
        <g stroke="#9aa3bd" stroke-width="1.5">
          <line x1="160" y1="99" x2="205" y2="145"/><line x1="300" y1="99" x2="255" y2="145"/>
          <line x1="160" y1="240" x2="205" y2="195"/><line x1="300" y1="240" x2="255" y2="195"/>
        </g>
      </svg>`,
      figcaption: "逸脱・苦痛・機能障害・危険の4基準を総合して異常を判断する。とくに機能障害と苦痛が臨床上重要。",
      terms: [
        { term: "4つのD (the 4 Ds)", def: "逸脱(Deviance)・苦痛(Distress)・機能障害(Dysfunction)・危険(Danger)。異常を判断する基準。" },
        { term: "機能障害 (dysfunction)", def: "日常生活・仕事・対人関係に支障をきたすこと。臨床上もっとも重視される基準。" },
        { term: "医学モデル", def: "精神障害を身体的異常による病気とみなす立場。薬物療法の基盤。" },
        { term: "素因ストレスモデル", def: "生得的な脆弱性（素因）と環境ストレスの組み合わせで発症するとする枠組み。" },
        { term: "生物心理社会モデル", def: "生物的・心理的・社会的要因の相互作用で障害を理解する統合的視点。" },
        { term: "スティグマ", def: "精神障害に対する偏見・社会的烙印。受診の遅れや孤立を招く。" },
      ],
    },
    {
      title: "分類と診断 — DSM・ICD と診断をめぐる問題",
      body: `
        <p>精神障害を共通の基準で記述・分類するために、世界で2つの診断システムが用いられている。</p>
        <table>
          <tr><th></th><th>DSM-5（DSM-5-TR）</th><th>ICD-11</th></tr>
          <tr><td>発行</td><td>アメリカ精神医学会（APA）</td><td>世界保健機関（WHO）</td></tr>
          <tr><td>正式名</td><td>精神疾患の診断・統計マニュアル</td><td>国際疾病分類（精神疾患の章を含む）</td></tr>
          <tr><td>範囲</td><td>精神障害に特化</td><td>全疾病を扱う（精神障害は一章）</td></tr>
          <tr><td>使用</td><td>研究・臨床（特に米国）で広く使用</td><td>国際的な統計・医療保険で使用</td></tr>
        </table>
        <h3>多軸診断から次元的アプローチへ</h3>
        <p>DSM-IV までは、障害・人格・身体疾患・心理社会的要因・全般的機能を別々の「軸」で評価する<strong>多軸診断（multiaxial）</strong>が用いられた。しかし DSM-5 ではこの多軸システムは<strong>廃止</strong>された。</p>
        <p>従来の診断はあるかないかの<strong>カテゴリー的（categorical）</strong>分類だが、症状の重症度は連続的であるため、<strong>次元的（dimensional）アプローチ</strong>（重症度を程度で評価する）が部分的に取り入れられつつある。</p>
        <div class="callout key">診断には<strong>信頼性（reliability：診断者が違っても同じ診断になる一貫性）</strong>と<strong>妥当性（validity：その診断カテゴリーが実在を正しく捉えているか）</strong>が求められる。操作的な診断基準の導入により、DSM の信頼性は大きく向上した。</div>
        <h3>診断の利点と問題</h3>
        <h4>利点</h4>
        <ul>
          <li>専門家間の<strong>共通言語</strong>となり、意思疎通を容易にする。</li>
          <li>研究・治療法選択・予後予測の基盤となる。</li>
        </ul>
        <h4>問題点</h4>
        <ul>
          <li><strong>ラベリング（labeling）</strong>：診断名が固定化し、その人を「○○患者」として見てしまう。自己成就的予言を生む恐れ。</li>
          <li><strong>スティグマ</strong>の付与。</li>
          <li>病気の「医療化」や過剰診断の懸念。</li>
        </ul>
        <h3>ローゼンハンの実験（1973）</h3>
        <p>デヴィッド・ローゼンハンは<strong>「狂気の場所で正気でいること（On being sane in insane places）」</strong>という研究を行った。健康な協力者（疑似患者）8名が「声が聞こえる」と訴えて精神科病院を受診したところ、全員が入院を認められ、ほとんどが<strong>統合失調症</strong>と診断された。入院後は正常にふるまったが、医療者は彼らを患者として扱い続け、平均19日間入院した。</p>
        <div class="callout warn">ローゼンハン研究は、診断ラベルがいったん貼られると、その後の正常な行動までもが「症状」と解釈されてしまうこと（<strong>診断の文脈依存性とラベリングの影響</strong>）を鋭く示し、精神科診断の信頼性・妥当性に大きな議論を巻き起こした。</div>
        <div class="callout note">この研究を契機の一つとして、より明確で操作的な診断基準（DSM-III 以降）への改訂が進められた。</div>
      `,
      figure: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="240" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">カテゴリー的 vs 次元的アプローチ</text>
        <text x="120" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6cf0">カテゴリー的（有/無）</text>
        <rect x="40" y="60" width="70" height="36" rx="6" fill="#e9ebfe" stroke="#5b6cf0"/><text x="75" y="83" text-anchor="middle" font-size="11">正常</text>
        <rect x="130" y="60" width="70" height="36" rx="6" fill="#fde0e5" stroke="#e0566b"/><text x="165" y="83" text-anchor="middle" font-size="11">障害</text>
        <text x="360" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#15c4a8">次元的（程度）</text>
        <defs><linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e9ebfe"/><stop offset="1" stop-color="#e0566b"/></linearGradient></defs>
        <rect x="270" y="60" width="180" height="36" rx="6" fill="url(#grad1)" stroke="#9aa3bd"/>
        <text x="280" y="112" font-size="10" fill="#5b6478">軽症</text><text x="430" y="112" font-size="10" fill="#5b6478" text-anchor="end">重症</text>
        <text x="240" y="155" text-anchor="middle" font-size="11" fill="#5b6478">症状の重症度は本来連続的（次元的）であるため、</text>
        <text x="240" y="172" text-anchor="middle" font-size="11" fill="#5b6478">DSM-5 は次元的評価を一部取り入れている。</text>
      </svg>`,
      figcaption: "従来のカテゴリー診断（障害の有無）に対し、重症度を連続量で評価する次元的アプローチが補完的に導入されている。",
      terms: [
        { term: "DSM-5", def: "アメリカ精神医学会による精神疾患の診断・統計マニュアル。最新は DSM-5-TR。" },
        { term: "ICD-11", def: "WHO による国際疾病分類。精神障害を含む全疾病を扱う。" },
        { term: "多軸診断", def: "障害・人格・身体・心理社会的要因等を別軸で評価する方式。DSM-5で廃止。" },
        { term: "信頼性／妥当性", def: "診断者が違っても一致する一貫性（信頼性）と、実在を正しく捉える正確さ（妥当性）。" },
        { term: "ラベリング", def: "診断名が固定化し、その人を病名で見てしまうこと。自己成就的予言の恐れ。" },
        { term: "ローゼンハン研究 (1973)", def: "健康な疑似患者が精神科に入院・統合失調症と診断された研究。診断の妥当性を問うた。" },
        { term: "次元的アプローチ", def: "障害の有無ではなく重症度を程度（連続量）で評価する考え方。" },
      ],
    },
    {
      title: "不安症・強迫症・ストレス関連障害",
      body: `
        <p><strong>不安（anxiety）</strong>は本来、危険に備えるための適応的な反応である。しかし不安が過度・持続的で、対象に不釣り合いで、生活に支障をきたすとき、<strong>不安症（anxiety disorders）</strong>とみなされる。最も有病率の高い精神障害群である。</p>
        <h3>主な不安症</h3>
        <table>
          <tr><th>障害</th><th>中核的特徴</th></tr>
          <tr><td><b>全般不安症（GAD）</b></td><td>特定の対象がなく、さまざまな事柄に過度の心配が持続（「浮動性不安」）。</td></tr>
          <tr><td><b>パニック症</b></td><td>突然の激しい<strong>パニック発作</strong>（動悸・呼吸困難・死の恐怖など）を繰り返す。発作への予期不安。</td></tr>
          <tr><td><b>広場恐怖症</b></td><td>逃げられない・助けを得にくい状況（雑踏・電車・広場）を回避。パニック症に合併しやすい。</td></tr>
          <tr><td><b>限局性恐怖症</b></td><td>特定の対象・状況（高所・閉所・蜘蛛・血液など）への強い恐怖と回避。</td></tr>
          <tr><td><b>社交不安症</b></td><td>他者に注視・否定的評価される状況への強い恐怖（人前での発表・会食など）。</td></tr>
        </table>
        <div class="callout note">DSM-5 では、<strong>強迫症（OCD）</strong>と<strong>心的外傷後ストレス障害（PTSD）</strong>は不安症から分離され、それぞれ独立した群（「強迫症および関連症」「心的外傷およびストレス因関連症」）に置かれた。ただし病態として不安と密接に関わる。</div>
        <h3>強迫症（OCD：obsessive-compulsive disorder）</h3>
        <p>本人の意思に反して繰り返し浮かぶ<strong>強迫観念（obsession：例「汚染された」「鍵を閉め忘れた」）</strong>と、それによる不安を打ち消すために繰り返す<strong>強迫行為（compulsion：例 過剰な手洗い・確認）</strong>を特徴とする。不合理と分かっていてもやめられない。</p>
        <h3>心的外傷後ストレス障害（PTSD）</h3>
        <p>生命を脅かす出来事（災害・事故・暴力・戦闘など）を体験・目撃した後に生じる。中核症状は、<strong>侵入（再体験：フラッシュバック・悪夢）・回避・認知と気分の陰性変化・過覚醒</strong>の4群。出来事の直後で1か月未満の場合は<strong>急性ストレス障害（ASD）</strong>と呼ぶ。</p>
        <h3>不安症の病因</h3>
        <ul>
          <li><strong>古典的条件づけ</strong>：中性刺激が恐怖と対呈示され恐怖反応を獲得する。ワトソンの<strong>「アルバート坊やの実験」</strong>が恐怖の条件づけを示した。回避行動が恐怖を維持・強化する（オペラント的維持）。</li>
          <li><strong>準備性（preparedness）：セリグマン</strong>。ヘビ・クモ・高所など、進化の過程で生存を脅かしてきた対象は恐怖条件づけが成立しやすい（生物学的準備）。電気コードやコンセントへの恐怖症が少ないのはこのため。</li>
          <li><strong>認知的要因</strong>：脅威を過大評価し、身体感覚を破局的に解釈する（例 動悸→「心臓発作だ」）。パニック症の認知モデル。</li>
          <li><strong>生物学的要因</strong>：GABA など神経伝達物質の関与、扁桃体の過活動、遺伝的素因。</li>
        </ul>
        <div class="callout tip">不安症・恐怖症の代表的治療は、恐怖対象に段階的に向き合う<strong>曝露療法（エクスポージャー）</strong>を含む認知行動療法である。回避をやめることで、恐怖が自然に弱まる（消去）。</div>
      `,
      figure: `<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="ar2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e0566b"/></marker></defs>
        <text x="240" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">強迫症の悪循環</text>
        <g text-anchor="middle" font-size="12" font-weight="700">
          <rect x="170" y="40" width="140" height="42" rx="10" fill="#fde0e5" stroke="#e0566b"/><text x="240" y="58">強迫観念</text><text x="240" y="74" font-size="10" font-weight="400">「汚染された」</text>
          <rect x="320" y="120" width="150" height="42" rx="10" fill="#fdeecf" stroke="#f0a020"/><text x="395" y="138">不安・苦痛の上昇</text>
          <rect x="170" y="155" width="140" height="42" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="240" y="173">強迫行為</text><text x="240" y="189" font-size="10" font-weight="400">過剰な手洗い</text>
          <rect x="10" y="120" width="150" height="42" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="85" y="138">一時的に不安減</text><text x="85" y="154" font-size="10" font-weight="400">→行為が強化される</text>
        </g>
        <g stroke="#e0566b" stroke-width="2" marker-end="url(#ar2)" fill="none">
          <path d="M310 62 Q400 80 395 118"/>
          <path d="M340 162 Q300 175 312 176"/>
          <path d="M170 176 Q120 175 110 162"/>
          <path d="M85 120 Q120 70 168 62"/>
        </g>
      </svg>`,
      figcaption: "強迫行為は一時的に不安を下げるため負の強化で維持され、強迫観念が繰り返される悪循環をなす。曝露反応妨害がこれを断つ。",
      terms: [
        { term: "全般不安症 (GAD)", def: "特定対象のない過度の心配が持続する不安症。浮動性不安。" },
        { term: "パニック発作", def: "突然生じる激しい動悸・呼吸困難・死の恐怖などの発作。繰り返すとパニック症。" },
        { term: "強迫症 (OCD)", def: "強迫観念と、それを打ち消す強迫行為を特徴とする。DSM-5で不安症から独立。" },
        { term: "PTSD", def: "外傷的出来事後の再体験・回避・陰性変化・過覚醒。1か月未満はASD。" },
        { term: "準備性 (preparedness)", def: "進化上危険だった対象は恐怖条件づけが成立しやすいとするセリグマンの考え。" },
        { term: "曝露療法", def: "恐怖対象に段階的に向き合い、回避をやめることで恐怖を消去する技法。" },
        { term: "アルバート坊やの実験", def: "ワトソンが恐怖反応の古典的条件づけを示した研究。" },
      ],
    },
    {
      title: "抑うつ障害と双極性障害（気分障害）",
      body: `
        <p><strong>気分障害（mood disorders）</strong>は、気分（感情）の過度な落ち込みや高揚を中核とする。DSM-5 では「抑うつ障害群」と「双極性障害および関連障害群」に分かれる。</p>
        <h3>うつ病（大うつ病性障害：MDD）</h3>
        <p>2週間以上続く、<strong>抑うつ気分</strong>または<strong>興味・喜びの喪失（アンヘドニア）</strong>を中核とし、加えて食欲・睡眠の変化、疲労感、無価値感・罪責感、集中困難、<strong>希死念慮</strong>などを伴う。女性の有病率が男性の約2倍とされる。</p>
        <div class="callout note"><strong>持続性抑うつ障害（気分変調症）</strong>は、症状は比較的軽いが <strong>2年以上</strong> 持続する慢性的な抑うつ状態を指す。</div>
        <h3>双極性障害（bipolar disorder）</h3>
        <p>抑うつ状態と、気分が異常に高揚する<strong>躁状態</strong>（多弁・誇大・睡眠欲求の減少・無謀な行動）を繰り返す。</p>
        <ul>
          <li><strong>双極I型</strong>：はっきりした<strong>躁病エピソード</strong>を伴う（入院を要するほど重い場合も）。</li>
          <li><strong>双極II型</strong>：より軽い<strong>軽躁エピソード</strong>と抑うつエピソードを繰り返す。</li>
        </ul>
        <div class="callout warn">双極性障害は遺伝的素因の関与が大きく、うつ病とは異なり<strong>気分安定薬（リチウムなど）</strong>が治療の中心となる。うつ病と誤診し抗うつ薬のみを用いると躁転を招く恐れがあり、鑑別が重要である。</div>
        <h3>気分障害（特にうつ病）の病因</h3>
        <h4>生物学的：モノアミン仮説</h4>
        <p>うつ病では<strong>セロトニン・ノルアドレナリン・ドーパミン</strong>などのモノアミン系神経伝達物質の機能低下が関与するとする仮説。SSRI などの抗うつ薬がこれらの働きを高めることが根拠の一つ。ただし単純な「不足」では説明しきれないとする見方も強い。</p>
        <h4>心理学的：学習性無力感（セリグマン）</h4>
        <p><strong>マーティン・セリグマン</strong>は、イヌに逃避不能な電気ショックを与え続けると、逃げられる状況でも逃げようとしなくなる<strong>学習性無力感（learned helplessness）</strong>を見いだした。「何をしても無駄だ」という統制不能感の学習がうつの一因とされる。のちに、原因をどう説明するか（<strong>帰属スタイル</strong>：内的・安定的・全般的な悲観的帰属）を重視する改訂版へ発展した。</p>
        <h4>心理学的：ベックの認知の三徴</h4>
        <p><strong>アーロン・ベック</strong>は、うつ病者が<strong>「自己・世界・将来」の3領域</strong>を否定的に捉える<strong>認知の三徴（cognitive triad）</strong>を持つとした。「自分はだめだ・周囲は冷たい・未来は絶望的だ」。こうした自動思考と認知の歪みを修正するのが<strong>認知療法（認知行動療法）</strong>である。</p>
        <h3>自殺リスク</h3>
        <p>気分障害は自殺の最大の危険因子の一つである。過去の自殺企図、具体的な計画、絶望感、社会的孤立、物質乱用などがリスクを高める。希死念慮への適切な評価と介入は臨床上きわめて重要である。</p>
      `,
      figure: `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="230" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">ベックの認知の三徴</text>
        <g text-anchor="middle">
          <polygon points="230,55 70,185 390,185" fill="#fdeecf" stroke="#f0a020" stroke-width="2"/>
          <rect x="165" y="48" width="130" height="40" rx="10" fill="#fde0e5" stroke="#e0566b"/><text x="230" y="66" font-size="12" font-weight="700">自己</text><text x="230" y="81" font-size="10">「自分はだめだ」</text>
          <rect x="20" y="160" width="140" height="40" rx="10" fill="#fde0e5" stroke="#e0566b"/><text x="90" y="178" font-size="12" font-weight="700">世界（周囲）</text><text x="90" y="193" font-size="10">「皆冷たい」</text>
          <rect x="300" y="160" width="140" height="40" rx="10" fill="#fde0e5" stroke="#e0566b"/><text x="370" y="178" font-size="12" font-weight="700">将来</text><text x="370" y="193" font-size="10">「未来は絶望的」</text>
        </g>
        <text x="230" y="222" text-anchor="middle" font-size="11" fill="#5b6478">この3領域への否定的認知がうつ病を維持する</text>
      </svg>`,
      figcaption: "ベックは、うつ病者が自己・世界・将来を否定的に捉える「認知の三徴」を持つとした。認知療法はこれを標的とする。",
      terms: [
        { term: "大うつ病性障害 (MDD)", def: "抑うつ気分または興味喪失を中核とし2週間以上続く障害。" },
        { term: "持続性抑うつ障害", def: "軽度だが2年以上続く慢性の抑うつ状態（気分変調症）。" },
        { term: "双極性障害", def: "躁（または軽躁）と抑うつを繰り返す。I型は躁病、II型は軽躁を伴う。" },
        { term: "モノアミン仮説", def: "セロトニン等のモノアミン系の機能低下がうつに関与するとする生物学的仮説。" },
        { term: "学習性無力感", def: "統制不能な事態を経験し「何をしても無駄」と学習する現象。セリグマン。" },
        { term: "認知の三徴", def: "うつ病者が自己・世界・将来を否定的に捉えるとするベックの理論。" },
        { term: "希死念慮", def: "死にたいという思い。気分障害は自殺の主要な危険因子。" },
      ],
    },
    {
      title: "統合失調症 — 現実検討の障害",
      body: `
        <p><strong>統合失調症（schizophrenia）</strong>は、思考・知覚・感情・行動の広範な障害を伴い、現実検討（現実とそうでないものの区別）が損なわれる重篤な精神障害である。生涯有病率は約1%、好発年齢は青年期〜成人前期。「分裂した心」を意味するが、いわゆる「多重人格」とは<strong>別物</strong>である点に注意。</p>
        <h3>陽性症状と陰性症状</h3>
        <table>
          <tr><th></th><th>陽性症状（plus：本来ない体験の出現）</th><th>陰性症状（minus：本来ある機能の欠如）</th></tr>
          <tr><td>例</td><td><strong>幻覚</strong>（とくに幻聴）<br><strong>妄想</strong>（被害妄想・誇大妄想など）<br><strong>思考障害・解体した会話</strong>（連合弛緩）<br>解体した行動</td><td><strong>感情の平板化</strong>（情動表出の乏しさ）<br><strong>意欲・発動性の低下</strong>（無為）<br><strong>会話の貧困</strong>（思考の貧困）<br>社会的引きこもり</td></tr>
          <tr><td>薬の効果</td><td>抗精神病薬がよく効きやすい</td><td>改善しにくく、予後を左右しやすい</td></tr>
        </table>
        <div class="callout key"><strong>幻覚</strong>は対象のない知覚（幻聴が代表）、<strong>妄想</strong>は誤った確信で訂正不能なもの。両者は陽性症状の中核である。一方、陰性症状は「うつ」と見間違えられやすいが、機能予後への影響が大きい。</div>
        <h3>経過</h3>
        <p>典型的には、社会的引きこもりなどが生じる<strong>前駆期</strong>→陽性症状が顕在化する<strong>急性期</strong>→陰性症状や認知機能障害が残る<strong>慢性期（残遺期）</strong>と経過する。早期介入が予後改善につながるとされる。</p>
        <h3>病因</h3>
        <h4>ドーパミン仮説</h4>
        <p>統合失調症の陽性症状は、脳内<strong>ドーパミン</strong>系（とくに中脳辺縁系）の過剰な活動に関連するとする仮説。①ドーパミンを遮断する<strong>抗精神病薬</strong>が陽性症状を抑える、②ドーパミンを増やすアンフェタミンが幻覚妄想を生じうる、ことが根拠。近年はグルタミン酸系の関与も指摘される。</p>
        <h4>遺伝・神経発達要因</h4>
        <p>双生児・家族研究から強い<strong>遺伝的素因</strong>が示される（一卵性双生児の一致率は約50%だが100%でない＝環境も関与）。また、胎生期・周産期の感染・低酸素・栄養不良など、脳の発達早期の異常が後年の発症に関わるとする<strong>神経発達仮説</strong>がある。脳室の拡大など脳構造の変化も報告される。</p>
        <h4>表出感情（EE：expressed emotion）</h4>
        <p>家族が患者に向ける<strong>批判・敵意・過度の情緒的巻き込み</strong>を<strong>表出感情（EE）</strong>という。<strong>高EE</strong>の家庭に戻った患者は<strong>再発率が高い</strong>ことが知られる。これは素因ストレスモデルの好例で、家族心理教育による EE 低減が再発予防に有効である。</p>
        <div class="callout warn">統合失調症＝危険・暴力的という偏見は誤り。大多数は他害的でなく、むしろ被害を受けやすい立場にある。スティグマが回復と社会復帰を妨げる。</div>
      `,
      figure: `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="240" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">陽性症状 と 陰性症状</text>
        <g>
          <rect x="20" y="40" width="210" height="160" rx="12" fill="#fde0e5" stroke="#e0566b" stroke-width="2"/>
          <text x="125" y="64" text-anchor="middle" font-size="13" font-weight="800" fill="#e0566b">陽性症状（＋）</text>
          <text x="125" y="82" text-anchor="middle" font-size="10" fill="#5b6478">本来ない体験の出現</text>
          <g font-size="12" text-anchor="middle"><text x="125" y="110">幻覚（幻聴）</text><text x="125" y="135">妄想</text><text x="125" y="160">思考障害</text><text x="125" y="185">解体した行動</text></g>
          <rect x="250" y="40" width="210" height="160" rx="12" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
          <text x="355" y="64" text-anchor="middle" font-size="13" font-weight="800" fill="#5b6cf0">陰性症状（−）</text>
          <text x="355" y="82" text-anchor="middle" font-size="10" fill="#5b6478">本来ある機能の欠如</text>
          <g font-size="12" text-anchor="middle"><text x="355" y="110">感情の平板化</text><text x="355" y="135">意欲低下（無為）</text><text x="355" y="160">会話の貧困</text><text x="355" y="185">社会的引きこもり</text></g>
        </g>
      </svg>`,
      figcaption: "陽性症状は本来ない体験の出現（幻覚・妄想など）、陰性症状は本来ある機能の欠如（感情平板化・意欲低下など）。",
      terms: [
        { term: "統合失調症", def: "思考・知覚・感情の障害を伴い現実検討が損なわれる重篤な精神障害。有病率約1%。" },
        { term: "陽性症状", def: "幻覚・妄想・思考障害など本来ない体験の出現。抗精神病薬が効きやすい。" },
        { term: "陰性症状", def: "感情平板化・意欲低下など本来ある機能の欠如。改善しにくく予後を左右。" },
        { term: "妄想", def: "誤った確信で、反証によっても訂正できない信念。被害妄想・誇大妄想など。" },
        { term: "ドーパミン仮説", def: "陽性症状が脳内ドーパミン系の過活動に関連するとする仮説。" },
        { term: "神経発達仮説", def: "周産期等の脳発達早期の異常が後年の発症に関与するとする考え。" },
        { term: "表出感情 (EE)", def: "家族の批判・敵意・過度の巻き込み。高EEは再発率を高める。" },
      ],
    },
    {
      title: "その他の主要障害 — 解離・身体症状・摂食・物質",
      body: `
        <p>不安・気分・統合失調症以外にも、臨床で重要な障害群がある。</p>
        <h3>解離症（dissociative disorders）</h3>
        <p>記憶・意識・同一性・知覚の<strong>統合の破綻（解離）</strong>を特徴とする。多くは強いストレスや外傷との関連が指摘される。</p>
        <ul>
          <li><strong>解離性同一症（DID）</strong>：いわゆる「多重人格」。複数の人格状態が交代して現れ、その間の記憶に欠落（健忘）を伴う。<strong>統合失調症とは別物</strong>である。</li>
          <li><strong>解離性健忘</strong>：通常は外傷的な出来事に関する重要な個人的記憶を、器質的原因なく想起できない。時に当てもなく放浪する<strong>遁走（フーグ）</strong>を伴う。</li>
        </ul>
        <h3>身体症状症および関連症</h3>
        <p>医学的に十分説明できない、あるいは不釣り合いに苦痛・心配を伴う身体症状を中心とする。</p>
        <ul>
          <li><strong>身体症状症</strong>：身体症状とそれへの過度の思考・不安・行動。</li>
          <li><strong>病気不安症</strong>：重い病気にかかる/かかっているという過度のとらわれ（旧「心気症」に近い）。</li>
          <li><strong>変換症（転換性障害）</strong>：神経学的に説明できない運動・感覚症状（麻痺・失立失歩・失声など）。心理的葛藤との関連が想定される。</li>
        </ul>
        <div class="callout warn">これらは<strong>詐病（意図的な偽り）とは異なる</strong>。本人は症状を実際に体験しており、苦痛も現実のものである。</div>
        <h3>摂食障害（feeding and eating disorders）</h3>
        <table>
          <tr><th></th><th>神経性やせ症（拒食）</th><th>神経性過食症</th></tr>
          <tr><td>体重</td><td>有意に低い体重を維持</td><td>正常〜やや高めのことが多い</td></tr>
          <tr><td>中核</td><td>体重増加への強い恐怖、<strong>ボディイメージの歪み</strong>、極端な食事制限</td><td><strong>過食</strong>と、それを打ち消す<strong>代償行動</strong>（自己誘発嘔吐・下剤・絶食）の反復</td></tr>
          <tr><td>危険</td><td>低栄養・無月経・致死率が高い</td><td>嘔吐による電解質異常・歯のエナメル質障害</td></tr>
        </table>
        <p>このほか、代償行動を伴わず過食を繰り返す<strong>過食性障害（むちゃ食い症）</strong>がある。摂食障害は青年期女性に多く、文化的なやせ願望、完璧主義、家族要因などが関与する。</p>
        <h3>物質関連障害（substance-related disorders）</h3>
        <p>アルコールや薬物などの<strong>物質使用障害</strong>では、コントロール喪失・渇望・耐性・離脱が問題となる。</p>
        <ul>
          <li><strong>耐性（tolerance）</strong>：同じ効果を得るのに必要な量が増える。</li>
          <li><strong>離脱（withdrawal）</strong>：使用を中止・減量すると不快な身体・精神症状が生じる。</li>
          <li><strong>渇望（craving）</strong>：強い使用欲求。</li>
        </ul>
        <div class="callout note">DSM-5 では従来の「物質乱用」と「物質依存」を統合し、重症度を程度で評価する<strong>「物質使用障害」</strong>に一本化された（次元的アプローチの一例）。</div>
      `,
      terms: [
        { term: "解離性同一症 (DID)", def: "複数の人格状態が交代し記憶に欠落を伴う。いわゆる多重人格。統合失調症とは別。" },
        { term: "解離性健忘", def: "外傷的記憶を器質的原因なく想起できない。遁走を伴うことがある。" },
        { term: "変換症（転換性障害）", def: "神経学的に説明できない運動・感覚症状。心理的葛藤との関連が想定される。" },
        { term: "神経性やせ症", def: "体重増加への強い恐怖とボディイメージの歪みで極端に体重を制限する障害。" },
        { term: "神経性過食症", def: "過食と自己誘発嘔吐などの代償行動を反復する障害。" },
        { term: "耐性／離脱", def: "同効果に必要量が増えること（耐性）と、中止時の不快症状（離脱）。" },
        { term: "物質使用障害", def: "DSM-5で乱用と依存を統合し重症度で評価する物質関連の診断。" },
      ],
    },
    {
      title: "パーソナリティ障害と神経発達症",
      body: `
        <p>本レッスンでは、持続的な性格傾向に関わる<strong>パーソナリティ障害</strong>と、発達早期から現れる<strong>神経発達症</strong>を扱う。</p>
        <h3>パーソナリティ障害（personality disorders）</h3>
        <p>その文化の期待から著しく偏り、<strong>柔軟性を欠いて広範・持続的</strong>に現れ、苦痛や機能障害を生じる内的体験・行動の様式。青年期〜成人期早期までに明らかになる。DSM-5 は10種を<strong>3つのクラスター</strong>に分類する。</p>
        <table>
          <tr><th>クラスター</th><th>特徴</th><th>代表例</th></tr>
          <tr><td><b>A 群（奇妙・風変わり）</b></td><td>社会的に孤立し風変わり</td><td>猜疑性（妄想性）／シゾイド／統合失調型</td></tr>
          <tr><td><b>B 群（劇的・情緒的）</b></td><td>感情が不安定で演技的・衝動的</td><td><strong>境界性</strong>／<strong>反社会性</strong>／<strong>自己愛性</strong>／演技性</td></tr>
          <tr><td><b>C 群（不安・恐れ）</b></td><td>不安が強く回避的・依存的</td><td>回避性／依存性／強迫性</td></tr>
        </table>
        <h4>B群の代表例</h4>
        <ul>
          <li><strong>境界性パーソナリティ障害（BPD）</strong>：対人関係・自己像・感情の<strong>不安定さ</strong>と<strong>衝動性</strong>。見捨てられ不安、理想化とこき下ろしの両極端、自傷など。</li>
          <li><strong>反社会性パーソナリティ障害（ASPD）</strong>：他者の権利を無視・侵害。良心の呵責の欠如、欺瞞、衝動性。15歳以前の素行症が先行。いわゆる「サイコパシー」と関連。</li>
          <li><strong>自己愛性パーソナリティ障害</strong>：誇大性、賞賛欲求、共感の欠如。</li>
        </ul>
        <div class="callout note">パーソナリティ障害はカテゴリー分類への批判が強く、DSM-5 は<strong>次元的な「代替モデル」</strong>を第III部に併記している。</div>
        <h3>神経発達症（neurodevelopmental disorders）</h3>
        <p>発達期に生じ、個人的・社会的・学業/職業的機能に障害をもたらす一群。発達の<strong>早期から</strong>現れるのが特徴。</p>
        <h4>自閉スペクトラム症（ASD）</h4>
        <p>2つの中核領域からなる。①<strong>社会的コミュニケーションと対人的相互作用の持続的障害</strong>（視線・表情の使用、関係構築の困難など）、②<strong>限定された反復的な行動・興味・活動</strong>（常同行動、こだわり、感覚過敏など）。DSM-5 で従来の自閉性障害・アスペルガー障害等を<strong>「スペクトラム」</strong>として連続体に統合した。知的能力や言語の程度は幅広い。</p>
        <h4>注意欠如・多動症（ADHD）</h4>
        <p><strong>不注意</strong>（注意の持続困難、忘れ物、ケアレスミス）と<strong>多動・衝動性</strong>（じっとできない、待てない、しゃべりすぎ）を中核とする。不注意優勢・多動衝動優勢・混合の3病型。<strong>12歳以前</strong>に複数の場面で症状が現れることが診断要件。実行機能・ドーパミン系の関与が指摘され、中枢刺激薬（メチルフェニデートなど）が用いられる。</p>
        <div class="callout key">神経発達症は「育て方の問題」ではなく、<strong>生物学的な脳発達の特性</strong>に基づく。早期の理解と環境調整・支援が適応を大きく左右する。</div>
        <div class="callout tip">ASD・ADHD・知的発達症などは併存しやすい。診断ラベルより、本人の<strong>具体的な困りごとと強みの理解</strong>に基づく支援が重要である。</div>
      `,
      figure: `<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="240" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">パーソナリティ障害の3クラスター</text>
        <g text-anchor="middle" font-size="12">
          <rect x="15" y="50" width="145" height="140" rx="12" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
          <text x="87" y="74" font-weight="800" fill="#5b6cf0">A群</text><text x="87" y="92" font-size="11">奇妙・風変わり</text>
          <text x="87" y="120" font-size="11">猜疑性</text><text x="87" y="140" font-size="11">シゾイド</text><text x="87" y="160" font-size="11">統合失調型</text>
          <rect x="170" y="50" width="145" height="140" rx="12" fill="#fdeecf" stroke="#f0a020" stroke-width="2"/>
          <text x="242" y="74" font-weight="800" fill="#f0a020">B群</text><text x="242" y="92" font-size="11">劇的・情緒的</text>
          <text x="242" y="120" font-size="11">境界性</text><text x="242" y="140" font-size="11">反社会性</text><text x="242" y="160" font-size="11">自己愛性／演技性</text>
          <rect x="325" y="50" width="145" height="140" rx="12" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
          <text x="397" y="74" font-weight="800" fill="#15c4a8">C群</text><text x="397" y="92" font-size="11">不安・恐れ</text>
          <text x="397" y="120" font-size="11">回避性</text><text x="397" y="140" font-size="11">依存性</text><text x="397" y="160" font-size="11">強迫性</text>
        </g>
      </svg>`,
      figcaption: "DSM-5 はパーソナリティ障害を、奇妙(A群)・劇的(B群)・不安(C群)の3クラスターに分類する。",
      terms: [
        { term: "パーソナリティ障害", def: "文化から著しく偏った持続的・柔軟性を欠く体験・行動様式で機能障害を生む。" },
        { term: "3クラスター", def: "A群(奇妙)・B群(劇的)・C群(不安)。DSM-5の分類。" },
        { term: "境界性パーソナリティ障害", def: "対人・自己像・感情の不安定さと衝動性。見捨てられ不安、自傷など。B群。" },
        { term: "反社会性パーソナリティ障害", def: "他者の権利侵害と良心の欠如。素行症が先行。サイコパシーと関連。B群。" },
        { term: "自閉スペクトラム症 (ASD)", def: "社会的コミュニケーションの障害と、限定的反復的な行動・興味を中核とする。" },
        { term: "注意欠如・多動症 (ADHD)", def: "不注意と多動・衝動性を中核とする神経発達症。12歳以前に発現。" },
        { term: "神経発達症", def: "発達期に生じ機能障害をもたらす一群。育て方でなく脳発達の特性に基づく。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "異常をとらえる「4つのD」に含まれないものはどれか。", choices: ["Deviance（逸脱）", "Distress（苦痛）", "Dysfunction（機能障害）", "Discipline（規律）"], answer: 3, explain: "4つのDは Deviance・Distress・Dysfunction・Danger。Discipline（規律）は含まれない。", difficulty: 1 },
    { type: "mcq", stem: "異常判断の基準のうち、臨床上もっとも重視されるとされるものはどれか。", choices: ["統計的なまれさ（逸脱）のみ", "機能障害（dysfunction）", "他者への危険のみ", "本人が有名かどうか"], answer: 1, explain: "日常生活・仕事・対人関係の支障（機能障害）と苦痛が臨床上重視される。統計的なまれさだけでは異常とは言えない。", difficulty: 2 },
    { type: "mcq", stem: "生得的な脆弱性（素因）と環境からのストレスの組み合わせで障害が発症すると考える枠組みはどれか。", choices: ["医学モデル", "素因ストレスモデル", "三項随伴性", "認知の三徴"], answer: 1, explain: "素因ストレスモデルは、素因（diathesis）が強い人ほど弱いストレスでも発症するとする有力な枠組み。", difficulty: 1 },
    { type: "mcq", stem: "かつて同性愛が精神障害の分類から削除（1973年）された事実が示すのは何か。", choices: ["診断は遺伝でのみ決まること", "「異常」の定義が時代・文化・価値観に左右されること", "医学モデルが唯一正しいこと", "統計的逸脱が常に異常を意味すること"], answer: 1, explain: "「異常」の基準は社会的価値観に依存しうる。この削除はその代表例として引かれる。", difficulty: 2 },
    { type: "mcq", stem: "DSM-5 を発行している組織はどれか。", choices: ["世界保健機関（WHO）", "アメリカ精神医学会（APA）", "国連教育科学文化機関", "日本心理学会"], answer: 1, explain: "DSMはアメリカ精神医学会（APA）が発行。WHOが発行するのはICD（国際疾病分類）である。", difficulty: 1 },
    { type: "mcq", stem: "DSM-5 で起きた変更として正しいものはどれか。", choices: ["多軸診断（multiaxial）が廃止された", "内観法が診断基準に採用された", "ICDと完全に同一になった", "カテゴリー分類が全面的に廃止された"], answer: 0, explain: "DSM-5で多軸システムは廃止された。次元的評価は部分的に導入されたが、カテゴリー分類が全廃されたわけではない。", difficulty: 2 },
    { type: "mcq", stem: "「診断者が違っても同じ診断になる一貫性」を指す概念はどれか。", choices: ["妥当性", "信頼性", "標準化", "操作的定義"], answer: 1, explain: "信頼性（reliability）は診断の一貫性。妥当性（validity）は診断カテゴリーが実在を正しく捉えているかを指す。", difficulty: 2 },
    { type: "mcq", stem: "健康な疑似患者が精神科病院に入院し、多くが統合失調症と診断された1973年の研究を行ったのは誰か。", choices: ["ローゼンハン", "セリグマン", "ベック", "フロイト"], answer: 0, explain: "ローゼンハンの「狂気の場所で正気でいること」研究。診断ラベルが後の正常行動の解釈にも影響することを示した。", difficulty: 2 },
    { type: "mcq", stem: "特定の対象がなく、さまざまな事柄に過度の心配が持続する不安症はどれか。", choices: ["限局性恐怖症", "全般不安症（GAD）", "パニック症", "社交不安症"], answer: 1, explain: "全般不安症は対象が定まらない浮動性の不安が持続する点が特徴である。", difficulty: 1 },
    { type: "mcq", stem: "DSM-5 における強迫症（OCD）の位置づけとして正しいものはどれか。", choices: ["気分障害群に分類される", "不安症から分離され独立した群に置かれた", "パーソナリティ障害に分類される", "統合失調症スペクトラムに含まれる"], answer: 1, explain: "DSM-5でOCDは不安症から分離され「強迫症および関連症」群となった。PTSDも同様に独立した。", difficulty: 2 },
    { type: "mcq", stem: "ヘビやクモなど進化上危険だった対象は恐怖条件づけが成立しやすいとする考え（準備性）を提唱したのは誰か。", choices: ["ワトソン", "セリグマン", "スキナー", "ベック"], answer: 1, explain: "セリグマンの準備性（preparedness）。電気コードなど現代的危険物への恐怖症が少ないことと対比される。", difficulty: 3 },
    { type: "mcq", stem: "PTSDの中核症状群に含まれないものはどれか。", choices: ["侵入（再体験・フラッシュバック）", "回避", "過覚醒", "幻聴"], answer: 3, explain: "PTSDの4症状群は侵入・回避・認知と気分の陰性変化・過覚醒。幻聴は統合失調症など別の障害でみられる。", difficulty: 2 },
    { type: "mcq", stem: "うつ病の中核症状である「興味・喜びの喪失」を指す用語はどれか。", choices: ["アンヘドニア", "アレキシサイミア", "アパシー", "アノミー"], answer: 0, explain: "アンヘドニア（anhedonia）は快の喪失。抑うつ気分とともに大うつ病性障害の中核症状である。", difficulty: 2 },
    { type: "mcq", stem: "逃避不能なショックを経験した動物が、逃げられる状況でも逃げなくなる現象を何と呼ぶか。", choices: ["学習性無力感", "般化", "潜在制止", "自発的回復"], answer: 0, explain: "セリグマンの学習性無力感。統制不能感の学習がうつの一因とされ、のちに帰属スタイルを重視する改訂版へ発展した。", difficulty: 2 },
    { type: "mcq", stem: "ベックの「認知の三徴（cognitive triad）」が指す3領域の組み合わせはどれか。", choices: ["過去・現在・未来", "自己・世界・将来", "本能・自我・超自我", "感覚・知覚・認知"], answer: 1, explain: "ベックは、うつ病者が自己・世界・将来の3領域を否定的に捉えるとした。認知療法はこれを標的とする。", difficulty: 2 },
    { type: "mcq", stem: "双極性障害について正しい記述はどれか。", choices: ["治療の中心は抗精神病薬の単独使用である", "I型は軽躁、II型は躁病を伴う", "気分安定薬（リチウム等）が治療の中心となる", "躁状態は本人に常に強い苦痛を伴う"], answer: 2, explain: "双極性障害はリチウムなどの気分安定薬が治療の中心。I型が躁病、II型が軽躁を伴う点に注意。", difficulty: 3 },
    { type: "mcq", stem: "うつ病のモノアミン仮説で関与が想定される神経伝達物質はどれか。", choices: ["セロトニン・ノルアドレナリン", "アセチルコリンのみ", "GABAのみ", "グルタミン酸のみ"], answer: 0, explain: "モノアミン仮説はセロトニン・ノルアドレナリン・ドーパミンなどの機能低下を想定。SSRIの作用がその根拠の一つ。", difficulty: 2 },
    { type: "mcq", stem: "統合失調症の陽性症状はどれか。", choices: ["感情の平板化", "意欲の低下", "幻覚・妄想", "社会的引きこもり"], answer: 2, explain: "陽性症状は本来ない体験の出現（幻覚・妄想・思考障害）。感情平板化や意欲低下は陰性症状である。", difficulty: 1 },
    { type: "mcq", stem: "統合失調症の陰性症状の特徴として正しいものはどれか。", choices: ["抗精神病薬で速やかに改善しやすい", "本来ある機能の欠如で、改善しにくく予後を左右しやすい", "妄想が中心である", "急性期にのみ現れる"], answer: 1, explain: "陰性症状（感情平板化・意欲低下など）は機能の欠如で、薬で改善しにくく機能予後への影響が大きい。", difficulty: 2 },
    { type: "mcq", stem: "統合失調症のドーパミン仮説を支持する根拠として適切なものはどれか。", choices: ["SSRIが陽性症状を増悪させる", "ドーパミンを遮断する抗精神病薬が陽性症状を抑える", "ドーパミンを増やすと陰性症状が改善する", "ドーパミンは妄想とは無関係である"], answer: 1, explain: "ドーパミン遮断薬が陽性症状を抑え、ドーパミンを増やすアンフェタミンが幻覚妄想を生じうることが根拠である。", difficulty: 2 },
    { type: "mcq", stem: "家族の批判・敵意・過度の巻き込みを指し、高い場合に統合失調症の再発率を高めるものはどれか。", choices: ["表出感情（EE）", "認知の三徴", "二重拘束", "学習性無力感"], answer: 0, explain: "表出感情（EE）。高EEの家庭では再発率が高く、素因ストレスモデルの好例。家族心理教育が有効。", difficulty: 3 },
    { type: "mcq", stem: "「多重人格」とも呼ばれ、複数の人格状態の交代と記憶の欠落を伴う障害はどれか。", choices: ["統合失調症", "解離性同一症（DID）", "境界性パーソナリティ障害", "双極性障害"], answer: 1, explain: "解離性同一症（DID）は解離症の一つで、統合失調症とは別物。混同しやすいので注意。", difficulty: 2 },
    { type: "mcq", stem: "神経学的に説明できない麻痺や失声などの運動・感覚症状を示し、詐病とは異なる障害はどれか。", choices: ["変換症（転換性障害）", "病気不安症", "解離性健忘", "強迫症"], answer: 0, explain: "変換症（転換性障害）は神経学的に説明できない症状を呈する。本人は実際に体験しており詐病とは異なる。", difficulty: 3 },
    { type: "mcq", stem: "神経性やせ症（拒食）の中核的特徴として最も適切なものはどれか。", choices: ["過食後の自己誘発嘔吐が中心", "体重増加への強い恐怖とボディイメージの歪み", "正常体重で代償行動を伴わない過食", "幻覚と妄想を伴う"], answer: 1, explain: "神経性やせ症は有意に低い体重、体重増加への強い恐怖、ボディイメージの歪みが中核。致死率が高い。", difficulty: 2 },
    { type: "mcq", stem: "物質使用障害における「耐性（tolerance）」の説明として正しいものはどれか。", choices: ["中止時に不快な症状が出ること", "同じ効果を得るのに必要な量が増えること", "強い使用欲求のこと", "使用を完全にやめられること"], answer: 1, explain: "耐性は同効果に必要な量が増えること。中止時の症状は離脱、強い欲求は渇望（craving）である。", difficulty: 2 },
    { type: "mcq", stem: "DSM-5 のパーソナリティ障害B群（劇的・情緒的）に含まれるものはどれか。", choices: ["回避性パーソナリティ障害", "境界性パーソナリティ障害", "シゾイドパーソナリティ障害", "強迫性パーソナリティ障害"], answer: 1, explain: "B群は境界性・反社会性・自己愛性・演技性。回避性と強迫性はC群、シゾイドはA群である。", difficulty: 2 },
    { type: "mcq", stem: "他者の権利を無視・侵害し、良心の呵責を欠き、サイコパシーと関連するパーソナリティ障害はどれか。", choices: ["自己愛性", "反社会性", "依存性", "演技性"], answer: 1, explain: "反社会性パーソナリティ障害（ASPD）。15歳以前の素行症が先行することが診断上の特徴である。", difficulty: 2 },
    { type: "mcq", stem: "自閉スペクトラム症（ASD）の2つの中核領域の組み合わせとして正しいものはどれか。", choices: ["不注意と多動・衝動性", "社会的コミュニケーションの障害と、限定的・反復的な行動/興味", "幻覚と妄想", "抑うつと躁"], answer: 1, explain: "ASDは①社会的コミュニケーション・対人相互作用の障害、②限定的反復的な行動・興味の2領域が中核である。", difficulty: 1 },
    { type: "mcq", stem: "注意欠如・多動症（ADHD）の診断について正しいものはどれか。", choices: ["症状は成人になって初めて現れる", "不注意と多動・衝動性を中核とし12歳以前に複数の場面で現れる", "幻聴が主症状である", "育て方の問題が直接の原因とされる"], answer: 1, explain: "ADHDは不注意・多動・衝動性を中核とし、12歳以前に複数場面で症状が現れることが要件。脳発達の特性に基づく。", difficulty: 2 },
  ],
});
