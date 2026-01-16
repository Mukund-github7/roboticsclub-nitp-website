import Link from "next/link";
import { Github, Linkedin, Instagram, MapPin, Mail, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-100 tracking-wider">
              ROBOTICS CLUB <span className="text-cyan-500">NITP</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Fostering innovation and technical excellence in robotics, automation, and embedded systems at NIT Patna.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Contact Us</h4>
            <address className="not-italic text-slate-400 text-sm space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>NIT Patna, Ashok Rajpath, Patna, Bihar 800005</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:robotics@nitp.ac.in" className="hover:text-cyan-300 transition-colors">
                  robotics@nitp.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-orange-500" />
                <a href="https://nitp.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                  www.nitp.ac.in
                </a>
              </div>
            </address>
          </div>

          {/* Column 3: Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-pink-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} Robotics Club NITP. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex space-x-6">
            <Link href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}