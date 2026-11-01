import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employee Welfare | RR Construction (Pvt) Ltd',
  description: 'RR Construction is committed to employee welfare — providing a safe, inclusive, and supportive work environment for all staff and construction workers across Sri Lanka.',
  keywords: ["Construction Employee Welfare Sri Lanka", "Worker Welfare Sri Lanka", "RR Construction Welfare"],
  alternates: {
    canonical: '/welfare',
  },
  openGraph: {
    title: 'Employee Welfare | RR Construction (Pvt) Ltd',
    description: 'RR Construction is committed to employee welfare — providing a safe, inclusive, and supportive work environment for all staff and construction workers across Sri Lanka.',
    url: 'https://www.rrconstruction.lk/welfare',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
