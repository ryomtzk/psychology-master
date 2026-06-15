/* === 楽観性の心理学（特別編） 計画錯誤 (opt_planning) === */
PsychApp.registerModule({
  id: "opt_planning",
  title: "計画錯誤",
  emoji: "📅",
  category: "optimism",
  tagline: "Kahneman & Tversky(1979)の命名・内側／外側の視点・Buehler ら(1994)の卒論実証・コストへの拡張・参照クラス予測",
  overview: `<p>「あと一週間あれば終わる」と見積もった作業が、ふたを開ければ三週間かかる——こうした<strong>所要時間の過小評価</strong>は、ほとんど誰もが経験するありふれた誤りである。これを<strong>計画錯誤(planning fallacy)</strong>と呼ぶ。計画錯誤は、将来のポジティブな見通しを過大に、ネガティブな見通しを過小に評価する<strong>楽観性バイアス(optimism bias)</strong>が、日常の「予測」のなかに最も具体的に現れた姿である。</p>
  <p>本モジュールでは、<em>Kahneman</em> と <em>Tversky</em> による計画錯誤の命名と、その核にある<strong>内側の視点／外側の視点</strong>の区別（L1）、そして <em>Buehler</em> らによる古典的実証と、時間からコスト・便益へと広がった定義の拡張、対策としての<strong>参照クラス予測</strong>（L2）を扱う。なぜ私たちは何度も同じ見積もりミスを繰り返すのか、そしてどうすればそれを和らげられるのかを、出典に挙げた実験データに即して読み解く。</p>
  <div class="callout note"><b>確率と更新の数学が欲しいとき</b>：「自分の見積もり」をどれだけ修正すべきかという問題は、ベイズ的な信念更新の考え方と地続きである。条件付き確率や事前分布の数学は、特別コース「<a href="bayes/index.html">ベイズの階段</a>」で中学数学レベルから学べる。</div>`,
  lessons: [
    {
      title: "計画錯誤の命名と二つの視点",
      body: `
        <p><strong>計画錯誤(planning fallacy)</strong>とは、ある課題を<strong>完了するのに必要な時間を、過小評価してしまう傾向</strong>を指す。注意すべきは、これが単なる「うっかり」ではなく<strong>体系的(systematic)</strong>な誤りである点である。人は失敗の経験を重ねてもなお、次の計画でまた楽観的に見積もる。誤りに一定の方向（短く見積もる側）への偏りがあるからこそ、これは<em>バイアス</em>と呼ばれる。</p>
        <h3>命名 — Kahneman & Tversky (1979)</h3>
        <p>この現象を「計画錯誤」と名づけたのは、<em>Kahneman</em> と <em>Tversky</em>(1979)の論文 <em>"Intuitive prediction: biases and corrective procedures"</em>(<em>TIMS Studies in Management Science</em>, 12, 313–327)である。彼らは、人々が直観的に行う予測には系統的なバイアスがあること、そしてそれを<strong>補正する手続き(corrective procedures)</strong>が必要であることを論じた。計画錯誤はその代表例として位置づけられた。</p>
        <div class="callout key"><b>計画錯誤の定義</b>：課題の完了に要する時間を<strong>過小評価</strong>する系統的な傾向。<em>Kahneman</em> & <em>Tversky</em>(1979)が命名した。たとえ過去に同種の課題で予定を超過していても、新しい計画では再び楽観的な見積もりが繰り返される。</div>
        <h3>内側の視点と外側の視点</h3>
        <p><em>Kahneman</em> と <em>Tversky</em>(1979)が計画錯誤の核として区別したのが、予測の二つの取り方、すなわち<strong>内側の視点(inside view)</strong>と<strong>外側の視点(outside view)</strong>である。</p>
        <ul>
          <li><strong>内側の視点(inside view)</strong>：いま手元にある<strong>個別の計画の詳細</strong>に注目して予測する立場。「まず章立てをして、資料を読んで、書いて、推敲して……」と、目の前の課題のシナリオを順に積み上げて所要時間をはじき出す。</li>
          <li><strong>外側の視点(outside view)</strong>：当の課題を<strong>類似事例の集まりの一例</strong>とみなし、それらが実際にどれだけの時間を要したかという<strong>分布</strong>に注目して予測する立場。「同じような卒論は、たいてい何日かかったか」を手がかりにする。</li>
        </ul>
        <p>問題は、人が予測の際に<strong>内側の視点へ偏重する</strong>点にある。目の前の計画はうまく運ぶシナリオとして思い描かれやすく、想定外の遅延・中断・差し戻しといった<strong>邪魔者</strong>は見積もりからこぼれ落ちる。その結果として、所要時間は系統的に短く見積もられることになる。<em>Kahneman</em> と <em>Tversky</em> は、より正確な予測のためには、内側の視点に頼りきらず<strong>外側の視点（類似事例の分布）</strong>を取り入れるべきだと指摘した。これが、後に L2 で扱う対策の出発点となる。</p>
        <div class="callout example"><b>身近な例</b>：引っ越しの荷造りに「半日あれば足りる」と見積もる（内側の視点）。だが過去の引っ越しを思い返せば、毎回まる一日以上かかっていた（外側の視点）。後者のほうが当たりやすいのに、人は目の前の段取りに気を取られて前者で予定を立ててしまう。</div>
        <div class="callout warn"><b>性格特性の楽観主義とは別物</b>：計画錯誤は「将来の課題の見積もり」という<strong>確率・時間判断の歪み</strong>であり、「自分は楽天的な性格だ」といった<strong>気質的楽観主義(dispositional optimism)</strong>（性格特性）とは概念的に区別される。両者は混同されやすいので注意したい。</div>
      `,
      figure: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="500" height="250" rx="14" fill="#f5f7fd"/>
        <text x="250" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">二つの視点と所要時間の予測</text>
        <rect x="30" y="52" width="200" height="150" rx="10" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="130" y="76" text-anchor="middle" font-size="12.5" font-weight="800" fill="#5b6cf0">内側の視点</text>
        <text x="130" y="94" text-anchor="middle" font-size="10" fill="#5b6478">（inside view）</text>
        <text x="130" y="120" text-anchor="middle" font-size="10.5" fill="#1d2433">この計画の詳細・段取り</text>
        <text x="130" y="138" text-anchor="middle" font-size="10.5" fill="#1d2433">に注目してシナリオ化</text>
        <text x="130" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#e0566b">→ 邪魔者を見落とす</text>
        <text x="130" y="190" text-anchor="middle" font-size="11" font-weight="700" fill="#e0566b">→ 時間を過小評価</text>
        <rect x="270" y="52" width="200" height="150" rx="10" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <text x="370" y="76" text-anchor="middle" font-size="12.5" font-weight="800" fill="#15c4a8">外側の視点</text>
        <text x="370" y="94" text-anchor="middle" font-size="10" fill="#5b6478">（outside view）</text>
        <text x="370" y="120" text-anchor="middle" font-size="10.5" fill="#1d2433">類似事例が実際に</text>
        <text x="370" y="138" text-anchor="middle" font-size="10.5" fill="#1d2433">要した時間の分布に注目</text>
        <text x="370" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#15c4a8">→ 現実の遅延を含む</text>
        <text x="370" y="190" text-anchor="middle" font-size="11" font-weight="700" fill="#15c4a8">→ より当たりやすい</text>
        <text x="250" y="232" text-anchor="middle" font-size="10" fill="#5b6478">人は内側の視点へ偏重し、所要時間を系統的に短く見積もる</text>
      </svg>`,
      figcaption: "計画錯誤の核にある二つの視点。内側の視点は目の前の計画の詳細に注目し、想定外の遅延を見落として時間を過小評価する。外側の視点は類似事例の分布に注目し、より当たりやすい予測を与える。",
      terms: [
        { term: "計画錯誤(planning fallacy)", def: "課題の完了に要する時間を体系的に過小評価する傾向。Kahneman & Tversky が命名。" },
        { term: "Kahneman & Tversky(1979)", def: "計画錯誤を命名し、直観的予測の補正手続きを論じた論文。" },
        { term: "内側の視点(inside view)", def: "目の前の計画の詳細に注目して予測する立場。時間の過小評価を生みやすい。" },
        { term: "外側の視点(outside view)", def: "課題を類似事例の一例とみなし、分布に注目して予測する立場。" },
        { term: "体系的バイアス(systematic bias)", def: "一定方向への偏りをもつ誤り。失敗を重ねても繰り返される点が特徴。" },
        { term: "気質的楽観主義(dispositional optimism)", def: "楽天的な性格特性。確率判断の歪みである計画錯誤とは区別される。" },
        { term: "補正手続き(corrective procedures)", def: "直観的予測のバイアスを和らげるための手続き。外側の視点の導入が代表例。" },
      ],
    },
    {
      title: "実証と定義の拡張 — Buehler ら(1994)から参照クラス予測へ",
      body: `
        <p>計画錯誤は理屈として説得力があるだけでなく、実験的にも明快に確かめられている。その代表的研究が <em>Buehler</em>, <em>Griffin</em>, &amp; <em>Ross</em>(1994)である。</p>
        <h3>卒論完成日の予測 — Buehler ら (1994)</h3>
        <p><em>Buehler</em>, <em>Griffin</em>, &amp; <em>Ross</em>(1994)は、論文 <em>"Exploring the 'planning fallacy'"</em>(<em>Journal of Personality and Social Psychology</em>, 67(3), 366–381)で、学生に自分の<strong>卒業論文を完成させる日付</strong>を予測させた。結果は次のとおりであった。</p>
        <table>
          <tr><th>見積もり・実測</th><th>日数</th></tr>
          <tr><td>学生の<b>平均予測</b></td><td>33.9 日</td></tr>
          <tr><td>「<b>最悪の場合</b>」の見積もり</td><td>48.6 日</td></tr>
          <tr><td><b>実際</b>の平均完成時間</td><td>55.5 日</td></tr>
        </table>
        <p>注目すべきは、実際の平均完成時間(<strong>55.5 日</strong>)が、楽観的な平均予測(33.9 日)を約 <strong>64%</strong> 超過しただけでなく、学生が自ら挙げた「<strong>最悪の場合</strong>」の見積もり(48.6 日)すら上回った点である。そして<strong>予測した期限内に完了できたのは、学生のおよそ 30% にすぎなかった</strong>。すなわち、最悪のシナリオを思い描いても、人はなお現実を楽観視していたことになる。</p>
        <div class="callout example"><b>「最悪の場合」でも甘い</b>：直観的には、最悪ケースの見積もり（48.6 日）こそ安全側に振った数字に思える。しかし現実の平均（55.5 日）はそれをも超えた。これは、人が想像する「最悪」が、内側の視点の延長線上にとどまり、本当に起こりうる遅延の幅を捉えきれていないことを示す。</div>
        <h3>定義の拡張 — 時間からコスト・便益へ</h3>
        <p>当初の計画錯誤は<strong>所要時間</strong>の過小評価に焦点を当てていた。これを <em>Lovallo</em> &amp; <em>Kahneman</em>(2003)が拡張し、時間だけでなく<strong>コストの過小評価</strong>と<strong>便益の過大評価</strong>を含む形に定義を広げた。つまり、「思ったより早く終わる」だけでなく「思ったより安く済み、思ったより得をする」という見通しの甘さまでを射程に収めたのである。</p>
        <p>さらに <em>Flyvbjerg</em> &amp; <em>Sunstein</em>(2017)は、この拡張された広義の概念を <strong>"planning fallacy writ large"</strong>（大規模化された計画錯誤）と呼び、当初の時間に限った狭義の計画錯誤と区別することを提案した。大規模な公共事業などで、工期・費用が当初見積もりを大きく超過し、見込まれた便益が過大評価される現象がこれに当たる。</p>
        <table>
          <tr><th>概念</th><th>提案者</th><th>射程</th></tr>
          <tr><td>狭義の計画錯誤</td><td>Kahneman &amp; Tversky(1979)</td><td>所要<b>時間</b>の過小評価</td></tr>
          <tr><td>拡張された定義</td><td>Lovallo &amp; Kahneman(2003)</td><td>時間＋<b>コスト</b>の過小評価／<b>便益</b>の過大評価</td></tr>
          <tr><td>"planning fallacy writ large"</td><td>Flyvbjerg &amp; Sunstein(2017)</td><td>広義概念として上記をまとめて呼ぶ</td></tr>
        </table>
        <h3>対策 — 外側の視点としての参照クラス予測</h3>
        <p>では計画錯誤をどう和らげるか。鍵は L1 で見た<strong>外側の視点(outside view)</strong>を実際の手続きに落とし込むことであり、その具体策が<strong>参照クラス予測(reference class forecasting)</strong>である。これは、当の課題を<strong>類似した過去の事例の集まり（参照クラス）</strong>の一例とみなし、それらが実際にどれだけの時間・費用を要したかという分布をもとに予測する方法である。目の前の計画のシナリオではなく、似た案件の実績データに足場を置くことで、内側の視点が見落とす遅延や超過を自動的に織り込める。</p>
        <div class="callout key"><b>要点</b>：計画錯誤の対策は、内側の視点（目の前の段取り）から<strong>外側の視点（類似事例の分布）</strong>へ足場を移すことである。これを手続き化したのが<strong>参照クラス予測(reference class forecasting)</strong>であり、似た過去事例の実績に基づいて予測する。</div>
        <div class="callout tip"><b>つながり</b>：計画錯誤は、将来を系統的に明るく見積もる<strong>楽観性バイアス(optimism bias)</strong>の一側面である。良い知らせは強く取り込み、悪い知らせ（遅延・超過）は弱く取り込むという信念更新の偏りとも響き合う。なぜ「悪い知らせ」を割り引いてしまうのかという更新の数理は、<a href="bayes/index.html">ベイズの階段</a>の考え方が補強になる。</div>
      `,
      figure: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="500" height="280" rx="14" fill="#f5f7fd"/>
        <text x="250" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">卒論の予測 vs 実際（Buehler ら 1994）</text>
        <line x1="70" y1="225" x2="470" y2="225" stroke="#1d2433" stroke-width="1.5"/>
        <text x="50" y="130" font-size="10.5" fill="#5b6478" transform="rotate(-90 50 130)">日数</text>
        <line x1="70" y1="100" x2="470" y2="100" stroke="#c9cfe0" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="474" y="103" font-size="9" fill="#5b6478">55.5</text>
        <rect x="105" y="143" width="70" height="82" rx="4" fill="#5b6cf0"/>
        <text x="140" y="135" text-anchor="middle" font-size="13" font-weight="800" fill="#5b6cf0">33.9</text>
        <text x="140" y="243" text-anchor="middle" font-size="10.5" fill="#1d2433">平均予測</text>
        <rect x="215" y="107" width="70" height="118" rx="4" fill="#f0a020"/>
        <text x="250" y="99" text-anchor="middle" font-size="13" font-weight="800" fill="#f0a020">48.6</text>
        <text x="250" y="243" text-anchor="middle" font-size="10.5" fill="#1d2433">「最悪の場合」</text>
        <rect x="325" y="100" width="70" height="125" rx="4" fill="#e0566b"/>
        <text x="360" y="92" text-anchor="middle" font-size="13" font-weight="800" fill="#e0566b">55.5</text>
        <text x="360" y="243" text-anchor="middle" font-size="10.5" fill="#1d2433">実際</text>
        <text x="250" y="266" text-anchor="middle" font-size="10" fill="#5b6478">実際は予測を約64%超過し、「最悪の場合」すら上回った（期限内完了は約30%）</text>
      </svg>`,
      figcaption: "Buehler ら(1994)の卒論完成日の予測。学生の平均予測は33.9日、自ら挙げた「最悪の場合」でも48.6日であったが、実際の平均完成時間は55.5日に達し、予測を約64%超過した。期限内に完了したのは約30%のみであった。",
      terms: [
        { term: "Buehler, Griffin, & Ross(1994)", def: "卒論完成日の予測で計画錯誤を実証した代表的研究(JPSP 67(3))。" },
        { term: "予測33.9日／実際55.5日", def: "卒論研究の中心的数値。実際は予測を約64%超過した。" },
        { term: "「最悪の場合」48.6日", def: "学生が挙げた悲観的見積もり。それでも実際の55.5日には届かなかった。" },
        { term: "Lovallo & Kahneman(2003)", def: "計画錯誤を時間だけでなくコスト過小評価・便益過大評価へ拡張した。" },
        { term: "Flyvbjerg & Sunstein(2017)", def: "拡張された広義概念を \"planning fallacy writ large\" と呼んだ。" },
        { term: "参照クラス予測(reference class forecasting)", def: "類似事例の分布に基づいて予測する、外側の視点を手続き化した対策。" },
        { term: "便益の過大評価", def: "計画から得られる利益を高く見積もる傾向。拡張された定義に含まれる。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "「計画錯誤(planning fallacy)」という概念を命名したのは誰か。", choices: ["Buehler, Griffin, & Ross(1994)", "Kahneman & Tversky(1979)", "Lovallo & Kahneman(2003)", "Flyvbjerg & Sunstein(2017)"], answer: 1, explain: "計画錯誤は Kahneman & Tversky(1979) の論文 \"Intuitive prediction: biases and corrective procedures\" で命名された。Buehler らは実証、Lovallo らは定義の拡張を担った。", difficulty: 1 },
    { type: "mcq", stem: "計画錯誤の定義として最も適切なものはどれか。", choices: ["課題の完了に要する時間を過大評価する傾向", "課題の完了に要する時間を体系的に過小評価する傾向", "他者の能力を過大評価する傾向", "過去の成功を過小評価する傾向"], answer: 1, explain: "計画錯誤とは、課題を完了するのに必要な時間を体系的に過小評価する傾向である。失敗を重ねても繰り返される点で、単なるうっかりではなくバイアスと呼ばれる。", difficulty: 1 },
    { type: "mcq", stem: "「内側の視点(inside view)」の説明として正しいものはどれか。", choices: ["類似した過去事例が要した時間の分布に注目する", "いま手元にある個別の計画の詳細・段取りに注目する", "他者の意見を統計的に集約する", "最悪の場合だけを想定する"], answer: 1, explain: "内側の視点は、目の前の計画の詳細やシナリオに注目して予測する立場である。想定外の遅延を見落としやすく、時間の過小評価を生む。類似事例の分布に注目するのは外側の視点である。", difficulty: 1 },
    { type: "mcq", stem: "Kahneman & Tversky(1979)によれば、人が所要時間を過小評価しやすいのはなぜか。", choices: ["外側の視点に偏重するから", "内側の視点に偏重するから", "類似事例を多く参照しすぎるから", "悲観的な性格だから"], answer: 1, explain: "予測の際に内側の視点（個別の計画の詳細）へ偏重するため、想定外の遅延や中断がこぼれ落ち、所要時間が系統的に短く見積もられる。対策は外側の視点を取り入れることである。", difficulty: 2 },
    { type: "mcq", stem: "Buehler, Griffin, & Ross(1994)の卒論研究で、学生の<b>平均予測</b>と<b>実際の平均完成時間</b>の組み合わせとして正しいのはどれか。", choices: ["予測33.9日／実際48.6日", "予測48.6日／実際55.5日", "予測33.9日／実際55.5日", "予測55.5日／実際33.9日"], answer: 2, explain: "平均予測は33.9日、実際の平均完成時間は55.5日であった。実際は予測を約64%超過した。48.6日は学生が挙げた「最悪の場合」の見積もりである。", difficulty: 2 },
    { type: "mcq", stem: "Buehler ら(1994)の研究で、学生が挙げた「最悪の場合」の見積もり(48.6日)について正しい記述はどれか。", choices: ["実際の完成時間(55.5日)より長かった", "実際の完成時間(55.5日)にも届かず、現実はそれを上回った", "平均予測(33.9日)より短かった", "全員がこの期限内に完了した"], answer: 1, explain: "「最悪の場合」の見積もり(48.6日)ですら、実際の平均完成時間(55.5日)には届かなかった。人が想像する「最悪」が、本当に起こりうる遅延の幅を捉えきれていないことを示す。", difficulty: 2 },
    { type: "mcq", stem: "Buehler ら(1994)で、自分が予測した期限内に卒論を完了できた学生はおよそ何割か。", choices: ["約30%", "約55%", "約64%", "約80%"], answer: 0, explain: "予測期限内に完了したのは学生の約30%のみであった。なお約64%は、実際の完成時間が平均予測を超過した割合である（数値の混同に注意）。", difficulty: 2 },
    { type: "mcq", stem: "Lovallo & Kahneman(2003)による計画錯誤の定義の拡張に<b>含まれない</b>ものはどれか。", choices: ["所要時間の過小評価", "コストの過小評価", "便益の過大評価", "他者のコストの過大評価"], answer: 3, explain: "Lovallo & Kahneman(2003)は、計画錯誤を時間の過小評価に加え、コストの過小評価と便益の過大評価を含む形に拡張した。「他者のコストの過大評価」はこの拡張に含まれない。", difficulty: 2 },
    { type: "mcq", stem: "拡張された広義の計画錯誤を \"planning fallacy writ large\" と呼んだのは誰か。", choices: ["Kahneman & Tversky(1979)", "Buehler, Griffin, & Ross(1994)", "Flyvbjerg & Sunstein(2017)", "Scheier & Carver(1985)"], answer: 2, explain: "Flyvbjerg & Sunstein(2017)が、Lovallo & Kahneman(2003)による拡張概念を \"planning fallacy writ large\"（大規模化された計画錯誤）と呼び、狭義の計画錯誤と区別することを提案した。", difficulty: 2 },
    { type: "mcq", stem: "計画錯誤の対策として挙げられる「参照クラス予測(reference class forecasting)」の本質はどれか。", choices: ["目の前の計画の段取りをより細かく分解する", "類似した過去事例の分布（実績）に基づいて予測する", "予測を立てずに作業を始める", "最悪の場合の見積もりだけを採用する"], answer: 1, explain: "参照クラス予測は、当の課題を類似事例の集まりの一例とみなし、それらが実際に要した時間・費用の分布に基づいて予測する。外側の視点を手続き化したものである。計画を細かく分解するのは内側の視点の延長にすぎない。", difficulty: 2 },
    { type: "mcq", stem: "計画錯誤と「気質的楽観主義(dispositional optimism)」の関係について、最も適切な記述はどれか。", choices: ["両者は同じ概念であり区別する必要はない", "計画錯誤は確率・時間判断の歪みであり、性格特性である気質的楽観主義とは概念的に区別される", "気質的楽観主義は計画錯誤の一種である", "計画錯誤は性格特性として測定される"], answer: 1, explain: "計画錯誤は将来の課題に関する時間・確率判断の歪みであるのに対し、気質的楽観主義(Scheier & Carver, 1985)は「楽天的な性格」という特性である。両者は混同されやすいが概念的に区別される。", difficulty: 3 },
    { type: "mcq", stem: "計画錯誤が単なる「うっかりミス」ではなく「バイアス」と呼ばれる理由として最も適切なものはどれか。", choices: ["誤りがまったくランダムに生じるから", "誤りが特定の方向（時間を短く見積もる側）へ系統的に偏っており、失敗を重ねても繰り返されるから", "一部の人にしか生じないから", "予測が常に正確だから"], answer: 1, explain: "計画錯誤は、誤りが「短く見積もる」という一定方向へ系統的に偏っており、過去の超過経験があってもなお繰り返される。この体系的な偏りゆえにバイアスと呼ばれる。", difficulty: 3 },
  ],
});
