import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Railway Civil Works | RR Construction (Pvt) Ltd',
  description: 'RR Construction provides railway civil engineering works in Sri Lanka — track construction, railway bridges, station infrastructure, and associated civil works for rail networks.',
  keywords: ["Railway Construction Sri Lanka", "Railway Civil Works Sri Lanka", "Railway Bridge Sri Lanka", "Rail Infrastructure Sri Lanka", "RR Construction Railway"],
  alternates: {
    canonical: '/services/railway-civil-works',
  },
  openGraph: {
    title: 'Railway Civil Works | RR Construction (Pvt) Ltd',
    description: 'RR Construction provides railway civil engineering works in Sri Lanka — track construction, railway bridges, station infrastructure, and associated civil works for rail networks.',
    url: 'https://www.rrconstruction.lk/services/railway-civil-works',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
