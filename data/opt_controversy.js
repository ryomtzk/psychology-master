/* === 楽観性の心理学（特別編） 統計的人工産物説と論争 (opt_controversy) === */
PsychApp.registerModule({
  id: "opt_controversy",
  title: "統計的人工産物説と論争",
  emoji: "⚖️",
  category: "optimism",
  tagline: "Harris & Hahn(2011)の3メカニズム・直接法/間接法・Shah(2016)の批判・Garrett & Sharotの反論・両論併記の作法",
  overview: `<p>楽観性バイアスは、Weinstein(1980)以来「ほとんどの人が示す頑健な現象」として教科書に書かれてきた。しかし2011年以降、その<strong>存在自体</strong>を方法論の側から問い直す論争が続いている。本モジュールは、楽観性バイアスを「測定方法の<strong>統計的人工産物(statistical artifact)</strong>かもしれない」とみる批判派（<em>Harris &amp; Hahn</em> ら）と、現象の実在を擁護する陣営（<em>Garrett &amp; Sharot</em> ら）の主張を、<strong>どちらかを断定的に正しいとせず両論併記で</strong>整理する。研究者として序論や方法を書くときに、この論争をどう誠実に扱うかまでを扱う中立厳守のモジュールである。</p>
  <div class="callout warn"><b>中立厳守</b>：この分野は決着していない。本モジュールはどちらの陣営の結論も「正しい」とは書かない。出典（楽観性バイアスの研究史）に書かれた両論を、そのまま並べて提示する。あなた自身が研究で立場を選ぶための材料を渡すのが目的である。</div>
  <p>現象そのものの定義や歴史は<a href="#/module/opt_intro">楽観性バイアスとは何か</a>を、信念更新の非対称性という神経メカニズムは<a href="#/module/opt_updating">良い知らせ・悪い知らせの非対称な更新</a>を参照してほしい。確率・ベイズ的エージェントという概念の数学的土台は<a href="bayes/index.html">ベイズの階段</a>で補強できる。</p>`,
  lessons: [
    {
      title: "統計的人工産物説 — 合理的でも「楽観的」に見える",
      body: `
        <p>楽観性バイアスの古典的な測り方は<strong>比較法(comparison method)</strong>である。すなわち「あなたが将来この出来事を経験する確率は、平均的な同年代の他者と比べて高いか低いか」を尋ね、自分のリスクを他者より低く見積もる傾向を<strong>非現実的楽観主義(unrealistic optimism)</strong>とみなす（<em>Weinstein, 1980</em>）。集団の全員が「自分は平均より下」と答えれば、それは論理的に不可能だから系統的な誤り＝バイアスだ、という論法である。</p>
        <h3>Harris &amp; Hahn(2011) の警告</h3>
        <p>ところが <em>Harris &amp; Hahn</em>（2011, <em>Psychological Review</em> 118(1):135–154, "Unrealistic optimism about future life events: a cautionary note"）は、シミュレーションによって衝撃的なことを示した。<strong>完全に合理的で、まったく楽観的でないエージェント</strong>に比較法の課題を解かせても、集計すると「楽観的に見える」データパターンが生まれうるのである。</p>
        <div class="callout key"><b>核心</b>：比較法で「楽観的」というデータが出たからといって、人が本当に楽観的だとは限らない。<strong>非楽観的な合理的エージェントでも同じパターンを生む</strong>。したがって観測されたバイアスは、心理ではなく<strong>測定手続きと統計の副産物（人工産物）</strong>でありうる。</div>
        <h3>3つの統計的メカニズム</h3>
        <p>Harris &amp; Hahn が指摘した、合理的エージェントから見かけ上の楽観を生む統計的メカニズムは3つである。</p>
        <table>
          <tr><th>メカニズム</th><th>内容</th></tr>
          <tr><td><b>スケール減衰(scale attenuation)</b></td><td>回答尺度に上限・下限があるため、回答が端で頭打ちになり、平均が中央寄りにずれて見かけの非対称が生じる。</td></tr>
          <tr><td><b>少数派の過小標本化(minority undersampling)</b></td><td>実際にその出来事を経験する人は少数派であり、標本に十分含まれにくい。多数派の「自分は経験しない」という（多くの場合正しい）判断が集計され、楽観的に見える。</td></tr>
          <tr><td><b>ベースレート回帰(base-rate regression)</b></td><td>出来事の真の生起率（ベースレート）が極端なとき、合理的な推定でも平均へ回帰し、自他比較が一方向に偏って見える。</td></tr>
        </table>
        <p>これら3つはいずれも、人の心が楽観的かどうかと無関係に、<strong>課題の構造と確率の性質だけ</strong>から生じうる。Harris &amp; Hahn の結論は強い断定ではなく、慎重な保留であった。すなわち「<strong>もしバイアスが存在するとしても、その大きさ・メカニズム・調整要因について、従来想定されていたよりはるかに分かっていない</strong>」というのが彼らの主張である。</p>
        <div class="callout warn"><b>誤読に注意</b>：Harris &amp; Hahn は「楽観性バイアスは存在しない」と断言したのではない。「比較法のデータだけでは存在を証明できない」「人工産物を排除する設計が必要だ」と述べたのである。両者を混同しないことが、この論争を公平に読む第一歩である。</div>
        <h3>なぜ測定方法がそれほど効くのか</h3>
        <p>比較楽観主義の操作化には2つの方式があり、これが論争の核心と結びついている。詳細は次のレッスンと併せて押さえてほしい。要点は、<strong>同じ「楽観性」を測ろうとしても、手続き次第で結論が変わりうる</strong>という事実である。だからこそ Harris &amp; Hahn は「測定の妥当性をまず疑え」と警告した。</p>
      `,
      figure: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="500" height="270" rx="14" fill="#f5f7fd"/>
        <text x="250" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">同じデータが「楽観的」に見えうる</text>
        <rect x="40" y="52" width="160" height="40" rx="8" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="120" y="70" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">合理的・非楽観的</text>
        <text x="120" y="85" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">なエージェント</text>
        <defs>
          <marker id="oc_a" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6478"/></marker>
        </defs>
        <line x1="120" y1="92" x2="120" y2="118" stroke="#5b6478" stroke-width="2" marker-end="url(#oc_a)"/>
        <rect x="40" y="120" width="160" height="34" rx="7" fill="#fff" stroke="#5b6478" stroke-width="1.5"/>
        <text x="120" y="142" text-anchor="middle" font-size="11" fill="#1d2433">比較法の課題に回答</text>
        <text x="120" y="178" text-anchor="middle" font-size="10.5" fill="#5b6478" font-weight="700">3つの統計効果が作用</text>
        <text x="120" y="196" text-anchor="middle" font-size="9.5" fill="#5b6478">尺度減衰 / 過小標本化 / 回帰</text>
        <line x1="200" y1="137" x2="260" y2="137" stroke="#5b6478" stroke-width="2" marker-end="url(#oc_a)"/>
        <rect x="300" y="100" width="160" height="74" rx="8" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="380" y="128" text-anchor="middle" font-size="12" font-weight="800" fill="#e0566b">集計すると</text>
        <text x="380" y="148" text-anchor="middle" font-size="12" font-weight="800" fill="#e0566b">「楽観的」</text>
        <text x="380" y="165" text-anchor="middle" font-size="10" fill="#5b6478">に見えるデータ</text>
        <text x="250" y="232" text-anchor="middle" font-size="10.5" fill="#1d2433" font-weight="700">心が楽観的でなくても、測定手続きが楽観バイアスを「作る」ことがある</text>
        <text x="250" y="252" text-anchor="middle" font-size="9.5" fill="#5b6478">＝統計的人工産物（statistical artifact）の可能性（Harris &amp; Hahn, 2011）</text>
      </svg>`,
      figcaption: "Harris & Hahn(2011) は、合理的で非楽観的なエージェントでも、比較法の課題ではスケール減衰・少数派の過小標本化・ベースレート回帰という3つの統計効果により「楽観的」に見えるデータが生じうることをシミュレーションで示した。",
      terms: [
        { term: "統計的人工産物(statistical artifact)", def: "心理ではなく測定手続きと統計の副産物として生じる見かけの効果。" },
        { term: "比較法(comparison method)", def: "自他のリスクを比べて楽観性を測る古典的手法。Harris&Hahn批判の標的。" },
        { term: "非現実的楽観主義(unrealistic optimism)", def: "自分のリスクを平均的他者より低く見積もる傾向（Weinstein 1980）。" },
        { term: "スケール減衰(scale attenuation)", def: "回答尺度の上下限で頭打ちが起き、見かけの非対称が生じる効果。" },
        { term: "少数派の過小標本化(minority undersampling)", def: "出来事を経験する少数派が標本に乏しく、多数派判断が楽観に見える効果。" },
        { term: "ベースレート回帰(base-rate regression)", def: "真の生起率が極端なとき合理的推定が平均へ回帰し偏って見える効果。" },
      ],
    },
    {
      title: "更新パラダイムへの批判と反論の応酬",
      body: `
        <p>論争の第二の舞台は、楽観性の<strong>神経メカニズム研究</strong>、すなわち<a href="#/module/opt_updating">信念更新の非対称性(asymmetric belief updating)</a>のパラダイムである。Sharot らは「人は良い知らせには信念を大きく更新するが、悪い知らせには更新が弱い」と主張してきた。この主張も、方法論的に激しく問われている。</p>
        <h3>直接法と間接法 — 測り方が結論を変える</h3>
        <p>比較楽観主義の操作化には2方式がある（<em>Weinstein, 1980</em>; <em>Harris, Middleton, &amp; Joiner, 2000</em>）。</p>
        <table>
          <tr><th>方式</th><th>やり方</th><th>影響を受けやすい要因</th></tr>
          <tr><td><b>直接法(direct method)</b></td><td>自分と他者を<strong>直接</strong>比較させ「平均より上か下か」を一度に答えさせる。</td><td>出来事の<strong>頻度</strong>の影響を受けやすい。</td></tr>
          <tr><td><b>間接法(indirect method)</b></td><td>自分の確率と他者の確率を<strong>別々に</strong>推定させ、後から差を算出する。</td><td>出来事の<strong>深刻度</strong>の影響を受けやすい。</td></tr>
        </table>
        <p>同じ楽観性を測るはずの2手法が、出来事の頻度・深刻度によって異なる結果を生む。この食い違いこそが、Harris &amp; Hahn の人工産物批判の核心であった。どちらの手法を採るかで結論が変わるなら、観測された「楽観性」が心理なのか手続きなのか、データだけからは切り分けられない。</p>
        <h3>Shah ら(2016) の悲観的レビュー</h3>
        <p><em>Simmons &amp; Massey</em>（2012, <em>JEP: General</em>, "Is optimism real?"）が楽観性の実在を確認した一方で、<em>Shah, Harris, Bird, Catmur, &amp; Hahn</em>（2016, <em>Cognitive Psychology</em> 90:71–127, "A pessimistic view of optimistic belief updating"）は、Sharot らの信念更新パラダイムを<strong>5つの実験</strong>で再検討した。</p>
        <div class="callout warn"><b>Shah ら(2016)の主張</b>：5実験で<strong>楽観的更新の証拠が見られなかった</strong>。スポーツファンや喫煙者といった特定集団を除けば、一般的な楽観バイアスは存在しない、というのが彼らの結論である。</div>
        <p>同じ批判系列として、<em>Harris, de Molière, Soh, &amp; Hahn</em>（2017, <em>PLOS ONE</em>）は統計的交絡を統制した5研究を行い、比較法による先行結果に楽観的解釈を支持する証拠はないと報告した。</p>
        <h3>Garrett &amp; Sharot らの反論</h3>
        <p>これに対し <em>Garrett &amp; Sharot</em>（<em>Consciousness and Cognition</em>, "Optimistic update bias holds firm: Three tests of robustness following Shah et al."）は再反論した。</p>
        <div class="callout key"><b>Garrett &amp; Sharotの主張</b>：<strong>ベースレートを考慮しても楽観的更新は観察される</strong>。人々は<strong>ベイズ的エージェントよりも、悪い知らせに対して更新が小さい</strong>。すなわち合理的な学習者と比べてなお非対称が残る、というのである。</div>
        <p>さらに <em>Kuzmanovic &amp; Rigoux</em>（2017）も「楽観的更新はベイズ学習から逸脱する」として実在性を支持した。ただし重要な調整効果として、楽観的更新が顕著なのは<strong>気質的楽観主義(trait optimism)の高い個人でのみ</strong>とする報告もある（<em>Kuzmanovic et al., 2015</em>）。一方、批判側からは <em>Harris, Shah, Catmur, Bird, &amp; Hahn</em>（2013）が自閉スペクトラム症者を用いた研究で「<strong>価数非依存的(valence-independent)</strong>」な人工産物の痕跡を示し、<em>Shepperd, Klein, Waters, &amp; Weinstein</em>（2013, <em>Perspectives on Psychological Science</em>, "Taking stock of unrealistic optimism"）の擁護的レビューに対して <em>Hahn &amp; Harris</em>（2014）が再反論するなど、応酬が続いている。</p>
        <div class="callout note">価数(valence)依存か非依存かが一つの争点である。Sharot 陣営は「良い知らせ／悪い知らせという価数で更新が変わる（価数依存）」とみる。批判側は「価数と無関係な統計的痕跡がある（価数非依存）」と指摘する。両者は同じデータに別の説明を与えている。</div>
      `,
      figure: `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="290" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">批判と反論の応酬（更新パラダイム）</text>
        <rect x="30" y="50" width="210" height="92" rx="9" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="135" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="#5b6cf0">批判派</text>
        <text x="135" y="92" text-anchor="middle" font-size="10.5" fill="#1d2433">Shah ら(2016): 5実験で</text>
        <text x="135" y="107" text-anchor="middle" font-size="10.5" fill="#1d2433">楽観的更新の証拠なし</text>
        <text x="135" y="125" text-anchor="middle" font-size="10.5" fill="#1d2433">Harris ら(2017): 交絡統制で</text>
        <text x="135" y="138" text-anchor="middle" font-size="10.5" fill="#1d2433">楽観的解釈の支持なし</text>
        <rect x="280" y="50" width="210" height="92" rx="9" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="385" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="#e0566b">擁護派</text>
        <text x="385" y="92" text-anchor="middle" font-size="10.5" fill="#1d2433">Garrett &amp; Sharot: 更新は</text>
        <text x="385" y="107" text-anchor="middle" font-size="10.5" fill="#1d2433">頑健・ベイズより悪報を軽視</text>
        <text x="385" y="125" text-anchor="middle" font-size="10.5" fill="#1d2433">Kuzmanovic ら: ベイズから</text>
        <text x="385" y="138" text-anchor="middle" font-size="10.5" fill="#1d2433">逸脱（trait楽観で顕著）</text>
        <defs>
          <marker id="oc2_a" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f0a020"/></marker>
        </defs>
        <line x1="245" y1="86" x2="275" y2="86" stroke="#f0a020" stroke-width="2.5" marker-end="url(#oc2_a)"/>
        <line x1="275" y1="116" x2="245" y2="116" stroke="#f0a020" stroke-width="2.5" marker-end="url(#oc2_a)"/>
        <rect x="120" y="178" width="280" height="56" rx="9" fill="#fff" stroke="#5b6478" stroke-width="1.5"/>
        <text x="260" y="200" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2433">争点：価数(valence)依存 か 非依存 か</text>
        <text x="260" y="220" text-anchor="middle" font-size="10" fill="#5b6478">同じデータに、心理的説明と統計的説明が並立</text>
        <text x="260" y="262" text-anchor="middle" font-size="10" fill="#5b6478" font-weight="700">未決着：どちらの結論も断定されていない</text>
      </svg>`,
      figcaption: "更新パラダイムでは、Shah ら(2016)・Harris ら(2017)が楽観的更新の証拠の乏しさを報告し、Garrett & Sharot・Kuzmanovic らが頑健性を主張して反論する応酬が続く。価数依存か非依存かが争点であり、決着していない。",
      terms: [
        { term: "直接法(direct method)", def: "自他を直接比較させる方式。出来事の頻度の影響を受けやすい。" },
        { term: "間接法(indirect method)", def: "自他を別々に推定し差を算出する方式。深刻度の影響を受けやすい。" },
        { term: "Shah ら(2016)", def: "5実験で楽観的更新の証拠なしと報告した批判的レビュー研究。" },
        { term: "Garrett & Sharotの反論", def: "ベースレート考慮でも更新は頑健、人はベイズより悪報を軽視すると主張。" },
        { term: "気質的楽観主義(trait optimism)", def: "性格特性としての楽観。更新バイアスがこの高群で顕著という報告もある。" },
        { term: "価数非依存(valence-independent)", def: "良悪と無関係に生じる統計的痕跡。批判側が指摘する人工産物の特徴。" },
      ],
    },
    {
      title: "両論併記の作法 — 研究者としてどう書くか",
      body: `
        <p>では、研究者として論文の序論や方法をどう書けばよいのか。現状を一文でまとめれば、<strong>「現象は（教科書的には）確立されているが、その測定方法には未解決の方法論的論争がある」</strong>という二重性をそのまま提示することが求められる。</p>
        <div class="callout key"><b>2020年代の査読基準</b>：序論で楽観性バイアスを扱うなら、<strong>確立された知見と方法論的論争の両面を併記する</strong>ことが強く期待される。Harris &amp; Hahn(2011) の statistical artifact 説と、Garrett &amp; Sharot(2016/2017) の反論を、どちらも一方的に退けずに並べるのが誠実な書き方である。</div>
        <h3>立場を決める — 2つの書き方</h3>
        <p>あなたの研究が楽観性バイアスをどう位置づけるかで、方法セクションで示すべきことが変わる。出典は次の閾値を示している。</p>
        <table>
          <tr><th>あなたの立場</th><th>方法セクションで明示すべきこと</th></tr>
          <tr><td><b>現象を頑健な前提とする</b>（楽観性バイアスを所与として議論を組む）</td><td>Harris &amp; Hahn 系の批判への応答。すなわち<strong>直接法／間接法のどちらをなぜ採るか</strong>、<strong>ベースレートをどう統制するか</strong>を明示する。</td></tr>
          <tr><td><b>現象の存在を検証対象とする</b>（楽観性が実在するか自体を問う）</td><td>統計的人工産物を排除した設計を採用する。<strong>Harris ら(2017) や Shah ら(2016) のような統制条件</strong>を組み込む。</td></tr>
        </table>
        <h3>やってはいけない書き方</h3>
        <ul>
          <li><strong>無批判な断定</strong>：「楽観性バイアスは普遍的に存在する」と論争に触れずに書く。査読で方法論的素朴さを指摘されうる。</li>
          <li><strong>逆の断定</strong>：「楽観性バイアスは人工産物にすぎず存在しない」と批判側に寄せて断定する。Harris &amp; Hahn 自身が断定を避けていることに反する。</li>
          <li><strong>抑うつとの関係の安易な接続</strong>：「抑うつ者では楽観バイアスが欠如する」を無批判に書く。抑うつリアリズム自体の再現性も問われている（<a href="#/module/opt_depression">楽観性と抑うつ</a>参照）。</li>
        </ul>
        <div class="callout tip"><b>誠実な一段落のひな型</b>：「楽観性バイアスはWeinstein(1980)以来広く報告されてきた（…）。一方、Harris &amp; Hahn(2011)は比較法が合理的エージェントからも楽観的データを生みうると指摘し、現象の存在自体が論争中である（Shah et al., 2016; Garrett &amp; Sharot, 2016/2017）。本研究では〔立場〕の観点から、〔統制／手法選択〕を採る。」——確立・論争・自分の立場の3点を順に書くと、両論併記が自然に収まる。</div>
        <h3>なぜ中立が重要なのか</h3>
        <p>この論争は、データの解釈をめぐる科学の健全な過程である。批判側は「測定の妥当性をまず固めよ」と求め、擁護側は「統制してもなお効果は残る」と応える。<strong>どちらの陣営も相手のデータを否定しているのではなく、同じデータに異なる説明を与えている</strong>のだと理解することが肝心である。研究者の役割は、勝者を宣言することではなく、<strong>自分の設計がどちらの批判に耐えるかを明示する</strong>ことにある。</p>
        <div class="callout note"><b>関連</b>：信念更新の非対称性そのものは<a href="#/module/opt_updating">良い知らせ・悪い知らせの非対称な更新</a>、ベイズ的エージェントという基準の数学は<a href="bayes/index.html">ベイズの階段</a>で学べる。論争の全体像は本モジュールの前2レッスンに戻って確認してほしい。</div>
      `,
      figure: `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="250" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">立場で変わる「方法に書くこと」</text>
        <rect x="180" y="46" width="160" height="40" rx="8" fill="#fdeccf" stroke="#f0a020" stroke-width="2"/>
        <text x="260" y="64" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">楽観性バイアスを</text>
        <text x="260" y="79" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d2433">どう位置づけるか？</text>
        <defs>
          <marker id="oc3_a" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6478"/></marker>
        </defs>
        <line x1="220" y1="86" x2="140" y2="118" stroke="#5b6478" stroke-width="2" marker-end="url(#oc3_a)"/>
        <line x1="300" y1="86" x2="380" y2="118" stroke="#5b6478" stroke-width="2" marker-end="url(#oc3_a)"/>
        <rect x="20" y="122" width="220" height="96" rx="9" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="130" y="144" text-anchor="middle" font-size="11" font-weight="800" fill="#5b6cf0">前提とする</text>
        <text x="130" y="166" text-anchor="middle" font-size="10" fill="#1d2433">→ 直接法/間接法の選択理由</text>
        <text x="130" y="184" text-anchor="middle" font-size="10" fill="#1d2433">→ ベースレートの統制方法</text>
        <text x="130" y="204" text-anchor="middle" font-size="9.5" fill="#5b6478">批判への応答を明示</text>
        <rect x="280" y="122" width="220" height="96" rx="9" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <text x="390" y="144" text-anchor="middle" font-size="11" font-weight="800" fill="#15c4a8">検証対象とする</text>
        <text x="390" y="166" text-anchor="middle" font-size="10" fill="#1d2433">→ 人工産物を排除する設計</text>
        <text x="390" y="184" text-anchor="middle" font-size="10" fill="#1d2433">→ 統制条件（Shah/Harris流）</text>
        <text x="390" y="204" text-anchor="middle" font-size="9.5" fill="#5b6478">存在を検証可能にする</text>
      </svg>`,
      figcaption: "研究者の立場で方法に書くべきことが変わる。現象を前提とするなら批判への応答（手法選択・ベースレート統制）を、存在を検証対象とするなら人工産物を排除する統制条件を明示する。どちらの場合も両論併記が前提となる。",
      terms: [
        { term: "両論併記の作法", def: "確立された知見と方法論的論争の両面を序論で併記する書き方。" },
        { term: "現象を頑健な前提とする立場", def: "楽観性を所与とする研究。批判への応答を方法に明示すべき立場。" },
        { term: "現象の存在を検証する立場", def: "楽観性が実在するか自体を問う研究。人工産物排除の設計を要する。" },
        { term: "ベースレートの統制", def: "真の生起率を考慮して比較し、見かけの偏りを取り除く手続き。" },
        { term: "統制条件", def: "人工産物を排除するために設ける比較条件（Shah/Harris流の設計）。" },
        { term: "査読基準(2020年代)", def: "確立知見と論争の両面併記を強く期待する近年の査読の標準。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "Harris & Hahn(2011) が比較法による非現実的楽観主義研究について主張したこととして最も適切なのはどれか。", choices: ["楽観性バイアスは存在しないと断定した", "合理的で非楽観的なエージェントでも『楽観的』に見えるデータが生じうると示した", "比較法は最も妥当な測定法だと結論した", "楽観性バイアスは抑うつ者でのみ生じると示した"], answer: 1, explain: "Harris & Hahn(2011) はシミュレーションにより、完全に合理的で非楽観的なエージェントでも比較法では楽観的に見えるパターンが生じうることを示した。彼らは存在を断定的に否定したのではなく、測定方法の妥当性に警告を発した。", difficulty: 2 },
    { type: "mcq", stem: "Harris & Hahn(2011) が指摘した、見かけ上の楽観を生む3つの統計的メカニズムに<strong>含まれない</strong>ものはどれか。", choices: ["スケール減衰(scale attenuation)", "少数派の過小標本化(minority undersampling)", "ベースレート回帰(base-rate regression)", "信念更新の非対称性(asymmetric updating)"], answer: 3, explain: "3メカニズムはスケール減衰・少数派の過小標本化・ベースレート回帰である。信念更新の非対称性はSharotらが提唱した神経メカニズムの概念であり、人工産物説の3メカニズムではない。", difficulty: 2 },
    { type: "mcq", stem: "比較楽観主義の操作化における『直接法(direct method)』の説明として正しいのはどれか。", choices: ["自分と他者の確率を別々に推定し後から差を算出する", "自分と他者を直接比較させ『平均より上か下か』を一度に答えさせる", "ベースレートのみを推定させる", "抑うつ尺度で楽観性を測る"], answer: 1, explain: "直接法は自他を直接比較させる方式で、出来事の頻度の影響を受けやすい。自他を別々に推定して差をとるのは間接法であり、こちらは深刻度の影響を受けやすい。", difficulty: 2 },
    { type: "mcq", stem: "直接法と間接法は、出来事のどの性質によって異なる結果を生みやすいとされるか（出典に従って答えよ）。", choices: ["直接法は深刻度、間接法は頻度の影響を受けやすい", "直接法は頻度、間接法は深刻度の影響を受けやすい", "両手法とも頻度のみの影響を受ける", "両手法とも結果は完全に一致する"], answer: 1, explain: "出典によれば、直接法は出来事の頻度の影響を、間接法は深刻度の影響を受けやすい。この食い違いがHarris & Hahnの人工産物批判の核心となった。", difficulty: 3 },
    { type: "mcq", stem: "Shah, Harris, Bird, Catmur, & Hahn(2016) が信念更新パラダイムについて報告した結論として最も適切なのはどれか。", choices: ["全集団で強い楽観的更新が再現された", "5実験で楽観的更新の証拠が見られず、特定集団を除き一般的な楽観バイアスは存在しないと主張した", "楽観的更新は抑うつ者でのみ生じると示した", "ドーパミンが楽観的更新を増大させると示した"], answer: 1, explain: "Shah ら(2016, Cognitive Psychology) は5実験で楽観的更新の証拠が見られず、スポーツファンや喫煙者など特定集団を除けば一般的な楽観バイアスは存在しないと主張した。", difficulty: 2 },
    { type: "mcq", stem: "Garrett & Sharot による Shah ら(2016) への反論の要点として、出典に書かれている内容はどれか。", choices: ["比較法は廃止すべきだと主張した", "ベースレートを考慮しても楽観的更新が観察され、人々はベイズ的エージェントより悪い知らせへの更新が小さいと主張した", "楽観性バイアスは存在しないと認めた", "更新の非対称性は価数に依存しないと主張した"], answer: 1, explain: "Garrett & Sharot は『Optimistic update bias holds firm』で、ベースレートを考慮しても楽観的更新が観察され、人々はベイズ的エージェントよりも悪い知らせに対して更新が小さいと再反論した。", difficulty: 2 },
    { type: "mcq", stem: "Kuzmanovic らの研究が示した、楽観的更新に関する調整効果として出典に記されているのはどれか。", choices: ["楽観的更新は抑うつ者でのみ顕著である", "楽観的更新は気質的楽観主義(trait optimism)の高い個人でのみ顕著という報告がある", "楽観的更新は高齢者でのみ生じる", "楽観的更新は女性でのみ生じる"], answer: 1, explain: "Kuzmanovic & Rigoux(2017) は実在性を支持しつつ、Kuzmanovic et al.(2015) は楽観的更新が気質的楽観主義の高い個人でのみ顕著という調整効果を報告した。", difficulty: 3 },
    { type: "mcq", stem: "Harris, de Molière, Soh, & Hahn(2017, PLOS ONE) が行ったこととして出典に合致するのはどれか。", choices: ["楽観性バイアスの神経基盤をfMRIで同定した", "統計的交絡を統制した5研究を行い、比較法の先行結果に楽観的解釈を支持する証拠はないと報告した", "L-DOPA投与で楽観性が増大すると示した", "抑うつリアリズムのメタ分析を行った"], answer: 1, explain: "Harris ら(2017) は統計的交絡を統制した5研究を実施し、比較法による先行結果に楽観的解釈を支持する証拠はないと報告した。これは批判側（人工産物説）の系列に属する研究である。", difficulty: 2 },
    { type: "mcq", stem: "この論争における『価数(valence)』をめぐる争点の説明として最も適切なのはどれか。", choices: ["擁護側は価数非依存、批判側は価数依存を主張している", "擁護側は良い知らせ/悪い知らせという価数で更新が変わる（価数依存）とみるが、批判側は価数と無関係な統計的痕跡（価数非依存）を指摘する", "両陣営とも価数は無関係だと合意している", "価数とは出来事の発生頻度のことである"], answer: 1, explain: "Sharot陣営は更新が価数（良悪）に依存すると主張し、批判側のHarris ら(2013)は自閉スペクトラム症研究で価数非依存的な人工産物の痕跡を示した。同じデータに異なる説明が並立している。", difficulty: 3 },
    { type: "mcq", stem: "2020年代の査読基準のもとで、論文序論で楽観性バイアスを扱う際に強く期待される書き方はどれか。", choices: ["確立された知見のみを断定的に書く", "批判側の主張のみを採用し現象を否定する", "確立された知見と方法論的論争の両面を併記する", "論争には一切触れず神経科学的知見だけを書く"], answer: 2, explain: "出典は、確立された知見（Weinstein 1980 以来）と方法論的論争（Harris & Hahn 2011 と Garrett & Sharot の反論）の両面を序論で併記することが2020年代の査読基準で強く期待される、としている。", difficulty: 1 },
    { type: "mcq", stem: "研究で楽観性バイアスを『頑健な前提』として議論を組み立てる場合、方法セクションで明示すべきこととして出典が挙げているのはどれか。", choices: ["fMRIの撮像パラメータのみ", "直接法/間接法のどちらをなぜ採るか、ベースレートをどう統制するか", "被験者の年齢構成のみ", "抑うつ尺度の信頼性係数のみ"], answer: 1, explain: "出典の『結論の閾値』によれば、現象を頑健な前提とするなら、Harris & Hahn系の批判への応答として、直接法/間接法の選択理由とベースレートの統制方法を方法セクションで明示する必要がある。", difficulty: 2 },
    { type: "mcq", stem: "逆に、楽観性バイアスの『存在自体を検証対象とする』研究で採るべき設計として出典が推奨するのはどれか。", choices: ["統計的人工産物を排除した設計（Harris et al. 2017 や Shah et al. 2016 のような統制条件）を採用する", "比較法を統制なしでそのまま使う", "抑うつ者のみを対象にする", "ベースレートを無視して自己評価のみ集める"], answer: 0, explain: "出典は、現象の存在を検証対象とするなら統計的人工産物を排除した設計、すなわちHarris et al.(2017)やShah et al.(2016)のような統制条件を採用すべきだとしている。", difficulty: 2 },
    { type: "mcq", stem: "この方法論的論争に対する『中立的・両論併記』の理解として最も適切なのはどれか。", choices: ["どちらかの陣営が相手のデータを捏造だと告発している論争である", "両陣営はおおむね同じデータに異なる説明（心理的説明と統計的説明）を与えており、現象の存在は決着していない", "Sharot陣営が完全に論破され決着済みである", "Harris & Hahn陣営が完全に論破され決着済みである"], answer: 1, explain: "両陣営は相手のデータを否定しているのではなく、同じデータに異なる説明を与えている。論争は決着しておらず、研究者の役割は勝者を宣言することではなく、自分の設計がどちらの批判に耐えるかを明示することにある。", difficulty: 3 },
  ],
});
