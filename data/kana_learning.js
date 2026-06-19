/* === 横文字（カタカナ語）特別編 学習・記憶・行動 (kana_learning) === */
PsychApp.registerModule({
  id: "kana_learning",
  title: "学習・記憶・行動の横文字",
  emoji: "🔁",
  category: "katakana",
  tagline: "学習・記憶・行動の頻出カタカナ語を頻出順に。意味から単語を当てる演習つき。",
  overview: `<p>学習・記憶・行動の研究で頻出する横文字（カタカナ語）を、研究論文での出現頻度の高い順に整理する。強化学習の中核語から、記憶の符号化・固定化・干渉・消去まで、似た場面で出てくる語をまとめて押さえる。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "コア（最頻出）",
      body: `
        <p>まずは最もよく目にする語から。番号は<strong>頻出順（だいたいの目安）</strong>である。</p>
        <ol class="kana-rank">
          <li><b>リインフォースメント / 強化（reinforcement）</b> … 行動の生起頻度を高める手続き・刺激。強化学習(RL)の中核。</li>
          <li><b>ヒューリスティック（heuristic）</b> … 完全合理でなく、素早く近似解を出す経験則。</li>
          <li><b>エンコーディング / リトリーバル（encoding / retrieval）</b> … 記憶の符号化と取り出し。両者の文脈一致が成績を上げる。</li>
          <li><b>コンソリデーション / 固定化（consolidation）</b> … 一時的な記憶が安定した長期記憶へ定着する過程。睡眠が関与。</li>
          <li><b>トレードオフ（trade-off）</b> … 一方を立てれば他方が犠牲になる関係。</li>
          <li><b>ジェネラリゼーション / 般化（generalization）</b> … 学んだことが似た状況へ広がること。逆は弁別。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：記憶を「入れる/出す」のがエンコーディング／リトリーバル、入れた記憶を「安定させる」のがコンソリデーション。別物。</div>
      `,
      terms: [
        { term: "リインフォースメント / 強化（reinforcement）", def: "行動の生起頻度を高める手続き・刺激。強化学習(RL)の中核。" },
        { term: "ヒューリスティック（heuristic）", def: "完全合理でなく、素早く近似解を出す経験則。" },
        { term: "エンコーディング / リトリーバル（encoding / retrieval）", def: "記憶の符号化と取り出し。両者の文脈一致が成績を上げる。" },
        { term: "コンソリデーション / 固定化（consolidation）", def: "一時的な記憶が安定した長期記憶へ定着する過程。睡眠が関与。" },
        { term: "トレードオフ（trade-off）", def: "一方を立てれば他方が犠牲になる関係。" },
        { term: "ジェネラリゼーション / 般化（generalization）", def: "学んだことが似た状況へ広がること。逆はディスクリミネーション（弁別）。" },
      ],
    },
    {
      title: "周辺・応用",
      body: `
        <p>ここからは記憶の干渉・消去・転移など、やや専門的な語。引き続き<strong>頻出順</strong>に並べる。</p>
        <ol class="kana-rank">
          <li><b>インターフェレンス / 干渉（interference）</b> … 別の記憶が想起を妨げること。順向・逆向がある。</li>
          <li><b>エクスティンクション / 消去（extinction）</b> … 強化をやめることで条件反応が減弱する過程。消えるのでなく抑制とされる。</li>
          <li><b>トランスファー / 転移（transfer）</b> … ある学習が別の課題の遂行に影響すること。正の転移・負の転移。</li>
          <li><b>エラボレーション / 精緻化（elaboration）</b> … 情報に意味づけや関連づけを加え、記憶を深める処理。</li>
          <li><b>リコンソリデーション（reconsolidation）</b> … 想起された記憶が再び不安定化し、書き換わりうる過程。</li>
        </ol>
        <div class="callout warn"><b>混同注意</b>：記憶を初めて固める過程がコンソリデーション、いったん想起した記憶が再び不安定化して固め直されるのがリコンソリデーション。</div>
      `,
      terms: [
        { term: "インターフェレンス / 干渉（interference）", def: "別の記憶が想起を妨げること。順向・逆向がある。" },
        { term: "エクスティンクション / 消去（extinction）", def: "強化をやめることで条件反応が減弱する過程。消えるのでなく抑制とされる。" },
        { term: "トランスファー / 転移（transfer）", def: "ある学習が別の課題の遂行に影響すること。正の転移・負の転移。" },
        { term: "エラボレーション / 精緻化（elaboration）", def: "情報に意味づけや関連づけを加え、記憶を深める処理。" },
        { term: "リコンソリデーション（reconsolidation）", def: "想起された記憶が再び不安定化し、書き換わりうる過程。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "行動が起こる頻度を高める手続きや刺激のこと。報酬を使って行動を学習させる枠組みの中核となる概念。", choices: ["エクスティンクション / 消去（extinction）", "リインフォースメント / 強化（reinforcement）", "インターフェレンス / 干渉（interference）", "ジェネラリゼーション / 般化（generalization）"], answer: 1, explain: "行動の生起頻度を高めるのが強化。逆に強化をやめて反応を弱めるのが消去。", difficulty: 1 },
    { type: "mcq", stem: "完全に合理的な計算をせず、素早くそこそこ良い答えを出すための経験則。", choices: ["ヒューリスティック（heuristic）", "トレードオフ（trade-off）", "エラボレーション / 精緻化（elaboration）", "コンソリデーション / 固定化（consolidation）"], answer: 0, explain: "近似解を素早く出す経験則がヒューリスティック。利害が両立しない関係はトレードオフ。", difficulty: 1 },
    { type: "mcq", stem: "記憶を頭に入れる「符号化」と、それを後で取り出す「想起」のペア。両者の文脈が一致すると成績が上がる。", choices: ["リインフォースメント / 強化（reinforcement）", "トランスファー / 転移（transfer）", "エンコーディング / リトリーバル（encoding / retrieval）", "インターフェレンス / 干渉（interference）"], answer: 2, explain: "記憶を入れる/出すのがエンコーディング／リトリーバル。別の記憶が想起を妨げるのは干渉。", difficulty: 1 },
    { type: "mcq", stem: "一時的だった記憶が、時間や睡眠を経て安定した長期記憶へと定着していく過程。", choices: ["コンソリデーション / 固定化（consolidation）", "リコンソリデーション（reconsolidation）", "エラボレーション / 精緻化（elaboration）", "エクスティンクション / 消去（extinction）"], answer: 0, explain: "記憶を初めて安定させるのがコンソリデーション。いったん想起した記憶を固め直すのがリコンソリデーション。", difficulty: 2 },
    { type: "mcq", stem: "一方を良くしようとすると他方が犠牲になる、両立しない関係のこと。", choices: ["ジェネラリゼーション / 般化（generalization）", "トレードオフ（trade-off）", "ヒューリスティック（heuristic）", "トランスファー / 転移（transfer）"], answer: 1, explain: "あちらを立てればこちらが立たない関係がトレードオフ。素早い近似の経験則はヒューリスティック。", difficulty: 1 },
    { type: "mcq", stem: "ある状況で学んだことが、似た別の状況にも広がって当てはまるようになること。反対は弁別。", choices: ["インターフェレンス / 干渉（interference）", "エクスティンクション / 消去（extinction）", "ジェネラリゼーション / 般化（generalization）", "コンソリデーション / 固定化（consolidation）"], answer: 2, explain: "学習が似た状況へ広がるのが般化。学習が別課題の遂行に影響するのは転移で、課題そのものが異なる点が違う。", difficulty: 2 },
    { type: "mcq", stem: "ある記憶が、別の記憶のせいで思い出しにくくなること。先に覚えたものが後の想起を妨げる場合と、その逆がある。", choices: ["トランスファー / 転移（transfer）", "インターフェレンス / 干渉（interference）", "エラボレーション / 精緻化（elaboration）", "リインフォースメント / 強化（reinforcement）"], answer: 1, explain: "別の記憶が想起を妨げるのが干渉（順向・逆向）。ある学習が別課題に影響するのは転移。", difficulty: 2 },
    { type: "mcq", stem: "強化をやめることで、いったん学習された条件反応がだんだん弱まっていく過程。記憶が消えるのでなく抑制されると考えられる。", choices: ["エクスティンクション / 消去（extinction）", "インターフェレンス / 干渉（interference）", "リコンソリデーション（reconsolidation）", "ジェネラリゼーション / 般化（generalization）"], answer: 0, explain: "強化中止で条件反応が減弱するのが消去。別の記憶が想起を妨げるのは干渉で、原因が異なる。", difficulty: 2 },
    { type: "mcq", stem: "ある場面での学習が、別の課題の成績に影響を及ぼすこと。良い方向にも悪い方向にも働きうる。", choices: ["ジェネラリゼーション / 般化（generalization）", "トレードオフ（trade-off）", "トランスファー / 転移（transfer）", "コンソリデーション / 固定化（consolidation）"], answer: 2, explain: "学習が別課題の遂行に影響するのが転移（正・負）。同種の状況へ反応が広がるのは般化。", difficulty: 3 },
    { type: "mcq", stem: "覚えたい情報に意味づけや既知の知識との関連づけを加えて、記憶をより深く確かなものにする処理。", choices: ["ヒューリスティック（heuristic）", "リインフォースメント / 強化（reinforcement）", "エンコーディング / リトリーバル（encoding / retrieval）", "エラボレーション / 精緻化（elaboration）"], answer: 3, explain: "意味づけ・関連づけで記憶を深めるのが精緻化。符号化と想起のペアそのものはエンコーディング／リトリーバル。", difficulty: 2 },
    { type: "mcq", stem: "いったん思い出された記憶が再び不安定な状態になり、書き換えられうる過程。", choices: ["コンソリデーション / 固定化（consolidation）", "リコンソリデーション（reconsolidation）", "エクスティンクション / 消去（extinction）", "インターフェレンス / 干渉（interference）"], answer: 1, explain: "想起後に記憶が再び不安定化して固め直されるのがリコンソリデーション。初回の定着はコンソリデーション。", difficulty: 3 },
  ],
});
