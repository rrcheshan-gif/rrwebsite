import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Civil Engineering Services | RR Construction (Pvt) Ltd",
  description: "Explore RR Construction's services: road construction, highway engineering, bridge building, maritime construction, geotechnical mitigation, and water infrastructure in Sri Lanka.",
  alternates: {
    canonical: 'https://www.rrcon.company/services',
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
      "Civil Engineering Services Sri Lanka"
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
