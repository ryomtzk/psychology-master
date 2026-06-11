/* ============================================================
   心理統計学  (stats)
   ============================================================ */
PsychApp.registerModule({
  id: "stats",
  title: "心理統計学",
  emoji: "📊",
  category: "found",
  tagline: "記述統計・正規分布とz得点・相関・推測統計・仮説検定・各種検定",
  overview: `<p>心理統計学は、<strong>データから心理学的な結論を引き出すための道具</strong>である。人の行動や心は直接観察できないため、測定した数値のばらつきを整理し（記述統計）、限られた標本から母集団を推測し（推測統計）、得られた差や関連が「偶然では説明しにくいか」を判断する（仮説検定）。本分野では、平均や標準偏差といった基礎概念から、正規分布・z得点・相関、そしてt検定・分散分析・カイ二乗検定の使い分け、効果量や統計の誤用までを概念重視で整理する。数式よりも「なぜそれを使うのか」の理解を優先する。</p>
  <div class="callout note"><b>もっと先へ</b>：仮説検定の先にある<strong>ベイズ統計</strong>を本格的に学びたい場合は、特別コース「<a href="bayes/index.html">ベイズの階段</a>」へ。中学数学の確率から MCMC・実践モデリングまでを全6レベルで段階的に学べる。</div>`,
  lessons: [
    {
      title: "記述統計 — 代表値・散布度・分布の形",
      body: `
        <p>多数の数値を一つ一つ眺めても全体像はつかめない。データの特徴を少数の指標に要約するのが<strong>記述統計（descriptive statistics）</strong>である。要約には大きく「中心はどこか（代表値）」「どれだけ散らばっているか（散布度）」「分布の形はどうか」の3つの観点がある。</p>
        <h3>代表値（中心傾向）</h3>
        <ul>
          <li><strong>平均（mean）</strong>：全データの合計を個数で割った値。最もよく使われるが、<em>外れ値（極端な値）に大きく引っ張られる</em>。</li>
          <li><strong>中央値（median）</strong>：データを小さい順に並べたときの真ん中の値。外れ値に強い（頑健）。</li>
          <li><strong>最頻値（mode）</strong>：最も頻繁に現れる値。名義尺度（カテゴリ）でも使える唯一の代表値。</li>
        </ul>
        <div class="callout example"><b>外れ値の例</b>：5人の年収が「300, 350, 400, 450, 5000」万円のとき、平均は1300万円だが中央値は400万円。一人の高額所得者に平均が引きずられている。こうした<strong>歪んだ分布では中央値の方が「典型」を表す</strong>。</div>
        <div class="callout tip">使い分けの目安：左右対称なら平均、歪みや外れ値があれば中央値、カテゴリデータなら最頻値。</div>
        <h3>散布度（ばらつき）</h3>
        <ul>
          <li><strong>範囲（range）</strong>：最大値−最小値。計算は簡単だが両端の2点だけで決まり外れ値に弱い。</li>
          <li><strong>分散（variance）</strong>：各データと平均との差（偏差）を2乗して平均したもの。ばらつきを面積的に捉える。</li>
          <li><strong>標準偏差（standard deviation, SD）</strong>：分散の平方根。元のデータと同じ単位に戻るため解釈しやすく、最も重要な散布度。</li>
          <li><strong>四分位範囲（IQR）</strong>：第3四分位数−第1四分位数。中央50%の幅を表し、外れ値に頑健。箱ひげ図で用いる。</li>
        </ul>
        <div class="callout key">標準偏差は<strong>「平均からの典型的なズレ」</strong>と考えるとよい。SDが大きいほどデータは広く散らばっている。平均が同じでもSDが違えば分布の様子はまったく異なる。</div>
        <h3>分布の形</h3>
        <p>ヒストグラムで描いた分布の形も重要な情報である。</p>
        <ul>
          <li><strong>歪度（skewness）</strong>：左右の非対称さ。右に長い裾を引く分布を<strong>正の歪み（右に歪む）</strong>、左に長い裾を引く分布を<strong>負の歪み（左に歪む）</strong>と呼ぶ。</li>
          <li><strong>尖度（kurtosis）</strong>：分布の尖り具合・裾の重さ。尖って裾が重いか、平たいか。</li>
        </ul>
        <div class="callout note">正の歪み（右に歪む）では「平均 &gt; 中央値 &gt; 最頻値」の順、負の歪み（左に歪む）では逆になりやすい。裾の長い側に平均が引っ張られると覚えるとよい。</div>
        <h3>尺度水準（おさらい）</h3>
        <p>どの統計量が使えるかは測定の<strong>尺度水準</strong>で決まる。名義尺度（血液型など）は最頻値のみ、順序尺度（順位）は中央値まで、間隔・比率尺度（温度・反応時間）は平均・標準偏差まで使える。</p>
      `,
      figure: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">分布の歪み（skewness）</text>
        <g>
          <text x="95" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6cf0">正の歪み（右に裾）</text>
          <path d="M20,180 C50,180 60,70 90,70 C120,70 140,175 200,178 L200,180 Z" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
          <line x1="20" y1="180" x2="200" y2="180" stroke="#9aa3c0" stroke-width="1.5"/>
          <line x1="84" y1="70" x2="84" y2="180" stroke="#15c4a8" stroke-width="2" stroke-dasharray="3 3"/>
          <line x1="110" y1="180" x2="110" y2="58" stroke="#e0566b" stroke-width="2" stroke-dasharray="3 3"/>
          <text x="60" y="200" font-size="10" fill="#15c4a8">最頻/中央</text>
          <text x="105" y="52" font-size="10" fill="#e0566b">平均→</text>
        </g>
        <g>
          <text x="430" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6cf0">負の歪み（左に裾）</text>
          <path d="M520,180 C490,180 480,70 450,70 C420,70 400,175 340,178 L340,180 Z" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
          <line x1="340" y1="180" x2="520" y2="180" stroke="#9aa3c0" stroke-width="1.5"/>
          <line x1="456" y1="70" x2="456" y2="180" stroke="#15c4a8" stroke-width="2" stroke-dasharray="3 3"/>
          <line x1="430" y1="180" x2="430" y2="58" stroke="#e0566b" stroke-width="2" stroke-dasharray="3 3"/>
          <text x="468" y="64" font-size="10" fill="#15c4a8">最頻/中央</text>
          <text x="372" y="52" font-size="10" fill="#e0566b">←平均</text>
        </g>
      </svg>`,
      figcaption: "歪んだ分布では、平均は裾の長い側へ引っ張られる。右に裾を引く分布は「正の歪み」、平均＞中央値＞最頻値となりやすい。",
      terms: [
        { term: "平均 (mean)", def: "全データの合計を個数で割った代表値。外れ値の影響を受けやすい。" },
        { term: "中央値 (median)", def: "データを並べた中央の値。外れ値に頑健な代表値。" },
        { term: "最頻値 (mode)", def: "最も頻繁に出現する値。名義尺度でも使える。" },
        { term: "標準偏差 (SD)", def: "分散の平方根。平均からの典型的なズレを元の単位で表す散布度。" },
        { term: "分散 (variance)", def: "偏差の2乗の平均。ばらつきの大きさを表す。" },
        { term: "四分位範囲 (IQR)", def: "第3四分位数−第1四分位数。中央50%の幅で、外れ値に頑健。" },
        { term: "歪度 (skewness)", def: "分布の左右の非対称さ。右に裾を引けば正の歪み。" },
      ],
    },
    {
      title: "正規分布と標準化 — z得点・偏差値",
      body: `
        <p>多くの心理測定値（身長、知能検査の得点など）は、左右対称の釣鐘型をした<strong>正規分布（normal distribution）</strong>に近い形になる。正規分布は数学的に扱いやすく、推測統計の土台となる重要な分布である。</p>
        <h3>正規分布の性質</h3>
        <ul>
          <li>平均を中心に左右対称な釣鐘型（ベルカーブ）。</li>
          <li><strong>平均・中央値・最頻値が一致</strong>する。</li>
          <li>形は平均（μ）と標準偏差（σ）の2つだけで完全に決まる。</li>
        </ul>
        <div class="callout key"><b>68-95-99.7ルール（経験則）</b>：正規分布では、平均±1SDの範囲に約<strong>68%</strong>、平均±2SDに約<strong>95%</strong>、平均±3SDに約<strong>99.7%</strong>のデータが含まれる。これは正規分布なら必ず成り立つ。</div>
        <h3>z得点（標準得点）</h3>
        <p>単位や平均の違う得点どうしを比べるには、共通のものさしに直す<strong>標準化（standardization）</strong>が必要である。<strong>z得点</strong>は「ある値が平均から標準偏差いくつ分離れているか」を表す。</p>
        <blockquote>z ＝（個々の値 − 平均）÷ 標準偏差</blockquote>
        <p>z得点の分布（標準正規分布）は平均0・標準偏差1になる。z=0なら平均ちょうど、z=+1なら平均より1SD上、z=−2なら平均より2SD下を意味する。</p>
        <div class="callout example"><b>計算例</b>：あるテストが平均60点、標準偏差10点とする。80点の人のz得点は（80−60）÷10＝<strong>+2.0</strong>。68-95-99.7ルールより、これは上位約2.5%に入る非常に高い得点である。</div>
        <h3>偏差値とパーセンタイル</h3>
        <ul>
          <li><strong>偏差値</strong>：日本でなじみ深い指標。<strong>偏差値 ＝ 50 ＋ 10 × z</strong> で計算する。平均が偏差値50、1SD上が偏差値60、1SD下が偏差値40。z得点を平均50・SD10に変換したものに過ぎない。</li>
          <li><strong>パーセンタイル（百分位）</strong>：自分より下に何%の人がいるかを示す。例えば75パーセンタイルなら下位75%より上位にいる。</li>
        </ul>
        <div class="callout tip">z得点・偏差値・パーセンタイルはいずれも「集団の中での相対的位置」を表す。z=+1は偏差値60、正規分布ならおよそ84パーセンタイル（下に約84%）に対応する。</div>
        <div class="callout warn">標準化しても<strong>分布の形は変わらない</strong>。元が歪んだ分布なら、z得点に直しても歪んだままで、68-95-99.7ルールは正規分布のときだけ正確に成り立つ点に注意。</div>
      `,
      figure: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">正規分布と 68-95-99.7 ルール</text>
        <g>
          <rect x="100" y="60" width="360" height="120" fill="none"/>
          <path d="M40,180 C140,180 170,75 280,72 C390,75 420,180 520,180 Z" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2.5"/>
          <line x1="40" y1="180" x2="520" y2="180" stroke="#1d2433" stroke-width="1.5"/>
          <g stroke="#9aa3c0" stroke-width="1" stroke-dasharray="3 3">
            <line x1="280" y1="180" x2="280" y2="72"/>
            <line x1="200" y1="180" x2="200" y2="120"/>
            <line x1="360" y1="180" x2="360" y2="120"/>
            <line x1="120" y1="180" x2="120" y2="168"/>
            <line x1="440" y1="180" x2="440" y2="168"/>
          </g>
          <g text-anchor="middle" font-size="11" fill="#1d2433" font-weight="700">
            <text x="280" y="196">μ</text>
            <text x="200" y="196">−1σ</text><text x="360" y="196">+1σ</text>
            <text x="120" y="196">−2σ</text><text x="440" y="196">+2σ</text>
          </g>
          <g text-anchor="middle" font-size="11" font-weight="700">
            <text x="280" y="150" fill="#5b6cf0">68%</text>
            <text x="280" y="118" fill="#15c4a8">95%</text>
          </g>
          <g text-anchor="middle" font-size="10" fill="#5b6478">
            <text x="280" y="222">z得点：0 が平均、±1σ＝z±1、偏差値50±10</text>
          </g>
        </g>
      </svg>`,
      figcaption: "正規分布の経験則。平均±1SDに約68%、±2SDに約95%、±3SDに約99.7%が含まれる。z得点はこの目盛りそのもの。",
      terms: [
        { term: "正規分布", def: "平均を中心に左右対称な釣鐘型の分布。平均・中央値・最頻値が一致する。" },
        { term: "68-95-99.7ルール", def: "正規分布で平均±1/2/3SDに約68%/95%/99.7%が含まれる経験則。" },
        { term: "標準化", def: "値を平均0・SD1のものさしに変換すること。z得点を求める操作。" },
        { term: "z得点（標準得点）", def: "（値−平均）÷標準偏差。平均から何SD離れているかを表す。" },
        { term: "偏差値", def: "50＋10×z。z得点を平均50・SD10に変換した日本独自の指標。" },
        { term: "パーセンタイル", def: "自分より下に全体の何%が位置するかを示す相対的順位。" },
      ],
    },
    {
      title: "相関 — 2変数の関連と「相関≠因果」",
      body: `
        <p>2つの量的変数の間にどんな関係があるかを調べるのが<strong>相関分析</strong>である。例えば「勉強時間」と「成績」、「睡眠時間」と「気分」のように、一方が変わるともう一方も変わる傾向があるかを見る。</p>
        <h3>散布図</h3>
        <p>まずは<strong>散布図（scatter plot）</strong>で点を打つ。点が右上がりに並べば正の関連、右下がりなら負の関連、雲のように散らばっていれば関連が弱い。直線的かどうかも確認できる。</p>
        <h3>ピアソンの積率相関係数 r</h3>
        <p>直線的な関連の強さと向きを1つの数値で表すのが<strong>ピアソンの積率相関係数 r</strong>である。</p>
        <ul>
          <li>範囲は <strong>−1 ≦ r ≦ +1</strong>。</li>
          <li><strong>符号</strong>は向き：+なら正の相関（一方が増えると他方も増える）、−なら負の相関（一方が増えると他方は減る）。</li>
          <li><strong>絶対値</strong>は強さ：1に近いほど点が直線に近く強い関連、0に近いほど無相関。</li>
        </ul>
        <table>
          <tr><th>|r| の目安</th><th>関連の強さ</th></tr>
          <tr><td>0.0 〜 0.2</td><td>ほとんど相関なし</td></tr>
          <tr><td>0.2 〜 0.4</td><td>弱い相関</td></tr>
          <tr><td>0.4 〜 0.7</td><td>中程度の相関</td></tr>
          <tr><td>0.7 〜 1.0</td><td>強い相関</td></tr>
        </table>
        <div class="callout warn">rは<strong>直線関係</strong>しか測れない。U字型のような曲線的な強い関連があってもr≒0になることがある。必ず散布図で形を確認すること。また外れ値1つでrは大きく変わる。</div>
        <h3>相関 ≠ 因果</h3>
        <div class="callout key">2変数に相関があっても、一方が他方の<strong>原因とは限らない</strong>。相関は「一緒に動く」ことしか示さない。因果を主張できるのは原則として無作為割り当てのある実験だけである。</div>
        <p>相関を因果と取り違える代表的な落とし穴：</p>
        <ul>
          <li><strong>第三変数問題（交絡）</strong>：「アイスの売上」と「水難事故」は正の相関を示すが、両者の真の原因は「気温（夏）」という第三の変数である。</li>
          <li><strong>逆の因果（方向の問題）</strong>：「運動量」と「健康」が相関しても、健康だから運動できるのか、運動するから健康なのか、相関だけでは区別できない。</li>
        </ul>
        <h3>決定係数 r²</h3>
        <p>相関係数を2乗した<strong>決定係数 r²</strong>は、一方の変数の分散のうち他方によって説明できる割合を表す。例えばr＝0.6ならr²＝0.36で、「変動の約36%が説明される」と解釈できる。rを2乗すると小さくなるため、r=0.5でも説明できるのは25%にすぎない点に注意したい。</p>
      `,
      figure: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="20" font-size="14" font-weight="800" fill="#1d2433">散布図と相関係数 r</text>
        <g font-size="11" text-anchor="middle">
          <g>
            <rect x="20" y="40" width="150" height="120" fill="#fbfcff" stroke="#c9cfe0"/>
            <text x="95" y="178" fill="#15c4a8" font-weight="700">正の相関 r≈+0.9</text>
            <g fill="#15c4a8"><circle cx="40" cy="148" r="3"/><circle cx="60" cy="135" r="3"/><circle cx="78" cy="125" r="3"/><circle cx="95" cy="110" r="3"/><circle cx="112" cy="92" r="3"/><circle cx="130" cy="78" r="3"/><circle cx="150" cy="58" r="3"/><circle cx="70" cy="120" r="3"/><circle cx="120" cy="98" r="3"/></g>
          </g>
          <g>
            <rect x="205" y="40" width="150" height="120" fill="#fbfcff" stroke="#c9cfe0"/>
            <text x="280" y="178" fill="#5b6cf0" font-weight="700">相関なし r≈0</text>
            <g fill="#5b6cf0"><circle cx="225" cy="90" r="3"/><circle cx="250" cy="130" r="3"/><circle cx="270" cy="65" r="3"/><circle cx="290" cy="120" r="3"/><circle cx="310" cy="80" r="3"/><circle cx="330" cy="140" r="3"/><circle cx="345" cy="70" r="3"/><circle cx="240" cy="110" r="3"/><circle cx="300" cy="100" r="3"/></g>
          </g>
          <g>
            <rect x="390" y="40" width="150" height="120" fill="#fbfcff" stroke="#c9cfe0"/>
            <text x="465" y="178" fill="#e0566b" font-weight="700">負の相関 r≈−0.9</text>
            <g fill="#e0566b"><circle cx="410" cy="60" r="3"/><circle cx="428" cy="75" r="3"/><circle cx="445" cy="90" r="3"/><circle cx="462" cy="105" r="3"/><circle cx="480" cy="120" r="3"/><circle cx="498" cy="135" r="3"/><circle cx="518" cy="150" r="3"/><circle cx="438" cy="82" r="3"/><circle cx="488" cy="128" r="3"/></g>
          </g>
        </g>
      </svg>`,
      figcaption: "散布図の点の並び方と相関係数。右上がりは正、右下がりは負、雲状は無相関。rは直線的な関連のみを表す。",
      terms: [
        { term: "散布図", def: "2変数を縦横軸にとり各個体を点で表した図。関連の形を視覚的に確認する。" },
        { term: "ピアソンの相関係数 r", def: "2変数の直線的関連の強さと向きを−1〜+1で表す指標。" },
        { term: "正の相関／負の相関", def: "一方が増えると他方も増えるのが正、減るのが負の相関。" },
        { term: "相関≠因果", def: "相関は共変動を示すだけで、因果関係を保証しない。" },
        { term: "第三変数問題（交絡）", def: "見かけの相関を生む共通原因となる別の変数の存在。" },
        { term: "決定係数 r²", def: "相関係数の2乗。一方の分散のうち他方で説明できる割合。" },
      ],
    },
    {
      title: "推測統計の基礎 — 標本・標準誤差・中心極限定理",
      body: `
        <p>心理学が知りたいのは多くの場合、全体（例えば日本の大学生全員）の性質である。しかし全員を調べることは不可能なので、一部を取り出して調べ、そこから全体を推し量る。これが<strong>推測統計（inferential statistics）</strong>である。</p>
        <h3>母集団と標本、母数と統計量</h3>
        <table>
          <tr><th>用語</th><th>意味</th><th>記号の例</th></tr>
          <tr><td><b>母集団</b></td><td>知りたい対象全体</td><td>日本の大学生全員</td></tr>
          <tr><td><b>標本（サンプル）</b></td><td>母集団から取り出した一部</td><td>調査した300人</td></tr>
          <tr><td><b>母数（パラメータ）</b></td><td>母集団の真の値（普通は未知）</td><td>母平均μ、母標準偏差σ</td></tr>
          <tr><td><b>統計量</b></td><td>標本から計算した値（既知）</td><td>標本平均、標本標準偏差</td></tr>
        </table>
        <div class="callout key">推測統計の目的は、<strong>標本統計量を手がかりに未知の母数を推測する</strong>ことである。標本は母集団を代表していなければならず、そのために<strong>無作為抽出（ランダムサンプリング）</strong>が重要となる。</div>
        <h3>標本分布と標準誤差</h3>
        <p>同じ母集団から何度も標本を取り直せば、そのたびに標本平均は少しずつ変わる。この「標本平均がとりうる値の分布」を<strong>標本分布（sampling distribution）</strong>と呼ぶ。標本分布の散らばり（標準偏差）を特に<strong>標準誤差（standard error, SE）</strong>という。</p>
        <ul>
          <li>標準誤差は<strong>推定の精度</strong>を表す。小さいほど標本平均は母平均の良い推定になる。</li>
          <li>標準誤差は標本サイズ n が大きいほど小さくなる（SE ＝ SD ÷ √n）。<strong>サンプルを増やすほど推定は安定する</strong>。</li>
        </ul>
        <div class="callout warn">標準偏差（SD）と標準誤差（SE）は混同しやすい。SDは<strong>個々のデータのばらつき</strong>、SEは<strong>標本平均のばらつき（推定の不確かさ）</strong>を表す。nを増やしてもSDはほぼ変わらないが、SEは小さくなる。</div>
        <h3>中心極限定理</h3>
        <div class="callout key"><b>中心極限定理（central limit theorem）</b>：元の母集団の分布がどんな形であっても、標本サイズnが十分大きければ、<strong>標本平均の分布（標本分布）は正規分布に近づく</strong>。これにより、正規分布を前提とした推測が広く使えるようになる。推測統計を支える最重要定理である。</div>
        <h3>区間推定と信頼区間</h3>
        <p>母数を1つの値で当てる（点推定）のではなく、幅をもって推定するのが<strong>区間推定</strong>である。代表が<strong>信頼区間（confidence interval, CI）</strong>で、95%信頼区間がよく使われる。</p>
        <div class="callout note">95%信頼区間の正しい意味：「同じ手続きで標本抽出と区間推定を何度も繰り返せば、そのうち約95%の区間が真の母数を含む」。<strong>「真の値が95%の確率でこの区間にある」という言い方は厳密には誤り</strong>（母数は定数で確率変数ではない）。区間が狭いほど精度が高く、nを増やすと狭くなる。</div>
      `,
      figure: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="20" font-size="14" font-weight="800" fill="#1d2433">母集団 → 標本 → 推測</text>
        <ellipse cx="90" cy="120" rx="70" ry="55" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
        <text x="90" y="115" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6cf0">母集団</text>
        <text x="90" y="133" text-anchor="middle" font-size="10" fill="#5b6478">母数 μ, σ（未知）</text>
        <g stroke="#15c4a8" stroke-width="2" fill="none"><path d="M165,110 L235,110" marker-end="url(#arS)"/></g>
        <defs><marker id="arS" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15c4a8"/></marker>
        <marker id="arS2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f0a020"/></marker></defs>
        <text x="200" y="100" text-anchor="middle" font-size="10" fill="#15c4a8">無作為抽出</text>
        <rect x="245" y="78" width="110" height="70" rx="8" fill="#d8f6ee" stroke="#15c4a8" stroke-width="2"/>
        <text x="300" y="106" text-anchor="middle" font-size="12" font-weight="700" fill="#15c4a8">標本</text>
        <text x="300" y="124" text-anchor="middle" font-size="10" fill="#5b6478">統計量（既知）</text>
        <g stroke="#f0a020" stroke-width="2" fill="none"><path d="M360,113 L425,113" marker-end="url(#arS2)"/></g>
        <text x="395" y="103" text-anchor="middle" font-size="10" fill="#f0a020">推測</text>
        <rect x="430" y="78" width="110" height="70" rx="8" fill="#fdeecf" stroke="#f0a020" stroke-width="2"/>
        <text x="485" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#c87f10">母数の推定</text>
        <text x="485" y="118" text-anchor="middle" font-size="10" fill="#5b6478">点推定／信頼区間</text>
        <text x="485" y="134" text-anchor="middle" font-size="10" fill="#5b6478">標準誤差 SE</text>
        <text x="280" y="205" text-anchor="middle" font-size="11" fill="#5b6478">中心極限定理：標本平均の分布は n が大きいと正規分布に近づく</text>
      </svg>`,
      figcaption: "推測統計の流れ。母集団から無作為抽出した標本の統計量をもとに、未知の母数を推定する。精度は標準誤差で表される。",
      terms: [
        { term: "母集団／標本", def: "知りたい対象全体が母集団、そこから取り出した一部が標本。" },
        { term: "母数／統計量", def: "母集団の真の値（多くは未知）が母数、標本から計算した値が統計量。" },
        { term: "標本分布", def: "標本統計量（標本平均など）がとりうる値の分布。" },
        { term: "標準誤差 (SE)", def: "標本平均のばらつき。推定の精度を表し、nが大きいほど小さい。" },
        { term: "中心極限定理", def: "母集団の形によらず、nが大きいと標本平均の分布は正規分布に近づく定理。" },
        { term: "信頼区間 (CI)", def: "母数が含まれると考えられる範囲。95%CIなら手続きの95%が母数を含む。" },
        { term: "無作為抽出", def: "母集団から偏りなくランダムに標本を選ぶこと。代表性を確保する。" },
      ],
    },
    {
      title: "仮説検定 — 帰無仮説・p値・2種類の誤り",
      body: `
        <p><strong>仮説検定（hypothesis testing）</strong>は、得られたデータが「偶然のばらつきだけでは説明しにくいか」を判断する手続きである。心理学の論文の結論の多くはこの枠組みで導かれる。</p>
        <h3>帰無仮説と対立仮説</h3>
        <ul>
          <li><strong>帰無仮説 H0</strong>：「差はない／関連はない」という主張。検定では<em>これを仮に正しいと置く</em>。</li>
          <li><strong>対立仮説 H1</strong>：「差がある／関連がある」という研究者が示したい主張。</li>
        </ul>
        <div class="callout key">論理は背理法に似ている。「H0が正しいと仮定したら、観測されたデータはどれくらい起こりにくいか」を計算し、あまりに起こりにくければ<strong>H0を棄却</strong>してH1を採用する。直接H1を証明するのではない点が重要。</div>
        <h3>有意水準αとp値</h3>
        <ul>
          <li><strong>有意水準 α</strong>：H0を棄却する基準。慣例的に α＝.05（5%）や .01 を用いる。研究前に決めておく。</li>
          <li><strong>p値</strong>：<strong>「H0が正しいと仮定したとき、観測された結果（以上に極端な結果）が得られる確率」</strong>。p &lt; α なら「統計的に有意」とし、H0を棄却する。</li>
        </ul>
        <div class="callout warn"><b>p値のよくある誤解</b>：p値は「H0が正しい確率」でも「結果が偶然である確率」でもない。あくまで<em>H0を仮定した上での</em>データの珍しさである。また p&gt;.05 は「差がないことの証明」ではなく「差があるとは言えない」にすぎない（証拠の不在は不在の証拠ではない）。</div>
        <h3>2種類の誤り</h3>
        <p>検定の判断は完全ではなく、2種類の誤りがありうる。</p>
        <table>
          <tr><th></th><th>H0は本当は正しい</th><th>H0は本当は誤り</th></tr>
          <tr><td><b>H0を棄却した</b></td><td>第1種の誤り（α）<br><em>あわてんぼうの誤り</em></td><td>正しい判断（検定力 1−β）</td></tr>
          <tr><td><b>H0を棄却しない</b></td><td>正しい判断</td><td>第2種の誤り（β）<br><em>ぼんやりの誤り</em></td></tr>
        </table>
        <ul>
          <li><strong>第1種の誤り（αエラー）</strong>：本当は差がないのに「差がある」と結論する（偽陽性）。その確率が有意水準α。</li>
          <li><strong>第2種の誤り（βエラー）</strong>：本当は差があるのに「差があるとは言えない」と見逃す（偽陰性）。</li>
          <li><strong>検定力（power）＝ 1−β</strong>：本当に差があるときに、それを正しく検出できる確率。<strong>サンプルサイズを増やすと検定力は高まる</strong>。</li>
        </ul>
        <div class="callout note">αを小さくする（厳しくする）と第1種の誤りは減るが、その分βが増え検定力は下がるというトレードオフがある。両方を同時に減らす最も確実な方法はサンプルサイズを増やすことである。</div>
        <h3>片側検定と両側検定</h3>
        <p>方向を問わず「差があるか」を見るのが<strong>両側検定</strong>、「Aの方が大きい」など方向を限定するのが<strong>片側検定</strong>である。理論的に方向が明確な場合のみ片側を使う。原則として両側検定が無難で、片側は検出力が上がる代わりに反対方向の効果を見逃す危険がある。</p>
      `,
      figure: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="20" font-size="14" font-weight="800" fill="#1d2433">2種類の誤り</text>
        <g font-size="11" text-anchor="middle">
          <rect x="150" y="40" width="180" height="34" fill="#f3f5fb" stroke="#c9cfe0"/><text x="240" y="62" font-weight="700">H0は正しい</text>
          <rect x="335" y="40" width="180" height="34" fill="#f3f5fb" stroke="#c9cfe0"/><text x="425" y="62" font-weight="700">H0は誤り</text>
          <rect x="20" y="78" width="125" height="60" fill="#f3f5fb" stroke="#c9cfe0"/><text x="82" y="105" font-weight="700">H0を</text><text x="82" y="122" font-weight="700">棄却</text>
          <rect x="20" y="142" width="125" height="60" fill="#f3f5fb" stroke="#c9cfe0"/><text x="82" y="169" font-weight="700">H0を棄却</text><text x="82" y="186" font-weight="700">しない</text>
          <rect x="150" y="78" width="180" height="60" fill="#fbe2e7" stroke="#e0566b"/><text x="240" y="103" fill="#c23a52" font-weight="700">第1種の誤り α</text><text x="240" y="121" fill="#5b6478" font-size="10">偽陽性（あわてんぼう）</text>
          <rect x="335" y="78" width="180" height="60" fill="#d8f6ee" stroke="#15c4a8"/><text x="425" y="103" fill="#0e9c84" font-weight="700">正しい判断</text><text x="425" y="121" fill="#5b6478" font-size="10">検定力 1−β</text>
          <rect x="150" y="142" width="180" height="60" fill="#d8f6ee" stroke="#15c4a8"/><text x="240" y="176" fill="#0e9c84" font-weight="700">正しい判断</text>
          <rect x="335" y="142" width="180" height="60" fill="#fdeecf" stroke="#f0a020"/><text x="425" y="167" fill="#c87f10" font-weight="700">第2種の誤り β</text><text x="425" y="185" fill="#5b6478" font-size="10">偽陰性（ぼんやり）</text>
        </g>
      </svg>`,
      figcaption: "真実（H0が正しいか否か）と判断（棄却するか否か）の4通り。第1種の誤りがα、第2種の誤りがβ、検出できる確率が検定力1−β。",
      terms: [
        { term: "帰無仮説 H0", def: "「差はない／関連はない」という、検定で仮に正しいと置く仮説。" },
        { term: "対立仮説 H1", def: "「差がある／関連がある」という研究者が示したい仮説。" },
        { term: "有意水準 α", def: "H0を棄却する基準。慣例的に.05や.01。第1種の誤りの確率でもある。" },
        { term: "p値", def: "H0が正しいと仮定したとき、観測値以上に極端な結果が出る確率。" },
        { term: "第1種の誤り (α)", def: "本当は差がないのに差があると結論する偽陽性。" },
        { term: "第2種の誤り (β)", def: "本当は差があるのに見逃す偽陰性。" },
        { term: "検定力 (1−β)", def: "本当に差があるときそれを正しく検出できる確率。nで高まる。" },
        { term: "両側検定／片側検定", def: "方向を問わないのが両側、方向を限定するのが片側検定。" },
      ],
    },
    {
      title: "主要な検定の使い分け",
      body: `
        <p>検定にはさまざまな種類があり、<strong>「データの種類」と「何を比べたいか」</strong>で適切なものが決まる。代表的な検定とその用途を整理する。</p>
        <h3>t検定 — 2群の平均の比較</h3>
        <ul>
          <li><strong>対応なし（独立）t検定</strong>：別々の2群の平均を比べる。例：実験群と統制群の得点差。</li>
          <li><strong>対応あり（対応のある）t検定</strong>：同じ人の2時点を比べる。例：訓練の前後、左右の比較。個人差を取り除けるため検出力が高い。</li>
        </ul>
        <div class="callout example">「新しい学習法を受けた群（n=30）と従来法の群（n=30）でテスト得点の平均に差があるか」→ 対応なしt検定。「同じ参加者に介入前と介入後で測定し変化を見る」→ 対応ありt検定。</div>
        <h3>分散分析（ANOVA）— 3群以上の平均の比較</h3>
        <p>3つ以上の群の平均を一度に比べるときは<strong>分散分析（ANOVA）</strong>を用い、<strong>F検定</strong>（群間分散÷群内分散の比）で判断する。3群以上をt検定で総当たりすると第1種の誤りが膨らむため、まずANOVAでまとめて検定する。</p>
        <ul>
          <li><strong>一元配置ANOVA</strong>：要因が1つ（例：3種類の指導法の比較）。</li>
          <li><strong>二元配置ANOVA</strong>：要因が2つ。<strong>主効果</strong>（各要因単独の影響）に加え<strong>交互作用</strong>を検討できる。</li>
        </ul>
        <div class="callout key"><b>交互作用（interaction）</b>とは、ある要因の効果が別の要因の水準によって変わること。例：「ある薬は若年者には効くが高齢者には効かない」。主効果だけでは見えない、要因の組み合わせの効果である。有意なら多重比較で群間を個別に検討する。</div>
        <h3>カイ二乗（χ²）検定 — 度数・カテゴリの分析</h3>
        <p>人数や回数といった<strong>度数（カテゴリデータ）</strong>を扱うのが<strong>χ²検定</strong>である。<strong>独立性の検定</strong>では「2つのカテゴリ変数が独立か（関連があるか）」を調べる。例：「性別」と「ある製品を好むか否か」に関連があるか。観測度数と期待度数のズレを評価する。</p>
        <h3>相関・回帰の検定</h3>
        <p>相関係数 r が0と有意に異なるか（無相関検定）、回帰係数が0と異なるかも検定できる。<strong>回帰分析</strong>は1つ以上の説明変数から結果変数を予測・説明する手法で、単回帰・重回帰がある。</p>
        <h3>使い分け早見表</h3>
        <table>
          <tr><th>目的</th><th>従属変数</th><th>使う検定</th></tr>
          <tr><td>2群の平均差（別の群）</td><td>量的</td><td>対応なしt検定</td></tr>
          <tr><td>同一対象の2時点の差</td><td>量的</td><td>対応ありt検定</td></tr>
          <tr><td>3群以上の平均差</td><td>量的</td><td>分散分析（ANOVA・F検定）</td></tr>
          <tr><td>2要因の効果・交互作用</td><td>量的</td><td>二元配置ANOVA</td></tr>
          <tr><td>2つのカテゴリ変数の関連</td><td>度数</td><td>χ²独立性検定</td></tr>
          <tr><td>2量的変数の直線的関連</td><td>量的</td><td>相関分析（rの検定）</td></tr>
          <tr><td>変数から結果を予測</td><td>量的</td><td>回帰分析</td></tr>
        </table>
        <div class="callout note">t検定・ANOVA・相関などは、母集団の正規性や等分散などを前提とする<strong>パラメトリック検定</strong>である。前提が崩れる順序尺度や強い歪みのあるデータでは、<strong>ノンパラメトリック検定</strong>（マン・ホイットニーのU検定、ウィルコクソン検定、スピアマンの順位相関など）を用いる。</div>
      `,
      figure: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="arF" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker></defs>
        <text x="20" y="20" font-size="14" font-weight="800" fill="#1d2433">検定の選び方（簡易フロー）</text>
        <g text-anchor="middle" font-size="11">
          <rect x="200" y="34" width="160" height="38" rx="8" fill="#e9ebfe" stroke="#5b6cf0"/><text x="280" y="57" font-weight="700">データの種類は？</text>
          <rect x="40" y="110" width="150" height="38" rx="8" fill="#fdeecf" stroke="#f0a020"/><text x="115" y="133" font-weight="700">度数（カテゴリ）</text>
          <rect x="370" y="110" width="150" height="38" rx="8" fill="#d8f6ee" stroke="#15c4a8"/><text x="445" y="133" font-weight="700">量的データ</text>
          <rect x="40" y="186" width="150" height="38" rx="8" fill="#f3f5fb" stroke="#c9cfe0"/><text x="115" y="209" font-weight="700">χ²検定</text>
          <rect x="300" y="186" width="115" height="38" rx="8" fill="#f3f5fb" stroke="#c9cfe0"/><text x="357" y="203" font-weight="700">2群</text><text x="357" y="218" font-size="9" fill="#5b6478">t検定</text>
          <rect x="425" y="186" width="115" height="38" rx="8" fill="#f3f5fb" stroke="#c9cfe0"/><text x="482" y="203" font-weight="700">3群以上</text><text x="482" y="218" font-size="9" fill="#5b6478">ANOVA / F検定</text>
        </g>
        <g stroke="#5b6cf0" stroke-width="1.8" fill="none" marker-end="url(#arF)">
          <path d="M240,72 L130,108"/><path d="M320,72 L430,108"/>
          <path d="M115,148 L115,184"/>
          <path d="M420,148 L360,184"/><path d="M470,148 L490,184"/>
        </g>
      </svg>`,
      figcaption: "検定選択の簡易フロー。まずデータが度数か量的かで分かれ、量的データは比べる群数でt検定とANOVAに分かれる。",
      terms: [
        { term: "t検定", def: "2群の平均差を調べる検定。対応なし（独立）と対応ありがある。" },
        { term: "分散分析 (ANOVA)", def: "3群以上の平均差をF検定で一度に調べる手法。" },
        { term: "F検定", def: "群間分散と群内分散の比を用いた検定。ANOVAで使う。" },
        { term: "主効果", def: "各要因が単独で従属変数に与える効果。" },
        { term: "交互作用", def: "ある要因の効果が別の要因の水準によって変わること。" },
        { term: "χ²検定", def: "度数（カテゴリデータ）を扱う検定。独立性の検定など。" },
        { term: "回帰分析", def: "説明変数から結果変数を予測・説明する手法。単回帰・重回帰。" },
        { term: "ノンパラメトリック検定", def: "正規性などの前提を要しない検定。順位データなどに用いる。" },
      ],
    },
    {
      title: "効果量・メタ分析・統計の誤用",
      body: `
        <p>p値が有意かどうかだけを見るのは不十分である。近年は「効果がどれくらい大きいか」「研究全体で見て何が言えるか」を重視する。本レッスンでは統計を正しく使うための重要概念を扱う。</p>
        <h3>効果量（effect size）</h3>
        <div class="callout key">p値は「差があるか」を教えるが、その<strong>差の大きさ（実質的な意味）</strong>は教えてくれない。差の大きさを表すのが<strong>効果量</strong>である。サンプルが非常に大きいと、ごくわずかで実用的に無意味な差でもp&lt;.05になりうる。だからp値と効果量は両方報告すべきである。</div>
        <ul>
          <li><strong>Cohenのd</strong>：2群の平均差を標準偏差で割った値。0.2＝小、0.5＝中、0.8＝大が目安。</li>
          <li><strong>相関係数 r、決定係数 r²</strong>：関連の強さも効果量の一種。</li>
        </ul>
        <h3>メタ分析（meta-analysis）</h3>
        <p>同じテーマの<strong>複数の研究結果（主に効果量）を統計的に統合</strong>し、全体としての結論を導く手法が<strong>メタ分析</strong>である。一つの研究は標本誤差や偶然に左右されるが、多数を統合すればより信頼性の高い推定が得られる。エビデンスの強さで言えば、適切に行われたメタ分析・系統的レビューは最上位に位置づけられる。</p>
        <div class="callout warn"><b>出版バイアス</b>：有意な結果（p&lt;.05）の研究は出版されやすく、有意でない研究は埋もれやすい。これにより文献全体が効果を過大評価することがある。メタ分析ではこのバイアスの検討が欠かせない。</div>
        <h3>統計のよくある誤用と注意点</h3>
        <ul>
          <li><strong>p値の誤解</strong>：「p値＝H0が正しい確率」「p&gt;.05＝差がない証明」はいずれも誤り。p値は効果の大きさも重要性も示さない。</li>
          <li><strong>「有意＝重要」ではない</strong>：統計的有意性と実質的・臨床的な重要性は別物。効果量で判断する。</li>
          <li><strong>多重比較問題</strong>：検定を何度も繰り返すと、偶然有意になる確率（第1種の誤り）が積み重なる。補正（ボンフェローニ法など）が必要。</li>
          <li><strong>pハッキング／HARKing</strong>：有意になるまで分析を繰り返したり、結果を見てから仮説を後付けする行為。再現性を損なう不適切な研究実践である。</li>
          <li><strong>再現性の危機</strong>：2010年代以降、心理学の多くの有名な知見が追試で再現されないことが問題化した。事前登録（preregistration）やデータ公開、効果量・信頼区間の重視が対策として広まっている。</li>
        </ul>
        <div class="callout tip">良い統計報告の心がけ：p値だけでなく<strong>効果量と信頼区間</strong>を併記し、サンプルサイズと検定力を意識し、分析計画は事前に決めておく。「有意/非有意」の二分法に頼りすぎないことが重要である。</div>
      `,
      figure: `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="20" y="20" font-size="14" font-weight="800" fill="#1d2433">p値 と 効果量 は別物</text>
        <g>
          <text x="150" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#5b6cf0">小さな差でも n が巨大なら…</text>
          <path d="M30,150 C90,150 100,80 150,80 C200,80 210,150 270,150 Z" fill="#e9ebfe" stroke="#5b6cf0" stroke-width="2"/>
          <path d="M55,150 C110,150 120,90 168,90 C216,90 226,150 290,150 Z" fill="none" stroke="#15c4a8" stroke-width="2" stroke-dasharray="4 3"/>
          <line x1="30" y1="150" x2="295" y2="150" stroke="#1d2433" stroke-width="1.5"/>
          <text x="160" y="172" text-anchor="middle" font-size="10" fill="#e0566b">差はごく僅か → でも p&lt;.05 になりうる</text>
        </g>
        <g>
          <rect x="330" y="60" width="210" height="120" rx="10" fill="#fdeecf" stroke="#f0a020"/>
          <text x="435" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="#c87f10">報告すべきこと</text>
          <g font-size="11" fill="#1d2433">
            <text x="350" y="112">・ p値（有意かどうか）</text>
            <text x="350" y="134">・ 効果量（差の大きさ）</text>
            <text x="350" y="156">・ 信頼区間（推定の幅）</text>
          </g>
        </g>
      </svg>`,
      figcaption: "サンプルが大きいと実質的に小さな差でも有意（p&lt;.05）になりうる。だからp値・効果量・信頼区間を併せて報告する必要がある。",
      terms: [
        { term: "効果量 (effect size)", def: "効果や差の大きさを表す指標。Cohenのdやrなど。p値とは独立。" },
        { term: "Cohenのd", def: "2群の平均差を標準偏差で標準化した効果量。0.2小・0.5中・0.8大。" },
        { term: "メタ分析", def: "同テーマの複数研究の効果量を統計的に統合する手法。" },
        { term: "出版バイアス", def: "有意な結果ほど出版されやすく、効果が過大評価される偏り。" },
        { term: "多重比較問題", def: "検定の反復で第1種の誤りが累積する問題。補正が必要。" },
        { term: "pハッキング", def: "有意になるまで分析を操作する不適切な研究実践。" },
        { term: "再現性の危機", def: "多くの知見が追試で再現されない問題。事前登録などで対策。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "「300, 350, 400, 450, 5000」というデータで、典型的な値を最もよく表す代表値はどれか。", choices: ["平均", "中央値", "範囲", "分散"], answer: 1, explain: "5000という外れ値があるため平均は引っ張られて大きくなる。外れ値に頑健な中央値（400）の方が典型を表す。", difficulty: 1 },
    { type: "mcq", stem: "ばらつきの指標のうち、元のデータと同じ単位で表され解釈しやすいものはどれか。", choices: ["分散", "標準偏差", "歪度", "決定係数"], answer: 1, explain: "標準偏差は分散の平方根で、元の単位に戻るため解釈しやすい。分散は単位が2乗になる。", difficulty: 1 },
    { type: "mcq", stem: "名義尺度（例：血液型）のデータで使える唯一の代表値はどれか。", choices: ["平均", "中央値", "最頻値", "標準偏差"], answer: 2, explain: "名義尺度は大小関係も等間隔もないため、最も多いカテゴリを示す最頻値しか使えない。", difficulty: 2 },
    { type: "mcq", stem: "右に長い裾を引く分布（正の歪み）で成り立ちやすい大小関係はどれか。", choices: ["平均 ＜ 中央値 ＜ 最頻値", "平均 ＝ 中央値 ＝ 最頻値", "平均 ＞ 中央値 ＞ 最頻値", "中央値 ＞ 平均 ＞ 最頻値"], answer: 2, explain: "右に裾を引くと平均が裾側へ引っ張られるため、平均＞中央値＞最頻値となりやすい。", difficulty: 2 },
    { type: "mcq", stem: "正規分布で、平均±1標準偏差の範囲におよそ何%のデータが含まれるか。", choices: ["約50%", "約68%", "約95%", "約99.7%"], answer: 1, explain: "68-95-99.7ルールより、平均±1SDに約68%、±2SDに約95%、±3SDに約99.7%が含まれる。", difficulty: 1 },
    { type: "mcq", stem: "平均60点、標準偏差10点のテストで80点を取った人のz得点はいくらか。", choices: ["+0.8", "+1.0", "+2.0", "+8.0"], answer: 2, explain: "z＝（80−60）÷10＝+2.0。平均より2標準偏差上に位置する非常に高い得点である。", difficulty: 1 },
    { type: "mcq", stem: "z得点が +1.0 のとき、偏差値はいくつか（偏差値＝50＋10×z）。", choices: ["40", "50", "60", "70"], answer: 2, explain: "偏差値＝50＋10×1.0＝60。平均が偏差値50、1SD上が偏差値60である。", difficulty: 1 },
    { type: "mcq", stem: "標準正規分布（z得点の分布）の平均と標準偏差の組み合わせとして正しいのはどれか。", choices: ["平均0・標準偏差1", "平均50・標準偏差10", "平均1・標準偏差0", "平均100・標準偏差15"], answer: 0, explain: "標準化により得られるz得点の分布は平均0・標準偏差1になる。これが標準正規分布である。", difficulty: 2 },
    { type: "mcq", stem: "正規分布について正しい記述はどれか。", choices: ["左に大きく歪んでいる", "平均・中央値・最頻値が一致する", "標準偏差だけで形が決まる", "必ず2つの山を持つ"], answer: 1, explain: "正規分布は左右対称な釣鐘型で、平均・中央値・最頻値が一致する。形は平均と標準偏差の両方で決まる。", difficulty: 1 },
    { type: "mcq", stem: "ピアソンの積率相関係数 r がとりうる値の範囲はどれか。", choices: ["0 〜 1", "−1 〜 +1", "0 〜 100", "−∞ 〜 +∞"], answer: 1, explain: "rは−1から+1の範囲をとる。符号が関連の向き、絶対値が関連の強さを表す。", difficulty: 1 },
    { type: "mcq", stem: "「アイスの売上」と「水難事故」が正の相関を示すのは、両者に共通の原因（気温）があるためである。これは何の例か。", choices: ["逆の因果", "第三変数問題（交絡）", "出版バイアス", "回帰の希薄化"], answer: 1, explain: "気温という第三の変数が両方を引き上げているため見かけの相関が生じる。相関≠因果の典型例である。", difficulty: 2 },
    { type: "mcq", stem: "相関係数が r＝0.6 のとき、決定係数 r² が示すのはどれか。", choices: ["変動の約60%を説明できる", "変動の約36%を説明できる", "変動の約6%を説明できる", "因果関係が60%ある"], answer: 1, explain: "r²＝0.6²＝0.36。一方の変動のうち約36%が他方で説明できる。rを2乗すると小さくなる点に注意。", difficulty: 2 },
    { type: "mcq", stem: "U字型の強い曲線的関連がある2変数で、ピアソンの r が0に近くなりうるのはなぜか。", choices: ["相関係数は度数しか測れないから", "rは直線的な関連しか捉えられないから", "サンプルが小さいから", "標準化していないから"], answer: 1, explain: "ピアソンのrは直線関係の強さを測る。曲線的な関連は強くてもr≒0になりうるため、必ず散布図を確認する。", difficulty: 3 },
    { type: "mcq", stem: "母集団の真の値（普通は未知）を指す用語はどれか。", choices: ["統計量", "母数（パラメータ）", "標本", "標準誤差"], answer: 1, explain: "母数（パラメータ）は母集団の真の値で多くは未知。標本から計算する既知の値が統計量である。", difficulty: 1 },
    { type: "mcq", stem: "「母集団の分布の形によらず、標本サイズが大きければ標本平均の分布は正規分布に近づく」という定理はどれか。", choices: ["大数の法則", "中心極限定理", "ベイズの定理", "ピアソンの定理"], answer: 1, explain: "中心極限定理は推測統計を支える最重要定理で、正規分布を前提とした推測を広く可能にする。", difficulty: 2 },
    { type: "mcq", stem: "標準偏差（SD）と標準誤差（SE）の違いとして正しいのはどれか。", choices: ["SDとSEは同じもの", "SDは個々のデータのばらつき、SEは標本平均のばらつき", "SEは個々のデータのばらつき、SDは標本平均のばらつき", "どちらもnを増やすと変わらない"], answer: 1, explain: "SDは個々のデータの散らばり、SEは標本平均の散らばり（推定の不確かさ）。nを増やすとSEは小さくなる。", difficulty: 3 },
    { type: "mcq", stem: "95%信頼区間の解釈として最も適切なものはどれか。", choices: ["真の値が95%の確率でこの区間にある", "同じ手続きを繰り返せば約95%の区間が真の母数を含む", "標本の95%がこの区間に入る", "p値が95%である"], answer: 1, explain: "母数は定数なので「95%の確率で区間内」は厳密には誤り。正しくは手続きの95%が母数を含むという頻度的な意味である。", difficulty: 3 },
    { type: "mcq", stem: "仮説検定で、検定の際に「仮に正しい」と置く仮説はどれか。", choices: ["対立仮説 H1", "帰無仮説 H0", "研究仮説", "作業仮説"], answer: 1, explain: "検定では帰無仮説H0（差はない）を仮定し、データがそれと矛盾するほど珍しければH0を棄却する。", difficulty: 1 },
    { type: "mcq", stem: "p値の意味として正しいものはどれか。", choices: ["帰無仮説が正しい確率", "結果が偶然である確率", "帰無仮説を仮定したとき観測値以上に極端な結果が出る確率", "対立仮説が正しい確率"], answer: 2, explain: "p値はH0を仮定した上でのデータの珍しさを表す。H0が正しい確率でも結果が偶然である確率でもない点が頻出の誤解である。", difficulty: 2 },
    { type: "mcq", stem: "本当は差がないのに「差がある」と結論してしまう誤りはどれか。", choices: ["第1種の誤り（α）", "第2種の誤り（β）", "標本誤差", "測定誤差"], answer: 0, explain: "第1種の誤り（αエラー、偽陽性）は、本当はH0が正しいのに棄却してしまう誤り。その確率が有意水準αである。", difficulty: 2 },
    { type: "mcq", stem: "検定力（power）の定義として正しいのはどれか。", choices: ["α", "β", "1−β", "1−α"], answer: 2, explain: "検定力は1−βで、本当に差があるときそれを正しく検出できる確率。サンプルサイズを増やすと高まる。", difficulty: 2 },
    { type: "mcq", stem: "同じ参加者に介入の前後で測定し、その変化を比較するのに最も適した検定はどれか。", choices: ["対応なしt検定", "対応ありt検定", "χ²検定", "一元配置ANOVA"], answer: 1, explain: "同一対象の2時点の比較は対応あり（対応のある）t検定が適する。個人差を除けるため検出力が高い。", difficulty: 2 },
    { type: "mcq", stem: "3つ以上の群の平均を一度に比較するのに適した手法はどれか。", choices: ["対応ありt検定", "分散分析（ANOVA）", "相関分析", "χ²検定"], answer: 1, explain: "3群以上の平均比較はANOVA（F検定）を用いる。t検定の総当たりは第1種の誤りを増やすため不適切である。", difficulty: 2 },
    { type: "mcq", stem: "「ある薬は若年者には効くが高齢者には効かない」のように、ある要因の効果が別の要因の水準によって変わることを何というか。", choices: ["主効果", "交互作用", "共分散", "回帰"], answer: 1, explain: "交互作用（interaction）は要因の組み合わせによって効果が変わる現象。二元配置ANOVAで検討できる。", difficulty: 2 },
    { type: "mcq", stem: "「性別」と「ある製品を好むか否か」という2つのカテゴリ変数に関連があるかを調べる検定はどれか。", choices: ["t検定", "χ²独立性検定", "F検定", "相関分析"], answer: 1, explain: "度数（カテゴリデータ）の関連を調べるのはχ²独立性検定。観測度数と期待度数のズレを評価する。", difficulty: 2 },
    { type: "mcq", stem: "効果量（effect size）について正しい記述はどれか。", choices: ["p値が小さいほど効果量は大きい", "効果や差の大きさを表し、p値とは別の情報である", "サンプルサイズが大きいほど効果量も自動的に大きくなる", "効果量は0〜1の確率である"], answer: 1, explain: "効果量は差や関連の大きさ（実質的意味）を表す。p値（有意か否か）とは独立した情報で、両方の報告が望ましい。", difficulty: 2 },
    { type: "mcq", stem: "有意な結果ほど出版されやすく、文献全体で効果が過大評価される偏りを何というか。", choices: ["出版バイアス", "選択バイアス", "確証バイアス", "後知恵バイアス"], answer: 0, explain: "出版バイアスは、p<.05の研究が掲載されやすく非有意な研究が埋もれる現象。メタ分析では必ず検討が必要である。", difficulty: 3 },
  ],
});
