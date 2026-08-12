import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Key Corporate Data | RR Construction (Pvt) Ltd',
  description: 'Company registration details, financial stability, and key corporate data of RR Construction (Pvt) Ltd Sri Lanka.',
  alternates: { canonical: 'https://rrwebsite-xi.vercel.app/about/key-data' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
