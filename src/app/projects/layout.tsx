import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Major Infrastructure Projects in Sri Lanka | RR Construction",
  description: "View RR Construction's extensive portfolio of mega civil engineering and infrastructure projects across Sri Lanka, including highways, bridges, and maritime works.",
  keywords: ["construction projects Sri Lanka", "infrastructure projects Sri Lanka", "highway construction projects Sri Lanka", "mega construction Sri Lanka"],
  alternates: {
    canonical: 'https://www.rrconstruction.lk/projects',
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
