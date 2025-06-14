// components/RestaurantMap.tsx
export default function RestaurantMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg border-2 border-white/30 mt-16 max-w-[800px]">
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.47081562107!2d-15.435434823938623!3d28.132152106626336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40954e38115f5d%3A0x75de9924f27a028!2sCarb%C3%B3n%20Guru!5e0!3m2!1ses!2ses!4v1749898561460!5m2!1ses!2ses"
          width="800"
          height="450"
          //   style="border:0;"
          //   allowfullscreen=""
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-white p-4">
        <h3 className="font-bold text-lg">Autentica comida callejera latina</h3>
        <p className="text-gray-600">
          C. Menéndez y Pelayo, 1, 35006 Las Palmas de Gran Canaria
        </p>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Las Palmas</span>
        </div>
      </div>
    </div>
  );
}
