import type { Metadata } from 'next';
import { Trophy } from 'lucide-react';
import PageHeading from '../../components/PageHeading';
import Counter from '../../components/Counter';
import { cases, metrics } from '../../data/resume';

export const metadata: Metadata = { title: 'Impact' };

export default function ImpactPage() {
  return <div className="route-page page-enter">
    <PageHeading icon={Trophy} eyebrow="Selected outcomes" title="Progress you can measure in people and systems." description="Highlights from testing, treatment adherence, quality improvement, capacity building, and state-level partnerships." tone="orange" />
    <div className="all-metrics-grid">{metrics.map((metric, index) => <article className={`all-metric-card impact-${(index % 4) + 1}`} key={metric.label}><small>{metric.from != null ? `From ${metric.from.toLocaleString('en-US')}${metric.suffix || ''}` : 'Program impact'}</small><strong><Counter to={metric.to} from={metric.from} suffix={metric.suffix} /></strong><p>{metric.label}</p></article>)}</div>
    <section className="case-section"><p className="section-kicker">Behind the numbers</p><h2>Selected case studies</h2><div className="case-detail-grid">{cases.map(({ icon: Icon, ...item }, index) => <article className={`case-detail color-${index + 1}`} key={item.title}><div className="case-top"><span><Icon size={24} /></span><small>Case 0{index + 1}</small></div><h3>{item.title}</h3><dl><div><dt>Focus</dt><dd>{item.focus}</dd></div><div><dt>What I did</dt><dd>{item.action}</dd></div><div className="outcome"><dt>Result</dt><dd>{item.result}</dd></div></dl></article>)}</div></section>
  </div>;
}
