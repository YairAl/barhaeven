import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IMAGE_ROOT } from "@/config";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Image
            src={IMAGE_ROOT + "/logo.png"}
            alt="Bar HaEven Logo"
            width={204.4}
            height={195.2}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">בר האבן</h1>
        <p className="text-xl mb-8">הבר הקהילתי של אבן יהודה.</p>
        <p className="text-base mb-8 max-w-prose mx-auto text-right">
          <b>בר האבן הוא מוקד קהילתי לצעירי אבן יהודה,</b> שמטרתו ליצור מרחב
          מפגש חברתי עבור חיילים, סטודנטים ותושבים הצעירים כאשר הם חוזרים הביתה
          בסופי השבוע. <br />
          <b> האבן פועל בימי שישי בערב, מהשעה 20:00 עד 02:00.</b> <br />
          <b>בכל ערב פעילות יש הופעות חיות:</b> מהרכבים מוזיקליים של תיכון הדסים
          ועד די-ג&apos;יים מאבן יהודה שיעשו אווירה.
        </p>
        <Button size="lg" className=" font-bold py-3 px-6 rounded-full text-lg">
          לקניית כרטיסייה
        </Button>
      </div>
    </section>
  );
}
