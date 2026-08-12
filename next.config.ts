import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/about/history-milestones',
        destination: '/about/history',
        permanent: true,
      },
      {
        source: '/about/vision-mission-values',
        destination: '/about/vision-mission',
        permanent: true,
      },
      {
        source: '/about/core-values',
        destination: '/about/vision-mission',
        permanent: true,
      },
      {
        source: '/about/policies-certifications',
        destination: '/about/key-policies',
        permanent: true,
      },
      {
        source: '/about/key-data',
        destination: '/about/company-overview',
        permanent: true,
      },
      {
        source: '/about/goals-targets',
        destination: '/about/company-overview',
        permanent: true,
      },
      {
        source: '/awards',
        destination: '/about/awards',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about/company-overview',
        permanent: false,
      }
    ];
  },
};
export default nextConfig;
