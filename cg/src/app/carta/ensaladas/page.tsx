import { BurgerMenu } from "@/components/BurgerMenu";
import { MenuItemList } from "@/components/MenuItemList";

export default function Card() {
  const items = [
    {
      src: "/maduro.jpeg",
      alt: "ENSALADA DE TOMATE Y CEBOLLA/ TOMATO AND ONION SALAD",
      item: "ENSALADA DE TOMATE Y CEBOLLA/ TOMATO AND ONION SALAD",
      price: "3,60€",
      description: "",
    },
    {
      src: "/salchipapa.jpeg",
      alt: "ENSALADA DE COL/ COLESLAW",
      item: "ENSALADA DE COL/ COLESLAW",
      price: "3,80€",
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
