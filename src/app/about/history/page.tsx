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
      epoch: COMPANY_DATA.established.toString(),
      title: "Foundation & First Projects",
      desc: <>{COMPANY_DATA.name} was officially established in {COMPANY_DATA.established}, marking the beginning of a three-decade journey in Sri Lanka's heavy civil engineering sector. The company commenced its early operations through critical civil construction work undertaken in collaboration with ED Zublin AG on the Central Bank extension project. This foundational project served as a vital stepping stone, allowing the newly formed organization to demonstrate its technical competence on a major national site. By working alongside established international contractors, RR Construction absorbed rigorous project execution methodologies and laid the groundwork for a robust engineering culture. This initial success established the company's reputation for dependable delivery, providing the practical construction experience necessary to bid for increasingly complex infrastructure developments in the years that followed.</>,
      icon: <Flag size={24} color="var(--primary-red)" />
    },
    {
      epoch: "Early Development",
      title: "Building Experience",
      desc: <>Following its initial successes, RR Construction entered a strategic period of capacity building, developing substantial experience through diverse infrastructure projects for both local and international clients. During this early developmental phase, the organization prioritized assembling a core workforce of skilled engineering professionals capable of managing larger operational scopes. The company steadily broadened its portfolio across critical sectors, successfully delivering complex assignments such as the Queen Elizabeth Quay Project at the Colombo Harbour in 2003. This period was characterized by a deliberate expansion of technical capabilities, enabling the company to undertake large-scale public utilities such as the Ampara Water Treatment Plant in 2006. By consistently meeting rigorous technical specifications, RR Construction solidified its standing as a trusted contracting partner capable of executing specialized heavy civil engineering works.</>,
      icon: <Map size={24} color="var(--primary-red)" />
    },
    {
      epoch: "Expansion Phase",
      title: "Construction Capabilities Growth",
      desc: <>As operational capacity matured, RR Construction initiated a comprehensive expansion of its core engineering scope. The organization systematically diversified beyond foundational earthworks and structural concrete, establishing dedicated divisions for roads, highways, bridges, irrigation, drainage, and complex water supply systems. This capability growth was demonstrated through the successful completion of major structural milestones, including the Matara Mahanama Bridge in 2007 and the critical installation of Four Steel Bridges across Sri Lanka in 2009. By integrating multi-disciplinary engineering expertise, the company became capable of delivering holistic infrastructure solutions, ranging from multi-storey buildings to advanced water retaining structures. This phase marked RR Construction's transition from a specialized sub-contractor to a primary infrastructure developer, capable of <Link href="/services" style={{color: "var(--primary-red)", textDecoration: "none", fontWeight: 600}}>managing all aspects of heavy civil engineering</Link> independently.</>,
      icon: <Construction size={24} color="var(--primary-red)" />
    },
    {
      epoch: "Sector Development",
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
      
      {/* Modern Hero Section */}
      <section style={{ 
        position: 'relative', 
        paddingTop: isMobile ? '120px' : '180px',
        paddingBottom: isMobile ? '60px' : '100px',
        backgroundColor: '#0f172a',
        overflow: 'hidden'
      }}>
        {/* Abstract Background Elements */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,57,53,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,41,59,0.8) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)', zIndex: 1 }}></div>
        
        {/* Grid pattern overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 2 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', marginBottom: '24px' }}>
            <Link href="/about" style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}>About Us</Link>
            <ChevronRight size={14} color="#64748b" />
            <span style={{ color: 'var(--primary-red)', fontSize: '0.85rem', fontWeight: 600 }}>History & Milestones</span>
          </div>

          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ color: '#ffffff', fontSize: isMobile ? '2.5rem' : '4.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>
              Our Journey of <br/>
              <span style={{ background: 'linear-gradient(90deg, #ff4d4d, #b91c1c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Excellence.</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: isMobile ? '1.1rem' : '1.3rem', lineHeight: 1.7, fontWeight: 400, maxWidth: '650px' }}>
              Three decades of steady growth, technical evolution, and nation-building. Discover how we evolved from a regional contractor to Sri Lanka's leading heavy civil engineering powerhouse.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Asymmetric Timeline */}
      <section style={{ padding: isMobile ? "60px 15px" : "120px 20px", position: 'relative' }}>
        <div className="container" style={{ maxWidth: "1100px", position: "relative" }}>
          
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', position: 'relative' }}>
            
            {/* Left Track (Hidden on Mobile, serves as visual anchor on Desktop) */}
            {!isMobile && (
              <div style={{ width: '200px', flexShrink: 0, position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '0', 
                  bottom: '0', 
                  right: '40px', 
                  width: '3px', 
                  background: 'linear-gradient(to bottom, rgba(229,57,53,0), rgba(229,57,53,0.3) 10%, rgba(229,57,53,0.3) 90%, rgba(229,57,53,0))'
                }}></div>
              </div>
            )}

            {/* Mobile Track Line */}
            {isMobile && (
              <div style={{ 
                position: 'absolute', 
                top: '0', 
                bottom: '0', 
                left: '24px', 
                width: '3px', 
                background: 'linear-gradient(to bottom, rgba(229,57,53,0), rgba(229,57,53,0.3) 10%, rgba(229,57,53,0.3) 90%, rgba(229,57,53,0))',
                zIndex: 1
              }}></div>
            )}

            {/* Content Area */}
            <div style={{ flex: 1, paddingBottom: '40px', position: 'relative', zIndex: 2 }}>
              {timelineEvents.map((event, idx) => (
                <div key={idx} style={{ 
                  position: 'relative', 
                  marginBottom: isMobile ? '60px' : '100px',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  paddingLeft: isMobile ? '60px' : '0'
                }}>
                  
                  {/* Node & Connecting Line (Desktop) */}
                  {!isMobile && (
                    <div style={{ position: 'absolute', left: '-40px', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
                      <div style={{ width: '40px', height: '40px', background: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--primary-red)', boxShadow: '0 0 20px rgba(229,57,53,0.3)', zIndex: 3 }}>
                        {event.icon}
                      </div>
                      <div style={{ width: '40px', height: '2px', background: 'rgba(229,57,53,0.3)', zIndex: 2 }}></div>
                    </div>
                  )}

                  {/* Node (Mobile) */}
                  {isMobile && (
                    <div style={{ position: 'absolute', left: '25.5px', top: '20px', transform: 'translate(-50%, -50%)', width: '32px', height: '32px', background: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--primary-red)', boxShadow: '0 0 15px rgba(229,57,53,0.3)', zIndex: 3 }}>
                      <div style={{ transform: 'scale(0.6)' }}>{event.icon}</div>
                    </div>
                  )}

                  {/* Epoch label on Desktop (floats left) */}
                  {!isMobile && (
                    <div style={{ position: 'absolute', left: '-200px', top: '50%', transform: 'translateY(-50%)', width: '140px', textAlign: 'right', paddingRight: '20px' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'var(--font-heading)' }}>{event.epoch}</span>
                    </div>
                  )}

                  {/* Main Card */}
                  <div className="hover-lift" style={{ 
                    background: '#ffffff', 
                    padding: isMobile ? '30px 20px' : '50px', 
                    borderRadius: '24px', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.04)', 
                    border: '1px solid rgba(0,0,0,0.03)',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    transition: 'all 0.4s ease'
                  }}>
                    {/* Watermark */}
                    <div style={{ position: 'absolute', right: '-5%', bottom: '-10%', fontSize: isMobile ? '6rem' : '10rem', fontWeight: 900, color: 'rgba(0,0,0,0.02)', fontFamily: 'var(--font-heading)', lineHeight: 1, pointerEvents: 'none', whiteSpace: 'nowrap', userSelect: 'none' }}>
                      {event.epoch.includes(' ') ? event.epoch.split(' ')[0] : event.epoch}
                    </div>

                    {isMobile && (
                      <span style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(229,57,53,0.1)', color: 'var(--primary-red)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '15px' }}>
                        {event.epoch}
                      </span>
                    )}
                    
                    <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '20px', position: 'relative', zIndex: 2 }}>
                      {event.title}
                    </h3>
                    
                    <div style={{ color: 'var(--text-light)', fontSize: isMobile ? '1rem' : '1.1rem', lineHeight: 1.8, position: 'relative', zIndex: 2, textAlign: 'justify' }}>
                      {event.desc}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Modern CTA */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", background: "#ffffff", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)' }}></div>
        <div className="container" style={{ maxWidth: "800px", position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "24px", letterSpacing: '-0.5px' }}>
            Built on a Foundation of <span style={{ color: "var(--primary-red)" }}>Trust.</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: isMobile ? "1.1rem" : "1.2rem", lineHeight: 1.8, marginBottom: "40px" }}>
            Our history is written in the roads, bridges, and ports we've built. Discover the awards and recognition that validate our commitment to excellence.
          </p>
          <Link href="/about/awards" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
            View Awards & Recognition <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
