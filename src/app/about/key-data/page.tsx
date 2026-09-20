"use client";
import { useEffect, useState } from 'react';
import { Calendar, Users, Tractor, Building, FileText, ShieldCheck, Briefcase, FileSearch, University, UserCircle } from 'lucide-react';
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
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section className="page-header" style={{ position: 'relative', backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('/images/page-headers/engineering-blueprint-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: isMobile ? '40px 20px' : '70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: "1500px", margin: '0 auto', width: '100%' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2.5rem' : '4rem', margin: '0 0 24px', lineHeight: 1.2 }}>
            Key <span style={{ color: 'var(--primary-red)' }}>Data</span>
          </h1>
          <BackButton />
        </div>
      </section>

      {/* Intro & Big Stats Section (Dark Theme) */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", background: "var(--bg-base)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>AT A GLANCE</h4>
              <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--white)", fontFamily: "var(--font-heading)", margin: "0 0 20px 0" }}>
              RR Construction (Pvt) Ltd
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
              Building reliable infrastructure for a stronger tomorrow. Our operational scale is a testament to our legacy of engineering excellence.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "30px" }}>
             {/* Stat 1 */}
             <div style={{ textAlign: "center", padding: "50px 20px", background: "rgba(255,255,255,0.03)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform="translateY(-10px)"} onMouseOut={(e) => e.currentTarget.style.transform="translateY(0)"}>
                <Calendar color="var(--primary-red)" size={40} style={{ margin: "0 auto 20px" }} />
                <h3 style={{ fontSize: "3.5rem", color: "var(--white)", fontFamily: "var(--font-heading)", margin: "0 0 10px 0", fontWeight: 800 }}>1995</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "2px", margin: 0, fontWeight: 600 }}>Year Established</p>
             </div>
             {/* Stat 2 */}
             <div style={{ textAlign: "center", padding: "50px 20px", background: "rgba(255,255,255,0.03)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform="translateY(-10px)"} onMouseOut={(e) => e.currentTarget.style.transform="translateY(0)"}>
                <Users color="var(--primary-red)" size={40} style={{ margin: "0 auto 20px" }} />
                <h3 style={{ fontSize: "3.5rem", color: "var(--white)", fontFamily: "var(--font-heading)", margin: "0 0 10px 0", fontWeight: 800 }}>1,400+</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "2px", margin: 0, fontWeight: 600 }}>Direct Workforce</p>
             </div>
             {/* Stat 3 */}
             <div style={{ textAlign: "center", padding: "50px 20px", background: "rgba(255,255,255,0.03)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform="translateY(-10px)"} onMouseOut={(e) => e.currentTarget.style.transform="translateY(0)"}>
                <Tractor color="var(--primary-red)" size={40} style={{ margin: "0 auto 20px" }} />
                <h3 style={{ fontSize: "3.5rem", color: "var(--white)", fontFamily: "var(--font-heading)", margin: "0 0 10px 0", fontWeight: 800 }}>1,000+</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "2px", margin: 0, fontWeight: 600 }}>Machinery Units</p>
             </div>
          </div>

        </div>
      </section>

      {/* Corporate Particulars Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", background: "var(--bg-light)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          
          <div style={{ marginBottom: "50px", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", margin: "0 0 15px 0" }}>Corporate <span style={{ color: "var(--primary-red)" }}>Particulars</span></h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "0 auto" }}></div>
          </div>

          <div style={{ background: "var(--white)", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", overflow: "hidden", border: "1px solid var(--border-soft)" }}>
             {/* Head Office */}
             <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", borderBottom: "1px solid var(--border-soft)", padding: isMobile ? "30px 20px" : "40px", gap: isMobile ? "10px" : "40px" }}>
                <div style={{ width: isMobile ? "100%" : "300px", flexShrink: 0, display: "flex", alignItems: "center", gap: "15px" }}>
                   <div style={{ width: "45px", height: "45px", background: "rgba(229, 57, 53, 0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-red)" }}>
                      <Building size={22} />
                   </div>
                   <h4 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 800 }}>Head Office</h4>
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                   <p style={{ margin: 0, fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.6 }}>No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta, Sri Lanka.</p>
                </div>
             </div>

             {/* CIDA */}
             <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", borderBottom: "1px solid var(--border-soft)", padding: isMobile ? "30px 20px" : "40px", gap: isMobile ? "10px" : "40px" }}>
                <div style={{ width: isMobile ? "100%" : "300px", flexShrink: 0, display: "flex", alignItems: "center", gap: "15px" }}>
                   <div style={{ width: "45px", height: "45px", background: "rgba(229, 57, 53, 0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-red)" }}>
                      <University size={22} />
                   </div>
                   <h4 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 800 }}>National Grading</h4>
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                   <p style={{ margin: 0, fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.6 }}><strong style={{ color: "var(--text-dark)", fontSize: "1.2rem" }}>CS2 (CIDA)</strong> &mdash; Highest Grade in Buildings, Roads, Water Supply &amp; Drainage, Bridges</p>
                </div>
             </div>

             {/* Reg */}
             <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", borderBottom: "1px solid var(--border-soft)", padding: isMobile ? "30px 20px" : "40px", gap: isMobile ? "10px" : "40px" }}>
                <div style={{ width: isMobile ? "100%" : "300px", flexShrink: 0, display: "flex", alignItems: "center", gap: "15px" }}>
                   <div style={{ width: "45px", height: "45px", background: "rgba(229, 57, 53, 0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-red)" }}>
                      <FileText size={22} />
                   </div>
                   <h4 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 800 }}>Registration No</h4>
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                   <p style={{ margin: 0, fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.6 }}>PV 11346</p>
                </div>
             </div>

             {/* ISO */}
             <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", borderBottom: "1px solid var(--border-soft)", padding: isMobile ? "30px 20px" : "40px", gap: isMobile ? "10px" : "40px", background: "rgba(229, 57, 53, 0.02)" }}>
                <div style={{ width: isMobile ? "100%" : "300px", flexShrink: 0, display: "flex", alignItems: "center", gap: "15px" }}>
                   <div style={{ width: "45px", height: "45px", background: "rgba(229, 57, 53, 0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-red)" }}>
                      <ShieldCheck size={22} />
                   </div>
                   <h4 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 800 }}>Certifications</h4>
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
                   <span style={{ padding: "10px 20px", background: "var(--white)", border: "1px solid var(--border-soft)", borderRadius: "30px", fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>ISO 9001:2015</span>
                   <span style={{ padding: "10px 20px", background: "var(--white)", border: "1px solid var(--border-soft)", borderRadius: "30px", fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>ISO 14001:2015</span>
                   <span style={{ padding: "10px 20px", background: "var(--white)", border: "1px solid var(--border-soft)", borderRadius: "30px", fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>ISO 45001:2018</span>
                </div>
             </div>

             {/* Ownership */}
             <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", borderBottom: "1px solid var(--border-soft)", padding: isMobile ? "30px 20px" : "40px", gap: isMobile ? "10px" : "40px" }}>
                <div style={{ width: isMobile ? "100%" : "300px", flexShrink: 0, display: "flex", alignItems: "center", gap: "15px" }}>
                   <div style={{ width: "45px", height: "45px", background: "rgba(229, 57, 53, 0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-red)" }}>
                      <Briefcase size={22} />
                   </div>
                   <h4 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 800 }}>Ownership</h4>
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                   <p style={{ margin: 0, fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.6 }}>Private Limited Liability Company</p>
                </div>
             </div>

             {/* Auditor */}
             <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", borderBottom: "1px solid var(--border-soft)", padding: isMobile ? "30px 20px" : "40px", gap: isMobile ? "10px" : "40px" }}>
                <div style={{ width: isMobile ? "100%" : "300px", flexShrink: 0, display: "flex", alignItems: "center", gap: "15px" }}>
                   <div style={{ width: "45px", height: "45px", background: "rgba(229, 57, 53, 0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-red)" }}>
                      <FileSearch size={22} />
                   </div>
                   <h4 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 800 }}>Company Auditor</h4>
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                   <p style={{ margin: 0, fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.6 }}>P. Wijayawardana &amp; Co.</p>
                </div>
             </div>

             {/* Managing Director */}
             <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", borderBottom: "1px solid var(--border-soft)", padding: isMobile ? "30px 20px" : "40px", gap: isMobile ? "10px" : "40px" }}>
                <div style={{ width: isMobile ? "100%" : "300px", flexShrink: 0, display: "flex", alignItems: "center", gap: "15px" }}>
                   <div style={{ width: "45px", height: "45px", background: "rgba(229, 57, 53, 0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-red)" }}>
                      <UserCircle size={22} />
                   </div>
                   <h4 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 800 }}>Managing Director</h4>
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                   <p style={{ margin: 0, fontSize: "1.3rem", color: "var(--text-dark)", fontWeight: 700, lineHeight: 1.6 }}>Mr. Ranjith Senadeera S. D.</p>
                </div>
             </div>

             {/* Bankers */}
             <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", padding: isMobile ? "30px 20px" : "40px", gap: isMobile ? "10px" : "40px" }}>
                <div style={{ width: isMobile ? "100%" : "300px", flexShrink: 0, display: "flex", alignItems: "center", gap: "15px" }}>
                   <div style={{ width: "45px", height: "45px", background: "rgba(229, 57, 53, 0.08)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-red)" }}>
                      <Building size={22} />
                   </div>
                   <h4 style={{ margin: 0, fontSize: "1.05rem", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 800 }}>Company Bankers</h4>
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                   <p style={{ margin: 0, fontSize: "1.15rem", color: "var(--text-light)", lineHeight: 1.8 }}>
                      HNB, DFCC, Sampath Bank, NDB, Commercial Bank, People's Bank &amp; NTB
                   </p>
                </div>
             </div>

          </div>
        </div>
      </section>

    </main>
  );
}
