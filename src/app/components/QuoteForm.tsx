"use client";

import { useState } from "react";

interface QuoteFormProps {
  defaultPlant?: string;
  allowedPlants?: string[];
  allowedProducts?: string[];
}

export default function QuoteForm({ defaultPlant, allowedProducts, allowedPlants }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      if (status !== 'error') {
        setTimeout(() => setStatus("idle"), 5000);
      }
    }
  };

  const allProducts = [
    { value: "Asphalt Binder Course", label: "Asphalt Binder Course" },
    { value: "Asphalt Wearing Course", label: "Asphalt Wearing Course" },
    { value: "3/4 Metal", label: '3/4" (20mm) Structural Metal' },
    { value: "1/2 Metal", label: '1/2" (12mm) Metal' },
    { value: "1 Metal", label: '1" (25mm) Metal' },
    { value: "ABC", label: "Aggregate Base Course (ABC)" },
    { value: "M-Sand", label: "Manufactured Sand (M-Sand)" },
    { value: "Ready-Mix Concrete", label: "Ready-Mix Concrete" },
    { value: "Other", label: "Other / Custom Gradation" }
  ];

  const allPlants = [
    { value: "Any", label: "Any / Nearest Plant" },
    { value: "Thudugala (Western)", label: "Thudugala Plant (Kalutara)" },
    { value: "Veerapuram (North Central)", label: "Veerapuram M Sand & Crusher (Medawachchiya)" },
    { value: "Omanthai (Northern)", label: "Omanthai Plant (Vavuniya)" },
    { value: "Yakawewa (North Central)", label: "Yakawewa Asphalt Plant (Medawachchiya)" },
  
    { value: "Ampara (Concrete)", label: "Ampara Concrete Batching Plant" },
    { value: "Jaffna (Concrete)", label: "Jaffna Concrete Batching Plant" },
    { value: "Bibila (Concrete)", label: "Bibila Concrete Batching Plant" },
    { value: "Iththapana (Concrete)", label: "Iththapana Concrete Batching Plant" },
    { value: "Vadduvakal (Concrete)", label: "Vadduvakal Concrete Batching Plant (Mullaitivu)" },
    { value: "Galgamuwa (Concrete)", label: "Galgamuwa Concrete Batching Plant" },
    { value: "Gandara (Concrete)", label: "Gandara Concrete Batching Plant (Matara)" }
  ];

  const displayProducts = allowedProducts 
    ? allProducts.filter(p => allowedProducts.includes(p.value))
    : allProducts;

  
  let displayPlants = allPlants;
  if (allowedPlants) {
    displayPlants = displayPlants.filter(p => allowedPlants.includes(p.value) || p.value === "Any");
  }
  if (defaultPlant) {
    displayPlants = displayPlants.filter(p => p.value === defaultPlant);
  }


  return (
    <section id="inquiry" style={{ padding: "60px 20px 50px", background: "var(--bg-base)" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ background: "var(--white)", color: "var(--text-dark)", padding: "50px", borderRadius: "12px", borderTop: "6px solid var(--primary-red)", boxShadow: "0 15px 40px rgba(0,0,0,0.05)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3 style={{ color: "var(--primary-red)", fontFamily: "var(--font-heading)", fontSize: "2.2rem", marginBottom: "10px" }}>Request a Quote</h3>
            <p style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>Let us know your project requirements, and our logistics manager will get back to you with custom pricing and delivery timelines.</p>
          </div>

          {status === "success" && (
            <div style={{ padding: "15px", marginBottom: "20px", background: "#d4edda", color: "#155724", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
              Thank you! Your quote request has been sent successfully. We will contact you soon.
            </div>
          )}

          {status === "error" && (
            <div style={{ padding: "15px", marginBottom: "20px", background: "#f8d7da", color: "#721c24", borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}>
              Something went wrong. Please try again later or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
              <div>
                <label htmlFor="q-name" style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Your Name *</label>
                <input type="text" id="q-name" name="name" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-dark)", borderRadius: "8px" }} required />
              </div>
              <div>
                <label htmlFor="q-company" style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Company / Contractor Name</label>
                <input type="text" id="q-company" name="company" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-dark)", borderRadius: "8px" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
              <div>
                <label htmlFor="q-email" style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Email Address *</label>
                <input type="email" id="q-email" name="email" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-dark)", borderRadius: "8px" }} required />
              </div>
              <div>
                <label htmlFor="q-phone" style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Phone / Mobile Number *</label>
                <input type="tel" id="q-phone" name="phone" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-dark)", borderRadius: "8px" }} required />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
              <div>
                <label htmlFor="q-product" style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Material Required *</label>
                <select id="q-product" name="product" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-dark)", borderRadius: "8px" }} required>
                  <option value="" disabled selected={!allowedProducts || allowedProducts.length > 1}>Select Material</option>
                  {displayProducts.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="q-plant" style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Preferred Plant / Location</label>
                <select id="q-plant" name="plant" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-dark)", borderRadius: "8px" }}>
                  {displayPlants.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
              <div>
                <label htmlFor="q-qty" style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Required Quantity *</label>
                <input type="text" id="q-qty" name="qty" placeholder="e.g. 50 Cubes / 100 Tons" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-dark)", borderRadius: "8px" }} required />
              </div>
              <div>
                <label htmlFor="q-location" style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Delivery Site Location *</label>
                <input type="text" id="q-location" name="location" placeholder="e.g. Malabe, Anuradhapura" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-dark)", borderRadius: "8px" }} required />
              </div>
            </div>

            <div>
              <label htmlFor="q-message" style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Additional Instructions / Specifications</label>
              <textarea id="q-message" name="message" rows={4} placeholder="Mention any grading specifications, delivery schedule, or special requirements..." style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-dark)", borderRadius: "8px", fontFamily: "inherit", resize: "vertical" }}></textarea>
            </div>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ padding: "14px 40px", fontSize: "1.1rem" }}>
                {isSubmitting ? "Sending Request..." : "Submit Order Request"}
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  );
}
