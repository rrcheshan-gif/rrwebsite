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

        <div className="container" style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', marginBottom: '24px' }}>
            <Link href="/about" style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}>About Us</Link>
            <ChevronRight size={14} color="#64748b" />
            <span style={{ color: 'var(--primary-red)', fontSize: '0.85rem', fontWeight: 600 }}>History & Milestones</span>
          </div>

          <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: '#ffffff', fontSize: isMobile ? '2.5rem' : '4.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>
              Our Journey of <br/>
              <span style={{ background: 'linear-gradient(90deg, #ff4d4d, #b91c1c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Excellence.</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: isMobile ? '1.1rem' : '1.3rem', lineHeight: 1.7, fontWeight: 400, maxWidth: '650px', margin: '0 auto' }}>
              Three decades of steady growth, technical evolution, and nation-building. Discover how we evolved from a regional contractor to Sri Lanka's leading heavy civil engineering powerhouse.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Vertical Timeline */}
        <section style={{ padding: isMobile ? '60px 15px' : '100px 0', background: '#f8fafc', position: 'relative' }}>
          <div className='container' style={{ maxWidth: '1000px', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontWeight: 800 }}>Our <span style={{color: 'var(--primary-red)'}}>History</span></h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '15px auto 0', lineHeight: 1.6 }}>A legacy of engineering excellence, continuous growth, and nation-building.</p>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Central Connecting Line */}
              <div style={{ 
                 position: 'absolute', 
                 left: isMobile ? '24px' : '50%', 
                 top: 0, 
                 bottom: 0, 
                 width: '2px', 
                 background: 'linear-gradient(to bottom, transparent, var(--border-soft) 5%, var(--border-soft) 95%, transparent)',
                 transform: isMobile ? 'none' : 'translateX(-50%)',
                 zIndex: 0
              }}></div>

              {timelineEvents.map((e, i) => {
                 const isLeft = i % 2 === 0 && !isMobile;
                 return (
                    <div key={i} style={{ 
                       display: 'flex', 
                       justifyContent: isMobile ? 'flex-start' : (isLeft ? 'flex-start' : 'flex-end'),
                       marginBottom: '50px',
                       position: 'relative',
                       width: '100%'
                    }}>
                       
                       {/* Timeline Dot */}
                       <div style={{
                          position: 'absolute',
                          left: isMobile ? '24px' : '50%',
                          top: '40px',
                          transform: 'translate(-50%, -50%)',
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'var(--primary-red)',
                          border: '4px solid #f8fafc',
                          boxShadow: '0 0 0 6px rgba(229,57,53,0.1)',
                          zIndex: 2
                       }}></div>

                       {/* Event Card */}
                       <div className='glass-panel hover-lift' style={{ 
                          width: isMobile ? 'calc(100% - 60px)' : '45%', 
                          marginLeft: isMobile ? '60px' : 0,
                          padding: '30px', 
                          background: 'white', 
                          borderRadius: '16px',
                          border: '1px solid var(--border-soft)',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                          position: 'relative',
                          zIndex: 1
                       }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                             <div style={{ 
                                width: '55px', height: '55px', 
                                borderRadius: '12px', 
                                background: 'var(--bg-light)', 
                                color: 'var(--primary-red)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0
                             }}>
                                {e.icon}
                             </div>
                             <div>
                                <span style={{ display: 'block', color: 'var(--primary-red)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '1px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>{e.epoch}</span>
                                <h4 style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.2rem', margin: '4px 0 0', fontFamily: 'var(--font-heading)' }}>{e.title}</h4>
                             </div>
                          </div>
                          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify', margin: 0 }}>
                             {e.desc}
                          </p>
                       </div>
                    </div>
                 );
              })}
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
