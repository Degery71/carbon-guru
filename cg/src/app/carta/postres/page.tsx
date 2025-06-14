import { BurgerMenu } from "@/components/BurgerMenu";
import { MenuItemList } from "@/components/MenuItemList";

export default function Card() {
  const items = [
    {
      src: "/maduro.jpeg",
      alt: "GRANIZADO",
      item: "GRANIZADO",
      price: "3,00€",
      description:
        "Granizado con sirope a elegir, cubierto de leche condensada/ granita with syrup of your choice, covered with condensed milk.",
    },
    {
      src: "/salchipapa.jpeg",
      alt: "GRANIZADO ESPECIAL",
      item: "GRANIZADO ESPECIAL",
      price: "4,00€",
      description:
        "Granizado con batido de chocolate y un mix de picadillo especial de frutas/ granita with chocolate shake and a special fruit hash mix.",
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
