import Image from 'next/image';
import Link from 'next/link';
import { profile } from '../data/resume';

type BrandProps = {
  footer?: boolean;
};

export default function Brand({ footer = false }: BrandProps) {
  return (
    <Link href="/" className={footer ? 'footer-brand' : 'brand'} aria-label={`${profile.name} — home`}>
      <Image src="/images/sp-mark.svg" alt="" width={footer ? 58 : 46} height={footer ? 58 : 46} priority={!footer} />
      {footer ? (
        <div><strong>{profile.name}</strong><span>Public Health Strategist</span></div>
      ) : (
        <span>Sumit Pandey<small>Public health · Systems · Quality</small></span>
      )}
    </Link>
  );
}
