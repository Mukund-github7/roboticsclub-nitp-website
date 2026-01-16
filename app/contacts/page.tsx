"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone, Clock } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network delay for UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Message sent successfully!');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Get In <span className="neon-text">Touch</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Have a question, a project idea, or just want to geek out about robots? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* --- LEFT COLUMN: INFO & MAP --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Details Card */}
            <div className="glass-panel p-8 rounded-xl space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>
              
              <div className="flex items-start space-x-4 text-slate-300">
                <div className="bg-slate-900 p-3 rounded-lg text-cyan-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Visit Us</h4>
                  <p className="mt-1 text-sm">Student Activity Center (SAC),</p>
                  <p className="text-sm">National Institute of Technology Patna,</p>
                  <p className="text-sm">Ashok Rajpath, Patna - 800005</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-slate-300">
                <div className="bg-slate-900 p-3 rounded-lg text-cyan-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <p className="mt-1 text-sm">roboticsclub@nitp.ac.in</p>
                  <p className="text-sm">secretary.robotics@nitp.ac.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 text-slate-300">
                <div className="bg-slate-900 p-3 rounded-lg text-cyan-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Lab Hours</h4>
                  <p className="mt-1 text-sm">Mon - Fri: 4:00 PM - 8:00 PM</p>
                  <p className="text-sm">Sat - Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-800 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.522228833959!2d85.17036631502447!3d25.62077408369974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6733271%3A0xe5483489e3d09a25!2sNational%20Institute%20of%20Technology%20Patna!5e0!3m2!1sen!2sin!4v1647844281734!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="NIT Patna Map"
              ></iframe>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-xl border-t border-cyan-500/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-400">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="purpose" className="text-sm font-medium text-slate-400">Purpose</label>
                <div className="relative">
                  <select 
                    id="purpose" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Join The Club</option>
                    <option>Event Registration</option>
                    <option>Collaboration / Sponsorship</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.6)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}