import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Stewardship | Sustainability | RR Construction",
  description: "RR Construction is committed to environmental stewardship, adhering to ISO 14001:2015 standards, minimizing carbon footprints, and ensuring sustainable infrastructure development.",
  alternates: {
    canonical: 'https://www.rrconstruction.lk/sustainability/environmental-stewardship',
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
