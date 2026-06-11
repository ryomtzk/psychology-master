/* ============================================================
   物体と顔の認識  (vis_object)
   ============================================================ */
PsychApp.registerModule({
  id: "vis_object",
  title: "物体と顔の認識",
  emoji: "🗿",
  category: "vision",
  tagline: "Marrの計算理論・構造記述とジオン・視点依存性・腹側経路とIT野・顔認識の特殊性",
  overview: `<p>網膜像は照明・視点・距離・遮蔽によって絶えず変化するのに、私たちは同じ物体を同じ物体として同定できる。この<strong>不変性の問題</strong>こそ物体認識の核心であり、<strong>Marr の計算理論</strong>や<strong>成分による認識（RBC）</strong>はこれに答えようとする試みである。本分野では、原始スケッチから3次元モデル表現へと至るMarrの段階的表現、ジオンによる構造記述、視点依存・視点不変の論争を概観する。後半では<strong>腹側経路</strong>と<strong>下側頭皮質（IT野）</strong>の物体選択性、まばら符号化、そして<strong>紡錘状回顔領域（FFA）</strong>を中心とする顔認識の特殊性（全体的処理・倒立効果・相貌失認）を扱う。</p>`,
  lessons: [
    {
      title: "物体認識の理論 — Marrとジオン",
      body: `
        <p>物体認識が難しいのは、同じ物体でも見るたびに網膜像が変わるからである。視覚系は変動する入力から安定した同一性をいかに取り出すのか。これが認識理論の出発点となる。</p>
        <h3>不変性の問題</h3>
        <p><strong>不変性の問題（problem of invariance）</strong>とは、照明・<em>視点（viewpoint）</em>・距離・遮蔽が変わって網膜像が大きく異なっても、同じ物体を同じカテゴリに同定できるという課題である。単純な<strong>テンプレート照合説（template matching）</strong>は、記憶した鋳型と一致させて認識するとするが、視点や大きさが変わると照合に失敗するため成立しにくい。<strong>特徴説（feature theory）</strong>は構成要素の特徴で認識するとするが、特徴どうしの空間関係を扱えない点に限界がある。</p>
        <h3>Marr の計算理論と3段階の表現</h3>
        <p><strong>デビッド・マー（David Marr）</strong>は、視覚を情報処理として理解するには3つの水準を区別すべきだとした。すなわち<strong>計算理論（何をなぜ計算するか）・表現とアルゴリズム（どう表現し処理するか）・実装（どの神経機構で実現するか）</strong>の3水準である。これは現在も認知科学の分析枠組みとして用いられている。</p>
        <p>Marrはさらに、視覚的表現が次の3段階で構築されると考えた。</p>
        <ul>
          <li><strong>原始スケッチ（primal sketch）</strong>：輝度変化からエッジ・バー・斑点などの基本要素を抽出した、最初の二次元表現。</li>
          <li><strong>2.5次元スケッチ（2.5-D sketch）</strong>：面の向き・奥行き・不連続を<em>観察者中心（viewer-centered）</em>で表す。見えている面のみを記述し、裏側は含まない。</li>
          <li><strong>3次元モデル表現（3-D model）</strong>：物体を<em>対象中心（object-centered）</em>の座標で記述する。視点に依存しない、認識のための表現である。</li>
        </ul>
        <div class="callout key"><b>観察者中心 vs 対象中心</b>：2.5次元スケッチは<strong>観察者から見た面</strong>を表すのに対し、3次元モデル表現は<strong>物体それ自体の軸</strong>を基準に記述する。後者に至って初めて、視点によらない安定した認識が可能になる。</div>
        <h3>構造記述モデル — 成分による認識（RBC）</h3>
        <p><strong>アービング・ビーダーマン（Irving Biederman）</strong>の<strong>成分による認識（recognition-by-components, RBC）</strong>は、物体が少数の基本立体の組み合わせとして表現されるとする<strong>構造記述（structural description）</strong>モデルである。基本立体は<strong>ジオン（geon）</strong>と呼ばれ、円柱・直方体・くさび・円錐などおよそ<strong>36種</strong>とされる。物体はジオンの種類と<em>その空間関係</em>（上にある・横で接する等）で記述される。</p>
        <p>RBCの利点は<strong>視点不変性</strong>を説明できる点にある。ジオンはエッジの凹凸など<em>視点が変わっても保たれる性質（非偶有的特徴）</em>から検出されるため、多くの視点で同じジオン構成が得られ、安定した認識につながる。</p>
        <div class="callout example"><b>例</b>：コーヒーカップは「円柱（本体）の横に取っ手（細い曲がった部分）が接続している」という構造記述で表せる。同じ部品でも空間関係が変われば別物（バケツ等）になる。</div>
        <h3>視点依存か視点不変か</h3>
        <p>RBCは視点不変を予測するが、実験的には<em>そう単純ではない</em>。<strong>Tarr と Bülthoff</strong> らは、見慣れた視点ほど反応が速く誤りが少ないという<strong>視点依存性（viewpoint dependence）</strong>を繰り返し示した。新奇な視点では認識に時間を要し、心的回転に似たコストが生じる。現在は、物体や課題に応じて<strong>視点不変的処理と視点依存的処理が併存する</strong>という見方が有力である。</p>
      `,
      figure: `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="560" height="210" rx="14" fill="#f5f7fd"/>
        <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">Marr の3段階表現</text>
        <g>
          <rect x="30" y="55" width="140" height="90" rx="10" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
          <text x="100" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2433">原始スケッチ</text>
          <text x="100" y="100" text-anchor="middle" font-size="10" fill="#5b6478">エッジ・バー・斑点</text>
          <text x="100" y="116" text-anchor="middle" font-size="10" fill="#5b6478">二次元</text>
          <rect x="210" y="55" width="140" height="90" rx="10" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
          <text x="280" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2433">2.5次元スケッチ</text>
          <text x="280" y="100" text-anchor="middle" font-size="10" fill="#5b6478">面の向き・奥行き</text>
          <text x="280" y="116" text-anchor="middle" font-size="10" fill="#e0566b">観察者中心</text>
          <rect x="390" y="55" width="140" height="90" rx="10" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
          <text x="460" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2433">3次元モデル</text>
          <text x="460" y="100" text-anchor="middle" font-size="10" fill="#5b6478">視点に依存しない</text>
          <text x="460" y="116" text-anchor="middle" font-size="10" fill="#15c4a8">対象中心</text>
        </g>
        <line x1="172" y1="100" x2="206" y2="100" stroke="#5b6cf0" stroke-width="2" marker-end="url(#voa)"/>
        <line x1="352" y1="100" x2="386" y2="100" stroke="#5b6cf0" stroke-width="2" marker-end="url(#voa)"/>
        <defs><marker id="voa" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#5b6cf0"/></marker></defs>
        <text x="280" y="185" text-anchor="middle" font-size="11" fill="#5b6478">輝度変化から段階的に、視点不変な対象中心の記述へと至る</text>
      </svg>`,
      figcaption: "Marrの3段階表現。原始スケッチ（二次元）→2.5次元スケッチ（観察者中心の面）→3次元モデル表現（対象中心・視点不変）へと進む。",
      terms: [
        { term: "不変性の問題（problem of invariance）", def: "照明・視点・距離・遮蔽で網膜像が変わっても同一物体を同定できるという認識の核心課題。" },
        { term: "テンプレート照合説 / 特徴説", def: "前者は記憶の鋳型と照合、後者は特徴の集合で認識する説。視点変動や空間関係の扱いに限界がある。" },
        { term: "Marrの3水準", def: "計算理論・表現とアルゴリズム・実装の3水準。視覚を情報処理として分析する枠組み。" },
        { term: "原始スケッチ / 2.5次元 / 3次元モデル", def: "Marrの3段階表現。エッジ抽出→観察者中心の面→対象中心の視点不変表現へと進む。" },
        { term: "成分による認識（RBC）", def: "物体を基本立体とその空間関係で記述する構造記述モデル（Biederman）。視点不変性を説明する。" },
        { term: "ジオン（geon）", def: "RBCで物体を構成する約36種の基本立体プリミティブ。視点不変な特徴から検出される。" },
        { term: "視点依存性（Tarr & Bülthoff）", def: "見慣れた視点ほど認識が速く正確になる現象。RBCの純粋な視点不変予測と対立する。" },
        { term: "観察者中心 / 対象中心", def: "前者は観察者から見た面の記述、後者は物体自身の軸を基準にした視点不変の記述。" },
      ],
    },
    {
      title: "腹側経路と顔認識",
      body: `
        <p>物体認識の表現は脳のどこで実現されるのか。鍵となるのは「何（what）」を処理する<strong>腹側経路</strong>であり、その終着点で顔という特別なカテゴリの処理が見えてくる。</p>
        <h3>腹側経路と下側頭皮質（IT野）</h3>
        <p>後頭葉から側頭葉へ向かう<strong>腹側経路（ventral stream, 「何」経路）</strong>は物体の同定を担う。その高次領域である<strong>下側頭皮質（inferotemporal cortex, IT野）</strong>の細胞は、単純なエッジではなく<em>複雑な形状やカテゴリ</em>に選択的に応答する。応答は多数の細胞に薄く広がるのではなく、<strong>まばら符号化（sparse coding）</strong>——少数の細胞が選択的に強く応答する形——で表現されると考えられる。</p>
        <p>その極端な例が、Quiroga らがヒトの<strong>内側側頭葉（medial temporal lobe）</strong>で記録した<strong>概念選択的細胞</strong>である。ある細胞は特定の有名人の顔・名前・別アングルの写真に共通して応答した。報道で「<strong>ジェニファー・アニストン・ニューロン</strong>」と呼ばれたこの所見は、抽象的な概念に対応した不変的な表現の存在を示唆する。ただしこれは1細胞=1概念の祖母細胞説の証明ではなく、まばらだが分散した符号化と解釈される。</p>
        <h3>顔認識の特殊性</h3>
        <p>顔は他の物体と区別された<em>特別な処理</em>を受ける。<strong>ナンシー・カンウィッシャー（Nancy Kanwisher）</strong>は、紡錘状回の一領域が顔に選択的に強く応答することを示し、これを<strong>紡錘状回顔領域（fusiform face area, FFA）</strong>と名づけた。顔処理の特徴は<strong>全体的処理（holistic processing）</strong>——顔を部分の寄せ集めではなく一つのまとまりとして処理する傾向——にある。次の現象がこれを示す。</p>
        <table>
          <tr><th>現象</th><th>内容</th></tr>
          <tr><td><b>合成顔効果</b></td><td>別人の上半分と下半分を揃えて重ねると一つの新しい顔として統合され、上半分の同定が妨げられる。ずらすと妨害が消える。</td></tr>
          <tr><td><b>顔の倒立効果</b></td><td>顔を上下逆さにすると、他の物体より<em>認識成績が大きく低下</em>する。全体的処理が倒立で働きにくくなるため。</td></tr>
          <tr><td><b>サッチャー錯視</b></td><td>顔の目と口だけを倒立させた画像は、顔全体が倒立しているとほぼ正常に見えるが、正立に戻すと急に不気味になる。</td></tr>
        </table>
        <div class="callout key"><b>倒立効果の意味</b>：倒立で成績が特に落ちるのは、顔が<strong>部分の特徴だけでなく部分どうしの布置（配置的情報）</strong>に依存して処理されるためである。サッチャー錯視も配置情報の処理が倒立で破綻することを示す。</div>
        <h3>相貌失認とN170</h3>
        <p><strong>相貌失認（prosopagnosia）</strong>は、視力や知能、物体認識が保たれているのに<em>顔の同定だけが選択的に障害される</em>症状である。紡錘状回を含む腹側後頭側頭領域の損傷で生じ、しばしば声や服装で人を見分ける。これは顔処理が他の物体処理と部分的に独立していることの神経心理学的証拠となる。</p>
        <p>時間的には、顔の提示後およそ<strong>170ミリ秒</strong>に後側頭部で陰性のERP成分<strong>N170</strong>が現れる。N170は顔に対して物体より大きく、倒立顔では振幅が増大し潜時が遅れる。これは顔の構造的符号化を反映する指標とされる。</p>
      `,
      figure: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="220" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">顔の倒立効果 ＝ 配置情報の処理が破綻する</text>
        <g stroke="#1d2433" stroke-width="2" fill="none">
          <ellipse cx="140" cy="110" rx="50" ry="62"/>
          <circle cx="122" cy="92" r="8" fill="#1d2433"/>
          <circle cx="158" cy="92" r="8" fill="#1d2433"/>
          <path d="M120 135 Q140 150 160 135"/>
        </g>
        <text x="140" y="200" text-anchor="middle" font-size="11" fill="#15c4a8" font-weight="700">正立：配置情報を容易に処理</text>
        <g stroke="#1d2433" stroke-width="2" fill="none">
          <ellipse cx="380" cy="110" rx="50" ry="62"/>
          <path d="M360 85 Q380 70 400 85"/>
          <circle cx="362" cy="128" r="8" fill="#1d2433"/>
          <circle cx="398" cy="128" r="8" fill="#1d2433"/>
        </g>
        <text x="380" y="200" text-anchor="middle" font-size="11" fill="#e0566b" font-weight="700">倒立：全体的処理が働きにくい</text>
        <line x1="205" y1="110" x2="315" y2="110" stroke="#5b6478" stroke-width="1" stroke-dasharray="4 4"/>
      </svg>`,
      figcaption: "顔の倒立効果の模式。顔は部分どうしの配置（布置）に依存して処理されるため、倒立すると他の物体より認識成績が大きく低下する。",
      terms: [
        { term: "腹側経路（ventral stream）", def: "後頭から側頭へ向かう「何」経路。物体・カテゴリの同定を担う。" },
        { term: "下側頭皮質（IT野）", def: "腹側経路の高次領域。複雑な形状やカテゴリに選択的に応答する。" },
        { term: "まばら符号化（sparse coding）", def: "少数の細胞が選択的に強く応答する形で情報を表現する符号化方式。" },
        { term: "概念選択的細胞 / ジェニファー・アニストン・ニューロン", def: "内側側頭葉で特定の人物の顔・名前等に共通して応答した細胞（Quirogaら）。抽象的概念の不変表現を示唆。" },
        { term: "紡錘状回顔領域（FFA）", def: "顔に選択的に強く応答する紡錘状回の領域（Kanwisher）。顔処理の中核とされる。" },
        { term: "全体的処理（holistic processing）", def: "顔を部分の集合でなく一つのまとまりとして処理する傾向。合成顔効果などに現れる。" },
        { term: "顔の倒立効果 / サッチャー錯視", def: "顔を倒立させると認識が特に低下する効果と、目口を反転した顔が倒立では正常に見える錯視。配置情報処理の破綻を示す。" },
        { term: "相貌失認（prosopagnosia） / N170", def: "顔の同定だけが選択的に障害される症状と、顔提示後約170msの顔関連ERP成分。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "物体認識における「不変性の問題」とは何を指すか。", choices: ["物体の名前を思い出せないこと", "照明・視点・距離・遮蔽で網膜像が変わっても同じ物体と同定できること", "色が照明で変わって見えること", "両眼の像がずれること"], answer: 1, explain: "不変性の問題とは、網膜像が大きく変動しても同じ物体を同じカテゴリに同定できるという物体認識の核心課題である。", difficulty: 1 },
    { type: "mcq", stem: "Marrが提唱した視覚分析の3水準に含まれないものはどれか。", choices: ["計算理論", "表現とアルゴリズム", "実装（神経機構）", "学習と強化"], answer: 3, explain: "Marrの3水準は計算理論・表現とアルゴリズム・実装である。学習と強化はこの枠組みには含まれない。", difficulty: 2 },
    { type: "mcq", stem: "Marrの3段階表現のうち、面の向きや奥行きを観察者中心で表す段階はどれか。", choices: ["原始スケッチ", "2.5次元スケッチ", "3次元モデル表現", "ジオン記述"], answer: 1, explain: "2.5次元スケッチは見えている面の向き・奥行き・不連続を観察者中心で表す。裏側は含まず、3次元モデル表現は対象中心となる。", difficulty: 2 },
    { type: "mcq", stem: "Biedermanの成分による認識（RBC）で、物体を構成する約36種の基本立体を何というか。", choices: ["ボクセル", "ジオン（geon）", "プリミティブ錐体", "テクスチャン"], answer: 1, explain: "RBCではジオンと呼ばれる約36種の基本立体とその空間関係で物体を記述する。これにより視点不変な認識を説明する。", difficulty: 1 },
    { type: "mcq", stem: "RBC（成分による認識）が説明しようとする主な性質はどれか。", choices: ["色の恒常性", "視点不変な物体認識", "両眼立体視", "残像の生成"], answer: 1, explain: "ジオンは視点が変わっても保たれる非偶有的特徴から検出されるため、多くの視点で同じ構成が得られ、視点不変な認識を説明する。", difficulty: 2 },
    { type: "mcq", stem: "TarrとBülthoffらの研究が示した、RBCの純粋な予測と対立する知見はどれか。", choices: ["どの視点でも認識速度は一定である", "見慣れた視点ほど認識が速く正確になる視点依存性", "倒立すると物体認識が向上する", "色だけで物体を認識できる"], answer: 1, explain: "彼らは見慣れた視点ほど反応が速く誤りが少ない視点依存性を示した。これはRBCの完全な視点不変の予測と対立し、両処理の併存が示唆される。", difficulty: 3 },
    { type: "mcq", stem: "物体の同定を主に担う視覚経路はどれか。", choices: ["背側経路（「どこ・どのように」経路）", "腹側経路（「何」経路）", "膝状体外経路", "前庭経路"], answer: 1, explain: "腹側経路（ventral stream）は後頭から側頭へ向かう「何」経路で、物体やカテゴリの同定を担う。", difficulty: 1 },
    { type: "mcq", stem: "下側頭皮質（IT野）の細胞の応答特性として正しいのはどれか。", choices: ["単純な点光源にのみ応答する", "複雑な形状やカテゴリに選択的に応答する", "音の周波数に応答する", "眼球運動の方向のみを符号化する"], answer: 1, explain: "IT野は腹側経路の高次領域で、エッジではなく複雑な形状やカテゴリに選択的に応答し、まばら符号化で物体を表現すると考えられる。", difficulty: 2 },
    { type: "mcq", stem: "Quirogaらがヒト内側側頭葉で記録し、特定の人物の顔・名前・別写真に共通して応答した細胞は俗に何と呼ばれたか。", choices: ["ミラーニューロン", "ジェニファー・アニストン・ニューロン", "場所細胞", "グリッド細胞"], answer: 1, explain: "報道で「ジェニファー・アニストン・ニューロン」と呼ばれた概念選択的細胞である。抽象的概念の不変的表現を示唆するが、まばらな分散符号化と解釈される。", difficulty: 2 },
    { type: "mcq", stem: "Kanwisherが見いだした、顔に選択的に強く応答する領域はどれか。", choices: ["一次視覚野（V1）", "紡錘状回顔領域（FFA）", "海馬", "ブローカ野"], answer: 1, explain: "紡錘状回顔領域（FFA, fusiform face area）は紡錘状回にあり顔に選択的に応答する。顔処理の中核とされる。", difficulty: 1 },
    { type: "mcq", stem: "顔の倒立効果が、顔が「全体的処理」と配置情報に依存することを示すのはなぜか。", choices: ["倒立しても成績が変わらないから", "倒立で他の物体より認識成績が大きく低下するから", "倒立すると色が変わるから", "倒立で残像が強まるから"], answer: 1, explain: "顔を倒立させると他の物体より認識成績が大きく落ちる。これは顔が部分の配置（布置）に依存して全体的に処理されることを示す。", difficulty: 2 },
    { type: "mcq", stem: "視力や知能、一般的な物体認識は保たれているのに顔の同定だけが選択的に障害される症状はどれか。", choices: ["失読症", "相貌失認（prosopagnosia）", "半側空間無視", "色覚異常"], answer: 1, explain: "相貌失認は顔の同定のみが選択的に障害される症状で、腹側後頭側頭領域の損傷で生じる。顔処理が部分的に独立していることの証拠となる。", difficulty: 2 },
    { type: "mcq", stem: "顔の提示後およそ170msに後側頭部で生じ、倒立顔で振幅が増大し潜時が遅れるERP成分はどれか。", choices: ["P300", "N170", "ミスマッチ陰性電位（MMN）", "C1"], answer: 1, explain: "N170は顔提示後約170msに現れる顔関連ERP成分で、顔に対し物体より大きく、倒立顔で振幅増大・潜時遅延を示す。構造的符号化を反映するとされる。", difficulty: 3 },
  ],
});
