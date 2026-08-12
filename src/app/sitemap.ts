import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rrcon.company';

  const routes = [
    '',
    '/about/history',
    '/about/vision-mission',
    '/about/core-values',
    '/about/key-policies',
    '/about/goals-targets',
    '/about/key-data',
    '/services',
    '/projects',
    '/ongoing',
    '/news',
    '/people',
    '/training',
    '/career',
    '/sustainability',
    '/welfare',
    '/quarries-aggregates',
    '/thudugala-plant',
    '/veerapuram-plant',
    '/omanthai-plant',
    '/yakawewa-plant',
    '/quality-policy',
    '/awards',
    '/contact'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : (route === '/services' || route === '/projects' || route === '/quarries-aggregates' || route === '/contact') ? 0.9 : 0.8,
  }));
}
