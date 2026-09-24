"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Map, GitMerge, Building2, Waves, Leaf, HardHat, Anchor, Droplets, MapPin, Clock, Mountain, Train } from "lucide-react";
import { COMPANY_DATA } from '@/data/company-data';
import { NEWS_DATA } from '@/data/news-data';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: '/images/home/slider-first-kjp.jpg',
      fallback: '/images/hero-road-roller.jpg',
      duration: 8000,
      tag: 'PASSION FOR ENGINEERING EXCELLENCE',
      heading1: 'Engineering',
      heading2: "Sri Lanka's",
      heading3: 'Tomorrow',
      desc: "For three decades, RR Construction has turned ambitious blueprints into the roads, bridges, harbours, and water systems that keep Sri Lanka moving forward - built to last, delivered on time."
    },
    {
      img: '/images/home/slider-highway-rrp.jpg',
      fallback: '/images/hero-road-roller.jpg',
      duration: 8000,
      tag: '01 / HIGHWAY & EXPRESSWAY CONSTRUCTION & REHABILITATION',
      heading1: 'Built on Every',
      heading2: 'Road We Pave',
      heading3: '',
      desc: "From national highways to rural highways and expressways, RR Construction delivers precision highway and expressway construction, rehabilitation, and asphalt paving across Sri Lanka - engineered for durability, safety, and long-term performance."
    },
    {
      img: '/images/home/slider-maritime-fihladhoo.jpg',
      duration: 8000,
      tag: '02 / MARITIME & HARBOUR CONSTRUCTION',
      heading1: "Building Sri Lanka's",
      heading2: 'Maritime Heritage',
      heading3: '',
      desc: "We deliver advanced maritime infrastructure - including dredging, breakwaters, and harbour facility development, ensuring robust connectivity for Sri Lanka's coastal trade and economic growth."
    },
    {
      img: '/images/home/slider-bridge-mahanama.jpg',
      duration: 8000,
      tag: '03 / BRIDGES & OVERPASSES',
      heading1: 'Structural Integrity',
      heading2: 'Spanning Generations',
      heading3: '',
      desc: 'Using high-strength concrete and advanced structural steel fabrication, we build river crossings, heavy overpasses, and causeways designed to carry extreme traffic loads safely.'
    },
    {
      img: '/images/home/slider-landslide-ldpp.jpg',
      duration: 8000,
      tag: '04 / LANDSLIDE & SOIL MITIGATION',
      heading1: 'Stabilizing Communities',
      heading2: 'Under Geological Threat',
      heading3: '',
      desc: 'In critical hillside zones (Nuwara Eliya, Hatton, Kandy), we deploy state-of-the-art geotechnical engineering. Soil retaining structures and rock-fall nets keep national roadways secure.'
    },
    {
      img: '/images/home/veerapuram-plant-enhanced.jpg',
      duration: 8000,
      tag: '05 / AGGREGATES & MATERIAL PRODUCTION',
      heading1: 'Sustainable Aggregate',
      heading2: 'Supply Chain',
      heading3: '',
      desc: 'We operate large-scale, eco-friendly M-Sand and crusher facilities to supply high-quality, continuous aggregates. Our self-reliant production ensures superior concrete strength for major infrastructure projects nationwide.'
    },
    {
      img: '/images/home/slider-machinery-new.jpg',
      duration: 8000,
      tag: '06 / HEAVY RESOURCE FLEET',
      heading1: 'Self-Owned Assets',
      heading2: 'For Speed & Independence',
      heading3: '',
      desc: `We operate a massive self-owned fleet of ${COMPANY_DATA.machineryFleet} heavy machines and high-output asphalt plants. This independence ensures zero dependency on third-party schedules.`
    }
  ];

  useEffect(() => {
    const duration = slides[currentSlide].duration ?? 10000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  return (
    <>
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>RR Construction (Pvt) Ltd - Leading Construction & Heavy Civil Engineering Company in Sri Lanka</h1>
      {/* FULLSCREEN HERO SECTION */}
      <div className="hero-contained" style={{ padding: '0', margin: '0', backgroundColor: '#0f172a', display: 'block', position: 'relative' }}>
        <div className="hero-fullscreen" style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', overflow: 'hidden', transform: 'translateZ(0)', isolation: 'isolate', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>

          {/* Background Slider Images */}
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                transition: 'opacity 1.2s ease-in-out',
                opacity: index === currentSlide ? 1 : 0,
                background: '#0f172a',
                zIndex: 1
              }}
            >
              {slide.video ? (
                <video
                  src={slide.video}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              ) : (
                <img className="img-polished"
                  src={slide.img}
                  alt={slide.tag}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    opacity: 1,
                    filter: 'brightness(1) contrast(1.05)',
                    transform: 'scale(1)',
                    transition: 'none',
                    willChange: 'transform'
                  }}
                  onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }}
                />
              )}
            </div>
          ))}

          
          
          {/* Strict Blur & Tint ONLY behind the text area */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(ellipse at center, rgba(15,23,42,0.6) 0%, rgba(15,23,42,0.3) 45%, rgba(15,23,42,0) 70%)", zIndex: 2 }}></div>
          
          {/* Bottom fade */}
          

          {/* Foreground Content — CENTER ALIGNED */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(20px, 5vw, 40px)', textAlign: 'center' }}>
            <div style={{ width: '100%', maxWidth: '900px', marginTop: '60px' }}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentSlide ? 'flex' : 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    animation: 'fadeInUp 0.9s ease forwards'
                  }}
                >
                  {index === 0 ? (
                  <div 
                    key={`motto-0-${currentSlide}`}
                    style={{ 
                      display: "inline-flex", 
                      flexDirection: "column",
                      alignItems: "center", 
                      gap: "12px", 
                      marginBottom: "clamp(18px, 3vh, 32px)",
                      position: "relative"
                    }}
                  >
                    <div 
                      style={{ 
                        fontWeight: 800, 
                        fontSize: "clamp(1.05rem, 2.2vw, 1.55rem)", 
                         
                        letterSpacing: "clamp(3px, 0.8vw, 6px)",
                        lineHeight: 1.3,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "0.25em",
                        textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7)"
                      }}
                    >
                      {/* PASSION FOR in crisp white */}
                      <span style={{ color: "#ffffff", display: "inline-flex" }}>
                        {"Passion for".split("").map((char, charIdx) => (
                          <span
                            key={`p-${charIdx}-${currentSlide}`}
                            style={{
                              display: "inline-block",
                              opacity: 0,
                              animation: `${charIdx % 2 === 0 ? 'mottoLoopLeft' : 'mottoLoopRight'} 4.5s cubic-bezier(0.16, 1, 0.3, 1) infinite`,
                              animationDelay: `${charIdx * 0.04}s`,
                              whiteSpace: char === " " ? "pre" : "normal"
                            }}
                          >
                            {char}
                          </span>
                        ))}
                      </span>
                      {/* ENGINEERING EXCELLENCE in glowing brand red */}
                      <span style={{ color: "var(--primary-red)", textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7)", display: "inline-flex" }}>
                        {"Engineering Excellence".split("").map((char, charIdx) => (
                          <span
                            key={`e-${charIdx}-${currentSlide}`}
                            style={{
                              display: "inline-block",
                              opacity: 0,
                              animation: `${(charIdx + 11) % 2 === 0 ? 'mottoLoopLeft' : 'mottoLoopRight'} 4.5s cubic-bezier(0.16, 1, 0.3, 1) infinite`,
                              animationDelay: `${(charIdx + 11) * 0.04}s`,
                              whiteSpace: char === " " ? "pre" : "normal"
                            }}
                          >
                            {char}
                          </span>
                        ))}
                      </span>
                    </div>

                    {/* Glowing Red Underline Accent */}
                    <div 
                      style={{ 
                        width: 'min(100%, 140px)', 
                        height: "3px", 
                        background: "linear-gradient(90deg, transparent, var(--primary-red), transparent)", 
                        borderRadius: "2px",
                        boxShadow: "0 0 12px var(--primary-red)",
                        animation: "mottoExpandLine 0.8s ease forwards",
                        animationDelay: "0.7s",
                        transformOrigin: "center"
                      }}
                    ></div>
                  </div>
                ) : (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: 'clamp(14px, 2.5vh, 28px)' }}>
                    <span style={{ width: '8px', height: '8px', background: 'var(--primary-red)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--primary-red)', flexShrink: 0 }}></span>
                    <div style={{ color: "#ffffff", fontWeight: 800, fontSize: 'clamp(0.75rem, 1.3vw, 0.9rem)', letterSpacing: '3px', textTransform: 'uppercase', textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)" }}>
                      {slide.tag}
                    </div>
                  </div>
                )}

                  {/* Main Heading */}
                  <h2 style={{ fontFamily: 'var(--font-heading)', color: "#ffffff", fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', lineHeight: 1.1, marginBottom: 'clamp(14px, 2.5vh, 22px)', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em', textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)" }}>
                    {slide.heading1}{slide.heading2 && <><br /><span style={{ color: 'var(--primary-red)', textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}>{slide.heading2}</span></>}{slide.heading3 && <><br />{slide.heading3}</>}
                  </h2>

                  {/* Horizontal rule accent */}
                  {index !== 0 && (
                    <div style={{ width: 'clamp(50px, 8vw, 70px)', height: '3px', background: 'var(--primary-red)', borderRadius: '2px', marginBottom: 'clamp(14px, 2.5vh, 22px)', marginLeft: 'auto', marginRight: 'auto' }}></div>
                  )}

                  {/* Description */}
                  <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)', lineHeight: 1.8, color: "rgba(255, 255, 255, 0.9)", maxWidth: '780px', fontWeight: 600, textAlign: 'center', marginBottom: 'clamp(22px, 4vh, 40px)', textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)" }}>
                    {slide.desc}
                  </p>

                  {/* CTA Buttons */}
                  <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link href="/projects" className="btn-hero-solid">
                      Our Projects <ArrowRight style={{ marginLeft: '8px', width: '18px', height: '18px' }} />
                    </Link>
                    <Link href="/about/company-overview" className="btn btn-glass">Our Story</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Slide Progress Indicators - Centered */}
          <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 5, display: 'flex', gap: '10px', alignItems: 'center' }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  height: '4px',
                  width: index === currentSlide ? '40px' : '16px',
                  background: index === currentSlide ? 'var(--primary-red)' : 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(0,0,0,0.5)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.4s ease',
                    boxShadow: index === currentSlide ? '0 0 12px var(--primary-red), 0 2px 6px rgba(0,0,0,0.8)' : '0 2px 6px rgba(0,0,0,0.8)'
                }}
              />
            ))}
          </div>

        </div>
      </div>


      {/* CORPORATE PROFILE */}
      <section className="bg-gradient-adaptive" style={{ padding: "70px 20px", position: "relative", overflow: 'hidden' }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "60px", position: "relative", zIndex: 2 }}>
          
          <div style={{ flex: "1 1 min(100%, 400px)", position: "relative" }}>
            {/* Premium Picture Collage */}
            <div style={{ position: "relative", width: "100%", height: "calc(100% - 10px)", zIndex: 1, marginTop: "10px" }}>
              {/* Perfectly Aligned Red Dashed Outer Frame */}
              <div className="hero-dashed-border" style={{ position: "absolute", top: "-15px", bottom: "-15px", left: "-15px", right: "-15px", border: "2px dashed rgba(229, 57, 53, 0.5)", borderRadius: "48px", zIndex: 0, pointerEvents: "none" }}></div>
              
              <div style={{ position: "relative", width: "100%", height: "100%", padding: "15px", background: "var(--white)", borderRadius: "40px", boxShadow: "0 25px 70px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.04)", zIndex: 2, display: "flex", flexDirection: "column" }}>
                <div className="collage-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, clamp(140px, 20vw, 220px))", flex: 1, gap: "15px", position: "relative", zIndex: 1 }}>
                    
                    {/* Top Left */}
                    <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                      <img src="/images/home/IMG_3025.jpg" alt="Major highway and expressway Construction by RR Construction Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    
                    {/* Top Right */}
                    <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                      <img src="/images/home/WhatsApp Image 2026-07-18 at 10.24.03.jpeg" alt="Heavy Construction Machinery Fleet in Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
  
                    {/* Bottom Left */}
                    <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                      <img src="/images/home/WhatsApp Image 2026-07-24 at 23.23.33.jpeg" alt="Heavy Civil Engineering and Earthworks Equipment Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
  
                    {/* Bottom Right */}
                    <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                      <img src="/images/kandy-landslide/kandy-5.jpg" alt="Landslide Mitigation and Geotechnical Engineering in Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    
                  </div>
                </div>
                
                {/* Floating 30+ Years Box Attached to Pictures */}
              <div className="glass-panel hover-lift" style={{ 
                position: "absolute", 
                bottom: "20px", 
                left: "50%", 
                transform: "translateX(-50%)",
                background: "rgba(255, 255, 255, 0.95)", 
                backdropFilter: "blur(16px)",
                padding: "15px 30px", 
                zIndex: 10, 
                width: "min(max-content, 85%)",
                textAlign: "center",
                borderRadius: "30px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
                border: "1px solid rgba(211, 47, 47, 0.2)"
              }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, color: "var(--primary-red)" }}>{COMPANY_DATA.yearsOfExcellence}</div>
                      <div style={{ textAlign: "left" }}>
                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontFamily: "var(--font-heading)",  letterSpacing: "1px", color: "var(--primary-red)", fontWeight: 800 }}>Years of</h4>
                        <p style={{ color: "#1e293b", margin: 0, fontSize: "0.9rem", fontWeight: 700,  }}>Excellence</p>
                      </div>
                    </div>
                    
                  </div>
              </div>
            </div>
          </div>
          
          <div style={{ flex: "1 1 min(100%, 500px)", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "clamp(0px, 4vw, 40px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Corporate Profile</h4>
              </div>
              <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", lineHeight: 1.1, marginBottom: "15px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>RR Construction <span className="text-gradient" style={{ fontWeight: 300 }}>(Pvt) Ltd</span></h2>
              <h3 style={{ color: "var(--primary-red)", fontWeight: 600, fontSize: "1.1rem", letterSpacing: "1px", marginBottom: "25px" }}>Construction & Heavy Civil Engineering In Sri Lanka</h3>
            
            <p style={{ color: "var(--text-light)", marginBottom: "40px", lineHeight: 1.8, fontSize: "1.1rem" }}>
              With a self-owned fleet of {COMPANY_DATA.machineryFleet} heavy construction machines, our capabilities go beyond earthworks and structural concrete. We execute large-scale highways, bridges, irrigation canals, maritime construction, dredging, and heavy steel fabrication. We bring the full strength of our heavy civil engineering resources to every site, ensuring Sri Lanka's infrastructure is built with absolute reliability.
            </p>
        
            <div>
              <Link href="/about/history" className="btn-glass-red" style={{ display: "inline-flex", textDecoration: "none", alignItems: "center", gap: "8px" }}>Discover Our History <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="bg-gradient-adaptive" style={{ padding: "60px 20px 20px", position: "relative" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: "50px", maxWidth: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Sectors of Operation</h4>
              </div>
              <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", lineHeight: 1.1, marginBottom: "20px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>Our Core <span className="text-gradient" style={{ fontWeight: 300 }}>Expertise</span></h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "30px", lineHeight: 1.8 }}>
                Discover our comprehensive range of heavy civil engineering services, delivering structural excellence across national highways, bridges, maritime infrastructure, and mass earthworks.
              </p>
            </div>
          
          <div className="services-grid-6">
            {[
              { title: "Highways & Expressways", scale: "scale(1.15)", img: "/images/home/rathnapura.jpg", icon: <Map size={30} />, text: "Specialized heavy civil engineering expertise carving expressways and national highways through every terrain." },
              { title: "Bridge Construction", img: "/images/home/bridge-construction-new.jpg", icon: <GitMerge size={30} />, text: "Structural steel and reinforced concrete bridges built to carry the load for generations." },
              { title: "Maritime & Water", img: "/images/maritime-harbour-site.jpg", icon: <Waves size={30} />, text: "Dredging, reclamation, and water supply systems engineered to serve communities at scale." },
              { title: "Landslide Mitigation", img: "/images/home/landslide-mitigation-new.jpeg", icon: <Mountain size={30} />, text: "Expert slope stabilization and rock-fall protection systems in critical hill-country zones." },
                { title: "Piling & Foundation", img: "/images/home/piling-service-card.jpg", icon: <HardHat size={30} />, position: "center 20%", text: "Advanced geotechnical solutions including bored cast-in-situ piling and retaining structures." },
              { title: "Railway Civil Works", img: "/images/projects/new-folder/maho-railway/3.jpg", icon: <Train size={30} />, text: "Modernizing railway infrastructure and executing large-scale civil components for track upgrades." }
            ].map((srv, i) => (
              <div key={i} className="modern-service-card glass-panel hover-lift" style={{ width: "100%", minHeight: "280px", position: "relative", overflow: "hidden", padding: 0, borderRadius: "20px" }}>
                <div style={{ width: "100%", height: "100%", transform: srv.scale || "scale(1)" }}>
                    <img src={srv.img} alt={srv.title} className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: srv.position || "center", opacity: 0.9, transition: "opacity 0.5s ease" }} onMouseOver={(e) => { e.currentTarget.style.opacity = '1' }} onMouseOut={(e) => { e.currentTarget.style.opacity = '0.9' }} />
                  </div>
                <div className="msc-content" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "25px", background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 80%, transparent)", color: "white", pointerEvents: "none" }}>
                  
                  <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", marginBottom: "15px", color: "white", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>{srv.title}</h3>
                  <p className="msc-text" style={{ fontSize: "0.9rem", color: "#e2e8f0", margin: 0, lineHeight: 1.5 }}>{srv.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Link href="/services" className="btn btn-primary hover-glow">View All Services</Link>
          </div>
        </div>
      </section>

            {/* MAJOR CLIENTS */}
      <section className="bg-gradient-adaptive" style={{ padding: "10px 20px 50px", overflow: "hidden", position: "relative" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
{/* Tightly Integrated Major Clients Section */}
            <div 
              style={{ 
                width: "100%", 
                marginBottom: "40px",
                  paddingTop: "0px",
                  paddingBottom: "50px",
                  borderBottom: "1px solid var(--border-soft)", 
                position: "relative", 
                zIndex: 2 
              }}
            >
              <div style={{ marginBottom: "50px", maxWidth: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Trusted Partners</h4>
                </div>
                <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", lineHeight: 1.1, marginBottom: "20px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>Our Major <span className="text-gradient" style={{ fontWeight: 300 }}>Clients</span></h2>
                <p style={{ fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "30px", lineHeight: 1.8 }}>
                  Collaborating with leading government authorities and international bodies to deliver nation-building infrastructure projects across Sri Lanka.
                </p>
              </div>

            <div 
                style={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  gap: "20px", 
                  width: "100%", 
                  maxWidth: "1500px" 
                }}
              >
                {[
                  { name: "ROAD DEVELOPMENT AUTHORITY", logo: "/images/clients/rda.png" },
                  { name: "NATIONAL WATER BOARD", logo: "/images/clients/nwsdb-correct.png" },
                  { name: "U.D.A. SRI LANKA", logo: "/images/clients/uda-correct.jpg" },
                  { name: "MINISTRY OF IRRIGATION", logo: "/images/clients/irrigation-correct.svg" },
                  { name: "IRCON INTERNATIONAL", logo: "/images/clients/ircon-correct.svg" },
                  { name: "NATIONAL BUILDING RESEARCH ORGANISATION", logo: "/images/clients/nbro.svg" },
                  { name: "MINISTRY OF FISHERIES", logo: "/images/clients/fisheries.svg" }
                ].map((client, idx) => (
                  <div 
                    key={idx} 
                    className="glass-panel hover-lift" 
                    style={{ 
                      padding: "12px 20px", 
                      borderRadius: "16px", 
                      border: "1px solid var(--border-soft)", 
                      background: "var(--white)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                      display: "flex", 
                      alignItems: "center", 
                      gap: "15px",
                      width: "min(100%, 290px)"
                    }}
                  >
                    <div style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <img src={client.logo} alt={client.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "0.5px", lineHeight: 1.3 }}>
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>


          </div>

        </div>
      </section>

{/* PROJECT HIGHLIGHTS */}
      <section className="bg-gradient-adaptive" style={{ padding: "10px 20px 50px", overflow: "hidden", position: "relative" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start", position: "relative", zIndex: 2 }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 350px)', position: "relative", paddingTop: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px",  margin: 0, fontSize: "0.9rem" }}>LATEST NEWS & UPDATES</h4>
              </div>
              <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", lineHeight: 1.1, marginBottom: "20px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>Company <span className="text-gradient" style={{ fontWeight: 300 }}>Highlights</span></h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "30px", lineHeight: 1.8 }}>
                Stay updated with our newest technological acquisitions, project milestones, and heavy civil engineering achievements across Sri Lanka.
              </p>
              <Link href="/news" className="btn-glass-red" style={{ display: "inline-flex", textDecoration: "none", alignItems: "center", gap: "8px" }}>View All News <ArrowRight size={18} /></Link>
            </div>
            
            <div style={{ flex: 2, minWidth: 'min(100%, 350px)', position: "relative", marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
                {NEWS_DATA.slice(0, 2).map((newsItem, idx) => (
                  <div key={idx} className="glass-panel hover-lift" style={{ borderRadius: "20px", overflow: "hidden", background: "var(--white)", border: "1px solid rgba(211, 47, 47, 0.4)", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
                    <div style={{ position: "relative", height: "200px", width: "100%", overflow: "hidden" }}>
                      <img src={newsItem.img} alt={newsItem.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="img-hover-zoom" />
                      <div style={{ position: "absolute", top: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "6px 14px", borderRadius: "30px", fontSize: "0.85rem", fontWeight: "bold", letterSpacing: "1px" }}>{newsItem.tag}</div>
                    </div>
                    <div style={{ padding: "25px", display: "flex", flexDirection: "column", flex: 1 }}>
                      
                      <h3 style={{ fontSize: "1.15rem", color: "var(--text-dark)", marginBottom: "10px", lineHeight: 1.4, fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                        {newsItem.title}
                      </h3>
                      <p style={{ color: "var(--text-light)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "20px", flex: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {newsItem.desc}
                      </p>
                      <Link href={`/news/${newsItem.slug}`} style={{ color: "var(--primary-red)", fontWeight: "bold", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px" }}>Read Full Article <ArrowRight size={16} /></Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
      </section>



      <style jsx global>{`
        .services-grid-6 {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .services-grid-6 { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .services-grid-6 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .services-grid-6 { grid-template-columns: 1fr; }
        }

        @keyframes scrollWheel {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes typewriterChar {
          0% { opacity: 0; transform: translateY(6px); filter: blur(3px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes flyInFromLeft {
          0% { opacity: 0; transform: translateX(-40px) scale(0.85); filter: blur(6px); }
          100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes flyInFromRight {
          0% { opacity: 0; transform: translateX(40px) scale(0.85); filter: blur(6px); }
          100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes mottoLoopLeft {
          0%   { opacity: 0; transform: translateX(-40px) scale(0.85); filter: blur(6px); }
          18%  { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
          68%  { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
          82%  { opacity: 0; transform: translateX(15px) scale(0.95); filter: blur(3px); }
          100% { opacity: 0; transform: translateX(-40px) scale(0.85); filter: blur(6px); }
        }
        @keyframes mottoLoopRight {
          0%   { opacity: 0; transform: translateX(40px) scale(0.85); filter: blur(6px); }
          18%  { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
          68%  { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
          82%  { opacity: 0; transform: translateX(-15px) scale(0.95); filter: blur(3px); }
          100% { opacity: 0; transform: translateX(40px) scale(0.85); filter: blur(6px); }
        }
        @keyframes mottoExpandLine {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        .modern-service-card img {
          transform: scale(1);
        }
        .modern-service-card:hover img {
          transform: scale(1.1) !important;
        }
        .modern-service-card .msc-text {
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease;
        }
        .modern-service-card:hover .msc-text {
          max-height: 100px;
          opacity: 1;
          margin-top: 15px;
        }
        .news-card {
          transition: transform 0.3s ease;
        }
        .news-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </>
  );
}








