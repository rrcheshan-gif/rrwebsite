import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Awards & Certifications | RR Construction (Pvt) Ltd',
  description: 'Discover the industry awards and ISO certifications (9001, 14001, 45001) that highlight RR Constructions commitment to quality in Sri Lanka.',
  alternates: { canonical: 'https://rrwebsite-xi.vercel.app/awards' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
