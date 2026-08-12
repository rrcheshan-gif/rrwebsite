import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Careers | RR Construction (Pvt) Ltd',
  description: 'Join RR Construction (Pvt) Ltd. Explore exciting career opportunities in civil engineering and construction in Sri Lanka.',
  alternates: { canonical: 'https://rrwebsite-xi.vercel.app/career' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
