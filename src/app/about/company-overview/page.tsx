"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Building2, Droplets, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function AboutStory() {
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
          backgroundImage: "url('/images/page-headers/about-story.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "40px 20px" : "70px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center 30%", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.85) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Home
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>RR <span style={{ color: "var(--primary-red)" }}>Overview</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Building the Foundations of a Stronger Sri Lanka since {COMPANY_DATA.established} through dependable engineering and uncompromising quality.
          </p>
        </div>
      </section>

      {/* Unified Company Overview */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 0auto", padding: "0 16px" }}>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "stretch", marginBottom: "50px" }}>
            
            <div style={{ flex: "1.2", minWidth: "300px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <div style={{ width: "40px", height: "3px", background: "var(--primary-red)" }}></div>
                <h2 style={{ color: "var(--primary-red)", fontWeight: 800, letterSpacing: "2px",  margin: 0, fontSize: "1rem", fontFamily: "var(--font-heading)", textTransform: "uppercase" }}>Company Overview</h2>
              </div>
              <h3 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", margin: "0 0 20px", fontFamily: "var(--font-heading)", lineHeight: 1.2, fontWeight: 800 }}>
                A Legacy of Engineering <span style={{ color: "var(--primary-red)" }}>Excellence.</span>
              </h3>
              
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", background: "rgba(229, 57, 53, 0.05)", padding: "35px 30px", borderRadius: "20px", borderLeft: "4px solid var(--primary-red)", position: "relative" }}>
                  <span style={{ position: "absolute", top: "10px", left: "15px", fontSize: "5rem", color: "rgba(229, 57, 53, 0.1)", fontFamily: "Georgia, serif", lineHeight: 1, zIndex: 0 }}>"</span>
                  <p style={{ color: "var(--text-dark)", lineHeight: 1.8, fontSize: "1.1rem", position: "relative", zIndex: 1, fontStyle: "italic", fontWeight: 500, margin: 0 }}>
                    By continuously developing new capabilities to overcome emerging challenges, introducing structural changes to the organization, and creating a strong culture of teamwork combined with professional methodologies, we have grown into one of the country's leading infrastructure developers. Our unwavering commitment to precision, health and safety, and international quality standards allows us to execute complex engineering projects efficiently, maintaining our reputation as a trusted, uncompromising leader.
                  </p>
                  
                  <div style={{ marginTop: "25px", display: "flex", alignItems: "center", gap: "15px", position: "relative", zIndex: 1 }}>
                    <div>
                      <h4 style={{ color: "var(--text-dark)", fontSize: "1.3rem", fontWeight: 800, margin: "0 0 5px", fontFamily: "var(--font-heading)" }}>Mr. Ranjith Senadhera</h4>
                      <p style={{ color: "var(--primary-red)", margin: 0, fontWeight: 600, fontSize: "0.95rem" }}>Managing Director, RR Construction (Pvt) Ltd</p>
                    </div>
                  </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 'min(100%, 350px)', position: "relative", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "absolute", bottom: "-20px", left: "-20px", background: "var(--primary-red)", color: "white", padding: "20px 30px", borderRadius: "20px", zIndex: 3, boxShadow: "0 15px 30px rgba(229, 57, 53, 0.3)" }}>
                  <h4 style={{ margin: 0, fontSize: "1.8rem", fontFamily: "var(--font-heading)", color: "#ffffff", fontWeight: 800 }}>{COMPANY_DATA.yearsOfExcellence} Years</h4>
                  <p style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "1px" }}>Of Leadership</p>
                </div>
                <div style={{ padding: "15px", background: "var(--white)", borderRadius: "32px", width: "100%", flex: 1, boxShadow: "0 20px 50px rgba(0,0,0,0.08)", position: "relative", zIndex: 2, border: "1px solid var(--border-soft)" }}>
                  <div style={{ width: "100%", height: "100%", minHeight: isMobile ? "350px" : "450px", background: "var(--bg-light)", borderRadius: "24px", overflow: "hidden" }}>
                    <img 
                      src="/images/director_hd.jpg" 
                      alt="Mr. Ranjith Senadhera - Managing Director" 
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} 
                    />
                  </div>
                </div>
            </div>

          </div>

          {/* Full Width Introduction Text */}
          <div style={{ width: "100%" }}>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", }}>
              Founded in {COMPANY_DATA.established}, {COMPANY_DATA.name} stands at the forefront of Sri Lanka's heavy civil engineering and infrastructure development sector. Over the past {COMPANY_DATA.yearsOfExcellence} years, we have evolved from a specialized regional contractor into a fully integrated national engineering powerhouse. Our journey is defined by a systematic expansion of our capabilities, allowing us to deliver complex, large-scale infrastructure solutions that serve as the backbone of national progress.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", }}>
              By integrating an expansive, self-owned fleet of state-of-the-art heavy machinery with the technical acumen of our elite engineering divisions, we consistently execute high-stakes projects across diverse domains - including maritime structures, national highways, complex bridges, geotechnical mitigation, and major water infrastructure. As a 100% Sri Lankan-owned enterprise, we pride ourselves on our end-to-end project management capabilities, ensuring that every phase is executed with uncompromising precision, rigorous safety standards, and adherence to international quality protocols.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", }}>
              Our success is built upon the dedication of a highly skilled workforce of over {COMPANY_DATA.workforce} professionals who share a unified vision for engineering excellence. Unlike many in the industry, our reliance on third-party dependencies is minimal; our massive proprietary fleet of {COMPANY_DATA.machineryFleet} heavy machines, alongside in-house aggregate production plants, guarantees that we maintain total control over project timelines, material quality, and operational efficiency.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", }}>
              Beyond just building physical structures, we are deeply committed to sustainable construction practices and community empowerment. Every project we undertake is guided by a profound responsibility to protect the environment and prioritize the health and safety of everyone involved. As we look to the future, {COMPANY_DATA.name} remains dedicated to pioneering innovative engineering methodologies and delivering resilient infrastructure that will empower Sri Lanka's economic growth for generations to come.
            </p>
            
          </div>
        </div>
      </section>

      {/* Internal Strength */}
      

    </div>
  );
}
