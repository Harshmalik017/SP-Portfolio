import type { Metadata } from 'next';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import PageHeading from '../../components/PageHeading';
import { ExperienceCard } from '../../components/PortfolioCards';
import { experience } from '../../data/resume';

export const metadata: Metadata = { title: 'Experience' };

export default function ExperiencePage() {
  return <div className="route-page page-enter">
    <PageHeading icon={Briefcase} eyebrow="Career journey" title="Experience that connects policy and practice." description="Six roles across government-embedded technical support units, health systems, academic institutions, and community programs." tone="blue" />
    <div className="experience-list">
      {experience.map((item, index) => <ExperienceCard item={item} index={index} key={`${item.role}-${item.date}`} />)}
    </div>
    <div className="route-next glass-card"><p>See what this experience delivered.</p><Link className="button primary-button" href="/impact">Explore impact</Link></div>
  </div>;
}
