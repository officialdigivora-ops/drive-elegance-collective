import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Fuel, Gauge, Phone, ShieldCheck, UsersRound, Workflow } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SitePageHeader } from "@/components/site-page-header";
import { cn } from "@/lib/utils";
import { bookingLink, carPhotosFor, findCar, PHONE_DISPLAY, PHONE_LINK } from "@/data/fleet";

export const Route = createFileRoute("/car-details")({
  validateSearch: (search: Record<string, unknown>) => ({
    car: typeof search['car'] === "string" ? (search['car'] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Car Details, Specs & 13-Hour Rental Price | Chaudhary Luxury Cars" },
      { name: "description", content: "See photos, specifications and 13-hour rental pricing for every luxury car we rent across Delhi NCR, Haryana and Uttar Pradesh. Fuel, driver, decoration and toll included." },
      { name: "keywords", content: "luxury car rental price Delhi NCR, wedding car rent per day Haryana, car specifications rental India" },
      { property: "og:title", content: "Car Details, Specs & 13-Hour Rental Price | Chaudhary Luxury Cars" },
      { property: "og:description", content: "See photos, specifications and 13-hour rental pricing for every luxury car we rent across Delhi NCR, Haryana and Uttar Pradesh. Fuel, driver, decoration and toll included." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Chaudhary Luxury Cars" },
      { property: "og:url", content: "https://drive-elegance-collective.lovable.app/car-details" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Car Details, Specs & 13-Hour Rental Price | Chaudhary Luxury Cars" },
      { name: "twitter:description", content: "See photos, specifications and 13-hour rental pricing for every luxury car we rent across Delhi NCR, Haryana and Uttar Pradesh. Fuel, driver, decoration and toll included." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "https://drive-elegance-collective.lovable.app/car-details" }],
  }),
  component: CarDetails,
});

const features = [
  { icon: Fuel, label: "Fuel included" },
  { icon: UsersRound, label: "Driver included" },
];

function CarDetails() {
  const { car: carName } = Route.useSearch();
  const car = findCar(carName);
  const photos = carPhotosFor(car);
  const [photo, setPhoto] = useState(0);

  useEffect(() => {
    setPhoto(0);
  }, [car.name]);

  useEffect(() => {
    if (photos.length < 2) return;
    const timer = window.setInterval(() => setPhoto((current) => (current + 1) % photos.length), 3500);
    return () => window.clearInterval(timer);
  }, [photos.length, car.name]);

  const go = (step: number) => setPhoto((current) => (current + step + photos.length) % photos.length);

  const specs = [
    { icon: Gauge, value: car.speed, label: "top speed" },
    { icon: UsersRound, value: car.seats, label: "capacity" },
    { icon: ShieldCheck, value: car.airbags, label: "safety" },
    { icon: Workflow, value: car.transmission, label: "transmission" },
  ];

  const current = photos[photo] ?? photos[0]!;

  return (
    <main className="min-h-screen w-full bg-background pb-[68px]">
      <SitePageHeader title="Car Details" />

      <div className="mx-auto w-full max-w-[420px] shadow-page sm:my-3 sm:overflow-hidden sm:rounded-[1rem]">
        <section className="relative h-[230px] overflow-hidden bg-gallery" aria-label={`${car.name} photos`}>
          {photos.map((item, index) => (
            <img
              key={item.src}
              src={item.src}
              alt={index === photo ? item.alt : ""}
              className={cn(
                "absolute inset-0 h-full w-full transition-opacity duration-500",
                item.contain ? "object-contain p-3" : "object-cover",
                index === photo ? "opacity-100" : "opacity-0",
              )}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}

          {photos.length > 1 && (
            <>
              <button type="button" aria-label="Previous photo" onClick={() => go(-1)} className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 shadow-sm backdrop-blur transition hover:bg-background">
                <ChevronLeft className="size-4" />
              </button>
              <button type="button" aria-label="Next photo" onClick={() => go(1)} className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 shadow-sm backdrop-blur transition hover:bg-background">
                <ChevronRight className="size-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                {photos.map((item, index) => (
                  <button
                    key={`dot-${item.src}`}
                    type="button"
                    aria-label={`Show photo ${index + 1}`}
                    onClick={() => setPhoto(index)}
                    className={cn("h-1.5 rounded-full bg-gallery-dot transition-all", index === photo ? "w-5 bg-foreground" : "w-1.5")}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        <div className="px-4 pb-2 pt-3">
          <section>
            <h2 className="text-[1.35rem] font-semibold leading-tight">{car.name}</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">{car.category}</p>
          </section>

          <section className="mt-4 grid grid-cols-2 gap-2" aria-label="Vehicle specifications">
            {specs.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex min-h-[58px] items-center gap-2 rounded-md bg-card px-2.5 py-2">
                <Icon className="size-5 shrink-0 text-price" strokeWidth={1.8} />
                <div className="min-w-0">
                  <p className="truncate text-[0.82rem] font-semibold leading-tight">{value}</p>
                  <p className="mt-0.5 text-[0.68rem] leading-tight text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-4">
            <h2 className="text-base font-semibold uppercase">Overview</h2>
            <p className="mt-1.5 text-[0.8rem] leading-[1.45] text-muted-foreground">
              {current.alt}. Book the {car.name} for weddings, events and corporate travel across Delhi NCR, Haryana and Uttar Pradesh. The 13-hour package includes fuel, driver, decoration and toll; extra kilometres and extra time depend on the car.
            </p>
          </section>

          <section className="mt-4">
            <h2 className="text-base font-semibold uppercase">Included</h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex h-7.5 items-center gap-1.5 rounded-full border border-border bg-card px-2.5">
                  <Icon className="size-3.5 text-benefit" strokeWidth={1.8} />
                  <span className="text-xs font-medium text-benefit">{label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-4">
            <h2 className="text-base font-semibold uppercase">Rental partner</h2>
            <div className="mt-2 flex items-center rounded-md bg-card p-2.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-primary">CLC</div>
              <div className="ml-3 min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">Chaudhary Luxury Cars</p>
                <p className="text-xs text-muted-foreground">{PHONE_DISPLAY} · 24/7 service</p>
              </div>
              <Button variant="iconSoft" aria-label={`Call Chaudhary Luxury Cars at ${PHONE_DISPLAY}`} asChild>
                <a href={PHONE_LINK}><Phone className="size-4" strokeWidth={2} /></a>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <footer className="fixed inset-x-0 bottom-0 z-20 mx-auto grid h-[68px] w-full max-w-[420px] grid-cols-[minmax(0,1fr)_auto] items-center border-t border-bar-border bg-footer px-4">
        <div>
          <p className="text-[0.68rem] text-footer-muted">Starting price for 13 hours</p>
          <p className="text-lg font-semibold text-footer-foreground">{car.price}</p>
        </div>
        <Button variant="booking" asChild>
          <a href={bookingLink(car)} target="_blank" rel="noopener noreferrer">Rent now</a>
        </Button>
      </footer>
    </main>
  );
}
