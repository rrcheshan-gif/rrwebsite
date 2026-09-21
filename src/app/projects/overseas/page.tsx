"use client";

import { useState } from 'react';
import Link from 'next/link';
import projectsData from '../data';


import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";
export default function Projects() {
  

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

  const filteredProjects = sortedProjects.filter((p: any) => p.category === 'overseas');

  
  const milestoneIds = ['project-ldpp-package-02', 'project-47', 'project-32', 'project-86'];
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
                        <span style={{ padding: '4px 10px', background: project.type === 'ongoing' ? 'rgba(217, 119, 6, 0.85)' : 'rgba(16, 185, 129, 0.85)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.3px', border: '1px solid rgba(255,255,255,0.25)' }}>{project.status}</span>
                      </div>
                      {project.year && project.type !== 'ongoing' && (
                        <div style={{ position: "absolute", top: "12px", right: "12px", zIndex: 2 }}>
                          <span style={{ padding: '4px 12px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', color: '#1e293b', borderRadius: "30px", fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.5px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>{String(project.year).substring(0, 4)}</span>
                        </div>
                      )}
                    </div>
                  );
                })()}
                
                <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--primary-red)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '10px', textTransform: 'capitalize' }}>
                    {project.category}
                  </div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: '1.2rem', marginBottom: '15px', lineHeight: '1.4', fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <p style={{ color: "var(--text-light)", fontSize: '0.95rem', marginBottom: '15px', lineHeight: '1.5' }}>
                      A comprehensive {String(project.category).charAt(0).toUpperCase() + String(project.category).slice(1)} project executed for {project.client}, emphasizing modern engineering standards and timely delivery.
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
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
            <section className="page-header" style={{ position: "relative", backgroundImage: "url('/images/projects/Kurikadduwan/WhatsApp%20Image%202026-08-01%20at%2013.20.12.jpeg')", backgroundSize: "cover", backgroundPosition: "center", color: "var(--white)" }}>
        
        
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <AutoBreadcrumb />
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Overseas <span style={{ color: "var(--primary-red)" }}>Projects</span></h1>
              
          
        </div>
      </section>

      <div className="container">

        

        
        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "30px", paddingBottom: "80px" }}>
          {filteredProjects.map(renderProjectCard)}
        </div>
      </div>
    </div>
  );
}
