/* ============================================================
   視覚の神経基盤  (vis_foundations)
   ============================================================ */
PsychApp.registerModule({
  id: "vis_foundations",
  title: "視覚の神経基盤",
  emoji: "👁️‍🗨️",
  category: "vision",
  tagline: "網膜回路・側抑制と受容野・外側膝状体・大細胞/小細胞経路・第一次視覚野・背側/腹側経路",
  overview: `<p>視覚は網膜から大脳皮質へと階層的に処理される。本分野では、網膜の細胞回路と<strong>側抑制（lateral inhibition）</strong>、神経節細胞の<strong>受容野（receptive field）</strong>、視床の<strong>外側膝状体（LGN）</strong>における大細胞/小細胞経路の分離、そして<strong>第一次視覚野（V1）</strong>での方位選択性と機能コラム構造を扱う。さらに、V1以降が<strong>背側経路（where/how）</strong>と<strong>腹側経路（what）</strong>の二つに分かれ、知覚と行為を別個に支えることを見る。視覚は外界の受動的な写しではなく、各段階で能動的に再構成される情報処理である。</p>`,
  lessons: [
    {
      title: "網膜から皮質へ — 側抑制と受容野",
      body: `
        <p>網膜は単なる「カメラのフィルム」ではなく、層状に配列した神経細胞からなる小さな脳である。光が神経信号へ変換され、回路を通る間に早くも情報処理が始まる。</p>
        <h3>網膜の細胞層</h3>
        <p>光受容器で生じた信号は次の順で伝わる。<strong>光受容器（桿体・錐体）</strong>→<strong>双極細胞（bipolar cell）</strong>→<strong>神経節細胞（ganglion cell）</strong>。神経節細胞の軸索が束ねられて<strong>視神経（optic nerve）</strong>となり、眼球を出る。この縦の流れに対して横方向の結合を担うのが2種の介在ニューロンである。<strong>水平細胞（horizontal cell）</strong>は光受容器と双極細胞の間で、<strong>アマクリン細胞（amacrine cell）</strong>は双極細胞と神経節細胞の間で側方の相互作用を媒介する。</p>
        <div class="callout key"><b>逆転網膜</b>：光は神経節細胞・双極細胞の層を通り抜けてから最奥の光受容器に達する。配線が手前にあるこの「裏返し」の構造のため、視神経が出る部位に盲点が生じる。</div>
        <h3>側抑制 — エッジを強調する</h3>
        <p><strong>側抑制（lateral inhibition）</strong>とは、興奮した受容器が水平方向の結合を介して隣接受容器の応答を抑える仕組みである。古くは <em>エルンスト・マッハ（Ernst Mach）</em>が知覚現象として論じ、<em>ハートライン（Hartline）</em>がカブトガニ（<em>Limulus</em>）の複眼で個々の受容器応答を記録し、その神経機構を実証した。</p>
        <p>側抑制は明暗の<strong>エッジ（境界）でコントラストを増強する</strong>。一様な領域の内部では隣接細胞どうしが等しく抑制し合うが、境界の明るい側は抑制が相対的に弱まって一層明るく、暗い側は一層暗く見える。これが<strong>マッハバンド（Mach band）</strong>（明暗の段の境に明るい/暗い帯が見える）や<strong>ヘルマン格子（Hermann grid）</strong>（白い交差点に灰色の点がちらつく）を生む。</p>
        <h3>受容野 — 中心-周辺拮抗構造</h3>
        <p>個々の神経細胞が反応する網膜上の領域を<strong>受容野（receptive field）</strong>という。<em>クフラー（Kuffler）</em>は、網膜神経節細胞の受容野が同心円状の<strong>中心-周辺拮抗構造（center-surround）</strong>をもつことを発見した。</p>
        <ul>
          <li><strong>ON中心型</strong>：中心に光が当たると興奮し、周辺に光が当たると抑制される。</li>
          <li><strong>OFF中心型</strong>：中心の光で抑制され、周辺の光で興奮する。</li>
        </ul>
        <p>この構造のため、神経節細胞は中心と周辺の<strong>空間コントラストに強く反応し、一様な照明には弱く反応する</strong>。側抑制の効果が受容野の周辺部として組み込まれていると言える。</p>
        <h3>外側膝状体 — 並列経路の分離</h3>
        <p>視神経は視交叉を経て、視床の<strong>外側膝状体（LGN, lateral geniculate nucleus）</strong>に達する。LGNは6層からなる層構造をもち、性質の異なる並列経路が分かれて中継される。</p>
        <table>
          <tr><th>経路</th><th>空間/時間分解能</th><th>担う情報</th></tr>
          <tr><td><b>大細胞層（magnocellular, M）</b></td><td>低空間・高時間分解能</td><td>無彩色のコントラスト・運動</td></tr>
          <tr><td><b>小細胞層（parvocellular, P）</b></td><td>高空間・低時間分解能</td><td>色（赤緑）・形の細部</td></tr>
          <tr><td><b>顆粒細胞層（koniocellular, K）</b></td><td>層間に分布</td><td>青黄系の色</td></tr>
        </table>
        <div class="callout tip"><b>覚え方</b>：M（magno=大きい）は「大づかみで素早い」=運動と粗い形、P（parvo=小さい）は「細かくゆっくり」=色と細部。この分業はV1以降の背側/腹側経路の分化へとつながっていく。</div>
      `,
      figure: `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="230" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">ON中心型の中心-周辺受容野</text>
        <circle cx="160" cy="130" r="68" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <circle cx="160" cy="130" r="32" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <text x="160" y="135" text-anchor="middle" font-size="22" font-weight="800" fill="#15c4a8">＋</text>
        <text x="160" y="80" text-anchor="middle" font-size="20" font-weight="800" fill="#e0566b">−</text>
        <text x="160" y="195" text-anchor="middle" font-size="20" font-weight="800" fill="#e0566b">−</text>
        <text x="160" y="218" text-anchor="middle" font-size="11" fill="#5b6478">中心＝興奮(ON)／周辺＝抑制</text>
        <g font-size="12" fill="#1d2433">
          <text x="320" y="70">・中心に光 → 強く興奮</text>
          <text x="320" y="100">・周辺に光 → 抑制</text>
          <text x="320" y="130">・全面に一様な光 → 弱い応答</text>
          <text x="320" y="160" fill="#5b6478">→ 空間コントラスト（境界）に</text>
          <text x="320" y="178" fill="#5b6478">　強く反応する</text>
        </g>
      </svg>`,
      figcaption: "ON中心型神経節細胞の受容野。中心の光は興奮を、周辺の光は抑制を生み、一様な照明より明暗の境界に強く反応する。",
      terms: [
        { term: "光受容器→双極→神経節", def: "網膜の信号は光受容器→双極細胞→神経節細胞と縦に流れ、神経節細胞の軸索が視神経となる。" },
        { term: "水平細胞 / アマクリン細胞", def: "網膜で横方向の結合を担う介在ニューロン。側方の相互作用（側抑制など）を媒介する。" },
        { term: "側抑制（lateral inhibition）", def: "興奮した受容器が隣接受容器を抑制し、エッジのコントラストを増強する仕組み。" },
        { term: "マッハバンド", def: "明暗の段差の境界に明るい/暗い帯が見える現象。側抑制で説明される。" },
        { term: "受容野（receptive field）", def: "ある神経細胞が反応する網膜上の領域。神経節細胞では中心-周辺拮抗構造をもつ。" },
        { term: "中心-周辺拮抗（center-surround）", def: "受容野の中心と周辺が逆向きに反応する構造。クフラーが発見。ON/OFF中心型がある。" },
        { term: "外側膝状体（LGN）", def: "視床にある視覚の中継核。6層からなり、M・P・K経路が分離して中継される。" },
        { term: "大細胞/小細胞経路（M/P）", def: "M経路は低空間・高時間で運動を、P経路は高空間・低時間で色と細部を担う。" },
      ],
    },
    {
      title: "第一次視覚野と二つの皮質経路",
      body: `
        <p>LGNからの信号は後頭葉の<strong>第一次視覚野（V1, primary visual cortex／線条皮質, striate cortex）</strong>に届く。ここで初めて、線分の傾きという複雑な特徴が抽出される。</p>
        <h3>V1の細胞 — 単純型と複雑型</h3>
        <p><em>ヒューベルとウィーゼル（Hubel & Wiesel）</em>はネコ・サルのV1細胞を記録し、その業績で1981年にノーベル賞を受賞した。彼らはV1細胞が<strong>方位選択性（orientation selectivity）</strong>をもつことを示した。</p>
        <ul>
          <li><strong>単純型細胞（simple cell）</strong>：特定の<em>方位</em>かつ特定の<em>位置</em>にある線分（エッジ）に最もよく反応する。受容野はON/OFF領域が並んだ構造をもつ。</li>
          <li><strong>複雑型細胞（complex cell）</strong>：特定の方位には選択的だが、受容野内での位置にはより寛容である。多くは<em>運動方向にも選択性</em>をもつ。</li>
        </ul>
        <div class="callout key"><b>階層的特徴抽出</b>：複数の中心-周辺型LGN細胞の入力を束ねると単純型細胞の方位選択性が、複数の単純型細胞を束ねると位置に寛容な複雑型細胞ができる、というのがヒューベルとウィーゼルの階層モデルである。</div>
        <h3>機能コラム構造</h3>
        <p>V1の細胞は無秩序ではなく、皮質表面に対して垂直な<strong>コラム（columnar）</strong>構造に整然と配列している。</p>
        <ul>
          <li><strong>方位コラム（orientation column）</strong>：同じ方位を好む細胞が縦に集まる。隣接コラムへ進むと好む方位が少しずつ回転する。</li>
          <li><strong>眼優位コラム（ocular dominance column）</strong>：左眼・右眼いずれの入力に強く反応するかで縞状に分かれる。</li>
          <li><strong>ハイパーコラム（hypercolumn）</strong>：あらゆる方位と両眼の入力を含む、網膜上の一点を完全に処理する1単位。</li>
          <li><strong>ブロブ（blob）</strong>：チトクロム酸化酵素で濃染される領域で、主に色情報を扱う。</li>
        </ul>
        <h3>臨界期と可塑性</h3>
        <p>ヒューベルとウィーゼルは、子ネコの片眼を発達初期に遮蔽する<strong>単眼遮蔽（monocular deprivation）</strong>実験を行った。すると遮蔽した眼に反応する細胞が激減し、眼優位コラムの配分が開いていた眼に偏った。この変化は発達の<strong>臨界期（critical period）</strong>に限って強く起こり、視覚系の<em>経験依存的可塑性</em>を示す古典的証拠となった。</p>
        <h3>背側経路と腹側経路</h3>
        <p>V1以降、視覚情報は機能の異なる二つの流れに分かれる。</p>
        <table>
          <tr><th></th><th>背側経路（dorsal）</th><th>腹側経路（ventral）</th></tr>
          <tr><td>到達先</td><td>頭頂葉</td><td>側頭葉</td></tr>
          <tr><td>担う機能</td><td>位置・運動・行為（where/how）</td><td>物体の同定（what）</td></tr>
          <tr><td>主入力</td><td>M経路寄り</td><td>P経路寄り</td></tr>
        </table>
        <p><em>アンガーライダーとミシュキン（Ungerleider & Mishkin）</em>は、この二経路を「どこ（where）」対「なに（what）」の区別として提唱した。後に <em>グデイルとミルナー（Goodale & Milner）</em>は、背側経路を<strong>行為のための視覚</strong>、腹側経路を<strong>知覚のための視覚</strong>と捉え直した。</p>
        <div class="callout example"><b>二重解離</b>：視覚失認（腹側損傷）の患者DFは、スリットの傾きを言葉や手の角度で報告できないのに、そこへカードを差し込む動作は正確にできた。逆に<strong>視覚性運動失調（optic ataxia, 背側損傷）</strong>では、対象は同定できるのに正確に手を伸ばせない。知覚と行為が別の経路で支えられている証拠である。</div>
      `,
      figure: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="240" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">背側経路と腹側経路</text>
        <path d="M70,150 C70,100 250,80 330,130 C250,200 70,200 70,150 Z" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="1.5"/>
        <circle cx="95" cy="150" r="9" fill="#fff" stroke="#5b6cf0" stroke-width="2"/>
        <text x="95" y="178" text-anchor="middle" font-size="10" fill="#5b6478">眼</text>
        <rect x="300" y="118" width="34" height="26" rx="4" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <text x="317" y="135" text-anchor="middle" font-size="10" fill="#0e8e79">V1</text>
        <path d="M334,128 C390,90 430,70 470,68" fill="none" stroke="#5b6cf0" stroke-width="3" marker-end="url(#vfar)"/>
        <path d="M334,138 C390,170 430,185 470,188" fill="none" stroke="#f0a020" stroke-width="3" marker-end="url(#vfar2)"/>
        <defs>
          <marker id="vfar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker>
          <marker id="vfar2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f0a020"/></marker>
        </defs>
        <text x="430" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#5b6cf0">背側（頭頂葉）</text>
        <text x="430" y="46" text-anchor="middle" font-size="10" fill="#5b6478">どこ／行為 where-how</text>
        <text x="432" y="208" text-anchor="middle" font-size="11" font-weight="700" fill="#b97000">腹側（側頭葉）</text>
        <text x="432" y="222" text-anchor="middle" font-size="10" fill="#5b6478">なに what</text>
      </svg>`,
      figcaption: "V1から視覚情報は二経路に分岐する。背側経路（頭頂葉）は位置・運動・行為を、腹側経路（側頭葉）は物体の同定を担う。",
      terms: [
        { term: "第一次視覚野（V1）", def: "後頭葉の線条皮質。LGNからの入力を受け、方位選択性など複雑な特徴抽出を始める。" },
        { term: "単純型細胞（simple cell）", def: "特定の方位かつ特定の位置の線分に反応するV1細胞（Hubel & Wiesel）。" },
        { term: "複雑型細胞（complex cell）", def: "特定方位に選択的だが位置に寛容で、多くは運動方向選択性をもつV1細胞。" },
        { term: "方位選択性（orientation selectivity）", def: "細胞が特定の傾きの線分・エッジに最もよく反応する性質。" },
        { term: "眼優位コラム（ocular dominance column）", def: "左眼・右眼どちらの入力に強く反応するかで縞状に分かれるV1のコラム構造。" },
        { term: "ハイパーコラム / ブロブ", def: "あらゆる方位・両眼を含む処理単位がハイパーコラム。色を扱う濃染領域がブロブ。" },
        { term: "背側経路 / 腹側経路", def: "背側（頭頂葉）はwhere/how（位置・行為）、腹側（側頭葉）はwhat（同定）を担う（Ungerleider & Mishkin、Goodale & Milner）。" },
        { term: "視覚性運動失調（optic ataxia）", def: "背側損傷で、対象を同定できても正確に手を伸ばせない障害。患者DFの視覚失認と二重解離をなす。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "網膜内の縦方向の情報の流れとして正しい順序はどれか。", choices: ["神経節細胞→双極細胞→光受容器", "光受容器→双極細胞→神経節細胞", "光受容器→水平細胞→神経節細胞", "双極細胞→光受容器→神経節細胞"], answer: 1, explain: "信号は光受容器→双極細胞→神経節細胞と流れ、神経節細胞の軸索が視神経となる。水平細胞・アマクリン細胞は横方向の結合を担う。", difficulty: 1 },
    { type: "mcq", stem: "カブトガニ（Limulus）の眼の記録から側抑制の神経機構を実証したのは誰か。", choices: ["クフラー", "ハートライン", "ヒューベル", "ベケシー"], answer: 1, explain: "ハートライン（Hartline）はカブトガニの複眼で個々の受容器応答を記録し、隣接受容器どうしが抑制し合うことを示した。マッハは現象として側抑制を論じた。", difficulty: 2 },
    { type: "mcq", stem: "明暗の段差の境界に明るい/暗い帯が見える「マッハバンド」を生む主な仕組みはどれか。", choices: ["順応", "側抑制", "両眼視差", "輻輳"], answer: 1, explain: "側抑制は境界でコントラストを増強し、明るい側をより明るく、暗い側をより暗く見せる。これがマッハバンドやヘルマン格子を生む。", difficulty: 2 },
    { type: "mcq", stem: "網膜神経節細胞の受容野が同心円状の中心-周辺拮抗構造をもつことを発見したのは誰か。", choices: ["クフラー", "ヘリング", "ランド", "ミシュキン"], answer: 0, explain: "クフラー（Kuffler）は神経節細胞の受容野に中心-周辺拮抗（center-surround）構造を見いだし、ON中心型・OFF中心型を記述した。", difficulty: 2 },
    { type: "mcq", stem: "ON中心型神経節細胞が最も弱く応答するのはどの刺激か。", choices: ["中心だけに当たる光", "周辺だけに当たる光", "受容野全面に一様に当たる光", "中心が暗く周辺が明るい刺激"], answer: 2, explain: "中心の興奮と周辺の抑制が打ち消し合うため、一様な照明には弱く応答する。中心-周辺の空間コントラストに強く反応するのが特徴である。", difficulty: 2 },
    { type: "mcq", stem: "外側膝状体（LGN）の大細胞層（magnocellular, M）の特徴として正しいのはどれか。", choices: ["高空間分解能で色（赤緑）を担う", "低空間・高時間分解能で運動を担う", "青黄系の色を担う", "両眼視差のみを担う"], answer: 1, explain: "M（大細胞）経路は低空間・高時間分解能で無彩色のコントラストと運動を担う。色と細部の高空間情報はP（小細胞）経路が担う。", difficulty: 2 },
    { type: "mcq", stem: "色（赤緑）と形の細部という高空間・低時間の情報を主に担うLGNの経路はどれか。", choices: ["大細胞層（M）", "小細胞層（P）", "顆粒細胞層（K）", "網様体"], answer: 1, explain: "小細胞層（parvocellular, P）は高空間・低時間分解能で、赤緑の色と形の細部を担う。青黄系はK（顆粒細胞層）が担う。", difficulty: 3 },
    { type: "mcq", stem: "第一次視覚野（V1）で、特定の方位かつ特定の位置の線分に最もよく反応する細胞はどれか。", choices: ["複雑型細胞", "単純型細胞", "二重反対色細胞", "神経節細胞"], answer: 1, explain: "単純型細胞（simple cell）は特定の方位かつ位置の線分に反応する。複雑型細胞は方位選択的だが位置に寛容で、運動方向選択性をもつことが多い。", difficulty: 2 },
    { type: "mcq", stem: "V1の方位選択性と機能コラム構造を発見し、1981年にノーベル賞を受賞したのは誰か。", choices: ["ハートラインとクフラー", "ヒューベルとウィーゼル", "ヤングとヘルムホルツ", "グデイルとミルナー"], answer: 1, explain: "ヒューベルとウィーゼル（Hubel & Wiesel）はV1の単純型・複雑型細胞と方位選択性、コラム構造を明らかにし、その業績で1981年にノーベル賞を受賞した。", difficulty: 1 },
    { type: "mcq", stem: "左眼・右眼のいずれの入力に強く反応するかで、V1が縞状に分かれる構造を何というか。", choices: ["方位コラム", "眼優位コラム", "ブロブ", "ハイパーコラム"], answer: 1, explain: "眼優位コラム（ocular dominance column）は、各細胞がどちらの眼の入力に強く反応するかで縞状に分かれる構造である。", difficulty: 2 },
    { type: "mcq", stem: "発達初期の子ネコで片眼を遮蔽（単眼遮蔽）すると、眼優位コラムに何が起こるか。", choices: ["変化は起こらない", "遮蔽した眼に反応する細胞が減り、開いた眼に配分が偏る", "両眼の配分が完全に均等になる", "色覚だけが失われる"], answer: 1, explain: "臨界期に片眼を遮蔽すると、その眼に反応する細胞が激減し、配分が開いた眼に偏る。視覚系の経験依存的可塑性を示す古典的実験である。", difficulty: 3 },
    { type: "mcq", stem: "「なに（what）」を扱う腹側経路が到達する脳葉はどこか。", choices: ["頭頂葉", "側頭葉", "前頭葉", "後頭葉のみ"], answer: 1, explain: "腹側経路（ventral stream）は側頭葉に向かい物体の同定（what）を担う。位置・行為（where/how）を担う背側経路は頭頂葉に向かう。", difficulty: 2 },
    { type: "mcq", stem: "視覚を「なに（what）」対「どこ（where）」の二経路として最初に提唱したのは誰か。", choices: ["アンガーライダーとミシュキン", "ヒューベルとウィーゼル", "ヘリングとヤング", "ランドとクフラー"], answer: 0, explain: "アンガーライダーとミシュキン（Ungerleider & Mishkin）が、腹側=what、背側=whereの二経路説を提唱した。後にグデイルとミルナーが知覚 vs 行為として捉え直した。", difficulty: 3 },
    { type: "mcq", stem: "視覚失認の患者DFが「物体の傾きを言い当てられないが、そこへ正しくカードを差し込める」ことが示すものはどれか。", choices: ["腹側と背側の経路が同一であること", "知覚（腹側）と行為（背側）の経路が解離していること", "色覚と形態覚が同じ細胞によること", "両眼視差が不要であること"], answer: 1, explain: "腹側損傷の患者DFは知覚的報告ができないのに、背側経路が支える視覚誘導性の運動は保たれる。知覚と行為の経路が二重解離することを示す。", difficulty: 3 },
  ],
});
