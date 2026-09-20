"use client";
import QuoteForm from "@/app/components/QuoteForm";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import BackButton from "@/app/components/BackButton";
export default function QuarriesAggregates() {
  const router = useRouter();
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const galleryImages = [
    'images/thudugala-5.jpg',
    'images/veerapuram/omanthai-1.jpg',
    'images/yakawewa-asphalt-2.jpg'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImg) return;
      const currentIdx = galleryImages.indexOf(lightboxImg.replace(/^\//, ''));
      if (currentIdx === -1) return;
      
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIdx + 1) % galleryImages.length;
        setLightboxImg(galleryImages[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
        setLightboxImg(galleryImages[prevIdx]);
      } else if (e.key === 'Escape') {
        setLightboxImg(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImg]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      plant: formData.get('plant'),
      product: formData.get('product'),
      qty: formData.get('qty'),
      location: formData.get('location'),
      message: formData.get('message'),
    };

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        alert('Thank you for your aggregates inquiry! An email has been successfully sent to our dispatch team. We will contact you shortly.');
        form.reset();
      } else {
        alert('There was a problem sending your request. Please try again later.');
      }
    } catch (error) {
      alert('Error sending request. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
            background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', 
            justifyContent: 'center', alignItems: 'center', padding: '20px'
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} onClick={() => setLightboxImg(null)}></div>
          <span 
            style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '40px', fontWeight: 'bold', cursor: 'pointer', zIndex: 10000 }}
            onClick={() => setLightboxImg(null)}
          >
            &times;
          </span>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              const currentIdx = galleryImages.indexOf(lightboxImg.replace(/^\//, ''));
              const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
              setLightboxImg(galleryImages[prevIdx]);
            }}
            style={{ position: 'absolute', left: '30px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '24px', cursor: 'pointer', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            â†
          </button>

          <img src={`/${lightboxImg.replace(/^\//, '')}`} alt="Fullscreen view" style={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', objectFit: 'contain', position: 'relative', zIndex: 10000 }} />

          <button 
            onClick={(e) => {
              e.stopPropagation();
              const currentIdx = galleryImages.indexOf(lightboxImg.replace(/^\//, ''));
              const nextIdx = (currentIdx + 1) % galleryImages.length;
              setLightboxImg(galleryImages[nextIdx]);
            }}
            style={{ position: 'absolute', right: '30px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '24px', cursor: 'pointer', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            â†'
          </button>
        </div>
      )}

      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/quarry-hero-new.jpg')", padding: "140px 20px 40px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center",  borderRadius: '32px',
          margin: '0 20px 40px', overflow: "hidden" }}>
        
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.4) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Quarries & <span style={{ color: "var(--primary-red)" }}>Aggregates</span></h1>
            <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "550px", lineHeight: 1.6, margin: "10px 0 0 0" }}>
               Self-owned, fully integrated material production and machinery divisions ensuring uninterrupted supply.
            </p>
              <BackButton />
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{ padding: "60px 20px 50px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
            <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
            <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>MATERIALS</h4>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "20px", fontWeight: 800, lineHeight: 1.1 }}>
            Industrial-Grade Aggregates for Construction <span className="text-gradient" style={{ fontWeight: 300 }}>Projects</span>
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "var(--text-light)", maxWidth: "800px", margin: "0 0 30px 0" }}>
            RR Construction operates three high-capacity, fully automated quarries and processing plants strategically located across Sri Lanka. Catering to major B2B infrastructure developers, highway and expressway contractors, and commercial builders, we guarantee consistent quality, massive stockpiles, and a direct transport fleet for on-time site delivery.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", marginTop: "40px" }}>
            <div style={{ background: "var(--white)", padding: "25px", borderRadius: "8px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", minWidth: 'min(100%, 250px)', flex: 1 }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "15px" }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              <h4 style={{ color: "var(--text-dark)", fontSize: "1.2rem", marginBottom: "8px", fontWeight: 700 }}>RDA & SLS Compliant</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.5 }}>All aggregates are tested at independent labs for strength, gradation, and durability standards.
          </p>
        </div>
            <div style={{ background: "var(--white)", padding: "25px", borderRadius: "8px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", minWidth: 'min(100%, 250px)', flex: 1 }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "15px" }}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              <h4 style={{ color: "var(--text-dark)", fontSize: "1.2rem", marginBottom: "8px", fontWeight: 700 }}>Direct Transport Fleet</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.5 }}>Over 50 dedicated high-capacity tipper trucks ready to deliver aggregates directly to your construction sites.</p>
            </div>
            <div style={{ background: "var(--white)", padding: "25px", borderRadius: "8px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", minWidth: 'min(100%, 250px)', flex: 1 }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "15px" }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <h4 style={{ color: "var(--text-dark)", fontSize: "1.2rem", marginBottom: "8px", fontWeight: 700 }}>Uninterrupted Supply</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.5 }}>Massive stockpile holding capacities ensure consistent supply even during peak construction periods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Plants Section */}
      <section style={{ padding: "60px 20px 50px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)",  }}>Our Strategic Plant Locations</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "10px", textAlign: "center" }}>Three crushing powerhouses placed strategically to cover the Western, North Central, and Northern Provinces.</p>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", alignItems: "stretch" }}>
            {/* Thudugala Plant */}
            <div onClick={() => router.push('/resources/aggregates/thudugala')} style={{ background: "var(--white)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "pointer", transition: "transform 0.2s ease" }}>
              <div style={{ minWidth: 'min(100%, 300px)', cursor: "pointer", position: "relative" }} className="img-polish" >
                <img className="img-polished img-hover-zoom" src="/images/thudugala-5.jpg" alt="Thudugala Plant" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", bottom: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "4px 12px", fontWeight: 700, fontSize: "0.8rem", borderRadius: "4px",  letterSpacing: "1px" }}>Kaluthara</span>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>Thudugala Crusher Plant</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "5px" }}>Serving Colombo and Western Province developments, providing high-yield aggregates for high-rise buildings, expressways, and major infrastructure projects. Equipped with state-of-the-art crushing technology to ensure consistent material quality.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
                  <div className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center" }}>View Details</div>
                  <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>Quote</a>
                </div>
              </div>
            </div>

            {/* Veerapuram M Sand Plant */}
            <div onClick={() => router.push('/resources/aggregates/veerapuram')} style={{ background: "var(--white)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "pointer", transition: "transform 0.2s ease" }}>
              <div style={{ minWidth: 'min(100%, 300px)', cursor: "pointer", position: "relative" }} className="img-polish" >
                <img className="img-polished img-hover-zoom" src="/images/omanthai-1.jpg" alt="Veerapuram Plant" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", bottom: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "4px 12px", fontWeight: 700, fontSize: "0.8rem", borderRadius: "4px",  letterSpacing: "1px" }}>Vavuniya</span>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>Veerapuram M Sand Plant</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "5px" }}>Advanced Sand Plant manufacturing high-quality M-Sand and premium washed aggregates. Designed to meet eco-friendly construction standards while providing superior compressive strength for structural engineering.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
                  <div className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center" }}>View Details</div>
                  <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>Quote</a>
                </div>
              </div>
            </div>

            {/* Omanthai Plant */}
            <div onClick={() => router.push('/resources/aggregates/omanthai')} style={{ background: "var(--white)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "pointer", transition: "transform 0.2s ease" }}>
              <div style={{ minWidth: 'min(100%, 300px)', cursor: "pointer", position: "relative" }} className="img-polish" >
                <img className="img-polished img-hover-zoom" src="/images/omanthai/plant-1.jpg" alt="Omanthai Plant" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", bottom: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "4px 12px", fontWeight: 700, fontSize: "0.8rem", borderRadius: "4px",  letterSpacing: "1px" }}>Vavuniya</span>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>Omanthai Plant</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "5px" }}>A key aggregates supplier for Northern infrastructure development and commercial sectors. Operating with high-capacity machinery to deliver uninterrupted material supply for large-scale provincial highway, expressway, and bridge constructions.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
                  <div className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center" }}>View Details</div>
                  <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>Quote</a>
                </div>
              </div>
            </div>
            
            {/* Yakawewa Asphalt Plant */}
            <div onClick={() => router.push('/resources/asphalt/yakawewa')} style={{ background: "var(--white)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "pointer", transition: "transform 0.2s ease" }}>
              <div style={{ minWidth: 'min(100%, 300px)', cursor: "pointer", position: "relative" }} className="img-polish" >
                <img className="img-polished img-hover-zoom" src="/images/yakawewa-asphalt-2.jpg" alt="Yakawewa Asphalt Plant" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", bottom: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "4px 12px", fontWeight: 700, fontSize: "0.8rem", borderRadius: "4px",  letterSpacing: "1px" }}>Medawachchiya</span>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>Yakawewa Asphalt Plant</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "5px" }}>Premium hot-mix asphalt supplier for major highway and expressway paving projects across the region. Featuring automated temperature and mix-control systems to guarantee maximum durability and smooth highway and expressway surface finishes.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
                  <div className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center" }}>View Details</div>
                  <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section style={{ padding: "60px 20px 50px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)",  }}>Available Products & Specifications</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "10px", textAlign: "center" }}>Select from our wide range of crushed rock aggregates to suit your exact engineering needs.</p>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
            {/* 3/4" Metal */}
            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderTop: "4px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--text-dark)", fontSize: "1.3rem", marginBottom: "12px", fontFamily: "var(--font-heading)" }}>3/4" (20mm) Aggregate</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "15px" }}>The standard coarse aggregate for structural concrete mixes, columns, beams, slabs, and general reinforced concrete works.</p>
              <span style={{ background: "rgba(229, 57, 53, 0.08)", color: "var(--primary-red)", fontSize: "0.85rem", fontWeight: 700, padding: "4px 10px", borderRadius: "4px",  }}>Structural Concrete</span>
            </div>
            
            {/* ABC Material */}
            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderTop: "4px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--text-dark)", fontSize: "1.3rem", marginBottom: "12px", fontFamily: "var(--font-heading)" }}>Aggregate Base Course (ABC)</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "15px" }}>Perfectly graded mixture of coarse aggregates and quarry dust for premium sub-base and base compaction in highways and expressways.</p>
              <span style={{ background: "rgba(229, 57, 53, 0.08)", color: "var(--primary-red)", fontSize: "0.85rem", fontWeight: 700, padding: "4px 10px", borderRadius: "4px",  }}>Highway and Expressway Construction</span>
            </div>

            {/* Manufactured Sand */}
            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderTop: "4px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--text-dark)", fontSize: "1.3rem", marginBottom: "12px", fontFamily: "var(--font-heading)" }}>Manufactured Sand (M-Sand)</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "15px" }}>Premium fine aggregate alternative to river sand, double washed for high-strength concrete mixes and masonry plastering works.</p>
              <span style={{ background: "rgba(229, 57, 53, 0.08)", color: "var(--primary-red)", fontSize: "0.85rem", fontWeight: 700, padding: "4px 10px", borderRadius: "4px",  }}>Eco Fine Aggregate</span>
            </div>

            {/* Quarry Dust */}
            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderTop: "4px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--text-dark)", fontSize: "1.3rem", marginBottom: "12px", fontFamily: "var(--font-heading)" }}>Quarry Dust</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "15px" }}>Finely crushed stone fractions under 5mm, ideal for concrete hollow block manufacturing and as filling material under paving stones.</p>
              <span style={{ background: "rgba(229, 57, 53, 0.08)", color: "var(--primary-red)", fontSize: "0.85rem", fontWeight: 700, padding: "4px 10px", borderRadius: "4px",  }}>Blocks & Fillings</span>
            </div>
            
            {/* Rubbles & Boulders */}
            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderTop: "4px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--text-dark)", fontSize: "1.3rem", marginBottom: "12px", fontFamily: "var(--font-heading)" }}>6" x 9" Rubbles & Boulders</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "15px" }}>High-density boulders for gravity retaining walls, bridge abutments, foundation packing, and coastal bank protection structures.</p>
              <span style={{ background: "rgba(229, 57, 53, 0.08)", color: "var(--primary-red)", fontSize: "0.85rem", fontWeight: 700, padding: "4px 10px", borderRadius: "4px",  }}>Retaining & Foundation</span>
            </div>
            
            {/* 1/2" & 1" Metal */}
            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", borderTop: "4px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--text-dark)", fontSize: "1.3rem", marginBottom: "12px", fontFamily: "var(--font-heading)" }}>1/2" (12mm) & 1" (25mm) Metal</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "15px" }}>Specific aggregate gradations for precast concrete, asphalt wearing courses, and specific grading criteria for industrial applications.</p>
              <span style={{ background: "rgba(229, 57, 53, 0.08)", color: "var(--primary-red)", fontSize: "0.85rem", fontWeight: 700, padding: "4px 10px", borderRadius: "4px",  }}>Precast & Asphalt</span>
            </div>
          </div>
        </div>
      </section>

      
      <QuoteForm />
    </div>
  );
}
