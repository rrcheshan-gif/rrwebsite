const fs = require('fs');
let content = fs.readFileSync('src/app/about/vision-mission/page.tsx', 'utf8');

const newContent = \      {/* Vision Section */}
      <section style={{ padding: isMobile ? "60px 10px" : "100px 20px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Eye size={50} color="var(--primary-red)" style={{ margin: "0 auto 15px" }} />
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "2px" }}>Our Vision</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto 0", borderRadius: "2px" }}></div>
          </div>

          <div style={{ background: "var(--white)", padding: isMobile ? "30px 20px" : "50px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", border: "1px solid var(--border-soft)", textAlign: "center" }}>
            <h3 style={{ fontSize: isMobile ? "1.4rem" : "1.8rem", color: "var(--text-dark)", margin: "0 0 30px", fontFamily: "var(--font-heading)", lineHeight: 1.5, fontWeight: 800 }}>
              “To engineer a stronger, smarter, and more sustainable Sri Lanka — building infrastructure that connects communities, drives progress, and stands the test of time.”
            </h3>
            
            <div style={{ width: "100%", height: "1px", background: "var(--border-soft)", margin: "30px 0" }}></div>
            
            <h4 style={{ color: "var(--primary-red)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "15px", letterSpacing: "1px" }}>???? ?????:</h4>
            <p style={{ color: "var(--text-light)", fontSize: isMobile ? "1.1rem" : "1.2rem", lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
              ????? ????? ????? ????????, ???? ?? ?????? ???? ??? ??? ??????, ????? ??????? ???, ?????? ???????? ?????? ??? ?? ??????? ??????? ????? ????? ??????? ???????? ?????.
            </p>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: isMobile ? "60px 10px" : "100px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Target size={50} color="var(--primary-red)" style={{ margin: "0 auto 15px" }} />
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "2px" }}>Our Mission</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto 0", borderRadius: "2px" }}></div>
          </div>

          <div style={{ background: "var(--white)", padding: isMobile ? "30px 20px" : "50px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", border: "1px solid var(--border-soft)", textAlign: "center" }}>
            <h3 style={{ fontSize: isMobile ? "1.3rem" : "1.6rem", color: "var(--text-dark)", margin: "0 0 30px", fontFamily: "var(--font-heading)", lineHeight: 1.6, fontWeight: 800 }}>
              “To deliver world-class construction and civil engineering solutions through engineering excellence, advanced technology, responsible resource management, uncompromising quality, and a relentless commitment to safety, sustainability, and client satisfaction.”
            </h3>
            
            <div style={{ width: "100%", height: "1px", background: "var(--border-soft)", margin: "30px 0" }}></div>
            
            <h4 style={{ color: "var(--primary-red)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "15px", letterSpacing: "1px" }}>???? ??????:</h4>
            <p style={{ color: "var(--text-light)", fontSize: isMobile ? "1.1rem" : "1.2rem", lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
              ???????? ???????????, ???? ???????, ?????? ???? ?????? ?????????, ???? ?????? ?????????? ?? ???? ?????? ?? ?????? ??????????? ?? ??????, ???? ??????????????? ???????? ?? ?????????? ?????? ?? ??? ?????? ????????? ?? ?????? ???????? ??????? ??????.
            </p>
          </div>

        </div>
      </section>

      {/* Our Commitment */}
      <section style={{ padding: isMobile ? "70px 20px" : "100px 20px", background: "linear-gradient(135deg, #1f2937, #111827)", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <Handshake size={60} color="var(--primary-red)" style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 10px", letterSpacing: "2px", textTransform: "uppercase" }}>Our Commitment</h2>
          <h3 style={{ fontSize: isMobile ? "1.4rem" : "1.8rem", color: "var(--primary-red)", fontWeight: 700, margin: "0 0 40px" }}>Engineering Excellence. Building Trust. Shaping Tomorrow.</h3>
          
          <div style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", lineHeight: 1.8, fontWeight: 500, color: "#e2e8f0" }}>
            <p style={{ marginBottom: "15px" }}>??? ????????? ????? ????????? ???.</p>
            <p style={{ fontSize: isMobile ? "1.5rem" : "1.8rem", fontWeight: 800, color: "white", marginBottom: "30px", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>??? ??? ?????? ???????.</p>
            <p style={{ marginBottom: "40px", fontSize: isMobile ? "1.1rem" : "1.3rem", lineHeight: 1.9, color: "#cbd5e1" }}>
              ???? ??? ??????????? ??????????????, ??? ????????? ??????????, ??? ????????? ?????? ?????????, ??? ??????????????? ????? ?????? ??????? ??????????? ???????? ?????? ??? ????? ??????.
            </p>
            <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.2)", display: "inline-block" }}>
              <p style={{ margin: 0, fontWeight: 800, fontSize: isMobile ? "1.2rem" : "1.4rem", color: "var(--primary-red)", letterSpacing: "1px" }}>
                RR Construction — Engineering the Ground Beneath Tomorrow.
              </p>
            </div>
          </div>
          
        </div>
      </section>

\

const startIndex = content.indexOf('{/* Vision Section */}');
const endIndex = content.indexOf('{/* Core Values Section */}');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newContent + content.substring(endIndex);
  fs.writeFileSync('src/app/about/vision-mission/page.tsx', content, 'utf8');
  console.log('Successfully updated vision/mission.');
} else {
  console.log('Could not find markers.');
}
