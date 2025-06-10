import { BurgerMenu } from "@/components/BurgerMenu";

export default function Card() {
  return (
    <>
      {/* mobile frame */}
      <div className="bg-white overflow-hidden w-[390px] h-[844px]">
        {/* background  */}
        <div className="min-h-full min-w-full bg-pal-grey flex flex-col items-center">
          {/* top menu */}
          <BurgerMenu />
        </div>
      </div>
    </>
  );
}
