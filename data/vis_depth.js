/* ============================================================
   奥行きと立体視  (vis_depth)
   ============================================================ */
PsychApp.registerModule({
  id: "vis_depth",
  title: "奥行きと立体視",
  emoji: "🧊",
  category: "vision",
  tagline: "両眼視差と立体視・対応問題・ランダムドット・ステレオグラム・単眼手がかり・手がかり統合",
  overview: `<p>網膜像は二次元であるのに、私たちは三次元の奥行きを知覚する。視覚系はそのために多数の<strong>奥行き手がかり</strong>を用いる。本分野ではまず、左右の網膜像のずれである<strong>両眼視差</strong>に基づく<strong>立体視</strong>と、どの点どうしが同一かを決める<strong>対応問題</strong>を扱う。ランダムドット・ステレオグラムは、立体視が形の認識に<em>先立つ</em>低次過程でも成立することを示す。後半では、片眼でも働く<strong>単眼（絵画的）手がかり</strong>と眼筋性手がかりを整理し、複数の手がかりを信頼度で重み付けて統合する<strong>最尤推定的な手がかり統合</strong>とベイズ知覚への展開を見る。</p>`,
  lessons: [
    {
      title: "両眼立体視 — 視差と対応問題",
      body: `
        <p>2つの眼は約6cm離れているため、同じ対象をわずかに異なる角度から見る。この左右像の差こそが、最も強力な奥行き手がかりの源である。</p>
        <h3>両眼視差と立体視</h3>
        <p><strong>両眼視差（binocular disparity／網膜視差 retinal disparity）</strong>とは、左右の網膜に映る像の<strong>水平方向のずれ</strong>である。対象が近いほどずれは大きく、遠いほど小さい。視覚系はこのずれの大きさから奥行きを計算する。両眼視差に基づく立体的な奥行き知覚を<strong>立体視（stereopsis）</strong>という。<em>ホイートストン（Wheatstone）</em>は<strong>ステレオスコープ</strong>を発明し、左右の眼に少しずつ異なる2枚の絵を与えるだけで立体感が生じることを実証した。視差そのものが奥行きを生むことの古典的証明である。</p>
        <h3>ホロプターとPanumの融合域</h3>
        <p>注視点と同じ奥行きにある点の軌跡を<strong>ホロプター（horopter）</strong>という。ホロプター上の点は左右の網膜の対応点に落ちる。その周囲の一定の範囲を<strong>Panumの融合域（Panum's fusional area）</strong>といい、<em>この範囲内なら左右像は単一に融合して見える</em>。範囲を外れると左右像が融合できず<strong>複視（diplopia）</strong>＝二重に見える状態になる。</p>
        <table>
          <tr><th>視差の種類</th><th>奥行き</th></tr>
          <tr><td><b>交差視差（crossed）</b></td><td>注視点より<em>手前</em>に見える。</td></tr>
          <tr><td><b>非交差視差（uncrossed）</b></td><td>注視点より<em>奥</em>に見える。</td></tr>
        </table>
        <div class="callout tip"><b>覚え方</b>：交差視差は手前、非交差視差は奥。指を1本立てて遠くを見ると、指は二重（複視）に見える。これは指がPanumの融合域の外にあるためである。</div>
        <h3>対応問題とランダムドット・ステレオグラム</h3>
        <p>立体視には難問がある。<strong>対応問題（correspondence problem）</strong>、すなわち<em>左右像のどの点が同一の対象点か</em>を決める問題である。同じような点が多数あると、誤った組み合わせも幾何的には可能であり、視覚系は正しい対応を選ばねばならない。</p>
        <p><em>ベラ・ユレシュ（Béla Julesz）</em>の<strong>ランダムドット・ステレオグラム（random-dot stereogram）</strong>はこの問題を鮮やかに示した。左右の像はともにランダムな点の集まりで、<strong>単眼で見ると形は全く見えない</strong>。ところが一方の像の一区画だけを横にずらして視差を与えておくと、<strong>両眼融合した瞬間に、その区画が浮き上がった奥行き面として出現する</strong>。</p>
        <div class="callout key"><b>核心</b>：ランダムドット・ステレオグラムは、立体視が<strong>形（輪郭・物体）の認識に先立つ低次の過程でも成立する</strong>ことを示す。視差の処理だけで奥行き面が生まれ、形はその結果として現れる。両眼視差は単眼では存在しない情報である。</div>
      `,
      figure: `<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="230" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">両眼視差の幾何</text>
        <circle cx="260" cy="60" r="9" fill="#f0a020"/>
        <text x="278" y="58" font-size="11" fill="#5b6478">対象</text>
        <g stroke="#5b6cf0" stroke-width="2">
          <line x1="180" y1="180" x2="260" y2="60"/>
          <line x1="340" y1="180" x2="260" y2="60"/>
        </g>
        <ellipse cx="180" cy="190" rx="30" ry="20" fill="#e9ebfe" stroke="#1d2433" stroke-width="2"/>
        <ellipse cx="340" cy="190" rx="30" ry="20" fill="#e9ebfe" stroke="#1d2433" stroke-width="2"/>
        <text x="180" y="222" text-anchor="middle" font-size="11" fill="#5b6478">左眼</text>
        <text x="340" y="222" text-anchor="middle" font-size="11" fill="#5b6478">右眼</text>
        <circle cx="172" cy="196" r="4" fill="#e0566b"/>
        <circle cx="348" cy="196" r="4" fill="#e0566b"/>
        <line x1="180" y1="196" x2="172" y2="196" stroke="#e0566b" stroke-width="3"/>
        <line x1="340" y1="196" x2="348" y2="196" stroke="#e0566b" stroke-width="3"/>
        <text x="260" y="160" text-anchor="middle" font-size="11" fill="#15c4a8" font-weight="700">左右の網膜像の水平ずれ＝両眼視差</text>
        <text x="260" y="178" text-anchor="middle" font-size="10" fill="#5b6478">ずれが大きいほど近く、小さいほど遠いと知覚される</text>
      </svg>`,
      figcaption: "両眼視差の幾何。左右の眼は対象をわずかに異なる角度から見るため、網膜像に水平方向のずれ（赤）が生じる。視覚系はこのずれの大きさから奥行きを計算する。",
      terms: [
        { term: "両眼視差（binocular/retinal disparity）", def: "左右の網膜像の水平方向のずれ。最も強力な奥行き手がかりの源で、近いほど大きい。" },
        { term: "立体視（stereopsis）", def: "両眼視差に基づく立体的な奥行き知覚。ホイートストンがステレオスコープで実証した。" },
        { term: "ステレオスコープ（Wheatstone）", def: "左右眼に少し異なる2枚の絵を与え立体感を生む装置。視差が奥行きを生むことの古典的証明。" },
        { term: "ホロプター（horopter）", def: "注視点と同じ奥行きにある点の軌跡。左右網膜の対応点に像が落ちる。" },
        { term: "Panumの融合域", def: "ホロプター周囲の範囲。内側なら左右像が単一に融合し、外側では複視になる。" },
        { term: "交差視差 / 非交差視差", def: "交差視差は注視点より手前、非交差視差は奥に見える視差。" },
        { term: "対応問題（correspondence problem）", def: "左右像のどの点が同一対象点かを決める難問。誤った対応の中から正しい組を選ぶ必要がある。" },
        { term: "ランダムドット・ステレオグラム（Julesz）", def: "単眼では形が見えず両眼融合で初めて奥行き面が出現する刺激。立体視が形の認識に先立つことを示す。" },
      ],
    },
    {
      title: "単眼手がかりと手がかり統合",
      body: `
        <p>立体視は強力だが、奥行き知覚は両眼に依存しない。片眼を閉じても世界は奥行きをもって見える。これは多くの<strong>単眼手がかり</strong>が働くためである。</p>
        <h3>単眼（絵画的）手がかり</h3>
        <p>1枚の絵（写真）にも描き込める手がかりであり、<strong>絵画的手がかり（pictorial cues）</strong>とも呼ばれる。</p>
        <ul>
          <li><strong>重なり／遮蔽（occlusion）</strong>：他の対象を隠す方が手前。</li>
          <li><strong>相対的大きさ（relative size）</strong>：同種の対象なら、網膜像が小さい方が遠い。</li>
          <li><strong>線遠近法（linear perspective）</strong>：平行線が遠方で一点に収束する。</li>
          <li><strong>きめの勾配（texture gradient）</strong>：遠いほどきめが細かく密に見える（ギブソンが重視）。</li>
          <li><strong>陰影（shading）</strong>：<em>光は上から来る</em>という仮定のもとで凹凸を読み取る。</li>
          <li><strong>大気遠近（aerial perspective）</strong>：遠い対象は霞んで青っぽくコントラストが低い。</li>
          <li><strong>視野内の高さ（height in field）</strong>：視野で高い位置にある対象ほど遠い（地平線付近ほど遠い）。</li>
        </ul>
        <p>動きを伴う単眼手がかりが<strong>運動視差（motion parallax）</strong>である。観察者が動くと、近い対象は速く大きく、遠い対象は遅く動いて見える。電車の窓から見る近景と遠景の動きの差がこれである。</p>
        <h3>眼筋性手がかり</h3>
        <p>眼の筋肉の状態から得る手がかりである。</p>
        <ul>
          <li><strong>調節（accommodation）</strong>：近くを見るとき水晶体を厚くする毛様体筋の緊張。近距離で有効。</li>
          <li><strong>輻輳（convergence）</strong>：近くを見るとき両眼が内向きに寄る運動。寄せの大きさが距離情報になる。</li>
        </ul>
        <div class="callout tip"><b>整理</b>：単眼絵画的手がかりは「絵に描けるか」で判別できる。重なり・大きさ・遠近法・きめ・陰影・大気遠近・高さは絵に描ける。両眼視差・輻輳・運動視差は1枚の絵には描けない。</div>
        <h3>手がかり統合 — 信頼度で重み付ける</h3>
        <p>これら多数の手がかりは、しばしば一致するが、ときに食い違う。視覚系はどう統合するのか。標準的な答えは、各手がかりを<strong>信頼度（精度）で重み付けて統合する</strong>というものである。具体的には各手がかりの推定を<strong>分散の逆数</strong>で重み付けて加重平均する。これは統計的に最適な<strong>最尤推定（maximum likelihood estimation, MLE）</strong>に相当し、ノイズの少ない（信頼できる）手がかりほど大きく寄与する。</p>
        <div class="callout key"><b>核心</b>：手がかり統合は<strong>各手がかりを分散の逆数で重み付ける加重平均</strong>であり、最尤推定的に最適である。統合後の推定は、どの単一手がかりよりも分散が小さく<em>信頼度が高い</em>。これがベイズ的知覚（事前確率と尤度の統合）へとつながる。</div>
        <p><em>エルンストとバンクス（Ernst & Banks, 2002）</em>は、視覚と触覚で物体の高さを判断させる実験で、人がまさに<strong>各手がかりを分散の逆数で重み付けて統合する</strong>ことを定量的に示した。視覚にノイズを加えて信頼度を下げると、触覚の重みが予測どおり増した。知覚がベイズ的・統計的に最適な推論であることを示す代表的研究である。</p>
      `,
      figure: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <rect x="0" y="0" width="520" height="220" rx="14" fill="#f5f7fd"/>
        <text x="260" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">手がかり統合 — 分散の逆数で重み付け（MLE）</text>
        <g font-size="11">
          <rect x="40" y="55" width="150" height="38" rx="8" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="1.5"/>
          <text x="115" y="72" text-anchor="middle" fill="#1d2433" font-weight="700">視覚の推定</text>
          <text x="115" y="87" text-anchor="middle" fill="#5b6478">分散 小 → 重み 大</text>
          <rect x="40" y="120" width="150" height="38" rx="8" fill="#e9ebfe" stroke="#15c4a8" stroke-width="1.5"/>
          <text x="115" y="137" text-anchor="middle" fill="#1d2433" font-weight="700">触覚の推定</text>
          <text x="115" y="152" text-anchor="middle" fill="#5b6478">分散 大 → 重み 小</text>
        </g>
        <g stroke="#5b6478" stroke-width="2" fill="none">
          <line x1="190" y1="74" x2="280" y2="100" marker-end="url(#d1)"/>
          <line x1="190" y1="139" x2="280" y2="113" marker-end="url(#d1)"/>
        </g>
        <defs><marker id="d1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#5b6478"/></marker></defs>
        <rect x="285" y="88" width="120" height="40" rx="10" fill="#5b6cf0"/>
        <text x="345" y="104" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">加重平均</text>
        <text x="345" y="120" text-anchor="middle" font-size="10" fill="#e9ebfe">(逆分散重み)</text>
        <line x1="405" y1="108" x2="448" y2="108" stroke="#5b6478" stroke-width="2" marker-end="url(#d1)"/>
        <rect x="425" y="135" width="0" height="0"/>
        <text x="460" y="98" text-anchor="middle" font-size="11" fill="#e0566b" font-weight="700">統合</text>
        <text x="460" y="113" text-anchor="middle" font-size="11" fill="#e0566b" font-weight="700">推定</text>
        <text x="460" y="130" text-anchor="middle" font-size="9" fill="#5b6478">分散が最小</text>
        <text x="260" y="195" text-anchor="middle" font-size="11" fill="#5b6478">Ernst &amp; Banks (2002)：人は分散の逆数で重み付けて統合する</text>
        <text x="260" y="211" text-anchor="middle" font-size="10" fill="#5b6478">統合後はどの単一手がかりより信頼度が高い → ベイズ知覚へ</text>
      </svg>`,
      figcaption: "手がかり統合。視覚と触覚など各手がかりの推定を分散の逆数で重み付けて加重平均する（最尤推定）。統合後の推定はどの単一手がかりよりも分散が小さく信頼度が高い。",
      terms: [
        { term: "単眼（絵画的）手がかり", def: "1枚の絵にも描ける奥行き手がかり。重なり・相対的大きさ・線遠近法・きめの勾配・陰影など。" },
        { term: "遮蔽 / 相対的大きさ / 線遠近法", def: "他を隠す方が手前、像が小さい方が遠い、平行線が遠方で収束する、という代表的な絵画的手がかり。" },
        { term: "きめの勾配（texture gradient）", def: "遠いほどきめが細かく密に見える手がかり。ギブソンが奥行き知覚で重視した。" },
        { term: "運動視差（motion parallax）", def: "観察者が動くと近い対象が速く遠い対象が遅く動いて見える、動的な単眼手がかり。" },
        { term: "調節 / 輻輳", def: "調節は水晶体を厚くする毛様体筋の緊張、輻輳は両眼が内向きに寄る運動。ともに眼筋性手がかり。" },
        { term: "手がかり統合（cue combination）", def: "複数の奥行き手がかりを信頼度（分散）で重み付けて統合すること。" },
        { term: "最尤推定（MLE）的統合", def: "各手がかりを分散の逆数で重み付けて加重平均する統計的に最適な統合。ベイズ知覚へつながる。" },
        { term: "Ernst & Banks (2002)", def: "視覚-触覚で各手がかりを分散の逆数で重み付けて統合することを定量的に示した代表的研究。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "両眼視差（binocular disparity）とは何か。", choices: ["左右の網膜像の水平方向のずれ", "左右の眼の色覚の差", "上下方向の像のずれ", "瞳孔径の左右差"], answer: 0, explain: "両眼視差は左右の網膜に映る像の水平方向のずれである。対象が近いほどずれは大きく、視覚系はその大きさから奥行きを計算する。", difficulty: 1 },
    { type: "mcq", stem: "ホイートストンのステレオスコープが実証したのはどのようなことか。", choices: ["色は周囲との比較で決まること", "左右眼に少し異なる2枚の絵を与えるだけで立体感が生じること", "運動が形の認識を担うこと", "暗所では桿体が働くこと"], answer: 1, explain: "ホイートストンはステレオスコープで、左右の眼に少しずつ異なる2枚の絵を与えるだけで立体感（立体視）が生じることを示した。視差そのものが奥行きを生む証明である。", difficulty: 2 },
    { type: "mcq", stem: "Panumの融合域について正しいのはどれか。", choices: ["この範囲の外では左右像が単一に融合する", "この範囲の内なら左右像が単一に融合し、外では複視になる", "片眼でのみ成立する", "色の融合に関する領域である"], answer: 1, explain: "Panumの融合域はホロプター周囲の範囲で、内側なら左右像が単一に融合して見え、外れると融合できず複視（二重に見える）になる。", difficulty: 2 },
    { type: "mcq", stem: "交差視差（crossed disparity）をもつ対象は、注視点に対してどこに見えるか。", choices: ["手前に見える", "奥に見える", "同じ奥行きに見える", "左右にずれて見える"], answer: 0, explain: "交差視差は注視点より手前に見え、非交差視差は奥に見える。視差の符号が手前・奥を区別する。", difficulty: 2 },
    { type: "mcq", stem: "対応問題（correspondence problem）とは何を決める問題か。", choices: ["どの錐体が活動するか", "左右像のどの点どうしが同一の対象点か", "光がどの方向から来るか", "どの手がかりを信じるか"], answer: 1, explain: "対応問題は、左右像のどの点が同一の対象点かを決める問題である。似た点が多数あると誤った対応も幾何的に可能で、視覚系は正しい組を選ぶ必要がある。", difficulty: 2 },
    { type: "mcq", stem: "ユレシュのランダムドット・ステレオグラムが立体視について示した最も重要な点はどれか。", choices: ["立体視には必ず形の認識が先に必要である", "立体視は形の認識に先立つ低次過程でも成立する", "立体視は片眼でも成立する", "立体視は色覚に依存する"], answer: 1, explain: "ランダムドット・ステレオグラムは単眼では形が見えず、両眼融合で初めて奥行き面が出現する。立体視が形の認識に先立つ低次の過程でも成立することを示した。", difficulty: 3 },
    { type: "mcq", stem: "次のうち、両眼視差ではなく単眼（絵画的）手がかりに分類されるのはどれか。", choices: ["きめの勾配（texture gradient）", "Panumの融合域", "輻輳", "ランダムドットの両眼融合"], answer: 0, explain: "きめの勾配は1枚の絵にも描ける単眼絵画的手がかりである。遠いほどきめが細かく密に見え、ギブソンが奥行き知覚で重視した。", difficulty: 2 },
    { type: "mcq", stem: "観察者が動くと近い対象が速く、遠い対象が遅く動いて見える、動的な単眼手がかりはどれか。", choices: ["両眼視差", "運動視差（motion parallax）", "調節", "線遠近法"], answer: 1, explain: "運動視差は観察者の動きに伴い近い対象が速く遠い対象が遅く動いて見える単眼手がかりである。電車の窓から見る近景と遠景の差がこれに当たる。", difficulty: 2 },
    { type: "mcq", stem: "陰影（shading）から凹凸を読み取る際、視覚系が暗黙に置いている仮定はどれか。", choices: ["光は下から来る", "光は上から来る", "光は左から来る", "光源は常に2つある"], answer: 1, explain: "陰影による奥行き・凹凸の知覚は「光は上から来る」という仮定のもとで行われる。同じ陰影でも上下を反転させると凹凸が逆転して見える。", difficulty: 2 },
    { type: "mcq", stem: "複数の奥行き手がかりを統合する標準的な方式（最尤推定的統合）の重み付けとして正しいのはどれか。", choices: ["各手がかりを等しく平均する", "各手がかりを分散の逆数で重み付けて加重平均する", "最も古い手がかりだけを採用する", "分散の大きい手がかりを優先する"], answer: 1, explain: "手がかり統合は各推定を分散の逆数（信頼度）で重み付けて加重平均する。これは最尤推定に相当し、ノイズの少ない手がかりほど大きく寄与する。", difficulty: 3 },
    { type: "mcq", stem: "最尤推定的に手がかりを統合した結果として正しいのはどれか。", choices: ["統合推定はどの単一手がかりよりも分散が大きい", "統合推定はどの単一手がかりよりも分散が小さく信頼度が高い", "統合により情報が失われる", "統合は両眼でしか起きない"], answer: 1, explain: "分散の逆数で重み付けて統合すると、統合後の推定はどの単一手がかりよりも分散が小さく信頼度が高くなる。これがベイズ的知覚へつながる。", difficulty: 3 },
    { type: "mcq", stem: "Ernst & Banks (2002) の視覚-触覚統合の実験が示したのはどれか。", choices: ["視覚は常に触覚より優先される", "人は各手がかりを分散の逆数で重み付けて統合し、視覚の信頼度を下げると触覚の重みが増す", "触覚は奥行きに無関係である", "手がかりは1つしか使われない"], answer: 1, explain: "Ernst & Banks (2002) は、人が視覚と触覚を分散の逆数で重み付けて統合し、視覚にノイズを加えて信頼度を下げると触覚の重みが予測どおり増すことを定量的に示した。", difficulty: 3 },
  ],
});
