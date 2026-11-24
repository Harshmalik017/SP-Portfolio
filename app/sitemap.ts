import { siteUrl } from '../lib/site';
import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/experience', '/expertise', '/impact', '/education', '/contact'].map((path) => ({
    url: `${siteUrl()}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
