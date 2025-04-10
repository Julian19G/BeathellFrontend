"use client"; // Asegura que este componente se renderiza en el cliente

import { useEffect } from "react";

export default function B3ATHELLLogo() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h1 className="text-4xl md:text-7xl font-bold infernal-text">
        <span className="text-red-500 neon-glow">B3ATHELL</span>
      </h1>

      <style jsx>{`
        .infernal-text {
          font-family: "Metal Mania", cursive;
          text-shadow: 4px 4px 10px rgba(255, 0, 0, 0.9), 0 0 20px rgba(255, 0, 0, 0.8);
          letter-spacing: 3px;
        }
        .neon-glow {
          text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #990000;
        }
      `}</style>
    </div>
  );
}
