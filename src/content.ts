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

// Photos of Even Yehuda (e.g. from the local council's sites).
// Drop the files in public/even-yehuda/ and list them here — the
// "אבן יהודה" section shows a photo strip only when this list is non-empty.
export const evenYehudaPhotos: Photo[] = [];

export const galleryPhotos: Photo[] = [
  { src: "/people_1.jpg", alt: "חברים מרימים כוסית בבר" },
  { src: "/live_music_1.jpg", alt: "הופעה חיה בבר" },
  { src: "/outdoor_bar_1.jpg", alt: "עמדת הבר בחוץ" },
  { src: "/live_music_2.jpg", alt: "הופעה חיה" },
  { src: "/people_2.jpg", alt: "אנשים שותים בבר" },
  { src: "/outdoor_bar_2.jpg", alt: "משאית הבר" },
];

export const events = [
  { date: "4.4", day: "שישי", artist: "Cortado", genre: "טכנו" },
  { date: "11.4", day: "שישי", artist: "The Cohen Quintet", genre: "ג'אז" },
  { date: "18.4", day: "שישי", artist: "בן אורי", genre: "R&B" },
  { date: "25.4", day: "שישי", artist: "הרכב תיכון הדסים", genre: "רוק ישראלי" },
  { date: "2.5", day: "שישי", artist: "דונגי", genre: "ראפ" },
];

export const products = [
  { name: "חולצה קצרה", price: 25, image: "/short_sleeve_t_with_logo.png" },
  { name: "חולצה ארוכה", price: 30, image: "/long_sleeve_t_with_logo.png" },
  { name: "כוס שוט", price: 20, image: "/shot_glass_with_logo.png" },
];
