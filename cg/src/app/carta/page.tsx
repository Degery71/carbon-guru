import { BurgerMenu } from "@/components/BurgerMenu";
import Image from "next/image";
import Link from "next/link";

export default function Carta() {
  const menuItems = [
    { href: "/carta/pinchos", src: "/pincho1.jpg", alt: "Pinchos" },
    { href: "/carta/compartir", src: "/compartir.png", alt: "Para Compartir" },
    { href: "/carta/ensaladas", src: "/ensalada.jpg", alt: "Ensaladas" },
    { href: "/carta/picar", src: "/picar.jpg", alt: "Para Picar" },
    { href: "/carta/postres", src: "/pincho.jpg", alt: "Postres" },
    { href: "/carta/beber", src: "/beber.jpg", alt: "Para Beber" },
  ];

  return (
    <div className="bg-white overflow-hidden h-full">
      <div className="min-h-full min-w-full bg-pal-grey flex flex-col items-center">
        <BurgerMenu />
        <div className="m-4 flex flex-col items-center w-full max-w-6xl px-4">
          <h1 className="font-extrabold text-white text-[28px] mb-6">CARTA</h1>

          {/* If we use footer */}
          {/* <div className="flex flex-wrap justify-center gap-4 w-full min-h-[calc(100vh-200px)]"> */}
          <div className="flex flex-wrap justify-center gap-4 w-full min-h-[calc(100vh)]">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex-[1_0_calc(100%)] sm:flex-[1_0_calc(50%-8px)] md:flex-[1_0_calc(33.333%-12px)] lg:flex-[1_0_calc(25%-12px)] aspect-square max-w-[350px]"
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:z-10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  {/* Optional overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-lg tracking-wide uppercase">
                      {item.alt}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
