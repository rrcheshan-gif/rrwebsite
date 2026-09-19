"use client";
import React, { useMemo } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import projectsData from '@/app/projects/data';
import { ArrowLeft } from 'lucide-react';

export default function OngoingCategoryPage({ params }: { params: { category: string } }) {
  const categoryId = params.category;
  
  // Define category titles
  const categoryTitles: Record<string, string> = {
    'roads': 'Highway and Expressway Construction',
    'bridges': 'Bridge Construction',
    'irrigation': 'Irrigation & Water Supply',
    'disaster': 'Landslide Mitigation',
    'maritime': 'Maritime & Dredging'
  };

  const title = categoryTitles[categoryId];

  if (!title) {
    notFound();
  }

  // Filter ongoing projects for this category
  const categoryProjects = useMemo(() => {
    return projectsData.filter(p => p.type === 'ongoing' && p.category === categoryId);
  }, [categoryId]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', paddingBottom: '80px' }}>
      {/* Space for a beautiful hero image specifically for this category */}
      <section className="page-header" style={{ 
        position: 'relative', 
        backgroundColor: '#0f172a',
        // Optional: Replace this with a specific image per category
        backgroundImage: "url('/images/hero-road-roller.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'var(--white)', 
        padding: '140px 20px 60px', 
        textAlign: 'center',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        marginBottom: '60px'
      }}>
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/projects/ongoing" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <ArrowLeft size={14} /> Back to Categories
          </Link>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '15px' }}>
            {title} <span style={{ color: 'var(--primary-red)' }}>Projects</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#cbd5e1' }}>
            Ongoing developments and active sites in the {title.toLowerCase()} sector.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1440px' }}>
        {categoryProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
            <p>No ongoing projects found in this category at the moment.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px',
            padding: '20px'
          }}>
            {categoryProjects.map((project, idx) => (
              <div key={project.id || idx} style={{
                background: 'var(--white)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                border: '1px solid var(--border-soft)',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="hover-lift"
              >
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img 
                    src={project.mainImage || (project.images && project.images[0]) || '/images/hero-road-roller.jpg'} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    className="img-hover-zoom"
                  />
                  {/* Status Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '15px', right: '15px',
                    background: 'var(--primary-red)',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}>
                    Ongoing
                  </div>
                </div>
                <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '10px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  {project.mapQuery && (
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {project.mapQuery}
                    </p>
                  )}
                  {project.client && (
                    <div style={{ marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid var(--border-soft)', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                      <strong>Client:</strong> {project.client}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
