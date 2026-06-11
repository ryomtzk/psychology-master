/* ============================================================
   視覚科学（特別編）  錯視のメカニズム  (vis_illusion)
   ============================================================ */
PsychApp.registerModule({
  id: "vis_illusion",
  title: "錯視のメカニズム",
  emoji: "🌗",
  category: "vision",
  tagline: "幾何学的錯視・明るさの錯視・多義図形と不可能図形・錯視が明かす知覚の原理",
  overview: `<p><strong>錯視（illusion）</strong>は、物理的刺激と知覚とのあいだに体系的なずれが生じる現象である。重要なのは、錯視が知覚系の「故障」ではなく、<strong>通常は適応的に働く知覚のしくみ（恒常性・無意識的推論・事前の前提）が特殊な条件で表面化したもの</strong>だという点である。錯視を分析することで、脳がどのような前提のもとに外界を構成しているかが逆照射される。本分野では幾何学的錯視と明るさの錯視を概観し、続いて多義図形・不可能図形を通じて知覚の理論的意義を考える。</p>`,
  lessons: [
    {
      title: "幾何学的錯視と明るさの錯視",
      body: `
        <p>錯視は大きく、形・大きさ・傾きが歪んで見える<strong>幾何学的錯視（geometrical illusion）</strong>と、明暗の見えが文脈で変わる<strong>明るさ／明度の錯視（lightness illusion）</strong>に分けられる。両者は説明原理が一部重なるが、別物として区別して理解することが望ましい。</p>
        <h3>幾何学的錯視</h3>
        <p>同じ物理量が文脈によって異なる大きさ・長さ・傾きに見える錯視である。代表例を挙げる。</p>
        <table>
          <tr><th>錯視</th><th>内容</th></tr>
          <tr><td><b>ミュラー・リヤー錯視</b></td><td>同じ長さの線分が、矢羽根が外向き（&lt;—&gt;）だと長く、内向き（&gt;—&lt;）だと短く見える。</td></tr>
          <tr><td><b>ポンゾ錯視</b></td><td>収束線（線路状）の上に置いた同じ長さの2本のうち、奥（上）が長く見える。</td></tr>
          <tr><td><b>エビングハウス錯視</b></td><td>同じ円が、大きい円に囲まれると小さく、小さい円に囲まれると大きく見える。</td></tr>
          <tr><td><b>ツェルナー錯視</b></td><td>短い斜線が並ぶと、平行な長い線が互いに傾いて見える。</td></tr>
          <tr><td><b>ポッゲンドルフ錯視</b></td><td>遮蔽物を横切る直線が、両側でずれて見える（連続が断たれる）。</td></tr>
          <tr><td><b>垂直水平錯視</b></td><td>同じ長さでも、垂直線が水平線より長く見える。</td></tr>
          <tr><td><b>カフェウォール錯視</b></td><td>明暗のタイルがずれて並ぶと、平行な目地が傾いて見える。</td></tr>
        </table>
        <h4>説明仮説</h4>
        <p>幾何学的錯視には単一の説明はなく、複数の機序が想定される。第一に、グレゴリー（<em>Gregory</em>）の<strong>奥行き手がかりの誤適用による大きさ恒常性の誤作動（misapplied size constancy）</strong>がある。ミュラー・リヤーやポンゾでは、矢羽根や収束線が奥行きの手がかりとして解釈され、本来「遠い」と推定されるべき対象に大きさの補正がかかると説明される。第二に、隣接刺激との<strong>対比（contrast）</strong>や<strong>同化（assimilation）</strong>（エビングハウス）、第三に局所的な<strong>傾きの相互作用</strong>（ツェルナー・カフェウォール）がある。一つの錯視に複数の機序が関与しうる。</p>
        <h3>明るさ／明度の錯視</h3>
        <p>同じ物理輝度の領域が、周囲との関係で異なる明るさ・明度に見える錯視である。ここで重要なのは、<strong>側抑制（lateral inhibition）で説明できる例とできない例を区別する</strong>ことである。</p>
        <h4>側抑制で説明できる例</h4>
        <ul>
          <li><strong>マッハバンド（Mach bands）</strong>：明るさが連続的に変化する境界で、明側に明るい帯・暗側に暗い帯が見える。網膜の側抑制によるエッジ強調で説明される。</li>
          <li><strong>ヘルマン格子（Hermann grid）</strong>：黒い升目の白い交差点に灰色の影が見える。受容野の中心—周辺拮抗による説明が古典的である。動かすと点が明滅する変種を<strong>きらめき格子（scintillating grid）</strong>という。</li>
        </ul>
        <h4>側抑制では説明できない例</h4>
        <ul>
          <li><strong>同時明度対比（simultaneous lightness contrast）</strong>：同じ灰色の正方形が、暗い背景では明るく、明るい背景では暗く見える。低次の対比に加え高次の解釈も関与する。</li>
          <li><strong>コーンスイート錯視（Craik–O'Brien–Cornsweet illusion）</strong>：境界の勾配だけで両側全体の明るさが違って見える。</li>
          <li><strong>White効果（White's illusion）</strong>：単純な明度対比とは逆向きの効果が生じ、側抑制では説明できない。所属する縞や面の解釈が効く。</li>
          <li><strong>チェッカーシャドウ錯視（Adelson のチェッカーシャドウ）</strong>：影の中の明るいマスと影の外の暗いマスが物理的に同一輝度なのに大きく違って見える。脳が照明（影）を割り引いて<em>反射率</em>を推定するために生じ、側抑制では説明できない。</li>
        </ul>
        <div class="callout key"><b>区別の要点</b>：マッハバンドやヘルマン格子のような局所的な明暗強調は<strong>側抑制（低次)</strong>でよく説明できる。一方、White効果やチェッカーシャドウは<strong>面の所属や照明の推定という高次の解釈</strong>を要し、側抑制だけでは説明できない。</div>
        <div class="callout warn"><b>注意</b>：ヘルマン格子を「すべて側抑制で説明できる」とするのは単純化しすぎである。中心視で影が消えることなど、古典的な側抑制説では説明しきれない側面も指摘されている。</div>
      `,
      figure: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="300" rx="14" fill="#f5f7fd"/>
        <text x="240" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">明るさの錯視：低次と高次</text>
        <text x="120" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#5b6478">同時明度対比（対比）</text>
        <rect x="40" y="60" width="75" height="90" fill="#1d2433"/>
        <rect x="125" y="60" width="75" height="90" fill="#c9cfe0"/>
        <rect x="62" y="90" width="31" height="31" fill="#8b91a3"/>
        <rect x="147" y="90" width="31" height="31" fill="#8b91a3"/>
        <text x="120" y="168" text-anchor="middle" font-size="9.5" fill="#5b6478">中央の灰色は同一輝度</text>
        <text x="350" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#5b6478">影の割り引き（反射率推定）</text>
        <rect x="270" y="60" width="160" height="90" fill="#e9ebfe"/>
        <polygon points="350,60 430,60 430,150 392,150" fill="#d7dbe8"/>
        <rect x="290" y="80" width="34" height="34" fill="#8b91a3"/>
        <text x="307" y="101" text-anchor="middle" font-size="9" fill="#fff">明</text>
        <rect x="398" y="105" width="26" height="26" fill="#8b91a3"/>
        <text x="411" y="121" text-anchor="middle" font-size="8" fill="#fff">暗?</text>
        <text x="350" y="168" text-anchor="middle" font-size="9.5" fill="#5b6478">影内の「明」と影外の「暗」も同一輝度</text>
        <line x1="40" y1="186" x2="440" y2="186" stroke="#c9cfe0" stroke-width="1"/>
        <text x="240" y="208" text-anchor="middle" font-size="11" font-weight="700" fill="#5b6cf0">側抑制で説明できる ↔ 側抑制では説明できない</text>
        <text x="135" y="232" text-anchor="middle" font-size="10" fill="#15c4a8">マッハバンド／ヘルマン格子</text>
        <text x="135" y="250" text-anchor="middle" font-size="9" fill="#5b6478">（低次・網膜の側抑制）</text>
        <text x="350" y="232" text-anchor="middle" font-size="10" fill="#e0566b">White効果／チェッカーシャドウ</text>
        <text x="350" y="250" text-anchor="middle" font-size="9" fill="#5b6478">（高次・面の所属／照明推定）</text>
        <text x="240" y="282" text-anchor="middle" font-size="9.5" fill="#5b6478">明るさの錯視は単一原理では説明できない</text>
      </svg>`,
      figcaption: "明るさの錯視には、網膜の側抑制で説明できる低次のもの（マッハバンド・ヘルマン格子）と、面の所属や照明の推定という高次の解釈を要するもの（White効果・チェッカーシャドウ）がある。",
      terms: [
        { term: "幾何学的錯視", def: "形・大きさ・長さ・傾きが文脈によって歪んで見える錯視（ミュラー・リヤー等）。" },
        { term: "大きさ恒常性の誤作動（misapplied size constancy）", def: "奥行き手がかりが誤って適用され、大きさの恒常性補正が裏目に出るとするグレゴリーの説明。" },
        { term: "対比と同化", def: "対比は隣接刺激と反対方向に、同化は同方向に見えがずれる効果。" },
        { term: "側抑制（lateral inhibition）", def: "興奮した細胞が隣接細胞を抑制する仕組み。エッジ強調を生み、マッハバンド等を説明する。" },
        { term: "マッハバンド", def: "明暗の勾配の境界に明帯・暗帯が見える錯視。側抑制で説明される。" },
        { term: "ヘルマン格子／きらめき格子", def: "白い交差点に灰色の影が見える錯視。動的変種がきらめき格子（scintillating grid）。" },
        { term: "White効果（White's illusion）", def: "単純な明度対比とは逆向きの効果を示し、側抑制では説明できない明るさの錯視。" },
        { term: "チェッカーシャドウ錯視", def: "Adelson の錯視。影を割り引いて反射率を推定するため、同一輝度の面が違って見える。側抑制では説明できない。" },
      ],
    },
    {
      title: "多義図形・不可能図形と理論的意義",
      body: `
        <p>同じ刺激が複数の安定した解釈をもつ図形や、局所と大域が矛盾する図形は、知覚が「与えられた像」ではなく「最良の解釈」を出力していることを鮮やかに示す。</p>
        <h3>多義図形と双安定知覚</h3>
        <p><strong>多義図形（ambiguous figure）</strong>は、物理刺激が一定なのに二通り以上に知覚される図形である。とくに二つの安定解の間で見えが交替するものを<strong>双安定知覚（bistable perception）</strong>という。</p>
        <ul>
          <li><strong>ネッカーの立方体（Necker cube）</strong>：線画の立方体で、どの面が手前かが反転する（奥行きの曖昧性）。</li>
          <li><strong>ルビンの壺（Rubin's vase）</strong>：図と地が反転し、壺にも向き合う二つの顔にも見える。</li>
          <li><strong>妻と義母（My Wife and My Mother-in-Law）</strong>：若い女性にも老女にも見える。</li>
          <li><strong>ウサギ–アヒル図（rabbit–duck）</strong>：ウサギにもアヒルにも見える。</li>
        </ul>
        <p>これらで生じる<strong>知覚交替（perceptual switching）</strong>は、一方の解釈に対応する神経活動が<em>神経順応（neural adaptation）</em>で弱まると他方が優勢になる、というボトムアップ要因と、注意や教示・期待といったトップダウンの影響の両方を受ける。物理刺激が変わらないのに知覚が変わる点が理論的に重要である。</p>
        <h3>不可能図形</h3>
        <p><strong>不可能図形（impossible figure）</strong>は、各部分（局所）は妥当な立体として解釈できるのに、全体（大域）としては三次元に成立しえない図形である。</p>
        <ul>
          <li><strong>ペンローズの三角形（Penrose triangle）</strong>：3本の梁がそれぞれ直角に接続するが、全体として閉じた三角柱は実在できない。</li>
          <li><strong>不可能なフォーク（impossible fork / blivet）</strong>：先端では3本だが根元では2本になる。</li>
          <li><strong>エッシャー（M. C. Escher）の版画</strong>：『上昇と下降』『滝』など、不可能図形の原理を絵画に応用した作品群。</li>
        </ul>
        <p>不可能図形は、知覚系が<strong>局所的な接合を優先して解釈し、大域的な整合性を最後まで点検しない</strong>ことを示す。局所では成立する解釈を継ぎ合わせるため、全体の矛盾に気づきにくい。</p>
        <h3>錯視の理論的意義</h3>
        <div class="callout key"><b>錯視は「失敗」ではない</b>：錯視は、通常は適応的に働く知覚の前提（<em>priors</em>）・無意識的推論（unconscious inference）・恒常性メカニズムが、自然界ではまれな特殊条件で表面化したものである。視覚系は網膜像という不完全な情報から外界の最良の解釈を構成しており、その推論の規則を実験室の刺激が逆手に取ったとき、錯視が生じる。</div>
        <div class="callout example"><b>例</b>：ミュラー・リヤー錯視は、矢羽根を「部屋の隅（凹）か出っ張り（凸）か」という奥行き手がかりとして解釈し、大きさの恒常性が働くために生じると説明される。日常では妥当なこの推論が、奥行きのない線画では誤りとなる。</div>
        <p>すなわち錯視研究は、知覚が外界をそのまま写すのではなく、<strong>世界の規則性を内在化した前提のもとで能動的に推論している</strong>ことを示す窓である。この視点は次分野のベイズ知覚へと自然につながる。</p>
      `,
      figure: `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="240" rx="14" fill="#f5f7fd"/>
        <text x="240" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">多義図形と不可能図形</text>
        <text x="120" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#5b6478">ネッカーの立方体（双安定）</text>
        <g stroke="#5b6cf0" stroke-width="2" fill="none">
          <rect x="70" y="75" width="70" height="70"/>
          <rect x="100" y="55" width="70" height="70"/>
          <line x1="70" y1="75" x2="100" y2="55"/>
          <line x1="140" y1="75" x2="170" y2="55"/>
          <line x1="70" y1="145" x2="100" y2="125"/>
          <line x1="140" y1="145" x2="170" y2="125"/>
        </g>
        <text x="120" y="172" text-anchor="middle" font-size="9.5" fill="#5b6478">手前の面が反転する</text>
        <text x="350" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#5b6478">ペンローズの三角形（不可能）</text>
        <g stroke="#e0566b" stroke-width="2" fill="#fbe3e7" stroke-linejoin="round">
          <polygon points="300,140 360,140 330,90 318,110 342,110 312,140"/>
          <polygon points="360,140 400,72 388,66 354,128 330,90 342,84"/>
          <polygon points="400,72 318,72 318,84 388,84 354,128 366,134"/>
        </g>
        <text x="350" y="172" text-anchor="middle" font-size="9.5" fill="#5b6478">局所は妥当・大域で矛盾</text>
        <line x1="40" y1="188" x2="440" y2="188" stroke="#c9cfe0" stroke-width="1"/>
        <text x="240" y="210" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15c4a8">錯視＝適応的な知覚の前提が特殊条件で表面化したもの</text>
        <text x="240" y="228" text-anchor="middle" font-size="9.5" fill="#5b6478">知覚は像をそのまま写すのでなく最良の解釈を出力する</text>
      </svg>`,
      figcaption: "ネッカーの立方体は同一刺激のまま見えが交替する（双安定）。ペンローズの三角形は各部分は妥当でも全体では成立しない。いずれも知覚が能動的な解釈であることを示す。",
      terms: [
        { term: "多義図形（ambiguous figure）", def: "物理刺激が一定なのに複数に知覚される図形。ルビンの壺、ウサギ–アヒルなど。" },
        { term: "双安定知覚（bistable perception）", def: "二つの安定解の間で見えが交替する知覚。ネッカーの立方体が代表。" },
        { term: "知覚交替（perceptual switching）", def: "多義図形で見えが切り替わること。神経順応とトップダウンの影響を受ける。" },
        { term: "神経順応（neural adaptation）", def: "持続的活動で神経応答が弱まる現象。一方の解釈の優勢が崩れ交替を促す。" },
        { term: "不可能図形（impossible figure）", def: "局所は妥当でも大域的に三次元として成立しない図形。ペンローズの三角形等。" },
        { term: "ペンローズの三角形", def: "3本の梁が直角接続するが全体として実在しえない不可能図形。" },
        { term: "無意識的推論（unconscious inference）", def: "知覚が無意識の推論で像を解釈するとするヘルムホルツ由来の考え。錯視の基盤。" },
        { term: "事前の前提（priors）", def: "世界の規則性を内在化した知覚の前提。通常は適応的だが特殊条件で錯視を生む。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "ミュラー・リヤー錯視やポンゾ錯視を、奥行き手がかりの誤った適用によって説明する古典的な考え方の提唱者は誰か。", choices: ["ヘルマン", "グレゴリー（Gregory）", "アデルソン", "ペンローズ"], answer: 1, explain: "グレゴリーは、奥行き手がかりが誤って適用され大きさの恒常性が裏目に出る（misapplied size constancy）として幾何学的錯視を説明した。", difficulty: 2 },
    { type: "mcq", stem: "「同じ円が、大きい円に囲まれると小さく、小さい円に囲まれると大きく見える」錯視はどれか。", choices: ["ポッゲンドルフ錯視", "ツェルナー錯視", "エビングハウス錯視", "カフェウォール錯視"], answer: 2, explain: "エビングハウス錯視は周囲の円との対比により中心円の大きさの見えが変わる。隣接刺激との対比で説明される。", difficulty: 1 },
    { type: "mcq", stem: "明暗のタイルがずれて並ぶことで、平行な目地が傾いて見える錯視はどれか。", choices: ["カフェウォール錯視", "垂直水平錯視", "ミュラー・リヤー錯視", "ヘルマン格子"], answer: 0, explain: "カフェウォール錯視は、ずれた明暗タイルによる局所的な傾きの相互作用で、平行線が傾いて見える幾何学的錯視である。", difficulty: 2 },
    { type: "mcq", stem: "明るさが連続的に変化する境界に明帯・暗帯が見える「マッハバンド」を最もよく説明する仕組みはどれか。", choices: ["照明の割り引き", "面の所属の解釈", "網膜の側抑制（lateral inhibition）", "両眼視差"], answer: 2, explain: "マッハバンドは網膜の側抑制によるエッジ強調で説明される。側抑制で説明できる代表的な明るさの錯視である。", difficulty: 2 },
    { type: "mcq", stem: "次のうち、側抑制（lateral inhibition）だけでは説明できないとされる明るさの錯視はどれか。", choices: ["マッハバンド", "ヘルマン格子", "チェッカーシャドウ錯視", "きらめき格子"], answer: 2, explain: "Adelson のチェッカーシャドウ錯視は、脳が影を割り引いて反射率を推定するため生じる高次の現象で、側抑制では説明できない。マッハバンドやヘルマン格子は側抑制で説明される側面が大きい。", difficulty: 3 },
    { type: "mcq", stem: "チェッカーシャドウ錯視（Adelson）で、影の中の明るいマスと影の外の暗いマスが大きく違って見える主な理由はどれか。", choices: ["二つのマスの物理輝度が実際に異なるから", "脳が照明（影）を割り引いて反射率を推定するから", "桿体と錐体の感度差によるから", "両眼視差によるから"], answer: 1, explain: "両マスは物理的に同一輝度だが、脳が影を割り引いて表面の反射率を推定するため、見えの明るさが大きく異なる。", difficulty: 3 },
    { type: "mcq", stem: "ヘルマン格子の動的な変種で、白い交差点が明滅して見えるものを何というか。", choices: ["コーンスイート錯視", "きらめき格子（scintillating grid）", "White効果", "同時明度対比"], answer: 1, explain: "きらめき格子（scintillating grid）はヘルマン格子の変種で、視線を動かすと交差点の点が明滅して見える。", difficulty: 2 },
    { type: "mcq", stem: "単純な明度対比とは逆向きの効果が生じ、側抑制では説明できない明るさの錯視はどれか。", choices: ["White効果（White's illusion）", "マッハバンド", "ヘルマン格子", "垂直水平錯視"], answer: 0, explain: "White効果は、灰色の見えが単純な対比予測と逆向きにずれる。所属する縞や面の解釈が関与し、側抑制では説明できない。", difficulty: 3 },
    { type: "mcq", stem: "物理刺激が一定のまま、二つの安定した解釈の間で見えが交替する知覚を何というか。", choices: ["残像", "双安定知覚（bistable perception）", "感覚順応", "仮現運動"], answer: 1, explain: "双安定知覚は、ネッカーの立方体などで二つの安定解の間を見えが行き来する現象である。", difficulty: 1 },
    { type: "mcq", stem: "ネッカーの立方体で見えが反転する「知覚交替」に関与する要因として適切なものはどれか。", choices: ["網膜像そのものの物理的変化", "神経順応とトップダウン（注意・期待）の両方", "色の恒常性のみ", "両眼視差のみ"], answer: 1, explain: "知覚交替は、一方の解釈に対応する活動の神経順応というボトムアップ要因と、注意・教示・期待というトップダウンの両方の影響を受ける。", difficulty: 2 },
    { type: "mcq", stem: "ペンローズの三角形のような不可能図形の特徴として最も適切なのはどれか。", choices: ["どの部分も三次元として解釈できない", "局所的には妥当だが大域的には矛盾している", "色の恒常性の誤作動である", "両眼でしか成立しない"], answer: 1, explain: "不可能図形は、各部分は妥当な立体として解釈できるのに、全体としては三次元に成立しえない。知覚系が局所接合を優先することを示す。", difficulty: 2 },
    { type: "mcq", stem: "錯視の理論的意義についての記述として最も適切なのはどれか。", choices: ["錯視は知覚系の単なる故障であり例外的な現象である", "錯視は、通常は適応的に働く知覚の前提・無意識的推論・恒常性が特殊条件で表面化したものである", "錯視は学習によって完全に消去できる", "錯視は感覚受容器の数の不足によって生じる"], answer: 1, explain: "錯視は失敗ではなく、世界の規則性を内在化した知覚の前提や恒常性メカニズムが、自然界ではまれな条件で表面化した結果である。", difficulty: 1 },
  ],
});
