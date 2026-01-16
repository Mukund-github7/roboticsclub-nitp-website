"use client";

import { motion } from "framer-motion";
import { History, Target, Lightbulb, Flag } from "lucide-react";

// Timeline Data
const timeline = [
  { year: "2020", title: "Inception", description: "Robotics Club NITP was founded by a group of 5 enthusiasts in a dorm room." },
  { year: "2022", title: "First National Win", description: "Secured 1st place at IIT Kharagpur's Robotix for our autonomous line follower." },
  { year: "2024", title: "Lab Expansion", description: "Moved to the new Student Activity Center with state-of-the-art 3D printing facilities." },
  { year: "2025", title: "Global Recognition", description: "Top 10 finalists at the International Rover Challenge." }
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          About The <span className="neon-text">Club</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          From humble beginnings to a powerhouse of innovation.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="glass-panel p-8 rounded-xl border-t border-cyan-500/30"
        >
          <div className="flex items-center gap-4 mb-4">
            <Target className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            To democratize robotics education at NIT Patna by providing hands-on training, resources, and a collaborative environment where theoretical knowledge meets practical application.
          </p>
        </motion.div>

        <motion.div 
           initial={{ x: 50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           className="glass-panel p-8 rounded-xl border-t border-orange-500/30"
        >
          <div className="flex items-center gap-4 mb-4">
            <Lightbulb className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            To become a leading hub for robotics research in Eastern India, producing industry-ready engineers capable of solving real-world problems through automation and AI.
          </p>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-white mb-12 flex items-center justify-center gap-2">
          <History className="w-6 h-6 text-cyan-500" /> Our Journey
        </h2>
        
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-12">
          {timeline.map((item, index) => (
            <motion.div 
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-slate-950 border-4 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              
              {/* Content */}
              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 <div className="md:w-5/12 mb-2 md:mb-0"></div> {/* Spacer */}
                 <div className="md:w-5/12 bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/30 transition-colors">
                    <span className="text-cyan-400 font-bold text-xl block mb-2">{item.year}</span>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}