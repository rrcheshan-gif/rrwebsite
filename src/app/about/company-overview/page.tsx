"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, HardHat, Building2, Droplets, MapPin, Trophy, Users, Globe2 } from 'lucide-react';
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
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2rem" : "2.8rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)",  }}>
            RR <span style={{ color: "var(--primary-red)" }}>Overview</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Building the Foundations of a Stronger Sri Lanka since {COMPANY_DATA.established} through dependable engineering and uncompromising quality.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "stretch" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <div style={{ width: "40px", height: "3px", background: "var(--primary-red)" }}></div>
                <h2 style={{ color: "var(--primary-red)", fontWeight: 800, letterSpacing: "2px",  margin: 0, fontSize: "1rem", fontFamily: "var(--font-heading)" }}>Introduction</h2>
              </div>
              <h3 style={{ fontSize: isMobile ? "2rem" : "3rem", color: "var(--text-dark)", margin: "0 0 30px", fontFamily: "var(--font-heading)", lineHeight: 1.2, fontWeight: 800 }}>
                A Legacy of Engineering <br/><span style={{ color: "var(--text-light)" }}>Excellence.</span>
              </h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                Founded in {COMPANY_DATA.established}, {COMPANY_DATA.name} stands at the forefront of Sri Lanka's heavy civil engineering and infrastructure development sector. Over the past {COMPANY_DATA.yearsOfExcellence} years, we have systematically expanded our operational capabilities to deliver complex, large-scale engineering solutions that drive national progress. By integrating an expansive, self-owned fleet of specialized heavy machinery with the technical acumen of our elite engineering divisions, we consistently execute high-stakes projects across maritime, highway, bridge, and water infrastructure domains. Our unwavering commitment to precision, health and safety, and international quality standards has cemented our reputation as a trusted, uncompromising leader in shaping the nation's most critical infrastructure.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                <Link href="/about/history" style={{ color: "var(--primary-red)", fontWeight: 600, textDecoration: "none" }}>Read our full History & Milestones &rarr;</Link>
              </p>
              
              <div style={{ marginBottom: "30px" }}>
                <h4 style={{ color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "15px" }}>Comprehensive Engineering Scope:</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {[
                    "Earthworks & Structural Concrete",
                    "Roads & Highways",
                    "Bridges & Overpasses",
                    "Irrigation & Drainage",
                    "Water Supply & Sewerage",
                    "Water Retaining Structures",
                    "Maritime Construction",
                    "Dredging & Reclamation",
                    "Water Towers & Treatment Plants",
                    "Heavy Steel Fabrication & Erection",
                    "Mechanical Maintenance",
                    "Machine & Equipment Rental",
                    "Buildings & Facilities"
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary-red)" }}></div>
                      <span style={{ color: "var(--text-light)", fontSize: "0.95rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ paddingBottom: "20px" }}></div>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative", boxShadow: "0 20px 50px rgba(0,0,0,0.1)", height: "100%" }}>
                <img src="/images/overview-page.png" alt="RR Construction Project Site" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: "30px", left: "-20px", background: "var(--primary-red)", color: "white", padding: "20px 30px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(229, 57, 53, 0.4)" }}>
                  <h4 style={{ margin: 0, fontSize: "2rem", fontFamily: "var(--font-heading)", fontWeight: 800 }}>{COMPANY_DATA.established}</h4>
                  <p style={{ margin: 0, fontSize: "0.9rem",  letterSpacing: "1px", fontWeight: 600 }}>Year Established</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MD Message */}
      <section style={{ padding: isMobile ? "60px 10px" : "100px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "center" }}>
            
            <div style={{ flex: 1, minWidth: 'min(100%, 300px)', display: "flex", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "absolute", bottom: "-20px", right: "20px", background: "var(--primary-red)", color: "white", padding: "15px 25px", borderRadius: "16px", zIndex: 3, boxShadow: "0 15px 30px rgba(229, 57, 53, 0.3)" }}>
                <h4 style={{ margin: 0, fontSize: "1.2rem", fontFamily: "var(--font-heading)", color: "#ffffff", fontWeight: 800 }}>{COMPANY_DATA.yearsOfExcellence} Years</h4>
                <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 600, color: "#ffffff", letterSpacing: "0.5px",  }}>Leadership</p>
              </div>
              <div style={{ padding: "12px", background: "var(--white)", borderRadius: "32px", width: "100%", maxWidth: "450px", boxShadow: "0 20px 50px rgba(0,0,0,0.08)", position: "relative", zIndex: 2, border: "2px solid var(--border-soft)" }}>
                <div style={{ width: "100%", height: isMobile ? "400px" : "500px", background: "var(--border-soft)", borderRadius: "24px", overflow: "hidden" }}>
                  <img 
                    src="/images/director_hd.jpg" 
                    alt="Mr. Ranjith Senadhera - Managing Director" 
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} 
                  />
                </div>
              </div>
            </div>

            <div style={{ flex: 1.5, minWidth: 'min(100%, 350px)' }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <div style={{ width: "40px", height: "3px", background: "var(--primary-red)" }}></div>
                <h3 style={{ color: "var(--primary-red)", fontSize: "1rem",  letterSpacing: "2px", margin: 0, fontWeight: 800, fontFamily: "var(--font-heading)" }}>Message from the Managing Director</h3>
              </div>
              <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", marginBottom: "10px", fontFamily: "var(--font-heading)", fontWeight: 800 }}>Mr. Ranjith Senadhera</h2>
              <h4 style={{ color: "var(--text-light)", fontSize: "1.15rem", fontWeight: 500, marginBottom: "40px", borderBottom: "1px solid var(--border-soft)", paddingBottom: "30px" }}>
                Managing Director, RR Construction (Pvt) Ltd
              </h4>
              
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", top: "-20px", left: "-20px", fontSize: "5rem", color: "var(--border-soft)", fontFamily: "Georgia, serif", lineHeight: 1, zIndex: 0 }}>"</span>
                <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "25px", position: "relative", zIndex: 1 }}>
                  By continuously developing new capabilities to overcome emerging challenges, introducing structural changes to the organization, and creating a strong culture of teamwork combined with professional methodologies, we have grown into one of the country's leading infrastructure developers.
                </p>
                <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.05rem", position: "relative", zIndex: 1 }}>
                  Our highly experienced workforce and massive fleet of self-owned heavy machinery allow us to execute complex road, bridge, maritime, and structural engineering projects efficiently, maintaining the highest standards of safety and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey & Strength */}
      <section style={{ padding: isMobile ? "60px 10px" : "100px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px" }}>Our Journey & Capabilities</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              Today, RR Construction is a fully integrated engineering firm capable of managing all aspects of large-scale civil infrastructure development from the ground up.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", marginBottom: "60px" }}>
            {[
              { title: "Roads & Highways", desc: "Expertise in national highway construction, asphalt paving, and rural road rehabilitation.", icon: <MapPin size={32} color="var(--primary-red)" /> },
              { title: "Bridges & Structures", desc: "Advanced concrete and steel structural engineering for overpasses and waterway bridges.", icon: <Building2 size={32} color="var(--primary-red)" /> },
              { title: "Maritime Infrastructure", desc: "Deep-water dredging, breakwater construction, and fishery harbour development.", icon: <Droplets size={32} color="var(--primary-red)" /> },
              { title: "Geotechnical Engineering", desc: "Specialized landslide mitigation, soil stabilization, and retaining structures.", icon: <HardHat size={32} color="var(--primary-red)" /> }
            ].map((item, idx) => (
              <div key={idx}  style={{ padding: "40px 30px", background: "var(--white)", borderRadius: "24px", border: "1px solid var(--border-soft)", transition: "transform 0.3s, box-shadow 0.3s" }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)' }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ marginBottom: "25px", background: "rgba(229, 57, 53, 0.1)", display: "inline-block", padding: "15px", borderRadius: "16px" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1.3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>{item.title}</h3>
                <p style={{ color: "var(--text-light)", lineHeight: 1.7, fontSize: "1rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={{ background: "linear-gradient(135deg, #1f2937, #111827)", borderRadius: "32px", padding: isMobile ? "40px 20px" : "60px", color: "white", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px" }}>Unmatched Internal Strength</h3>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "20px" }}>
                We rely on our own resources rather than third-party dependencies. Our operations are powe'red by a highly skilled workforce of experienced engineers and construction professionals.
              </p>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1.1rem" }}>
                Combined with a self-owned fleet of heavy construction machines and proprietary aggregate production plants, we maintain total control over project timelines and quality parameters.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "300px", display: "flex", gap: "20px", flexDirection: "column" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "30px", borderRadius: "20px", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h4 style={{ fontSize: "3rem", color: "var(--primary-red)", margin: 0, fontFamily: "var(--font-heading)", fontWeight: 800, lineHeight: 1 }}>{COMPANY_DATA.workforce}</h4>
                <p style={{ color: "white", margin: "10px 0 0", fontSize: "1rem", fontWeight: 600,  letterSpacing: "1px" }}>Dedicated Workforce</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "30px", borderRadius: "20px", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h4 style={{ fontSize: "3rem", color: "var(--primary-red)", margin: 0, fontFamily: "var(--font-heading)", fontWeight: 800, lineHeight: 1 }}>{COMPANY_DATA.machineryFleet}</h4>
                <p style={{ color: "white", margin: "10px 0 0", fontSize: "1rem", fontWeight: 600,  letterSpacing: "1px" }}>Heavy Machinery Fleet</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Engineering With Responsibility */}
      <section style={{ padding: isMobile ? "60px 10px" : "80px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
          <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px" }}>Engineering With Responsibility</h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "800px", margin: "0 auto 50px" }}>
            We strictly adhere to global standards, ensuring that every project satisfies the highest technical requirements while minimizing environmental impact and protecting the health and safety of everyone involved.
          </p>
          
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {[
              "ISO 9001 - Quality Management",
              "ISO 14001 - Environmental Management",
              "ISO 45001 - Occupational Health & Safety",
              "Timely Project Delivery",
              "Sustainable Construction Practices",
              "Client Satisfaction"
            ].map((item, idx) => (
              <div key={idx} style={{ background: "var(--bg-light)", padding: "15px 25px", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px", fontWeight: 600, color: "var(--text-dark)", border: "1px solid var(--border-soft)" }}>
                <CheckCircle2 size={18} color="var(--primary-red)" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "40px 20px" : "60px 20px", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ShieldCheck size={48} color="var(--primary-red)" style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            Engineering Sri Lanka's <span style={{ color: "var(--primary-red)" }}>Tomorrow</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            Discover how our comprehensive heavy civil engineering capabilities are building the nation's critical infrastructure.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/projects" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              Explore Our Capabilities <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
