"use client";

import { useState } from 'react';
import Link from 'next/link';
import projectsData from '../data';

export default function OngoingProjects() {
  const [filter, setFilter] = useState('all');

  const ongoingProjects = projectsData.filter((p: any) => p.type === 'ongoing');
  
  // Sort projects: 1) Base Year Desc, 2) Has Custom Image, 3) Full Date Desc
  const sortedProjects = [...ongoingProjects].sort((a: any, b: any) => {
    const getImage = (p: any) => p.heroImage || (p.images && p.images[0]) || (p.galleryImages && p.galleryImages[0]);
    const imgA = getImage(a);
    const imgB = getImage(b);
    
    const hasCustomImageA = imgA && imgA !== '/images/page-headers/projects-portfolio.jpg' ? 1 : 0;
    const hasCustomImageB = imgB && imgB !== '/images/page-headers/projects-portfolio.jpg' ? 1 : 0;
    
    if (hasCustomImageA !== hasCustomImageB) {
      return hasCustomImageB - hasCustomImageA;
    }

    const baseYearA = String(a.year || "").substring(0, 4);
    const baseYearB = String(b.year || "").substring(0, 4);
    
    if (baseYearA !== baseYearB) {
      return baseYearB.localeCompare(baseYearA);
    }

    const valA = String(a.year || "");
    const valB = String(b.year || "");
    return valB.localeCompare(valA);
  });

  const filteredProjects = sortedProjects.filter((p: any) => 
    filter === 'all' ? true : p.category === filter
  );

  return (
    <div style={{ paddingTop: "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/completed-hero.jpg')", padding: "50px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem", marginBottom: "15px" }}>Ongoing Projects</h1>
          <p style={{ color: "#e2e8f0", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>Every project listed here is currently active and in progress, representing our commitment to expanding Sri Lanka's infrastructure network.</p>
        </div>
      </section>

      <div className="container" style={{ padding: "60px 20px" }}>
        {/* Status Toggle Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <div style={{ display: 'flex', background: 'var(--bg-base)', borderRadius: '50px', padding: '6px', border: '1px solid var(--border-soft)' }}>
             <Link href="/projects" style={{ padding: '12px 40px', borderRadius: '50px', color: 'var(--text-dark)', fontWeight: 'bold', textDecoration: 'none' }}>
               Completed Projects
             </Link>
             <Link href="/projects/ongoing" style={{ padding: '12px 40px', borderRadius: '50px', background: 'var(--primary-red)', color: 'white', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 15px rgba(229,57,53,0.3)' }}>
               Ongoing Projects
             </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '50px' }}>
          {['all', 'roads', 'bridges', 'water', 'maritime', 'buildings', 'irrigation', 'disaster', 'railway', 'overseas'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '10px 20px',
                borderRadius: '50px',
                border: `1px solid ${filter === f ? 'var(--primary-red)' : 'var(--border-soft)'}`,
                background: filter === f ? 'var(--primary-red)' : 'var(--white)',
                color: filter === f ? '#fff' : 'var(--text-dark)',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.3s ease',
                fontWeight: filter === f ? '700' : '500',
                boxShadow: filter === f ? '0 10px 20px rgba(229,57,53,0.2)' : '0 4px 10px rgba(0,0,0,0.02)'
              }}
            >
              {f === 'all' ? 'All Projects' : f === 'disaster' ? 'Disaster Mgmt' : f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '30px', marginBottom: '60px' }}>
          {filteredProjects.map((project: any, index: number) => {
            const hasDetail = !!project.id;
            const CardWrapper: any = hasDetail ? Link : 'div';
            const wrapperProps: any = hasDetail ? { href: `/projects/${project.id}`, style: { textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' } } : { style: { display: 'flex', flexDirection: 'column', height: '100%' } };

            return (
              <CardWrapper key={index} {...wrapperProps}>
                <div style={{
                  background: 'var(--white)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  border: '1px solid var(--border-soft)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: hasDetail ? 'pointer' : 'default'
                }}
                onMouseOver={(e) => hasDetail && (e.currentTarget.style.transform = 'translateY(-15px)', e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.1)')}
                onMouseOut={(e) => hasDetail && (e.currentTarget.style.transform = 'none', e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)')}
                >
                  <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "var(--bg-base)" }}>
                    {(() => {
                      const imgPath = project.heroImage || project.images?.[0];
                      if (!imgPath) return null;
                      const imgSrc = imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
                      return (
                        <img 
                          src={imgSrc} 
                          alt={`${project.title} - RR Construction Sri Lanka`} 
                          className="img-polished img-hover-zoom" 
                          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      );
                    })()}
                  <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "6px", flexWrap: "wrap", zIndex: 2 }}>
                    <span style={{ padding: '4px 10px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid rgba(255,255,255,0.2)' }}>{project.category}</span>
                    <span style={{ padding: '4px 10px', background: 'rgba(217, 119, 6, 0.85)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.3px', border: '1px solid rgba(255,255,255,0.25)' }}>Ongoing</span>
                  </div>
                  </div>
                  <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ color: 'var(--primary-red)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
                      {project.category}
                    </div>
                    <h3 style={{ color: 'var(--text-dark)', fontSize: '1.2rem', marginBottom: '15px', lineHeight: 1.4 }}>
                      {project.title}
                    </h3>
                    <div style={{ marginTop: 'auto' }}>
                      <p style={{ color: "var(--text-light)", fontSize: '0.95rem', marginBottom: '15px', lineHeight: '1.5' }}>
                        A comprehensive {project.category} project executed for {project.client}, emphasizing modern engineering standards and timely delivery.
                      </p>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          {project.duration && <span style={{ fontSize: '0.85rem', color: '#666' }}><strong>Duration:</strong> {project.duration}</span>}
                        </div>
                      </div>
                      
                      <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <span className="btn-glass-red">View Details &rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}


