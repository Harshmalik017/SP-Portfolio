import type { Metadata } from 'next';
import Image from 'next/image';
import { Download, Mail, Phone, ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import Contact from '../../components/Contact';
import { ContactCard } from '../../components/PortfolioCards';
import { profile } from '../../data/resume';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return <div className="contact-page page-enter">
    <section className="contact-hero glass-card"><div><p className="section-kicker"><Mail size={16} /> Start a conversation</p><h1>Let&apos;s work on health systems that work for people.</h1><p>Connect around public health strategy, quality improvement, government partnerships, and implementation support.</p><div className="contact-links"><Contact emailB64={profile.emailB64} phoneB64={profile.phoneB64} /><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile <ArrowUpRight size={16} /></a></div></div><div className="contact-portrait"><Image src="/images/profile.webp" alt={profile.name} width={400} height={400} /><span><BriefcaseBusiness size={17} /> Public Health Strategist</span></div></section>
    <section className="contact-options">
      <ContactCard icon={Mail} title="Partnerships" index={0}><p>Technical support, program design, and implementation discussions.</p></ContactCard>
      <ContactCard icon={Phone} title="Advisory conversations" index={1}><p>Quality improvement, health system strengthening, and M&amp;E.</p></ContactCard>
      <ContactCard icon={Download} title="Full professional profile" index={2}><p>Download the complete CV with experience and qualifications.</p><a className="text-link" href={profile.resume} download>Download PDF</a></ContactCard>
    </section>
  </div>;
}
