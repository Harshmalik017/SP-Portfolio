import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, Download, GraduationCap, HeartPulse, Sparkles, Trophy, Wrench } from 'lucide-react';
import Carousel from '../components/Carousel';
import { CaseStudyCard, ExpertiseCard, MetricCard, StatCard } from '../components/PortfolioCards';
import SectionHeading from '../components/SectionHeading';
import SkillCloud from '../components/SkillCloud';
import { expertise, experience, metrics, cases, profile, education, skills } from '../data/resume';

const statCards = [
  Briefcase,
  HeartPulse,
  Trophy,
  Sparkles,
];
const featuredStats = [
  { value: '10+', label: 'Years of experience' },
  { value: '6', label: 'Core organisations' },
  { value: '52K', label: 'ASHA workers reached' },
  { value: '134', label: 'Oxygen plants supported' },
];

export default function Home() {
  return (
    <div className="dashboard page-enter">
      <section className="hero-panel glass-card">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="profile-photo"><Image src="/images/profile.webp" alt={profile.name} width={180} height={180} priority /></div>
        <p className="hero-kicker"><span /> Public health. Quality. Stronger systems.</p>
        <h1>{profile.name}</h1>
        <p className="hero-title">Public Health Strategist &amp; Health Systems Leader</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <Link className="button primary-button" href="/experience">Explore my experience <ArrowRight size={16} /></Link>
          <a className="button secondary-button" href={profile.resume} download><Download size={16} /> Download CV</a>
          <Link className="button ghost-button" href="/contact">Let&apos;s connect</Link>
        </div>
      </section>

      <section className="stats-grid" aria-label="Career highlights">
        {featuredStats.map((stat, index) => <StatCard {...stat} icon={statCards[index]} index={index} key={stat.label} />)}
      </section>

      <section className="currently-card glass-card">
        <div className="section-badge"><Briefcase size={15} /> Current focus</div>
        <div><h2>Strengthening public health systems at scale</h2><p>{experience[0].role} · {experience[0].org}</p></div>
        <Link href="/experience" className="icon-link">Full experience <ArrowRight size={15} /></Link>
      </section>

      <section className="home-section">
        <SectionHeading icon={Wrench} eyebrow="Core capabilities" title="Expertise that moves health systems forward" action={<Link href="/expertise" className="text-link">All expertise <ArrowRight size={15} /></Link>} />
        <Carousel label="Expertise areas">
          {expertise.slice(0, 6).map(([Icon, title, description], index) => (
            <ExpertiseCard icon={Icon} title={title} description={description} index={index} key={title} />
          ))}
        </Carousel>
      </section>

      <section className="home-section">
        <SectionHeading icon={Trophy} eyebrow="Measurable outcomes" title="Impact beyond the dashboard" action={<Link href="/impact" className="text-link">Explore all impact <ArrowRight size={15} /></Link>} />
        <div className="impact-preview">
          {metrics.slice(0, 4).map((metric, index) => <MetricCard metric={metric} index={index} preview key={metric.label} />)}
        </div>
        <Carousel label="Featured case studies">
          {cases.map((item, index) => <CaseStudyCard item={item} index={index} key={item.title} />)}
        </Carousel>
      </section>

      <div className="home-lower-grid">
        <section className="glass-card compact-card">
          <div className="compact-heading"><span className="card-icon icon-violet"><GraduationCap size={21} /></span><div><p>Education</p><h2>Learning that shapes leadership</h2></div></div>
          <ul className="education-preview">{education.slice(0, 3).map(([degree, school, date]) => <li key={degree}><time>{date.split('–')[0]}</time><div><h3>{degree}</h3><p>{school}</p></div></li>)}</ul>
          <Link href="/education" className="text-link">Education &amp; qualifications <ArrowRight size={15} /></Link>
        </section>
        <section className="glass-card compact-card">
          <div className="compact-heading"><span className="card-icon icon-mint"><Sparkles size={21} /></span><div><p>Toolkit</p><h2>Skills, languages &amp; methods</h2></div></div>
          <SkillCloud items={skills} />
          <Link href="/expertise" className="text-link">See how I use these skills <ArrowRight size={15} /></Link>
        </section>
      </div>
    </div>
  );
}
