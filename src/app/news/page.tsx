"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Calendar } from 'lucide-react';

import { NEWS_DATA } from '@/data/news-data';

export default function News() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const featuredNews = NEWS_DATA.find(n => n.featured) || NEWS_DATA[0];
  const regularNews = NEWS_DATA.filter(n => !n.featured);

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Page Header */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/news-header.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "40px 20px" : "70px 20px", 
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
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.8rem" : "5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>News & Updates</h1>
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
              transition: "transform 0.4s ease, box-shadow 0.4s ease"
            }}
            className="hover-lift"
          >
            <div style={{ flex: "1.2", height: isMobile ? "300px" : "auto", minHeight: "400px", position: "relative", overflow: "hidden" }}>
              <img 
                src={featuredNews.img} 
                alt={featuredNews.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
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
              <Link 
                href={`/news/${featuredNews.slug}`}
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "10px", 
                  color: "var(--primary-red)", 
                  fontWeight: 700, 
                  fontSize: "1rem", 
                  textTransform: "uppercase", 
                  letterSpacing: "1px",
                  textDecoration: "none",
                  cursor: "pointer"
                }}
              >
                Read Full Story <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section style={{ padding: isMobile ? "20px 10px 80px" : "40px 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px" }}>
            <div style={{ width: "40px", height: "3px", background: "var(--primary-red)" }}></div>
            <h2 style={{ color: "var(--text-dark)", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "1.2rem", fontFamily: "var(--font-heading)" }}>More Updates</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {regularNews.map((news) => (
                <div 
                  key={news.id}
                  style={{ 
                    background: "var(--white)", 
                    borderRadius: "24px", 
                    overflow: "hidden", 
                    border: "1px solid var(--border-soft)", 
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }} 
                  className="hover-lift" 
                >
                  <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                    <img 
                      src={news.img} 
                      alt={news.title} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: news.crop === 'top' ? 'top center' : 'center', transition: "transform 0.5s ease" }} 
                    />
                  </div>
                  <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "var(--primary-red)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "15px", display: "inline-block" }}>{news.tag}</span>
                    <h3 style={{ fontSize: "1.35rem", color: "var(--text-dark)", margin: "0 0 15px", fontFamily: "var(--font-heading)", lineHeight: 1.4, fontWeight: 700 }}>{news.title}</h3>
                    <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "25px", flex: 1 }}>{news.desc}</p>
                    
                    <Link href={`/news/${news.slug}`} style={{ textDecoration: 'none' }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-soft)", paddingTop: "20px", cursor: "pointer" }}>
                        <span style={{ color: "var(--text-light)", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px" }}><Clock size={16} color="var(--primary-red)" /> {news.date}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "var(--primary-red)", fontWeight: 600 }}>
                          Read More <ArrowRight size={18} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
            ))}
          </div>

        </div>
      </section>

      <style jsx global>{`
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
        }
      `}</style>
    </div>
  );
}
