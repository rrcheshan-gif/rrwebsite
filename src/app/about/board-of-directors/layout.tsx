import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board of Directors | RR Construction (Pvt) Ltd",
  description:
    "Meet the leadership team of RR Construction (Pvt) Ltd, a Sri Lankan construction and civil engineering company delivering major infrastructure and engineering projects.",
};

export default function BoardOfDirectorsLayout({
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
            name: "Board of Directors | RR Construction (Pvt) Ltd",
            description:
              "Meet the leadership team of RR Construction (Pvt) Ltd, a Sri Lankan construction and civil engineering company delivering major infrastructure and engineering projects.",
            url: "https://www.rrconstruction.lk/about/board-of-directors",
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
                  name: "Board of Directors",
                  item: "https://www.rrconstruction.lk/about/board-of-directors"
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