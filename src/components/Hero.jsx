"use client";

import { FiArrowDown, FiArrowUpRight, FiGithub } from "react-icons/fi";

import { SiNextdotjs, SiReact, SiTailwindcss, SiMongodb } from "react-icons/si";

import Image from "next/image";
import { FaArrowDown, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import PulseBadge from "./PulseBadge";
import DownloadButton from "./DownloadButton";
import { LuHeartHandshake } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id="home"
      className="md:pt-40 py-25 relative
    overflow-hidden "
    >
      {/* Main Content */}
      <div className=" relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 md:gap-20 ">
          {/* Left Content */}
          <div>
            {/* Available Badge */}
            <div data-aos="zoom-in" className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-5 md:mb-8">
              <PulseBadge />

              <span className="text-xs tracking-[0.3em] uppercase text-blue-400 font-semibold">
                Available for Hire
              </span>
            </div>

            {/* Heading */}
            <p
              className="text-gray-400 text-lg md:text-xl
             leading-9 "
            >
              Assalamu Alikum. <br />
              <span className="flex items-center gap-1">
                Hi...
                <span className="bg-linear-to-r from-red-500 to-pink-500 p-1 rounded-full">
                  <LuHeartHandshake className="text-white animate-pulse" />
                </span>
              </span>
            </p>
            <h1 className="text-3xl md:text-4xl font-black leading-tight text-white">
              <span>I'm </span>
              Md. Rashidul
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                {" "}
                Islam
              </span>
            </h1>

            {/* Sub Text */}
            <p
              className="mt-8 text-gray-400 text-lg md:text-lg
             leading-9 max-w-2xl"
            >
              <span className=" font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 ">
                Frontend Developer
              </span>{" "}
              building modern, responsive and high-performance web applications
              with{" "}
              <span className="text-white font-medium">
                JavaScript, React.js & Next.js{" "}
              </span>
              , and beautiful modern UI/UX experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <DownloadButton>Download Resume</DownloadButton>

              {/* Gradient Button */}
              <Link
                href="#projects"
                className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#06b6d4_50%,#3b82f6_100%)]" />

                <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-8 text-sm font-semibold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900">
                  View Work
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>

              {/* Github Button */}
              {/* <Link target="_blank" href={"https://github.com/rashidulislamg71/"}>
                <button className="cursor-pointer group h-12 px-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 text-white flex items-center gap-2 backdrop-blur-xl hover:-translate-y-1 hover:scale-105 active:scale-95">

                  <FiGithub className="transition-transform duration-300 group-hover:rotate-12" />

                  GitHub
                </button>

              </Link> */}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-12 text-2xl text-gray-500">
              <Link
              data-aos="zoom-in-right"
                target="_blank"
                href="https://github.com/rashidul-islam-7"
                className="hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FiGithub />
              </Link>

              {/* <Link
                href="#"
                className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300"
              >
                <IoLogoYoutube />
              </Link> */}

              <Link
              data-aos="zoom-in"
                target="_blank"
                href="https://www.linkedin.com/in/rashidul-islam71"
                className="hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedinIn />
              </Link>

              <Link data-aos="zoom-in-left"
                target="_blank"
                href="https://www.facebook.com/rashidulislam72"
                className="hover:text-blue-500 hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebookSquare />
              </Link>
            </div>

            <div className="h-[1px] bg-gray-50/20 mt-5"></div>

            {/* Tech Stack */}
            <div data-aos="zoom-in" className="flex items-center gap-8 mt-8 text-4xl text-gray-600">
              <SiNextdotjs className="hover:text-white transition-all duration-300 hover:scale-110" />

              <SiReact className="hover:text-cyan-400 transition-all duration-300 hover:scale-110" />

              <SiTailwindcss className="hover:text-sky-400 transition-all duration-300 hover:scale-110" />

              <SiMongodb className="hover:text-green-500 transition-all duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Right Side */}
          <div data-aos="zoom-in-left" className="relative flex justify-center ">
            {/* Right Side Image */}
            <Image
              width={350}
              height={350}
              src="/rashidul_islam.png"
              alt="Rashidul Islam"
              className="animate-pulse h-[260px] w-[270px] rounded-2xl transition-all duration-500 hover:scale-105 border-[10px] border-blue-300/10"
            />
            <div>
              <span><FiArrowDown /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
