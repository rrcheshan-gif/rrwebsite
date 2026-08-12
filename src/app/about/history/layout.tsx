import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Company History | RR Construction (Pvt) Ltd',
  description: 'Learn about the history and journey of RR Construction (Pvt) Ltd, a leading civil engineering company in Sri Lanka since 1995.',
  alternates: { canonical: 'https://www.rrcon.company/about/history' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
