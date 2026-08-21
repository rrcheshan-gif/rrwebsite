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

export default function Layout({ children }: { children: React.ReactNode }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Landslide Mitigation and Geotechnical Engineering in Sri Lanka',
    'description': 'Expert landslide mitigation, slope stabilization and geotechnical engineering in Sri Lanka.',
    'provider': {
      '@type': 'Organization',
      'name': 'RR Construction (Pvt) Ltd',
      'url': 'https://www.rrconstruction.lk'
    },
    'areaServed': { '@type': 'Country', 'name': 'Sri Lanka' },
    'url': 'https://www.rrconstruction.lk/services/landslide-mitigation'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rrconstruction.lk' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rrconstruction.lk/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Landslide Mitigation', 'item': 'https://www.rrconstruction.lk/services/landslide-mitigation' }
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
