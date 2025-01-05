import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "חולצה קצרה - בר האבן",
    price: 25,
    image: "/long_sleeve_t_with_logo.png",
  },
  {
    name: "חולצה ארוכה - בר האבן",
    price: 30,
    image: "/short_sleeve_t_with_logo.png",
  },
  {
    name: "כוס שותים - בר האבן",
    price: 20,
    image: "/shot_glass_with_logo.png",
  },
  // {
  //   name: "דגל - בר האבן",
  //   price: 15,
  //   image: "/flag_with_logo.png",
  // },
];

export default function Merchandise() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          מרצ&apos;נדייז לאבן יהודי הפטריוט
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center text-center p-6 space-y-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full object-contain"
                />
                <div className="p-4">
                  <h3 className="text-foreground font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-foreground font-bold mb-4">
                    ${product.price}
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-primary/80 text-gray-100">
                    הוסף לסל
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
