"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, Tractor, Building, FileText, ShieldCheck, Briefcase, FileSearch, University, UserCircle } from 'lucide-react';

export default function KeyDataPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024); // tablet and mobile break
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      
      {/* Hero Section */}

      <section 
          className="slanted-hero" 
          style={{ 
            backgroundColor: "#1b2738", // Solid dark blue from design
            minHeight: isMobile ? "300px" : "380px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            padding: isMobile ? "100px 0 40px" : "120px 0 60px", 
            textAlign: "left", 
            position: "relative", 
            borderRadius: isMobile ? "0" : "0",
            margin: "0",
            overflow: "hidden"
          }}
        >
        {/* Background Image with Slanted Cut */}
        <div style={{
          position: "absolute",
          top: 0, right: 0, bottom: 0,
          width: isMobile ? "100%" : "55%",
          backgroundImage: "url('/images/page-headers/engineering-blueprint-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: isMobile ? "none" : "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
          zIndex: 1,
          opacity: isMobile ? 0.3 : 1
        }}></div>
        {/* Subtle lighter diagonal band (decor) */}
        {!isMobile && (
          <div style={{
            position: "absolute",
            top: 0, right: 0, bottom: 0,
            width: "56%",
            backgroundColor: "rgba(255,255,255,0.06)",
            clipPath: "polygon(14% 0, 100% 0, 100% 100%, -2% 100%)",
            zIndex: 0
          }}></div>
        )}

        <div className="absolute-back-btn" style={{ position: "absolute", top: "40px", left: "clamp(20px, 4vw, 60px)", zIndex: 99 }}>
          <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to About Us</Link>
        </div>
        
        <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 2 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ color: '#94a3b8', fontWeight: 600, letterSpacing: '2px',  fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '12px' }}>BUILDING TRUST &bull; DELIVERING QUALITY</span>
                {/* Red Line from design */}
                <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--primary-red)' }}></div>
            </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(3rem, 6vw, 4.5rem)", margin: "0 0 15px", fontWeight: 800 }}>
            Key <span style={{ color: "var(--primary-red)" }}>Data</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "450px", lineHeight: 1.6, margin: 0 }}>
             Key information about RR Construction (Pvt) Ltd,<br/>our foundation, experience and capabilities.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: isMobile ? "40px 0 80px" : "60px 0 120px", background: "var(--bg-light)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: "24px", alignItems: "stretch" }}>
          
          {/* Left Sidebar */}
          <div style={{ 
              width: isMobile ? "100%" : "300px", 
              background: "var(--white)", 
              borderRadius: "24px", 
              overflow: "hidden", 
              display: "flex", 
              flexDirection: "column",
              border: "1px solid var(--border-soft)",
              flexShrink: 0
          }}>
             <div style={{ padding: "40px 30px 20px" }}>
                 <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-light)", letterSpacing: "1px", margin: "0 0 10px 0" }}>OUR COMPANY</p>
                 <div style={{ borderLeft: "3px solid var(--primary-red)", paddingLeft: "15px", marginBottom: "25px" }}>
                     <h2 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>RR Construction (Pvt) Ltd</h2>
                 </div>
                 <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6 }}>Building reliable infrastructure for a stronger tomorrow.</p>
             </div>
             <div style={{ marginTop: "auto", position: "relative" }}>
                 <div style={{ width: "100%", height: "250px", position: "relative" }}>
                     <img src="/images/about/head-office-building.jpg" alt="RR Construction Head Office" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                     
                     <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to bottom right, var(--white) 20%, transparent 60%)" }} />
                 </div>
             </div>
          </div>

          {/* Right Grid Area */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
              
              {/* Top 3 Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                  <StatCard icon={<Calendar color="#e11d48" size={24} />} bg="#ffe4e6" label="Year Established" value="1995" />
                  <StatCard icon={<Users color="#0284c7" size={24} />} bg="#e0f2fe" label="Workforce" value="1,400+" />
                  <StatCard icon={<Tractor color="#16a34a" size={24} />} bg="#dcfce7" label="Machinery Units" value="1,000+" />
              </div>

              {/* Remaining Data Cards */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
                  <DataCard icon={<Building color="#2563eb" size={20} />} bg="#dbeafe" label="Head Office" value="No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta." />
                  <DataCard icon={<University color="#4f46e5" size={20} />} bg="#e0e7ff" label="National Grading (CIDA)" value="CS2 (Highest Grade in Buildings, Roads, Water Supply & Drainage, Bridges)" />
                  
                  <DataCard icon={<FileText color="#6366f1" size={20} />} bg="#e0e7ff" label="Registration No" value="PV 11346" />
                  <DataCard icon={<ShieldCheck color="#0891b2" size={20} />} bg="#cffafe" label="Quality Certifications" value="ISO 9001:2015, ISO 14001:2015, ISO 45001:2018" />
                  
                  <DataCard icon={<Briefcase color="#ea580c" size={20} />} bg="#ffedd5" label="Ownership" value="Private Limited Liability Company" />
                  <DataCard icon={<FileSearch color="#db2777" size={20} />} bg="#fce7f3" label="Company Auditor" value="P. Wijayawardana & Co." />
                  
                  <DataCard icon={<UserCircle color="#0284c7" size={20} />} bg="#e0f2fe" label="Managing Director" value="Mr. Ranjith Senadeera S. D." />
                  <DataCard icon={<Building color="#ca8a04" size={20} />} bg="#fef08a" label="Company Bankers" value="HNB, DFCC, Sampath, NDB, Commercial, Peoples Bank & NTB" />
              </div>

          </div>

        </div>
      </section>

    </div>
  );
}

// Helpers
function StatCard({ icon, bg, label, value }: { icon: any, bg: string, label: string, value: string }) {
    return (
        <div style={{ background: "var(--white)", borderRadius: "16px", padding: "25px", display: "flex", alignItems: "center", gap: "20px", border: "1px solid var(--border-soft)" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {icon}
            </div>
            <div>
                <p style={{ margin: "0 0 5px 0", fontSize: "0.85rem", color: "var(--text-light)", fontWeight: 600 }}>{label}</p>
                <h3 style={{ margin: 0, fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800 }}>{value}</h3>
            </div>
        </div>
    )
}

function DataCard({ icon, bg, label, value }: { icon: any, bg: string, label: string, value: string }) {
    return (
        <div style={{ background: "var(--white)", borderRadius: "16px", padding: "20px", display: "flex", alignItems: "flex-start", gap: "15px", border: "1px solid var(--border-soft)" }}>
            <div style={{ width: "45px", height: "45px", borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "5px" }}>
                {icon}
            </div>
            <div>
                <p style={{ margin: "0 0 5px 0", fontSize: "0.85rem", color: "var(--text-dark)", fontWeight: 700 }}>{label}</p>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-light)", lineHeight: 1.5 }}>{value}</p>
            </div>
        </div>
    )
}
