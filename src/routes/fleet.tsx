import { createFileRoute } from "@tanstack/react-router";
import audiA3Red from "../assets/fleet/audi-a3-convertible.png";
import audiA3White from "../assets/fleet/audi-a3-convertible-white.png";
import audiA4 from "../assets/fleet/audi-a4.png";
import audiA6 from "../assets/fleet/audi-a6-white.png";
import audiQ7 from "../assets/fleet/audi-q7-white.png";
import bentleyRed from "../assets/fleet/bentley-convertible-red.png";
import bentleySunroof from "../assets/fleet/bentley-sunroof-white.png";
import bmw5 from "../assets/fleet/bmw-5-series-white.png";
import bmwConvertible from "../assets/fleet/bmw-convertible-white.png";
import defender from "../assets/fleet/land-rover-defender-white.png";
import fortuner from "../assets/fleet/toyota-fortuner.png";
import gwagon from "../assets/fleet/mercedes-g-wagon-white.png";
import hummer from "../assets/fleet/hummer-h2-white.png";
import hyundaiVerna from "../assets/fleet/hyundai-verna-white.png";
import jaguarXf from "../assets/fleet/jaguar-xf-white.png";
import jaguarXjl from "../assets/fleet/jaguar-xjl-white.png";
import limousine from "../assets/fleet/limousine-long-new-white.png";
import maybach from "../assets/fleet/mercedes-maybach-white.png";
import mercedesC300 from "../assets/fleet/mercedes-c-300-white.png";
import mercedesCla from "../assets/fleet/mercedes-cla-white.png";
import mercedesConvertible from "../assets/fleet/mercedes-convertible-white.png";
import mercedesConvertibleRed from "../assets/fleet/mercedes-convertible-red.png";
import mercedesEClass from "../assets/fleet/mercedes-e-class-white.png";
import miniRed from "../assets/fleet/mini-cooper-convertible-red.png";
import mustangRed from "../assets/fleet/mustang-gt-red.png";
import rangeRoverEvoqueRed from "../assets/fleet/range-rover-evoque-convertible-red.png";
import rangeRoverSport from "../assets/fleet/range-rover-sport-sv-white.png";
import rangeRoverVelar from "../assets/fleet/range-rover-velar-autobiography-white.png";
import rollsRoyce from "../assets/fleet/rolls-royce-ghost.png";
import vintage from "../assets/fleet/vintage-luxury-white.png";
import limousineExteriorFront from "../assets/limousine/limousine-exterior-front.jpg.asset.json";
import limousineExteriorAngle from "../assets/limousine/limousine-exterior-angle.jpg.asset.json";
import limousineInteriorSeat from "../assets/limousine/limousine-interior-seat.jpg.asset.json";
import limousineInteriorBar from "../assets/limousine/limousine-interior-bar.jpg.asset.json";
import mercedesConvertibleFront from "../assets/real-fleet/mercedes-convertible-front.jpg.asset.json";
import mercedesConvertibleAngle from "../assets/real-fleet/mercedes-convertible-angle.jpg.asset.json";
import audiA6Front from "../assets/real-fleet/audi-a6-front.jpg.asset.json";
import audiA6Rear from "../assets/real-fleet/audi-a6-rear.jpg.asset.json";
import bmw5Front from "../assets/real-fleet/bmw-5-series-front.jpg.asset.json";
import bmw5Rear from "../assets/real-fleet/bmw-5-series-rear.jpg.asset.json";
import rangeRoverSportFront from "../assets/real-fleet/range-rover-sport-front.jpg.asset.json";
import rangeRoverSportAngle from "../assets/real-fleet/range-rover-sport-angle.jpg.asset.json";
import rangeRoverSportRear from "../assets/real-fleet/range-rover-sport-rear.jpg.asset.json";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Luxury Car Fleet | Chaudhary Car Rental" },
      {
        name: "description",
        content: "Explore premium rental cars in NCR with transparent pricing, professional drivers, and 24/7 service.",
      },
      { property: "og:title", content: "Luxury Car Fleet | Chaudhary Car Rental" },
      {
        property: "og:description",
        content: "Choose your dream car from our premium rental fleet in NCR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cars = [
  ["Mercedes Convertible White", "Luxury Convertible", mercedesConvertible, 20000],
  ["Audi A6 White", "Executive Sedan", audiA6, 10000],
  ["Bmw 5 Series White", "Luxury Sedan", bmw5, 12000],
  ["Bentley Convertible Red", "Luxury Convertible", bentleyRed, 70000],
  ["Audi A3 Convertible White", "Convertible", audiA3White, 16000],
  ["Jaguar Xf White", "Luxury Sedan", jaguarXf, 13000],
  ["Mercedes Convertible Red", "Luxury Convertible", mercedesConvertibleRed, 20000],
  ["Audi Q7 7 Seater White", "7-Seater SUV", audiQ7, 16000],
  ["Mercedes C 300 White", "Luxury Sedan", mercedesC300, 14000],
  ["Mercedes Cla White", "Luxury Sedan", mercedesCla, 13000],
  ["Jaguar Xjl White", "Luxury Sedan", jaguarXjl, 20000],
  ["Mini Cooper Convertible Red", "Convertible", miniRed, 15000],
  ["Rolls Royce Sedan White", "Ultra Luxury Sedan", rollsRoyce, 200000],
  ["Mercedes Maybach White", "Ultra Luxury Sedan", maybach, 40000],
  ["Gwagon White", "Luxury SUV", gwagon, 90000],
  ["Audi A4 White", "Executive Sedan", audiA4, 7000],
  ["Limousine Long New White", "Luxury Limousine", limousine, 18000],
  ["Range Rover Evoque Convertible Red", "Convertible SUV", rangeRoverEvoqueRed, 75000],
  ["Bmw Convertible White", "Convertible", bmwConvertible, 20000],
  ["Audi A3 Convertible Red", "Convertible", audiA3Red, 18000],
  ["Mustang GT Red", "Sports Coupe", mustangRed, 90000],
  ["Mercedes E Class White", "Luxury Sedan", mercedesEClass, 20000],
  ["Vintages White", "Classic Car", vintage, 21000],
  ["Range Rover Velar White", "Luxury SUV", rangeRoverVelar, 40000],
  ["Fortuner Legender White", "7-Seater SUV", fortuner, 10000],
  ["Range Rover Sport White", "Luxury SUV", rangeRoverSport, 40000],
  ["Bentley Sunroof White", "Luxury Sedan", bentleySunroof, 45000],
  ["Hummee H2 White", "Luxury SUV", hummer, 48000],
  ["Defender White", "Luxury SUV", defender, 45000],
  ["Verna New Model White", "Premium Sedan", hyundaiVerna, 4000],
].map(([name, category, image, price]) => ({
  name: String(name),
  category: String(category),
  image: String(image),
  alt: `${name} available for luxury car rental`,
  price: `₹${Number(price).toLocaleString("en-IN")}`,
  duration: "13 hours",
}));

