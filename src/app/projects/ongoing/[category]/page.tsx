"use client";
import React from 'react';
import { notFound } from 'next/navigation';
import BackButton from "@/app/components/BackButton";
import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function OngoingCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = React.use(params);
  const categoryId = resolvedParams.category;
  
  // Define category titles and their specific gallery images
  const categoryData: Record<string, { title: string, img: string, gallery: string[] }> = {
    'roads': { 
      title: 'Highway and Expressway Construction', 
      img: '/images/KRP/img-1.jpeg',
      gallery: [
        '/images/KRP/img-1.jpeg',
        '/images/KRP/img-2.jpeg',
        '/images/KRP/img-3.jpeg',
        '/images/KRP/img-4.jpeg',
      ]
    },
    'bridges': { 
      title: 'Bridge Construction', 
      img: '/images/BBP/img-1.jpeg',
      gallery: [
        '/images/BBP/img-1.jpeg',
        '/images/BBP/img-2.jpeg',
        '/images/BBP/img-3.jpeg',
        '/images/BBP/img-4.jpeg',
        '/images/BBP/img-5.jpeg',
        '/images/BBP/img-6.jpeg',
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
        backgroundImage: `url("${heroImg}")`, 
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
          <BackButton />
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '15px' }}>
            {title} <span style={{ color: 'var(--primary-red)' }}>Gallery</span>
          </h1>
          <AutoBreadcrumb />
          
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
