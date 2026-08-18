import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rrcon.company'),
  title: {
    template: "%s | RR Construction (Pvt) Ltd",
    default: "RR Construction (Pvt) Ltd | Leading Construction & Civil Engineering Company in Sri Lanka",
  },
  description: "RR Construction (Pvt) Ltd is a leading Sri Lankan construction and civil engineering company specializing in road construction, highways, bridges, infrastructure, harbour construction, geotechnical engineering, and sustainable construction solutions.",
  keywords: ["RR Construction", "RR Construction Sri Lanka", "Construction Company in Sri Lanka", "Civil Engineering Company in Sri Lanka", "Civil Construction Company Sri Lanka", "Construction Contractor Sri Lanka", "Engineering Construction Company Sri Lanka"],
  openGraph: {
    title: "RR Construction (Pvt) Ltd | Leading Construction & Civil Engineering Company in Sri Lanka",
    description: "RR Construction (Pvt) Ltd is a leading Sri Lankan construction and civil engineering company specializing in road construction, highways, bridges, infrastructure, harbour construction, geotechnical engineering, and sustainable construction solutions.",
    url: 'https://www.rrcon.company',
    siteName: 'RR Construction (Pvt) Ltd',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RR Construction (Pvt) Ltd Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "RR Construction (Pvt) Ltd | Leading Construction & Civil Engineering Company in Sri Lanka",
    description: "RR Construction (Pvt) Ltd is a leading Sri Lankan construction and civil engineering company specializing in road construction, highways, bridges, infrastructure, harbour construction, geotechnical engineering, and sustainable construction solutions.",
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.rrcon.company',
  },
};

export const viewport: Viewport = {
  themeColor: "#e53935",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  "name": "RR Construction (Pvt) Ltd",
  "alternateName": "RR Construction Sri Lanka",
  "url": "https://www.rrcon.company",
  "logo": "https://www.rrcon.company/images/logo.png",
  "image": "https://www.rrcon.company/images/og-image.jpg",
  "description": "Leading civil engineering and construction company in Sri Lanka specializing in highways, bridges, maritime structures, and infrastructure development.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 77, K.C. De Silva Puragama",
    "addressLocality": "Peliyagoda",
    "addressRegion": "Western Province",
    "postalCode": "11830",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "6.9534",
    "longitude": "79.8821"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+94-11-2433427",
    "contactType": "customer service",
    "areaServed": "LK",
    "availableLanguage": ["English", "Sinhala", "Tamil"]
  },
  "sameAs": [
    "https://www.facebook.com/rrconstruction",
    "https://www.linkedin.com/company/rrconstruction"
  ],
  "priceRange": "$$$",
  "areaServed": {
    "@type": "Country",
    "name": "Sri Lanka"
  }
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import PageTransition from "./components/PageTransition";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="msapplication-navbutton-color" content="#e53935" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics Placeholder */}
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <PageTransition />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
