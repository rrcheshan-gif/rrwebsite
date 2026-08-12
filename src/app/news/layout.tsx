import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates | RR Construction (Pvt) Ltd',
  description: 'Stay updated with the latest news, project milestones, corporate announcements, and insights from RR Construction in Sri Lanka.',
  alternates: {
    canonical: 'https://www.rrcon.company/news',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
