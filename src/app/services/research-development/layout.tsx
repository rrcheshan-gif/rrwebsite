import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Development | RR Construction (Pvt) Ltd',
  description: 'RR Construction invests in research and development to drive innovation in civil engineering — advancing construction methods, sustainable materials, and engineering solutions for Sri Lanka.',
  keywords: ["Construction Research Sri Lanka", "Civil Engineering Innovation Sri Lanka", "RR Construction Research", "Engineering R&D Sri Lanka"],
  alternates: {
    canonical: '/services/research-development',
  },
  openGraph: {
    title: 'Research & Development | RR Construction (Pvt) Ltd',
    description: 'RR Construction invests in research and development to drive innovation in civil engineering — advancing construction methods, sustainable materials, and engineering solutions for Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/research-development',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
