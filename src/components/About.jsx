// import React from 'react';
// import { FiArrowRight, FiArrowDownRight } from 'react-icons/fi';
// import { SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si';

// const AboutSection = () => {
//   const stack = [
//     { name: 'Next.js', icon: <SiNextdotjs />, color: 'hover:text-white' },
//     { name: 'React', icon: <SiReact />, color: 'hover:text-[#61DAFB]' },
//     { name: 'Tailwind', icon: <SiTailwindcss />, color: 'hover:text-[#38BDF8]' },
//     { name: 'MongoDB', icon: <SiMongodb />, color: 'hover:text-[#47A248]' },
//     { name: 'Node.js', icon: <SiNodedotjs />, color: 'hover:text-[#339933]' },
//     { name: 'Express', icon: <SiExpress />, color: 'hover:text-gray-400' },
//   ];

//   return (
//     <section className="py-32 bg-[#050505] text-[#e5e7eb] font-sans">
//       <div className="container mx-auto px-6 max-w-6xl">
        
//         {/* Top Header - Ultra Clean */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
//           <div>
//             <p className="text-blue-500 font-mono text-sm mb-2 tracking-[0.2em] uppercase">About me</p>
//             <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
//               Designing with logic, <br />
//               <span className="text-gray-600">coding with purpose.</span>
//             </h2>
//           </div>
//           <div className="hidden md:block">
//             <FiArrowDownRight size={48} className="text-gray-800" />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
//           {/* Left Column - Large Narrative Text */}
//           <div className="lg:col-span-7">
//             <div className="space-y-8">
//               <p className="text-xl md:text-2xl leading-relaxed font-light">
//                 I'm <span className="text-white font-normal underline decoration-blue-500/30 underline-offset-8">Md. Rashidul Islam</span>, 
//                 a frontend specialist and a student at Square Polytechnic Institute. 
//                 I bridge the gap between complex backend structures and smooth, high-end interfaces.
//               </p>
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 I focus on building applications that don't just work—they feel right. 
//                 Whether it's managing data in a <span className="text-white italic">Job Application Tracker</span> 
//                 or crafting a digital <span className="text-white italic">BookShelf</span>, 
//                 I prioritize clean code and "premium" aesthetics.
//               </p>
              
//               {/* Skill Marquee / List */}
//               <div className="pt-8 border-t border-white/5">
//                 <p className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-bold">My Tech Stack</p>
//                 <div className="flex flex-wrap gap-8 text-3xl text-gray-700">
//                   {stack.map((tech) => (
//                     <div key={tech.name} className={`${tech.color} transition-all duration-300 flex items-center gap-2 group cursor-default`}>
//                       {tech.icon}
//                       <span className="text-[10px] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity tracking-tighter text-white">
//                         {tech.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Scannable Info */}
//           <div className="lg:col-span-5">
//             <div className="sticky top-24 space-y-12">
              
//               {/* Info Block 1 */}
//               <div>
//                 <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold flex items-center gap-2">
//                   <div className="w-8 h-[1px] bg-blue-500"></div> Based in
//                 </h4>
//                 <p className="text-lg font-medium text-white">Sirajganj, Rajshahi, Bangladesh</p>
//               </div>

//               {/* Info Block 2 */}
//               <div>
//                 <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold flex items-center gap-2">
//                   <div className="w-8 h-[1px] bg-blue-500"></div> Education
//                 </h4>
//                 <p className="text-lg font-medium text-white">Square Polytechnic Institute</p>
//                 <p className="text-sm text-gray-500 mt-1">Computer Science & Engineering</p>
//               </div>

//               {/* Info Block 3 */}
//               <div>
//                 <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold flex items-center gap-2">
//                   <div className="w-8 h-[1px] bg-blue-500"></div> Passion
//                 </h4>
//                 <p className="text-gray-400 italic leading-relaxed">
//                   "Lifelong learner, trying to adapt to the tech world."
//                 </p>
//               </div>

//               <button className="group flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest border-b border-blue-500 pb-2 hover:gap-5 transition-all">
//                 Download Resume <FiArrowRight className="text-blue-500" />
//               </button>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;








import { FiMapPin, FiBookOpen } from 'react-icons/fi';

export default function About() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-medium text-white mb-8">Engineering with purpose.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a frontend developer and computer science student at <strong>Square Polytechnic Institute</strong>. 
              My approach focuses on creating "Invisible UX"—interfaces so intuitive they feel natural to the user.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-xs uppercase text-blue-500 font-bold mb-4">Frontend</h4>
                <p className="text-sm text-gray-500">React, Next.js, Tailwind, HeroUI, DaisyUI</p>
              </div>
              <div>
                <h4 className="text-xs uppercase text-purple-500 font-bold mb-4">Backend</h4>
                <p className="text-sm text-gray-500">Node.js, Express, MongoDB, Firebase</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <FiMapPin className="text-blue-500" />
                <span className="text-sm text-gray-300">Sirajganj, Bangladesh</span>
              </div>
              <div className="flex items-center gap-4">
                <FiBookOpen className="text-purple-500" />
                <span className="text-sm text-gray-300">Square Polytechnic Institute</span>
              </div>
            </div>
            <p className="text-gray-500 italic text-sm">"Lifelong learner, trying to adapt to the tech world."</p>
          </div>
        </div>
      </div>
    </section>
  );
}