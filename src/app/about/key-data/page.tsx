"use client";

import { useEffect, useState } from 'react';
import { Calendar, Users, Tractor, Building, FileText, ShieldCheck, Briefcase, FileSearch, University, UserCircle, MapPin, Award } from 'lucide-react';
import BackButton from "@/app/components/BackButton";

export default function KeyDataPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <main style={{ backgroundColor: "var(--bg-light)", minHeight: "100vh", paddingBottom: "100px" }}>
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .bento-card {
          background: var(--white);
          border-radius: 30px;
          padding: 40px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 10px 40px rgba(0,0,0,0.02);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .bento-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.08);
          border-color: rgba(229, 57, 53, 0.2);
        }
        .bento-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-red), #ff7e67);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .bento-card:hover::before {
          opacity: 1;
        }
        .watermark-icon {
          position: absolute;
          right: -20px;
          bottom: -20px;
          opacity: 0.03;
          transform: scale(2.5);
          transition: all 0.5s ease;
          pointer-events: none;
        }
        .bento-card:hover .watermark-icon {
          transform: scale(3) rotate(-10deg);
          opacity: 0.06;
          color: var(--primary-red);
        }
        
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .span-col-2 { grid-column: span 2 !important; }
          .span-row-2 { grid-row: span 1 !important; }
        }
        
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .span-col-2 { grid-column: span 1 !important; }
          .bento-card { padding: 30px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="page-header" style={{ position: 'relative', backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('/images/page-headers/engineering-blueprint-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: isMobile ? '60px 20px' : '100px 20px', textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
        <div style={{ maxWidth: "1500px", margin: '0 auto', width: '100%' }}>
          <div style={{ display: "inline-block", padding: "8px 24px", background: "rgba(229, 57, 53, 0.2)", borderRadius: "30px", border: "1px solid rgba(229, 57, 53, 0.4)", color: "white", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "20px" }}>
             Corporate Fact Sheet
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2.8rem' : '4.5rem', margin: '0 0 24px', lineHeight: 1.1, fontWeight: 800 }}>
            Key <span style={{ color: 'var(--primary-red)' }}>Data</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto 30px", lineHeight: 1.6 }}>
            The structural foundation of RR Construction (Pvt) Ltd.
          </p>
          <BackButton />
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="bento-grid">
          
          {/* Main Title Card (Spans 2 cols, 1 row) */}
          <div className="bento-card span-col-2" style={{ background: "linear-gradient(135deg, var(--bg-base) 0%, #1e293b 100%)", color: "white", border: "none" }}>
              <div style={{ position: "relative", zIndex: 2 }}>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 10px 0", fontSize: "0.9rem" }}>OUR COMPANY</h4>
                  <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontFamily: "var(--font-heading)", margin: "0 0 15px 0", fontWeight: 800, lineHeight: 1.2 }}>RR Construction (Pvt) Ltd</h2>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", margin: 0, lineHeight: 1.6 }}>Building reliable infrastructure for a stronger tomorrow across Sri Lanka since 1995.</p>
              </div>
              <Building size={150} className="watermark-icon" style={{ color: "white", opacity: 0.05 }} />
          </div>

          {/* Established */}
          <div className="bento-card">
              <Calendar size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 5px 0", lineHeight: 1 }}>1995</h3>
              <p style={{ color: "var(--text-light)", margin: 0, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>Year Established</p>
              <Calendar size={120} className="watermark-icon" />
          </div>

          {/* Registration */}
          <div className="bento-card">
              <FileText size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "2.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 5px 0", lineHeight: 1.2 }}>PV 11346</h3>
              <p style={{ color: "var(--text-light)", margin: 0, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>Registration No</p>
              <FileText size={120} className="watermark-icon" />
          </div>

          {/* Image Card for Head Office (Spans 2 cols, 2 rows) */}
          <div className="bento-card span-col-2 span-row-2" style={{ padding: 0 }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                  <img src="/images/about/head-office-building.jpg" alt="RR Construction Head Office" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}></div>
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: "40px", marginTop: "auto", color: "white" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--primary-red)", padding: "6px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "15px" }}>
                      <MapPin size={14} /> Head Office
                  </div>
                  <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-heading)", fontWeight: 700, margin: "0 0 10px 0", lineHeight: 1.3 }}>
                      No. 865, Dr. Danister De Silva Mawatha, Baseline Road
                  </h3>
                  <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>Colombo 9, Orugodawatta.</p>
              </div>
          </div>

          {/* Workforce */}
          <div className="bento-card" style={{ background: "linear-gradient(145deg, #fff, #f8fafc)" }}>
              <Users size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 5px 0", lineHeight: 1 }}>1,400+</h3>
              <p style={{ color: "var(--text-light)", margin: 0, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>Direct Workforce</p>
              <Users size={120} className="watermark-icon" />
          </div>

          {/* Machinery */}
          <div className="bento-card" style={{ background: "linear-gradient(145deg, #fff, #f8fafc)" }}>
              <Tractor size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 5px 0", lineHeight: 1 }}>1,000+</h3>
              <p style={{ color: "var(--text-light)", margin: 0, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem" }}>Machinery Units</p>
              <Tractor size={120} className="watermark-icon" />
          </div>

          {/* CIDA Grading (Spans 2 cols) */}
          <div className="bento-card span-col-2">
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "rgba(229, 57, 53, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-red)", flexShrink: 0 }}>
                      <University size={30} />
                  </div>
                  <div>
                      <h4 style={{ color: "var(--text-light)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 5px 0", fontSize: "0.85rem" }}>National Grading</h4>
                      <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 10px 0", lineHeight: 1.2 }}>CS2 (CIDA)</h3>
                      <p style={{ color: "var(--text-light)", margin: 0, fontSize: "1.05rem", lineHeight: 1.5 }}>Highest Grade in Buildings, Roads, Water Supply &amp; Drainage, Bridges</p>
                  </div>
              </div>
          </div>

          {/* ISO Certifications (Spans 2 cols) */}
          <div className="bento-card span-col-2" style={{ background: "var(--bg-base)", color: "white", border: "none" }}>
              <ShieldCheck size={40} color="var(--primary-red)" style={{ marginBottom: "20px", position: "relative", zIndex: 2 }} />
              <h4 style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 15px 0", fontSize: "0.85rem", position: "relative", zIndex: 2 }}>Quality Certifications</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", position: "relative", zIndex: 2 }}>
                  <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px 20px", borderRadius: "30px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
                      <Award size={18} color="var(--primary-red)" /> ISO 9001:2015
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px 20px", borderRadius: "30px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
                      <Award size={18} color="var(--primary-red)" /> ISO 14001:2015
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px 20px", borderRadius: "30px", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
                      <Award size={18} color="var(--primary-red)" /> ISO 45001:2018
                  </div>
              </div>
              <ShieldCheck size={180} className="watermark-icon" style={{ color: "white", opacity: 0.03 }} />
          </div>

          {/* Ownership */}
          <div className="bento-card">
              <Briefcase size={30} color="var(--primary-red)" style={{ marginBottom: "15px" }} />
              <p style={{ color: "var(--text-light)", margin: "0 0 5px 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.8rem" }}>Ownership</p>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", margin: 0, lineHeight: 1.4 }}>Private Limited Liability Company</h4>
          </div>

          {/* Managing Director */}
          <div className="bento-card">
              <UserCircle size={30} color="var(--primary-red)" style={{ marginBottom: "15px" }} />
              <p style={{ color: "var(--text-light)", margin: "0 0 5px 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.8rem" }}>Managing Director</p>
              <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-dark)", margin: 0, lineHeight: 1.4 }}>Mr. Ranjith Senadeera</h4>
          </div>

          {/* Auditor */}
          <div className="bento-card">
              <FileSearch size={30} color="var(--primary-red)" style={{ marginBottom: "15px" }} />
              <p style={{ color: "var(--text-light)", margin: "0 0 5px 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.8rem" }}>Company Auditor</p>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", margin: 0, lineHeight: 1.4 }}>P. Wijayawardana &amp; Co.</h4>
          </div>

          {/* Bankers */}
          <div className="bento-card">
              <Building size={30} color="var(--primary-red)" style={{ marginBottom: "15px" }} />
              <p style={{ color: "var(--text-light)", margin: "0 0 5px 0", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.8rem" }}>Company Bankers</p>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-dark)", margin: 0, lineHeight: 1.5 }}>
                 HNB, DFCC, Sampath, NDB, Commercial, People's &amp; NTB
              </h4>
          </div>

      </div>

    </main>
  );
}
