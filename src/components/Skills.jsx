

"use client";

import React from "react";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiFigma, SiGit, SiPostman, SiVercel,
  SiPython,
  SiBetterauth
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import PulseBadge from "./PulseBadge";

// Animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};



const SkillsSection = () => {
  const skills = [
    {
      title: "Frontend",
      desc: "Modern UI & responsive design",
      items: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        { name: "React", icon: <SiReact />, color: "text-cyan-400" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "Python(Basic)", icon: <SiPython />, color: "text-yellow-400" },
      ],
    },
    {
      title: "Backend",
      desc: "API & database handling",
      items: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-400" },
        { name: "BetterAuth", icon: <SiBetterauth />, color: "text-white" },
      ],
    },
    {
      title: "Tools",
      desc: "Workflow & deployment",
      items: [
        { name: "Git", icon: <SiGit />, color: "text-red-400" },
        { name: "Vercel", icon: <SiVercel />, color: "text-white" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
        { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
        { name: "VS Code", icon: <VscVscode />, color: "text-blue-400" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 text-white overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16"
        >
          <SectionLabel>02 / Skills</SectionLabel>

          <h2 className="text-4xl md:text-6xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl">
            Technologies I use to build fast, modern and scalable web applications.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((cat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative p-8 rounded-3xl
              bg-white/5 border border-white/10 backdrop-blur-xl
              hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-cyan-500/5 transition" />

              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{cat.desc}</p>

              <div className="grid grid-cols-2 gap-5">
                {cat.items.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition"
                  >
                    <span className={`text-xl ${s.color}`}>{s.icon}</span>
                    <span className="text-xs uppercase tracking-wider">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 rounded-3xl
          bg-linear-to-r from-cyan-500/5 via-transparent to-blue-500/5
          border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400 italic">
            Currently exploring:
            <span className="text-white">
              {" "} Advanced Frontend, Backend Technology, Performance Optimization & Modern Web Architectures.
            </span>
          </p>

          <div className="flex items-center gap-2">
            <PulseBadge />
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Always Learning
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;