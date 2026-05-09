"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiPhone } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { name: "GitHub", icon: <FiGithub />, url: "#" },
    { name: "LinkedIn", icon: <FiLinkedin />, url: "#" },
    { name: "Email", icon: <FiMail />, url: "#" },

    // WhatsApp (NEW)
    {
      name: "WhatsApp",
      icon: <FiPhone />,
      url: "https://wa.me/8801849267669",
    },
  ];

  return (
    <footer className="relative bg-[#020617] text-white overflow-hidden">

     
      <div className="relative z-10 container mx-auto px-6 py-20 max-w-6xl">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
        >

          {/* Left text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let’s build something <span className="text-cyan-400">amazing</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              I’m open to freelance work, collaborations, and full-time opportunities.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {links.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                bg-white/5 border border-white/10 text-gray-300
                hover:text-white hover:border-cyan-400/40 transition-all"
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
                <FiArrowUpRight className="text-xs opacity-50" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">

          <p>
            © {year} <span className="text-white">Md. Rashidul Islam</span>. All rights reserved.
          </p>

          <p className="italic text-gray-600">
            Built with Next.js • Tailwind • Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;