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
      { source: '/services/aggregate-material-supply',    destination: '/products/aggregates',           permanent: true },
      // Old quarry/product URLs → New product canonical URLs
      { source: '/quarries-aggregates/aggregates',        destination: '/products/aggregates',           permanent: true },
      { source: '/quarries-aggregates/m-sand',            destination: '/products/m-sand',               permanent: true },
    ];
  },
};
export default nextConfig;
