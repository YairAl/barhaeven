import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const performances = [
  {
    date: "יום שישי, 4 אפריל",
    artist: "Cortado",
    genre: "טכנו",
  },
  { date: "יום שישי, 11 אפריל", artist: "The Cohen Quintet", genre: "ג'אז" },
  { date: "יום שישי, 18 אפריל", artist: "בן אורי", genre: "R&B" },
  {
    date: "יום שישי, 25 אפריל",
    artist: "הרכב תיכון הדסים",
    genre: "רוק ישראלי",
  },
  {
    date: "יום שישי, 2 מאי",
    artist: "דונגי",
    genre: "ראפ",
  },
];

export default function PerformanceSchedule() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">לוח אירועים</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>תאריך</TableHead>
                <TableHead>אומן</TableHead>
                <TableHead>ז&apos;אנר</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {performances.map((performance, index) => (
                <TableRow key={index}>
                  <TableCell>{performance.date}</TableCell>
                  <TableCell>{performance.artist}</TableCell>
                  <TableCell>{performance.genre}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
