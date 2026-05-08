// import React from 'react';
// import { FiArrowRight, FiMapPin, FiTerminal, FiDatabase } from 'react-icons/fi';

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-32 bg-[#050505] text-white overflow-hidden">
//       <div className="container mx-auto px-6 max-w-7xl">

//         {/* Subtle Section Label */}
//         <div className="flex items-center gap-4 mb-20">
//           <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.5em]">01 / Profile</span>
//           <div className="h-[1px] w-20 bg-blue-500/30"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

//           {/* LEFT COLUMN: The Bold Statement */}
//           <div className="lg:col-span-7">
//             <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tighter mb-10">
//               Turning complex logic into <br />
//               <span className="text-gray-500">elegant digital motion.</span>
//             </h2>

//             <div className="space-y-8 max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed">
//               <p>
//                 I am <span className="text-white">Md. Rashidul Islam</span>, a Frontend Developer currently 
//                 refining my craft at Square Polytechnic Institute. I specialize in the 
//                 <span className="text-white"> Next.js ecosystem</span>, focusing on performance, 
//                 scalability, and "invisible" UX.
//               </p>
//               <p>
//                 My philosophy is simple: <span className="italic">Code should be as clean as the UI it powers.</span> 
//                 Whether I'm architecting a library system or a job tracker, I treat every 
//                 component as a piece of digital art.
//               </p>
//             </div>

//             {/* Micro-Bento Skills Grid */}
//             <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-colors group">
//                 <FiTerminal className="text-blue-500 mb-4 text-xl" />
//                 <h4 className="text-white font-bold mb-2">Frontend Core</h4>
//                 <p className="text-sm text-gray-500">Next.js, React 19, TailwindCSS, HeroUI.</p>
//               </div>
//               <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-colors group">
//                 <FiDatabase className="text-purple-500 mb-4 text-xl" />
//                 <h4 className="text-white font-bold mb-2">Backend & Data</h4>
//                 <p className="text-sm text-gray-500">Node.js, MongoDB Atlas, Better Auth, Firebase.</p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: The Details Card */}
//           <div className="lg:col-span-5 sticky top-32">
//             <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-transparent">
//               <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 space-y-12">

//                 {/* Location & Education */}
//                 <div className="space-y-8">
//                   <div className="flex items-start gap-5">
//                     <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-500">
//                       <FiMapPin />
//                     </div>
//                     <div>
//                       <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Base</p>
//                       <p className="text-gray-200 font-medium">Sirajganj, Bangladesh</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-5">
//                     <div className="mt-1 p-2 rounded-lg bg-purple-500/10 text-purple-500">
//                       <FiArrowRight />
//                     </div>
//                     <div>
//                       <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Education</p>
//                       <p className="text-gray-200 font-medium leading-tight">
//                         Computer Science & Engineering <br />
//                         <span className="text-sm text-gray-500">Square Polytechnic Institute</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Personal Mission Statement */}
//                 <div className="pt-8 border-t border-white/5">
//                   <blockquote className="text-gray-400 italic font-light leading-relaxed">
//                     "Lifelong learner, constantly adapting to the ever-evolving 
//                     landscape of the tech world."
//                   </blockquote>
//                 </div>

//                 {/* Status Indicator */}
//                 <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
//                   <span className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//                   </span>
//                   <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
//                     Open to Opportunities
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;




import React from "react";
import {
  FiArrowRight,
  FiMapPin,
  FiTerminal,
  FiDatabase,
} from "react-icons/fi";
import SectionLabel from "./SectionLabel";
import PulseBadge from "./PulseBadge";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-10 text-white overflow-hidden
       bg-[#020617]  "
    >

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Label */}
        <SectionLabel> 01 / About Me</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT */}
          <div className="lg:col-span-7">

            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tighter mb-10">
              I build modern web experiences <br />
              <span className="text-gray-500">
                with clean UI and scalable code.
              </span>
            </h2>

            {/* NEW ABOUT TEXT */}
            <div className="space-y-8 max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed">

              <p>
                I am <span className="text-white font-semibold">Md. Rashidul Islam</span>, a
                passionate Frontend Developer from Bangladesh focused on building
                fast, clean, SEO friendly, responsive, and user-friendly web applications.
              </p>

              <p>
                I specialize in the <span className="text-white">Next.js ecosystem</span> and enjoy
                turning complex ideas into simple and elegant digital products.
                I care deeply about performance, UI detail, and clean architecture.
              </p>

              <p>
                Currently, I’m learning and building full-stack applications using
                <span className="text-white"> React, Next.js, Node.js, and MongoDB</span>,
                constantly improving my skills through real-world projects.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
                <FiTerminal className="text-cyan-400 mb-4 text-xl" />
                <h4 className="text-white font-bold mb-2">Frontend</h4>
                <p className="text-sm text-gray-500">
                  React, Next.js, Tailwind CSS, DaisyUI, HeroUI and Modern Tools
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-colors">
                <FiDatabase className="text-purple-500 mb-4 text-xl" />
                <h4 className="text-white font-bold mb-2">Backend</h4>
                <p className="text-sm text-gray-500">
                  Node.js, Express, MongoDB, BetterAuth, Firebase
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 sticky top-32">

            <div className="relative p-1 rounded-[2.5rem] bg-linear-to-br from-cyan-500/20 via-transparent to-transparent">

              <div className="bg-[#0a0a0a] rounded-[2.4rem] p-10 space-y-10">

                {/* Location */}
                <div className="flex items-start gap-5">

                  <div className="mt-1 p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <FiMapPin />
                  </div>

                  <div>
                    <p className="text-[12px] uppercase tracking-widest text-gray-600 mb-1">
                      Location
                    </p>
                    <p className="text-gray-200 font-medium">
                      Sirajganj, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-5">

                  <div className="mt-1 p-2 rounded-lg bg-blue-500/10
                   text-purple-500">
                    <FiArrowRight />
                  </div>

                  <div>
                    <p className="text-[12px] uppercase tracking-widest
                     text-gray-600 mb-0.5">
                      Education
                    </p>

                    <p className="text-gray-200 font-medium leading-tight">
                      Computer Science & Engineering <br />
                      <span className="text-sm text-gray-500">
                        Diploma Student
                      </span>
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="pt-6 border-t border-white/5">
                  <blockquote className="text-gray-400 italic font-light leading-relaxed">
                    “I believe in writing clean code, building meaningful products,
                    and continuously improving every day.”
                  </blockquote>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">

                  <PulseBadge />

                  <span className="text-[12px] uppercase tracking-widest text-gray-400 font-bold">
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