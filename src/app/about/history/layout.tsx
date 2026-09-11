import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History & Milestones | RR Construction (Pvt) Ltd – Since 1995',
  description: 'Explore the history and milestones of RR Construction (Pvt) Ltd, a leading heavy civil engineering and infrastructure contractor in Sri Lanka since 1995. From early civil works to major road, bridge, railway, maritime and water infrastructure projects.',
  alternates: { canonical: 'https://www.rrconstruction.lk/about/history' },
  openGraph: {
    title: 'History & Milestones | RR Construction (Pvt) Ltd',
    description: 'Three decades of heavy civil engineering and infrastructure development in Sri Lanka – roads, bridges, railways, maritime, water infrastructure and more.',
    url: 'https://www.rrconstruction.lk/about/history',
    type: 'website',
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rrconstruction.lk' },
    { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': 'https://www.rrconstruction.lk/about' },
    { '@type': 'ListItem', 'position': 3, 'name': 'History & Milestones', 'item': 'https://www.rrconstruction.lk/about/history' }
  ]
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'History & Milestones – RR Construction (Pvt) Ltd',
  'description': 'The history and corporate milestones of RR Construction (Pvt) Ltd, a heavy civil engineering and infrastructure contractor in Sri Lanka since 1995.',
  'url': 'https://www.rrconstruction.lk/about/history',
  'breadcrumb': {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.rrconstruction.lk' },
      { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': 'https://www.rrconstruction.lk/about' },
      { '@type': 'ListItem', 'position': 3, 'name': 'History & Milestones', 'item': 'https://www.rrconstruction.lk/about/history' }
    ]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      {children}
    </>
  );
}
