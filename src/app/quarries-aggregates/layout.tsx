import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aggregates, M-Sand & Asphalt Supplier | RR Construction (Pvt) Ltd",
  description: "RR Construction operates large-scale crusher and asphalt plants across Sri Lanka, supplying premium M-Sand, ABC, and asphalt for major infrastructure projects.",
  alternates: {
    canonical: 'https://www.rrcon.company/quarries-aggregates',
  }
};

export default function QuarriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
