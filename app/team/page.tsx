"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Quote, Cpu, Code2 } from "lucide-react";

// --- MOCK DATA ---
const faculty = {
  name: "Dr. Arvind Kumar",
  role: "Faculty Advisor",
  image: "https://source.unsplash.com/random/400x400/?professor,man",
  quote: "Innovation distinguishes between a leader and a follower. Our club is the breeding ground for the leaders of tomorrow's tech landscape."
};

const coreTeam = [
  {
    id: 1,
    name: "Rohan Das",
    role: "President",
    image: "https://source.unsplash.com/random/400x400/?man,professional",
    linkedin: "#",
    github: "#"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Vice President",
    image: "https://source.unsplash.com/random/400x400/?woman,professional",
    linkedin: "#",
    github: "#"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Technical Lead",
    image: "https://source.unsplash.com/random/400x400/?coder,man",
    linkedin: "#",
    github: "#"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Event Manager",
    image: "https://source.unsplash.com/random/400x400/?manager,woman",
    linkedin: "#",
    github: "#"
  },
  {
    id: 5,
    name: "Arjun Reddy",
    role: "Hardware Lead",
    image: "https://source.unsplash.com/random/400x400/?engineer,man",
    linkedin: "#",
    github: "#"
  },
  {
    id: 6,
    name: "Sanya Patel",
    role: "Creative Head",
    image: "https://source.unsplash.com/random/400x400/?designer,woman",
    linkedin: "#",
    github: "#"
  }
];

const hardwareMembers = ["Amit Verma", "Suresh Raina", "Kavita Gill", "John Doe", "Rahul Roy", "Sneha Iyar"];
const softwareMembers = ["Md. Altaf", "Chris Evans", "Natasha R.", "Bruce Banner", "Tony Stark", "Peter Parker"];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Team() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Meet The <span className="neon-text">Architects</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          The minds behind the machines. A dedicated team of innovators pushing the boundaries of robotics at NIT Patna.
        </p>
      </div>

      {/* --- FACULTY ADVISOR --- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto mb-20"
      >
        <div className="relative glass-panel p-8 rounded-2xl border-t border-cyan-500/30 flex flex-col md:flex-row items-center gap-8">
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 pointer-events-none"></div>
          
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
            <img 
              src={faculty.image} 
              alt={faculty.name} 
              className="w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-xl"
            />
          </div>
          
          <div className="relative text-center md:text-left">
            <Quote className="w-10 h-10 text-cyan-500/20 absolute -top-4 -left-4" />
            <h2 className="text-2xl font-bold text-white">{faculty.name}</h2>
            <p className="text-cyan-400 font-medium mb-4">{faculty.role}</p>
            <p className="text-slate-300 italic leading-relaxed">"{faculty.quote}"</p>
          </div>
        </div>
      </motion.section>

      {/* --- CORE TEAM --- */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-slate-100 mb-8 border-l-4 border-orange-500 pl-4">Core Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {coreTeam.map((member) => (
            <motion.div
              key={member.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Image Container with Overlay */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={member.linkedin} className="p-3 bg-slate-800 rounded-full hover:bg-cyan-600 hover:text-white text-cyan-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={member.github} className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 hover:text-white text-purple-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 text-center relative z-10 bg-slate-900">
                <h3 className="text-lg font-bold text-slate-100">{member.name}</h3>
                <p className="text-sm text-cyan-500 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MEMBERS LIST --- */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Hardware Team */}
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <Cpu className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-bold text-slate-100">Hardware Team</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
              {hardwareMembers.map((name, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-400 text-sm hover:text-orange-400 transition-colors">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Software Team */}
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <Code2 className="w-6 h-6 text-cyan-500" />
              <h3 className="text-xl font-bold text-slate-100">Software Team</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
              {softwareMembers.map((name, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  {name}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}