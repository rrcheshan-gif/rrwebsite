import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Management | Sustainability | RR Construction",
  description: "RR Construction guarantees engineering excellence through ISO 9001:2015 certified quality management systems.",
  alternates: {
    canonical: 'https://www.rrconstruction.lk/sustainability/quality-management',
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


