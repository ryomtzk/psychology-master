/* === 楽観性の心理学（特別編） 抑うつとの鏡像関係 (opt_depression) === */
PsychApp.registerModule({
  id: "opt_depression",
  title: "抑うつとの鏡像関係",
  emoji: "🌧️",
  category: "optimism",
  tagline: "抑うつリアリズム・悲しいほど賢明・Korn(2014)/Garrett(2014)・バラ色の眼鏡を失う・再現性危機",
  overview: `<p>楽観性バイアスは、人口の大多数が示す傾向でありながら、一つの重要な例外をもつとされてきた。<strong>抑うつ(depression)を抱える人々では、このバイアスが顕著に欠如する</strong>と一貫して指摘されてきたのである。本モジュールは、楽観性バイアスの<strong>「鏡像(mirror image)」</strong>としての抑うつを扱う。すなわち、健常者の楽観が「歪んだ(過度に肯定的な)認知」だとすれば、抑うつ者はむしろ現実を「正確に」見ているのではないか、という問いである。</p>
  <p>この問いは、<strong>抑うつリアリズム(depressive realism)</strong>という古典的仮説(<em>Alloy & Abramson, 1979</em>)に始まり、<em>Korn</em> ら・<em>Garrett</em> らによる神経科学的研究(2014)で「楽観を支える脳のしくみ」として精緻化された。しかし2010年代以降、メタ分析と事前登録された直接再現研究は、この「悲しいほど賢明(sadder but wiser)」というテーゼの頑健性に強い疑問を投げかけている。<strong>確立された古典として無批判に提示するのではなく、再現性危機の文脈で両論を併記して読むこと</strong>が本モジュールの目的である。</p>`,
  lessons: [
    {
      title: "抑うつリアリズム — 悲しいほど賢明か",
      body: `
        <p>正確な現実認識こそ精神的健康の基盤である、という通念がかつて広く共有されていた。これに最初の楔を打ち込んだのが <em>Alloy</em> と <em>Abramson</em> による<strong>抑うつリアリズム(depressive realism)</strong>研究である(<em>Alloy & Abramson, 1979, Journal of Experimental Psychology: General, 108(4), 441–485</em>)。</p>
        <h3>随伴性判断課題</h3>
        <p>彼らが用いたのは<strong>随伴性判断課題(judgment of contingency task)</strong>である。被験者はボタンを押すか押さないかを選び、その後に<strong>緑色のライトが点灯するかどうか</strong>を観察する。そして「自分のボタン押しが、ライト点灯をどれだけ統制(control)しているか」を見積もる。実際には、ボタン押しとライト点灯の<em>随伴性(contingency)</em>、つまり両者の結びつきの強さは実験者があらかじめ設定してある。問われるのは、被験者がその客観的な結びつきをどれだけ正確に評価できるか、である。</p>
        <div class="callout key"><b>核心となる発見</b>：実際にはボタン押しとライト点灯が無関係(随伴性ゼロ)であっても、<strong>非抑うつ者(健常者)は「自分がライトを統制している」と過大評価した</strong>。これが <a href="#/module/opt_illusions">統制の幻想(illusion of control)</a> である。これに対し、<strong>抑うつ者は実際の随伴性に近い、より正確な判断を行った</strong>。</div>
        <h3>「悲しいほど賢明」仮説</h3>
        <p>この結果から、健常者の認知こそが「過度に肯定的に歪んでいる」一方、抑うつ者はむしろ現実をありのままに見ているのではないか、という解釈が生まれた。これが<strong>「悲しいほど賢明(sadder but wiser)」仮説</strong>である。楽観性バイアスを「健常者の側の特徴」として位置づけ、後の <em>Taylor & Brown(1988)</em> による<a href="#/module/opt_illusions">ポジティブ・イリュージョン</a>論の重要な礎となった点で、この研究は歴史的に大きな意義をもつ(被引用2,000回超)。</p>
        <p>Alloy と Abramson は後に <em>Alloy & Abramson(1988)</em> で随伴性判断研究を理論的に整理し、抑うつリアリズムを四つの理論的観点(four theoretical perspectives)から精緻化した。</p>
        <div class="callout tip"><b>「鏡像」という見立て</b>：健常者が肯定方向に歪み、抑うつ者がその歪みを失う——この対比から、抑うつは楽観性バイアスの<strong>鏡像(mirror image)</strong>として語られるようになった。次のレッスンでは、この鏡像関係が脳のレベルでどう現れるかを見る。</div>
        <div class="callout warn"><b>先取りの注意</b>：「抑うつ者のほうが正確だ」という主張は直感的で魅力的だが、後述のとおり<strong>近年の高検出力研究では再現されていない</strong>。本レッスンの古典的知見は、再現性危機以降の基準では再検証を要する「歴史的主張」として読む必要がある(第3レッスン参照)。</div>
      `,
      figure: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="500" height="270" rx="14" fill="#f5f7fd"/>
        <text x="250" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">随伴性判断課題：統制力の見積もり</text>
        <text x="250" y="50" text-anchor="middle" font-size="10.5" fill="#5b6478">実際の随伴性はゼロ（ボタン押しとライト点灯は無関係）</text>
        <line x1="70" y1="220" x2="460" y2="220" stroke="#1d2433" stroke-width="1.5"/>
        <text x="55" y="120" font-size="11" fill="#5b6478" transform="rotate(-90 55 120)">見積もった統制力</text>
        <line x1="70" y1="90" x2="460" y2="90" stroke="#15c4a8" stroke-width="1.5" stroke-dasharray="5 4"/>
        <text x="455" y="84" text-anchor="end" font-size="10" fill="#15c4a8" font-weight="700">実際の統制力＝ほぼゼロ（正確な値）</text>
        <rect x="120" y="120" width="90" height="100" rx="6" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="165" y="245" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2433">非抑うつ者</text>
        <text x="165" y="112" text-anchor="middle" font-size="10.5" fill="#e0566b" font-weight="700">過大評価（統制の幻想）</text>
        <rect x="310" y="100" width="90" height="120" rx="6" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <text x="355" y="245" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2433">抑うつ者</text>
        <text x="355" y="92" text-anchor="middle" font-size="10.5" fill="#15c4a8" font-weight="700">実際に近い＝正確</text>
        <text x="250" y="265" text-anchor="middle" font-size="9.5" fill="#5b6478">「悲しいほど賢明（sadder but wiser）」：抑うつ者ほど現実に近い判断をした（Alloy &amp; Abramson, 1979）</text>
      </svg>`,
      figcaption: "随伴性判断課題（Alloy & Abramson, 1979）。実際にはボタン押しとライト点灯が無関係でも、非抑うつ者は統制力を過大評価し（統制の幻想）、抑うつ者は実際の随伴性に近い正確な判断をした。これが「悲しいほど賢明」仮説の起点である。",
      terms: [
        { term: "抑うつリアリズム(depressive realism)", def: "抑うつ者のほうが現実を正確に認識するとする仮説。Alloy & Abramson(1979)。" },
        { term: "随伴性判断課題(judgment of contingency task)", def: "行動と結果の結びつきの強さを被験者に見積もらせる課題。" },
        { term: "統制の幻想(illusion of control)", def: "偶然の結果すら自分が統制していると過大評価する傾向。健常者で顕著。" },
        { term: "悲しいほど賢明(sadder but wiser)", def: "抑うつ者は歪みが少なく賢明に世界を見るとする標語的な仮説。" },
        { term: "随伴性(contingency)", def: "ある行動と結果が確率的にどれだけ結びついているかの度合い。" },
        { term: "四つの理論的観点", def: "Alloy & Abramson(1988)が抑うつリアリズムを整理した枠組み。" },
        { term: "鏡像(mirror image)", def: "健常者の楽観が抑うつ者では欠如・反転するという対比的関係の比喩。" },
        { term: "ポジティブ・イリュージョン", def: "Taylor & Brown(1988)の理論。抑うつリアリズムが重要な礎となった。" },
      ],
    },
    {
      title: "バラ色の眼鏡を失う — 抑うつと信念更新の脳",
      body: `
        <p>健常者の楽観を支えるとされる中核メカニズムが<strong>信念更新の非対称性(asymmetric belief updating)</strong>である。すなわち、人は予想より「良い知らせ」には信念を大きく更新するが、「悪い知らせ」には更新が弱い。では抑うつ者ではこの非対称性はどうなるのか。2014年に発表された二つの研究が、楽観性バイアスの鏡像を脳のレベルで描き出した。</p>
        <h3>Korn ら(2014):楽観的更新の欠如、そして反転</h3>
        <p><em>Korn, Sharot, Walter, Heekeren, & Dolan(2014, Psychological Medicine, 44(3), 579–592;オンライン2013年)</em>は、<strong>大うつ病性障害(MDD)患者18名(うち13名が投薬中)・健常者19名</strong>に、<strong>70の有害な出来事</strong>について確率を見積もらせる更新課題を実施した。</p>
        <div class="callout key"><b>主要な結果</b>：<strong>健常者は楽観的更新バイアスを示した</strong>(悪い知らせに対し信念を十分には下方修正しない)。これに対し、<strong>MDD患者では全体としてこのバイアスが欠如</strong>し、さらに<strong>症状が重いほど悲観的な更新パターン</strong>を示した。つまり、単なる「欠如」にとどまらず<strong>反転(reversal)</strong>が起きていた。加えて、MDD患者は有害な出来事の確率そのものを健常者より高く見積もった。</div>
        <p>この結果は、楽観的に偏った将来予測の更新が<strong>精神的健康(mental health)と結びついている可能性</strong>を示すものである。</p>
        <h3>Garrett ら(2014):悪い知らせの神経符号化</h3>
        <p>続く <em>Garrett, Sharot, Faulkner, Korn, Roiser, & Dolan(2014, Frontiers in Human Neuroscience, 8, 639)</em>は、投薬の影響を排除するため<strong>未投薬のうつ病患者15名・健常者14名(N=29)</strong>を対象とした <strong>fMRI</strong> 研究を行った。鍵となるのは、更新の手がかりである<em>推定誤差(estimation error)</em>を脳がどれだけ強く符号化(coding)するか、である。</p>
        <table>
          <tr><th>群</th><th>良い知らせの符号化</th><th>悪い知らせの符号化</th><th>更新の様相</th></tr>
          <tr><td><b>抑うつ者</b></td><td>強い</td><td>強い</td><td>非バイアス的(両方を等しく反映)</td></tr>
          <tr><td><b>健常者</b></td><td>強い</td><td><strong>相対的に減弱</strong></td><td>楽観的(悪い知らせが効きにくい)</td></tr>
        </table>
        <p>すなわち、抑うつにおける<strong>非バイアス的(unbiased)な信念更新</strong>は、良い知らせ・悪い知らせ<strong>双方の推定誤差を強く神経符号化する</strong>ことに媒介されていた。一方で、<strong>健常な精神的健康は「悪い知らせの神経符号化の相対的減弱」と関連</strong>していた。</p>
        <div class="callout key"><b>「バラ色の眼鏡を失う(losing rose-tinted glasses)」</b>：健常者の楽観は、悪い知らせを符号化する脳活動が<strong>弱い</strong>ことによって維持されている。抑うつ者ではこの「弱さ」が失われ、悪い知らせをまともに受け取ってしまう。<strong>健常者がかけている「バラ色の眼鏡」を、抑うつ者は失っている</strong>、という比喩で知られる。</div>
        <div class="callout note">この非対称性が「なぜベイズ的に最適でないのか」「良い情報と悪い情報で更新の規則が異なるとはどういうことか」を数式で確かめたい場合は、確率的な信念更新の基礎を扱う<a href="bayes/index.html">ベイズの階段</a>が補強になる。</div>
        <div class="callout warn"><b>サンプルサイズに注意</b>：これらは小規模研究である（Korn et al. は患者18名・健常19名の行動課題、Garrett et al. は患者15名・健常14名のfMRI=N=29）。とくに神経画像研究一般の検出力・再現性の問題を踏まえ、決定的な機序ではなく「示唆された(suggested)」知見として扱うのが適切である。</div>
      `,
      figure: `<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="280" rx="14" fill="#f5f7fd"/>
        <text x="260" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">悪い知らせを受けたときの信念更新</text>
        <defs>
          <marker id="optdep_arr" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6478"/></marker>
        </defs>
        <line x1="80" y1="60" x2="80" y2="240" stroke="#1d2433" stroke-width="1.5"/>
        <text x="72" y="150" font-size="10.5" fill="#5b6478" transform="rotate(-90 72 150)">悪い知らせに応じた下方修正の大きさ</text>
        <line x1="80" y1="240" x2="490" y2="240" stroke="#1d2433" stroke-width="1.5"/>
        <text x="170" y="262" text-anchor="middle" font-size="12" font-weight="700" fill="#e0566b">健常者</text>
        <text x="320" y="262" text-anchor="middle" font-size="12" font-weight="700" fill="#15c4a8">抑うつ者</text>
        <text x="430" y="262" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6cf0">重症の抑うつ者</text>
        <rect x="135" y="200" width="70" height="40" rx="5" fill="#fbdce2" stroke="#e0566b" stroke-width="2"/>
        <text x="170" y="192" text-anchor="middle" font-size="10" fill="#e0566b" font-weight="700">小さい</text>
        <text x="170" y="225" text-anchor="middle" font-size="9.5" fill="#1d2433">楽観的更新</text>
        <rect x="285" y="135" width="70" height="105" rx="5" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <text x="320" y="127" text-anchor="middle" font-size="10" fill="#15c4a8" font-weight="700">適正</text>
        <text x="320" y="190" text-anchor="middle" font-size="9.5" fill="#1d2433">非バイアス的</text>
        <rect x="395" y="95" width="70" height="145" rx="5" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="430" y="87" text-anchor="middle" font-size="10" fill="#5b6cf0" font-weight="700">過大</text>
        <text x="430" y="170" text-anchor="middle" font-size="9.5" fill="#1d2433">悲観的更新</text>
        <text x="430" y="185" text-anchor="middle" font-size="9.5" fill="#1d2433">（反転）</text>
        <line x1="205" y1="160" x2="280" y2="160" stroke="#5b6478" stroke-width="1.3" stroke-dasharray="3 3" marker-end="url(#optdep_arr)"/>
        <text x="260" y="50" text-anchor="middle" font-size="9.5" fill="#5b6478">健常者は「バラ色の眼鏡」で悪い知らせが効きにくい／抑うつが重いほど悲観へ反転（Korn et al., 2014）</text>
      </svg>`,
      figcaption: "悪い知らせに対する信念更新の対比（Korn et al., 2014）。健常者は悪い知らせを十分に取り込まず楽観的更新を示す（バラ色の眼鏡）。抑うつ者ではこのバイアスが欠如して非バイアス的になり、症状が重いほど悲観方向へ反転する。",
      terms: [
        { term: "信念更新の非対称性(asymmetric belief updating)", def: "良い知らせには大きく、悪い知らせには小さく信念を更新する傾向。" },
        { term: "Korn et al.(2014)", def: "MDD患者18名・健常者19名の更新課題。抑うつで楽観的更新が欠如・反転。" },
        { term: "更新の反転(reversal)", def: "抑うつ症状が重いほど悲観方向へ信念を更新するパターン。" },
        { term: "Garrett et al.(2014)", def: "未投薬うつ病患者15名・健常者14名のfMRI研究(N=29)。" },
        { term: "推定誤差の神経符号化", def: "予想と結果のずれを脳がどれだけ強く表現するかの度合い。" },
        { term: "非バイアス的更新(unbiased updating)", def: "良い知らせ・悪い知らせを等しく取り込む抑うつ者の更新様式。" },
        { term: "悪い知らせの符号化の減弱", def: "健常者で悪い知らせの神経符号化が相対的に弱いこと。楽観の基盤。" },
        { term: "バラ色の眼鏡(rose-tinted glasses)", def: "悪い知らせが効きにくい健常者の楽観。抑うつ者はこれを失う。" },
      ],
    },
    {
      title: "再現性危機 — 抑うつリアリズムは頑健か",
      body: `
        <p>「悲しいほど賢明」というテーゼは直感的に魅力的で、心理学の教科書にも広く取り上げられてきた。しかし、ある効果が真に存在するかは、追試によって繰り返し確認できるかにかかっている。<strong>再現性危機(replication crisis)</strong>の文脈で抑うつリアリズムを精査すると、その頑健性には強い疑問が浮かび上がる。</p>
        <h3>Moore & Fresco(2012):メタ分析が示した小さな効果</h3>
        <p><em>Moore & Fresco(2012, Clinical Psychology Review, 32(6), 496–509)</em>は、<strong>75研究・7,305名</strong>を統合したメタ分析を行った。結果、<strong>抑うつリアリズム効果は全体として非常に小さかった(Cohen's d = −.07)</strong>。効果量(effect size)d は標準化された差の大きさを表す指標で、目安として |d|=.2 が「小」、.5 が「中」、.8 が「大」とされる。−.07 はこの「小」の基準すら大きく下回る。</p>
        <div class="callout example"><b>効果は研究のやり方に依存した</b>：抑うつリアリズム効果は、次のような研究で出やすかった。
        <table>
          <tr><th>研究の特徴</th><th>効果量 d</th></tr>
          <tr><td>客観的基準を<strong>欠く</strong>研究</td><td>−.15</td></tr>
          <tr><td>客観的基準を<strong>もつ</strong>研究</td><td>−.03</td></tr>
          <tr><td><strong>自己報告式</strong>の抑うつ尺度</td><td>−.04</td></tr>
          <tr><td><strong>構造化面接</strong>による診断</td><td>+.16（むしろ逆方向）</td></tr>
        </table>
        効果の有無が測定方法に左右されること自体が、<strong>方法論的人工産物(methodological artifact)</strong>の可能性を示唆する。</div>
        <p>さらにこのメタ分析は、<strong>抑うつ者・非抑うつ者ともに肯定的バイアスを示す</strong>(ただし非抑うつ者でより大きい)ことを示した。すなわち「抑うつ者だけが正確」なのではなく、<strong>程度の差</strong>にすぎない、という像が浮かぶ。</p>
        <h3>Dev ら(2022):事前登録の直接再現は失敗した</h3>
        <p>決定打となったのが <em>Dev, Moore, Johnson, & Garrett(2022, Collabra: Psychology, 8(1), 38529)</em>、その名も <strong>"Sadder ≠ Wiser: Depressive Realism Is Not Robust to Replication"</strong> である。本研究は<strong>事前登録(preregistration)・高検出力(high-powered)</strong>の直接再現を、<strong>MTurk参加者246名・学部生134名</strong>という大標本で実施した。結果、<strong>抑うつ症状が統制の錯覚や過信と関連するという抑うつリアリズム効果は再現されなかった</strong>。</p>
        <div class="callout warn"><b>本モジュールの結論</b>：以上より、<strong>「抑うつ者では楽観バイアスが欠如する／抑うつ者のほうが正確だ」という主張を、確立した事実として無批判に提示してはならない</strong>。古典的な実証(Alloy & Abramson, 1979)と神経科学的知見(Korn/Garrett, 2014)は重要な歴史的・理論的貢献だが、メタ分析(Moore & Fresco, 2012)と事前登録再現(Dev et al., 2022)は効果の頑健性に否定的である。<strong>両論を併記して読む</strong>のが誠実な態度である。</div>
        <h3>楽観性バイアスそのものをめぐる論争との連動</h3>
        <p>この再現性問題は、楽観性バイアス研究全体の地殻変動と連動している。楽観性バイアスの存在自体に対しても、<a href="#/module/opt_controversy">統計的人工産物(statistical artifact)説</a>(Harris & Hahn, 2011)が提起されており、抑うつとの鏡像関係も、この大きな方法論的論争の只中にある。</p>
        <div class="callout tip"><b>学びの要点</b>：抑うつと楽観の鏡像関係は、「魅力的な物語」と「頑健な証拠」が必ずしも一致しないことを示す好例である。再現性危機を経た現在、私たちは古典を尊重しつつも、その効果量と再現可能性を冷静に問う姿勢を要する。</div>
      `,
      figure: `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="250" rx="14" fill="#f5f7fd"/>
        <text x="260" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">抑うつリアリズム効果はどれだけ大きいか</text>
        <text x="260" y="48" text-anchor="middle" font-size="10.5" fill="#5b6478">メタ分析（Moore &amp; Fresco, 2012）：75研究・7,305名</text>
        <line x1="60" y1="180" x2="490" y2="180" stroke="#1d2433" stroke-width="1.5"/>
        <text x="60" y="200" text-anchor="middle" font-size="10" fill="#5b6478">0</text>
        <line x1="180" y1="170" x2="180" y2="186" stroke="#5b6478" stroke-width="1"/>
        <text x="180" y="200" text-anchor="middle" font-size="10" fill="#5b6478">|d|=.2（小）</text>
        <line x1="310" y1="170" x2="310" y2="186" stroke="#5b6478" stroke-width="1"/>
        <text x="310" y="200" text-anchor="middle" font-size="10" fill="#5b6478">.5（中）</text>
        <line x1="440" y1="170" x2="440" y2="186" stroke="#5b6478" stroke-width="1"/>
        <text x="440" y="200" text-anchor="middle" font-size="10" fill="#5b6478">.8（大）</text>
        <rect x="60" y="100" width="42" height="80" fill="#e0566b" opacity="0.85"/>
        <text x="81" y="92" text-anchor="middle" font-size="12" font-weight="800" fill="#e0566b">d = −.07</text>
        <text x="81" y="225" text-anchor="middle" font-size="9.5" fill="#1d2433">全体の効果</text>
        <line x1="180" y1="100" x2="180" y2="180" stroke="#15c4a8" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="300" y="120" font-size="11" fill="#1d2433" font-weight="700">全体効果は「小」の基準すら下回る</text>
        <text x="300" y="140" font-size="10" fill="#5b6478">効果は測定方法に依存（人工産物の疑い）</text>
        <text x="300" y="158" font-size="10" fill="#5b6478">事前登録の直接再現は失敗（Dev et al., 2022）</text>
      </svg>`,
      figcaption: "メタ分析（Moore & Fresco, 2012）が示した抑うつリアリズム効果の大きさ。全体の効果量 Cohen's d = −.07 は「小」の目安(.2)すら下回る。効果は測定方法に依存し、事前登録の直接再現(Dev et al., 2022)でも再現されなかった。",
      terms: [
        { term: "再現性危機(replication crisis)", def: "心理学の多くの古典的知見が追試で再現されない問題。" },
        { term: "Moore & Fresco(2012)", def: "75研究・7,305名のメタ分析。抑うつリアリズム効果は全体でd=−.07と小。" },
        { term: "効果量(Cohen's d)", def: "標準化された差の大きさ。|d|=.2小・.5中・.8大が目安。" },
        { term: "方法論的人工産物", def: "効果が測定方法に依存して生じる見かけ上の現象。真の効果ではない可能性。" },
        { term: "Dev et al.(2022)", def: "事前登録・高検出力(N=380)の直接再現で抑うつリアリズムを再現できず。" },
        { term: "事前登録(preregistration)", def: "仮説と解析計画を事前に公開し恣意的分析を防ぐ手続き。" },
        { term: "高検出力(high-powered)", def: "十分な標本数で真の効果を検出する確率を高めた研究設計。" },
        { term: "両論併記", def: "古典的知見と再現失敗の双方を提示する誠実な記述態度。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "Alloy & Abramson(1979)の随伴性判断課題で観察された主要な結果はどれか。", choices: ["抑うつ者も非抑うつ者も統制力を等しく過大評価した", "非抑うつ者は統制力を過大評価し、抑うつ者はより正確に判断した", "抑うつ者のほうが統制力を過大評価した", "両群とも統制力を過小評価した"], answer: 1, explain: "実際にはボタン押しとライト点灯が無関係でも、非抑うつ者は統制の幻想を示し、抑うつ者は実際の随伴性に近い正確な判断をした。これが「悲しいほど賢明」仮説の起点である。", difficulty: 1 },
    { type: "mcq", stem: "「悲しいほど賢明(sadder but wiser)」仮説の含意として最も適切なのはどれか。", choices: ["抑うつ者は記憶力が優れている", "抑うつ者のほうが現実を正確に認識し、健常者の認知こそ肯定方向に歪んでいるという見方", "抑うつは知能と無関係である", "健常者のほうが悲観的である"], answer: 1, explain: "この仮説は、健常者の認知が過度に肯定的に歪む一方で、抑うつ者は現実をありのままに見るとする。楽観性バイアスを「健常者側の特徴」と位置づける見方である。", difficulty: 1 },
    { type: "mcq", stem: "本モジュールで「鏡像(mirror image)」という比喩が指しているのは何か。", choices: ["抑うつ者は鏡を見ると症状が悪化すること", "健常者が示す楽観性バイアスが、抑うつ者では欠如・反転すること", "脳の左右半球が対称であること", "自己評価が他者評価の正反対になること"], answer: 1, explain: "健常者が肯定方向に歪み、抑うつ者ではその歪みが欠如・反転する——この対比的関係が「鏡像」と呼ばれる。", difficulty: 1 },
    { type: "mcq", stem: "Korn ら(2014, Psychological Medicine)の更新課題の対象と主要結果として正しいのはどれか。", choices: ["健常者のみを対象とし、全員が楽観的更新を示した", "MDD患者18名・健常者19名を対象とし、患者では楽観的更新バイアスが欠如し症状が重いほど悲観方向へ反転した", "MDD患者では楽観的更新がむしろ強まった", "投薬の有無は結果に全く影響しなかった"], answer: 1, explain: "Korn et al.(2014)は健常者の楽観的更新バイアスが、MDD患者では全体として欠如し、症状が重いほど悲観的更新パターン(反転)を示すことを報告した。", difficulty: 2 },
    { type: "mcq", stem: "Garrett ら(2014, Frontiers in Human Neuroscience)の研究で「健常な精神的健康」と関連していたのはどれか。", choices: ["良い知らせの神経符号化の減弱", "悪い知らせの神経符号化の相対的減弱", "両方の知らせの符号化の完全な消失", "推定誤差を全く符号化しないこと"], answer: 1, explain: "健常な精神的健康は『悪い知らせの神経符号化の相対的減弱』と関連していた。健常者の楽観は悪い知らせが脳で弱くしか符号化されないことで維持される。", difficulty: 2 },
    { type: "mcq", stem: "「バラ色の眼鏡(rose-tinted glasses)を失う」という比喩が表しているのはどれか。", choices: ["抑うつ者は色覚異常を伴う", "健常者は悪い知らせの符号化が弱く楽観を保つが、抑うつ者はその弱さを失い悪い知らせをまともに受け取る", "健常者は良い知らせも悪い知らせも無視する", "抑うつ者は良い知らせだけを取り込む"], answer: 1, explain: "Garrett et al.(2014)によれば、健常者の楽観は悪い知らせの神経符号化が弱いことで維持される。抑うつ者ではこの『弱さ』が失われ、悪い知らせを十分に取り込んでしまう。", difficulty: 2 },
    { type: "mcq", stem: "Garrett ら(2014)の研究で、抑うつ者の『非バイアス的(unbiased)更新』を媒介していたのは何か。", choices: ["良い知らせの符号化のみが強いこと", "良い知らせ・悪い知らせ双方の推定誤差を強く神経符号化すること", "推定誤差をいっさい符号化しないこと", "悪い知らせの符号化だけが弱いこと"], answer: 1, explain: "抑うつにおける非バイアス的更新は、良い知らせ・悪い知らせ双方の推定誤差の強い神経符号化に媒介されていた。一方、健常な精神的健康は悪い知らせの符号化の相対的減弱と関連していた。", difficulty: 3 },
    { type: "mcq", stem: "Moore & Fresco(2012)のメタ分析が報告した抑うつリアリズム効果の全体的な大きさはどれか。", choices: ["Cohen's d = −.07 と、非常に小さい", "Cohen's d = −.80 と、大きい", "Cohen's d = +.50 と、中程度で逆方向", "効果量は算出されなかった"], answer: 0, explain: "75研究・7,305名のメタ分析で、抑うつリアリズム効果は全体として d=−.07 と、効果量の目安で『小』(.2)すら下回る非常に小さいものであった。", difficulty: 2 },
    { type: "mcq", stem: "Moore & Fresco(2012)のメタ分析で、抑うつリアリズム効果が『出やすかった』研究の特徴はどれか。", choices: ["客観的基準をもち、構造化面接で診断した研究", "客観的基準を欠き、自己報告式の抑うつ尺度を用いた研究", "大標本で事前登録された研究", "fMRIを用いた研究"], answer: 1, explain: "客観的基準を欠く研究(d=−.15 vs 基準ありで−.03)や自己報告式尺度を用いた研究(d=−.04 vs 構造化面接で+.16)で効果が出やすく、方法論的人工産物の可能性が示唆された。", difficulty: 3 },
    { type: "mcq", stem: "Dev ら(2022, Collabra: Psychology)の研究の最も重要な特徴と結論はどれか。", choices: ["小標本の探索的研究で、抑うつリアリズムを強く支持した", "事前登録・高検出力の直接再現で、抑うつリアリズム効果を再現できなかった", "新しい神経指標を発見した", "抑うつ者のほうが過信が強いと結論した"], answer: 1, explain: "Dev et al.(2022)『Sadder ≠ Wiser』は、事前登録・高検出力(MTurk246名・学部生134名)の直接再現で、抑うつ症状が統制の錯覚や過信と関連するという効果を再現できなかった。", difficulty: 2 },
    { type: "mcq", stem: "再現性危機を踏まえ、『抑うつ者では楽観バイアスが欠如する』というテーゼの扱い方として、本モジュールが推奨する態度はどれか。", choices: ["確立した事実として無批判に提示してよい", "完全な誤りとして棄却すべきである", "古典的知見と再現失敗の双方を併記し、頑健性に留保をつけて読む", "神経科学的知見だけを信頼すればよい"], answer: 2, explain: "古典的実証(Alloy & Abramson, 1979)や神経科学(Korn/Garrett, 2014)は重要だが、メタ分析(Moore & Fresco, 2012)と事前登録再現(Dev et al., 2022)は頑健性に否定的である。両論を併記するのが誠実な態度である。", difficulty: 2 },
    { type: "mcq", stem: "Moore & Fresco(2012)のメタ分析が示した『抑うつ者だけが正確なのではない』という像として最も適切なのはどれか。", choices: ["抑うつ者だけが肯定的バイアスを示した", "抑うつ者・非抑うつ者ともに肯定的バイアスを示し、非抑うつ者でより大きかった", "どちらの群もバイアスを全く示さなかった", "非抑うつ者だけがバイアスを示した"], answer: 1, explain: "メタ分析によれば、抑うつ者・非抑うつ者ともに肯定的バイアスを示すが、非抑うつ者でより大きかった。すなわち両群の違いは『正確 vs 不正確』ではなく程度の差にすぎない。", difficulty: 3 },
    { type: "mcq", stem: "抑うつとの鏡像関係をめぐる議論が連動している、楽観性バイアス研究全体の方法論的論争はどれか。", choices: ["気質的楽観主義の遺伝率をめぐる論争", "Harris & Hahn(2011)による統計的人工産物説をめぐる論争", "扁桃体の体積測定法をめぐる論争", "LOT尺度の翻訳精度をめぐる論争"], answer: 1, explain: "抑うつリアリズムの再現性問題は、楽観性バイアスの存在自体を問う統計的人工産物説(Harris & Hahn, 2011)と連動し、より大きな方法論的論争の只中にある。", difficulty: 3 },
  ],
});
