const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Find the hero section bounds
const heroStart = content.indexOf('      {/* FULLSCREEN HERO SECTION */}');
const heroEnd = content.indexOf('      </section>', heroStart) + '      </section>'.length;

if (heroStart === -1) {
    console.log('COULD NOT FIND HERO START');
    process.exit(1);
}
if (heroEnd === -1) {
    console.log('COULD NOT FIND HERO END');
    process.exit(1);
}

const newSlider = `      {/* FULLSCREEN HERO SECTION */}
      <section className="hero-contained" style={{ padding: '0', paddingTop: '130px', paddingBottom: '80px', backgroundColor: 'var(--bg-light)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '92%', maxWidth: '1440px', height: 'clamp(550px, 70vh, 750px)', borderRadius: 'clamp(24px, 5vw, 48px)', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.25)', transform: 'translateZ(0)', isolation: 'isolate', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>

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

          {/* Premium Multi-layer Gradient Overlay - Left heavy for text readability */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(105deg, rgba(5,10,20,0.88) 0%, rgba(5,10,20,0.68) 50%, rgba(5,10,20,0.20) 100%)', zIndex: 2 }}></div>
          {/* Bottom fade */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '130px', background: 'linear-gradient(0deg, rgba(5,10,20,0.7) 0%, transparent 100%)', zIndex: 2 }}></div>

          {/* Red vertical accent bar on left */}
          <div style={{ position: 'absolute', top: '60px', left: '0', width: '5px', height: '50%', background: 'linear-gradient(180deg, var(--primary-red), transparent)', zIndex: 4, borderRadius: '0 4px 4px 0' }}></div>

          {/* Foreground Content — LEFT ALIGNED */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3, display: 'flex', alignItems: 'center', padding: '0 clamp(30px, 7vw, 100px)' }}>
            <div style={{ width: '100%', maxWidth: '780px' }}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentSlide ? 'flex' : 'none',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    animation: 'fadeInUp 0.9s ease forwards'
                  }}
                >
                  {/* Tag / Section Label */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: 'clamp(14px, 2.5vh, 28px)' }}>
                    <span style={{ width: '32px', height: '3px', background: 'var(--primary-red)', borderRadius: '2px', display: 'inline-block', boxShadow: '0 0 10px var(--primary-red)', flexShrink: 0 }}></span>
                    <div style={{ color: 'rgba(255,255,255,0.82)', fontWeight: 600, fontSize: 'clamp(0.68rem, 1.1vw, 0.85rem)', letterSpacing: '3.5px', textTransform: 'uppercase' }}>
                      {slide.tag}
                    </div>
                  </div>

                  {/* Main Heading */}
                  <h2 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: 'clamp(2.4rem, 5.5vw, 5rem)', lineHeight: 1.05, marginBottom: 'clamp(14px, 2.5vh, 22px)', fontWeight: 800, textAlign: 'left', letterSpacing: '-0.025em', textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}>
                    {slide.heading1}{slide.heading2 && <><br /><span style={{ color: 'var(--primary-red)' }}>{slide.heading2}</span></>}{slide.heading3 && <><br />{slide.heading3}</>}
                  </h2>

                  {/* Horizontal rule accent */}
                  <div style={{ width: 'clamp(50px, 8vw, 70px)', height: '2px', background: 'rgba(255,255,255,0.25)', borderRadius: '2px', marginBottom: 'clamp(14px, 2.5vh, 22px)' }}></div>

                  {/* Description */}
                  <p style={{ fontSize: 'clamp(0.92rem, 1.4vw, 1.12rem)', lineHeight: 1.85, color: 'rgba(255,255,255,0.82)', maxWidth: '600px', fontWeight: 400, textAlign: 'left', marginBottom: 'clamp(22px, 4vh, 40px)', letterSpacing: '0.01em' }}>
                    {slide.desc}
                  </p>

                  {/* CTA Buttons */}
                  <div className="hero-buttons" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                    <Link href="/projects" className="btn btn-primary">
                      Our Projects <ArrowRight style={{ marginLeft: '8px', width: '18px', height: '18px' }} />
                    </Link>
                    <Link href="/about/company-overview" className="btn btn-glass">Our Story</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Slide Progress Indicators */}
          <div style={{ position: 'absolute', bottom: '26px', left: 'clamp(30px, 7vw, 100px)', zIndex: 5, display: 'flex', gap: '8px', alignItems: 'center' }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  height: '3px',
                  width: index === currentSlide ? '44px' : '18px',
                  background: index === currentSlide ? 'var(--primary-red)' : 'rgba(255,255,255,0.35)',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.4s ease',
                  boxShadow: index === currentSlide ? '0 0 8px var(--primary-red)' : 'none'
                }}
              />
            ))}
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', letterSpacing: '2px', marginLeft: '6px', fontWeight: 500 }}>
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>

        </div>
      </section>`;
content = content.substring(0, heroStart) + newSlider + content.substring(heroEnd);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully replaced hero slider!');
