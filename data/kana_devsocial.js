/* === 横文字（カタカナ語）特別編 発達・社会 (kana_devsocial) === */
PsychApp.registerModule({
  id: "kana_devsocial",
  title: "発達・社会の横文字",
  emoji: "🤝",
  category: "katakana",
  tagline: "発達・社会領域の頻出カタカナ語を頻出順に。意味から単語を当てる演習つき",
  overview: `<p>発達心理学・社会性の研究で頻出する横文字（カタカナ語）を、研究論文での出現頻度の高い順に整理する。愛着・心の理論・共同注意といった発達の基盤概念から、身体性や間主観性といったやや理論的な語まで、意味の違いを意識しながら並べてある。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "頻出カタカナ語（発達・社会）",
      body: `
        <p>発達・社会領域でよく目にする語を頻出順に並べる。番号は<strong>頻出順（だいたいの目安）</strong>である。乳児期の発達基盤（愛着・心の理論・共同注意）が上位に来る。</p>
        <ol class="kana-rank">
          <li><b>アタッチメント / 愛着（attachment）</b> … 養育者との情緒的な絆。安全基地として機能する。</li>
          <li><b>セオリーオブマインド / 心の理論（theory of mind）</b> … 他者が自分と異なる信念・意図を持つと理解する能力。</li>
          <li><b>ジョイントアテンション / 共同注意（joint attention）</b> … 他者と同じ対象に注意を共有すること。言語発達の基盤。</li>
          <li><b>スキャフォールディング（scaffolding）</b> … 自力で届かない課題を、足場かけで支援すること（Vygotsky系）。</li>
          <li><b>エージェンシー（agency）</b> … 自分が行為の主体であるという感覚・能力。</li>
          <li><b>エンボディメント / 身体性（embodiment）</b> … 認知が身体や環境に根ざしているという考え方。</li>
          <li><b>コンティンジェンシー（contingency）</b> … 行動と結果の随伴関係。「随伴性」。</li>
          <li><b>ソーシャルリファレンシング（social referencing）</b> … 不確かな状況で他者の表情を手がかりに行動を決めること。</li>
          <li><b>インターサブジェクティビティ / 間主観性（intersubjectivity）</b> … 主観の共有・通じ合い。</li>
          <li><b>ノーマティブ（normative）</b> … 「こうあるべき」という規範的基準。逆は記述的(descriptive)。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：他者の「内面（信念・意図）」を読むのがセオリーオブマインド、他者と同じ「対象」に注意を向け合うのがジョイントアテンション。さらに他者の表情を「参照」して自分の行動を決めるのがソーシャルリファレンシング。</div>
      `,
      terms: [
        { term: "アタッチメント / 愛着（attachment）", def: "養育者との情緒的な絆。安全基地として機能する。" },
        { term: "セオリーオブマインド / 心の理論（theory of mind）", def: "他者が自分と異なる信念・意図を持つと理解する能力。" },
        { term: "ジョイントアテンション / 共同注意（joint attention）", def: "他者と同じ対象に注意を共有すること。言語発達の基盤。" },
        { term: "スキャフォールディング（scaffolding）", def: "学習者が自力で届かない課題を、足場かけで支援すること（Vygotsky系）。" },
        { term: "エージェンシー（agency）", def: "自分が行為の主体であるという感覚・能力。" },
        { term: "エンボディメント / 身体性（embodiment）", def: "認知が身体や環境に根ざしているという考え方。" },
        { term: "コンティンジェンシー（contingency）", def: "行動と結果の随伴関係。「随伴性」。" },
        { term: "ソーシャルリファレンシング（social referencing）", def: "不確かな状況で他者の表情を手がかりに行動を決めること。" },
        { term: "インターサブジェクティビティ / 間主観性（intersubjectivity）", def: "主観の共有・通じ合い。" },
        { term: "ノーマティブ（normative）", def: "「こうあるべき」という規範的基準。逆は記述的(descriptive)。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "養育者と子どものあいだに形成される情緒的な絆。子にとっての安全基地として働き、探索行動の土台になる。", choices: ["アタッチメント / 愛着（attachment）", "コンティンジェンシー（contingency）", "インターサブジェクティビティ / 間主観性（intersubjectivity）", "エージェンシー（agency）"], answer: 0, explain: "養育者との情緒的な絆で安全基地として機能するのがアタッチメント。間主観性は主観の共有一般を指し、絆の概念ではない。", difficulty: 1 },
    { type: "mcq", stem: "他者が自分とは異なる信念や意図を内面に持っていると理解する能力。誤信念課題で測られる。", choices: ["ジョイントアテンション / 共同注意（joint attention）", "セオリーオブマインド / 心の理論（theory of mind）", "ソーシャルリファレンシング（social referencing）", "エンボディメント / 身体性（embodiment）"], answer: 1, explain: "他者の信念・意図という内面を推し量る能力がセオリーオブマインド。同じ対象への注意共有は共同注意で、内面理解そのものではない。", difficulty: 1 },
    { type: "mcq", stem: "他者と同じ対象へ注意を向け合い、視線や指さしでそれを共有する行動。言語発達の基盤とされる。", choices: ["ジョイントアテンション / 共同注意（joint attention）", "セオリーオブマインド / 心の理論（theory of mind）", "ソーシャルリファレンシング（social referencing）", "アタッチメント / 愛着（attachment）"], answer: 0, explain: "同じ対象への注意を他者と共有するのが共同注意。他者の内面を読むのは心の理論、他者の表情を参照して行動を決めるのはソーシャルリファレンシング。", difficulty: 2 },
    { type: "mcq", stem: "学習者が自力では届かない課題を、大人や熟達者が一時的な支えを与えて達成できるようにする支援。徐々に支えを外していく。", choices: ["コンティンジェンシー（contingency）", "エージェンシー（agency）", "スキャフォールディング（scaffolding）", "ノーマティブ（normative）"], answer: 2, explain: "足場かけによる段階的支援がスキャフォールディング。随伴関係を指すコンティンジェンシーや主体性を指すエージェンシーとは別概念。", difficulty: 1 },
    { type: "mcq", stem: "自分こそが行為の主体であり、自分の行動が結果を引き起こしているという感覚・能力。", choices: ["エンボディメント / 身体性（embodiment）", "エージェンシー（agency）", "インターサブジェクティビティ / 間主観性（intersubjectivity）", "ソーシャルリファレンシング（social referencing）"], answer: 1, explain: "行為の主体であるという感覚がエージェンシー。身体性は認知が身体に根ざすという考え方で、主体感とは異なる。", difficulty: 2 },
    { type: "mcq", stem: "認知は脳内だけで完結せず、身体や環境との相互作用に根ざしているとする考え方。", choices: ["エンボディメント / 身体性（embodiment）", "エージェンシー（agency）", "スキャフォールディング（scaffolding）", "ノーマティブ（normative）"], answer: 0, explain: "認知が身体・環境に根ざすという立場がエンボディメント。主体感を指すエージェンシーとは別。", difficulty: 2 },
    { type: "mcq", stem: "ある行動とそれに続く結果とのあいだの随伴関係。行動するとどう環境が応答するか、その対応のこと。", choices: ["コンティンジェンシー（contingency）", "ソーシャルリファレンシング（social referencing）", "インターサブジェクティビティ / 間主観性（intersubjectivity）", "セオリーオブマインド / 心の理論（theory of mind）"], answer: 0, explain: "行動と結果の随伴関係を指すのがコンティンジェンシー。他者の表情を手がかりにするソーシャルリファレンシングとは異なる。", difficulty: 2 },
    { type: "mcq", stem: "状況が不確かなとき、他者（特に養育者）の表情や反応を手がかりにして、自分がどう振る舞うかを決めること。", choices: ["ジョイントアテンション / 共同注意（joint attention）", "コンティンジェンシー（contingency）", "ソーシャルリファレンシング（social referencing）", "エージェンシー（agency）"], answer: 2, explain: "不確かな状況で他者の表情を参照して行動を決めるのがソーシャルリファレンシング。同じ対象への注意共有である共同注意とは目的が異なる。", difficulty: 3 },
    { type: "mcq", stem: "二者のあいだで主観的な体験が共有され、互いに通じ合っている状態。", choices: ["インターサブジェクティビティ / 間主観性（intersubjectivity）", "アタッチメント / 愛着（attachment）", "エンボディメント / 身体性（embodiment）", "コンティンジェンシー（contingency）"], answer: 0, explain: "主観の共有・通じ合いを指すのが間主観性。情緒的な絆を指すアタッチメントとは別概念。", difficulty: 3 },
    { type: "mcq", stem: "「現に何が起きているか」ではなく「どうあるべきか」という規範的な基準。記述的な立場と対比される。", choices: ["ノーマティブ（normative）", "エージェンシー（agency）", "スキャフォールディング（scaffolding）", "セオリーオブマインド / 心の理論（theory of mind）"], answer: 0, explain: "「こうあるべき」という規範的基準がノーマティブ。記述的(descriptive)と対をなす。主体感のエージェンシーとは無関係。", difficulty: 2 },
  ],
});
