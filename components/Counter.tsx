'use client';
import { useEffect, useRef, useState } from 'react';
type CounterProps = { from?: number; to: number; suffix?: string; duration?: number };

export default function Counter({ from = 0, to, suffix = '', duration = 1600 }: CounterProps) {
  const [v, setV] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const finishForPrint = () => setV(to);
    window.addEventListener('beforeprint', finishForPrint);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => window.removeEventListener('beforeprint', finishForPrint);
    }
    let frame: number | undefined;
    setV(from);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        setV(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); window.removeEventListener('beforeprint', finishForPrint); if (frame !== undefined) cancelAnimationFrame(frame); };
  }, [from, to, duration]);
  return <span ref={ref}>{v.toLocaleString('en-US')}{suffix}</span>;
}
