"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Building2, Droplets, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

import BackButton from "@/app/components/BackButton";
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
            backgroundImage: "url('/images/home/slider-highway-rrp.jpg')", 
            backgroundColor: "#1b2738", backgroundSize: "max(55vw, 1100px) auto", backgroundRepeat: "no-repeat", 
            backgroundPosition: "right center", 
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
            <BackButton />
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
              Founded in 1995, <strong style={{ fontWeight: 'normal' }}>RR Construction (Pvt) Ltd</strong> is a leading <strong style={{ fontWeight: 'normal' }}>construction and civil engineering company in Sri Lanka</strong>, delivering integrated solutions for major infrastructure and specialized construction projects across the country. With over three decades of industry experience, we have developed strong capabilities in <strong style={{ fontWeight: 'normal' }}>highway and expressway construction, railway construction, bridge construction, maritime and marine construction, geotechnical engineering, earthworks, water infrastructure, aggregate production, and heavy civil engineering</strong>. Our railway construction capabilities further strengthen our position in Sri Lanka’s infrastructure sector, enabling us to contribute to the development, improvement, and maintenance of essential railway infrastructure through professional engineering expertise, modern equipment, and efficient project execution.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
              As a <strong style={{ fontWeight: 'normal' }}>100% Sri Lankan-owned company</strong>, RR Construction combines experienced engineers and a skilled workforce of <strong style={{ fontWeight: 'normal' }}>1,400+ professionals</strong> with a proprietary fleet of <strong style={{ fontWeight: 'normal' }}>1,000+ heavy construction machines</strong> and in-house aggregate production facilities, providing greater control over resources, material quality, project schedules, and construction efficiency. Our extensive operational capabilities enable us to undertake complex infrastructure developments while maintaining high standards of <strong style={{ fontWeight: 'normal' }}>engineering excellence, quality assurance, occupational health and safety, environmental responsibility, sustainability, and timely project delivery</strong>. From <strong style={{ fontWeight: 'normal' }}>highway, expressway and railway infrastructure to bridges, maritime and marine structures, geotechnical works, water infrastructure, and other major civil engineering developments</strong>, RR Construction provides reliable, durable, and cost-effective construction solutions tailored to the requirements of each project. Through continuous innovation, integrated project management, advanced construction resources, and a commitment to sustainable development, <strong style={{ fontWeight: 'normal' }}>RR Construction (Pvt) Ltd</strong> continues to build resilient infrastructure that supports connectivity, economic growth, communities, and the long-term development of Sri Lanka.
            </p>
            
          </div>
        </div>
      </section>

      {/* Internal Strength */}
      

    </div>
  );
}
