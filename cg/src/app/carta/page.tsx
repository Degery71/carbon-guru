import { BurgerMenu } from "@/components/BurgerMenu";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <>
      {/* mobile frame */}
      <div className="bg-white overflow-hidden h-full">
        {/* background  */}
        <div className="min-h-full min-w-full bg-pal-grey flex flex-col items-center">
          {/* top menu */}
          <BurgerMenu />
          <div className="m-4 flex flex-col items-center">
            <div className="[font-family:'Coda_Caption-ExtraBold',Helvetica] font-extrabold text-white text-[28px] ">
              CARTA
            </div>
            <div className="flex flex-wrap justify-center content-center gap-8">
              <Link href={"/carta/pinchos"} className="contain-content">
                <Image
                  src="/pincho1.jpg"
                  width={400}
                  height={400}
                  alt="Pinchos"
                />
              </Link>
              <Link href={"/carta/compartir"} className="contain-content">
                <Image
                  src="/compartir.png"
                  width={400}
                  height={400}
                  alt="Para Compartir"
                />
              </Link>
              <Link href={"/carta/ensaladas"} className="contain-content">
                <Image
                  src="/ensalada.jpg"
                  width={400}
                  height={400}
                  alt="Ensaladas"
                />
              </Link>
              <Link href={"/carta/picar"} className="contain-content">
                <Image
                  src="/picar.jpg"
                  width={400}
                  height={400}
                  alt="Para Picar"
                />
              </Link>
              <Link href={"/carta/postres"} className="contain-content">
                <Image
                  src="/pincho.jpg"
                  width={400}
                  height={400}
                  alt="Postres"
                />
              </Link>
              <Link href={"/carta/beber"} className="contain-content">
                <Image
                  src="/beber.jpg"
                  width={400}
                  height={400}
                  alt="Para Beber"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
