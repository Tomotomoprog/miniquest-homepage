"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  from?: number;
  to: number;
  duration?: number; // ms
  className?: string;
};

export default function AnimatedNumber({ from = 0, to, duration = 1400, className }: Props) {
  const [value, setValue] = useState(from);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setValue(to);
      return; // ← ここは void（OK）
    }

    startRef.current = null;

    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(from + (to - from) * eased));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    }; // ← 必ず void を返す
  }, [from, to, duration]);

  return <span className={className}>{value.toLocaleString()}</span>;
}
