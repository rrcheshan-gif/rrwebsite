import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Piling & Foundation Engineering Company in Sri Lanka | RR Construction',
  description: 'RR Construction is a leading piling and foundation engineering company in Sri Lanka. We execute deep foundation works, bored piling, and geotechnical stabilization across the island.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/piling-and-foundation-engineering' },
  openGraph: {
    title: 'Piling & Foundation Engineering Company in Sri Lanka | RR Construction',
    description: 'Expert geotechnical foundation engineering and deep piling services in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/piling-and-foundation-engineering',
    type: 'website'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Piling & Foundation Engineering in Sri Lanka',
    'description': 'Expert geotechnical foundation engineering and deep piling services across Sri Lanka.',
    'provider': {
      '@type': 'Organization',
      'name': 'RR Construction (Pvt) Ltd',
      'url': 'https://www.rrconstruction.lk'
    },
    'areaServed': { '@type': 'Country', 'name': 'Sri Lanka' },
    'url': 'https://www.rrconstruction.lk/services/piling-and-foundation-engineering'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rrconstruction.lk' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rrconstruction.lk/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Piling & Foundation Engineering', 'item': 'https://www.rrconstruction.lk/services/piling-and-foundation-engineering' }
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
