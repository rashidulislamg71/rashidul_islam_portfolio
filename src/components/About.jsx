"use client";

import React from "react";
import {
  FiArrowRight,
  FiMapPin,
  FiTerminal,
  FiDatabase,
  FiDownload,
} from "react-icons/fi";

import SectionLabel from "./SectionLabel";
import PulseBadge from "./PulseBadge";
import { motion } from "framer-motion";
import DownloadButton from "./DownloadButton";

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
    <section id="about" className="relative py-16 md:py-20 mt-5 text-white overflow-hidden ">
      <div className="container relative z-10">
        {/* SECTION LABEL */} 
        <div>
          <SectionLabel>01 / About Me</SectionLabel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-medium leading-[1.1] tracking-tighter mb-10">
              I build modern web experiences <br />
              <span className="text-gray-500">
                with clean UI and scalable code.
              </span>
            </h2>

            {/* Text */}
            <div className="space-y-3 max-w-2xl text-gray-400 text-base md:text-xl  leading-relaxed">
              <p className="leading-7">
                I am{" "}
                <span className="text-white font-semibold">
                  Md. Rashidul Islam
                </span>
                , a passionate{" "}
                <span className="text-white font-semibold">
                  Frontend Developer
                </span>{" "}
                from Bangladesh focused on building fast, clean, SEO friendly,
                responsive applications.
              </p>
              <p className="leading-7">
                I specialize in <span className="text-white">React.js </span>{" "}
                and <span className="text-white">Next.js </span>, focusing on
                clean UI, smooth user experiences, and scalable frontend
                architecture. I enjoy turning ideas into elegant digital
                products with attention to performance and design details.
              </p>
              <p className="leading-7">
                Currently, I am improving my frontend expertise while expanding
                my backend technologies and learning full-stack development with{" "}
                <span className="text-white">
                  {" "}
                  Node.js, Express.js, and MongoDB{" "}
                </span>
                . to build complete web applications from frontend to backend.
              </p>
            </div>
            <motion.div variants={fadeUp} className="mt-10">
              <DownloadButton href="/resume.pdf">
                Download Resume
              </DownloadButton>
            </motion.div>

            {/* Skills Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div  data-aos="zoom-in-down" className=" group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition">
                <FiTerminal className="text-cyan-400 mb-4 text-xl group-hover:translate-x-2 group-hover:text-white duration-500 transition-all " />
                <h4 className="text-white font-bold mb-2">Frontend</h4>
                <p className="text-sm text-gray-500">
                  JavaScript, React, Next.js, TailwindCSS
                </p>
              </div>

              <div data-aos="zoom-out-up" className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition">
                <FiDatabase className="text-purple-500 mb-4 text-xl group-hover:-translate-y-2 group-hover:text-white duration-500 transition-all" />
                <h4 className="text-white font-bold mb-2">Backend</h4>
                <p className="text-sm text-gray-500">
                  Node.js, Express, MongoDB, 
                  BetterAuth & Firebase Authentication 
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div data-aos="zoom-in-up"
            className="lg:col-span-5 sticky top-32"
          >
            <div className="relative p-1 rounded-2xl bg-linear-to-br from-cyan-500/20 via-transparent to-transparent">
              <div className="bg-[#0a0a0a]/30 rounded-2xl p-8 space-y-10">
                {/* Location */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5"
                >
                  <FiMapPin className="text-cyan-400 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-600">
                      Location
                    </p>
                    <p className="text-gray-200">Sirajganj, Bangladesh</p>
                  </div>
                </motion.div>

                {/* Education */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5"
                >
                  <FiArrowRight className="text-purple-400 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-600">
                      Education
                    </p>
                    <p className="text-gray-200">
                      Computer Science & Technology <br />
                      {/* <span className="text-sm text-gray-500">
                        Diploma in Engineering
                      </span> */}
                      <span className="text-sm text-gray-500">
                        Square Polytechnic Institute, Bogura
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* Quote */}
                <div className="pt-6 border-t border-white/5">
                  <p className="text-gray-400 italic">
                    “I believe in writing clean code and building meaningful
                    products.”
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
