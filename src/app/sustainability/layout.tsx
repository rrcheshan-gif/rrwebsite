import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sustainability & HSE | RR Construction (Pvt) Ltd',
  description: 'Our commitment to environmental sustainability, health, and safety on all civil engineering construction sites across Sri Lanka.',
  alternates: { canonical: 'https://rrwebsite-xi.vercel.app/sustainability' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
