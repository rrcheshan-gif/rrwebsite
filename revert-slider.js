const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const heroStart = content.indexOf('      {/* FULLSCREEN HERO SECTION */}');
const heroEndMarker = '      {/* CORPORATE PROFILE */}';
const heroEnd = content.indexOf(heroEndMarker);

if (heroStart === -1 || heroEnd === -1) {
    console.log('Could not find hero bounds');
    process.exit(1);
}

const newSlider = `      {/* FULLSCREEN HERO SECTION */}
      <div className="hero-contained" style={{ padding: '0', margin: '0', backgroundColor: '#0f172a', display: 'block', position: 'relative' }}>
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', overflow: 'hidden', transform: 'translateZ(0)', isolation: 'isolate', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>

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
                    filter: 'brightness(0.72) contrast(1.05)',
                    transform: 'scale(1)',
                    transition: 'none',
                    willChange: 'transform'
                  }}
                  onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }}
                />
              )}
            </div>
          ))}

          {/* Premium Multi-layer Gradient Overlay - Centered for text readability */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.7) 100%), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)', zIndex: 2 }}></div>
          {/* Bottom fade */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '130px', background: 'linear-gradient(0deg, rgba(5,10,20,0.7) 0%, transparent 100%)', zIndex: 2 }}></div>

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
                    key={\`motto-0-\${currentSlide}\`}
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
                        textShadow: "2px 2px 0px rgba(0,0,0,1), 0 4px 20px rgba(0, 0, 0, 0.9)"
                      }}
                    >
                      {/* PASSION FOR in crisp white */}
                      <span style={{ color: "#ffffff", display: "inline-flex" }}>
                        {"Passion for".split("").map((char, charIdx) => (
                          <span
                            key={\`p-\${charIdx}-\${currentSlide}\`}
                            style={{
                              display: "inline-block",
                              opacity: 0,
                              animation: \`\${charIdx % 2 === 0 ? 'mottoLoopLeft' : 'mottoLoopRight'} 4.5s cubic-bezier(0.16, 1, 0.3, 1) infinite\`,
                              animationDelay: \`\${charIdx * 0.04}s\`,
                              whiteSpace: char === " " ? "pre" : "normal"
                            }}
                          >
                            {char}
                          </span>
                        ))}
                      </span>
                      {/* ENGINEERING EXCELLENCE in glowing brand red */}
                      <span style={{ color: "var(--primary-red)", textShadow: "2px 2px 0px rgba(0,0,0,1), 0 4px 20px rgba(0, 0, 0, 0.9)", display: "inline-flex" }}>
                        {"Engineering Excellence".split("").map((char, charIdx) => (
                          <span
                            key={\`e-\${charIdx}-\${currentSlide}\`}
                            style={{
                              display: "inline-block",
                              opacity: 0,
                              animation: \`\${(charIdx + 11) % 2 === 0 ? 'mottoLoopLeft' : 'mottoLoopRight'} 4.5s cubic-bezier(0.16, 1, 0.3, 1) infinite\`,
                              animationDelay: \`\${(charIdx + 11) * 0.04}s\`,
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
                    <div style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 700, fontSize: 'clamp(0.75rem, 1.3vw, 0.9rem)', letterSpacing: '3px', textTransform: 'uppercase', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                      {slide.tag}
                    </div>
                  </div>
                )}

                  {/* Main Heading */}
                  <h2 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', lineHeight: 1.1, marginBottom: 'clamp(14px, 2.5vh, 22px)', fontWeight: 800, textAlign: 'center', letterSpacing: '-0.02em', textShadow: '2px 2px 0px rgba(0,0,0,1), 0 10px 40px rgba(0,0,0,1)' }}>
                    {slide.heading1}{slide.heading2 && <><br /><span style={{ color: 'var(--primary-red)' }}>{slide.heading2}</span></>}{slide.heading3 && <><br />{slide.heading3}</>}
                  </h2>

                  {/* Horizontal rule accent */}
                  {index !== 0 && (
                    <div style={{ width: 'clamp(50px, 8vw, 70px)', height: '3px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', marginBottom: 'clamp(14px, 2.5vh, 22px)' }}></div>
                  )}

                  {/* Description */}
                  <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)', lineHeight: 1.8, color: '#ffffff', maxWidth: '780px', fontWeight: 500, textAlign: 'center', marginBottom: 'clamp(22px, 4vh, 40px)', textShadow: '1px 1px 3px rgba(0,0,0,1), 0 4px 20px rgba(0,0,0,0.8)' }}>
                    {slide.desc}
                  </p>

                  {/* CTA Buttons */}
                  <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link href="/projects" className="btn btn-primary">
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
                  background: index === currentSlide ? 'var(--primary-red)' : 'rgba(255,255,255,0.5)',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.4s ease',
                  boxShadow: index === currentSlide ? '0 0 10px var(--primary-red)' : 'none'
                }}
              />
            ))}
          </div>

        </div>
      </div>\n\n\n`;

content = content.substring(0, heroStart) + newSlider + content.substring(heroEnd);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully reverted to centered and restored motto animation');
