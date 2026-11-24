import type { Metadata } from 'next';
import { BookOpen, GraduationCap } from 'lucide-react';
import PageHeading from '../../components/PageHeading';
import { EducationCard } from '../../components/PortfolioCards';
import SkillCloud from '../../components/SkillCloud';
import { education, skills } from '../../data/resume';

export const metadata: Metadata = { title: 'Education' };

export default function EducationPage() {
  return <div className="route-page page-enter">
    <PageHeading icon={GraduationCap} eyebrow="Education & learning" title="A foundation across pharmacy, public health, and global health management." description="Academic training and certifications that support technical decisions, program leadership, and international health strategy." tone="violet" />
    <div className="education-card-grid">{education.map((item, index) => <EducationCard item={item} index={index} key={item[0]} />)}</div>
    <section className="skills-panel glass-card"><div><p className="section-kicker"><BookOpen size={16} /> Continuous learning</p><h2>Skills and languages</h2><p>Bringing together quantitative tools, field knowledge, and multilingual collaboration.</p></div><SkillCloud items={skills} /></section>
  </div>;
}
