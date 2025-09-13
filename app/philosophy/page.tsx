export default function PhilosophyPage() {
  return (
    <main className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <span className="badge">Our Philosophy</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            私たちが、MiniQuestを創る理由
          </h1>
          <p className="mt-6 text-lg text-dim">
            目指すのは、人と人とが繋がり、切磋琢磨し、
            <br />
            誰もが幸せになれる世界です。
          </p>
        </div>

        <div className="space-y-12">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-brand-600">
              1. 内面を磨き、自分自身の「器」を大きくする
            </h2>
            <p className="mt-4 text-dim leading-relaxed">
              すべての土台となるのは、私たち自身のあり方です。
              <br />
              MiniQuestでは、日々の小さなクエスト（挑戦）を通して、新しい知識を学び、自分の弱さを受け入れ、ささいなことに感謝する心を育みます。
              <br />
              <br />
              特別なことでなくても構いません。「ありがとう」と伝える、本を1ページ読む、部屋を片付ける。その一つひとつの誠実な行動が、あなたという人間の深みを増し、人としての「器」を大きくしていくと信じています。
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-brand-600">
              2. 「結果」ではなく「過程」を認め合う
            </h2>
            <p className="mt-4 text-dim leading-relaxed">
              現代のSNSは、成功した「結果」を共有する場に偏りがちです。しかし、本当に価値があるのは、そこに至るまでの試行錯誤や、うまくいかなかった経験、そして地道な「挑戦の過程」そのものではないでしょうか。
              <br />
              <br />
              MiniQuestは、結果だけが評価される文化に一石を投じます。ここでは、あなたの挑戦が誰かに評価されることはありません。あるのは、仲間からの心からの「共感」と「応援」だけ。誰もが安心して挑戦の過程を分かち合える、温かい繋がりがここにあります。
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-brand-600">
              3. 「恩送り」の輪を広げ、社会をより良くする
            </h2>
            <p className="mt-4 text-dim leading-relaxed">
              私たちは、人との関わりの中で生きています。誰かに支えられ、助けられて今があります。その感謝を、直接返す「恩返し」だけでなく、また別の誰かへと繋いでいく「恩送り」という考え方を大切にしています。
              <br />
              <br />
              あなたの小さな親切や社会への貢献が、MiniQuestを通して可視化され、他の誰かの勇気へと繋がっていく。一人ひとりの行動は小さくても、それが集まれば、世界をより良くする大きな力になると信じています。「どうせ変わらない」という無力感を、確かな希望へ。それが私たちの願いです。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}