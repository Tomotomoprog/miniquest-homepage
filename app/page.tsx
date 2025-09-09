import ImpactCounters from "./components/impact/ImpactCounters";

export default function Home() {
  return (
    <main className="text-gray-800 bg-white">
      {/* ========= Hero ========= */}
      <section
        className="
          relative flex items-center /* justify-centerを削除 */
          min-h-screen
          px-6 overflow-hidden
          bg-cover bg-center bg-no-repeat
        "
        style={{ backgroundImage: `url('/hero-illustration.PNG')` }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-blue-800/60 -z-10"></div>

        {/* 👇 ここからレイアウトを大きく変更します */}
        <div className="max-w-7xl mx-auto w-full flex justify-end text-white z-10"> {/* text-whiteをここに戻します */}
          <div className="w-full md:w-1/2 text-center md:text-right pr-4 md:pr-0"> {/* 右寄せに調整 */}
            <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg text-outline">
              日常を、冒険に。
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-shadow-lg text-outline">
              報われない努力なんて、ひとつもない。<br />
              MiniQuestは、あなたの小さな挑戦を物語に変え、仲間と共に未来を築きます。
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-end"> {/* ボタンも右寄せに調整 */}
              <a
                href="https://miniquest-web.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-3 font-semibold text-blue-700 shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
              >
                ベータに参加する
              </a>
              <a
                href="#philosophy"
                className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/20 transition-all"
              >
                理念を読む
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========= Why ========= */}
      <section id="why" className="w-full bg-gray-50 text-gray-800 py-20 md:py-28 px-6 md:px-16 scroll-mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">なぜ、今MiniQuestなのか</h2>
          <ul className="space-y-8 text-lg leading-relaxed">
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <span className="font-bold text-blue-600">SNSの限界：</span>
              成果や映えだけが評価され、挑戦の大部分が見えなくなっている。
            </li>
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <span className="font-bold text-blue-600">孤独な挑戦：</span>
              一人で続けるのは難しい。でも、人は仲間となら続けられる。
            </li>
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <span className="font-bold text-blue-600">無力感の連鎖：</span>
              社会課題に関心はあっても「自分には何もできない」と感じてしまう。
            </li>
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <span className="font-bold text-blue-600">生きがいの回復：</span>
              小さな達成を積み重ねることで、人は希望を取り戻せる。
            </li>
          </ul>
          <p className="mt-12 text-center text-xl font-semibold text-blue-700">
            MiniQuestは、“過程 × 共感 × 行動”で、この断絶を埋めます。
          </p>
        </div>
      </section>

      {/* ========= What ========= */}
      <section id="what" className="w-full bg-white py-20 md:py-28 px-6 md:px-16 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">MiniQuestの4つの仕組み</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-semibold mb-2">今日の3クエスト</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                共通の挑戦＋あなただけの挑戦。<br />
                無理なく踏み出せる“一歩”を毎朝提示します。
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">共感フィード</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                「いいね」ではなく「共感」と「応援」。<br />
                数字の競争ではなく、努力が報われる空間へ。
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-xl font-semibold mb-2">RPGプロフィール</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                あなたの挑戦が積み重なり、<br />
                レベルや称号、冒険日誌に刻まれていく。<br />
                数字ではなく、“物語”として残ります。
              </p>
            </div>
            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">社会インパクト</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                みんなの小さな挑戦が集まり、<br />
                「大学1学期分の学び」や「自販機◯台分削減」として見える化されます。
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-blue-700 text-lg font-medium">
            映えの競争ではなく、<span className="underline decoration-blue-400 underline-offset-4 decoration-2">挑戦の共創</span>へ。
          </p>
        </div>
      </section>

      {/* ========= How it works ========= */}
      <section id="how" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">MiniQuestの使い方</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-blue-500 mb-4">①</div>
              <h3 className="text-xl font-semibold mb-2">受け取る</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                毎朝3つのクエストが届く。<br />
                共通クエストとあなた専用の挑戦で無理なくスタート。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-blue-500 mb-4">②</div>
              <h3 className="text-xl font-semibold mb-2">挑む</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                小さな挑戦を実行し、写真や言葉で記録。<br />
                仲間からの共感や応援が力になる。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-blue-500 mb-4">③</div>
              <h3 className="text-xl font-semibold mb-2">つながる</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                挑戦の軌跡があなたの物語になり、<br />
                みんなの力が合わさって社会を前に進める。
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-blue-700 text-lg font-medium">
            チェックリストではなく、<span className="underline decoration-blue-400 underline-offset-4 decoration-2">毎日の小さな祝祭</span>へ。
          </p>
        </div>
      </section>

      {/* ========= Impact ========= */}
      <section id="impact" className="w-full bg-white py-20 md:py-28 px-6 md:px-16 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">小さな挑戦が、世界を変える</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            数字は“自慢”ではなく、“希望”の指標です。みんなの小さな一歩が、これだけの大きな変化を生み出しています。
          </p>

          <ImpactCounters />

          <p className="mt-10 text-center text-xs text-gray-500">
            ※ 表示は推計値です。換算式と参照データは順次公開していきます。
          </p>
        </div>
      </section>

      {/* ========= Philosophy ========= */}
      <section id="philosophy" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-28 px-6 md:px-16 scroll-mt-12">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">理念</h2>
          <div className="text-gray-700 leading-relaxed space-y-6 prose lg:prose-lg">
            <p>
              「報われない努力なんて、ひとつもない。」この言葉は、私自身の経験から生まれたものであり、MiniQuestという挑戦の場を立ち上げる原動力になっています。
            </p>
            <p>
              私たちが生きるこの社会は、成果や「映える瞬間」ばかりが評価される構造に偏りすぎています。SNSを開けば、成功談や輝かしい結果ばかりが並び、その裏にある無数の挑戦や失敗は見えなくなってしまいました。その結果、人々は努力の過程に価値を感じられず、孤独な挑戦をやめてしまうことすらあります。若者の中には「自分には何もできない」と無力感を抱き、生きがいを見失ってしまう人さえいます。
            </p>
            <p>
              MiniQuestは、こうした想いから生まれました。私たちは、日常の小さな挑戦を物語として残し、仲間と共感を分かち合える仕組みをつくります。大切なのは、結果だけではなく過程に光を当てること。そして、孤独な努力を「一人の戦い」で終わらせず、仲間とつながることで「続けられる力」に変えることです。
            </p>
            <p>
              私たちが掲げる価値観は、「過程に拍手を送ること」「共感でつながること」「一歩が未来を変えること」。これは単なるサービスのコンセプトではなく、私たちが社会に対して果たしたい使命そのものです。
            </p>
            <p>
              MiniQuestは単なるSNSではありません。それは、挑戦を物語に変える新しい文化であり、誰もが主人公になれる舞台です。私たちは挑戦するすべての人に寄り添い、その一歩を未来につなげることで、世界を笑顔で満たしていきます。
            </p>
          </div>
        </div>
      </section>

      {/* ========= Founder Story ========= */}
      <section id="founder" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 scroll-mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-2">
            {/* プレースホルダー画像をより魅力的に */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 border-4 border-white shadow-2xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">Founder</span>
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">結果ではなく、過程に拍手を</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              努力が報われず、挑戦をやめたくなる瞬間を私は何度も経験しました。もしその過程が記録され、誰かに見守られていたら…もっと前に進めたかもしれない。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              MiniQuestは、そんな思いから生まれました。結果ではなく過程を讃え、仲間と共に歩むことで、挑戦は続けられる。小さな積み重ねこそが、世界を変える大きな力になると信じています。
            </p>
            <p className="mt-6 font-semibold text-blue-700">Founder, 向井智康</p>
          </div>
        </div>
      </section>

      {/* ========= Company ========= */}
      <section id="company" className="w-full bg-white py-20 md:py-28 px-6 md:px-16 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Company</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-xl border border-gray-200 bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                小さな挑戦を価値に変え、誰もが主人公になれる社会をつくる。
              </p>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                世界中の人々が笑顔で挑戦を続けられる文化を育む。
              </p>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 bg-white shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Value</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                過程に拍手を / 共感でつながる / 一歩が未来を変える
              </p>
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold mb-8 text-center">会社概要</h3>
            <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6 text-sm">
                <div className="sm:col-span-1">
                  <dt className="font-semibold text-gray-800">会社名</dt>
                  <dd className="text-gray-600 mt-1">株式会社MiniQuest</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="font-semibold text-gray-800">設立</dt>
                  <dd className="text-gray-600 mt-1">2025年予定</dd>
                </div>
                 <div className="sm:col-span-1">
                  <dt className="font-semibold text-gray-800">代表者</dt>
                  <dd className="text-gray-600 mt-1">向井 智康</dd>
                </div>
                <div className="sm:col-span-3">
                  <dt className="font-semibold text-gray-800">所在地</dt>
                  <dd className="text-gray-600 mt-1">東京都（予定）</dd>
                </div>
                <div className="sm:col-span-3">
                  <dt className="font-semibold text-gray-800">事業内容</dt>
                  <dd className="text-gray-600 mt-1">
                    挑戦支援SNS「MiniQuest」の企画・開発・運営
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ========= Contact ========= */}
      <section id="contact" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 scroll-mt-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact</h2>
          <p className="text-center text-gray-600 mb-12">
            ご質問・ご相談・取材依頼など、お気軽にご連絡ください。
          </p>

          <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition"
                required
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="rounded-full bg-blue-600 text-white px-10 py-3 font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}