import { BurgerMenu } from "@/components/BurgerMenu";
import { MenuItemList } from "@/components/MenuItemList";

export default function Card() {
  const items = [
    {
      src: "/maduro.jpeg",
      alt: "MAZORCA/ COB",
      item: "MAZORCA/ COB",
      price: "3,00€",
      description: "",
    },
    {
      src: "/salchipapa.jpeg",
      alt: "BATATA/ SWEET POTATO",
      item: "BATATA/ SWEET POTATO",
      price: "3,50€",
      description: "",
    },
    {
      src: "/salchipapa.jpeg",
      alt: "YUCA/ YUCCA",
      item: "YUCA/ YUCCA",
      price: "3,50€",
      description: "",
    },
    {
      src: "/salchipapa.jpeg",
      alt: "PATACÓN",
      item: "PATACÓN",
      price: "3,50€",
      description: "",
    },
  ];
  return (
    <>
      {/* mobile frame */}
      <div className="bg-white overflow-hidden h-full">
        {/* background  */}
        <div className="min-h-full min-w-full bg-pal-grey flex flex-col items-center">
          {/* top menu */}
          <BurgerMenu />
          <div className="m-4 flex flex-col items-center">
            <div className="font-extrabold text-white text-[28px]">CARTA</div>
            <MenuItemList items={items} />
          </div>
        </div>
      </div>
    </>
  );
}
