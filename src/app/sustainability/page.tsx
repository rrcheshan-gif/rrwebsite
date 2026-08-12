"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Leaf, ShieldCheck, Award, Users, ArrowRight } from 'lucide-react';

export default function SustainabilityHub() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const pillars = [
    {
      id: "environmental",
      title: "Environmental Stewardship",
      desc: "Strict adherence to ISO 14001:2015. Optimizing our machinery fleet, reducing emissions, and protecting ecological balance on every site.",
      icon: <Leaf size={40} color="#16a34a" />,
      link: "/sustainability/environmental-stewardship",
      color: "#16a34a",
      bgImage: "/images/thudugala-crusher-plant.jpg"
    },
    {
      id: "health-safety",
      title: "Health & Safety",
      desc: "Our unwavering 'Zero Harm' policy backed by ISO 45001:2018. Guaranteeing the physical security of our entire workforce.",
      icon: <ShieldCheck size={40} color="#ea580c" />,
      link: "/sustainability/health-and-safety",
      color: "#ea580c",
      bgImage: "/images/health-safety-site.jpg"
    },
    {
      id: "quality",
      title: "Quality Management",
      desc: "Engineering excellence certified by ISO 9001:2015 and CIDA CS-2. Delivering structural integrity that lasts generations.",
      icon: <Award size={40} color="#2563eb" />,
      link: "/sustainability/quality-management",
      color: "#2563eb",
      bgImage: "/images/hero-bg-2.jpg"
    },
    {
      id: "social",
      title: "Social Responsibility",
      desc: "Uplifting rural economies, providing vocational training, and building infrastructure that truly empowers local communities.",
      icon: <Users size={40} color="#e11d48" />,
      link: "/sustainability/social-responsibility",
      color: "#e11d48",
      bgImage: "/images/about_section.jpg"
    }
  ];

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/sustainability-green.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "70px 20px" : "120px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center 30%", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Home
            </Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>Our Responsibility</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.8rem" : "4.5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", lineHeight: 1.2 }}>
            Sustainability <br/><span style={{ color: "var(--primary-red)" }}>& HSE</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.05rem" : "1.3rem", marginTop: "20px", maxWidth: "800px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Building the foundations of Sri Lanka demands an absolute commitment to environmental balance, uncompromising worker safety, and community empowerment.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section style={{ padding: isMobile ? "20px 10px 80px" : "40px 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0" }}>
              Our Four Pillars
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
              Explore how our certified management systems translate into real-world impact across every infrastructure project we undertake.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {pillars.map((pillar) => (
              <Link href={pillar.link} key={pillar.id} style={{ textDecoration: "none" }} className="hover-lift">
                <div style={{ 
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  background: "var(--white)", 
                  border: `1px solid rgba(0,0,0,0.05)`, 
                  boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative"
                }}>
                  {/* Image Header */}
                  <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)`, zIndex: 1 }}></div>
                    <img src={pillar.bgImage} alt={pillar.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="img-hover-scale" />
                    <div style={{ position: "absolute", bottom: "20px", left: "20px", zIndex: 2, background: "white", padding: "12px", borderRadius: "12px", display: "inline-flex", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}>
                      {pillar.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div style={{ padding: "30px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 style={{ fontSize: "1.6rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px 0" }}>
                      {pillar.title}
                    </h3>
                    <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "30px", flexGrow: 1 }}>
                      {pillar.desc}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", color: pillar.color, fontWeight: 700, fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                      Explore <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
        </div>
      </section>

    </div>
  );
}
