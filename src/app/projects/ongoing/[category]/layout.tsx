import type { Metadata } from 'next';

const categoryTitles: Record<string, string> = {
  'roads': 'Highway & Expressway Construction Projects',
  'bridges': 'Bridge Construction Projects',
  'maritime': 'Maritime Construction Projects',
  'dredging': 'Dredging & Water Infrastructure Projects',
  'buildings': 'Buildings & Structures Projects',
  'piling': 'Piling & Foundation Engineering Projects',
  'landslide': 'Landslide Mitigation Projects',
  'railway': 'Railway Civil Works Projects',
};

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const cat = resolvedParams.category;
  const categoryTitle = categoryTitles[cat] || 'Ongoing Projects';

  const title = `${categoryTitle} | RR Construction (Pvt) Ltd`;
  const description = `Explore RR Construction's ongoing ${categoryTitle.toLowerCase()} — active construction sites delivering world-class civil engineering across Sri Lanka.`;

  return {
    title,
    description,
    keywords: ['RR Construction Ongoing Projects', 'Civil Engineering Projects Sri Lanka', 'Infrastructure Projects Sri Lanka', 'RR Construction Sri Lanka'],
    alternates: {
      canonical: `/projects/ongoing/${cat}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.rrconstruction.lk/projects/ongoing/${cat}`,
      type: 'website',
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
