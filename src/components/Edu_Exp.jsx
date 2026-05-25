"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiBriefcase, FiMapPin } from "react-icons/fi";
import SectionLabel from "./SectionLabel";

const TimelineItem = ({ item, index, type }) => (
  <div className="relative ml-2 pl-8 pb-8  border-l border-white/40 group transition-all duration-500 ">
    {/* Glow Dot */}
    <div
      className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-cyan-400
     shadow-[0_0_20px_rgba(34,211,238,0.8)] z-50"
    />

    <div
      data-aos="flip-down"
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
        "Studying core computer science subjects including programming fundamentals (Python, Java), web development, and computer architecture, along with practical lab-based learning and academic projects.",
    },
    {
      degree: "Web Development Training",
      institution: "As-Sunnah Skill Development Institute & Programming Hero",
      duration: "7 months (Frontend) • 6 months (Full Stack Learning)",
      location: "Bangladesh",
      description:
        "Completed frontend development training at As-Sunnah Skill Development Institute and full-stack development training at Programming Hero. Currently focusing on advanced frontend and backend development while building frontend-heavy real-world projects.",
    },
  ];

  const experience = [
    {
      role: "Computer Instructor",
      company: "Square Polytechnic Institute",
      duration: "Jun 2024 — Present",
      location: "Bogura, Bangladesh",
      description:
        "Teaching diploma students computer fundamentals, basic web development, and Python programming based on the official diploma syllabus. Conducting practical lab sessions with hands-on guidance to improve problem-solving and technical skills.",
      technologies: ["Basic Computer", "HTML", "CSS", "JavaScript", "Python"],
    },
    {
      role: "Web Development Learning Volunteer",
      company: "As-Sunnah Skill Development Institute",
      duration: "Jan 2024 — Apr 2024",
      location: "Remote / Online",
      description:
        "Supported web development students in understanding core web technologies and programming concepts through guided learning, practice exercises, and problem-solving assistance.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 text-white overflow-hidden"
    >
      <div className="container relative z-10">
        <span data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <SectionLabel> 04 / Education & Experience </SectionLabel>
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* EXPERIENCE */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <FiBriefcase className="text-cyan-400" />
              Experience
            </h2>

            <div>
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} type="work" />
              ))}
            </div>
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
