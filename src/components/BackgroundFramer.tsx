"use client";

import { motion } from "framer-motion";

export default function BackgroundFramer() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* 🔥 Nebulosa en expansión */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white-900/40 via-black to-black"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* ⚡ Tormenta de energía oscura */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-indigo-800/30 to-black opacity-80 mix-blend-overlay"
        animate={{
          opacity: [0.85, 0.3, 0.05],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* 🌪 Vórtices gravitacionales */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle, rgba(255, 255, 255, 0.51) 5%rgba(251, 249, 249, 0)0) 80%)]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 0.4, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* 🌠 Destellos erráticos (efecto de estrellas parpadeantes) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-700/20 to-transparent opacity-20"
        animate={{
          x: ["0%", "2%", "-2%", "0%"],
          opacity: [0.8, 0.8, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* 🌀 Distorsión del espacio-tiempo */}
      <motion.div
        className="absolute inset-0 bg-black mix-blend-soft-light"
        animate={{
          opacity: [0.8, 0.2, 0.05],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
