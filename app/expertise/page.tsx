import type { Metadata } from 'next';
import { Layers3, Sparkles } from 'lucide-react';
import PageHeading from '../../components/PageHeading';
import { expertise, skills } from '../../data/resume';

export const metadata: Metadata = { title: 'Expertise' };

export default function ExpertisePage() {
  return <div className="route-page page-enter">
    <PageHeading icon={Layers3} eyebrow="Capabilities" title="The right mix for complex public health challenges." description="Program design, clinical governance, data, partnerships, and frontline implementation—connected in one practical approach." tone="mint" />
    <div className="expertise-detail-grid">
      {expertise.map(([Icon, title, description], index) => <article className={`expertise-detail-card color-${index + 1}`} key={title}><span className="feature-icon"><Icon size={24} /></span><small>Capability {String(index + 1).padStart(2, '0')}</small><h2>{title}</h2><p>{description}</p></article>)}
    </div>
    <section className="skills-panel glass-card"><div><p className="section-kicker"><Sparkles size={16} /> Practical toolkit</p><h2>Tools, methods and languages</h2><p>Technical and communication skills used across policy, implementation, reporting, and field programs.</p></div><div className="skill-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>
  </div>;
}
