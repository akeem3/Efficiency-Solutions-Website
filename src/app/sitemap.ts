import { MetadataRoute } from 'next';
import { env } from '@/env';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/terms',
    '/services/branding',
    '/services/logistics',
    '/services/accounting',
    '/services/tailoring',
    '/services/digital',
  ].map((route) => ({
    url: `${env.NEXT_PUBLIC_SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
