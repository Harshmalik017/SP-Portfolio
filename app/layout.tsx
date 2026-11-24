import './globals.css';
import '@fontsource-variable/inter';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteUrl } from '../lib/site';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const title = 'Sumit Kumar Pandey | Public Health Strategist';
const description = 'Public health strategist with 10+ years in health systems strengthening, quality improvement and maternal-newborn health across India. View impact, experience and download the resume.';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: title, template: `%s | ${title}` }, description, alternates: { canonical: '/' },
  keywords: ['public health', 'health systems strengthening', 'quality improvement', 'NQAS', 'LaQshya', 'maternal newborn health', 'PM-ABHIM', 'Sumit Kumar Pandey'],
  authors: [{ name: 'Sumit Kumar Pandey' }],
  openGraph: { title, description, type: 'profile', siteName: 'Sumit Kumar Pandey' },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#4F46E5' };

const themeScript = `try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}`;
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Person', name: 'Sumit Kumar Pandey',
  jobTitle: 'Public Health Strategist', url: siteUrl(),
  sameAs: ['https://www.linkedin.com/in/sumitkpandey1/'],
  alumniOf: ['ESCP Business School', 'Indian Institute of Public Health, Gandhinagar'],
  knowsAbout: ['Health systems strengthening', 'Quality improvement', 'Maternal and newborn health', 'Monitoring and evaluation'],
};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="background-blobs" aria-hidden="true" />
        <Nav />
        <main id="main-content" tabIndex={-1} className="site-main site-width">{children}</main>
        <Footer />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics /><SpeedInsights />
      </body>
    </html>
  );
}
