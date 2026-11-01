import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veerapuram Quarry Aggregates | RR Construction (Pvt) Ltd',
  description: 'RR Construction\'s Veerapuram quarry provides premium crushed aggregates and construction materials for projects across Sri Lanka.',
  keywords: ["Veerapuram Quarry Sri Lanka", "RR Construction Veerapuram", "Quarry Aggregate Northern Sri Lanka"],
  alternates: {
    canonical: '/resources/aggregates/veerapuram',
  },
  openGraph: {
    title: 'Veerapuram Quarry Aggregates | RR Construction (Pvt) Ltd',
    description: 'RR Construction\'s Veerapuram quarry provides premium crushed aggregates and construction materials for projects across Sri Lanka.',
    url: 'https://www.rrconstruction.lk/resources/aggregates/veerapuram',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
