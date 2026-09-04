"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Eye, ShieldCheck, HardHat, Lightbulb, Leaf } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

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
    <div style={{ backgroundColor: "var(--bg-light)", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* Light Corporate Hero */}
      <section style={{ 
        position: "relative", 
        padding: isMobile ? "120px 20px 60px" : "160px 20px 80px", 
        backgroundColor: "var(--white)",
        overflow: "hidden"
      }}>
        {/* Subtle grid pattern background */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03, pointerEvents: "none" }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-light)" />
          </svg>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "1200px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <Reveal>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <span style={{ width: "30px", height: "2px", background: "var(--primary-red)" }}></span>
                <span style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", fontSize: "0.9rem", textTransform: "uppercase" }}>Our Purpose</span>
                <span style={{ width: "30px", height: "2px", background: "var(--primary-red)" }}></span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem, 6vw, 4.5rem)", margin: "0", fontWeight: 900, lineHeight: 1.1, color: "var(--text-dark)", letterSpacing: "-1px" }}>
                Vision & <span style={{ color: "var(--primary-red)" }}>Mission</span>
              </h1>
            </Reveal>
          </div>

          {/* V & M Split Layout - Light Theme */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "40px", alignItems: "stretch" }}>
            
            {/* Vision Card */}
            <Reveal direction="left" delay={200} style={{ flex: 1 }}>
              <div style={{ 
                height: "100%", 
                background: "var(--white)", 
                border: "1px solid var(--border-soft)",
                borderRadius: "32px",
                padding: isMobile ? "40px 30px" : "60px 50px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.04)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease"
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.08)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.04)"; }}
              >
                <div style={{ position: "absolute", top: "-20px", right: "-10px", fontSize: "18rem", fontFamily: "var(--font-heading)", fontWeight: 900, color: "rgba(0,0,0,0.02)", lineHeight: 1, pointerEvents: "none" }}>V</div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ width: "80px", height: "80px", borderRadius: "24px", background: "rgba(229, 57, 53, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", color: "var(--primary-red)" }}>
                    <Eye size={40} />
                  </div>
                  <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 25px 0", color: "var(--text-dark)" }}>Our Vision</h2>
                  <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                    To be the leading engineering and construction organization in Sri Lanka, continuously developing new capabilities to overcome emerging challenges while empowering the nation through sustainable infrastructure.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Mission Card */}
            <Reveal direction="right" delay={300} style={{ flex: 1 }}>
              <div style={{ 
                height: "100%", 
                background: "var(--white)", 
                border: "1px solid var(--border-soft)",
                borderRadius: "32px",
                padding: isMobile ? "40px 30px" : "60px 50px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.04)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease"
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.08)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.04)"; }}
              >
                <div style={{ position: "absolute", top: "-20px", right: "-10px", fontSize: "18rem", fontFamily: "var(--font-heading)", fontWeight: 900, color: "rgba(0,0,0,0.02)", lineHeight: 1, pointerEvents: "none" }}>M</div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ width: "80px", height: "80px", borderRadius: "24px", background: "rgba(229, 57, 53, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", color: "var(--primary-red)" }}>
                    <Target size={40} />
                  </div>
                  <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 25px 0", color: "var(--text-dark)" }}>Our Mission</h2>
                  <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
                    To deliver uncompromising engineering excellence through a highly skilled workforce, massive proprietary machinery fleet, and robust technological methodologies. We are committed to achieving total customer satisfaction, adhering to stringent quality and safety standards, and contributing to the sustainable development of Sri Lanka.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
          
        </div>
      </section>

      {/* Modern Core Values Grid */}
      <section style={{ padding: "100px 20px", background: "var(--bg-light)", position: "relative" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px" }}>
                Pillars of Excellence
              </h2>
              <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto 20px", borderRadius: "2px" }}></div>
              <p style={{ color: "var(--text-light)", fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto", fontWeight: 500 }}>The fundamental principles that guide our projects, protect our people, and ensure we always deliver on our promises.</p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "30px" }}>
            {[
              { title: "QUALITY", subtitle: "Built to Perform", desc: "Exceeding international standards in every pour, weld, and structural element.", icon: <ShieldCheck size={32} /> },
              { title: "INNOVATION", subtitle: "Engineered for Tomorrow", desc: "Adopting advanced methodologies to solve the most complex civil engineering challenges.", icon: <Lightbulb size={32} /> },
              { title: "SAFETY", subtitle: "Zero Harm", desc: "Rigorous ISO-certified protocols prioritizing the well-being of every worker on site.", icon: <HardHat size={32} /> },
              { title: "SUSTAINABILITY", subtitle: "Building Responsibly", desc: "Minimizing ecological impact while building resilient infrastructure for future generations.", icon: <Leaf size={32} /> }
            ].map((val, idx) => (
              <Reveal key={idx} delay={idx * 150} direction="up">
                <div style={{ 
                  background: "var(--white)", 
                  border: "1px solid var(--border-soft)",
                  borderRadius: "24px", 
                  padding: "40px 30px", 
                  height: "100%",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = "var(--primary-red)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(229, 57, 53, 0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = "var(--border-soft)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
                }}
                >
                  <div style={{ width: "70px", height: "70px", borderRadius: "20px", background: "rgba(229, 57, 53, 0.08)", color: "var(--primary-red)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px" }}>
                    {val.icon}
                  </div>
                  <h3 style={{ fontSize: "0.95rem", color: "var(--primary-red)", fontWeight: 800, letterSpacing: "2px", margin: "0 0 10px" }}>
                    {val.title}
                  </h3>
                  <h4 style={{ color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, margin: "0 0 15px", lineHeight: 1.2 }}>
                    {val.subtitle}
                  </h4>
                  <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section style={{ padding: "100px 20px", backgroundColor: "var(--white)", borderTop: "1px solid var(--border-soft)", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 40px", letterSpacing: "-1px" }}>
            Let's Build What's Next.
          </h2>
          <Link href="/contact" style={{ 
            background: "var(--primary-red)", 
            color: "white", 
            padding: "18px 45px", 
            borderRadius: "50px",
            fontSize: "1.1rem", 
            fontWeight: 700, 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "10px",
            boxShadow: "0 10px 20px rgba(229, 57, 53, 0.2)",
            textDecoration: "none"
          }}>
            Contact Our Team <ArrowRight size={20} />
          </Link>
        </Reveal>
      </section>

    </div>
  );
}
