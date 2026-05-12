"use client";

import React from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiMail,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import SectionLabel from "./SectionLabel";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-20 text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto ">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <SectionLabel>05 / Contact</SectionLabel>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1]">
            Let’s Build <br />
            <span className="text-gray-500">
              Something Exceptional.
            </span>
          </h2>

          <div className="mt-5 max-w-3xl">
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Currently seeking a team where I can contribute my frontend
              expertise, work on modern web architectures, and grow as a
              professional engineer.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <div
              className="h-full rounded-2xl border border-white/20 
              bg-[#0B1120]/80 backdrop-blur-xl p-5 sm:p-7 lg:p-10 
              relative overflow-hidden bg-gradient-to-br
              from-cyan-500/20 via-transparent"
            >
              <div className="absolute top-0 right-0 w-[220px] sm:w-[250px] h-[220px] sm:h-[250px] bg-cyan-500/10 blur-[100px]" />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Have an idea, startup, or project in mind?
                </h3>

                <p className="text-gray-400 leading-relaxed my-5 sm:my-6 text-sm sm:text-base">
                  I build modern, scalable, and user-focused web applications
                  using Next.js, React, Node.js, and modern frontend
                  technologies.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:jrashidulislam0103@gmail.com"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4 sm:p-5 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="shrink-0 p-3 rounded-xl bg-cyan-500/10 text-cyan-400 text-lg">
                        <FiMail />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm text-gray-500">Email</p>

                        <h4 className="font-medium text-sm sm:text-base break-all">
                          jrashidulislam0103@gmail.com
                        </h4>
                      </div>
                    </div>

                    <FiArrowUpRight className="shrink-0 group-hover:rotate-45 transition-transform" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/8801849267660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4 sm:p-5 hover:border-green-400/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="shrink-0 p-3 rounded-xl bg-green-500/10 text-green-400 text-lg">
                        <FiPhone />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">WhatsApp</p>

                        <h4 className="font-medium text-sm sm:text-base">
                          +880 1849267660
                        </h4>
                      </div>
                    </div>

                    <FiArrowUpRight className="shrink-0 group-hover:rotate-45 transition-transform" />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/rashidulislamg71"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4 sm:p-5 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="shrink-0 p-3 rounded-xl bg-white/10 text-white text-lg">
                        <FiGithub />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm text-gray-500">GitHub</p>

                        <h4 className="font-medium text-sm sm:text-base break-all">
                          github.com/rashidulislamg71
                        </h4>
                      </div>
                    </div>

                    <FiArrowUpRight className="shrink-0 group-hover:rotate-45 transition-transform" />
                  </a>
                </div>

                {/* Bottom Text */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Open to
                    <span className="text-white font-medium">
                      {" "}
                      Full-Time Roles
                    </span>
                    ,
                    <span className="text-cyan-400 font-medium">
                      {" "}
                      Remote Positions
                    </span>
                    , and
                    <span className="text-purple-400 font-medium">
                      {" "}
                      Freelance Projects
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <form
              className="relative rounded-2xl border border-white/20 
              bg-[#0B1120]/80 backdrop-blur-xl 
              p-5 sm:p-7 lg:p-12 overflow-hidden 
              bg-gradient-to-br from-cyan-500/20 via-transparent"
            >
              <div className="absolute bottom-0 right-0 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-blue-500/10 blur-[120px]" />

              <div className="relative z-10">
                <div className="mb-8 sm:mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    Start a Conversation
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base">
                    Tell me about your project, goals, and vision.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-400 mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 
                    bg-white/[0.03] px-4 sm:px-5 py-3 
                    outline-none focus:border-cyan-400 
                    transition text-sm sm:text-base"
                  />
                </div>

                {/* Email */}
                <div className="mt-5">
                  <label className="block text-sm text-gray-400 mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="hello@example.com"
                    className="w-full rounded-xl border border-white/10 
                    bg-white/[0.03] px-4 sm:px-5 py-3 
                    outline-none focus:border-cyan-400 
                    transition text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label className="block text-sm text-gray-400 mb-3">
                    Tell Me Everything
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Message..."
                    className="w-full rounded-xl border border-white/10 
                    bg-white/[0.03] px-4 sm:px-5 py-4 
                    outline-none focus:border-cyan-400 
                    transition resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="mt-8 w-full rounded-xl bg-cyan-600 
                  text-white py-3.5 font-bold uppercase 
                  tracking-widest hover:text-black 
                  transition-all hover:bg-white 
                  flex items-center justify-center gap-3 
                  cursor-pointer text-sm sm:text-base"
                >
                  Send Message
                  <FiSend />
                </button>
              </div>

              {/* Decorative Text */}
              <div
                className="absolute -bottom-6 sm:-bottom-10 right-0 
                text-[7rem] sm:text-[10rem] lg:text-[14rem] 
                font-black text-white/[0.02] select-none"
              >
                @
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;