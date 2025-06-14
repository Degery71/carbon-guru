import { BurgerMenu } from "@/components/BurgerMenu";
import { MenuItemList } from "@/components/MenuItemList";

export default function Card() {
  const items = [
    {
      src: "/drinks/agua.jpg",
      alt: "AGUA/ WATER",
      item: "AGUA/ WATER",
      price: "2,00€",
      description: "Refreshing still water",
    },
    {
      src: "/drinks/agua-con-gas.jpg",
      alt: "AGUA CON GAS/ SPARKLING WATER",
      item: "AGUA CON GAS/ SPARKLING WATER",
      price: "2,50€",
      description: "Carbonated mineral water",
    },
    {
      src: "/drinks/refrescos.jpg",
      alt: "REFRESCOS/ SOFT DRINKS",
      item: "REFRESCOS/ SOFT DRINKS",
      price: "2,50€",
      description: "Coca cola, Nestea, Sprite, Fanta, and other sodas",
    },
    {
      src: "/drinks/aguas-frescas.jpg",
      alt: "AGUAS FRESCAS/ FRESH WATERS",
      item: "AGUAS FRESCAS/ FRESH WATERS",
      price: "3,00€",
      description:
        "Fresh fruit waters: maracuyá (passion fruit), mango, mora (blackberry), guanabana (soursop)",
    },
    {
      src: "/drinks/cerveza-tap.jpg",
      alt: "CERVEZAS DE GRIFO/ TAP BEER",
      item: "CERVEZAS DE GRIFO/ TAP BEER",
      price: "2,20€",
      description: "Aguila sin filtrar, Aguila dorada",
    },
    {
      src: "/drinks/cerveza-botella.jpg",
      alt: "CERVEZAS DE BOTELLA/ BOTTLE BEER",
      item: "CERVEZAS DE BOTELLA/ BOTTLE BEER",
      price: "3,00€",
      description:
        "Aguila sin filtrar, Amstel oro 0,0, Cruz campo gran reserva, cruz campo esp sin gluten, cruz campo Radler, 1870",
    },
    {
      src: "/drinks/vino.jpg",
      alt: "VINO COPA/ GLASS OF WINE",
      item: "VINO COPA/ GLASS OF WINE",
      price: "3,20€",
      description: "Tinto (red) o blanco (white)",
    },
    {
      src: "/drinks/micheladas.jpg",
      alt: "MICHELADAS",
      item: "MICHELADAS",
      price: "3,50€",
      description:
        "Beer cocktails: limon (lemon), mango, maracuyá (passion fruit)",
    },
    {
      src: "/drinks/caipirinha.jpg",
      alt: "CAIPIRIÑA",
      item: "CAIPIRIÑA",
      price: "6,00€",
      description:
        "Traditional Brazilian cocktail: limon (lemon) o maracuyá (passion fruit)",
    },
    {
      src: "/drinks/ardiente.jpg",
      alt: "ARDIENTE MARACUYA/ ARDIENTE LULO",
      item: "ARDIENTE MARACUYA/ ARDIENTE LULO",
      price: "6,00€",
      description:
        "Delicioso coctel a base de aguardiente amarillo con nuestro toque secreto / Delicious cocktail based on aguardiente with our secret touch",
    },
    {
      src: "/drinks/ron-coco.jpg",
      alt: "RON COCO",
      item: "RON COCO",
      price: "6,00€",
      description:
        "Deliciosa bebida alcoholica, a base de crema de coco, leche condensada y ron / Delicious alcoholic drink, based on coconut cream, condensed milk and rum",
    },
    {
      src: "/drinks/combinados.jpg",
      alt: "COMBINADOS DE ALCOHOL/ OTHER ALCOHOLIC DRINKS",
      item: "COMBINADOS DE ALCOHOL/ OTHER ALCOHOLIC DRINKS",
      price: "8,00€",
      description: "Standard mixed alcoholic drinks",
    },
    {
      src: "/drinks/premium-combinados.jpg",
      alt: "PREMIUM COMBINADOS DE ALCOHOL/ PREMIUM ALCOHOLIC DRINKS",
      item: "PREMIUM COMBINADOS DE ALCOHOL/ PREMIUM ALCOHOLIC DRINKS",
      price: "10,00€",
      description: "Higher-end mixed alcoholic drinks",
    },
    {
      src: "/drinks/especiales.jpg",
      alt: "ESPECIALES COMBINADOS DE ALCOHOL/ SPECIAL ALCOHOLIC DRINKS",
      item: "ESPECIALES COMBINADOS DE ALCOHOL/ SPECIAL ALCOHOLIC DRINKS",
      price: "12,00€",
      description: "Signature and special mixed alcoholic drinks",
    },
    {
      src: "/drinks/chupitos.jpg",
      alt: "CHUPITOS/ SHOTS",
      item: "CHUPITOS/ SHOTS",
      price: "3,00€",
      description: "Various shot options",
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
