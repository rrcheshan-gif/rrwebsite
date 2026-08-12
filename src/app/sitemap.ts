import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rrcon.company';

  const routes = [
    '',
    '/construction-companies-in-sri-lanka',
    '/about',
    '/about/company-overview',
    '/about/history',
    '/about/vision-mission',
    '/about/core-values',
    '/about/key-policies',
    '/about/leadership',
    '/about/cida-registration',
    '/services',
    '/services/highway-road-construction',
    '/services/bridge-construction',
    '/services/maritime-harbour-engineering',
    '/services/irrigation-water-supply',
    '/services/landslide-disaster-mitigation',
    '/services/railway-infrastructure',
    '/services/building-construction',
    '/services/heavy-machinery-rental',
    '/services/aggregate-material-supply',
    '/projects',
    '/ongoing',
    '/news',
    '/people',
    '/training',
    '/career',
    '/sustainability',
    '/sustainability/environmental-stewardship',
    '/sustainability/health-and-safety',
    '/sustainability/quality-management',
    '/sustainability/social-responsibility',
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
    priority: route === '' ? 1 : (route === '/services' || route === '/projects' || route === '/quarries-aggregates' || route === '/contact' || route === '/construction-companies-in-sri-lanka') ? 0.9 : 0.8,
  }));
}
