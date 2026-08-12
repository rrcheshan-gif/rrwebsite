"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, Users, CheckCircle, Truck, MapPin, Anchor, Building2, HardHat, Cog, ShieldCheck, Factory, Award } from 'lucide-react';

export default function KeyData() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const stats = [
    { title: "Established", value: "1995", icon: <Building2 size={36} color="var(--primary-red)" /> },
    { title: "Skilled Workforce", value: "1,800+", icon: <Users size={36} color="var(--primary-red)" /> },
    { title: "Completed Projects", value: "100+", icon: <CheckCircle size={36} color="var(--primary-red)" /> },
    { title: "Heavy Construction Machines", value: "1,000+", icon: <Truck size={36} color="var(--primary-red)" /> }
  ];

  const certifications = [
    { title: "ISO 9001", desc: "Quality Management System" },
    { title: "ISO 14001", desc: "Environmental Management System" },
    { title: "ISO 45001", desc: "Occupational Health & Safety" }
  ];

  const expertise = [
    { title: "Road Construction & Rehabilitation", icon: <MapPin size={28} /> },
    { title: "Highways & Expressways", icon: <MapPin size={28} /> },
    { title: "Bridge & Overpass Construction", icon: <Building2 size={28} /> },
    { title: "Maritime & Harbour Infrastructure", icon: <Anchor size={28} /> },
    { title: "Dredging & Reclamation", icon: <Anchor size={28} /> },
    { title: "Water Infrastructure", icon: <Cog size={28} /> },
    { title: "Landslide & Soil Mitigation", icon: <HardHat size={28} /> },
    { title: "Geotechnical Engineering", icon: <HardHat size={28} /> },
    { title: "Aggregate & Material Production", icon: <Factory size={28} /> },
    { title: "Asphalt Production", icon: <Factory size={28} /> },
    { title: "Heavy Equipment Operations", icon: <Truck size={28} /> }
  ];

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/key-data.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "70px 20px" : "120px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to About
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.8rem" : "4.5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", textTransform: "uppercase" }}>
            Key <span style={{ color: "var(--primary-red)" }}>Data</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            The numbers behind our capability to engineer Sri Lanka's most demanding infrastructure.
          </p>
        </div>
      </section>

      {/* Primary Statistics */}
      <section style={{ padding: isMobile ? "40px 10px" : "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <BarChart3 size={40} color="var(--primary-red)" style={{ margin: "0 auto 15px" }} />
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Performance at Scale</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginBottom: "80px" }}>
            {stats.map((stat, idx) => (
              <div key={idx}  style={{ background: "var(--white)", padding: "40px 30px", borderRadius: "24px", textAlign: "center", border: "1px solid var(--border-soft)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <div style={{ marginBottom: "20px", display: "inline-block", padding: "20px", background: "var(--bg-light)", borderRadius: "50%" }}>
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: "3.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 10px", lineHeight: 1 }}>{stat.value}</h3>
                <p style={{ color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem", fontWeight: 700, margin: 0 }}>{stat.title}</p>
              </div>
            ))}
          </div>

          {/* ISO Certifications */}
          <div style={{ background: "linear-gradient(135deg, #1f2937, #111827)", borderRadius: "32px", padding: isMobile ? "40px 20px" : "60px", color: "white", marginBottom: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <ShieldCheck size={40} color="var(--primary-red)" style={{ margin: "0 auto 15px" }} />
              <h2 style={{ fontSize: "2.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>International Standards</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
              {certifications.map((cert, idx) => (
                <div key={idx} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", padding: "30px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "20px", backdropFilter: "blur(10px)" }}>
                  <Award size={40} color="var(--primary-red)" />
                  <div>
                    <h4 style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 5px", color: "#f1f5f9" }}>{cert.title}</h4>
                    <p style={{ color: "#94a3b8", margin: 0, fontSize: "1rem", fontWeight: 500 }}>{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Areas of Expertise */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Core Areas of Expertise</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "15px" }}>Comprehensive civil engineering capabilities across all major sectors.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {expertise.map((item, idx) => (
              <div key={idx} className="hover-lift" style={{ background: "var(--white)", border: "1px solid var(--border-soft)", padding: "20px 25px", borderRadius: "16px", display: "flex", alignItems: "center", gap: "20px", transition: "transform 0.3s, box-shadow 0.3s" }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)' }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ color: "var(--primary-red)" }}>
                  {item.icon}
                </div>
                <h4 style={{ margin: 0, color: "var(--text-dark)", fontSize: "1.05rem", fontWeight: 700 }}>{item.title}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", textAlign: "center", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            See Our <span style={{ color: "var(--primary-red)" }}>Capabilities</span> in Action
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            Review our portfolio of complex engineering projects successfully delivered across Sri Lanka.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/projects" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              Explore Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
