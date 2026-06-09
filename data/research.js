/* ============================================================
   心理学研究法  (research)
   ============================================================ */
PsychApp.registerModule({
  id: "research",
  title: "心理学研究法",
  emoji: "🔬",
  category: "found",
  tagline: "科学的方法・実験法・調査/観察法・相関と因果・妥当性と信頼性・再現性",
  overview: `<p>心理学は<strong>科学的方法（scientific method）</strong>によって心と行動を探究する。本分野では、理論から仮説を導き検証するサイクル、変数の操作的定義、実験法・観察法・調査法・相関研究の特徴と長短、研究の質を支える<strong>信頼性と妥当性</strong>、そして近年問題化した<strong>再現性危機</strong>とその対策（事前登録・オープンサイエンス）までを整理する。どの分野の知見も、この方法論の土台の上に成り立っている。</p>`,
  lessons: [
    {
      title: "科学的方法と研究の流れ — 理論・仮説・変数",
      body: `
        <p>科学的心理学の核心は、思いつきや権威ではなく<strong>経験的証拠（empirical evidence）</strong>によって主張の真偽を判定することにある。その手続きは循環的なサイクルとして描ける。</p>
        <h3>研究のサイクル</h3>
        <ol>
          <li><strong>理論 (theory)</strong>：多くの観察を統合して説明する体系。例：「ストレスは記憶を妨げる」。</li>
          <li><strong>仮説 (hypothesis)</strong>：理論から導かれる<em>検証可能</em>で反証可能な予測。例：「試験前にストレスを与えた群は単語再生数が少ない」。</li>
          <li><strong>検証 (test)</strong>：データを収集し仮説を確かめる（実験・観察・調査など）。</li>
          <li><strong>分析・解釈</strong>：結果に基づき理論を支持・修正・棄却する。新たな疑問が次の研究へ。</li>
        </ol>
        <div class="callout key"><b>反証可能性 (falsifiability)</b>：良い仮説は「もし◯◯なら結果は××のはず」と、観察によって<strong>否定されうる</strong>形をとる。否定されようがない主張は科学的仮説ではない（ポパー）。</div>
        <h3>変数 (variable)</h3>
        <p>変数とは、人や状況によって値が変わりうる測定対象である。実験では役割で区別する。</p>
        <table>
          <tr><th>変数</th><th>役割</th><th>例（睡眠と記憶の研究）</th></tr>
          <tr><td><b>独立変数 (IV)</b></td><td>研究者が<em>操作する</em>原因側の変数</td><td>睡眠時間（4時間／8時間）</td></tr>
          <tr><td><b>従属変数 (DV)</b></td><td>その効果として<em>測定する</em>結果側の変数</td><td>記憶テストの正答数</td></tr>
          <tr><td><b>剰余変数 (extraneous)</b></td><td>DVに影響しうる余計な変数</td><td>カフェイン摂取、時間帯</td></tr>
          <tr><td><b>統制変数 (control)</b></td><td>一定に保って影響を排除した変数</td><td>全員同じ室温・同じ課題</td></tr>
        </table>
        <div class="callout tip">覚え方：<strong>I</strong>ndependent は <strong>I</strong> manipulate（私が操作する）、<strong>D</strong>ependent は結果が IV に <strong>depend</strong> する（依存する）。</div>
        <h3>操作的定義 (operational definition)</h3>
        <p>「ストレス」「攻撃性」「知能」のような抽象概念（構成概念）は、そのままでは測れない。そこで<strong>具体的な測定・操作の手続きとして定義する</strong>のが操作的定義である。</p>
        <ul>
          <li>「ストレス」→「課題中の心拍数（bpm）」または「STAI 不安尺度の得点」。</li>
          <li>「攻撃性」→「ゲームで相手に与えた騒音の音量・時間」。</li>
          <li>「知能」→「WAIS の IQ 得点」。</li>
        </ul>
        <p>操作的定義があることで、他の研究者が同じ手続きで<strong>追試（再現）</strong>できる。定義が曖昧だと、結果の比較も再現もできない。</p>
      `,
      figure: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="rar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker></defs>
        <text x="240" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">研究のサイクル</text>
        <g text-anchor="middle" font-size="13" font-weight="700">
          <rect x="180" y="40" width="120" height="46" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="240" y="68">理論</text>
          <rect x="330" y="110" width="120" height="46" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="390" y="138">仮説</text>
          <rect x="180" y="180" width="120" height="46" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="240" y="208">検証（データ）</text>
          <rect x="30" y="110" width="120" height="46" rx="10" fill="#fdeccd" stroke="#f0a020"/><text x="90" y="132">分析・</text><text x="90" y="150">解釈</text>
        </g>
        <g stroke="#5b6cf0" stroke-width="2" fill="none" marker-end="url(#rar)">
          <path d="M300,66 C340,72 370,88 388,106"/>
          <path d="M388,158 C370,178 330,194 304,200"/>
          <path d="M178,202 C140,194 110,176 96,158"/>
          <path d="M92,108 C108,88 140,72 178,66"/>
        </g>
      </svg>`,
      figcaption: "理論→仮説→検証→分析・解釈が循環し、解釈は理論を修正してまた次の研究へつながる。",
      terms: [
        { term: "理論 (theory)", def: "多くの観察を統合的に説明する体系。仮説を生み出す源。" },
        { term: "仮説 (hypothesis)", def: "理論から導かれる、検証可能で反証可能な予測。" },
        { term: "独立変数 (IV)", def: "研究者が操作する原因側の変数。" },
        { term: "従属変数 (DV)", def: "効果として測定される結果側の変数。" },
        { term: "剰余変数／統制変数", def: "DVに影響しうる余計な変数（剰余）と、一定に保って排除した変数（統制）。" },
        { term: "操作的定義", def: "抽象概念を具体的な測定・操作の手続きとして定義すること。" },
        { term: "反証可能性", def: "仮説が観察によって否定されうること。科学的命題の条件。" },
      ],
    },
    {
      title: "信頼性と妥当性 — 測定と研究の質",
      body: `
        <p>研究の良し悪しは、その<strong>測定と結論がどれだけ信用できるか</strong>で決まる。鍵となる二つの概念が<strong>信頼性</strong>と<strong>妥当性</strong>である。両者は別物であり、混同してはならない。</p>
        <h3>信頼性 (reliability) — 一貫性・再現性</h3>
        <p>同じ条件で測れば<strong>同じ結果が安定して得られる</strong>こと。測定のブレの少なさである。</p>
        <ul>
          <li><strong>再検査信頼性</strong>：時間をおいて再測定しても結果が一致する。</li>
          <li><strong>内的整合性</strong>：尺度内の項目どうしが揃って同じものを測っている（クロンバックのα係数で評価）。</li>
          <li><strong>評定者間信頼性</strong>：複数の観察者の評定が一致する。</li>
        </ul>
        <h3>妥当性 (validity) — 本当に測りたいものを測れているか</h3>
        <p>妥当性は文脈により複数ある。研究法で特に重要なのは次の四つである。</p>
        <table>
          <tr><th>種類</th><th>意味</th></tr>
          <tr><td><b>内的妥当性</b></td><td>IVの操作が<em>本当にDVの変化の原因</em>と言えるか（交絡がないか）。</td></tr>
          <tr><td><b>外的妥当性</b></td><td>結果を他の人・状況・時代に<em>一般化</em>できるか。</td></tr>
          <tr><td><b>構成概念妥当性</b></td><td>測定や操作が、意図した<em>構成概念そのもの</em>を捉えているか。</td></tr>
          <tr><td><b>生態学的妥当性</b></td><td>結果が<em>現実の日常場面</em>に当てはまるか（実験室の人工性の逆）。</td></tr>
        </table>
        <div class="callout key"><b>信頼性と妥当性の関係</b>：信頼性は妥当性の<strong>必要条件だが十分条件ではない</strong>。安定して測れても（信頼性◯）、測っているものが的外れなら（妥当性×）意味がない。逆に、ブレる測定は妥当でありえない。</div>
        <div class="callout example"><b>的当ての比喩</b>：信頼性＝矢が同じ場所に集まる（精密）。妥当性＝矢が中心（標的）に当たる（正確）。中心からズレた一点に集中するのは「信頼性は高いが妥当性は低い」状態である。</div>
        <h3>妥当性への主な脅威</h3>
        <ul>
          <li><strong>交絡変数 (confound)</strong>：IV以外の要因がDVに影響し、因果の解釈を乱す（内的妥当性への最大の脅威）。</li>
          <li><strong>成熟・歴史・反復測定の練習効果</strong>：時間経過や繰り返し自体が変化を生む。</li>
          <li><strong>選択バイアス</strong>：群分けが偏ると、もともとの差と効果が区別できない。</li>
          <li><strong>サンプルの偏り</strong>：特殊な対象（例：欧米の大学生＝WEIRD）に限ると外的妥当性が下がる。</li>
        </ul>
      `,
      figure: `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="230" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">信頼性 × 妥当性（的当ての比喩）</text>
        <g>
          <text x="80" y="48" text-anchor="middle" font-size="11" font-weight="700">高信頼・低妥当</text>
          <circle cx="80" cy="120" r="48" fill="#e9ebfe" stroke="#9aa6e8"/><circle cx="80" cy="120" r="30" fill="#fff" stroke="#9aa6e8"/><circle cx="80" cy="120" r="12" fill="#fff" stroke="#9aa6e8"/>
          <circle cx="104" cy="92" r="4" fill="#e0566b"/><circle cx="110" cy="96" r="4" fill="#e0566b"/><circle cx="106" cy="100" r="4" fill="#e0566b"/>
        </g>
        <g>
          <text x="230" y="48" text-anchor="middle" font-size="11" font-weight="700">低信頼・低妥当</text>
          <circle cx="230" cy="120" r="48" fill="#e9ebfe" stroke="#9aa6e8"/><circle cx="230" cy="120" r="30" fill="#fff" stroke="#9aa6e8"/><circle cx="230" cy="120" r="12" fill="#fff" stroke="#9aa6e8"/>
          <circle cx="200" cy="95" r="4" fill="#e0566b"/><circle cx="258" cy="100" r="4" fill="#e0566b"/><circle cx="215" cy="150" r="4" fill="#e0566b"/>
        </g>
        <g>
          <text x="380" y="48" text-anchor="middle" font-size="11" font-weight="700">高信頼・高妥当</text>
          <circle cx="380" cy="120" r="48" fill="#e9ebfe" stroke="#9aa6e8"/><circle cx="380" cy="120" r="30" fill="#fff" stroke="#9aa6e8"/><circle cx="380" cy="120" r="12" fill="#fff" stroke="#9aa6e8"/>
          <circle cx="378" cy="118" r="4" fill="#15c4a8"/><circle cx="383" cy="122" r="4" fill="#15c4a8"/><circle cx="380" cy="124" r="4" fill="#15c4a8"/>
        </g>
        <text x="230" y="205" text-anchor="middle" font-size="11" fill="#5b6478">信頼性＝集まり具合（精密）、妥当性＝中心に当たるか（正確）</text>
      </svg>`,
      figcaption: "信頼性が高くても妥当性が高いとは限らない。望ましいのは右の「集まっていて中心に当たる」状態。",
      terms: [
        { term: "信頼性 (reliability)", def: "同じ測定を繰り返したとき結果が安定・一貫すること。" },
        { term: "クロンバックのα", def: "尺度内の項目の内的整合性を表す信頼性の指標。" },
        { term: "妥当性 (validity)", def: "測定や研究が本当に意図した対象を捉えているか。" },
        { term: "内的妥当性", def: "IVの操作が本当にDVの変化の原因と言えるか。交絡がないこと。" },
        { term: "外的妥当性", def: "結果を他の人・状況・時代へ一般化できる程度。" },
        { term: "構成概念妥当性", def: "操作や測定が意図した構成概念そのものを捉えているか。" },
        { term: "生態学的妥当性", def: "結果が現実の日常場面に当てはまる程度。" },
        { term: "交絡変数 (confound)", def: "IV以外でDVに影響し因果解釈を乱す変数。内的妥当性の最大の脅威。" },
      ],
    },
    {
      title: "実験法 — 因果を確かめる王道",
      body: `
        <p>実験法は、<strong>独立変数を意図的に操作し</strong>、それ以外を統制したうえで従属変数の変化を観察する方法である。他の方法と決定的に違うのは、<strong>因果関係（causation）を強く主張できる</strong>点にある。</p>
        <h3>実験群と統制群、無作為割当</h3>
        <ul>
          <li><strong>実験群 (experimental group)</strong>：操作（処置）を受ける群。</li>
          <li><strong>統制群 (control group)</strong>：操作を受けない比較の基準となる群。</li>
          <li><strong>無作為割当 (random assignment)</strong>：参加者を<em>偶然</em>によって各群へ振り分ける。これにより、もともとの個人差（年齢・能力・性格など）が群間で<strong>平均的に等しくなる</strong>ことが期待され、交絡が抑えられる。</li>
        </ul>
        <div class="callout warn"><b>無作為割当 ≠ 無作為抽出</b>。無作為<strong>割当</strong>は集めた参加者を群へ偶然に振り分けること（内的妥当性に寄与）。無作為<strong>抽出</strong>は母集団から標本を偶然に選ぶこと（外的妥当性に寄与）。役割が違う。</div>
        <h3>計画（デザイン）</h3>
        <table>
          <tr><th>計画</th><th>特徴</th><th>長所／短所</th></tr>
          <tr><td><b>被験者間計画</b></td><td>各条件を別々の人が受ける</td><td>持ち越し効果なし／個人差の影響が混入</td></tr>
          <tr><td><b>被験者内計画</b></td><td>同じ人が全条件を受ける</td><td>個人差を統制／順序・練習・疲労効果が生じる</td></tr>
          <tr><td><b>要因計画</b></td><td>複数のIVを組み合わせる（例 2×2）</td><td>交互作用を検討できる</td></tr>
        </table>
        <p>被験者内計画の<strong>順序効果</strong>には、提示順を体系的に入れ替える<strong>カウンターバランス</strong>で対処する。</p>
        <h3>バイアスを防ぐ手立て</h3>
        <ul>
          <li><strong>プラセボ統制</strong>：効果のない偽処置（偽薬など）の群を置き、「効くと期待した」ことによる効果（プラセボ効果）と本当の効果を区別する。</li>
          <li><strong>単盲検 (single-blind)</strong>：参加者がどの群かを知らない。</li>
          <li><strong>二重盲検 (double-blind)</strong>：参加者<em>も</em>実験者<em>も</em>どの群かを知らない。最も厳密。</li>
          <li><strong>デマンド特性 (demand characteristics)</strong>：参加者が実験の意図を察し「期待に沿うよう」振る舞ってしまう手がかり。盲検化やカバーストーリーで抑える。</li>
        </ul>
        <div class="callout example"><b>実験者効果（ローゼンタール効果）</b>：実験者の期待が無意識に参加者へ伝わり結果を歪める現象。ローゼンタールとフォーデ（Rosenthal &amp; Fode, 1963）の研究では、「賢い系統」と告げられたラットを扱った実験者の方が良い迷路学習成績を報告した。教育場面の<strong>ピグマリオン効果</strong>も同根。二重盲検はこれを防ぐ。</div>
      `,
      figure: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="ear" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6478"/></marker></defs>
        <text x="250" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">実験デザイン（IV → DV）</text>
        <g text-anchor="middle" font-size="12" font-weight="700">
          <rect x="20" y="95" width="110" height="60" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="75" y="120">参加者</text><text x="75" y="140" font-size="10" font-weight="400">無作為割当</text>
          <rect x="200" y="45" width="130" height="50" rx="10" fill="#fdeccd" stroke="#f0a020"/><text x="265" y="68">実験群</text><text x="265" y="84" font-size="10" font-weight="400">処置あり（IV）</text>
          <rect x="200" y="155" width="130" height="50" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="265" y="178">統制群</text><text x="265" y="194" font-size="10" font-weight="400">処置なし／偽薬</text>
          <rect x="390" y="95" width="100" height="60" rx="10" fill="#fbe0e4" stroke="#e0566b"/><text x="440" y="120">DVを</text><text x="440" y="140">測定・比較</text>
        </g>
        <g stroke="#5b6478" stroke-width="2" fill="none" marker-end="url(#ear)">
          <path d="M130,115 C160,100 175,85 198,72"/>
          <path d="M130,135 C160,150 175,165 198,178"/>
          <path d="M330,70 C355,82 365,92 388,108"/>
          <path d="M330,180 C355,168 365,158 388,142"/>
        </g>
      </svg>`,
      figcaption: "参加者を無作為に実験群と統制群へ割り当て、IVの有無だけを変えてDVを比較する。差はIVの効果と解釈できる。",
      terms: [
        { term: "実験法", def: "IVを操作し他を統制してDVの変化を見る方法。因果を強く主張できる。" },
        { term: "無作為割当 (random assignment)", def: "参加者を偶然で各群に振り分け、個人差を平均的に等しくする手続き。" },
        { term: "統制群／実験群", def: "比較の基準となる無処置群と、処置を受ける群。" },
        { term: "被験者間／被験者内計画", def: "条件を別々の人が受ける計画／同じ人が全条件を受ける計画。" },
        { term: "カウンターバランス", def: "順序効果を相殺するため提示順を体系的に入れ替えること。" },
        { term: "二重盲検法", def: "参加者も実験者もどの群かを知らない手続き。バイアスを最小化。" },
        { term: "プラセボ効果", def: "効くと期待することで生じる効果。偽薬統制で本当の効果と区別する。" },
        { term: "デマンド特性", def: "参加者が実験意図を察し期待に沿って振る舞う手がかり。" },
        { term: "実験者効果（ローゼンタール効果）", def: "実験者の期待が無意識に伝わり結果を歪める現象。" },
      ],
    },
    {
      title: "非実験的方法 — 観察・調査・面接・事例",
      body: `
        <p>すべての問いを実験で扱えるわけではない。倫理的・現実的に操作できない変数（例：喫煙、虐待経験）も多く、実験以外の方法が不可欠である。これらは因果の主張は弱いが、<strong>現実場面の記述と仮説生成</strong>に優れる。</p>
        <h3>観察法</h3>
        <ul>
          <li><strong>自然観察 (naturalistic observation)</strong>：操作を加えず、ありのままの行動を記録する。生態学的妥当性が高い。</li>
          <li><strong>参加観察 (participant observation)</strong>：観察者が対象集団に加わって内側から記録する。</li>
        </ul>
        <div class="callout warn"><b>反応性 (reactivity)</b>：観察されていると気づくと人は普段と違う振る舞いをする（ホーソン効果）。これを抑えるため、目立たない観察や<strong>非侵襲的測度</strong>が用いられる。観察者の主観が入る<strong>観察者バイアス</strong>にも注意。</div>
        <h3>質問紙調査 (survey)</h3>
        <p>多数の人の態度・意見・行動を効率的に集める。鍵は<strong>サンプリング（標本抽出）</strong>である。</p>
        <ul>
          <li><strong>母集団 (population)</strong>：知りたい対象全体。<strong>標本 (sample)</strong>：実際に調べる一部。</li>
          <li><strong>無作為抽出 (random sampling)</strong>：母集団の全員が等確率で選ばれる。これにより<strong>標本の代表性</strong>が高まり、結果を母集団へ一般化できる（外的妥当性）。</li>
          <li>偏った抽出（例：街頭の協力者だけ、ネット回答者だけ）は<strong>サンプリングバイアス</strong>を生む。1936年『リテラリー・ダイジェスト』誌の大統領選予測の失敗は、富裕層に偏った標本が原因とされる古典例である。</li>
        </ul>
        <div class="callout tip"><b>良い質問項目</b>：①一つの項目で一つのことだけ問う（ダブルバーレル質問を避ける）、②誘導しない中立的表現、③回答者が答えやすい明確さ。社会的に望ましく答えてしまう<strong>社会的望ましさバイアス</strong>にも配慮する。</div>
        <h3>面接法・事例研究</h3>
        <ul>
          <li><strong>面接法 (interview)</strong>：構造化・半構造化・非構造化に分かれる。深い情報が得られるが、量的比較や一般化は難しい。</li>
          <li><strong>事例研究 (case study)</strong>：一人または少数を深く詳細に調べる。稀少例（例：記憶障害患者 H.M.、脳損傷患者フィネアス・ゲージ）から貴重な知見が得られるが、一般化には慎重を要する。</li>
        </ul>
        <h3>時間軸による研究デザイン</h3>
        <table>
          <tr><th>デザイン</th><th>方法</th><th>注意点</th></tr>
          <tr><td><b>横断研究</b></td><td>異なる年齢の人を同時期に比較</td><td>速いが、世代差（コホート効果）と発達変化が混同される</td></tr>
          <tr><td><b>縦断研究</b></td><td>同じ人を長期間追跡</td><td>発達変化を直接見られるが、時間・費用・脱落が問題</td></tr>
          <tr><td><b>コホート研究</b></td><td>同時期出生など共通属性の集団を追跡</td><td>世代特有の影響を分離しやすい</td></tr>
        </table>
      `,
      terms: [
        { term: "自然観察", def: "操作を加えず、ありのままの行動を記録する方法。生態学的妥当性が高い。" },
        { term: "反応性 (reactivity)", def: "観察されていると気づいて普段と違う行動をする現象。ホーソン効果。" },
        { term: "母集団／標本", def: "知りたい対象全体（母集団）と、実際に調べる一部（標本）。" },
        { term: "無作為抽出", def: "母集団の全員が等確率で選ばれる抽出。標本の代表性を高める。" },
        { term: "サンプリングバイアス", def: "偏った抽出により標本が母集団を代表しなくなる誤り。" },
        { term: "ダブルバーレル質問", def: "一つの項目で二つのことを同時に尋ねる不適切な質問。" },
        { term: "事例研究 (case study)", def: "個人や少数を深く詳細に調べる方法。一般化には慎重を要する。" },
        { term: "横断研究／縦断研究", def: "異年齢を同時期比較する横断と、同一対象を長期追跡する縦断。" },
      ],
    },
    {
      title: "相関研究と因果 — 「相関は因果を意味しない」",
      body: `
        <p>相関研究は、二つ以上の変数が<strong>どの程度・どの向きで一緒に変動するか</strong>を調べる。変数を操作せず、自然に存在する関係を観察する点で実験と異なる。</p>
        <h3>散布図と相関係数</h3>
        <p>二変数の関係は<strong>散布図 (scatter plot)</strong>で可視化でき、強さと向きは<strong>相関係数 r</strong>（−1〜+1）で表す。</p>
        <ul>
          <li><strong>正の相関</strong>（r > 0）：一方が増えると他方も増える（例：勉強時間と成績）。</li>
          <li><strong>負の相関</strong>（r < 0）：一方が増えると他方は減る（例：欠席日数と成績）。</li>
          <li><strong>無相関</strong>（r ≈ 0）：体系的な関係がない。</li>
        </ul>
        <p>|r| が1に近いほど関係は強い（点が直線に近い）。0に近いほど弱い。なお r は<strong>直線的（線形）関係</strong>の指標であり、U字型のような曲線関係は捉えにくい。</p>
        <div class="callout key"><b>相関は因果を意味しない (correlation ≠ causation)</b>。AとBが相関しても、AがBの原因とは限らない。理由は二つ。</div>
        <h3>相関だけでは因果を言えない二つの理由</h3>
        <ol>
          <li><strong>方向性の問題 (directionality)</strong>：A→B か B→A か区別できない。例：「自尊心と成績」が相関しても、自尊心が成績を上げるのか、成績が自尊心を上げるのか不明。</li>
          <li><strong>第三変数問題 (third variable)</strong>：観測していない第三の変数CがAもBも引き起こしている可能性。例：「アイスクリームの売上」と「水難事故」は正相関するが、原因は両方を増やす<em>気温（暑さ）</em>という第三変数である。</li>
        </ol>
        <div class="callout example"><b>古典例</b>：ある町で「教会の数」と「犯罪件数」が正相関した。教会が犯罪を生むのではなく、第三変数「人口」が両方を増やしていた。相関の解釈では常に交絡（第三変数）を疑う。</div>
        <h3>では相関研究は無意味か</h3>
        <p>否。相関研究は、<strong>操作が不可能・非倫理的な変数</strong>（喫煙とがん、ストレスと健康など）を扱え、<strong>予測</strong>に役立ち、実験すべき仮説を見つける出発点になる。喫煙と肺がんの関係も、多数の相関・縦断研究の積み重ねが因果の確信を支えた。</p>
      `,
      figure: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="260" y="18" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">散布図と相関</text>
        <g font-size="11" font-weight="700" text-anchor="middle">
          <text x="80" y="38">正の相関 (r≈+0.8)</text>
          <text x="260" y="38">無相関 (r≈0)</text>
          <text x="440" y="38">負の相関 (r≈−0.8)</text>
        </g>
        <g stroke="#9aa6e8" stroke-width="1.5">
          <line x1="20" y1="170" x2="20" y2="50"/><line x1="20" y1="170" x2="140" y2="170"/>
          <line x1="200" y1="170" x2="200" y2="50"/><line x1="200" y1="170" x2="320" y2="170"/>
          <line x1="380" y1="170" x2="380" y2="50"/><line x1="380" y1="170" x2="500" y2="170"/>
        </g>
        <g fill="#5b6cf0">
          <circle cx="35" cy="158" r="3.5"/><circle cx="50" cy="150" r="3.5"/><circle cx="60" cy="140" r="3.5"/><circle cx="78" cy="128" r="3.5"/><circle cx="90" cy="118" r="3.5"/><circle cx="105" cy="100" r="3.5"/><circle cx="118" cy="86" r="3.5"/><circle cx="130" cy="70" r="3.5"/>
        </g>
        <g fill="#5b6478">
          <circle cx="218" cy="90" r="3.5"/><circle cx="240" cy="140" r="3.5"/><circle cx="258" cy="70" r="3.5"/><circle cx="270" cy="150" r="3.5"/><circle cx="285" cy="100" r="3.5"/><circle cx="300" cy="125" r="3.5"/><circle cx="228" cy="120" r="3.5"/><circle cx="310" cy="80" r="3.5"/>
        </g>
        <g fill="#e0566b">
          <circle cx="395" cy="70" r="3.5"/><circle cx="408" cy="86" r="3.5"/><circle cx="420" cy="100" r="3.5"/><circle cx="438" cy="118" r="3.5"/><circle cx="450" cy="128" r="3.5"/><circle cx="465" cy="140" r="3.5"/><circle cx="478" cy="150" r="3.5"/><circle cx="492" cy="158" r="3.5"/>
        </g>
      </svg>`,
      figcaption: "点が右上がりなら正、右下がりなら負、散らばっていれば無相関。直線に近いほど|r|は大きい。",
      terms: [
        { term: "相関研究", def: "変数を操作せず、変数間の共変動を調べる方法。因果は主張できない。" },
        { term: "散布図", def: "二変数の関係を点で可視化した図。" },
        { term: "相関係数 r", def: "直線的関係の強さと向きを−1〜+1で表す指標。" },
        { term: "正の相関／負の相関", def: "同方向に変動するのが正、逆方向に変動するのが負の相関。" },
        { term: "相関は因果を意味しない", def: "二変数の相関からは因果関係を直ちに結論できないという原則。" },
        { term: "方向性の問題", def: "A→BかB→Aか、相関だけでは原因の向きを決められないこと。" },
        { term: "第三変数問題", def: "観測外の第三変数が両変数を引き起こしている可能性。" },
      ],
    },
    {
      title: "測定の尺度水準とバイアス",
      body: `
        <p>データの数値は、それが<strong>どんな性質の尺度で測られたか</strong>によって許される演算や統計が変わる。スティーブンスによる四つの<strong>尺度水準 (levels of measurement)</strong>を区別する。</p>
        <table>
          <tr><th>尺度</th><th>性質</th><th>可能な操作</th><th>例</th></tr>
          <tr><td><b>名義尺度</b></td><td>分類のみ（順序なし）</td><td>＝／≠、度数</td><td>血液型、性別、出身地</td></tr>
          <tr><td><b>順序尺度</b></td><td>順位はあるが間隔は不定</td><td>大小比較、中央値</td><td>成績順位、満足度の段階</td></tr>
          <tr><td><b>間隔尺度</b></td><td>間隔が等しいが絶対0なし</td><td>加減、平均</td><td>摂氏温度、知能指数</td></tr>
          <tr><td><b>比率尺度</b></td><td>等間隔＋絶対0あり</td><td>加減乗除、比の解釈</td><td>反応時間、体重、年齢</td></tr>
        </table>
        <div class="callout key"><b>絶対0の有無が境目</b>。間隔尺度の0は「無」を意味しない（0℃は温度がないわけではない）ので「20℃は10℃の2倍暑い」とは言えない。比率尺度の0は真の無を意味するので「4秒は2秒の2倍」と言える。覚え方：<strong>名・順・間・比</strong>の順に情報量が増える。</div>
        <h3>研究を歪める主なバイアス</h3>
        <p>バイアスはどの研究法にも潜む。代表的なものを整理する。</p>
        <ul>
          <li><strong>社会的望ましさバイアス</strong>：望ましく見えるよう回答を歪める（例：飲酒量を過少申告）。</li>
          <li><strong>確証バイアス</strong>：自分の仮説に合う証拠ばかり集め、反証を軽視する。</li>
          <li><strong>選択バイアス／サンプリングバイアス</strong>：標本が母集団を代表しない。</li>
          <li><strong>観察者バイアス・実験者効果</strong>：研究者の期待が観察・記録を歪める。</li>
          <li><strong>反応バイアス</strong>：内容に関係なく「はい」や中央に偏って答える傾向（黙従傾向・中心化傾向）。</li>
          <li><strong>回顧バイアス</strong>：過去を現在の状態に合わせて思い出してしまう。</li>
        </ul>
        <div class="callout tip">バイアスへの基本対策は、<strong>盲検化・無作為化・標準化された手続き・操作的定義・事前登録</strong>である。次のレッスンで扱う。</div>
      `,
      figure: `<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="250" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">尺度水準（情報量が増える順）</text>
        <defs><marker id="sar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker></defs>
        <g text-anchor="middle" font-size="12" font-weight="700">
          <rect x="15" y="55" width="105" height="62" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="67" y="82">名義</text><text x="67" y="102" font-size="9" font-weight="400">分類のみ</text>
          <rect x="140" y="55" width="105" height="62" rx="10" fill="#dfe4fc" stroke="#5b6cf0"/><text x="192" y="82">順序</text><text x="192" y="102" font-size="9" font-weight="400">＋順位</text>
          <rect x="265" y="55" width="105" height="62" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="317" y="82">間隔</text><text x="317" y="102" font-size="9" font-weight="400">＋等間隔</text>
          <rect x="390" y="55" width="105" height="62" rx="10" fill="#c4f0e4" stroke="#15c4a8"/><text x="442" y="82">比率</text><text x="442" y="102" font-size="9" font-weight="400">＋絶対0</text>
        </g>
        <g stroke="#5b6cf0" stroke-width="2" marker-end="url(#sar)">
          <line x1="122" y1="86" x2="137" y2="86"/><line x1="247" y1="86" x2="262" y2="86"/><line x1="372" y1="86" x2="387" y2="86"/>
        </g>
        <text x="250" y="150" text-anchor="middle" font-size="11" fill="#5b6478">右へ行くほど許される統計操作が増える</text>
      </svg>`,
      figcaption: "名義→順序→間隔→比率の順に情報量が増す。比率尺度のみ「○倍」という比の解釈ができる。",
      terms: [
        { term: "名義尺度", def: "分類のみで順序を持たない尺度（血液型・性別など）。" },
        { term: "順序尺度", def: "順位はあるが間隔が一定でない尺度（順位・満足度段階）。" },
        { term: "間隔尺度", def: "間隔が等しいが絶対0を持たない尺度（摂氏温度・IQ）。" },
        { term: "比率尺度", def: "等間隔かつ絶対0を持ち、比の解釈ができる尺度（反応時間・体重）。" },
        { term: "社会的望ましさバイアス", def: "望ましく見えるよう回答を歪める傾向。" },
        { term: "確証バイアス", def: "自分の仮説に合う証拠ばかり集め反証を軽視する傾向。" },
      ],
    },
    {
      title: "再現性問題とオープンサイエンス・研究倫理",
      body: `
        <p>2010年代、有名な心理学知見の多くが<strong>追試で再現できない</strong>ことが相次いで報告され、<strong>再現性危機（replication crisis）</strong>と呼ばれた。2015年のオープン・サイエンス・コラボレーションによる大規模追試では、再現に成功した研究は約4割にとどまった。これは心理学の自浄を促す転機となった。</p>
        <h3>再現性を損なう問題ある慣行（QRPs）</h3>
        <ul>
          <li><strong>p-hacking</strong>：有意（p < .05）になるまで、分析・変数・除外基準・サンプル追加を試行錯誤すること。偶然の「当たり」を本物に見せてしまう。</li>
          <li><strong>HARKing (Hypothesizing After the Results are Known)</strong>：結果を見た<em>後で</em>、あたかも最初からその仮説を立てていたかのように報告すること。探索を検証に偽装する。</li>
          <li><strong>出版バイアス (publication bias)</strong>：「有意な結果」「新奇な結果」ばかりが雑誌に載り、否定的・無効果の結果は埋もれる（お蔵入り問題、ファイルドロワー問題）。文献全体が偏る。</li>
          <li><strong>低い検定力</strong>：標本が小さすぎて、本物の効果も検出できず、偶然の効果が過大評価されやすい。</li>
        </ul>
        <div class="callout warn"><b>なぜ起きるか</b>：研究者は「新奇で有意な結果」を出すよう強く動機づけられている（publish or perish）。悪意がなくても、自由度の高い分析の中で都合の良い選択を重ねれば、偽陽性が量産されうる。</div>
        <h3>対策：オープンサイエンスの実践</h3>
        <ul>
          <li><strong>事前登録 (preregistration)</strong>：データ収集の<em>前</em>に、仮説・計画・分析手順を公開リポジトリ（OSFなど）へ登録する。これにより p-hacking と HARKing を構造的に防ぐ。</li>
          <li><strong>登録報告 (Registered Reports)</strong>：結果が出る前に方法を査読し、結果に関わらず掲載を約束する出版形式。出版バイアスを抑える。</li>
          <li><strong>データ・コードの公開</strong>：他者が検証・再分析できるよう透明化する。</li>
          <li><strong>直接的追試の奨励</strong>と、十分な検定力を確保する事前のサンプルサイズ設計。</li>
        </ul>
        <div class="callout key"><b>再現の二種類</b>：同じデータ・手続きで結果を確かめる<strong>再現 (reproducibility)</strong>と、新しいデータで同じ効果が出るか確かめる<strong>追試 (replication)</strong>。科学的信頼性は後者に強く支えられる。</div>
        <h3>研究倫理の要点（再掲）</h3>
        <p>人を対象とする研究では、データの誠実さと参加者の保護が両輪である。</p>
        <ul>
          <li><strong>インフォームド・コンセント</strong>（説明と自由意思による同意）、<strong>参加の任意性と離脱の自由</strong>。</li>
          <li><strong>害の最小化</strong>、<strong>守秘・プライバシー保護</strong>、欺瞞の制限と<strong>デブリーフィング</strong>。</li>
          <li><strong>倫理審査委員会（IRB）</strong>の承認、動物では<strong>3R原則</strong>（Replacement, Reduction, Refinement）。</li>
          <li><strong>研究公正</strong>：捏造（fabrication）・改ざん（falsification）・盗用（plagiarism）＝FFP は重大な不正行為であり、絶対に許されない。</li>
        </ul>
      `,
      figure: `<svg viewBox="0 0 500 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="250" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">問題ある慣行 と オープンサイエンス対策</text>
        <g font-size="11">
          <rect x="20" y="45" width="210" height="150" rx="10" fill="#fbe0e4" stroke="#e0566b"/>
          <text x="125" y="66" text-anchor="middle" font-weight="800" fill="#b03048">問題ある慣行 (QRPs)</text>
          <text x="35" y="92" font-weight="700">p-hacking</text><text x="35" y="108" fill="#5b6478">有意になるまで分析を探す</text>
          <text x="35" y="130" font-weight="700">HARKing</text><text x="35" y="146" fill="#5b6478">結果を見て後付けで仮説化</text>
          <text x="35" y="168" font-weight="700">出版バイアス</text><text x="35" y="184" fill="#5b6478">有意な結果ばかり掲載</text>
        </g>
        <g font-size="11">
          <rect x="270" y="45" width="210" height="150" rx="10" fill="#d8f6ee" stroke="#15c4a8"/>
          <text x="375" y="66" text-anchor="middle" font-weight="800" fill="#0a8c76">オープンサイエンス対策</text>
          <text x="285" y="92" font-weight="700">事前登録</text><text x="285" y="108" fill="#5b6478">収集前に仮説・分析を公開</text>
          <text x="285" y="130" font-weight="700">登録報告</text><text x="285" y="146" fill="#5b6478">結果前に方法を査読・掲載確約</text>
          <text x="285" y="168" font-weight="700">データ公開・追試</text><text x="285" y="184" fill="#5b6478">透明化と十分な検定力</text>
        </g>
      </svg>`,
      figcaption: "左の悪しき慣行が偽陽性を量産する。右の事前登録・登録報告・データ公開がそれを構造的に抑える。",
      terms: [
        { term: "再現性危機", def: "有名な知見の多くが追試で再現できないと判明した一連の問題。" },
        { term: "p-hacking", def: "有意になるまで分析を試行錯誤し偽陽性を生む不適切な慣行。" },
        { term: "HARKing", def: "結果を見た後で仮説を後付けし、探索を検証に偽装すること。" },
        { term: "出版バイアス", def: "有意・新奇な結果ばかりが掲載され文献が偏ること。" },
        { term: "事前登録 (preregistration)", def: "データ収集前に仮説・計画・分析を公開登録する手続き。" },
        { term: "登録報告 (Registered Reports)", def: "結果前に方法を査読し掲載を約束する出版形式。" },
        { term: "追試 (replication)", def: "新しいデータで同じ効果が出るか確かめること。" },
        { term: "FFP", def: "捏造・改ざん・盗用という重大な研究不正の総称。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "研究者が意図的に操作する原因側の変数を何というか。", choices: ["従属変数", "独立変数", "剰余変数", "媒介変数"], answer: 1, explain: "独立変数（IV）は研究者が操作する原因側の変数。その効果として測定される結果側が従属変数（DV）である。", difficulty: 1 },
    { type: "mcq", stem: "「ストレス」を「課題中の心拍数（bpm）」と定義することは何にあたるか。", choices: ["反証可能性", "操作的定義", "無作為割当", "構成概念妥当性"], answer: 1, explain: "操作的定義とは、抽象概念を具体的な測定・操作の手続きとして定義すること。これにより追試が可能になる。", difficulty: 1 },
    { type: "mcq", stem: "「良い仮説は観察によって否定されうる形でなければならない」という条件を何というか。", choices: ["信頼性", "再現性", "反証可能性", "代表性"], answer: 2, explain: "反証可能性（falsifiability）はポパーが強調した科学的命題の条件。否定されようがない主張は科学的仮説とは言えない。", difficulty: 2 },
    { type: "mcq", stem: "同じ測定を繰り返したとき結果が安定して一致する性質を何というか。", choices: ["妥当性", "信頼性", "客観性", "一般化可能性"], answer: 1, explain: "信頼性（reliability）は測定の一貫性・再現性を指す。何を測っているかが正しいかどうか（妥当性）とは別概念である。", difficulty: 1 },
    { type: "mcq", stem: "信頼性と妥当性の関係として正しいものはどれか。", choices: ["妥当なら必ず信頼できるが、その逆は成り立たない", "信頼できれば必ず妥当である", "両者は完全に同じ概念である", "信頼性は妥当性の十分条件である"], answer: 0, explain: "妥当な測定は必然的に安定している（妥当→信頼）。しかし安定して測れても的外れなら妥当ではない。信頼性は妥当性の必要条件だが十分条件ではない。", difficulty: 3 },
    { type: "mcq", stem: "「IVの操作が本当にDVの変化の原因と言えるか（交絡がないか）」に関わる妥当性はどれか。", choices: ["外的妥当性", "内的妥当性", "生態学的妥当性", "表面的妥当性"], answer: 1, explain: "内的妥当性は、観察された効果が本当にIVによるものか（交絡変数で説明されないか）を問う。実験法が重視する妥当性である。", difficulty: 2 },
    { type: "mcq", stem: "実験結果を他の人々・状況・時代へ一般化できる程度を表す妥当性はどれか。", choices: ["内的妥当性", "構成概念妥当性", "外的妥当性", "内容的妥当性"], answer: 2, explain: "外的妥当性は結果の一般化可能性を指す。特殊な標本（例：欧米の大学生）に限ると外的妥当性は下がる。", difficulty: 2 },
    { type: "mcq", stem: "IV以外の要因がDVに影響し、因果の解釈を乱す変数を何というか。", choices: ["統制変数", "従属変数", "交絡変数", "潜在変数"], answer: 2, explain: "交絡変数（confound）はIVと混ざってDVに影響し、内的妥当性を脅かす最大の要因である。", difficulty: 2 },
    { type: "mcq", stem: "参加者を偶然によって実験群・統制群へ振り分け、個人差を平均的に等しくする手続きはどれか。", choices: ["無作為抽出", "無作為割当", "層化抽出", "カウンターバランス"], answer: 1, explain: "無作為割当（random assignment）は集めた参加者を偶然で各群に振り分ける。これにより交絡が抑えられ、内的妥当性が高まる。", difficulty: 2 },
    { type: "mcq", stem: "無作為抽出（random sampling）が主に高めるものはどれか。", choices: ["内的妥当性", "外的妥当性（一般化可能性）", "信頼性", "構成概念妥当性"], answer: 1, explain: "無作為抽出は母集団から標本を等確率で選び、標本の代表性すなわち外的妥当性を高める。群への振り分けである無作為割当（内的妥当性に寄与）とは役割が異なる。", difficulty: 3 },
    { type: "mcq", stem: "同じ参加者が全ての条件を経験する実験計画を何というか。", choices: ["被験者間計画", "被験者内計画", "横断計画", "準実験計画"], answer: 1, explain: "被験者内計画は同一人物が全条件を受けるため個人差を統制できるが、順序・練習・疲労効果が生じうる。", difficulty: 2 },
    { type: "mcq", stem: "被験者内計画で生じる順序効果に対処するため、提示順を体系的に入れ替える手続きはどれか。", choices: ["プラセボ統制", "カウンターバランス", "デブリーフィング", "盲検化"], answer: 1, explain: "カウンターバランスは条件の提示順を組織的に入れ替え、順序効果が特定条件に偏らないようにする。", difficulty: 2 },
    { type: "mcq", stem: "参加者も実験者も、どの参加者がどの群かを知らない統制法を何というか。", choices: ["単盲検法", "二重盲検法", "自然観察", "事前登録"], answer: 1, explain: "二重盲検法は参加者と実験者の双方を盲検にし、プラセボ効果と実験者効果の双方を最小化する最も厳密な手続きである。", difficulty: 2 },
    { type: "mcq", stem: "実験者の期待が無意識に参加者へ伝わって結果を歪める現象を何と呼ぶか。", choices: ["ホーソン効果", "実験者効果（ローゼンタール効果）", "プラセボ効果", "デマンド特性"], answer: 1, explain: "ローゼンタールが示した実験者効果は、研究者の期待が結果に影響する現象。教育場面のピグマリオン効果も同根で、二重盲検で防ぐ。", difficulty: 2 },
    { type: "mcq", stem: "参加者が実験の意図を察し、期待に沿うよう振る舞ってしまう手がかりを何というか。", choices: ["デマンド特性", "確証バイアス", "回顧バイアス", "第三変数"], answer: 0, explain: "デマンド特性（demand characteristics）は参加者が研究目的を推測して行動を変えること。盲検化やカバーストーリーで抑える。", difficulty: 2 },
    { type: "mcq", stem: "観察されていることに気づいて普段と違う行動をしてしまう現象を何というか。", choices: ["反応性（ホーソン効果）", "成熟効果", "選択バイアス", "練習効果"], answer: 0, explain: "反応性（reactivity）は観察によって行動が変わること。工場研究にちなみホーソン効果とも呼ばれる。非侵襲的観察で抑える。", difficulty: 2 },
    { type: "mcq", stem: "知りたい対象全体を母集団というのに対し、実際に調べる一部を何というか。", choices: ["コホート", "標本", "条件", "群"], answer: 1, explain: "母集団（population）の一部を抽出したものが標本（sample）。標本が母集団を代表できるかが一般化の鍵となる。", difficulty: 1 },
    { type: "mcq", stem: "「あなたは政府の経済政策と外交政策に賛成ですか」のように一項目で二つを尋ねる不適切な質問を何というか。", choices: ["誘導質問", "ダブルバーレル質問", "反転項目", "フィラー項目"], answer: 1, explain: "ダブルバーレル質問は一つの項目で二つのことを問うため、どちらへの回答か曖昧になる。一項目一内容が原則である。", difficulty: 2 },
    { type: "mcq", stem: "一人または少数を深く詳細に調べる方法で、記憶障害患者H.M.などの研究に用いられたのはどれか。", choices: ["相関研究", "事例研究", "横断研究", "実験法"], answer: 1, explain: "事例研究（case study）は稀少な例から貴重な知見を得られるが、対象が特殊なため一般化には慎重を要する。", difficulty: 2 },
    { type: "mcq", stem: "異なる年齢の人々を同じ時期に比較する研究デザインの欠点として最も適切なものはどれか。", choices: ["脱落者が多く費用がかかる", "発達変化と世代差（コホート効果）が混同される", "因果を強く主張できてしまう", "同じ人を追えない倫理的問題がある"], answer: 1, explain: "横断研究は速いが、年齢差が発達によるものか世代（コホート）の違いによるものか区別できない。縦断研究はこの点で優れるが時間と脱落が問題となる。", difficulty: 3 },
    { type: "mcq", stem: "「アイスクリームの売上」と「水難事故」が正相関する最大の理由として適切なものはどれか。", choices: ["アイスが事故を引き起こすから", "事故がアイスの売上を増やすから", "第三変数（気温）が両方を増やすから", "まったくの偶然で意味はない"], answer: 2, explain: "両者を同時に増やす第三変数「気温（暑さ）」が原因である。相関の解釈では常に第三変数（交絡）を疑う必要がある。", difficulty: 2 },
    { type: "mcq", stem: "相関だけでは因果を結論できない二つの理由として正しい組み合わせはどれか。", choices: ["信頼性の問題と妥当性の問題", "方向性の問題と第三変数問題", "選択バイアスと出版バイアス", "成熟効果と練習効果"], answer: 1, explain: "相関から因果が言えないのは、原因の向きが不明な「方向性の問題」と、観測外の変数が両者を生む「第三変数問題」のためである。", difficulty: 2 },
    { type: "mcq", stem: "相関係数 r について正しい記述はどれか。", choices: ["rは0〜100の値をとる", "rが0に近いほど直線関係が強い", "rは−1〜+1の値をとり、絶対値が大きいほど直線関係が強い", "rが正なら必ず因果がある"], answer: 2, explain: "相関係数rは−1〜+1の範囲をとり、絶対値が1に近いほど直線的関係が強い。符号は関係の向きを表すが因果は示さない。", difficulty: 2 },
    { type: "mcq", stem: "血液型や出身地のように、分類のみで順序を持たない測定の尺度水準はどれか。", choices: ["名義尺度", "順序尺度", "間隔尺度", "比率尺度"], answer: 0, explain: "名義尺度は分類だけで大小関係を持たない。順序尺度は順位を、間隔尺度は等間隔を、比率尺度はさらに絶対0を備える。", difficulty: 1 },
    { type: "mcq", stem: "「4秒は2秒の2倍」のように比の解釈ができるのは、どの尺度水準か。", choices: ["名義尺度", "順序尺度", "間隔尺度", "比率尺度"], answer: 3, explain: "比率尺度は絶対0（真の無）を持つため比の解釈ができる。摂氏温度のような間隔尺度は絶対0がなく「2倍暑い」とは言えない。", difficulty: 2 },
    { type: "mcq", stem: "有意（p < .05）になるまで分析や変数選択を試行錯誤し、偽陽性を生む不適切な慣行を何というか。", choices: ["HARKing", "p-hacking", "デブリーフィング", "事前登録"], answer: 1, explain: "p-hacking は有意になるまで分析を繰り返すこと。偶然の当たりを本物に見せかけ、再現性を損なう。", difficulty: 2 },
    { type: "mcq", stem: "結果を見た後で、あたかも最初からその仮説を立てていたかのように報告する行為を何というか。", choices: ["HARKing", "デマンド特性", "出版バイアス", "反応性"], answer: 0, explain: "HARKing（結果を知った後の仮説化）は探索的発見を検証であったかのように偽装し、偽陽性を生む。", difficulty: 3 },
    { type: "mcq", stem: "有意・新奇な結果ばかりが学術雑誌に掲載され、無効果の結果が埋もれて文献全体が偏る問題を何というか。", choices: ["選択バイアス", "出版バイアス", "確証バイアス", "回顧バイアス"], answer: 1, explain: "出版バイアス（publication bias）は、否定的・無効果の結果が掲載されにくい「お蔵入り問題」とも呼ばれ、文献を歪める。", difficulty: 2 },
    { type: "mcq", stem: "p-hackingやHARKingを構造的に防ぐため、データ収集の前に仮説と分析計画を公開登録する取り組みはどれか。", choices: ["デブリーフィング", "事前登録（preregistration）", "カウンターバランス", "二重盲検"], answer: 1, explain: "事前登録は収集前に仮説・計画・分析を公開し、後付けの分析や仮説化を防ぐ。登録報告はさらに結果前に方法を査読する形式である。", difficulty: 2 },
    { type: "mcq", stem: "捏造・改ざん・盗用（FFP）に関する説明として正しいものはどれか。", choices: ["軽微な手続き上のミスを指す", "重大な研究不正であり許されない", "事前登録の一種である", "統計手法の名称である"], answer: 1, explain: "FFP（Fabrication・Falsification・Plagiarism）は捏造・改ざん・盗用であり、最も重大な研究不正行為である。", difficulty: 1 },
    { type: "mcq", stem: "実験法が観察法や相関研究に比べて優れている最大の点はどれか。", choices: ["生態学的妥当性が常に高い", "因果関係を強く主張できる", "倫理的問題が一切生じない", "標本が必ず代表的になる"], answer: 1, explain: "IVを操作し他を統制する実験法は、群間の差をIVの効果と解釈でき、因果を最も強く主張できる。一方で人工性ゆえ生態学的妥当性は低くなりがちである。", difficulty: 2 },
  ],
});
