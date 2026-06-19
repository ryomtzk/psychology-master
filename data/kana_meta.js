/* === 横文字（カタカナ語）特別編 メタ・理論 (kana_meta) === */
PsychApp.registerModule({
  id: "kana_meta",
  title: "メタ・理論の横文字",
  emoji: "🏛️",
  category: "katakana",
  tagline: "研究の枠組みや理論評価で頻出するカタカナ語を頻出順に。意味から単語を当てる演習つき。",
  overview: `<p>この回では、特定の現象ではなく<strong>研究そのものの枠組み・理論の評価軸</strong>に関わる横文字（カタカナ語）を、論文での出現頻度の高い順に整理する。「どんな枠組みで考えるか」「その概念をどう測るか」「理論として良いとはどういうことか」といった、分野を横断して効いてくる語が中心である。</p>
  <p>これらの語は抽象度が高く、似た語と混同しやすい。とくに<strong>妥当性まわり（収束的・弁別的・生態学的）</strong>や<strong>創発・還元</strong>のような対の概念は、意味の違いを意識して覚えるとよい。</p>
  <div class="callout note"><b>この回の演習形式</b>：示された<strong>意味（定義）</strong>に当てはまる<strong>カタカナ語</strong>を4択から選ぶ。紛らわしい語を並べてあるので、意味の違いを意識して選ぶとよい。</div>`,
  lessons: [
    {
      title: "コア（最頻出）",
      body: `
        <p>まずは最もよく目にする語から。番号は<strong>頻出順（だいたいの目安）</strong>である。研究の枠組み・概念・仕組みに関わる基礎語がここに集まる。</p>
        <ol class="kana-rank">
          <li><b>パラダイム（paradigm）</b> … ①研究の枠組み全体（Kuhn）②具体的な実験課題の型（例：ストループ・パラダイム）。文脈で意味が違う。</li>
          <li><b>コンストラクト / 構成概念（construct）</b> … 直接観測できないが理論上仮定する概念（知能・不安など）。</li>
          <li><b>オペレーショナライズ / 操作的定義（operationalize）</b> … 抽象概念を測定可能な手続きに落とし込むこと。</li>
          <li><b>メカニズム（mechanism）</b> … 現象を生み出す内部の仕組み。「メカニスティックな説明」が近年重視される。</li>
          <li><b>エマージェンス / 創発（emergence）</b> … 要素にはない性質が相互作用から立ち現れること。</li>
          <li><b>リダクション / 還元（reduction）</b> … 高次の現象を低次（神経・分子）の言葉で説明すること。</li>
        </ol>
        <div class="callout tip"><b>混同注意</b>：高次を低次に「説明し下ろす」のがリダクション、低次からは予測できない性質が「立ち上がる」のがエマージェンス。向きが逆の対と考えるとよい。</div>
      `,
      terms: [
        { term: "パラダイム（paradigm）", def: "①研究の枠組み全体（Kuhn）②具体的な実験課題の型（例：ストループ・パラダイム）。文脈で意味が違う。" },
        { term: "コンストラクト / 構成概念（construct）", def: "直接観測できないが理論上仮定する概念（知能・不安など）。" },
        { term: "オペレーショナライズ / 操作的定義（operationalize）", def: "抽象概念を測定可能な手続きに落とし込むこと。" },
        { term: "メカニズム（mechanism）", def: "現象を生み出す内部の仕組み。「メカニスティックな説明」が近年重視される。" },
        { term: "エマージェンス / 創発（emergence）", def: "要素にはない性質が相互作用から立ち現れること。" },
        { term: "リダクション / 還元（reduction）", def: "高次の現象を低次（神経・分子）の言葉で説明すること。" },
      ],
    },
    {
      title: "周辺・応用",
      body: `
        <p>続いて、理論の評価や哲学的前提に関わるやや専門的な語。<strong>妥当性</strong>の3兄弟は意味の違いがそのまま出題されやすい。</p>
        <ol class="kana-rank">
          <li><b>パーシモニー / 倹約性（parsimony）</b> … 同等に説明できるなら単純な理論を採るべきという原則（オッカムの剃刀）。</li>
          <li><b>エコロジカルバリディティ / 生態学的妥当性（ecological validity）</b> … 実験結果が現実場面にどれだけ当てはまるか。</li>
          <li><b>コンバージェンス / 収束的妥当性（convergent validity）</b> … 別々の測定が同じ構成概念で一致すること。</li>
          <li><b>ディスクリミナント / 弁別的妥当性（discriminant validity）</b> … 異なる構成概念どうしがちゃんと区別されること。</li>
          <li><b>オントロジー / エピステモロジー（ontology / epistemology）</b> … 「何が存在するか」と「どう知りうるか」。理論の前提に関わる哲学的区別。</li>
        </ol>
        <div class="callout warn"><b>混同注意</b>：違う測定が「同じ概念」で一致するのがコンバージェンス（収束的）、違う概念どうしが「ちゃんと区別される」のがディスクリミナント（弁別的）。現実場面への当てはまりはエコロジカルバリディティで別物。</div>
      `,
      terms: [
        { term: "パーシモニー / 倹約性（parsimony）", def: "同等に説明できるなら単純な理論を採るべきという原則（オッカムの剃刀）。" },
        { term: "エコロジカルバリディティ / 生態学的妥当性（ecological validity）", def: "実験結果が現実場面にどれだけ当てはまるか。" },
        { term: "コンバージェンス / 収束的妥当性（convergent validity）", def: "別々の測定が同じ構成概念で一致すること。" },
        { term: "ディスクリミナント / 弁別的妥当性（discriminant validity）", def: "異なる構成概念どうしがちゃんと区別されること。" },
        { term: "オントロジー / エピステモロジー（ontology / epistemology）", def: "「何が存在するか」と「どう知りうるか」。理論の前提に関わる哲学的区別。" },
      ],
    },
  ],
  questions: [
    { type: "mcq", stem: "研究の枠組み全体を指すこともあれば、ストループ課題のような具体的な実験課題の「型」を指すこともある語。文脈で意味が変わるので注意がいる。", choices: ["パラダイム（paradigm）", "メカニズム（mechanism）", "コンストラクト / 構成概念（construct）", "オントロジー / エピステモロジー（ontology / epistemology）"], answer: 0, explain: "枠組み全体（Kuhn）と実験課題の型の両義をもつのがパラダイム。仕組みそのものはメカニズム。", difficulty: 1 },
    { type: "mcq", stem: "知能や不安のように直接は観測できないが、理論の上で仮定して扱う概念。", choices: ["メカニズム（mechanism）", "コンストラクト / 構成概念（construct）", "パラダイム（paradigm）", "パーシモニー / 倹約性（parsimony）"], answer: 1, explain: "観測できないが理論的に仮定する概念がコンストラクト。それを測る手続きに落とすのはオペレーショナライズで別。", difficulty: 1 },
    { type: "mcq", stem: "抽象的な概念を、実際に測定できる具体的な手続きへと落とし込むこと。", choices: ["リダクション / 還元（reduction）", "オペレーショナライズ / 操作的定義（operationalize）", "コンストラクト / 構成概念（construct）", "エマージェンス / 創発（emergence）"], answer: 1, explain: "概念を測定手続きに変換するのがオペレーショナライズ。仮定する概念そのものはコンストラクト。", difficulty: 1 },
    { type: "mcq", stem: "ある現象を生み出している内部の仕組み。これを明らかにする説明が近年とくに重視されている。", choices: ["パラダイム（paradigm）", "エマージェンス / 創発（emergence）", "メカニズム（mechanism）", "コンバージェンス / 収束的妥当性（convergent validity）"], answer: 2, explain: "現象を生む内部の仕組みがメカニズム。要素から新たな性質が立ち上がるのはエマージェンスで別。", difficulty: 1 },
    { type: "mcq", stem: "個々の要素にはない性質が、要素どうしの相互作用から新たに立ち現れること。", choices: ["エマージェンス / 創発（emergence）", "リダクション / 還元（reduction）", "メカニズム（mechanism）", "パーシモニー / 倹約性（parsimony）"], answer: 0, explain: "相互作用から新しい性質が立ち上がるのがエマージェンス。高次を低次に説明し下ろすリダクションは逆向きの概念。", difficulty: 2 },
    { type: "mcq", stem: "高次の現象を、神経や分子といったより低次の言葉で説明しようとすること。", choices: ["エマージェンス / 創発（emergence）", "オペレーショナライズ / 操作的定義（operationalize）", "リダクション / 還元（reduction）", "メカニズム（mechanism）"], answer: 2, explain: "高次を低次の言葉に説明し下ろすのがリダクション。低次から新たな性質が立ち上がるエマージェンスと向きが逆。", difficulty: 2 },
    { type: "mcq", stem: "同じくらいよく説明できる理論が複数あるなら、より単純なものを採るべきだという原則。オッカムの剃刀とも呼ばれる。", choices: ["パーシモニー / 倹約性（parsimony）", "リダクション / 還元（reduction）", "ロバスト（robust）", "ノーマティブ（normative）"], answer: 0, explain: "同等なら単純な理論を選ぶ原則がパーシモニー。還元は説明の階層を下ろすことで別概念。", difficulty: 2 },
    { type: "mcq", stem: "実験で得られた結果が、現実の生活場面にどれだけ当てはまるかという観点。", choices: ["コンバージェンス / 収束的妥当性（convergent validity）", "エコロジカルバリディティ / 生態学的妥当性（ecological validity）", "ディスクリミナント / 弁別的妥当性（discriminant validity）", "パーシモニー / 倹約性（parsimony）"], answer: 1, explain: "現実場面への当てはまりはエコロジカルバリディティ。測定間の一致や区別を問う妥当性とは別の軸。", difficulty: 2 },
    { type: "mcq", stem: "別々の方法で測ったものが、同じ概念を測っているなら互いに一致するはずだ、という観点の妥当性。", choices: ["ディスクリミナント / 弁別的妥当性（discriminant validity）", "エコロジカルバリディティ / 生態学的妥当性（ecological validity）", "コンバージェンス / 収束的妥当性（convergent validity）", "オペレーショナライズ / 操作的定義（operationalize）"], answer: 2, explain: "違う測定が同じ概念で一致するのがコンバージェンス。違う概念どうしの区別を問うのは弁別的妥当性。", difficulty: 3 },
    { type: "mcq", stem: "本来異なるはずの概念どうしが、測定の上でもきちんと区別されていることを問う観点の妥当性。", choices: ["コンバージェンス / 収束的妥当性（convergent validity）", "ディスクリミナント / 弁別的妥当性（discriminant validity）", "エコロジカルバリディティ / 生態学的妥当性（ecological validity）", "コンストラクト / 構成概念（construct）"], answer: 1, explain: "異なる概念がちゃんと区別されることを問うのがディスクリミナント。同じ概念での一致を問う収束的妥当性とは逆。", difficulty: 3 },
    { type: "mcq", stem: "「何が存在するか」を問う立場と「どうすれば知りうるか」を問う立場の対。理論の前提に関わる哲学的な区別。", choices: ["オントロジー / エピステモロジー（ontology / epistemology）", "セマンティクス / プラグマティクス（semantics / pragmatics）", "パラダイム（paradigm）", "エマージェンス / 創発（emergence）"], answer: 0, explain: "存在論と認識論の対がオントロジー／エピステモロジー。語の意味と文脈の意味の対はセマンティクス／プラグマティクスで別。", difficulty: 3 },
  ],
});
