/* ============================================================
   生理・神経心理学  (biological)
   ============================================================ */
PsychApp.registerModule({
  id: "biological",
  title: "生理・神経心理学",
  emoji: "🧬",
  category: "biocog",
  tagline: "ニューロンと神経伝達・神経系の構成・脳の構造と機能・内分泌・脳研究法",
  overview: `<p>すべての心的活動――知覚・記憶・感情・意思決定――は、究極的には<strong>脳と神経系における物理的・化学的過程</strong>として実現されている。本分野では、情報処理の最小単位である<strong>ニューロン</strong>から出発し、電気信号と化学的シナプス伝達、神経系全体の構成、脳の各部位の機能、内分泌系との連携、そして脳を研究する方法までを概観する。心を生物学的基盤から理解する視点は、学習・認知・感情・臨床のすべての分野を貫く土台となる。</p>`,
  lessons: [
    {
      title: "ニューロンと神経活動 — 情報を運ぶ細胞",
      body: `
        <p>脳には約<strong>860億〜1000億個</strong>のニューロン（neuron／神経細胞）があるとされる。ニューロンは電気的・化学的に情報を伝える特殊な細胞であり、神経系の機能単位である。これを支える<strong>グリア細胞（glia）</strong>は栄養供給・絶縁・老廃物除去などを担う（数はニューロンと同程度以上）。</p>
        <h3>ニューロンの構造</h3>
        <ul>
          <li><strong>樹状突起（dendrite）</strong>：他のニューロンからの信号を<em>受け取る</em>枝分かれした突起。</li>
          <li><strong>細胞体（soma／cell body）</strong>：核を含む。受け取った信号を統合する。</li>
          <li><strong>軸索（axon）</strong>：信号を<em>送り出す</em>長い線維。1本のみ。</li>
          <li><strong>髄鞘（ミエリン鞘／myelin sheath）</strong>：軸索を覆う脂質の絶縁体。すき間（<strong>ランビエ絞輪</strong>）を信号が跳ぶ<strong>跳躍伝導</strong>により伝達が高速化する。</li>
          <li><strong>終末（軸索終末／terminal）</strong>：軸索の末端。次の細胞へ神経伝達物質を放出する。</li>
        </ul>
        <div class="callout note">髄鞘が自己免疫的に破壊されると伝導が障害される。<strong>多発性硬化症（MS）</strong>はその代表例である。</div>
        <h3>静止電位と活動電位</h3>
        <p>ニューロンは何もしていないとき、細胞内が外に対してマイナス（およそ<strong>−70 mV</strong>）に保たれている。これが<strong>静止膜電位（resting potential）</strong>で、ナトリウム‐カリウムポンプとイオンの分布によって維持される（細胞内はK⁺が多く、細胞外はNa⁺が多い）。</p>
        <p>樹状突起・細胞体への入力が一定の<strong>閾値</strong>を超えると、Na⁺が急激に流入し膜電位が一気にプラスへ反転する。この急激な電位変化が<strong>活動電位（action potential／インパルス）</strong>であり、軸索を末端へ向けて伝わる。</p>
        <div class="callout key"><b>全か無かの法則（all-or-none law）</b>：活動電位は、閾値を超えれば<strong>常に一定の大きさ</strong>で生じ、超えなければまったく生じない。刺激が強くても1発の大きさは変わらない。刺激の強さは<strong>発火の頻度（回数）</strong>で符号化される。</div>
        <p>発火直後の短時間は、どんなに強い刺激でも再発火できない<strong>絶対不応期（absolute refractory period）</strong>がある。これに続く<strong>相対不応期</strong>では、より強い刺激なら発火できる。不応期があるため、活動電位は逆流せず一方向に伝わる。</p>
        <h3>シナプス伝達</h3>
        <p>ニューロンどうしは直接つながらず、わずかなすき間（<strong>シナプス間隙</strong>）を隔てている。この接続部位を<strong>シナプス（synapse）</strong>という。活動電位が軸索終末に達すると、<strong>シナプス小胞</strong>から<strong>神経伝達物質（neurotransmitter）</strong>が間隙へ放出され、次の細胞の受容体に結合する。これが化学的なシナプス伝達である。</p>
        <ul>
          <li><strong>興奮性</strong>シナプス後電位：受け手を発火させやすくする。</li>
          <li><strong>抑制性</strong>シナプス後電位：受け手を発火させにくくする。</li>
        </ul>
        <p>放出された伝達物質は、酵素による分解や<strong>再取り込み（reuptake）</strong>によって除去され、シナプスはリセットされる。</p>
        <h3>主な神経伝達物質と関連する障害</h3>
        <table>
          <tr><th>伝達物質</th><th>主な働き</th><th>関連</th></tr>
          <tr><td><b>アセチルコリン (ACh)</b></td><td>骨格筋の収縮、覚醒、学習・記憶</td><td>不足で<strong>アルツハイマー病</strong>、筋無力症</td></tr>
          <tr><td><b>ドーパミン (DA)</b></td><td>運動制御、報酬・快、動機づけ</td><td>不足で<strong>パーキンソン病</strong>、過剰は統合失調症と関連</td></tr>
          <tr><td><b>セロトニン (5-HT)</b></td><td>気分、睡眠、食欲</td><td>不足で<strong>うつ病</strong>（SSRIが再取り込みを阻害）</td></tr>
          <tr><td><b>ノルアドレナリン</b></td><td>覚醒、注意、気分（交感神経）</td><td>気分障害、ストレス反応</td></tr>
          <tr><td><b>GABA</b></td><td>脳の主要な<strong>抑制性</strong>伝達物質</td><td>不足で不安・てんかん（抗不安薬が作用）</td></tr>
          <tr><td><b>グルタミン酸</b></td><td>脳の主要な<strong>興奮性</strong>伝達物質、記憶</td><td>過剰は神経細胞を傷つける（興奮毒性）</td></tr>
        </table>
        <h3>薬物の作用：アゴニストとアンタゴニスト</h3>
        <p>薬物はシナプス伝達に介入して効果を発揮する。</p>
        <ul>
          <li><strong>アゴニスト（作動薬／agonist）</strong>：伝達物質の働きを<em>強める・模倣する</em>。例：ニコチンはACh受容体を刺激する。</li>
          <li><strong>アンタゴニスト（拮抗薬／antagonist）</strong>：伝達物質の働きを<em>妨げる・遮断する</em>。例：抗精神病薬はドーパミン受容体を遮断する。</li>
        </ul>
        <div class="callout tip">パーキンソン病ではドーパミンそのものは脳に届きにくいため、前駆物質である<strong>L‑ドーパ</strong>を投与してドーパミンを補う。これはアゴニスト的な治療の一例である。</div>
      `,
      figure: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="bn-ar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker></defs>
        <!-- 樹状突起 -->
        <g stroke="#5b6cf0" stroke-width="2.5" fill="none">
          <path d="M70,90 L30,55"/><path d="M70,90 L25,90"/><path d="M70,110 L30,145"/><path d="M70,100 L20,120"/>
        </g>
        <!-- 細胞体 -->
        <circle cx="95" cy="100" r="30" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2.5"/>
        <circle cx="95" cy="100" r="10" fill="#5b6cf0"/>
        <!-- 軸索 -->
        <line x1="125" y1="100" x2="420" y2="100" stroke="#1d2433" stroke-width="3"/>
        <!-- 髄鞘 -->
        <g fill="#f0a020" stroke="#c8800f">
          <rect x="160" y="88" width="55" height="24" rx="12"/>
          <rect x="240" y="88" width="55" height="24" rx="12"/>
          <rect x="320" y="88" width="55" height="24" rx="12"/>
        </g>
        <!-- 終末 -->
        <g stroke="#15c4a8" stroke-width="2.5" fill="none">
          <path d="M420,100 L460,80"/><path d="M420,100 L465,100"/><path d="M420,100 L460,120"/>
        </g>
        <circle cx="462" cy="80" r="5" fill="#15c4a8"/><circle cx="467" cy="100" r="5" fill="#15c4a8"/><circle cx="462" cy="120" r="5" fill="#15c4a8"/>
        <g font-size="11" fill="#1d2433" font-weight="700" text-anchor="middle">
          <text x="40" y="170">樹状突起</text>
          <text x="95" y="155">細胞体</text>
          <text x="270" y="70">髄鞘（ミエリン）</text>
          <text x="470" y="150">軸索終末</text>
          <text x="270" y="130" fill="#5b6478">軸索</text>
        </g>
        <line x1="270" y1="60" x2="187" y2="84" stroke="#c8800f" stroke-width="1"/>
        <text x="270" y="200" text-anchor="middle" font-size="9" fill="#5b6478">信号は 樹状突起→細胞体→軸索→終末 の一方向に進む</text>
      </svg>`,
      figcaption: "ニューロンの基本構造。樹状突起で受け取った信号は細胞体で統合され、軸索を通って終末から次の細胞へ伝えられる。髄鞘は伝導を高速化する。",
      terms: [
        { term: "ニューロン", def: "電気的・化学的に情報を伝える神経系の機能単位（神経細胞）。" },
        { term: "髄鞘（ミエリン鞘）", def: "軸索を覆う絶縁体。跳躍伝導により伝達を高速化する。" },
        { term: "静止膜電位", def: "活動していないニューロンの内外電位差（約−70mV）。" },
        { term: "活動電位", def: "閾値を超えたとき軸索を伝わる急激な電位変化。インパルス。" },
        { term: "全か無かの法則", def: "活動電位は閾値を超えれば一定の大きさで生じ、超えなければ生じない。" },
        { term: "不応期", def: "発火直後に再発火できない（絶対）／しにくい（相対）期間。" },
        { term: "神経伝達物質", def: "シナプス間隙に放出され次の細胞の受容体に結合する化学物質。" },
        { term: "アゴニスト／アンタゴニスト", def: "伝達物質の働きを強める作動薬／妨げる拮抗薬。" },
      ],
    },
    {
      title: "神経系の構成 — 中枢・末梢と自律神経系",
      body: `
        <p>無数のニューロンは階層的に組織化され、<strong>神経系（nervous system）</strong>を構成する。神経系はまず2つに大別される。</p>
        <ul>
          <li><strong>中枢神経系（CNS：central nervous system）</strong>：<strong>脳と脊髄</strong>。情報の統合・処理の中枢。</li>
          <li><strong>末梢神経系（PNS：peripheral nervous system）</strong>：CNSと身体各部をつなぐ神経。さらに体性神経系と自律神経系に分かれる。</li>
        </ul>
        <h3>末梢神経系の2系統</h3>
        <h4>体性神経系（somatic nervous system）</h4>
        <p>感覚器からの情報をCNSへ伝え（感覚／求心性）、CNSの指令を<strong>骨格筋</strong>へ伝える（運動／遠心性）。<strong>随意運動</strong>（意識的に動かす動作）を担う。</p>
        <h4>自律神経系（autonomic nervous system）</h4>
        <p>内臓・心臓・血管・腺などを支配し、心拍・消化・発汗など<strong>不随意</strong>の生命維持機能を自動的に調整する。互いに拮抗する2つの枝から成る。</p>
        <table>
          <tr><th>機能</th><th>交感神経（活動・闘争／逃走）</th><th>副交感神経（休息・回復）</th></tr>
          <tr><td>心拍</td><td>速める</td><td>遅くする</td></tr>
          <tr><td>瞳孔</td><td>散大（開く）</td><td>収縮（閉じる）</td></tr>
          <tr><td>消化</td><td>抑制する</td><td>促進する</td></tr>
          <tr><td>気管支</td><td>拡張する</td><td>収縮する</td></tr>
          <tr><td>発汗</td><td>促進する</td><td>—</td></tr>
          <tr><td>副腎</td><td>アドレナリン分泌を促す</td><td>—</td></tr>
        </table>
        <div class="callout key"><b>交感神経＝アクセル、副交感神経＝ブレーキ</b>と覚えると整理しやすい。危機やストレス時には交感神経が優位になり、心拍・呼吸を高めて<strong>闘争‐逃走反応（fight-or-flight）</strong>を準備する。落ち着くと副交感神経が優位となり、身体を休息・消化モードへ戻す。</div>
        <h3>反射弓 — 脳を介さない最短経路</h3>
        <p>熱いものに触れて思わず手を引っ込めるような素早い反応は、脳の判断を待たずに<strong>脊髄</strong>で処理される。この経路を<strong>反射弓（reflex arc）</strong>という。</p>
        <ol>
          <li><strong>受容器</strong>が刺激を受ける（皮膚の痛覚）。</li>
          <li><strong>感覚（求心性）ニューロン</strong>が脊髄へ信号を送る。</li>
          <li>脊髄内の<strong>介在ニューロン</strong>が中継する。</li>
          <li><strong>運動（遠心性）ニューロン</strong>が筋肉へ指令を送り、手を引く。</li>
        </ol>
        <div class="callout tip">反射では信号が脊髄で折り返すため反応が速い。「熱い」と<em>感じる</em>のは、手を引いた後に脳へ情報が届いてからである。反射弓は脳を経由しないことが速さの鍵である。</div>
      `,
      figure: `<svg viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <g text-anchor="middle">
          <rect x="190" y="10" width="160" height="34" rx="8" fill="#1d2433"/><text x="270" y="32" fill="#fff" font-size="13" font-weight="700">神経系</text>
          <!-- CNS / PNS -->
          <rect x="70" y="70" width="160" height="34" rx="8" fill="#5b6cf0"/><text x="150" y="92" fill="#fff" font-size="12" font-weight="700">中枢神経系（脳・脊髄）</text>
          <rect x="310" y="70" width="160" height="34" rx="8" fill="#15c4a8"/><text x="390" y="92" fill="#fff" font-size="12" font-weight="700">末梢神経系</text>
          <!-- PNS children -->
          <rect x="250" y="130" width="110" height="34" rx="8" fill="#d8f6ee" stroke="#15c4a8"/><text x="305" y="152" font-size="11" font-weight="700">体性神経系</text>
          <rect x="380" y="130" width="110" height="34" rx="8" fill="#d8f6ee" stroke="#15c4a8"/><text x="435" y="152" font-size="11" font-weight="700">自律神経系</text>
          <!-- ANS children -->
          <rect x="320" y="195" width="100" height="40" rx="8" fill="#fdebd0" stroke="#f0a020"/><text x="370" y="212" font-size="11" font-weight="700">交感神経</text><text x="370" y="227" font-size="9" fill="#5b6478">活動・闘争逃走</text>
          <rect x="430" y="195" width="100" height="40" rx="8" fill="#fdebd0" stroke="#f0a020"/><text x="480" y="212" font-size="11" font-weight="700">副交感神経</text><text x="480" y="227" font-size="9" fill="#5b6478">休息・回復</text>
        </g>
        <g stroke="#9aa3bd" stroke-width="2" fill="none">
          <path d="M270,44 L150,70"/><path d="M270,44 L390,70"/>
          <path d="M390,104 L305,130"/><path d="M390,104 L435,130"/>
          <path d="M435,164 L370,195"/><path d="M435,164 L480,195"/>
        </g>
      </svg>`,
      figcaption: "神経系の階層構造。末梢神経系は体性（随意・骨格筋）と自律（不随意・内臓）に、自律神経系はさらに交感（活動）と副交感（休息）に分かれる。",
      terms: [
        { term: "中枢神経系（CNS）", def: "脳と脊髄から成る、情報の統合・処理の中枢。" },
        { term: "末梢神経系（PNS）", def: "中枢と身体各部をつなぐ神経。体性神経系と自律神経系から成る。" },
        { term: "体性神経系", def: "感覚情報の伝達と骨格筋の随意運動を担う末梢神経。" },
        { term: "自律神経系", def: "内臓など不随意機能を調整する末梢神経。交感・副交感から成る。" },
        { term: "交感神経", def: "活動・ストレス時に優位となり闘争‐逃走反応を準備する系。" },
        { term: "副交感神経", def: "休息・回復時に優位となり身体を鎮静・消化モードにする系。" },
        { term: "反射弓", def: "脳を介さず脊髄で処理される最短の反応経路。" },
      ],
    },
    {
      title: "脳の下位構造 — 脳幹から辺縁系まで",
      body: `
        <p>脳は発生・進化の観点から、生命維持に関わる古い部位（脳の深部）から、高度な認知を担う新しい部位（大脳皮質）まで階層的に構成される。ここでは大脳皮質より内側・下方の構造を扱う。</p>
        <h3>脳幹（brainstem） — 生命維持の中枢</h3>
        <ul>
          <li><strong>延髄（medulla）</strong>：<em>呼吸・心拍・血圧</em>など生命維持に不可欠な機能を制御する。損傷は致命的。</li>
          <li><strong>橋（pons）</strong>：延髄と中脳・小脳をつなぐ中継点。睡眠や覚醒、顔面の運動にも関与。</li>
          <li><strong>中脳（midbrain）</strong>：視覚・聴覚の反射、運動制御。ドーパミン作動性ニューロン（黒質）を含む。</li>
        </ul>
        <h4>網様体（reticular formation）</h4>
        <p>脳幹を縦に貫く神経網。<strong>覚醒（arousal）と意識水準</strong>の調整に重要で、ここが障害されると昏睡に至りうる。注意のフィルターとしても働く。</p>
        <h3>小脳（cerebellum）</h3>
        <p>脳の後下部。<strong>運動の協調・バランス・姿勢</strong>を司り、なめらかな動作やタイミングを調整する。手続き的記憶（技能の学習）にも関与する。損傷すると動作がぎこちなくなる（協調運動障害）。</p>
        <h3>間脳 — 視床と視床下部</h3>
        <ul>
          <li><strong>視床（thalamus）</strong>：<strong>嗅覚を除くすべての感覚情報の中継基地</strong>。感覚を大脳皮質の適切な領域へ振り分ける「玄関口」。</li>
          <li><strong>視床下部（hypothalamus）</strong>：小さいが極めて重要。<em>体温・摂食・飲水・睡眠・性行動</em>といった<strong>恒常性（ホメオスタシス）</strong>を維持し、自律神経系と内分泌系（下垂体）を統御する。</li>
        </ul>
        <h3>辺縁系（limbic system） — 情動と記憶</h3>
        <p>大脳皮質と脳幹の間に位置する一群の構造で、<strong>情動・動機づけ・記憶</strong>に関わる。</p>
        <table>
          <tr><th>構造</th><th>主な機能</th></tr>
          <tr><td><b>扁桃体（amygdala）</b></td><td><strong>恐怖・怒りなど情動</strong>の処理と情動的記憶。危険の検出。</td></tr>
          <tr><td><b>海馬（hippocampus）</b></td><td>新しい<strong>長期記憶の形成</strong>、空間記憶。損傷で前向性健忘。</td></tr>
          <tr><td><b>帯状回（cingulate gyrus）</b></td><td>情動の調整、注意、痛みの情動的側面。</td></tr>
        </table>
        <div class="callout example"><b>有名な症例 H.M.</b>：てんかん治療のため両側の海馬を含む側頭葉内側部を切除した患者H.M.は、手術後に<strong>新しい出来事を長期記憶へ変換できなくなった</strong>（前向性健忘）。一方で技能学習は可能で、過去の古い記憶は保たれた。海馬が記憶の<em>形成</em>に不可欠であることを示す古典的症例である。</div>
        <div class="callout warn">扁桃体を損傷したサル（クリューバー‐ビューシー症候群）は恐怖反応を失い、本来怖がるはずの対象にも近づくようになる。扁桃体が恐怖・脅威評価の中核であることを示す。</div>
      `,
      figure: `<svg viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <!-- 大脳の輪郭 -->
        <path d="M60,120 Q60,40 200,40 Q380,30 440,90 Q470,120 450,160 Q470,180 440,200 L150,200 Q60,200 60,120 Z" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <!-- 視床 -->
        <ellipse cx="250" cy="120" rx="34" ry="24" fill="#5b6cf0"/><text x="250" y="124" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">視床</text>
        <!-- 視床下部 -->
        <ellipse cx="240" cy="158" rx="26" ry="14" fill="#f0a020"/><text x="240" y="162" text-anchor="middle" font-size="9" fill="#fff" font-weight="700">視床下部</text>
        <!-- 海馬 -->
        <path d="M300,150 q30,10 20,40" fill="none" stroke="#15c4a8" stroke-width="9" stroke-linecap="round"/>
        <text x="345" y="185" font-size="10" fill="#0e8f7c" font-weight="700">海馬</text>
        <!-- 扁桃体 -->
        <circle cx="298" cy="148" r="9" fill="#e0566b"/><text x="300" y="135" font-size="10" fill="#e0566b" font-weight="700" text-anchor="middle">扁桃体</text>
        <!-- 脳幹 -->
        <path d="M250,180 q-5,40 -20,70" fill="none" stroke="#1d2433" stroke-width="20" stroke-linecap="round"/>
        <text x="170" y="235" font-size="11" font-weight="700" fill="#1d2433">脳幹</text>
        <text x="178" y="250" font-size="8" fill="#5b6478">中脳・橋・延髄</text>
        <!-- 小脳 -->
        <ellipse cx="370" cy="225" rx="52" ry="34" fill="#fdebd0" stroke="#f0a020" stroke-width="2"/>
        <g stroke="#f0a020" stroke-width="1" fill="none"><path d="M330,210 H410"/><path d="M328,225 H412"/><path d="M332,240 H408"/></g>
        <text x="370" y="229" text-anchor="middle" font-size="11" font-weight="700" fill="#c8800f">小脳</text>
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">脳の主要な下位構造（断面の模式図）</text>
      </svg>`,
      figcaption: "脳の正中断面の模式図。視床（感覚の中継）、視床下部（恒常性）、辺縁系（扁桃体・海馬）、脳幹（生命維持）、小脳（運動協調）の位置関係を示す。",
      terms: [
        { term: "延髄", def: "呼吸・心拍など生命維持機能を制御する脳幹下部。" },
        { term: "網様体", def: "脳幹を貫き覚醒・意識水準を調整する神経網。" },
        { term: "小脳", def: "運動の協調・バランス・姿勢を司る。技能学習にも関与。" },
        { term: "視床", def: "嗅覚を除く感覚情報を大脳皮質へ中継する「玄関口」。" },
        { term: "視床下部", def: "摂食・体温・睡眠など恒常性を維持し、自律神経と内分泌を統御。" },
        { term: "扁桃体", def: "恐怖・怒りなど情動の処理と情動的記憶を担う辺縁系の構造。" },
        { term: "海馬", def: "新しい長期記憶の形成と空間記憶を担う。損傷で前向性健忘。" },
        { term: "症例H.M.", def: "海馬を含む側頭葉内側を切除し前向性健忘となった記憶研究の古典例。" },
      ],
    },
    {
      title: "大脳皮質 — 4つの葉と機能局在",
      body: `
        <p><strong>大脳皮質（cerebral cortex）</strong>は、脳の最も外側を覆う数ミリの薄い層で、高次の知覚・思考・言語・計画を担う。表面に多数のしわ（<strong>溝</strong>と<strong>回</strong>）があるのは、限られた頭蓋内に広い表面積を収めるためである。左右の<strong>大脳半球</strong>に分かれ、各半球は4つの<strong>葉（lobe）</strong>に区分される。</p>
        <h3>4つの葉とその機能</h3>
        <table>
          <tr><th>葉</th><th>位置</th><th>主な機能</th></tr>
          <tr><td><b>前頭葉</b></td><td>前方</td><td>運動の指令（運動野）、計画・判断・抑制（前頭前野）、言語産出（ブローカ野）</td></tr>
          <tr><td><b>頭頂葉</b></td><td>上後方</td><td>体性感覚（触覚・温度・痛み）、空間認知</td></tr>
          <tr><td><b>側頭葉</b></td><td>側方</td><td>聴覚、言語理解（ウェルニッケ野）、物体・顔の認知</td></tr>
          <tr><td><b>後頭葉</b></td><td>後方</td><td>視覚（一次視覚野）</td></tr>
        </table>
        <h3>一次運動野・体性感覚野とホムンクルス</h3>
        <p>前頭葉後端の<strong>一次運動野</strong>は随意運動の指令を出し、頭頂葉前端の<strong>一次体性感覚野</strong>は身体からの触覚等を受け取る。両者は中心溝を挟んで向かい合う。</p>
        <div class="callout key"><b>機能局在と地図対応</b>：運動野・感覚野では、身体各部位が皮質上に整然と対応づけられている（体部位局在）。重要な点は、<strong>担当する皮質の広さが身体の大きさではなく、その部位の繊細さ・重要性に比例する</strong>ことである。手・唇・舌は広い領域を占め、体幹は狭い。この対応を身体の各部の大きさで誇張して描いた人形像を<strong>ホムンクルス（homunculus）</strong>と呼ぶ。</div>
        <h3>連合野（association area）</h3>
        <p>運動・感覚に直接関わらない広大な領域で、複数の情報を統合し、思考・記憶・言語・知覚の解釈など高次機能を担う。ヒトでは皮質の大部分を占める。</p>
        <h3>前頭前野とフィニアス・ゲージ</h3>
        <p>前頭葉の最前部にある<strong>前頭前野（prefrontal cortex）</strong>は、計画立案・意思決定・衝動の抑制・社会的判断など、いわゆる<strong>実行機能</strong>と人格の中枢である。</p>
        <div class="callout example"><b>フィニアス・ゲージ（1848年）</b>：鉄道工事中の爆発事故で鉄棒が頭部を貫通し、<strong>前頭前野（前頭葉腹内側部）</strong>を損傷した。知能・記憶・言語は保たれたが、責任感がなく衝動的・無計画で気分が変わりやすい人物へと<strong>人格が一変した</strong>とされる。前頭前野が人格・社会的行動・自己制御に関わることを示す歴史的症例である。</div>
      `,
      figure: `<svg viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <!-- 脳の側面（左を向く） -->
        <path d="M70,150 Q60,70 180,55 Q320,40 430,90 Q480,120 455,160 Q445,195 380,205 Q260,225 150,210 Q75,200 70,150 Z" fill="#fff" stroke="#1d2433" stroke-width="2"/>
        <!-- 前頭葉 -->
        <path d="M70,150 Q60,70 180,55 Q230,52 250,70 L235,160 Q180,205 150,210 Q75,200 70,150 Z" fill="#e9ebfe" stroke="#5b6cf0"/>
        <text x="140" y="120" font-size="12" font-weight="700" fill="#3a48c0" text-anchor="middle">前頭葉</text>
        <!-- 頭頂葉 -->
        <path d="M250,70 Q330,45 380,70 L360,150 L250,150 Z" fill="#d8f6ee" stroke="#15c4a8"/>
        <text x="312" y="105" font-size="12" font-weight="700" fill="#0e8f7c" text-anchor="middle">頭頂葉</text>
        <!-- 後頭葉 -->
        <path d="M380,70 Q470,95 455,160 Q450,175 410,180 L375,150 Z" fill="#fdebd0" stroke="#f0a020"/>
        <text x="420" y="130" font-size="11" font-weight="700" fill="#c8800f" text-anchor="middle">後頭葉</text>
        <!-- 側頭葉 -->
        <path d="M235,160 L360,155 Q380,185 360,200 Q280,222 200,210 Q200,180 235,160 Z" fill="#fbe0e5" stroke="#e0566b"/>
        <text x="295" y="190" font-size="12" font-weight="700" fill="#c23a50" text-anchor="middle">側頭葉</text>
        <!-- 中心溝（運動野/感覚野の境） -->
        <line x1="248" y1="68" x2="240" y2="158" stroke="#1d2433" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="248" y="60" font-size="8" fill="#1d2433" text-anchor="middle">中心溝</text>
        <text x="215" y="80" font-size="8" fill="#3a48c0">運動野</text>
        <text x="265" y="80" font-size="8" fill="#0e8f7c">感覚野</text>
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">大脳皮質の4つの葉（左半球の側面）</text>
      </svg>`,
      figcaption: "大脳半球の側面図。前頭葉（運動・計画）、頭頂葉（体性感覚）、側頭葉（聴覚・言語理解）、後頭葉（視覚）の位置。中心溝を挟んで運動野と感覚野が向かい合う。",
      terms: [
        { term: "大脳皮質", def: "脳の最外層。高次の知覚・思考・言語・計画を担う薄い層。" },
        { term: "前頭葉", def: "運動指令・計画・判断・言語産出を担う前方の葉。" },
        { term: "後頭葉", def: "視覚処理（一次視覚野）を担う後方の葉。" },
        { term: "一次運動野／体性感覚野", def: "随意運動の指令を出す領域／身体感覚を受け取る領域。中心溝を挟む。" },
        { term: "ホムンクルス", def: "皮質上の身体部位対応を、担当領域の広さに応じて誇張した人形像。" },
        { term: "連合野", def: "感覚・運動に直接関わらず情報を統合し高次機能を担う広域。" },
        { term: "前頭前野", def: "計画・意思決定・衝動抑制など実行機能と人格の中枢。" },
        { term: "フィニアス・ゲージ", def: "前頭前野損傷後に人格が一変した1848年の歴史的症例。" },
      ],
    },
    {
      title: "大脳半球の側性化 — 言語と分離脳",
      body: `
        <p>左右の大脳半球は対称に見えるが、機能には<strong>偏り（側性化／lateralization）</strong>がある。両半球は<strong>脳梁（corpus callosum）</strong>という太い神経線維束で結ばれ、情報をやり取りしている。</p>
        <div class="callout key"><b>対側支配</b>：左半球は身体の<strong>右側</strong>を、右半球は<strong>左側</strong>を制御・感受する。視覚も同様に、各眼の<strong>右視野</strong>の情報は左半球へ、<strong>左視野</strong>は右半球へ送られる。この交差が分離脳研究の鍵となる。</div>
        <h3>言語の側性化 — 失語症からの発見</h3>
        <p>多くの人（特に右利き）では言語機能が<strong>左半球</strong>に偏っている。これは脳損傷患者の<strong>失語症（aphasia）</strong>の研究から明らかになった。</p>
        <ul>
          <li><strong>ブローカ野（Broca's area）</strong>：左<em>前頭葉</em>にある言語<strong>産出</strong>の領域。損傷すると<strong>ブローカ失語（運動性失語）</strong>＝言葉を理解できるが、たどたどしく話しづらい。</li>
          <li><strong>ウェルニッケ野（Wernicke's area）</strong>：左<em>側頭葉</em>にある言語<strong>理解</strong>の領域。損傷すると<strong>ウェルニッケ失語（感覚性失語）</strong>＝流暢に話せるが意味が通らず、理解も困難。</li>
        </ul>
        <div class="callout tip"><b>覚え方</b>：ブローカ＝前頭葉で「<strong>口（産出）</strong>」、ウェルニッケ＝側頭葉で「<strong>耳（理解）</strong>」。両者をつなぐ弓状束が切れると、理解・発話は保たれるが復唱だけが困難になる（伝導失語）。</div>
        <h3>分離脳研究 — スペリーとガザニガ</h3>
        <p>重症てんかんの治療として脳梁を切断する手術を受けた患者（<strong>分離脳／split brain</strong>）を対象に、<strong>ロジャー・スペリー（Sperry）</strong>とガザニガが行った研究は、半球の機能差を鮮やかに示し、スペリーはノーベル賞を受賞した。</p>
        <p>脳梁が切れると左右半球が情報を共有できなくなる。実験では、画面中央を凝視させ、ごく短時間だけ片側の視野に刺激を提示する。</p>
        <ul>
          <li><strong>右視野（→左半球）</strong>に語を見せると、左半球に言語があるため<strong>口頭で答えられる</strong>。</li>
          <li><strong>左視野（→右半球）</strong>に物を見せると、右半球に言語中枢がないため<strong>「見えなかった」と言う</strong>が、左手（右半球が支配）でなら<em>その物を選び取れる</em>。</li>
        </ul>
        <p>つまり右半球は対象を「知っている」のに言葉にできない。これは言語が左半球に局在することを直接示した。</p>
        <h3>半球機能差（一般的傾向）</h3>
        <table>
          <tr><th>左半球（多くの人）</th><th>右半球（多くの人）</th></tr>
          <tr><td>言語・読み書き・計算</td><td>空間認知・顔の認知</td></tr>
          <tr><td>論理的・分析的・逐次的処理</td><td>全体的・図形的処理、音楽・情動</td></tr>
        </table>
        <div class="callout warn"><b>俗説に注意</b>：「左脳人間／右脳人間」のように、人を一方の半球タイプに分ける通俗的な説には科学的根拠がない。機能差は<em>傾向</em>であり、健常な脳では両半球が脳梁を介して常に協調して働く。</div>
      `,
      figure: `<svg viewBox="0 0 540 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <!-- 注視点 -->
        <circle cx="270" cy="40" r="4" fill="#1d2433"/><text x="270" y="25" text-anchor="middle" font-size="9" fill="#5b6478">注視点</text>
        <!-- 左視野/右視野 -->
        <rect x="120" y="55" width="150" height="36" fill="#fbe0e5" stroke="#e0566b"/><text x="195" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#c23a50">左視野</text>
        <rect x="270" y="55" width="150" height="36" fill="#e9ebfe" stroke="#5b6cf0"/><text x="345" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#3a48c0">右視野</text>
        <!-- 交差矢印 -->
        <g stroke-width="2" fill="none" marker-end="url(#sp-ar)">
          <path d="M195,91 C220,120 320,120 345,150" stroke="#e0566b"/>
          <path d="M345,91 C320,120 220,120 195,150" stroke="#5b6cf0"/>
        </g>
        <defs><marker id="sp-ar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1d2433"/></marker></defs>
        <!-- 半球 -->
        <rect x="120" y="150" width="150" height="60" rx="10" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/><text x="195" y="175" text-anchor="middle" font-size="11" font-weight="700" fill="#3a48c0">左半球</text><text x="195" y="194" text-anchor="middle" font-size="9" fill="#5b6478">言語（話せる）</text>
        <rect x="270" y="150" width="150" height="60" rx="10" fill="#fbe0e5" stroke="#e0566b" stroke-width="2"/><text x="345" y="175" text-anchor="middle" font-size="11" font-weight="700" fill="#c23a50">右半球</text><text x="345" y="194" text-anchor="middle" font-size="9" fill="#5b6478">話せない／左手で示す</text>
        <text x="20" y="22" font-size="13" font-weight="800" fill="#1d2433">分離脳：視野と半球の交差</text>
      </svg>`,
      figcaption: "分離脳実験の原理。右視野の刺激は言語のある左半球へ届き口頭で答えられるが、左視野の刺激は右半球へ届くため言葉にできず、左手で示すしかない。",
      terms: [
        { term: "側性化（ラテラリゼーション）", def: "左右の大脳半球で機能が偏ること。" },
        { term: "脳梁", def: "左右の半球を結び情報をやり取りする太い神経線維束。" },
        { term: "ブローカ野", def: "左前頭葉の言語産出領域。損傷で話しづらい運動性失語。" },
        { term: "ウェルニッケ野", def: "左側頭葉の言語理解領域。損傷で意味の通らない感覚性失語。" },
        { term: "分離脳", def: "脳梁を切断した状態。左右半球が情報を共有できない。" },
        { term: "スペリー", def: "分離脳研究で半球の機能差を示しノーベル賞を受賞した研究者。" },
        { term: "対側支配", def: "各半球が身体・視野の反対側を制御・感受すること。" },
      ],
    },
    {
      title: "内分泌系 — ホルモンによる化学的伝達",
      body: `
        <p>身体には、神経系と並ぶもう一つの情報伝達システムがある。<strong>内分泌系（endocrine system）</strong>は、<strong>内分泌腺</strong>が<strong>ホルモン（hormone）</strong>という化学物質を<em>血流</em>に分泌し、全身の標的器官へ作用させる。</p>
        <div class="callout key"><b>神経系と内分泌系の違い</b>：神経系はニューロンを通じて<strong>速く・局所的に・短時間</strong>働く（電話のような直通連絡）。内分泌系は血流を介して<strong>遅く・全身に・持続的に</strong>働く（手紙の一斉送付）。両者は密に連携し、特に<strong>視床下部</strong>がその橋渡しをする。</div>
        <h3>主要な内分泌腺とホルモン</h3>
        <table>
          <tr><th>腺</th><th>主なホルモン</th><th>働き</th></tr>
          <tr><td><b>下垂体</b></td><td>成長ホルモン、各種刺激ホルモン</td><td>「<strong>マスター腺</strong>」。他の腺を制御。視床下部の支配下。</td></tr>
          <tr><td><b>甲状腺</b></td><td>サイロキシン</td><td>代謝率の調整。</td></tr>
          <tr><td><b>副腎</b></td><td>コルチゾール、アドレナリン</td><td>ストレス反応、覚醒、代謝。</td></tr>
          <tr><td><b>膵臓</b></td><td>インスリン</td><td>血糖値の調整。</td></tr>
          <tr><td><b>性腺</b></td><td>テストステロン／エストロゲン</td><td>生殖、第二次性徴。</td></tr>
        </table>
        <h3>視床下部‐下垂体系</h3>
        <p>内分泌系の司令塔は<strong>視床下部</strong>である。視床下部は神経系の一部でありながら、すぐ下にぶら下がる<strong>下垂体</strong>を化学的に制御し、下垂体は全身のホルモン分泌を統括する。こうして視床下部が<strong>神経系と内分泌系をつなぐ接点</strong>となる。</p>
        <h3>ストレスと副腎</h3>
        <p>ストレス時には、視床下部の指令で<strong>副腎</strong>が二系統で反応する。</p>
        <ul>
          <li><strong>速い経路（交感神経‐副腎髄質系）</strong>：副腎髄質から<strong>アドレナリン（エピネフリン）</strong>が放出され、心拍・血圧・血糖を急上昇させ、闘争‐逃走反応を即座に支える。</li>
          <li><strong>遅い経路（HPA軸：視床下部‐下垂体‐副腎)</strong>：副腎皮質から<strong>コルチゾール</strong>が分泌され、血糖を維持し炎症を抑え、持続的ストレスに備える。慢性的な高コルチゾールは免疫抑制や海馬への悪影響と関連する。</li>
        </ul>
        <div class="callout note">同じ<strong>アドレナリン</strong>でも、交感神経の終末では神経伝達物質として、副腎から血中に出る場合はホルモンとして働く。神経系と内分泌系がいかに連続的かを示す例である。</div>
      `,
      figure: `<svg viewBox="0 0 540 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <g text-anchor="middle">
          <rect x="190" y="20" width="160" height="36" rx="8" fill="#5b6cf0"/><text x="270" y="43" fill="#fff" font-size="12" font-weight="700">視床下部（司令塔）</text>
          <rect x="195" y="80" width="150" height="36" rx="8" fill="#15c4a8"/><text x="270" y="103" fill="#fff" font-size="12" font-weight="700">下垂体（マスター腺）</text>
          <rect x="70" y="150" width="120" height="34" rx="8" fill="#fdebd0" stroke="#f0a020"/><text x="130" y="172" font-size="11" font-weight="700">甲状腺</text>
          <rect x="210" y="150" width="120" height="34" rx="8" fill="#fbe0e5" stroke="#e0566b"/><text x="270" y="172" font-size="11" font-weight="700">副腎</text>
          <rect x="350" y="150" width="120" height="34" rx="8" fill="#fdebd0" stroke="#f0a020"/><text x="410" y="172" font-size="11" font-weight="700">性腺・膵臓 ほか</text>
          <text x="270" y="215" font-size="10" fill="#c23a50" font-weight="700">アドレナリン（速）／コルチゾール（遅）</text>
        </g>
        <g stroke="#9aa3bd" stroke-width="2" fill="none" marker-end="url(#en-ar)">
          <line x1="270" y1="56" x2="270" y2="78"/>
          <path d="M270,116 L130,148"/><path d="M270,116 L270,148"/><path d="M270,116 L410,148"/>
          <line x1="270" y1="184" x2="270" y2="200"/>
        </g>
        <defs><marker id="en-ar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9aa3bd"/></marker></defs>
        <text x="20" y="16" font-size="13" font-weight="800" fill="#1d2433">視床下部‐下垂体を頂点とする内分泌系</text>
      </svg>`,
      figcaption: "内分泌系の階層。視床下部が下垂体を制御し、下垂体が甲状腺・副腎・性腺などを統括する。視床下部が神経系と内分泌系をつなぐ接点となる。",
      terms: [
        { term: "内分泌系", def: "ホルモンを血流に分泌し全身の標的器官へ作用させる伝達系。" },
        { term: "ホルモン", def: "内分泌腺から血流に放出され遠隔の器官に作用する化学物質。" },
        { term: "下垂体", def: "他の内分泌腺を制御する「マスター腺」。視床下部の支配下。" },
        { term: "コルチゾール", def: "副腎皮質から出る代表的ストレスホルモン（HPA軸の遅い経路）。" },
        { term: "アドレナリン", def: "副腎髄質から出て心拍等を急上昇させる。神経伝達物質としても働く。" },
        { term: "HPA軸", def: "視床下部‐下垂体‐副腎を結ぶ持続的ストレス反応の経路。" },
      ],
    },
    {
      title: "脳の可塑性と脳研究法 — 行動遺伝学の入口",
      body: `
        <p>脳は固定された配線ではなく、経験や損傷に応じて作り変わる。最後に、脳の柔軟性と、脳を「見る・調べる」ための研究法、そして行動への遺伝の寄与を概観する。</p>
        <h3>脳の可塑性（plasticity）</h3>
        <p><strong>神経可塑性</strong>とは、経験・学習・損傷に応じて神経回路（シナプスの結合）が変化する性質である。学習が成立するのは、繰り返し使われるシナプス結合が強まるからである（「共に発火する細胞は結びつく」＝ヘッブ則）。</p>
        <ul>
          <li>損傷後、残った領域が失われた機能を肩代わりすることがある（機能再編成）。</li>
          <li>子どもの脳は特に可塑性が高い（臨界期・敏感期）。点字読者の指の感覚野が拡大するなど、経験依存的な変化が知られる。</li>
          <li>かつて成人脳では新生しないとされたが、海馬などでは<strong>神経新生（neurogenesis）</strong>が起こることが示されている。</li>
        </ul>
        <h3>脳を調べる主な研究法</h3>
        <table>
          <tr><th>方法</th><th>測るもの／原理</th><th>長所</th></tr>
          <tr><td><b>EEG（脳波）</b></td><td>頭皮上の電気活動</td><td>時間分解能が高い（ミリ秒）。睡眠研究に有用。空間分解能は低い。</td></tr>
          <tr><td><b>fMRI（機能的MRI）</b></td><td>血流（酸素消費）の変化（BOLD）</td><td>空間分解能が高い。活動部位を精密に特定。時間分解能はやや低い。</td></tr>
          <tr><td><b>PET</b></td><td>放射性物質で代謝・血流を可視化</td><td>特定物質（受容体等）の分布を見られる。被曝あり。</td></tr>
          <tr><td><b>損傷法</b></td><td>損傷部位と機能障害の対応を調べる</td><td>因果の手がかり。症例（H.M., ゲージ）や動物実験。</td></tr>
          <tr><td><b>TMS（経頭蓋磁気刺激）</b></td><td>磁気で特定部位を一時的に活性化／抑制</td><td>「仮想的損傷」で因果を検証。非侵襲的。</td></tr>
        </table>
        <div class="callout tip"><b>使い分けの勘どころ</b>：<strong>EEGは「いつ」（時間）に、fMRIは「どこ」（空間）に強い</strong>。損傷法とTMSは「その部位が必要か（因果）」を、fMRI・PETは「課題中にどこが働くか（相関）」を主に明らかにする。</div>
        <h3>行動遺伝学の触り</h3>
        <p><strong>行動遺伝学（behavioral genetics）</strong>は、行動や心的特性に対する<strong>遺伝（nature）と環境（nurture）</strong>の相対的な寄与を調べる分野である。</p>
        <ul>
          <li><strong>双生児研究</strong>：遺伝子をほぼ100%共有する<strong>一卵性双生児</strong>と約50%の<strong>二卵性双生児</strong>を比較する。一卵性でより類似度が高ければ、その形質に遺伝の影響が示唆される。</li>
          <li><strong>養子研究</strong>：養子を、生物学的親と養育親の双方と比較し、遺伝と環境の影響を分離する。</li>
          <li><strong>遺伝率（heritability）</strong>：集団内の個人差のうち遺伝で説明される割合。あくまで<em>集団</em>の統計量で、個人の運命を決める値ではない。</li>
        </ul>
        <div class="callout warn"><b>誤解しやすい点</b>：「遺伝率が高い＝変えられない」ではない。遺伝率は特定の集団・環境での個人差の指標にすぎず、環境が変われば値も変わる。現代では遺伝と環境を対立させず、<strong>両者の相互作用（エピジェネティクスなど）</strong>として理解する。</div>
      `,
      figure: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <!-- 軸 -->
        <line x1="70" y1="180" x2="510" y2="180" stroke="#1d2433" stroke-width="2"/>
        <line x1="70" y1="40" x2="70" y2="180" stroke="#1d2433" stroke-width="2"/>
        <text x="55" y="45" font-size="9" text-anchor="end" fill="#5b6478">高</text>
        <text x="290" y="205" text-anchor="middle" font-size="10" fill="#5b6478">時間分解能（速い →）</text>
        <text x="40" y="115" font-size="10" fill="#5b6478" transform="rotate(-90 40 115)" text-anchor="middle">空間分解能（高い ↑）</text>
        <!-- 散布 -->
        <g font-size="11" font-weight="700">
          <circle cx="430" cy="70" r="10" fill="#5b6cf0"/><text x="430" y="55" text-anchor="middle" fill="#3a48c0">fMRI</text>
          <circle cx="380" cy="95" r="10" fill="#f0a020"/><text x="385" y="118" text-anchor="middle" fill="#c8800f">PET</text>
          <circle cx="140" cy="150" r="10" fill="#15c4a8"/><text x="140" y="138" text-anchor="middle" fill="#0e8f7c">EEG</text>
          <circle cx="250" cy="110" r="10" fill="#e0566b"/><text x="250" y="98" text-anchor="middle" fill="#c23a50">TMS</text>
        </g>
        <text x="20" y="22" font-size="13" font-weight="800" fill="#1d2433">脳研究法の時間／空間分解能</text>
        <text x="200" y="165" font-size="8" fill="#9aa3bd">EEGは速いが大まか、fMRIは精密だがやや遅い</text>
      </svg>`,
      figcaption: "主な脳研究法の位置づけ。EEGは時間分解能（いつ）に優れ、fMRI/PETは空間分解能（どこ）に優れる。TMSは特定部位への因果的介入を可能にする。",
      terms: [
        { term: "神経可塑性", def: "経験・学習・損傷に応じて神経回路が変化する脳の性質。" },
        { term: "神経新生", def: "成人脳でも海馬などで新たなニューロンが生まれる現象。" },
        { term: "EEG（脳波）", def: "頭皮上の電気活動を記録。時間分解能が高い研究法。" },
        { term: "fMRI", def: "血流（BOLD）変化から脳活動部位を可視化。空間分解能が高い。" },
        { term: "TMS", def: "磁気で特定部位を一時的に刺激/抑制し因果を調べる非侵襲法。" },
        { term: "行動遺伝学", def: "行動・特性への遺伝と環境の相対的寄与を調べる分野。" },
        { term: "双生児研究", def: "一卵性と二卵性双生児を比較し遺伝の影響を推定する手法。" },
        { term: "遺伝率", def: "集団内の個人差のうち遺伝で説明される割合。個人の宿命ではない。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "ニューロンにおいて、他の細胞からの信号を主に「受け取る」部位はどれか。", choices: ["軸索", "樹状突起", "髄鞘", "軸索終末"], answer: 1, explain: "樹状突起が信号を受け取り、細胞体で統合され、軸索を通って終末から送り出される。信号は一方向に流れる。", difficulty: 1 },
    { type: "mcq", stem: "軸索を覆い、跳躍伝導によって神経信号の伝達を高速化する構造はどれか。", choices: ["シナプス", "髄鞘（ミエリン鞘）", "細胞体", "シナプス小胞"], answer: 1, explain: "髄鞘は絶縁体として働き、ランビエ絞輪の間を信号が跳ぶ跳躍伝導で伝達を速める。破壊されると多発性硬化症のように伝導が障害される。", difficulty: 1 },
    { type: "mcq", stem: "「活動電位は閾値を超えれば常に一定の大きさで生じ、超えなければ生じない」とする原理を何というか。", choices: ["恒常性の原理", "全か無かの法則", "ウェーバーの法則", "反証可能性"], answer: 1, explain: "全か無かの法則。刺激の強さは活動電位の大きさではなく発火の頻度として符号化される。", difficulty: 1 },
    { type: "mcq", stem: "発火直後に、どんなに強い刺激でも再び活動電位を生じられない短時間を何というか。", choices: ["静止電位", "絶対不応期", "閾値", "再取り込み"], answer: 1, explain: "絶対不応期。これに続く相対不応期ではより強い刺激なら発火できる。不応期があるため信号は逆流せず一方向に進む。", difficulty: 2 },
    { type: "mcq", stem: "不足するとパーキンソン病（運動障害）と関連が深い神経伝達物質はどれか。", choices: ["セロトニン", "GABA", "ドーパミン", "アセチルコリン"], answer: 2, explain: "黒質のドーパミン作動性ニューロンが減少するとパーキンソン病を生じる。治療には前駆物質L-ドーパが用いられる。", difficulty: 2 },
    { type: "mcq", stem: "脳の主要な「抑制性」神経伝達物質で、不足が不安やてんかんと関連するのはどれか。", choices: ["グルタミン酸", "GABA", "ノルアドレナリン", "アセチルコリン"], answer: 1, explain: "GABAは脳の主要な抑制性伝達物質。抗不安薬はGABAの作用を強める。グルタミン酸は逆に主要な興奮性伝達物質である。", difficulty: 2 },
    { type: "mcq", stem: "うつ病との関連が指摘され、SSRI（選択的セロトニン再取り込み阻害薬）の標的となる神経伝達物質はどれか。", choices: ["ドーパミン", "セロトニン", "アセチルコリン", "GABA"], answer: 1, explain: "SSRIはセロトニンの再取り込みを阻害してシナプス間隙の濃度を高める。セロトニンは気分・睡眠・食欲に関与する。", difficulty: 2 },
    { type: "mcq", stem: "神経伝達物質の働きを「妨げる・遮断する」薬物を何と呼ぶか。", choices: ["アゴニスト（作動薬）", "アンタゴニスト（拮抗薬）", "アロステリック", "プラセボ"], answer: 1, explain: "アンタゴニスト（拮抗薬）は受容体を遮断して伝達を妨げる。逆に働きを強める・模倣するのがアゴニスト（作動薬）である。", difficulty: 2 },
    { type: "mcq", stem: "中枢神経系（CNS）を構成するのはどれか。", choices: ["脳と脊髄", "体性神経系と自律神経系", "交感神経と副交感神経", "感覚神経と運動神経"], answer: 0, explain: "中枢神経系は脳と脊髄から成る。末梢神経系（PNS）が体性神経系と自律神経系に分かれる。", difficulty: 1 },
    { type: "mcq", stem: "ストレスや危機の際に優位となり、心拍を速め瞳孔を散大させて闘争‐逃走反応を準備するのはどれか。", choices: ["副交感神経", "体性神経系", "交感神経", "中枢神経系"], answer: 2, explain: "交感神経は身体を活動・緊急モードにする「アクセル」。落ち着くと副交感神経（ブレーキ）が優位になり休息・消化を促す。", difficulty: 1 },
    { type: "mcq", stem: "熱いものに触れて思わず手を引く反射は、脳の判断を待たずにどこで処理されるか。", choices: ["小脳", "脊髄", "視床", "前頭前野"], answer: 1, explain: "反射弓では信号が脊髄で折り返すため反応が速い。「熱い」と感じるのは手を引いた後に情報が脳へ届いてからである。", difficulty: 2 },
    { type: "mcq", stem: "呼吸・心拍・血圧など生命維持に不可欠な機能を制御し、損傷が致命的となる脳幹の部位はどれか。", choices: ["延髄", "小脳", "海馬", "帯状回"], answer: 0, explain: "延髄は呼吸・心拍など生命維持の中枢。脳幹（延髄・橋・中脳）の中でも特に基礎的な生命機能を担う。", difficulty: 2 },
    { type: "mcq", stem: "嗅覚を除くほぼすべての感覚情報を大脳皮質へ中継する「玄関口」となる構造はどれか。", choices: ["視床下部", "視床", "扁桃体", "網様体"], answer: 1, explain: "視床は感覚情報を大脳皮質の適切な領域へ振り分ける中継基地。嗅覚だけは視床を経由しない点が特徴である。", difficulty: 2 },
    { type: "mcq", stem: "体温・摂食・睡眠などの恒常性（ホメオスタシス）を維持し、自律神経系と内分泌系を統御する小さな構造はどれか。", choices: ["視床", "視床下部", "小脳", "橋"], answer: 1, explain: "視床下部は恒常性の中枢であり、下垂体を通じて内分泌系も制御する。神経系と内分泌系をつなぐ接点である。", difficulty: 2 },
    { type: "mcq", stem: "恐怖や怒りなどの情動の処理、危険の検出に中心的な役割を果たす辺縁系の構造はどれか。", choices: ["海馬", "扁桃体", "帯状回", "小脳"], answer: 1, explain: "扁桃体は情動（特に恐怖）と情動的記憶の中核。損傷すると恐怖反応が低下する（クリューバー‐ビューシー症候群）。", difficulty: 2 },
    { type: "mcq", stem: "両側の海馬を含む側頭葉内側を切除し、新しい長期記憶を形成できなくなった（前向性健忘）有名な症例は誰か。", choices: ["フィニアス・ゲージ", "患者H.M.", "アルバート坊や", "リトル・ハンス"], answer: 1, explain: "患者H.M.の症例は、海馬が新しい記憶の形成に不可欠であることを示した。技能学習や古い記憶は保たれた点も重要である。", difficulty: 2 },
    { type: "mcq", stem: "視覚情報を処理する一次視覚野が存在する大脳の葉はどれか。", choices: ["前頭葉", "頭頂葉", "側頭葉", "後頭葉"], answer: 3, explain: "後頭葉は視覚処理を担う。前頭葉は運動・計画、頭頂葉は体性感覚、側頭葉は聴覚・言語理解を主に担う。", difficulty: 1 },
    { type: "mcq", stem: "一次運動野・体性感覚野における身体部位の対応について、皮質上で占める領域の広さは何に比例するか。", choices: ["身体部位の物理的な大きさ", "その部位の繊細さ・重要性", "その部位の重量", "心臓からの距離"], answer: 1, explain: "領域の広さは部位の繊細さ・重要性に比例する。手・唇・舌は広く、体幹は狭い。これを誇張して描いた人形像がホムンクルスである。", difficulty: 3 },
    { type: "mcq", stem: "1848年の事故で前頭前野を損傷し、知能は保たれたが人格が一変したとされる症例は誰か。", choices: ["患者H.M.", "フィニアス・ゲージ", "ロジャー・スペリー", "ポール・ブローカ"], answer: 1, explain: "フィニアス・ゲージは鉄棒が前頭葉を貫通したのち衝動的・無計画になった。前頭前野が人格・社会的行動・自己制御に関わることを示す。", difficulty: 2 },
    { type: "mcq", stem: "左前頭葉にあり、損傷すると言葉は理解できるがたどたどしくしか話せなくなる（運動性失語）領域はどれか。", choices: ["ウェルニッケ野", "ブローカ野", "一次視覚野", "帯状回"], answer: 1, explain: "ブローカ野は言語産出を担う（前頭葉）。一方、左側頭葉のウェルニッケ野は言語理解を担い、損傷で意味の通らない感覚性失語となる。", difficulty: 2 },
    { type: "mcq", stem: "左右の大脳半球を結び、情報をやり取りする太い神経線維束はどれか。", choices: ["脳梁", "弓状束", "網様体", "脊髄"], answer: 0, explain: "脳梁は左右半球を結ぶ連絡路。てんかん治療でこれを切断した患者が分離脳であり、半球機能差の研究に用いられた。", difficulty: 1 },
    { type: "mcq", stem: "分離脳患者で、左視野（右半球へ届く）にだけ物を提示したとき、典型的に起こることはどれか。", choices: ["口頭で正しく名前を言える", "口頭では言えないが左手でその物を選べる", "右手で正確に文字を書ける", "まったく何も反応できない"], answer: 1, explain: "右半球には言語中枢がないため口頭で答えられないが、右半球が支配する左手でなら物を選べる。スペリーらの古典的知見である。", difficulty: 3 },
    { type: "mcq", stem: "内分泌系の説明として正しいものはどれか。", choices: ["ニューロンを介して速く局所的に作用する", "ホルモンを血流に分泌し全身に持続的に作用する", "脊髄反射を直接制御する", "髄鞘の形成を担う"], answer: 1, explain: "内分泌系はホルモンを血流に乗せ、遅く・全身に・持続的に作用する。速く局所的に働く神経系と対照的だが、視床下部を介して連携する。", difficulty: 1 },
    { type: "mcq", stem: "他の内分泌腺を制御する「マスター腺」と呼ばれ、視床下部の支配下にある腺はどれか。", choices: ["甲状腺", "下垂体", "副腎", "膵臓"], answer: 1, explain: "下垂体はマスター腺として全身のホルモン分泌を統括する。その下垂体を制御する司令塔が視床下部である。", difficulty: 2 },
    { type: "mcq", stem: "持続的なストレス時に副腎皮質から分泌され、血糖維持や炎症抑制に働く代表的ストレスホルモンはどれか。", choices: ["インスリン", "コルチゾール", "サイロキシン", "メラトニン"], answer: 1, explain: "コルチゾールはHPA軸（視床下部‐下垂体‐副腎）の遅い経路で分泌される。慢性的な高値は免疫抑制や海馬への悪影響と関連する。", difficulty: 2 },
    { type: "mcq", stem: "脳活動を測る方法のうち、血流（BOLD）の変化から活動部位を高い空間分解能で特定できるのはどれか。", choices: ["EEG（脳波）", "fMRI", "TMS", "損傷法"], answer: 1, explain: "fMRIは空間分解能（どこ）に優れる。EEGは時間分解能（いつ）に優れる。両者は得意とする側面が異なる。", difficulty: 2 },
    { type: "mcq", stem: "磁気によって特定の脳部位を一時的に活性化・抑制し、「仮想的損傷」としてその部位の因果的役割を調べる非侵襲的手法はどれか。", choices: ["PET", "fMRI", "TMS（経頭蓋磁気刺激）", "EEG"], answer: 2, explain: "TMSは特定部位の機能を一時的に変化させて行動への影響を見る。相関を示すfMRI/PETに対し、因果の検証に強い。", difficulty: 3 },
    { type: "mcq", stem: "行動への遺伝の影響を推定するため、遺伝子をほぼ100%共有するペアと約50%共有するペアを比較する研究法はどれか。", choices: ["双生児研究", "横断研究", "事例研究", "二重盲検法"], answer: 0, explain: "一卵性双生児と二卵性双生児の類似度を比較する双生児研究は、行動遺伝学の代表的手法である。養子研究も遺伝と環境の分離に用いられる。", difficulty: 2 },
  ],
});