const limousinePhotos = [
  { src: limousine, alt: "Limousine Long New White studio view" },
  { src: limousineExteriorFront.url, alt: "White wedding limousine decorated with flowers, front view" },
  { src: limousineExteriorAngle.url, alt: "White wedding limousine decorated with flowers, angled view" },
  { src: limousineInteriorSeat.url, alt: "Limousine passenger cabin with leather seating" },
  { src: limousineInteriorBar.url, alt: "Limousine cabin bar and entertainment area" },
];

const realCarPhotos: Record<string, Array<{ src: string; alt: string; contain?: boolean }>> = {
  "Mercedes Convertible White": [
    { src: mercedesConvertible, alt: "Mercedes Convertible White studio view", contain: true },
    { src: mercedesConvertibleFront.url, alt: "White Mercedes convertible front view" },
    { src: mercedesConvertibleAngle.url, alt: "White Mercedes convertible angled view" },
  ],
  "Audi A6 White": [
    { src: audiA6, alt: "Audi A6 White studio view", contain: true },
    { src: audiA6Front.url, alt: "White Audi A6 front view" },
    { src: audiA6Rear.url, alt: "White Audi A6 rear view" },
  ],
  "Bmw 5 Series White": [
    { src: bmw5, alt: "BMW 5 Series White studio view", contain: true },
    { src: bmw5Front.url, alt: "White BMW 5 Series front view" },
    { src: bmw5Rear.url, alt: "White BMW 5 Series rear view" },
  ],
  "Limousine Long New White": limousinePhotos.map((photo, index) => ({ ...photo, contain: index === 0 })),
  "Range Rover Sport White": [
    { src: rangeRoverSport, alt: "Range Rover Sport White studio view", contain: true },
    { src: rangeRoverSportFront.url, alt: "Black Range Rover Sport front view" },
    { src: rangeRoverSportAngle.url, alt: "Black Range Rover Sport angled view" },
    { src: rangeRoverSportRear.url, alt: "Black Range Rover Sport rear view" },
  ],
};

