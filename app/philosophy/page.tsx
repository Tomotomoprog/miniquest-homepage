export default function PhilosophyPage() {
  return (
    <main className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <span className="badge">Our Philosophy</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            なぜ、今MiniQuestなのか
          </h1>
          <p className="mt-6 text-lg text-dim">
            私たちは、人の可能性が「評価」によってではなく「挑戦の過程」そのものによって開花すると信じています。
          </p>
        </div>

        <div className="space-y-12">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-brand-600">SNSの限界：見失われた「過程」の価値</h2>
            <p className="mt-4 text-dim leading-relaxed">
              現代のSNSは、成功した結果や「映える」瞬間を共有する場として最適化されています。しかし、その裏側にある無数の試行錯誤、小さな失敗、そして何より地道な「挑戦の過程」は、なかなか可視化されません。
              <br/><br/>
              結果だけが評価される世界では、人は挑戦を恐れるようになります。MiniQuestは、この「結果主義」の文化に疑問を投げかけ、誰もが自分のペースで挑戦し、その過程を安心して共有できる「場」を創造します。
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-brand-600">孤独な挑戦から、共感でつながる冒険へ</h2>
            <p className="mt-4 text-dim leading-relaxed">
              新しいことへの挑戦は、孤独です。一人で目標に向かって努力を続けるのは、どんなに強い意志があっても難しいもの。私たちは、その孤独感を「共感」の力で乗り越えられると信じています。
              <br/><br/>
              MiniQuestでは、あなたの挑戦は他の誰かの勇気になります。仲間からの「いいね」ではない、心からの「応援」や「共感」が、次の一歩を踏み出すための最も大きなエネルギー源となるのです。
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-brand-600">「どうせ変わらない」という無力感を、希望へ</h2>
            <p className="mt-4 text-dim leading-relaxed">
            環境問題、社会格差… 大きな課題を前に「自分一人が何かしても変わらない」という無力感に苛まれることがあります。しかし、歴史を動かしてきたのは、常に名もなき個人の「小さな一歩」の積み重ねでした。
              <br/><br/>
              MiniQuestは、あなたの日常の小さな挑戦（クエスト）が、社会貢献につながる仕組みを提供します。ゴミを拾う、地元の店で買い物をする。一つひとつは小さな行動でも、それらが集まれば、世界を動かす大きなうねりとなる。その事実を可視化することで、私たちは希望を育みます。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}