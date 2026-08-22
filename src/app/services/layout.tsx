import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Heavy Civil Engineering Services in Sri Lanka | RR Construction",
  description: "RR Construction provides comprehensive heavy civil engineering services in Sri Lanka: road construction, bridge construction, maritime construction, dredging & reclamation, water infrastructure, and landslide mitigation.",
  keywords: ["heavy civil engineering services Sri Lanka", "construction services Sri Lanka", "road construction Sri Lanka", "bridge construction Sri Lanka", "maritime construction Sri Lanka", "dredging Sri Lanka", "water infrastructure Sri Lanka", "landslide mitigation Sri Lanka"],
  alternates: {
    canonical: 'https://www.rrconstruction.lk/services',
  },
  openGraph: {
    title: "Heavy Civil Engineering Services in Sri Lanka | RR Construction",
    description: "Comprehensive heavy civil engineering and construction services across Sri Lanka: roads, bridges, maritime, dredging, water infrastructure, and geotechnical works.",
    url: 'https://www.rrconstruction.lk/services',
    type: 'website',
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "RR Construction (Pvt) Ltd"
    },
    "serviceType": [
      "Road Construction",
      "Highway Construction",
      "Bridge Construction",
      "Maritime & Harbour Construction",
      "Geotechnical Engineering",
      "Water Supply & Drainage",
      "Heavy Civil Engineering Services Sri Lanka"
    ],
    "areaServed": "LK"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
