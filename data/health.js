/* ============================================================
   健康心理学  (health)
   ============================================================ */
PsychApp.registerModule({
  id: "health",
  title: "健康心理学",
  emoji: "🏥",
  category: "applied",
  tagline: "ストレス理論・コーピング・ストレスと免疫・健康行動の理論・ウェルビーイング",
  overview: `<p>健康心理学（health psychology）は、<strong>健康の維持・増進、疾病の予防と治療、病いへの適応</strong>に心理的・行動的・社会的要因がどう関わるかを科学的に探究する応用分野である。病気を生物学的故障とのみ捉える生物医学モデルから、心・社会・生物の相互作用を重視する<strong>生物心理社会モデル</strong>への転換を背景に、ストレス、コーピング、健康行動、ウェルビーイングを扱う。</p>`,
  lessons: [
    {
      title: "健康心理学とは — 生物医学モデルから生物心理社会モデルへ",
      body: `
        <p>20世紀半ばまで、医学は<strong>生物医学モデル（biomedical model）</strong>を前提としてきた。これは「病気は身体（細胞・組織・生化学）の異常によって生じ、心理や社会の要因とは無関係である」とする<em>還元主義的</em>な立場である。感染症の治療には大きな成功を収めたが、生活習慣病や慢性疾患の時代になると、その限界が明らかになった。</p>
        <h3>生物心理社会モデルへの転換</h3>
        <p>精神科医 <em>エンゲル (G. L. Engel)</em> は1977年、生物医学モデルを批判し<strong>生物心理社会モデル（biopsychosocial model）</strong>を提唱した。健康と病気は、①<strong>生物的要因</strong>（遺伝・ウイルス・免疫）、②<strong>心理的要因</strong>（ストレス・信念・感情・行動）、③<strong>社会的要因</strong>（人間関係・文化・経済・医療制度）の<em>相互作用</em>から生じるとする。</p>
        <table>
          <tr><th></th><th>生物医学モデル</th><th>生物心理社会モデル</th></tr>
          <tr><td>病気の原因</td><td>身体の異常のみ</td><td>生物・心理・社会の相互作用</td></tr>
          <tr><td>心と身体</td><td>分離（心身二元論）</td><td>不可分に関連</td></tr>
          <tr><td>患者の役割</td><td>受動的（治療される対象）</td><td>能動的（行動・選択が健康に影響）</td></tr>
          <tr><td>得意な対象</td><td>急性感染症</td><td>慢性疾患・生活習慣病</td></tr>
        </table>
        <div class="callout key">健康心理学の出発点は、<strong>「心と身体は相互に影響しあう」</strong>という認識である。現代の死因の多くは生活習慣（喫煙・食事・運動・飲酒）と結びついており、行動を変えることが健康に直結する。</div>
        <h3>健康行動と危険行動</h3>
        <p><strong>健康行動（health behavior）</strong>とは、健康を維持・増進する目的で行う行動である。<em>カスル & コブ</em> は、自分は健康だと信じている人がとる予防的行動を<strong>予防的健康行動（preventive health behavior）</strong>と呼んだ。</p>
        <ul>
          <li><strong>健康行動</strong>：適度な運動、バランスのよい食事、十分な睡眠、定期健診、ワクチン接種、シートベルト着用など。</li>
          <li><strong>危険行動（health-risk behavior）</strong>：喫煙、過度の飲酒、運動不足、不健康な食事、危険運転など。<em>ベラックら</em>の研究（アラメダ郡研究）では、7つの健康習慣（喫煙しない・適正体重・規則的運動・適度な飲酒・7〜8時間睡眠・朝食をとる・間食をしない）が寿命と関連することが示された。</li>
        </ul>
        <div class="callout note">健康心理学は、臨床健康心理学・公衆衛生・行動医学（behavioral medicine）と隣接する。行動医学は、行動科学と生物医学を統合して疾病の予防・治療を行う学際領域である。</div>
      `,
      figure: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="200" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">生物心理社会モデル</text>
        <circle cx="200" cy="110" r="62" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2" opacity="0.75"/>
        <circle cx="150" cy="180" r="62" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2" opacity="0.7"/>
        <circle cx="250" cy="180" r="62" fill="#fdeccd" stroke="#f0a020" stroke-width="2" opacity="0.7"/>
        <g text-anchor="middle" font-size="13" font-weight="700" fill="#1d2433">
          <text x="200" y="92">生物的</text><text x="200" y="108" font-size="10" font-weight="400">遺伝・免疫</text>
          <text x="124" y="190">心理的</text><text x="124" y="206" font-size="10" font-weight="400">ストレス</text>
          <text x="276" y="190">社会的</text><text x="276" y="206" font-size="10" font-weight="400">人間関係</text>
        </g>
        <text x="200" y="158" text-anchor="middle" font-size="12" font-weight="800" fill="#e0566b">健康</text>
        <text x="200" y="248" text-anchor="middle" font-size="11" fill="#5b6478">3要因の相互作用で健康・病気が決まる</text>
      </svg>`,
      figcaption: "エンゲルの生物心理社会モデル。生物的・心理的・社会的要因の重なり（相互作用）が健康と病気を規定する。",
      terms: [
        { term: "生物医学モデル", def: "病気を身体の異常のみに還元する立場。心身二元論を前提とする。" },
        { term: "生物心理社会モデル", def: "エンゲル(1977)が提唱。健康を生物・心理・社会の相互作用で捉える枠組み。" },
        { term: "健康行動", def: "健康の維持・増進を目的とする行動。運動・健診・禁煙など。" },
        { term: "危険行動", def: "健康を損なうリスクを高める行動。喫煙・過度の飲酒・運動不足など。" },
        { term: "行動医学", def: "行動科学と生物医学を統合し疾病の予防・治療を行う学際領域。" },
        { term: "予防的健康行動", def: "病気でない人が予防のためにとる行動（カスル&コブ）。健診・ワクチンなど。" },
      ],
    },
    {
      title: "ストレスの理論 — GAS・闘争逃走反応・認知的評価",
      body: `
        <p><strong>ストレス（stress）</strong>とは、心身に負荷をかける刺激や状況、およびそれに対する生体の反応の総称である。負荷を与える刺激や出来事を<strong>ストレッサー（stressor）</strong>、それによって生じる心身の反応を<strong>ストレス反応（stress response）</strong>と呼ぶ。</p>
        <h3>ストレッサーの種類</h3>
        <ul>
          <li><strong>生活上の出来事（life events）</strong>：結婚・離婚・転職・死別など、大きな変化を伴う出来事。<em>ホームズ & ラーエ</em>は<strong>社会的再適応評価尺度（SRRS）</strong>を作り、各出来事に「生活変化単位（LCU）」を割り当てた（配偶者の死＝100点が最高）。LCUの合計が高いほど病気になりやすいとした。</li>
          <li><strong>日常的苛立ち（daily hassles）</strong>：渋滞・物の紛失・人間関係の小さな摩擦など、些細だが反復する苛立ち。<em>ラザルス</em>は、大事件よりこうした日々の苛立ちの蓄積こそが健康への影響が大きいと論じた。逆の概念が<strong>uplifts（高揚・喜び）</strong>。</li>
          <li><strong>慢性ストレス（chronic stress）</strong>：貧困・介護・差別・職場の慢性的圧力など、長期に持続する負荷。</li>
        </ul>
        <h3>セリエの汎適応症候群（GAS）</h3>
        <p><em>ハンス・セリエ (Selye)</em> は、ストレッサーの種類によらず生体に共通の<strong>非特異的反応</strong>が現れることを発見し、これを<strong>汎適応症候群（General Adaptation Syndrome; GAS）</strong>と呼んだ。GASは3段階からなる。</p>
        <ol>
          <li><strong>警告反応期（alarm）</strong>：ストレッサーに直面し、一時的に抵抗力が低下した後、交感神経が活性化して身体が動員される。</li>
          <li><strong>抵抗期（resistance）</strong>：身体が適応し抵抗力が高まる。しかしエネルギーを消耗し続ける。</li>
          <li><strong>疲憊期（exhaustion）</strong>：適応資源が尽き、抵抗力が低下。疾病・臓器損傷・最悪の場合は死に至る。</li>
        </ol>
        <div class="callout key">セリエの貢献は、<strong>ストレッサーの種類を問わず共通の生理反応が生じる</strong>ことを示した点にある。彼は望ましいストレス（eustress）と有害なストレス（distress）も区別した。</div>
        <h3>キャノンの闘争・逃走反応</h3>
        <p>セリエに先立ち、<em>ウォルター・キャノン (Cannon)</em> は、生体が脅威に直面すると交感神経系と副腎髄質が活性化し、戦うか逃げるかに備えて身体を急速に動員すると論じた。これが<strong>闘争・逃走反応（fight-or-flight response）</strong>である。心拍・血圧・血糖の上昇、瞳孔散大などが生じる。キャノンは内部環境を一定に保つ<strong>ホメオスタシス（恒常性）</strong>の概念でも知られる。</p>
        <div class="callout note">テイラーらは、女性に多くみられる別のストレス反応様式として<strong>「tend-and-befriend（世話をし、仲間と結びつく）」</strong>を提唱した。オキシトシンが関与すると考えられている。</div>
        <h3>ラザルス & フォルクマンの認知的評価</h3>
        <p>GASや闘争逃走反応は生理的反応を強調したが、<em>ラザルス & フォルクマン (Lazarus & Folkman)</em> は、<strong>同じ出来事でも人によってストレスになるかは「どう受け止めるか（認知的評価）」で決まる</strong>とする<strong>トランスアクショナル（相互作用）モデル</strong>を提唱した。評価は2段階である。</p>
        <ul>
          <li><strong>一次評価（primary appraisal）</strong>：その出来事は自分にとって脅威か・害か・挑戦か、それとも無関係か、を評価する。「これはまずい状況か?」</li>
          <li><strong>二次評価（secondary appraisal）</strong>：「自分にそれに対処する資源・能力があるか?」を評価する。</li>
        </ul>
        <div class="callout tip">一次評価で「脅威」、二次評価で「対処できない」と判断されたときに、ストレス反応が強く生じる。逆に「挑戦」かつ「対処可能」と評価されれば、同じ出来事も成長の機会となる。<strong>評価は再評価（reappraisal）によって更新されうる</strong>。</div>
      `,
      figure: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="260" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">汎適応症候群（GAS）の3相曲線</text>
        <line x1="55" y1="190" x2="500" y2="190" stroke="#c9cfe0" stroke-width="2"/>
        <line x1="55" y1="55" x2="55" y2="190" stroke="#c9cfe0" stroke-width="2"/>
        <text x="48" y="60" text-anchor="end" font-size="10" fill="#5b6478">抵抗力</text>
        <text x="278" y="212" text-anchor="middle" font-size="10" fill="#5b6478">時間</text>
        <line x1="55" y1="120" x2="500" y2="120" stroke="#e0566b" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="60" y="115" font-size="9" fill="#e0566b">通常の抵抗水準</text>
        <path d="M55,120 L95,150 L130,95 Q200,70 270,85 L330,150 Q400,175 470,182" fill="none" stroke="#5b6cf0" stroke-width="3"/>
        <g font-size="11" font-weight="700" fill="#1d2433" text-anchor="middle">
          <text x="100" y="172">警告反応期</text>
          <text x="230" y="62">抵抗期</text>
          <text x="410" y="172">疲憊期</text>
        </g>
        <line x1="180" y1="55" x2="180" y2="190" stroke="#c9cfe0" stroke-dasharray="3 3"/>
        <line x1="320" y1="55" x2="320" y2="190" stroke="#c9cfe0" stroke-dasharray="3 3"/>
        <circle cx="100" cy="150" r="3" fill="#f0a020"/><text x="100" y="190" font-size="8" fill="#5b6478" text-anchor="middle">↑抵抗一時低下</text>
      </svg>`,
      figcaption: "セリエのGAS。警告反応期で一時的に抵抗力が下がった後に動員され、抵抗期で適応するが、長期化すると資源が枯渇し疲憊期で抵抗力が低下する。",
      terms: [
        { term: "ストレッサー", def: "心身に負荷を与える刺激・出来事。生活上の出来事・日常的苛立ち・慢性ストレスなど。" },
        { term: "社会的再適応評価尺度(SRRS)", def: "ホームズ&ラーエが作成。生活上の出来事を生活変化単位(LCU)で得点化した尺度。" },
        { term: "日常的苛立ち(daily hassles)", def: "些細だが反復する日々の苛立ち。ラザルスは大事件より健康影響が大きいとした。" },
        { term: "汎適応症候群(GAS)", def: "セリエの理論。ストレッサーの種類によらず生じる共通反応で、警告・抵抗・疲憊の3期からなる。" },
        { term: "闘争・逃走反応", def: "キャノンの概念。脅威に対し交感神経が身体を急速に動員する反応。" },
        { term: "ホメオスタシス", def: "内部環境を一定に保つ恒常性。キャノンが提唱。" },
        { term: "一次評価／二次評価", def: "ラザルス&フォルクマンの認知的評価。出来事の脅威性の評価と、対処資源の評価。" },
        { term: "tend-and-befriend", def: "テイラーらの提唱。世話をし仲間と結びつくストレス反応様式。オキシトシンが関与。" },
      ],
    },
    {
      title: "コーピングと緩衝要因",
      body: `
        <p><strong>コーピング（coping）</strong>とは、ストレスフルな状況に対処しようとする認知的・行動的努力である。ラザルス & フォルクマンは、コーピングを大きく2種類に分けた。</p>
        <h3>問題焦点型と情動焦点型</h3>
        <table>
          <tr><th></th><th>問題焦点型コーピング</th><th>情動焦点型コーピング</th></tr>
          <tr><td>目的</td><td>ストレッサーそのものを変える・解決する</td><td>ストレッサーが生む感情を調整する</td></tr>
          <tr><td>例</td><td>計画を立てる、情報収集、相談、直接行動</td><td>気分転換、再評価、感情表出、回避、受容</td></tr>
          <tr><td>有効な場面</td><td>状況を変えられるとき</td><td>状況を変えられないとき（死別・難病など）</td></tr>
        </table>
        <div class="callout key">どちらが優れているかではなく、<strong>状況に応じた柔軟な使い分け（コーピングの柔軟性）</strong>が適応的とされる。変えられる問題には問題焦点型、変えられない事態には情動焦点型が有効である。</div>
        <p>近年は、宗教や人生観に頼る<strong>意味焦点型コーピング（meaning-focused）</strong>や、他者に助けを求める<strong>社会的支援探索型</strong>も区別される。</p>
        <h3>社会的支援とその緩衝効果</h3>
        <p><strong>社会的支援（social support）</strong>は、他者から得られる援助の総称で、①道具的（具体的援助）、②情報的（助言）、③情緒的（共感・励まし）、④評価的（自己評価を支える）支援に分けられる。</p>
        <p>社会的支援が健康を守る経路には2説がある。</p>
        <ul>
          <li><strong>緩衝効果説（buffering hypothesis）</strong>：社会的支援は<em>ストレスが高いときに限って</em>悪影響を和らげる。ストレスとの交互作用として働く。</li>
          <li><strong>直接効果説（main effect hypothesis）</strong>：社会的支援はストレスの有無にかかわらず、常に健康によい影響を与える。</li>
        </ul>
        <h3>個人差としての緩衝要因</h3>
        <p>同じストレスでも、人の特性によって受ける打撃は異なる。</p>
        <ul>
          <li><strong>ハーディネス（hardiness／頑健性）</strong>：<em>コバサ (Kobasa)</em> が提唱。ストレス耐性の高い人がもつ3つのC ―― <strong>コミットメント（commitment：関与）</strong>、<strong>コントロール（control：制御感）</strong>、<strong>チャレンジ（challenge：挑戦と捉える）</strong>。</li>
          <li><strong>楽観性（optimism）</strong>：<em>シャイアー & カーヴァー</em>の概念。将来によい結果を期待する傾向。免疫機能や術後回復のよさと関連する。</li>
          <li><strong>自己効力感（self-efficacy）</strong>：<em>バンデューラ (Bandura)</em> の概念。「自分はその行動をうまく遂行できる」という確信。高いほどストレス対処や健康行動の遂行が促進される。</li>
          <li><strong>レジリエンス（resilience／回復力）</strong>：逆境や強いストレスを経験しても、適応を回復・維持する力。生まれつきだけでなく後天的に育てうる。</li>
          <li><strong>統制の所在（locus of control）</strong>：<em>ロッター</em>の概念。結果を自分の行動次第（内的）と捉えるか、運や他者次第（外的）と捉えるか。内的統制は健康行動と関連する。</li>
        </ul>
        <div class="callout warn"><b>混同注意</b>：自己効力感（バンデューラ）は「特定の行動をうまくできるという確信」、ハーディネス（コバサ）は「ストレス耐性の性格特性（3C）」、レジリエンスは「逆境からの回復力」。出題で取り違えやすい。</div>
      `,
      figure: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="250" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">社会的支援の緩衝効果</text>
        <line x1="60" y1="180" x2="470" y2="180" stroke="#c9cfe0" stroke-width="2"/>
        <line x1="60" y1="50" x2="60" y2="180" stroke="#c9cfe0" stroke-width="2"/>
        <text x="52" y="55" text-anchor="end" font-size="10" fill="#5b6478">不調</text>
        <text x="265" y="200" text-anchor="middle" font-size="10" fill="#5b6478">ストレスの大きさ →</text>
        <line x1="60" y1="160" x2="470" y2="60" stroke="#e0566b" stroke-width="3"/>
        <text x="400" y="58" font-size="11" font-weight="700" fill="#e0566b">支援 低</text>
        <line x1="60" y1="160" x2="470" y2="135" stroke="#15c4a8" stroke-width="3"/>
        <text x="400" y="128" font-size="11" font-weight="700" fill="#15c4a8">支援 高</text>
        <text x="250" y="170" font-size="10" fill="#5b6478" text-anchor="middle">高ストレス時ほど両者の差が開く＝緩衝効果</text>
      </svg>`,
      figcaption: "緩衝効果説のイメージ。社会的支援が高い人は、ストレスが大きくなっても不調の増え方がゆるやか。ストレスが低い領域では差が小さい。",
      terms: [
        { term: "問題焦点型コーピング", def: "ストレッサーそのものを解決・変化させる対処。計画・情報収集・直接行動など。" },
        { term: "情動焦点型コーピング", def: "ストレスが生む感情を調整する対処。再評価・気分転換・回避・受容など。" },
        { term: "社会的支援", def: "他者から得る援助。道具的・情報的・情緒的・評価的支援に分けられる。" },
        { term: "緩衝効果説", def: "社会的支援はストレスが高いときに限って悪影響を和らげるとする説。" },
        { term: "ハーディネス", def: "コバサの概念。ストレス耐性の高さを支える3C＝関与・制御感・挑戦。" },
        { term: "楽観性", def: "シャイアー&カーヴァーの概念。よい結果を期待する傾向で健康と関連。" },
        { term: "自己効力感", def: "バンデューラの概念。特定行動を遂行できるという確信。" },
        { term: "レジリエンス", def: "強いストレスや逆境から適応を回復・維持する力。" },
      ],
    },
    {
      title: "ストレスと身体 — HPA系・免疫・タイプA・心身症",
      body: `
        <p>ストレスは「気の持ちよう」ではなく、明確な生理的経路を通じて身体に影響する。主要な2系統がある。</p>
        <h3>1. 交感神経 - 副腎髄質系（SAM系）</h3>
        <p>キャノンの闘争・逃走反応に対応する<em>速い</em>経路。脅威に直面すると、視床下部→交感神経→副腎髄質が活性化し、<strong>アドレナリン（エピネフリン）・ノルアドレナリン</strong>が分泌される。心拍・血圧・血糖が即座に上昇する。</p>
        <h3>2. 視床下部-下垂体-副腎皮質系（HPA系）</h3>
        <p>セリエのGASに対応する<em>ゆっくり</em>持続する経路。<strong>視床下部（CRH）→下垂体（ACTH）→副腎皮質</strong>と連鎖し、副腎皮質から<strong>コルチゾール（cortisol）</strong>が分泌される。コルチゾールは血糖を上げエネルギーを動員する一方、長期に高い状態が続くと<strong>免疫抑制・記憶障害・血圧上昇・内臓脂肪蓄積</strong>などをもたらす。</p>
        <div class="callout key">急性ストレスへのコルチゾール分泌は適応的だが、<strong>慢性的な高コルチゾール状態は心身を損なう</strong>。これがGASの疲憊期に対応する生理的実態である。</div>
        <h3>精神神経免疫学（PNI）</h3>
        <p><strong>精神神経免疫学（psychoneuroimmunology; PNI）</strong>は、心理状態・神経系・内分泌系・免疫系の相互作用を研究する分野である。慢性ストレスは免疫機能を低下させる。</p>
        <ul>
          <li><em>キーコルト＝グレイザーら</em>の研究：介護者・試験期間中の医学生・離婚者などで、<strong>NK細胞活性の低下、創傷治癒の遅延、ワクチン反応の低下</strong>が示された。</li>
          <li>慢性ストレス下では感染症（風邪など）にかかりやすくなる（<em>コーエン</em>の風邪ウイルス研究：ストレスが高い人ほど発症率が高い）。</li>
        </ul>
        <h3>タイプA行動パターンと心血管疾患</h3>
        <p>循環器内科医 <em>フリードマン & ローゼンマン</em> は、冠状動脈疾患の患者に共通する行動様式として<strong>タイプA行動パターン（Type A behavior pattern）</strong>を見いだした。特徴は<strong>競争心・時間切迫感（せっかち）・敵意（hostility）</strong>。対照的に、のんびりした非競争的な様式をタイプBと呼ぶ。</p>
        <div class="callout tip">その後の研究で、タイプAの全体ではなく、特に<strong>「敵意・怒り（hostility）」</strong>こそが心血管疾患の最も強い危険因子であることが分かってきた。慢性的な怒りは交感神経・HPA系を過剰に活性化する。</div>
        <h3>心身症</h3>
        <p><strong>心身症（psychosomatic disorder）</strong>とは、発症や経過に心理社会的要因が密接に関与する<em>身体疾患</em>である（例：本態性高血圧、消化性潰瘍、気管支喘息、過敏性腸症候群、緊張型頭痛など）。あくまで実体のある身体疾患である点で、身体症状症（心理的苦痛が身体症状として現れる精神疾患）とは区別される。</p>
        <div class="callout warn"><b>用語の区別</b>：心身症は「心理要因の関与する<strong>身体</strong>の病気」。仮病や気のせいではない。実際に潰瘍や高血圧という身体的異常が存在する。</div>
      `,
      figure: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="arh" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker></defs>
        <text x="240" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">ストレスの2つの生理経路</text>
        <rect x="170" y="38" width="140" height="38" rx="8" fill="#e9ebfe" stroke="#5b6cf0"/><text x="240" y="62" text-anchor="middle" font-size="12" font-weight="700">ストレッサー → 視床下部</text>
        <g stroke="#5b6cf0" stroke-width="2" marker-end="url(#arh)">
          <line x1="180" y1="76" x2="110" y2="110"/><line x1="300" y1="76" x2="370" y2="110"/>
        </g>
        <rect x="20" y="115" width="180" height="36" rx="8" fill="#fdeccd" stroke="#f0a020"/><text x="110" y="138" text-anchor="middle" font-size="11" font-weight="700">SAM系（速い）</text>
        <rect x="280" y="115" width="180" height="36" rx="8" fill="#d8f6ee" stroke="#15c4a8"/><text x="370" y="138" text-anchor="middle" font-size="11" font-weight="700">HPA系（持続）</text>
        <g stroke="#c9cfe0" stroke-width="2" marker-end="url(#arh)">
          <line x1="110" y1="151" x2="110" y2="180"/><line x1="370" y1="151" x2="370" y2="180"/>
        </g>
        <rect x="20" y="185" width="180" height="36" rx="8" fill="#fff" stroke="#f0a020"/><text x="110" y="208" text-anchor="middle" font-size="11">副腎髄質→アドレナリン</text>
        <rect x="280" y="185" width="180" height="36" rx="8" fill="#fff" stroke="#15c4a8"/><text x="370" y="208" text-anchor="middle" font-size="11">副腎皮質→コルチゾール</text>
        <rect x="100" y="240" width="280" height="32" rx="8" fill="#fde8ec" stroke="#e0566b"/><text x="240" y="261" text-anchor="middle" font-size="11" font-weight="700" fill="#e0566b">慢性化 → 免疫低下・心血管リスク</text>
      </svg>`,
      figcaption: "ストレスの2経路。速いSAM系（交感神経-副腎髄質→アドレナリン）と、持続するHPA系（→コルチゾール）。慢性化すると免疫低下や心血管リスクを高める。",
      terms: [
        { term: "HPA系", def: "視床下部-下垂体-副腎皮質系。ストレス時にコルチゾールを分泌する持続的経路。" },
        { term: "コルチゾール", def: "副腎皮質から分泌されるストレスホルモン。慢性的高値は免疫抑制などを招く。" },
        { term: "SAM系", def: "交感神経-副腎髄質系。アドレナリンを分泌する速い反応経路。" },
        { term: "精神神経免疫学(PNI)", def: "心理・神経・内分泌・免疫系の相互作用を研究する分野。" },
        { term: "タイプA行動パターン", def: "競争心・時間切迫感・敵意を特徴とする行動様式。心血管疾患と関連（フリードマン&ローゼンマン）。" },
        { term: "敵意(hostility)", def: "タイプAのうち心血管疾患の最も強い危険因子とされる怒り・敵意の成分。" },
        { term: "心身症", def: "発症・経過に心理社会的要因が関与する身体疾患。潰瘍・高血圧・喘息など。" },
        { term: "NK細胞", def: "自然免疫を担うリンパ球。慢性ストレスでその活性が低下する。" },
      ],
    },
    {
      title: "健康行動の理論と行動変容",
      body: `
        <p>禁煙・減量・運動・受診といった健康行動を、人はなぜ行う（行わない）のか。これを説明し、行動変容を支援するための主要な理論を整理する。</p>
        <h3>健康信念モデル（HBM）</h3>
        <p><strong>健康信念モデル（Health Belief Model; HBM）</strong>は、ローゼンストックらが提唱。人が予防行動をとるかは、次の信念で決まるとする。</p>
        <ul>
          <li><strong>罹患性（susceptibility）</strong>：自分がその病気にかかりやすいという認識。</li>
          <li><strong>重大性（severity）</strong>：かかると深刻だという認識。</li>
          <li><strong>利益（benefits）</strong>：行動すれば防げるという認識。</li>
          <li><strong>障壁（barriers）</strong>：行動の負担・コストの認識（これが大きいと妨げる）。</li>
          <li><strong>行動のきっかけ（cues to action）</strong>：症状・他者の助言・キャンペーンなど。後に<strong>自己効力感</strong>も追加された。</li>
        </ul>
        <h3>計画的行動理論（TPB）</h3>
        <p><em>アイゼン (Ajzen)</em> の<strong>計画的行動理論（Theory of Planned Behavior; TPB）</strong>は、合理的行為理論を発展させたもの。行動は直前の<strong>行動意図（intention）</strong>によって決まり、意図は次の3要素から形成される。</p>
        <ol>
          <li><strong>態度（attitude）</strong>：その行動への肯定的／否定的評価。</li>
          <li><strong>主観的規範（subjective norm）</strong>：周囲がその行動を期待しているという認識。</li>
          <li><strong>知覚された行動コントロール（perceived behavioral control）</strong>：自分にその行動が容易にできるという感覚（自己効力感に近い）。</li>
        </ol>
        <div class="callout note">合理的行為理論（フィッシュバイン & アイゼン）に「知覚された行動コントロール」を加えたものが計画的行動理論である。</div>
        <h3>トランスセオレティカルモデル（変化のステージ）</h3>
        <p><em>プロチャスカ & ディクレメンテ</em> の<strong>トランスセオレティカルモデル（Transtheoretical Model; TTM）</strong>は、行動変容を一足飛びではなく<strong>段階的プロセス</strong>と捉える。中心が「変化のステージ（stages of change）」である。</p>
        <table>
          <tr><th>ステージ</th><th>状態</th></tr>
          <tr><td>① 前熟考期（precontemplation）</td><td>変える気がない（6か月以内に変える意図なし）</td></tr>
          <tr><td>② 熟考期（contemplation）</td><td>変えようか迷っている（6か月以内に変える意図あり）</td></tr>
          <tr><td>③ 準備期（preparation）</td><td>近く（1か月以内）始める準備をしている</td></tr>
          <tr><td>④ 実行期（action）</td><td>実際に行動を変えた（6か月未満）</td></tr>
          <tr><td>⑤ 維持期（maintenance）</td><td>変化を6か月以上継続している</td></tr>
        </table>
        <div class="callout tip">TTMの含意は、<strong>ステージに合った働きかけが有効</strong>という点である。前熟考期の人に具体的方法を説いても響かない。まず問題の自覚を促す（意識の高揚）ことが先である。逆戻り（再発）も過程の一部とみなす。</div>
        <h3>動機づけ面接</h3>
        <p><strong>動機づけ面接（motivational interviewing; MI）</strong>は、<em>ミラー & ロルニック</em> が開発した、変化への<strong>両価性（ambivalence：変わりたいが変わりたくない）</strong>を本人の中から解消していく協働的な対話法である。</p>
        <ul>
          <li>説得や指示ではなく、本人の<strong>「変わりたい」という発言（チェンジトーク）</strong>を引き出す。</li>
          <li>抵抗に逆らわず受け止める（ローリング・ウィズ・レジスタンス）。共感的に、本人の自律性を尊重する。</li>
        </ul>
        <div class="callout warn"><b>取り違え注意</b>：HBMは「病気と行動への<strong>信念</strong>」、TPBは「<strong>意図</strong>を作る3要素」、TTMは「変化の<strong>ステージ</strong>」。理論名と中心概念の対応を覚えること。</div>
      `,
      figure: `<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="arc" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15c4a8"/></marker></defs>
        <text x="180" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">変化のステージ（円環）</text>
        <circle cx="180" cy="195" r="120" fill="none" stroke="#e9ebfe" stroke-width="34"/>
        <g text-anchor="middle" font-size="11" font-weight="700" fill="#1d2433">
          <circle cx="180" cy="75" r="30" fill="#e9ebfe" stroke="#5b6cf0"/><text x="180" y="72">前熟考</text><text x="180" y="86" font-size="8" font-weight="400">変える気なし</text>
          <circle cx="284" cy="135" r="30" fill="#e9ebfe" stroke="#5b6cf0"/><text x="284" y="132">熟考</text><text x="284" y="146" font-size="8" font-weight="400">迷い</text>
          <circle cx="284" cy="255" r="30" fill="#fdeccd" stroke="#f0a020"/><text x="284" y="252">準備</text><text x="284" y="266" font-size="8" font-weight="400">近く開始</text>
          <circle cx="180" cy="315" r="30" fill="#d8f6ee" stroke="#15c4a8"/><text x="180" y="312">実行</text><text x="180" y="326" font-size="8" font-weight="400">行動変容</text>
          <circle cx="76" cy="255" r="30" fill="#d8f6ee" stroke="#15c4a8"/><text x="76" y="252">維持</text><text x="76" y="266" font-size="8" font-weight="400">6か月以上</text>
        </g>
        <g stroke="#15c4a8" stroke-width="2" fill="none" marker-end="url(#arc)">
          <path d="M210,82 Q250,95 264,116"/>
          <path d="M291,165 Q298,200 291,225"/>
          <path d="M262,278 Q230,302 208,308"/>
          <path d="M150,310 Q110,300 92,280"/>
        </g>
        <text x="180" y="200" text-anchor="middle" font-size="9" fill="#5b6478">逆戻りも</text>
        <text x="180" y="212" text-anchor="middle" font-size="9" fill="#5b6478">過程の一部</text>
      </svg>`,
      figcaption: "プロチャスカ&ディクレメンテの変化のステージ。前熟考→熟考→準備→実行→維持と進むが、逆戻り（再発）も起こりうる循環的プロセス。",
      terms: [
        { term: "健康信念モデル(HBM)", def: "罹患性・重大性・利益・障壁・きっかけの信念で予防行動を説明するモデル。" },
        { term: "計画的行動理論(TPB)", def: "アイゼンの理論。態度・主観的規範・知覚された行動コントロールが意図を作る。" },
        { term: "知覚された行動コントロール", def: "TPBの要素。行動が容易にできるという感覚。自己効力感に近い。" },
        { term: "トランスセオレティカルモデル(TTM)", def: "プロチャスカ&ディクレメンテ。行動変容を段階的ステージで捉えるモデル。" },
        { term: "変化のステージ", def: "前熟考・熟考・準備・実行・維持の5段階。逆戻りも含む。" },
        { term: "動機づけ面接(MI)", def: "両価性を解消し変化を引き出す協働的対話法（ミラー&ロルニック）。" },
        { term: "チェンジトーク", def: "MIで引き出される、本人の「変わりたい」という方向の発言。" },
      ],
    },
    {
      title: "慢性疾患・痛み・アドヒアランス・健康増進とウェルビーイング",
      body: `
        <p>最後に、病いとともに生きること、医療への参加、そしてポジティブな健康について扱う。</p>
        <h3>慢性疾患への適応</h3>
        <p>糖尿病・がん・心疾患などの慢性疾患は、長期にわたる自己管理と心理的適応を要する。患者は喪失や不確実性に直面し、抑うつや不安を伴いやすい。適応を支えるのは、コントロール感・社会的支援・意味の見いだし（ベネフィット・ファインディング）などである。</p>
        <div class="callout note">死にゆく過程の心理段階として<em>キューブラー＝ロス</em>の5段階（否認・怒り・取引・抑うつ・受容）が知られるが、必ず順に進むわけではなく、個人差が大きい。</div>
        <h3>痛みの心理学</h3>
        <p>痛みは単なる身体信号ではなく、心理社会的要因に大きく左右される。<em>メルザック & ウォール</em> の<strong>ゲート・コントロール理論（gate control theory）</strong>は、脊髄に「ゲート（門）」があり、注意・情動・認知などの上位中枢からの信号がこの門を開閉して痛みの伝達を調整すると説明する。これにより、気を紛らわせると痛みが和らぐことなどが説明できる。</p>
        <ul>
          <li><strong>急性痛</strong>は警告信号として適応的だが、<strong>慢性痛</strong>はそれ自体が苦しみとなり、抑うつ・活動制限・社会的孤立を招く。</li>
          <li>心理的介入：リラクセーション、認知行動療法、バイオフィードバック、注意のそらしなどが用いられる。プラセボ効果も痛みで顕著である。</li>
        </ul>
        <h3>服薬遵守（アドヒアランス）</h3>
        <p><strong>アドヒアランス（adherence）</strong>とは、患者が治療計画（服薬・通院・生活指導）を守る程度をいう。古い「コンプライアンス（医師の指示への従順）」に代わり、<strong>患者が主体的に治療に参加する</strong>含意で用いられる。</p>
        <div class="callout warn">慢性疾患では治療を守らない<strong>ノンアドヒアランス</strong>が珍しくない（しばしば半数前後）。症状がない、副作用、複雑な処方、医師との関係の悪さ、健康信念の低さなどが要因となる。<strong>良好な医師-患者コミュニケーション</strong>がアドヒアランスを高める。</div>
        <h3>予防と健康増進</h3>
        <p>予防は3段階に分けられる。</p>
        <table>
          <tr><th>レベル</th><th>内容</th><th>例</th></tr>
          <tr><td><b>一次予防</b></td><td>発症そのものを防ぐ</td><td>禁煙・運動・ワクチン・健康教育</td></tr>
          <tr><td><b>二次予防</b></td><td>早期発見・早期治療</td><td>がん検診・健康診断</td></tr>
          <tr><td><b>三次予防</b></td><td>重症化・再発防止、リハビリ</td><td>再発予防・機能回復・社会復帰</td></tr>
        </table>
        <h3>ウェルビーイングとポジティブな健康</h3>
        <p>WHOは健康を<strong>「単に病気がない状態ではなく、身体的・精神的・社会的に良好な状態（well-being）」</strong>と定義する。健康心理学も、病気の除去だけでなく<strong>積極的な健康（positive health）</strong>とウェルビーイングの増進を目標とする。</p>
        <ul>
          <li><strong>主観的ウェルビーイング（subjective well-being）</strong>：<em>ディーナー</em>の概念。人生満足度と、ポジティブ感情の多さ・ネガティブ感情の少なさからなる。</li>
          <li><strong>セリグマンのPERMA</strong>：ポジティブ感情・エンゲージメント・関係性・意味・達成。フロー（チクセントミハイ）も関連する。</li>
          <li>運動・睡眠・良好な人間関係・感謝やマインドフルネスの実践が、ウェルビーイングと身体的健康の双方を高めることが示されている。</li>
        </ul>
        <div class="callout key">健康心理学のゴールは、<strong>「病気を治す」だけでなく「より良く生きる（thriving）」を支える</strong>ことにある。これは生物心理社会モデルとポジティブ心理学の合流点である。</div>
      `,
      figure: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="arp" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker></defs>
        <text x="250" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">予防の3段階</text>
        <g text-anchor="middle" font-size="12" font-weight="700">
          <rect x="20" y="60" width="140" height="70" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="90" y="90">一次予防</text><text x="90" y="110" font-size="9" font-weight="400">発症を防ぐ</text>
          <rect x="180" y="60" width="140" height="70" rx="10" fill="#fdeccd" stroke="#f0a020"/><text x="250" y="90">二次予防</text><text x="250" y="110" font-size="9" font-weight="400">早期発見・治療</text>
          <rect x="340" y="60" width="140" height="70" rx="10" fill="#fde8ec" stroke="#e0566b"/><text x="410" y="90">三次予防</text><text x="410" y="110" font-size="9" font-weight="400">再発防止・回復</text>
        </g>
        <g stroke="#5b6cf0" stroke-width="2" marker-end="url(#arp)">
          <line x1="162" y1="95" x2="178" y2="95"/><line x1="322" y1="95" x2="338" y2="95"/>
        </g>
        <text x="90" y="155" text-anchor="middle" font-size="9" fill="#5b6478">禁煙・ワクチン</text>
        <text x="250" y="155" text-anchor="middle" font-size="9" fill="#5b6478">検診</text>
        <text x="410" y="155" text-anchor="middle" font-size="9" fill="#5b6478">リハビリ</text>
        <text x="250" y="185" text-anchor="middle" font-size="10" fill="#5b6478">健康な状態 → 病気 → 回復、の各段階に対応</text>
      </svg>`,
      figcaption: "予防の3段階。発症前の一次予防、早期発見の二次予防、重症化・再発防止の三次予防。",
      terms: [
        { term: "ゲート・コントロール理論", def: "メルザック&ウォール。脊髄の門を上位中枢が開閉し痛みを調整するという理論。" },
        { term: "アドヒアランス", def: "患者が主体的に治療計画を守る程度。コンプライアンスより能動的含意。" },
        { term: "一次・二次・三次予防", def: "発症予防／早期発見・治療／重症化・再発防止の3段階。" },
        { term: "主観的ウェルビーイング", def: "ディーナーの概念。人生満足度とポジティブ感情の多さ・ネガティブ感情の少なさ。" },
        { term: "PERMA", def: "セリグマンの幸福の5要素。ポジティブ感情・没頭・関係・意味・達成。" },
        { term: "キューブラー=ロスの5段階", def: "死の受容過程の段階（否認・怒り・取引・抑うつ・受容）。順序や個人差は大きい。" },
        { term: "ポジティブな健康", def: "病気の除去にとどまらず良好な状態の増進を目指す健康観。WHO定義に対応。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "1977年に生物医学モデルを批判し、健康を生物・心理・社会の相互作用で捉える枠組みを提唱したのは誰か。", choices: ["ハンス・セリエ", "ジョージ・エンゲル", "リチャード・ラザルス", "アルバート・バンデューラ"], answer: 1, explain: "エンゲル(Engel)が生物心理社会モデルを提唱した。これが健康心理学の理論的基盤の一つである。セリエはGAS、ラザルスは認知的評価で知られる。", difficulty: 1 },
    { type: "mcq", stem: "病気を身体（細胞・組織）の異常のみに還元し、心理・社会要因を考慮しない伝統的立場はどれか。", choices: ["生物心理社会モデル", "生物医学モデル", "ゲート・コントロール理論", "健康信念モデル"], answer: 1, explain: "生物医学モデルは心身二元論を前提とし、急性感染症には有効だったが、生活習慣病の説明には限界がある。", difficulty: 1 },
    { type: "mcq", stem: "ハンス・セリエが提唱した、ストレッサーの種類によらず生じる共通の反応を何というか。", choices: ["闘争・逃走反応", "汎適応症候群（GAS）", "ホメオスタシス", "tend-and-befriend"], answer: 1, explain: "汎適応症候群（GAS）はストレッサーの種類を問わない非特異的反応で、警告反応期・抵抗期・疲憊期の3段階からなる。", difficulty: 1 },
    { type: "mcq", stem: "汎適応症候群（GAS）の3段階の正しい順序はどれか。", choices: ["抵抗期→警告反応期→疲憊期", "警告反応期→疲憊期→抵抗期", "警告反応期→抵抗期→疲憊期", "疲憊期→抵抗期→警告反応期"], answer: 2, explain: "GASは警告反応期（動員）→抵抗期（適応）→疲憊期（資源枯渇・抵抗力低下）の順に進む。", difficulty: 2 },
    { type: "mcq", stem: "脅威に直面した生体が交感神経と副腎髄質を活性化し、戦うか逃げるかに備える反応を何と呼び、誰が提唱したか。", choices: ["闘争・逃走反応／キャノン", "汎適応症候群／セリエ", "認知的評価／ラザルス", "緩衝効果／コーエン"], answer: 0, explain: "闘争・逃走反応（fight-or-flight）はキャノンが提唱。ホメオスタシスの概念でも知られる。", difficulty: 2 },
    { type: "mcq", stem: "ホームズとラーエが作成し、生活上の出来事を「生活変化単位（LCU）」で得点化した尺度はどれか。", choices: ["健康信念尺度", "社会的再適応評価尺度（SRRS）", "PERMAスケール", "知覚されたストレス尺度"], answer: 1, explain: "SRRSは結婚・離婚・死別などの出来事にLCUを割り当て、配偶者の死を最高(100)とした。合計が高いほど病気リスクが高いとされた。", difficulty: 2 },
    { type: "mcq", stem: "ラザルスが「大きな出来事よりも健康への影響が大きい」と論じた、些細だが反復するストレッサーは何か。", choices: ["慢性ストレス", "生活上の出来事", "日常的苛立ち（daily hassles）", "外傷的出来事"], answer: 2, explain: "ラザルスは渋滞や物の紛失などの日常的苛立ちの蓄積を重視した。逆の概念は高揚体験（uplifts）である。", difficulty: 2 },
    { type: "mcq", stem: "ラザルス＆フォルクマンの認知的評価における「一次評価」が問うのはどれか。", choices: ["自分に対処する資源・能力があるか", "その出来事は自分にとって脅威・害・挑戦か", "周囲が行動を期待しているか", "病気にかかりやすいか"], answer: 1, explain: "一次評価は出来事の脅威性（脅威・害・挑戦・無関係）を評価する。対処資源の評価は二次評価である。", difficulty: 2 },
    { type: "mcq", stem: "ラザルスのモデルで、「自分にこの状況に対処できる資源があるか」を評価する段階を何というか。", choices: ["一次評価", "二次評価", "再評価", "三次評価"], answer: 1, explain: "二次評価は対処可能性の評価である。一次評価で脅威・二次評価で対処不能と判断されたときストレス反応が強まる。", difficulty: 2 },
    { type: "mcq", stem: "死別や難病など「状況を変えられない」場面で特に有効とされるコーピングはどれか。", choices: ["問題焦点型コーピング", "情動焦点型コーピング", "対決型コーピング", "回避一辺倒のコーピング"], answer: 1, explain: "変えられない事態には、感情を調整する情動焦点型コーピング（再評価・受容など）が適応的である。変えられる問題には問題焦点型が有効。", difficulty: 2 },
    { type: "mcq", stem: "「社会的支援はストレスが高いときに限って悪影響を和らげる」とする考え方はどれか。", choices: ["直接効果説", "緩衝効果説", "対立仮説", "学習性無力感説"], answer: 1, explain: "緩衝効果説（buffering hypothesis）は、社会的支援がストレスとの交互作用として高ストレス時に保護的に働くとする。常に効くとするのは直接効果説。", difficulty: 2 },
    { type: "mcq", stem: "コバサが提唱した、ストレス耐性を支える3つのC（commitment・control・challenge）からなる性格特性はどれか。", choices: ["自己効力感", "ハーディネス", "レジリエンス", "楽観性"], answer: 1, explain: "ハーディネス（hardiness）はコバサの概念で、関与・制御感・挑戦の3Cを特徴とする。自己効力感はバンデューラの別概念。", difficulty: 2 },
    { type: "mcq", stem: "バンデューラが提唱した「自分はその行動をうまく遂行できる」という確信を何というか。", choices: ["統制の所在", "自己効力感", "主観的規範", "ハーディネス"], answer: 1, explain: "自己効力感（self-efficacy）はバンデューラの概念で、健康行動の遂行やストレス対処を促進する。", difficulty: 1 },
    { type: "mcq", stem: "ストレス時にコルチゾールを分泌し、慢性化すると免疫抑制をもたらす内分泌経路はどれか。", choices: ["SAM系（交感神経-副腎髄質）", "HPA系（視床下部-下垂体-副腎皮質）", "副交感神経系", "ゲート・コントロール系"], answer: 1, explain: "HPA系はCRH→ACTH→副腎皮質と連鎖しコルチゾールを分泌する持続的経路。慢性的高値は免疫抑制・記憶障害などを招く。", difficulty: 2 },
    { type: "mcq", stem: "心理状態・神経・内分泌・免疫系の相互作用を研究し、慢性ストレスによる免疫低下を扱う分野はどれか。", choices: ["精神物理学", "精神神経免疫学（PNI）", "行動遺伝学", "神経経済学"], answer: 1, explain: "精神神経免疫学（PNI）は、キーコルト＝グレイザーらの研究などで、慢性ストレスがNK細胞活性低下や創傷治癒遅延を招くことを示した。", difficulty: 2 },
    { type: "mcq", stem: "フリードマンとローゼンマンが冠状動脈疾患患者に見いだした、競争心・時間切迫感・敵意を特徴とする行動様式はどれか。", choices: ["タイプA行動パターン", "タイプB行動パターン", "タイプD行動パターン", "ハーディネス"], answer: 0, explain: "タイプA行動パターンは心血管疾患と関連する。その後の研究で、とくに敵意（hostility）成分が最も強い危険因子とされた。", difficulty: 2 },
    { type: "mcq", stem: "タイプA行動パターンのうち、心血管疾患の最も強い危険因子とされる成分はどれか。", choices: ["競争心", "時間切迫感", "敵意・怒り（hostility）", "完璧主義"], answer: 2, explain: "後続研究により、タイプA全体よりも敵意・怒りの成分が冠状動脈疾患の予測力をもつことが示された。", difficulty: 3 },
    { type: "mcq", stem: "消化性潰瘍や本態性高血圧のように、心理社会的要因が発症・経過に関与する『身体疾患』を何というか。", choices: ["心身症", "身体表現性障害", "詐病", "適応障害"], answer: 0, explain: "心身症は実体のある身体疾患で、その発症や経過に心理社会的要因が密接に関わる。仮病ではない点に注意。", difficulty: 2 },
    { type: "mcq", stem: "罹患性・重大性・利益・障壁などの信念で予防行動を説明する健康行動理論はどれか。", choices: ["計画的行動理論", "健康信念モデル（HBM）", "トランスセオレティカルモデル", "ゲート・コントロール理論"], answer: 1, explain: "健康信念モデル（HBM）は、罹患性・重大性・利益・障壁・きっかけ（後に自己効力感）の信念で予防行動を説明する。", difficulty: 2 },
    { type: "mcq", stem: "アイゼンの計画的行動理論において、行動意図を形成する3要素に含まれないものはどれか。", choices: ["態度", "主観的規範", "知覚された行動コントロール", "罹患性の認識"], answer: 3, explain: "計画的行動理論の意図は、態度・主観的規範・知覚された行動コントロールから形成される。罹患性は健康信念モデルの要素である。", difficulty: 3 },
    { type: "mcq", stem: "プロチャスカとディクレメンテの変化のステージにおいて、『6か月以内に変える意図がない』段階はどれか。", choices: ["前熟考期", "熟考期", "準備期", "実行期"], answer: 0, explain: "前熟考期（precontemplation）は変える気がない段階。熟考期は迷い、準備期は近く開始、実行期は変化後6か月未満である。", difficulty: 2 },
    { type: "mcq", stem: "変化の両価性（変わりたいが変わりたくない）を本人の中から解消し、チェンジトークを引き出す協働的対話法はどれか。", choices: ["動機づけ面接", "系統的脱感作", "認知再構成", "自由連想法"], answer: 0, explain: "動機づけ面接（MI）はミラーとロルニックが開発。説得ではなく共感的に本人の変化への動機を引き出す。", difficulty: 2 },
    { type: "mcq", stem: "メルザックとウォールが提唱した、脊髄の『門』を上位中枢が開閉して痛みの伝達を調整するという理論はどれか。", choices: ["ゲート・コントロール理論", "汎適応症候群", "二要因説", "緩衝効果説"], answer: 0, explain: "ゲート・コントロール理論は、注意や情動が脊髄の門を開閉し痛みを調整すると説明する。気を紛らわすと痛みが和らぐことを説明できる。", difficulty: 2 },
    { type: "mcq", stem: "予防のうち、がん検診や健康診断のように『早期発見・早期治療』を目的とするものはどれか。", choices: ["一次予防", "二次予防", "三次予防", "四次予防"], answer: 1, explain: "二次予防は早期発見・早期治療（検診など）。一次予防は発症そのものの予防（禁煙・ワクチン）、三次予防は重症化・再発防止である。", difficulty: 2 },
    { type: "mcq", stem: "患者が主体的に治療計画を守る程度を表し、医師の指示への従順を意味する『コンプライアンス』に代わって用いられる語はどれか。", choices: ["アドヒアランス", "コーピング", "デブリーフィング", "ホメオスタシス"], answer: 0, explain: "アドヒアランスは患者の能動的参加を強調する語。慢性疾患ではノンアドヒアランスが多く、良好な医師-患者コミュニケーションが鍵となる。", difficulty: 1 },
    { type: "mcq", stem: "ディーナーが提唱した、人生満足度とポジティブ感情の多さ・ネガティブ感情の少なさからなる概念はどれか。", choices: ["主観的ウェルビーイング", "自己効力感", "ハーディネス", "知覚された行動コントロール"], answer: 0, explain: "主観的ウェルビーイング（subjective well-being）はディーナーの概念。健康心理学はポジティブな健康の増進も目標とする。", difficulty: 2 },
  ],
});
