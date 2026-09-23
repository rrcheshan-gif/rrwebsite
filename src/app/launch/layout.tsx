export const metadata = {
  title: "RR Construction — Website Launch",
  description: "Official launch of the new RR Construction website.",
  robots: { index: false, follow: false }, // Hide from Google
};

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 99999,
      background: "#000",
    }}>
      {children}
    </div>
  );
}
