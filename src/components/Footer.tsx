export default function Footer() {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} בר האבן</p>
        <a
          href="https://maps.app.goo.gl/gooNyS2knFPRmn9J8"
          target="_blank" // opens in a new tab instead of current one
          className="mt-2 text-secondary-foreground underline"
        >
          רח&apos; ההדרים, אבן יהודה
        </a>
      </div>
    </footer>
  );
}
