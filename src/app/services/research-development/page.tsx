
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ResearchAndDevelopmentPage() {
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
          backgroundImage: "url('/images/research-development.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "40px 20px" : "70px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.85) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Technology & Services
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>
            Research & <span style={{ color: "var(--primary-red)" }}>Development</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Advancing heavy civil engineering through technological innovation, lean production techniques, and integrated enterprise resource planning.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: isMobile ? "20px 10px 80px" : "20px 20px 120px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: isMobile ? '24px' : '32px', 
                padding: isMobile ? '30px 20px' : '50px 60px', 
                border: '1px solid #e2e8f0',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
              }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--text-dark)", marginBottom: "25px", fontWeight: 800 }}>
                  Driving Operational Efficiency
                </h2>
                <p style={{ color: '#4a5568', fontSize: '1.1rem', lineHeight: 1.8, margin: "0 0 20px" }}>
                  Research & Development (R&D) plays a pivotal role at RR Construction. The integration of cutting-edge technologies and rigorous R&D initiatives has enabled the organization to achieve unprecedented operational efficiency, maximize productivity, and overcome complex technical challenges inherent to the heavy civil engineering sphere.
                </p>
                <p style={{ color: '#4a5568', fontSize: '1.1rem', lineHeight: 1.8, margin: 0 }}>
                  RR Construction continually invests in internal R&D focused specifically on Lean Production principles, Advanced Performance Management, and modern construction methodologies. Furthermore, following the successful adoption of localized Enterprise Resource Planning (ERP) systems, the company is actively transitioning toward a fully integrated, AI-assisted ERP ecosystem to streamline resource allocation across all national-scale operations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
