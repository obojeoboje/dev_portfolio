import type { MetadataRoute } from 'next';
import { cases } from '@/data/cases';

const BASE_URL = 'https://privalov.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const casePages = cases.map((c) => ({
    url: `${BASE_URL}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const servicePages = [
    'telegram-bots',
    'web-development',
    'automation',
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...casePages,
    ...servicePages,
  ];
}
