/* ============================================================
   産業・組織心理学  (industrial)
   ============================================================ */
PsychApp.registerModule({
  id: "industrial",
  title: "産業・組織心理学",
  emoji: "🏢",
  category: "applied",
  tagline: "採用と人事評価・職務動機づけ理論・職務満足・リーダーシップ・組織と作業環境",
  overview: `<p>産業・組織心理学（I/O psychology）は、<strong>働く場面に心理学の知見と方法を応用する分野</strong>である。人をどう選び（採用）、どう評価・育成し（人事）、どう動機づけ（モチベーション）、どう率いるか（リーダーシップ）、そして組織と作業環境をどう設計するかを、実証的に研究する。科学的管理法やホーソン研究を起点に発展し、現在は人事領域を扱う<strong>産業心理学（personnel psychology）</strong>と、人の行動・態度を扱う<strong>組織心理学（organizational psychology）</strong>の両輪からなる。</p>`,
  lessons: [
    {
      title: "I/O心理学とは — 歴史と二つの領域",
      body: `
        <p><strong>産業・組織心理学（industrial/organizational psychology, I/O psychology）</strong>は、職場という場面に心理学を応用する分野である。大きく二つの領域に分けられる。</p>
        <ul>
          <li><strong>産業（personnel）心理学</strong>：人事領域。職務分析、採用選抜、人事評価、訓練など「人と仕事を適切に結びつける」ことを扱う。</li>
          <li><strong>組織（organizational）心理学</strong>：行動領域。動機づけ、職務満足、リーダーシップ、集団・組織の力学など「組織の中での人の行動・態度」を扱う。</li>
        </ul>
        <h3>科学的管理法 — テイラー</h3>
        <p>20世紀初頭、<em>フレデリック・テイラー (Taylor)</em> は<strong>科学的管理法（scientific management）</strong>を提唱した。作業を要素に分解し、<strong>時間研究・動作研究（time and motion study）</strong>によって最も効率的な手順を割り出し、標準化した。出来高に応じた賃金（差別出来高給）で動機づけようとした点も特徴である。生産性を高めた一方で、人間を機械的に扱うとの批判も受けた。</p>
        <div class="callout note">テイラーと同時代の <em>ギルブレス夫妻</em> も動作研究を発展させ、無駄な動作を省く「動作経済の原則」を確立した。</div>
        <h3>ホーソン研究 — 人間関係論の出発点</h3>
        <p>1924〜1932年、アメリカのウェスタン・エレクトリック社<strong>ホーソン工場</strong>で、<em>メイヨー (Mayo)</em> やレスリスバーガーらが一連の研究を行った。当初は照明など物理的作業条件と生産性の関係を調べたが、予想外の結果が得られた。</p>
        <div class="callout key"><b>ホーソン効果</b>：照明を明るくしても暗くしても生産性が上がった。<strong>「自分たちが注目され、特別な集団として扱われている」という心理的要因</strong>が物理条件以上に生産性を左右したのである。「観察されている」こと自体が行動を変える効果を一般にホーソン効果と呼ぶ。</div>
        <p>この発見から、生産性は物理条件だけでなく<strong>従業員の感情・態度、非公式集団（インフォーマル・グループ）の規範、上司との関係</strong>に強く依存するという<strong>人間関係論（human relations approach）</strong>が生まれた。これがテイラーの機械的人間観に対するアンチテーゼとなり、組織心理学の源流となった。</p>
        <table>
          <tr><th></th><th>科学的管理法</th><th>人間関係論</th></tr>
          <tr><td><b>代表</b></td><td>テイラー</td><td>メイヨー</td></tr>
          <tr><td><b>人間観</b></td><td>経済人（賃金で動く）</td><td>社会人（人間関係で動く）</td></tr>
          <tr><td><b>重視</b></td><td>作業の標準化・効率</td><td>感情・士気・非公式集団</td></tr>
        </table>
        <div class="callout warn"><b>混同注意</b>：ホーソン研究は「人間関係が大事」だけでなく、「観察すること自体が結果に影響する（ホーソン効果）」という方法論上の教訓も残した。後者は実験デザインで注意すべき交絡要因である。</div>
      `,
      figure: `<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <line x1="40" y1="40" x2="40" y2="200" stroke="#c9cfe0" stroke-width="3"/>
        <g font-size="12">
          <circle cx="40" cy="60" r="6" fill="#f0a020"/><text x="58" y="57" font-weight="700">1900s 科学的管理法（テイラー）</text><text x="58" y="73" fill="#5b6478">時間・動作研究／効率重視</text>
          <circle cx="40" cy="105" r="6" fill="#15c4a8"/><text x="58" y="102" font-weight="700">1924〜32 ホーソン研究（メイヨー）</text><text x="58" y="118" fill="#5b6478">ホーソン効果／人間関係論</text>
          <circle cx="40" cy="150" r="6" fill="#5b6cf0"/><text x="58" y="147" font-weight="700">戦中〜戦後 適性検査・人事選抜の発展</text>
          <circle cx="40" cy="185" r="6" fill="#e0566b"/><text x="58" y="182" font-weight="700">現代 産業（人事）＋組織（行動）の二領域</text>
        </g>
        <text x="20" y="22" font-size="14" font-weight="800" fill="#1d2433">I/O心理学の歴史</text>
      </svg>`,
      figcaption: "効率を追求した科学的管理法から、人間関係を重視するホーソン研究を経て、現代のI/O心理学へ。",
      terms: [
        { term: "産業・組織心理学", def: "職場に心理学を応用する分野。人事領域（産業）と行動領域（組織）からなる。" },
        { term: "科学的管理法", def: "テイラーが提唱。時間・動作研究で作業を標準化し効率を最大化する手法。" },
        { term: "時間・動作研究", def: "作業を要素に分解し、所要時間と動作を分析して最効率の手順を求める方法。" },
        { term: "ホーソン研究", def: "ホーソン工場で行われた一連の研究。人間関係論の出発点。" },
        { term: "ホーソン効果", def: "注目・観察されること自体が行動（生産性）を変える効果。" },
        { term: "人間関係論", def: "生産性は感情・士気・非公式集団に依存するとする立場。メイヨーら。" },
        { term: "非公式集団", def: "公式組織とは別に自然発生する人間関係の集団。独自の規範をもつ。" },
      ],
    },
    {
      title: "人事選抜と職務分析",
      body: `
        <p>適切な人を適切な仕事に配置するには、まず<strong>「その仕事が何を求めるか」を明らかにする</strong>必要がある。これが職務分析である。</p>
        <h3>職務分析（job analysis）</h3>
        <p><strong>職務分析</strong>とは、ある職務の内容・要件を体系的に明らかにする手続きである。観察・面接・質問紙などで情報を集め、二つの成果物にまとめる。</p>
        <ul>
          <li><strong>職務記述書（job description）</strong>：職務の<em>内容</em>（何をする仕事か：課業・責任・条件）。</li>
          <li><strong>職務明細書／職務要件（job specification）</strong>：その職務を遂行するために人に必要な<em>要件</em>（知識・技能・能力など、いわゆる <strong>KSAO</strong>）。</li>
        </ul>
        <p>職務分析は、採用基準・評価項目・訓練内容・職務設計のすべての土台となる。</p>
        <h3>採用選抜（personnel selection）</h3>
        <p>応募者の中から職務に適した人を選ぶ手続き。代表的な選抜手段を、その<strong>妥当性（業績をどれだけ予測できるか）</strong>とともに整理する。</p>
        <table>
          <tr><th>選抜手段</th><th>内容</th><th>業績予測の妥当性</th></tr>
          <tr><td><b>非構造化面接</b></td><td>その場の流れで自由に質問する面接</td><td>低〜中（面接官の主観に左右されやすい）</td></tr>
          <tr><td><b>構造化面接</b></td><td>全応募者に同じ質問をし、基準に沿って採点</td><td><strong>高い</strong>（非構造化より妥当性・公平性が高い）</td></tr>
          <tr><td><b>能力検査（認知能力テスト）</b></td><td>一般知的能力・適性の測定</td><td>高い（多くの職務で良い予測因）</td></tr>
          <tr><td><b>ワークサンプル</b></td><td>実際の職務の一部を実演させる</td><td>高い（行動の直接サンプル）</td></tr>
          <tr><td><b>アセスメントセンター</b></td><td>複数の演習を複数評価者が観察（管理職選抜）</td><td>中〜高</td></tr>
        </table>
        <div class="callout tip"><strong>構造化面接</strong>は、質問項目と評価基準をあらかじめ標準化することで、面接官による評価のばらつきや偏見を減らし、非構造化面接より高い予測妥当性をもつ。実務での採用が推奨される。</div>
        <h3>選抜の妥当性と公平性</h3>
        <ul>
          <li><strong>信頼性（reliability）</strong>：測定が安定・一貫していること。</li>
          <li><strong>妥当性（validity）</strong>：測りたいものを測れていること。とくに選抜では<strong>基準関連妥当性</strong>（選抜得点が実際の職務業績をどれだけ予測するか）が重要。</li>
          <li><strong>公平性（fairness）と adverse impact</strong>：特定の集団に不利益が偏らないこと。職務と関連のない基準による差別を避ける必要がある。</li>
        </ul>
        <div class="callout warn"><b>注意</b>：信頼性は妥当性の必要条件だが十分条件ではない。安定して測れても（信頼性が高くても）、測っている対象が業績と無関係なら妥当ではない。</div>
      `,
      figure: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="iar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6cf0"/></marker></defs>
        <text x="260" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">職務分析から選抜・評価・訓練へ</text>
        <g text-anchor="middle" font-size="12" font-weight="700">
          <rect x="180" y="44" width="160" height="44" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="260" y="64">職務分析</text><text x="260" y="80" font-size="10" font-weight="400">(KSAOの特定)</text>
          <rect x="20" y="130" width="130" height="46" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="85" y="150">採用選抜</text><text x="85" y="166" font-size="10" font-weight="400">構造化面接・テスト</text>
          <rect x="195" y="130" width="130" height="46" rx="10" fill="#fdeccd" stroke="#f0a020"/><text x="260" y="150">人事評価</text><text x="260" y="166" font-size="10" font-weight="400">評価項目の設定</text>
          <rect x="370" y="130" width="130" height="46" rx="10" fill="#fbe0e4" stroke="#e0566b"/><text x="435" y="150">訓練・開発</text><text x="435" y="166" font-size="10" font-weight="400">ニーズ分析</text>
        </g>
        <g stroke="#5b6cf0" stroke-width="2" marker-end="url(#iar)" fill="none">
          <path d="M230,88 L100,128"/><path d="M260,90 L260,128"/><path d="M290,88 L420,128"/>
        </g>
      </svg>`,
      figcaption: "職務分析（KSAOの特定）が、採用選抜・人事評価・訓練のすべての基盤となる。",
      terms: [
        { term: "職務分析", def: "職務の内容と要件を体系的に明らかにする手続き。人事の基盤。" },
        { term: "職務記述書", def: "職務の内容（課業・責任・条件）を記した文書。" },
        { term: "職務明細書（職務要件）", def: "職務遂行に必要な人の要件（KSAO）を記した文書。" },
        { term: "KSAO", def: "知識(Knowledge)・技能(Skills)・能力(Abilities)・その他(Other)。職務要件の総称。" },
        { term: "構造化面接", def: "全応募者に同じ質問を行い基準で採点する面接。予測妥当性が高い。" },
        { term: "ワークサンプル", def: "実際の職務の一部を実演させて評価する選抜法。" },
        { term: "基準関連妥当性", def: "選抜得点が実際の職務業績をどれだけ予測するかを示す妥当性。" },
        { term: "アドバース・インパクト", def: "選抜基準が特定集団に不利益を偏らせる現象。公平性の問題。" },
      ],
    },
    {
      title: "人事評価と訓練・能力開発",
      body: `
        <p>採用した従業員の働きぶりを測り、処遇や育成につなげるのが人事評価（人事考課）である。</p>
        <h3>人事考課の方法</h3>
        <ul>
          <li><strong>絶対評価</strong>：評定尺度法（各項目を段階評価）、<strong>行動基準評定尺度（BARS）</strong>（具体的な行動例を尺度の目盛りに対応づける）など。</li>
          <li><strong>相対評価</strong>：序列法、強制分布法（あらかじめ決めた比率で各評価段階に割り当てる）など。</li>
          <li><strong>多面評価（360度評価）</strong>：上司だけでなく、部下・同僚・本人・顧客など複数の視点から評価する。</li>
        </ul>
        <h3>評価エラー（評定者バイアス）</h3>
        <p>評価者は無意識のうちにさまざまな偏りに陥る。代表的なものを押さえる。</p>
        <table>
          <tr><th>エラー</th><th>内容</th></tr>
          <tr><td><b>ハロー効果</b></td><td>一つの良い（悪い）特徴に引きずられ、他の項目まで同じ方向に評価してしまう。</td></tr>
          <tr><td><b>寛大化傾向</b></td><td>全体に甘く（高めに）評価する。</td></tr>
          <tr><td><b>厳格化傾向</b></td><td>全体に辛く（低めに）評価する。</td></tr>
          <tr><td><b>中心化傾向</b></td><td>無難に中間段階ばかりつけ、差がつかない。</td></tr>
          <tr><td><b>対比効果</b></td><td>直前に評価した人と比べて、相対的に高く／低く評価してしまう。</td></tr>
          <tr><td><b>論理誤差</b></td><td>論理的に関連がありそうな項目を、実態を見ずに同じように評価する。</td></tr>
        </table>
        <div class="callout key"><b>ハロー効果（halo effect）</b>は最重要。たとえば「明るく感じがよい」という印象だけで、業務遂行能力や正確性まで高く評価してしまう。BARS（具体的行動に基づく評価）や評価者訓練がエラーの低減に役立つ。</div>
        <div class="callout warn"><b>混同注意</b>：寛大化／厳格化は「全体に甘い／辛い」というずれ、中心化傾向は「中央に集まり差がつかない」ずれである。両者は別の現象。</div>
        <h3>訓練と能力開発（training and development）</h3>
        <p>訓練は思いつきで行うのではなく、体系的なサイクルで設計する。よく知られる枠組みが<strong>ニーズ分析→設計→実施→評価</strong>である（ADDIEモデルなどとも対応）。</p>
        <ol>
          <li><strong>ニーズ分析</strong>：組織・職務・個人の各レベルで「何の訓練が必要か」を診断する。</li>
          <li><strong>設計（design）</strong>：学習目標を定め、教材・方法（OJT、Off-JT、e-ラーニング、シミュレーションなど）を選ぶ。</li>
          <li><strong>実施（implementation）</strong>：訓練を行う。</li>
          <li><strong>評価（evaluation）</strong>：効果を測る。<em>カークパトリックの4段階モデル</em>では、<strong>反応（満足度）→学習（習得）→行動（職場での転移）→結果（業績・成果）</strong>の4水準で評価する。</li>
        </ol>
        <div class="callout tip"><strong>訓練の転移（transfer of training）</strong>＝学んだことが実際の職場で活かされること、が訓練の最終的な成否を決める。「研修中はできた」だけでは不十分である。</div>
      `,
      figure: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <defs><marker id="tar" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15c4a8"/></marker></defs>
        <text x="260" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">訓練設計のサイクル（と効果評価の4段階）</text>
        <g text-anchor="middle" font-size="12" font-weight="700">
          <rect x="20" y="50" width="110" height="46" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="75" y="78">ニーズ分析</text>
          <rect x="160" y="50" width="110" height="46" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="215" y="78">設計</text>
          <rect x="300" y="50" width="110" height="46" rx="10" fill="#e9ebfe" stroke="#5b6cf0"/><text x="355" y="78">実施</text>
          <rect x="430" y="50" width="80" height="46" rx="10" fill="#d8f6ee" stroke="#15c4a8"/><text x="470" y="78">評価</text>
        </g>
        <g stroke="#15c4a8" stroke-width="2" marker-end="url(#tar)">
          <line x1="132" y1="73" x2="156" y2="73"/><line x1="272" y1="73" x2="296" y2="73"/><line x1="412" y1="73" x2="426" y2="73"/>
        </g>
        <g font-size="11" text-anchor="middle" fill="#5b6478">
          <text x="260" y="135" font-weight="700" fill="#1d2433">カークパトリックの4段階</text>
          <text x="260" y="158">反応（満足）→ 学習（習得）→ 行動（転移）→ 結果（成果）</text>
        </g>
      </svg>`,
      figcaption: "訓練はニーズ分析から評価までを循環させて設計する。効果はカークパトリックの4段階で評価する。",
      terms: [
        { term: "人事考課", def: "従業員の業績・能力を評価し処遇や育成に反映する手続き。" },
        { term: "ハロー効果", def: "一つの特徴に引きずられ他の評価項目まで同方向にずれるエラー。" },
        { term: "寛大化／厳格化傾向", def: "全体に甘く（寛大化）または辛く（厳格化）評価する偏り。" },
        { term: "中心化傾向", def: "評価が中間段階に集まり差がつかなくなる偏り。" },
        { term: "対比効果", def: "直前の評価対象と比べて相対的に評価がずれる現象。" },
        { term: "BARS（行動基準評定尺度）", def: "具体的な行動例を尺度の目盛りに対応づけ、評価エラーを減らす手法。" },
        { term: "ニーズ分析", def: "組織・職務・個人レベルで必要な訓練を診断する段階。" },
        { term: "カークパトリックの4段階", def: "反応・学習・行動・結果の4水準で訓練効果を評価するモデル。" },
      ],
    },
    {
      title: "職務における動機づけ理論",
      body: `
        <p>「人はなぜ、どう頑張るのか」を説明するのが<strong>ワーク・モチベーション（職務動機づけ）</strong>の理論である。代表的理論を整理する。</p>
        <h3>欲求に着目する理論（内容理論）</h3>
        <h4>マズローの欲求階層説（組織文脈）</h4>
        <p>生理的→安全→社会的（所属・愛）→承認（尊重）→<strong>自己実現</strong>の5段階。低次が満たされると高次が動機づけ要因になるとされる。組織では給与・福利（低次）から、達成・成長機会（高次）へと配慮を広げる枠組みとして参照される。</p>
        <h4>ハーズバーグの二要因理論</h4>
        <p><em>ハーズバーグ (Herzberg)</em> は、満足をもたらす要因と不満をもたらす要因は<strong>別物</strong>だとした。</p>
        <ul>
          <li><strong>動機づけ要因（motivators）</strong>：達成、承認、仕事そのもの、責任、昇進・成長など。満たされると<em>満足</em>を生む（仕事の内容に関わる）。</li>
          <li><strong>衛生要因（hygiene factors）</strong>：給与、労働条件、対人関係、会社の方針、監督など。<strong>不足すると不満を生むが、満たしても満足にはつながらず不満が消えるだけ</strong>（仕事の環境に関わる）。</li>
        </ul>
        <div class="callout key"><b>二要因理論の核心</b>：「満足の反対は不満ではなく、満足がないこと」。給与を上げても（衛生要因）不満は減るが積極的なやる気は生まれない。やる気を高めるには動機づけ要因＝<strong>仕事そのものの充実（職務充実）</strong>が必要となる。</div>
        <h3>過程に着目する理論（過程理論）</h3>
        <h4>ヴルームの期待理論（expectancy theory）</h4>
        <p>動機づけの強さを、次の3要素の積で説明する。</p>
        <blockquote>動機づけ ＝ <strong>期待（expectancy）</strong>×<strong>道具性（instrumentality）</strong>×<strong>誘意性（valence）</strong></blockquote>
        <ul>
          <li><strong>期待</strong>：努力すれば業績が上がるという見込み（努力→業績）。</li>
          <li><strong>道具性</strong>：業績を上げれば報酬が得られるという見込み（業績→報酬）。</li>
          <li><strong>誘意性</strong>：その報酬がどれだけ魅力的か。</li>
        </ul>
        <p><strong>積</strong>なので、どれか一つが0なら全体も0になる。「頑張っても無駄」「報酬が魅力的でない」のいずれでもやる気は生じない。</p>
        <h4>ロックの目標設定理論（goal-setting theory）</h4>
        <p><em>ロック (Locke)</em> は、<strong>具体的で困難な（だが達成可能な）目標</strong>が、漠然とした目標や「ベストを尽くせ」より高い業績を生むとした。実務では <strong>SMART</strong>（Specific具体的・Measurable測定可能・Achievable達成可能・Relevant関連性・Time-bound期限）な目標設定が推奨される。本人の<strong>目標へのコミットメント</strong>と<strong>フィードバック</strong>が効果を高める。</p>
        <h4>アダムスの公平理論（equity theory）</h4>
        <p><em>アダムス (Adams)</em> は、人は自分の<strong>「投入(inputs)に対する成果(outcomes)の比率」を他者と比較する</strong>とした。比率が他者より不利（過小報酬）でも有利（過大報酬）でも不公平感が生じ、それを解消しようと努力量や認知を調整する。賃金の絶対額より<strong>相対的な公平感</strong>が動機づけを左右する。</p>
        <h3>仕事そのものを設計する — 職務特性モデル</h3>
        <p><em>ハックマン＆オルダム (Hackman &amp; Oldham)</em> の<strong>職務特性モデル（Job Characteristics Model）</strong>は、職務がもつ5つの中核的特性が内発的動機づけを高めるとした。</p>
        <ul>
          <li>5つの中核的職務特性：<strong>技能の多様性・タスクの完結性・タスクの重要性・自律性・フィードバック</strong>。</li>
          <li>これらが3つの心理状態（仕事の有意味感・成果への責任感・結果の認識）を生み、内発的動機づけ・満足・質の向上につながる。</li>
        </ul>
      `,
      figure: `<svg viewBox="0 0 540 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="270" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">ハーズバーグの二要因理論</text>
        <line x1="270" y1="40" x2="270" y2="190" stroke="#c9cfe0" stroke-width="2"/>
        <g font-size="12">
          <rect x="40" y="55" width="200" height="56" rx="10" fill="#d8f6ee" stroke="#15c4a8"/>
          <text x="140" y="77" text-anchor="middle" font-weight="700" fill="#0b8f78">動機づけ要因</text>
          <text x="140" y="95" text-anchor="middle" font-size="11">達成・承認・仕事自体</text>
          <text x="140" y="108" text-anchor="middle" font-size="11">責任・昇進・成長</text>
          <rect x="300" y="55" width="200" height="56" rx="10" fill="#fdeccd" stroke="#f0a020"/>
          <text x="400" y="77" text-anchor="middle" font-weight="700" fill="#b06a00">衛生要因</text>
          <text x="400" y="95" text-anchor="middle" font-size="11">給与・労働条件・対人関係</text>
          <text x="400" y="108" text-anchor="middle" font-size="11">会社方針・監督</text>
        </g>
        <g font-size="11" text-anchor="middle">
          <text x="140" y="140" font-weight="700">満たすと → 満足↑</text>
          <text x="140" y="158" fill="#5b6478">（仕事の内容）</text>
          <text x="400" y="140" font-weight="700">不足すると → 不満↑</text>
          <text x="400" y="158" fill="#5b6478">満たしても不満が消えるだけ</text>
        </g>
        <text x="270" y="185" text-anchor="middle" font-size="11" fill="#5b6478">満足の反対は「満足がない」、不満の反対は「不満がない」</text>
      </svg>`,
      figcaption: "二要因理論。動機づけ要因は満足を、衛生要因は不満を左右する別系統で、対称ではない。",
      terms: [
        { term: "二要因理論", def: "ハーズバーグの理論。満足を生む動機づけ要因と不満を生む衛生要因を区別。" },
        { term: "動機づけ要因／衛生要因", def: "前者は達成・承認など仕事の内容、後者は給与・環境など。満足と不満を別々に左右する。" },
        { term: "期待理論", def: "ヴルーム。動機づけ＝期待×道具性×誘意性の積で説明する過程理論。" },
        { term: "道具性", def: "業績を上げれば報酬が得られるという見込み（業績→報酬の結びつき）。" },
        { term: "誘意性", def: "得られる報酬の魅力の大きさ。" },
        { term: "目標設定理論", def: "ロック。具体的で困難な目標が高業績を生むとする理論。SMART。" },
        { term: "公平理論", def: "アダムス。投入に対する成果の比率を他者と比較し公平感を求める理論。" },
        { term: "職務特性モデル", def: "ハックマン＆オルダム。5つの中核的職務特性が内発的動機づけを高める。" },
      ],
    },
    {
      title: "職務態度 — 職務満足・組織コミットメント",
      body: `
        <p>働く人が仕事や組織に対して抱く態度（job attitudes）は、業績・離職・欠勤と結びつく重要な変数である。</p>
        <h3>職務満足（job satisfaction）</h3>
        <p><strong>職務満足</strong>とは、自分の仕事に対する全体的な肯定的態度・感情である。代表的な測定尺度に <em>JDI（Job Descriptive Index）</em> があり、仕事内容・給与・昇進・上司・同僚などの側面ごとに測る。</p>
        <h4>職務満足の規定因</h4>
        <ul>
          <li><strong>仕事そのもの</strong>：自律性・多様性・有意味感（職務特性が高いほど満足しやすい）。</li>
          <li><strong>報酬と公平感</strong>：絶対額より「公平か」が効く（公平理論）。</li>
          <li><strong>上司・同僚との関係、労働条件</strong>。</li>
          <li><strong>個人差・性向</strong>：同じ仕事でも、肯定的気質（中核的自己評価が高い人など）は満足しやすい。</li>
        </ul>
        <div class="callout warn"><b>よくある誤解</b>：「満足している従業員ほど生産性が高い」という単純な因果は、研究上はそれほど強くない。職務満足と業績の相関は中程度にとどまる。一方、<strong>満足は離職・欠勤の低さとはより明確に結びつく</strong>。</div>
        <h3>組織コミットメント（organizational commitment）</h3>
        <p>個人が組織に対してもつ心理的な結びつき・愛着。<em>マイヤー＆アレン (Meyer &amp; Allen)</em> の3成分モデルがよく知られる。</p>
        <table>
          <tr><th>成分</th><th>動機の核</th><th>とどまる理由の例</th></tr>
          <tr><td><b>情緒的コミットメント</b></td><td>「いたいから」（愛着・同一化）</td><td>この会社が好きだから</td></tr>
          <tr><td><b>継続的コミットメント</b></td><td>「やめると損だから」（コスト）</td><td>辞めると失うものが大きいから</td></tr>
          <tr><td><b>規範的コミットメント</b></td><td>「いるべきだから」（義務感）</td><td>恩や責任があるから</td></tr>
        </table>
        <div class="callout tip">3成分のうち、業績や組織市民行動（自発的な貢献行動）と最も良く結びつくのは一般に<strong>情緒的コミットメント</strong>とされる。</div>
        <h3>その他の職務態度と行動的帰結</h3>
        <ul>
          <li><strong>職務関与（job involvement）</strong>：仕事に心理的にどれだけのめり込み、自己と同一視するか。</li>
          <li><strong>ワーク・エンゲイジメント</strong>：活力・熱意・没頭を特徴とする、仕事への積極的・充実した心理状態。バーンアウト（燃え尽き）の対極とされる。</li>
          <li><strong>離職（turnover）・欠勤（absenteeism）</strong>：職務満足や情緒的コミットメントが低いほど高まりやすい。組織にとってコストが大きく、態度測定が予防に役立つ。</li>
        </ul>
      `,
      terms: [
        { term: "職務満足", def: "自分の仕事に対する全体的な肯定的態度・感情。JDIなどで測定。" },
        { term: "JDI", def: "Job Descriptive Index。仕事内容・給与・昇進・上司・同僚の側面別に職務満足を測る尺度。" },
        { term: "組織コミットメント", def: "個人が組織に対してもつ心理的な結びつき・愛着。" },
        { term: "情緒的コミットメント", def: "愛着・同一化に基づき「いたいから」とどまる成分。業績と最も結びつく。" },
        { term: "継続的コミットメント", def: "辞めるコストの大きさに基づき「やめると損だから」とどまる成分。" },
        { term: "規範的コミットメント", def: "義務感に基づき「いるべきだから」とどまる成分。" },
        { term: "職務関与", def: "仕事に心理的にのめり込み自己と同一視する程度。" },
        { term: "ワーク・エンゲイジメント", def: "活力・熱意・没頭を特徴とする仕事への充実した心理状態。" },
      ],
    },
    {
      title: "リーダーシップ",
      body: `
        <p>リーダーシップ研究は、<strong>特性論→行動論→状況適合理論→変革型</strong>という流れで発展してきた。</p>
        <h3>特性論（trait theory）</h3>
        <p>「優れたリーダーは生まれつき特定の資質をもつ」とする初期の立場。知能・外向性・誠実性・自信などとの関連が示されたが、特性だけでは状況を超えて一貫した予測ができず、限界があった。</p>
        <h3>行動論（behavioral theory）</h3>
        <p>「リーダーは何をするか（行動）」に着目。<strong>オハイオ州立大学の研究</strong>は、リーダー行動を独立した二次元に整理した。</p>
        <ul>
          <li><strong>構造づくり（initiating structure）</strong>：課題・役割・手順を明確にし、目標達成を組織する（課題志向）。</li>
          <li><strong>配慮（consideration）</strong>：部下への信頼・尊重・気遣い（人間関係志向）。</li>
        </ul>
        <h4>三隅の PM理論</h4>
        <p>日本の <em>三隅二不二（みすみ じゅうじ）</em> は、リーダーシップを<strong>P機能（Performance：目標達成・課題遂行）</strong>と<strong>M機能（Maintenance：集団維持・人間関係）</strong>の二軸でとらえた。両者の高低から<strong>PM・Pm・pM・pm</strong>の4類型を作り、<strong>両機能とも高い PM型が最も効果的</strong>とした。</p>
        <h3>状況適合理論（contingency theory）</h3>
        <p>「最適なリーダーシップは状況によって変わる」とする立場。</p>
        <h4>フィードラーの条件即応モデル</h4>
        <p><em>フィードラー (Fiedler)</em> は、<strong>LPC尺度</strong>（最も苦手な同僚をどう評価するか）でリーダーを課題志向／関係志向に分け、状況の好意性（リーダーと成員の関係・課題の構造・地位パワー）に応じて有効なタイプが変わるとした。<strong>状況が非常に良いか非常に悪いときは課題志向、中程度のときは関係志向</strong>のリーダーが有効とされる。</p>
        <h4>SL理論（状況的リーダーシップ）</h4>
        <p><em>ハーシィ＆ブランチャード (Hersey &amp; Blanchard)</em> は、<strong>部下の成熟度（レディネス）</strong>に応じてリーダー行動を変えるべきだとした。成熟度の上昇に伴い、<strong>指示型→説得型→参加型→委任型</strong>と、指示的行動を減らし委任を増やしていくのが有効とされる。</p>
        <h3>変革型リーダーシップと交換型</h3>
        <table>
          <tr><th></th><th>交換型（transactional）</th><th>変革型（transformational）</th></tr>
          <tr><td><b>核</b></td><td>報酬と業績の交換・取引</td><td>ビジョンで人を鼓舞し変える</td></tr>
          <tr><td><b>手段</b></td><td>条件付き報酬・例外管理</td><td>カリスマ・知的刺激・個別配慮</td></tr>
        </table>
        <p><strong>変革型リーダーシップ</strong>（バーンズ／バス）は、魅力的なビジョンを示し、部下の価値観・意欲を高め、期待以上の成果へ導く。<strong>LMX理論（Leader-Member Exchange）</strong>は、リーダーが部下一人ひとりと結ぶ<strong>関係の質</strong>に着目し、質の高い関係（内集団）の部下ほど高い業績・満足を示すとした。</p>
        <div class="callout note">特性論・行動論はリーダー自身に、状況適合理論は状況に、LMX理論はリーダーと部下の「関係」に、それぞれ焦点を移してきた点を押さえると整理しやすい。</div>
      `,
      figure: `<svg viewBox="0 0 340 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="170" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">三隅 PM理論の4類型</text>
        <line x1="60" y1="50" x2="60" y2="270" stroke="#1d2433" stroke-width="2"/>
        <line x1="60" y1="270" x2="300" y2="270" stroke="#1d2433" stroke-width="2"/>
        <text x="170" y="295" text-anchor="middle" font-size="12">P機能（課題達成）→</text>
        <text x="30" y="160" text-anchor="middle" font-size="12" transform="rotate(-90 30 160)">M機能（集団維持）→</text>
        <line x1="180" y1="50" x2="180" y2="270" stroke="#c9cfe0" stroke-width="1" stroke-dasharray="4"/>
        <line x1="60" y1="160" x2="300" y2="160" stroke="#c9cfe0" stroke-width="1" stroke-dasharray="4"/>
        <g font-size="13" text-anchor="middle">
          <rect x="68" y="58" width="104" height="94" fill="#fbe0e4" stroke="#e0566b"/><text x="120" y="100" font-weight="700">pM型</text><text x="120" y="120" font-size="10">人間関係◯課題△</text>
          <rect x="188" y="58" width="104" height="94" fill="#d8f6ee" stroke="#15c4a8"/><text x="240" y="100" font-weight="700">PM型</text><text x="240" y="120" font-size="10">両方高（最良）</text>
          <rect x="68" y="170" width="104" height="92" fill="#eef0f6" stroke="#9aa3bd"/><text x="120" y="212" font-weight="700">pm型</text><text x="120" y="232" font-size="10">両方低</text>
          <rect x="188" y="170" width="104" height="92" fill="#fdeccd" stroke="#f0a020"/><text x="240" y="212" font-weight="700">Pm型</text><text x="240" y="232" font-size="10">課題◯人間関係△</text>
        </g>
      </svg>`,
      figcaption: "PM理論。P機能（課題達成）とM機能（集団維持）の二軸。両機能とも高いPM型が最も効果的とされる。",
      terms: [
        { term: "特性論", def: "優れたリーダーは特定の資質をもつとする初期の立場。" },
        { term: "構造づくり／配慮", def: "オハイオ研究の二次元。課題の組織化（構造づくり）と部下への気遣い（配慮）。" },
        { term: "PM理論", def: "三隅二不二。P（課題達成）とM（集団維持）の二軸でリーダーを4類型に分ける。PM型が最良。" },
        { term: "フィードラーの条件即応モデル", def: "LPCで測るリーダー志向と状況の好意性の組合せで有効性が決まるとする理論。" },
        { term: "LPC尺度", def: "最も苦手な同僚への評価。高いほど関係志向、低いほど課題志向と解釈する。" },
        { term: "SL理論", def: "ハーシィ＆ブランチャード。部下の成熟度に応じ指示型→説得型→参加型→委任型と変える。" },
        { term: "変革型リーダーシップ", def: "ビジョンで部下を鼓舞し価値観・意欲を高め期待以上の成果へ導くリーダーシップ。" },
        { term: "LMX理論", def: "リーダーと部下個々の関係の質に着目。質の高い関係ほど高業績・高満足。" },
      ],
    },
    {
      title: "組織と作業環境 — 集団・組織・安全・ストレス",
      body: `
        <p>最後に、個人を取り巻く集団・組織・物理環境のレベルを扱う。</p>
        <h3>チームと集団力学</h3>
        <ul>
          <li><strong>集団発達の段階（タックマン）</strong>：形成期→混乱期→規範形成期→遂行期→（解散期）。チームは段階を経て成熟する。</li>
          <li><strong>社会的手抜き（social loafing）</strong>：集団作業では一人当たりの努力が低下しやすい（リンゲルマン効果）。個人の貢献が見えにくいほど起きやすい。</li>
          <li><strong>集団思考（groupthink）</strong>：凝集性の高い集団が、和を優先して批判的検討を怠り、不合理な決定を下す現象（ジャニス）。</li>
        </ul>
        <h3>組織文化と組織開発</h3>
        <p><strong>組織文化（organizational culture）</strong>とは、組織のメンバーに共有された価値観・信念・行動様式である。<em>シャイン (Schein)</em> は文化を<strong>人工物（目に見える物・行動）→標榜される価値→基本的前提（無意識の前提）</strong>の3層でとらえた。<strong>組織開発（OD）</strong>は、行動科学の知見を用いて組織の健康と有効性を計画的に高める介入である。<em>レヴィン</em> の<strong>解凍→変化→再凍結</strong>は組織変革の古典的モデルである。</p>
        <h3>人間工学と作業安全</h3>
        <p><strong>人間工学（ergonomics / human factors）</strong>は、機械・道具・作業環境を<strong>人間の能力と特性に合わせて設計</strong>し、効率・快適さ・安全を高める分野である。表示器・操作器の配置、ヒューマンエラーを防ぐ設計（フールプルーフ、フェイルセーフ）などを扱う。労働災害の防止には、危険源の管理に加え、ヒューマンエラーの心理的メカニズムの理解と<strong>安全文化（safety culture）</strong>の醸成が重要となる。</p>
        <div class="callout note">人間工学は「人を機械に合わせる」のではなく「機械・環境を人に合わせる」点が要点である。これは科学的管理法以来の効率追求を、人間中心の設計へと展開したものといえる。</div>
        <h3>職務ストレスとワークライフバランス</h3>
        <ul>
          <li><strong>職務ストレッサー</strong>：過大な要求・役割葛藤・役割の曖昧さ・対人摩擦・裁量の乏しさなど。</li>
          <li><strong>仕事の要求度－コントロールモデル（カラセック）</strong>：仕事の要求度が高く、かつ<strong>自分の裁量（コントロール）が低い</strong>「高ストレイン」状態が最も心身に悪影響を及ぼす。社会的支援も緩衝要因となる。</li>
          <li><strong>バーンアウト（燃え尽き症候群）</strong>：情緒的消耗・脱人格化・個人的達成感の低下を特徴とする（マスラック）。対人援助職に多い。</li>
          <li><strong>ワークライフバランス</strong>：仕事と仕事以外の生活の調和。柔軟な勤務制度や職場のサポートが、満足・健康・定着を支える。</li>
        </ul>
        <div class="callout tip">日本では2015年から一定規模の事業場に<strong>ストレスチェック制度</strong>が義務化され、職場のメンタルヘルス対策（一次予防）が制度化された。</div>
      `,
      figure: `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
        <text x="180" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#1d2433">仕事の要求度－コントロールモデル</text>
        <line x1="60" y1="50" x2="60" y2="260" stroke="#1d2433" stroke-width="2"/>
        <line x1="60" y1="260" x2="320" y2="260" stroke="#1d2433" stroke-width="2"/>
        <text x="190" y="285" text-anchor="middle" font-size="12">仕事の要求度（負荷）→</text>
        <text x="32" y="155" text-anchor="middle" font-size="12" transform="rotate(-90 32 155)">コントロール（裁量）→</text>
        <line x1="190" y1="50" x2="190" y2="260" stroke="#c9cfe0" stroke-width="1" stroke-dasharray="4"/>
        <line x1="60" y1="155" x2="320" y2="155" stroke="#c9cfe0" stroke-width="1" stroke-dasharray="4"/>
        <g font-size="12" text-anchor="middle">
          <rect x="68" y="58" width="114" height="90" fill="#eef0f6" stroke="#9aa3bd"/><text x="125" y="100" font-weight="700">低ストレイン</text><text x="125" y="118" font-size="10">要求低・裁量高</text>
          <rect x="198" y="58" width="114" height="90" fill="#d8f6ee" stroke="#15c4a8"/><text x="255" y="100" font-weight="700">能動的</text><text x="255" y="118" font-size="10">要求高・裁量高（成長）</text>
          <rect x="68" y="165" width="114" height="88" fill="#fdeccd" stroke="#f0a020"/><text x="125" y="205" font-weight="700">受動的</text><text x="125" y="223" font-size="10">要求低・裁量低</text>
          <rect x="198" y="165" width="114" height="88" fill="#fbe0e4" stroke="#e0566b"/><text x="255" y="205" font-weight="700">高ストレイン</text><text x="255" y="223" font-size="10">要求高・裁量低（最悪）</text>
        </g>
      </svg>`,
      figcaption: "カラセックのモデル。要求度が高く裁量が低い「高ストレイン」象限が最も健康に悪い。",
      terms: [
        { term: "集団発達の段階", def: "タックマン。形成期→混乱期→規範形成期→遂行期→解散期。" },
        { term: "社会的手抜き", def: "集団作業で一人当たりの努力が低下する現象。リンゲルマン効果。" },
        { term: "集団思考", def: "凝集性の高い集団が和を優先し批判的検討を怠り不合理な決定をする現象。ジャニス。" },
        { term: "組織文化", def: "メンバーに共有された価値観・信念・行動様式。シャインの3層モデル。" },
        { term: "組織開発（OD）", def: "行動科学を用い組織の健康と有効性を計画的に高める介入。" },
        { term: "人間工学", def: "機械・環境を人間の特性に合わせて設計し効率・安全・快適を高める分野。" },
        { term: "要求度－コントロールモデル", def: "カラセック。要求度高・裁量低の高ストレイン状態が最も有害。" },
        { term: "バーンアウト", def: "情緒的消耗・脱人格化・達成感低下を特徴とする燃え尽き。マスラック。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "産業・組織心理学のうち、職務分析・採用選抜・人事評価などの「人事領域」を主に扱うのはどちらか。", choices: ["産業（personnel）心理学", "組織（organizational）心理学", "臨床心理学", "発達心理学"], answer: 0, explain: "産業（人事）心理学は人と仕事を結びつける人事領域を、組織心理学は動機づけ・態度・リーダーシップなど行動領域を扱う。", difficulty: 1 },
    { type: "mcq", stem: "作業を要素に分解し、時間研究・動作研究によって最も効率的な手順を標準化する「科学的管理法」を提唱したのは誰か。", choices: ["メイヨー", "テイラー", "ハーズバーグ", "マズロー"], answer: 1, explain: "テイラーの科学的管理法は時間・動作研究で作業を標準化し効率を最大化した。人間を機械的に扱うとの批判もある。", difficulty: 1 },
    { type: "mcq", stem: "ホーソン研究で、照明を明るくしても暗くしても生産性が上がったことから示された、「注目・観察されること自体が行動を変える効果」を何というか。", choices: ["ピグマリオン効果", "ホーソン効果", "プラセボ効果", "対比効果"], answer: 1, explain: "ホーソン効果は、特別に注目され扱われているという心理的要因が物理条件以上に生産性を左右する現象を指す。", difficulty: 1 },
    { type: "mcq", stem: "ホーソン研究を契機に生まれた、生産性が従業員の感情・士気・非公式集団に依存するとする立場はどれか。", choices: ["科学的管理法", "人間関係論", "条件即応理論", "二要因理論"], answer: 1, explain: "人間関係論はメイヨーらに代表され、テイラーの機械的人間観への対抗として組織心理学の源流となった。", difficulty: 2 },
    { type: "mcq", stem: "職務を遂行するために人に必要な要件（知識・技能・能力など、KSAO）を記した成果物はどれか。", choices: ["職務記述書", "職務明細書（職務要件）", "人事考課表", "就業規則"], answer: 1, explain: "職務記述書は仕事の「内容」を、職務明細書（職務要件）は遂行に必要な人の「要件＝KSAO」を記す。", difficulty: 2 },
    { type: "mcq", stem: "採用面接のうち、全応募者に同じ質問を行い基準に沿って採点する方式は、非構造化面接と比べて一般にどうか。", choices: ["予測妥当性が低い", "予測妥当性が高い", "信頼性も妥当性も変わらない", "法的に禁止されている"], answer: 1, explain: "構造化面接は質問と評価基準を標準化することで評価のばらつきや偏見を減らし、非構造化面接より高い予測妥当性をもつ。", difficulty: 2 },
    { type: "mcq", stem: "選抜テストの「測定が安定・一貫していること」を指す概念はどれか。", choices: ["妥当性", "信頼性", "公平性", "標準化"], answer: 1, explain: "信頼性は測定の安定性・一貫性。妥当性は測りたいものを測れているか。信頼性は妥当性の必要条件だが十分条件ではない。", difficulty: 2 },
    { type: "mcq", stem: "実際の職務の一部を応募者に実演させて評価する選抜法はどれか。", choices: ["ワークサンプル", "投影法", "内観法", "デブリーフィング"], answer: 0, explain: "ワークサンプルは行動を直接サンプリングするため予測妥当性が高い。アセスメントセンターは複数演習を複数評価者で観察する。", difficulty: 2 },
    { type: "mcq", stem: "「明るく感じがよい」という一つの良い印象に引きずられ、業務能力や正確性まで高く評価してしまう評価エラーはどれか。", choices: ["中心化傾向", "ハロー効果", "寛大化傾向", "対比効果"], answer: 1, explain: "ハロー効果は一つの特徴が他の評価項目まで同方向に波及する代表的な評価エラーである。", difficulty: 1 },
    { type: "mcq", stem: "評価が中間段階ばかりに集まり、評価対象間で差がつかなくなる傾向はどれか。", choices: ["寛大化傾向", "厳格化傾向", "中心化傾向", "論理誤差"], answer: 2, explain: "中心化傾向は無難に中央へ寄せる偏り。全体に甘い／辛いは寛大化／厳格化で、別の現象である。", difficulty: 2 },
    { type: "mcq", stem: "カークパトリックの訓練効果4段階モデルの正しい順序はどれか。", choices: ["学習→反応→結果→行動", "反応→学習→行動→結果", "結果→行動→学習→反応", "行動→結果→反応→学習"], answer: 1, explain: "反応（満足度）→学習（習得）→行動（職場での転移）→結果（業績）の順。研修中だけでなく職場への転移と成果まで評価する。", difficulty: 3 },
    { type: "mcq", stem: "ハーズバーグの二要因理論において、給与・労働条件・対人関係など「不足すると不満を生むが、満たしても満足にはつながらない」要因はどれか。", choices: ["動機づけ要因", "衛生要因", "誘意性要因", "自己実現要因"], answer: 1, explain: "衛生要因は不満を左右するが満足は生まない。満足を生むのは達成・承認・仕事自体などの動機づけ要因である。", difficulty: 2 },
    { type: "mcq", stem: "ヴルームの期待理論で、動機づけの強さを表す式として正しいのはどれか。", choices: ["期待＋道具性＋誘意性", "期待×道具性×誘意性", "投入÷成果", "P機能×M機能"], answer: 1, explain: "動機づけ＝期待×道具性×誘意性の積。積なのでどれか一つが0だと全体も0になる。", difficulty: 2 },
    { type: "mcq", stem: "ロックの目標設定理論が高い業績を生むとする目標の特徴はどれか。", choices: ["漠然としていて挑戦のない目標", "具体的で困難（だが達成可能）な目標", "他者から強制された目標", "数値化できない目標"], answer: 1, explain: "具体的で困難な目標が「ベストを尽くせ」より高業績を生む。SMART、目標へのコミットメント、フィードバックが効果を高める。", difficulty: 2 },
    { type: "mcq", stem: "人が「自分の投入に対する成果の比率を他者と比較し、不公平があれば是正しようとする」とする動機づけ理論はどれか。", choices: ["公平理論（アダムス）", "期待理論（ヴルーム）", "二要因理論（ハーズバーグ）", "目標設定理論（ロック）"], answer: 0, explain: "アダムスの公平理論。報酬の絶対額より相対的な公平感が動機づけを左右する。過大報酬でも不公平感は生じうる。", difficulty: 2 },
    { type: "mcq", stem: "ハックマン＆オルダムの職務特性モデルにおける5つの中核的職務特性に含まれないものはどれか。", choices: ["技能の多様性", "自律性", "フィードバック", "給与水準"], answer: 3, explain: "中核的特性は技能の多様性・タスクの完結性・タスクの重要性・自律性・フィードバック。給与は含まれない（衛生要因に近い）。", difficulty: 3 },
    { type: "mcq", stem: "職務満足と業績・離職の関係について、研究知見として最も適切なのはどれか。", choices: ["満足は業績を強く決定する", "満足は業績との相関は中程度だが、離職・欠勤の低さとはより明確に結びつく", "満足は離職と無関係である", "満足が高いほど離職率が上がる"], answer: 1, explain: "「満足な従業員ほど生産的」という単純因果は強くない。一方、満足の低さは離職・欠勤を高めやすい。", difficulty: 3 },
    { type: "mcq", stem: "マイヤー＆アレンの組織コミットメント3成分モデルで、「辞めると失うものが大きいからとどまる」という成分はどれか。", choices: ["情緒的コミットメント", "継続的コミットメント", "規範的コミットメント", "職務関与"], answer: 1, explain: "継続的コミットメントはコスト（損得）に基づく。情緒的は愛着、規範的は義務感に基づく。業績と最も結びつくのは情緒的とされる。", difficulty: 2 },
    { type: "mcq", stem: "活力・熱意・没頭を特徴とし、バーンアウトの対極とされる、仕事への積極的・充実した心理状態を何というか。", choices: ["職務満足", "ワーク・エンゲイジメント", "組織市民行動", "継続的コミットメント"], answer: 1, explain: "ワーク・エンゲイジメントは活力・熱意・没頭からなる充実した状態で、燃え尽き（バーンアウト）の対極に位置づけられる。", difficulty: 2 },
    { type: "mcq", stem: "オハイオ州立大学のリーダーシップ研究が見いだした二次元として正しい組み合わせはどれか。", choices: ["P機能とM機能", "構造づくりと配慮", "期待と道具性", "解凍と再凍結"], answer: 1, explain: "オハイオ研究は構造づくり（課題志向）と配慮（人間関係志向）の二次元を見いだした。P/M機能は三隅のPM理論。", difficulty: 2 },
    { type: "mcq", stem: "三隅二不二のPM理論で、最も効果的とされるリーダー類型はどれか。", choices: ["pm型（両方低）", "Pm型（課題のみ高）", "pM型（人間関係のみ高）", "PM型（両方高）"], answer: 3, explain: "P（課題達成）とM（集団維持）の両機能がともに高いPM型が、最も効果的とされる。", difficulty: 1 },
    { type: "mcq", stem: "フィードラーの条件即応モデルで、リーダーを課題志向／関係志向に分類するために用いられる尺度はどれか。", choices: ["LPC尺度", "JDI", "LMX尺度", "SMART尺度"], answer: 0, explain: "LPC（最も苦手な同僚）尺度でリーダーの志向を測り、状況の好意性との適合で有効性が決まるとした。", difficulty: 3 },
    { type: "mcq", stem: "ハーシィ＆ブランチャードのSL理論が、リーダー行動を変える基準とするのは何か。", choices: ["リーダーの生まれつきの特性", "部下の成熟度（レディネス）", "組織の財務状況", "業界の景気動向"], answer: 1, explain: "SL理論は部下の成熟度に応じ、指示型→説得型→参加型→委任型と指示的行動を減らし委任を増やすのが有効とする。", difficulty: 2 },
    { type: "mcq", stem: "魅力的なビジョンを示して部下の価値観や意欲を高め、期待以上の成果へ導くリーダーシップはどれか。", choices: ["交換型リーダーシップ", "変革型リーダーシップ", "放任型リーダーシップ", "課題志向リーダーシップ"], answer: 1, explain: "変革型リーダーシップはカリスマ・知的刺激・個別配慮でメンバーを変える。条件付き報酬による取引は交換型である。", difficulty: 2 },
    { type: "mcq", stem: "凝集性の高い集団が、和を優先して批判的検討を怠り、不合理な意思決定に陥る現象を何というか。", choices: ["社会的手抜き", "集団思考（groupthink）", "集団極性化", "リンゲルマン効果"], answer: 1, explain: "集団思考（ジャニス）は凝集性の高い集団で起こる。社会的手抜きは一人当たりの努力低下で、別の現象。", difficulty: 2 },
    { type: "mcq", stem: "カラセックの「仕事の要求度－コントロールモデル」で、最も心身に悪影響を及ぼすとされる状態はどれか。", choices: ["要求度が低く裁量が高い", "要求度が高く裁量が高い", "要求度が高く裁量が低い", "要求度が低く裁量が低い"], answer: 2, explain: "要求度が高く自分の裁量（コントロール）が低い「高ストレイン」状態が最も有害。社会的支援は緩衝要因となる。", difficulty: 3 },
    { type: "mcq", stem: "機械・道具・作業環境を人間の能力・特性に合わせて設計し、効率・安全・快適を高める分野はどれか。", choices: ["人間工学（ergonomics）", "科学的管理法", "組織開発", "目標設定理論"], answer: 0, explain: "人間工学（ヒューマンファクターズ）は「人を機械に合わせる」のでなく「機械・環境を人に合わせる」点が要点である。", difficulty: 1 },
  ],
});
