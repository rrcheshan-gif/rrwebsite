import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Overseas Projects | RR Construction (Pvt) Ltd',
  description: 'RR Construction (Pvt) Ltd has extended its engineering expertise beyond Sri Lanka — delivering overseas construction and civil engineering projects with the same standard of excellence.',
  keywords: ["RR Construction Overseas Projects", "International Construction Sri Lanka", "Civil Engineering International", "RR Construction Foreign Projects"],
  alternates: {
    canonical: '/projects/overseas',
  },
  openGraph: {
    title: 'Overseas Projects | RR Construction (Pvt) Ltd',
    description: 'RR Construction (Pvt) Ltd has extended its engineering expertise beyond Sri Lanka — delivering overseas construction and civil engineering projects with the same standard of excellence.',
    url: 'https://www.rrconstruction.lk/projects/overseas',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
