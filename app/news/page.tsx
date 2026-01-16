"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Newspaper } from "lucide-react";

const newsItems = [
  {
    id: 1,
    source: "Club Update",
    date: "Jan 10, 2026",
    title: "New 3D Printer Added to Lab",
    excerpt: "We have upgraded our inventory with the latest Creality Ender-5 Plus for rapid prototyping larger chassis parts.",
    link: "#"
  },
  {
    id: 2,
    source: "Industry News",
    date: "Jan 08, 2026",
    title: "Boston Dynamics Unveils New Atlas",
    excerpt: "The new electric Atlas robot demonstrates unprecedented agility. Here is what it means for the future of humanoid robotics.",
    link: "#"
  },
  {
    id: 3,
    source: "Club Update",
    date: "Dec 20, 2025",
    title: "Winter Boot Camp Registration Open",
    excerpt: "Join us for a 2-week intensive course on ROS 2 navigation stacks starting next month.",
    link: "#"
  },
  {
    id: 4,
    source: "Tech Daily",
    date: "Dec 15, 2025",
    title: "AI in Edge Computing",
    excerpt: "How Jetson Nano is revolutionizing low-power AI applications in drones and rovers.",
    link: "#"
  }
];

export default function News() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-3 mb-12">
          <Newspaper className="w-8 h-8 text-cyan-500" />
          <h1 className="text-4xl font-bold text-slate-100">Latest <span className="neon-text">Updates</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl group hover:bg-slate-900 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded border ${
                  news.source === 'Club Update' 
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' 
                    : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                }`}>
                  {news.source}
                </span>
                <span className="text-slate-500 text-xs">{news.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                {news.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                {news.excerpt}
              </p>
              
              <a href={news.link} className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition-colors gap-1">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}