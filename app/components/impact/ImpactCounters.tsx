"use client";

import type { ReactNode } from "react"; // ← この行を追加
import AnimatedNumber from "./AnimatedNumber";
import { useInView } from "./useInView";

function Pill({ children }: { children: ReactNode }) { // ← React.ReactNode から ReactNode へ変更
  return (
    <span className="inline-block rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

export default function ImpactCounters() {
  const { ref, inView } = useInView<HTMLDivElement>();

  // モック値（後でAPI接続可）
  const data = {
    learningMinutes: 12500,
    bottleCount: 8200,
    stretchCount: 3000,
  };

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 教育 */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm text-center">
        <div className="text-3xl mb-2">🎓</div>
        <h3 className="text-lg font-semibold mb-1">学習合計</h3>
        <div className="text-4xl font-bold text-blue-700">
          {inView ? <AnimatedNumber to={data.learningMinutes} /> : 0}
          <span className="text-xl ml-1">分</span>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          ＝ <strong>大学の1学期分</strong> の授業に相当
        </div>
        <div className="mt-3"><Pill>1コマ=50分で換算</Pill></div>
      </div>

      {/* 環境 */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm text-center">
        <div className="text-3xl mb-2">🌱</div>
        <h3 className="text-lg font-semibold mb-1">マイボトル使用</h3>
        <div className="text-4xl font-bold text-blue-700">
          {inView ? <AnimatedNumber to={data.bottleCount} /> : 0}
          <span className="text-xl ml-1">回</span>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          ＝ <strong>自販機17台分</strong> のペットボトル削減
        </div>
        <div className="mt-3"><Pill>500ml=1本換算</Pill></div>
      </div>

      {/* 健康 */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm text-center">
        <div className="text-3xl mb-2">💪</div>
        <h3 className="text-lg font-semibold mb-1">ストレッチ合計</h3>
        <div className="text-4xl font-bold text-blue-700">
          {inView ? <AnimatedNumber to={data.stretchCount} /> : 0}
          <span className="text-xl ml-1">回</span>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          ＝ <strong>健康寿命15年分</strong> の効果に相当
        </div>
        <div className="mt-3"><Pill>参考推計</Pill></div>
      </div>
    </div>
  );
}