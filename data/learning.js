/* ============================================================
   学習心理学  (learning)
   ============================================================ */
PsychApp.registerModule({
  id: "learning",
  title: "学習心理学",
  emoji: "🐕",
  category: "biocog",
  tagline: "古典的条件づけ・オペラント条件づけ・強化スケジュール・認知/社会的学習",
  overview: `<p>学習心理学は、<strong>「経験によって生じる比較的永続的な行動（あるいは行動の潜在的可能性）の変化」</strong>すなわち<strong>学習</strong>の法則を探る分野である。本分野では、刺激と刺激の連合を扱う<strong>古典的条件づけ</strong>、行動とその結果の連合を扱う<strong>オペラント条件づけ</strong>、それらを精緻化する<strong>強化スケジュール</strong>、さらに行動主義を越える<strong>認知的・社会的学習</strong>までを順に学ぶ。これらは行動療法・教育・しつけ・依存などの理解の土台となる。</p>`,
  lessons: [
    {
      title: "学習とは何か — 馴化と鋭敏化",
      body: `
        <p>心理学における<strong>学習（learning）</strong>とは、<strong>「経験（経験的事象との接触）によって生じる、比較的永続的な行動または行動傾向の変化」</strong>と定義される。この定義には重要な含意がいくつもある。</p>
        <ul>
          <li><strong>経験による</strong>こと：成熟（身体の発達）や疲労・薬物・病気による一時的変化は学習に含めない。歩けるようになるのは主に成熟だが、自転車に乗れるようになるのは学習である。</li>
          <li><strong>比較的永続的</strong>であること：覚えたことがしばらく保持される。一過性の変化（眠気で反応が鈍るなど）は学習とは呼ばない。</li>
          <li><strong>行動の潜在的変化</strong>も含むこと：学んだ内容が直ちに行動に表れなくてもよい（後述の<em>潜在学習</em>を参照）。すなわち<strong>学習（learning）</strong>と、それが表に出た<strong>遂行（performance）</strong>は区別される。</li>
        </ul>
        <div class="callout key"><b>学習の定義</b>：経験による比較的永続的な行動（または行動の潜在的可能性）の変化。成熟・疲労・薬物などによる変化は除く。</div>
        <h3>最も単純な学習 — 非連合学習</h3>
        <p>刺激と刺激、あるいは行動と結果を結びつける<strong>連合学習（associative learning）</strong>（次レッスン以降）に対し、単一の刺激の反復だけで生じる最も原始的な学習を<strong>非連合学習（non-associative learning）</strong>という。代表が<strong>馴化</strong>と<strong>鋭敏化</strong>である。</p>
        <h4>馴化（habituation）</h4>
        <p>同じ刺激を繰り返し与えると、その刺激への反応が次第に<strong>弱まる</strong>現象である。時計の音がやがて気にならなくなる、新しい服の感触をすぐ忘れる、などが例である。馴化は感覚器の疲労（順応）とは異なり、中枢の処理レベルで生じる。生物にとって、無害で意味のない刺激を無視し、重要な刺激に資源を割くための適応的な仕組みである。アメフラシ（Aplysia）のえら引っ込め反射の研究（エリック・カンデル）は、馴化の神経機構を細胞レベルで解明した古典である。</p>
        <h4>鋭敏化（sensitization）</h4>
        <p>強い、あるいは有害な刺激を経験した後、その後の刺激への反応がかえって<strong>強まる</strong>現象である。大きな物音に驚いた直後は、わずかな物音にも過敏に反応する。痛みや危険の後に警戒を高める適応的な仕組みである。<strong>馴化が反応を弱める</strong>のに対し<strong>鋭敏化は反応を強める</strong>点で対照的である。</p>
        <div class="callout tip">馴化された反応も、まったく別の強い刺激を与えると一時的に回復することがある。これを<strong>脱馴化（dishabituation）</strong>という。乳児研究では、馴化と脱馴化を利用して「赤ちゃんが2つの刺激を区別できるか」を調べる（馴化した刺激を新刺激に変えて注視時間が回復すれば区別できている）。</p>
        <div class="callout note">馴化・鋭敏化は刺激と刺激（あるいは刺激と反応）の<em>連合</em>を必要としないため、最も基本的な学習とされる。これに対し、次章以降で扱う古典的条件づけ・オペラント条件づけは「2つの事象の関係」を学ぶ連合学習である。</div>
      `,
      figure: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="260" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">馴化と鋭敏化（反応の強さの変化）</text>
        <line x1="55" y1="40" x2="55" y2="185" stroke="#c9cfe0" stroke-width="2"/>
        <line x1="55" y1="185" x2="490" y2="185" stroke="#c9cfe0" stroke-width="2"/>
        <text x="20" y="115" font-size="11" fill="#5b6478" transform="rotate(-90 20 115)" text-anchor="middle">反応の強さ</text>
        <text x="270" y="205" font-size="11" fill="#5b6478" text-anchor="middle">刺激の繰り返し →</text>
        <polyline points="70,70 130,95 190,120 250,140 310,155 370,165 430,170" fill="none" stroke="#5b6cf0" stroke-width="3"/>
        <polyline points="70,150 130,120 190,95 250,78 310,68 370,62 430,60" fill="none" stroke="#e0566b" stroke-width="3" stroke-dasharray="6 4"/>
        <circle cx="430" cy="170" r="4" fill="#5b6cf0"/><text x="438" y="174" font-size="12" font-weight="700" fill="#5b6cf0">馴化（弱まる）</text>
        <circle cx="430" cy="60" r="4" fill="#e0566b"/><text x="380" y="50" font-size="12" font-weight="700" fill="#e0566b">鋭敏化（強まる）</text>
      </svg>`,
      figcaption: "同じ刺激の反復で、馴化では反応が減衰し、鋭敏化では反応が増大する。両者は逆向きの非連合学習である。",
      terms: [
        { term: "学習", def: "経験による比較的永続的な行動（または行動傾向）の変化。成熟・疲労・薬物による変化は除く。" },
        { term: "学習と遂行の区別", def: "学習（内的な獲得）と、それが行動に表れる遂行は別。学習しても遂行されないことがある。" },
        { term: "非連合学習", def: "単一刺激の反復だけで生じる最も基本的な学習。馴化と鋭敏化が代表。" },
        { term: "馴化", def: "同じ刺激の繰り返しで反応が弱まる現象。無意味な刺激を無視する適応的機能。" },
        { term: "鋭敏化", def: "強い・有害な刺激の後、その後の刺激への反応が強まる現象。" },
        { term: "脱馴化", def: "馴化した反応が、別の強い刺激の提示によって一時的に回復する現象。" },
      ],
    },
    {
      title: "古典的条件づけ（基礎） — パブロフの発見",
      body: `
        <p><strong>古典的条件づけ（classical conditioning、レスポンデント条件づけ）</strong>は、ロシアの生理学者<strong>イワン・パブロフ（Ivan Pavlov）</strong>がイヌの消化研究の過程で偶然見出した学習である。もともと無関係だった刺激（ベルの音など）が、生物学的に意味のある刺激（食物）と<strong>対提示</strong>されることで反応を引き起こすようになる、という<strong>刺激と刺激の連合</strong>を扱う。</p>
        <h3>パブロフの実験と4つの用語</h3>
        <p>イヌは口に入った食物に対し、生得的に唾液を分泌する。パブロフは食物を与える前にベルを鳴らすことを繰り返した。すると、やがてベルの音だけで唾液が出るようになった。この手続きを整理すると次の4語になる。</p>
        <table>
          <tr><th>用語</th><th>意味</th><th>パブロフの例</th></tr>
          <tr><td><b>無条件刺激（US）</b></td><td>生得的に反応を引き起こす刺激</td><td>食物（肉粉）</td></tr>
          <tr><td><b>無条件反応（UR）</b></td><td>USによって自動的に生じる反応</td><td>食物による唾液分泌</td></tr>
          <tr><td><b>条件刺激（CS）</b></td><td>もとは無関係だが、USとの対提示で反応を引き起こすようになった刺激</td><td>ベルの音</td></tr>
          <tr><td><b>条件反応（CR）</b></td><td>CSによって新たに引き起こされる学習された反応</td><td>ベルの音による唾液分泌</td></tr>
        </table>
        <div class="callout key">学習前のベルのように、まだ反応を引き起こさない刺激を<strong>中性刺激（NS）</strong>という。中性刺激はUSとの反復対提示を経て<strong>条件刺激（CS）</strong>へと変わる。<br>覚え方：<em>「無条件」＝生まれつき／「条件」＝学習による</em>。</div>
        <h3>条件づけの基本的諸現象</h3>
        <h4>獲得（acquisition）</h4>
        <p>CSとUSを対提示し、CRが成立・増強していく段階。一般に<strong>CSをUSのやや前に提示する（順行条件づけ・延滞条件づけ）</strong>と最も学習が成立しやすい。CSがUSの「予告」になることが重要である。</p>
        <h4>消去（extinction）</h4>
        <p>獲得後、CSをUSなしで（ベルだけで）繰り返し提示すると、CRは次第に弱まり消えていく。これを消去という。<strong>消去は「忘却」ではなく、CSが今やUSを予告しないという新たな学習</strong>と考えられている。</p>
        <h4>自発的回復（spontaneous recovery）</h4>
        <p>消去後に時間をおいて再びCSを提示すると、消えたはずのCRが弱いながら再び現れる。これは、元の連合が消し去られたのではなく抑制されていたことを示す（消去＝上書きの新学習である証拠）。</p>
        <h4>般化（generalization）と分化／弁別（discrimination）</h4>
        <p>あるCSで条件づけが成立すると、それに<strong>類似した刺激にもCRが生じる</strong>。これを<strong>般化</strong>という（特定の高さのベルで学習すると、近い高さの音にも唾液が出る）。逆に、US を伴うCSにのみ反応し、伴わない類似刺激には反応しないよう学習させると、両者を区別できるようになる。これを<strong>分化（弁別）</strong>という。</p>
        <div class="callout warn"><b>混同注意</b>：消去後に時間をおいて反応が戻るのが「自発的回復」、似た刺激へ反応が広がるのが「般化」。両者は別概念である。</div>
      `,
      figure: `<svg viewBox="0 0 540 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="arP" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker></defs>
        <text x="270" y="20" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">古典的条件づけの手続き</text>
        <g font-size="12" text-anchor="middle">
          <text x="20" y="55" font-weight="700" fill="#5b6478" text-anchor="start">① 条件づけ前</text>
          <rect x="60" y="65" width="120" height="40" rx="8" fill="#e9ebfe" stroke="#5b6cf0"/><text x="120" y="82">食物（US）</text><text x="120" y="97" font-size="10">無条件刺激</text>
          <line x1="184" y1="85" x2="240" y2="85" stroke="#5b6cf0" stroke-width="2" marker-end="url(#arP)"/>
          <rect x="244" y="65" width="130" height="40" rx="8" fill="#d8f6ee" stroke="#15c4a8"/><text x="309" y="82">唾液（UR）</text><text x="309" y="97" font-size="10">無条件反応</text>
          <rect x="400" y="65" width="120" height="40" rx="8" fill="#fff" stroke="#c9cfe0"/><text x="460" y="82">ベル（NS）</text><text x="460" y="97" font-size="10">反応なし</text>

          <text x="20" y="135" font-weight="700" fill="#5b6478" text-anchor="start">② 条件づけ（対提示の反復）</text>
          <rect x="60" y="145" width="120" height="40" rx="8" fill="#fff" stroke="#c9cfe0"/><text x="120" y="162">ベル（CS）</text>
          <text x="200" y="168">＋</text>
          <rect x="224" y="145" width="120" height="40" rx="8" fill="#e9ebfe" stroke="#5b6cf0"/><text x="284" y="162">食物（US）</text>
          <line x1="348" y1="165" x2="404" y2="165" stroke="#5b6cf0" stroke-width="2" marker-end="url(#arP)"/>
          <rect x="408" y="145" width="120" height="40" rx="8" fill="#d8f6ee" stroke="#15c4a8"/><text x="468" y="167">唾液（UR）</text>

          <text x="20" y="215" font-weight="700" fill="#5b6478" text-anchor="start">③ 条件づけ後</text>
          <rect x="60" y="225" width="120" height="40" rx="8" fill="#fde9ee" stroke="#e0566b"/><text x="120" y="242">ベル（CS）</text><text x="120" y="257" font-size="10">条件刺激</text>
          <line x1="184" y1="245" x2="240" y2="245" stroke="#5b6cf0" stroke-width="2" marker-end="url(#arP)"/>
          <rect x="244" y="225" width="130" height="40" rx="8" fill="#fde9ee" stroke="#e0566b"/><text x="309" y="242">唾液（CR）</text><text x="309" y="257" font-size="10">条件反応</text>
        </g>
      </svg>`,
      figcaption: "中性刺激（ベル）が、US（食物）との反復対提示を経て条件刺激（CS）となり、単独で条件反応（唾液）を引き起こす。",
      terms: [
        { term: "古典的条件づけ", def: "刺激と刺激の連合による学習。パブロフが発見。レスポンデント条件づけとも。" },
        { term: "無条件刺激（US）/無条件反応（UR）", def: "生得的に反応を引き起こす刺激（US）と、それが自動的に生む反応（UR）。" },
        { term: "条件刺激（CS）/条件反応（CR）", def: "学習により反応を引き起こすようになった刺激（CS）と、その学習された反応（CR）。" },
        { term: "中性刺激（NS）", def: "学習前は対象の反応を引き起こさない刺激。USとの対提示でCSに変わる。" },
        { term: "獲得・消去", def: "CRが成立する過程が獲得、CSをUSなしで提示してCRが弱まる過程が消去。" },
        { term: "自発的回復", def: "消去後、時間をおいてCSを提示すると消えたCRが弱く再出現する現象。" },
        { term: "般化", def: "条件づけられたCSに類似した刺激にもCRが生じること。" },
        { term: "分化（弁別）", def: "USを伴う刺激のみに反応し、類似する別刺激には反応しないよう学習すること。" },
      ],
    },
    {
      title: "古典的条件づけ（応用と理論）",
      body: `
        <p>古典的条件づけは、唾液のような単純な反射にとどまらず、<strong>情動・好悪・嫌悪・恐怖</strong>といった幅広い反応の学習を説明する。本レッスンでは応用例と、条件づけの本質に関する理論的進展を扱う。</p>
        <h3>高次条件づけ（二次条件づけ）</h3>
        <p>すでに成立したCS1（例：ベル）を、新たな中性刺激CS2（例：光）と対提示すると、USを与えなくてもCS2が単独でCRを引き起こすようになる。これを<strong>高次条件づけ</strong>という。直接USと対提示していない刺激にまで連合が広がる仕組みであり、現実の複雑な情動学習の説明に役立つ。</p>
        <h3>ワトソンの「アルバート坊や」の実験（1920）</h3>
        <p>行動主義の祖<strong>ジョン・B・ワトソン</strong>とロザリー・レイナーは、生後約11か月の乳児アルバートに対し、白いネズミ（中性刺激）を見せた直後に背後で大きな金属音（US）を鳴らすことを繰り返した。やがてアルバートは白ネズミ（CS）を見ただけで泣き出し恐怖を示すようになった（CR）。さらにこの恐怖は<strong>白いウサギ・毛皮・綿のひげ</strong>などにも<strong>般化</strong>した。これは<strong>恐怖や情動が古典的条件づけで獲得されうる</strong>ことを示した歴史的研究である。一方で、現在の倫理基準からは正当化できない実験としても知られる。</p>
        <div class="callout note">ワトソンの主張は徹底した環境決定論で知られる。「私に健康な乳児を12人与えよ。望むどんな専門家にでも育ててみせる」という言葉が有名である。</div>
        <h3>味覚嫌悪学習（ガルシア効果）と生物学的制約</h3>
        <p><strong>ジョン・ガルシア（John Garcia）</strong>は、ある食物を食べた後に（放射線や薬物で）吐き気・不快を経験すると、その食物を強く嫌うようになることを示した。これを<strong>味覚嫌悪学習（taste aversion learning）／ガルシア効果</strong>という。古典的条件づけの一種だが、通常の条件づけの常識を破る特徴をもつ。</p>
        <ul>
          <li><strong>一回の経験で成立</strong>しうる（通常は反復が必要）。</li>
          <li>食物摂取と不快の間に<strong>数時間の遅延があっても成立</strong>する（通常は数秒以内）。</li>
          <li><strong>味と内臓不快</strong>は結びつきやすいが、<strong>音や光と不快</strong>は結びつきにくい（<strong>準備性 preparedness</strong>）。</li>
        </ul>
        <div class="callout key"><b>生物学的制約</b>：どんな刺激でも等しく条件づけられるわけではなく、その種が進化の過程で生き延びるうえで意味のある連合ほど学習されやすい。味覚嫌悪は「毒のある食物を避ける」適応として理解できる。これは「すべての連合は等価」とした初期行動主義への重要な反証である。</div>
        <h3>レスコーラ＝ワグナー・モデル — 随伴性と予測の重要性</h3>
        <p>古典的条件づけは「CSとUSが時間的に近接して対提示されれば成立する（接近の原理）」と単純に考えられていた。しかし<strong>ロバート・レスコーラ</strong>は、対提示の<em>回数</em>が同じでも、CSがUSをどれだけ<strong>予測（情報を与える）</strong>するかで学習の程度が変わることを示した。重要なのは時間的接近そのものより、<strong>CSがUSの到来に関する情報をもつこと（随伴性 contingency）</strong>である。</p>
        <p>これを定式化した<strong>レスコーラ＝ワグナー・モデル</strong>は、学習量が<strong>「予測の誤差（実際のUS − すでに予測されているUS）」</strong>に比例するとした。すでに別のCSでUSが十分予測できている場合、新しいCSは追加されても学習されにくい。この予測を裏づける現象が<strong>阻止（ブロッキング、Kamin）</strong>である。条件づけを「機械的な接近」から「環境の予測・情報処理」として捉え直した、認知的転回の里程標である。</p>
        <h3>臨床応用 — 系統的脱感作</h3>
        <p>恐怖症など不適応な条件反応は条件づけで説明できるため、その<em>逆</em>を用いて治療できる。<strong>ジョゼフ・ウォルピ（Wolpe）</strong>の<strong>系統的脱感作（systematic desensitization）</strong>は、<strong>逆制止</strong>の原理に基づく行動療法である。すなわち、恐怖と両立しない<strong>弛緩（リラックス）反応</strong>を、不安階層表に沿って弱い刺激から段階的に対提示し、恐怖というCRを徐々に消去・置換する。エクスポージャー療法（曝露療法）も消去の原理を用いた治療である。</p>
      `,
      figure: `<svg viewBox="0 0 540 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="270" y="20" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">接近 vs 随伴性（予測）</text>
        <g font-size="11">
          <text x="20" y="50" font-weight="700">A. 接近のみの説明（古い見方）</text>
          <text x="30" y="72" fill="#5b6478">CSとUSが時間的に近ければ学習が成立する</text>
          <rect x="30" y="82" width="80" height="30" rx="6" fill="#e9ebfe" stroke="#5b6cf0"/><text x="70" y="101" text-anchor="middle">CS</text>
          <text x="120" y="101">＋</text>
          <rect x="136" y="82" width="80" height="30" rx="6" fill="#fde9ee" stroke="#e0566b"/><text x="176" y="101" text-anchor="middle">US</text>
          <text x="230" y="101">→ 学習？</text>

          <line x1="20" y1="130" x2="520" y2="130" stroke="#c9cfe0"/>
          <text x="20" y="152" font-weight="700">B. 随伴性（予測）の説明（レスコーラ）</text>
          <text x="30" y="174" fill="#5b6478">CSがUSの到来を「予測する情報」をもつほど学習される</text>
          <text x="30" y="195" fill="#5b6478">予測誤差が大きいほど学習量が大きい（既に予測済なら学習されない＝阻止）</text>
        </g>
      </svg>`,
      figcaption: "レスコーラは、単なる時間的接近よりも「CSがUSをどれだけ予測するか（随伴性）」が条件づけを決めることを示した。",
      terms: [
        { term: "高次条件づけ", def: "成立済みのCSを新たな中性刺激と対提示し、USなしで後者にも反応が生じる現象。" },
        { term: "アルバート坊やの実験", def: "ワトソンが乳児に白ネズミ恐怖を条件づけた研究。情動の条件づけと般化を示した。" },
        { term: "味覚嫌悪学習（ガルシア効果）", def: "食物摂取後の不快で、一回・長遅延でもその食物を強く嫌うようになる学習。" },
        { term: "生物学的制約／準備性", def: "種の生存に意味ある連合ほど学習されやすいという、条件づけの偏り。" },
        { term: "レスコーラ＝ワグナー・モデル", def: "学習量が予測誤差（実際のUS−予測されたUS）に比例するとするモデル。" },
        { term: "阻止（ブロッキング）", def: "既存のCSでUSが予測済みの場合、追加CSが学習されにくくなる現象。" },
        { term: "系統的脱感作", def: "弛緩反応を不安階層に沿って段階的に対提示し恐怖を消去する行動療法（ウォルピ）。" },
      ],
    },
    {
      title: "オペラント条件づけ（基礎） — 効果の法則と三項随伴性",
      body: `
        <p>古典的条件づけが<strong>刺激と刺激の連合（受動的・反射的反応）</strong>を扱うのに対し、<strong>オペラント条件づけ（operant conditioning、道具的条件づけ）</strong>は<strong>自発的な行動とその結果（results）の連合</strong>を扱う。行動の結果がよければその行動は増え、悪ければ減る、という<strong>行動と環境への作用（operate）</strong>の学習である。</p>
        <h3>ソーンダイクの効果の法則</h3>
        <p><strong>エドワード・ソーンダイク（Thorndike）</strong>は、空腹のネコを<strong>問題箱（puzzle box）</strong>に入れ、レバーを押すなどの操作で脱出できるようにした。ネコは最初は手当たり次第に動く（<strong>試行錯誤 trial and error</strong>）が、試行を重ねるごとに脱出時間が短くなった。ここからソーンダイクは<strong>効果の法則（law of effect）</strong>を提唱した。すなわち<strong>「満足をもたらす結果を伴った行動は反復されやすくなり、不快をもたらす結果を伴った行動は生じにくくなる」</strong>。これがオペラント条件づけの原型である。</p>
        <h3>スキナーと三項随伴性</h3>
        <p><strong>B・F・スキナー（Skinner）</strong>は、レバー押しやキーつつきで餌が出る<strong>スキナー箱（オペラント箱）</strong>を考案し、行動の結果を厳密に操作して研究した。スキナーは行動を<strong>弁別刺激→反応→結果（強化・罰）</strong>という<strong>三項随伴性（three-term contingency）</strong>で捉えた。</p>
        <ul>
          <li><strong>弁別刺激（S<sup>D</sup>）</strong>：その状況なら結果が得られると知らせる手がかり（例：ランプが点いていればレバー押しで餌が出る）。</li>
          <li><strong>反応（R）</strong>：自発される行動（レバーを押す）。</li>
          <li><strong>結果（C）</strong>：行動に随伴して生じる結果（餌＝強化、電撃＝罰）。</li>
        </ul>
        <h3>強化と罰 — 4区分</h3>
        <p>結果が行動を<strong>増やす</strong>働きを<strong>強化（reinforcement）</strong>、<strong>減らす</strong>働きを<strong>罰（punishment）</strong>という。さらに刺激を<strong>与える（正 positive）</strong>か<strong>取り除く（負 negative）</strong>かで掛け合わせ、4つに分かれる。<strong>「正・負」は良し悪しではなく「刺激の付加・除去」を指す</strong>ことに注意する。</p>
        <table>
          <tr><th></th><th>行動を増やす（強化）</th><th>行動を減らす（罰）</th></tr>
          <tr><td><b>刺激を与える（正＝＋）</b></td><td><b>正の強化</b><br>例：手伝ったら褒める→手伝いが増える</td><td><b>正の罰</b><br>例：騒いだら叱る→騒ぎが減る</td></tr>
          <tr><td><b>刺激を取り除く（負＝−）</b></td><td><b>負の強化</b><br>例：頭痛時に薬を飲む→痛みが消える→服薬が増える</td><td><b>負の罰</b><br>例：門限破りでスマホ没収→違反が減る</td></tr>
        </table>
        <div class="callout warn"><b>最頻出の混同</b>：<strong>負の強化と罰は別物</strong>である。負の強化は不快なものを<em>取り除く</em>ことで行動を<strong>増やす</strong>（例：シートベルト警告音を止めたくてベルトを締める）。罰は行動を<strong>減らす</strong>。判別のコツは、まず<strong>行動が増えた（＝強化）か減った（＝罰）か</strong>を見て、次に<strong>刺激を加えた（正）か取り除いた（負）か</strong>を見るとよい。</div>
        <h3>一次強化子と二次（般性）強化子</h3>
        <ul>
          <li><strong>一次強化子（primary reinforcer）</strong>：食物・水・睡眠・性など、生得的に価値をもつ強化子。学習を必要としない。</li>
          <li><strong>二次強化子（secondary／条件性強化子）</strong>：もとは中性だが、一次強化子と結びついて強化力をもつようになったもの（例：褒め言葉、点数、トークン）。</li>
          <li><strong>般性強化子（generalized reinforcer）</strong>：とくに<strong>お金</strong>のように、多くの一次強化子と交換できるため広い場面で強力に働く二次強化子。</li>
        </ul>
        <div class="callout tip">古典的条件づけ（レスポンデント）は不随意・反射的反応（唾液・恐怖）に、オペラント条件づけは随意的・自発的行動（押す・話す・勉強する）に主に関わる、と整理すると区別しやすい。</div>
      `,
      figure: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="270" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">強化と罰の2×2</text>
        <g font-size="12">
          <rect x="160" y="40" width="160" height="34" fill="#d8f6ee" stroke="#15c4a8"/><text x="240" y="62" text-anchor="middle" font-weight="700">行動が増える（強化）</text>
          <rect x="330" y="40" width="160" height="34" fill="#fde9ee" stroke="#e0566b"/><text x="410" y="62" text-anchor="middle" font-weight="700">行動が減る（罰）</text>
          <rect x="20" y="80" width="135" height="60" fill="#e9ebfe" stroke="#5b6cf0"/><text x="87" y="105" text-anchor="middle" font-weight="700">刺激を与える</text><text x="87" y="123" text-anchor="middle">（正＝＋）</text>
          <rect x="20" y="146" width="135" height="60" fill="#e9ebfe" stroke="#5b6cf0"/><text x="87" y="171" text-anchor="middle" font-weight="700">刺激を取り除く</text><text x="87" y="189" text-anchor="middle">（負＝−）</text>
          <rect x="160" y="80" width="160" height="60" fill="#fff" stroke="#15c4a8"/><text x="240" y="104" text-anchor="middle" font-weight="700" fill="#15a07f">正の強化</text><text x="240" y="124" text-anchor="middle" font-size="11">褒める→手伝い増</text>
          <rect x="330" y="80" width="160" height="60" fill="#fff" stroke="#e0566b"/><text x="410" y="104" text-anchor="middle" font-weight="700" fill="#c43b52">正の罰</text><text x="410" y="124" text-anchor="middle" font-size="11">叱る→騒ぎ減</text>
          <rect x="160" y="146" width="160" height="60" fill="#fff" stroke="#15c4a8"/><text x="240" y="170" text-anchor="middle" font-weight="700" fill="#15a07f">負の強化</text><text x="240" y="190" text-anchor="middle" font-size="11">不快除去→行動増</text>
          <rect x="330" y="146" width="160" height="60" fill="#fff" stroke="#e0566b"/><text x="410" y="170" text-anchor="middle" font-weight="700" fill="#c43b52">負の罰</text><text x="410" y="190" text-anchor="middle" font-size="11">没収→違反減</text>
        </g>
      </svg>`,
      figcaption: "「正・負」は刺激の付加／除去、「強化・罰」は行動の増加／減少。負の強化は行動を増やす点で罰と混同しやすい。",
      terms: [
        { term: "オペラント条件づけ", def: "自発的行動とその結果の連合による学習。道具的条件づけとも。スキナーが体系化。" },
        { term: "効果の法則", def: "満足を伴う行動は反復され、不快を伴う行動は減るとするソーンダイクの原理。" },
        { term: "三項随伴性", def: "弁別刺激→反応→結果という、オペラント行動の基本単位。" },
        { term: "正の強化／負の強化", def: "刺激の付加（正）または除去（負）によって行動を増やすこと。" },
        { term: "正の罰／負の罰", def: "刺激の付加（正）または除去（負）によって行動を減らすこと。" },
        { term: "一次強化子", def: "食物・水など生得的に価値をもつ強化子。学習不要。" },
        { term: "二次（条件性）強化子", def: "一次強化子との連合で強化力をもった刺激（褒め言葉、トークンなど）。" },
        { term: "般性強化子", def: "お金のように多くの一次強化子と交換でき、広く強力に働く二次強化子。" },
      ],
    },
    {
      title: "強化スケジュールと行動形成",
      body: `
        <p>強化を「どのタイミング・どの頻度で与えるか」の規則を<strong>強化スケジュール（schedule of reinforcement）</strong>という。スケジュールの違いは反応の<strong>速さ・持続性・消去しにくさ</strong>に大きな影響を与える。</p>
        <h3>連続強化と部分（間欠）強化</h3>
        <ul>
          <li><strong>連続強化（CRF）</strong>：望ましい反応が出るたびに毎回強化する。学習の<strong>初期</strong>に速く獲得できるが、強化が止まると<strong>消去が速い</strong>。</li>
          <li><strong>部分（間欠）強化</strong>：反応の一部だけを強化する。獲得はやや遅いが、行動が<strong>持続しやすく消去されにくい</strong>。</li>
        </ul>
        <h3>4つの基本スケジュール</h3>
        <p>「比率（回数）か間隔（時間）か」×「固定か変動か」で4種に分かれる。</p>
        <table>
          <tr><th></th><th>固定（fixed）</th><th>変動（variable）</th></tr>
          <tr><td><b>比率（ratio）<br>＝反応回数</b></td><td><b>固定比率 FR</b><br>n回反応ごとに強化。<br>例：部品10個で歩合給。<br>強化直後に休止（ポーズ）が出やすい。高反応率。</td><td><b>変動比率 VR</b><br>平均n回ごと（不規則）に強化。<br>例：スロットマシン。<br><strong>最も高く安定した反応率</strong>。消去が非常に困難。</td></tr>
          <tr><td><b>間隔（interval）<br>＝経過時間</b></td><td><b>固定間隔 FI</b><br>一定時間経過後の最初の反応を強化。<br>例：定期試験前の勉強。<br>強化直前に反応が増える<strong>スキャロップ（扇形）</strong>。</td><td><b>変動間隔 VI</b><br>平均一定時間（不規則）後の反応を強化。<br>例：いつ来るか分からないメールの確認。<br>低〜中程度だが<strong>安定</strong>した反応率。</td></tr>
        </table>
        <div class="callout key"><b>反応率の目安</b>：<strong>比率スケジュールは間隔より反応率が高い</strong>（速く反応するほど早く報酬が得られるため）。<strong>変動は固定より反応が安定し消去されにくい</strong>（次がいつか予測できないため休めない）。ゆえに<strong>VR が最も反応率が高く消去抵抗が強い</strong>。ギャンブル依存の頑固さはこれで説明される。</div>
        <h3>部分強化消去効果</h3>
        <p>部分強化で学習された行動は、連続強化で学習された行動よりも<strong>消去されにくい</strong>。これを<strong>部分強化消去効果（partial reinforcement extinction effect）</strong>という。毎回もらえていた行動は1回もらえないとすぐ「もう出ない」と分かるが、もともと時々しかもらえない行動は、しばらく無報酬でも「またそのうち出る」と区別がつきにくいためである。</p>
        <h3>新しい行動を作る技法</h3>
        <h4>シェイピング（shaping）</h4>
        <p>目標とする複雑な行動を一度に強化するのは難しい。そこで<strong>目標に少しずつ近づく反応（逐次接近）を段階的に強化</strong>していく方法をシェイピングという。動物の芸の訓練や、子どもの新しいスキル習得に用いられる。</p>
        <h4>連鎖化（chaining）</h4>
        <p>複数の単純行動を順番につなげ、一連の行動系列を形成する技法。各ステップが次のステップの弁別刺激となる（例：服を着る一連の手順）。</p>
        <h4>プレマックの原理（Premack principle）</h4>
        <p><strong>「生起頻度の高い（好きな）行動」は、「生起頻度の低い（嫌な）行動」の強化子として使える</strong>という原理。例：「宿題（低頻度）を終えたらゲーム（高頻度）をしてよい」。何が強化子になるかは個人の行動傾向で相対的に決まる、という洞察を含む。</p>
        <div class="callout tip">スロットマシン（VR）が止められないのは「次の1回で当たるかもしれない」という変動比率の予測不能性ゆえである。メール確認（VI）の習慣も、いつ新着が来るか分からないために安定して続く。日常の依存的行動の多くはこれらのスケジュールで説明できる。</div>
      `,
      figure: `<svg viewBox="0 0 540 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="270" y="20" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">強化スケジュール別の反応パターン（累積記録）</text>
        <line x1="55" y1="40" x2="55" y2="210" stroke="#c9cfe0" stroke-width="2"/>
        <line x1="55" y1="210" x2="500" y2="210" stroke="#c9cfe0" stroke-width="2"/>
        <text x="22" y="125" font-size="11" fill="#5b6478" transform="rotate(-90 22 125)" text-anchor="middle">累積反応数</text>
        <text x="278" y="232" font-size="11" fill="#5b6478" text-anchor="middle">時間 →</text>
        <polyline points="60,205 500,55" fill="none" stroke="#e0566b" stroke-width="3"/>
        <text x="430" y="55" font-size="11" font-weight="700" fill="#e0566b">VR（最も急峻）</text>
        <polyline points="60,205 130,180 145,180 215,150 230,150 300,118 315,118 385,84 400,84 470,52" fill="none" stroke="#5b6cf0" stroke-width="3"/>
        <text x="395" y="118" font-size="11" font-weight="700" fill="#5b6cf0">FR（押し後にポーズ）</text>
        <polyline points="60,205 120,200 180,170 200,168 260,160 320,132 340,130 400,124 460,98" fill="none" stroke="#f0a020" stroke-width="3"/>
        <text x="300" y="100" font-size="11" font-weight="700" fill="#c47e10">FI（扇形スキャロップ）</text>
        <polyline points="60,205 500,150" fill="none" stroke="#15c4a8" stroke-width="3" stroke-dasharray="5 4"/>
        <text x="360" y="165" font-size="11" font-weight="700" fill="#15a07f">VI（緩やか・安定）</text>
      </svg>`,
      figcaption: "累積記録の傾きが反応率を表す。比率(FR/VR)は急峻、変動(VR/VI)は安定。FRは強化直後の休止、FIは強化前の加速(スキャロップ)が特徴。",
      terms: [
        { term: "連続強化（CRF）", def: "反応のたびに毎回強化する方式。獲得は速いが消去も速い。" },
        { term: "部分（間欠）強化", def: "反応の一部のみ強化する方式。獲得は遅いが消去されにくい。" },
        { term: "固定比率 FR／変動比率 VR", def: "一定回数ごと(FR)／平均一定回数の不規則(VR)に強化。VRは最高の反応率と消去抵抗。" },
        { term: "固定間隔 FI／変動間隔 VI", def: "一定時間後(FI)／平均一定時間の不規則(VI)の最初の反応を強化。FIは扇形、VIは安定。" },
        { term: "部分強化消去効果", def: "部分強化で学んだ行動は連続強化より消去されにくい現象。" },
        { term: "シェイピング", def: "目標行動に近づく反応を段階的に強化し、新しい行動を形成する技法。" },
        { term: "連鎖化", def: "複数の行動を順に結合し行動系列を作る技法。各段階が次の弁別刺激になる。" },
        { term: "プレマックの原理", def: "生起頻度の高い行動を、低い行動の強化子として用いられるという原理。" },
      ],
    },
    {
      title: "嫌悪制御と学習性無力感",
      body: `
        <p>不快・嫌悪的な刺激を用いた条件づけ（<strong>嫌悪制御 aversive control</strong>）には、生体が嫌悪刺激から逃れる・避ける学習や、罰の使用、そして「制御できない」状況がもたらす無力感などが含まれる。</p>
        <h3>逃避学習と回避学習</h3>
        <ul>
          <li><strong>逃避学習（escape learning）</strong>：すでに始まっている嫌悪刺激から<strong>逃れる</strong>行動の学習。床に電撃が流れたら隣室へ移動して止める、など。嫌悪刺激の除去による<strong>負の強化</strong>で維持される。</li>
          <li><strong>回避学習（avoidance learning）</strong>：嫌悪刺激が来る<strong>前に</strong>手がかり（警告信号）に反応して、嫌悪刺激そのものを<strong>未然に防ぐ</strong>学習。たとえば警告音が鳴ったら電撃が来る前に移動する。</li>
        </ul>
        <div class="callout note"><b>二要因説（Mowrer）</b>：回避学習は古典的条件づけとオペラント条件づけの<strong>2過程</strong>で説明される。①警告信号(CS)が電撃(US)と連合し恐怖を引き起こす（古典的条件づけ）。②その恐怖を低減する回避反応が負の強化で維持される（オペラント条件づけ）。回避反応は嫌悪刺激を経験しなくなるため恐怖が消去されにくく、<strong>消去に非常に強い</strong>。強迫行動や恐怖症の維持の理解に重要である。</div>
        <h3>罰の問題点</h3>
        <p>罰は行動を一時的に抑制できるが、行動変容の手段としては多くの問題をもつ。スキナーも罰の使用に批判的だった。</p>
        <ul>
          <li>行動を<strong>抑制するだけで、望ましい代替行動を教えない</strong>。</li>
          <li>効果が一時的で、罰する人がいない場面では行動が戻りやすい。</li>
          <li>罰する人・場所への<strong>恐怖や攻撃性</strong>、回避（嘘・逃亡）を生む。</li>
          <li>体罰は<strong>攻撃の観察学習モデル</strong>を与え、攻撃行動を助長しうる。</li>
        </ul>
        <div class="callout tip">効果的に用いるなら、罰は<strong>即時・一貫・適度</strong>であり、同時に<strong>望ましい行動を強化する</strong>こと（罰よりも望ましい行動の強化＝代替行動分化強化を優先）が推奨される。</div>
        <h3>学習性無力感（learned helplessness）</h3>
        <p><strong>マーティン・セリグマン（Martin Seligman）</strong>とメイヤーは、イヌに<strong>逃れられない電撃</strong>を反復して与えた。その後、簡単に逃げられる状況（障壁を越えれば電撃を止められる）に移しても、これらのイヌは逃げようとせず、ただ電撃に耐えた。一方、最初から逃避できた群や電撃を受けなかった群は問題なく逃げた。</p>
        <p>セリグマンは、これを<strong>「何をしても結果を制御できない」という経験から、努力しても無駄だと学習してしまった状態</strong>＝<strong>学習性無力感</strong>と呼んだ。重要なのは電撃そのものではなく<strong>「制御不可能性（uncontrollability）」の経験</strong>である点である。</p>
        <div class="callout key">学習性無力感は、人間の<strong>抑うつ</strong>のモデルとして発展した。後にセリグマンは、出来事の原因をどう説明するか（<strong>帰属スタイル／説明スタイル</strong>）が無力感の生じやすさを左右するとし、悲観的説明スタイル（内的・安定的・全般的な原因帰属）が抑うつと関わるとした。この研究は後年、<strong>ポジティブ心理学</strong>の出発点にもなった。</div>
      `,
      figure: `<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="arH" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6478"/></marker></defs>
        <text x="270" y="20" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">学習性無力感の手続き（セリグマン）</text>
        <g font-size="11" text-anchor="middle">
          <rect x="20" y="60" width="150" height="55" rx="8" fill="#fde9ee" stroke="#e0566b"/><text x="95" y="83">第1段階</text><text x="95" y="100" font-size="10">制御不能な電撃を反復</text>
          <line x1="172" y1="87" x2="208" y2="87" stroke="#5b6478" stroke-width="2" marker-end="url(#arH)"/>
          <rect x="212" y="60" width="150" height="55" rx="8" fill="#e9ebfe" stroke="#5b6cf0"/><text x="287" y="83">第2段階</text><text x="287" y="100" font-size="10">逃避可能な状況に移す</text>
          <line x1="364" y1="87" x2="400" y2="87" stroke="#5b6478" stroke-width="2" marker-end="url(#arH)"/>
          <rect x="404" y="60" width="120" height="55" rx="8" fill="#fff" stroke="#e0566b"/><text x="464" y="83" fill="#c43b52" font-weight="700">逃げない</text><text x="464" y="100" font-size="10">＝無力感</text>
        </g>
        <text x="270" y="150" text-anchor="middle" font-size="11" fill="#5b6478">本質は電撃ではなく「制御できない」という経験 → 抑うつのモデルへ</text>
      </svg>`,
      figcaption: "制御不能な嫌悪経験の後、逃避可能になっても逃げなくなる。制御不可能性の学習が無力感を生み、抑うつのモデルとなった。",
      terms: [
        { term: "嫌悪制御", def: "嫌悪的（不快な）刺激を用いた行動の制御。逃避・回避・罰など。" },
        { term: "逃避学習", def: "すでに始まった嫌悪刺激から逃れる学習。嫌悪刺激の除去（負の強化）で維持。" },
        { term: "回避学習", def: "警告手がかりに反応し、嫌悪刺激を未然に防ぐ学習。消去に強い。" },
        { term: "二要因説（Mowrer）", def: "回避学習を古典的条件づけ(恐怖)とオペラント条件づけ(恐怖低減)の2過程で説明する説。" },
        { term: "罰の問題点", def: "代替行動を教えない、効果が一時的、恐怖・攻撃・回避を生むなどの弊害。" },
        { term: "学習性無力感", def: "制御不可能な経験から「努力しても無駄」と学ぶ状態。セリグマンが提唱、抑うつのモデル。" },
        { term: "説明（帰属）スタイル", def: "出来事の原因をどう解釈するか。悲観的スタイルは無力感・抑うつと関わる。" },
      ],
    },
    {
      title: "認知的・社会的学習",
      body: `
        <p>行動主義は「観察可能な刺激と反応」だけで学習を説明しようとした。しかし、報酬がなくても学習は起こりうるし、他者を見るだけでも学習できる。本レッスンでは、心の内的過程を重視する<strong>認知的学習</strong>と、他者から学ぶ<strong>社会的学習</strong>を扱う。これらは行動主義から認知心理学への橋渡しとなった。</p>
        <h3>トールマンの認知地図と潜在学習</h3>
        <p><strong>エドワード・トールマン（Tolman）</strong>は、ネズミの迷路学習を研究し、ネズミが単なる刺激-反応の連鎖ではなく、環境の空間的表象である<strong>認知地図（cognitive map）</strong>を頭の中に形成していると主張した。</p>
        <p>有名な<strong>潜在学習（latent learning）</strong>の実験では、ネズミを3群に分けた。①常に餌あり群、②常に餌なし群、③最初は餌なしで途中から餌あり群。③の群は、餌が導入された途端に、ずっと餌をもらってきた①群と同等以上の成績を一気に示した。これは、<strong>餌（強化）がない間にも迷路の構造を学習していた（しかし行動に表れていなかった）</strong>ことを示す。</p>
        <div class="callout key"><b>学習と遂行の区別</b>：潜在学習は「強化がなくても学習は成立する」「学習されたものは強化（動機づけ）が与えられて初めて行動として現れる」ことを示した。すなわち<strong>学習（獲得）と遂行（表出）は別物</strong>であり、強化は学習そのものより遂行に必要、という認知的立場の根拠となった。</div>
        <h3>ケーラーの洞察学習</h3>
        <p>ゲシュタルト心理学者<strong>ヴォルフガング・ケーラー（Köhler）</strong>は、チンパンジー（スルタン）の問題解決を観察した。手の届かない高さにバナナを吊るすと、チンパンジーは試行錯誤を経たのち、しばらく考え込んだ末に<strong>突然</strong>、箱を積み重ねたり棒をつないだりして解決した。この<strong>「あっ、分かった！」という突然の解決</strong>を<strong>洞察学習（insight learning）</strong>という。試行錯誤的な漸進的学習とは異なり、問題状況の<strong>全体的な関係を再構成（再体制化）</strong>して一気に解に至る点が特徴である。</p>
        <h3>バンデューラの社会的学習理論</h3>
        <p><strong>アルバート・バンデューラ（Albert Bandura）</strong>は、人は自分が直接強化されなくても、<strong>他者（モデル）の行動とその結果を観察するだけで学習できる</strong>とした。これを<strong>観察学習（observational learning）／モデリング</strong>という。</p>
        <h4>ボボ人形実験（Bobo doll experiment, 1961）</h4>
        <p>子どもたちに、大人が空気人形（ボボ人形）を叩く・蹴る・乱暴な言葉を浴びせる様子を見せた。その後、同じ部屋に入れると、子どもたちは見た通りの攻撃行動を<strong>模倣</strong>した。攻撃しなかった大人を見た群や統制群より明らかに攻撃的だった。さらに、大人の攻撃が<strong>褒められた</strong>のを見た子は模倣しやすく、<strong>罰せられた</strong>のを見た子は模倣しにくかった。後者で「やればできるが、やらなかった」ことは、報酬を提示すると模倣が現れることで確認された（<strong>代理強化／代理罰</strong>、ここでも学習と遂行の区別が表れる）。</p>
        <div class="callout note"><b>観察学習の4過程（バンデューラ）</b>：①<strong>注意</strong>（モデルに注目する）→②<strong>保持</strong>（行動を記憶する）→③<strong>運動再生</strong>（実際に再現する）→④<strong>動機づけ</strong>（再現する理由＝強化期待がある）。単なる模倣ではなく、認知的過程を含む点が行動主義と異なる。</div>
        <h3>自己効力感</h3>
        <p>バンデューラは後に<strong>自己効力感（self-efficacy）</strong>＝<strong>「自分はある課題をうまく遂行できる」という個人の信念・見込み感</strong>を提唱した。自己効力感が高い人は困難な課題に挑戦し粘り強く取り組む。自己効力感は、①<strong>達成経験（成功体験）</strong>、②<strong>代理経験（他者の成功の観察）</strong>、③<strong>言語的説得（励まし）</strong>、④<strong>生理的・情動的状態</strong>によって形成されるとされ、教育・健康・臨床に広く応用されている。</p>
        <div class="callout tip">これらの理論は、行動の背後にある<strong>期待・表象・認知</strong>を学習に組み込んだ。バンデューラ自身、後に自説を<strong>社会的認知理論</strong>と呼び、環境・行動・個人（認知）が相互に影響し合う<strong>相互決定論</strong>を唱えた。</div>
      `,
      figure: `<svg viewBox="0 0 540 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="arB" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15c4a8"/></marker></defs>
        <text x="270" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">観察学習の4過程（バンデューラ）</text>
        <g font-size="12" text-anchor="middle" font-weight="700">
          <rect x="20" y="65" width="110" height="48" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="75" y="94">① 注意</text>
          <rect x="160" y="65" width="110" height="48" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="215" y="94">② 保持</text>
          <rect x="300" y="65" width="110" height="48" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="355" y="94">③ 運動再生</text>
          <rect x="440" y="65" width="90" height="48" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="485" y="94">④ 動機づけ</text>
        </g>
        <g stroke="#15c4a8" stroke-width="2" marker-end="url(#arB)">
          <line x1="132" y1="89" x2="156" y2="89"/><line x1="272" y1="89" x2="296" y2="89"/><line x1="412" y1="89" x2="436" y2="89"/>
        </g>
        <text x="270" y="145" text-anchor="middle" font-size="11" fill="#5b6478">モデルの行動を「見る」だけで学習が成立する（直接強化を必要としない）</text>
      </svg>`,
      figcaption: "観察学習は、注意→保持→運動再生→動機づけの認知過程を経る。直接強化なしに他者から学べる点が行動主義と異なる。",
      terms: [
        { term: "認知地図", def: "環境の空間的な内的表象。トールマンが迷路学習から提唱。" },
        { term: "潜在学習", def: "強化がなくても成立し、強化が与えられて初めて行動に表れる学習。学習と遂行の区別を示す。" },
        { term: "洞察学習", def: "試行錯誤でなく、状況の関係の再構成により突然解に至る学習。ケーラーがチンパンジーで観察。" },
        { term: "観察学習（モデリング）", def: "他者(モデル)の行動と結果を観察して学習すること。直接強化を要しない。バンデューラ。" },
        { term: "ボボ人形実験", def: "攻撃する大人を見た子が攻撃を模倣した実験。観察学習と代理強化を実証。" },
        { term: "代理強化／代理罰", def: "モデルが受けた強化・罰が、観察者の模倣行動に影響すること。" },
        { term: "観察学習の4過程", def: "注意・保持・運動再生・動機づけ。観察学習に含まれる認知的過程。" },
        { term: "自己効力感", def: "ある課題をうまく遂行できるという信念。達成経験・代理経験・説得・生理状態で形成。バンデューラ。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "心理学における「学習」の定義として最も適切なものはどれか。", choices: ["生得的に備わった反射の総称", "経験による比較的永続的な行動（または行動傾向）の変化", "成熟による身体的能力の発達", "疲労や薬物による一時的な行動の変化"], answer: 1, explain: "学習は「経験による比較的永続的な行動（行動傾向）の変化」と定義され、成熟・疲労・薬物による変化は除かれる。", difficulty: 1 },
    { type: "mcq", stem: "同じ刺激を繰り返し受けるうちに、その刺激への反応が次第に弱まる現象を何というか。", choices: ["鋭敏化", "馴化", "般化", "消去"], answer: 1, explain: "馴化（habituation）は単一刺激の反復で反応が弱まる非連合学習。無意味な刺激を無視する適応的機能をもつ。", difficulty: 1 },
    { type: "mcq", stem: "大きな物音に驚いた直後、わずかな音にも過敏に反応するようになるのは何か。", choices: ["馴化", "鋭敏化", "脱馴化", "自発的回復"], answer: 1, explain: "鋭敏化（sensitization）は強い・有害な刺激の後に、後続刺激への反応が強まる現象。馴化と逆向きである。", difficulty: 1 },
    { type: "mcq", stem: "パブロフの実験で「食物（肉粉）」に相当するのはどれか。", choices: ["条件刺激（CS）", "無条件刺激（US）", "条件反応（CR）", "中性刺激（NS）"], answer: 1, explain: "食物は生得的に唾液分泌（UR）を引き起こすので無条件刺激（US）。学習後のベルが条件刺激（CS）である。", difficulty: 1 },
    { type: "mcq", stem: "ベルの音が学習によって唾液分泌を引き起こすようになったとき、この唾液分泌は何と呼ばれるか。", choices: ["無条件反応（UR）", "条件反応（CR）", "無条件刺激（US）", "弁別反応"], answer: 1, explain: "学習されたCS（ベル）が引き起こす反応は条件反応（CR）。食物による生得的な唾液分泌は無条件反応（UR）である。", difficulty: 2 },
    { type: "mcq", stem: "獲得後、条件刺激（CS）をUS抜きで繰り返し提示して条件反応が弱まる過程を何というか。", choices: ["般化", "消去", "分化", "高次条件づけ"], answer: 1, explain: "消去（extinction）はCSをUSなしで提示し続けてCRが弱まる過程。単なる忘却ではなく新たな学習と考えられている。", difficulty: 1 },
    { type: "mcq", stem: "消去が完了した後、時間をおいて再びCSを提示すると弱いCRが再び現れる現象は何か。", choices: ["自発的回復", "般化", "鋭敏化", "脱馴化"], answer: 0, explain: "自発的回復（spontaneous recovery）は、消去後に時間を経てCRが再出現する現象。元の連合が消去で消し去られていないことを示す。", difficulty: 2 },
    { type: "mcq", stem: "あるCSで条件づけが成立した後、それに似た刺激にもCRが生じることを何というか。", choices: ["分化", "般化", "消去", "阻止"], answer: 1, explain: "般化（generalization）は類似刺激にも反応が広がる現象。逆に、特定の刺激のみに反応するよう学習するのが分化（弁別）である。", difficulty: 1 },
    { type: "mcq", stem: "乳児に白ネズミへの恐怖を条件づけ、それが毛皮やウサギにも般化したことを示した研究者は誰か。", choices: ["パブロフ", "ワトソン", "スキナー", "ソーンダイク"], answer: 1, explain: "ワトソン（とレイナー）の「アルバート坊や」の実験。情動（恐怖）が古典的条件づけで獲得・般化されうることを示した。", difficulty: 2 },
    { type: "mcq", stem: "ガルシア効果（味覚嫌悪学習）の特徴として誤っているものはどれか。", choices: ["一回の経験で成立しうる", "摂取と不快の間に数時間の遅延があっても成立する", "どんな刺激（光・音）とも等しく結びつく", "毒を避ける適応として理解できる"], answer: 2, explain: "味覚嫌悪では「味と内臓不快」が結びつきやすく、光や音は結びつきにくい（準備性）。これは生物学的制約の例である。", difficulty: 2 },
    { type: "mcq", stem: "「どんな刺激も等しく条件づけられるわけではなく、種の生存に意味ある連合ほど学習されやすい」という考えを何というか。", choices: ["接近の原理", "生物学的制約（準備性）", "効果の法則", "プレマックの原理"], answer: 1, explain: "生物学的制約／準備性（preparedness）。味覚嫌悪学習がその代表例で、すべての連合を等価とした初期行動主義への反証となった。", difficulty: 2 },
    { type: "mcq", stem: "「対提示の回数より、CSがUSをどれだけ予測するか（随伴性）が条件づけを決める」と示し、阻止現象で支持されるモデルはどれか。", choices: ["レスコーラ＝ワグナー・モデル", "効果の法則", "二要因説", "プレマックの原理"], answer: 0, explain: "レスコーラ＝ワグナー・モデルは学習量が予測誤差に比例するとした。既に予測済みのUSに新CSが学習されない阻止（ブロッキング）が証拠である。", difficulty: 3 },
    { type: "mcq", stem: "恐怖と両立しない弛緩反応を、不安階層に沿って段階的に対提示する行動療法はどれか。", choices: ["系統的脱感作", "トークンエコノミー", "シェイピング", "タイムアウト"], answer: 0, explain: "ウォルピの系統的脱感作。逆制止の原理で、リラックスを弱い刺激から段階的に組み合わせて恐怖を消去する。", difficulty: 2 },
    { type: "mcq", stem: "ソーンダイクが問題箱のネコの研究から提唱した「満足を伴う行動は反復され、不快を伴う行動は減る」という原理は何か。", choices: ["効果の法則", "接近の原理", "プレマックの原理", "部分強化消去効果"], answer: 0, explain: "効果の法則（law of effect）。試行錯誤を経て満足をもたらす行動が選ばれるという、オペラント条件づけの原型である。", difficulty: 1 },
    { type: "mcq", stem: "オペラント条件づけにおける「弁別刺激→反応→結果」という基本単位を何というか。", choices: ["三項随伴性", "二要因説", "認知地図", "高次条件づけ"], answer: 0, explain: "三項随伴性（three-term contingency）。スキナーが提唱した、オペラント行動を捉える基本枠組みである。", difficulty: 2 },
    { type: "mcq", stem: "「頭が痛いとき薬を飲むと痛みが消え、その結果、痛いと薬を飲む行動が増えた」。これはどれに当たるか。", choices: ["正の強化", "負の強化", "正の罰", "負の罰"], answer: 1, explain: "不快な刺激（痛み）を取り除く（負）ことで行動（服薬）が増えた（強化）ので負の強化。判別はまず増減、次に付加か除去かで見る。", difficulty: 2 },
    { type: "mcq", stem: "「子どもが手伝いをしたので褒めたところ、手伝いの頻度が増えた」。これはどれに当たるか。", choices: ["正の強化", "負の強化", "正の罰", "負の罰"], answer: 0, explain: "好ましい刺激（褒める）を与え（正）、行動（手伝い）が増えた（強化）ので正の強化である。", difficulty: 1 },
    { type: "mcq", stem: "「騒いだ生徒を叱ったところ、騒ぐ行動が減った」。これはどれに当たるか。", choices: ["正の強化", "負の強化", "正の罰", "負の罰"], answer: 2, explain: "嫌悪刺激（叱る）を与え（正）、行動（騒ぐ）が減った（罰）ので正の罰である。", difficulty: 2 },
    { type: "mcq", stem: "「門限を破った子からスマホを取り上げたところ、門限破りが減った」。これはどれに当たるか。", choices: ["正の強化", "負の強化", "正の罰", "負の罰"], answer: 3, explain: "好ましい刺激（スマホ）を取り除き（負）、行動（門限破り）が減った（罰）ので負の罰である。", difficulty: 2 },
    { type: "mcq", stem: "「正の強化」と「負の強化」に共通する点として正しいものはどれか。", choices: ["どちらも行動を減らす", "どちらも行動を増やす", "どちらも嫌悪刺激を与える", "どちらも好刺激を取り除く"], answer: 1, explain: "「強化」はいずれも行動を増やす働きを指す。違いは刺激を与える（正）か取り除く（負）かである。負の強化を罰と混同しないこと。", difficulty: 2 },
    { type: "mcq", stem: "お金のように、多くの一次強化子と交換できるため広い場面で強力に働く強化子を何というか。", choices: ["一次強化子", "般性強化子", "正の罰", "弁別刺激"], answer: 1, explain: "お金は般性強化子（generalized reinforcer）。多様な一次強化子と交換できる二次強化子で、広く強い強化力をもつ。", difficulty: 2 },
    { type: "mcq", stem: "スロットマシンに代表され、最も高く安定した反応率を生み、消去が非常に困難な強化スケジュールはどれか。", choices: ["固定比率 FR", "変動比率 VR", "固定間隔 FI", "変動間隔 VI"], answer: 1, explain: "変動比率（VR）は平均n回ごとの不規則な強化。いつ当たるか予測できず、最高の反応率と強い消去抵抗を生む。ギャンブル依存の説明に使われる。", difficulty: 2 },
    { type: "mcq", stem: "一定時間が経過した後の最初の反応を強化する方式で、強化直前に反応が増える「扇形（スキャロップ）」が見られるのはどれか。", choices: ["固定間隔 FI", "変動間隔 VI", "固定比率 FR", "連続強化"], answer: 0, explain: "固定間隔（FI）は一定時間後の最初の反応を強化。強化が近づくと反応が増える扇形パターンを示す（定期試験前の勉強が例）。", difficulty: 3 },
    { type: "mcq", stem: "部分（間欠）強化で学習された行動が、連続強化で学習された行動より消去されにくい現象を何というか。", choices: ["部分強化消去効果", "自発的回復", "般化", "潜在学習"], answer: 0, explain: "部分強化消去効果。もともと時々しか強化されない行動は、無報酬が続いても「消去」と区別しにくいため消去に強い。", difficulty: 2 },
    { type: "mcq", stem: "目標行動に少しずつ近づく反応（逐次接近）を段階的に強化し、新しい行動を形成する技法はどれか。", choices: ["シェイピング", "般化", "プレマックの原理", "高次条件づけ"], answer: 0, explain: "シェイピング（shaping）。一度に達成困難な複雑行動を、近似反応の強化で段階的に作り上げる。動物の訓練などに用いる。", difficulty: 2 },
    { type: "mcq", stem: "「宿題を終えたらゲームをしてよい」のように、生起頻度の高い行動を低い行動の強化子に使う原理は何か。", choices: ["効果の法則", "プレマックの原理", "二要因説", "部分強化消去効果"], answer: 1, explain: "プレマックの原理。好きな（高頻度の）行動を、嫌な（低頻度の）行動の強化子として利用できるという原理である。", difficulty: 2 },
    { type: "mcq", stem: "回避学習を「恐怖の古典的条件づけ」と「恐怖低減によるオペラント強化」の2過程で説明する理論はどれか。", choices: ["二要因説（Mowrer）", "効果の法則", "レスコーラ＝ワグナー・モデル", "相互決定論"], answer: 0, explain: "モウラーの二要因説。警告信号が恐怖を引き起こし（古典的）、それを低減する回避反応が負の強化で維持される（オペラント）。回避は消去に強い。", difficulty: 3 },
    { type: "mcq", stem: "罰の問題点として適切でないものはどれか。", choices: ["望ましい代替行動を教えない", "罰する人への恐怖や攻撃性を生むことがある", "行動を即座に永久に消し去る", "罰のない場面で行動が戻りやすい"], answer: 2, explain: "罰は行動を一時的に抑制するだけで、永久に消し去るわけではない。代替行動を教えず、恐怖・攻撃・回避を生む弊害がある。", difficulty: 2 },
    { type: "mcq", stem: "逃れられない電撃を反復経験させたイヌが、後に逃避可能な状況でも逃げなくなった現象と、それを提唱した人物の組合せはどれか。", choices: ["学習性無力感 — セリグマン", "潜在学習 — トールマン", "洞察学習 — ケーラー", "観察学習 — バンデューラ"], answer: 0, explain: "セリグマンの学習性無力感。本質は電撃そのものでなく「制御不可能性」の経験で、人間の抑うつのモデルへと発展した。", difficulty: 2 },
    { type: "mcq", stem: "迷路実験で、餌（強化）がない間にも空間を学習しており、餌が導入されると一気に成績が向上した現象を何というか。", choices: ["潜在学習", "洞察学習", "観察学習", "部分強化"], answer: 0, explain: "トールマンの潜在学習。強化がなくても学習は成立し、動機づけ（強化）が与えられて遂行に現れる。学習と遂行の区別を示した。", difficulty: 2 },
    { type: "mcq", stem: "トールマンが、ネズミは刺激-反応の連鎖でなく環境の内的表象を形成すると主張した、その表象を何と呼ぶか。", choices: ["認知地図", "弁別刺激", "強化スケジュール", "条件刺激"], answer: 0, explain: "認知地図（cognitive map）。トールマンは行動主義に認知的要素を導入し、後の認知心理学への橋渡しとなった。", difficulty: 2 },
    { type: "mcq", stem: "チンパンジーが試行錯誤でなく、状況の関係を再構成して突然問題を解決する様子を観察し、洞察学習を提唱したのは誰か。", choices: ["ケーラー", "ソーンダイク", "パブロフ", "スキナー"], answer: 0, explain: "ゲシュタルト心理学者ケーラー。チンパンジー（スルタン）が箱を積むなど突然解に至る洞察学習を示した。漸進的な試行錯誤と対比される。", difficulty: 2 },
    { type: "mcq", stem: "ボボ人形実験で、攻撃する大人を見た子どもが攻撃を模倣したことから示された学習はどれか。", choices: ["観察学習（モデリング）", "味覚嫌悪学習", "潜在学習", "古典的条件づけ"], answer: 0, explain: "バンデューラの観察学習。直接強化されなくても、モデルの行動と結果を観察するだけで学習が成立することを示した。", difficulty: 1 },
    { type: "mcq", stem: "バンデューラの観察学習の4過程の順序として正しいものはどれか。", choices: ["注意→保持→運動再生→動機づけ", "保持→注意→動機づけ→運動再生", "動機づけ→注意→保持→運動再生", "運動再生→保持→注意→動機づけ"], answer: 0, explain: "観察学習は注意・保持・運動再生・動機づけの順に進む。単なる模倣でなく認知過程を含む点が行動主義と異なる。", difficulty: 3 },
    { type: "mcq", stem: "「自分はある課題をうまく遂行できる」という個人の信念を表すバンデューラの概念はどれか。", choices: ["自己効力感", "学習性無力感", "認知地図", "般性強化"], answer: 0, explain: "自己効力感（self-efficacy）。達成経験・代理経験・言語的説得・生理的状態によって形成され、挑戦や粘り強さに影響する。", difficulty: 1 },
    { type: "mcq", stem: "古典的条件づけとオペラント条件づけの違いとして最も適切なものはどれか。", choices: ["前者は刺激と刺激の連合（受動的反応）、後者は行動と結果の連合（自発的行動）を扱う", "前者は自発的行動、後者は反射を扱う", "両者とも結果による行動の増減のみを扱う", "前者は人間のみ、後者は動物のみで生じる"], answer: 0, explain: "古典的条件づけは刺激同士の連合で不随意・反射的反応（唾液・恐怖）に、オペラント条件づけは行動と結果の連合で自発的行動に主に関わる。", difficulty: 2 },
  ],
});
