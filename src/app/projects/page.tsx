"use client";

import Navbar from "@/components/Navbar";
import BackgroundFramer from "@/components/BackgroundFramer";
import Link from "next/link";
import BotonVermas from "@/components/BotonVermas";
import ScrollIndicator from "@/components/ScrollIndicator";
import BotonIrArriba from "@/components/BotonIrArriba"; // 👈 Importamos el nuevo botón

export default function ProjectsPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      {/* 🔥 Background en capa fija detrás de todo */}
      <BackgroundFramer />

      {/* 🚀 Navbar y contenido sobre el fondo */}
      <Navbar />

      <main className="relative z-10 flex-grow overflow-y-scroll snap-y snap-mandatory h-screen scrollbar-none">
        {/* Sección 1 */}
        <section className="snap-center flex justify-center items-center min-h-screen text-white p-6">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold neon-glow">
              Nuestros <span className="text-red-500">proyectos</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Exploramos el <span className="text-red-500">techno industrial</span> a través de experiencias inmersivas, eventos y colaboraciones innovadoras.
            </p>
            <ScrollIndicator className="-mb-4" />
          </div>
        </section>

        {/* Sección 2 */}
        <section className="snap-center flex justify-center items-center min-h-screen text-white p-6 bg-transparent">
          <div className="text-center">
            <h2 className="text-3xl font-bold neon-glow text-red-500">Aldes vs Korrik</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Conoce la ficha técnica y todo acerca del evento.
            </p>
            <div className="mt-8">
              <Link href="/projects/aldesvskorrik" passHref>
                <BotonVermas text="Ver proyecto" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ⬆️ Botón para volver arriba */}
      <BotonIrArriba />
    </div>
  );
}
