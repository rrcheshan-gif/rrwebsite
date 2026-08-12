import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CIDA Registration & Grades | RR Construction (Pvt) Ltd",
  description: "RR Construction is a CIDA registered construction company (C-10171) in Sri Lanka, holding top grades in Highway, Bridge, Building, and Maritime construction.",
  alternates: {
    canonical: 'https://www.rrcon.company/about/cida-registration',
  }
};

export default function CIDALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
