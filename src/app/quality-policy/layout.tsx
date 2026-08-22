import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Quality Policy | RR Construction (Pvt) Ltd',
  description: 'RR Constructions strict Quality Policy ensuring the highest standards of construction and heavy civil engineering services in Sri Lanka.',
  alternates: { canonical: 'https://www.rrconstruction.lk/quality-policy' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
