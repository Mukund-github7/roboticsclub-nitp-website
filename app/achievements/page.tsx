"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";

const stats = [
  { label: "Awards Won", value: "50+" },
  { label: "Projects Built", value: "120+" },
  { label: "Active Members", value: "200+" },
];

const awards = [
  { year: "2025", event: "Smart India Hackathon", title: "1st Runner Up - Hardware Edition", desc: "For Disaster Recovery Rover" },
  { year: "2024", event: "e-Yantra IIT Bombay", title: "National Finalists", desc: "Supply Bot Theme" },
  { year: "2024", event: "Technex IIT BHU", title: "Best Design Award", desc: "Drone Racing League" },
  { year: "2023", event: "Robocon India", title: "Stage 2 Qualifiers", desc: "Ring Toss Robot" },
];

export default function Achievements() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-8">
          Hall of <span className="neon-text-orange">Fame</span>
        </h1>
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Awards List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group flex items-center gap-4 bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-slate-950 rounded-full items-center justify-center border border-slate-800 group-hover:border-orange-500 group-hover:text-orange-500 text-slate-500 transition-colors">
              <Trophy className="w-8 h-8" />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                <span className="text-xs font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">{award.year}</span>
                <span className="text-orange-500 font-semibold text-sm tracking-wide uppercase">{award.event}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{award.title}</h3>
              <p className="text-slate-400 text-sm">{award.desc}</p>
            </div>

            <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
               <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}