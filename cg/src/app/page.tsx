import AutoCarousel from "@/components/AutoCarousel";
import { BurgerMenu } from "@/components/BurgerMenu";

export default function Home() {
  return (
    <>
      {/* mobile frame */}
      <div className="bg-white overflow-hidden w-[390px] h-[844px]">
        {/* background  */}
        <div className="min-h-full min-w-full bg-pal-grey flex flex-col justify-top">
          {/* top menu */}
          <BurgerMenu />
          <AutoCarousel />
          <h1 className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[16.8px mt-4">
            Comida Callejera
          </h1>
          <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[16.8px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          {/* testimonies pictures */}
          <div className="absolute w-[123px] h-[35px] top-[560px] left-12">
            <div className="relative h-[35px]">
              <div className="absolute w-[35px] h-[35px] top-0 left-0 bg-[#d9d9d9] rounded-[200px] border border-solid border-white" />
              <div className="absolute w-[35px] h-[35px] top-0 left-[22px] bg-[#d9d9d9] rounded-[200px] border border-solid border-white" />
              <div className="absolute w-[35px] h-[35px] top-0 left-11 bg-[#d9d9d9] rounded-[200px] border border-solid border-white" />
              <div className="absolute w-[35px] h-[35px] top-0 left-[66px] bg-[#d9d9d9] rounded-[200px] border border-solid border-white" />
              <div className="absolute w-[35px] h-[35px] top-0 left-[88px] bg-[#d9d9d9] rounded-[200px] border border-solid border-white" />
            </div>
          </div>
          {/* text */}
          <p className="absolute w-[149px] top-[559px] left-[190px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[16.8px]">
            +10 locales repartidos por <br />
            toda España
          </p>
          {/* ?????????? */}
          <div className="absolute w-[378px] h-[220px] top-[626px] left-1.5 bg-white rounded-[200px_200px_0px_0px]" />
        </div>
      </div>
    </>
  );
}
