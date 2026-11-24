import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  action?: ReactNode;
};

export default function SectionHeading({ icon: Icon, eyebrow, title, action }: SectionHeadingProps) {
  return (
    <div className="section-title">
      <div>
        <p className="section-kicker"><Icon size={16} aria-hidden="true" /> {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  );
}
