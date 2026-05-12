// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { FiBookOpen, FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

// const TimelineItem = ({ item, index, type }) => (
//   <motion.div 
//     initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
//   >
//     {/* Timeline Dot */}
//     <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

//     <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
//       <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
//         <span className="flex items-center gap-2 text-[10px] font-mono text-cyan-500 uppercase tracking-widest">
//           {type === "work" ? <FiBriefcase /> : <FiBookOpen />}
//           {item.duration}
//         </span>
//         <span className="flex items-center gap-1 text-[10px] text-gray-500 font-mono">
//           <FiMapPin /> {item.location}
//         </span>
//       </div>

//       <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
//         {item.role || item.degree}
//       </h3>
//       <p className="text-gray-400 font-medium mb-4">{item.company || item.institution}</p>

//       <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
//         {item.description}
//       </p>

//       {item.technologies && (
//         <div className="mt-4 flex flex-wrap gap-2">
//           {item.technologies.map((tech) => (
//             <span key={tech} className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400">
//               {tech}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   </motion.div>
// );

// const HistorySection = () => {
//   const education = [
//     {
//       degree: "Diploma in Computer Science & Engineering",
//       institution: "Square Polytechnic Institute",
//       duration: "2022 — Present",
//       location: "Pabna, Bangladesh",
//       description: "Focused on core computing principles, data structures, and web technologies. Actively maintaining the official institution website.",
//     }
//   ];

//   const experience = [
//     {
//       role: "Frontend Developer (Projects)",
//       company: "Self-Employed / Open Source",
//       duration: "2024 — Present",
//       location: "Remote",
//       description: "Developing high-end web applications using the Next.js ecosystem. Specialized in creating responsive, SEO-optimized interfaces with modern UI libraries.",
//       technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
//     },
//     {
//       role: "Programming Student",
//       company: "Learning Ecosystem",
//       duration: "2023 — 2024",
//       location: "Sirajganj, Bangladesh",
//       description: "Mastered JavaScript fundamentals, DOM manipulation, and asynchronous programming logic through intensive project building.",
//       technologies: ["JavaScript ES6", "HTML5", "CSS3"],
//     }
//   ];

//   return (
//     <section className="py-32 bg-[#030303] text-white">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

//           {/* Experience Column */}
//           <div>
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold tracking-tight flex items-center gap-4">
//                 <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500"><FiBriefcase /></span>
//                 Experience
//               </h2>
//             </div>
//             <div className="mt-8">
//               {experience.map((item, i) => (
//                 <TimelineItem key={i} item={item} index={i} type="work" />
//               ))}
//             </div>
//           </div>

//           {/* Education Column */}
//           <div>
//             <div className="mb-12">
//               <h2 className="text-3xl font-bold tracking-tight flex items-center gap-4">
//                 <span className="p-2 rounded-lg bg-purple-500/10 text-purple-500"><FiBookOpen /></span>
//                 Education
//               </h2>
//             </div>
//             <div className="mt-8">
//               {education.map((item, i) => (
//                 <TimelineItem key={i} item={item} index={i} type="edu" />
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HistorySection;



"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiBriefcase, FiMapPin } from "react-icons/fi";
import SectionLabel from "./SectionLabel";

const TimelineItem = ({ item, index, type }) => (
  <div className="relative ml-2 pl-8 pb-14 border-l border-white/40 group transition-all duration-500 " >
    {/* Glow Dot */}
    <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-cyan-400
     shadow-[0_0_20px_rgba(34,211,238,0.8)] z-50" />

    <div
      className="relative p-6 rounded-2xl 
      bg-white/5 backdrop-blur-xl border border-white/10
      hover:border-cyan-400/30 transition-all duration-300 overflow-hidden"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/20 via-transparent to-transparent transition-all duration-500 " />

      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <span className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-cyan-400">
          {type === "work" ? <FiBriefcase /> : <FiBookOpen />}
          {item.duration}
        </span>

        <span className="flex items-center gap-2 text-[11px] text-gray-500">
          <FiMapPin /> {item.location}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors relative z-10">
        {item.role || item.degree}
      </h3>

      <p className="text-gray-400 font-medium mb-3 relative z-10">
        {item.company || item.institution}
      </p>

      <p className="text-sm text-gray-500 leading-relaxed relative z-10">
        {item.description}
      </p>

      {/* Tech */}
      {item.technologies && (
        <div className="mt-4 flex flex-wrap gap-2 relative z-10">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-3 py-1 rounded-full
              bg-white/5 border border-white/10 text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const HistorySection = () => {
  const education = [
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Square Polytechnic Institute",
      duration: "2023 — Present",
      location: "Bogura, Bangladesh",
      description:
        "Focused on software engineering fundamentals, web development, and system design while building real-world projects.",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer (Projects)",
      company: "Self-Employed / Open Source",
      duration: "2024 — Present",
      location: "Remote",
      description:
        "Building modern web applications using Next.js ecosystem with focus on performance, UI/UX and scalable architecture.",
      technologies: ["Next.js", "React", "Tailwind",],
    },
    {
      role: "Web Development Learner",
      company: "Self Learning",
      duration: "2023 — 2024",
      location: "Bangladesh",
      description:
        "Learned JavaScript, DOM, async programming and built multiple frontend projects.",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <section id="experience" className="relative py-20  text-white overflow-hidden">

      <div className="container relative z-10">
        <SectionLabel> 04 / Education & Experience </SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <FiBriefcase className="text-cyan-400" />
              Experience
            </h2>

            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} type="work" />
            ))}
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <FiBookOpen className="text-purple-400" />
              Education
            </h2>

            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} type="edu" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HistorySection;