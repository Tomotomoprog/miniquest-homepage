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
            <a
              href="https://miniquest-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-6 py-2 font-semibold text-blue-700 shadow hover:bg-gray-100 transition"
            >
              ベータに参加する
            </a>
            <a
              href="#philosophy"
              className="rounded-xl border border-white/80 px-6 py-2 text-white/95 hover:bg-white/10 transition"
            >
              理念を読む
            </a>
          </div>
        </div>
      </section>

      {/* ========= Why ========= */}
      <section id="why" className="w-full bg-white text-gray-800 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100 scroll-mt-20">
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
      <section id="what" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100 scroll-mt-20">
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
      <section id="how" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100 scroll-mt-20">
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
      <section id="impact" className="w-full bg-white py-20 md:py-28 px-6 md:px-16 border-t border-gray-100 scroll-mt-20">
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

      {/* ========= Philosophy（差し込み） ========= */}
      <section id="philosophy" className="bg-gradient-to-br from-green-50 to-green-100 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">理念</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              　「報われない努力なんて、ひとつもない。」この言葉は、私自身の経験から生まれたものであり、MiniQuestという挑戦の場を立ち上げる原動力になっています。
            </p>
            <p>
              　私たちが生きるこの社会は、成果や「映える瞬間」ばかりが評価される構造に偏りすぎています。SNSを開けば、成功談や輝かしい結果ばかりが並び、その裏にある無数の挑戦や失敗は見えなくなってしまいました。その結果、人々は努力の過程に価値を感じられず、孤独な挑戦をやめてしまうことすらあります。若者の中には「自分には何もできない」と無力感を抱き、生きがいを見失ってしまう人さえいます。
            </p>
            <p>
              　私自身もそうでした。努力が結果に結びつかず、周囲に理解されず、何度も心が折れそうになった経験があります。けれど、同じように挑戦を続ける仲間の姿や、ほんの小さな共感の言葉が、何度も私を前へと押し出してくれました。挑戦の過程は決して無駄ではなく、誰かと共有されることで確かに価値を持つのだと気づいたのです。
            </p>
            <p>
              　MiniQuestは、こうした想いから生まれました。私たちは、日常の小さな挑戦を物語として残し、仲間と共感を分かち合える仕組みをつくります。大切なのは、結果だけではなく過程に光を当てること。そして、孤独な努力を「一人の戦い」で終わらせず、仲間とつながることで「続けられる力」に変えることです。
            </p>
            <p>
              　私たちが掲げる価値観は、「過程に拍手を送ること」「共感でつながること」「一歩が未来を変えること」。これは単なるサービスのコンセプトではなく、私たちが社会に対して果たしたい使命そのものです。
            </p>
            <p>
              　MiniQuestが広がれば、世界中で小さな挑戦が共鳴し合い、教育格差の解消、環境問題への取り組み、貧困や孤独といった課題に立ち向かう力が生まれます。一人の挑戦は小さくても、共感でつながれば、やがて社会を変える原動力になるのです。
            </p>
            <p>
              　MiniQuestは単なるSNSではありません。それは、挑戦を物語に変える新しい文化であり、誰もが主人公になれる舞台です。私たちは挑戦するすべての人に寄り添い、その一歩を未来につなげることで、世界を笑顔で満たしていきます。
            </p>
          </div>
        </div>
      </section>

      {/* ========= Founder Story ========= */}
      <section id="founder" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">結果ではなく、過程に拍手を</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              努力が報われず、挑戦をやめたくなる瞬間を私は何度も経験しました。もしその過程が記録され、誰かに見守られていたら…もっと前に進めたかもしれない。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              MiniQuestは、そんな思いから生まれました。結果ではなく過程を讃え、仲間と共に歩むことで、挑戦は続けられる。小さな積み重ねこそが、世界を変える大きな力になると信じています。
            </p>
            <p className="mt-6 font-semibold text-blue-700">Founder, 向井智康</p>
          </div>
          <div className="flex justify-center">
            <div className="w-[400px] h-[300px] rounded-2xl bg-gradient-to-br from-blue-100 to-white border border-blue-100 shadow-md" />
          </div>
        </div>
      </section>

      {/* ========= Company ========= */}
      <section id="company" className="w-full bg-white py-20 md:py-28 px-6 md:px-16 border-t border-gray-100 scroll-mt-20">
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

      {/* ========= Contact ========= */}
      <section id="contact" className="w-full bg-gray-50 py-20 md:py-28 px-6 md:px-16 border-t border-gray-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
          <p className="text-center text-gray-700 mb-12">
            ご質問・ご相談・取材依頼など、お気軽にご連絡ください。
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700 transition"
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