import ImpactCounters from "./components/impact/ImpactCounters";
import Link from "next/link";
// Image コンポーネントは不要になったため削除します

export default function Home() {
  return (
    <main>
      {/* ========= Hero ========= */}
      <section
        className="
          relative flex items-center
          min-h-[calc(100vh-4rem)]
          py-20
          px-6 bg-gradient-to-b from-brand-50 to-white
        "
      >
        <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-600">
              日常を、冒険に。
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-dim max-w-2xl mx-auto">
              報われない努力なんて、ひとつもない。
              MiniQuestは、あなたの小さな挑戦を物語に変え、仲間と共に未来を築きます。
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <a
                href="https://miniquest-web.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shadow-lg"
              >
                ベータ版に参加する
              </a>
              <Link
                href="/philosophy"
                className="btn btn-ghost"
              >
                私たちの理念
              </Link>
            </div>
        </div>
      </section>
      
      {/* ========= What (アプリの仕組み) ========= */}
      <section id="what" className="py-20 md:py-28 px-6 bg-brand-50 scroll-mt-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">冒険を支える4つの仕組み</h2>
            <p className="mt-4 text-dim">
              MiniQuestは、あなたの「やってみたい」を「できた！」に変えるための、シンプルで強力な機能を提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-semibold mb-2">今日の3クエスト</h3>
              <p className="text-sm text-dim leading-relaxed">
                運営から届く「共通クエスト」と、自分で作る「マイクエスト」。無理なく続けられる“今日の挑戦”が、あなたを待っています。
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">共感タイムライン</h3>
              <p className="text-sm text-dim leading-relaxed">
                挑戦の記録を仲間と共有。評価ではなく「共感」と「応援」でつながる、安心できるタイムラインです。
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-xl font-semibold mb-2">RPG風プロフィール</h3>
              <p className="text-sm text-dim leading-relaxed">
                クエストをクリアするたびに経験値(EXP)が貯まりレベルアップ。あなたの努力が、キャラクターの成長として可視化されます。
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">社会インパクト</h3>
              <p className="text-sm text-dim leading-relaxed">
                あなたの行動が集まって、社会貢献に。植樹した木の数や、削減したCO2排出量などがリアルタイムで表示されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========= How it works (使い方) ========= */}
      <section id="how" className="py-20 md:py-28 px-6 scroll-mt-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge">How to Use</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">3ステップで始める、新しい日常</h2>
            <p className="mt-4 text-dim">
              アカウント登録から最初のクエスト挑戦まで、わずか数分。誰でも簡単に、冒険の第一歩を踏み出せます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="card p-8 text-center">
              <div className="text-5xl font-bold text-brand-500 mb-4">①</div>
              <h3 className="text-xl font-semibold mb-2">クエストを選ぶ</h3>
              <p className="text-dim text-sm leading-relaxed">
                毎朝届くクエストをチェック。今日は何に挑戦する？もしピンとこなければ、自分でマイクエストを作ることもできます。
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl font-bold text-brand-500 mb-4">②</div>
              <h3 className="text-xl font-semibold mb-2">挑戦を記録する</h3>
              <p className="text-dim text-sm leading-relaxed">
                クエストを達成したら、写真やひとことを添えて投稿。気負わずに、ありのままの挑戦を記録しましょう。
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl font-bold text-brand-500 mb-4">③</div>
              <h3 className="text-xl font-semibold mb-2">仲間とつながる</h3>
              <p className="text-dim text-sm leading-relaxed">
                タイムラインで仲間の挑戦を応援。あなたの共感が、誰かの力になります。自分の成長と、社会の変化を実感しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* ========= Impact (社会インパクト) ========= */}
      <section id="impact" className="py-20 md:py-28 px-6 bg-brand-50 scroll-mt-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <span className="badge">Social Impact</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">小さな挑戦が、世界を変える</h2>
              <p className="mt-4 text-dim">
                これは自慢の数字ではありません。希望の指標です。みんなの小さな一歩が、これだけの大きな変化を生み出しています。
              </p>
            </div>
            <div className="mt-16">
              <ImpactCounters />
            </div>
          </div>
        </section>

      {/* ========= Founder ========= */}
      <section id="founder" className="py-20 md:py-28 px-6 scroll-mt-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge">Founder</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">創業者について</h2>
            <p className="mt-4 text-dim">
              MiniQuestは、自身の経験から「挑戦の可視化」の重要性を痛感した一人のエンジニアによって生まれました。
            </p>
          </div>

          {/* ▼▼▼ 写真なしのデザインに変更 ▼▼▼ */}
          <div className="relative max-w-3xl mx-auto mt-16">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-100 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-100 rounded-full opacity-50 -z-10"></div>
            <div className="card p-8 bg-white/80 backdrop-blur-sm text-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-600">向井　智康</h3>
                <p className="mt-1 text-dim font-semibold">代表取締役CEO / エンジニア</p>
                <div className="mt-4 pt-4 border-t border-line">
                  <p className="text-sm text-ink leading-relaxed text-left">
                    「誰もが挑戦者になれる世界」を目指し、プロダクト開発と経営の全てを担う。
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ▲▲▲ ここまで ▲▲▲ */}

        </div>
      </section>

      {/* ========= Company (会社概要) ========= */}
      <section id="company" className="py-20 md:py-28 px-6 bg-brand-50 scroll-mt-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge">Company</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">会社概要</h2>
            <p className="mt-4 text-dim">
              私たちは、テクノロジーの力で人々の挑戦を支援するチームです。
            </p>
          </div>

          <div className="card max-w-3xl mx-auto mt-16 p-8">
            <dl className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="border-b border-line pb-4">
                <dt className="text-sm font-semibold text-ink">会社名</dt>
                <dd className="mt-1 text-dim">株式会社MiniQuest（予定）</dd>
              </div>
              <div className="border-b border-line pb-4">
                <dt className="text-sm font-semibold text-ink">設立</dt>
                <dd className="mt-1 text-dim">2025年（予定）</dd>
              </div>
              <div className="border-b border-line pb-4">
                <dt className="text-sm font-semibold text-ink">所在地</dt>
                <dd className="mt-1 text-dim">東京都</dd>
              </div>
              <div className="border-b border-line pb-4">
                <dt className="text-sm font-semibold text-ink">代表者</dt>
                <dd className="mt-1 text-dim">向井　智康</dd>
              </div>
              <div className="md:col-span-2 border-b border-line pb-4">
                <dt className="text-sm font-semibold text-ink">事業内容</dt>
                <dd className="mt-1 text-dim">ソーシャルアプリ「MiniQuest」の開発・運営</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

    </main>
  );
}