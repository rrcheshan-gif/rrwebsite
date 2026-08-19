import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Water Infrastructure Construction in Sri Lanka | RR Construction',
  description: 'RR Construction provides water infrastructure construction services in Sri Lanka including water supply systems, water treatment plants, pipelines, drainage, and irrigation works.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/water-infrastructure' },
  openGraph: {
    title: 'Water Infrastructure Construction in Sri Lanka | RR Construction',
    description: 'Expert water supply, treatment plant, and drainage construction services in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/water-infrastructure',
    type: 'website'
  }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
