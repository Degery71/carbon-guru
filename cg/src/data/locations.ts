export type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  embedUrl: string;
  phone?: string;
  hours?: string;
};

export const LOCATIONS: Location[] = [
  {
    id: "menendez-pelayo",
    name: "Carbón Gurú - Menéndez y Pelayo",
    address: "C. Menéndez y Pelayo, 1, 35006 Las Palmas de Gran Canaria",
    city: "Las Palmas",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.47081562107!2d-15.435434823938623!3d28.132152106626336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40954e38115f5d%3A0x75de9924f27a028!2sCarb%C3%B3n%20Guru!5e0!3m2!1ses!2ses!4v1749898561460!5m2!1ses!2ses",
    phone: "+34 928 XXX XXX",
    hours: "Lunes - Domingo: 11:00 - 23:00",
  },
  {
    id: "san-telmo",
    name: "Carbón Gurú - San Telmo",
    address:
      "C. Francisco Gourié, 113, 35002 Las Palmas de Gran Canaria, Las Palmas",
    city: "Las Palmas",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.2644254380803!2d-15.4166883!3d28.1079719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4095007af81bd5%3A0x5002d2ec3f08170e!2zQ2FyYsOzbiBHdXLDug!5e0!3m2!1ses!2ses!4v1768320347201!5m2!1ses!2ses",
    phone: "+34 928 XXX XXX",
    hours: "Lunes - Domingo: 11:00 - 23:00",
  },
];
