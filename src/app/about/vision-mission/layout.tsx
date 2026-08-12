import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'RR Construction | Vision, Mission & Values',
  description: 'Our vision and mission as a premier construction and civil engineering enterprise building Sri Lankas infrastructure.',
  alternates: { canonical: 'https://www.rrcon.company/about/vision-mission' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
