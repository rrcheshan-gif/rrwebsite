import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Dredging Company in Sri Lanka | Dredging & Reclamation Services | RR Construction',
  description: 'RR Construction is a dredging company in Sri Lanka providing marine dredging, harbour dredging, land reclamation and coastal civil engineering services.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/dredging-reclamation' },
  openGraph: {
    title: 'Dredging Company in Sri Lanka | RR Construction',
    description: 'Marine dredging, harbour dredging, and land reclamation services in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/dredging-reclamation',
    type: 'website'
  }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
