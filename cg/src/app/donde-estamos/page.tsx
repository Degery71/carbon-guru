import { BurgerMenu } from "@/components/BurgerMenu";
import RestaurantMap from "@/components/RestaurantMap";

export default function DondeEstamos() {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="min-h-screen bg-pal-grey flex flex-col items-center">
        {/* Top menu */}
        <BurgerMenu />

        {/* Locations */}
        <RestaurantMap />
      </div>
    </div>
  );
}
