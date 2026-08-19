import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Construction Companies in Sri Lanka | RR Construction",
  description: "Looking for top construction companies in Sri Lanka? RR Construction is a leading civil engineering firm with a massive self-owned machinery fleet.",
  alternates: {
    canonical: 'https://www.rrconstruction.lk/construction-companies-in-sri-lanka',
  }
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
