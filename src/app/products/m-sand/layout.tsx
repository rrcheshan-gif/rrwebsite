import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M-Sand & Manufactured Sand in Sri Lanka | RR Construction',
  description: 'RR Construction produces M-Sand (manufactured sand) in Sri Lanka using advanced VSI crusher technology at our quarry plants for high-quality construction applications.',
  alternates: { canonical: 'https://www.rrcon.company/products/m-sand' },
  openGraph: {
    title: 'M-Sand Production in Sri Lanka | RR Construction',
    description: 'Manufactured sand (M-Sand) production for construction in Sri Lanka.',
    url: 'https://www.rrcon.company/products/m-sand',
    type: 'website'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
