import ImpactCounters from "./components/impact/ImpactCounters";

export default function Home() {
  return (
    <main className="text-gray-900">
      {/* ========= Hero ========= */}
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
            日常を、冒険に。
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            報われない努力なんて、ひとつもない。<br />
            MiniQuestは、あなたの小さな挑戦を物語に変え、仲間と共に未来を築きます。
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <button className="rounded-xl bg-white px-6 py-2 font-semibold text-blue-700 shadow hover:bg-gray-100 transition">
              ベータに参加する
            </button>
            <button className="rounded-xl border border-white/80 px-6 py-2 text-white/95 hover:bg-white/10 transition">
              理念を読む
            </button>
          </div>
        </div>
      </section>

      {/* ========= Why ========= */}
      <section id="why" className="w-full bg-white text-gray-800 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">なぜ、今MiniQuestなのか</h2>
          <ul className="space-y-6 text-lg leading-relaxed">
            <li>
              <span className="font-semibold">SNSの限界：</span>
              成果や映えだけが評価され、挑戦の大部分が見えなくなっている。
            </li>
            <li>
              <span className="font-semibold">孤独な挑戦：</span>
              一人で続けるのは難しい。でも、人は仲間となら続けられる。
            </li>
            <li>
              <span className="font-semibold">無力感の連鎖：</span>
              社会課題に関心はあっても「自分には何もできない」と感じてしまう。
            </li>
            <li>
              <span className="font-semibold">生きがいの回復：</span>
              小さな達成を積み重ねることで、人は希望を取り戻せる。
            </li>
          </ul>
          <p className="mt-10 text-center text-xl font-medium text-blue-700">
            MiniQuestは、“過程 × 共感 × 行動”で、この断絶を埋めます。
          </p>
        </div>
      </section>

      {/* ========= What ========= */}
      <section id="what" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">MiniQuestの4つの仕組み</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="text-xl font-semibold mb-2">今日の3クエスト</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                共通の挑戦＋あなただけの挑戦。<br />
                無理なく踏み出せる“一歩”を毎朝提示します。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">共感フィード</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                「いいね」ではなく「共感」と「応援」。<br />
                数字の競争ではなく、努力が報われる空間へ。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <div className="text-3xl mb-3">🎖️</div>
              <h3 className="text-xl font-semibold mb-2">RPGプロフィール</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                あなたの挑戦が積み重なり、<br />
                レベルや称号、冒険日誌に刻まれていく。<br />
                数字ではなく、“物語”として残ります。
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold mb-2">社会インパクト</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                みんなの小さな挑戦が集まり、<br />
                「大学1学期分の学び」や「自販機◯台分削減」として見える化されます。
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-blue-700 font-medium">
            映えの競争ではなく、<span className="underline underline-offset-4">挑戦の共創</span>へ。
          </p>
        </div>
      </section>

      {/* ========= How it works ========= */}
      <section id="how" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">MiniQuestの使い方</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
              <div className="text-4xl mb-4">①</div>
              <h3 className="text-xl font-semibold mb-2">受け取る</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                毎朝3つのクエストが届く。<br />
                共通クエストとあなた専用の挑戦で無理なくスタート。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
              <div className="text-4xl mb-4">②</div>
              <h3 className="text-xl font-semibold mb-2">挑む</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                小さな挑戦を実行し、写真や言葉で記録。<br />
                仲間からの共感や応援が力になる。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-blue-100">
              <div className="text-4xl mb-4">③</div>
              <h3 className="text-xl font-semibold mb-2">つながる</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                挑戦の軌跡があなたの物語になり、<br />
                みんなの力が合わさって社会を前に進める。
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-blue-700 font-medium">
            チェックリストではなく、<span className="underline underline-offset-4">毎日の小さな祝祭</span>へ。
          </p>
        </div>
      </section>

      {/* ========= Impact ========= */}
      <section id="impact" className="w-full bg-white py-20 md:py-28 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">小さな挑戦が、世界を変える</h2>
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
          <div>
            <h2 className="text-3xl font-bold mb-6">結果ではなく、過程に拍手を</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              努力が報われず、挑戦をやめたくなる瞬間を私は何度も経験しました。
              もしその過程が記録され、誰かに見守られていたら…もっと前に進めたかもしれない。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              MiniQuestは、そんな思いから生まれました。<br />
              結果ではなく過程を讃え、仲間と共に歩むことで、挑戦は続けられる。<br />
              その小さな積み重ねこそが、世界を変える大きな力になると信じています。
            </p>
            <p className="mt-6 font-semibold text-blue-700">Founder, 向井智康</p>
          </div>
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
          <h2 className="text-3xl font-bold text-center mb-12">Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Mission</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                小さな挑戦を価値に変え、誰もが主人公になれる社会をつくる。
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
    </main>
  );
}





