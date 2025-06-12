import AutoCarousel from "@/components/AutoCarousel";
import { BurgerMenu } from "@/components/BurgerMenu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="min-h-screen bg-pal-grey flex flex-col items-center">
        {/* Top menu */}
        <BurgerMenu />

        {/* Carousel */}
        <div className="w-full max-w-6xl px-4">
          <AutoCarousel />
        </div>

        {/* Main content */}
        <div className="w-full max-w-3xl px-4 flex flex-col items-center">
          {/* COMIDA CALLEJERA section */}
          <section className="w-full text-center mt-6 md:mt-8">
            <h1 className="font-bold text-white text-2xl md:text-3xl tracking-wide mb-4">
              COMIDA CALLEJERA
            </h1>
            <p className="font-normal text-white text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </section>

          {/* Image section */}
          <div className="w-full max-w-xl my-6 md:my-8">
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

          {/* QUIENES SOMOS section */}
          <section className="w-full text-center mt-4 mb-8">
            <h1 className="font-bold text-white text-2xl md:text-3xl tracking-wide mb-4">
              QUIENES SOMOS
            </h1>
            <p className="font-normal text-white text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
