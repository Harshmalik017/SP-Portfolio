import type { LucideIcon } from 'lucide-react';

type PageHeadingProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  tone?: 'blue' | 'mint' | 'violet' | 'orange';
};

export default function PageHeading({ icon: Icon, eyebrow, title, description, tone = 'blue' }: PageHeadingProps) {
  return (
    <header className={`page-heading card-${tone}`}>
      <span className="page-icon" aria-hidden="true"><Icon size={24} /></span>
      <p className="page-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </header>
  );
}
