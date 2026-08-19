import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Bridge Construction Company in Sri Lanka | RR Construction',
  description: 'RR Construction is a leading bridge construction company in Sri Lanka. We build and rehabilitate concrete and steel bridges, overpasses, and river crossings across the island.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/bridge-construction' },
  openGraph: {
    title: 'Bridge Construction Company in Sri Lanka | RR Construction',
    description: 'Expert bridge construction, rehabilitation and structural engineering services in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/bridge-construction',
    type: 'website'
  }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
