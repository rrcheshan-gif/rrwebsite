import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | RR Construction (Pvt) Ltd',
  description: 'Access technical resources, data sheets, and construction material information from RR Construction (Pvt) Ltd — supporting contractors and developers across Sri Lanka.',
  keywords: ["Construction Resources Sri Lanka", "Engineering Resources Sri Lanka", "RR Construction Resources", "Technical Data Construction Sri Lanka"],
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Resources | RR Construction (Pvt) Ltd',
    description: 'Access technical resources, data sheets, and construction material information from RR Construction (Pvt) Ltd — supporting contractors and developers across Sri Lanka.',
    url: 'https://www.rrconstruction.lk/resources',
    type: 'website',
  },
};

import { redirect } from 'next/navigation';

export default function ResourcesRedirect() {
  redirect('/resources/asphalt');
}
