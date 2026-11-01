import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Key Data & Milestones | RR Construction (Pvt) Ltd',
  description: 'Key facts, figures, and milestones of RR Construction (Pvt) Ltd — showcasing our scale, capacity, and track record in heavy civil engineering and infrastructure across Sri Lanka.',
  keywords: ["RR Construction Key Data", "Construction Statistics Sri Lanka", "Civil Engineering Milestones Sri Lanka", "RR Construction Facts"],
  alternates: {
    canonical: '/about/key-data',
  },
  openGraph: {
    title: 'Key Data & Milestones | RR Construction (Pvt) Ltd',
    description: 'Key facts, figures, and milestones of RR Construction (Pvt) Ltd — showcasing our scale, capacity, and track record in heavy civil engineering and infrastructure across Sri Lanka.',
    url: 'https://www.rrconstruction.lk/about/key-data',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
