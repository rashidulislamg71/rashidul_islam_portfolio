"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

const generateRandomNumber = (min, max) => Math.random() * (max - min) + min;

const GalaxyBackground = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, () => ({
        size: generateRandomNumber(1, 4),
        top: `${generateRandomNumber(0, 100)}%`,
        left: `${generateRandomNumber(0, 100)}%`,
        duration: generateRandomNumber(2, 6),
      })),
    []
  );

  const meteors = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        top: `${generateRandomNumber(0, 50)}%`,
        left: `${generateRandomNumber(0, 100)}%`,
        duration: generateRandomNumber(3, 5),
        delay: generateRandomNumber(0, 10),
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#020617] z-0 pointer-events-none">

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:50px_50px]" />

      {/* Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            boxShadow: `0 0 ${star.size * 4}px rgba(255,255,255,0.8)`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: meteor.top,
            left: meteor.left,
          }}
          animate={{
            x: [0, -1200],
            y: [0, 1200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: meteor.duration,
            repeat: Infinity,
            delay: meteor.delay,
            ease: "linear",
          }}
        >
          <div className="w-[100px] h-[2px] rotate-[-45deg] bg-gradient-to-r from-transparent via-cyan-300/40 to-white/40 blur-[1px]" />
        </motion.div>
      ))}

      {/* Big Galaxy Glow */}
      <motion.div
        className="absolute top-[-250px] left-[-250px] w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[150px]"
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Nebula */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/5 blur-[120px] rounded-full" />
    </div>
  );
};

export default GalaxyBackground;