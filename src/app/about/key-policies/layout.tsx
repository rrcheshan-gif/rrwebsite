import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'RR Construction | Policies & Certifications',
  description: 'Health, Safety, and Environmental (HSE) policies, Quality policies, and sustainability commitments of RR Construction.',
  alternates: { canonical: 'https://www.rrcon.company/about/key-policies' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
