

"use client";

import React, { useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiLayers,
  FiInfo,
  FiX,
  FiCheckCircle,
  FiKey,
  FiServer,
  FiCode,
} from "react-icons/fi";
import SectionLabel from "./SectionLabel";
import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    title: "ChefWorld – Recipe Sharing Platform",
    category: "Full Stack",
    desc: "A modern full-stack recipe platform where users can create, discover, purchase with Stripe, and manage recipes with role-based access and premium membership.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "TailwindCSS",
      "Framer Motion",
    ],
    image: "/chefWorld.png",
    liveLink: "https://chef-world.vercel.app",
    clientGithub: "https://github.com/rashidul-islam-7/chef-world",
    serverGithub: "https://github.com/rashidul-islam-7/chef-world-server",
    featured: true,
    details: {
      overview:
        "ChefWorld provides a seamless experience for food enthusiasts to share culinary creations, buy recipes via Stripe, and explore global dishes with premium perks.",
      userFeatures: [
        "Secure Email/Password & Google Authentication",
        "Stripe Payment Gateway for Recipe Purchasing & Premium Membership",
        "Unlimited recipe creation for premium users",
        "Recipe filtering, liking, favoriting & reporting",
      ],
      adminFeatures: [
        "Interactive Admin Dashboard & Analytics Overview",
        "User Management (Block/Unblock users)",
        "Recipe moderation, featuring & deletion",
        "Reviewing reports & transaction history",
      ],
      credentials: {
        email: "rashed@gmail.com",
        password: "Rashed@134",
      },
    },
  },
  {
    title: "SmartCare+ Dr. Appointment Management",
    category: "Full Stack",
    desc: "Backend-focused full-stack doctor appointment system with secure authentication. Implemented CRUD operations, booking, and user dashboard with REST API.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    image: "/smartCare.png",
    liveLink: "https://smart-care-plus.vercel.app",
    clientGithub: "https://github.com/rashidul-islam-7/smart-care-",
    serverGithub: "https://github.com/rashidul-islam-7/smart-care-plus-server",
    details: {
      overview:
        "Full-stack medical booking system providing an intuitive dashboard for patients and doctors.",
      userFeatures: [
        "Doctor search & slot reservation system",
        "RESTful API architecture with JWT authentication",
        "User dashboard for tracking appointment status",
      ],
    },
  },
  {
    title: "BookShelf - Book Borrowing Platform",
    category: "Frontend",
    desc: "Frontend-focused responsive book borrowing platform with secure authentication. Implemented search & filter, private routes, user profile, and borrowing system.",
    tech: ["Next.js", "TailwindCSS", "BetterAuth", "Google Auth"],
    image: "/book-borrowing.png",
    liveLink: "https://bookshelf-seven-pearl.vercel.app",
    clientGithub: "https://github.com/rashidulislamg71/BookShelf",
    details: {
      overview:
        "A feature-packed frontend web app built for seamless book discovery and borrowing management.",
      userFeatures: [
        "Search and real-time category filtering",
        "Private routing and user profile management",
        "Authentication via BetterAuth and Google",
      ],
    },
  },
  {
    title: "Trust-Farms - Organic Food E-Commerce",
    category: "Frontend",
    desc: "Organic food e-commerce platform with category filtering, authentication, dynamic cart system, and real-time quantity/price calculations.",
    tech: ["React.js", "CSS3", "Firebase Auth"],
    image: "/trust-farm.png",
    liveLink: "https://trust-farms.vercel.app",
    clientGithub: "https://github.com/rashidul-islam-7/trust-farms",
    details: {
      overview:
        "A responsive e-commerce platform focused on organic food items with dynamic cart management.",
      userFeatures: [
        "Automatic price calculation per KG / Quantity",
        "Firebase Authentication integration",
        "Smooth category-wise shopping experience",
      ],
    },
  },
  // {
  //   title: "Get.car - Demo Car Selling Website",
  //   category: "Frontend",
  //   desc: "A responsive car e-commerce platform with authentication, modern UI/UX, product filtering, and add-to-cart functionality.",
  //   tech: ["React.js", "CSS3", "Firebase Auth"],
  //   image: "/getcar_img.png",
  //   liveLink: "https://getcar-mu.vercel.app",
  //   clientGithub: "https://github.com/rashidul-islam-7/get.car/tree/main",
  //   details: {
  //     overview:
  //       "Car dealership demo application built with smooth UI transitions and product filtering.",
  //     userFeatures: [
  //       "Car filtering by category and specs",
  //       "Add-to-cart & booking interaction",
  //     ],
  //   },
  // },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) =>
    filter === "All" ? true : project.category === filter,
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden mt-5 pt-16 md:pt-20 text-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div data-aos="fade-up">
          <SectionLabel>03 / Selected Work</SectionLabel>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            Featured{" "}
            <span className="text-gray-500 italic font-light">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            A collection of modern web applications built with performance,
            scalability, and immersive user experience.
          </p>

          {/* CATEGORY FILTER TABS */}
          <div className="flex items-center gap-3 mt-8">
            {["All", "Frontend", "Full Stack"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-300 border ${
                  filter === tab
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/10"
                    : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`relative rounded-3xl border bg-white/5 backdrop-blur-xl overflow-hidden group hover:border-cyan-400/40 transition-all duration-500 flex flex-col justify-between ${
                project.featured
                  ? "border-cyan-500/40 shadow-xl shadow-cyan-500/10 md:col-span-2 lg:col-span-1"
                  : "border-white/10"
              }`}
            >
              {/* FEATURED BADGE */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  ★ Featured Project
                </div>
              )}

              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-white/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                    No Preview Available
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-90" />
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 flex flex-col flex-grow relative z-10 -mt-8">
                {/* TOP BAR */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] tracking-[0.25em] text-cyan-400 uppercase font-semibold">
                    {project.category}
                  </span>

                  {/* ACTION LINKS */}
                  <div className="flex items-center gap-2 mt-6">
                    {/* LIVE LINK */}
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-xs tracking-wider text-cyan-400 font-medium flex items-center gap-1"
                      >
                        <FiArrowUpRight size={14} /> Live
                      </Link>
                    )}

                    {/* FRONTEND GITHUB */}
                    {project.clientGithub && (
                      <Link
                        href={project.clientGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300 text-[11px] text-gray-400 flex items-center gap-1"
                        title="Client / Frontend Repository"
                      >
                        <FiCode size={13} /> Client
                      </Link>
                    )}

                    {/* BACKEND GITHUB */}
                    {project.serverGithub && (
                      <Link
                        href={project.serverGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300 text-[11px] text-gray-400 flex items-center gap-1"
                        title="Server / Backend Repository"
                      >
                        <FiServer size={13} /> Server
                      </Link>
                    )}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-cyan-300 transition duration-300">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.desc}
                </p>

                {/* ACTION & TECH STACK */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-cyan-400/20 text-cyan-200 bg-cyan-500/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* DETAILS BUTTON */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl border border-white/10 hover:border-cyan-400/40 bg-white/5 hover:bg-cyan-500/10 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FiInfo size={15} /> View Full Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE MORE BUTTON */}
        <div className="flex justify-center md:justify-end mt-14">
          <Link
            href="https://github.com/rashidul-islam-7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-center gap-3 px-6 py-3 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl text-cyan-300 font-medium tracking-wide shadow-lg shadow-cyan-500/10 transition-all duration-500 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black"
          >
            <span>Explore More Projects</span>
            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cyan-500/30 bg-zinc-950 p-6 sm:p-8 text-white shadow-2xl">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition cursor-pointer"
            >
              <FiX size={20} />
            </button>

            {/* MODAL HEADER */}
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              {selectedProject.category} Project
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
              {selectedProject.title}
            </h2>

            {/* OVERVIEW */}
            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              {selectedProject.details?.overview || selectedProject.desc}
            </p>

            {/* ADMIN CREDENTIALS BOX */}
            {selectedProject.details?.credentials && (
              <div className="mt-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <FiKey size={14} /> Admin Credentials for Demo Testing:
                </div>
                <div className="text-xs sm:text-sm font-mono text-gray-200">
                  <p>
                    Email:{" "}
                    <span className="text-cyan-300">
                      {selectedProject.details.credentials.email}
                    </span>
                  </p>
                  <p>
                    Password:{" "}
                    <span className="text-cyan-300">
                      {selectedProject.details.credentials.password}
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* KEY FEATURES */}
            {selectedProject.details?.userFeatures && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Key Features & Capabilities:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.details.userFeatures.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <FiCheckCircle
                        className="text-cyan-400 shrink-0 mt-0.5"
                        size={16}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {selectedProject.details?.adminFeatures?.map((feat, idx) => (
                    <li
                      key={`admin-${idx}`}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <FiCheckCircle
                        className="text-cyan-400 shrink-0 mt-0.5"
                        size={16}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* REPOSITORIES & LINKS */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-3">
                {selectedProject.clientGithub && (
                  <Link
                    href={selectedProject.clientGithub}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-cyan-300 flex items-center gap-2"
                  >
                    <FiCode size={15} /> Client Repo
                  </Link>
                )}
                {selectedProject.serverGithub && (
                  <Link
                    href={selectedProject.serverGithub}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-medium text-cyan-300 flex items-center gap-2"
                  >
                    <FiServer size={15} /> Server Repo
                  </Link>
                )}
              </div>

              {selectedProject.liveLink && (
                <Link
                  href={selectedProject.liveLink}
                  target="_blank"
                  className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition"
                >
                  <FiArrowUpRight size={16} /> Visit Live Site
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
