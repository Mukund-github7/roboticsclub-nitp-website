import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. IMPORT THE COMPONENTS HERE
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robotics Club NITP",
  description: "Official Website of Robotics Club NIT Patna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-200`}>
        {/* 2. PLACE NAVBAR AT THE TOP */}
        <Navbar />

        {/* This is where your page content goes */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>

        {/* 3. PLACE FOOTER AT THE BOTTOM */}
        <Footer />
      </body>
    </html>
  );
}