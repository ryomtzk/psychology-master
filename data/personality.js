/* ============================================================
   パーソナリティ心理学  (personality)
   ============================================================ */
PsychApp.registerModule({
  id: "personality",
  title: "パーソナリティ心理学",
  emoji: "🎭",
  category: "dsp",
  tagline: "精神力動論・特性論(ビッグファイブ)・人間性論・社会認知論・性格の測定",
  overview: `<p>パーソナリティ（personality）とは、<strong>状況や時間を越えて一貫した、その人らしい思考・感情・行動のパターン</strong>を指す。本分野では「なぜ人はそれぞれ違うのか」という問いに答えるべく、精神力動論・特性論・人間性論・社会認知論という四つの主要アプローチを概観し、最後に性格をどう測定するか（質問紙法・投影法・行動遺伝学）を学ぶ。</p>`,
  lessons: [
    {
      title: "パーソナリティとは何か — 理論の見取り図",
      body: `
        <p>パーソナリティの語源はラテン語の <em>persona</em>（劇で役者がかぶる仮面）である。心理学では、<strong>個人に特有で、時間と状況を越えてある程度一貫した、思考・感情・行動の特徴的なパターン</strong>と定義される。鍵となるのは次の二点である。</p>
        <ul>
          <li><strong>一貫性（consistency）</strong>：同じ人なら、異なる場面でも似た反応を示す傾向がある（例：内向的な人はパーティでも会議でも控えめ）。</li>
          <li><strong>独自性（distinctiveness）</strong>：人によって反応の仕方が異なる。この個人差こそパーソナリティ心理学の中心テーマである。</li>
        </ul>
        <h3>四つの主要アプローチ</h3>
        <p>パーソナリティをどう説明するかで、伝統的に大きく四つの立場がある。それぞれ「何を重視し、何を軽視するか」が異なる。</p>
        <table>
          <tr><th>アプローチ</th><th>中心的な考え</th><th>代表的人物</th></tr>
          <tr><td><b>精神力動論</b></td><td>無意識の欲求・葛藤・幼児期体験が行動を規定する</td><td>フロイト、ユング、アドラー</td></tr>
          <tr><td><b>特性論</b></td><td>性格は測定可能な少数の<em>特性</em>の組み合わせで記述できる</td><td>オールポート、アイゼンク、ビッグファイブ</td></tr>
          <tr><td><b>人間性論</b></td><td>人は自己実現へ向かう成長の主体である</td><td>マズロー、ロジャーズ</td></tr>
          <tr><td><b>社会認知論</b></td><td>人・行動・環境の相互作用と認知（信念・期待）が鍵</td><td>バンデューラ、ロッター、ミシェル</td></tr>
        </table>
        <div class="callout key"><b>対立軸を押さえる</b>：精神力動論は<strong>無意識</strong>を、特性論は<strong>記述と測定</strong>を、人間性論は<strong>主体性と成長</strong>を、社会認知論は<strong>状況と認知</strong>を強調する。同じ「臆病な行動」も、抑圧された不安（精神力動）、神経症傾向の高さ（特性）、自己実現の阻害（人間性）、低い自己効力感（社会認知）と、立場により説明が異なる。</div>
        <h3>気質とパーソナリティ</h3>
        <p>パーソナリティの土台には、生まれつきの情緒的反応傾向である<strong>気質（temperament）</strong>がある。トマスとチェスの乳児研究は、子どもを「扱いやすい子」「扱いにくい子」「立ち上がりの遅い子」に類型化した。気質は遺伝的・生物学的基盤が強く、後の特性論（とくに生物学的特性論）につながる。</p>
        <div class="callout note">「パーソナリティ」「人格」「性格」はしばしば同義に使われるが、厳密には「性格（character）」は道徳的・意志的側面を、「気質」は生得的・情緒的側面を含意することがある。本分野では包括的な意味で「パーソナリティ」を用いる。</div>
      `,
      figure: `<svg viewBox="0 0 540 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="270" y="24" text-anchor="middle" font-size="15" font-weight="800" fill="#1d2433">パーソナリティ理論 4つのアプローチ</text>
        <circle cx="270" cy="135" r="34" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="270" y="131" text-anchor="middle" font-size="12" font-weight="700">パーソナ</text>
        <text x="270" y="146" text-anchor="middle" font-size="12" font-weight="700">リティ</text>
        <g text-anchor="middle" font-size="12" font-weight="700">
          <rect x="40" y="55" width="150" height="48" rx="10" fill="#fdeef0" stroke="#e0566b"/><text x="115" y="76">精神力動論</text><text x="115" y="93" font-size="10" font-weight="400" fill="#5b6478">無意識・葛藤</text>
          <rect x="350" y="55" width="150" height="48" rx="10" fill="#fef3e0" stroke="#f0a020"/><text x="425" y="76">特性論</text><text x="425" y="93" font-size="10" font-weight="400" fill="#5b6478">測定可能な特性</text>
          <rect x="40" y="168" width="150" height="48" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="115" y="189">人間性論</text><text x="115" y="206" font-size="10" font-weight="400" fill="#5b6478">自己実現・成長</text>
          <rect x="350" y="168" width="150" height="48" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="425" y="189">社会認知論</text><text x="425" y="206" font-size="10" font-weight="400" fill="#5b6478">状況・認知</text>
        </g>
        <g stroke="#c9cfe0" stroke-width="2">
          <line x1="190" y1="92" x2="240" y2="120"/><line x1="350" y1="92" x2="300" y2="120"/>
          <line x1="190" y1="180" x2="240" y2="150"/><line x1="350" y1="180" x2="300" y2="150"/>
        </g>
      </svg>`,
      figcaption: "四つのアプローチは、同じ人物を異なる角度から照らす。どれが正しいかではなく、相補的に理解するのがよい。",
      terms: [
        { term: "パーソナリティ", def: "状況・時間を越えて一貫した、その人らしい思考・感情・行動のパターン。" },
        { term: "一貫性", def: "同一人物が異なる場面でも似た反応を示す傾向。" },
        { term: "独自性（個人差）", def: "人によって反応の仕方が異なること。パーソナリティ研究の中心。" },
        { term: "気質 (temperament)", def: "生まれつきの情緒的反応傾向。パーソナリティの生物学的土台。" },
        { term: "精神力動論", def: "無意識の欲求・葛藤・幼児期体験を重視する立場。" },
        { term: "特性論", def: "性格を測定可能な少数の特性の組み合わせで記述する立場。" },
        { term: "社会認知論", def: "人・行動・環境の相互作用と認知過程を重視する立場。" },
      ],
    },
    {
      title: "精神力動論 — フロイトの理論",
      body: `
        <p>ジークムント・フロイト（Freud）は、神経症患者の治療経験から<strong>精神分析（psychoanalysis）</strong>を体系化した。中心思想は、人間の行動の大部分が本人に意識されない<strong>無意識（unconscious）</strong>の力に動かされている、というものである。</p>
        <h3>心の地形学モデル（意識の3層）</h3>
        <p>フロイトは心を、海に浮かぶ氷山にたとえた。水面上に見えるのはごく一部にすぎない。</p>
        <ul>
          <li><strong>意識（conscious）</strong>：いま気づいている思考や知覚。氷山の頂上。</li>
          <li><strong>前意識（preconscious）</strong>：いまは意識していないが、努力すれば思い出せる内容。水面のすぐ下。</li>
          <li><strong>無意識（unconscious）</strong>：抑圧された欲求・記憶・葛藤。本人は気づけないが行動を強く左右する。水面下の巨大な部分。</li>
        </ul>
        <h3>心の構造モデル（イド・自我・超自我）</h3>
        <table>
          <tr><th>構造</th><th>原理</th><th>はたらき</th></tr>
          <tr><td><b>イド (id)</b></td><td>快楽原則</td><td>本能的欲求（性＝リビドー、攻撃）の即時充足を求める。無意識的。</td></tr>
          <tr><td><b>自我 (ego)</b></td><td>現実原則</td><td>イドの欲求を現実に合わせて調整する。「執行役」。意識・前意識・無意識にまたがる。</td></tr>
          <tr><td><b>超自我 (superego)</b></td><td>道徳原則</td><td>良心・理想。親や社会の規範を内在化したもの。</td></tr>
        </table>
        <div class="callout key">自我は、欲求を迫るイドと、禁止する超自我、そして現実という三方向の圧力の<strong>調停役</strong>である。この板挟みが過剰になると不安が生じ、自我は防衛機制を発動する。</div>
        <h3>心理性的発達段階</h3>
        <p>フロイトは、リビドー（性的エネルギー）が向かう身体部位の変化に沿って、人格が段階的に形成されると考えた。各段階で欲求が満たされすぎたり満たされなさすぎたりすると、そこに<strong>固着（fixation）</strong>が起こり、後の性格に影響するとした。</p>
        <ol>
          <li><strong>口唇期（〜1歳半）</strong>：口での快（吸う・噛む）。固着すると依存的・口愛的（喫煙・過食など）とされる。</li>
          <li><strong>肛門期（〜3歳）</strong>：排泄のコントロール。固着すると几帳面・倹約・頑固（肛門性格）または乱雑とされる。</li>
          <li><strong>男根期（〜6歳）</strong>：性器への関心。<strong>エディプス・コンプレックス</strong>（男児が母を求め父を恐れる葛藤、女児はエレクトラ的葛藤）が生じ、同性の親への同一視で超自我が形成される。</li>
          <li><strong>潜伏期（〜思春期）</strong>：性的関心が沈静化し、学習や友人関係に向かう。</li>
          <li><strong>性器期（思春期以降）</strong>：成熟した異性愛的関係へ向かう。</li>
        </ol>
        <div class="callout warn">フロイト理論は、概念が反証困難で実証性に乏しい、性的決定論に偏る、サンプルが臨床例に限られるなど多くの批判を受けている。一方で「無意識」「防衛機制」「幼児期の重要性」という発想は、後世に絶大な影響を残した。</div>
      `,
      figure: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="230" y="22" text-anchor="middle" font-size="15" font-weight="800" fill="#1d2433">フロイトの氷山モデル</text>
        <rect x="0" y="120" width="460" height="180" fill="#cfe6f5"/>
        <line x1="0" y1="120" x2="460" y2="120" stroke="#5b6cf0" stroke-width="1.5" stroke-dasharray="6 4"/>
        <text x="455" y="115" text-anchor="end" font-size="10" fill="#5b6478">水面</text>
        <polygon points="230,45 120,275 340,275" fill="#eef4fb" stroke="#9fb3cc" stroke-width="1.5"/>
        <polygon points="230,45 178,155 282,155" fill="#fff" stroke="#9fb3cc" stroke-width="1"/>
        <g text-anchor="middle">
          <text x="230" y="90" font-size="12" font-weight="700" fill="#1d2433">意識</text>
          <text x="230" y="105" font-size="9" fill="#5b6478">いま気づいている</text>
          <text x="230" y="175" font-size="12" font-weight="700" fill="#1d2433">前意識</text>
          <text x="230" y="189" font-size="9" fill="#5b6478">思い出せる</text>
          <text x="230" y="235" font-size="13" font-weight="800" fill="#1d2433">無意識</text>
          <text x="230" y="251" font-size="9" fill="#5b6478">抑圧された欲求・葛藤</text>
        </g>
        <g font-size="11" font-weight="700" text-anchor="start">
          <text x="350" y="80" fill="#f0a020">超自我</text>
          <text x="350" y="150" fill="#5b6cf0">自我</text>
          <text x="350" y="250" fill="#e0566b">イド</text>
        </g>
        <g stroke="#c9cfe0" stroke-width="1">
          <line x1="300" y1="76" x2="345" y2="76"/><line x1="285" y1="148" x2="345" y2="148"/><line x1="270" y1="248" x2="345" y2="248"/>
        </g>
      </svg>`,
      figcaption: "意識はごく一部で、行動の大半は水面下の無意識に駆動される。イドは無意識、自我と超自我は各層にまたがる。",
      terms: [
        { term: "無意識", def: "本人が気づけないが行動を強く左右する心の領域。抑圧された欲求・葛藤の貯蔵庫。" },
        { term: "イド", def: "快楽原則に従い本能的欲求の即時充足を求める無意識的な心の部分。" },
        { term: "自我", def: "現実原則に従い、イド・超自我・現実を調停する執行役。" },
        { term: "超自我", def: "道徳原則に従う良心・理想。社会規範の内在化。" },
        { term: "リビドー", def: "性的・生命的エネルギー。心理性的発達の原動力。" },
        { term: "固着 (fixation)", def: "ある発達段階で欲求が過不足となり、心的エネルギーがそこにとどまること。" },
        { term: "エディプス・コンプレックス", def: "男根期に生じる、母への愛着と父への敵対・恐れの無意識的葛藤。" },
      ],
    },
    {
      title: "防衛機制と新フロイト派",
      body: `
        <p>自我が不安（イドの衝動や超自我の禁止による葛藤）に耐えられないとき、無意識的にその不安を和らげる心の働きを<strong>防衛機制（defense mechanism）</strong>という。アンナ・フロイトが体系化した。すべて無意識的・自動的に作動する点が特徴である。</p>
        <table>
          <tr><th>防衛機制</th><th>内容</th><th>例</th></tr>
          <tr><td><b>抑圧 (repression)</b></td><td>受け入れがたい記憶・衝動を意識から締め出す。最も基本的</td><td>つらい体験を思い出せない</td></tr>
          <tr><td><b>否認 (denial)</b></td><td>不快な現実そのものを認めない</td><td>重病の診断を受け入れない</td></tr>
          <tr><td><b>投影 (projection)</b></td><td>自分の認めがたい衝動を他者のものとみなす</td><td>自分が嫌っているのに「相手が私を嫌っている」</td></tr>
          <tr><td><b>合理化 (rationalization)</b></td><td>本当の動機を隠し、もっともらしい理由をつける</td><td>不採用を「もともと志望度が低かった」</td></tr>
          <tr><td><b>反動形成 (reaction formation)</b></td><td>本心と正反対の態度・行動をとる</td><td>嫌いな相手に過度に親切</td></tr>
          <tr><td><b>退行 (regression)</b></td><td>以前の未熟な発達段階の行動に戻る</td><td>弟の誕生で上の子が赤ちゃん返り</td></tr>
          <tr><td><b>置き換え (displacement)</b></td><td>衝動の向け先を安全な対象に変える</td><td>上司への怒りを家族にぶつける</td></tr>
          <tr><td><b>昇華 (sublimation)</b></td><td>衝動を社会的に価値ある活動へ振り向ける</td><td>攻撃性をスポーツや芸術で発散</td></tr>
        </table>
        <div class="callout tip"><strong>昇華</strong>は、衝動を建設的方向へ転換する点で最も成熟した（適応的な）防衛機制とされる。ただし防衛機制も過剰・硬直化すると不適応につながる。</div>
        <h3>新フロイト派（ネオ・フロイディアン）</h3>
        <p>フロイトの弟子・後継者の多くは、性的衝動の過度な強調から離れ、<strong>社会・文化・対人関係</strong>の役割を重視した。</p>
        <h4>アルフレッド・アドラー（個人心理学）</h4>
        <p>性ではなく<strong>劣等感（inferiority feeling）</strong>を人格形成の鍵とした。人は誰しも幼少期に無力さを感じ、それを克服しようとする<strong>優越追求（striving for superiority）</strong>が成長の原動力になる。克服が病的にこじれると<strong>劣等コンプレックス</strong>となる。出生順位や生活様式（ライフスタイル）も重視した。</p>
        <h4>カレン・ホーナイ（ホルナイ）</h4>
        <p>フロイトの女性観を批判し、性差は生物学より<strong>文化・社会的要因</strong>に由来すると主張。幼児期の不安を<strong>基本的不安（basic anxiety）</strong>と呼び、それへの対処として「人に向かう／逆らう／離れる」という神経症的傾向を論じた。</p>
        <h4>エリク・エリクソン（心理社会的発達）</h4>
        <p>発達を生涯にわたる<strong>8段階の心理社会的危機</strong>として描いた。とくに青年期の<strong>同一性（アイデンティティ）対 同一性拡散</strong>が有名。性的衝動より社会との関係を重視した点が新しい（詳しくは発達分野で扱う）。</p>
      `,
      terms: [
        { term: "防衛機制", def: "不安を無意識的に和らげる自我の働き。アンナ・フロイトが体系化。" },
        { term: "抑圧", def: "受け入れがたい記憶・衝動を意識から締め出す最も基本的な防衛機制。" },
        { term: "投影", def: "自分の認めがたい衝動を他者のものとみなす防衛機制。" },
        { term: "合理化", def: "本当の動機を隠し、もっともらしい理由づけをする防衛機制。" },
        { term: "昇華", def: "衝動を社会的に価値ある活動へ振り向ける最も成熟した防衛機制。" },
        { term: "劣等感（アドラー）", def: "人格形成と成長の原動力とされる、無力さの感覚。優越追求を生む。" },
        { term: "基本的不安（ホーナイ）", def: "幼児期の対人関係から生じる根源的な不安。神経症的傾向の源。" },
        { term: "アイデンティティ（エリクソン）", def: "青年期の中心的課題。自分が何者かという一貫した自己感。" },
      ],
    },
    {
      title: "ユングの分析心理学",
      body: `
        <p>カール・グスタフ・ユング（Jung）は当初フロイトの後継者と目されたが、リビドーを性的エネルギーに限定する考えに反対して決別し、独自の<strong>分析心理学（analytical psychology）</strong>を築いた。</p>
        <h3>無意識の二層構造</h3>
        <p>ユングは無意識を二層に分けた。</p>
        <ul>
          <li><strong>個人的無意識（personal unconscious）</strong>：その個人の忘却・抑圧された経験。フロイトの無意識に近い。</li>
          <li><strong>集合的無意識（collective unconscious）</strong>：全人類が進化を通じて共有する、生得的で普遍的な無意識の層。ユング理論の最大の特徴。</li>
        </ul>
        <h3>元型（アーキタイプ）</h3>
        <p>集合的無意識を構成する、人類共通の<strong>元型（archetype）</strong>＝普遍的なイメージ・反応の型。神話・宗教・夢に繰り返し現れる。代表的なものに次がある。</p>
        <table>
          <tr><th>元型</th><th>意味</th></tr>
          <tr><td><b>ペルソナ</b></td><td>社会に見せる「仮面」。外的役割に適応した自己。</td></tr>
          <tr><td><b>シャドウ（影）</b></td><td>自分が認めたくない否定的・原始的な側面。</td></tr>
          <tr><td><b>アニマ／アニムス</b></td><td>男性の中の女性像（アニマ）／女性の中の男性像（アニムス）。</td></tr>
          <tr><td><b>自己（セルフ）</b></td><td>心全体の中心・統合の元型。個性化の目標。</td></tr>
        </table>
        <div class="callout note">ユングは人格の成長を<strong>個性化（individuation）</strong>＝意識と無意識を統合し全体的な自己を実現する過程とみなした。これは人生後半の課題とされる。</div>
        <h3>心的態度：内向と外向</h3>
        <p>ユングは、心的エネルギー（リビドー）が向かう方向によって人を二つの<strong>態度（タイプ）</strong>に分けた。この用語は今日の特性論にも受け継がれている。</p>
        <ul>
          <li><strong>外向（extraversion）</strong>：関心が外界・他者へ向かう。社交的・活動的。</li>
          <li><strong>内向（introversion）</strong>：関心が内界・自己へ向かう。思索的・控えめ。</li>
        </ul>
        <p>さらにユングは、思考・感情・感覚・直観という四つの<strong>心理機能</strong>を組み合わせて性格を類型化した。これらの考えは性格検査（例：MBTI）の源流ともなった。</p>
        <div class="callout key">「内向／外向」という言葉はユングに由来するが、後のアイゼンクやビッグファイブでは<strong>連続的な特性次元</strong>として測定される点に注意。ユングは類型（タイプ）、特性論は次元（程度）として扱う。</div>
      `,
      figure: `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="230" y="22" text-anchor="middle" font-size="15" font-weight="800" fill="#1d2433">ユングの心の層</text>
        <circle cx="230" cy="135" r="95" fill="#fdeef0" stroke="#e0566b" stroke-width="1.5"/>
        <circle cx="230" cy="135" r="64" fill="#fef3e0" stroke="#f0a020" stroke-width="1.5"/>
        <circle cx="230" cy="135" r="32" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="1.5"/>
        <g text-anchor="middle">
          <text x="230" y="138" font-size="11" font-weight="700" fill="#5b6cf0">意識</text>
          <text x="230" y="151" font-size="9" fill="#5b6478">（自我）</text>
          <text x="230" y="92" font-size="11" font-weight="700" fill="#c87a00">個人的無意識</text>
          <text x="230" y="58" font-size="11" font-weight="700" fill="#e0566b">集合的無意識</text>
          <text x="230" y="73" font-size="9" fill="#5b6478">元型（人類共通）</text>
        </g>
      </svg>`,
      figcaption: "ユングは無意識を個人的無意識と、全人類が共有する集合的無意識（元型の宿る層）に分けた。",
      terms: [
        { term: "集合的無意識", def: "全人類が進化を通じて共有する生得的・普遍的な無意識の層。ユングの中心概念。" },
        { term: "元型 (archetype)", def: "集合的無意識を構成する人類共通のイメージ・反応の型。ペルソナ、シャドウなど。" },
        { term: "ペルソナ", def: "社会に見せる仮面。外的役割に適応した自己を表す元型。" },
        { term: "シャドウ（影）", def: "自分が認めたくない否定的・原始的な側面の元型。" },
        { term: "個性化", def: "意識と無意識を統合し全体的な自己を実現するユングの成長概念。" },
        { term: "内向／外向", def: "心的エネルギーが内界へ向かうか外界へ向かうかの態度。ユングに由来。" },
      ],
    },
    {
      title: "特性論 — オールポートからビッグファイブへ",
      body: `
        <p><strong>特性（trait）</strong>とは、さまざまな状況で一貫して現れる行動傾向である。特性論は、性格を<strong>少数の測定可能な特性の組み合わせ</strong>として記述しようとする。「タイプ（質的な類型）」ではなく「次元（量的な程度）」で人を捉える点が特徴である。</p>
        <h3>オールポート — 特性の階層</h3>
        <p>ゴードン・オールポート（Allport）は、辞書から人を形容する語を約1万8千語も抽出し（語彙アプローチ）、特性を影響力の大きさで階層化した。</p>
        <ul>
          <li><strong>枢要特性（cardinal trait）</strong>：人格全体を支配するほど強い特性。多くの人は持たない（例：きわめて利他的な人）。</li>
          <li><strong>中心特性（central trait）</strong>：その人を特徴づける主要な数個の特性（誠実・社交的など）。</li>
          <li><strong>二次的特性（secondary trait）</strong>：特定の状況でのみ現れる好み・態度。</li>
        </ul>
        <h3>キャッテル と アイゼンク — 因子分析による削減</h3>
        <p>レイモンド・キャッテル（Cattell）は<strong>因子分析（factor analysis）</strong>という統計手法で多数の特性を<strong>16の根源特性</strong>に整理し、16PF検査を作成した。</p>
        <p>ハンス・アイゼンク（Eysenck）はさらに少数の<strong>生物学的基盤をもつ次元</strong>に絞り込んだ。</p>
        <ul>
          <li><strong>外向–内向（extraversion）</strong>：大脳皮質の覚醒水準で説明（内向者は覚醒が高いため刺激を避ける）。</li>
          <li><strong>神経症傾向（neuroticism）</strong>：情緒の安定–不安定。自律神経系の反応性で説明。</li>
          <li><strong>精神病質傾向（psychoticism）</strong>：衝動性・攻撃性・非社会性。後に追加された第3次元。</li>
        </ul>
        <h3>ビッグファイブ（5因子モデル / OCEAN）</h3>
        <p>現在、特性論の標準的枠組みとして最も支持されているのが<strong>ビッグファイブ（Big Five）</strong>である。多数の研究で因子分析を重ねた結果、性格は次の5因子に集約されることが繰り返し確認された。頭文字をとって<strong>OCEAN</strong>と覚える。</p>
        <table>
          <tr><th>因子</th><th>高い人の特徴</th><th>低い人の特徴</th></tr>
          <tr><td><b>O：開放性</b>(Openness)</td><td>好奇心旺盛・想像力豊か・新奇好み</td><td>慣習的・現実的・保守的</td></tr>
          <tr><td><b>C：誠実性</b>(Conscientiousness)</td><td>計画的・勤勉・自制的</td><td>衝動的・だらしない・気まぐれ</td></tr>
          <tr><td><b>E：外向性</b>(Extraversion)</td><td>社交的・活動的・話好き</td><td>内向的・物静か・控えめ</td></tr>
          <tr><td><b>A：協調性</b>(Agreeableness)</td><td>思いやり・協力的・信頼的</td><td>競争的・批判的・非協力的</td></tr>
          <tr><td><b>N：神経症傾向</b>(Neuroticism)</td><td>不安・情緒不安定・心配性</td><td>情緒安定・冷静・楽観的</td></tr>
        </table>
        <div class="callout key">ビッグファイブは、言語・文化を越えてほぼ普遍的に確認され、信頼性・妥当性が高い点が強みである。<strong>誠実性</strong>は学業・仕事の成績を、<strong>外向性</strong>は対人的成功を予測するなど、現実の成果との関連も多く示されている。</div>
        <h3>特性の安定性</h3>
        <p>パーソナリティ特性は、青年期以降おおむね安定する一方、加齢とともに緩やかに変化する。一般に成人期を通じて<strong>誠実性と協調性は上昇</strong>し、<strong>神経症傾向は低下</strong>する傾向（成熟の原理, maturity principle）が縦断研究で示されている。</p>
        <div class="callout warn">特性は便利だが、特定の場面での行動を高い精度で予測できるとは限らない。状況の力を軽視する点が、後述のミシェルの「人間-状況論争」で批判された。</div>
      `,
      figure: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="260" y="22" text-anchor="middle" font-size="15" font-weight="800" fill="#1d2433">ビッグファイブ（OCEAN）— 各因子は連続次元</text>
        <g font-size="12">
          <text x="10" y="58" font-weight="700" fill="#5b6cf0">O 開放性</text>
          <text x="10" y="92" font-weight="700" fill="#15c4a8">C 誠実性</text>
          <text x="10" y="126" font-weight="700" fill="#f0a020">E 外向性</text>
          <text x="10" y="160" font-weight="700" fill="#e0566b">A 協調性</text>
          <text x="10" y="194" font-weight="700" fill="#7b5cf0">N 神経症傾向</text>
        </g>
        <g>
          <line x1="120" y1="53" x2="500" y2="53" stroke="#e9ebfe" stroke-width="10" stroke-linecap="round"/><circle cx="430" cy="53" r="9" fill="#5b6cf0"/>
          <line x1="120" y1="87" x2="500" y2="87" stroke="#d8f6ee" stroke-width="10" stroke-linecap="round"/><circle cx="360" cy="87" r="9" fill="#15c4a8"/>
          <line x1="120" y1="121" x2="500" y2="121" stroke="#fef3e0" stroke-width="10" stroke-linecap="round"/><circle cx="280" cy="121" r="9" fill="#f0a020"/>
          <line x1="120" y1="155" x2="500" y2="155" stroke="#fdeef0" stroke-width="10" stroke-linecap="round"/><circle cx="400" cy="155" r="9" fill="#e0566b"/>
          <line x1="120" y1="189" x2="500" y2="189" stroke="#ece8fd" stroke-width="10" stroke-linecap="round"/><circle cx="200" cy="189" r="9" fill="#7b5cf0"/>
        </g>
        <text x="120" y="222" font-size="10" fill="#5b6478">低い ←</text>
        <text x="500" y="222" text-anchor="end" font-size="10" fill="#5b6478">→ 高い</text>
      </svg>`,
      figcaption: "ビッグファイブの各因子は「有る／無し」ではなく、低い〜高いの連続した次元として測定される。",
      terms: [
        { term: "特性 (trait)", def: "状況を越えて一貫して現れる行動傾向。特性論の基本単位。" },
        { term: "語彙アプローチ", def: "性格特性は日常言語の形容語に反映されているとし、辞書語から特性を抽出する方法。" },
        { term: "因子分析", def: "多数の変数の相関から少数の共通因子を抽出する統計手法。特性論で多用。" },
        { term: "アイゼンクの3次元", def: "外向–内向・神経症傾向・精神病質傾向。生物学的基盤を想定した特性次元。" },
        { term: "ビッグファイブ", def: "開放性・誠実性・外向性・協調性・神経症傾向の5因子モデル。OCEAN。" },
        { term: "誠実性", def: "計画的・勤勉・自制的な傾向。学業・仕事の成績をよく予測する。" },
        { term: "神経症傾向", def: "不安・情緒不安定の傾向。低い人ほど情緒が安定している。" },
        { term: "成熟の原理", def: "加齢に伴い誠実性・協調性が上がり神経症傾向が下がる縦断的傾向。" },
      ],
    },
    {
      title: "人間性・自己理論 — マズローとロジャーズ",
      body: `
        <p>人間性心理学（humanistic psychology）は、決定論的な精神力動論と機械的な行動主義への「第三勢力」として登場した。人間を、無意識や環境に操られる存在ではなく、<strong>自由意志をもち成長・自己実現へ向かう主体</strong>とみなす点が特徴である。</p>
        <h3>マズロー — 欲求の階層と自己実現</h3>
        <p>アブラハム・マズロー（Maslow）は、人間の欲求を<strong>5段階の階層（hierarchy of needs）</strong>に整理した。下位の欲求がある程度満たされると、上位の欲求が現れるとした（ピラミッド型）。</p>
        <ol>
          <li><strong>生理的欲求</strong>：食・水・睡眠など生命維持。</li>
          <li><strong>安全の欲求</strong>：身の安全・安定・秩序。</li>
          <li><strong>所属と愛の欲求</strong>：仲間・愛情・受容。</li>
          <li><strong>承認（自尊）の欲求</strong>：尊重・達成・評価。</li>
          <li><strong>自己実現の欲求</strong>：自分の可能性を最大限に発揮する。</li>
        </ol>
        <p>下位の4つは欠乏を埋める<strong>欠乏欲求（deficiency needs）</strong>、最上位の自己実現は<strong>成長欲求（growth need）</strong>と区別される。マズローは、自己実現を遂げた人（リンカーンやアインシュタインなどを例に）を研究し、現実受容・自律・創造性・<strong>至高経験（peak experience）</strong>などの特徴を挙げた。</p>
        <div class="callout note">欲求階層は直感的でわかりやすく経営・教育に広く応用されたが、「必ず下位から順に満たされる」という前提には反例も多く、実証的支持は限定的だという批判もある。後にマズロー自身が自己超越欲求を最上位に加えた。</div>
        <h3>ロジャーズ — 自己概念と来談者中心療法</h3>
        <p>カール・ロジャーズ（Rogers）は、人には生来<strong>実現傾向（actualizing tendency）</strong>＝より良く成長しようとする力が備わると考えた。中心概念は<strong>自己概念（self-concept）</strong>＝自分自身についての知覚の総体である。</p>
        <ul>
          <li><strong>現実自己（real self）</strong>：実際の自分についての知覚。</li>
          <li><strong>理想自己（ideal self）</strong>：こうありたいと願う自分。</li>
        </ul>
        <p>この二つが近いほど<strong>自己一致（congruence）</strong>が高く、適応的でいられる。両者が大きくずれると<strong>不一致（incongruence）</strong>が生じ、不安・不適応につながる。</p>
        <div class="callout key">ロジャーズは、健全な成長には<strong>無条件の肯定的配慮（unconditional positive regard）</strong>＝「どんなあなたでも受け入れる」という無条件の受容が不可欠だとした。逆に「○○なら愛する」という<strong>条件つきの価値（conditions of worth）</strong>を課されると、人は本当の自分を歪めてしまう。</div>
        <p>彼の<strong>来談者中心療法（client-centered therapy）</strong>では、セラピストが①無条件の肯定的配慮、②共感的理解、③自己一致（純粋性）という三条件を提供することで、クライエント自身の成長を促す。指示や解釈を与えるフロイト流とは対照的である。</p>
      `,
      figure: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="240" y="22" text-anchor="middle" font-size="15" font-weight="800" fill="#1d2433">マズローの欲求階層</text>
        <polygon points="240,40 300,90 180,90" fill="#d8f6ee" stroke="#15c4a8"/>
        <polygon points="180,92 300,92 340,135 140,135" fill="#e9ebfe" stroke="#5b6cf0"/>
        <polygon points="140,137 340,137 380,180 100,180" fill="#fef3e0" stroke="#f0a020"/>
        <polygon points="100,182 380,182 420,225 60,225" fill="#fdeef0" stroke="#e0566b"/>
        <polygon points="60,227 420,227 460,270 20,270" fill="#ece8fd" stroke="#7b5cf0"/>
        <g text-anchor="middle" font-size="11" font-weight="700" fill="#1d2433">
          <text x="240" y="82">自己実現</text>
          <text x="240" y="120">承認（自尊）</text>
          <text x="240" y="163">所属と愛</text>
          <text x="240" y="208">安全</text>
          <text x="240" y="253">生理的</text>
        </g>
        <text x="240" y="76" text-anchor="middle" font-size="8" fill="#0a8f78">成長欲求</text>
        <line x1="14" y1="100" x2="14" y2="260" stroke="#5b6478" stroke-width="1"/>
        <text x="8" y="100" font-size="9" fill="#5b6478" transform="rotate(-90 8 100)">欠乏欲求</text>
      </svg>`,
      figcaption: "下位の欲求がある程度満たされると上位の欲求が現れる。下4つは欠乏欲求、最上位の自己実現は成長欲求。",
      terms: [
        { term: "自己実現", def: "自分の可能性を最大限に発揮しようとする欲求。欲求階層の最上位。" },
        { term: "欲求階層説", def: "生理→安全→所属と愛→承認→自己実現の順に欲求が現れるとするマズローの理論。" },
        { term: "至高経験", def: "自己実現的な人が経験する、深い充足・一体感の瞬間。" },
        { term: "自己概念", def: "自分自身についての知覚の総体。ロジャーズの中心概念。" },
        { term: "現実自己／理想自己", def: "実際の自分の知覚と、こうありたい自分。両者の一致が適応の鍵。" },
        { term: "自己一致 (congruence)", def: "現実自己と理想自己（経験と自己概念）が一致している状態。" },
        { term: "無条件の肯定的配慮", def: "条件をつけず相手をありのまま受容する態度。健全な成長の条件。" },
        { term: "来談者中心療法", def: "セラピストの受容・共感・純粋性によりクライエント自身の成長を促す療法。" },
      ],
    },
    {
      title: "社会認知的アプローチと一貫性論争",
      body: `
        <p>社会認知的アプローチ（social-cognitive approach）は、行動主義の学習原理を継承しつつ、<strong>認知（信念・期待・解釈）</strong>と<strong>環境との相互作用</strong>を重視する立場である。性格を内的特性に還元せず、人と状況の相互作用としてとらえる。</p>
        <h3>バンデューラ — 相互決定論と自己効力感</h3>
        <p>アルバート・バンデューラ（Bandura）は、行動・個人要因（認知・感情）・環境の三者が互いに影響し合うとする<strong>相互決定論（reciprocal determinism）</strong>を提唱した。一方向の決定（環境→行動）ではなく、三者の双方向的な作用を重視する。</p>
        <p>彼の最重要概念が<strong>自己効力感（self-efficacy）</strong>＝「自分はこの課題を遂行できる」という主観的な見込みである。自己効力感が高い人は、困難な課題にも挑戦し、粘り強く、成功しやすい。自己効力感は、①遂行体験（成功経験）、②代理体験（他者の成功の観察）、③言語的説得、④生理的・情動的状態、によって形成される。</p>
        <div class="callout tip">自己効力感は「自分に価値があるか」という<strong>自尊感情</strong>とは異なる。「特定の課題ができるか」という<em>領域固有</em>の見込みである点に注意。</div>
        <h3>ロッター — 統制の所在</h3>
        <p>ジュリアン・ロッター（Rotter）は、人が自分の人生の結果（成功・失敗）の原因をどこに帰属させるかという<strong>統制の所在（locus of control）</strong>を論じた。</p>
        <ul>
          <li><strong>内的統制（internal）</strong>：結果は自分の努力・能力で決まると考える。「やればできる」。</li>
          <li><strong>外的統制（external）</strong>：結果は運・他者・環境など外部の力で決まると考える。「どうせ運次第」。</li>
        </ul>
        <p>内的統制傾向の人は、一般に学業・健康・適応の面で良好な傾向が報告されている。</p>
        <h3>ミシェル — 人間-状況論争（一貫性論争）</h3>
        <p>ウォルター・ミシェル（Mischel）は1968年の著書で、特性論に強烈な批判を投げかけた。実際のデータでは、ある特性と特定場面での行動の相関は概して低く（いわゆる<strong>「.30の壁（パーソナリティ係数）」</strong>）、行動は<strong>状況によって大きく変わる</strong>と指摘した。これが<strong>人間-状況論争（person-situation debate）</strong>である。</p>
        <table>
          <tr><th>立場</th><th>主張</th></tr>
          <tr><td><b>特性論（人）</b></td><td>行動は安定した内的特性に規定され、状況を越えて一貫する</td></tr>
          <tr><td><b>状況主義（状況）</b></td><td>行動はその場の状況に大きく左右される</td></tr>
          <tr><td><b>相互作用論（統合）</b></td><td>行動は人と状況の相互作用で決まる（現在の主流）</td></tr>
        </table>
        <div class="callout key">現在は<strong>相互作用論</strong>が主流である。ミシェル自身も後に、「状況が変わると行動も変わるが、その<em>変わり方のパターン</em>は人によって一貫している」という<strong>行動の指紋（if-then プロファイル）</strong>の考えを示した。すなわち特性は完全に否定されたのではなく、状況を組み込んでより精緻化された。</div>
      `,
      figure: `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="230" y="22" text-anchor="middle" font-size="15" font-weight="800" fill="#1d2433">バンデューラの相互決定論</text>
        <defs><marker id="par" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker></defs>
        <g text-anchor="middle" font-size="12" font-weight="700">
          <rect x="170" y="42" width="120" height="46" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="230" y="64">個人（認知）</text><text x="230" y="80" font-size="9" font-weight="400" fill="#5b6478">信念・期待</text>
          <rect x="40" y="150" width="120" height="46" rx="10" fill="#fef3e0" stroke="#f0a020"/><text x="100" y="172">行動</text>
          <rect x="300" y="150" width="120" height="46" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="360" y="172">環境</text>
        </g>
        <g stroke="#5b6cf0" stroke-width="2" marker-end="url(#par)" fill="none">
          <line x1="185" y1="92" x2="125" y2="146"/><line x1="135" y1="150" x2="185" y2="96"/>
          <line x1="275" y1="92" x2="335" y2="146"/><line x1="325" y1="150" x2="275" y2="96"/>
          <line x1="165" y1="173" x2="296" y2="173"/><line x1="296" y1="180" x2="165" y2="180"/>
        </g>
      </svg>`,
      figcaption: "個人（認知）・行動・環境は互いに双方向に影響し合う。どれか一つが他を一方的に決めるのではない。",
      terms: [
        { term: "相互決定論", def: "行動・個人（認知）・環境が互いに双方向に影響し合うとするバンデューラの考え。" },
        { term: "自己効力感", def: "「自分はこの課題を遂行できる」という領域固有の主観的見込み。バンデューラ。" },
        { term: "観察学習（代理体験）", def: "他者の行動と結果を観察することで学習・効力感形成が起こること。" },
        { term: "統制の所在", def: "結果の原因を自分（内的）に帰すか外部（外的）に帰すかの傾向。ロッター。" },
        { term: "内的統制／外的統制", def: "結果を自分の努力・能力に帰すか、運・他者・環境に帰すか。" },
        { term: "人間-状況論争", def: "行動を内的特性で説明するか状況で説明するかの論争。ミシェルが提起。" },
        { term: "相互作用論", def: "行動は人と状況の相互作用で決まるとする統合的立場。現在の主流。" },
      ],
    },
    {
      title: "パーソナリティの測定 — 質問紙・投影法・遺伝",
      body: `
        <p>パーソナリティを科学的に扱うには、信頼性・妥当性のある<strong>測定（assessment）</strong>が不可欠である。主な方法は、自己報告に基づく質問紙法と、あいまいな刺激への反応を解釈する投影法に大別される。</p>
        <h3>質問紙法（自己報告式検査）</h3>
        <p>多数の項目に「はい／いいえ」や段階評定で答えてもらい、標準化された基準と照合する方法。客観性が高く大量に実施できる。</p>
        <ul>
          <li><strong>MMPI（ミネソタ多面人格目録）</strong>：500以上の項目からなる代表的な臨床用検査。抑うつ・心気・偏執など複数の臨床尺度を備える。受検者が良く見せようとする歪みを検出する<strong>妥当性尺度（虚偽尺度など）</strong>を内蔵する点が特徴。<em>経験的（基準準拠的）</em>に項目が選定された。</li>
          <li><strong>ビッグファイブ尺度（NEO-PI-R など）</strong>：5因子を測定する。理論に基づき構成された。</li>
          <li><strong>16PF、Y-G性格検査（矢田部・ギルフォード）</strong>なども広く用いられる。</li>
        </ul>
        <div class="callout warn"><b>質問紙法の短所</b>：①社会的望ましさ（よく見せようとする回答歪み）、②黙従傾向や中央化傾向、③自己理解の限界・無意識的側面は測れない。これらを補うため妥当性尺度や複数法の併用が行われる。</div>
        <h3>投影法</h3>
        <p>あいまいな刺激を提示し、その解釈に受検者の内面（無意識的欲求・葛藤）が「投影」されると考える方法。精神力動論と親和的である。</p>
        <ul>
          <li><strong>ロールシャッハ・テスト</strong>：左右対称のインクのしみ（10枚）を見せ「何に見えるか」を尋ねる。反応の内容・位置・決定因などを体系的に分析する。</li>
          <li><strong>TAT（主題統覚検査）</strong>：あいまいな人物場面の絵を見せ、物語を作らせる。語られた物語に欲求や葛藤が表れるとみる。マレーが開発。</li>
          <li><strong>文章完成法（SCT）、描画法（バウムテスト等）</strong>も投影法に含まれる。</li>
        </ul>
        <div class="callout warn"><b>投影法の長所と短所</b>：豊かな質的情報が得られ、受検者が回答を操作しにくい一方、<strong>採点者の主観に依存し信頼性・妥当性に疑問</strong>が呈されてきた。近年は標準化された採点システム（包括システムなど）で改善が試みられている。</div>
        <h3>行動遺伝学 — 遺伝と環境</h3>
        <p>「性格は生まれか育ちか」を実証的に検討するのが<strong>行動遺伝学（behavioral genetics）</strong>である。中心的手法が<strong>双生児研究</strong>である。</p>
        <ul>
          <li><strong>一卵性双生児（MZ）</strong>：遺伝子をほぼ100%共有。</li>
          <li><strong>二卵性双生児（DZ）</strong>：遺伝子を平均50%共有。</li>
        </ul>
        <p>ある特性でMZ双生児の類似度がDZより高ければ、その差は遺伝の寄与を示す。とくに<strong>別々に育てられた一卵性双生児（ミネソタ研究）</strong>が似ていれば、遺伝の影響が強い証拠となる。</p>
        <div class="callout key"><strong>遺伝率（heritability）</strong>とは、ある集団における特性の<em>個人差</em>のうち遺伝で説明できる割合のこと。ビッグファイブ各特性の遺伝率はおおむね<strong>40〜60%</strong>と推定される。注意：遺伝率は「個人差の何%が遺伝か」であって、「ある個人の性格の何%が遺伝で決まるか」ではない。</div>
        <p>興味深いことに、行動遺伝学は環境の影響も明らかにした。きょうだいを似させるはずの<strong>共有環境（同じ家庭）の影響は意外に小さく</strong>、各人に固有の<strong>非共有環境（個別の友人関係・偶発的経験など）の影響が大きい</strong>ことが繰り返し示されている。</p>
      `,
      figure: `<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="240" y="22" text-anchor="middle" font-size="15" font-weight="800" fill="#1d2433">双生児研究：類似度の比較</text>
        <line x1="70" y1="180" x2="450" y2="180" stroke="#5b6478" stroke-width="1.5"/>
        <line x1="70" y1="60" x2="70" y2="180" stroke="#5b6478" stroke-width="1.5"/>
        <g font-size="10" fill="#5b6478" text-anchor="end">
          <text x="64" y="184">0</text><text x="64" y="124">.5</text><text x="64" y="64">1.0</text>
        </g>
        <line x1="70" y1="120" x2="450" y2="120" stroke="#e9ebfe" stroke-width="1"/>
        <g>
          <rect x="120" y="120" width="70" height="60" fill="#5b6cf0"/><text x="155" y="200" text-anchor="middle" font-size="11" font-weight="700">一卵性</text><text x="155" y="114" text-anchor="middle" font-size="10" fill="#5b6cf0">.50</text>
          <rect x="270" y="150" width="70" height="30" fill="#15c4a8"/><text x="305" y="200" text-anchor="middle" font-size="11" font-weight="700">二卵性</text><text x="305" y="144" text-anchor="middle" font-size="10" fill="#0a8f78">.25</text>
        </g>
        <text x="240" y="222" text-anchor="middle" font-size="9" fill="#5b6478">MZがDZより類似 → 遺伝の寄与（概念図・数値は例示）</text>
      </svg>`,
      figcaption: "一卵性（遺伝ほぼ100%共有）が二卵性（50%共有）より似ていれば、その特性に遺伝が寄与していると推定できる。",
      terms: [
        { term: "質問紙法", def: "多項目への自己報告を標準化基準と照合する性格測定法。客観的で大量実施可能。" },
        { term: "MMPI", def: "妥当性尺度（回答の歪みを検出する尺度）を内蔵する代表的な臨床用質問紙。経験的に項目を選定。" },
        { term: "投影法", def: "あいまいな刺激への解釈に内面が投影されるとみる測定法。" },
        { term: "ロールシャッハ・テスト", def: "左右対称のインクのしみへの反応を分析する投影法。" },
        { term: "TAT（主題統覚検査）", def: "あいまいな絵に物語を作らせ欲求・葛藤を読む投影法。マレー。" },
        { term: "双生児研究", def: "一卵性と二卵性の類似度を比較し遺伝・環境の寄与を推定する手法。" },
        { term: "遺伝率", def: "集団における特性の個人差のうち遺伝で説明できる割合。個人の決定割合ではない。" },
        { term: "非共有環境", def: "きょうだいで共有されない個別の経験。性格形成に大きく寄与する。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "パーソナリティの定義として最も適切なものはどれか。", choices: ["生まれつき変化しない知能の高さ", "状況や時間を越えて一貫した、その人らしい思考・感情・行動のパターン", "ある瞬間の一時的な気分や感情", "社会が個人に与える役割期待"], answer: 1, explain: "パーソナリティは一貫性と独自性を備えた、その人特有の思考・感情・行動のパターンと定義される。一時的な気分とは区別される。", difficulty: 1 },
    { type: "mcq", stem: "フロイトが「快楽原則に従い、本能的欲求の即時充足を求める」とした心の構造はどれか。", choices: ["自我（エゴ）", "超自我（スーパーエゴ）", "イド", "ペルソナ"], answer: 2, explain: "イドは快楽原則に従う無意識的な部分。自我は現実原則、超自我は道徳原則に従う。", difficulty: 1 },
    { type: "mcq", stem: "イドの欲求・超自我の禁止・現実の三者を調停する「執行役」とされる心の構造はどれか。", choices: ["イド", "自我", "超自我", "リビドー"], answer: 1, explain: "自我（ego）は現実原則に従い、イド・超自我・外的現実の板挟みを調整する。過剰な葛藤は不安を生み防衛機制を発動させる。", difficulty: 2 },
    { type: "mcq", stem: "フロイトの心理性的発達段階で、エディプス・コンプレックスが生じるとされる段階はどれか。", choices: ["口唇期", "肛門期", "男根期", "性器期"], answer: 2, explain: "男根期（およそ3〜6歳）に、異性の親への愛着と同性の親への敵対というエディプス・コンプレックスが生じるとされる。", difficulty: 2 },
    { type: "mcq", stem: "「自分の認めがたい衝動を他者のものとみなす」防衛機制はどれか。", choices: ["合理化", "投影", "昇華", "退行"], answer: 1, explain: "投影（projection）は、自分の中の受け入れがたい感情・衝動を他者に帰属させる防衛機制である。", difficulty: 2 },
    { type: "mcq", stem: "攻撃衝動をスポーツや芸術など社会的に価値ある活動へ振り向ける、最も成熟した防衛機制はどれか。", choices: ["否認", "抑圧", "昇華", "反動形成"], answer: 2, explain: "昇華（sublimation）は衝動を建設的な活動へ転換するもので、最も適応的（成熟した）防衛機制とされる。", difficulty: 2 },
    { type: "mcq", stem: "「集合的無意識」と「元型」という概念を提唱したのは誰か。", choices: ["アドラー", "ユング", "ホーナイ", "エリクソン"], answer: 1, explain: "ユングは無意識を個人的無意識と集合的無意識に分け、後者を構成する人類共通のイメージを元型と呼んだ。", difficulty: 1 },
    { type: "mcq", stem: "ユングの元型のうち、「社会に見せる仮面」を意味するものはどれか。", choices: ["シャドウ", "アニマ", "ペルソナ", "セルフ"], answer: 2, explain: "ペルソナは外的役割に適応した自己＝社会的な仮面を表す元型。シャドウは認めたくない否定的側面である。", difficulty: 2 },
    { type: "mcq", stem: "人格形成の鍵を「劣等感」とその克服（優越追求）に求めた新フロイト派の理論家は誰か。", choices: ["アドラー", "ユング", "ロジャーズ", "オールポート"], answer: 0, explain: "アドラー（個人心理学）は、幼少期の劣等感とそれを克服しようとする優越追求を成長の原動力とみなした。", difficulty: 2 },
    { type: "mcq", stem: "フロイトの女性観を批判し、性差は生物学より文化・社会的要因に由来すると主張したのは誰か。", choices: ["アンナ・フロイト", "カレン・ホーナイ", "マズロー", "ミシェル"], answer: 1, explain: "ホーナイは、フロイトの理論を文化的視点から批判し、基本的不安などの概念を提唱した。", difficulty: 3 },
    { type: "mcq", stem: "辞書から人を形容する語を大量に抽出し、特性を枢要特性・中心特性・二次的特性に階層化したのは誰か。", choices: ["アイゼンク", "キャッテル", "オールポート", "バンデューラ"], answer: 2, explain: "オールポートは語彙アプローチに基づき特性を抽出し、影響力の大きさで階層化した。", difficulty: 2 },
    { type: "mcq", stem: "外向–内向・神経症傾向・精神病質傾向の3次元を、生物学的基盤から説明したのは誰か。", choices: ["オールポート", "アイゼンク", "ロジャーズ", "ロッター"], answer: 1, explain: "アイゼンクは少数の生物学的基盤をもつ次元（最終的に3次元）に性格を集約した。外向性は大脳皮質の覚醒水準で説明された。", difficulty: 2 },
    { type: "mcq", stem: "ビッグファイブ（OCEAN）に含まれない因子はどれか。", choices: ["開放性", "誠実性", "知能（一般知能因子）", "協調性"], answer: 2, explain: "ビッグファイブは開放性・誠実性・外向性・協調性・神経症傾向の5因子。知能は含まれない。", difficulty: 1 },
    { type: "mcq", stem: "ビッグファイブのうち、学業成績や仕事の遂行を最もよく予測するとされる因子はどれか。", choices: ["外向性", "誠実性", "開放性", "神経症傾向"], answer: 1, explain: "誠実性（計画的・勤勉・自制的）は、学業・職務成績をよく予測することが多くの研究で示されている。", difficulty: 2 },
    { type: "mcq", stem: "特性論における「因子分析」の役割として正しいものはどれか。", choices: ["無意識の葛藤を解釈する", "多数の特性の相関から少数の共通因子を抽出する", "脳の活動を画像化する", "刺激と反応の連合を強化する"], answer: 1, explain: "因子分析は多変量の相関構造から少数の潜在因子を抽出する統計手法で、キャッテルやビッグファイブの構築に使われた。", difficulty: 2 },
    { type: "mcq", stem: "マズローの欲求階層において、最上位に位置する欲求はどれか。", choices: ["安全の欲求", "承認（自尊）の欲求", "所属と愛の欲求", "自己実現の欲求"], answer: 3, explain: "自己実現の欲求が最上位で、唯一の成長欲求とされる。下位4つは欠乏欲求である。", difficulty: 1 },
    { type: "mcq", stem: "ロジャーズが、健全な成長に不可欠とした「条件をつけずありのまま受容する態度」を何というか。", choices: ["無条件の肯定的配慮", "条件つきの価値", "自己効力感", "至高経験"], answer: 0, explain: "無条件の肯定的配慮（unconditional positive regard）は、来談者中心療法の核となるセラピストの態度である。", difficulty: 2 },
    { type: "mcq", stem: "ロジャーズの理論で、現実自己と理想自己が一致している適応的な状態を何というか。", choices: ["固着", "自己一致（congruence）", "個性化", "昇華"], answer: 1, explain: "自己一致は、自己概念（理想自己）と実際の経験（現実自己）が調和している状態で、適応の指標となる。", difficulty: 2 },
    { type: "mcq", stem: "「行動・個人（認知）・環境が互いに双方向に影響し合う」とするバンデューラの考えを何というか。", choices: ["三項随伴性", "相互決定論", "統制の所在", "古典的条件づけ"], answer: 1, explain: "相互決定論（reciprocal determinism）は、三者の双方向的な相互作用を強調する社会認知論の中心概念である。", difficulty: 2 },
    { type: "mcq", stem: "「自分はこの課題を遂行できる」という領域固有の主観的見込みを指すバンデューラの概念はどれか。", choices: ["自尊感情", "自己効力感", "理想自己", "優越追求"], answer: 1, explain: "自己効力感（self-efficacy）は特定課題の遂行可能性についての信念。価値全般を指す自尊感情とは区別される。", difficulty: 2 },
    { type: "mcq", stem: "結果の原因を運や他者など外部に帰属させやすい傾向を、ロッターの用語で何というか。", choices: ["内的統制", "外的統制", "内向", "防衛"], answer: 1, explain: "ロッターの統制の所在で、結果を外部の力に帰すのが外的統制、自分の努力・能力に帰すのが内的統制である。", difficulty: 2 },
    { type: "mcq", stem: "1968年に「行動は状況によって大きく変わる」と特性論を批判し、人間-状況論争を引き起こしたのは誰か。", choices: ["バンデューラ", "ロッター", "ミシェル", "キャッテル"], answer: 2, explain: "ミシェルは、特性と特定場面の行動の相関が低いことを指摘し、状況の力を強調した。後に相互作用論へと発展した。", difficulty: 3 },
    { type: "mcq", stem: "現在、人間-状況論争の決着として主流となっている立場はどれか。", choices: ["純粋な特性論", "純粋な状況主義", "相互作用論", "精神力動論"], answer: 2, explain: "行動は人（特性）と状況の相互作用で決まるとする相互作用論が主流。ミシェル自身も状況を組み込んだ理論へ進んだ。", difficulty: 2 },
    { type: "mcq", stem: "妥当性尺度を内蔵し、受検者の回答の歪みを検出できる代表的な臨床用質問紙はどれか。", choices: ["ロールシャッハ・テスト", "MMPI", "TAT", "バウムテスト"], answer: 1, explain: "MMPI（ミネソタ多面人格目録）は虚偽尺度などの妥当性尺度を備える点が特徴。残りはすべて投影法である。", difficulty: 2 },
    { type: "mcq", stem: "あいまいな絵を見せて物語を作らせ、欲求や葛藤を読み取る投影法はどれか。", choices: ["MMPI", "TAT（主題統覚検査）", "16PF", "Y-G性格検査"], answer: 1, explain: "TATはマレーが開発した投影法で、語られた物語に内面が投影されるとみる。MMPI・16PF・Y-Gは質問紙法である。", difficulty: 2 },
    { type: "mcq", stem: "投影法（ロールシャッハ等）に対して最も多く指摘される短所はどれか。", choices: ["実施に時間がかからなすぎる", "社会的望ましさの影響が強すぎる", "採点者の主観に依存し信頼性・妥当性に疑問がある", "無意識をまったく測れない"], answer: 2, explain: "投影法は豊かな情報が得られ回答操作されにくい反面、採点者の主観に左右され、信頼性・妥当性が問題視されてきた。", difficulty: 2 },
    { type: "mcq", stem: "行動遺伝学における「遺伝率」の正しい理解はどれか。", choices: ["ある個人の性格の何%が遺伝で決まるかを示す", "集団における特性の個人差のうち遺伝で説明できる割合", "親から子へ性格が伝わる確率", "遺伝子の総数に対する性格遺伝子の割合"], answer: 1, explain: "遺伝率は集団の個人差のうち遺伝で説明される割合であり、個人の性格の決定割合ではない。ビッグファイブでは概ね40〜60%。", difficulty: 3 },
    { type: "mcq", stem: "双生児研究の結果として繰り返し示されてきた、性格形成についての知見はどれか。", choices: ["共有環境（同じ家庭）の影響が圧倒的に大きい", "遺伝の影響はほとんど認められない", "非共有環境（個別の経験）の影響が大きく、共有環境の影響は意外に小さい", "一卵性と二卵性の類似度はほぼ等しい"], answer: 2, explain: "行動遺伝学は、遺伝に加え非共有環境の寄与が大きく、共有環境の影響は予想より小さいことを示してきた。", difficulty: 3 },
  ],
});
