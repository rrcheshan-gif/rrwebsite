import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dredging Company in Sri Lanka | Dredging & Reclamation Services | RR Construction',
  description: 'RR Construction is a dredging company in Sri Lanka providing marine dredging, harbour dredging, land reclamation and coastal heavy civil engineering services.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/dredging-reclamation' },
  openGraph: {
    title: 'Dredging Company in Sri Lanka | RR Construction',
    description: 'Marine dredging, harbour dredging, and land reclamation services in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/dredging-reclamation',
    type: 'website'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Marine Dredging and Land Reclamation in Sri Lanka',
    'description': 'Marine dredging, harbour dredging, and land reclamation services in Sri Lanka.',
    'provider': {
      '@type': 'Organization',
      'name': 'RR Construction (Pvt) Ltd',
      'url': 'https://www.rrconstruction.lk'
    },
    'areaServed': { '@type': 'Country', 'name': 'Sri Lanka' },
    'url': 'https://www.rrconstruction.lk/services/dredging-reclamation'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rrconstruction.lk' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rrconstruction.lk/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Dredging & Reclamation', 'item': 'https://www.rrconstruction.lk/services/dredging-reclamation' }
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
