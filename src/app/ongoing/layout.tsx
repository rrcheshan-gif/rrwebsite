import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ongoing Construction Projects | RR Construction (Pvt) Ltd",
  description: "Discover RR Construction's active and ongoing civil engineering projects, including expressways, landslide mitigation, and water supply systems across Sri Lanka.",
  alternates: {
    canonical: 'https://www.rrcon.company/ongoing',
  }
};

export default function OngoingProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
