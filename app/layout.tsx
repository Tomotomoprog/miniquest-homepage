import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiniQuest",
  description: "小さな挑戦で、世界を前へ。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        {/* ===== ヘッダー ===== */}
        <header className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-sm border-b border-gray-800/50 h-14 transition-colors duration-300">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
            {/* 左：ロゴ */}
            <a href="#" className="text-xl font-bold text-white">MiniQuest</a>

            {/* 中：ナビ */}
            <nav className="hidden md:flex gap-6 text-gray-300 font-medium">
              <a href="#why" className="hover:text-white transition-colors">なぜ？</a>
              <a href="#what" className="hover:text-white transition-colors">仕組み</a>
               <a href="#how" className="hover:text-white transition-colors">使い方</a>
              <a href="#impact" className="hover:text-white transition-colors">社会インパクト</a>
              <a href="#company" className="hover:text-white transition-colors">会社情報</a>
              <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
            </nav>

            {/* 右：ボタン */}
            <a 
              href="https://miniquest-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 rounded-full bg-white text-black px-4 py-1.5 font-medium hover:bg-gray-200 transition-transform transform hover:scale-105"
            >
              ベータに参加
            </a>
          </div>
        </header>

        {/* ===== ページ本体 ===== */}
        <main className="flex-1">{children}</main>

        {/* ===== フッター ===== */}
        <footer className="bg-gray-900 text-white border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* ロゴと説明 */}
            <div className="col-span-1 md:col-span-2">
               <h3 className="text-2xl font-bold mb-2">MiniQuest</h3>
               <p className="text-sm text-gray-400">日常を、冒険に。</p>
            </div>

            {/* サイトマップ */}
            <div className="col-span-1">
              <h4 className="font-semibold mb-3 text-gray-300">サイトマップ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#why" className="hover:text-white">なぜ？</a></li>
                <li><a href="#what" className="hover:text-white">仕組み</a></li>
                <li><a href="#impact" className="hover:text-white">社会インパクト</a></li>
                <li><a href="#company" className="hover:text-white">会社情報</a></li>
              </ul>
            </div>
            
            {/* ソーシャル */}
            <div className="col-span-1">
               <h4 className="font-semibold mb-3 text-gray-300">フォローする</h4>
               <div className="flex gap-4">
                  <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
                  <a href="#" className="hover:text-pink-500 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
                </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-4 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>© 2025 MiniQuest Inc. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}