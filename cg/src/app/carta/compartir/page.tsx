import { BurgerMenu } from "@/components/BurgerMenu";
import { MenuItemList } from "@/components/MenuItemList";

export default function Card() {
  const items = [
    {
      src: "/maduro.jpeg",
      alt: "PLÁTANO MADURO CON QUESO/ RIPE BANANA WITH CHEESE",
      item: "PLÁTANO MADURO CON QUESO/ RIPE BANANA WITH CHEESE",
      price: "4,00€",
      description:
        "Delicioso plátano maduro frito con queso/ delicius fried ripe platain with cheese.",
    },
    {
      src: "/salchipapa.jpeg",
      alt: "SALCHIPAPA",
      item: "SALCHIPAPA",
      price: "4,90€",
      description:
        "Papas fritas acompañadas con salchichas en rodajas, añadiendo diferentes salsas especiales a elección/ frech fries accompanied by sliced sausages adding different special sauces.",
    },
    {
      src: "/pincho.jpg",
      alt: "ALITAS DE POLLO/ CHIKEN WINGS",
      item: "ALITAS DE POLLO/ CHIKEN WINGS",
      price: "5,00€",
      description:
        "Alitas de pollo marinadas a la brasa/ grilled marinated chicken wings.",
    },
    {
      src: "/pincho1.jpg",
      alt: "CHORIPAPA",
      item: "CHORIPAPA",
      price: "5,50€",
      description:
        "Papas fritas acompañadas con chorizos en rodajas, añadiendo diferentes salsas especiales a elección/ frech fries accompanied by sliced sausages adding different special sauces.",
    },
    {
      src: "/perrito.jpeg",
      alt: "PERRITO ESPECIAL BRASERO/ BRAZIER SPECIAL DOG",
      item: "PERRITO ESPECIAL BRASERO/ BRAZIER SPECIAL DOG",
      price: "5,50€",
      description:
        "Nuestro perrito especial con salchicha a la brasa, acompañado de baicon, queso y papitas paja, añadiendo salsas especiales a escoger/ our special dog with grilled sausage, accompanied by bacon, cheese and Straw chips, adding special sauces.",
    },
    {
      src: "/morcilla.jpeg",
      alt: "MORCILLA/ BLACK PUDDING",
      item: "MORCILLA/ BLACK PUDDING",
      price: "6,00€",
      description:
        "Morcilla a la brasa acompañada de nuestra salsa especial y papas cocidas/ grilled blood sausage accompanied by our special sauce and bolied potatoes.",
    },
    {
      src: "/ceviche.jpeg",
      alt: "CEVICHE DE CHICHARRÓN",
      item: "CEVICHE DE CHICHARRÓN",
      price: "6,50€",
      description:
        "Panceta de cerdo marinada en zumo de limón y cocidas a la brasa, añadiendo tomate, cilantro y cebolla morada con nuestra salsa especial/ prok belly marinated in lemon juice and grilled, adding tomato, coriander and onion with our special.",
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
