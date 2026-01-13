// components/RestaurantMap.tsx
"use client";

import { Location, LOCATIONS } from "@/data/locations";
import { LocationCard } from "./locations/LocationCard";

type RestaurantMapProps = {
  locations?: Location[];
};

export default function RestaurantMap({
  locations = LOCATIONS,
}: RestaurantMapProps) {
  return (
    <div className="w-full flex flex-col gap-8 mt-16 max-w-[900px] px-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Nuestras Ubicaciones
        </h2>
        <p className="text-yellow-300 text-lg">
          Visítanos en cualquiera de nuestras sucursales
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 w-full">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
}
