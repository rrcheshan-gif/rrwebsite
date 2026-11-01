import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buildings & Structures | RR Construction (Pvt) Ltd',
  description: 'RR Construction delivers high-quality building and structural construction across Sri Lanka — commercial, industrial, and institutional structures built with precision and engineering excellence.',
  keywords: ["Building Construction Sri Lanka", "Structural Construction Sri Lanka", "Commercial Building Sri Lanka", "Industrial Construction Sri Lanka", "RR Construction Buildings"],
  alternates: {
    canonical: '/services/buildings-structures',
  },
  openGraph: {
    title: 'Buildings & Structures | RR Construction (Pvt) Ltd',
    description: 'RR Construction delivers high-quality building and structural construction across Sri Lanka — commercial, industrial, and institutional structures built with precision and engineering excellence.',
    url: 'https://www.rrconstruction.lk/services/buildings-structures',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
