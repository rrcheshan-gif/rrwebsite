import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Aggregates & Quarry Products in Sri Lanka | RR Construction',
  description: 'RR Construction produces crushed stone aggregates and quarry products in Sri Lanka for road construction, concrete production, and civil engineering applications.',
  alternates: { canonical: 'https://www.rrconstruction.lk/materials/aggregates' },
  openGraph: {
    title: 'Aggregates & Quarry Products Sri Lanka | RR Construction',
    description: 'Crushed stone aggregates and quarry products for construction in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/materials/aggregates',
    type: 'website'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

