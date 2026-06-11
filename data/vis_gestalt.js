/* ============================================================
   知覚の体制化  (vis_gestalt)
   ============================================================ */
PsychApp.registerModule({
  id: "vis_gestalt",
  title: "知覚の体制化",
  emoji: "🧩",
  category: "vision",
  tagline: "ゲシュタルト諸法則・図と地・主観的輪郭・現代の体制化原理・ベイズ的解釈",
  overview: `<p>網膜には無数の点や輝度値が散らばるだけだが、私たちはそれを<em>まとまった物体</em>として知覚する。この「ばらばらの感覚要素をまとまりへと組織化する」働きが<strong>知覚の体制化（perceptual organization）</strong>である。本分野ではまず、20世紀初頭の<strong>ゲシュタルト心理学</strong>が定式化した群化の法則と<strong>図と地の分凝</strong>を扱う。後半では、物理的に存在しない輪郭を補う<strong>主観的輪郭</strong>、現代に追加された体制化原理、そして体制化を「最も尤もらしい外界の解釈の選択」と捉える<strong>ベイズ的／尤度的解釈</strong>を見る。</p>`,
  lessons: [
    {
      title: "ゲシュタルトの体制化原理",
      body: `
        <p>同じ要素が並んでいても、配置次第で全く違うまとまりに見える。視覚系は要素を機械的に足し合わせるのではなく、一定の原理に従って<em>組織化</em>している。</p>
        <h3>ゲシュタルト心理学</h3>
        <p><strong>ゲシュタルト心理学（Gestalt psychology）</strong>は、<em>ヴェルトハイマー（Wertheimer）・ケーラー（Köhler）・コフカ（Koffka）</em>を中心に20世紀初頭に興った学派である。<strong>「全体は部分の総和以上である」</strong>を標語とし、要素に分解する要素主義に対して、知覚はまず<em>まとまり（ゲシュタルト）</em>として成立すると主張した。</p>
        <h3>群化の法則</h3>
        <p>要素がどのようにまとまるかを定める<strong>群化（grouping）の法則</strong>には次のものがある。</p>
        <ul>
          <li><strong>近接（proximity）</strong>：近いものどうしがまとまる。</li>
          <li><strong>類同（similarity）</strong>：色・形・大きさが似たものがまとまる。</li>
          <li><strong>閉合（closure）</strong>：欠けた図形を閉じた完全な形として補う。</li>
          <li><strong>よい連続（good continuation）</strong>：滑らかに連続する方向にまとまる。</li>
          <li><strong>共通運命（common fate）</strong>：同じ方向に同じ速さで動くものがまとまる。</li>
          <li><strong>対称性（symmetry）</strong>：対称な領域がまとまりやすい。</li>
          <li><strong>簡潔性＝プレグナンツ（Prägnanz）</strong>：知覚は可能な限り単純・規則的・対称な形にまとまる。群化の法則を貫く<em>上位の原理</em>とされる。</li>
        </ul>
        <div class="callout key"><b>プレグナンツの原理</b>：あらゆる群化を貫くのが<strong>簡潔性（プレグナンツ）</strong>である。視覚系は、与えられた刺激に対して<em>最も単純で規則的な</em>解釈を選ぶ。「よい形（Gute Gestalt）」への傾向ともいう。</div>
        <h3>図と地の分凝</h3>
        <p>体制化の第一歩は、視野を<strong>図（figure）</strong>と<strong>地（ground）</strong>に分けることである。これを<strong>図地分凝（figure-ground segregation）</strong>という。図は形をもち手前に浮き出て見え、地は背景として図の背後に広がり形をもたない。<em>ルビンの壺（Rubin's vase）</em>は、同じ輪郭が壺にも向かい合う2つの顔にも見える<strong>図地反転図形</strong>の代表である。どちらを図と見るかは同時には決まらず、交替する。</p>
        <p>どの領域が<strong>図になりやすいか</strong>には規則性がある。</p>
        <ul>
          <li><strong>小さい領域</strong>ほど図になりやすい。</li>
          <li>他に<strong>囲まれた領域</strong>は図になりやすい。</li>
          <li><strong>凸（convex）</strong>の領域は図になりやすい。</li>
          <li><strong>対称</strong>な領域は図になりやすい。</li>
          <li>視野の<strong>下方</strong>にある領域は図になりやすい。</li>
        </ul>
        <div class="callout example"><b>ルビンの壺</b>：白い壺を図と見れば黒は地、黒い2つの顔を図と見れば白は地となる。輪郭は<em>図の側</em>に属するように見える（境界の所有 border ownership）。同じ網膜像から2通りの体制化が生じる好例である。</div>
      `,
      figure: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="220" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">群化の法則 — 近接と類同</text>
        <text x="135" y="52" text-anchor="middle" font-size="11" fill="#5b6478">近接：近いものがまとまる</text>
        <g fill="#5b6cf0">
          <circle cx="80" cy="90" r="7"/><circle cx="100" cy="90" r="7"/>
          <circle cx="150" cy="90" r="7"/><circle cx="170" cy="90" r="7"/>
          <circle cx="80" cy="130" r="7"/><circle cx="100" cy="130" r="7"/>
          <circle cx="150" cy="130" r="7"/><circle cx="170" cy="130" r="7"/>
        </g>
        <rect x="68" y="78" width="44" height="64" rx="8" fill="none" stroke="#e0566b" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="138" y="78" width="44" height="64" rx="8" fill="none" stroke="#e0566b" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="385" y="52" text-anchor="middle" font-size="11" fill="#5b6478">類同：似たものがまとまる</text>
        <g>
          <circle cx="320" cy="90" r="7" fill="#5b6cf0"/><rect x="343" y="83" width="14" height="14" fill="#15c4a8"/><circle cx="380" cy="90" r="7" fill="#5b6cf0"/><rect x="403" y="83" width="14" height="14" fill="#15c4a8"/><circle cx="440" cy="90" r="7" fill="#5b6cf0"/>
          <circle cx="320" cy="130" r="7" fill="#5b6cf0"/><rect x="343" y="123" width="14" height="14" fill="#15c4a8"/><circle cx="380" cy="130" r="7" fill="#5b6cf0"/><rect x="403" y="123" width="14" height="14" fill="#15c4a8"/><circle cx="440" cy="130" r="7" fill="#5b6cf0"/>
        </g>
        <text x="385" y="160" text-anchor="middle" font-size="10" fill="#5b6478">色・形の似た列ごとにまとまって見える</text>
        <text x="260" y="200" text-anchor="middle" font-size="11" fill="#1d2433">いずれも上位原理「簡潔性（プレグナンツ）」に貫かれる</text>
      </svg>`,
      figcaption: "群化の法則。近接（近いものがまとまる）と類同（似たものがまとまる）。これらの法則はすべて、最も単純な解釈を選ぶ簡潔性（プレグナンツ）の原理に貫かれる。",
      terms: [
        { term: "ゲシュタルト心理学（Gestalt psychology）", def: "ヴェルトハイマーらが興した学派。「全体は部分の総和以上である」を標語に知覚をまとまりとして捉える。" },
        { term: "群化（grouping）の法則", def: "要素のまとまり方を定める法則。近接・類同・閉合・よい連続・共通運命・対称性など。" },
        { term: "近接 / 類同 / 閉合 / よい連続", def: "近い・似た・欠けを補う・滑らかに連続する、という代表的な群化の法則。" },
        { term: "共通運命（common fate）", def: "同じ方向に同じ速さで動く要素がまとまる群化の法則。運動による群化。" },
        { term: "プレグナンツ（Prägnanz）", def: "知覚を最も単純・規則的・対称な形にまとめる簡潔性の原理。群化を貫く上位原理。" },
        { term: "図地分凝（figure-ground）", def: "視野を形をもつ図と背景の地に分ける体制化の第一歩。ルビンの壺が代表例。" },
        { term: "ルビンの壺", def: "壺にも2つの顔にも見える図地反転図形。どちらを図と見るかが交替する。" },
        { term: "図になりやすい要因", def: "小さい・囲まれた・凸・対称・下方の領域は図になりやすい。" },
      ],
    },
    {
      title: "主観的輪郭と現代的展開",
      body: `
        <p>体制化は、与えられた要素を組織化するだけでなく、<em>存在しない要素を補って</em>まで成立する。ゲシュタルトの洞察は、現代の知覚理論にも受け継がれている。</p>
        <h3>主観的輪郭 — ないものを見る</h3>
        <p><strong>主観的輪郭／錯視的輪郭（subjective/illusory contours）</strong>とは、物理的には存在しない輪郭やエッジを視覚系が<em>補完して知覚する</em>現象である。<em>カニッツァ（Kanizsa）の三角形</em>が代表で、3つの欠けた円（パックマン状）の配置から、実際には描かれていない白い三角形の<strong>輪郭が鮮明に見え、内部が周囲より明るく</strong>感じられる。</p>
        <p>これは閉合や簡潔性の延長であり、視覚系が「手前に三角形があり、後ろの円を隠している」という<em>最も尤もらしい解釈</em>を構成した結果と理解される。神経生理学的には、こうした主観的輪郭への応答が<strong>V1／V2</strong>の段階で記録されており、早い段階で輪郭が補完されることが示されている。</p>
        <div class="callout key"><b>核心</b>：主観的輪郭は、知覚が網膜情報の単なる写しではなく<strong>能動的な構成</strong>であることを端的に示す。存在しないエッジまで「見える」のは、視覚系が外界の最も妥当な説明を作り出しているからである。</div>
        <h3>現代の体制化原理</h3>
        <p>古典的なゲシュタルト法則に、20世紀後半以降いくつかの原理が追加された。</p>
        <ul>
          <li><strong>一様連結性（uniform connectedness, パーマーとロック）</strong>：同じ色・テクスチャで<em>つながった</em>領域は1つの単位を成す。最も基礎的な群化単位とされる。</li>
          <li><strong>共通領域（common region）</strong>：同じ囲い（領域）の中にある要素はまとまる。</li>
          <li><strong>同期（synchrony）</strong>：同時に変化する（点滅する等）要素はまとまる。</li>
          <li><strong>要素連結（element connectedness）</strong>：線などで物理的につながれた要素はまとまる（近接より優先する）。</li>
        </ul>
        <h3>ベイズ的／尤度的解釈とアモーダル補完</h3>
        <p>現代では、体制化を<strong>「最も尤もらしい外界の解釈を選ぶこと」</strong>と捉える見方が有力である。すなわち、網膜像は無数の外界状態と整合しうる（逆問題）が、視覚系は最も確からしい解釈を選ぶ。これは<em>ヘルムホルツ（Helmholtz）の無意識的推論（unconscious inference）</em>に連なる考えであり、<strong>ベイズ的・尤度的（likelihood）解釈</strong>として定式化される。プレグナンツ（簡潔性）も、単純な解釈ほど尤もらしいという形で再解釈できる。</p>
        <p>その一例が<strong>アモーダル補完（amodal completion）</strong>である。ある物体が手前の物体に部分的に隠されているとき、見えない部分を<em>背後に連続して存在するもの</em>として補い、1つのまとまった物体として知覚する。直接見えていない（amodal）にもかかわらず、最も尤もらしい解釈として完成された物体を経験するのである。</p>
        <div class="callout example"><b>主観的輪郭とアモーダル補完の対比</b>：カニッツァの三角形は<em>手前</em>に見える面の輪郭を補う（モーダル補完に近い）。一方アモーダル補完は<em>背後</em>に隠れた部分を補う。いずれも「最も尤もらしい外界」を構成する点で共通する。</div>
      `,
      figure: `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="230" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">カニッツァの三角形 — 主観的輪郭</text>
        <g fill="#1d2433">
          <path d="M 200 70 A 26 26 0 1 1 199 70 L 200 96 Z" transform="rotate(60 200 96)"/>
        </g>
        <circle cx="200" cy="70" r="26" fill="#1d2433"/>
        <path d="M 200 70 L 200 96 L 222.5 83 Z" fill="#f5f7fd"/>
        <circle cx="150" cy="170" r="26" fill="#1d2433"/>
        <path d="M 150 170 L 150 144 L 172.5 157 Z" fill="#f5f7fd"/>
        <circle cx="290" cy="170" r="26" fill="#1d2433"/>
        <path d="M 290 170 L 290 144 L 267.5 157 Z" fill="#f5f7fd"/>
        <polygon points="200,82 168,160 232,160" fill="none" stroke="#e0566b" stroke-width="2" stroke-dasharray="5 4"/>
        <text x="200" y="135" text-anchor="middle" font-size="11" fill="#e0566b" font-weight="700">見える三角形</text>
        <text x="200" y="150" text-anchor="middle" font-size="9" fill="#5b6478">(物理的には輪郭なし)</text>
        <g font-size="11" fill="#1d2433">
          <text x="370" y="80">3つの欠けた円から、</text>
          <text x="370" y="100">描かれていない白い</text>
          <text x="370" y="120">三角形の輪郭が見え、</text>
          <text x="370" y="140">内部が明るく感じる。</text>
          <text x="370" y="168" fill="#5b6cf0" font-weight="700">V1/V2 が補完に関与</text>
        </g>
        <text x="260" y="216" text-anchor="middle" font-size="10" fill="#5b6478">最も尤もらしい解釈（手前に三角形）を能動的に構成した結果</text>
      </svg>`,
      figcaption: "カニッツァの三角形。3つの欠けた円の配置から、物理的には描かれていない白い三角形の輪郭が鮮明に見え、内部が明るく感じられる。主観的輪郭の処理にはV1/V2が関与する。",
      terms: [
        { term: "主観的輪郭（illusory/subjective contours）", def: "物理的に存在しない輪郭やエッジを補完して知覚する現象。カニッツァの三角形が代表例。" },
        { term: "カニッツァの三角形", def: "欠けた3円から描かれていない三角形の輪郭が見える図形。V1/V2が補完に関与する。" },
        { term: "一様連結性（uniform connectedness）", def: "同色・同テクスチャでつながった領域が1単位を成すとする原理（パーマーとロック）。最も基礎的な群化単位。" },
        { term: "共通領域（common region）", def: "同じ囲いの中にある要素がまとまるという現代の体制化原理。" },
        { term: "同期 / 要素連結", def: "同時に変化する要素がまとまる（同期）、線でつながれた要素がまとまる（要素連結）。" },
        { term: "無意識的推論（Helmholtz）", def: "知覚は感覚情報からの無意識の推論であるとするヘルムホルツの考え。ベイズ的解釈の源流。" },
        { term: "ベイズ的／尤度的解釈", def: "体制化を「最も尤もらしい外界の解釈の選択」と捉える見方。プレグナンツも再解釈される。" },
        { term: "アモーダル補完（amodal completion）", def: "手前の物体に隠れた部分を背後に連続するものとして補い、1つの物体として知覚すること。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "ゲシュタルト心理学の標語として最も適切なのはどれか。", choices: ["全体は部分の総和に等しい", "全体は部分の総和以上である", "知覚は要素の単純な足し算である", "心は白紙である"], answer: 1, explain: "ゲシュタルト心理学（ヴェルトハイマー・ケーラー・コフカ）は「全体は部分の総和以上である」を標語とし、知覚がまず一つのまとまり（ゲシュタルト）として成立すると主張した。", difficulty: 1 },
    { type: "mcq", stem: "「近いものどうしがまとまって見える」群化の法則はどれか。", choices: ["近接（proximity）", "類同（similarity）", "閉合（closure）", "共通運命（common fate）"], answer: 0, explain: "近接の法則は、空間的に近い要素どうしがまとまって知覚されるという群化の法則である。", difficulty: 1 },
    { type: "mcq", stem: "同じ方向に同じ速さで動く要素がまとまって見える群化の法則はどれか。", choices: ["対称性", "閉合", "共通運命（common fate）", "よい連続"], answer: 2, explain: "共通運命の法則は、同じ方向に同じ速さで動く（共通の運命をもつ）要素がまとまるという、運動に基づく群化の法則である。", difficulty: 2 },
    { type: "mcq", stem: "知覚を最も単純・規則的・対称な形にまとめようとする、群化を貫く上位原理はどれか。", choices: ["プレグナンツ（簡潔性）", "近接", "類同", "図地分凝"], answer: 0, explain: "プレグナンツ（Prägnanz, 簡潔性）の原理は、刺激に対し最も単純で規則的・対称な解釈を選ぶ傾向で、個々の群化法則を貫く上位原理とされる。", difficulty: 2 },
    { type: "mcq", stem: "壺にも向かい合う2つの顔にも見える図地反転図形として有名なのはどれか。", choices: ["カニッツァの三角形", "ルビンの壺", "ミュラー・リヤー錯視", "ネッカーの立方体"], answer: 1, explain: "ルビンの壺は、同じ輪郭が壺にも2つの顔にも見える図地反転図形の代表で、どちらを図と見るかが交替する。", difficulty: 1 },
    { type: "mcq", stem: "ある領域が「図（figure）」になりやすい要因として適切でないものはどれか。", choices: ["小さい領域である", "他に囲まれた領域である", "凸の領域である", "視野の上方にある領域である"], answer: 3, explain: "図になりやすいのは小さい・囲まれた・凸・対称・視野の下方にある領域である。上方ではなく下方が図になりやすい。", difficulty: 3 },
    { type: "mcq", stem: "カニッツァの三角形に代表される、物理的に存在しない輪郭を補って知覚する現象はどれか。", choices: ["主観的輪郭（illusory contours）", "同時対比", "運動残効", "両眼視差"], answer: 0, explain: "主観的輪郭（錯視的輪郭）は、物理的に存在しない輪郭やエッジを視覚系が補完して知覚する現象で、カニッツァの三角形が代表例である。", difficulty: 1 },
    { type: "mcq", stem: "主観的輪郭への応答が初期に記録される皮質領野はどれか。", choices: ["前頭前野", "V1／V2", "海馬", "小脳"], answer: 1, explain: "カニッツァの三角形などの主観的輪郭への応答はV1／V2の段階で記録されており、輪郭が比較的早い段階で補完されることが示されている。", difficulty: 3 },
    { type: "mcq", stem: "パーマーとロックが提唱した、同じ色・テクスチャでつながった領域が1つの単位を成すとする現代の体制化原理はどれか。", choices: ["共通運命", "一様連結性（uniform connectedness）", "近接", "プレグナンツ"], answer: 1, explain: "一様連結性は、同色・同テクスチャでつながった領域が1つの群化単位を成すとする原理（パーマーとロック）で、最も基礎的な群化単位とされる。", difficulty: 3 },
    { type: "mcq", stem: "「知覚は感覚情報からの無意識の推論である」とし、ベイズ的・尤度的解釈の源流となった人物はどれか。", choices: ["ヘルムホルツ", "ヴント", "スキナー", "ピアジェ"], answer: 0, explain: "ヘルムホルツの無意識的推論は、知覚を感覚情報からの無意識の推論と捉える考えで、体制化のベイズ的・尤度的解釈の源流となった。", difficulty: 2 },
    { type: "mcq", stem: "体制化のベイズ的／尤度的解釈の要点として最も適切なのはどれか。", choices: ["体制化は生得的にすべて決まっている", "体制化とは最も尤もらしい外界の解釈を選ぶことである", "体制化は感覚の単純な写しである", "体制化は言語によってのみ生じる"], answer: 1, explain: "ベイズ的・尤度的解釈では、網膜像と整合する無数の外界状態の中から、視覚系が最も尤もらしい解釈を選ぶのが体制化だと捉える。プレグナンツも再解釈される。", difficulty: 2 },
    { type: "mcq", stem: "手前の物体に部分的に隠された対象を、背後に連続して存在するものとして補い1つの物体として知覚することを何というか。", choices: ["同時対比", "アモーダル補完（amodal completion）", "色の恒常性", "運動視差"], answer: 1, explain: "アモーダル補完は、手前の物体に隠れて直接見えない部分を背後に連続するものとして補い、1つのまとまった物体として知覚することである。最も尤もらしい解釈の構成である。", difficulty: 2 },
  ],
});
