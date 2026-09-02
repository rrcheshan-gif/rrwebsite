"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Users, BookOpen, Building2, MapPin, CheckCircle2, X } from 'lucide-react';

export default function SocialResponsibility() {
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
          backgroundImage: "url('/images/about_section.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
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
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(229, 57, 53, 0.4) 0%, rgba(15, 23, 42, 0.95) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/sustainability" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Sustainability
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Social <span style={{ color: "var(--primary-red)" }}>Responsibility</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.05rem" : "1.3rem", marginTop: "20px", maxWidth: "800px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            We do not just construct infrastructure; we build communities, empower local economies, and minimize disruption.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "50px", alignItems: "stretch" }}>
            <div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px",  marginBottom: "10px" }}>Community First</h4>
              <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.2 }}>
                Engineering for <span style={{ color: "var(--primary-red)" }}>The People</span>
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                Large-scale construction inherently impacts local communities. Whether we are driving a new expressway through the heart of the country or mitigating dangerous landslides in the central hills, RR Construction views the local community as a primary stakeholder.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                Our Corporate Social Responsibility (CSR) initiatives are deeply integrated into our project planning. We aim to leave every community vastly improved not just by the final infrastructure, but by the economic and social opportunities generated during the construction phase.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                We strictly adhere to a policy of transparent communication, conducting comprehensive environmental and social impact assessments before breaking ground. By keeping community leaders informed and actively seeking their input, we ensure that our operational footprint causes zero undue disruption to their daily lives and livelihoods.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "justify" }}>
                Furthermore, our commitment to sustainable development means that a portion of our project budget is reinvested directly into the local economy. From sourcing raw materials locally to empowering grassroots vendors, our operations serve as a catalyst for immediate socio-economic upliftment.
              </p>
            </div>
            <div style={{ background: "var(--white)", padding: isMobile ? "30px" : "50px", borderRadius: "24px", border: "1px solid rgba(229, 57, 53, 0.2)", boxShadow: "0 20px 40px rgba(229, 57, 53, 0.05)" }}>
              <Users size={50} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "25px" }}>Core CSR Objectives</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Prioritizing the hiring of local labor surrounding project sites.",
                  "Providing vocational and technical training for rural youth in construction trades.",
                  "Upgrading local access roads and drainage systems during primary construction.",
                  "Direct financial and material support for local schools, hospitals, and temples.",
                  "Strict community liaison protocols to address public grievances rapidly."
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "15px", paddingBottom: "15px", borderBottom: idx !== 4 ? "1px solid var(--border-soft)" : "none" }}>
                    <CheckCircle2 size={22} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action Areas Grid */}
      <section style={{ padding: "50px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0" }}>
              Making an Impact
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            
            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <MapPin size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Rural Connectivity</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                Through strategic infrastructure developments such as the iRoad program and critical rural bridge reconstructions, we play a pivotal role in bridging the urban-rural divide. By systematically enhancing regional connectivity, we directly stimulate local agrarian economies, drastically reducing transport times for agricultural supply chains, and facilitating seamless access to urban markets and essential services for remote communities.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <BookOpen size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Education & Youth</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                We are deeply committed to community empowerment through localized workforce integration. By actively recruiting and mentoring youth from regions adjacent to our major infrastructure sites - such as the Central Expressway and large-scale maritime projects - we provide invaluable, hands-on technical training. This proactive knowledge transfer equips the next generation with specialized skills, creating sustainable, long-term career trajectories in the heavy civil engineering sector.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <Building2 size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Minimizing Disruption</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                Executing complex projects in densely populated urban centers demands meticulous logistical planning. During critical water infrastructure upgrades and high-traffic road rehabilitations, we deploy advanced traffic management protocols and strategically phased night-time operations. Our uncompromising commitment to operational efficiency ensures that public safety is prioritized and the daily routines of citizens remain undisturbed, minimizing civic disruption while maximizing project momentum.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CSR Initiatives Showcase */}
      <section style={{ padding: "80px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0" }}>
              Our CSR <span style={{ color: "var(--primary-red)" }}>Initiatives</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
              Real impact is measured through action. Explore some of our recent community and social responsibility projects.
            </p>
          </div>

          {/* Initiative Item */}
          <div style={{ background: "var(--white)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", border: "1px solid var(--border-soft)", marginBottom: "40px" }}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
              <div style={{ flex: 1, padding: isMobile ? "30px" : "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.9rem", fontWeight: 700, alignSelf: "flex-start", marginBottom: "20px" }}>Employee Welfare</span>
                <h3 style={{ fontSize: "2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                  Honoring Our Foundation: A Gift to Our First Employee
                </h3>
                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                  At RR Construction, our extraordinary growth over the past three decades is built entirely upon the dedication and hard work of our people. As a company that values loyalty and long-term commitment, we firmly believe that our employees are our greatest asset.
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "justify" }}>
                  As part of our ongoing social responsibility and employee welfare initiatives, we recently had the profound honor of presenting a special token of gratitude to our very first employee. This gift serves as a symbol of our deep appreciation for their unwavering dedication, reflecting our core belief that the people who laid the foundation of this company will always remain at the heart of its success.
                </p>
              </div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2px", background: "var(--border-soft)" }}>
                <img src="/CSR/csr-first-employee-1.jpg" alt="CSR Initiative 1" onClick={() => setLightboxImage('/CSR/csr-first-employee-1.jpg')} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "150px" : "250px", cursor: "pointer", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform="scale(1.02)"} onMouseOut={(e) => e.currentTarget.style.transform="scale(1)"} />
                <img src="/CSR/csr-first-employee-2.jpg" alt="CSR Initiative 2" onClick={() => setLightboxImage('/CSR/csr-first-employee-2.jpg')} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "150px" : "250px", cursor: "pointer", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform="scale(1.02)"} onMouseOut={(e) => e.currentTarget.style.transform="scale(1)"} />
                <img src="/CSR/csr-first-employee-3.jpg" alt="CSR Initiative 3" onClick={() => setLightboxImage('/CSR/csr-first-employee-3.jpg')} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "150px" : "250px", cursor: "pointer", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform="scale(1.02)"} onMouseOut={(e) => e.currentTarget.style.transform="scale(1)"} />
                <img src="/CSR/csr-first-employee-4.jpg" alt="CSR Initiative 4" onClick={() => setLightboxImage('/CSR/csr-first-employee-4.jpg')} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "150px" : "250px", cursor: "pointer", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform="scale(1.02)"} onMouseOut={(e) => e.currentTarget.style.transform="scale(1)"} />
              </div>
            </div>
          </div>

          {/* Initiative Item 2 */}
          <div style={{ background: "var(--white)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", border: "1px solid var(--border-soft)", marginBottom: "40px" }}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row-reverse" }}>
              <div style={{ flex: 1, padding: isMobile ? "30px" : "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.9rem", fontWeight: 700, alignSelf: "flex-start", marginBottom: "20px" }}>Community & Heritage</span>
                <h3 style={{ fontSize: "2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                  Construction of Muddaragama Chethiyaramaya Temple
                </h3>
                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                  As part of our continuous commitment to uplifting local communities and preserving cultural heritage, RR Construction proudly contributed to the structural development of the Muddaragama Chethiyaramaya Temple. We recognize that spiritual centers form the heart of rural communities, fostering unity and peace.
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "justify" }}>
                  By dedicating our engineering expertise and resources to this sacred project, we ensured the delivery of a robust, beautifully crafted space for religious observances. This initiative reflects our core philosophy of giving back to the communities that host our operations, building not just commercial infrastructure, but landmarks of cultural significance.
                </p>
              </div>
              <div style={{ flex: 1, background: "var(--border-soft)", display: "flex" }}>
                <img src="/CSR/csr-temple-1.png" alt="Muddaragama Chethiyaramaya Temple" onClick={() => setLightboxImage('/CSR/csr-temple-1.png')} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "250px" : "100%", cursor: "pointer", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform="scale(1.02)"} onMouseOut={(e) => e.currentTarget.style.transform="scale(1)"} />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.9)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }} onClick={() => setLightboxImage(null)}>
          <button onClick={() => setLightboxImage(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", color: "white", cursor: "pointer", padding: "10px" }}>
            <X size={40} />
          </button>
          <img src={lightboxImage} alt="Enlarged CSR image" style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

    </div>
  );
}



