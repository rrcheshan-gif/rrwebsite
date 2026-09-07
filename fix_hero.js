const fs = require("fs");
let c = fs.readFileSync("src/app/about/vision-mission/page.tsx", "utf8");

const oldSection = `    <div style={{ backgroundColor: "var(--bg-light)", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* Light Corporate Hero */}
      <section style={{ 
        position: "relative", 
        padding: isMobile ? "120px 20px 60px" : "160px 20px 80px", 
        backgroundColor: "var(--white)",
        overflow: "hidden"
      }}>
        {/* Subtle grid pattern background */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03, pointerEvents: "none" }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-light)" />
          </svg>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "1200px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <Reveal>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <span style={{ width: "30px", height: "2px", background: "var(--primary-red)" }}></span>
                <span style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", fontSize: "0.9rem", textTransform: "uppercase" }}>Our Purpose</span>
                <span style={{ width: "30px", height: "2px", background: "var(--primary-red)" }}></span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem, 6vw, 4.5rem)", margin: "0", fontWeight: 900, lineHeight: 1.1, color: "var(--text-dark)", letterSpacing: "-1px" }}>
                Vision & <span style={{ color: "var(--primary-red)" }}>Mission</span>
              </h1>
            </Reveal>
          </div>

          {/* V & M Split Layout - Light Theme */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "40px", alignItems: "stretch" }}>`;

const newSection = `    <div style={{ paddingTop: isMobile ? "90px" : "110px", backgroundColor: "var(--bg-light)", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/about-story.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "40px 20px" : "70px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 40px" : "0 20px 60px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.85) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to About Us
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>
            Vision & <span style={{ color: "var(--primary-red)" }}>Mission</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Building the nation with engineering excellence and a sustainable future.
          </p>
        </div>
      </section>

      <section style={{ position: "relative", padding: isMobile ? "20px 20px 60px" : "20px 20px 80px" }}>
        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "1200px" }}>
          {/* V & M Split Layout - Light Theme */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "40px", alignItems: "stretch" }}>`;

if(c.includes('Light Corporate Hero')) {
    c = c.replace(oldSection, newSection);
    fs.writeFileSync("src/app/about/vision-mission/page.tsx", c, "utf8");
    console.log("Successfully replaced hero section");
} else {
    console.log("Could not find the target section to replace.");
}
