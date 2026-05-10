"use client";

import React from "react";
import {
  FiArrowRight,
  FiMapPin,
  FiTerminal,
  FiDatabase,
} from "react-icons/fi";

import SectionLabel from "./SectionLabel";
import PulseBadge from "./PulseBadge";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};


const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 text-white overflow-hidden bg-[#020617]"
    >
      <div className="container relative z-10">

        {/* SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>01 / About Me</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tighter mb-10"
            >
              I build modern web experiences <br />
              <span className="text-gray-500">
                with clean UI and scalable code.
              </span>
            </motion.h2>

            {/* Text */}
            <motion.div
              variants={fadeUp}
              className="space-y-8 max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed"
            >
              <p>
                I am <span className="text-white font-semibold">Md. Rashidul Islam</span>, a
                passionate Frontend Developer from Bangladesh focused on building fast,
                clean, SEO friendly, responsive applications.
              </p>

              <p>
                I specialize in the <span className="text-white">Next.js ecosystem</span>,
                turning complex ideas into simple and elegant digital products.
              </p>

              <p>
                Currently building full-stack apps using
                <span className="text-white"> React, Next.js, Node.js, MongoDB</span>.
              </p>
            </motion.div>

            {/* Skills Cards */}
            <motion.div
              variants={stagger}
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <motion.div
                variants={stagger}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition"
              >
                <FiTerminal className="text-cyan-400 mb-4 text-xl" />
                <h4 className="text-white font-bold mb-2">Frontend</h4>
                <p className="text-sm text-gray-500">
                  React, Next.js, Tailwind, DaisyUI, HeroUI
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition"
              >
                <FiDatabase className="text-purple-500 mb-4 text-xl" />
                <h4 className="text-white font-bold mb-2">Backend</h4>
                <p className="text-sm text-gray-500">
                  Node.js, Express, MongoDB, Firebase
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-5 sticky top-32"
          >
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent">

              <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 space-y-10">

                {/* Location */}
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5">
                  <FiMapPin className="text-cyan-400 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-600">
                      Location
                    </p>
                    <p className="text-gray-200">Sirajganj, Bangladesh</p>
                  </div>
                </motion.div>

                {/* Education */}
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5">
                  <FiArrowRight className="text-purple-400 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-600">
                      Education
                    </p>
                    <p className="text-gray-200">
                      CSE Student <br />
                      <span className="text-sm text-gray-500">
                        Diploma Engineering
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* Quote */}
                <div className="pt-6 border-t border-white/5">
                  <p className="text-gray-400 italic">
                    “I believe in writing clean code and building meaningful products.”
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
                  <PulseBadge />
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                    Open to Opportunities
                  </span>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default AboutSection;