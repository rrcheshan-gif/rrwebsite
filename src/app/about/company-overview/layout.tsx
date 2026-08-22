import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Construction Company in Sri Lanka | RR Construction',
  description: 'RR Construction is a leading Tier-1 heavy civil engineering and construction company in Sri Lanka. We excel in highway construction, bridges, and infrastructure development.',
  keywords: ["top construction company in Sri Lanka", "heavy civil engineering company Sri Lanka", "infrastructure development Sri Lanka", "best construction contractors Sri Lanka"],
  alternates: {
    canonical: 'https://www.rrconstruction.lk/about/company-overview'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