function CarPhotoReel({ photos }: { photos: Array<{ src: string; alt: string; contain?: boolean }> }) {
  return (
    <div className="limousine-reel" aria-label="Real exterior and interior car photos">
      <div className="limousine-reel-track">
        {[0, 1].map((group) => (
          <div className="limousine-reel-group" aria-hidden={group === 1} key={group}>
            {photos.map((photo) => (
              <figure className="limousine-reel-frame" key={`${group}-${photo.alt}`}>
                <img
                  src={photo.src}
                  alt={group === 0 ? photo.alt : ""}
                  className={photo.contain ? "object-contain" : "object-cover"}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <section className="fleet-intro mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-6 text-center sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.26em] text-primary sm:text-[0.7rem]">100+ Premium Cars Across NCR</p>
        <h1 className="mt-2 max-w-5xl font-display text-4xl font-black uppercase leading-[0.92] tracking-normal sm:text-6xl lg:text-7xl">
          Meet Our <span className="text-primary">Fleet</span>
        </h1>
      </section>

      <section className="fleet-ticker overflow-hidden border-y border-border py-3 sm:py-4" aria-label="Fleet highlights">
        <div className="fleet-marquee flex w-max items-center gap-8 sm:gap-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12">
              {["Self Drive", "Airport Transfers", "Corporate Meetings", "Music Shoots", "Weddings", "Outstation Travel", "Luxury Fleet"].map((item) => (
                <span key={item + i} className="flex items-center gap-3 whitespace-nowrap text-xs font-extrabold uppercase tracking-[0.18em] text-ticker-foreground sm:text-sm">
                  <span className="inline-block h-1.5 w-1.5 rotate-45 bg-primary" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {cars.map((car, index) => {
            const detailsMessage = encodeURIComponent(`I would like more details about the ${car.name}.`);
            const bookingMessage = encodeURIComponent(`I want to book the ${car.name} for ${car.price} / ${car.duration}. Please share availability.`);
            const photos = realCarPhotos[car.name];
            return (
              <article key={car.name} className="grid overflow-hidden border border-border bg-card md:grid-cols-2">
                <div className={`relative flex min-h-52 items-center justify-center overflow-hidden bg-fleet p-4 sm:min-h-72 sm:p-6 lg:min-h-80 lg:p-8 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  {photos ? (
                    <CarPhotoReel photos={photos} />
                  ) : (
                    <img src={car.image} alt={car.alt} className="h-auto max-h-48 w-full object-contain transition-transform duration-500 hover:scale-[1.03] sm:max-h-64 lg:max-h-72" loading={index > 0 ? "lazy" : "eager"} />
                  )}
                </div>
                <div className={`flex min-w-0 flex-col p-5 sm:p-6 lg:p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary sm:text-xs">{car.category}</p>
                    <h2 className="mt-2 font-display text-2xl font-black uppercase leading-none sm:text-3xl lg:text-4xl">{car.name}</h2>
                    <div className="fleet-price mt-5 sm:mt-6">
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-[0.65rem]">Starting from</span>
                      <strong className="mt-2 block font-display text-3xl font-black leading-none sm:text-4xl">{car.price}</strong>
                    </div>
                  </div>
                  <div className="mt-5 grid h-11 grid-cols-2 overflow-hidden rounded-full sm:mt-6 sm:h-12">
                    <a href={`https://wa.me/919990569473?text=${detailsMessage}`} className="fleet-action bg-secondary text-secondary-foreground" aria-label={`View details for ${car.name}`}>
                      View Details
                    </a>
                    <a href={`https://wa.me/919990569473?text=${bookingMessage}`} className="fleet-action bg-primary text-primary-foreground" aria-label={`Book ${car.name} now`}>
                      <span>Book Now</span><ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
