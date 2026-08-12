import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | RR Construction (Pvt) Ltd",
  description: "Meet the leadership team at RR Construction, driving civil engineering and infrastructure excellence in Sri Lanka.",
  alternates: {
    canonical: 'https://www.rrcon.company/about/leadership',
  }
};

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
