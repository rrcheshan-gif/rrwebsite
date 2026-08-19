import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asphalt Production & Road Construction in Sri Lanka | RR Construction',
  description: 'RR Construction operates high-capacity asphalt plants in Sri Lanka producing quality hot mix asphalt for national highway and road construction projects.',
  alternates: { canonical: 'https://www.rrconstruction.lk/asphalt' },
  openGraph: {
    title: 'Asphalt Production in Sri Lanka | RR Construction',
    description: 'High-capacity asphalt plant operations and road construction in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/asphalt',
    type: 'website'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
