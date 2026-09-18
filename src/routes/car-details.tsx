import { createFileRoute, useRouter } from "@tanstack/react-router";
import {
  ArrowLeft,
  Fuel,
  Gauge,
  Phone,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import mercedesConvertible from "@/assets/fleet/mercedes-convertible-white.png";

export const Route = createFileRoute("/car-details")({
  head: () => ({
    meta: [
      { title: "Mercedes Convertible Rental | Chaudhary Car Rental" },
      { name: "description", content: "Book a white Mercedes convertible in NCR from ₹20,000 per 13 hours, with fuel and driver included." },
      { property: "og:title", content: "Mercedes Convertible Rental" },
      { property: "og:description", content: "White Mercedes convertible rental with fuel and driver included." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CarDetails,
});

const specs = [
  { icon: Gauge, value: "250 km/h", label: "top speed" },
  { icon: UsersRound, value: "4 seats", label: "capacity" },
  { icon: ShieldCheck, value: "7 airbags", label: "safety" },
  { icon: Workflow, value: "Automatic", label: "9-speed" },
];

const features = [
  { icon: Fuel, label: "Fuel included" },
  { icon: UsersRound, label: "Driver included" },
];

function CarDetails() {
  const router = useRouter();
  const [photo, setPhoto] = useState(0);
  const [booked, setBooked] = useState(false);

  const nextPhoto = () => setPhoto((current) => (current + 1) % 3);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[400px] bg-background pb-20 shadow-page sm:my-4 sm:min-h-[calc(100vh-2rem)] sm:overflow-hidden sm:rounded-[1rem]">
      <header className="grid h-[56px] grid-cols-[auto_minmax(0,1fr)] items-center px-4">
        <Button variant="iconDark" aria-label="Go back" onClick={() => router.history.back()}>
          <ArrowLeft className="size-5" strokeWidth={2.2} />
        </Button>
        <h1 className="truncate text-center text-[1rem] font-semibold uppercase">Car details</h1>
      </header>

      <section className="relative h-[210px] overflow-hidden bg-gallery" aria-label="Vehicle photos" onClick={nextPhoto}>
        <img src={mercedesConvertible} alt="White Mercedes convertible" className={cn("absolute inset-x-0 top-6 mx-auto h-[166px] w-[88%] object-contain transition-transform duration-500", photo === 1 && "scale-[1.04]", photo === 2 && "scale-95")} />
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5" aria-label={`Photo ${photo + 1} of 3`}>
          {[0, 1, 2].map((dot) => (
            <span key={dot} className={cn("h-1.5 rounded-full bg-gallery-dot", dot === photo ? "w-5 bg-foreground" : "w-1.5")} />
          ))}
        </div>
      </section>

      <div className="px-4 pb-5 pt-3">
        <section>
          <h2 className="text-[1.35rem] font-semibold leading-tight">Mercedes Convertible White</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">White · Convertible</p>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-2" aria-label="Vehicle specifications">
          {specs.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex min-h-[58px] items-center gap-2 rounded-md bg-card px-2.5 py-2">
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
          <p className="mt-1.5 text-[0.8rem] leading-[1.45] text-muted-foreground">A premium white Mercedes convertible for luxury arrivals, weddings, and special events across NCR.</p>
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
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-primary">CCR</div>
            <div className="ml-3 min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Chaudhary Car Rental</p>
              <p className="text-xs text-muted-foreground">NCR · 24/7 service</p>
            </div>
            <Button variant="iconSoft" aria-label="Contact Chaudhary Car Rental" asChild>
              <a href="https://wa.me/919990569473" target="_blank" rel="noreferrer"><Phone className="size-4" strokeWidth={2} /></a>
            </Button>
          </div>
        </section>

      </div>


      <footer className="fixed inset-x-0 bottom-0 z-20 mx-auto grid h-[68px] w-full max-w-[400px] grid-cols-[minmax(0,1fr)_auto] items-center border-t border-bar-border bg-footer px-4 sm:bottom-4 sm:rounded-b-[1rem]">
        <div>
          <p className="text-[0.68rem] text-footer-muted">Total for 13 hours</p>
          <p className="text-lg font-semibold text-footer-foreground">₹20,000</p>
        </div>
        <Button variant="booking" onClick={() => setBooked(true)}>{booked ? "Request sent" : "Rent now"}</Button>
      </footer>
    </main>
  );
}
