import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Highway and Expressway Construction in Sri Lanka | RR Construction',
  description: 'RR Construction provides expert highway and expressway construction in Sri Lanka. Services include highway construction, highway and expressway rehabilitation, asphalt paving, earthworks, and drainage across all provinces.',
  alternates: { canonical: 'https://www.rrconstruction.lk/services/highway-and-expressway-construction' },
  openGraph: {
    title: 'Highway and Expressway Construction in Sri Lanka | RR Construction',
    description: 'Expert highway and expressway construction, rehabilitation, and asphalt paving services in Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services/highway-and-expressway-construction',
    type: 'website'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Highway and Expressway Construction in Sri Lanka',
    'description': 'Expert highway and expressway construction, rehabilitation, and asphalt paving services across all provinces of Sri Lanka.',
    'provider': {
      '@type': 'Organization',
      'name': 'RR Construction (Pvt) Ltd',
      'url': 'https://www.rrconstruction.lk'
    },
    'areaServed': { '@type': 'Country', 'name': 'Sri Lanka' },
    'url': 'https://www.rrconstruction.lk/services/highway-and-expressway-construction'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rrconstruction.lk' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://www.rrconstruction.lk/services' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Highway and Expressway Construction', 'item': 'https://www.rrconstruction.lk/services/highway-and-expressway-construction' }
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
