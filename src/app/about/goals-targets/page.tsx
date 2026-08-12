"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Target, ShieldAlert, Leaf, Clock, GraduationCap, Cpu, ThumbsUp } from 'lucide-react';

export default function GoalsTargets() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const goals = [
    {
      title: "Quality Excellence",
      icon: <Target size={32} color="var(--primary-red)" />,
      items: ["Reduce construction defects and rework to absolute zero.", "Enhance frequency and depth of internal quality inspections.", "Consistently improve end-client satisfaction ratings."]
    },
    {
      title: "Zero Harm (Safety)",
      icon: <ShieldAlert size={32} color="var(--primary-red)" />,
      items: ["Strengthen mandatory safety training for all 1,800+ employees.", "Improve proactive hazard identification on complex sites.", "Increase preventive safety inspections and equipment audits.", "Promote safe heavy-equipment operation protocols."]
    },
    {
      title: "Environmental Performance",
      icon: <Leaf size={32} color="var(--primary-red)" />,
      items: ["Reduce material waste across all civil engineering projects.", "Improve operational energy efficiency and fuel consumption.", "Minimize ecological footprint during land clearing and dredging.", "Optimize aggregate and asphalt production sustainability."]
    },
    {
      title: "Timely Project Delivery",
      icon: <Clock size={32} color="var(--primary-red)" />,
      items: ["Improve critical path scheduling for complex infrastructure.", "Optimize deployment of our 1,000+ heavy machinery fleet.", "Improve resource and material supply chain planning.", "Identify and mitigate potential project risks early."]
    },
    {
      title: "Capability Development",
      icon: <GraduationCap size={32} color="var(--primary-red)" />,
      items: ["Provide continuous technical training for engineering staff.", "Conduct ongoing safety and operational training for machine operators.", "Foster leadership development within project management.", "Encourage professional development and certification."]
    },
    {
      title: "Customer Satisfaction",
      icon: <ThumbsUp size={32} color="var(--primary-red)" />,
      items: ["Maintain absolute transparency in project reporting.", "Ensure rapid responsiveness to client changes and requirements.", "Build long-term relationships through trusted delivery.", "Exceed baseline quality and handover expectations."]
    }
  ];

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/goals.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
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
            Goals & <span className="text-gradient">Targets</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Strategic objectives driving our pursuit of engineering perfection.
          </p>
        </div>
      </section>

      {/* Goals Grid */}
      <section style={{ padding: isMobile ? "40px 10px" : "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Strategic Objectives</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "15px", maxWidth: "800px", margin: "15px auto 0" }}>
              Our targets are designed to continuously elevate our operational standards, ensuring we remain at the forefront of Sri Lanka's infrastructure development.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "80px" }}>
            {goals.map((goal, idx) => (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{ 
                  background: "var(--white)", 
                  padding: "40px 30px", 
                  borderRadius: "24px", 
                  border: "1px solid var(--border-soft)", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
                }}
              >
                <div style={{ marginBottom: "25px", background: "rgba(229, 57, 53, 0.08)", display: "inline-flex", padding: "16px", borderRadius: "16px" }}>
                  {goal.icon}
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "25px" }}>{goal.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                  {goal.items.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-red)", marginTop: "2px" }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technology & Innovation Banner */}
          <div style={{ background: "linear-gradient(135deg, #1f2937, #111827)", borderRadius: "32px", padding: isMobile ? "40px 20px" : "60px", color: "white", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <Cpu size={32} color="var(--primary-red)" />
                <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Technology & Innovation</h3>
              </div>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "20px" }}>
                A core target of RR Construction is the continuous adoption of advanced construction technologies and improved engineering methodologies. 
              </p>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1.1rem" }}>
                We actively invest in modernizing our 1,000+ heavy machinery fleet and digitizing our project management workflows to enhance precision, reduce waste, and accelerate project delivery across Sri Lanka.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
              <h4 style={{ fontSize: isMobile ? "1.8rem" : "2.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--primary-red)", lineHeight: 1.3 }}>
                "Our target is not simply to build more. <br/><span style={{ color: "white" }}>It is to build better.</span>"
              </h4>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", textAlign: "center", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            Explore Our <span className="text-gradient">Sustainability</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            Discover how our environmental targets are transforming our construction sites.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/sustainability" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              View Sustainability <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
