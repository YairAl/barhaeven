// All the editable text/data of the landing page lives here.

export const TICKETS_URL = "https://www.stampme.com/";
export const MAPS_URL = "https://maps.app.goo.gl/gooNyS2knFPRmn9J8";

export const hours = {
  day: "כל יום שישי",
  time: "20:00–02:00",
  address: "רח' ההדרים, אבן יהודה",
};

export const contact = {
  email: "barhaeven@gmail.com",
  phone: "+972-123-456-789",
  phoneHref: "tel:+972123456789",
  instagram: "@barhaeven",
  instagramHref: "https://instagram.com/barhaeven",
};

export type Photo = { src: string; alt: string; credit?: string };

// Real photos of the bar / of Even Yehuda. Put the files in public/photos/
// and list them here, e.g. { src: "/photos/stage.jpg", alt: "הופעה בבר" }.
// The gallery section appears only when this list is non-empty.
export const photos: Photo[] = [];

export const events = [
  { date: "4.4", artist: "Cortado", genre: "טכנו" },
  { date: "11.4", artist: "The Cohen Quintet", genre: "ג'אז" },
  { date: "18.4", artist: "בן אורי", genre: "R&B" },
  { date: "25.4", artist: "הרכב תיכון הדסים", genre: "רוק ישראלי" },
  { date: "2.5", artist: "דונגי", genre: "ראפ" },
];

export const products = [
  { name: "חולצה קצרה", price: 25, image: "/short_sleeve_t_with_logo.png" },
  { name: "חולצה ארוכה", price: 30, image: "/long_sleeve_t_with_logo.png" },
  { name: "כוס שוט", price: 20, image: "/shot_glass_with_logo.png" },
];
