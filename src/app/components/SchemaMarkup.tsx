"use client";

import Script from 'next/script';

// Organization Schema - used on home page and landing pages
export function organization'schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RR Construction (Pvt) Ltd",
    "alternateName": "RR Construction",
    "url": "https://www.rrconstruction.lk",
    "logo": "https://www.rrconstruction.lk/images/logo.png",
    "foundingDate": "1995",
    "description": "RR Construction (Pvt) Ltd is a heavy civil engineering and construction company in Sri Lanka established in 1995, specialising in road construction, bridge construction, maritime construction, and water infrastructure.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK"
    },
    "sameAs": []
  };
  return (
    <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}

// WebSite Schema - used on home page only
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RR Construction (Pvt) Ltd",
    "url": "https://www.rrconstruction.lk",
    "description": "Official website of RR Construction (Pvt) Ltd, a heavy civil engineering and construction company in Sri Lanka."
  };
  return (
    <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}

// Service Schema - used on individual service pages
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}
export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "RR Construction (Pvt) Ltd",
      "url": "https://www.rrconstruction.lk"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Sri Lanka"
    }
  };
  return (
    <Script id={`schema-service-${name.toLowerCase().replace(/\s+/g, '-')}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}

// BreadcrumbList Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}
interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  return (
    <Script id="schema-breadcrumb" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}

// FAQPage Schema
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQSchemaProps {
  faqs: FAQItem[];
}
export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return (
    <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}
