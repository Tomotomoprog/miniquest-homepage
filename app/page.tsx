import ImpactCounters from "./components/impact/ImpactCounters";

export default function Home() {
  return (
    <main className="text-gray-900">
      {/* ========= Hero（画面ぴったり） ========= */}
      <section
        className="
          relative flex items-center justify-center
          min-h-[calc(100svh-3rem)] md:min-h-[calc(100vh-3rem)]
          px-6
          bg-gradient-to-b from-blue-300 to-blue-600
          text-gray-900
        "
      >
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            小さな挑戦で、世界を前へ。
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            結果ではなく、過程に拍手を。MiniQuestは、日々の挑戦を物語に変え、
            仲間と共に続ける“挑戦SNS”です。
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <button className="rounded-xl bg-white px-6 py-2 font-semibold text-blue-700 shadow">
              ベータに参加する
            </button>
            <button className="rounded-xl border border-white/80 px-6 py-2 text-white/95">
              理念を読む
            </button>
          </div>
        </div>
      </section>

      {/* ========= Why ========= */}
      <section className="w-full bg-white text-gray-800 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">なぜ今、MiniQuestなのか</h2>
          <ul className="space-y-6 text-lg leading-relaxed">
            <li>
              <span className="font-semibold">結果主義の限界：</span>
              映える瞬間だけが価値になるSNSは、挑戦の大部分を置き去りにしてきました。
            </li>
            <li>
              <span className="font-semibold">孤独な習慣：</span>
              一人で続けるのは難しい。人は本来、仲間となら続けられます。
            </li>
            <li>
              <span className="font-semibold">無力感の増大：</span>
              社会課題に関心があっても「自分には何もできない」と感じてしまう。
            </li>
            <li>
              <span className="font-semibold">生きがいの回復：</span>
              小さな達成が積み重なると、人は希望を取り戻します。
            </li>
          </ul>
          <p className="mt-10 text-center text-xl font-medium text-blue-700">
            MiniQuestは、過程 × 共感 × 行動でこの断絶を埋めます。
          </p>
        </div>
      </section>

      {/* ========= What（カード型） ========= */}
      <section id="what" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">挑戦が続く、4つの仕組み</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* カード1：今日の3クエスト */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="text-xl font-semibold mb-2">今日の3クエスト</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                共通2＋あなた専用1。無理なく踏み出せる“一歩”を毎朝提示します。
              </p>
            </div>

            {/* カード2：共感フィード */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">共感フィード</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                いいね数ではなく「共感」「励まし」。数字の競争から解放します。
              </p>
            </div>

            {/* カード3：RPGプロフィール */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <div className="text-3xl mb-3">🎖️</div>
              <h3 className="text-xl font-semibold mb-2">RPGプロフィール</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                全体レベルと分野レベル（学習・健康・エコ等）が上がり、称号と冒険日誌に刻まれます。
              </p>
            </div>

            {/* カード4：社会インパクト */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold mb-2">社会インパクト</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                みんなの達成を「大学1学期分」「自販機◯台分削減」など直感的な比喩で可視化します。
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-blue-700 font-medium">
            映えの競争ではなく、<span className="underline underline-offset-4">挑戦の共創</span>へ。
          </p>
        </div>
      </section>

      {/* ========= How it works ========= */}
      <section className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">どうやって動くのか？</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
              <div className="text-4xl mb-4">①</div>
              <h3 className="text-xl font-semibold mb-2">受け取る</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                毎朝、あなたに合わせた3つのクエストが届きます。
                共通クエストと個別クエストで無理なくスタート。
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
              <div className="text-4xl mb-4">②</div>
              <h3 className="text-xl font-semibold mb-2">挑む</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                クエストを達成したら記録。写真やコメントを添えると、
                仲間から共感や応援が届きます。
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
              <div className="text-4xl mb-4">③</div>
              <h3 className="text-xl font-semibold mb-2">つながる</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                プロフィールに成長が反映され、冒険日誌に刻まれます。
                みんなの挑戦が集まって社会を前に進めます。
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-blue-700 font-medium">
            チェックではなく、<span className="underline underline-offset-4">小さな祝祭</span>を毎日に。
          </p>
        </div>
      </section>

      {/* ========= Impact（アニメーション付き） ========= */}
      <section id="impact" className="w-full bg-white py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">小さな挑戦が、ここまで大きく</h2>
          <p className="text-center text-gray-600 mb-12">
            数字は“自慢”ではなく、“希望”の指標です。
          </p>

          <ImpactCounters />

          <p className="mt-10 text-center text-sm text-gray-500">
            ※ 表示は推計値です。換算式と参照データは順次公開していきます。
          </p>
        </div>
      </section>

      {/* ========= Founder Story ========= */}
      <section id="founder" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
          {/* 左：文章 */}
          <div>
            <h2 className="text-3xl font-bold mb-6">結果ではなく、過程に拍手を</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              努力が報われない瞬間を、私は何度も見てきました。学びも運動も、続けることが一番難しい。
              だからこそ、日々の小さな挑戦を価値に変える文化をつくりたいと考えました。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              MiniQuestは、誰もがこの世界の主人公になれる場所です。映えや結果の競争ではなく、
              過程そのものに意味があると伝えたい。小さな挑戦が積み重なれば、世界を少しずつ前に進められると信じています。
            </p>
            <p className="mt-6 font-semibold text-blue-700">
              - Founder, Tomoyasu Mukai
            </p>
          </div>

          {/* 右：イメージ（仮画像・差し替えOK） */}
          <div className="flex justify-center">
            <img
              src="https://placehold.co/400x300?text=Founder+Image"
              alt="Founder story"
              className="rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ========= Company ========= */}
      <section id="company" className="w-full bg-white py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
    
          {/* Mission / Vision / Value */}
          <h2 className="text-3xl font-bold text-center mb-12">Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Mission</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                小さな挑戦を価値に変え、誰もがこの世界の主人公になれる社会をつくる。
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Vision</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                世界中の人々が笑顔で挑戦を続けられる文化を育む。
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Value</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                過程に拍手を / 共感でつながる / 一歩が未来を変える
              </p>
            </div>
          </div>

          {/* 会社概要 */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">会社概要</h3>
            <div className="max-w-2xl mx-auto">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-gray-700">会社名</dt>
                  <dd className="text-gray-600">株式会社MiniQuest</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">設立</dt>
                  <dd className="text-gray-600">2025年予定</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">所在地</dt>
                  <dd className="text-gray-600">東京都（予定）</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">代表者</dt>
                  <dd className="text-gray-600">向井 智康</dd>
                </div>
                  <div className="sm:col-span-2">
                  <dt className="font-semibold text-gray-700">事業内容</dt>
                  <dd className="text-gray-600">
                    挑戦支援SNS「MiniQuest」の企画・開発・運営
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>


      {/* ========= Contact ========= */}
      <section id="contact" className="w-full bg-white py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">お問い合わせ</h2>
          
          ...
        </div>
      </section>
    </main>
  );
}




