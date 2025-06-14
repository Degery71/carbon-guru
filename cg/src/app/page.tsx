import AutoCarousel from "@/components/AutoCarousel";
import { BurgerMenu } from "@/components/BurgerMenu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const restaurantImages = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];
  const foodImages = [
    "/salchipapa.jpeg",
    "/perrito.jpeg",
    "/perrito1.jpeg",
    "/maduro.jpeg",
    "/ceviche.jpeg",
    "/morcilla.jpeg",
    "/pinchos/pinchos.jpeg",
  ];

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="min-h-screen bg-pal-grey flex flex-col items-center">
        {/* Top menu */}
        <BurgerMenu />

        {/* Restaurant Carousel */}
        <AutoCarousel images={restaurantImages} />

        {/* Main content */}
        <div className="w-full max-w-3xl px-4 flex flex-col items-center">
          {/* Food section */}
          <section className="w-full text-center mt-4 md:mt-8">
            <h1 className="font-bold text-white text-4xl md:text-5xl tracking-wide mb-4">
              ¿Te apetecen unos pinchos a la brasa?
            </h1>
            <p className="font-normal text-white text-xl md:text-base leading-relaxed max-w-2xl mx-auto">
              En nuestro local podrás probar una gran variedad de platos con el
              más autentico sazón latino a un precio imbatible, todos traidos
              desde diferentes partes de latinoamerica hasta tu mesa para que
              puedas degustar tal y como los podrías probar en cualquier
              restaurante de Colombia, Venezuela, Brasil y muchos más!
            </p>
            <Link
              href={"/donde-estamos"}
              className="group block max-w-2xl mx-auto mt-8 p-4 md:p-6 bg-black/30 backdrop-blur-sm border-2 border-yellow-500/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-400 hover:bg-black/40 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-white font-medium text-lg md:text-xl italic leading-relaxed group-hover:text-yellow-50 transition-colors">
                  Acercate a nuestro local y atrevete a probar los sabores más
                  <span className=" m-2 not-italic font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    latinos de Gran Canaria.
                  </span>
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <span className="inline-flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Descubre nuestra ubicación
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </section>

          {/* Card section */}
          <section className="w-full text-center mt-4 mb-4">
            <h1 className="font-bold text-white text-4xl md:text-5xl tracking-wide mb-4">
              ¿Qué te apetece probar hoy?
            </h1>
            <p className="font-normal text-white text-xl md:text-base leading-relaxed max-w-2xl mx-auto">
              Hmmmm... tal vez te gustaría nuestro delicioso
              salchipapa/choripapa con salchichas/chorizos y papas de la más
              alta calidad, además nuestra sabrosisima triada de salsas caseras.
              ¿O tal vez seas mas de perrito? Si es así, prueba nuestro perrito
              especial preparado por nuestros expertos cocineros que saben como
              darle ese toque especial que tanto te gusta. Igual te gustan los
              sabores más criollos, prueba entonces el combo de nuestro dulce
              plátano macho maduro que tan bién contrasta con los matices
              citricos de nuestro un ceviche de chicharrón que sabemos que te
              dejaran chupandote los dedos.
            </p>
          </section>
          {/* Carousel */}
          <AutoCarousel images={foodImages} />
          <div className="w-full max-w-xl my-4 md:my-8">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border-2 border-white/30">
              <Image
                src="/pincho.jpg"
                fill={true}
                alt="Street food pincho"
                className="object-cover"
              />
              <Link
                href={"/carta"}
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 hover:bg-black/50"
              >
                <p className="text-white font-bold text-xl md:text-2xl bg-black/70 px-6 py-3 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform">
                  CARTA
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
