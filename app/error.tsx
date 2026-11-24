'use client';

import { RotateCcw, TriangleAlert } from 'lucide-react';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="error-card glass-card" role="alert">
      <span className="page-icon"><TriangleAlert size={24} /></span>
      <p className="section-kicker">Something Went Wrong</p>
      <h1>The page couldn’t load.</h1>
      <p>Try loading this page again. Your portfolio content and resume download remain available from the main navigation.</p>
      <button type="button" className="button primary-button" onClick={reset}><RotateCcw size={16} /> Try Again</button>
    </section>
  );
}
