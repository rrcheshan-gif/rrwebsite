import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Materials | Asphalt, M-Sand & Aggregates Suppliers Sri Lanka',
  description: 'RR Construction supplies high-quality asphalt, manufactured sand (M-Sand), and crushed rock aggregates across Sri Lanka from our own quarry and plant facilities.',
  alternates: { canonical: 'https://www.rrconstruction.lk/materials' },
  openGraph: {
    title: 'Construction Materials | RR Construction Sri Lanka',
    description: 'Premium asphalt, M-Sand and aggregate supply from RR Construction\'s own production facilities.',
    url: 'https://www.rrconstruction.lk/materials',
  }
};

export default function MaterialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
