"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Eye, ShieldCheck, HardHat, Lightbulb, Leaf } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

// Helper component for smooth scroll reveals
function Reveal({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up"|"left"|"right" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let transformStart = 'translateY(40px)';
  if (direction === 'left') transformStart = 'translateX(-40px)';
  if (direction === 'right') transformStart = 'translateX(40px)';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0,0)' : transformStart,
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function VisionMission() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ backgroundColor: "#020617", minHeight: "100vh", overflowX: "hidden", color: "white" }}>
      
      {/* Immersive Dark Hero */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "100px 20px 40px" }}>
        
        {/* Abstract Background Elements */}
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "70%", height: "70%", background: "radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, rgba(2, 6, 23, 0) 70%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "60%", height: "60%", background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, rgba(2, 6, 23, 0) 70%)", zIndex: 1, pointerEvents: "none" }} />
        
        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "1200px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <Reveal>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "15px", marginBottom: "20px", padding: "8px 24px", background: "rgba(255,255,255,0.03)", borderRadius: "50px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary-red)", boxShadow: "0 0 10px var(--primary-red)" }}></span>
                <span style={{ color: "#94a3b8", fontWeight: 600, letterSpacing: "2px", fontSize: "0.85rem", textTransform: "uppercase" }}>Our Compass</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3.5rem, 8vw, 6rem)", margin: "0", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-2px", color: "white" }}>
                Defining the <br/>
                <span style={{ color: "transparent", WebkitTextStroke: "2px var(--primary-red)", backgroundImage: "linear-gradient(90deg, #ef4444, #dc2626)", WebkitBackgroundClip: "text" }}>Future</span> of Engineering.
              </h1>
            </Reveal>
          </div>

          {/* V & M Split Layout */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "40px", alignItems: "stretch" }}>
            
            {/* Vision Card */}
            <Reveal direction="left" delay={200} className="vm-card" style={{ flex: 1 }}>
              <div style={{ 
                height: "100%", 
                background: "rgba(255,255,255,0.02)", 
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "32px",
                padding: isMobile ? "40px 30px" : "60px 50px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.5s ease"
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.border = "1px solid rgba(239, 68, 68, 0.3)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)"; }}
              >
                <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "15rem", fontFamily: "var(--font-heading)", fontWeight: 900, color: "rgba(255,255,255,0.02)", lineHeight: 1, pointerEvents: "none" }}>V</div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ width: "70px", height: "70px", borderRadius: "20px", background: "rgba(239, 68, 68, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
                    <Eye size={36} color="#ef4444" />
                  </div>
                  <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 25px 0", color: "white" }}>Our Vision</h2>
                  <p style={{ color: "#94a3b8", fontSize: "1.2rem", lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
                    To be the leading engineering and construction organization in Sri Lanka, continuously developing new capabilities to overcome emerging challenges while empowering the nation through sustainable infrastructure.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Mission Card */}
            <Reveal direction="right" delay={300} className="vm-card" style={{ flex: 1 }}>
              <div style={{ 
                height: "100%", 
                background: "rgba(255,255,255,0.02)", 
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "32px",
                padding: isMobile ? "40px 30px" : "60px 50px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.5s ease"
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.border = "1px solid rgba(239, 68, 68, 0.3)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.05)"; }}
              >
                <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "15rem", fontFamily: "var(--font-heading)", fontWeight: 900, color: "rgba(255,255,255,0.02)", lineHeight: 1, pointerEvents: "none" }}>M</div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ width: "70px", height: "70px", borderRadius: "20px", background: "rgba(239, 68, 68, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
                    <Target size={36} color="#ef4444" />
                  </div>
                  <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 25px 0", color: "white" }}>Our Mission</h2>
                  <p style={{ color: "#94a3b8", fontSize: "1.15rem", lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
                    To deliver uncompromising engineering excellence through a highly skilled workforce, massive proprietary machinery fleet, and robust technological methodologies. We are committed to achieving total customer satisfaction, adhering to stringent quality and safety standards, and contributing to the sustainable development of Sri Lanka.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
          
          <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
            <Link href="/about" style={{ color: "#cbd5e1", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "5px", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e)=>e.currentTarget.style.color="white"} onMouseOut={(e)=>e.currentTarget.style.color="#cbd5e1"}>
              &larr; Back to Company Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Core Values Grid */}
      <section style={{ padding: "100px 20px", background: "#0f172a", position: "relative" }}>
        
        <div style={{ position: "absolute", top: 0, left: 0, width: "14%%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.3), transparent)" }}></div>

        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px" }}>
                Pillars of Excellence
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>The fundamental principles that guide our projects, protect our people, and ensure we always deliver on our promises.</p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "25px" }}>
            {
              [ { title: "QUALITY", subtitle: "Built to Perform", desc: "Exceeding international standards in every pour, weld, and structural element.", icon: <ShieldCheck size={32} color="white" /> },
              { title: "INNOVATION", subtitle: "Engineered for Tomorrow", desc: "Adopting advanced methodologies to solve the most complex civil engineering challenges.", icon: <Lightbulb size={32} color="white" /> },
              { title: "SAFETY", subtitle: "Zero Harm", desc: "Rigorous ISO-certified protocols prioritizing the well-being of every worker on site.", icon: <HardHat size={32} color="white" /> },
              { title: "SUSTAINABILITY", subtitle: "Building Responsibly", desc: "Minimizing ecological impact while building resilient infrastructure for future generations.", icon: <Leaf size={32} color="white" /> }
            ].map((val, idx) => (
              <Reveal key={idx} delay={idx * 150} direction="up">
                <div style={{ 
                  background: "rgba(255,255,255,0.02)", 
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "24px", 
                  padding: "40px 30px", 
                  height: "100%",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "crosshair"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.4)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                >
                  <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "var(--primary-red)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px", boxShadow: "0 10px 20px rgba(239, 68, 68, 0.3)" }}>
                    {val.icon}
                  </div>
                  <h3 style={{ fontSize: "0.95rem", color: "#ef4444", fontWeight: 800, letterSpacing: "2px", margin: "0 0 10px" }}>
                    {val.title}
                  </h3>
                  <p style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, margin: "0 0 15px", lineHeight: 1.2 }}>
                    {val.subtitle}
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section style={{ padding: "120px 20px", background: "#020617", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 40px", letterSpacing: "-1px" }}>
            Let's Build What's Next.
          </h2>
          <Link href="/contact" style={{ 
            background: "var(--primary-red)", 
            color: "white", 
            padding: "20px 50px", 
            borderRadius: "50px",
            fontSize: "1.1rem", 
            fontWeight: 700, 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "10px",
            boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
            transition: "transform 0.3s ease, boxShadow 0.3s ease",
            textDecoration: "none"
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 15px 40px rgba(239, 68, 68, 0.5)"; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(239, 68, 68, 0.3)"; }}
          >
            Contact Our Team <ArrowRight size={20} />
          </Link>
        </Reveal>
      </section>

    </div>
  );
}
