"use client";

import { useState } from "react";
import Link from "next/link";
import { Cpu, Menu, X } from "lucide-react";

// Navigation Links Configuration
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* --- LOGO SECTION --- */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            aria-label="Robotics Club NITP Home"
          >
            {/* Logo Icon with Neon Glow on Group Hover */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
              <Cpu className="w-8 h-8 text-cyan-400 relative z-10 transition-transform duration-300 group-hover:scale-110" />
            </div>
            
            {/* Logo Text */}
            <span className="text-xl font-bold tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
              ROBOTICS CLUB <span className="text-cyan-500 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">NITP</span>
            </span>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Optional: 'Join Us' Button for Desktop */}
              <Link 
                href="/contact"
                className="px-4 py-2 text-sm font-bold text-slate-950 bg-cyan-500 rounded hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]"
              >
                Join Us
              </Link>
            </div>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-cyan-400 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE DRAWER (Slide/Fade Logic) --- */}
      {/* Note: For a smoother animation, you could wrap this in a transition library.
        Here we use standard Conditional Rendering with Tailwind styling.
      */}
      <div 
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-96 border-b border-cyan-500/20' : 'max-h-0'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-950/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 hover:pl-5 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
           <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-3 py-3 text-center rounded-md text-base font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 transition-colors"
            >
              Join Us
            </Link>
        </div>
      </div>
    </nav>
  );
}