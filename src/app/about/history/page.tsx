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

      {/* Ultra-Modern Left-Aligned Timeline */}
      <section style={{ padding: isMobile ? '40px 10px' : '100px 0', background: '#f8fafc', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '900px', position: 'relative' }}>
          <div style={{ textAlign: 'right', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(8rem, 12vw, 12rem)', fontFamily: 'var(--font-heading)', color: 'rgba(229,57,53,0.05)', fontWeight: 900, lineHeight: 0.7, marginBottom: '-20px' }}>HISTORY</h2>
          </div>

          <div style={{ position: 'relative' }}>
            {timelineEvents.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: '30px', marginBottom: '80px', position: 'relative' }}>
                
                {/* Left Column: Icon & Line */}
                <div style={{ width: isMobile ? '50px' : '105px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                   {i !== timelineEvents.length - 1 && (
                     <div style={{ position: 'absolute', top: '60px', bottom: '-80px', width: '2px', background: 'linear-gradient(180deg, var(--primary-red) 0%, rgba(229,57,53,0.1) 100%)' }}></div>
                   )}
                   <div style={{ width: isMobile ? '40px' : '60px', height: isMobile ? '40px' : '60px', borderRadius: '50%', background: 'white', border: '2px solid var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(229,57,53,0.2)', zIndex: 2, position: 'relative' }}>
                     {e.icon}
                   </div>
                </div>

                {/* Right Column: Content Card */}
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                   <div className="hover-lift" style={{ background: 'white', padding: isMobile ? '20px' : '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.02)' }}>
                     
                     {/* Year Badge */}
                     <div style={{ display: 'inline-block', background: 'rgba(229,57,53,0.1)', color: 'var(--primary-red)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 800, marginBottom: '15px' }}>
                       {e.epoch}
                     </div>

                     <h3 style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '15px', position: 'relative', zIndex: 2 }}>{e.title}</h3>
                     
                     <div style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.8, position: 'relative', zIndex: 2 }}>
                       {e.desc}
                     </div>

                     {/* Large abstract watermark number inside the card */}
                     <div style={{ position: 'absolute', bottom: '-25px', right: '-20px', fontSize: 'clamp(8rem, 15vw, 11rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'rgba(229,57,53,0.03)', zIndex: 1, pointerEvents: 'none', lineHeight: 1 }}>
                       {e.epoch === "Present" ? "NOW" : e.epoch}
                     </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
