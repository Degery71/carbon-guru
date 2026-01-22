import AutoCarousel from "@/components/AutoCarousel";
import { BurgerMenu } from "@/components/BurgerMenu";
import { LOCATIONS } from "@/data/locations";
import Link from "next/link";

export default function Home() {
  const restaurantImages1 = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];
  const restaurantImages2 = ["/4.jpeg", "/5.jpeg", "/6.jpeg"];
  const foodImages = [
    "/compartir/salchipapa.jpeg",
    "/compartir/perrito.jpeg",
    "/compartir/maduro.jpeg",
    "/compartir/ceviche.jpeg",
    "/compartir/morcilla.jpeg",
    "/pinchos/pinchos.jpeg",
  ];

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="min-h-screen bg-pal-grey flex flex-col items-center">
        {/* Top menu */}
        <BurgerMenu />

        {/* Header Section */}
        <div className="w-full max-w-5xl px-4 py-8 md:py-12">
          <h1 className="text-center text-white text-5xl md:text-6xl font-bold tracking-wide mb-2">
            CARBÓN GURÚ
          </h1>
          <p className="text-center text-white/70 text-lg md:text-xl">
            Auténticos Sabores Latinos
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left - Carousel 1 */}
          <div className="flex flex-col items-center">
            <AutoCarousel images={restaurantImages1} />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold">
                {LOCATIONS[0].name}
              </h3>
              <p className="text-white/60 text-sm mt-1">
                {LOCATIONS[0].address}
              </p>
              {/* <p className="text-white/60 text-sm">{LOCATIONS[0].phone}</p> */}
            </div>
          </div>

          {/* Right - Carousel 2 */}
          <div className="flex flex-col items-center">
            <AutoCarousel images={restaurantImages2} />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold">
                {LOCATIONS[1].name}
              </h3>
              <p className="text-white/60 text-sm mt-1">
                {LOCATIONS[1].address}
              </p>
              {/* <p className="text-white/60 text-sm">{LOCATIONS[1].phone}</p> */}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-full max-w-4xl px-4 flex flex-col items-center">
          {/* Featured Section */}
          <section className="w-full rounded-lg p-6 md:p-8 bg-white/5 border-2 border-yellow-300 backdrop-blur-sm mb-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              ¿Te apetecen unos pinchos a la brasa?
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              En nuestro local podrás probar una gran variedad de platos con el
              más autentico sazón latino a un precio imbatible. Todos traídos
              desde diferentes partes de latinoamérica hasta tu mesa.
            </p>
            <Link
              href={"/donde-estamos"}
              className="inline-block px-8 py-3 bg-white/10 border-2 border-yellow-300 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold"
            >
              Ubicación
            </Link>
          </section>

          {/* Food Highlights */}
          <section className="w-full mb-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              En Carbon Guru hemos seleccionado cuidadosamente nuestras
              especialidades más icónicas, traídas desde los rincones más
              auténticos de Latinoamérica. Cada plato es una experiencia
              culinaria que combina ingredientes de la más alta calidad con
              recetas tradicionales preparadas por nuestros expertos cocineros.
              Desde Puerto Rico hasta Colombia, pasando por Brasil y Venezuela,
              te invitamos a un viaje gastronómico que despertará tus sentidos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-white/5 border-2 border-yellow-300 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-white text-xl font-bold mb-2">
                  🍟 Salchipapa
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Delicioso combo con salchichas y chorizos premium, papas
                  crujientes de la más alta calidad acompañadas de nuestra
                  sabrosísima triada de salsas caseras. Un clásico que no puede
                  faltar.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 border-2 border-yellow-300 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-white text-xl font-bold mb-2">
                  🌭 Perrito Especial
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Preparado por nuestros cocineros con ese toque especial que te
                  sorprenderá en cada bocado. Pan tostado a la perfección con
                  las mejores carnes, aderezos frescos y nuestras salsas
                  exclusivas.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 border-2 border-yellow-300 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-white text-xl font-bold mb-2">
                  🍌 Maduro con Queso
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Dulce plátano macho maduro con mozzarella derretida, una
                  combinación única y deliciosa que fusiona lo salado con lo
                  dulce en una experiencia inolvidable.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 border-2 border-yellow-300 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-white text-xl font-bold mb-2">
                  🦐 Ceviche de Chicharrón
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Los matices cítricos de nuestro exclusivo ceviche de
                  chicharrón que despierta el paladar. Fresco, ligero y cargado
                  de sabor auténtico que te dejará chupándote los dedos.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 border-2 border-yellow-300 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-white text-xl font-bold mb-2">
                  🧅 Morcilla Especial
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Preparada con las mejores técnicas tradicionales, nuestra
                  morcilla es crujiente por fuera y jugosa por dentro. Un manjar
                  para los verdaderos amantes de la cocina latina.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white/5 border-2 border-yellow-300 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-white text-xl font-bold mb-2">
                  🔥 Pinchos a la Brasa
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Nuestro plato estrella: carnes y vegetales selectos asados a
                  la brasa con marinadas auténticas. Cada pincho es una
                  explosión de sabor que representa la esencia de Carbon Guru.
                </p>
              </div>
            </div>
          </section>

          {/* Food Carousel Section */}
          <section className="w-full text-center mb-8 flex flex-col items-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Galería de Platos
            </h2>
            <div className="w-full flex justify-center">
              <AutoCarousel images={foodImages} />
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full rounded-lg p-8 md:p-12 bg-white/5 border-2 border-yellow-300 backdrop-blur-sm text-center mb-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Descubre Nuestra Carta Completa
            </h2>
            <Link
              href={"/carta"}
              className="inline-block px-10 py-4 bg-transparent text-yellow-300 rounded-lg hover:shadow-2xl hover:shadow-yellow-300/50 transform hover:scale-110 transition-all duration-300 font-bold text-lg border-2 border-yellow-300"
            >
              Ver Carta
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
