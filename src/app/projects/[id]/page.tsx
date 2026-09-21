"use client";

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import projectsData from '../data';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const project: any = projectsData.find((p: any) => p.id === resolvedParams.id);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => { const check = () => setIsMobile(window.innerWidth <= 768); check(); window.addEventListener('resize', check); return () => window.removeEventListener('resize', check); }, []);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const gallery = project?.images || project?.galleryImages;
      if (!lightboxImg || !gallery) return;
      const currentIdx = gallery.indexOf(lightboxImg);
      if (currentIdx === -1) return;
      
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIdx + 1) % gallery.length;
        setLightboxImg(gallery[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIdx - 1 + gallery.length) % gallery.length;
        setLightboxImg(gallery[prevIdx]);
      } else if (e.key === 'Escape') {
        setLightboxImg(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImg, project]);

  if (!project) {
    notFound();
  }

  // --- Category display name ---
  let cat = project.category || 'other';
  let categoryDisplay = cat.charAt(0).toUpperCase() + cat.slice(1);
  if (cat === 'maritime') categoryDisplay = 'Maritime & Dredging';
  if (cat === 'disaster') categoryDisplay = 'Disaster Management';
  if (cat === 'roads') categoryDisplay = 'Roads & Highways';

  // --- Description ---
  let description = project.description || '';
  if (!description) {
    let timeAndDuration = (project.type === 'ongoing') 
      ? `The project is being systematically undertaken` 
      : (project.year && project.duration) 
        ? `The project operations were anchored around the year ${project.year} and executed across an intensive ${project.duration} timeframe`
        : project.year 
          ? `The project operations were anchored around the year ${project.year}` 
          : `The project was systematically undertaken`;
          
    let clientPhrase = project.client && project.client !== 'Confidential' 
      ? `This flagship development is being spearheaded on behalf of <strong>${project.client}</strong>.` 
      : `This development is managed by our specialized engineering divisions.`;
    
    let catDetails = "";
    if (cat === 'roads') {
        catDetails = "The scope of work involves complex earthworks, sub-base preparation, high-grade asphalt laying, and the installation of comprehensive drainage systems. Heavy machinery from our internal fleet was deployed to ensure rapid progression despite challenging geographic and weather conditions, ultimately improving regional connectivity and economic throughput.";
    } else if (cat === 'bridges') {
        catDetails = "Engineering this structure required advanced piling techniques, the pouring of high-strength reinforced concrete, and meticulous structural steel fabrication. Our teams focused heavily on load-bearing capacities and flood-resilience, ensuring the bridge can safely handle peak traffic volumes while withstanding extreme environmental stressors.";
    } else if (cat === 'maritime') {
        catDetails = "Maritime operations are inherently complex. This project involved extensive deep-water dredging, the construction of robust breakwaters, and coastal reclamation. Our specialized marine engineering divisions worked around tidal schedules and severe monsoonal challenges to secure the coastline and build a facility that supports local fisheries and maritime logistics.";
    } else if (cat === 'water') {
        catDetails = "Ensuring access to clean water is critical. The engineering parameters for this project included the excavation and laying of extensive pipeline networks, the construction of high-capacity treatment units, and the integration of advanced pumping mechanisms. Stringent pressure testing and environmental safety audits we're conducted at every phase.";
    } else if (cat === 'buildings') {
        catDetails = "This structural development required precise architectural coordination, deep foundation laying, and the erection of a multi-story framework. We utilized high-grade industrial materials and advanced heavy civil engineering practices to deliver a modern, energy-efficient building that meets all stringent urban planning and safety regulations.";
    } else {
        catDetails = "The infrastructure required a multidisciplinary engineering approach, involving extensive site preparation, structural integrity testing, and the deployment of our heavy-machinery fleet. Our highly skilled workforce ensured that all architectural and safety parameters we're met without compromising on the delivery timeline.";
    }

    description = `<p style="margin-bottom: 20px;">The <strong>"${project.title || 'infrastructure development'}"</strong> project stands as a testament to modern engineering capabilities in the ${categoryDisplay.toLowerCase()} sector. ${clientPhrase}</p>
                   <p style="margin-bottom: 20px;">${timeAndDuration}, showcasing RR Construction's unwavering commitment to delivering large-scale infrastructure on schedule without sacrificing quality.</p>
                   <p style="margin-bottom: 20px;">${catDetails}</p>
                   <p>By leveraging our decades of heavy civil engineering expertise, a massive self-owned machinery fleet, and a dedicated workforce of over 1400 professionals, we ensured that this project strictly adhered to ISO 9001 quality, ISO 14001 environmental, and ISO 45001 safety standards from inception to completion.</p>`;
  }

    
  const galleryImages = project.images || project.galleryImages || [];
  const hasGallery = galleryImages.length > 0;
  const heroImg = project.heroImage || (galleryImages.length > 0 ? (galleryImages.find((img: string) => img.toLowerCase().includes('background')) || galleryImages[0]) : null);

  return (
    <div style={{ backgroundColor: "var(--bg-light)", minHeight: "100vh" }}>
      
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
              const currentIdx = galleryImages.indexOf(lightboxImg);
              const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
              setLightboxImg(galleryImages[prevIdx]);
            }}
            style={{ position: 'absolute', left: '30px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '24px', cursor: 'pointer', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            ←
          </button>

          <div style={{ position: 'relative', zIndex: 10000, maxWidth: '90%', maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={4}
              centerOnInit={true}
              limitToBounds={true}
              wheel={{ step: 0.1 }}
            >
              <TransformComponent wrapperStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src={lightboxImg.startsWith('/') ? lightboxImg : `/${lightboxImg}`} 
                  alt="Fullscreen view" 
                  style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', objectFit: 'contain' }} 
                />
              </TransformComponent>
            </TransformWrapper>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              const currentIdx = galleryImages.indexOf(lightboxImg);
              const nextIdx = (currentIdx + 1) % galleryImages.length;
              setLightboxImg(galleryImages[nextIdx]);
            }}
            style={{ position: 'absolute', right: '30px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '24px', cursor: 'pointer', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            →
          </button>
        </div>
      )}

      {/* Dynamic Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '50vh',
        borderRadius: isMobile ? '24px' : '32px',
        margin: isMobile ? '0 12px 30px' : '0 20px 40px', 
        minHeight: '350px',
        display: 'flex',
        alignItems: 'flex-end',
        background: heroImg ? `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%), url('${heroImg.startsWith('/') ? heroImg : `/${heroImg}`}') center/cover` : 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.95) 100%), url("/images/page-headers/blueprint-bg-hq.jpg") center/cover',
        color: 'white',
        paddingBottom: '40px'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <button
            onClick={() => router.back()}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px', color: '#ccc', textDecoration: 'none', paddingBottom: '2px', background: 'none', border: 'none', borderBottom: '1px solid #ccc', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}
          >
            ← Back
          </button>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
            <span style={{ padding: '5px 14px', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: "30px", fontSize: '0.8rem', fontWeight: 700,  letterSpacing: '0.5px' }}>{categoryDisplay}</span>
            <span style={{ padding: '5px 14px', background: project.status?.includes('Ongoing') ? 'rgba(217, 119, 6, 0.85)' : 'rgba(16, 185, 129, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: "30px", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.3px' }}>{project.status}</span>
            {project.year && project.type !== 'ongoing' && (
              <span style={{ padding: '5px 16px', background: 'rgba(255, 255, 255, 0.95)', color: '#1e293b', borderRadius: "30px", fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.5px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>{project.year}</span>
            )}
          </div>
          <AutoBreadcrumb />
          <h1 className="hero-heading" style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)', lineHeight: '1.3', marginBottom: '0', textShadow: '0 2px 8px rgba(0,0,0,0.5)', color: 'white' }}>{project.title}</h1>
        </div>
        
        
      </section>

      {/* Project Details */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            
            {/* Main Content (Left) */}
            <div style={{ flex: '2', minWidth: '300px' }}>
              <div style={{ background: 'var(--white)', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
                <h3 style={{ color: 'var(--primary-red)', marginBottom: '24px', fontSize: '1.5rem' }}>Project Overview</h3>
                <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-dark)' }} dangerouslySetInnerHTML={{ __html: description }}></div>
              </div>

              {/* Gallery */}
              {hasGallery && (
                <div style={{ background: 'var(--white)', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ color: 'var(--primary-red)', marginBottom: '30px', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    Project Progress Gallery
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
                    {galleryImages.map((img: string, idx: number) => (
                      <div 
                        key={idx} 
                        style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', paddingBottom: '75%', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', cursor: 'pointer' }}
                        onClick={() => setLightboxImg(img)}
                      >
                        <img className="img-polished img-hover-zoom" 
                          src={img.startsWith('/') ? img : `/${img}`} 
                          alt={`${project.title} - Image ${idx + 1}`} 
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} 
                          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar (Right) */}
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{ background: 'var(--white)', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
                
                <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border-soft)' }}>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem',  marginBottom: '5px', letterSpacing: '1px' }}>Client</h4>
                  <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.client}</p>
                </div>
                
                {project.contractNo && (
                  <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border-soft)' }}>
                    <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem',  marginBottom: '5px', letterSpacing: '1px' }}>Contract No</h4>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.contractNo}</p>
                  </div>
                )}
                
                {project.value && (
                  <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border-soft)' }}>
                    <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem',  marginBottom: '5px', letterSpacing: '1px' }}>Contract Value</h4>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.value}</p>
                  </div>
                )}
                
                {project.type !== 'ongoing' && (
                  <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border-soft)' }}>
                    <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem',  marginBottom: '5px', letterSpacing: '1px' }}>Duration</h4>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.duration}</p>
                  </div>
                )}
                
                

              </div>

              

            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
