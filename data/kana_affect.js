/* === 横文字（カタカナ語）特別編 感情・臨床 (kana_affect) === */
PsychApp.registerModule({
  id: "kana_affect",
  title: "感情・臨床の横文字",
  emoji: "💗",
  category: "katakana",
  tagline: "感情・臨床で頻出のカタカナ語を頻出順に。意味から単語を当てる演習つき。",
  overview: `<p>この回では、感情・臨床の領域で頻出する横文字（カタカナ語）を、研究論文での出現頻度の高い順に整理する。感情の基本次元（アフェクト・覚醒・感情価）から、臨床で重要なレジリエンスやコーピング、反芻、併存、そして近年注目される内受容感覚や調節障害まで扱う。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "頻出カタカナ語（感情・臨床ブロック）",
      body: `
        <p>感情の土台となる基底状態から、臨床で問題になる調節・対処までを頻出順に並べる。番号は<strong>頻出順（だいたいの目安）</strong>である。</p>
        <ol class="kana-rank">
          <li><b>アフェクト（affect）</b> … 感情の総称的な土台。気分・情動を含む基底的な状態。</li>
          <li><b>アラウザル / 覚醒（arousal）</b> … 生理・心理的な活性化の度合い。感情の次元の一つ。</li>
          <li><b>ヴァレンス / 感情価（valence）</b> … 快−不快の方向性。アラウザルと並ぶ感情の基本次元。</li>
          <li><b>レジリエンス（resilience）</b> … 逆境から立ち直る力・しなやかさ。</li>
          <li><b>ルミネーション / 反芻（rumination）</b> … ネガティブな思考を繰り返し巡らせること。抑うつと関連。</li>
          <li><b>コーピング（coping）</b> … ストレスへの対処方略。問題焦点型・情動焦点型など。</li>
          <li><b>コモビディティ / 併存（comorbidity）</b> … 複数の障害が同時に存在すること。</li>
          <li><b>インターセプション / 内受容感覚（interoception）</b> … 心拍・呼吸など身体内部の状態を感じ取る感覚。感情の基盤と目される。</li>
          <li><b>ディスレギュレーション（dysregulation）</b> … 感情・行動の調節がうまくいかない状態。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：感情の「活性化の度合い」がアラウザル、「快−不快の方向」がヴァレンス。両者は別の次元で、組み合わせて感情を位置づける。</div>
      `,
      terms: [
        { term: "アフェクト（affect）", def: "感情の総称的な土台。気分・情動を含む基底的な状態。" },
        { term: "アラウザル / 覚醒（arousal）", def: "生理・心理的な活性化の度合い。感情の次元の一つ。" },
        { term: "ヴァレンス / 感情価（valence）", def: "快−不快の方向性。アラウザルと並ぶ感情の基本次元。" },
        { term: "レジリエンス（resilience）", def: "逆境から立ち直る力・しなやかさ。" },
        { term: "ルミネーション / 反芻（rumination）", def: "ネガティブな思考を繰り返し巡らせること。抑うつと関連。" },
        { term: "コーピング（coping）", def: "ストレスへの対処方略。問題焦点型・情動焦点型など。" },
        { term: "コモビディティ / 併存（comorbidity）", def: "複数の障害が同時に存在すること。" },
        { term: "インターセプション / 内受容感覚（interoception）", def: "心拍・呼吸など身体内部の状態を感じ取る感覚。感情の基盤と目される。" },
        { term: "ディスレギュレーション（dysregulation）", def: "感情・行動の調節がうまくいかない状態。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "気分や情動を含む、感情の総称的な土台となる基底的な状態を指す語はどれか。", choices: ["アフェクト（affect）", "アラウザル / 覚醒（arousal）", "ヴァレンス / 感情価（valence）", "コーピング（coping）"], answer: 0, explain: "感情全般の基底状態を指すのがアフェクト。アラウザルは活性化の度合い、ヴァレンスは快−不快の方向という個別の次元。", difficulty: 1 },
    { type: "mcq", stem: "生理的・心理的な活性化の度合いを表し、感情の基本次元の一つとされる語はどれか。", choices: ["ヴァレンス / 感情価（valence）", "アラウザル / 覚醒（arousal）", "アフェクト（affect）", "レジリエンス（resilience）"], answer: 1, explain: "活性化の度合いがアラウザル。ヴァレンスは快−不快の方向で、別の次元。", difficulty: 1 },
    { type: "mcq", stem: "快−不快の方向性を表し、活性化の度合いと並ぶ感情の基本次元はどれか。", choices: ["ディスレギュレーション（dysregulation）", "アラウザル / 覚醒（arousal）", "ヴァレンス / 感情価（valence）", "インターセプション / 内受容感覚（interoception）"], answer: 2, explain: "快−不快の方向がヴァレンス。アラウザルは活性化の度合いで、両者で感情を位置づける。", difficulty: 2 },
    { type: "mcq", stem: "逆境やストレスから立ち直る力、しなやかさを指す語はどれか。", choices: ["レジリエンス（resilience）", "コーピング（coping）", "ルミネーション / 反芻（rumination）", "アフェクト（affect）"], answer: 0, explain: "立ち直る力がレジリエンス。コーピングはストレスへの対処方略そのもので、結果としての回復力とは区別される。", difficulty: 1 },
    { type: "mcq", stem: "ネガティブな思考を繰り返し巡らせ続けること。抑うつとの関連が指摘される現象を指す語はどれか。", choices: ["コーピング（coping）", "コモビディティ / 併存（comorbidity）", "ルミネーション / 反芻（rumination）", "レジリエンス（resilience）"], answer: 2, explain: "否定的思考の反復がルミネーション。コーピングは対処方略で、むしろ問題への能動的な対応を指す。", difficulty: 2 },
    { type: "mcq", stem: "ストレスへの対処方略のこと。問題焦点型・情動焦点型などに分類される語はどれか。", choices: ["コーピング（coping）", "ルミネーション / 反芻（rumination）", "ディスレギュレーション（dysregulation）", "ヴァレンス / 感情価（valence）"], answer: 0, explain: "ストレスへの対処方略がコーピング。ルミネーションは否定的思考の反復で、不適応的な傾向を指す点で異なる。", difficulty: 1 },
    { type: "mcq", stem: "複数の障害が同一個人に同時に存在している状態を指す語はどれか。", choices: ["ディスレギュレーション（dysregulation）", "コモビディティ / 併存（comorbidity）", "インターセプション / 内受容感覚（interoception）", "レジリエンス（resilience）"], answer: 1, explain: "複数障害の同時存在がコモビディティ。ディスレギュレーションは調節の失敗という状態像で、障害の併存とは別概念。", difficulty: 2 },
    { type: "mcq", stem: "心拍や呼吸など、身体内部の状態を感じ取る感覚。感情の基盤と目される語はどれか。", choices: ["アラウザル / 覚醒（arousal）", "アフェクト（affect）", "インターセプション / 内受容感覚（interoception）", "ヴァレンス / 感情価（valence）"], answer: 2, explain: "身体内部状態の感受がインターセプション。アラウザルは活性化の度合いという感情の次元で、内部感覚そのものではない。", difficulty: 3 },
    { type: "mcq", stem: "感情や行動の調節がうまくいかない状態を指す語はどれか。", choices: ["ディスレギュレーション（dysregulation）", "コモビディティ / 併存（comorbidity）", "コーピング（coping）", "ルミネーション / 反芻（rumination）"], answer: 0, explain: "調節の失敗がディスレギュレーション。コモビディティは複数障害の併存で、調節の不全とは別の概念。", difficulty: 3 },
  ],
});
