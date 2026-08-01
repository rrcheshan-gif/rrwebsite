"use client";

import Link from "next/link";

export default function YakawewaPlant() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/yakawewa-asphalt-2.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.4)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/quarries-aggregates" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold" }}>← Back to Quarries & Aggregates</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>State-of-the-Art Asphalt Batching Plant</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem", textTransform: "uppercase", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>YAKAWEWA ASPHALT PLANT</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "80px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Yakawewa Asphalt Plant</h4>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", color: "var(--text-dark)", lineHeight: 1.2, marginBottom: "10px" }}>Premium Quality Aggregates & Crushed Metal</h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.2rem", fontStyle: "italic", marginBottom: "40px" }}>Fueling Infrastructure Development in the North Central Province.</p>

          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderTop: "4px solid var(--primary-red)", marginBottom: "40px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", textAlign: "left" }}>
            <h3 style={{ color: "var(--text-dark)", marginBottom: "15px", fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}>State-of-the-Art Crusher Technology</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.1rem" }}>
              Our Yakawewa Asphalt Facility operates an advanced high-capacity crushing plant, capable of producing premium grade aggregates of various sizes. Equipped with state-of-the-art Hitachi excavators and dynamic multi-stage crushing units, we ensure consistent shape, strength, and durability for all commercial and infrastructural concrete requirements.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <span style={{ background: "var(--primary-red)", color: "white", padding: "10px 25px", borderRadius: "30px", fontWeight: 600, fontSize: "1rem", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>High Quality</span>
            <span style={{ background: "var(--primary-red)", color: "white", padding: "10px 25px", borderRadius: "30px", fontWeight: 600, fontSize: "1rem", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>Cost Effective</span>
            <span style={{ background: "var(--primary-red)", color: "white", padding: "10px 25px", borderRadius: "30px", fontWeight: 600, fontSize: "1rem", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>Eco Friendly</span>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section style={{ padding: "80px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", textTransform: "uppercase" }}>Our Yakawewa Facility</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>

          <div className="img-polish glass-panel" style={{ maxWidth: "900px", margin: "0 auto", borderRadius: "16px", overflow: "hidden" }}>
            <img className="img-polished img-hover-zoom" src="/images/yakawewa-asphalt-2.jpg" alt="Yakawewa Asphalt Plant" style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Products List */}
      <section style={{ padding: "80px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", textTransform: "uppercase" }}>YAKAWEWA ASPHALT PLANT: Our Products</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "10px" }}>High Quality Aggregates & M-Sand for Stronger Constructions</p>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", textAlign: "center" }}>
            {[
              "M-Sand", "12-19 mm (Concrete Agg)", "10-16 mm Aggregates", "16-19 mm Aggregates", 
              "5-19 mm (Concrete Agg)", "5-10 mm Aggregates (Chips)", "0-5mm (Quarry Dust)", 
              "ABC", "C1", "6 x 9", "Boulders", "37.5 mm Aggregates", "50mm Aggregates", "VSI Aggregates (Cubical)"
            ].map((prod, idx) => (
              <div key={idx} style={{ background: "var(--white)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border-soft)", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                <h4 style={{ color: "var(--text-dark)", fontSize: "1.1rem", margin: 0 }}>{prod}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "80px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ background: "var(--white)", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div style={{ padding: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--text-dark)", marginBottom: "20px" }}>Contact YAKAWEWA ASPHALT PLANT</h2>
              <p style={{ color: "var(--text-light)", marginBottom: "30px" }}>For bulk orders, M-Sand inquiries, and ready-mix concrete supplies.</p>
              
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px" }}>Direct Lines</h4>
                <p style={{ color: "var(--text-dark)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "5px" }}>076 048 7418</p>
                <p style={{ color: "var(--text-dark)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "5px" }}>077 294 1668</p>
              </div>

              <div>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px", marginTop: "30px" }}>Hotlines</h4>
                <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 600 }}>077 345 6789</p>
                <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 600 }}>071 234 5678</p>
              </div>
              
              <div style={{ marginTop: "30px" }}>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px" }}>Location</h4>
                <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.6 }}>RR Construction (Pvt) Ltd,<br/>Yakawewa,<br/>Anuradhapura.</p>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "350px", background: "#eee" }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126359.83733055375!2d80.4571991!3d8.9328224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc0593b4a22b79%3A0x6b63c9ccde6587c4!2sOmanthai!5e0!3m2!1sen!2slk!4v1" width="100%" height="100%" style={{ border: 0, position: "absolute", top: 0, left: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
