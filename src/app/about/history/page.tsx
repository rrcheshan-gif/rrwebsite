"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Flag, Construction, ShieldCheck, Map, Factory, Globe } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function HistoryTimeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const timelineEvents = [
    {
      epoch: COMPANY_DATA.established.toString(),
      title: "Foundation & First Projects",
      desc: `${COMPANY_DATA.name} was founded. The company commenced operations through civil construction work undertaken with ED Zublin AG on the Central Bank extension project.`,
      icon: <Flag size={24} color="white" />
    },
    {
      epoch: "Early Development",
      title: "Building Experience",
      desc: "Developed experience through initial infrastructure projects for local and international clients, establishing the core engineering workforce.",
      icon: <Map size={24} color="white" />
    },
    {
      epoch: "Expansion Phase",
      title: "Construction Capabilities Growth",
      desc: "Expanded scope to include earthworks, structural concrete, buildings, roads, highways, bridges, irrigation, drainage, and water supply systems.",
      icon: <Construction size={24} color="white" />
    },
    {
      epoch: "Sector Development",
      title: "Infrastructure Specialist",
      desc: "Evolved into an infrastructure specialist handling heavy steel fabrication, maritime construction, dredging, reclamation, and mechanical maintenance.",
      icon: <Factory size={24} color="white" />
    },
    {
      epoch: "Present",
      title: "Current Capability",
      desc: `Today, with a massive self-owned fleet of ${COMPANY_DATA.machineryFleet} heavy machines and ${COMPANY_DATA.workforce} workforce, we operate as a leading civil engineering firm.`,
      icon: <ArrowRight size={24} color="white" />
    }
  ];

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/Background.jpeg'), linear-gradient(180deg, #1f2937, #111827)", 
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
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to About
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.5rem" : "4.5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", textTransform: "uppercase" }}>
            Company <span style={{ color: "var(--primary-red)" }}>History</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Three decades of steady growth, technical evolution, and nation-building.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Our Timeline</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "15px", maxWidth: "800px", margin: "15px auto 0" }}>
              From a regional contractor in {COMPANY_DATA.established} to a national civil engineering powerhouse today.
            </p>
          </div>

          <div style={{ position: "relative", padding: isMobile ? "0" : "20px 0" }}>
            {/* Vertical Line */}
            <div style={{ 
              position: "absolute", 
              left: isMobile ? "30px" : "50%", 
              top: 0, 
              bottom: 0, 
              width: "4px", 
              background: "linear-gradient(to bottom, rgba(229, 57, 53, 0.1), var(--primary-red), rgba(229, 57, 53, 0.1))", 
              transform: isMobile ? "none" : "translateX(-50%)" 
            }}></div>

            {timelineEvents.map((event, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: "flex", 
                  justifyContent: isMobile ? "flex-start" : (idx % 2 === 0 ? "flex-end" : "flex-start"), 
                  paddingLeft: isMobile ? "70px" : "0", 
                  position: "relative", 
                  marginBottom: "50px",
                  width: "100%"
                }}
              >
                {/* Timeline Node */}
                <div style={{ 
                  position: "absolute", 
                  left: isMobile ? "32px" : "50%", 
                  top: "20px",
                  transform: "translate(-50%, -50%)", 
                  width: "50px", 
                  height: "50px", 
                  borderRadius: "50%", 
                  background: "var(--primary-red)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  boxShadow: "0 0 0 5px rgba(229, 57, 53, 0.2)",
                  zIndex: 2
                }}>
                  {event.icon}
                </div>

                {/* Content Box */}
                <div  style={{ 
                  width: isMobile ? "100%" : "45%", 
                  background: "var(--white)", 
                  padding: "30px", 
                  borderRadius: "20px", 
                  border: "1px solid var(--border-soft)", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  position: "relative"
                }}>
                  <span style={{ color: "var(--primary-red)", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>
                    {event.epoch}
                  </span>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>
                    {event.title}
                  </h3>
                  <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "40px 20px" : "60px 20px", textAlign: "center", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            View Our <span style={{ color: "var(--primary-red)" }}>Achievements</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            Decades of experience has resulted in widespread recognition for our engineering capabilities.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about/awards" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              View Awards & Achievements <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
