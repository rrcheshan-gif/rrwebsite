const fs = require('fs');
const path = require('path');

const services = [
  {
    slug: 'road-highway-construction',
    title: 'Road & Highway Construction',
    desc: 'Expertise in national highway construction, asphalt paving, and rural road rehabilitation.',
    heroImage: '/images/page-headers/services-build.jpg',
  },
  {
    slug: 'bridge-construction',
    title: 'Bridge Construction',
    desc: 'High-strength river crossings, complex overpasses, flyovers, and steel superstructures built to outlast generations.',
    heroImage: '/images/page-headers/services-build.jpg',
  },
  {
    slug: 'water-supply-drainage',
    title: 'Water Supply & Drainage',
    desc: 'Extensive pipe networks, high-output treatment plants, and water storage towers delivering clean water securely.',
    heroImage: '/images/page-headers/services-build.jpg',
  },
  {
    slug: 'irrigation-drainage',
    title: 'Irrigation & Drainage',
    desc: 'Large-scale agricultural irrigation schemes, distribution canals, and flood prevention dams.',
    heroImage: '/images/page-headers/services-build.jpg',
  },
  {
    slug: 'maritime-construction',
    title: 'Maritime Construction',
    desc: 'Fishery harbours, commercial breakwaters, and marine infrastructure development.',
    heroImage: '/images/page-headers/services-build.jpg',
  },
  {
    slug: 'dredging-reclamation',
    title: 'Dredging & Reclamation',
    desc: 'Deep-water dredging, land reclamation, and coastal civil works.',
    heroImage: '/images/page-headers/services-build.jpg',
  },
  {
    slug: 'buildings-structures',
    title: 'Buildings & Structures',
    desc: 'Multi-storied buildings, water retaining structures, water towers, and heavy steel fabrication raised with absolute precision.',
    heroImage: '/images/page-headers/services-build.jpg',
  },
  {
    slug: 'railway-civil-works',
    title: 'Railway Civil Works',
    desc: 'Formation, civil works, and ancillary works in connection with railway line up-gradation.',
    heroImage: '/images/page-headers/services-build.jpg',
  },
  {
    slug: 'disaster-mitigation',
    title: 'Disaster Mitigation',
    desc: 'Landslide vulnerability reduction, unstable slope rectification, road disaster countermeasures, and general civil works.',
    heroImage: '/images/page-headers/services-build.jpg',
  },
];

const basePath = path.join(__dirname, '../src/app/services');

const template = (service) => `"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function ${service.slug.replace(/-./g, x => x[1].toUpperCase()).replace(/^./, x => x.toUpperCase())}Service() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('${service.heroImage}'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "70px 20px" : "120px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center 30%", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Services
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.5rem" : "4rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", textTransform: "uppercase" }}>
            ${service.title}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            ${service.desc}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ background: "var(--white)", padding: isMobile ? "30px 20px" : "50px", borderRadius: "24px", border: "1px solid var(--border-soft)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
            <h2 style={{ fontSize: "2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px" }}>Service Overview</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px" }}>
              At RR Construction, our ${service.title.toLowerCase()} capabilities are backed by a massive self-owned fleet of heavy machinery and a highly trained workforce. We ensure precision, safety, and uncompromising quality in every phase of the project, from earthworks to structural completion.
            </p>

            <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", borderBottom: "2px solid var(--border-soft)", paddingBottom: "10px" }}>Technical Capabilities & Scope</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0" }}>
              {["Comprehensive site preparation and earthworks", "Rigorous quality control meeting ISO standards", "Utilization of state-of-the-art heavy machinery", "Expert engineering and technical oversight", "Strict adherence to ISO 45001 safety protocols"].map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "15px" }}>
                  <CheckCircle2 size={20} color="var(--primary-red)" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ background: "rgba(229, 57, 53, 0.05)", padding: "25px", borderRadius: "16px", borderLeft: "4px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--primary-red)", fontSize: "1.1rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "10px" }}>Quality & Safety</h4>
              <p style={{ color: "var(--text-dark)", fontSize: "1.05rem", fontWeight: 500, margin: 0 }}>
                Every project is executed in strict compliance with ISO 9001 (Quality Management), ISO 14001 (Environmental Management), and ISO 45001 (Health & Safety) standards.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", textAlign: "center", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            See Our <span style={{ color: "var(--primary-red)" }}>Projects</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            Explore our extensive portfolio of completed ${service.title.toLowerCase()} projects across Sri Lanka.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/projects" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              Explore Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
`;

const layoutTemplate = (service) => `import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${service.title} | RR Construction (Pvt) Ltd",
  description: "${service.desc} RR Construction provides expert civil engineering services in Sri Lanka.",
  alternates: {
    canonical: 'https://www.rrcon.company/services/${service.slug}',
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
`;

services.forEach(svc => {
  const dirPath = path.join(basePath, svc.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(svc));
  fs.writeFileSync(path.join(dirPath, 'layout.tsx'), layoutTemplate(svc));
});

console.log('Services generated successfully!');
