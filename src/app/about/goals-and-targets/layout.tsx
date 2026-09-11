import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goals & Targets | RR Construction (Pvt) Ltd",
  description: "Explore the strategic goals and targets of RR Construction (Pvt) Ltd, focused on project performance, infrastructure capability, engineering advancement and long-term growth in Sri Lanka.",
  alternates: {
    canonical: "https://www.rrconstruction.lk/about/goals-and-targets"
  }
};

export default function GoalsTargetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Goals & Targets | RR Construction (Pvt) Ltd",
            description: "Explore the strategic goals and targets of RR Construction (Pvt) Ltd, focused on project performance, infrastructure capability, engineering advancement and long-term growth in Sri Lanka.",
            url: "https://www.rrconstruction.lk/about/goals-and-targets",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.rrconstruction.lk/"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About Us",
                  item: "https://www.rrconstruction.lk/about"
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Goals & Targets",
                  item: "https://www.rrconstruction.lk/about/goals-and-targets"
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
}