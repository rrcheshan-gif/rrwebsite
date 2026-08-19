import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Vision & Mission | About Us | RR Construction",
  description: "Our vision is to be Sri Lanka's leading construction company through appropriate technology and effective project delivery.",
  alternates: { canonical: 'https://www.rrconstruction.lk/about/vision-mission' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
