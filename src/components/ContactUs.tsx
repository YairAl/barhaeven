"use client";

import { Mail, Phone } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-instagram"
    {...props}
  >
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
  </svg>
);

const contactInfo = [
  {
    icon: <Mail className="size-10 text-amber-600" />,
    title: "מייל",
    content: "barhaeven@gmail.com",
    link: "mailto:barhaeven@gmail.com",
  },
  {
    icon: <Phone className="size-10 text-amber-600" />,
    title: "טלפון",
    content: "+972-123-456-789",
    link: "tel:+972123456789",
  },
  {
    icon: <InstagramIcon className="size-10 text-amber-600" />,
    title: "אינסטגרם",
    content: "@barhaeven",
    link: "https://instagram.com/barhaeven",
  },
];

export default function ContactUs() {
  return (
    <section className="pt-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              dir="ltr"
              href={info.link}
              key={index}
              className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
