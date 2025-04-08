"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // Ícono de menú
import B3ATHELLLogo from "@/components/B3ATHELLLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white px-6 py-1 border-b border-gray-700 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xs font-extrabold tracking-wide neon-glow">
  <div className="scale-75 md:scale-60">
    <B3ATHELLLogo />
  </div>
</Link>


        {/* Menú móvil */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={30} />
        </button>

        {/* Links de navegación */}
        <div className={`lg:flex space-x-8 text-sm   font-semibold ${isOpen ? "block" : "hidden"} bg-black lg:bg-transparent p-4 lg:p-0 absolute lg:static top-full left-0 w-full lg:w-auto`}>
          <Link href="/" className="nav-link hover:red">Inicio</Link>
          <Link href="/events" className="nav-link">Eventos</Link>
          <Link href="/events" className="nav-link">Artistas</Link>
          <Link href="/transmisiones" className="nav-link">Transmisiones</Link>
          <Link href="/multimedia" className="nav-link">Multimedia</Link>
          <Link href="/projects" className="nav-link">Proyectos</Link>
          <Link href="/contacto" className="nav-link">Contacto</Link>
          <Link href="/about" className="nav-link">Sobre Nosotros</Link>
        </div>
      </div>

      {/* Estilos adicionales */}
      <style jsx>{`
        .nav-link {
          position: relative;
          padding: 5px 10px;
          transition: color 0.3s ease-in-out;
        }
        .nav-link:hover {
          color: #ff0000;
          text-shadow: 0 0 10px #ff0000;
        }
        .neon-glow {
          text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000;
        }
      `}</style>
    </nav>
  );
}
