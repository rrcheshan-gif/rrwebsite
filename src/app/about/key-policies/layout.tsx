import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Key Policies | RR Construction (Pvt) Ltd',
  description: 'Health, Safety, and Environmental (HSE) policies, Quality policies, and sustainability commitments of RR Construction.',
  alternates: { canonical: 'https://rrwebsite-xi.vercel.app/about/key-policies' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
