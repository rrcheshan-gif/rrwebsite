"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Map, GitMerge, Building2, Waves, Leaf, HardHat, Anchor, Droplets, MapPin, Clock } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: '/images/home/slider/polished/coastal.jpg',
      fallback: '/images/hero-road-roller.jpg',
      duration: 12000,
      tag: 'PASSION FOR ENGINEERING EXCELLENCE',
      heading1: 'Engineering',
      heading2: "Sri Lanka's",
      heading3: 'Tomorrow',
      desc: 'For three decades, RR Construction has turned ambitious blueprints into the roads, bridges, harbours, and water systems that keep Sri Lanka moving forward — built to last, delivered on time.'
    },
    {
      img: '/images/home/slider/polished/road.jpg',
      fallback: '/images/hero-road-roller.jpg',
      duration: 8000,
      tag: '01 / ROAD CONSTRUCTION & REHABILITATION',
      heading1: 'Built on Every',
      heading2: 'Road We Pave',
      heading3: '',
      desc: 'From national highways to rural roads, RR Construction delivers precision road construction, rehabilitation, and asphalt paving across Sri Lanka — engineered for durability, safety, and long-term performance.'
    },
    {
      img: '/images/home/slider/polished/maritime.jpg',
      duration: 8000,
      tag: '02 / MARITIME & HARBOUR CONSTRUCTION',
      heading1: "Building Sri Lanka's",
      heading2: 'Maritime Heritage',
      heading3: '',
      desc: 'We deliver advanced maritime infrastructure, including dredging, breakwaters, and harbour facility development, ensuring robust connectivity for Sri Lanka’s coastal trade and economic growth.'
    },
    {
      img: '/images/home/slider/polished/bridge.jpg',
      duration: 8000,
      tag: '03 / BRIDGES & OVERPASSES',
      heading1: 'Structural Integrity',
      heading2: 'Spanning Generations',
      heading3: '',
      desc: 'Using high-strength concrete and advanced structural steel fabrication, we build river crossings, heavy overpasses, and causeways designed to carry extreme traffic loads safely.'
    },
    {
      img: '/images/home/slider/polished/hatton.jpg',
      duration: 8000,
      tag: '04 / LANDSLIDE & SOIL MITIGATION',
      heading1: 'Stabilizing Communities',
      heading2: 'Under Geological Threat',
      heading3: '',
      desc: 'In critical hillside zones (Nuwara Eliya, Hatton, Kandy), we deploy state-of-the-art geotechnical engineering. Soil retaining structures and rock-fall nets keep national roadways secure.'
    },
    {
      img: '/images/home/slider/polished/omanthai.jpg',
      duration: 8000,
      tag: '05 / AGGREGATES & MATERIAL PRODUCTION',
      heading1: 'Sustainable Aggregate',
      heading2: 'Supply Chain',
      heading3: '',
      desc: 'We operate large-scale, eco-friendly M-Sand and crusher facilities to supply high-quality, continuous aggregates. Our self-reliant production ensures superior concrete strength for major infrastructure projects nationwide.'
    },
    {
      img: '/images/home/slider/polished/machinery.jpg',
      duration: 8000,
      tag: '06 / HEAVY RESOURCE FLEET',
      heading1: 'Self-Owned Assets',
      heading2: 'For Speed & Independence',
      heading3: '',
      desc: 'We operate a massive self-owned fleet of 1,000+ heavy machines and high-output asphalt plants. This independence ensures zero dependency on third-party schedules.'
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
      {/* FULLSCREEN HERO SECTION */}
      <section className="hero-fullscreen" style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden' }}>
        {/* Background Slider */}
        {slides.map((slide, index) => (
          <div 
            key={index} 
            style={{ 
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
              transition: 'opacity 1s ease-in-out', 
              opacity: index === currentSlide ? 1 : 0,
              zIndex: 1
            }}
          >
            <img className="img-polished" 
              src={slide.img} 
              alt={slide.tag} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.58 }} 
              onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }} 
            />
          </div>
        ))}
        {/* Balanced Cinematic Overlay for high text contrast */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(5, 10, 25, 0.65) 0%, rgba(0, 0, 0, 0.45) 45%, rgba(5, 10, 25, 0.8) 100%)', zIndex: 2 }}></div>

        {/* Foreground Content */}
        <div className="container" style={{ position: "relative", zIndex: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ width: '100%', maxWidth: '900px', paddingTop: '60px', margin: '0 auto' }}>
            {slides.map((slide, index) => (
              <div 
                key={index} 
                style={{ 
                  display: index === currentSlide ? 'flex' : 'none',
                  flexDirection: 'column',
                  alignItems: 'center',
                  animation: 'fadeInUp 0.8s ease forwards'
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
                        textTransform: "uppercase", 
                        letterSpacing: "clamp(3px, 0.8vw, 6px)",
                        lineHeight: 1.3,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "0.25em",
                        textShadow: "2px 2px 0px rgba(0,0,0,1), 0 4px 20px rgba(0, 0, 0, 0.9)"
                      }}
                    >
                      {/* PASSION FOR in crisp white */}
                      <span style={{ color: "#ffffff", display: "inline-flex" }}>
                        {"PASSION FOR".split("").map((char, charIdx) => (
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
                      <span style={{ color: "#ff4d4d", textShadow: "2px 2px 0px rgba(0,0,0,1), 0 4px 20px rgba(0, 0, 0, 0.9)", display: "inline-flex" }}>
                        {"ENGINEERING EXCELLENCE".split("").map((char, charIdx) => (
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
                        background: "linear-gradient(90deg, transparent, #ff4d4d, transparent)", 
                        borderRadius: "2px",
                        boxShadow: "0 0 12px #ff4d4d",
                        animation: "mottoExpandLine 0.8s ease forwards",
                        animationDelay: "0.7s",
                        transformOrigin: "center"
                      }}
                    ></div>
                  </div>
                ) : (
                  <div 
                    key={`tag-${currentSlide}`}
                    style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "10px", 
                      marginBottom: "clamp(12px, 2.5vh, 25px)",
                      position: "relative"
                    }}
                  >
                    <span 
                      style={{ 
                        width: "8px", 
                        height: "8px", 
                        borderRadius: "50%", 
                        background: "var(--primary-red)", 
                        display: "inline-block",
                        boxShadow: "0 0 12px var(--primary-red)",
                        flexShrink: 0
                      }}
                    ></span>
                    <div 
                      style={{ 
                        color: "rgba(255, 255, 255, 0.95)", 
                        fontWeight: 700, 
                        fontSize: "clamp(0.75rem, 1.4vw, 0.95rem)", 
                        textTransform: "uppercase", 
                        letterSpacing: "3px",
                        textShadow: "0 2px 12px rgba(0,0,0,0.85)"
                      }}
                    >
                      {slide.tag}
                    </div>
                  </div>
                )}
                <h1 style={{ fontFamily: "var(--font-heading)", color: "#ffffff", fontSize: "clamp(2.5rem, 5vw + 1rem, 4.5rem)", lineHeight: 1.1, marginBottom: "clamp(10px, 2vh, 20px)", textTransform: "uppercase", WebkitTextStroke: "0.5px rgba(0,0,0,0.8)", textShadow: "2px 2px 0px rgba(0,0,0,1), 0 8px 30px rgba(0, 0, 0, 1), 0 4px 15px rgba(0, 0, 0, 0.9)", textAlign: "center" }}>
                  {slide.heading1}<br/>
                  <span style={{ color: "#ff4d4d", WebkitTextStroke: "0.5px rgba(0,0,0,0.8)", textShadow: "2px 2px 0px rgba(0,0,0,1), 0 8px 30px rgba(0, 0, 0, 1)" }}>{slide.heading2}</span>
                  {slide.heading3 && <><br/>{slide.heading3}</>}
                </h1>
                <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.3rem)", lineHeight: 1.8, marginBottom: "clamp(15px, 3vh, 30px)", color: "#ffffff", maxWidth: "780px", margin: "0 auto clamp(15px, 3vh, 30px)", fontWeight: 500, textShadow: "1px 1px 3px rgba(0,0,0,1), 0 4px 20px rgba(0,0,0,0.95)", textAlign: "center" }}>
                  {slide.desc}
                </p>
                <div className="hero-buttons" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                  <Link href="/projects" className="btn btn-primary">
                    Our Projects <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
                  </Link>
                  <Link href="/about" className="btn btn-glass">
                    Our Story
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
          <div style={{ width: '24px', height: '40px', border: '2px solid rgba(255,255,255,0.5)', borderRadius: '12px', display: 'flex', justifyContent: 'center', padding: '5px' }}>
            <div style={{ width: '4px', height: '8px', background: 'white', borderRadius: '2px', animation: 'scrollWheel 2s infinite' }}></div>
          </div>
        </div>
      </section>

      {/* CORPORATE STATS BAR */}
      <section style={{ padding: "80px 20px", position: "relative", zIndex: 10, background: "var(--bg-light)", overflow: "hidden" }}>
        {/* Colorful ambient glows behind the glass to create refraction */}
        <div className="ambient-glow" style={{ top: "10%", left: "15%", width: "40vw", height: "40vw", opacity: 0.6, background: "radial-gradient(circle, rgba(229, 57, 83, 0.15) 0%, transparent 70%)" }}></div>
        <div className="ambient-glow" style={{ bottom: "-10%", right: "10%", width: "45vw", height: "45vw", background: "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)" }}></div>
        
        <div className="container" style={{ position: "relative" }}>
          <div className="liquid-glass-panel" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "10px", position: "relative", overflow: "hidden" }}>
            <div style={{ flex: 1, minWidth: 'min(100%, 200px)', padding: "40px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{ position: "absolute", right: 0, top: "20%", height: "60%", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)" }}></div>
              <h3 style={{ fontSize: "3.5rem", marginBottom: "10px", fontFamily: "var(--font-heading)", lineHeight: 1, color: "#ffffff", textShadow: "0 2px 5px rgba(0,0,0,0.2)" }}>1995</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>Established</p>
            </div>
            <div style={{ flex: 1, minWidth: 'min(100%, 200px)', padding: "40px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{ position: "absolute", right: 0, top: "20%", height: "60%", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)" }}></div>
              <h3 style={{ fontSize: "3.5rem", marginBottom: "10px", fontFamily: "var(--font-heading)", lineHeight: 1, color: "#ffffff", textShadow: "0 2px 5px rgba(0,0,0,0.2)" }}>1,800+</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>Skilled Workforce</p>
            </div>
            <div style={{ flex: 1, minWidth: 'min(100%, 200px)', padding: "40px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{ position: "absolute", right: 0, top: "20%", height: "60%", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)" }}></div>
              <h3 style={{ fontSize: "3.5rem", marginBottom: "10px", fontFamily: "var(--font-heading)", lineHeight: 1, color: "#ffffff", textShadow: "0 2px 5px rgba(0,0,0,0.2)" }}>100+</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>Projects Completed</p>
            </div>
            <div style={{ flex: 1, minWidth: 'min(100%, 200px)', padding: "40px 20px", textAlign: "center", zIndex: 1 }}>
              <h3 style={{ fontSize: "3.5rem", marginBottom: "10px", fontFamily: "var(--font-heading)", lineHeight: 1, color: "#ffffff", textShadow: "0 2px 5px rgba(0,0,0,0.2)" }}>ISO</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 700 }}>9001, 14001, 45001</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE PROFILE */}
      <section className="bg-gradient-adaptive" style={{ padding: "140px 20px", position: "relative", overflow: 'hidden' }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "80px", position: "relative", zIndex: 2 }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 340px)', position: "relative", marginBottom: "40px" }}>
            <div className="ambient-glow" style={{ top: "10%", left: "-10%" }}></div>
            {/* Seamless Combined 4-Picture Project Collage (No Outer Borders) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.2)", position: "relative", zIndex: 2 }}>
              <div style={{ height: "215px", overflow: "hidden" }}>
                <img src="/images/home/IMG_3025.jpg" alt="Road Construction - Tea Plantation" className="img-polished img-hover-zoom hover-lift" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ height: "215px", overflow: "hidden" }}>
                <img src="/images/home/WhatsApp Image 2026-07-18 at 10.24.03.jpeg" alt="Road Rehabilitation - CAT Machine" className="img-polished img-hover-zoom hover-lift" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ height: "215px", overflow: "hidden" }}>
                <img src="/images/kandy-landslide/kandy-5.jpg" alt="Landslide Mitigation - Geotechnical Wall" className="img-polished img-hover-zoom hover-lift" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ height: "215px", overflow: "hidden" }}>
                <img src="/images/home/WhatsApp Image 2026-07-24 at 23.23.33.jpeg" alt="Irrigation Construction - Excavator" className="img-polished img-hover-zoom hover-lift" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
            
            {/* Floating 25+ Years Box at Bottom-Right Accent Position */}
            <div className="glass-panel hover-lift" style={{ 
              position: "absolute", 
              bottom: "-45px", 
              right: "10px", 
              padding: "16px 22px", 
              zIndex: 3, 
              maxWidth: "210px", 
              border: "1px solid rgba(229, 57, 83, 0.3)"
            }}>
              <div className="text-gradient" style={{ fontSize: "2.2rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, marginBottom: "2px" }}>25+</div>
              <h4 style={{ margin: 0, fontSize: "0.88rem", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--text-dark)" }}>Years of Excellence</h4>
              <p style={{ color: "var(--text-light)", margin: "4px 0 0 0", fontSize: "0.75rem", lineHeight: 1.3, opacity: 0.8 }}>Solid Foundation & Strong Financial Backing</p>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 'min(100%, 350px)' }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px" }}>
              <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Corporate Profile</h4>
            </div>
            
            <h2 style={{ fontSize: "3.5rem", lineHeight: 1.1, marginBottom: "35px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>BUILDING THE FUTURE<br/><span className="text-gradient" style={{ fontWeight: 500 }}>OF SRI LANKA</span></h2>
            
            <p style={{ fontSize: "1.25rem", color: "var(--text-dark)", marginBottom: "30px", fontWeight: 600, lineHeight: 1.7, borderLeft: "4px solid var(--primary-red)", paddingLeft: "20px" }}>We measure success the way our clients do: the right quality, delivered on schedule, at a fair cost.</p>
            
            <p style={{ color: "var(--text-light)", marginBottom: "45px", lineHeight: 1.9, fontSize: "1.05rem" }}>With massive financial backing and a self-owned fleet of 1,000+ machines, we don't wait on hired equipment or third-party schedules. From expressways to harbour works, we bring the full strength of our resources to every site — so Sri Lanka's infrastructure keeps pace with its ambitions.</p>
            
            <Link href="/about" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1rem" }}>Discover Our Legacy</Link>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section style={{ padding: "100px 20px", background: "var(--bg-light)", position: "relative" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Sectors of Operation</h4>
            <h2 className="text-gradient" style={{ fontSize: "3rem", fontFamily: "var(--font-heading)" }}>OUR CORE EXPERTISE</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "30px" }}>
            {[
              { title: "Highways & Roads", img: "/images/home/rathnapura.jpg", icon: <Map size={30} />, text: "Specialized civil engineering expertise carving expressways and national highways through every terrain." },
              { title: "Bridge Construction", img: "/images/kilinochchi-bridge-feature.jpg", icon: <GitMerge size={30} />, text: "CS-1 graded structural steel and reinforced concrete bridges built to carry the load for generations." },
              { title: "Building Projects", img: "/images/wellamankara/building-projects.jpg", icon: <Building2 size={30} />, text: "C-2 graded construction shaping commercial, industrial, and high-rise developments." },
              { title: "Maritime & Water", img: "/images/maritime-harbour-site.jpg", icon: <Waves size={30} />, text: "Dredging, reclamation, and water supply systems engineered to serve communities at scale." }
            ].map((srv, i) => (
              <div key={i} className="modern-service-card glass-panel hover-lift" style={{ gridColumn: i === 0 || i === 3 ? "span 7" : "span 5", minHeight: "450px", position: "relative", overflow: "hidden", padding: 0 }}>
                <img src={srv.img} alt={srv.title} className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} onMouseOver={(e) => { e.currentTarget.style.opacity = '0.8' }} onMouseOut={(e) => { e.currentTarget.style.opacity = '0.6' }} />
                <div className="msc-content" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "40px", background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 70%, transparent)", color: "white", pointerEvents: "none" }}>
                  <div style={{ color: "white", marginBottom: "20px", display: "inline-block", padding: "15px", background: "var(--primary-red)", borderRadius: "20px", boxShadow: "0 10px 20px rgba(229,57,53,0.3)" }}>{srv.icon}</div>
                  <h3 style={{ fontSize: "2.2rem", marginBottom: "15px", color: "white", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>{srv.title}</h3>
                  <p className="msc-text" style={{ fontSize: "1rem", color: "#e2e8f0", margin: 0, lineHeight: 1.6 }}>{srv.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Link href="/services" className="btn btn-outline hover-glow">View All Services</Link>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY & HSE SECTION */}
      <section className="bg-gradient-dark" style={{ padding: "80px 20px", color: "white", position: "relative" }}>
        <div className="ambient-glow" style={{ bottom: "-10vw", right: "-10%" }}></div>
        <div className="container sustainability-grid glass-panel" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", overflow: "hidden", position: "relative", zIndex: 2 }}>
          <div className="sustainability-col" style={{ padding: "clamp(30px, 5vw, 80px) clamp(20px, 4vw, 60px)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
              <div style={{ width: "60px", height: "60px", background: "rgba(74, 222, 128, 0.1)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(74, 222, 128, 0.2)", boxShadow: "0 0 30px rgba(74, 222, 128, 0.1)", flexShrink: 0 }}>
                <Leaf color="#4ade80" size={30} />
              </div>
              <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", margin: 0, color: "white", fontFamily: "var(--font-heading)" }}>Sustainable<br/>Engineering</h3>
            </div>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "0" }}>We recognize our responsibility to the environment. Through efficient resource management, sustainable material sourcing, and strict adherence to ISO 14001 Environmental Management Systems, we minimize our ecological footprint while building infrastructure that lasts.</p>
          </div>
          <div className="sustainability-col" style={{ padding: "clamp(30px, 5vw, 80px) clamp(20px, 4vw, 60px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
              <div style={{ width: "60px", height: "60px", background: "rgba(251, 191, 36, 0.1)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(251, 191, 36, 0.2)", boxShadow: "0 0 30px rgba(251, 191, 36, 0.1)", flexShrink: 0 }}>
                <HardHat color="#fbbf24" size={30} />
              </div>
              <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", margin: 0, color: "white", fontFamily: "var(--font-heading)" }}>Health & Safety<br/>First</h3>
            </div>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "0" }}>Zero harm is our ultimate goal. We maintain a rigorous Health & Safety culture on every site, backed by our ISO 45001 certification. Our 1,800+ workforce is continuously trained to operate under the highest global safety standards, ensuring everyone goes home safely.</p>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section style={{ padding: "140px 20px", background: "var(--bg-light)", overflow: "hidden", position: "relative" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "center", position: "relative", zIndex: 2 }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 350px)', position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Our Legacy</h4>
            </div>
            <h2 style={{ fontSize: "3.5rem", lineHeight: 1.1, marginBottom: "30px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>THREE DECADES OF<br/><span className="text-gradient" style={{ fontWeight: 300 }}>EXCELLENCE</span></h2>
            <p style={{ color: "var(--text-dark)", fontSize: "1.15rem", marginBottom: "25px", lineHeight: 1.8, fontWeight: 500 }}>Since 1995, RR Construction has helped shape the physical foundations of modern Sri Lanka. What began as a subcontracting partnership with international firms like ED Zublin AG has grown into one of the country's most trusted construction names.</p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginBottom: "50px", lineHeight: 1.8 }}>Hundreds of completed projects later — expressways, deep-water dredging, bridges spanning over 100 metres, and water treatment plants serving entire districts — our portfolio speaks for itself.</p>
            <Link href="/projects" className="btn btn-primary hover-glow" style={{ display: 'inline-flex', gap: '10px', padding: "18px 40px", fontSize: "1rem" }}>
              Full Project Portfolio <ArrowRight size={20} />
            </Link>
          </div>
          
          <div style={{ flex: 1, minWidth: 'min(100%, 350px)', display: "grid", gap: "25px", position: "relative" }}>
             {/* Large background decorative number */}
             <div style={{ position: "absolute", right: "-50px", top: "-50px", fontSize: "15rem", fontWeight: 900, color: "rgba(0,0,0,0.02)", fontFamily: "var(--font-heading)", zIndex: 0, pointerEvents: "none", lineHeight: 1 }}>03</div>
             
             {[
               { icon: <Anchor color="white" size={24} />, title: "Gandara Fishery Harbour", text: "Major maritime development", num: "01" },
               { icon: <MapPin color="white" size={24} />, title: "Central Expressway", text: "Section 2 Package-A", num: "02" },
               { icon: <Droplets color="white" size={24} />, title: "Ampara Water Treatment Plant", text: "172,000 cum/day capacity", num: "03" }
             ].map((proj, i) => (
                <div key={i} className="glass-panel hover-lift" style={{ display: "flex", gap: "25px", padding: "30px", position: "relative", zIndex: 1, transform: i === 1 ? "translateX(-30px)" : "none", transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease", cursor: "pointer", background: "var(--white)", border: "1px solid var(--border-soft)" }} onMouseOver={(e) => { e.currentTarget.style.transform = i === 1 ? "translateX(-20px) translateY(-5px)" : "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.05)" }} onMouseOut={(e) => { e.currentTarget.style.transform = i === 1 ? "translateX(-30px)" : "none"; e.currentTarget.style.boxShadow = "none" }}>
                  <div style={{ position: "absolute", right: "20px", top: "15px", fontSize: "3rem", fontWeight: 800, color: "var(--text-light)", opacity: 0.15, fontFamily: "var(--font-heading)", lineHeight: 1 }}>{proj.num}</div>
                  <div style={{ width: "60px", height: "60px", background: "var(--primary-red)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 20px rgba(229,57,53,0.2)" }}>
                    {proj.icon}
                  </div>
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <h4 style={{ color: "var(--text-dark)", fontSize: "1.3rem", marginBottom: "8px", fontFamily: "var(--font-heading)" }}>{proj.title}</h4>
                    <p style={{ color: "var(--text-light)", fontSize: "0.95rem", margin: 0 }}>{proj.text}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS */}
      <section style={{ padding: "60px 20px", background: "var(--bg-light)", textAlign: "center", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container">
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Trusted By</h4>
          <h2 style={{ fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "50px", fontFamily: "var(--font-heading)" }}>OUR MAJOR CLIENTS</h2>
          
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px", alignItems: "center", opacity: 0.95 }}>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-1px" }}>ROAD DEVELOPMENT AUTHORITY</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-1px" }}>NATIONAL WATER BOARD</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "-1px" }}>U.D.A. SRI LANKA</div>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES / NEWSROOM */}
      <section className="bg-gradient-adaptive" style={{ padding: "140px 20px", position: "relative", overflow: "hidden" }}>
        <div className="ambient-glow" style={{ top: "10%", right: "-10%" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Newsroom</h4>
              </div>
              <h2 style={{ fontSize: "3.5rem", color: "var(--text-dark)", margin: 0, fontFamily: "var(--font-heading)", lineHeight: 1.1 }}>LATEST <span className="text-gradient" style={{ fontWeight: 300 }}>UPDATES</span></h2>
            </div>
            <Link href="#" className="btn btn-outline hover-glow" style={{ padding: "15px 30px", border: "1px solid var(--border-soft)" }}>View All News</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {[
              { tag: 'Maritime', title: 'Gandara Fishery Harbour Phase 1 Completed', desc: 'Major milestones achieved in dredging and breakwater construction at the major southern maritime project.', date: 'June 15, 2026', img: '/images/maritime-harbour-site.jpg' },
              { tag: 'Corporate', title: 'RR Construction Passes Annual ISO Surveillance Audit', desc: 'Successfully maintaining our ISO 9001, 14001, and 45001 certifications, reaffirming our commitment to global standards.', date: 'May 28, 2026', img: '/images/health-safety-site.jpg' },
              { tag: 'Machinery', title: 'New High-Capacity Asphalt Plant Commissioned', desc: 'Expanding our self-owned fleet capabilities to accelerate the delivery of the Central Expressway Project Section 3.', date: 'May 10, 2026', img: '/images/kalutara-crusher-plant.jpg', crop: 'top' }
            ].map((news, i) => (
              <div key={i} style={{ background: "var(--white)", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-soft)", cursor: "pointer", transition: "transform 0.4s ease, box-shadow 0.4s ease" }} className="news-card glass-panel hover-lift" onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.05)" }} onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none" }}>
                <div style={{ height: "220px", overflow: "hidden" }}>
                  <img src={news.img} alt={news.title} className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: news.crop === 'top' ? 'top center' : 'center', transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: "35px" }}>
                  <span style={{ color: "var(--primary-red)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px" }}>{news.tag}</span>
                  <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", margin: "15px 0", fontFamily: "var(--font-heading)", lineHeight: 1.4 }}>{news.title}</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "25px" }}>{news.desc}</p>
                  <span style={{ color: "var(--text-light)", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", borderTop: "1px solid var(--border-soft)", paddingTop: "20px" }}><Clock size={16} color="var(--primary-red)" /> {news.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
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
