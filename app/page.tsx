"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Trophy, Zap, Calendar, Award } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#020617,transparent)]"></div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs uppercase tracking-widest font-semibold backdrop-blur-sm">
              The Future is Here
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white"
          >
            Code Your Way Into <br />
            <span className="neon-text">The Future</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            Official Robotics Club of NIT Patna. We build autonomous systems, 
            IoT solutions, and the next generation of tech leaders.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/projects" 
              className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-md border border-cyan-500 text-cyan-400 font-bold transition-all hover:text-slate-950"
            >
              <span className="absolute inset-0 w-full h-full bg-cyan-500/0 group-hover:bg-cyan-500 transition-all duration-300 ease-out"></span>
              <span className="relative flex items-center gap-2">
                Explore Projects <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link 
              href="/about" 
              className="px-8 py-4 rounded-md text-slate-300 hover:text-white font-medium transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- CLUB HIGHLIGHTS --- */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: Workshops */}
          <motion.div variants={fadeInUp} className="glass-panel p-8 rounded-xl relative group hover:border-cyan-500/50 transition-colors duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-24 h-24 text-cyan-500" />
            </div>
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Workshops</h3>
            <p className="text-slate-400">Hands-on training in Arduino, ROS, IoT, and AI integration. We turn theory into functional prototypes.</p>
          </motion.div>

          {/* Card 2: Competitions */}
          <motion.div variants={fadeInUp} className="glass-panel p-8 rounded-xl relative group hover:border-orange-500/50 transition-colors duration-300">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-24 h-24 text-orange-500" />
            </div>
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">Competitions</h3>
            <p className="text-slate-400">Representing NIT Patna at Smart India Hackathon, e-Yantra, and international robotics challenges.</p>
          </motion.div>

          {/* Card 3: Research */}
          <motion.div variants={fadeInUp} className="glass-panel p-8 rounded-xl relative group hover:border-purple-500/50 transition-colors duration-300">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-24 h-24 text-purple-500" />
            </div>
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-100">R&D Projects</h3>
            <p className="text-slate-400">Advanced research in swarm robotics, computer vision, and industrial automation solutions.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- EVENT BANNER --- */}
      <section className="w-full bg-cyan-950/30 border-y border-cyan-900/50 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="font-semibold text-cyan-100">Upcoming Event Teaser</span>
          </div>
          <div className="text-center md:text-right">
            <span className="text-slate-300 mr-2">Web Dev Challenge Deadline:</span>
            <span className="neon-text-orange font-bold font-mono">Jan 13, 2026</span>
          </div>
        </div>
      </section>

      {/* --- RECENT ACHIEVEMENT --- */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-orange-500 font-semibold tracking-wide uppercase text-sm">
            <Award className="w-4 h-4" /> Recent Glory
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100">
            Making History at the National Level
          </h2>
          
          <div className="glass-panel p-1 rounded-2xl">
            <div className="bg-slate-900/80 rounded-xl p-8 md:p-12 border border-slate-800 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                 {/* Placeholder for Winner Image */}
                 <div className="aspect-video w-full bg-slate-800 rounded-lg overflow-hidden relative group">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs">
                        [Winner Team Photo]
                    </div>
                    {/* In production, use next/image here */}
                    <img 
                        src="https://source.unsplash.com/random/800x600/?robotics,trophy" 
                        alt="Winning Team" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                 </div>
              </div>
              <div className="w-full md:w-2/3 text-left">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Winners of Smart India Hackathon 2025</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    Our team "RoboCrafters" secured the 1st runner-up position in the Hardware Edition, developing an autonomous disaster recovery rover.
                </p>
                <Link href="/achievements" className="text-sm font-bold text-orange-500 hover:text-orange-400 underline decoration-2 underline-offset-4">
                    Read the Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}