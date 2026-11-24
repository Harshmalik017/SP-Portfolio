import type { Metadata } from 'next';
import { Trophy } from 'lucide-react';
import PageHeading from '../../components/PageHeading';
import { CaseStudyCard, MetricCard } from '../../components/PortfolioCards';
import { cases, metrics } from '../../data/resume';

export const metadata: Metadata = { title: 'Impact' };

export default function ImpactPage() {
  return <div className="route-page page-enter">
    <PageHeading icon={Trophy} eyebrow="Selected outcomes" title="Progress you can measure in people and systems." description="Highlights from testing, treatment adherence, quality improvement, capacity building, and state-level partnerships." tone="orange" />
    <div className="all-metrics-grid">{metrics.map((metric, index) => <MetricCard metric={metric} index={index} key={metric.label} />)}</div>
    <section className="case-section"><p className="section-kicker">Behind the numbers</p><h2>Selected case studies</h2><div className="case-detail-grid">{cases.map((item, index) => <CaseStudyCard item={item} index={index} detailed key={item.title} />)}</div></section>
  </div>;
}
