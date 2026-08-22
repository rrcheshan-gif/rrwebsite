import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | RR Construction (Pvt) Ltd",
  description: "Meet the leadership team at RR Construction, driving heavy civil engineering and infrastructure excellence in Sri Lanka.",
  alternates: {
    canonical: 'https://www.rrconstruction.lk/about/leadership',
  }
};

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
