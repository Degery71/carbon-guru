import AutoCarousel from "@/components/AutoCarousel";
import { BurgerMenu } from "@/components/BurgerMenu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* mobile frame */}
      <div className="bg-white overflow-hidden w-[390px] h-full">
        {/* background  */}
        <div className="min-h-full min-w-full bg-pal-grey flex flex-col items-center">
          {/* top menu */}
          <BurgerMenu />
          <AutoCarousel />
          <h1 className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[16.8px mt-4">
            Comida Callejera
          </h1>
          <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[16.8px] mx-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          {/* Perhaps we could put a picture of the kitchen and chefs */}
          <div className="w-80 h-44 mt-2 relative aspect-auto md:aspect-video rounded-xl overflow-hidden border-2 flex justify-center my-4">
            <Image
              src="/pincho.jpg"
              fill={true}
              alt="Street food pincho"
              className="object-cover"
            />
            {/* Text overlay (always visible) */}
            <Link
              href={"/card"}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p className="text-white font-bold text-xl bg-black/50 px-4 py-2 rounded-lg">
                Carta
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
