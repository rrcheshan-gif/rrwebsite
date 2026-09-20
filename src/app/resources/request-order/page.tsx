
"use client";

import BackButton from "@/app/components/BackButton";
import QuoteForm from "@/app/components/QuoteForm";

export default function RequestOrderPage() {
  return (
    <div className="page-wrapper">
      <div className="page-header" style={{
          background: "url('/images/yakawewa-asphalt-2.jpg') center/cover",
          padding: "140px 20px 40px",
          textAlign: "center",
          color: "white",
          position: "relative"
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "15px", fontWeight: 800 }}>
            Request <span style={{ color: "var(--primary-red)" }}>Your Order</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "550px", lineHeight: 1.6, margin: "10px 0 0 0" }}>
            Order high-quality aggregates, asphalt, concrete, and M-Sand directly from our production plants.
          </p>
          <BackButton />
        </div>
      </div>

      <QuoteForm />
    </div>
  );
}
