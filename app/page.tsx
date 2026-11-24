import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, Download, GraduationCap, HeartPulse, Sparkles, Trophy, Wrench } from 'lucide-react';
import Carousel from '../components/Carousel';
import Counter from '../components/Counter';
import { expertise, experience, metrics, cases, profile, education, skills } from '../data/resume';

const statCards = [
  { className: 'card-blue', icon: Briefcase },
  { className: 'card-mint', icon: HeartPulse },
  { className: 'card-violet', icon: Trophy },
  { className: 'card-orange', icon: Sparkles },
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
        {featuredStats.map((stat, index) => {
          const Icon = statCards[index].icon;
          return <article className={`stat-card ${statCards[index].className}`} key={stat.label}><Icon size={22} /><strong>{stat.value}</strong><span>{stat.label}</span></article>;
        })}
      </section>

      <section className="currently-card glass-card">
        <div className="section-badge"><Briefcase size={15} /> Current focus</div>
        <div><h2>Strengthening public health systems at scale</h2><p>{experience[0].role} · {experience[0].org}</p></div>
        <Link href="/experience" className="icon-link">Full experience <ArrowRight size={15} /></Link>
      </section>

      <section className="home-section">
        <div className="section-title"><div><p className="section-kicker"><Wrench size={16} /> Core capabilities</p><h2>Expertise that moves health systems forward</h2></div><Link href="/expertise" className="text-link">All expertise <ArrowRight size={15} /></Link></div>
        <Carousel label="Expertise areas">
          {expertise.slice(0, 6).map(([Icon, title, description], index) => (
            <Link href="/expertise" className={`feature-card color-${index + 1}`} key={title}><span className="feature-icon"><Icon size={23} /></span><h3>{title}</h3><p>{description}</p><span className="card-arrow"><ArrowRight size={17} /></span></Link>
          ))}
        </Carousel>
      </section>

      <section className="home-section">
        <div className="section-title"><div><p className="section-kicker"><Trophy size={16} /> Measurable outcomes</p><h2>Impact beyond the dashboard</h2></div><Link href="/impact" className="text-link">Explore all impact <ArrowRight size={15} /></Link></div>
        <div className="impact-preview">
          {metrics.slice(0, 4).map((metric, index) => <article className={`impact-card glass-card impact-${index + 1}`} key={metric.label}><p>{metric.from != null ? `From ${metric.from.toLocaleString('en-US')}${metric.suffix || ''}` : 'At a glance'}</p><strong><Counter to={metric.to} from={metric.from} suffix={metric.suffix} /></strong><h3>{metric.label}</h3></article>)}
        </div>
        <Carousel label="Featured case studies">
          {cases.map(({ icon: Icon, ...item }, index) => <article className={`case-preview color-${index + 1}`} key={item.title}><Icon size={24} /><p>Case study 0{index + 1}</p><h3>{item.title}</h3><span>{item.result}</span><Link href="/impact">View case study <ArrowRight size={15} /></Link></article>)}
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
          <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          <Link href="/expertise" className="text-link">See how I use these skills <ArrowRight size={15} /></Link>
        </section>
      </div>
    </div>
  );
}
