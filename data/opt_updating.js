/* === 楽観性の心理学（特別編） 信念更新の非対称性 (opt_updating) === */
PsychApp.registerModule({
  id: "opt_updating",
  title: "信念更新の非対称性",
  emoji: "🔄",
  category: "optimism",
  tagline: "Sharot ら(2011)の良い知らせ/悪い知らせ・rIFG・ドーパミンとL-DOPA・TMS・valence が学習を支配",
  overview: `<p>楽観性バイアス(optimism bias)は、なぜ現実の情報に晒され続けても消えずに維持されるのか。この問いに認知神経科学の側から答えたのが、<em>Sharot</em> らによる<strong>信念更新の非対称性(asymmetric belief updating)</strong>の研究系列である。鍵となるのは、人々が<strong>予想より「良い知らせ」を聞いたときには信念を大きく書き換える一方、「悪い知らせ」を聞いたときには更新が弱い</strong>という、情報の価数(valence)に依存した学習の偏りである。本モジュールでは、この非対称性を初めて示した <em>Sharot, Korn, &amp; Dolan(2011)</em> と、ドーパミンや経頭蓋磁気刺激(TMS)を用いてそれを<strong>因果的に操作</strong>した一連の研究、そして「望ましい情報と望ましくない情報では学習を支配する規則が異なる」という <em>Sharot &amp; Garrett(2016)</em> の価数依存的枠組みを概観する。</p>
  <div class="callout note"><b>位置づけ</b>：本モジュールは楽観性バイアスを<strong>維持する中核メカニズム</strong>を扱う。ただし、この信念更新パラダイム自体には統計的人工産物をめぐる方法論的論争がある点に注意したい（本文・演習で両論併記する）。数学的な「信念の更新＝事後確率の計算」という土台は、特別コース「<a href="bayes/index.html">ベイズの階段</a>」で中学数学レベルから補強できる。</div>`,
  lessons: [
    {
      title: "信念更新の非対称性 — 良い知らせは強く、悪い知らせは弱く",
      body: `
        <p>楽観性バイアスは一度きりの誤りではなく、<strong>現実の情報に繰り返し触れてもなお維持される</strong>という頑健さを持つ。この維持メカニズムを神経レベルで示したのが、<em>Sharot, Korn, &amp; Dolan(2011)</em> の <em>Nature Neuroscience</em>(14巻11号, 1475–1479)論文 "How unrealistic optimism is maintained in the face of reality" である。</p>
        <h3>更新課題のしくみ</h3>
        <p>研究では、参加者にがん・離婚・自動車事故といった<strong>多数のネガティブな出来事</strong>について、自分がそれを将来経験する確率を見積もらせる。その直後に、各出来事の<strong>実際の母集団での生起確率</strong>（基準情報）を提示し、しばらくしてから<strong>もう一度同じ確率を見積もらせる</strong>。最初の推定と二度目の推定の差が、その人がどれだけ信念を<strong>更新(update)</strong>したかを表す。</p>
        <p>ここで重要なのは、提示された基準情報が参加者にとって「良い知らせ」か「悪い知らせ」かという<strong>価数(valence)</strong>である。</p>
        <ul>
          <li><strong>良い知らせ(good news)</strong>：自分の最初の推定より、実際のリスクが<strong>低かった</strong>場合（例：自分は30%だと思ったが、実際は10%）。</li>
          <li><strong>悪い知らせ(bad news)</strong>：自分の最初の推定より、実際のリスクが<strong>高かった</strong>場合（例：自分は10%だと思ったが、実際は30%）。</li>
        </ul>
        <div class="callout key"><b>中心的な発見</b>：人々は予想より<strong>良い知らせに対しては信念を大きく更新する</strong>が、<strong>悪い知らせに対しては更新が弱い</strong>。すなわち望ましい方向には素早く学び、望ましくない方向には学びにくい。この<strong>非対称な更新(asymmetric updating)</strong>が、楽観性バイアスを現実の前で維持させる。</div>
        <h3>なぜバイアスが維持されるのか</h3>
        <p>もし人々が良い知らせも悪い知らせも等しく取り込めば、推定は徐々に現実へ近づき、楽観性は薄れていくはずである。しかし悪い知らせの取り込みが弱いと、ネガティブな情報は信念を十分に下方修正できず、<strong>楽観的な見通しが温存される</strong>。<em>Sharot</em> らは論文末尾で、「望ましくない推定誤差を切り捨てることで、我々は将来を<strong>バラ色の眼鏡(rose coloured glasses)</strong>を通して見るようになる」と述べている。</p>
        <h3>脳における誤差符号化の失敗</h3>
        <p>この非対称性は何に支えられているのか。fMRI の分析から、<em>Sharot</em> らはそれが<strong>「楽観性を減じるべき誤差」を脳が十分に符号化しない失敗</strong>に媒介されると論じた。情報を受け取ったときの「予想とのずれ」を<strong>更新誤差(estimation error / update error)</strong>と呼ぶと、良い知らせ（楽観性を高める誤差）はよく符号化されるのに対し、悪い知らせ（楽観性を減じるべき負の誤差）の追跡が弱まっていたのである。</p>
        <div class="callout example"><b>鍵となる脳部位</b>：特に<strong>楽観性の高い個人ほど</strong>、<strong>右下前頭回(right inferior frontal gyrus, rIFG)</strong> における<strong>負の更新誤差（悪い知らせ）の追跡が低下</strong>していた。つまり、楽観的な人ほど「悪い知らせのずれ」を脳がうまく登録しておらず、その結果として信念が下方修正されにくい。</div>
        <h3>抑うつとの接続（示唆）</h3>
        <p>論文の Discussion では、この非対称性が<strong>気分</strong>と関連する可能性が示唆されている。すなわち、<strong>軽度の抑うつはより正確な将来予測に、重度の抑うつは悲観的な予測に関連する</strong>という連続体である。健常な楽観性が「悪い知らせを弱く取り込む」ことで成立しているなら、その偏りが失われた状態が抑うつに対応しうる——この見立ては<a href="#/module/opt_depression">抑うつとの鏡像関係</a>として、後続研究(Korn et al., 2014; Garrett et al., 2014)へ引き継がれていく。なお本論文の示唆はあくまで Discussion 上のものであり、断定ではない点に注意したい。</p>
        <div class="callout warn"><b>方法論的な留保</b>：この信念更新パラダイムについては、<em>Shah, Harris, Bird, Catmur, &amp; Hahn(2016, Cognitive Psychology)</em> が複数の実験で「楽観的更新の証拠が見られない」と報告し、ベースレート（基準率）の扱いに起因する<strong>統計的人工産物</strong>の可能性を指摘している。これに対し <em>Garrett &amp; Sharot</em> らはベースレートを統制しても楽観的更新が残ると再反論しており、<strong>論争は継続中</strong>である。本現象を学ぶ際は「確立された知見」と「未解決の方法論的論争」の両面を併せ持つものとして扱うのが誠実である。</p></div>
      `,
      figure: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="270" rx="14" fill="#f5f7fd"/>
        <defs>
          <marker id="ou_good" markerWidth="11" markerHeight="11" refX="7" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#15c4a8"/></marker>
          <marker id="ou_bad" markerWidth="11" markerHeight="11" refX="7" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#e0566b"/></marker>
        </defs>
        <text x="240" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">信念更新の非対称性</text>
        <text x="240" y="46" text-anchor="middle" font-size="10.5" fill="#5b6478">最初の推定をどれだけ書き換えるか（矢印の太さ＝更新量）</text>
        <line x1="240" y1="64" x2="240" y2="250" stroke="#5b6478" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="240" y="262" text-anchor="middle" font-size="9.5" fill="#5b6478">最初の推定</text>
        <text x="120" y="86" text-anchor="middle" font-size="12" font-weight="800" fill="#15c4a8">良い知らせ</text>
        <text x="120" y="102" text-anchor="middle" font-size="9.5" fill="#5b6478">実際のリスクは予想より低い</text>
        <line x1="232" y1="128" x2="60" y2="128" stroke="#15c4a8" stroke-width="13" marker-end="url(#ou_good)"/>
        <text x="146" y="124" text-anchor="middle" font-size="10.5" fill="#15c4a8" font-weight="700">大きく更新</text>
        <text x="360" y="86" text-anchor="middle" font-size="12" font-weight="800" fill="#e0566b">悪い知らせ</text>
        <text x="360" y="102" text-anchor="middle" font-size="9.5" fill="#5b6478">実際のリスクは予想より高い</text>
        <line x1="248" y1="128" x2="300" y2="128" stroke="#e0566b" stroke-width="4" marker-end="url(#ou_bad)"/>
        <text x="350" y="124" text-anchor="middle" font-size="10.5" fill="#e0566b" font-weight="700">わずかしか更新しない</text>
        <rect x="44" y="172" width="392" height="74" rx="9" fill="#ffffff" stroke="#5b6cf0" stroke-width="1.5"/>
        <text x="240" y="194" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2433">悪い知らせを取り込みにくい</text>
        <text x="240" y="214" text-anchor="middle" font-size="10.5" fill="#5b6478">→ ネガティブな情報が信念を十分に下方修正できない</text>
        <text x="240" y="233" text-anchor="middle" font-size="10.5" fill="#e0566b" font-weight="700">→ 楽観性バイアスが現実の前で維持される</text>
      </svg>`,
      figcaption: "信念更新の非対称性。予想より良い知らせ（緑）には信念を大きく更新するが、悪い知らせ（赤）にはわずかしか更新しない。悪い知らせを取り込みにくいために、ネガティブな情報が信念を下げきれず、楽観性バイアスが維持される（Sharot, Korn, & Dolan, 2011）。",
      terms: [
        { term: "信念更新の非対称性(asymmetric belief updating)", def: "良い知らせには信念を大きく、悪い知らせには弱く更新する偏り。" },
        { term: "価数(valence)", def: "情報が自分にとって望ましい（良い知らせ）か望ましくない（悪い知らせ）かの符号。" },
        { term: "更新誤差(update error)", def: "提示された実際の確率と自分の推定とのずれ。更新の駆動信号となる量。" },
        { term: "右下前頭回(rIFG)", def: "悪い知らせの負の更新誤差を追跡する部位。楽観的な人ほど追跡が低下。" },
        { term: "バラ色の眼鏡(rose coloured glasses)", def: "望ましくない誤差を切り捨て将来を楽観的に見る比喩(Sharot et al., 2011)。" },
        { term: "更新課題", def: "推定→実際の確率提示→再推定で信念の書き換え量を測る実験手続き。" },
        { term: "Sharot, Korn, & Dolan(2011)", def: "非対称な信念更新が楽観性を維持すると示した Nature Neuroscience 論文。" },
        { term: "統計的人工産物の指摘", def: "更新の非対称はベースレート処理の副産物かもしれないという Shah et al.(2016) の批判。" },
      ],
    },
    {
      title: "因果的操作 — ドーパミン・TMS・価数依存性",
      body: `
        <p>前レッスンの非対称性は、fMRI による<strong>相関的</strong>な証拠であった。すなわち「悪い知らせの符号化が弱い人ほど楽観的だ」という対応関係を示したにすぎない。これを一歩進め、<strong>脳の状態を操作すれば信念更新の偏りが変わる</strong>という<strong>因果的(causal)</strong>な証拠を与えたのが、続く一連の研究である。</p>
        <h3>ドーパミンによる増強 — L-DOPA 実験</h3>
        <p><em>Sharot, Guitart-Masip, Korn, Chowdhury, &amp; Dolan(2012)</em> は <em>Current Biology</em>(22巻16号)の論文 "How dopamine enhances an optimism bias in humans" で、神経修飾物質<strong>ドーパミン(dopamine)</strong>の役割を調べた。ドーパミン機能を高める薬物<strong>L-DOPA(150 mg)</strong>を投与したうえで更新課題を行わせたのである。</p>
        <div class="callout key"><b>結果</b>：L-DOPA の投与は、<strong>悪い知らせに対する信念更新を阻害</strong>した。その結果、<strong>楽観性バイアスがいっそう増大</strong>した。これは<strong>神経修飾物質が信念形成に与える因果的影響を示した最初の証拠</strong>とされる。</div>
        <p>論理の流れを整理すると、(1) 楽観性の維持は「悪い知らせを弱く取り込む」ことに支えられている（前レッスン）、(2) ドーパミンを高めると、まさにその「悪い知らせの取り込み」がさらに弱まる、(3) 結果として楽観性が強まる——となる。相関だけでなく、操作によってバイアスの大きさが動くことを示した点に意義がある。</p>
        <h3>TMS による選択的操作</h3>
        <p>同じ2012年、<em>Sharot, Kanai</em> らは <em>PNAS</em> の研究で、<strong>経頭蓋磁気刺激(transcranial magnetic stimulation, TMS)</strong>を用い、<strong>信念形成を選択的に操作できる</strong>ことを示した。TMS は頭蓋の外から磁場で特定の脳領域の活動を一時的に変化させる手法であり、これにより「良い知らせ・悪い知らせのどちらの取り込みに介入するか」を選り分けて操作できることが示された。薬理学的操作（L-DOPA）と刺激法（TMS）という独立した二つの手法が、いずれも更新の非対称性を動かせるという点で、因果的証拠を補強した。</p>
        <table>
          <tr><th>研究</th><th>操作</th><th>主な結果</th></tr>
          <tr><td><b>Sharot ら(2011)</b></td><td>fMRI（相関）</td><td>rIFG の負の更新誤差の追跡低下が楽観性と対応</td></tr>
          <tr><td><b>Sharot ら(2012, Curr Biol)</b></td><td>L-DOPA 150 mg（薬理）</td><td>悪い知らせの更新を阻害 → 楽観性が増大</td></tr>
          <tr><td><b>Sharot, Kanai ら(2012, PNAS)</b></td><td>TMS（刺激）</td><td>信念形成を選択的に操作できる</td></tr>
        </table>
        <h3>価数依存性 — なぜ価数が問題になるのか</h3>
        <p>これらの知見を理論的に統合したのが、<em>Sharot &amp; Garrett(2016)</em> の <em>Trends in Cognitive Sciences</em>(20巻1号, 25–33)論文 "Forming beliefs: Why valence matters" である。彼らは、<strong>望ましい情報と望ましくない情報とでは、学習を支配する規則とメカニズムが異なる</strong>という<strong>価数依存的(valence-dependent)</strong>な非対称性の枠組みを提示した。</p>
        <div class="callout key"><b>価数依存性の核心</b>：情報を取り込むかどうかは、その情報が<strong>正しそうか</strong>だけで決まるのではなく、その情報が自分にとって<strong>望ましいか（価数）</strong>によっても左右される。良い知らせと悪い知らせは、別々の「学習の規則」で処理されるのである。</div>
        <p>この枠組みは、楽観性バイアスを単なる「思い込み」ではなく、<strong>価数に応じて情報処理を切り替える脳の体系的な性質</strong>として位置づけ直す。ドーパミンや TMS による操作が効くのも、まさに価数依存的な学習の回路に介入しているからだと解釈できる。</p>
        <div class="callout warn"><b>因果か人工産物か</b>：L-DOPA や TMS が更新の<strong>非対称</strong>を動かしたという解釈は、前提として「もとの非対称が実在する」ことに依存する。前レッスンで触れたとおり、<em>Shah et al.(2016)</em> はこの非対称をベースレート処理の<strong>統計的人工産物</strong>とみなしうると批判している。したがって因果的操作の知見も、現象の実在をめぐる論争の文脈のなかで慎重に読むべきである。両論を踏まえることが、2020年代の学術的態度として求められる。</div>
      `,
      figure: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="250" rx="14" fill="#f5f7fd"/>
        <defs>
          <marker id="ou_arr" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker>
          <marker id="ou_block" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#e0566b"/></marker>
        </defs>
        <text x="240" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">価数依存的な信念形成への因果的操作</text>
        <rect x="150" y="44" width="180" height="36" rx="8" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="240" y="67" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2433">悪い知らせの取り込み</text>
        <rect x="36" y="120" width="180" height="40" rx="8" fill="#ffffff" stroke="#f0a020" stroke-width="2"/>
        <text x="126" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2433">L-DOPA(150mg)</text>
        <text x="126" y="153" text-anchor="middle" font-size="9.5" fill="#5b6478">ドーパミンを高める</text>
        <rect x="264" y="120" width="180" height="40" rx="8" fill="#ffffff" stroke="#15c4a8" stroke-width="2"/>
        <text x="354" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2433">TMS（磁気刺激）</text>
        <text x="354" y="153" text-anchor="middle" font-size="9.5" fill="#5b6478">信念形成を選択的に操作</text>
        <line x1="126" y1="120" x2="195" y2="82" stroke="#e0566b" stroke-width="2.5" marker-end="url(#ou_block)"/>
        <line x1="354" y1="120" x2="285" y2="82" stroke="#5b6cf0" stroke-width="2.5" marker-end="url(#ou_arr)"/>
        <text x="240" y="200" text-anchor="middle" font-size="11" font-weight="700" fill="#e0566b">悪い知らせの更新が弱まる</text>
        <text x="240" y="222" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1d2433">→ 楽観性バイアスが増大</text>
        <text x="240" y="240" text-anchor="middle" font-size="9" fill="#5b6478">Sharot ら(2012, Current Biology / PNAS)・Sharot & Garrett(2016)</text>
      </svg>`,
      figcaption: "因果的操作の概念図。ドーパミンを高める L-DOPA(150mg)は悪い知らせの取り込みを阻害し、TMS は信念形成を選択的に操作できる。いずれも価数依存的な学習回路に介入し、悪い知らせの更新を弱めることで楽観性バイアスを増大させうる（Sharot ら, 2012; Sharot & Garrett, 2016）。",
      terms: [
        { term: "因果的証拠(causal evidence)", def: "脳の状態を操作してバイアスが変わると示すこと。相関より一歩進んだ証拠。" },
        { term: "L-DOPA(150 mg)", def: "ドーパミン機能を高める薬物。悪い知らせの更新を阻害し楽観性を増大させた。" },
        { term: "ドーパミン(dopamine)", def: "信念形成に因果的に関わる神経修飾物質。高めると楽観性が強まる。" },
        { term: "経頭蓋磁気刺激(TMS)", def: "頭蓋外から磁場で脳活動を変える手法。信念形成を選択的に操作できた。" },
        { term: "価数依存的(valence-dependent)", def: "良い情報と悪い情報で学習の規則が異なるとする枠組み(Sharot & Garrett, 2016)。" },
        { term: "Sharot ら(2012, Current Biology)", def: "L-DOPA でドーパミンが楽観性を高めると示した論文。神経修飾物質の因果的初証拠。" },
        { term: "Sharot, Kanai ら(2012, PNAS)", def: "TMS により信念形成を選択的に操作できると示した研究。" },
        { term: "Sharot & Garrett(2016)", def: "なぜ価数が重要かを論じた TiCS 論文。価数依存的非対称性の理論的統合。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "<em>Sharot, Korn, &amp; Dolan(2011)</em> が示した「信念更新の非対称性」の中心的内容として正しいのはどれか。", choices: ["良い知らせにも悪い知らせにも等しく信念を更新する", "良い知らせには大きく更新するが、悪い知らせには更新が弱い", "悪い知らせには大きく更新するが、良い知らせには更新が弱い", "良い知らせにも悪い知らせにも信念を更新しない"], answer: 1, explain: "人々は予想より良い知らせには信念を大きく更新する一方、悪い知らせには更新が弱い。この非対称な更新が楽観性バイアスを維持する。", difficulty: 1 },
    { type: "mcq", stem: "更新課題において「悪い知らせ(bad news)」に相当するのはどの場合か。", choices: ["自分の最初の推定より、実際のリスクが低かったとき", "自分の最初の推定より、実際のリスクが高かったとき", "実際のリスクが提示されなかったとき", "最初に推定をしなかったとき"], answer: 1, explain: "悪い知らせとは、自分の最初の推定よりも実際のリスクが高かった場合（例：自分は10%と思ったが実際は30%）を指す。逆が良い知らせである。", difficulty: 1 },
    { type: "mcq", stem: "信念更新の非対称性が「楽観性バイアスを維持する」と言えるのはなぜか。", choices: ["良い知らせを無視するため、悲観が強まるから", "悪い知らせの取り込みが弱く、ネガティブな情報が信念を十分に下方修正できないから", "すべての情報を等しく取り込むため、推定が現実に一致するから", "推定を一度しか行わないから"], answer: 1, explain: "悪い知らせを弱くしか取り込まないため、ネガティブな情報が楽観的見通しを下げきれず、現実に触れても楽観性が温存される。", difficulty: 2 },
    { type: "mcq", stem: "<em>Sharot</em> らが、楽観性の高い個人ほど「負の更新誤差（悪い知らせ）の追跡が低下していた」と報告した脳部位はどこか。", choices: ["扁桃体(amygdala)", "右下前頭回(right inferior frontal gyrus, rIFG)", "吻側前帯状皮質(rACC)", "海馬(hippocampus)"], answer: 1, explain: "楽観性の高い個人ほど、右下前頭回(rIFG)における負の更新誤差（悪い知らせ）の追跡が低下していた。これが悪い知らせを取り込みにくい一因とされる。", difficulty: 2 },
    { type: "mcq", stem: "2011年の論文で <em>Sharot</em> らが楽観的な将来観を表すのに用いた比喩はどれか。", choices: ["割れた鏡(broken mirror)", "バラ色の眼鏡(rose coloured glasses)", "暗いトンネル(dark tunnel)", "曇ったレンズ(clouded lens)"], answer: 1, explain: "「望ましくない推定誤差を切り捨てることで、我々は将来をバラ色の眼鏡(rose coloured glasses)を通して見るようになる」と述べられている。", difficulty: 1 },
    { type: "mcq", stem: "<em>Sharot, Guitart-Masip, Korn, Chowdhury, &amp; Dolan(2012, Current Biology)</em> の L-DOPA 実験の結果として正しいのはどれか。", choices: ["L-DOPA は良い知らせの更新を阻害し、悲観性を高めた", "L-DOPA は悪い知らせに対する信念更新を阻害し、楽観性バイアスを増大させた", "L-DOPA は更新の非対称性を消失させ、推定を正確にした", "L-DOPA は信念更新にまったく影響しなかった"], answer: 1, explain: "ドーパミン機能を高める L-DOPA(150 mg)の投与は、悪い知らせに対する信念更新を阻害することで楽観性バイアスを増大させた。", difficulty: 2 },
    { type: "mcq", stem: "L-DOPA 実験(2012)が学術的に重要とされる主な理由はどれか。", choices: ["楽観性バイアスが存在しないことを証明したから", "神経修飾物質が信念形成に与える因果的影響を示した最初の証拠とされるから", "抑うつリアリズムを再現したから", "計画錯誤を初めて命名したから"], answer: 1, explain: "薬理学的にドーパミンを操作して楽観性バイアスを動かしたこの研究は、神経修飾物質が信念形成に与える因果的影響を示した最初の証拠とされる。", difficulty: 2 },
    { type: "mcq", stem: "同じく2012年の <em>Sharot, Kanai</em> らの <em>PNAS</em> 研究で用いられ、信念形成を選択的に操作できると示された手法はどれか。", choices: ["脳波(EEG)記録", "経頭蓋磁気刺激(TMS)", "近赤外分光法(NIRS)", "L-DOPA の経口投与"], answer: 1, explain: "Sharot, Kanai らは TMS（経頭蓋磁気刺激）により信念形成を選択的に操作できることを示した。L-DOPA は別の2012年論文（Current Biology）の手法である。", difficulty: 2 },
    { type: "mcq", stem: "L-DOPA 実験(薬理)と TMS 研究(刺激)の両方が示すものとして最も適切なのはどれか。", choices: ["楽観性バイアスは学習とは無関係である", "独立した二つの操作法がいずれも更新の非対称性を動かせるという因果的証拠", "悪い知らせのほうが良い知らせより強く取り込まれること", "ドーパミンは信念形成に関与しないこと"], answer: 1, explain: "薬理学的操作（L-DOPA）と刺激法（TMS）という独立した手法が、いずれも信念更新の非対称性を動かせる点で、因果的証拠を相互に補強している。", difficulty: 3 },
    { type: "mcq", stem: "<em>Sharot &amp; Garrett(2016, Trends in Cognitive Sciences)</em> 'Forming beliefs: Why valence matters' が提示した枠組みはどれか。", choices: ["望ましい情報と望ましくない情報では学習を支配する規則が異なる、という価数依存的非対称性", "すべての情報は価数に関係なく同一の規則で学習される", "信念は遺伝のみで決まり経験では変わらない", "ベースレートを無視すれば楽観は消える"], answer: 0, explain: "彼らは望ましい情報と望ましくない情報とで学習を支配する規則とメカニズムが異なるという「価数依存的(valence-dependent)」な非対称性の枠組みを提示した。", difficulty: 2 },
    { type: "mcq", stem: "「価数依存的(valence-dependent)」な学習が意味することとして最も適切なのはどれか。", choices: ["情報を取り込むかは、その情報が正しそうかだけで決まる", "情報を取り込むかは、その情報が自分にとって望ましいか（価数）によっても左右される", "良い知らせは一切取り込まれない", "悪い知らせのほうが常に強く取り込まれる"], answer: 1, explain: "価数依存性の核心は、情報の取り込みが「正しそうか」だけでなく「望ましいか（価数）」にも左右される点にある。良い知らせと悪い知らせは別々の規則で処理される。", difficulty: 3 },
    { type: "mcq", stem: "2011年論文の Discussion で <em>Sharot</em> らが示唆した、抑うつと将来予測の関係として出典に忠実な記述はどれか。", choices: ["抑うつは将来予測にまったく影響しない", "軽度の抑うつはより正確な将来予測に、重度の抑うつは悲観的予測に関連すると示唆された", "重度の抑うつほど正確な将来予測に近づくと断定された", "抑うつ者ほど楽観性バイアスが強いと結論された"], answer: 1, explain: "Discussion では、軽度の抑うつがより正確な将来予測に、重度の抑うつが悲観的予測に関連すると示唆された。あくまで示唆であり断定ではない。", difficulty: 2 },
    { type: "mcq", stem: "信念更新パラダイムをめぐる方法論的論争について、出典に忠実な記述はどれか。", choices: ["論争は完全に決着し、楽観的更新は存在しないと確定した", "Shah et al.(2016) は統計的人工産物の可能性を指摘し、Garrett & Sharot らはベースレートを統制しても楽観的更新が残ると再反論しており、論争は継続中である", "誰も楽観的更新に疑問を呈していない", "L-DOPA 実験により論争は終結した"], answer: 1, explain: "Shah et al.(2016) はベースレート処理に起因する統計的人工産物の可能性を指摘し、Garrett & Sharot らは統制しても楽観的更新が残ると再反論した。現象の実在をめぐる論争は継続中であり、両論併記が誠実である。", difficulty: 3 },
  ],
});
