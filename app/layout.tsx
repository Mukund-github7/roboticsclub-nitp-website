import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";  // <--- THIS IS THE MISSING KEY
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robotics Club NITP | The Digital Laboratory",
  description: "Innovate. Build. Dominate. The official website of NIT Patna Robotics Club.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-950 text-slate-200`}>
        
        {/* Navigation Bar - Uncomment after creation */}
        {/* <Navbar /> */}

        {/* Main Content Area */}
        {/* flex-grow ensures the footer is pushed to the bottom on short pages */}
        <main className="flex-grow flex flex-col relative z-10 w-full overflow-x-hidden">
          {children}
        </main>

        {/* Footer - Uncomment after creation */}
        {/* <Footer /> */}
        
        {/* Global Background Grid Effect */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
      </body>
    </html>
  );
}