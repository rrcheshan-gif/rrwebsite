import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, ArrowLeft, Share2 } from 'lucide-react';
import { NEWS_DATA } from '@/data/news-data';

export function generateStaticParams() {
  return NEWS_DATA.map((news) => ({
    slug: news.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const news = NEWS_DATA.find((n) => n.slug === resolvedParams.slug);
  
  if (!news) {
    return {
      title: 'News Not Found | RR Construction',
    };
  }

  return {
    title: `${news.title} | RR Construction`,
    description: news.desc,
  };
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const news = NEWS_DATA.find((n) => n.slug === resolvedParams.slug);

  if (!news) {
    notFound();
  }

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Article Header */}
      <section 
        className="page-header" 
        style={{ 
          background: "linear-gradient(135deg, #1f2937 0%, #0f172a 100%)", 
          padding: "60px 20px 140px", 
          textAlign: "center", 
          position: "relative", 
          borderRadius: "32px", 
          margin: "0 20px", 
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
          
          <div style={{ textAlign: "left", marginBottom: "30px" }}>
            <Link href="/news" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <ArrowLeft size={16} /> Back to News
            </Link>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
            <span style={{ background: "var(--primary-red)", color: "white", padding: "6px 16px", borderRadius: "30px", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1px",  }}>
              {news.tag}
            </span>
          </div>

          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem", margin: "0 0 20px", fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.5)", lineHeight: 1.2 }}>
            {news.title}
          </h1>
          
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", color: "#cbd5e1", fontSize: "1rem", fontWeight: 600 }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><Clock size={16} color="var(--primary-red)" /> {news.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ padding: "0 20px 100px", marginTop: "-100px", position: "relative", zIndex: 3 }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <div style={{ background: "var(--white)", borderRadius: "24px", boxShadow: "0 20px 50px rgba(0,0,0,0.15)", overflow: "hidden", border: "1px solid var(--border-soft)" }}>
            
            <img src={news.img} alt={news.title} style={{ width: "100%", height: "auto", maxHeight: "600px", objectFit: "cover", display: "block" }} />

            <div 
              style={{ 
                padding: "50px", 
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "var(--text-dark)"
              }}
              className="article-content"
            >
            <p style={{ fontSize: "1.3rem", color: "var(--primary-red)", fontWeight: 600, fontStyle: "italic", marginBottom: "40px", borderLeft: "4px solid var(--primary-red)", paddingLeft: "20px" }}>
              {news.desc}
            </p>

            <div dangerouslySetInnerHTML={{ __html: news.content || "<p>Full story content coming soon...</p>" }} />
            
            <div style={{ marginTop: "50px", paddingTop: "30px", borderTop: "1px solid var(--border-soft)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 700, color: "var(--text-dark)" }}>Share this story</span>
              <div style={{ display: "flex", gap: "15px" }}>
                <button className="share-btn" style={{ background: "var(--bg-light)", border: "none", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-dark)", transition: "background 0.3s" }}>
                  <Share2 size={18} />
                </button>
              </div>
            </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
