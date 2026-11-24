import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Contact from './Contact';
import Brand from './Brand';
import { profile } from '../data/resume';
import { navigationLinks } from '../lib/navigation';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-main">
        <div className="footer-intro">
          <Brand footer />
          <p>Strengthening health systems, quality of care, and public health programs through evidence, partnerships, and practical delivery.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-label">Explore</p>
          {navigationLinks.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="footer-contact">
          <p className="footer-label">Connect</p>
          <Contact emailB64={profile.emailB64} phoneB64={profile.phoneB64} />
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> LinkedIn <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="site-width footer-bottom">
        <span>Public health · Systems · Quality improvement</span>
        <p>© {new Date().getFullYear()} <a href="https://www.linkedin.com/in/harshmalik017" target="_blank" rel="noopener noreferrer">Developer Details</a>, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
