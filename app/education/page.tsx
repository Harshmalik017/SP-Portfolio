import type { Metadata } from 'next';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import PageHeading from '../../components/PageHeading';
import { education, skills } from '../../data/resume';

export const metadata: Metadata = { title: 'Education' };

export default function EducationPage() {
  return <div className="route-page page-enter">
    <PageHeading icon={GraduationCap} eyebrow="Education & learning" title="A foundation across pharmacy, public health, and global health management." description="Academic training and certifications that support technical decisions, program leadership, and international health strategy." tone="violet" />
    <div className="education-card-grid">{education.map(([degree, school, date, note], index) => <article className={`education-detail glass-card education-${(index % 3) + 1}`} key={degree}><span><GraduationCap size={24} /></span><time>{date}</time><h2>{degree}</h2>{school && <p>{school}</p>}{note && <strong><Award size={14} />{note}</strong>}</article>)}</div>
    <section className="skills-panel glass-card"><div><p className="section-kicker"><BookOpen size={16} /> Continuous learning</p><h2>Skills and languages</h2><p>Bringing together quantitative tools, field knowledge, and multilingual collaboration.</p></div><div className="skill-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>
  </div>;
}
