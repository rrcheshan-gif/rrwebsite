import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rrconstruction.lk';

  const routes: { path: string; priority: number; freq: 'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never' }[] = [
    // Core
    { path: '',                                                          priority: 1.0, freq: 'weekly' },
    // About
    { path: '/about/company-overview',                                   priority: 0.9, freq: 'monthly' },
    { path: '/about/history',                                            priority: 0.7, freq: 'monthly' },
    { path: '/about/our-management',                                     priority: 0.7, freq: 'monthly' },
    { path: '/about/vision-mission',                                     priority: 0.7, freq: 'monthly' },
    { path: '/about/goals-and-targets',                                  priority: 0.6, freq: 'monthly' },
    { path: '/about/awards',                                             priority: 0.6, freq: 'monthly' },
    { path: '/about/key-data',                                           priority: 0.6, freq: 'monthly' },
    // Services
    { path: '/services',                                                 priority: 0.9, freq: 'monthly' },
    { path: '/services/highway-and-expressway-construction',             priority: 0.9, freq: 'monthly' },
    { path: '/services/bridge-construction',                             priority: 0.9, freq: 'monthly' },
    { path: '/services/maritime-construction',                           priority: 0.9, freq: 'monthly' },
    { path: '/services/dredging-and-water-infrastructure',               priority: 0.8, freq: 'monthly' },
    { path: '/services/landslide-mitigation',                            priority: 0.8, freq: 'monthly' },
    { path: '/services/piling-and-foundation-engineering',               priority: 0.8, freq: 'monthly' },
    { path: '/services/buildings-structures',                            priority: 0.8, freq: 'monthly' },
    { path: '/services/railway-civil-works',                             priority: 0.8, freq: 'monthly' },
    { path: '/services/research-development',                            priority: 0.7, freq: 'monthly' },
    { path: '/services/transportation-civil-infrastructure',             priority: 0.8, freq: 'monthly' },
    // Materials
    { path: '/materials/asphalt',                                        priority: 0.8, freq: 'monthly' },
    { path: '/materials/m-sand',                                         priority: 0.8, freq: 'monthly' },
    { path: '/materials/aggregates',                                     priority: 0.8, freq: 'monthly' },
    // Resources
    { path: '/resources',                                                priority: 0.7, freq: 'monthly' },
    { path: '/resources/asphalt',                                        priority: 0.7, freq: 'monthly' },
    { path: '/resources/concrete',                                       priority: 0.7, freq: 'monthly' },
    { path: '/resources/aggregates',                                     priority: 0.7, freq: 'monthly' },
    { path: '/resources/aggregates/omanthai',                            priority: 0.6, freq: 'monthly' },
    { path: '/resources/aggregates/thudugala',                           priority: 0.6, freq: 'monthly' },
    { path: '/resources/aggregates/veerapuram',                          priority: 0.6, freq: 'monthly' },
    { path: '/resources/request-order',                                  priority: 0.7, freq: 'monthly' },
    // Projects
    { path: '/projects',                                                 priority: 0.9, freq: 'monthly' },
    { path: '/projects/ongoing',                                         priority: 0.8, freq: 'weekly' },
    { path: '/projects/overseas',                                        priority: 0.7, freq: 'monthly' },
    // Sustainability
    { path: '/sustainability',                                           priority: 0.7, freq: 'monthly' },
    { path: '/sustainability/environmental-stewardship',                 priority: 0.6, freq: 'monthly' },
    { path: '/sustainability/health-and-safety',                         priority: 0.6, freq: 'monthly' },
    { path: '/sustainability/quality-management',                        priority: 0.6, freq: 'monthly' },
    { path: '/sustainability/social-responsibility',                     priority: 0.6, freq: 'monthly' },
    // People & Career
    { path: '/people',                                                   priority: 0.6, freq: 'monthly' },
    { path: '/training',                                                 priority: 0.6, freq: 'monthly' },
    { path: '/career',                                                   priority: 0.7, freq: 'weekly' },
    { path: '/welfare',                                                  priority: 0.5, freq: 'monthly' },
    // Other
    { path: '/quality-policy',                                           priority: 0.6, freq: 'monthly' },
    { path: '/news',                                                     priority: 0.7, freq: 'weekly' },
    { path: '/contact',                                                  priority: 0.8, freq: 'monthly' },
  ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}
