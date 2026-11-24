import type { Metadata } from 'next';
import { Briefcase, MapPin } from 'lucide-react';
import Link from 'next/link';
import PageHeading from '../../components/PageHeading';
import { experience } from '../../data/resume';

export const metadata: Metadata = { title: 'Experience' };

export default function ExperiencePage() {
  return <div className="route-page page-enter">
    <PageHeading icon={Briefcase} eyebrow="Career journey" title="Experience that connects policy and practice." description="Six roles across government-embedded technical support units, health systems, academic institutions, and community programs." tone="blue" />
    <div className="experience-list">
      {experience.map((item, index) => <article className={`experience-card glass-card experience-${(index % 4) + 1}`} key={item.role + item.date}><div className="experience-number">{String(index + 1).padStart(2, '0')}</div><div className="experience-date"><Briefcase size={17} /><time>{item.date}</time><span><MapPin size={14} />{item.place}</span></div><div><h2>{item.role}</h2><p className="organisation">{item.org}</p><ul>{item.pts.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}
    </div>
    <div className="route-next glass-card"><p>See what this experience delivered.</p><Link className="button primary-button" href="/impact">Explore impact</Link></div>
  </div>;
}
