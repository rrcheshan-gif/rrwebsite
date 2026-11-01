import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Resources | RR Construction (Pvt) Ltd',
  description: 'Technical resources for concrete products and mix designs from RR Construction — supporting structural and infrastructure projects throughout Sri Lanka.',
  keywords: ["Concrete Resources Sri Lanka", "Concrete Specifications Sri Lanka", "Construction Concrete Sri Lanka"],
  alternates: {
    canonical: '/resources/concrete',
  },
  openGraph: {
    title: 'Concrete Resources | RR Construction (Pvt) Ltd',
    description: 'Technical resources for concrete products and mix designs from RR Construction — supporting structural and infrastructure projects throughout Sri Lanka.',
    url: 'https://www.rrconstruction.lk/resources/concrete',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
