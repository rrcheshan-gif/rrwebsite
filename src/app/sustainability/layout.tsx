import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Sustainability & HSE | RR Construction (Pvt) Ltd',
  description: 'Our commitment to environmental sustainability, health, and safety on all heavy civil engineering construction sites across Sri Lanka.',
  alternates: { canonical: 'https://www.rrconstruction.lk/sustainability' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
