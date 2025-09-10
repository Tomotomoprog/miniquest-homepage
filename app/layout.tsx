import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiniQuest",
  description: "小さな挑戦で、世界を前へ。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-slate-50 text-ink">
        {/* ===== ヘッダー ===== */}
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-line h-16">
          <div className="container h-full flex items-center justify-between">
            {/* 左：ロゴ */}
            <Link href="/" className="text-xl font-bold text-brand-600">
              MiniQuest
            </Link>

            {/* 中：ナビ */}
            <nav className="hidden md:flex gap-2 text-sm text-dim font-medium">
              <Link href="/#what" className="btn btn-ghost">仕組み</Link>
              <Link href="/#how" className="btn btn-ghost">使い方</Link>
              <Link href="/philosophy" className="btn btn-ghost">理念</Link> {/* 理念ページへのリンクを追加 */}
              <Link href="/#impact" className="btn btn-ghost">社会インパクト</Link>
            </nav>

            {/* 右：ボタン */}
            <a
              href="https://miniquest-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              アプリを使ってみる
            </a>
          </div>
        </header>

        {/* ===== ページ本体 ===== */}
        {children}

        {/* ===== フッター ===== */}
        <footer className="bg-white border-t border-line">
          <div className="container py-12 flex flex-col md:flex-row justify-between items-center text-sm text-dim">
            <p>© 2025 MiniQuest Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/philosophy" className="hover:text-brand-600">理念</Link>
              <a href="#" className="hover:text-brand-600">プライバシーポリシー</a>
              <a href="#" className="hover:text-brand-600">利用規約</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}