/* === 楽観性の心理学（特別編） 楽観性バイアスの脳 (opt_neuro) === */
PsychApp.registerModule({
  id: "opt_neuro",
  title: "楽観性バイアスの脳",
  emoji: "🧠",
  category: "optimism",
  tagline: "Sharot ら(2007)の記念碑的fMRI・扁桃体とrACC・将来事象のシミュレーション・神経画像の留意点",
  overview: `<p>人はなぜ、平均より長生きし、離婚や病気を免れると信じてしまうのか。<strong>楽観性バイアス(optimism bias)</strong>——将来のポジティブな出来事の生起確率を過大評価し、ネガティブな出来事の確率を過小評価する体系的な認知傾向——は、長く行動指標で記述されてきたが、その<strong>神経基盤</strong>は2007年まで未踏であった。本モジュールでは、楽観性バイアスを初めて脳活動として捉えた<em>Sharot</em>ら(2007, <em>Nature</em>)の記念碑的fMRI研究を中核に、ポジティブな将来をより鮮明に思い描くときに働く<strong>扁桃体(amygdala)</strong>と<strong>吻側前帯状皮質(rostral anterior cingulate cortex, rACC)</strong>の役割を学ぶ。あわせて、これらの知見が小〜中規模サンプルのfMRIに基づくものであり、<em>決定的な機序ではなく「示唆された(suggested)」もの</em>として読むべき理由も確認する。</p>
  <div class="callout note"><b>このモジュールの位置づけ</b>：本研究は研究史における<strong>神経科学的転回</strong>の起点であり、ここから楽観性が「維持される」仕組みを問う<a href="#/module/opt_updating">信念更新の非対称性</a>の研究へと展開していく。神経科学の確率的・統計的な見方を補強したいときは、特別コース「<a href="bayes/index.html">ベイズの階段</a>」も参照されたい。</div>`,
  lessons: [
    {
      title: "Sharot ら(2007)— 楽観性バイアスの神経メカニズム",
      body: `
        <p>楽観性バイアスは、Weinstein(1980)以来、行動レベルの確率判断として体系的に記述されてきた。しかしそれが<strong>脳のどこで、どのように生み出されるのか</strong>は、長らく空白のままであった。この空白を初めて埋めたのが、<em>Sharot, Riccardi, Raio, & Phelps</em>による2007年の研究である(<em>Nature</em> 450(7166):102–105, "Neural mechanisms mediating optimism bias")。これは<strong>楽観性バイアスの神経基盤を初めて示した記念碑的研究</strong>であり、研究史における神経科学的転回の起点に位置づけられる。</p>
        <h3>課題：将来の出来事を心的に想像する</h3>
        <p>研究の発想は単純かつ巧妙である。被験者に<strong>将来起こりうる出来事を心のなかで思い描いて(imagine)もらい</strong>、そのときの脳活動を<strong>機能的磁気共鳴画像法(functional magnetic resonance imaging, fMRI)</strong>で計測する。出来事には、たとえば「賞を受け取る」といった<em>ポジティブ</em>なものと、「大切な人を失う」といった<em>ネガティブ</em>なものが含まれる。楽観性バイアスが脳に刻まれているなら、ポジティブな未来とネガティブな未来とで、活動するネットワークに違いが現れるはずである。</p>
        <h3>発見：扁桃体とrACCの活動増強</h3>
        <p>結果は明快であった。<strong>ポジティブな将来の出来事を想像するとき</strong>、ネガティブな出来事を想像するときに比べて、二つの領域の活動が<strong>増強(enhanced)</strong>されていた。</p>
        <ul>
          <li><strong>扁桃体(amygdala)</strong>：情動、とりわけ価値や情動的顕著性の処理に深く関わる領域。</li>
          <li><strong>吻側前帯状皮質(rostral anterior cingulate cortex, rACC)</strong>：前帯状皮質のうち前方・腹側に位置し、情動の調整や自己関連的処理に関わる領域。</li>
        </ul>
        <div class="callout key"><b>核心の発見</b>：<em>Sharot</em>ら(2007)は、ポジティブな未来をより鮮明に思い描くときに<strong>扁桃体</strong>と<strong>rACC</strong>の活動が増強されることを示し、楽観性バイアスが情動関連の脳回路に支えられていることを初めて神経画像で示した。</div>
        <h3>抑うつで異常を示す領域との一致</h3>
        <p>この知見が大きな注目を集めたのは、活動した二つの領域が<strong>抑うつ(depression)で機能異常を示すことが知られる領域と一致していた</strong>からである。健常者で楽観的な未来表象を支える回路が、抑うつでは異常を示す——この対応は、「健常な認知の特徴としての楽観性」と「その欠如としての抑うつ」という、後の研究で深められるテーマを早くも予告するものであった。</p>
        <div class="callout example"><b>イメージで掴む</b>：同じ「未来を思い描く」という行為でも、<em>受賞の日</em>を想像するときには扁桃体とrACCがより強く灯り、<em>喪失の日</em>を想像するときにはそれほど灯らない。脳は、明るい未来のほうを情動的により濃く色づけて表象している、というわけである。</div>
      `,
      figure: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="500" height="280" rx="14" fill="#f5f7fd"/>
        <text x="250" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">ポジティブな未来の想像 → 扁桃体・rACC の活動増強</text>
        <defs>
          <marker id="opn_arr" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15c4a8"/></marker>
        </defs>
        <!-- 左：2つの想像 -->
        <rect x="30" y="62" width="150" height="44" rx="9" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="105" y="82" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">ポジティブな未来</text>
        <text x="105" y="98" text-anchor="middle" font-size="10" fill="#5b6478">「受賞する」</text>
        <rect x="30" y="170" width="150" height="44" rx="9" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="105" y="190" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">ネガティブな未来</text>
        <text x="105" y="206" text-anchor="middle" font-size="10" fill="#5b6478">「喪失する」</text>
        <line x1="180" y1="84" x2="250" y2="120" stroke="#15c4a8" stroke-width="2.5" marker-end="url(#opn_arr)"/>
        <line x1="180" y1="192" x2="250" y2="156" stroke="#c9cfe0" stroke-width="2" stroke-dasharray="4 3"/>
        <!-- 右：脳の側面と2部位 -->
        <path d="M270,138 C270,80 340,62 400,72 C455,80 478,118 470,150 C464,176 440,196 400,200 C360,204 320,200 296,188 C282,180 270,164 270,138 Z" fill="#eef1fb" stroke="#5b6478" stroke-width="1.6"/>
        <text x="385" y="56" text-anchor="middle" font-size="10" fill="#5b6478">脳（側面の模式）</text>
        <!-- rACC（前方・腹側） -->
        <circle cx="312" cy="150" r="16" fill="#f0a020" opacity="0.85"/>
        <text x="312" y="153" text-anchor="middle" font-size="9" font-weight="800" fill="#1d2433">rACC</text>
        <!-- 扁桃体（内側・やや下） -->
        <circle cx="360" cy="172" r="16" fill="#e0566b" opacity="0.85"/>
        <text x="360" y="175" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">扁桃体</text>
        <text x="312" y="186" text-anchor="middle" font-size="8.5" fill="#5b6478">吻側前帯状皮質</text>
        <text x="250" y="266" text-anchor="middle" font-size="9.5" fill="#5b6478">ポジティブな未来の想像で活動が増強（↑）。これらは抑うつで異常を示す領域と一致する。</text>
      </svg>`,
      figcaption: "Sharot ら(2007)の模式。ポジティブな将来の出来事を想像するとき、ネガティブな場合に比べて扁桃体とrACC（吻側前帯状皮質）の活動が増強される。これらは抑うつで機能異常を示す領域と一致する。",
      terms: [
        { term: "楽観性バイアス(optimism bias)", def: "ポジティブな未来を過大、ネガティブな未来を過小に見積もる傾向。" },
        { term: "Sharot ら(2007)", def: "楽観性バイアスの神経基盤を初めて示した記念碑的fMRI研究(Nature)。" },
        { term: "fMRI", def: "機能的磁気共鳴画像法。脳活動を血流変化として非侵襲的に計測する手法。" },
        { term: "扁桃体(amygdala)", def: "情動・価値・情動的顕著性の処理に深く関わる脳領域。" },
        { term: "rACC（吻側前帯状皮質）", def: "前帯状皮質の前方・腹側部。情動調整や自己関連処理に関わる。" },
        { term: "将来事象の想像", def: "起こりうる出来事を心的に思い描く行為。本研究の課題の中核。" },
        { term: "抑うつとの領域一致", def: "楽観で働く扁桃体・rACCは抑うつで異常を示す領域と重なる。" },
      ],
    },
    {
      title: "将来のシミュレーションと神経科学的視点の意義・留意点",
      body: `
        <p>Sharot ら(2007)の発見は、「楽観性とは何をしているときの脳の状態か」を具体的に示した点に意義がある。鍵となる行為は<strong>将来の出来事を心的にシミュレートする(mentally simulate)</strong>こと、すなわち頭のなかで未来を思い描くことである。</p>
        <h3>未来表象におけるポジティブ側の優位</h3>
        <p>本研究が示したのは、未来のシミュレーションが価値中立的に進むのではなく、<strong>ポジティブな出来事のほうがより鮮明・詳細に表象される</strong>傾向である。明るい未来は色濃く、近く、生き生きと立ち上がり、暗い未来はそれに比べて淡い。扁桃体とrACCという情動関連回路の活動増強は、この「<strong>明るい未来ほど情動的に強く色づけられる</strong>」という現象の神経的な現れと解釈できる。</p>
        <div class="callout key"><b>扁桃体–rACC回路の役割</b>：この回路は、<strong>情動</strong>と<strong>将来の表象</strong>とを結ぶ橋渡しとして働いていると示唆される。未来を思い描くという認知過程に情動の重みづけが組み込まれることで、ポジティブな未来が優先的に・鮮明に表象されると考えられる。</div>
        <h3>研究史における意義 — 神経科学的転回</h3>
        <p>2007年のこの研究は、楽観性バイアス研究に<strong>神経科学的転回(neuroscientific turn)</strong>をもたらした。それまで行動指標で「ある」と記述されてきた現象を、脳活動として捉える道を開いたのである。そしてこの転回は、次の問い——<em>楽観性は、現実(良い知らせ・悪い知らせ)に直面してもなぜ崩れないのか</em>——へと研究を進めた。この問いに答えるのが、<a href="#/module/opt_updating">信念更新の非対称性(asymmetric belief updating)</a>の研究である。良い知らせは強く取り込み、悪い知らせは弱くしか取り込まない、という更新の偏りが、楽観性を維持する仕組みとして提案されていく。</p>
        <div class="callout warn"><b>神経画像知見の読み方（重要）</b>：扁桃体・rACCの関与に関する知見は、主に<strong>小〜中規模サンプルのfMRI研究(N=14〜30程度)</strong>に基づいている。神経画像研究一般には<strong>検出力(statistical power)</strong>と<strong>再現性(replicability)</strong>の問題があり、ここで得られた回路は<em>決定的な機序として断定すべきものではない</em>。原著のトーンに忠実に、「楽観性バイアスに扁桃体–rACC回路の関与が<strong>示唆された(suggested)</strong>」という慎重な言い方で扱うのが適切である。</div>
        <div class="callout tip"><b>用語の区別に注意</b>：本モジュールの「楽観性バイアス（確率判断の歪み）」は、性格特性としての<strong>気質的楽観主義(dispositional optimism; Scheier & Carver, 1985)</strong>とは概念的に異なる。前者は将来確率の見積もりの偏り、後者は「一般化された結果期待」という安定した個人差である。混同しないこと。</div>
        <h3>まとめ</h3>
        <table>
          <tr><th>論点</th><th>内容</th></tr>
          <tr><td><b>課題</b></td><td>将来の出来事を心的に想像し、fMRIで脳活動を計測</td></tr>
          <tr><td><b>発見</b></td><td>ポジティブな未来の想像で扁桃体・rACCの活動が増強</td></tr>
          <tr><td><b>解釈</b></td><td>情動と将来表象を結ぶ回路が、明るい未来を鮮明に表象</td></tr>
          <tr><td><b>意義</b></td><td>楽観性バイアスの神経基盤を初めて示し、神経科学的転回を起こした</td></tr>
          <tr><td><b>留意点</b></td><td>小〜中規模fMRIに基づき「示唆された(suggested)」と慎重に扱う</td></tr>
        </table>
      `,
      figure: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="500" height="260" rx="14" fill="#f5f7fd"/>
        <text x="250" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">未来表象の非対称：ポジティブ側が鮮明</text>
        <line x1="60" y1="200" x2="440" y2="200" stroke="#1d2433" stroke-width="1.5"/>
        <text x="40" y="120" font-size="11" fill="#5b6478" transform="rotate(-90 40 120)">表象の鮮明さ・詳細さ</text>
        <!-- ポジティブの棒（高い） -->
        <rect x="120" y="70" width="90" height="130" rx="6" fill="#15c4a8" opacity="0.85"/>
        <text x="165" y="62" text-anchor="middle" font-size="11" font-weight="800" fill="#15c4a8">ポジティブな未来</text>
        <text x="165" y="218" text-anchor="middle" font-size="10" fill="#5b6478">鮮明・詳細・近い</text>
        <!-- ネガティブの棒（低い） -->
        <rect x="290" y="148" width="90" height="52" rx="6" fill="#e0566b" opacity="0.75"/>
        <text x="335" y="140" text-anchor="middle" font-size="11" font-weight="800" fill="#e0566b">ネガティブな未来</text>
        <text x="335" y="218" text-anchor="middle" font-size="10" fill="#5b6478">淡い・遠い</text>
        <!-- 注記 -->
        <text x="250" y="246" text-anchor="middle" font-size="9.5" fill="#5b6478">扁桃体–rACC回路が情動と将来表象を結び、明るい未来を優先的に色づける（示唆）</text>
      </svg>`,
      figcaption: "未来のシミュレーションにおける非対称性の模式。ポジティブな未来はネガティブな未来より鮮明・詳細に表象されやすく、その背後に扁桃体–rACC回路の関与が示唆される。",
      terms: [
        { term: "将来のシミュレーション", def: "起こりうる未来を心的に思い描く認知過程。本研究の対象行為。" },
        { term: "未来表象の非対称性", def: "ポジティブな未来がネガティブより鮮明・詳細に表象される傾向。" },
        { term: "扁桃体–rACC回路", def: "情動と将来の表象を結ぶ橋渡しとして働くと示唆される回路。" },
        { term: "神経科学的転回", def: "行動指標で記述された楽観性を脳活動として捉える研究の展開。" },
        { term: "信念更新の非対称性", def: "良い知らせは強く、悪い知らせは弱く取り込む更新の偏り。" },
        { term: "検出力と再現性", def: "小〜中規模fMRIに伴う限界。知見を「示唆」と慎重に扱う理由。" },
        { term: "気質的楽観主義", def: "性格特性としての楽観。確率判断の歪みである楽観性バイアスとは別概念。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "楽観性バイアスの神経基盤を初めて示した記念碑的研究はどれか。", choices: ["Weinstein(1980)の比較リスク研究", "Sharot, Riccardi, Raio, & Phelps(2007, <em>Nature</em>)", "Taylor & Brown(1988)のポジティブ・イリュージョン論文", "Langer(1975)の統制の幻想研究"], answer: 1, explain: "Sharot ら(2007, Nature 450(7166):102–105)が、fMRIを用いて楽観性バイアスの神経基盤を初めて示した記念碑的研究である。Weinstein(1980)やTaylor & Brown(1988)は行動・理論レベルの古典である。", difficulty: 1 },
    { type: "mcq", stem: "Sharot ら(2007)が用いた脳活動計測の手法はどれか。", choices: ["脳波(EEG)", "経頭蓋磁気刺激(TMS)", "機能的磁気共鳴画像法(fMRI)", "ポジトロン断層法(PET)"], answer: 2, explain: "本研究はfMRI(機能的磁気共鳴画像法)を用い、将来の出来事を想像する際の脳活動を計測した。", difficulty: 1 },
    { type: "mcq", stem: "Sharot ら(2007)で、ポジティブな将来の出来事を想像する際に活動の増強が見られた二つの領域はどれか。", choices: ["海馬と小脳", "扁桃体と吻側前帯状皮質(rACC)", "一次視覚野と運動野", "右下前頭回と下頭頂小葉"], answer: 1, explain: "ポジティブな未来の想像時に、扁桃体(amygdala)と吻側前帯状皮質(rostral anterior cingulate cortex, rACC)の活動が増強された。", difficulty: 2 },
    { type: "mcq", stem: "Sharot ら(2007)で活動が増強された扁桃体・rACCについて、特に注目された点はどれか。", choices: ["これらは抑うつで機能異常を示すことが知られる領域と一致していた", "これらは言語処理にのみ関わる領域であった", "これらは視覚情報の入力に専従する領域であった", "これらは運動制御の最終出力を担う領域であった"], answer: 0, explain: "活動した二領域が、抑うつ(depression)で異常を示すことが知られる領域と一致していた点が大きく注目された。健常者の楽観と抑うつの対応を示唆する。", difficulty: 2 },
    { type: "mcq", stem: "本研究で被験者が行った課題の中核はどれか。", choices: ["過去の出来事を正確に再生する", "将来起こりうる出来事を心のなかで想像する", "計算問題を制限時間内に解く", "他者の表情を分類する"], answer: 1, explain: "被験者は将来起こりうるポジティブ／ネガティブな出来事を心的に想像(imagine)し、その際の脳活動が計測された。", difficulty: 1 },
    { type: "mcq", stem: "扁桃体(amygdala)の機能の説明として最も適切なのはどれか。", choices: ["主に音韻処理に関わる", "情動・価値・情動的顕著性の処理に深く関わる", "主に長期記憶の固定化のみを担う", "もっぱら眼球運動の制御に関わる"], answer: 1, explain: "扁桃体は情動、とりわけ価値や情動的顕著性の処理に深く関わる領域であり、本研究では明るい未来表象の情動的色づけに関与すると解釈された。", difficulty: 2 },
    { type: "mcq", stem: "Sharot ら(2007)が示した「未来のシミュレーション」に関する解釈として最も適切なのはどれか。", choices: ["ネガティブな未来のほうが常に鮮明に表象される", "ポジティブな未来のほうがより鮮明・詳細に表象されやすい", "未来表象は情動と完全に独立している", "未来は表象されず過去のみが想起される"], answer: 1, explain: "本研究の知見は、ポジティブな出来事のほうがより鮮明・詳細に表象されやすく、扁桃体–rACC回路がその情動的色づけに関わることを示唆する。", difficulty: 2 },
    { type: "mcq", stem: "扁桃体–rACC回路が果たすと示唆される役割として最も適切なのはどれか。", choices: ["感覚入力をそのまま運動出力へ直結する", "情動と将来の表象とを結ぶ橋渡しをする", "言語の文法処理を専門に担う", "睡眠覚醒リズムのみを制御する"], answer: 1, explain: "この回路は、情動と将来の表象を結ぶ橋渡しとして働き、ポジティブな未来を優先的・鮮明に表象させると示唆される。", difficulty: 2 },
    { type: "mcq", stem: "Sharot ら(2007)が研究史にもたらした位置づけとして最も適切なのはどれか。", choices: ["楽観性バイアスを否定し統計的人工産物だと結論した", "楽観性バイアス研究に神経科学的転回をもたらした起点となった", "気質的楽観主義の性格尺度(LOT)を開発した", "計画錯誤を命名した"], answer: 1, explain: "本研究は楽観性バイアスを脳活動として捉える道を開き、神経科学的転回の起点となった。LOTの開発はScheier & Carver(1985)、計画錯誤の命名はKahneman & Tversky(1979)である。", difficulty: 2 },
    { type: "mcq", stem: "神経科学的転回は、楽観性研究を次のどの問いへと進めたか。", choices: ["楽観性はどの色覚と相関するか", "楽観性は現実に直面してもなぜ崩れないのか（信念更新の非対称性）", "楽観性は身長とどう関係するか", "楽観性は何語の話者で最も強いか"], answer: 1, explain: "2007年の研究は「楽観性が良い知らせ・悪い知らせに直面しても維持される仕組み」を問う信念更新の非対称性(asymmetric belief updating)研究へと展開した。", difficulty: 2 },
    { type: "mcq", stem: "本モジュールの神経画像知見の扱い方として、出典に最も忠実な記述はどれか。", choices: ["大規模サンプルで完全に再現されており決定的な機序である", "主に小〜中規模(N=14〜30程度)のfMRIに基づき『示唆された(suggested)』と慎重に扱うべきである", "サンプルサイズは結論に一切影響しない", "fMRIは検出力・再現性の問題と無縁である"], answer: 1, explain: "神経科学的知見は主に小〜中規模サンプルのfMRI(N=14〜30程度)に基づき、検出力・再現性の問題があるため、決定的な機序ではなく『示唆された(suggested)』というトーンで扱うのが適切である（出典の留意点）。", difficulty: 3 },
    { type: "mcq", stem: "「楽観性バイアス」と「気質的楽観主義(dispositional optimism; Scheier & Carver, 1985)」の関係として正しいのはどれか。", choices: ["両者は完全に同一の概念である", "楽観性バイアスは確率判断の歪み、気質的楽観主義は一般化された結果期待という性格特性で、概念的に区別される", "気質的楽観主義は脳部位の名称である", "楽観性バイアスはfMRIでしか定義できない"], answer: 1, explain: "楽観性バイアスは将来確率の見積もりの歪みであり、気質的楽観主義(Scheier & Carver, 1985)は安定した性格特性である。両者は混同されやすいが概念的に異なる。", difficulty: 3 },
    { type: "mcq", stem: "rACC（吻側前帯状皮質）の説明として最も適切なのはどれか。", choices: ["後頭葉に位置し色知覚を担う", "前帯状皮質の前方・腹側に位置し、情動調整や自己関連処理に関わる", "脊髄に位置し反射を媒介する", "小脳の一部で平衡を担う"], answer: 1, explain: "rACC(rostral anterior cingulate cortex)は前帯状皮質のうち前方・腹側に位置し、情動の調整や自己関連的処理に関わる領域である。", difficulty: 3 },
  ],
});
