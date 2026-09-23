
"use client";


import QuoteForm from "@/app/components/QuoteForm";
import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function RequestOrderPage() {
  return (
    <main style={{ backgroundColor: "var(--white)", minHeight: "100vh" }}>
      <section className="page-header" style={{ position: 'relative', backgroundImage: "url('/images/about/blueprint-blue-bg-wide.webp')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: '70px 20px', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <AutoBreadcrumb />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 24px', lineHeight: 1.2 }}>
            Request <span style={{ color: "var(--primary-red)" }}>Your Order</span>
          </h1>
          
        </div>
      </section>

      <QuoteForm />
    </main>
  );
}

