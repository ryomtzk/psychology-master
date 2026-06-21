/* ============================================================
   視覚科学（特別編）  ベイズ知覚と予測符号化  (vis_bayes)
   ============================================================ */
PsychApp.registerModule({
  id: "vis_bayes",
  title: "ベイズ知覚と予測符号化",
  emoji: "🎲",
  category: "vision",
  tagline: "知覚は推論・ベイズの定理と事前分布・理想観察者・予測符号化・自由エネルギーと能動的推論",
  overview: `<p>網膜に届く情報は、外界を一意に決めるには常に不十分である。それでも私たちが安定した世界を知覚できるのは、脳が世界の規則性を内在化した<strong>事前の知識</strong>と感覚入力とを統合し、最も尤もらしい外界を<em>推論</em>しているからだと考えられる。本分野では、ヘルムホルツの無意識的推論を出発点に、知覚を確率的推論として定式化する<strong>ベイズ理論</strong>と、その神経実装の有力な仮説である<strong>予測符号化</strong>・<strong>自由エネルギー原理</strong>を概観する。錯視や両眼視野闘争もこの枠組みで統一的に説明できる。</p>
  <div class="callout note"><b>数学的な土台が欲しいとき</b>：条件付き確率・ベイズの定理・事前分布/事後分布といった数学そのものは、特別コース「<a href="bayes/index.html">ベイズの階段</a>」で中学数学レベルから段階的に学べる。本分野を読む前後の補強に最適である。</div>`,
  lessons: [
    {
      title: "知覚は推論である",
      body: `
        <p>知覚を「推論」とみなす考えは、19世紀のヘルムホルツ（<em>Helmholtz</em>）の<strong>無意識的推論（unconscious inference）</strong>に遡る。彼は、知覚が感覚入力に過去の経験を加えて行われる無意識の推論だと考えた。</p>
        <h3>知覚は不良設定問題である</h3>
        <p>知覚が推論を必要とするのは、それが<strong>不良設定（ill-posed）問題</strong>、すなわち逆問題だからである。三次元の外界が二次元の網膜像へ射影される過程は情報を捨てるため、<strong>一つの網膜像に整合する外界は無数にある</strong>。網膜像から外界を一意に復元することは原理的にできない。したがって、何らかの仮定（推測）を補わなければ知覚は成立しない。</p>
        <h3>ベイズの定理</h3>
        <p>この推論を確率の言葉で定式化するのが<strong>ベイズの定理（Bayes' theorem）</strong>である。外界の状態を仮説、網膜像を証拠（データ）とみなすと、次の比例関係が成り立つ。</p>
        <div class="callout key"><b>事後確率 ∝ 尤度 × 事前確率</b>（posterior ∝ likelihood × prior）。<br><em>尤度（likelihood）</em>は「その外界ならこの像が得られる確率」、<em>事前確率（prior）</em>は「その外界がそもそもどれだけありそうか」を表す。脳は両者を掛け合わせ、最も確率の高い解釈（事後分布のピーク）を知覚として出力する。</div>
        <p><strong>事前分布（prior）</strong>とは、世界の規則性を内在化したものである。曖昧な感覚入力（広い尤度）に、的確な事前を掛けることで、知覚は一意かつ安定したものになる。</p>
        <h3>事前の具体例と錯視</h3>
        <p>視覚系がもつとされる代表的な事前を挙げる。いずれも自然界の統計的規則性を反映している。</p>
        <table>
          <tr><th>事前</th><th>内容</th></tr>
          <tr><td><b>光は上から（light-from-above prior）</b></td><td>光源は上方にあると仮定する。陰影から凹凸を読む際に働く。</td></tr>
          <tr><td><b>運動は遅い（slow-motion prior）</b></td><td>物体はゆっくり動くほうがありそうと仮定する。</td></tr>
          <tr><td><b>面は凸（convexity prior）</b></td><td>面は手前に膨らんでいるほうがありそうと仮定する。</td></tr>
          <tr><td><b>見慣れた視点</b></td><td>顔などは正面・典型的な視点から見ていると仮定する。</td></tr>
        </table>
        <p>これらの事前が、特殊な刺激では錯視を生む。代表例が<strong>凹面マスク錯視（hollow-mask illusion）</strong>である。仮面の内側（凹面）を見ても、「顔は凸である」「光は上から来る」という強い事前により、<strong>凸の顔として知覚されてしまう</strong>。感覚入力（凹）よりも事前（凸）が勝つ好例である。</p>
        <h3>理想観察者と手がかり統合</h3>
        <p><strong>理想観察者（ideal observer）</strong>分析とは、与えられた情報からベイズ的に最適な推論を行う仮想的な観察者を基準とし、ヒトの成績をそれと比較する手法である。これにより、ヒトの知覚がどの程度最適かを定量的に評価できる。</p>
        <p>複数の手がかり（例：視覚と触覚の大きさ）を統合する場面では、ヒトは各手がかりをその<em>信頼度</em>に応じて重みづけて統合し、これは<strong>最尤推定（maximum likelihood estimation, MLE）</strong>でよく記述される。MLEは<strong>一様な事前を仮定したベイズ推論の特殊例</strong>であり、ベイズ的枠組みの一部として位置づけられる。</p>
        <div class="callout tip"><b>要点</b>：ベイズ知覚論は、錯視・手がかり統合・知覚の個人差を「事前と尤度の重みづけ」という共通言語で説明する。情報が曖昧なほど事前の影響が大きくなる。</div>
      `,
      figure: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="250" rx="14" fill="#f5f7fd"/>
        <text x="240" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">尤度 × 事前 → 事後</text>
        <line x1="45" y1="190" x2="455" y2="190" stroke="#1d2433" stroke-width="1.5"/>
        <text x="250" y="215" text-anchor="middle" font-size="11" fill="#5b6478">外界の状態（推定したい量）→</text>
        <text x="30" y="120" font-size="11" fill="#5b6478" transform="rotate(-90 30 120)">確率</text>
        <path d="M55,188 C150,188 175,70 230,70 C285,70 310,188 410,188" fill="none" stroke="#5b6cf0" stroke-width="2.5"/>
        <text x="150" y="78" font-size="11" fill="#5b6cf0" font-weight="700">尤度（広い＝曖昧）</text>
        <path d="M55,188 C120,188 150,120 175,120 C200,120 230,188 320,188" fill="none" stroke="#f0a020" stroke-width="2.5"/>
        <text x="120" y="150" font-size="11" fill="#f0a020" font-weight="700">事前</text>
        <path d="M55,188 C150,188 178,50 200,50 C222,50 250,188 360,188" fill="none" stroke="#e0566b" stroke-width="3"/>
        <text x="262" y="58" font-size="11" fill="#e0566b" font-weight="700">事後（鋭い＝確信）</text>
        <line x1="200" y1="50" x2="200" y2="190" stroke="#e0566b" stroke-width="1" stroke-dasharray="4 3"/>
        <circle cx="200" cy="50" r="4" fill="#e0566b"/>
        <text x="200" y="44" text-anchor="middle" font-size="9" fill="#e0566b">MAP（最大事後確率）の解釈＝知覚</text>
        <text x="240" y="238" text-anchor="middle" font-size="9.5" fill="#5b6478">曖昧な尤度に事前を掛けると、鋭く一意な事後（知覚）になる</text>
      </svg>`,
      figcaption: "知覚はベイズ推論として定式化できる。曖昧な感覚入力（尤度）に、世界の規則性を表す事前を掛け合わせると、鋭く一意な事後分布が得られ、そのピークが知覚として出力される。",
      terms: [
        { term: "無意識的推論（unconscious inference）", def: "知覚は感覚入力に経験を加えた無意識の推論だとするヘルムホルツの考え。" },
        { term: "不良設定問題（ill-posed problem）", def: "網膜像から外界を一意に復元できない逆問題。推測が必要になる理由。" },
        { term: "ベイズの定理", def: "事後確率 ∝ 尤度 × 事前確率。知覚を確率的推論として定式化する基礎。" },
        { term: "事前分布（prior）", def: "世界の規則性を内在化した確率分布。曖昧な入力を一意な知覚にする。" },
        { term: "光は上から（light-from-above prior）", def: "光源は上方にあると仮定する事前。陰影から凹凸を読む際に働く。" },
        { term: "凹面マスク錯視（hollow-mask illusion）", def: "凹面の仮面が凸の顔に見える錯視。顔は凸という強い事前が感覚入力に勝つ例。" },
        { term: "理想観察者（ideal observer）", def: "ベイズ的に最適な推論を行う仮想観察者。ヒトの成績の最適性を評価する基準。" },
        { term: "最尤推定（MLE）", def: "各手がかりを信頼度で重みづけ統合する手法。一様事前のベイズ推論の特殊例。" },
      ],
    },
    {
      title: "予測符号化と生成モデル",
      body: `
        <p>知覚がベイズ推論だとして、それを脳がどう実装しているのか。有力な仮説が<strong>予測符号化（predictive coding）</strong>である。<em>Rao & Ballard（1999）</em>の定式化が代表的である。</p>
        <h3>階層的生成モデルと予測誤差</h3>
        <p>予測符号化では、脳は外界がどのように感覚入力を生み出すかを表す<strong>階層的生成モデル（hierarchical generative model）</strong>をもつと考える。処理は次のように進む。</p>
        <ul>
          <li>各階層の<strong>上位層が下位層の入力を予測</strong>し、予測を下向き（top-down）に送る。</li>
          <li>下位層では、実際の入力と予測との差、すなわち<strong>予測誤差（prediction error）</strong>を計算する。</li>
          <li><strong>予測誤差だけ</strong>が上向き（bottom-up）に伝えられ、上位層はそれを使って自らの予測（外界の推定）を更新する。</li>
        </ul>
        <p>うまく予測できた部分は誤差が小さく、ほとんど伝送されない。脳は予測が当たる限り情報を送らずに済むため、これは効率的な符号化でもある。知覚とは、予測誤差を最小化するように生成モデルの推定を調整した結果として立ち上がる。</p>
        <div class="callout key"><b>方向の整理</b>：<strong>予測は下向き（上位→下位）</strong>、<strong>予測誤差は上向き（下位→上位）</strong>に流れる。下向きの予測が当たれば、上向きに伝わる誤差は小さくなる。</div>
        <h3>注意は精度の重みづけ</h3>
        <p>予測符号化の枠組みでは、<strong>注意（attention）</strong>は予測誤差の<strong>精度（precision）への重みづけ</strong>として説明される。注意を向けた箇所の予測誤差の精度（信頼度）を高めると、その誤差が推定の更新に強く効くようになる。これにより、注意による知覚の鋭敏化が自然に導かれる。</p>
        <h3>自由エネルギー原理と能動的推論</h3>
        <p>予測符号化をさらに一般化したのが、<em>Friston</em> の<strong>自由エネルギー原理（free energy principle）</strong>である。脳（生物）は、自らの感覚を予測できない度合いの上界である<strong>自由エネルギー</strong>を最小化するように働く、とする。自由エネルギーの最小化は、近似的に予測誤差の最小化に対応する。</p>
        <p>これには二つの経路がある。一つは内部モデルを更新して予測を改善する<em>知覚的推論</em>、もう一つは行動によって感覚入力そのものを予測どおりに変える<strong>能動的推論（active inference）</strong>である。すなわち、世界に合わせてモデルを変えるだけでなく、モデルに合わせて世界（からの入力）を変えるという視点を含む。</p>
        <h3>ベイズ的説明の射程</h3>
        <p>この枠組みは多様な現象を統一的に説明する。</p>
        <ul>
          <li><strong>両眼視野闘争</strong>：競合する二つの解釈のいずれも安定して予測誤差を消せず、知覚が交替する状態として説明される。</li>
          <li><strong>幻覚（hallucination）</strong>：事前（予測）の重みが過大で、感覚入力（予測誤差）が十分に効かないと、入力に乏しい知覚内容が生じうる。</li>
          <li><strong>錯覚／錯視</strong>：事前と尤度の重みづけの結果として、系統的な誤りが生じる。</li>
        </ul>
        <div class="callout tip"><b>つながり</b>：前分野の錯視・凹面マスク・両眼視野闘争は、いずれも「事前と予測誤差の重みづけ」という共通原理の現れとして読み直せる。</div>
      `,
      figure: `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="460" height="270" rx="14" fill="#f5f7fd"/>
        <text x="230" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">予測符号化の階層</text>
        <rect x="150" y="44" width="160" height="34" rx="7" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="230" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2433">上位層（抽象的推定）</text>
        <rect x="150" y="118" width="160" height="34" rx="7" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="230" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2433">中間層</text>
        <rect x="150" y="192" width="160" height="34" rx="7" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="230" y="214" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2433">感覚入力（網膜）</text>
        <defs>
          <marker id="bz_down" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker>
          <marker id="bz_up" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e0566b"/></marker>
        </defs>
        <line x1="185" y1="78" x2="185" y2="116" stroke="#5b6cf0" stroke-width="2.5" marker-end="url(#bz_down)"/>
        <line x1="185" y1="152" x2="185" y2="190" stroke="#5b6cf0" stroke-width="2.5" marker-end="url(#bz_down)"/>
        <line x1="275" y1="190" x2="275" y2="154" stroke="#e0566b" stroke-width="2.5" marker-end="url(#bz_up)"/>
        <line x1="275" y1="116" x2="275" y2="80" stroke="#e0566b" stroke-width="2.5" marker-end="url(#bz_up)"/>
        <text x="120" y="100" text-anchor="end" font-size="10.5" fill="#5b6cf0" font-weight="700">予測（下向き）</text>
        <text x="345" y="100" font-size="10.5" fill="#e0566b" font-weight="700">予測誤差（上向き）</text>
        <text x="230" y="252" text-anchor="middle" font-size="9.5" fill="#5b6478">予測が当たれば、上向きに伝わる予測誤差は小さくなる</text>
      </svg>`,
      figcaption: "予測符号化では、上位層が下位層への予測を下向きに送り、下位層は実入力との差（予測誤差）だけを上向きに返す。予測が当たるほど伝送される誤差は小さくなる。",
      terms: [
        { term: "予測符号化（predictive coding）", def: "上位が下位を予測し予測誤差だけを上に伝える知覚の計算モデル（Rao & Ballard 1999）。" },
        { term: "階層的生成モデル", def: "外界が感覚入力を生む過程を階層的に表す内部モデル。予測の源。" },
        { term: "予測誤差（prediction error）", def: "予測と実際の入力との差。上向きに伝えられ、上位の推定を更新する。" },
        { term: "精度（precision）への重みづけ", def: "予測誤差の信頼度の重みづけ。注意はこの精度の調整として説明される。" },
        { term: "自由エネルギー原理（free energy principle）", def: "脳は自由エネルギー（予測できなさの上界）を最小化するとする一般原理（Friston）。" },
        { term: "能動的推論（active inference）", def: "行動によって感覚入力を予測どおりに変え、予測誤差を減らす経路。" },
        { term: "両眼視野闘争のベイズ的説明", def: "競合する解釈がともに予測誤差を消せず知覚が交替する状態として説明する見方。" },
        { term: "幻覚のベイズ的説明", def: "事前の重みが過大で感覚入力が十分効かないと、入力に乏しい知覚が生じうるとする説明。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "「知覚は感覚入力に経験を加えた無意識の推論である」と考えた19世紀の研究者は誰か。", choices: ["フリストン", "ヘルムホルツ（Helmholtz）", "ラオとバラード", "ベケシー"], answer: 1, explain: "ヘルムホルツの無意識的推論（unconscious inference）が、知覚を推論とみなすベイズ的視点の源流である。", difficulty: 2 },
    { type: "mcq", stem: "知覚が推論を必要とする根本的な理由として最も適切なのはどれか。", choices: ["感覚受容器の数が少ないから", "網膜像から外界を一意に復元できない不良設定（逆）問題だから", "脳の処理速度が遅いから", "光が上から来るから"], answer: 1, explain: "三次元の外界が二次元の網膜像に射影される過程で情報が失われ、一つの像に整合する外界は無数にある。この不良設定性ゆえに推測（推論）が要る。", difficulty: 2 },
    { type: "mcq", stem: "ベイズの定理に基づく知覚の定式化として正しい比例関係はどれか。", choices: ["事後確率 ∝ 尤度 ÷ 事前確率", "事前確率 ∝ 尤度 × 事後確率", "事後確率 ∝ 尤度 × 事前確率", "尤度 ∝ 事後確率 × 事前確率"], answer: 2, explain: "事後確率 ∝ 尤度 × 事前確率（posterior ∝ likelihood × prior）。脳は尤度と事前を掛け合わせ、最も確率の高い解釈を知覚として出力する。", difficulty: 2 },
    { type: "mcq", stem: "ベイズ知覚論における「事前分布（prior）」の説明として最も適切なのはどれか。", choices: ["網膜に届く瞬間ごとの感覚入力そのもの", "世界の規則性を内在化した確率分布", "視神経の発火頻度", "両眼視差の大きさ"], answer: 1, explain: "事前分布は世界の統計的規則性を内在化したもので、曖昧な感覚入力を一意で安定した知覚へと導く。", difficulty: 1 },
    { type: "mcq", stem: "凹面マスク錯視（hollow-mask illusion）で、凹んだ仮面の内側が凸の顔に見えるのはなぜか。", choices: ["凹面のほうが網膜像が大きいから", "「顔は凸」「光は上から」という強い事前が感覚入力に勝つから", "両眼視差が反転するから", "色の恒常性が働くから"], answer: 1, explain: "凹面マスク錯視は、顔は凸・光は上からという強い事前が、凹という感覚入力を上回って知覚を決める好例である。", difficulty: 2 },
    { type: "mcq", stem: "視覚系がもつとされる事前（prior）の例として適切でないものはどれか。", choices: ["光は上から来る", "運動は遅い", "面は凸である", "網膜像は常に正しい"], answer: 3, explain: "光は上から・運動は遅い・面は凸は、自然界の統計を反映した代表的な事前である。「網膜像は常に正しい」は事前ではなく、むしろ不良設定問題ゆえに成り立たない。", difficulty: 2 },
    { type: "mcq", stem: "複数手がかりの統合における最尤推定（MLE）とベイズ推論の関係として正しいのはどれか。", choices: ["MLEはベイズ推論と無関係である", "MLEは一様な事前を仮定したベイズ推論の特殊例である", "ベイズ推論はMLEの特殊例である", "両者は同じ結果を常に与える"], answer: 1, explain: "各手がかりを信頼度で重みづけ統合するMLEは、一様な（情報のない）事前を仮定したベイズ推論の特殊な場合に当たる。", difficulty: 3 },
    { type: "mcq", stem: "Rao & Ballard（1999）に代表される予測符号化で、階層間を上向き（bottom-up）に伝えられるのは主に何か。", choices: ["上位層からの予測", "予測誤差（prediction error）", "事前分布そのもの", "注意の焦点"], answer: 1, explain: "予測符号化では、上位層が下位層への予測を下向きに送り、下位層は実入力との差である予測誤差だけを上向きに返す。", difficulty: 2 },
    { type: "mcq", stem: "予測符号化において、予測の流れる方向と予測誤差の流れる方向の組み合わせとして正しいのはどれか。", choices: ["予測は上向き・予測誤差は下向き", "予測は下向き・予測誤差は上向き", "どちらも上向き", "どちらも下向き"], answer: 1, explain: "上位層からの予測は下向き（top-down）に、下位層で計算される予測誤差は上向き（bottom-up）に流れる。", difficulty: 2 },
    { type: "mcq", stem: "予測符号化の枠組みで、注意（attention）はどのように説明されるか。", choices: ["予測誤差の精度（precision）への重みづけとして", "予測誤差を完全に消去する操作として", "事前分布を一様にする操作として", "感覚受容器の数を増やす操作として"], answer: 0, explain: "注意は予測誤差の精度（信頼度）への重みづけとして説明され、注意を向けた箇所の誤差が推定の更新に強く効くようになる。", difficulty: 3 },
    { type: "mcq", stem: "Friston の自由エネルギー原理における「能動的推論（active inference）」の説明として最も適切なのはどれか。", choices: ["内部モデルを一切変えず予測を固定すること", "行動によって感覚入力そのものを予測どおりに変え、予測誤差を減らすこと", "事前分布を完全に無視すること", "予測誤差を上向きに伝えないこと"], answer: 1, explain: "能動的推論は、モデルを更新するだけでなく、行動で世界（からの入力）を予測に合わせて変えることで予測誤差を最小化する経路である。", difficulty: 3 },
    { type: "mcq", stem: "幻覚を予測符号化／ベイズの枠組みで説明する際の典型的な見方はどれか。", choices: ["感覚入力が過剰に増幅されるため", "事前（予測）の重みが過大で感覚入力（予測誤差）が十分に効かないため", "両眼視差が消失するため", "側抑制が強まるため"], answer: 1, explain: "事前の重みが過大で予測誤差が十分に効かないと、入力に乏しい知覚内容（幻覚）が生じうる、というのがベイズ的説明である。", difficulty: 3 },
  ],
});
