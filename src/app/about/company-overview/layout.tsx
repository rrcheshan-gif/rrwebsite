import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RR Construction | RR Overview',
  description: 'Learn about RR Construction\'s history, mission, and comprehensive engineering capabilities across Sri Lanka.',
  alternates: {
    canonical: 'https://www.rrcon.company/about/company-overview'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
