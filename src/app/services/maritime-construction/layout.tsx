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
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Maritime Construction in Sri Lanka',
    'description': 'Expert maritime construction, harbour development, and marine civil engineering in Sri Lanka.',
    'provider': {
      '@type': 'Organization',
      'name': 'RR Construction (Pvt) Ltd',
      'url': 'https://www.rrconstruction.lk'
    },
    'areaServed': { '@type': 'Country', 'name': 'Sri Lanka' },
    'url': 'https://www.rrconstruction.lk/services/maritime-construction'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rrconstruction.lk' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rrconstruction.lk/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Maritime Construction', 'item': 'https://www.rrconstruction.lk/services/maritime-construction' }
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
