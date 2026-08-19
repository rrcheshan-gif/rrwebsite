import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Our People & Board of Directors | RR Construction (Pvt) Ltd',
  description: 'Meet the dedicated leadership team and skilled professionals driving RR Constructions civil engineering success in Sri Lanka.',
  alternates: { canonical: 'https://www.rrconstruction.lk/people' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
