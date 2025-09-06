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
        <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800 h-12">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
            {/* 左：ロゴ */}
            <div className="text-lg font-bold text-white">MiniQuest</div>

            {/* 中：ナビ */}
            <nav className="hidden md:flex gap-4 text-gray-300 font-medium">
              <a href="#what" className="hover:text-white transition-colors">サービス</a>
              <a href="#impact" className="hover:text-white transition-colors">社会インパクト</a>
              <a href="#company" className="hover:text-white transition-colors">会社情報</a>
              <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
            </nav>

            {/* 右：ボタン */}
            <button className="ml-3 rounded-md bg-white text-black px-3 py-1 font-medium hover:bg-gray-200">
              ベータに参加
            </button>
          </div>
        </header>

        {/* ===== ページ本体 ===== */}
        <main className="flex-1">{children}</main>

        {/* ===== フッター ===== */}
        <footer className="bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
            <p>© 2025 MiniQuest Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
