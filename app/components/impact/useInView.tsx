"use client";
import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { root: null, rootMargin: "0px", threshold: 0.3, ...options }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [options]);

  return { ref, inView };
}
