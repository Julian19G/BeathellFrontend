import ScrollIndicator from "@/components/ScrollIndicator";
import BackgroundFramer from "@/components/BackgroundFramer";

export default function AldesVsKorrikPage() {
  return (

    <div className="relative h-screen w-screen bg-black text-white">

    {/* Fondo animado */}
    <BackgroundFramer />

       
    <main className="relative z-10 h-full w-full snap-y snap-mandatory overflow-y-scroll scrollbar-none">
      
        {/* Sección 1 */}
        <section className="snap-center flex justify-center items-center min-h-screen">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-red-500">Aldes vs Korrik</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Evento de aniversario B3athell
            </p>
               <ScrollIndicator className="-mb-4" />
          </div>
        </section>

                {/* Sección 1 */}
                <section className="snap-center flex justify-center items-center min-h-screen">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-red-500">Propuesta</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Lo que queremos proponer es celebrar el tercer aniversario de nuestro colectivo que nació un 15 de julio del 2023 y queremos
            celebrarlo trayendo al artista que estadísticamente le fue mejor en el año 2024, también apostando por un artista internacional
            de nacionalidad chilena trayéndolo por primera vez a la ciudad de cali en formato F2F (Face To Face).
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Lanzar la  fiesta con transmisión en vivo en plataformas como kick
            </p>
          </div>
        </section>

        {/* Sección 2 */}
        <section className="snap-center flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-500">Line Up</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
             Aldes F2F Korrik
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
             ALEJO F2F G3ANXLN 
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
             Larsson B2B JNX19
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              JZTR B2B BOHEMIANGROOVE
            </p>

            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Warm Up
            </p>
          </div>
        </section>

        {/* Sección 3 */}
        <section className="snap-center flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-500">Ubicación y fecha</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Frecuencia Violeta
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Para generar mas intriga, misterio y dar un aura mistica en todos los flyers se pondra secret location, si quieres obtener
              la locacion compra tu entrada y te llegara al correo.
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Hacer un correo personalizado y tambien seria genial implementar una especie de entrada fisica ademas de la manilla esto 
              puede incentivar la coleccion de estos por un precio adicional.
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Sabado 12 de Julio
            </p>
          </div>
        </section>


                      {/* Sección 5 */}
                      <section className="snap-center flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-500">Presupuesto</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Nuestro evento tiene presupuestado un costo de 8.000.000 como máximo, el evento actualmente tiene un presupuesto de 7.000.000
            teniendo una diferencia positiva de 1.000.000, Aunque los tickets de Chile a cali pueden reducirse a la mitad si se consigue
           que otro colectivo lo contrate. Reduciendo entre un promedio de 500.000 a 750.000.
            </p>
          </div>
        </section>



         {/* Sección 4 */}
<section className="snap-center flex justify-center items-center min-h-screen">
  <div className="text-center px-4">
    <h2 className="text-3xl font-bold text-red-500">Tickets</h2>

    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
      Esta fiesta está presupuestada por 8.000.000. Intentaremos recuperar esta cifra con 250 boletas, 
      dando un promedio de $32.000 por boleta. Con la comisión de los promotores, el valor por boleta será 
      de $38.000, una cifra óptima para lograr el equilibrio financiero y garantizar una ganancia razonable.
    </p>

    <div className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto text-left">
      <p className="mb-2">Las etapas de boletería serán:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Etapa 1 (Lanzamiento): $40.000</li>
        <li>Etapa 2 (Preventa): $60.000</li>
        <li>Etapa 3 (Taquilla): $80.000</li>
      </ul>
    </div>

    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
      En este evento no tendremos restricción de horario ni backstage.
    </p>
  </div>
</section>

           {/* Sección 5 */}
           <section className="snap-center flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-500">Promocion y Estrategia</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Para nuestro lanzamiento queremos salir ofreciendo 10 entradas gratis y algun accesorio comentando, siguiendo a beathell y a las 
            marcas aliadas, compartiendo las historias haciendo que el lanzamiento llegue con gran impacto y generando expectativa
            en el publico.
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Ofrecer promociones 3x2
            </p>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Cortesías estratégicas con bonos de consumo
            </p>
          </div>
        </section>

        <section className="snap-center flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-500">Guia de contenido</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
