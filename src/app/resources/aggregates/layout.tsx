import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aggregate Resources | RR Construction (Pvt) Ltd',
  description: 'Technical data and specifications for crushed aggregate products from RR Construction quarries — suitable for base course, concrete, and asphalt production across Sri Lanka.',
  keywords: ["Aggregate Resources Sri Lanka", "Quarry Aggregate Data Sri Lanka", "Crushed Stone Sri Lanka"],
  alternates: {
    canonical: '/resources/aggregates',
  },
  openGraph: {
    title: 'Aggregate Resources | RR Construction (Pvt) Ltd',
    description: 'Technical data and specifications for crushed aggregate products from RR Construction quarries — suitable for base course, concrete, and asphalt production across Sri Lanka.',
    url: 'https://www.rrconstruction.lk/resources/aggregates',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
