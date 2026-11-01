import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thudugala Quarry Aggregates | RR Construction (Pvt) Ltd',
  description: 'RR Construction\'s Thudugala quarry delivers quality crushed rock and aggregate for construction projects — supporting infrastructure development across Sri Lanka.',
  keywords: ["Thudugala Quarry Sri Lanka", "Quarry Aggregates Sri Lanka", "RR Construction Thudugala", "Crushed Rock Thudugala"],
  alternates: {
    canonical: '/resources/aggregates/thudugala',
  },
  openGraph: {
    title: 'Thudugala Quarry Aggregates | RR Construction (Pvt) Ltd',
    description: 'RR Construction\'s Thudugala quarry delivers quality crushed rock and aggregate for construction projects — supporting infrastructure development across Sri Lanka.',
    url: 'https://www.rrconstruction.lk/resources/aggregates/thudugala',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
