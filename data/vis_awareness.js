/* ============================================================
   視覚科学（特別編）  視覚的意識と気づき  (vis_awareness)
   ============================================================ */
PsychApp.registerModule({
  id: "vis_awareness",
  title: "視覚的意識と気づき",
  emoji: "💡",
  category: "vision",
  tagline: "両眼視野闘争・連続フラッシュ抑制・盲視・視覚マスキング・混雑・意識の神経相関",
  overview: `<p>網膜に届いた情報のすべてが意識にのぼるわけではない。同じ物理刺激でも、ときに意識され、ときに意識から消える。この「物理入力」と「主観的な気づき」の解離を実験的に操作できれば、<strong>意識が脳のどの過程に対応するか</strong>を切り分けられる。本分野では、両眼視野闘争・連続フラッシュ抑制・視覚マスキングといった意識を操作する手法と、盲視・混雑といった気づきの限界を概観し、<strong>意識の神経相関（NCC）</strong>の探求へとつなげる。</p>`,
  lessons: [
    {
      title: "意識を操作する手法",
      body: `
        <p>意識を科学的に研究するには、物理刺激を一定に保ったまま主観的な見えだけを変化させる、あるいは刺激を提示しても意識にのぼらせない、という操作が要る。代表的な三つの手法を見る。</p>
        <h3>両眼視野闘争</h3>
        <p><strong>両眼視野闘争（binocular rivalry）</strong>は、左右の眼に異なる像（例：縦縞と横縞）を提示すると生じる。物理刺激は両眼とも一定なのに、<strong>意識される像が一方からもう一方へと数秒ごとに交互に切り替わる</strong>。物理入力が変わらないまま知覚だけが変わるため、<strong>意識の神経相関（NCC）を探る強力な道具</strong>となる。どの脳活動が「報告される見え」と連動するかを追えば、意識に対応する過程を絞り込める。</p>
        <h3>連続フラッシュ抑制</h3>
        <p><strong>連続フラッシュ抑制（continuous flash suppression, CFS）</strong>は、片眼に動的で高コントラストのモザイク（マスク）を次々に提示し、<strong>もう一方の眼の像を長時間（数秒〜数十秒）意識から排除する</strong>手法である。両眼視野闘争より抑制が強く持続的なため、見えていない刺激が無意識下でどこまで処理されるかを調べるのに広く用いられる。</p>
        <h3>視覚マスキング</h3>
        <p><strong>視覚マスキング（visual masking）</strong>は、ある刺激（標的）の意識的知覚を、近接して提示する別の刺激（マスク）が妨げる現象である。</p>
        <ul>
          <li><strong>後向マスキング（backward masking）</strong>：標的の<em>後</em>に提示されたマスクが、先行する標的の知覚を妨げる。後から来る刺激が前の刺激の意識を消す点が理論的に重要である。</li>
          <li><strong>メタコントラスト（metacontrast）</strong>：標的を取り囲む（輪郭が隣接する）マスクによる後向マスキングの一種。</li>
        </ul>
        <p>マスキングは、刺激を意識にのぼらせずに提示する<strong>閾下提示（subliminal presentation）</strong>の手段として、無意識的処理の研究に用いられる。</p>
        <div class="callout key"><b>共通点</b>：両眼視野闘争・CFS・マスキングはいずれも、<strong>物理刺激と意識的な見えを解離させる</strong>。この解離こそが、意識に固有の神経過程を同定する手がかりになる。</div>
      `,
      figure: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="250" rx="14" fill="#f5f7fd"/>
        <text x="240" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">両眼視野闘争</text>
        <text x="120" y="52" text-anchor="middle" font-size="11" fill="#5b6478">左眼に提示</text>
        <text x="360" y="52" text-anchor="middle" font-size="11" fill="#5b6478">右眼に提示</text>
        <rect x="75" y="60" width="90" height="90" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <g stroke="#5b6cf0" stroke-width="4">
          <line x1="90" y1="60" x2="90" y2="150"/><line x1="110" y1="60" x2="110" y2="150"/>
          <line x1="130" y1="60" x2="130" y2="150"/><line x1="150" y1="60" x2="150" y2="150"/>
        </g>
        <rect x="315" y="60" width="90" height="90" fill="#fbe3e7" stroke="#e0566b" stroke-width="2"/>
        <g stroke="#e0566b" stroke-width="4">
          <line x1="315" y1="75" x2="405" y2="75"/><line x1="315" y1="95" x2="405" y2="95"/>
          <line x1="315" y1="115" x2="405" y2="115"/><line x1="315" y1="135" x2="405" y2="135"/>
        </g>
        <text x="240" y="105" text-anchor="middle" font-size="22">→</text>
        <line x1="40" y1="172" x2="440" y2="172" stroke="#c9cfe0" stroke-width="1"/>
        <text x="240" y="194" text-anchor="middle" font-size="11" font-weight="700" fill="#15c4a8">意識される見えは数秒ごとに交替（物理刺激は一定）</text>
        <text x="160" y="222" text-anchor="middle" font-size="10" fill="#5b6cf0">縦縞が見える</text>
        <text x="240" y="222" text-anchor="middle" font-size="13">⇄</text>
        <text x="320" y="222" text-anchor="middle" font-size="10" fill="#e0566b">横縞が見える</text>
        <text x="240" y="242" text-anchor="middle" font-size="9.5" fill="#5b6478">→ 意識の神経相関（NCC）を探る道具</text>
      </svg>`,
      figcaption: "両眼視野闘争では、左右の眼への像が一定でも、意識される見えが交互に切り替わる。物理入力と知覚の解離を利用して意識の神経相関を探ることができる。",
      terms: [
        { term: "両眼視野闘争（binocular rivalry）", def: "左右の眼への異なる像が一定でも、意識される見えが交互に切り替わる現象。NCC研究の道具。" },
        { term: "連続フラッシュ抑制（CFS）", def: "片眼の動的高コントラスト・マスクで他眼の像を長く意識から排除する手法。" },
        { term: "視覚マスキング（visual masking）", def: "標的の意識的知覚を近接提示したマスクが妨げる現象。" },
        { term: "後向マスキング（backward masking）", def: "標的の後に提示したマスクが先行標的の知覚を妨げるマスキング。" },
        { term: "メタコントラスト（metacontrast）", def: "標的を取り囲むマスクによる後向マスキングの一種。" },
        { term: "閾下提示（subliminal presentation）", def: "刺激を意識にのぼらせずに提示すること。マスキング等で無意識的処理を調べる。" },
        { term: "物理刺激と意識の解離", def: "入力を一定にしたまま見えだけを変える操作。意識固有の過程の同定に用いる。" },
      ],
    },
    {
      title: "気づきの限界と神経相関",
      body: `
        <p>意識は、入力されたものを漏れなく映すわけではない。脳損傷や周辺視の制約は、気づきの境界を浮き彫りにする。</p>
        <h3>盲視</h3>
        <p><strong>盲視（blindsight）</strong>は、<strong>第一次視覚野（V1）</strong>の損傷により、損傷に対応する視野が主観的には「見えない」のに、強制選択課題では刺激の位置や運動方向を<strong>偶然以上の確率で当てられる</strong>現象である。<em>ワイスクランツ（Weiskrantz）</em>らが患者DBで詳しく報告した。患者は「見えていない」と言いながら正答する。これは、V1を経由しない<strong>皮質下経路（上丘などの残存経路）</strong>が、意識を伴わずに視覚情報を処理できることを示す。意識（主観的な見え）と機能的な視覚処理が解離する好例である。</p>
        <h3>混雑（crowding）</h3>
        <p><strong>混雑（crowding）</strong>は、<strong>周辺視</strong>において、標的が隣接する妨害刺激に囲まれると<strong>同定できなくなる</strong>現象である。重要なのは、標的の<em>存在の検出</em>はできるのに、それが何かを<em>同定</em>できなくなる点である。妨害の及ぶ範囲は偏心度（中心からの距離）に比例して広がり、これを<strong>ブーマの法則（Bouma's law）</strong>という（おおむね偏心度の約半分が臨界間隔とされる）。混雑は周辺視における物体認識の根本的な制約を示す。</p>
        <h3>意識の神経相関</h3>
        <p><strong>意識の神経相関（neural correlates of consciousness, NCC）</strong>は、特定の意識的経験に必要十分な最小の神経過程を指す。<em>クリックとコッホ（Crick & Koch）</em>がこの探求を科学の俎上に載せた。両眼視野闘争やマスキングは、刺激ではなく「報告される見え」と連動する活動を探すための実験パラダイムである。</p>
        <p>さらに<em>コッホとツチヤ（Koch & Tsuchiya）</em>は、<strong>注意と意識は解離しうる</strong>と論じた。注意を向けても意識にのぼらない場合や、注意なしに意識にのぼる場合があり、両者は別個の過程だとされる。</p>
        <div class="callout tip"><b>主要な理論（概観）</b>：意識を説明する枠組みとして、情報が脳全体に広く放送（ブロードキャスト）されることを意識と結びつける<strong>グローバル・ワークスペース理論</strong>や、システムが統合する情報量（Φ）を意識の指標とする<strong>統合情報理論（IIT）</strong>などがある。いずれもNCC研究と密接に関わる。</div>
        <div class="callout key"><b>まとめ</b>：盲視は「機能はあるが意識がない」場合、混雑は「検出はできるが同定という気づきに至らない」場合を示す。これらの解離が、意識に固有の過程を浮かび上がらせる。</div>
      `,
      figure: `<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="480" height="230" rx="14" fill="#f5f7fd"/>
        <text x="240" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">周辺視の混雑（crowding）</text>
        <line x1="240" y1="50" x2="240" y2="190" stroke="#c9cfe0" stroke-width="1" stroke-dasharray="4 3"/>
        <circle cx="100" cy="120" r="5" fill="#1d2433"/>
        <text x="100" y="145" text-anchor="middle" font-size="10" fill="#5b6478">注視点</text>
        <text x="150" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#15c4a8">単独：同定できる</text>
        <text x="150" y="120" text-anchor="middle" font-size="30" font-weight="700" fill="#5b6cf0">R</text>
        <text x="360" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#e0566b">妨害に囲まれる：同定できない</text>
        <text x="360" y="120" text-anchor="middle" font-size="30" font-weight="700" fill="#5b6cf0">R</text>
        <text x="320" y="120" text-anchor="middle" font-size="30" font-weight="700" fill="#8b91a3">X</text>
        <text x="400" y="120" text-anchor="middle" font-size="30" font-weight="700" fill="#8b91a3">X</text>
        <text x="360" y="92" text-anchor="middle" font-size="30" font-weight="700" fill="#8b91a3">X</text>
        <text x="360" y="150" text-anchor="middle" font-size="30" font-weight="700" fill="#8b91a3">X</text>
        <line x1="40" y1="172" x2="440" y2="172" stroke="#c9cfe0" stroke-width="1"/>
        <text x="240" y="196" text-anchor="middle" font-size="10" fill="#5b6478">存在の検出はできるが「何か」の同定ができなくなる</text>
        <text x="240" y="216" text-anchor="middle" font-size="9.5" fill="#5b6478">妨害範囲は偏心度に比例（ブーマの法則）</text>
      </svg>`,
      figcaption: "混雑（crowding）では、周辺視の標的（R）が妨害刺激に囲まれると同定できなくなる。存在は検出できるのに同定だけが妨げられ、その範囲は偏心度に比例する（ブーマの法則）。",
      terms: [
        { term: "盲視（blindsight）", def: "V1損傷で主観的には見えないのに、刺激の位置や運動方向を偶然以上に当てられる現象（Weiskrantz、患者DB）。" },
        { term: "第一次視覚野（V1）", def: "後頭葉の一次視覚野。損傷すると対応視野が主観的に見えなくなる。盲視の原因部位。" },
        { term: "皮質下経路", def: "V1を経由しない上丘などの残存経路。盲視で無意識の視覚処理を担うとされる。" },
        { term: "混雑（crowding）", def: "周辺視で標的が隣接妨害刺激に囲まれ同定できなくなる現象。検出は可能。" },
        { term: "ブーマの法則（Bouma's law）", def: "混雑の妨害範囲（臨界間隔）が偏心度に比例するという法則。" },
        { term: "意識の神経相関（NCC）", def: "特定の意識経験に必要十分な最小の神経過程（Crick & Koch）。" },
        { term: "注意と意識の解離", def: "注意と意識は別個の過程で解離しうるとする見方（Koch & Tsuchiya）。" },
        { term: "グローバル・ワークスペース理論／統合情報理論", def: "意識を情報の広域放送、または統合情報量Φで説明する代表的理論。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "左右の眼に異なる像を提示すると、物理刺激は一定なのに意識される見えが交互に切り替わる現象を何というか。", choices: ["連続フラッシュ抑制", "両眼視野闘争（binocular rivalry）", "後向マスキング", "混雑"], answer: 1, explain: "両眼視野闘争では、両眼への像が一定のまま意識される像が交替する。物理入力と知覚の解離を利用してNCCを探る道具となる。", difficulty: 1 },
    { type: "mcq", stem: "両眼視野闘争が意識研究で重視される理由として最も適切なのはどれか。", choices: ["刺激の物理特性が知覚と完全に一致するから", "物理刺激を一定に保ったまま主観的な見えだけが変化するから", "両眼の視差を測定できるから", "閾下提示の唯一の方法だから"], answer: 1, explain: "物理入力が変わらないまま知覚だけが変わるため、どの神経活動が「報告される見え」と連動するかを切り分け、意識の神経相関を探れる。", difficulty: 2 },
    { type: "mcq", stem: "片眼に動的で高コントラストのマスクを提示し、もう一方の眼の像を長時間意識から排除する手法はどれか。", choices: ["メタコントラスト", "連続フラッシュ抑制（CFS）", "両眼視野闘争", "順応"], answer: 1, explain: "連続フラッシュ抑制（CFS）は、片眼の動的高コントラスト・マスクで他眼の像を長く意識から排除する。無意識的処理の研究に広く用いられる。", difficulty: 2 },
    { type: "mcq", stem: "標的の「後」に提示したマスクが、先行する標的の意識的知覚を妨げる現象を何というか。", choices: ["前向マスキング", "後向マスキング（backward masking）", "両眼視野闘争", "感覚順応"], answer: 1, explain: "後向マスキングでは、後から提示されたマスクが先に出た標的の知覚を妨げる。閾下提示の手段として用いられる。", difficulty: 2 },
    { type: "mcq", stem: "第一次視覚野（V1）の損傷により、主観的には見えないのに刺激の位置や運動方向を偶然以上に当てられる現象を何というか。", choices: ["盲視（blindsight）", "混雑", "両眼視野闘争", "メタコントラスト"], answer: 0, explain: "盲視（Weiskrantz、患者DB）は、V1損傷で主観的には見えないのに強制選択で当てられる現象で、V1を経由しない皮質下経路の残存による。", difficulty: 2 },
    { type: "mcq", stem: "盲視において、意識を伴わない視覚処理を担うとされる経路はどれか。", choices: ["V1を経由する皮質経路", "上丘などの皮質下経路", "聴覚経路", "前庭経路"], answer: 1, explain: "盲視では、損傷したV1を経由しない上丘などの皮質下経路が残存し、意識を伴わずに視覚情報を処理すると考えられる。", difficulty: 3 },
    { type: "mcq", stem: "周辺視で、標的が隣接する妨害刺激に囲まれると同定できなくなる現象を何というか。", choices: ["混雑（crowding）", "盲視", "後向マスキング", "両眼視野闘争"], answer: 0, explain: "混雑（crowding）は周辺視で標的が妨害刺激に囲まれ同定できなくなる現象。存在の検出はできるが同定だけが妨げられる。", difficulty: 2 },
    { type: "mcq", stem: "混雑（crowding）における重要な特徴として正しいのはどれか。", choices: ["標的の存在の検出すらできなくなる", "存在の検出はできるが、それが何かの同定ができなくなる", "中心視でのみ生じる", "両眼でしか生じない"], answer: 1, explain: "混雑では存在の検出は可能だが同定ができなくなる。妨害範囲は偏心度に比例し、これをブーマの法則という。", difficulty: 3 },
    { type: "mcq", stem: "混雑の妨害範囲（臨界間隔）が偏心度に比例するという法則を何というか。", choices: ["ウェーバーの法則", "ブーマの法則（Bouma's law）", "ヘリングの法則", "プレグナンツの法則"], answer: 1, explain: "ブーマの法則は、混雑が及ぶ範囲が中心からの距離（偏心度）に比例して広がるという周辺視の法則である。", difficulty: 3 },
    { type: "mcq", stem: "「意識の神経相関（NCC）」という概念を科学的探求の俎上に載せた研究者の組み合わせはどれか。", choices: ["ヒューベルとウィーゼル", "クリックとコッホ（Crick & Koch）", "ギブソンとウォーク", "メルザックとウォール"], answer: 1, explain: "クリックとコッホは、意識的経験に必要十分な最小の神経過程（NCC）の探求を科学の課題として提起した。", difficulty: 2 },
    { type: "mcq", stem: "コッホとツチヤ（Koch & Tsuchiya）が論じた、注意と意識の関係についての主張はどれか。", choices: ["注意と意識は完全に同一の過程である", "注意と意識は解離しうる別個の過程である", "意識は注意の前提条件である", "注意は意識を必ず妨げる"], answer: 1, explain: "Koch & Tsuchiya は、注意を向けても意識にのぼらない場合などがあり、注意と意識は解離しうる別個の過程だと論じた。", difficulty: 3 },
    { type: "mcq", stem: "意識を説明する理論のうち、システムが統合する情報量（Φ）を意識の指標とするものはどれか。", choices: ["グローバル・ワークスペース理論", "統合情報理論（IIT）", "ゲートコントロール理論", "三色説"], answer: 1, explain: "統合情報理論（IIT）は、システムが統合する情報量Φを意識の指標とする。情報の広域放送を意識と結びつけるのはグローバル・ワークスペース理論である。", difficulty: 3 },
  ],
});
