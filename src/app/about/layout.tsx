import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | RR Construction (Pvt) Ltd',
  description: 'Learn about the legacy, engineering capabilities, and corporate story of RR Construction (Pvt) Ltd, a leading civil engineering company in Sri Lanka.',
  alternates: {
    canonical: 'https://www.rrcon.company/about'
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
