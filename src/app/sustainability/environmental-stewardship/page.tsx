"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Leaf, Droplets, Wind, RefreshCw, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function EnvironmentalStewardship() {
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
          backgroundImage: "url('/images/page-headers/sustainability-green.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
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
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Environmental <span style={{ color: "var(--primary-red)" }}>Stewardship</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.05rem" : "1.3rem", marginTop: "20px", maxWidth: "800px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Building Sri Lanka's future infrastructure in harmony with its natural heritage, strictly guided by ISO 14001:2015.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "50px", alignItems: "center" }}>
            <div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px",  marginBottom: "10px" }}>Iso 14001:2015</h4>
              <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.2 }}>
                Engineering with an <span style={{ color: "var(--primary-red)" }}>Ecological Conscience</span>
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                As a Tier-1 infrastructure developer executing mega-scale earthworks, maritime dredging, and expressway construction, RR Construction acknowledges its substantial ecological footprint. Our environmental stewardship is not an afterthought; it is engineered into the project lifecycle.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                We operate under the stringent requirements of our <strong>ISO 14001:2015 Environmental Management System</strong>, ensuring that every project, from the central highlands to the coastal belts, strictly minimizes environmental degradation.
              </p>
            </div>
            <div style={{ background: "var(--white)", padding: isMobile ? "30px" : "50px", borderRadius: "24px", border: "1px solid rgba(229, 57, 53, 0.2)", boxShadow: "0 20px 40px rgba(229, 57, 53, 0.05)" }}>
              <Leaf size={50} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "25px" }}>Key Environmental Pillars</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Optimizing fuel consumption across 1,000+ heavy machines.",
                  "Systematic noise and dust suppression at all asphalt plants.",
                  "Rigorous construction waste recycling and sorting.",
                  "Protecting marine ecosystems during harbour dredging.",
                  "Restoring topsoil and vegetation in landslide mitigation zones."
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

      {/* Strategic Areas Grid */}
      <section style={{ padding: "50px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0" }}>
              Mitigation in Action
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            
            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <Wind size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Emissions & Air Quality</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                Operating an expansive fleet of over {COMPANY_DATA.machineryFleet} heavy machines demands rigorous emissions oversight. We enforce stringent, data-driven fleet maintenance protocols to aggressively optimize fuel efficiency and reduce our carbon footprint. Furthermore, advanced high-pressure water suppression systems and state-of-the-art industrial dust collectors are integrated into our concrete and asphalt batching plants across Thudugala, Veerapuram, Omanthai, and Yakawewa, effectively neutralizing airborne particulate matter and preserving local air quality.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <Droplets size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Water Resource Protection</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                Preserving aquatic ecosystems is a cornerstone of our heavy civil engineering methodology. During massive hydraulic and irrigation operations - such as the Kalmadu Scheme - and deep maritime dredging projects in Negombo and Gandara, we deploy industrial-grade silt screens and advanced sediment containment traps. These rigorous hydrological safeguards guarantee that our earthworks never contaminate fragile local water tables or disrupt vulnerable coastal marine habitats.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <RefreshCw size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Material Optimization</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                We pioneer sustainable resource engineering by operating proprietary crusher plants and manufacturing high-strength Manufactured Sand (M-Sand), systematically bypassing environmentally destructive river sand mining. We aggressively integrate Reclaimed Asphalt Pavement (RAP) into our supply chains and execute precision-controlled rock blasting techniques. This methodology maximizes structural material yields while drastically minimizing topographical scarring and ecological degradation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HSE Environmental Policy Integration Section */}
      <section style={{ padding: "80px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px 0" }}>
              Comprehensive Environmental Policy
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
              Our operations are strictly governed by our overarching Health, Safety, and Environment (HSE) Policy, ensuring we go beyond compliance to actively improve our ecological footprint.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            
            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "16px", borderTop: "4px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Waste & Pollution Control</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.7, marginBottom: "10px" }}>
                We apply the principle of prevention before protection. Our site operations are mandated to:
              </p>
              <ul style={{ color: "var(--text-light)", lineHeight: 1.7, paddingLeft: "20px", margin: 0 }}>
                <li>Ensure proper collection, storage, and disposal of all project waste.</li>
                <li>Prevent contamination of soil, surface water, and groundwater from hazardous substances.</li>
                <li>Minimize waste generation and heavily promote reduction, reuse, and recycling.</li>
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "16px", borderTop: "4px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Strict Legal Compliance</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.7, marginBottom: "10px" }}>
                Operating at scale requires absolute adherence to the law. Our management continuously identifies and complies with:
              </p>
              <ul style={{ color: "var(--text-light)", lineHeight: 1.7, paddingLeft: "20px", margin: 0 }}>
                <li>National environmental and labor legislation.</li>
                <li>Construction and project-specific client requirements.</li>
                <li>Strict permit and licence conditions for all manufacturing plants.</li>
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "16px", borderTop: "4px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Continual Auditing & Improvement</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.7, marginBottom: "10px" }}>
                We conduct internal HSE audits at planned intervals to guarantee our management systems achieve their intended outcomes. Top Management periodically reviews:
              </p>
              <ul style={{ color: "var(--text-light)", lineHeight: 1.7, paddingLeft: "20px", margin: 0 }}>
                <li>Environmental performance metrics and compliance status.</li>
                <li>System suitability, adequacy, and overall effectiveness.</li>
                <li>Changes in risks and opportunities for ecological improvement.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}


