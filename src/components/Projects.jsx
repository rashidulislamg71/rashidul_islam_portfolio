"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLayers } from "react-icons/fi";
import SectionLabel from "./SectionLabel";

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "BookShelf Pro",
      category: "Full Stack",
      desc: "A high-performance library management engine with real-time availability tracking.",
      tech: ["Next.js", "MongoDB", "Better Auth"],
      link: "#",
    },
    {
      title: "JobTracker AI",
      category: "SaaS",
      desc: "AI-powered career tracker with analytics and smart workflow automation.",
      tech: ["React", "Node.js", "Tailwind"],
      link: "#",
    },
    {
      title: "Square Polytechnic",
      category: "Web App",
      desc: "Institutional platform optimized for student management system.",
      tech: ["Next.js", "Firebase", "HeroUI"],
      link: "#",
    },
    {
      title: "Visionary Gallery",
      category: "AI UI",
      desc: "Modern AI image interaction platform with immersive UI experience.",
      tech: ["React", "Framer Motion", "Tailwind"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 md:px-16  text-white overflow-hidden bg-[#020617]"
    >
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          
          <SectionLabel>03 / Selected Work</SectionLabel>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Featured{" "}
            <span className="text-gray-500 italic font-light">Projects</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl">
            A collection of modern web applications built with focus on performance, UX and scalability.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden group hover:border-cyan-400/30 transition-all duration-500"
            >

              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent transition-all duration-500" />

              <div className="relative z-10 flex flex-col h-full">

                {/* top icons */}
                <div className="flex justify-between items-center mb-10">
                  <div className="p-3 rounded-2xl bg-white/5 text-cyan-400">
                    <FiLayers />
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-5 text-sm">

                    {/* LIVE */}
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition group"
                    >
                      <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                      <span className="uppercase tracking-widest text-[11px]">
                        Live
                      </span>
                    </a>

                    {/* GITHUB */}
                    <a
                      href={project.github || "#"}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition group"
                    >
                      <FiGithub className="group-hover:scale-110 transition" />
                      <span className="uppercase tracking-widest text-[11px]">
                        Github
                      </span>
                    </a>

                  </div>
                </div>

                {/* text */}
                <p className="text-xs tracking-[0.3em] text-cyan-400 uppercase mb-2">
                  {project.category}
                </p>

                <h3 className="text-3xl font-semibold mb-4 group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>

                {/* tech */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* floating glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;