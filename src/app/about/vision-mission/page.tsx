"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Target, CheckCircle2, Globe, Shield, HardHat, TrendingUp, Star, Gem, Leaf, Users, Lightbulb, HeartHandshake, Handshake, ShieldCheck, Languages } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function VisionMission() {
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState('EN');

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
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2rem" : "2.8rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", textTransform: "uppercase" }}>
            Vision, Mission & <span style={{ color: "var(--primary-red)" }}>Values</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Guiding principles that drive our commitment to engineering excellence.
          </p>
        </div>
      </section>

      {/* Language Toggle */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div style={{ display: "inline-flex", background: "var(--white)", padding: "5px", borderRadius: "50px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", border: "1px solid var(--border-soft)", alignItems: "center" }}>
          <div style={{ padding: "0 15px", color: "var(--text-light)" }}><Languages size={20} /></div>
          <button onClick={() => setLang('EN')} style={{ padding: "10px 25px", borderRadius: "40px", border: "none", background: lang === 'EN' ? "var(--primary-red)" : "transparent", color: lang === 'EN' ? "white" : "var(--text-dark)", fontWeight: "bold", cursor: "pointer", transition: "0.3s", fontSize: "1rem" }}>English</button>
          <button onClick={() => setLang('SI')} style={{ padding: "10px 25px", borderRadius: "40px", border: "none", background: lang === 'SI' ? "var(--primary-red)" : "transparent", color: lang === 'SI' ? "white" : "var(--text-dark)", fontWeight: "bold", cursor: "pointer", transition: "0.3s", fontSize: "1rem", fontFamily: "iskoola pota, sans-serif" }}>සිංහල</button>
        </div>
      </div>

      {/* Vision Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Eye size={50} color="var(--primary-red)" style={{ margin: "0 auto 15px" }} />
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "2px" }}>
              {lang === 'EN' ? "Our Vision" : "අපගේ දැක්ම"}
            </h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto 0", borderRadius: "2px" }}></div>
          </div>

          <div style={{ background: "var(--white)", padding: isMobile ? "30px 20px" : "50px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", border: "1px solid var(--border-soft)", textAlign: "center" }}>
            {lang === 'EN' ? (
              <h3 style={{ fontSize: isMobile ? "1.4rem" : "1.8rem", color: "var(--text-dark)", margin: "0", fontFamily: "var(--font-heading)", lineHeight: 1.5, fontWeight: 800 }}>
                “To engineer a stronger, smarter, and more sustainable Sri Lanka — building infrastructure that connects communities, drives progress, and stands the test of time.”
              </h3>
            ) : (
              <h3 style={{ fontSize: isMobile ? "1.3rem" : "1.6rem", color: "var(--text-dark)", margin: "0", lineHeight: 1.8, fontWeight: 700 }}>
                “ශ්‍රී ලංකාව වඩාත් ශක්තිමත්, නවීන හා තිරසාර රටක් බවට පත් කරමින්, ජනතාව සම්බන්ධ කරන, ආර්ථික ප්‍රගතිය වේගවත් කරන සහ පරම්පරා ගණනාවක් පවතින යටිතල පහසුකම් නිර්මාණය කිරීම.”
              </h3>
            )}
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Target size={50} color="var(--primary-red)" style={{ margin: "0 auto 15px" }} />
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "2px" }}>
              {lang === 'EN' ? "Our Mission" : "අපගේ මෙහෙවර"}
            </h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto 0", borderRadius: "2px" }}></div>
          </div>

          <div style={{ background: "var(--white)", padding: isMobile ? "30px 20px" : "50px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", border: "1px solid var(--border-soft)", textAlign: "center" }}>
            {lang === 'EN' ? (
              <h3 style={{ fontSize: isMobile ? "1.3rem" : "1.6rem", color: "var(--text-dark)", margin: "0", fontFamily: "var(--font-heading)", lineHeight: 1.6, fontWeight: 800 }}>
                “To deliver world-class construction and civil engineering solutions through engineering excellence, advanced technology, responsible resource management, uncompromising quality, and a relentless commitment to safety, sustainability, and client satisfaction.”
              </h3>
            ) : (
              <h3 style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", color: "var(--text-dark)", margin: "0", lineHeight: 1.8, fontWeight: 600 }}>
                “ඉංජිනේරු විශිෂ්ටත්වය, නවීන තාක්ෂණය, වගකීම් සහගත සම්පත් කළමනාකරණය, උසස් තත්ත්ව ප්‍රමිතීන් සහ දැඩි ආරක්ෂක හා තිරසාර ප්‍රතිපත්ති මත පදනම්ව, අපගේ ගනුදෙනුකරුවන්ගේ අවශ්‍යතා හා අපේක්ෂාවන් ඉක්මවා යන ලෝක මට්ටමේ ඉදිකිරීම් හා සිවිල් ඉංජිනේරු විසඳුම් සැපයීම.”
              </h3>
            )}
          </div>

        </div>
      </section>

      {/* Our Commitment */}
      <section style={{ padding: isMobile ? "70px 20px" : "100px 20px", background: "linear-gradient(135deg, #1f2937, #111827)", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <Handshake size={60} color="var(--primary-red)" style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 10px", letterSpacing: "2px", textTransform: "uppercase" }}>
            {lang === 'EN' ? "Our Commitment" : "අපගේ කැපවීම"}
          </h2>
          
          {lang === 'EN' ? (
            <>
              <h3 style={{ fontSize: isMobile ? "1.4rem" : "1.8rem", color: "var(--primary-red)", fontWeight: 700, margin: "0 0 40px" }}>Engineering Excellence. Building Trust. Shaping Tomorrow.</h3>
              <div style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", lineHeight: 1.8, fontWeight: 500, color: "#e2e8f0" }}>
                <p style={{ marginBottom: "15px" }}>We don't just build projects.</p>
                <p style={{ fontSize: isMobile ? "1.5rem" : "1.8rem", fontWeight: 800, color: "white", marginBottom: "30px", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>We build the nation's future.</p>
                <p style={{ marginBottom: "40px", fontSize: isMobile ? "1.1rem" : "1.3rem", lineHeight: 1.9, color: "#cbd5e1" }}>
                  We are committed to ensuring every road creates a connection, every bridge an opportunity, every harbour economic growth, and every project a lasting contribution to Sri Lanka's future.
                </p>
              </div>
            </>
          ) : (
            <>
              <h3 style={{ fontSize: isMobile ? "1.3rem" : "1.6rem", color: "var(--primary-red)", fontWeight: 700, margin: "0 0 40px" }}>Engineering Excellence. Building Trust. Shaping Tomorrow.</h3>
              <div style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", lineHeight: 1.8, fontWeight: 500, color: "#e2e8f0" }}>
                <p style={{ marginBottom: "15px" }}>අපි ව්‍යාපෘති පමණක් ගොඩනඟන්නේ නැත.</p>
                <p style={{ fontSize: isMobile ? "1.5rem" : "1.8rem", fontWeight: 800, color: "white", marginBottom: "30px", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>අපි රටේ අනාගතය ගොඩනඟමු.</p>
                <p style={{ marginBottom: "40px", fontSize: isMobile ? "1.1rem" : "1.3rem", lineHeight: 1.9, color: "#cbd5e1" }}>
                  අපගේ සෑම මාර්ගයකින්ම සම්බන්ධතාවයක්ද, සෑම පාලමකින්ම අවස්ථාවක්ද, සෑම වරායකින්ම ආර්ථික වර්ධනයක්ද, සෑම ව්‍යාපෘතියකින්ම ශ්‍රී ලංකාවේ අනාගතයට දායකත්වයක්ද නිර්මාණය කිරීමට අපි කැපවී සිටිමු.
                </p>
              </div>
            </>
          )}

          <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.2)", display: "inline-block" }}>
            <p style={{ margin: 0, fontWeight: 800, fontSize: isMobile ? "1.2rem" : "1.4rem", color: "var(--primary-red)", letterSpacing: "1px" }}>
              RR Construction — Engineering the Ground Beneath Tomorrow.
            </p>
          </div>
          
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ padding: isMobile ? "60px 10px" : "100px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Our Core Values</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "15px", maxWidth: "800px", margin: "15px auto 0" }}>
              The fundamental beliefs that guide our behavior, decisions, and relationships.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {[
              { title: "Engineering Excellence", desc: "We strive for technical superiority in every project, ensuring our infrastructure solutions are robust.", icon: <Star size={32} color="var(--primary-red)" /> },
              { title: "Integrity & Transparency", desc: "We conduct our business with absolute honesty. Transparency builds lasting trust.", icon: <ShieldCheck size={32} color="var(--primary-red)" /> },
              { title: "Quality", desc: "Our commitment to ISO 9001 standards ensures that quality is never compromised.", icon: <Gem size={32} color="var(--primary-red)" /> },
              { title: "Safety First", desc: "A 'Zero Harm' culture is our priority. We strictly enforce ISO 45001 standards.", icon: <HardHat size={32} color="var(--primary-red)" /> },
              { title: "Sustainability", desc: "We integrate ISO 14001 environmental management practices into our operations.", icon: <Leaf size={32} color="var(--primary-red)" /> },
              { title: "Teamwork", desc: `Collaboration is our strength. We foster an environment where our ${COMPANY_DATA.workforce} employees work seamlessly.`, icon: <Users size={32} color="var(--primary-red)" /> },
            ].map((val, idx) => (
              <div key={idx} style={{ background: "var(--bg-light)", padding: "30px", borderRadius: "20px", border: "1px solid var(--border-soft)", transition: "transform 0.3s" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ marginBottom: "20px" }}>{val.icon}</div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>{val.title}</h3>
                <p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

    </div>
  );
}
