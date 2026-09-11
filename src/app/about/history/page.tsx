"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flag, Construction, ShieldCheck, Map, Factory, Anchor, Train, Globe } from 'lucide-react';

const timelineEvents = [
  {
    epoch: "1995",
    title: "Foundation & First Projects",
    image: "/images/projects/new-folder/Construction of Rock revetment at Beruwala/1.jpg",
    imageAlt: "Early civil construction works by RR Construction in Sri Lanka",
    desc: <>Established in <strong>1995</strong>, <strong>RR Construction (Pvt) Ltd</strong> began its journey in Sri Lanka's heavy civil engineering and construction industry through early civil works carried out in collaboration with <strong>ED Zublin AG</strong> on the <strong>Central Bank Extension Project</strong>. This experience established a strong foundation in engineering, project execution, quality, and professional construction practices that would underpin the company's growth as a <strong>civil engineering company in Sri Lanka</strong>.</>,
    icon: <Flag size={24} color="var(--primary-red)" />
  },
  {
    epoch: "2003–2006",
    title: "Expanding Infrastructure Experience",
    image: "/images/projects/new-folder/CONSTRUCTION OF WATER TREATMENT PLANT -AMPARA/1.jpg",
    imageAlt: "Ampara Water Treatment Plant - water infrastructure project in Sri Lanka",
    desc: <>RR Construction expanded its technical capabilities through major infrastructure projects for local and international clients. The <strong>Queen Elizabeth Quay Project at the Port of Colombo in 2003</strong> strengthened the company's expertise in <Link href="/services/maritime-construction" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>maritime and heavy civil engineering</Link>, followed by the <strong>Ampara Water Treatment Plant in 2006</strong>, which further developed its capabilities in <Link href="/services/water-infrastructure" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>water infrastructure</Link> and specialized civil construction.</>,
    icon: <Map size={24} color="var(--primary-red)" />
  },
  {
    epoch: "2007–2009",
    title: "Construction Capability Growth",
    image: "/images/projects/new-folder/hirana-bridges/1.jpg",
    imageAlt: "Steel bridge construction in Sri Lanka - Hirana bridge by RR Construction",
    desc: <>The company expanded into key infrastructure sectors including <Link href="/services/road-construction" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>road and highway construction</Link>, <Link href="/services/bridge-construction" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>bridge construction</Link>, irrigation, drainage, water supply, buildings, and structural works. Major milestones included the <strong>Matara Mahanama Bridge in 2007</strong> and four steel bridges across Sri Lanka in <strong>2009</strong>, strengthening RR Construction's expertise in structural and bridge engineering as a capable <strong>infrastructure development</strong> contractor.<br /><br />The company also developed capabilities in multi-storey buildings, water-retaining structures, and complex infrastructure projects, supported by skilled professionals, technical expertise, and integrated project management.</>,
    icon: <Construction size={24} color="var(--primary-red)" />
  },
  {
    epoch: "2012",
    title: "Maritime & Infrastructure Specialization",
    image: "/images/projects/Negombo Lagoon development Project, Dredging of Lagoon- Lellama Site II/1.jpg",
    imageAlt: "Maritime dredging and lagoon development project in Sri Lanka",
    desc: <>RR Construction further developed its expertise in specialized infrastructure, including <Link href="/services/maritime-construction" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>maritime and marine construction</Link>, dredging, coastal protection, breakwater construction, and reclamation. The <strong>Oluvil Port Coastal Protection Project in 2012</strong>, executed for the Sri Lanka Ports Authority, marked an important milestone in the company's maritime construction experience. Capabilities also expanded into steel fabrication, construction equipment resources, and <Link href="/services/landslide-mitigation" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>geotechnical works</Link> including landslide mitigation and slope protection in Sri Lanka's hill-country regions.</>,
    icon: <Anchor size={24} color="var(--primary-red)" />
  },
  {
    epoch: "2016",
    title: "International Infrastructure Experience",
    image: "/images/projects/hulhudhoo/img1.jpg",
    imageAlt: "Overseas maritime infrastructure project in the Maldives by RR Construction",
    desc: <>The company expanded its international project experience through overseas infrastructure developments, including the <strong>Upgrading of the Harbour Seawall in R. Vandhoo, Maldives</strong>, completed in 2016 for the Ministry of Environment and Energy. This strengthened RR Construction's capabilities in coastal protection, marine infrastructure, and specialized construction in challenging environments, building on its experience as a <Link href="/services/dredging-reclamation" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>marine and dredging contractor</Link>.</>,
    icon: <Globe size={24} color="var(--primary-red)" />
  },
  {
    epoch: "2019–2023",
    title: "Expanding Railway & Infrastructure Capabilities",
    image: "/images/projects/Anuradhapura-Vauniya/1.jpg",
    imageAlt: "Anuradhapura Vavuniya railway track rehabilitation project in Sri Lanka",
    desc: <>RR Construction continued to diversify its infrastructure portfolio across Sri Lanka, undertaking major road, bridge, maritime, water, geotechnical, and railway infrastructure projects. Railway capabilities were strengthened through projects including the <strong>Anuradhapura–Vavuniya Railway Track Rehabilitation</strong> and <strong>Maho–Anuradhapura Railway Line Track Rehabilitation &amp; Ancillary Works</strong>, expanding the company's role in Sri Lanka's <Link href="/services/railway-civil-works" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>railway construction</Link> and civil engineering sectors.</>,
    icon: <Train size={24} color="var(--primary-red)" />
  },
  {
    epoch: "2024–2026",
    title: "Integrated Infrastructure Delivery",
    image: "/images/projects/new-folder/maho-railway/Background image.jpg",
    imageAlt: "Railway infrastructure construction in Sri Lanka - Maho to Anuradhapura line",
    desc: <>RR Construction continues to deliver complex <Link href="/projects" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>infrastructure projects</Link> across Sri Lanka, with capabilities spanning <Link href="/services/road-construction" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>road and highway construction</Link>, <Link href="/services/bridge-construction" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>bridges</Link>, <Link href="/services/railway-civil-works" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>railway infrastructure</Link>, <Link href="/services/maritime-construction" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>maritime and harbour construction</Link>, <Link href="/services/water-infrastructure" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>water infrastructure</Link>, irrigation, <Link href="/services/landslide-mitigation" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>geotechnical and landslide mitigation</Link>, and other heavy civil engineering works across all provinces of Sri Lanka.</>,
    icon: <Factory size={24} color="var(--primary-red)" />
  },
  {
    epoch: "Present",
    title: "Engineering Excellence & National Infrastructure",
    image: "/images/IMAGES/Gandara/gandara-bg.jpeg",
    imageAlt: "Gandara Fishery Harbour construction - ongoing maritime project by RR Construction",
    desc: <>Today, <strong>RR Construction (Pvt) Ltd</strong> operates as an integrated <strong>heavy civil engineering and infrastructure contractor in Sri Lanka</strong>, supported by extensive construction resources, heavy machinery, asphalt and aggregate production capabilities, skilled professionals, and internationally recognized management systems including <Link href="/about/awards" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>ISO 9001, ISO 14001, and ISO 45001</Link> certifications. With experience across roads, highways, bridges, railways, maritime infrastructure, water systems, <Link href="/services/landslide-mitigation" style={{ color: "var(--primary-red)", textDecoration: "none", fontWeight: 600 }}>geotechnical works</Link>, and other specialized construction sectors, RR Construction continues to contribute to resilient <strong>infrastructure development in Sri Lanka</strong>.</>,
    icon: <ShieldCheck size={24} color="var(--primary-red)" />
  }
];

