import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vision & Mission | RR Construction (Pvt) Ltd",
  description: "Discover the vision, mission and core values of RR Construction (Pvt) Ltd, a leading heavy civil engineering and infrastructure company in Sri Lanka.",
  alternates: { canonical: 'https://www.rrconstruction.lk/about/vision-mission' }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}