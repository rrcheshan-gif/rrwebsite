import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | RR Construction (Pvt) Ltd',
  description: 'RR Construction offers a full range of heavy civil engineering services: highway construction, bridge construction, maritime structures, dredging, piling, landslide mitigation, and more across Sri Lanka.',
  keywords: ["Construction Services Sri Lanka", "Civil Engineering Services Sri Lanka", "Highway Construction Services", "Bridge Construction Services Sri Lanka", "RR Construction Services"],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Services | RR Construction (Pvt) Ltd',
    description: 'RR Construction offers a full range of heavy civil engineering services: highway construction, bridge construction, maritime structures, dredging, piling, landslide mitigation, and more across Sri Lanka.',
    url: 'https://www.rrconstruction.lk/services',
    type: 'website',
  },
};

import { redirect } from 'next/navigation';

export default function ServicesRedirect() {
  redirect('/services/transportation-civil-infrastructure');
}
