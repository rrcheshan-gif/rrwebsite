"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Award, Target, Factory, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function QualityManagement() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/health-safety-site.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "40px 20px" : "70px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center 40%", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/sustainability" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Sustainability
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Quality <span style={{ color: "var(--primary-red)" }}>Management</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.05rem" : "1.3rem", marginTop: "20px", maxWidth: "800px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Delivering structural integrity that outlasts generations, governed by ISO 9001:2015 standards.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "50px", alignItems: "center" }}>
            <div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px",  marginBottom: "10px" }}>Iso 9001:2015</h4>
              <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.2 }}>
                Quality Assured from <span style={{ color: "var(--primary-red)" }}>The Ground Up</span>
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                True quality in heavy civil engineering cannot be retrofitted; it must be engineered into every mix, every pour, and every weld. RR Construction's reputation as a top-tier infrastructure developer is built on an unwavering commitment to structural integrity.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                Certified under <strong>ISO 9001:2015 (Quality Management Systems)</strong>, we execute massive public works with extreme precision.
              </p>
            </div>
            <div style={{ background: "var(--white)", padding: isMobile ? "30px" : "50px", borderRadius: "24px", border: "1px solid rgba(229, 57, 53, 0.2)", boxShadow: "0 20px 40px rgba(229, 57, 53, 0.05)" }}>
              <Award size={50} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "25px" }}>The RR Quality Guarantee</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "In-house production of M-Sand, ABC, and Asphalt ensures zero dilution of material quality.",
                  "Dedicated Quality Assurance (QA) engineers deployed on every major site.",
                  "Advanced material testing laboratories verifying mix designs before application.",
                  "Strict adherence to national specifications and international engineering codes.",
                  "Continuous auditing of structural elements during bridge and marine construction."
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "15px", paddingBottom: "15px", borderBottom: idx !== 4 ? "1px solid var(--border-soft)" : "none" }}>
                    <CheckCircle2 size={22} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action Areas Grid */}
      <section style={{ padding: "50px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0" }}>
              How We Maintain Excellence
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            
            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <Factory size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Vertical Integration</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                By leveraging our expansive, self-owned heavy machinery fleet and strategically operated crusher and asphalt plants, we maintain uncompromising command over our entire supply chain. This robust vertical integration effectively eradicates the risk of third-party logistical delays and ensures that only premium, rigorously tested aggregate materials are utilized across all our high-stakes construction sites.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <ClipboardCheck size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Rigorous Testing</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                Quality assurance is embedded at the core of our operations. Before a single asphalt layer is applied to a major expressway or a structural concrete pour commences, materials undergo exhaustive laboratory analysis. Comprehensive core sampling, precision compaction tests, and stringent load-bearing verifications form the baseline of our non-negotiable standard operating procedures.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <Target size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Expert Supervision</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                Every project site operates under the vigilant, hands-on oversight of highly seasoned Chartered Civil Engineers and Senior Quantity Surveyors. This elite technical supervision enables us to preemptively identify and rectify any deviations from critical engineering specifications, guaranteeing that every structural milestone is executed with absolute precision and strict adherence to international standards.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}


