import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Construction Projects | RR Construction (Pvt) Ltd",
  description: "View RR Construction's portfolio of completed projects across Sri Lanka, including highways, bridges, multi-storied buildings, and maritime infrastructure.",
  alternates: {
    canonical: 'https://rrwebsite-xi.vercel.app/projects',
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
