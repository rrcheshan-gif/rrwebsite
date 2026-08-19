import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Landslide Mitigation in Sri Lanka | Geotechnical Engineering | RR Construction',
  description: 'RR Construction provides landslide mitigation and geotechnical engineering services in Sri Lanka including slope stabilization, retaining walls, soil nailing, and rock-fall protection.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/landslide-mitigation' },
  openGraph: {
    title: 'Landslide Mitigation Sri Lanka | RR Construction',
    description: 'Expert landslide mitigation, slope stabilization and geotechnical engineering in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/landslide-mitigation',
    type: 'website'
  }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
