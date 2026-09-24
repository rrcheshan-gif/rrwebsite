"use client";
import React from 'react';
import { notFound } from 'next/navigation';

import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function OngoingCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = React.use(params);
  const categoryId = resolvedParams.category;
  
  // Define category titles and their specific gallery images
  const categoryData: Record<string, { title: string, img: string, gallery: string[] }> = {
    'roads': {
      title: 'Highway and Expressway Construction',
      img: '/images/highway-workers-site.jpg',
      gallery: [
        '/images/projects/ongoing/aip/1.jpeg',
        '/images/projects/ongoing/aip/2.jpeg',
        '/images/projects/ongoing/aip/3.jpeg',
        '/images/projects/ongoing/aip/4.jpeg',
        '/images/projects/ongoing/aip/5.jpeg',
        '/images/projects/ongoing/aip/6.jpeg',
        '/images/projects/ongoing/aip/7.jpeg',
        '/images/projects/ongoing/aip/8.jpeg',
        '/images/projects/ongoing/aip/9.jpeg',
        '/images/projects/ongoing/aip/10.jpeg',
        '/images/projects/ongoing/aip/11.jpeg',
        '/images/projects/ongoing/aip/12.jpeg',
        '/images/projects/ongoing/aip/13.jpeg',
        '/images/projects/ongoing/aip/14.jpeg',
        '/images/projects/ongoing/aip/15.jpeg',
        '/images/projects/ongoing/aip/16.jpeg',
        '/images/projects/ongoing/aip/17.jpeg',
        '/images/projects/ongoing/aip/18.jpeg',
        '/images/projects/ongoing/aip/19.jpeg',
        '/images/projects/ongoing/aip/20.jpeg',
        '/images/projects/ongoing/aip/21.jpeg',
        '/images/projects/ongoing/aip/22.jpeg',
        '/images/projects/ongoing/aip/23.jpeg',
        '/images/projects/ongoing/aip/24.jpeg',
        '/images/projects/ongoing/aip/25.jpeg',
        '/images/projects/ongoing/aip/26.jpeg',
        '/images/projects/ongoing/aip/27.jpeg',
        '/images/projects/ongoing/aip/28.jpeg',
        '/images/projects/ongoing/aip/29.jpeg',
        '/images/projects/ongoing/aip/30.jpeg',
        '/images/projects/ongoing/aip/31.jpeg',
        '/images/projects/ongoing/aip/32.jpeg',
        '/images/projects/ongoing/aip/33.jpeg',
        '/images/projects/ongoing/aip/34.jpeg',
        '/images/projects/ongoing/aip/35.jpeg',
        '/images/projects/ongoing/aip/36.jpeg',
        '/images/projects/ongoing/aip/37.jpeg',
        '/images/projects/ongoing/aip/38.jpeg',
        '/images/projects/ongoing/aip/39.jpeg',
        '/images/projects/ongoing/aip/40.jpeg',
        '/images/projects/ongoing/aip/41.jpeg',
        '/images/projects/ongoing/aip/42.jpeg',
        '/images/projects/ongoing/aip/43.jpeg',
        '/images/projects/ongoing/aip/44.jpeg',
        '/images/projects/ongoing/aip/45.jpeg',
        '/images/projects/ongoing/aip/46.jpeg',
        '/images/projects/ongoing/aip/47.jpeg',
        '/images/projects/ongoing/aip/48.jpeg',
        '/images/projects/ongoing/aip/49.jpeg',
        '/images/projects/ongoing/aip/50.jpeg',
        '/images/projects/ongoing/aip/51.jpeg',
        '/images/projects/ongoing/aip/52.jpeg',
        '/images/projects/ongoing/aip/53.jpeg',
        '/images/projects/ongoing/aip/54.jpeg',
        '/images/projects/ongoing/aip/55.jpeg',
        '/images/projects/ongoing/aip/56.jpeg',
        '/images/projects/ongoing/aip/57.jpeg',
        '/images/projects/ongoing/aip/58.jpeg',
        '/images/projects/ongoing/aip/59.jpeg',
        '/images/projects/ongoing/aip/60.jpeg',
        '/images/projects/ongoing/aip/61.jpeg',
        '/images/projects/ongoing/aip/62.jpeg',
        '/images/projects/ongoing/aip/63.jpeg',
        '/images/projects/ongoing/aip/64.jpeg'
      ]
    },
    'bridges': {
      title: 'Bridge Construction',
      img: '/images/projects/ongoing/vbp/1.jpeg',
      gallery: [
        '/images/projects/ongoing/vbp/1.jpeg',
        '/images/projects/ongoing/vbp/2.jpeg',
        '/images/projects/ongoing/vbp/3.jpeg',
        '/images/projects/ongoing/vbp/4.jpeg'
      ]
    },
    'irrigation': { 
      title: 'Irrigation & Water Supply', 
      img: '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28.jpeg',
      gallery: [
        '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28 (1).jpeg',
        '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28.jpeg',
        '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.33.jpeg',
        '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.55.jpeg',
      ]
    },
    'disaster': { 
      title: 'Landslide Mitigation', 
      img: '/images/Badulla Landslide/Background image.jpeg',
      gallery: [
        '/images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.31.jpeg',
        '/images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.34.jpeg',
        '/images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.43.jpeg',
        '/images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.45.jpeg',
      ]
    },
    'maritime': { 
      title: 'Maritime & Dredging', 
      img: '/images/maritime-harbour-site.jpg',
      gallery: [
        '/images/maritime-harbour-site.jpg',
        '/images/service-maritime-card.jpg',
        '/images/service-maritime-wellamankara.jpg'
      ]
    }
  };

  const categoryInfo = categoryData[categoryId];
  const title = categoryInfo?.title;
  const heroImg = categoryInfo?.img;
  const gallery = categoryInfo?.gallery || [];

  if (!title) {
    notFound();
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section className="page-header" style={{ 
        position: 'relative', 
        backgroundColor: '#0f172a',
        backgroundImage: "url('/images/projects/Kandy/2.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'var(--white)', 
        padding: '140px 20px 60px', 
        textAlign: 'center',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        marginBottom: '60px'
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(15, 23, 42, 0.7)", borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <AutoBreadcrumb />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '15px' }}>
            {title} <span style={{ color: 'var(--primary-red)' }}>Gallery</span>
          </h1>
          
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#cbd5e1' }}>
            Ongoing developments and active sites in the {title.toLowerCase()} sector.
          </p>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <div className="container" style={{ maxWidth: "1500px" }}>
        {gallery.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
            <p>No images available in this gallery.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
            padding: '20px'
          }}>
            {gallery.map((imgSrc, idx) => (
              <div key={idx} style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                aspectRatio: '4/3',
                position: 'relative'
              }}
              className="hover-lift"
              >
                <img 
                  src={imgSrc} 
                  alt={`${title} - Image ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  className="img-hover-zoom"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

