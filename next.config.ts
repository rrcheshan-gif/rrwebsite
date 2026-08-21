import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      // Old About URLs → New
      { source: '/about/history-milestones',      destination: '/about/history',          permanent: true },
      { source: '/about/vision-mission-values',   destination: '/about/vision-mission',   permanent: true },
      { source: '/about/core-values',             destination: '/about/vision-mission',   permanent: true },
      { source: '/about/policies-certifications', destination: '/about/key-policies',     permanent: true },
      { source: '/about/key-data',                destination: '/about/company-overview', permanent: true },
      { source: '/about/goals-targets',           destination: '/about/company-overview', permanent: true },
      { source: '/awards',                        destination: '/about/awards',           permanent: true },
      { source: '/about',                         destination: '/about/company-overview', permanent: false },
      // Old Service slug URLs → New keyword-targeted URLs
      { source: '/services/highway-road-construction',    destination: '/services/road-construction',    permanent: true },
      { source: '/services/road-highway-construction',    destination: '/services/road-construction',    permanent: true },
      { source: '/services/maritime-harbour-engineering', destination: '/services/maritime-construction', permanent: true },
      { source: '/services/maritime-construction-sl',     destination: '/services/maritime-construction', permanent: true },
      { source: '/services/irrigation-water-supply',      destination: '/services/water-infrastructure', permanent: true },
      { source: '/services/water-supply-drainage',        destination: '/services/water-infrastructure', permanent: true },
      { source: '/services/irrigation-drainage',          destination: '/services/water-infrastructure', permanent: true },
      { source: '/services/landslide-disaster-mitigation',destination: '/services/landslide-mitigation', permanent: true },
      { source: '/services/disaster-mitigation',          destination: '/services/landslide-mitigation', permanent: true },
      { source: '/services/aggregate-material-supply',    destination: '/materials/aggregates',          permanent: true },
      // Old quarry/product sub-URLs → direct to new canonical URLs (no chain)
      { source: '/quarries-aggregates/aggregates',        destination: '/materials/aggregates',          permanent: true },
      { source: '/quarries-aggregates/m-sand',            destination: '/materials/m-sand',              permanent: true },
      // SEO Phase 2 — Topical Silo Redirects (301 Permanent)
      { source: '/asphalt',                               destination: '/materials/asphalt',             permanent: true },
      { source: '/products/m-sand',                       destination: '/materials/m-sand',              permanent: true },
      { source: '/products/aggregates',                   destination: '/materials/aggregates',          permanent: true },
      { source: '/quarries-aggregates',                   destination: '/facilities',                    permanent: true },
      { source: '/thudugala-plant',                       destination: '/facilities/thudugala-quarry',   permanent: true },
      { source: '/veerapuram-plant',                      destination: '/facilities/veerapuram-asphalt-plant', permanent: true },
      { source: '/omanthai-plant',                        destination: '/facilities/omanthai-quarry',    permanent: true },
      { source: '/yakawewa-plant',                        destination: '/facilities/yakawewa-quarry',    permanent: true },
      { source: '/ongoing',                               destination: '/projects/ongoing',              permanent: true },
      { source: '/construction-companies-in-sri-lanka',   destination: '/about/company-overview',        permanent: true },
    ];
  },
};
export default nextConfig;
