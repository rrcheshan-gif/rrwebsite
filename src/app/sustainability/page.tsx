import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability | RR Construction (Pvt) Ltd',
  description: 'RR Construction is committed to sustainable construction — integrating environmental stewardship, health & safety, quality management, and social responsibility into every project.',
  keywords: ["Sustainable Construction Sri Lanka", "Green Construction Sri Lanka", "RR Construction Sustainability", "Environmental Construction Sri Lanka"],
  alternates: {
    canonical: '/sustainability',
  },
  openGraph: {
    title: 'Sustainability | RR Construction (Pvt) Ltd',
    description: 'RR Construction is committed to sustainable construction — integrating environmental stewardship, health & safety, quality management, and social responsibility into every project.',
    url: 'https://www.rrconstruction.lk/sustainability',
    type: 'website',
  },
};

import { redirect } from 'next/navigation';

export default function SustainabilityRedirect() {
  redirect('/sustainability/environmental-stewardship');
}
