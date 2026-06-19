/* === 横文字（カタカナ語）特別編 再現性・研究文化 (kana_reproducibility) === */
PsychApp.registerModule({
  id: "kana_reproducibility",
  title: "再現性・研究文化の横文字",
  emoji: "🔬",
  category: "katakana",
  tagline: "再現性危機まわりの頻出カタカナ語を頻出順に。意味から単語を当てる演習つき。",
  overview: `<p>2010年代以降の「再現性危機（replication crisis）」をきっかけに広まった、研究の透明性・健全性をめぐる横文字（カタカナ語）を、論文での出現頻度の高い順に整理する。追試やpハッキングなど、いまや方法論の議論で避けて通れない語ばかりである。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "再現性・研究文化のカタカナ語（頻出順）",
      body: `
        <p>再現性危機をめぐる議論の中核となる語を、よく目にする順に並べる。番号は<strong>頻出順（だいたいの目安）</strong>である。似た意味でも区別される対（追試と再現性、pハッキングとHARKingなど）に注意したい。</p>
        <ol class="kana-rank">
          <li><b>レプリケーション / 追試（replication）</b> … 同じ手続きで結果が再現されるか確かめる研究。</li>
          <li><b>pハッキング（p-hacking）</b> … 有意になるまで分析を試す問題行為。</li>
          <li><b>プレレジストレーション / 事前登録（preregistration）</b> … 分析計画を結果を見る前に公開・固定する手続き。</li>
          <li><b>パブリケーションバイアス（publication bias）</b> … 有意な結果ばかり出版され、文献が偏ること。</li>
          <li><b>オープンサイエンス（open science）</b> … データ・コード・材料を公開し透明性を高める運動。</li>
          <li><b>リプロデューシビリティ（reproducibility）</b> … 同じデータ・コードから同じ結果が得られること（追試＝再現とは区別）。</li>
          <li><b>HARKing</b> … 結果を見てから仮説を立てたかのように書く問題行為（Hypothesizing After Results are Known）。</li>
          <li><b>ガーデン・オブ・フォーキングパス（garden of forking paths）</b> … 分析の選択肢が無数にあり、無自覚に偽陽性を生む問題。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：別の標本で結果が出るか試すのが「レプリケーション（追試）」、同じデータ・コードから同じ数字が出るかが「リプロデューシビリティ」。また、有意になるまで分析を粘るのが「pハッキング」、結果を見てから仮説を立て直すのが「HARKing」。</div>
      `,
      terms: [
        { term: "レプリケーション / 追試（replication）", def: "同じ手続きで結果が再現されるか確かめる研究。別の標本で効果が出るかを検証する。" },
        { term: "pハッキング（p-hacking）", def: "有意（p<.05）になるまで分析や指標を試し続ける問題行為。" },
        { term: "プレレジストレーション / 事前登録（preregistration）", def: "仮説や分析計画を、結果を見る前に公開・固定する手続き。" },
        { term: "パブリケーションバイアス（publication bias）", def: "有意な結果ばかりが出版され、文献全体が偏ってしまう現象。" },
        { term: "オープンサイエンス（open science）", def: "データ・コード・材料を公開し、研究の透明性を高める運動。" },
        { term: "リプロデューシビリティ（reproducibility）", def: "同じデータ・コードから同じ結果が得られること。追試（replication）とは区別される。" },
        { term: "HARKing", def: "結果を見てから、あたかも事前に立てていたかのように仮説を書く問題行為。" },
        { term: "ガーデン・オブ・フォーキングパス（garden of forking paths）", def: "分析の選択肢が無数にあり、無自覚な取捨選択で偽陽性が生まれる問題。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "同じ手続きを別の標本でやり直し、もとの結果が再び得られるかを確かめる研究のこと。", choices: ["レプリケーション / 追試（replication）", "リプロデューシビリティ（reproducibility）", "プレレジストレーション / 事前登録（preregistration）", "オープンサイエンス（open science）"], answer: 0, explain: "別の標本で結果が出るか試すのがレプリケーション（追試）。同じデータ・コードから同じ数字が出るのはリプロデューシビリティ。", difficulty: 1 },
    { type: "mcq", stem: "有意な結果になるまで、分析方法や指標をあれこれ試し続けてしまう問題行為。", choices: ["パブリケーションバイアス（publication bias）", "pハッキング（p-hacking）", "HARKing", "ガーデン・オブ・フォーキングパス（garden of forking paths）"], answer: 1, explain: "有意になるまで分析を粘るのがpハッキング。結果を見てから仮説を立て直すのはHARKing。", difficulty: 1 },
    { type: "mcq", stem: "仮説や分析計画を、データの結果を見る前にあらかじめ公開して固定しておく手続き。", choices: ["オープンサイエンス（open science）", "リプロデューシビリティ（reproducibility）", "プレレジストレーション / 事前登録（preregistration）", "レプリケーション / 追試（replication）"], answer: 2, explain: "結果を見る前に計画を確定・公開するのがプレレジストレーション。pハッキングやHARKingを抑止する。", difficulty: 2 },
    { type: "mcq", stem: "有意な結果ばかりが論文として出版され、世に出る文献全体が偏ってしまう現象。", choices: ["パブリケーションバイアス（publication bias）", "pハッキング（p-hacking）", "ガーデン・オブ・フォーキングパス（garden of forking paths）", "HARKing"], answer: 0, explain: "出版される文献の偏りがパブリケーションバイアス。個々の分析者の粘りがpハッキング。", difficulty: 2 },
    { type: "mcq", stem: "データ・コード・材料を広く公開し、研究全体の透明性を高めようとする運動。", choices: ["プレレジストレーション / 事前登録（preregistration）", "オープンサイエンス（open science）", "リプロデューシビリティ（reproducibility）", "レプリケーション / 追試（replication）"], answer: 1, explain: "公開と透明性を旗印にした運動全体がオープンサイエンス。事前登録はその具体的手続きの一つ。", difficulty: 2 },
    { type: "mcq", stem: "同じデータと同じコードから、誰がやっても同じ結果が出ること。新たな標本で確かめる追試とは区別される。", choices: ["レプリケーション / 追試（replication）", "リプロデューシビリティ（reproducibility）", "オープンサイエンス（open science）", "パブリケーションバイアス（publication bias）"], answer: 1, explain: "同じデータ・コードで同じ数字が出るのがリプロデューシビリティ。別標本で効果が出るかはレプリケーション。", difficulty: 3 },
    { type: "mcq", stem: "結果を見てから、あたかも最初からそう予想していたかのように仮説を書いてしまう問題行為。", choices: ["pハッキング（p-hacking）", "HARKing", "ガーデン・オブ・フォーキングパス（garden of forking paths）", "パブリケーションバイアス（publication bias）"], answer: 1, explain: "後出しで仮説を立てるのがHARKing。有意になるまで分析を試すのはpハッキング。", difficulty: 3 },
    { type: "mcq", stem: "分析の選択肢が無数に枝分かれしており、その都度の無自覚な取捨選択によって偽陽性が生じてしまう問題。", choices: ["ガーデン・オブ・フォーキングパス（garden of forking paths）", "pハッキング（p-hacking）", "HARKing", "リプロデューシビリティ（reproducibility）"], answer: 0, explain: "意図せぬ枝分かれの選択が偽陽性を生むのがガーデン・オブ・フォーキングパス。意図的に有意を狙うpハッキングと対比される。", difficulty: 3 },
  ],
});
