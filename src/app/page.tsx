"use client"
import B3ATHELLLogo from "@/components/B3ATHELLLogo";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* 🎥 Video de fondo */}
      <VideoBackground />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <section className="flex flex-col items-center justify-center flex-grow text-center">
          {/* 🔥 Logo reutilizable */}
          <B3ATHELLLogo />

          {/* Subtítulo */}
          <p className="mt-4 text-lg tracking-wide fade-in">
            Explora nuestros eventos de <span className="text-red-500">techno industrial</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
