"use client";

import { Location } from "@/data/locations";

type LocationCardProps = {
  location: Location;
};

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg border-2 border-white/30 bg-white transition-transform hover:shadow-xl hover:-translate-y-1">
      {/* Map Container */}
      <div className="relative w-full aspect-video bg-gray-200">
        <iframe
          src={location.embedUrl}
          width="100%"
          height="100%"
          className="w-full h-full"
          loading="lazy"
          title={`Map of ${location.name}`}
        ></iframe>
      </div>

      {/* Info Container */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="font-bold text-xl text-gray-900">{location.name}</h3>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="text-sm font-medium text-gray-700">Ubicación</p>
            <p className="text-gray-600">{location.address}</p>
            <p className="text-sm text-gray-500 mt-1">{location.city}</p>
          </div>
        </div>

        {/* Phone */}
        {/* {location.phone && (
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.291 1.776 2.950 3.656 4.947l.776-1.561a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-6.552 0-11.86-5.363-11.86-11.93V3z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-gray-700">Teléfono</p>
              <a
                href={`tel:${location.phone.replace(/\s/g, "")}`}
                className="text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                {location.phone}
              </a>
            </div>
          </div>
        )} */}

        {/* Hours */}
        {/* {location.hours && (
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-gray-700">Horario</p>
              <p className="text-gray-600">{location.hours}</p>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
