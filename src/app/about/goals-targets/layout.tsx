import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Goals & Targets | RR Construction (Pvt) Ltd',
  description: 'Strategic goals and targets driving the future of RR Constructions civil engineering projects in Sri Lanka.',
  alternates: { canonical: 'https://www.rrcon.company/about/goals-targets' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
