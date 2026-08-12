import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Core Values | RR Construction (Pvt) Ltd',
  description: 'The core values that guide RR Construction: Quality, Integrity, Safety, and Engineering Excellence in Sri Lanka.',
  alternates: { canonical: 'https://www.rrcon.company/about/core-values' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
