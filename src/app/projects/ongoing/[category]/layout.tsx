export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.category;
  
  const categoryNames: any = {
    'highways-expressways': 'Highways & Expressways',
    'bridges-flyovers': 'Bridges & Flyovers',
    'harbour-maritime': 'Harbour & Maritime',
    'water-infrastructure': 'Water Infrastructure',
    'irrigation': 'Irrigation',
    'landslide-mitigation': 'Landslide Mitigation',
    'piling-foundation': 'Piling & Foundation',
  };

  const title = categoryNames[categoryId] ? `Ongoing ${categoryNames[categoryId]} Projects` : 'Ongoing Projects';

  return {
    title: `${title} | RR Construction`,
    description: `View our ongoing ${title.toLowerCase()} in Sri Lanka. RR Construction is actively executing major heavy civil engineering projects across the country.`,
    alternates: {
      canonical: `https://www.rrconstruction.lk/projects/ongoing/${categoryId}`,
    }
  };
}

export default function OngoingCategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
