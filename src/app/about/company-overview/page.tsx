"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Building2, Droplets, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';


import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";
export default function AboutStory() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
          className="page-header" 
          style={{ 
            backgroundImage: "url('/images/about/blueprint-blue-bg.webp')", 
            backgroundColor: "#1b2738",  
            minHeight: isMobile ? "400px" : "600px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "flex-end",
            padding: isMobile ? "120px 20px 20px" : "160px 20px 20px", 
            textAlign: "left", 
            position: "relative", 
            borderRadius: isMobile ? "24px" : "32px",
            margin: isMobile ? "0 12px 30px" : "0 20px 40px",  
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
        
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <AutoBreadcrumb />
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>RR <span style={{ color: "var(--primary-red)" }}>Overview</span></h1>
              
          </div>
        </section>

      {/* Unified Company Overview */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 0auto", padding: "0 16px" }}>
          
          
          <div style={{ textAlign: "left", marginBottom: "40px", maxWidth: "1000px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>COMPANY OVERVIEW</h4>
                </div>
                <h3 style={{ fontSize: isMobile ? "2rem" : "clamp(2.5rem, 6vw, 3.8rem)", color: "var(--text-dark)", margin: "0 0 20px", fontFamily: "var(--font-heading)", lineHeight: 1.1, fontWeight: 800 }}>
                  A Legacy of Engineering <span className="text-gradient" style={{ fontWeight: 300 }}>Excellence.</span>
                </h3>
          </div>
          {/* Full Width Introduction Text */}
          <div style={{ width: "100%", maxWidth: "1500px", margin: "0 auto" }}>

            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
              Founded in 1995, RR Construction (Pvt) Ltd is a leading Sri Lankan construction and civil engineering company, delivering integrated engineering and construction solutions for major infrastructure and specialized development projects across the country. With more than three decades of industry experience, the company has established extensive expertise across highway and expressway construction, railway infrastructure, bridge construction, maritime and marine engineering, geotechnical works, earthworks, water infrastructure, aggregate production, and heavy civil engineering.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
              Our railway construction capabilities further strengthen our contribution to Sri Lanka’s national infrastructure landscape, supporting the development, upgrading, rehabilitation, and maintenance of essential railway assets through experienced engineering teams, modern construction technology, specialized equipment, and disciplined project execution.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
              As a 100% Sri Lankan-owned enterprise, RR Construction is supported by a workforce of 1,400+ professionals, a proprietary fleet of 1,000+ heavy construction machines, and in-house aggregate production capabilities. This vertically integrated resource base provides greater control over construction quality, material supply, resource allocation, project schedules, and operational efficiency, enabling us to execute complex and large-scale infrastructure projects with greater reliability and consistency.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
              Our multidisciplinary capabilities span highways, expressways, railways, bridges, maritime and marine structures, geotechnical engineering, earthworks, water infrastructure, and other major civil engineering developments. From initial planning and engineering through construction and project completion, we apply structured project management, rigorous quality assurance, advanced construction methodologies, and effective resource management to deliver infrastructure that meets demanding technical and operational requirements.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
              At RR Construction, our approach is built around engineering excellence, quality, occupational health and safety, environmental stewardship, sustainability, and dependable project delivery. By combining technical expertise, modern construction resources, integrated project capabilities, and continuous innovation, we deliver resilient, efficient, and durable infrastructure solutions that strengthen connectivity, support economic activity, enhance communities, and contribute to the long-term development of Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Strength */}
      

    </div>
  );
}

