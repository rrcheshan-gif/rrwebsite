import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RR Construction | Goals & Targets',
  description: 'Discover the strategic goals and measurable targets driving RR Construction towards sustainable infrastructure development and engineering excellence in Sri Lanka.',
  alternates: {
    canonical: 'https://www.rrcon.company/about/goals-and-targets'
  }
};

export default function GoalsTargetsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
