import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Infrastructure Construction in Sri Lanka | RR Construction',
  description: 'RR Construction provides water infrastructure construction services in Sri Lanka including water supply systems, water treatment plants, pipelines, drainage, and irrigation works.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/water-infrastructure' },
  openGraph: {
    title: 'Water Infrastructure Construction in Sri Lanka | RR Construction',
    description: 'Expert water supply, treatment plant, and drainage construction services in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/water-infrastructure',
    type: 'website'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Water Infrastructure Construction in Sri Lanka',
    'description': 'Expert water supply, treatment plant, and drainage construction services in Sri Lanka.',
    'provider': {
      '@type': 'Organization',
      'name': 'RR Construction (Pvt) Ltd',
      'url': 'https://www.rrconstruction.lk'
    },
    'areaServed': { '@type': 'Country', 'name': 'Sri Lanka' },
    'url': 'https://www.rrconstruction.lk/services/water-infrastructure'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rrconstruction.lk' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rrconstruction.lk/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Water Infrastructure', 'item': 'https://www.rrconstruction.lk/services/water-infrastructure' }
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
