"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Target, Flag, TrendingUp, ShieldCheck, Leaf, Users, Construction, Clock } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function GoalsAndTargets() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const corporateGoals = [
    {
      title: "Operational Excellence",
      desc: "Maintain our position as a top-tier heavy civil engineering firm by consistently delivering projects that exceed national quality and safety standards.",
      icon: <ShieldCheck size={32} color="var(--primary-red)" />
    },
    {
      title: "Sustainable Growth",
      desc: "Expand our infrastructure portfolio responsibly while minimizing our carbon footprint and integrating green engineering practices across all operations.",
      icon: <Leaf size={32} color="var(--primary-red)" />
    },
    {
      title: "Resource Independence",
      desc: "Further scale our internal capabilities—from machinery to raw materials (Asphalt, ABC, M-Sand)—to ensure 100% self-reliance in project execution.",
      icon: <Construction size={32} color="var(--primary-red)" />
    },
    {
      title: "Workforce Development",
      desc: "Empower our 1,400+ employees through continuous training, prioritizing their health, safety, and professional advancement in the engineering sector.",
      icon: <Users size={32} color="var(--primary-red)" />
    }
  ];

  const strategicTargets = [
    {
      label: "Zero-Harm Safety Record",
      target: "Maintain 0 Lost Time Injuries (LTI) across all major highway and bridge projects annually.",
      icon: <Target size={24} color="var(--white)" />
    },
    {
      label: "On-Time Project Delivery",
      target: "Achieve 100% on-time completion for critical national infrastructure contracts.",
      icon: <Clock size={24} color="var(--white)" />
    },
    {
      label: "Fleet Modernization",
      target: "Upgrade 20% of our heavy machinery fleet to more fuel-efficient models by the next fiscal year.",
      icon: <TrendingUp size={24} color="var(--white)" />
    },
    {
      label: "Material Quality Benchmark",
      target: "Sustain ISO 9001 compliance with a 99.9% pass rate in aggregate and asphalt laboratory testing.",
      icon: <Flag size={24} color="var(--white)" />
    }
  ];

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/services-build.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
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
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Home
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <div style={{ background: "var(--primary-red)", padding: "12px", borderRadius: "50%", display: "inline-flex" }}>
              <Target size={32} color="white" />
            </div>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2rem" : "2.8rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)",  }}>
            Goals & <span style={{ color: "var(--primary-red)" }}>Targets</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "20px", maxWidth: "750px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Driving Sri Lanka's infrastructure forward through measurable objectives, operational excellence, and an unwavering commitment to sustainable progress.
          </p>
        </div>
      </section>

      {/* Main Objective */}
      <section style={{ padding: isMobile ? "30px 10px" : "40px 20px" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ background: "rgba(229, 57, 53, 0.05)", padding: "30px", borderRadius: "16px", borderLeft: "4px solid var(--primary-red)", textAlign: "center" }}>
            <h4 style={{ color: "var(--primary-red)", fontSize: "1.1rem", fontWeight: 800,  marginBottom: "15px" }}>Primary Objective</h4>
            <p style={{ color: "var(--text-dark)", fontSize: "1.2rem", fontWeight: 600, margin: 0, fontStyle: "italic", lineHeight: 1.6 }}>
              "To achieve a high degree of customer satisfaction through appropriate technology, effective project delivery, cost-conscious execution and timely completion."
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Goals Section */}
      <section style={{ padding: isMobile ? "20px 10px" : "40px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px", lineHeight: 1.2 }}>
              Our Strategic <span style={{ color: "var(--primary-red)" }}>Goals</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.7 }}>
              These foundational pillars guide our daily operations and long-term strategic decisions across all our construction divisions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {corporateGoals.map((goal, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: "var(--white)", 
                  padding: "40px 30px", 
                  borderRadius: "24px", 
                  boxShadow: "0 15px 35px rgba(0,0,0,0.04)", 
                  border: "1px solid var(--border-soft)",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ background: "rgba(229, 57, 53, 0.08)", width: "70px", height: "70px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "25px" }}>
                  {goal.icon}
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>
                  {goal.title}
                </h3>
                <p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: 0, fontSize: "1.05rem" }}>
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Targets Section */}
      <section style={{ padding: isMobile ? "60px 10px" : "100px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
            
            {/* Left side text */}
            <div style={{ flex: "1 1 min(100%, 400px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <div style={{ width: "40px", height: "3px", background: "var(--primary-red)" }}></div>
                <h2 style={{ color: "var(--primary-red)", fontWeight: 800, letterSpacing: "2px",  margin: 0, fontSize: "0.95rem", fontFamily: "var(--font-heading)" }}>Measurable Outcomes</h2>
              </div>
              <h3 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", color: "var(--text-dark)", margin: "0 0 25px", fontFamily: "var(--font-heading)", lineHeight: 1.15, fontWeight: 800 }}>
                Setting the Benchmark for <span style={{ color: "var(--primary-red)" }}>Performance</span>
              </h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "25px" }}>
                At RR Construction, we don't just set goals; we establish concrete, measurable targets. These targets keep our teams accountable and ensure we continuously deliver the highest standard of infrastructure to the nation.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                Whether it's accelerating project timelines through our internal machinery fleet or upholding flawless safety records on complex marine and bridge projects, our targets define our success.
              </p>
            </div>

            {/* Right side targets list */}
            <div style={{ flex: "1 1 450px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {strategicTargets.map((st, idx) => (
                  <div key={idx} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "20px", 
                    background: "var(--bg-light)", 
                    padding: "25px", 
                    borderRadius: "20px",
                    borderLeft: "4px solid var(--primary-red)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.03)"
                  }}>
                    <div style={{ background: "linear-gradient(135deg, var(--primary-red), #b71c1c)", minWidth: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 5px 15px rgba(229, 57, 53, 0.3)" }}>
                      {st.icon}
                    </div>
                    <div>
                      <h4 style={{ color: "var(--text-dark)", fontSize: "1.15rem", fontWeight: 800, margin: "0 0 6px", fontFamily: "var(--font-heading)" }}>
                        {st.label}
                      </h4>
                      <p style={{ color: "var(--text-light)", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>
                        {st.target}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
