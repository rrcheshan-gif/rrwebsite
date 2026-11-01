import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transportation & Civil Infrastructure | RR Construction (Pvt) Ltd',
  description: 'RR Construction develops major transportation and civil infrastructure projects across Sri Lanka — roads, interchanges, overpasses, and integrated transport systems.',
  keywords: ["Transportation Infrastructure Sri Lanka", "Civil Infrastructure Sri Lanka", "Road Infrastructure Sri Lanka", "Interchange Construction Sri Lanka", "RR Construction Infrastructure"],
  alternates: {
    canonical: '/services/transportation-civil-infrastructure',
  },
  openGraph: {
    title: 'Transportation & Civil Infrastructure | RR Construction (Pvt) Ltd',
    description: 'RR Construction develops major transportation and civil infrastructure projects across Sri Lanka — roads, interchanges, overpasses, and integrated transport systems.',
    url: 'https://www.rrconstruction.lk/services/transportation-civil-infrastructure',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
