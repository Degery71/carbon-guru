import { BurgerMenu } from "@/components/BurgerMenu";
import { MenuItemList } from "@/components/MenuItemList";

export default function Card() {
  const items = [
    {
      src: "/pincho.jpg",
      alt: "PINCHO DE POLLO/ CHICKEN SKEWER",
      item: "PINCHO DE POLLO/ CHICKEN SKEWER",
      description:
        "Pechuga de pollo a la brasa, cortada en tiras, marinada con nuestra salsa especial, acompañada con papa cocida/ grilled chicken breast cut into strips, marinated with our especial sause, accompanied with bolied potatoes.",
    },
    {
      src: "/pincho1.jpg",
      alt: "PINCHO DE CERDO/ PORK SKEWER",
      item: "PINCHO DE CERDO/ PORK SKEWER",
      description:
        "Bondiola de cerdo a la brasa, cortada en tiras, marinada con nuestra salsa especial, acompañado con papa cocida/ grilled pork bondiola cut into strips marinated with our special sauce, accompanied with boiled potatoes.",
    },
    {
      src: "/pincho.jpg",
      alt: "PINCHO DE CALABACÍN/ ZUCCHINI SKEWER",
      item: "PINCHO DE CALABACÍN/ ZUCCHINI SKEWER",
      description:
        "Calabacin a la brasa cortado en rodajas, marinado con nuestra salsa especial, acompañado con papa cocida/ grilled zucchini cut into slices marinated with our special sauce, accompanied by boiled potatoes",
    },
    {
      src: "/pincho1.jpg",
      alt: "PINCHO DE BERENJENA/ EGGLANT SKEWER",
      item: "PINCHO DE BERENJENA/ EGGLANT SKEWER",
      description:
        "Berenjena a la brasa cortada en rodajas, marinada con nuestra salsa especial, compañada con papa cocida/ grilled eggplant cut into slices marinated with our special sauce, accompanied by boliled potatoes.",
    },
    {
      src: "/pincho.jpg",
      alt: "PINCHO DE PIMIENTO Y CEBOLLA/ PEPPER AND ONION SKEWER",
      item: "PINCHO DE PIMIENTO Y CEBOLLA/ PEPPER AND ONION SKEWER",
      description:
        "Pimiento y Cebolla a la brasa, marinado con nuestra salsa especial, acompañado con papa cocida/grilled pepper and onion marinated with our special sauce, accompanied by boiled potatoes.",
    },
    {
      src: "/pincho1.jpg",
      alt: "PINCHO DE TERNERA/ BEEF SKEWER",
      item: "PINCHO DE TERNERA/ BEEF SKEWER",
      description:
        "Ternera a la brasa, cortada en tiras, marinada con nuestra salsa especial, acompañada con papa cocida/ grilled beef cut into strips marinated with our special sauce, accompanied with bolied potatoes.",
    },
    {
      src: "/pincho.jpg",
      alt: "PINCHO MIXTO/ MIXED SKEWER",
      item: "PINCHO MIXTO/ MIXED SKEWER",
      description:
        "La mejor combinación de ternera y pollo a la brasa, marinados con nuestra salsa especial y acompañados con papa cocida/ the best combination of grilled beef and chicken, marinated with our special sauce, accompanied with boiled potatoes.",
    },
    {
      src: "/pincho1.jpg",
      alt: "PINCHO DE CHORIZO A LA BRASA/GRILLED CHORIZO SKEWER",
      item: "PINCHO DE CHORIZO A LA BRASA/GRILLED CHORIZO SKEWER",
      description:
        "Delicioso pincho casero a la brasa/delicious homemade grilled skewers.",
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
