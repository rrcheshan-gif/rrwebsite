import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bridge Construction Company in Sri Lanka | RR Construction',
  description: 'RR Construction is a leading bridge construction company in Sri Lanka. We build and rehabilitate concrete and steel bridges, overpasses, and river crossings across the island.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/bridge-construction' },
  openGraph: {
    title: 'Bridge Construction Company in Sri Lanka | RR Construction',
    description: 'Expert bridge construction, rehabilitation and structural engineering services in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/bridge-construction',
    type: 'website'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Bridge Construction in Sri Lanka',
    'description': 'Expert bridge construction, rehabilitation and structural engineering services across Sri Lanka.',
    'provider': {
      '@type': 'Organization',
      'name': 'RR Construction (Pvt) Ltd',
      'url': 'https://www.rrconstruction.lk'
    },
    'areaServed': { '@type': 'Country', 'name': 'Sri Lanka' },
    'url': 'https://www.rrconstruction.lk/services/bridge-construction'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rrconstruction.lk' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rrconstruction.lk/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Bridge Construction', 'item': 'https://www.rrconstruction.lk/services/bridge-construction' }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
