import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Responsibility & CSR | Sustainability | RR Construction",
  description: "RR Construction is dedicated to uplifting local communities, providing rural employment, and driving positive social impact through infrastructure development.",
  alternates: {
    canonical: 'https://www.rrcon.company/sustainability/social-responsibility',
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
