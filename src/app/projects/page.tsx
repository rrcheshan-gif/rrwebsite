"use client";

import { useState } from 'react';
import Link from 'next/link';
import projectsData from './data';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const completedProjects = projectsData.filter((p: any) => p.type !== 'ongoing');
  
  // Sort projects: 1) Base Year Desc, 2) Has Custom Image, 3) Full Date Desc
  const sortedProjects = [...completedProjects].sort((a: any, b: any) => {
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

  
  const milestoneIds = ['project-47', 'project-32', 'project-86'];
  const milestoneProjects = filteredProjects.filter((p: any) => milestoneIds.includes(p.id)).sort((a: any, b: any) => milestoneIds.indexOf(a.id) - milestoneIds.indexOf(b.id));
  const regularProjects = filteredProjects.filter((p: any) => !milestoneIds.includes(p.id));

  const renderProjectCard = (project: any) => (
    <Link href={`/projects/${project.id}`} key={project.id} className="fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none' }}>
              <div 
                style={{ 
                  background: "var(--white)", 
                  borderRadius: "24px", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)", 
                  border: '1px solid var(--border-soft)',
                  display: 'flex', 
                  flexDirection: 'column',
                  flex: 1,
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  overflow: "hidden"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                }}
              >
                {(() => {
                  const imgPath = project.heroImage || project.images?.[0];
                  if (!imgPath) return null;
                  const imgSrc = imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
                  return (
                    <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "var(--bg-base)" }}>
                      <img 
                        src={imgSrc} 
                        alt={`${project.title} - RR Construction Sri Lanka`} 
                        className="img-polished img-hover-zoom" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "6px", flexWrap: "wrap", zIndex: 2 }}>
                        <span style={{ padding: '4px 10px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700,  letterSpacing: '0.5px', border: '1px solid rgba(255,255,255,0.2)' }}>{project.category}</span>
                        <span style={{ padding: '4px 10px', background: project.status?.includes('Ongoing') ? 'rgba(217, 119, 6, 0.85)' : 'rgba(16, 185, 129, 0.85)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.3px', border: '1px solid rgba(255,255,255,0.25)' }}>{project.status}</span>
                      </div>
                    </div>
                  );
                })()}
                
                <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--primary-red)', fontSize: '0.8rem', fontWeight: 700,  marginBottom: '10px' }}>
                    {project.category}
                  </div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: '1.2rem', marginBottom: '15px', lineHeight: '1.4', fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <p style={{ color: "var(--text-light)", fontSize: '0.95rem', marginBottom: '15px', lineHeight: '1.5' }}>
                      A comprehensive {project.category} project executed for {project.client}, emphasizing modern engineering standards and timely delivery.
                    </p>
                    
                    
                    
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                      <span className="btn-glass-red">View Details &rarr;</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
  );


  return (
    <div style={{ paddingTop: "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      <section className="page-header" style={{ backgroundImage: "url('/images/BADULLA/completed_project_background.jpeg')", padding: "70px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.65) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home
            </Link>
          </div>
          <h1 className="hero-heading fade-in" style={{ color: "white", fontSize: "clamp(2.5rem, 8vw, 3.5rem)", textAlign: "center", fontFamily: "var(--font-heading)", textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Our Portfolio</h1>
          <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", color: "#f8fafc", fontSize: "1.1rem", textShadow: "0 2px 10px rgba(0,0,0,0.9)", fontWeight: 500 }}>
            Every project here is proof of work delivered, not just promised – road networks, water retaining structures, bridges, buildings, and dredging & reclamation works completed across Sri Lanka and beyond.
          </p>
        </div>
      </section>

      <div className="container">

        {/* Status Toggle Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', marginTop: '20px' }}>
          <div style={{ display: 'flex', background: 'var(--bg-base)', borderRadius: '50px', padding: '6px', border: '1px solid var(--border-soft)' }}>
             <Link href="/projects" style={{ padding: '12px 40px', borderRadius: '50px', background: 'var(--primary-red)', color: 'white', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 15px rgba(229,57,53,0.3)' }}>
               Completed Projects
             </Link>
             <Link href="/projects/ongoing" style={{ padding: '12px 40px', borderRadius: '50px', color: 'var(--text-dark)', fontWeight: 'bold', textDecoration: 'none' }}>
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

        {/* Projects Grid */}
          {filter === 'all' && milestoneProjects.length > 0 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', marginTop: '20px' }}>
                <div style={{ width: '4px', height: '35px', background: 'var(--primary-red)', borderRadius: '4px' }}></div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 5vw, 2rem)", color: "var(--text-dark)", margin: 0, textAlign: "left" }}>
                  Milestone Projects
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "30px", paddingBottom: "50px", borderBottom: "1px solid var(--border-soft)", marginBottom: "50px" }}>
                {milestoneProjects.map(renderProjectCard)}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '4px', height: '35px', background: 'var(--text-dark)', borderRadius: '4px' }}></div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 4vw, 1.8rem)", color: "var(--text-dark)", margin: 0, textAlign: "left" }}>
                  All Completed Projects
                </h2>
              </div>
            </>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "30px", paddingBottom: "80px" }}>
            {(filter === 'all' ? regularProjects : filteredProjects).map(renderProjectCard)}
        </div>
      </div>
    </div>
  );
}