export default function HistoryTimeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

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
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
               &larr; Back to About Us
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Our Journey of <span style={{ color: "var(--primary-red)" }}>Excellence.</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Three decades of steady growth, technical evolution, and nation-building. Discover how we evolved into Sri Lanka's leading heavy civil engineering company.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 4.2rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>
              Our History &amp; <span style={{ color: 'var(--primary-red)' }}>Milestones</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-red)', margin: '0 auto 20px' }}></div>
            <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
              A legacy of engineering excellence, built on decades of trust, capability expansion, and successful project delivery across Sri Lanka.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {timelineEvents.map((e, i) => (
              <div key={i} className="hover-lift" style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row', 
                background: 'var(--white)', 
                borderRadius: '16px', 
                border: '1px solid var(--border-soft)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                minHeight: isMobile ? 'auto' : '380px'
              }}>
                
                {/* Left: Image with Overlay Year */}
                <div style={{ 
                  width: isMobile ? '100%' : '35%', 
                  position: 'relative',
                  minHeight: isMobile ? '300px' : 'auto'
                }}>
                  <img
                    src={encodeURI(e.image)}
                    alt={e.imageAlt}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block',
                      position: 'absolute',
                      top: 0, left: 0,
                      transition: 'transform 0.5s ease'
                    }}
                    onError={(ev) => { (ev.target as HTMLImageElement).style.display = 'none'; }}
                    className="img-hover-zoom"
                  />
                  {/* Overlay Badge for Year */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '30px', 
                    left: '30px', 
                    background: 'rgba(255,255,255,0.95)', 
                    backdropFilter: 'blur(10px)',
                    padding: '12px 24px', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    zIndex: 2
                  }}>
                    <div style={{ background: 'rgba(229,57,53,0.1)', padding: '10px', borderRadius: '50%', color: 'var(--primary-red)', display: 'flex' }}>
                      {e.icon}
                    </div>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--text-dark)', margin: 0, lineHeight: 1 }}>
                      {e.epoch}
                    </h2>
                  </div>
                </div>

                {/* Right: Content Area */}
                <div style={{ 
                  width: isMobile ? '100%' : '65%', 
                  padding: isMobile ? '40px 20px' : '50px 60px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  zIndex: 1
                }}>
                  <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--primary-red)', marginBottom: '20px' }}>
                    {e.title}
                  </h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
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
