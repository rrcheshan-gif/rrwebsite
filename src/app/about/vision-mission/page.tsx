"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Eye, ShieldCheck, HardHat, Lightbulb, Leaf } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

// Helper component for smooth scroll reveals
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
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
      
      {/* Hero Section */}
      <section 
        style={{ 
          position: "relative",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 20px 60px",
          backgroundImage: "url('/images/home/bridge.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div style={{ 
          position: "absolute", 
          top: 0, left: 0, right: 0, bottom: 0, 
          background: "linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)", 
          zIndex: 1 
        }} />
        
        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "1000px", textAlign: "center" }}>
          <Reveal>
            <div style={{ display: "inline-block", marginBottom: "25px" }}>
              <span style={{ 
                color: "var(--primary-red)", 
                fontWeight: 700, 
                letterSpacing: "4px", 
                textTransform: "uppercase", 
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <div style={{ width: "30px", height: "2px", backgroundColor: "var(--primary-red)" }} />
                Our Purpose
                <div style={{ width: "30px", height: "2px", backgroundColor: "var(--primary-red)" }} />
              </span>
            </div>
            
            <h1 style={{ 
              color: "white", 
              fontFamily: "var(--font-heading)", 
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)", 
              fontWeight: 800, 
              lineHeight: 1.1, 
              margin: "0 0 30px",
              letterSpacing: "-1px"
            }}>
              Engineering the Future.<br/>
              <span style={{ color: "#cbd5e1", fontWeight: 300 }}>Building What Matters.</span>
            </h1>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "40px" }}>
              <Link href="/about" style={{ 
                color: "#94a3b8", 
                textDecoration: "none", 
                fontWeight: 600, 
                textTransform: "uppercase", 
                letterSpacing: "1px", 
                fontSize: "0.85rem",
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                paddingBottom: "5px",
                transition: "color 0.3s"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "white"}
              onMouseOut={(e) => e.currentTarget.style.color = "#94a3b8"}
              >
                &larr; Back to About
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission Core */}
      <section style={{ padding: "clamp(60px, 8vw, 120px) 20px", backgroundColor: "var(--bg-base)", position: "relative" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", 
            gap: "clamp(30px, 4vw, 50px)" 
          }}>
            
            {/* Vision Block */}
            <Reveal delay={100}>
              <div style={{ 
                background: "var(--white)", 
                padding: "clamp(40px, 5vw, 60px)", 
                borderRadius: "24px", 
                boxShadow: "0 20px 60px rgba(0,0,0,0.03)", 
                border: "1px solid var(--border-soft)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", opacity: 0.03, transform: "scale(2)", pointerEvents: "none" }}>
                  <Eye size={200} color="var(--text-dark)" />
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px", position: "relative", zIndex: 2 }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(211, 47, 47, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Eye size={24} color="var(--primary-red)" />
                  </div>
                  <h2 style={{ margin: 0, fontSize: "1rem", color: "var(--primary-red)", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>Our Vision</h2>
                </div>
                
                <h3 style={{ 
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)", 
                  color: "var(--text-dark)", 
                  fontFamily: "var(--font-heading)", 
                  fontWeight: 800, 
                  lineHeight: 1.4, 
                  margin: "0 0 20px",
                  position: "relative", 
                  zIndex: 2 
                }}>
                  "To engineer a stronger, smarter, and more sustainable Sri Lanka - building infrastructure that connects communities, drives progress, and stands the test of time."
                </h3>
                
                <div style={{ marginTop: "auto", paddingTop: "30px", borderTop: "1px solid var(--border-soft)", position: "relative", zIndex: 2 }}>
                  <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.05rem", margin: 0 }}>
                    We envision a future where robust, sustainable, and world-class infrastructure forms the backbone of national socio-economic development.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Mission Block */}
            <Reveal delay={300}>
              <div style={{ 
                background: "linear-gradient(145deg, #1f2937, #111827)", 
                padding: "clamp(40px, 5vw, 60px)", 
                borderRadius: "24px", 
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)", 
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", opacity: 0.05, transform: "scale(2)", pointerEvents: "none" }}>
                  <Target size={200} color="white" />
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px", position: "relative", zIndex: 2 }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Target size={24} color="white" />
                  </div>
                  <h2 style={{ margin: 0, fontSize: "1rem", color: "white", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>Our Mission</h2>
                </div>
                
                <h3 style={{ 
                  fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", 
                  color: "white", 
                  fontFamily: "var(--font-heading)", 
                  fontWeight: 600, 
                  lineHeight: 1.6, 
                  margin: "0 0 20px",
                  position: "relative", 
                  zIndex: 2 
                }}>
                  “To deliver world-class construction and heavy civil engineering solutions through engineering excellence, advanced technology, responsible resource management, uncompromising quality, and a relentless commitment to safety, sustainability, and client satisfaction.”
                </h3>
                
                <div style={{ marginTop: "auto", paddingTop: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", position: "relative", zIndex: 2 }}>
                  <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1.05rem", margin: 0 }}>
                    Our mission drives every decision, ensuring we remain the nation's premier engineering and construction organization.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Brand Statement Banner */}
      <section style={{ 
        position: "relative",
        padding: "clamp(80px, 8vw, 120px) 20px",
        backgroundColor: "var(--white)",
        borderTop: "1px solid var(--border-soft)",
        borderBottom: "1px solid var(--border-soft)",
        overflow: "hidden"
      }}>
        {/* Subtle Background Pattern/Element */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100vw", height: "100%", opacity: 0.02, pointerEvents: "none" }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ 
              fontSize: "clamp(2rem, 4vw, 3.5rem)", 
              color: "var(--text-dark)", 
              fontFamily: "var(--font-heading)", 
              fontWeight: 800, 
              lineHeight: 1.2, 
              margin: "0 0 30px",
              letterSpacing: "-0.5px"
            }}>
              Engineering Excellence.<br/>
              Building Trust.<br/>
              <span style={{ color: "var(--primary-red)" }}>Shaping Tomorrow.</span>
            </h2>
            <p style={{ 
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)", 
              color: "var(--text-light)", 
              lineHeight: 1.8, 
              margin: 0,
              fontWeight: 500,
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              “We don't simply build projects. We build the infrastructure that shapes Sri Lanka's future.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Commitments */}
      <section style={{ padding: "clamp(80px, 8vw, 120px) 20px", backgroundColor: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 70px)" }}>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>
                Our Core Commitments
              </h2>
              <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto 0", borderRadius: "2px" }}></div>
            </div>
          </Reveal>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", 
            gap: "30px" 
          }}>
            {[
              { title: "QUALITY", subtitle: "Built to Perform", icon: <ShieldCheck size={36} color="var(--primary-red)" /> },
              { title: "INNOVATION", subtitle: "Engineered for Tomorrow", icon: <Lightbulb size={36} color="var(--primary-red)" /> },
              { title: "SAFETY", subtitle: "Zero Harm, Every Site", icon: <HardHat size={36} color="var(--primary-red)" /> },
              { title: "SUSTAINABILITY", subtitle: "Building Responsibly", icon: <Leaf size={36} color="var(--primary-red)" /> }
            ].map((commitment, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div 
                  style={{ 
                    background: "var(--white)", 
                    padding: "40px 30px", 
                    borderRadius: "20px", 
                    boxShadow: "0 10px 40px rgba(0,0,0,0.03)", 
                    border: "1px solid var(--border-soft)",
                    textAlign: "center",
                    height: "100%",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "default"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.03)';
                  }}
                >
                  <div style={{ 
                    width: "80px", 
                    height: "80px", 
                    borderRadius: "50%", 
                    background: "rgba(211, 47, 47, 0.05)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    margin: "0 auto 25px",
                    transition: "transform 0.4s ease"
                  }}>
                    {commitment.icon}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--text-light)", fontWeight: 700, letterSpacing: "2px", margin: "0 0 10px" }}>
                    {commitment.title}
                  </h3>
                  <p style={{ color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 800, margin: 0 }}>
                    {commitment.subtitle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        padding: "100px 20px", 
        backgroundColor: "var(--primary-red)", 
        color: "white", 
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative circle */}
        <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", bottom: "-50%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(0,0,0,0.1)", pointerEvents: "none" }}></div>

        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 40px", letterSpacing: "-1px" }}>
              Let’s Build What’s Next.
            </h2>
            <Link href="/contact" className="btn" style={{ 
              background: "white", 
              color: "var(--primary-red)", 
              padding: "18px 45px", 
              fontSize: "1.1rem", 
              fontWeight: 800, 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "10px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
            }}>
              Contact Our Team <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
