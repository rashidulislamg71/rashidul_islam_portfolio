// import React from 'react';
// import Link from 'next/link';
// import { FiGithub, FiArrowUpRight, FiMail, FiCode } from 'react-icons/fi';
// import { SiNextdotjs, SiTailwindcss, SiMongodb, SiReact } from 'react-icons/si';

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden selection:bg-blue-500/30">

//       {/* 1. Modern Grid Background */}
//       <div className="absolute inset-0 z-0 opacity-20" 
//            style={{ backgroundImage: `radial-gradient(#ffffff33 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
//       </div>

//       {/* 2. Radial Gradient Glows */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] delay-700" />

//       <div className="container mx-auto px-6 relative z-10 text-center">

//         {/* Status Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 transition-colors hover:bg-white/10">
//           <span className="flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//           </span>
//           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
//             Available for Frontend Roles
//           </span>
//         </div>

//         {/* Headline */}
//         <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
//           Crafting <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Premium</span> <br />
//           Web Experiences
//         </h1>

//         {/* Bio */}
//         <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
//           I'm a Frontend Developer specializing in building high-performance applications with 
//           <span className="text-white font-medium"> Next.js</span> and <span className="text-white font-medium">Modern UI</span> libraries.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
//           <Link href="/projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
//             <span className="flex items-center gap-2">
//               View My Work <FiArrowUpRight className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//             </span>
//           </Link>

//           <Link href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
//             Get in Touch <FiMail />
//           </Link>
//         </div>

//         {/* Tech Stack - Using React Icons (Simple & Professional) */}
//         <div className="mt-24">
//           <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">Powered by my favorite stack</p>
//           <div className="flex flex-wrap justify-center gap-10 text-4xl text-gray-600">
//             <SiNextdotjs className="hover:text-white transition-colors cursor-help" title="Next.js" />
//             <SiReact className="hover:text-[#61DAFB] transition-colors cursor-help" title="React" />
//             <SiTailwindcss className="hover:text-[#38BDF8] transition-colors cursor-help" title="Tailwind CSS" />
//             <SiMongodb className="hover:text-[#47A248] transition-colors cursor-help" title="MongoDB" />
//             <FiGithub className="hover:text-white transition-colors cursor-help" title="GitHub" />
//             <FiCode className="hover:text-yellow-400 transition-colors cursor-help" title="Clean Code" />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";

import {
  FiArrowUpRight,
  FiGithub
} from "react-icons/fi";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookSquare, FaHiking, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { IoLogoYoutube } from "react-icons/io";
import PulseBadge from "./PulseBadge";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] flex  items-center">
      {/* Main Content */}
      <div className="pt-30 pb-20  md:pt-40  max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="flex flex-wrap justify-around gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
              <PulseBadge />

              <span className="text-xs tracking-[0.3em] uppercase text-blue-400 font-semibold">
                Available for Hire
              </span>
            </div>

            {/* Heading */}
            <p>Assalamu Alikum.</p>
            <div>
              Hi...
            </div>
            <h1 className="text-3xl md:text-4xl font-black leading-tight text-white">
              <span>I'm </span>
              Md. Rashidul
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Islam
              </span>
            </h1>

            {/* Sub Text */}
            <p className="mt-8 text-gray-400 text-lg md:text-xl leading-9 max-w-2xl">
              Frontend Developer building modern, responsive and
              high-performance web applications with{" "}
              <span className="text-white font-medium">Next.js</span>,
              <span className="text-white font-medium"> React</span>,
              and beautiful modern UI/UX experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              {/* Gradient Button */}
              <a href="#projects" className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95">

                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#06b6d4_50%,#3b82f6_100%)]" />

                <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-semibold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900">
                  View Work

                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>

              {/* Github Button */}
              <Link target="_blank" href={"https://github.com/rashidulislamg71/"}>
                <button className="cursor-pointer group h-12 px-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 text-white flex items-center gap-2 backdrop-blur-xl hover:-translate-y-1 hover:scale-105 active:scale-95">

                  <FiGithub className="transition-transform duration-300 group-hover:rotate-12" />

                  GitHub
                </button>

              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-12 text-2xl text-gray-500">
              {/* <a
                href="#"
                className="hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FiGithub />
              </a> */}

              <Link
                href="#"
                className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300"
              >
                <IoLogoYoutube />
              </Link>

              <Link
                href="#"
                className="hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedinIn />
              </Link>

              <Link target="_blank"
                href="https://www.facebook.com/rashidulislam72/"
                className="hover:text-blue-500 hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebookSquare />
              </Link>
            </div>

            <div className="h-[1px] bg-gray-50/20 mt-5"></div>

            {/* Tech Stack */}
            <div className="flex items-center gap-8 mt-8 text-4xl text-gray-600">
              <SiNextdotjs className="hover:text-white transition-all duration-300 hover:scale-110" />

              <SiReact className="hover:text-cyan-400 transition-all duration-300 hover:scale-110" />

              <SiTailwindcss className="hover:text-sky-400 transition-all duration-300 hover:scale-110" />

              <SiMongodb className="hover:text-green-500 transition-all duration-300 hover:scale-110" />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >

            {/* Right Side Image */}
            <Image
              width={300}
              height={300}
              src="/rashidul_islam.png"
              alt="Rashidul Islam"
              className="animate-pulse h-[260px] w-[270px] rounded-2xl transition-all duration-500 hover:scale-105 border-[10px] border-blue-300/10"
            />

          </motion.div>
        </div>
      </div >


    </section >
  );
}