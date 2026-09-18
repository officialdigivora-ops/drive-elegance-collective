import { createFileRoute, Link } from "@tanstack/react-router";
import { SitePageHeader } from "@/components/site-page-header";
import { bookingLink, fleetCars, realCarPhotos, type CarPhoto } from "@/data/fleet";

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

const cars = fleetCars;

function CarPhotoReel({ photos }: { photos: CarPhoto[] }) {
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
      <SitePageHeader title="Our Fleet" />
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
                    <Link to="/car-details" search={{ car: car.name }} className="fleet-action bg-secondary text-secondary-foreground" aria-label={`View details for ${car.name}`}>
                      View Details
                    </Link>
                    <a href={bookingLink(car)} target="_blank" rel="noopener noreferrer" className="fleet-action bg-primary text-primary-foreground" aria-label={`Book ${car.name} now`}>
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
