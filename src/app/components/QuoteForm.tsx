
"use client";

import { useState, useEffect } from "react";

interface QuoteFormProps {
  defaultPlant?: string;
  allowedPlants?: string[];
  allowedProducts?: string[];
}

export default function QuoteForm({ defaultPlant, allowedProducts, allowedPlants }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedPlant, setSelectedPlant] = useState<string>(defaultPlant || "");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [captchaA, setCaptchaA] = useState(0);
  const [captchaB, setCaptchaB] = useState(0);
  const [captchaAns, setCaptchaAns] = useState('');

  useEffect(() => {
    setCaptchaA(Math.floor(Math.random() * 10) + 1);
    setCaptchaB(Math.floor(Math.random() * 10) + 1);
  }, []);

  useEffect(() => {
    if (defaultPlant) {
      setSelectedPlant(defaultPlant);
    }
  }, [defaultPlant]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(captchaAns) !== captchaA + captchaB) {
      alert('Incorrect CAPTCHA answer. Please try again.');
      setCaptchaA(Math.floor(Math.random() * 10) + 1);
      setCaptchaB(Math.floor(Math.random() * 10) + 1);
      setCaptchaAns('');
      return;
    }
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Add dynamically selected product if it's not in standard inputs
    if (selectedProduct) {
      data.product = selectedProduct;
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setCaptchaAns('');
        setCaptchaA(Math.floor(Math.random() * 10) + 1);
        setCaptchaB(Math.floor(Math.random() * 10) + 1);
        setSelectedProduct("");
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
    { value: "Thudugala (Western)", label: "Thudugala Plant (Kalutara)", category: "aggregates" },
    { value: "Veerapuram (North Central)", label: "Veerapuram M Sand & Crusher (Vavuniya)", category: "aggregates" },
    { value: "Omanthai (Northern)", label: "Omanthai Plant (Vavuniya)", category: "aggregates" },
    { value: "Yakawewa (North Central)", label: "Yakawewa Asphalt Plant", category: "asphalt" },
    { value: "Ampara (Concrete)", label: "Ampara Concrete Batching Plant", category: "concrete" },
    { value: "Jaffna (Concrete)", label: "Jaffna Concrete Batching Plant", category: "concrete" },
    { value: "Iththapana (Concrete)", label: "Iththapana Concrete Batching Plant", category: "concrete" },
    { value: "Vadduvakal (Concrete)", label: "Vadduvakal Concrete Batching Plant (Mullaitivu)", category: "concrete" },
    { value: "Galgamuwa (Concrete)", label: "Galgamuwa Concrete Batching Plant", category: "concrete" },
    { value: "Gandara (Concrete)", label: "Gandara Concrete Batching Plant (Matara)", category: "concrete" },
    { value: "Any", label: "Any / Unsure (Nearest Plant)", category: "any" },
  ];

  let displayPlants = allPlants;
  if (allowedPlants) {
    displayPlants = displayPlants.filter(p => allowedPlants.includes(p.value) || p.value === "Any");
  }

  // Determine which products to show based on selected plant
  let activeProducts = allProducts;
  if (selectedPlant) {
    if (selectedPlant.includes("Asphalt")) {
      activeProducts = allProducts.filter(p => p.value.includes("Asphalt") || p.value === "Other");
    } else if (selectedPlant.includes("Concrete")) {
      activeProducts = allProducts.filter(p => p.value.includes("Concrete") || p.value === "Other");
    } else if (selectedPlant.includes("Veerapuram")) {
      activeProducts = allProducts.filter(p => ["M-Sand", "3/4 Metal", "1/2 Metal", "1 Metal", "ABC", "Other"].includes(p.value));
    } else if (selectedPlant.includes("Thudugala") || selectedPlant.includes("Omanthai")) {
      activeProducts = allProducts.filter(p => ["3/4 Metal", "1/2 Metal", "1 Metal", "ABC", "Other"].includes(p.value));
    }
  }

  if (allowedProducts) {
    activeProducts = activeProducts.filter(p => allowedProducts.includes(p.value));
  }

  return (
    <section id="inquiry" style={{ padding: "60px 20px 50px", background: "var(--bg-base)" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ background: "var(--white)", color: "var(--text-dark)", padding: "50px", borderRadius: "12px", borderTop: "6px solid var(--primary-red)", boxShadow: "0 15px 40px rgba(0,0,0,0.05)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3 style={{ color: "var(--primary-red)", fontFamily: "var(--font-heading)", fontSize: "2.2rem", marginBottom: "10px" }}>Request Your Order</h3>
            <p style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>Select your preferred plant and material below. Our logistics manager will get back to you with custom pricing and delivery timelines.</p>
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

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            
            {/* Step 1: Select Plant */}
            <div style={{ background: "rgba(0,0,0,0.02)", padding: "25px", borderRadius: "12px", border: "1px solid var(--border-soft)" }}>
              <label htmlFor="q-plant" style={{ display: "block", marginBottom: "15px", color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: "bold" }}>1. Select Preferred Plant / Location *</label>
              <select 
                id="q-plant" 
                name="plant" 
                value={selectedPlant}
                onChange={(e) => { setSelectedPlant(e.target.value); setSelectedProduct(""); }}
                style={{ width: "100%", padding: "14px", border: "1px solid var(--input-border)", background: "var(--white)", color: "var(--text-dark)", borderRadius: "8px", fontSize: "1rem" }} 
                required
              >
                <option value="" disabled>-- Choose a Plant --</option>
                {displayPlants.map(p => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>

            {/* Step 2: Select Material (Only shows if plant is selected) */}
            {selectedPlant && (
              <div style={{ background: "rgba(0,0,0,0.02)", padding: "25px", borderRadius: "12px", border: "1px solid var(--border-soft)", animation: "fadeIn 0.4s ease" }}>
                <label style={{ display: "block", marginBottom: "15px", color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: "bold" }}>2. Available Materials for this Plant *</label>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "10px" }}>
                  {activeProducts.map(p => (
                    <div 
                      key={p.value} 
                      onClick={() => setSelectedProduct(p.value)}
                      style={{ 
                        padding: "12px", 
                        border: selectedProduct === p.value ? "2px solid var(--primary-red)" : "1px solid var(--border-soft)", 
                        background: selectedProduct === p.value ? "rgba(229, 57, 53, 0.05)" : "var(--white)", 
                        color: selectedProduct === p.value ? "var(--primary-red)" : "var(--text-dark)",
                        borderRadius: "8px", 
                        cursor: "pointer", 
                        textAlign: "center",
                        fontWeight: selectedProduct === p.value ? "700" : "500",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {p.label}
                    </div>
                  ))}
                </div>
                {/* Hidden input to pass the selected product to the form submit */}
                <input type="hidden" name="product" value={selectedProduct} required />
              </div>
            )}

            {/* Step 3: Other Details */}
            {selectedProduct && (
              <div style={{ animation: "fadeIn 0.4s ease", display: "flex", flexDirection: "column", gap: "20px" }}>
                <h4 style={{ margin: "10px 0 0", color: "var(--text-dark)" }}>3. Order & Contact Details</h4>
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
              </div>
            )}
            
            {!selectedProduct && selectedPlant && (
              <div style={{ textAlign: "center", color: "var(--primary-red)", fontStyle: "italic", marginTop: "10px" }}>
                Please select a material to proceed.
              </div>
            )}
          </form>
          
        </div>
      </div>
    </section>
  );
}
