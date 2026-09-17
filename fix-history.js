const fs = require('fs');

const file = 'src/app/about/history/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `        <section 
          className="page-header" 
          style={{ 
            backgroundImage: "linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.3) 60%, rgba(15, 23, 42, 0.9) 100%), url('/images/page-headers/blueprint-bg-hq.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center top", 
            minHeight: isMobile ? "400px" : "600px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "flex-end",
            padding: isMobile ? "120px 20px 20px" : "160px 20px 20px", 
            textAlign: "center", 
            position: "relative", 
            borderRadius: isMobile ? "24px" : "32px",
            margin: isMobile ? "0 12px 30px" : "0 20px 40px",  
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to About Us
              </Link>
          </div>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>`;

content = content.replace(/<section\s+className="page-header"[\s\S]*?<div className="container" style={{ position: "relative", zIndex: 2 }}>/g, replacement);

fs.writeFileSync(file, content, 'utf8');
