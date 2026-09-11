"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Flag, Construction, ShieldCheck, Map, Factory, ChevronRight } from 'lucide-react';
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
      epoch: "1995",
      title: "Foundation & First Projects",
      desc: <>Established in <strong>1995</strong>, <strong>RR Construction (Pvt) Ltd</strong> began its journey in Sri Lanka's <strong>heavy civil engineering and construction industry</strong> with early civil works carried out in collaboration with <strong>ED Zublin AG</strong> on the <strong>Central Bank Extension Project</strong>. This landmark experience strengthened the company's engineering expertise, project management capabilities, and commitment to quality construction standards, while providing a strong foundation for its growth into <strong>civil engineering, infrastructure development, building construction, and large-scale construction projects in Sri Lanka</strong>. The successful delivery of these early works established RR Construction as a reliable construction partner and laid the foundation for its continued expansion into increasingly complex infrastructure projects.</>,
      icon: <Flag size={24} color="var(--primary-red)" />
    },
    {
      epoch: "2003",
      title: "Building Experience",
      desc: <>Following its early success, <strong>RR Construction (Pvt) Ltd</strong> expanded its technical expertise and workforce, undertaking diverse <strong>civil engineering and infrastructure projects in Sri Lanka</strong> for local and international clients. A key milestone was the <strong>Queen Elizabeth Quay Project at the Port of Colombo in 2003</strong>, which strengthened the company's experience in <strong>maritime and heavy civil engineering</strong>. In 2006, RR Construction further expanded its infrastructure portfolio through the <strong>Ampara Water Treatment Plant</strong>, developing its capabilities in <strong>water infrastructure and specialized civil construction</strong>. These projects strengthened the company's reputation for quality, technical competence, and reliable project delivery, creating a strong foundation for its continued growth in Sri Lanka's <strong>construction and infrastructure development sector</strong>.</>,
      icon: <Map size={24} color="var(--primary-red)" />
    },
    {
      epoch: "2007",
      title: "Construction Capability",
      desc: <>As <strong>RR Construction (Pvt) Ltd</strong> continued to grow, the company expanded its <strong>construction and civil engineering capabilities</strong> across key infrastructure sectors, including <strong>road and highway construction, bridge construction, irrigation, drainage, water supply, and major civil engineering works</strong>. Major milestones included the successful completion of the <strong>Matara Mahanama Bridge in 2007</strong> and the installation of <strong>four steel bridges across Sri Lanka in 2009</strong>, strengthening the company's expertise in structural and bridge engineering. RR Construction also developed capabilities in <strong>multi-storey buildings, water-retaining structures, and complex infrastructure projects</strong>, supported by skilled professionals, technical expertise, construction resources, and integrated project management. This period marked the company's growth into a capable <strong>infrastructure and construction contractor in Sri Lanka</strong>, with the ability to independently deliver complex <strong>heavy civil engineering and infrastructure projects</strong> from planning and engineering through to completion.</>,
      icon: <Construction size={24} color="var(--primary-red)" />
    },
    {
      epoch: "2012",
      title: "Infrastructure Specialist",
      desc: <>Building on its expanding capabilities, <strong>RR Construction (Pvt) Ltd</strong> developed into a specialized <strong>infrastructure and heavy civil engineering contractor in Sri Lanka</strong>, undertaking complex projects across challenging environments. The company strengthened its expertise in <strong>maritime and marine construction</strong>, including dredging, breakwater construction, coastal protection, and reclamation, with notable experience such as the <strong>Oluvil Port Coastal Protection Project in 2012</strong> and works at the <strong>Gandara Fishery Harbour</strong>. Its capabilities also expanded into <strong>heavy steel fabrication, construction equipment rental, landslide mitigation, and rock-fall protection systems</strong>, supporting infrastructure development in Sri Lanka's hill-country regions. International project experience, including the <strong>R. Vandhoo Harbour Seawall Project in the Maldives</strong>, further strengthened the company's technical expertise and ability to deliver specialized <strong>maritime, coastal, geotechnical, structural, and heavy civil engineering projects</strong>.</>,
      icon: <Factory size={24} color="var(--primary-red)" />
    },
    {
      epoch: "Present",
      title: "Current Capability",
      desc: <>Today, RR Construction stands as one of Sri Lanka's premier heavy civil engineering organizations, distinguished by its total resource independence. Over time, the company has strengthened its commitment to internationally recognized management systems, achieving and sustaining <Link href="/about/awards" style={{color: "var(--primary-red)", textDecoration: "none", fontWeight: 600}}>ISO 9001, ISO 14001, and ISO 45001</Link> certifications for quality, environmental stewardship, and occupational health and safety. The organization now operates a massive self-owned fleet exceeding {COMPANY_DATA.machineryFleet} heavy machines, alongside proprietary asphalt and aggregate production facilities, entirely eliminating third-party dependencies. Powered by a dedicated workforce of over {COMPANY_DATA.workforce} professionals and an extensive portfolio of <Link href="/projects" style={{color: "var(--primary-red)", textDecoration: "none", fontWeight: 600}}>over {COMPANY_DATA.completedProjects} completed projects</Link>, RR Construction continues to engineer the critical road, bridge, maritime, and water infrastructure that shapes the nation's socio-economic future.</>,
      icon: <ShieldCheck size={24} color="var(--primary-red)" />
    }
  ];

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", overflowX: "hidden" }}>
      
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
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
               &larr; Back to About Us
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Our Journey of <span style={{ color: "var(--primary-red)" }}>Excellence.</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Three decades of steady growth, technical evolution, and nation-building. Discover how we evolved into Sri Lanka's leading heavy civil engineering powererhouse.
          </p>
        </div>
      </section>

      {/* Professional Corporate Timeline */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>
              Our History & <span style={{ color: 'var(--primary-red)' }}>Milestones</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-red)', margin: '0 auto 20px' }}></div>
            <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
              A legacy of engineering excellence, built on decades of trust, capability expansion, and successful project delivery.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {timelineEvents.map((e, i) => (
              <div key={i} className="hover-lift" style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row', 
                background: 'var(--white)', 
                borderRadius: '12px', 
                border: '1px solid var(--border-soft)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                overflow: 'hidden'
              }}>
                
                {/* Left: Year & Icon (Distinct Corporate Block) */}
                <div style={{ 
                  width: isMobile ? '100%' : '260px', 
                  background: 'var(--bg-base)', 
                  padding: '40px 30px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderRight: isMobile ? 'none' : '1px solid var(--border-soft)',
                  borderBottom: isMobile ? '1px solid var(--border-soft)' : 'none'
                }}>
                  <div style={{ background: 'rgba(229,57,53,0.1)', padding: '16px', borderRadius: '50%', marginBottom: '20px', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {e.icon}
                  </div>
                  <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--text-dark)', margin: 0, lineHeight: 1 }}>
                    {e.epoch}
                  </h2>
                </div>

                {/* Right: Content Area */}
                <div style={{ flex: 1, padding: isMobile ? '30px 20px' : '50px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--primary-red)', marginBottom: '15px' }}>
                    {e.title}
                  </h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
                    {e.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
