"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Layers, Cpu, Radio, Zap, Eye } from "lucide-react";

// --- MOCK DATA ---
const allProjects = [
  {
    id: 1,
    title: "Sentinel AI Sentry",
    category: "AI",
    image: "https://source.unsplash.com/random/800x600/?robot,ai",
    description: "An autonomous surveillance system capable of detecting unauthorized personnel using computer vision and edge computing.",
    techStack: ["Python", "OpenCV", "Raspberry Pi", "TensorFlow"],
    icon: <Eye className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Agri-Drone V2",
    category: "Drone",
    image: "https://source.unsplash.com/random/800x600/?drone,field",
    description: "A quadcopter designed for precision agriculture, featuring multispectral imaging for crop health analysis.",
    techStack: ["C++", "ArduPilot", "Pixhawk", "LoRaWAN"],
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 3,
    title: "Smart Campus Grid",
    category: "IoT",
    image: "https://source.unsplash.com/random/800x600/?smartcity,iot",
    description: "A network of IoT sensors deployed across NIT Patna to monitor energy consumption and environmental quality in real-time.",
    techStack: ["ESP32", "MQTT", "Node-RED", "React"],
    icon: <Radio className="w-5 h-5" />
  },
  {
    id: 4,
    title: "Neuro-Arm Prosthetic",
    category: "AI",
    image: "https://source.unsplash.com/random/800x600/?prosthetic,robotic",
    description: "Low-cost 3D printed prosthetic arm controlled via EMG signals and machine learning pattern recognition.",
    techStack: ["Arduino", "Python", "Scikit-learn", "3D Printing"],
    icon: <Cpu className="w-5 h-5" />
  },
  {
    id: 5,
    title: "Swarm Bot Alpha",
    category: "Drone",
    image: "https://source.unsplash.com/random/800x600/?swarm,robots",
    description: "Experimental swarm robotics framework testing decentralized communication and formation control algorithms.",
    techStack: ["ROS 2", "Python", "Gazebo", "Zigbee"],
    icon: <Layers className="w-5 h-5" />
  },
  {
    id: 6,
    title: "Auto-Bin 3000",
    category: "IoT",
    image: "https://source.unsplash.com/random/800x600/?automation,trash",
    description: "Smart waste management system that segregates waste automatically using image recognition and inductive sensors.",
    techStack: ["YOLOv8", "Jetson Nano", "Servo Motors", "Firebase"],
    icon: <Code className="w-5 h-5" />
  }
];

const categories = ["All", "AI", "Drone", "IoT"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER & FILTERS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-100 mb-2">Our <span className="neon-text">Projects</span></h1>
            <p className="text-slate-400">Innovation in action at the Digital Lab.</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-cyan-500 border-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    : "bg-transparent border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] transition-all duration-300"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-2 right-2 z-10 bg-slate-950/80 backdrop-blur-sm p-2 rounded-lg border border-slate-800 text-cyan-400">
                    {project.icon}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}