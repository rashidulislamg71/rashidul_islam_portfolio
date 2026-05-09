"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiMail,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const ContactSection = () => {

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 md:px-16 bg-[#030712] overflow-hidden text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
            Let’s Build <br />
            <span className="text-gray-500">
              Something Exceptional.
            </span>
          </h2>
          <div className="mt-5 max-w-xl">
            <p className="text-gray-500 mt-4 max-w-xl leading-relaxed">
              Currently seeking a team where I can contribute my frontend expertise,
              work on modern web architectures, and grow as a professional engineer.
            </p>
          </div>

        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 relative overflow-hidden">

              <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-cyan-500/10 blur-[100px]" />

              <h3 className="text-3xl font-bold leading-tight">
                Have an idea, startup, or project in mind?
              </h3>

              <p className="text-gray-400 leading-relaxed my-6">
                I build modern, scalable, and user-focused web applications
                using Next.js, React, Node.js, and modern frontend technologies.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">

                {/* Email */}
                <a
                  href="mailto:jrashidulislam0103@gmail.com"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-5 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <FiMail />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Email
                      </p>

                      <h4 className="font-medium">
                        jrashidulislam0103@gmail.com
                      </h4>
                    </div>
                  </div>

                  <FiArrowUpRight className="group-hover:rotate-45 transition-transform" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801849267660"
                  target="_blank"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-5 hover:border-green-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                      <FiPhone />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        WhatsApp
                      </p>

                      <h4 className="font-medium">
                        +880 1849267660
                      </h4>
                    </div>
                  </div>

                  <FiArrowUpRight className="group-hover:rotate-45 transition-transform" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/rashidulislamg71"
                  target="_blank"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/10 text-white">
                      <FiGithub />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        GitHub
                      </p>

                      <h4 className="font-medium">
                        rashidulislamg71
                      </h4>
                    </div>
                  </div>

                  <FiArrowUpRight className="group-hover:rotate-45 transition-transform" />
                </a>
              </div>

              {/* Bottom Text */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500">
                  Open to
                  <span className="text-white font-medium"> Full-Time Roles</span>,
                  <span className="text-cyan-400 font-medium"> Remote Positions</span>,
                  and
                  <span className="text-purple-400 font-medium"> Freelance Projects</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              className="relative rounded-2xl border border-white/10 bg-[#0B1120]/80 backdrop-blur-xl p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px]" />

              <div className="relative z-10">

                <div className="mb-10">
                  <h3 className="text-3xl font-bold mb-3">
                    Start a Conversation
                  </h3>

                  <p className="text-gray-400">
                    Tell me about your project, goals, and vision.
                  </p>
                </div>


                <div>
                  <label className="block text-sm text-gray-400 mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2 mt-5">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="hello@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm text-gray-400 mb-3">
                    Tell Me Everything
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Message..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-bold uppercase tracking-widest text-black transition-all hover:bg-white flex items-center justify-center gap-3 cursor-pointer "
                >
                  Send Message
                  <FiSend />
                </motion.button>

              </div>

              {/* Decorative Text */}
              <div className="absolute -bottom-10 right-0 text-[14rem] font-black
               text-white/[0.02] select-none">
                @
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;