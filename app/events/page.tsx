"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

// --- SPECIFIC IMAGE DATA ---
const upcomingEvent = {
  title: "Robotics Workshop 2026",
  description: "A comprehensive 3-day boot camp covering Arduino basics, sensor integration, and line-following algorithms. Perfect for beginners!",
  date: "Jan 24-26, 2026",
  time: "10:00 AM - 4:00 PM",
  venue: "Main Auditorium, NIT Patna",
  image: "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Large auditorium/event
  registrationLink: "#"
};

const pastEvents = [
  {
    id: 1,
    title: "Tech-Sagar 2025",
    date: "Oct 2025",
    image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Students working/Hackathon
    description: "Annual technical fest featuring bot wars and coding marathons."
  },
  {
    id: 2,
    title: "Drone Racing League",
    date: "Aug 2025",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80", // Drone racing
    description: "Inter-college FPV drone racing championship."
  },
  {
    id: 3,
    title: "AI Seminar Series",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80", // Lecture/Seminar
    description: "Guest lecture by industry experts from Google and Microsoft."
  },
  {
    id: 4,
    title: "Intro to IoT",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Electronics/Soldering
    description: "Hands-on session on ESP8266 and cloud connectivity."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Events() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Events & <span className="neon-text">Workshops</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Join us to learn, compete, and connect. From hands-on boot camps to national-level hackathons.
        </p>
      </div>

      {/* --- UPCOMING EVENT (HERO) --- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto mb-24"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <h2 className="text-xl font-bold text-cyan-400 tracking-wider uppercase">Next Big Thing</h2>
        </div>

        <div className="relative group rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900 shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto overflow-hidden relative">
              <img 
                src={upcomingEvent.image} 
                alt={upcomingEvent.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent lg:bg-gradient-to-t" />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">{upcomingEvent.title}</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                {upcomingEvent.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-slate-300">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>{upcomingEvent.time}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>{upcomingEvent.venue}</span>
                </div>
              </div>

              <a 
                href={upcomingEvent.registrationLink}
                className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg hover:shadow-cyan-500/25"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- PAST EVENTS GALLERY --- */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-100 mb-10 border-l-4 border-slate-700 pl-4">Past Events Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-3 left-3 bg-slate-950/90 text-orange-500 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/20 z-10">
                  {event.date}
                </div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                  {event.title}
                </h4>
                <p className="text-slate-400 text-sm line-clamp-2">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}