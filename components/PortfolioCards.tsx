import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Award, GraduationCap, MapPin, Briefcase } from 'lucide-react';
import type { ReactNode } from 'react';
import type { CaseStudy, Education, Experience, Metric } from '../data/resume';
import { cardTone, colorTone } from '../lib/tone';
import Counter from './Counter';

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
};

export function StatCard({ icon: Icon, value, label, index }: StatCardProps) {
  return (
    <article className={`stat-card card-${cardTone(index)}`}>
      <Icon size={22} aria-hidden="true" />
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

type ExpertiseCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  detailed?: boolean;
};

export function ExpertiseCard({ icon: Icon, title, description, index, detailed = false }: ExpertiseCardProps) {
  const content = (
    <>
      <span className="feature-icon"><Icon size={detailed ? 24 : 23} aria-hidden="true" /></span>
      {detailed && <small>Capability {String(index + 1).padStart(2, '0')}</small>}
      {detailed ? <h2>{title}</h2> : <h3>{title}</h3>}
      <p>{description}</p>
      {!detailed && <span className="card-arrow"><ArrowRight size={17} aria-hidden="true" /></span>}
    </>
  );
  const className = `${detailed ? 'expertise-detail-card' : 'feature-card'} color-${colorTone(index)}`;

  return detailed
    ? <article className={className}>{content}</article>
    : <Link href="/expertise" className={className}>{content}</Link>;
}

type MetricCardProps = {
  metric: Metric;
  index: number;
  preview?: boolean;
};

export function MetricCard({ metric, index, preview = false }: MetricCardProps) {
  return (
    <article className={`${preview ? 'impact-card glass-card' : 'all-metric-card'} impact-${(index % 4) + 1}`}>
      {preview
        ? <p>{metric.from != null ? `From ${metric.from.toLocaleString('en-US')}${metric.suffix || ''}` : 'At a glance'}</p>
        : <small>{metric.from != null ? `From ${metric.from.toLocaleString('en-US')}${metric.suffix || ''}` : 'Program impact'}</small>}
      <strong><Counter to={metric.to} from={metric.from} suffix={metric.suffix} /></strong>
      {preview ? <h3>{metric.label}</h3> : <p>{metric.label}</p>}
    </article>
  );
}

type CaseStudyCardProps = {
  item: CaseStudy;
  index: number;
  detailed?: boolean;
};

export function CaseStudyCard({ item: { icon: Icon, title, focus, action, result }, index, detailed = false }: CaseStudyCardProps) {
  if (!detailed) {
    return (
      <article className={`case-preview color-${colorTone(index)}`}>
        <Icon size={24} aria-hidden="true" />
        <p>Case study {String(index + 1).padStart(2, '0')}</p>
        <h3>{title}</h3>
        <span>{result}</span>
        <Link href="/impact">View case study <ArrowRight size={15} aria-hidden="true" /></Link>
      </article>
    );
  }

  return (
    <article className={`case-detail color-${colorTone(index)}`}>
      <div className="case-top">
        <span><Icon size={24} aria-hidden="true" /></span>
        <small>Case {String(index + 1).padStart(2, '0')}</small>
      </div>
      <h3>{title}</h3>
      <dl>
        <div><dt>Focus</dt><dd>{focus}</dd></div>
        <div><dt>What I did</dt><dd>{action}</dd></div>
        <div className="outcome"><dt>Result</dt><dd>{result}</dd></div>
      </dl>
    </article>
  );
}

type ExperienceCardProps = {
  item: Experience;
  index: number;
};

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <article className={`experience-card glass-card experience-${(index % 4) + 1}`}>
      <div className="experience-number">{String(index + 1).padStart(2, '0')}</div>
      <div className="experience-date">
        <Briefcase size={17} aria-hidden="true" />
        <time>{item.date}</time>
        <span><MapPin size={14} aria-hidden="true" />{item.place}</span>
      </div>
      <div>
        <h2>{item.role}</h2>
        <p className="organisation">{item.org}</p>
        <ul>{item.pts.map((point) => <li key={point}>{point}</li>)}</ul>
      </div>
    </article>
  );
}

type EducationCardProps = {
  item: Education;
  index: number;
};

export function EducationCard({ item: [degree, school, date, note], index }: EducationCardProps) {
  return (
    <article className={`education-detail glass-card education-${(index % 3) + 1}`}>
      <span><GraduationCap size={24} aria-hidden="true" /></span>
      <time>{date}</time>
      <h2>{degree}</h2>
      {school && <p>{school}</p>}
      {note && <strong><Award size={14} aria-hidden="true" />{note}</strong>}
    </article>
  );
}

type ContactCardProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  index: number;
};

export function ContactCard({ icon: Icon, title, children, index }: ContactCardProps) {
  return (
    <article className={`contact-option card-${cardTone(index)}`}>
      <Icon size={25} aria-hidden="true" />
      <h2>{title}</h2>
      {children}
    </article>
  );
}
