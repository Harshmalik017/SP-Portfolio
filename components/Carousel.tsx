'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export default function Carousel({ label, children }: { label: string; children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: false });
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => setPosition({ start: element.scrollLeft <= 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    update();
    element.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { element.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [children]);
  const move = (direction: number) => track.current?.scrollBy({ left: direction * Math.min(420, window.innerWidth * 0.8), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  return (
    <div className="carousel">
      <div className="carousel-track" ref={track} aria-label={label}>{children}</div>
      <div className="carousel-controls">
        <button type="button" onClick={() => move(-1)} disabled={position.start} aria-label={`Previous ${label}`}><ArrowLeft size={18} aria-hidden="true" /></button>
        <button type="button" onClick={() => move(1)} disabled={position.end} aria-label={`Next ${label}`}><ArrowRight size={18} aria-hidden="true" /></button>
      </div>
    </div>
  );
}
