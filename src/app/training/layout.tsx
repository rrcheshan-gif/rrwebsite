import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Training & Development | RR Construction (Pvt) Ltd',
  description: 'How RR Construction invests in continuous training and skill development for our civil engineering workforce in Sri Lanka.',
  alternates: { canonical: 'https://rrwebsite-xi.vercel.app/training' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
