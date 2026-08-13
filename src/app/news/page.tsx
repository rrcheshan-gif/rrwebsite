"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Calendar } from 'lucide-react';

export default function News() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const newsItems = [
    {
      id: 7,
      tag: 'Infrastructure',
      title: 'Construction of Vadduvakal Bridge Commences in Mullaitivu',
      desc: 'President Anura Kumara Dissanayake officially inaugurated the construction of the Rs. 1.4 billion two-lane Vadduvakal Bridge over the Nandikadal Lagoon, a major project awarded to RR Construction.',
      date: 'September 02, 2025',
      img: '/images/news/vadduvakal-bridge.jpg',
      featured: true
    },
    {
      id: 1,
      tag: 'Maritime',
      title: 'Gandara Fishery Harbour Project 90% Completed',
      desc: 'Major milestones achieved in dredging and breakwater construction at the major southern maritime project. This facility is expected to boost the local fishing industry significantly.',
      date: 'June 15, 2026',
      img: '/images/maritime-harbour-site.jpg',
      featured: false
    },
    {
      id: 2,
      tag: 'Corporate',
      title: 'RR Construction Passes Annual ISO Surveillance Audit',
      desc: 'Successfully maintaining our ISO 9001, 14001, and 45001 certifications, reaffirming our commitment to global quality, environmental, and occupational health standards.',
      date: 'May 28, 2026',
      img: '/images/health-safety-site.jpg'
    },
    {
      id: 3,
      tag: 'Machinery',
      title: 'New High-Capacity Asphalt Plant Commissioned',
      desc: 'Expanding our self-owned fleet capabilities to accelerate the delivery of the Central Expressway Project Section 3 and other major national road networks.',
      date: 'May 10, 2026',
      img: '/images/kalutara-crusher-plant.jpg',
      crop: 'top'
    },
    {
      id: 4,
      tag: 'Infrastructure',
      title: 'Landslide Mitigation Works Commence in Kandy District',
      desc: 'RR Construction has mobilized specialized geotechnical teams to secure vulnerable slopes along major transport routes, ensuring public safety during monsoon seasons.',
      date: 'April 22, 2026',
      img: '/images/kandy-landslide/kandy-5.jpg'
    },
    {
      id: 5,
      tag: 'Community',
      title: 'Annual CSR Initiative: Rural School Renovation',
      desc: 'As part of our commitment to giving back, our teams have successfully completely the structural renovation and roofing of a rural school in the Anuradhapura district.',
      date: 'March 18, 2026',
      img: '/images/CSR.jpeg'
    },
    {
      id: 6,
      tag: 'Projects',
      title: 'Omanthai Crusher Plant Output Exceeds Targets',
      desc: 'Our strategic investments in the Northern Province are yielding results, with aggregate production at Omanthai exceeding monthly targets to supply regional road development.',
      date: 'February 05, 2026',
      img: '/images/omanthai.jpg'
    }
  ];

  const featuredNews = newsItems.find(n => n.featured) || newsItems[0];
  const regularNews = newsItems.filter(n => !n.featured);

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Page Header */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/news-header.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "70px 20px" : "120px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.8rem" : "5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>News & <span className="text-gradient">Updates</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "600px", display: "inline-block" }}>
            The latest project milestones, corporate announcements, and industry insights from RR Construction.
          </p>
        </div>
      </section>

      {/* Featured News Section */}
      <section style={{ padding: isMobile ? "20px 10px 40px" : "40px 20px 60px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px" }}>
            <div style={{ width: "40px", height: "3px", background: "var(--primary-red)" }}></div>
            <h2 style={{ color: "var(--text-dark)", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "1.2rem", fontFamily: "var(--font-heading)" }}>Featured Story</h2>
          </div>

          <div 
            style={{ 
              display: "flex", 
              flexDirection: isMobile ? "column" : "row", 
              background: "var(--white)", 
              borderRadius: "32px", 
              overflow: "hidden", 
              boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
              border: "1px solid var(--border-soft)",
              cursor: "pointer",
              transition: "transform 0.4s ease, box-shadow 0.4s ease"
            }}
            className="hover-lift"
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.12)" }} 
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.06)" }}
          >
            <div style={{ flex: "1.2", height: isMobile ? "300px" : "auto", minHeight: "400px", position: "relative", overflow: "hidden" }}>
              <img 
                src={featuredNews.img} 
                alt={featuredNews.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ position: "absolute", top: "20px", left: "20px", background: "var(--primary-red)", color: "white", padding: "6px 16px", borderRadius: "30px", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
                {featuredNews.tag}
              </div>
            </div>
            <div style={{ flex: "1", padding: isMobile ? "30px 20px" : "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ color: "var(--text-light)", fontSize: "0.95rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", marginBottom: "15px" }}>
                <Calendar size={18} color="var(--primary-red)" /> {featuredNews.date}
              </span>
              <h3 style={{ fontSize: isMobile ? "1.8rem" : "2.5rem", color: "var(--text-dark)", margin: "0 0 20px", fontFamily: "var(--font-heading)", lineHeight: 1.2, fontWeight: 800 }}>
                {featuredNews.title}
              </h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", flex: 1 }}>
                {featuredNews.desc}
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "var(--primary-red)", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                Read Full Story <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Grid Removed */}
      <style jsx global>{`
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
        }
      `}</style>
    </div>
  );
}
