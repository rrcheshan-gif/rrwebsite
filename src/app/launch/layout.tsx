export const metadata = {
  title: "RR Construction — Website Launch",
  description: "Official launch of the new RR Construction website.",
  robots: { index: false, follow: false },
};

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Hide navbar, footer and floating chat on launch page */}
      <style>{`
        nav, footer, .floating-chat, [class*="Navbar"], [class*="Footer"], [class*="FloatingChat"] {
          display: none !important;
        }
        main {
          padding: 0 !important;
          margin: 0 !important;
        }
        body {
          overflow: hidden !important;
        }
      `}</style>
      {children}
    </>
  );
}
