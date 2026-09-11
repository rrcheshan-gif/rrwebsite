"use client";
import React from 'react';
import Link from 'next/link';
import projectsData from '../data';

export default function OngoingProjects() {
  const ongoingProjects = (projectsData as any[]).filter((p: any) => p.type === 'ongoing');

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
          const imgPath = project.heroImage || project.images?.[0] || project.galleryImages?.[0];
          if (!imgPath) return null;
          const imgSrc = imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
          return (
            <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "var(--bg-base)" }}>
              <img 
                src={encodeURI(imgSrc)} 
                alt={`${project.title} - RR Construction Sri Lanka`} 
                className="img-polished img-hover-zoom" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "6px", flexWrap: "wrap", zIndex: 2 }}>
                <span style={{ padding: '4px 10px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.5px', border: '1px solid rgba(255,255,255,0.2)' }}>{project.category}</span>
                <span style={{ padding: '4px 10px', background: 'rgba(217, 119, 6, 0.85)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.3px', border: '1px solid rgba(255,255,255,0.25)' }}>{project.status}</span>
              </div>
            </div>
          );
        })()}
        
        <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: 'var(--primary-red)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '10px' }}>
            {project.category}
          </div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '15px', lineHeight: 1.4, flex: 1 }}>
            {project.title}
          </h3>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <span className="btn-glass-red">View Details &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div style={{ minHeight: '70vh', background: '#f8fafc' }}>
      <section style={{ padding: '180px 20px 100px', textAlign: 'center', width: '100%' }}>
        <div className='container' style={{ maxWidth: '1440px' }}>
          <h1 style={{ 
            fontSize: 'clamp(1.8rem, 6vw, 4.2rem)', 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 900, 
            color: 'var(--text-dark)', 
            marginBottom: '40px',
            lineHeight: 1.1
          }}>
            Ongoing <span style={{ color: 'var(--primary-red)' }}>Projects</span>
          </h1>
          
          <div className='glass-panel' style={{ 
             padding: '40px', 
             borderRadius: '16px', 
             background: 'white', 
             border: '1px solid var(--border-soft)',
             boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
             marginBottom: '60px'
          }}>
             <p style={{ 
               color: 'var(--text-dark)', 
               fontSize: '1.15rem', 
               lineHeight: 1.9, 
               margin: 0
             }}>
               RR Construction is currently executing a diverse and expansive portfolio of large-scale infrastructure projects. Our ongoing commitments span across all critical engineering sectors, including national road networks, complex bridges, comprehensive water supply and irrigation systems, major maritime developments, multi-storey buildings, railway infrastructure, disaster management and landslide mitigation, as well as specialized overseas construction projects.
             </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "30px", paddingBottom: "50px", textAlign: "left" }}>
            {ongoingProjects.map(renderProjectCard)}
          </div>
        </div>
      </section>
    </div>
  );
}
