import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Road Construction in Sri Lanka | RR Construction',
  description: 'RR Construction provides expert road and highway construction in Sri Lanka. Services include highway construction, road rehabilitation, asphalt paving, earthworks, and drainage across all provinces.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/road-construction' },
  openGraph: {
    title: 'Road Construction in Sri Lanka | RR Construction',
    description: 'Expert road and highway construction, rehabilitation, and asphalt paving services in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/road-construction',
    type: 'website'
  }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
