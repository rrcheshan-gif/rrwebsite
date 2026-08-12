import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rrcon.company';

  const routes: { path: string; priority: number; freq: 'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never' }[] = [
    // Core
    { path: '',                                            priority: 1.0, freq: 'weekly' },
    { path: '/construction-companies-in-sri-lanka',        priority: 0.9, freq: 'monthly' },
    // About
    { path: '/about/company-overview',                     priority: 0.8, freq: 'monthly' },
    { path: '/about/history',                              priority: 0.7, freq: 'monthly' },
    { path: '/about/leadership',                           priority: 0.7, freq: 'monthly' },
    { path: '/about/vision-mission',                       priority: 0.7, freq: 'monthly' },
    { path: '/about/key-policies',                         priority: 0.7, freq: 'monthly' },
    { path: '/about/cida-registration',                    priority: 0.8, freq: 'monthly' },
    { path: '/about/awards',                               priority: 0.6, freq: 'monthly' },
    // Services Hub
    { path: '/services',                                   priority: 0.9, freq: 'monthly' },
    // Service Sub-Pages (SEO targeted)
    { path: '/services/road-construction',                 priority: 0.9, freq: 'monthly' },
    { path: '/services/bridge-construction',               priority: 0.9, freq: 'monthly' },
    { path: '/services/maritime-construction',             priority: 0.9, freq: 'monthly' },
    { path: '/services/dredging-reclamation',              priority: 0.8, freq: 'monthly' },
    { path: '/services/water-infrastructure',              priority: 0.8, freq: 'monthly' },
    { path: '/services/landslide-mitigation',              priority: 0.8, freq: 'monthly' },
    // Products (SEO targeted)
    { path: '/asphalt',                                    priority: 0.9, freq: 'monthly' },
    { path: '/products/m-sand',                            priority: 0.9, freq: 'monthly' },
    { path: '/products/aggregates',                        priority: 0.9, freq: 'monthly' },
    // Quarry Plant Detail Pages
    { path: '/quarries-aggregates',                        priority: 0.8, freq: 'monthly' },
    { path: '/thudugala-plant',                            priority: 0.7, freq: 'monthly' },
    { path: '/veerapuram-plant',                           priority: 0.7, freq: 'monthly' },
    { path: '/omanthai-plant',                             priority: 0.7, freq: 'monthly' },
    { path: '/yakawewa-plant',                             priority: 0.7, freq: 'monthly' },
    // Projects
    { path: '/projects',                                   priority: 0.9, freq: 'monthly' },
    { path: '/ongoing',                                    priority: 0.8, freq: 'weekly' },
    // Sustainability
    { path: '/sustainability',                             priority: 0.7, freq: 'monthly' },
    { path: '/sustainability/environmental-stewardship',   priority: 0.6, freq: 'monthly' },
    { path: '/sustainability/health-and-safety',           priority: 0.6, freq: 'monthly' },
    { path: '/sustainability/quality-management',          priority: 0.6, freq: 'monthly' },
    { path: '/sustainability/social-responsibility',       priority: 0.6, freq: 'monthly' },
    // People & Career
    { path: '/people',                                     priority: 0.6, freq: 'monthly' },
    { path: '/training',                                   priority: 0.6, freq: 'monthly' },
    { path: '/career',                                     priority: 0.7, freq: 'weekly' },
    { path: '/welfare',                                    priority: 0.5, freq: 'monthly' },
    // Other
    { path: '/quality-policy',                             priority: 0.6, freq: 'monthly' },
    { path: '/news',                                       priority: 0.7, freq: 'weekly' },
    { path: '/contact',                                    priority: 0.8, freq: 'monthly' },
  ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}

