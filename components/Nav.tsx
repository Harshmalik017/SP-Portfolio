'use client';
import { useEffect, useState } from 'react';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'Home'],
  ['/experience', 'Experience'],
  ['/expertise', 'Expertise'],
  ['/impact', 'Impact'],
  ['/education', 'Education'],
  ['/contact', 'Contact'],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next; setTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  };
  return (
    <header className="nav">
      <div className="nav-in">
        <Link href="/" className="brand" aria-label="Sumit Kumar Pandey — home">
          <Image src="/images/sp-mark.svg" alt="" width={46} height={46} priority />
          <span>Sumit Pandey<small>Public health · Systems · Quality</small></span>
        </Link>
        <nav id="primary-navigation" className={open ? 'links open' : 'links'} aria-label="Primary">
          {links.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? 'on' : ''} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}
        </nav>
        <div className="nav-r">
          <a className="nav-cv" href="/Sumit_Kumar_Pandey_CV.pdf" download aria-label="Download resume PDF"><Download size={15} aria-hidden="true" /> <span>Resume</span></a>
          <button type="button" className="tbtn" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggle}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button type="button" className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}
