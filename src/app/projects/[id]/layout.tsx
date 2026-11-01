import type { Metadata } from 'next';
import projectsData from '../data';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project: any = projectsData.find((p: any) => p.id === resolvedParams.id);

  if (!project) {
    return {
      title: 'Project Not Found | RR Construction (Pvt) Ltd',
    };
  }

  const title = `${project.title || project.name} | RR Construction (Pvt) Ltd`;
  const description = project.description
    ? `${project.description}`.slice(0, 160)
    : `View details of the ${project.title || project.name} project by RR Construction (Pvt) Ltd — Sri Lanka's leading civil engineering company.`;

  return {
    title,
    description,
    keywords: ['RR Construction Projects', 'Civil Engineering Projects Sri Lanka', 'Construction Portfolio Sri Lanka'],
    alternates: {
      canonical: `/projects/${resolvedParams.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.rrconstruction.lk/projects/${resolvedParams.id}`,
      type: 'website',
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
