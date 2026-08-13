"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Users } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function ConstructionCompaniesSEO() {
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
          backgroundImage: "url('/images/page-headers/history.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
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
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Home
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.2rem" : "4.5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", lineHeight: 1.2 }}>
            Among the Top <br/><span style={{ color: "var(--primary-red)" }}>Construction Companies in Sri Lanka</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.05rem" : "1.3rem", marginTop: "20px", maxWidth: "800px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            With over {new Date().getFullYear() - COMPANY_DATA.established} years of proven expertise, RR Construction is a premier infrastructure development firm delivering large-scale engineering solutions nationwide.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "50px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.2 }}>
                Leading the Industry with <span style={{ color: "var(--primary-red)" }}>Proven Capacity</span>
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                When searching for reliable construction companies in Sri Lanka, capacity and past performance are paramount. RR Construction stands apart through its massive internal resource base, ensuring we rarely depend on third-party suppliers to meet project deadlines.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "20px" }}>
                We hold top-tier capabilities across Highway, Bridge, Building, Water Supply and Maritime construction, making us one of the most versatile civil engineering contractors on the island.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}>
                <div style={{ background: "var(--white)", padding: "20px", borderRadius: "16px", border: "1px solid var(--border-soft)", display: "flex", alignItems: "center", gap: "15px" }}>
                  <Factory size={36} color="var(--primary-red)" />
                  <div>
                    <span style={{ display: "block", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-dark)" }}>{COMPANY_DATA.machineryFleet}+</span>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-light)", fontWeight: 600, textTransform: "uppercase" }}>Owned Machinery</span>
                  </div>
                </div>
                <div style={{ background: "var(--white)", padding: "20px", borderRadius: "16px", border: "1px solid var(--border-soft)", display: "flex", alignItems: "center", gap: "15px" }}>
                  <Users size={36} color="var(--primary-red)" />
                  <div>
                    <span style={{ display: "block", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-dark)" }}>{COMPANY_DATA.workforce}+</span>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-light)", fontWeight: 600, textTransform: "uppercase" }}>Direct Workforce</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ background: "var(--white)", padding: isMobile ? "30px" : "50px", borderRadius: "24px", border: "1px solid var(--border-soft)", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}>
              <ShieldCheck size={50} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "25px" }}>Our Core Engineering Sectors</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {COMPANY_DATA.sectors.map((sector, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px", paddingBottom: "15px", borderBottom: idx !== COMPANY_DATA.sectors.length - 1 ? "1px solid var(--border-soft)" : "none" }}>
                    <CheckCircle2 size={22} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 600 }}>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", textAlign: "center", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            Evaluate our <span style={{ color: "var(--primary-red)" }}>Capabilities</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            Explore our massive portfolio of national-scale engineering projects and discover why RR Construction is a trusted partner for public and private infrastructure development.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/projects" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              Explore Projects <ArrowRight size={20} />
            </Link>
            <Link href="/about" className="btn hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", border: "2px solid var(--border-dark)", color: "var(--text-dark)", fontWeight: 700 }}>
              Company Profile
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
