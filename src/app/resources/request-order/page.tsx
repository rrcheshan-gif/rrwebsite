
"use client";

import BackButton from "@/app/components/BackButton";
import QuoteForm from "@/app/components/QuoteForm";
import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function RequestOrderPage() {
  return (
    <main style={{ backgroundColor: "var(--white)", minHeight: "100vh" }}>
      <section className="page-header" style={{ position: 'relative', backgroundImage: "url('/images/yakawewa-asphalt-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: '70px 20px', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <BackButton />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 24px', lineHeight: 1.2 }}>
            Request <span style={{ color: "var(--primary-red)" }}>Your Order</span>
          </h1>
          <AutoBreadcrumb />
          
        </div>
      </section>

      <QuoteForm />
    </main>
  );
}
