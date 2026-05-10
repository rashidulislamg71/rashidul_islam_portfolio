"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 200) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <div className="">
        <div className="px-5 md:px-16 navbar bg-[#020617]/20 backdrop-blur-xl ">

          {/* Left */}
          <div className="navbar-start">

            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className=" text-white hover:bg-white/10"
              >
                <FiMenu size={24} />
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-4 z-[100] p-3 shadow-2xl bg-black/90 backdrop-blur-xl rounded-2xl w-52 border border-white/10 space-y-1"
              >
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`rounded-xl transition-all duration-300 ${activeSection === link.href.replace("#", "")
                        ? "bg-white text-black"
                        : "text-white hover:bg-white/10"
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <a href="#home" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-cover"
              />

              <h1 className="hidden md:block text-xl -ml-4 font-bold text-white">
                Rashidul Islam
              </h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1 flex gap-10 text-white font-medium">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-lg px-1 transition-all duration-200 ${activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-white/30 transition-all duration-200 ${activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0"
                      }`}
                  ></span>
                </a>
              ))}

            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end">
            <a
              href="#contact"
              className="btn rounded-sm bg-white text-black border hover:border-white hover:bg-white/0 hover:text-white transition-all duration-300"
            >
              Hire Me
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;