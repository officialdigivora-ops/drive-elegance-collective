import { createFileRoute, Link } from "@tanstack/react-router";
import { Armchair, Cog, Gauge, Phone, Tag } from "lucide-react";

import galleryAudiWhite from "../assets/gallery/gallery-audi-white.jpg.asset.json";
import galleryBentleyBlack from "../assets/gallery/gallery-bentley-black.jpg.asset.json";
import galleryBmwFront from "../assets/gallery/gallery-bmw-front.jpg.asset.json";
import galleryBmwSide from "../assets/gallery/gallery-bmw-side.jpg.asset.json";
import galleryDefender from "../assets/gallery/gallery-defender.jpg.asset.json";
import galleryGwagon from "../assets/gallery/gallery-gwagon.jpg.asset.json";
import galleryHummer from "../assets/gallery/gallery-hummer.jpg.asset.json";
import galleryJaguarXf from "../assets/gallery/gallery-jaguar-xf.jpg.asset.json";
import galleryMaybach from "../assets/gallery/gallery-maybach.jpg.asset.json";
import galleryMiniRed from "../assets/gallery/gallery-mini-red.jpg.asset.json";
import galleryMustangRed from "../assets/gallery/gallery-mustang-red.jpg.asset.json";
import galleryRangeRoverRed from "../assets/gallery/gallery-rangerover-red.jpg.asset.json";
import galleryRollsRoyceWhite from "../assets/gallery/gallery-rollsroyce-white.jpg.asset.json";
import galleryTaycanBlue from "../assets/gallery/gallery-taycan-blue.jpg.asset.json";
import galleryVintageRed from "../assets/gallery/gallery-vintage-red.jpg.asset.json";

const BRAND = "Chaudhary Luxury Cars";
const PHONE_DISPLAY = "+91 99905 69473";
const PHONE_LINK = "tel:+919990569473";
const SITE_URL = "https://drive-elegance-collective.lovable.app";
const TITLE = "Car Photo Gallery | Chaudhary Luxury Cars Delhi NCR";
const DESCRIPTION =
  "Browse real photos of our luxury wedding and event cars — Rolls-Royce, Bentley, Range Rover, Maybach, Defender, Mustang and more. 13-hour packages with fuel and driver. Call +91 99905 69473.";

type GalleryCar = {
  name: string;
  type: string;
  speed: string;
  seats: string;
  transmission: string;
  price: number;
  image: string;
};

const galleryCars: GalleryCar[] = [
  { name: "Rolls Royce Sedan White", type: "Ultra Luxury Sedan", speed: "250 km/h", seats: "4 seats", transmission: "Automatic", price: 200000, image: galleryRollsRoyceWhite.url },
  { name: "Bentley Convertible Black", type: "Convertible", speed: "333 km/h", seats: "4 seats", transmission: "Automatic", price: 75000, image: galleryBentleyBlack.url },
  { name: "Mercedes Maybach White", type: "Luxury Sedan", speed: "250 km/h", seats: "4 seats", transmission: "Automatic", price: 40000, image: galleryMaybach.url },
  { name: "Range Rover Evoque Convertible Red", type: "Convertible SUV", speed: "209 km/h", seats: "4 seats", transmission: "Automatic", price: 75000, image: galleryRangeRoverRed.url },
  { name: "Gwagon White", type: "Luxury SUV", speed: "210 km/h", seats: "5 seats", transmission: "Automatic", price: 90000, image: galleryGwagon.url },
  { name: "Defender White", type: "Luxury SUV", speed: "191 km/h", seats: "5 seats", transmission: "Automatic", price: 45000, image: galleryDefender.url },
  { name: "Hummee H2 White", type: "SUV", speed: "160 km/h", seats: "5 seats", transmission: "Automatic", price: 48000, image: galleryHummer.url },
  { name: "Porche Taycon Turbo", type: "Electric Sports Sedan", speed: "260 km/h", seats: "4 seats", transmission: "Automatic", price: 150000, image: galleryTaycanBlue.url },
  { name: "Mustang GT Red", type: "Muscle Coupe", speed: "250 km/h", seats: "4 seats", transmission: "Automatic", price: 90000, image: galleryMustangRed.url },
  { name: "Bmw Convertible White", type: "Convertible", speed: "250 km/h", seats: "4 seats", transmission: "Automatic", price: 20000, image: galleryBmwFront.url },
  { name: "Bmw 5 Series White", type: "Luxury Sedan", speed: "250 km/h", seats: "5 seats", transmission: "Automatic", price: 12000, image: galleryBmwSide.url },
  { name: "Audi A4 White", type: "Luxury Sedan", speed: "241 km/h", seats: "5 seats", transmission: "Automatic", price: 7000, image: galleryAudiWhite.url },
  { name: "Jaguar Xf White", type: "Luxury Sedan", speed: "250 km/h", seats: "5 seats", transmission: "Automatic", price: 13000, image: galleryJaguarXf.url },
  { name: "Mini Cooper Convertible Red", type: "Convertible", speed: "228 km/h", seats: "4 seats", transmission: "Automatic", price: 15000, image: galleryMiniRed.url },
  { name: "Vintages White", type: "Vintage Classic", speed: "120 km/h", seats: "4 seats", transmission: "Manual", price: 21000, image: galleryVintageRed.url },
];

const bookingLink = (car: GalleryCar) =>
  `https://wa.me/919990569473?text=${encodeURIComponent(
    `I want to book this car: ${car.name} (${car.type}) for ₹${car.price.toLocaleString("en-IN")} / 13 hours. Can I get more details?`,
  )}`;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BRAND },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-12 md:px-8 md:pt-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Photo gallery</p>
            <h1 className="font-display text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">OUR CAR PHOTOS</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
              Real photos from our own fleet. Every price is for a 13-hour package including fuel, driver, decoration and toll.
            </p>
          </div>
          <div className="text-3xl text-primary" aria-hidden="true">✦</div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryCars.map((car) => (
            <article key={car.name} className="flex flex-col overflow-hidden rounded-2xl bg-surface shadow-card">
              <img
                src={car.image}
                alt={`${car.name} — ${car.type} available for rent from ${BRAND}`}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-xl font-black uppercase leading-tight tracking-tight">{car.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{car.type}</p>
                <ul className="mt-4 grid grid-cols-3 gap-2 text-[11px] font-semibold text-muted-foreground">
                  <li className="flex flex-col items-center gap-1 rounded-xl bg-background py-2.5"><Gauge size={15} className="text-primary" />{car.speed}</li>
                  <li className="flex flex-col items-center gap-1 rounded-xl bg-background py-2.5"><Armchair size={15} className="text-primary" />{car.seats}</li>
                  <li className="flex flex-col items-center gap-1 rounded-xl bg-background py-2.5"><Cog size={15} className="text-primary" />{car.transmission}</li>
                </ul>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <p className="flex items-center gap-1.5 text-sm font-black">
                    <Tag size={15} className="text-primary" />₹{car.price.toLocaleString("en-IN")}
                    <span className="text-[11px] font-semibold text-muted-foreground">/ 13 hours</span>
                  </p>
                  <a
                    href={bookingLink(car)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-[11px] font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-foreground px-6 py-10 text-center text-background">
          <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">Need help choosing?</h2>
          <p className="max-w-md text-sm text-background/70">Call us and we will arrange the right car for your wedding, event or corporate travel.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={PHONE_LINK} className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover"><Phone size={15} /> {PHONE_DISPLAY}</a>
            <Link to="/fleet" className="inline-flex h-11 items-center rounded-full border border-background/30 px-6 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-background/10">Our Fleet</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
