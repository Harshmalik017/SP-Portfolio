import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="error-card glass-card">
      <span className="page-icon"><Compass size={24} /></span>
      <p className="section-kicker">404 · Page Not Found</p>
      <h1>This page isn’t in the portfolio.</h1>
      <p>Return home or use the navigation to explore Sumit’s experience, expertise, impact, education, and contact details.</p>
      <Link href="/" className="button primary-button"><ArrowLeft size={16} /> Back to Home</Link>
    </section>
  );
}
