import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact Us | RR Construction (Pvt) Ltd',
  description: 'Get in touch with RR Construction (Pvt) Ltd. Find our headquarters address, phone number, and email for heavy civil engineering inquiries in Sri Lanka.',
  alternates: { canonical: 'https://www.rrconstruction.lk/contact' }
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
