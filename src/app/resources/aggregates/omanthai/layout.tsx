import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Omanthai Quarry Aggregates | RR Construction (Pvt) Ltd',
  description: 'RR Construction\'s Omanthai quarry supplies high-quality crushed aggregates for construction and infrastructure projects in Northern Sri Lanka.',
  keywords: ["Omanthai Quarry Sri Lanka", "Quarry Northern Sri Lanka", "Aggregate Omanthai", "RR Construction Omanthai"],
  alternates: {
    canonical: '/resources/aggregates/omanthai',
  },
  openGraph: {
    title: 'Omanthai Quarry Aggregates | RR Construction (Pvt) Ltd',
    description: 'RR Construction\'s Omanthai quarry supplies high-quality crushed aggregates for construction and infrastructure projects in Northern Sri Lanka.',
    url: 'https://www.rrconstruction.lk/resources/aggregates/omanthai',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
