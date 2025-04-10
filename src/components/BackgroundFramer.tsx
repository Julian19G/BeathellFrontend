"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function CosmicBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1.5,
        duration: Math.random() * 6 + 2,
        delay: Math.random() * 5,
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black z-0">
      {/* Fondo base galáctico animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Nebulosa central en pulso */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.3) 0%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Nubes cósmicas verticales */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-600/10 to-transparent"
        animate={{
          opacity: [0.1, 0.25, 0.1],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Destello galáctico central */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/30 blur-xl"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

<motion.div
  className="absolute"
  style={{
    width: "300%",
    height: "300%",
    top: "-100%",
    left: "-100%",
    background: "conic-gradient(from 90deg at 50% 50%, rgba(124, 58, 237, 0.05), rgba(124, 58, 237, 0.03), rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.03), rgba(124, 58, 237, 0.05))",
    filter: "blur(4px)",
  }}
  animate={{
    rotate: [0, 360],
  }}
  transition={{
    duration: 60,
    repeat: Infinity,
    ease: "linear",
  }}
/>




      {/* Estrellas con parpadeo */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.1, 0.9, 0.1],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Polvo estelar */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(148, 163, 184, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Brillo de agujero negro */}
      <motion.div
        className="absolute top-1/3 left-2/3 w-64 h-64 -ml-32 -mt-32 rounded-full blur-xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(219, 39, 119, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}


