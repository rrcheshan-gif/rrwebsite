"use client";

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import projectsData from '../data';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const project: any = projectsData.find((p: any) => p.id === resolvedParams.id);
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
    let timePhrase = project.year ? `The project operations are anchored around the year ${project.year}` : `The project was systematically undertaken`;
    let durationPhrase = project.duration ? ` and executed across an intensive ${project.duration} timeframe` : ``;
    let clientPhrase = project.client ? `This flagship development is being spearheaded on behalf of the <strong>${project.client}</strong>.` : `This development is managed by RR Construction's internal engineering divisions.`;
    
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
        catDetails = "This structural development required precise architectural coordination, deep foundation laying, and the erection of a multi-story framework. We utilized high-grade industrial materials and advanced civil engineering practices to deliver a modern, energy-efficient building that meets all stringent urban planning and safety regulations.";
    } else {
        catDetails = "The infrastructure required a multidisciplinary engineering approach, involving extensive site preparation, structural integrity testing, and the deployment of our heavy-machinery fleet. Our highly skilled workforce ensured that all architectural and safety parameters we're met without compromising on the delivery timeline.";
    }

    description = `<p style="margin-bottom: 20px;">The <strong>"${project.title || 'infrastructure development'}"</strong> project stands as a testament to modern engineering capabilities in the ${categoryDisplay.toLowerCase()} sector. ${clientPhrase}</p>
                   <p style="margin-bottom: 20px;">${timePhrase}${durationPhrase}, showcasing RR Construction's unwavering commitment to delivering large-scale infrastructure on schedule without sacrificing quality.</p>
                   <p style="margin-bottom: 20px;">${catDetails}</p>
                   <p>By leveraging our decades of civil engineering expertise, a massive self-owned machinery fleet, and a dedicated workforce of over 1,400 professionals, we ensured that this project strictly adhered to ISO 9001 quality, ISO 14001 environmental, and ISO 45001 safety standards from inception to completion.</p>`;
  }

  // --- Google Maps URLs ---
  const getMapSearchQuery = (title: string) => {
    let cleaned = title.replace(/\(.*?\)/g, ''); // Remove parenthesis content
    cleaned = cleaned.replace(/Rehabilitation and Improvement of/gi, '');
    cleaned = cleaned.replace(/Rehabilitation and Maintenance of/gi, '');
    cleaned = cleaned.replace(/Reconstruction of Proposed Improvement and Rehabilitation of/gi, '');
    cleaned = cleaned.replace(/Rehabilitation of bridge No\.[0-9/]+/gi, '');
    cleaned = cleaned.replace(/Reconstruction of Bridge No\.[0-9/]+/gi, '');
    cleaned = cleaned.replace(/Reconstruction of/gi, '');
    cleaned = cleaned.replace(/Rehabilitation of/gi, '');
    cleaned = cleaned.replace(/Construction of/gi, '');
    cleaned = cleaned.replace(/Landslide Mitigation Measures at.*?Locations? in /gi, '');
    cleaned = cleaned.replace(/Landslide Mitigation Measures in /gi, '');
    cleaned = cleaned.replace(/Landslide Mitigation in /gi, '');
    cleaned = cleaned.replace(/Landslide Mitigation /gi, '');
    cleaned = cleaned.replace(/Rectification of Unstable Slope at /gi, '');
    cleaned = cleaned.replace(/Quarry And Crusher Plant - /gi, '');
    cleaned = cleaned.replace(/Procurement of construction of boat launching ramp at /gi, '');
    cleaned = cleaned.replace(/Water Treatment Plant - /gi, '');
    cleaned = cleaned.replace(/Emergency Reconstruction of Northern Railway Line Damaged by Cyclone Ditwah /gi, '');
    cleaned = cleaned.replace(/Emergency Reconstruction of /gi, '');
    cleaned = cleaned.replace(/Reactivation and Reconstruction of /gi, '');
    cleaned = cleaned.replace(/Widening & Redecking of /gi, '');
    cleaned = cleaned.replace(/Second Integrated Road Investment Program - /gi, '');
    cleaned = cleaned.replace(/Integrated Road Investment Program - /gi, '');
    
    const onMatch = cleaned.match(/on\s+(.*?Road)/i);
    if (onMatch) return onMatch[1].trim() + ', Sri Lanka';
    
    const inMatch = cleaned.match(/in\s+(.*?District|.*?Province)/i);
    if (inMatch) return inMatch[1].trim() + ', Sri Lanka';

    const atMatch = cleaned.match(/at\s+(.*)/i);
    if (atMatch) return atMatch[1].trim() + ', Sri Lanka';

    return cleaned.trim() + ', Sri Lanka';
  };

  const mapSearchTerm = project.mapQuery || project.location || getMapSearchQuery(project.title || '');
  const searchQuery = encodeURIComponent(mapSearchTerm);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;
  const mapSrc = `https://maps.google.com/maps?q=${searchQuery}&output=embed&hl=en`;
  const satelliteSrc = `https://maps.google.com/maps?q=${searchQuery}&t=k&output=embed&hl=en`;
  const googleImagesUrl = `https://www.google.com/search?tbm=isch&q=${searchQuery}`;

  const galleryImages = project.images || project.galleryImages || [];
  const hasGallery = galleryImages.length > 0;

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
        minHeight: '350px',
        display: 'flex',
        alignItems: 'flex-end',
        background: project.heroImage ? `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%), url('${project.heroImage.startsWith('/') ? project.heroImage : `/${project.heroImage}`}') center/cover` : 'linear-gradient(135deg, #B71C1C 0%, #E53935 100%)',
        color: 'white',
        paddingBottom: '40px'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <button
            onClick={() => router.back()}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '20px', color: '#ccc', textDecoration: 'none', borderBottom: '1px solid #ccc', paddingBottom: '2px', background: 'none', border: 'none', borderBottom: '1px solid #ccc', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit' }}
          >
            ← Back
          </button>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
            <span style={{ padding: '5px 14px', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: "30px", fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{categoryDisplay}</span>
            <span style={{ padding: '5px 14px', background: project.status.includes('Ongoing') ? 'rgba(217, 119, 6, 0.85)' : 'rgba(16, 185, 129, 0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: "30px", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.3px' }}>{project.status}</span>
          </div>
          <h1 className="hero-heading" style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)', lineHeight: '1.3', marginBottom: '0', textShadow: '0 2px 8px rgba(0,0,0,0.5)', color: 'white' }}>{project.title}</h1>
        </div>
        
        {/* Open in Google Maps Pill */}
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', bottom: '30px', right: '5%', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(255,255,255,0.15)', color: 'white', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 'bold', textDecoration: 'none', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', transition: 'background 0.3s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Open in Google Maps
        </a>
      </section>

      {/* Project Details */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            
            {/* Main Content (Left) */}
            <div style={{ flex: '2', minWidth: '300px' }}>
              <div style={{ background: 'var(--white)', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
                <h3 style={{ color: 'var(--primary-red)', marginBottom: '20px', fontSize: '1.5rem' }}>Project Overview</h3>
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
                
                <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-soft)' }}>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>Client</h4>
                  <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.client}</p>
                </div>
                
                {project.contractNo && (
                  <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-soft)' }}>
                    <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>Contract No</h4>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.contractNo}</p>
                  </div>
                )}
                
                {project.value && (
                  <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-soft)' }}>
                    <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>Contract Value</h4>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.value}</p>
                  </div>
                )}
                
                <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-soft)' }}>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>Duration</h4>
                  <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.duration}</p>
                </div>
                
                {project.type !== 'ongoing' && (
                  <div>
                    <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>Completion Year</h4>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.year}</p>
                  </div>
                )}

              </div>

              {/* Location Maps */}
              {project.type !== 'ongoing' && (
                <div style={{ background: 'var(--white)', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <h3 style={{ color: 'var(--primary-red)', margin: 0, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Location
                    </h3>
                    <a href={googleImagesUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'var(--primary-red)', color: 'white', borderRadius: "30px", fontSize: '0.75rem', fontWeight: 'bold', textDecoration: 'none' }}>
                      View Photos
                    </a>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', borderRadius: '10px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                      <iframe src={mapSrc} width="100%" height="200" style={{ border: 0, display: 'block', pointerEvents: 'none' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>MAP VIEW</div>
                    </a>

                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', borderRadius: '10px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                      <iframe src={satelliteSrc} width="100%" height="200" style={{ border: 0, display: 'block', pointerEvents: 'none' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>SATELLITE</div>
                    </a>
                  </div>
                </div>
              )}

            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
