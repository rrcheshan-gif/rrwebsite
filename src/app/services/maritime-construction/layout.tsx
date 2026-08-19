import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maritime Construction in Sri Lanka | RR Construction',
  description: 'RR Construction delivers maritime and marine construction services in Sri Lanka including harbour construction, breakwaters, dredging, and coastal infrastructure development.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/maritime-construction' },
  openGraph: {
    title: 'Maritime Construction in Sri Lanka | RR Construction',
    description: 'Expert maritime construction, harbour development, and marine civil engineering in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/maritime-construction',
    type: 'website'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) { 
  return <>{children}</>; 
}
