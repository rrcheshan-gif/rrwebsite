import projectsData from '../data';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p: any) => p.id === resolvedParams.id);
  
  if (!project) {
    return {
      title: 'Project Not Found | RR Construction',
    };
  }

  return {
    title: `${project.title} | RR Construction`,
    description: project.description || `Read about the ${project.title} project completed by RR Construction in Sri Lanka.`,
    alternates: {
      canonical: `https://www.rrconstruction.lk/projects/${resolvedParams.id}`,
    },
    openGraph: {
      title: `${project.title} | RR Construction`,
      description: project.description || `Read about the ${project.title} project completed by RR Construction in Sri Lanka.`,
      url: `https://www.rrconstruction.lk/projects/${resolvedParams.id}`,
      type: 'article',
      images: [
        {
          url: project.image || project.heroImage || '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    }
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
