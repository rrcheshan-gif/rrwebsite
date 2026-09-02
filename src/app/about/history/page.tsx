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
      desc: <>{COMPANY_DATA.name} was officially established in {COMPANY_DATA.established}, marking the beginning of a three-decade journey in Sri Lanka's heavy civil engineering sector. The company commenced its early operations through critical civil construction work undertaken in collaboration with ED Zublin AG on the Central Bank extension project. This foundational project served as a vital stepping stone, allowing the newly formed organization to demonstrate its technical competence on a major national site. By working alongside established international contractors, RR Construction absorbed rigorous project execution methodologies and laid the groundwork for a robust engineering culture. This initial success established the company's reputation for dependable delivery, providing the practical construction experience necessary to bid for increasingly complex infrastructure developments in the years that followed.</>,
      icon: <Flag size={24} color="var(--primary-red)" />
    },
    {
      epoch: "2003",
      title: "Building Experience",
      desc: <>Following its initial successes, RR Construction entered a strategic period of capacity building, developing substantial experience through diverse infrastructure projects for both local and international clients. During this early developmental phase, the organization prioritized assembling a core workforce of skilled engineering professionals capable of managing larger operational scopes. The company steadily broadened its portfolio across critical sectors, successfully delivering complex assignments such as the Queen Elizabeth Quay Project at the Colombo Harbour in 2003. This period was characterized by a deliberate expansion of technical capabilities, enabling the company to undertake large-scale public utilities such as the Ampara Water Treatment Plant in 2006. By consistently meeting rigorous technical specifications, RR Construction solidified its standing as a trusted contracting partner capable of executing specialized heavy civil engineering works.</>,
      icon: <Map size={24} color="var(--primary-red)" />
    },
    {
      epoch: "2007",
      title: "Construction Capability",
      desc: <>As operational capacity matured, RR Construction initiated a comprehensive expansion of its core engineering scope. The organization systematically diversified beyond foundational earthworks and structural concrete, establishing dedicated divisions for roads, highways, bridges, irrigation, drainage, and complex water supply systems. This capability growth was demonstrated through the successful completion of major structural milestones, including the Matara Mahanama Bridge in 2007 and the critical installation of Four Steel Bridges across Sri Lanka in 2009. By integrating multi-disciplinary engineering expertise, the company became capable of delivering holistic infrastructure solutions, ranging from multi-storey buildings to advanced water retaining structures. This phase marked RR Construction's transition from a specialized sub-contractor to a primary infrastructure developer, capable of <Link href="/services" style={{color: "var(--primary-red)", textDecoration: "none", fontWeight: 600}}>managing all aspects of heavy civil engineering</Link> independently.</>,
      icon: <Construction size={24} color="var(--primary-red)" />
    },
    {
      epoch: "2012",
      title: "Infrastructure Specialist",
      desc: <>Leveraging its broadened capabilities, RR Construction evolved into a highly specialized infrastructure contractor, taking on the nation's most demanding heavy civil engineering challenges. The company made significant strides in maritime construction, executing advanced dredging, breakwater construction, and coastal reclamation works, exemplified by the Oluvil Port Coastal Protection project in 2012 and subsequent complex operations at the Gandara Fishery Harbour. Engineering capabilities further deepened to encompass heavy steel fabrication, equipment rental, and specialized landslide mitigation utilizing rock-fall protection systems in Sri Lanka's critical hill-country zones. During this period, the organization also developed experience through projects involving international clients and overseas infrastructure work, such as the R. Vandhoo harbour seawall project in the Maldives. This sector specialization cemented the company's role as a versatile heavy civil engineering powerhouse.</>,
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
