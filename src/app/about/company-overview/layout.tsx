import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RR Construction | Company Overview',
  description: 'Learn about the legacy, engineering capabilities, and corporate story of RR Construction (Pvt) Ltd, a leading civil engineering company in Sri Lanka.',
  alternates: {
    canonical: 'https://www.rrcon.company/about/company-overview'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
