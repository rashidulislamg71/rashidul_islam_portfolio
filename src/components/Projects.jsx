"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiLayers,
} from "react-icons/fi";
import SectionLabel from "./SectionLabel";
import Link from "next/link";
import Image from "next/image";
import { ProjectModal } from "./ProjectModal";

const ProjectsSection = () => {
  const projects = [
    {
      title: "BookShelf- Book Borrowing Platform",
      category: "Frontend",
      desc: "Frontend-focused responsive book borrowing platform with secure authentication. Implemented search & filter, private routes, user profile, and borrowing system.",
      tech: ["Next.js", "TailwindCSS", "BetterAuth", "Google Authentication"],
      image: "/bookShelf_project_img.png",
      liveLink: "https://bookshelf-seven-pearl.vercel.app",
      github: "https://github.com/rashidulislamg71/BookShelf",
    },

    {
      title: "SmartCare+ Dr. Appointment Management",
      category: "Full Stack",
      desc: "Backend-focused full-stack doctor appointment system with secure authentication. Implemented CRUD operations, search, booking, and user dashboard. Integrated JWT authentication, Google login, and protected routes. Built a REST API with a responsive and seamless user experience.",
      tech: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind",
        "Authentication",
      ],
      image: "/jobtracker.png",
      liveLink: "https://smart-care-plus.vercel.app",
      github: "https://github.com/rashidul-islam-7/smart-care-",
    },
    {
      title: "Square Polytechnic - Official Website ",
      category: "Frontend",
      desc: "Institutional platform optimized for student management system.",
      tech: ["React.js", "TailwindCSS"],
      image: "/square_polytechnic.png",
      liveLink: "https://bookshelf-seven-pearl.vercel.app",
      github: "https://github.com/rashidulislamg71/BookShelf",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden mt-5  pt-16 md:pt-20 text-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <SectionLabel>03 / Selected Work</SectionLabel>

          <h2 className="autoShow text-3xl md:text-4xl font-bold tracking-tighter">
            Featured{" "}
            <span className="text-gray-500 italic font-light">Projects</span>
          </h2>

          <p className="autoShow text-gray-400 mt-4 max-w-2xl leading-relaxed">
            A collection of modern web applications built with performance,
            scalability, and immersive user experience.
          </p>
        </div>

        {/* GRID WITH FRAMER MOTION POP */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {projects.map((project, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              key={index}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group hover:border-cyan-400/40 transition-all duration-500"
            >
              {/* TOP GLOW FIX */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-liner-to-br from-cyan-500 via-transparent to-transparent transition duration-700" />
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/20 via-transparent to-transparent transition-all duration-500 " />

              <div className="" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div
                  className="opacity-30 absolute bottom-0 
                right-0 -z-10 "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={400}
                    width={400}
                  />
                </div>

                <div className="relative col-span-8 z-10 p-5 md:p-6 flex flex-col h-full">
                  {/* TOP AREA */}
                  <div className="flex items-center justify-between mb-8">
                    {/* ICON - DaisyUI Alert style fallback badge */}
                    <div className="p-3 rounded-2xl bg-white/5 text-cyan-400 border border-white/10">
                      <FiLayers size={18} />
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex items-center gap-3">
                      {/* LIVE BUTTON */}
                      {project.liveLink && project.liveLink !== "#" && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-xs sm:btn-sm rounded-full bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase tracking-widest text-cyan-400 font-normal normal-case"
                        >
                          <FiArrowUpRight />
                          Live
                        </Link>
                      )}

                      {/* GITHUB BUTTON */}
                      {project.github && project.github !== "#" && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-cyan-300 transition-all duration-300 text-xs uppercase tracking-widest"
                        >
                          <FiGithub className="group-hover:scale-110 transition" />
                          Github
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* CATEGORY */}
                  <p className="text-xs tracking-[0.3em] text-cyan-400 uppercase mb-2">
                    {project.category}
                  </p>

                  {/* TITLE */}
                  <h3 className="text-2xl  font-semibold mb-2 group-hover:text-cyan-300 transition duration-300">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                    {project.desc}
                  </p>

                  {/* TECH STACK - DaisyUI Badges used smoothly */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="badge badge-outline border-cyan-400/20 text-cyan-50 text-[11px] py-3 px-3 bg-cyan-500/5"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FLOATING GLOW */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        <div className="flex justify-center md:justify-end mt-14">
          <button
            className="
      group relative overflow-hidden
      flex items-center gap-3
      px-6 py-3
      rounded-xl
      border border-cyan-400/20
      bg-white/5 backdrop-blur-xl
      text-cyan-300
      font-medium tracking-wide
      shadow-lg shadow-cyan-500/10
      transition-all duration-500
      hover:border-cyan-400/50
      hover:bg-cyan-400
      hover:text-black
      cursor-pointer
    "
          >
            {/* Text */}
            <span className="relative z-10">Explore More Projects</span>

            {/* Icon */}
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              <FiArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
