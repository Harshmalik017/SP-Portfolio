'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return <button type="button" className={`totop${show ? ' show' : ''}`} tabIndex={show ? 0 : -1} aria-hidden={!show} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}><ArrowUp size={20} aria-hidden="true" /></button>;
}
