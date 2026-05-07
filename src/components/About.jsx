"use client";

import { motion } from "framer-motion";

import {
  FiUser,
  FiCode,
  FiLayers,
  FiDatabase,
} from "react-icons/fi";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#07111f] to-[#020617]"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-xl mb-6">

            <FiUser className="text-cyan-400" />

            <span className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Know More{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              About Me
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-9">
            I am a passionate Frontend Developer focused on building
            responsive, modern and user-friendly web applications using
            React, Next.js and modern frontend technologies.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* About Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">

              <h3 className="text-2xl font-bold text-white mb-5">
                Who am I?
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                Assalamu Alaikum! I'm{" "}

                <span className="text-cyan-400 font-semibold">
                  Md. Rashidul Islam
                </span>,
                a passionate Frontend Developer from Bangladesh. I love
                creating modern, responsive and visually appealing web
                applications with clean UI/UX.
              </p>

              <p className="text-gray-400 leading-8 text-lg mt-5">
                I enjoy learning new technologies and improving my skills
                every day. Currently I work with technologies like
                React.js, Next.js, Tailwind CSS, Node.js, Express.js
                and MongoDB.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-105 transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-5">
                  <FiCode />
                </div>

                <h3 className="text-white font-bold text-xl mb-2">
                  Frontend
                </h3>

                <p className="text-gray-400 leading-7">
                  Building responsive and modern UI with React and Next.js.
                </p>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:scale-105 transition-all duration-300">

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-5">
                  <FiDatabase />
                </div>

                <h3 className="text-white font-bold text-xl mb-2">
                  Backend
                </h3>

                <p className="text-gray-400 leading-7">
                  Creating APIs and database systems using Node.js and MongoDB.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Main Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl relative overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-500/10 blur-[100px]" />

              <h3 className="text-3xl font-black text-white mb-10">
                My Skills
              </h3>

              {/* Skills */}
              <div className="space-y-6">

                {/* Skill */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">
                      React.js
                    </span>

                    <span className="text-cyan-400">
                      90%
                    </span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[90%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Skill */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">
                      Next.js
                    </span>

                    <span className="text-cyan-400">
                      85%
                    </span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[85%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Skill */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">
                      Tailwind CSS
                    </span>

                    <span className="text-cyan-400">
                      92%
                    </span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[92%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Skill */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">
                      MongoDB
                    </span>

                    <span className="text-cyan-400">
                      75%
                    </span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[75%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Tech Icons */}
              <div className="flex items-center justify-center gap-8 mt-14 text-5xl text-gray-600">

                <SiReact className="hover:text-cyan-400 hover:scale-110 transition-all duration-300 cursor-pointer" />

                <SiNextdotjs className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" />

                <SiTailwindcss className="hover:text-sky-400 hover:scale-110 transition-all duration-300 cursor-pointer" />

                <SiMongodb className="hover:text-green-500 hover:scale-110 transition-all duration-300 cursor-pointer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}