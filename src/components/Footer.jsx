// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { FiGithub, FiMail, FiArrowUpRight, FiPhone } from "react-icons/fi";
// import { FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   const year = new Date().getFullYear();

//   const links = [
//     { name: "GitHub", icon: <FiGithub />, url: "https://github.com/rashidulislamg71/" },
//     { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/rashidul-islam71/" },
//     // { name: "Email", icon: <FiMail />, url: "mailto:jrashidulislam0103@gmail.com", },

//     // WhatsApp
//     {
//       name: "WhatsApp",
//       icon: <FiPhone />,
//       url: "https://wa.me/8801849267660",
//     },
//   ];

//   return (
//     <footer className="relative py-20 text-white overflow-hidden">

//       <div className="relative z-10 container ">

//         {/* Top */}
//         <div
//           className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
//         >

//           {/* Left text */}
//           <div className="max-w-lg">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
//               Ready to bring your next big idea to life?
//             </h2>

//             <p className="text-gray-400 mt-3">
//             I am available for freelance work, exciting collaborations, and full-time roles—whether remote or in-office. Let’s create something impactful!
//             </p>
//           </div>

//           {/* Links */}
//           <div className="flex flex-wrap gap-4">
//             {links.map((item, i) => (
//               <a
//                 key={i}
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"

//                 className="flex items-center gap-2 px-4 py-2 rounded-full
//                 bg-white/5 border border-white/10 text-gray-300
//                 hover:text-white hover:border-cyan-400/40 transition-all"
//               >
//                 {item.icon}
//                 <span className="text-sm">{item.name}</span>
//                 <FiArrowUpRight className="text-xs opacity-50" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="my-12 h-px bg-white/10" />

//         {/* Bottom */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">

//           <p>
//             © {year} <span className="text-white">Md. Rashidul Islam</span>. All rights reserved.
//           </p>

//           <p className="italic text-gray-600">
//             Built with Next.js • Tailwind • Framer Motion
//           </p>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import { FiArrowUpRight, FiGithub, FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import SectionLabel from "./SectionLabel";

const ContactFooter = () => {
  const year = new Date().getFullYear();

  const contacts = [
    {
      title: "Email",
      value: "jrashidulislam0103@gmail.com",
      icon: <FiMail />,
      href: "mailto:jrashidulislam0103@gmail.com",
      color: "hover:border-cyan-400/30",
      iconBg: "bg-cyan-500/10 text-cyan-400",
    },

    {
      title: "WhatsApp",
      value: "+880 1849267660",
      icon: <FiPhone />,
      href: "https://wa.me/8801849267660",
      color: "hover:border-green-400/30",
      iconBg: "bg-green-500/10 text-green-400",
    },

    {
      title: "GitHub",
      value: "github.com/rashidul-islam-7",
      icon: <FiGithub />,
      href: "https://github.com/rashidul-islam-7",
      color: "hover:border-white/20",
      iconBg: "bg-white/10 text-white",
    },

    {
      title: "LinkedIn",
      value: "linkedin.com/in/rashidul-islam71",
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/in/rashidul-islam71",
      color: "hover:border-blue-400/30",
      iconBg: "bg-blue-500/10 text-blue-400",
    },
  ];

  return (
    <section id="footer" className="relative  py-16 md:py-20 mt-5 overflow-hidden text-white">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="container relative z-10">
        {/* Heading */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="max-w-4xl"
        >
          <SectionLabel>Contact</SectionLabel>

          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Let’s Build Something
            <span className="text-gray-500"> Exceptional.</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
            I build modern, scalable, and user-focused web applications using
            Next.js, React, Node.js, Express.js, MongoDB, and modern web
            technologies.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-md text-gray-400 leading-relaxed">
              Open to
              <span className="text-white font-medium"> Full-Time Roles</span>,
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

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`group rounded-2xl border border-white/10 
              bg-white/[0.03] backdrop-blur-xl p-5 transition-all duration-300 
              ${item.color}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`p-3 rounded-xl text-xl shrink-0 ${item.iconBg}`}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">{item.title}</p>

                    <h3 className="font-medium text-sm md:text-base break-all">
                      {item.value}
                    </h3>
                  </div>
                </div>

                <FiArrowUpRight
                  className="group-hover:text-sky-500 shrink-0 transition-transform duration-300
                  group-hover:rotate-45"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-14" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500 text-center md:text-left">
            © {year}{" "}
            <span className="text-white font-medium">Md. Rashidul Islam</span>.
            All rights reserved.
          </p>

          <p className="text-gray-600 italic text-center md:text-right">
            Built with Next.js • Tailwind CSS • AOS Animate
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
