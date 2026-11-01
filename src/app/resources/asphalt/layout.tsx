import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asphalt Resources | RR Construction (Pvt) Ltd',
  description: 'Technical resources and specifications for asphalt products supplied by RR Construction — for road construction and paving projects across Sri Lanka.',
  keywords: ["Asphalt Technical Data Sri Lanka", "Asphalt Specifications Sri Lanka", "Road Paving Resources Sri Lanka"],
  alternates: {
    canonical: '/resources/asphalt',
  },
  openGraph: {
    title: 'Asphalt Resources | RR Construction (Pvt) Ltd',
    description: 'Technical resources and specifications for asphalt products supplied by RR Construction — for road construction and paving projects across Sri Lanka.',
    url: 'https://www.rrconstruction.lk/resources/asphalt',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
