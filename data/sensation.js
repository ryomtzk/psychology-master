/* ============================================================
   感覚・知覚  (sensation)
   ============================================================ */
PsychApp.registerModule({
  id: "sensation",
  title: "感覚・知覚",
  emoji: "👁️",
  category: "biocog",
  tagline: "精神物理学・視覚・聴覚・諸感覚・知覚の体制化・奥行きと恒常性・錯視",
  overview: `<p><strong>感覚（sensation）</strong>は感覚器官が物理的刺激を神経信号へ変換する過程であり、<strong>知覚（perception）</strong>はその信号を脳が組織化・解釈して意味づける過程である。本分野では、刺激と感覚の量的関係を扱う<em>精神物理学</em>から始め、視覚・聴覚・諸感覚の仕組み、ゲシュタルトの体制化、奥行き・恒常性・錯視へと進む。「外界をありのまま映す」のではなく、<strong>脳が能動的に世界を構成している</strong>という視点が一貫したテーマである。</p>`,
  lessons: [
    {
      title: "感覚と知覚の区別 — 精神物理学",
      body: `
        <p>外界の情報が心に届くには二段階ある。<strong>感覚（sensation）</strong>は、目・耳・皮膚などの<em>感覚受容器</em>が光・音・圧などの物理エネルギーを受け取り、神経インパルスへ変換する過程である。この変換を<strong>転換（transduction／感覚変換）</strong>という。一方<strong>知覚（perception）</strong>は、脳がその信号を選択・組織化・解釈し、意味あるまとまり（顔・メロディ・物体）として経験する過程である。</p>
        <div class="callout key"><b>区別のしかた</b>：感覚は「ボトムアップ（刺激→脳）」の生の入力、知覚は「それを解釈して意味を与える」働き。網膜に映る二次元の光のパターン（感覚）から「机の上のコップ」（知覚）が生まれる。</div>
        <h3>精神物理学 — 刺激と感覚の関係を測る</h3>
        <p><strong>精神物理学（psychophysics）</strong>は、物理刺激の強さと、それによって生じる感覚の大きさとの量的関係を研究する。創始者は <em>グスタフ・フェヒナー（Fechner）</em>で、師である <em>エルンスト・ウェーバー（Weber）</em>の知見を発展させた。</p>
        <h4>絶対閾（absolute threshold）</h4>
        <p>刺激を50%の確率で検出できる最小の強度。例：「静かな部屋で約6m先の腕時計の音」「晴れた夜に約48km先のろうそくの炎」がよく挙げられる。閾値より弱く意識に上らない刺激を<strong>閾下刺激（subliminal）</strong>という。</p>
        <h4>弁別閾と丁度可知差異（JND）</h4>
        <p>二つの刺激の違いを50%の確率で検出できる最小の差を<strong>弁別閾（difference threshold）</strong>、またはその差そのものを<strong>丁度可知差異（just noticeable difference, JND）</strong>という。</p>
        <h4>ウェーバーの法則</h4>
        <p><strong>ウェーバーの法則（Weber's law）</strong>：JNDは元の刺激の強さに比例する。すなわち「JND ÷ 標準刺激」は一定（ウェーバー比）。重さなら約2%なので、100gでは約2gの差で気づくが、1000gでは約20gの差が必要になる。</p>
        <h4>フェヒナーの法則</h4>
        <p><strong>フェヒナーの法則（Fechner's law）</strong>：感覚の大きさは刺激強度の<strong>対数</strong>に比例する。刺激が等比的に増えても感覚は等差的にしか増えない（刺激が強いほど鈍くなる）。</p>
        <h3>信号検出理論</h3>
        <p><strong>信号検出理論（signal detection theory, SDT）</strong>は、検出が「固定した閾値」ではなく、<em>感度</em>と<em>判断基準（バイアス）</em>の両方に依存すると考える。雑音の中の弱い信号を検出する場面では、反応は4種に分かれる。</p>
        <table>
          <tr><th></th><th>信号あり</th><th>信号なし</th></tr>
          <tr><td><b>「あり」と反応</b></td><td>ヒット（hit）</td><td>誤警報（false alarm）</td></tr>
          <tr><td><b>「なし」と反応</b></td><td>ミス（miss）</td><td>正棄却（correct rejection）</td></tr>
        </table>
        <div class="callout tip">慎重な人は誤警報を減らすが見逃し（ミス）が増える。逆に「念のため」と判断基準を緩めるとヒットも誤警報も増える。動機・期待・疲労が基準を動かす。</div>
        <h3>順応と感覚遮断</h3>
        <p><strong>感覚順応（sensory adaptation）</strong>：一定して変化しない刺激への感受性が時間とともに低下すること。プールに入ると最初は冷たいが慣れる、服を着ている感覚が消える、などが例。変化する情報こそ重要だという適応的な仕組みである。<strong>感覚遮断（sensory deprivation）</strong>：刺激入力を極端に減らすと、幻覚・思考の混乱・不快感などが生じる。脳が一定の刺激を必要とすることを示す。</p>
      `,
      figure: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="260" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">絶対閾（心理測定関数）</text>
        <line x1="55" y1="160" x2="490" y2="160" stroke="#1d2433" stroke-width="1.5"/>
        <line x1="55" y1="160" x2="55" y2="40" stroke="#1d2433" stroke-width="1.5"/>
        <text x="270" y="190" text-anchor="middle" font-size="12" fill="#5b6478">刺激強度 →</text>
        <text x="20" y="100" font-size="12" fill="#5b6478" transform="rotate(-90 20 100)">検出率(%)</text>
        <path d="M55,158 C160,156 200,150 250,100 C300,50 360,46 490,44" fill="none" stroke="#5b6cf0" stroke-width="2.5"/>
        <line x1="55" y1="100" x2="250" y2="100" stroke="#e0566b" stroke-width="1" stroke-dasharray="4 3"/>
        <line x1="250" y1="100" x2="250" y2="160" stroke="#e0566b" stroke-width="1" stroke-dasharray="4 3"/>
        <circle cx="250" cy="100" r="4" fill="#e0566b"/>
        <text x="50" y="104" text-anchor="end" font-size="11" fill="#e0566b">50%</text>
        <text x="258" y="150" font-size="11" fill="#e0566b">絶対閾</text>
      </svg>`,
      figcaption: "絶対閾は「刺激を50%の確率で検出できる」強度として定義される。閾値は急なオン・オフではなく緩やかな確率曲線になる。",
      terms: [
        { term: "感覚 / 知覚", def: "感覚は受容器による物理刺激の神経信号への変換。知覚はそれを脳が組織化・解釈する過程。" },
        { term: "転換（感覚変換）", def: "物理エネルギーを神経インパルスへ変換すること（transduction）。" },
        { term: "絶対閾", def: "刺激を50%の確率で検出できる最小の強度。" },
        { term: "丁度可知差異（JND）", def: "二刺激の差を50%の確率で検出できる最小の差。弁別閾。" },
        { term: "ウェーバーの法則", def: "JNDは標準刺激の強さに比例する（JND/標準刺激＝一定）。" },
        { term: "フェヒナーの法則", def: "感覚の大きさは刺激強度の対数に比例する。" },
        { term: "信号検出理論", def: "検出を感度と判断基準で説明する理論。ヒット・誤警報・ミス・正棄却。" },
        { term: "感覚順応", def: "変化しない刺激への感受性が時間とともに低下する現象。" },
      ],
    },
    {
      title: "視覚 — 光・眼・色覚",
      body: `
        <p>視覚は最もよく研究されてきた感覚である。刺激は<strong>光（電磁波）</strong>で、波長が色（短波長＝青紫、長波長＝赤）に、振幅（強度）が明るさに対応する。ヒトが見えるのは約380〜750nmの可視光である。</p>
        <h3>眼の構造と光の経路</h3>
        <p>光は次の順で眼に入る。<strong>角膜（cornea）</strong>で大きく屈折→<strong>瞳孔（pupil）</strong>（虹彩が大きさを調節）→<strong>水晶体（lens）</strong>で焦点調節（<em>調節：accommodation</em>、近くを見るとき厚くなる）→眼球内を通り<strong>網膜（retina）</strong>に倒立像を結ぶ。</p>
        <h4>網膜の光受容器 — 桿体と錐体</h4>
        <p>網膜には2種類の光受容細胞がある。</p>
        <table>
          <tr><th></th><th>桿体（rod）</th><th>錐体（cone）</th></tr>
          <tr><td>数</td><td>約1億2千万個</td><td>約600万個</td></tr>
          <tr><td>感度</td><td>高い（暗所で働く）</td><td>低い（明所で働く）</td></tr>
          <tr><td>色</td><td>無色（明暗のみ）</td><td>色を弁別</td></tr>
          <tr><td>分布</td><td>網膜周辺に多い</td><td>中心窩に集中</td></tr>
        </table>
        <p><strong>中心窩（fovea）</strong>は錐体が密集し最も視力が高い点。一方、視神経が眼球を出る部位には受容器がなく像が結べない<strong>盲点（blind spot）</strong>がある（通常は気づかない）。</p>
        <h4>視覚経路</h4>
        <p>光受容器→双極細胞→<strong>神経節細胞</strong>（その軸索が視神経）→視交叉→<strong>外側膝状体（LGN, 視床の一部）</strong>→後頭葉の<strong>第一次視覚野（V1）</strong>へ。ヒューベルとウィーゼル（Hubel & Wiesel）は視覚野に特定の傾きの線分に反応する<strong>特徴検出器（feature detector）</strong>があることを示した。</p>
        <h3>色覚の二大理論</h3>
        <h4>三色説（ヤング・ヘルムホルツ説）</h4>
        <p><strong>三色説（trichromatic theory）</strong>：網膜には<strong>赤・緑・青</strong>に最も反応する3種の錐体があり、その興奮の組み合わせで全ての色が生じる。<em>網膜レベル</em>で正しい。3種のうちの欠損・異常が大半の色覚多様性（いわゆる赤緑色覚異常）を説明する。</p>
        <h4>反対色説（ヘリングの説）</h4>
        <p><strong>反対色説（opponent-process theory）</strong>：色は<strong>赤−緑・青−黄・白−黒</strong>の3対の拮抗系で処理される。赤を凝視した後に緑の<em>残像（補色残像）</em>が見える現象や、「赤みがかった緑」が存在しないことを説明する。<em>網膜より後（神経節細胞以降）</em>のレベルで正しい。</p>
        <div class="callout key">三色説と反対色説は対立ではなく<strong>処理段階が異なる相補的な理論</strong>である。網膜では三色説的に、それ以降では反対色説的に処理される（二段階説）。</div>
        <h3>明順応と暗順応</h3>
        <ul>
          <li><strong>暗順応（dark adaptation）</strong>：暗所に入ると最初は見えないが、徐々に見えるようになる。錐体が先に（数分で）、続いて桿体がゆっくり（20〜30分）感度を上げる。完全な暗順応にはかなり時間がかかる。</li>
          <li><strong>明順応（light adaptation）</strong>：暗所から明所へ出るとまぶしいが、数分で慣れる（暗順応より速い）。</li>
        </ul>
      `,
      figure: `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="230" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">眼の構造</text>
        <path d="M70,130 C70,60 280,40 360,130 C280,220 70,200 70,130 Z" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <path d="M70,130 C70,95 95,80 110,80 C125,80 130,180 110,180 C95,180 70,165 70,130 Z" fill="#fff" stroke="#5b6cf0" stroke-width="2"/>
        <ellipse cx="110" cy="130" rx="16" ry="40" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <line x1="95" y1="105" x2="95" y2="155" stroke="#1d2433" stroke-width="3"/>
        <path d="M355,130 l8,-8 m-8,8 l8,8" stroke="#f0a020" stroke-width="2"/>
        <circle cx="350" cy="130" r="3" fill="#e0566b"/>
        <g font-size="11" fill="#1d2433">
          <text x="78" y="70">角膜</text>
          <text x="60" y="200" text-anchor="middle">虹彩/瞳孔</text>
          <text x="120" y="200">水晶体</text>
          <text x="300" y="60">網膜</text>
          <text x="360" y="118" fill="#e0566b">中心窩</text>
          <text x="310" y="170" fill="#f0a020">視神経/盲点</text>
        </g>
        <line x1="0" y1="130" x2="70" y2="130" stroke="#f0a020" stroke-width="1.5" stroke-dasharray="5 3"/>
      </svg>`,
      figcaption: "光は角膜・瞳孔・水晶体を通って網膜に像を結ぶ。中心窩は最も視力が高く、視神経の出口が盲点となる。",
      terms: [
        { term: "桿体（rod）", def: "暗所で働き明暗を捉える光受容器。色は弁別しない。網膜周辺に多い。" },
        { term: "錐体（cone）", def: "明所で働き色を弁別する光受容器。中心窩に集中。" },
        { term: "中心窩（fovea）", def: "錐体が密集し最も視力が高い網膜の中心点。" },
        { term: "盲点（blind spot）", def: "視神経の出口で受容器がなく像が結べない部位。" },
        { term: "外側膝状体（LGN）", def: "視床にある視覚の中継核。網膜から第一次視覚野へつなぐ。" },
        { term: "三色説", def: "赤・緑・青の3種の錐体の組み合わせで色を説明する説（ヤング・ヘルムホルツ）。" },
        { term: "反対色説", def: "赤−緑・青−黄・白−黒の拮抗系で色を説明する説（ヘリング）。補色残像を説明。" },
        { term: "暗順応", def: "暗所で感度が徐々に上がる過程。桿体の順応に20〜30分を要する。" },
      ],
    },
    {
      title: "聴覚 — 音・耳・音の高さの理論",
      body: `
        <p>聴覚の刺激は<strong>音波（空気の圧力変化）</strong>である。物理的性質が聴覚経験に対応する。</p>
        <table>
          <tr><th>物理的性質</th><th>聴覚経験</th><th>単位など</th></tr>
          <tr><td><b>振幅（強度）</b></td><td>音の<strong>大きさ（loudness）</strong></td><td>デシベル（dB）</td></tr>
          <tr><td><b>周波数</b></td><td>音の<strong>高さ（pitch）</strong></td><td>ヘルツ（Hz）。ヒトは約20〜20000Hz</td></tr>
          <tr><td><b>波形の複雑さ</b></td><td>音色（timbre）</td><td>—</td></tr>
        </table>
        <h3>耳の構造と音の経路</h3>
        <ul>
          <li><strong>外耳</strong>：耳介で音を集め、外耳道を通って<strong>鼓膜</strong>を振動させる。</li>
          <li><strong>中耳</strong>：3つの<strong>耳小骨（ツチ骨・キヌタ骨・アブミ骨）</strong>が鼓膜の振動を増幅して内耳へ伝える。</li>
          <li><strong>内耳</strong>：渦巻き状の<strong>蝸牛（cochlea）</strong>。内部のリンパ液が振動し、<strong>基底膜（basilar membrane）</strong>上の<strong>有毛細胞（hair cell）</strong>が刺激されて神経信号に転換する。信号は聴神経→脳幹→視床→側頭葉の聴覚野へ。</li>
        </ul>
        <h3>音の高さ（pitch）をどう符号化するか</h3>
        <p>「高さ」の知覚を説明する二つの理論があり、現在は<strong>周波数帯によって役割分担している</strong>と考えられている。</p>
        <h4>場所説（place theory）</h4>
        <p>ヘルムホルツに由来。<strong>基底膜のどの場所が最も振動するか</strong>で高さが決まる。<em>ベケシー（von Békésy）</em>が進行波を観察して支持した。<strong>高音</strong>は蝸牛の入口（基部）、低音は奥（頂部）を強く揺らす。高い音の説明に適する。</p>
        <h4>時間説（周波数説, frequency theory）</h4>
        <p>聴神経の<strong>発火頻度が音波の周波数に一致する</strong>ことで高さが符号化される。神経の発火上限（約1000Hz）を超える音は、<strong>斉射説（volley principle）</strong>＝複数神経が交代で発火して補う。<strong>低音</strong>の説明に適する。</p>
        <div class="callout key"><b>まとめ</b>：低い音は時間（周波数）説、高い音は場所説、中間は両方が関与する、という<strong>二重の仕組み</strong>で説明される。</div>
        <h3>音源定位</h3>
        <p>音がどこから来るかは主に左右の耳の差で判断する。<strong>両耳間時間差（ITD）</strong>＝近い耳に先に届く、<strong>両耳間強度差（ILD）</strong>＝頭が影になり遠い耳では小さくなる。正面・真後ろなど左右差が小さい方向は定位が難しく、頭を動かして補う。</p>
        <h3>難聴の種類</h3>
        <ul>
          <li><strong>伝音難聴（conductive）</strong>：外耳・中耳の問題で振動が伝わらない（鼓膜損傷、耳小骨の障害など）。補聴器が有効なことが多い。</li>
          <li><strong>感音難聴（sensorineural）</strong>：蝸牛の有毛細胞や聴神経の損傷。加齢・大音量・騒音曝露による。<strong>有毛細胞は再生しない</strong>。重度では人工内耳が用いられる。</li>
        </ul>
      `,
      figure: `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="240" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">耳の構造</text>
        <line x1="155" y1="40" x2="155" y2="210" stroke="#c9cfe0" stroke-width="1" stroke-dasharray="4 3"/>
        <line x1="245" y1="40" x2="245" y2="210" stroke="#c9cfe0" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="90" y="50" text-anchor="middle" font-size="11" fill="#5b6478">外耳</text>
        <text x="200" y="50" text-anchor="middle" font-size="11" fill="#5b6478">中耳</text>
        <text x="330" y="50" text-anchor="middle" font-size="11" fill="#5b6478">内耳</text>
        <path d="M30,90 C20,130 25,170 60,170 L60,110 Z" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <rect x="60" y="110" width="95" height="22" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="1.5"/>
        <line x1="155" y1="100" x2="155" y2="145" stroke="#e0566b" stroke-width="3"/>
        <text x="150" y="165" text-anchor="end" font-size="10" fill="#e0566b">鼓膜</text>
        <g fill="#f0a020" stroke="#b97000"><circle cx="175" cy="110" r="7"/><circle cx="200" cy="125" r="7"/><circle cx="222" cy="112" r="7"/></g>
        <text x="200" y="160" text-anchor="middle" font-size="10" fill="#b97000">耳小骨</text>
        <path d="M280,120 m0,-30 a30,30 0 1 1 -0.1,0 M280,120 m0,-18 a18,18 0 1 0 0.1,0" fill="none" stroke="#15c4a8" stroke-width="3"/>
        <text x="330" y="170" text-anchor="middle" font-size="10" fill="#0e8e79">蝸牛</text>
        <path d="M255,120 q15,30 30,5" fill="none" stroke="#15c4a8" stroke-width="2"/>
        <line x1="345" y1="120" x2="430" y2="120" stroke="#1d2433" stroke-width="1.5" marker-end="url(#earar)"/>
        <defs><marker id="earar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1d2433"/></marker></defs>
        <text x="420" y="112" text-anchor="end" font-size="10" fill="#1d2433">聴神経へ</text>
      </svg>`,
      figcaption: "外耳が音を集め、中耳の耳小骨が増幅し、内耳の蝸牛で有毛細胞が神経信号へ転換する。",
      terms: [
        { term: "周波数 / 振幅", def: "周波数（Hz）は音の高さ、振幅は音の大きさ（dB）に対応する。" },
        { term: "蝸牛（cochlea）", def: "内耳の渦巻き器官。基底膜と有毛細胞があり音を神経信号に転換する。" },
        { term: "有毛細胞", def: "基底膜上の聴覚受容細胞。損傷すると再生せず感音難聴の原因となる。" },
        { term: "場所説", def: "基底膜のどの場所が振動するかで高さを符号化する説。高音に適する。" },
        { term: "時間説（周波数説）", def: "聴神経の発火頻度が周波数に一致して高さを符号化する説。低音に適する。斉射説で補う。" },
        { term: "音源定位", def: "両耳間時間差（ITD）と強度差（ILD）で音源方向を判断すること。" },
        { term: "伝音難聴", def: "外耳・中耳の問題で振動伝達が妨げられる難聴。" },
        { term: "感音難聴", def: "蝸牛の有毛細胞や聴神経の損傷による難聴。加齢・騒音による。" },
      ],
    },
    {
      title: "その他の感覚 — 化学・皮膚・身体感覚",
      body: `
        <p>視覚・聴覚以外にも、生存に不可欠な感覚が複数ある。</p>
        <h3>化学感覚 — 嗅覚と味覚</h3>
        <h4>嗅覚（olfaction）</h4>
        <p>空気中の化学物質が鼻腔上部の<strong>嗅上皮の嗅受容器</strong>に結合し、<strong>嗅球</strong>を経て脳へ伝わる。嗅覚は<em>視床を経由せず</em>直接<strong>大脳辺縁系（扁桃体・海馬）</strong>とつながるため、においが情動や記憶を強く喚起する（プルースト効果）。ヒトは数千種以上のにおいを識別できる。</p>
        <h4>味覚（gustation）</h4>
        <p>舌などの<strong>味蕾（taste bud）</strong>にある味細胞が化学物質を受容する。基本味は<strong>甘味・塩味・酸味・苦味・うま味（umami）</strong>の5つ。辛味は痛覚・温度感覚であり基本味ではない。風味（flavor）は味覚と嗅覚（および食感）の統合で生じる。</p>
        <h3>皮膚感覚（体性感覚）</h3>
        <p>皮膚には独立した複数の感覚がある：<strong>触（圧）・温・冷・痛</strong>。これらは別々の受容器で処理される。温点・冷点・圧点・痛点は皮膚上に点在し、密度は部位で異なる（指先は密、背中は疎）。</p>
        <h4>痛みのゲートコントロール理論</h4>
        <p><em>メルザックとウォール（Melzack & Wall）</em>の<strong>ゲートコントロール理論（gate-control theory）</strong>：脊髄に痛み信号を脳へ通すか遮るかの「ゲート」があり、太い神経線維の刺激（さする・なでる）や脳からの下行性信号（注意・情動・期待）がゲートを閉じて痛みを抑える。痛む所をさすると和らぐこと、スポーツ中に痛みを感じにくいことを説明する。</p>
        <div class="callout note">痛みは純粋な感覚ではなく、注意・予期・情動・文化に強く影響される。プラセボ（偽薬）による鎮痛もこの調節系を反映する。</div>
        <h3>身体の感覚 — 前庭感覚と自己受容感覚</h3>
        <ul>
          <li><strong>前庭感覚（vestibular sense）</strong>：内耳の<strong>三半規管と耳石器</strong>が、頭の傾きと加速度を感知し、平衡（バランス）を保つ。乱れると乗り物酔いやめまいが生じる。</li>
          <li><strong>自己受容感覚（固有感覚, proprioception）</strong>：筋・腱・関節の受容器が、身体各部の位置や動きを感知する。目を閉じても自分の手の位置がわかるのはこの働きである（運動感覚）。</li>
        </ul>
        <h3>共感覚（synesthesia）</h3>
        <p>ある感覚刺激が、別の感覚を自動的・恒常的に引き起こす現象。例：「文字や数字に色が見える（書記素—色共感覚）」「音に色を感じる」。比較的まれだが実在し、異なる感覚野の結合が関与すると考えられる。</p>
      `,
      terms: [
        { term: "嗅覚", def: "化学物質を嗅受容器で受容。視床を経ず辺縁系と直結し情動・記憶を喚起する。" },
        { term: "基本味", def: "甘味・塩味・酸味・苦味・うま味の5つ。辛味は痛覚であり含まれない。" },
        { term: "皮膚感覚", def: "触（圧）・温・冷・痛の4種が別々の受容器で処理される体性感覚。" },
        { term: "ゲートコントロール理論", def: "脊髄のゲートが痛み信号を調節するとする説（メルザック・ウォール）。" },
        { term: "前庭感覚", def: "内耳の三半規管・耳石器が平衡と頭の動きを感知する感覚。" },
        { term: "自己受容感覚（固有感覚）", def: "筋・腱・関節の受容器が身体各部の位置や動きを感知する感覚。" },
        { term: "共感覚", def: "ある感覚刺激が別の感覚を自動的に引き起こす現象（例：文字に色）。" },
      ],
    },
    {
      title: "知覚の体制化 — ゲシュタルトの法則",
      body: `
        <p>感覚の生の入力は、脳によって意味あるまとまりへと<strong>体制化（organization）</strong>される。<strong>ゲシュタルト心理学</strong>（ヴェルトハイマー、ケーラー、コフカ）は「<strong>全体は部分の総和以上である</strong>」とし、知覚が要素の寄せ集めではなく構造化されたまとまりとして成立すると主張した。</p>
        <h3>図と地の分凝</h3>
        <p>知覚の最も基本的な体制化は、対象（<strong>図, figure</strong>）と背景（<strong>地, ground</strong>）の分離である。<em>ルビンの杯（盃と顔）</em>のように、図と地が反転する曖昧図形では、同じ刺激が二通りに知覚される（多義図形）。図は輪郭を持ち前に出て、地は背後に広がって見える。</p>
        <h3>群化の法則（grouping）</h3>
        <p>要素はいくつかの原理に従ってまとめられる。</p>
        <table>
          <tr><th>法則</th><th>内容</th></tr>
          <tr><td><b>近接（proximity）</b></td><td>近くにあるものを一つのまとまりと見る。</td></tr>
          <tr><td><b>類同（similarity）</b></td><td>形・色・大きさが似たものをまとめて見る。</td></tr>
          <tr><td><b>閉合（closure）</b></td><td>欠けた部分を補い、閉じた完全な図形として見る。</td></tr>
          <tr><td><b>連続（good continuation）</b></td><td>滑らかに連続する線・方向を一続きと見る。</td></tr>
          <tr><td><b>共通運命（common fate）</b></td><td>同じ方向に動くものを一群と見る。</td></tr>
          <tr><td><b>良い形 / プレグナンツ</b></td><td>できるだけ単純・規則的・対称的なまとまりで知覚する。</td></tr>
        </table>
        <div class="callout key"><b>プレグナンツの法則（Prägnanz）</b>はゲシュタルト諸法則を貫く上位原理で、知覚系は与えられた刺激を「最も単純で安定した（良い）形」へとまとめようとする、とする。</div>
        <div class="callout example"><b>身近な例</b>：散らばった点が等間隔の列に並ぶと「行」や「列」に見える（近接・連続）。点描画や星座も、要素を群化して一つの像にする働きの産物である。</div>
      `,
      figure: `<svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="250" y="20" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">ゲシュタルトの群化の法則</text>
        <!-- proximity -->
        <text x="80" y="55" text-anchor="middle" font-size="11" font-weight="700">近接</text>
        <g fill="#5b6cf0"><circle cx="40" cy="80" r="6"/><circle cx="55" cy="80" r="6"/><circle cx="85" cy="80" r="6"/><circle cx="100" cy="80" r="6"/><circle cx="130" cy="80" r="6"/></g>
        <!-- similarity -->
        <text x="250" y="55" text-anchor="middle" font-size="11" font-weight="700">類同</text>
        <g><circle cx="200" cy="80" r="6" fill="#5b6cf0"/><circle cx="220" cy="80" r="6" fill="#e0566b"/><circle cx="240" cy="80" r="6" fill="#5b6cf0"/><circle cx="260" cy="80" r="6" fill="#e0566b"/><circle cx="280" cy="80" r="6" fill="#5b6cf0"/><circle cx="300" cy="80" r="6" fill="#e0566b"/></g>
        <!-- closure -->
        <text x="420" y="55" text-anchor="middle" font-size="11" font-weight="700">閉合</text>
        <path d="M395,68 A22,22 0 1 1 393,68" fill="none" stroke="#15c4a8" stroke-width="4"/>
        <!-- continuity -->
        <text x="110" y="150" text-anchor="middle" font-size="11" font-weight="700">連続</text>
        <path d="M40,200 C90,160 130,160 180,200" fill="none" stroke="#5b6cf0" stroke-width="3"/>
        <path d="M40,165 C90,205 130,205 180,165" fill="none" stroke="#f0a020" stroke-width="3"/>
        <!-- good form -->
        <text x="360" y="150" text-anchor="middle" font-size="11" font-weight="700">良い形（対称・単純）</text>
        <rect x="300" y="165" width="50" height="45" rx="6" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <circle cx="400" cy="187" r="24" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
      </svg>`,
      figcaption: "近接・類同・閉合・連続などの法則により、ばらばらの要素が一つのまとまりとして知覚される。",
      terms: [
        { term: "体制化", def: "感覚の生入力を意味あるまとまりへ構造化する知覚の働き。" },
        { term: "図と地", def: "対象（図）と背景（地）の分離。曖昧図形では反転しうる。" },
        { term: "近接の法則", def: "空間的に近い要素を一つのまとまりと知覚する原理。" },
        { term: "類同の法則", def: "形・色などが似た要素をまとめて知覚する原理。" },
        { term: "閉合の法則", def: "欠けた部分を補い、閉じた完全な図形として知覚する原理。" },
        { term: "共通運命の法則", def: "同じ方向に動く要素を一群と知覚する原理。" },
        { term: "プレグナンツの法則", def: "刺激を最も単純・規則的・安定した形へまとめようとする上位原理。" },
      ],
    },
    {
      title: "奥行き知覚 — 二次元から三次元を復元する",
      body: `
        <p>網膜に映る像は二次元なのに、私たちは世界を三次元（奥行きをもつ立体）として知覚する。これは脳がさまざまな<strong>奥行き手がかり（depth cue）</strong>を用いて立体を復元しているからである。手がかりは<strong>両眼手がかり</strong>と<strong>単眼手がかり</strong>に大別される。</p>
        <p>ギブソンとウォーク（Gibson & Walk）の<strong>視覚的断崖（visual cliff）</strong>の実験は、ハイハイ期の乳児が「崖」を避けることを示し、奥行き知覚が早期に成立することを示唆した。</p>
        <h3>両眼手がかり（binocular cues）</h3>
        <ul>
          <li><strong>両眼視差（retinal / binocular disparity）</strong>：左右の眼は少し離れているため、網膜像にずれが生じる。このずれが大きいほど対象は近い。立体視（ステレオグラム・3D映画）の基礎。<em>最も強力な奥行き手がかり</em>とされる。</li>
          <li><strong>輻輳（convergence）</strong>：近くを見るほど両眼が内側に寄る。その筋緊張の量が距離の手がかりになる（近距離で有効）。</li>
        </ul>
        <h3>単眼手がかり（monocular cues）</h3>
        <p>片目でも働く手がかりで、絵画でも奥行きを表せるため<strong>絵画的手がかり</strong>とも呼ばれる。</p>
        <table>
          <tr><th>手がかり</th><th>内容</th></tr>
          <tr><td><b>重なり（遮蔽）</b></td><td>他を隠している対象が手前にある。最も基本的。</td></tr>
          <tr><td><b>相対的大きさ</b></td><td>同種の物体は、網膜像が小さいほど遠い。</td></tr>
          <tr><td><b>線遠近法</b></td><td>平行線（線路など）が遠方で収束して見える。</td></tr>
          <tr><td><b>きめの勾配</b></td><td>遠いほど表面のきめ（模様）が細かく密になる。</td></tr>
          <tr><td><b>大気遠近法</b></td><td>遠くの物はかすんで青みがかって見える。</td></tr>
          <tr><td><b>陰影（明暗）</b></td><td>光と影の付き方から凹凸・立体を判断する。</td></tr>
          <tr><td><b>高さ（位置）</b></td><td>地平線に近い（高い位置の）物ほど遠く見える。</td></tr>
        </table>
        <div class="callout tip"><b>運動視差（motion parallax）</b>：自分が動くと、近い物は速く、遠い物はゆっくり逆方向に流れて見える。車窓から景色を見るときの感覚。単眼で得られる強力な動的手がかりである。</div>
      `,
      figure: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="250" y="20" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">単眼（絵画的）奥行き手がかり</text>
        <rect x="20" y="35" width="460" height="160" fill="#e9ebfe" stroke="#c9cfe0"/>
        <!-- linear perspective + horizon -->
        <line x1="20" y1="120" x2="480" y2="120" stroke="#c9cfe0" stroke-width="1"/>
        <text x="470" y="115" text-anchor="end" font-size="10" fill="#5b6478">地平線</text>
        <line x1="120" y1="195" x2="250" y2="120" stroke="#5b6478" stroke-width="2"/>
        <line x1="380" y1="195" x2="250" y2="120" stroke="#5b6478" stroke-width="2"/>
        <text x="250" y="210" text-anchor="middle" font-size="10" fill="#5b6478">線遠近法（収束）</text>
        <!-- relative size -->
        <rect x="60" y="150" width="44" height="44" fill="#5b6cf0"/>
        <rect x="225" y="128" width="18" height="18" fill="#5b6cf0"/>
        <text x="82" y="145" text-anchor="middle" font-size="9" fill="#1d2433">近(大)</text>
        <text x="234" y="124" text-anchor="middle" font-size="9" fill="#1d2433">遠(小)</text>
        <!-- occlusion -->
        <circle cx="380" cy="160" r="26" fill="#15c4a8"/>
        <circle cx="410" cy="170" r="26" fill="#f0a020"/>
        <text x="395" y="200" text-anchor="middle" font-size="9" fill="#1d2433">重なり(遮蔽)</text>
      </svg>`,
      figcaption: "線遠近法・相対的大きさ・重なりなどの単眼手がかりは、片目でも、また絵画上でも奥行きを生み出す。",
      terms: [
        { term: "両眼視差", def: "左右の網膜像のずれ。立体視を生む最も強力な奥行き手がかり。" },
        { term: "輻輳", def: "近くを見るとき両眼が内側に寄る運動。その筋緊張が距離の手がかりになる。" },
        { term: "重なり（遮蔽）", def: "他を隠している対象が手前にあると知覚する単眼手がかり。" },
        { term: "線遠近法", def: "平行線が遠方で収束して見えることを利用する単眼手がかり。" },
        { term: "きめの勾配", def: "遠いほど表面のきめが細かく密に見える単眼手がかり。" },
        { term: "運動視差", def: "自分が動くと近い物ほど速く流れて見える動的な単眼手がかり。" },
        { term: "視覚的断崖", def: "ギブソンとウォークの装置。乳児の奥行き知覚を調べる実験。" },
      ],
    },
    {
      title: "知覚の恒常性・錯視・トップダウン処理",
      body: `
        <p>網膜像は刻々と変わる（距離・角度・照明で形も大きさも明るさも変化する）のに、私たちは物体を安定したものとして知覚する。これを<strong>知覚の恒常性（perceptual constancy）</strong>という。脳が文脈を考慮して「本当の性質」を推定する働きである。</p>
        <h3>4つの恒常性</h3>
        <ul>
          <li><strong>大きさの恒常性</strong>：遠ざかって網膜像が小さくなっても、対象の大きさは一定に見える。</li>
          <li><strong>形の恒常性</strong>：ドアが開いて網膜像が台形になっても、長方形のドアと知覚する。</li>
          <li><strong>明るさの恒常性</strong>：照明が変わっても、白い紙は白、黒い紙は黒と見える（反射率を推定）。</li>
          <li><strong>色の恒常性</strong>：照明光の色が変わっても、リンゴは赤いと知覚する。</li>
        </ul>
        <h3>錯視（illusion）</h3>
        <p><strong>錯視</strong>は刺激を体系的に誤って知覚する現象で、知覚の<em>正常な</em>仕組み（恒常性や手がかりの利用）が裏目に出た結果として生じる。</p>
        <table>
          <tr><th>錯視</th><th>内容</th></tr>
          <tr><td><b>ミュラー・リヤー錯視</b></td><td>同じ長さの線分が、矢羽根が外向き(>—<)だと長く、内向き(<—>)だと短く見える。</td></tr>
          <tr><td><b>ポンゾ錯視</b></td><td>収束線（線路）の上に置いた同じ長さの2本のうち、奥（上）のほうが長く見える。</td></tr>
          <tr><td><b>エビングハウス錯視</b></td><td>同じ円が、大きい円に囲まれると小さく、小さい円に囲まれると大きく見える。</td></tr>
          <tr><td><b>月の錯視</b></td><td>地平線近くの月が、天頂の月より大きく見える。</td></tr>
        </table>
        <div class="callout note">ミュラー・リヤー錯視は、矢羽根を奥行きの手がかり（部屋の隅か出っ張りか）と解釈し、大きさの恒常性が誤作動するためと説明されることが多い。</div>
        <h3>トップダウン処理とボトムアップ処理</h3>
        <p>知覚は二方向の処理の協同で成り立つ。</p>
        <ul>
          <li><strong>ボトムアップ処理（bottom-up）</strong>：感覚入力（生のデータ）から出発して全体像を構築する、データ駆動の処理。</li>
          <li><strong>トップダウン処理（top-down）</strong>：知識・期待・文脈・経験を使って入力を解釈する、概念駆動の処理。曖昧な手書き文字を文脈で読めるのはこの働き。</li>
        </ul>
        <h3>知覚の構えと運動知覚</h3>
        <p><strong>知覚の構え（perceptual set）</strong>：期待や文脈が「何を知覚するか」を方向づける心的傾向。同じ曖昧図形でも、直前に見たものや教示で解釈が変わる。文化・動機・感情も知覚に影響する。</p>
        <p><strong>運動知覚</strong>：実際には動いていないのに動いて見える現象がある。<strong>仮現運動（phi現象）</strong>＝静止画を素早く切り替えると動いて見える（映画・アニメ・電光掲示板の原理）。<strong>自動運動</strong>＝暗闇の静止した光点が動いて見える。<strong>運動残効</strong>＝滝を見続けた後に静止物が逆方向に動いて見える。</p>
      `,
      figure: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="230" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">ミュラー・リヤー錯視</text>
        <text x="230" y="42" text-anchor="middle" font-size="11" fill="#5b6478">2本の水平線は同じ長さ</text>
        <!-- top: outward fins (looks longer) -->
        <g stroke="#5b6cf0" stroke-width="3" fill="none">
          <line x1="120" y1="80" x2="340" y2="80"/>
          <line x1="120" y1="80" x2="100" y2="62"/><line x1="120" y1="80" x2="100" y2="98"/>
          <line x1="340" y1="80" x2="360" y2="62"/><line x1="340" y1="80" x2="360" y2="98"/>
        </g>
        <text x="60" y="84" font-size="11" fill="#1d2433">長く見える</text>
        <!-- bottom: inward fins (looks shorter) -->
        <g stroke="#e0566b" stroke-width="3" fill="none">
          <line x1="120" y1="150" x2="340" y2="150"/>
          <line x1="120" y1="150" x2="140" y2="132"/><line x1="120" y1="150" x2="140" y2="168"/>
          <line x1="340" y1="150" x2="320" y2="132"/><line x1="340" y1="150" x2="320" y2="168"/>
        </g>
        <text x="60" y="154" font-size="11" fill="#1d2433">短く見える</text>
        <line x1="120" y1="110" x2="120" y2="120" stroke="#c9cfe0"/><line x1="340" y1="110" x2="340" y2="120" stroke="#c9cfe0"/>
      </svg>`,
      figcaption: "ミュラー・リヤー錯視。2本の水平線分は物理的に同じ長さだが、矢羽根の向きで長さが違って見える。",
      terms: [
        { term: "知覚の恒常性", def: "網膜像が変化しても対象を安定して知覚する働き（大きさ・形・明るさ・色）。" },
        { term: "大きさの恒常性", def: "距離で網膜像が変わっても対象の大きさが一定に見えること。" },
        { term: "ミュラー・リヤー錯視", def: "矢羽根の向きで同じ長さの線分の見えが変わる錯視。" },
        { term: "ボトムアップ処理", def: "感覚入力から出発して知覚を構築するデータ駆動の処理。" },
        { term: "トップダウン処理", def: "知識・期待・文脈を用いて入力を解釈する概念駆動の処理。" },
        { term: "知覚の構え", def: "期待や文脈が何を知覚するかを方向づける心的傾向。" },
        { term: "仮現運動（phi現象）", def: "静止画の素早い切り替えで運動が見える現象。映画の原理。" },
        { term: "運動残効", def: "一方向の運動を見続けた後、静止物が逆方向に動いて見える現象。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "「感覚」と「知覚」の区別として最も適切なのはどれか。", choices: ["感覚は意識的、知覚は無意識的な過程である", "感覚は物理刺激を神経信号に変換する過程、知覚はそれを解釈し意味づける過程である", "感覚は学習の結果、知覚は生得的である", "両者は同義で区別はない"], answer: 1, explain: "感覚は受容器による物理刺激の神経信号への変換（転換）、知覚は脳がそれを組織化・解釈して意味あるまとまりにする過程である。", difficulty: 1 },
    { type: "mcq", stem: "刺激を50%の確率で検出できる最小の刺激強度を何というか。", choices: ["弁別閾", "絶対閾", "ウェーバー比", "順応閾"], answer: 1, explain: "絶対閾は、ある刺激を50%の確率で検出できる最小の強度。二刺激の差の検出に必要な最小差は弁別閾（JND）である。", difficulty: 1 },
    { type: "mcq", stem: "「丁度可知差異（JND）は元の刺激の強さに比例する」と述べるのはどの法則か。", choices: ["フェヒナーの法則", "ウェーバーの法則", "ヘリングの法則", "リカードの法則"], answer: 1, explain: "ウェーバーの法則は、JND÷標準刺激が一定（ウェーバー比）であるとする。100gでは約2g、1000gでは約20gの差が必要になる。", difficulty: 2 },
    { type: "mcq", stem: "「感覚の大きさは刺激強度の対数に比例する」とするのはどの法則か。", choices: ["ウェーバーの法則", "フェヒナーの法則", "ステヴンスのべき法則", "場所説"], answer: 1, explain: "フェヒナーの法則は、感覚の大きさが刺激強度の対数に比例するとする。フェヒナーはウェーバーの知見を発展させた精神物理学の創始者である。", difficulty: 2 },
    { type: "mcq", stem: "信号検出理論において、「信号がないのに『ある』と反応する」ことを何というか。", choices: ["ヒット", "ミス", "誤警報（false alarm）", "正棄却"], answer: 2, explain: "信号なしで「あり」と答えるのが誤警報。信号ありで「あり」がヒット、信号ありで「なし」がミス、信号なしで「なし」が正棄却である。", difficulty: 2 },
    { type: "mcq", stem: "服を着続けるとその感触を感じなくなる現象は何の例か。", choices: ["感覚遮断", "感覚順応", "知覚の構え", "暗順応"], answer: 1, explain: "感覚順応は、変化しない一定の刺激への感受性が時間とともに低下する現象である。変化する情報を優先する適応的な仕組みである。", difficulty: 1 },
    { type: "mcq", stem: "暗い色（明暗）を捉え、暗所で働き、色を弁別しない網膜の光受容器はどれか。", choices: ["錐体", "桿体", "神経節細胞", "双極細胞"], answer: 1, explain: "桿体（rod）は感度が高く暗所で働くが色を弁別しない。錐体（cone）は明所で働き色を弁別し、中心窩に集中する。", difficulty: 1 },
    { type: "mcq", stem: "網膜で錐体が密集し、最も視力が高い部位はどこか。", choices: ["盲点", "中心窩", "視神経乳頭", "毛様体"], answer: 1, explain: "中心窩（fovea）は錐体が密集する高視力の中心点。視神経の出口である盲点には受容器がなく像が結べない。", difficulty: 1 },
    { type: "mcq", stem: "赤・緑・青に反応する3種の錐体の組み合わせで色覚を説明する理論はどれか。", choices: ["反対色説", "三色説（ヤング・ヘルムホルツ説）", "場所説", "ゲート理論"], answer: 1, explain: "三色説は網膜レベルで正しく、3種の錐体の興奮の比で色が生じるとする。赤緑色覚異常も錐体の異常で説明される。", difficulty: 2 },
    { type: "mcq", stem: "赤を凝視した後に緑の補色残像が見えることを最もよく説明する理論はどれか。", choices: ["三色説", "反対色説（ヘリング）", "特徴検出器説", "斉射説"], answer: 1, explain: "反対色説は赤−緑・青−黄・白−黒の拮抗系で色を処理するとし、補色残像や「赤みがかった緑」が存在しないことを説明する。神経節細胞以降のレベルで働く。", difficulty: 2 },
    { type: "mcq", stem: "暗い映画館に入った直後はよく見えないが、20〜30分かけて見えるようになる過程を何というか。", choices: ["明順応", "暗順応", "感覚遮断", "輻輳"], answer: 1, explain: "暗順応は暗所で感度が徐々に上がる過程。錐体が先に、桿体が遅れて（20〜30分かけて）順応する。明所への順応（明順応）はより速い。", difficulty: 2 },
    { type: "mcq", stem: "視覚野に「特定の傾きの線分」に反応する特徴検出器があることを発見した研究者は誰か。", choices: ["ベケシー", "ヒューベルとウィーゼル", "ギブソンとウォーク", "メルザックとウォール"], answer: 1, explain: "ヒューベルとウィーゼル（Hubel & Wiesel）は第一次視覚野に特定の方位の線分に反応する細胞（特徴検出器）があることを示した。", difficulty: 3 },
    { type: "mcq", stem: "音の物理的性質と聴覚経験の対応として正しいのはどれか。", choices: ["周波数＝大きさ、振幅＝高さ", "周波数＝高さ、振幅＝大きさ", "周波数＝音色、振幅＝高さ", "周波数＝高さ、振幅＝音色"], answer: 1, explain: "周波数（Hz）が音の高さ（pitch）に、振幅（強度, dB）が音の大きさ（loudness）に対応する。波形の複雑さは音色に対応する。", difficulty: 1 },
    { type: "mcq", stem: "音の振動を神経信号に転換する有毛細胞があるのは、どの器官か。", choices: ["鼓膜", "耳小骨", "蝸牛（基底膜上）", "耳介"], answer: 2, explain: "内耳の蝸牛にある基底膜上の有毛細胞が振動を神経信号に転換する。鼓膜は中耳、耳小骨は中耳で振動を増幅する。", difficulty: 1 },
    { type: "mcq", stem: "音の高さを「基底膜のどの場所が最も振動するか」で説明する理論はどれか。", choices: ["時間説", "場所説", "斉射説", "二重過程説"], answer: 1, explain: "場所説（ヘルムホルツ、ベケシーが支持）は基底膜の振動部位で高さを符号化するとし、高音の説明に適する。低音は時間説（周波数説）がよく説明する。", difficulty: 2 },
    { type: "mcq", stem: "聴神経の発火が周波数に追いつかない高い音について、複数の神経が交代で発火して補うとする原理はどれか。", choices: ["プレグナンツの原理", "斉射説（volley principle）", "ウェーバーの法則", "ゲート理論"], answer: 1, explain: "斉射説は、単一神経の発火上限（約1000Hz）を超える音を、複数の神経が交代で発火して符号化するとする。時間説を補完する。", difficulty: 3 },
    { type: "mcq", stem: "蝸牛の有毛細胞や聴神経の損傷（加齢・騒音曝露など）による難聴を何というか。", choices: ["伝音難聴", "感音難聴", "中耳炎", "片頭痛性難聴"], answer: 1, explain: "感音難聴は蝸牛・聴神経の損傷による。有毛細胞は再生しないため重度では人工内耳が用いられる。外耳・中耳の問題は伝音難聴である。", difficulty: 2 },
    { type: "mcq", stem: "基本味（五味）に含まれないものはどれか。", choices: ["うま味", "苦味", "辛味", "酸味"], answer: 2, explain: "基本味は甘味・塩味・酸味・苦味・うま味の5つ。辛味は痛覚・温度感覚であり基本味には含まれない。", difficulty: 2 },
    { type: "mcq", stem: "においが情動や記憶を強く喚起しやすい理由として最も適切なのはどれか。", choices: ["嗅覚は最も感度が高い感覚だから", "嗅覚情報が視床を経ず直接辺縁系（扁桃体・海馬）に伝わるから", "嗅覚受容器の数が最も多いから", "においは言語化しやすいから"], answer: 1, explain: "嗅覚は他の感覚と異なり視床を経由せず、直接、情動と記憶に関わる大脳辺縁系に伝わる。これがにおいによる強い情動・記憶喚起（プルースト効果）を説明する。", difficulty: 3 },
    { type: "mcq", stem: "「痛む所をさすると和らぐ」ことを説明する、脊髄に痛み信号を調節する『門』を想定した理論はどれか。", choices: ["反対色説", "ゲートコントロール理論", "信号検出理論", "三色説"], answer: 1, explain: "メルザックとウォールのゲートコントロール理論は、脊髄のゲートが太い線維の刺激や脳からの下行性信号で閉じ、痛みを抑制するとする。", difficulty: 2 },
    { type: "mcq", stem: "目を閉じていても自分の手足の位置や動きがわかるのは、どの感覚の働きか。", choices: ["前庭感覚", "自己受容感覚（固有感覚）", "共感覚", "皮膚感覚"], answer: 1, explain: "自己受容感覚（固有感覚）は筋・腱・関節の受容器が身体各部の位置や動きを感知する。平衡を司るのは内耳の前庭感覚である。", difficulty: 2 },
    { type: "mcq", stem: "「文字や数字に特定の色が自動的に見える」ように、ある感覚が別の感覚を引き起こす現象を何というか。", choices: ["共感覚", "感覚順応", "知覚の構え", "運動残効"], answer: 0, explain: "共感覚（synesthesia）は、ある感覚刺激が別の感覚を自動的・恒常的に引き起こす現象である。書記素—色共感覚などが知られる。", difficulty: 1 },
    { type: "mcq", stem: "ゲシュタルト心理学のスローガンとして最も適切なのはどれか。", choices: ["全体は部分の総和以上である", "刺激なくして反応なし", "心は白紙である", "構造は機能に従う"], answer: 0, explain: "ゲシュタルト心理学（ヴェルトハイマーら）は「全体は部分の総和以上である」とし、知覚が体制化されたまとまりとして成立すると主張した。", difficulty: 1 },
    { type: "mcq", stem: "「似た色や形のものをまとめて一群として知覚する」ゲシュタルトの法則はどれか。", choices: ["近接の法則", "類同の法則", "閉合の法則", "共通運命の法則"], answer: 1, explain: "類同（similarity）の法則は、形・色・大きさが似た要素をまとめて知覚する原理。近くのものをまとめるのは近接の法則である。", difficulty: 1 },
    { type: "mcq", stem: "立体視（3D映画など）の基礎となる、最も強力とされる両眼性の奥行き手がかりはどれか。", choices: ["線遠近法", "両眼視差", "運動視差", "きめの勾配"], answer: 1, explain: "両眼視差（retinal disparity）は左右の網膜像のずれで、立体視の基礎となる最も強力な奥行き手がかりである。線遠近法やきめの勾配は単眼手がかりである。", difficulty: 2 },
    { type: "mcq", stem: "次のうち、片目でも有効な単眼（絵画的）奥行き手がかりではないものはどれか。", choices: ["重なり（遮蔽）", "線遠近法", "輻輳", "きめの勾配"], answer: 2, explain: "輻輳（両眼が内側に寄る運動）は両眼手がかりである。重なり・線遠近法・きめの勾配は片目でも、絵画上でも働く単眼手がかりである。", difficulty: 2 },
    { type: "mcq", stem: "電車の窓から外を見ると、近くの物は速く、遠くの物はゆっくり流れて見える。この奥行き手がかりはどれか。", choices: ["両眼視差", "運動視差", "輻輳", "相対的大きさ"], answer: 1, explain: "運動視差（motion parallax）は、観察者が動くと近い物ほど速く流れて見える動的な単眼手がかりである。", difficulty: 2 },
    { type: "mcq", stem: "ドアが開いて網膜像が台形に変化しても「長方形のドア」と知覚するのは何の働きか。", choices: ["大きさの恒常性", "形の恒常性", "色の恒常性", "明るさの恒常性"], answer: 1, explain: "形の恒常性は、見る角度で網膜像の形が変わっても対象の本来の形を一定に知覚する働きである。", difficulty: 2 },
    { type: "mcq", stem: "同じ長さの線分が、矢羽根の向きで長く見えたり短く見えたりする錯視はどれか。", choices: ["ポンゾ錯視", "エビングハウス錯視", "ミュラー・リヤー錯視", "月の錯視"], answer: 2, explain: "ミュラー・リヤー錯視は、外向きの矢羽根だと長く、内向きだと短く見える。奥行き手がかりの誤解釈と大きさの恒常性で説明されることが多い。", difficulty: 1 },
    { type: "mcq", stem: "知識・期待・文脈を用いて感覚入力を解釈する処理を何というか。", choices: ["ボトムアップ処理", "トップダウン処理", "並列処理", "感覚変換"], answer: 1, explain: "トップダウン処理は知識・期待・文脈に基づく概念駆動の処理。感覚入力から構築するのがボトムアップ（データ駆動）処理である。", difficulty: 2 },
    { type: "mcq", stem: "静止画を素早く切り替えると連続した動きに見える現象（映画の原理）を何というか。", choices: ["自動運動", "運動残効", "仮現運動（phi現象）", "運動視差"], answer: 2, explain: "仮現運動（phi現象）は、静止画の高速な切り替えで運動が知覚される現象で、映画・アニメ・電光掲示板の原理である。", difficulty: 2 },
    { type: "mcq", stem: "乳児の奥行き知覚を調べた「視覚的断崖」の実験を行った研究者は誰か。", choices: ["ヒューベルとウィーゼル", "ギブソンとウォーク", "ヴェルトハイマー", "フェヒナー"], answer: 1, explain: "ギブソンとウォーク（Gibson & Walk）の視覚的断崖の実験は、ハイハイ期の乳児が崖を避けることを示し、奥行き知覚が早期に成立することを示唆した。", difficulty: 3 },
  ],
});
