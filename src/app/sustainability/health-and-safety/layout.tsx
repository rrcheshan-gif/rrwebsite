import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Safety | Sustainability | RR Construction",
  description: "RR Construction's Zero Harm policy, backed by ISO 45001:2018 certification, ensures the absolute safety of our 1800+ workforce on every construction site.",
  alternates: {
    canonical: 'https://www.rrcon.company/sustainability/health-and-safety',
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
