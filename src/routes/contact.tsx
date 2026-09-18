import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { SitePageHeader } from "@/components/site-page-header";
import { cn } from "@/lib/utils";
import { fleetCars } from "@/data/fleet";
import { MercedesStarIcon } from "@/components/brand-icons";

const offices = [
  {
    label: "Panipat office",
    address: "92M8+62C, Sanoli Rd, Sewah Kheri, Ujra Keri Village, Panipat Taraf Afghan, Panipat, Haryana 132104, India",
    directions: "https://www.google.com/maps/search/?api=1&query=92M8%2B62C%2C%20Sanoli%20Rd%2C%20Panipat%2C%20Haryana%20132104",
  },
  {
    label: "Ghaziabad office",
    address: "Shop 5, Choudhary Luxury Cars, 24/7 Police Chowki, near Karan Gate, Sector 2, Pasonda, Sahibabad, Ghaziabad, Uttar Pradesh 201005",
    directions: "https://maps.app.goo.gl/uMXTnHVd3iF1d8iEA",
  },
] as const;

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(offices[0].address)}&output=embed`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Luxury Car | Chaudhary Luxury Cars" },
      {
        name: "description",
        content: "Book a luxury car in Panipat and Delhi NCR. Send your rental enquiry directly to Chaudhary Luxury Cars on WhatsApp.",
      },
      { property: "og:title", content: "Book a Luxury Car | Chaudhary Luxury Cars" },
      {
        property: "og:description",
        content: "Choose your car, share your trip details, and enquire directly on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [hours, setHours] = useState(13);
  const [selectedCar, setSelectedCar] = useState(fleetCars[0]!);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim().slice(0, 100);
    const phone = String(form.get("phone") || "").replace(/[^0-9+ -]/g, "").trim().slice(0, 20);
    const address = String(form.get("address") || "").trim().slice(0, 300);
    const car = String(form.get("car") || "").trim().slice(0, 100);
    const carDetails = fleetCars.find((item) => item.name === car);
    const pickupDate = String(form.get("pickupDate") || "").trim();
    const pickupTime = String(form.get("pickupTime") || "").trim();
    const duration = Math.max(13, Math.min(240, Number(form.get("hours")) || 13));
    const notes = String(form.get("notes") || "").trim().slice(0, 500);

    if (!name || !phone || !address || !car || !pickupDate || !pickupTime) return;

    const text = [
      "New luxury car rental enquiry",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Car required: ${car}${carDetails ? ` (${carDetails.category})` : ""}`,
      carDetails ? `Listed starting price: ${carDetails.price} for 13 hours` : "",
      `Pickup date: ${pickupDate}`,
      `Pickup time: ${pickupTime}`,
      `Rental duration: ${duration} hours`,
      `Pickup address: ${address}`,
      notes ? `Additional details: ${notes}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/919990569473?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SitePageHeader title="Contact Us" />
      <section className="border-b border-warm-line">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-7 sm:py-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="display-type text-3xl leading-none uppercase sm:text-5xl">
              Book your <span className="text-primary">perfect ride</span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Choose your car and share your trip details with our booking team.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-7 px-4 py-6 sm:px-7 sm:py-10 lg:grid-cols-[1.35fr_0.65fr] lg:px-10">
        <form onSubmit={handleSubmit} className="rounded-md border border-warm-line bg-card p-4 shadow-lg shadow-foreground/5 sm:p-6">
          <div className="mb-5 flex items-center gap-3 border-b border-warm-line pb-4">
            <MercedesStarIcon className="size-9 shrink-0 text-foreground" />
            <div className="min-w-0">
              <h2 className="display-type truncate text-lg uppercase sm:text-xl">Rental enquiry</h2>
              <p className="text-xs text-muted-foreground">Fields marked * are required</p>
            </div>
          </div>

          <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
            <label className="grid gap-1 text-[11px] font-bold uppercase text-muted-foreground">
              Full name *
              <input required name="name" maxLength={100} autoComplete="name" placeholder="Your full name" className="field-luxury h-10 text-sm font-medium normal-case text-foreground placeholder:text-muted-foreground/60" />
            </label>
            <label className="grid gap-1 text-[11px] font-bold uppercase text-muted-foreground">
              Phone number *
              <input required name="phone" type="tel" maxLength={20} minLength={8} autoComplete="tel" inputMode="tel" placeholder="Your WhatsApp number" className="field-luxury h-10 text-sm font-medium normal-case text-foreground placeholder:text-muted-foreground/60" />
            </label>
            <div className="grid gap-2 sm:col-span-2">
              <p className="text-[11px] font-bold uppercase text-muted-foreground">
                Car required * <span className="normal-case text-foreground">{selectedCar.name}</span>
              </p>
              <input type="hidden" name="car" value={selectedCar.name} />
              <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 py-2" role="radiogroup" aria-label="Select the car you need">
                {fleetCars.map((car) => {
                  const active = car.name === selectedCar.name;
                  return (
                    <button
                      type="button"
                      key={car.name}
                      role="radio"
                      aria-checked={active}
                      onClick={() => setSelectedCar(car)}
                      className={cn(
                        "relative w-44 shrink-0 snap-start rounded-2xl border-2 p-3 text-left transition-all duration-300",
                        active
                          ? "border-primary bg-primary/15 shadow-lg shadow-primary/30 -translate-y-0.5"
                          : "border-warm-line bg-background hover:-translate-y-0.5 hover:border-primary/50",
                      )}
                    >
                      {active && (
                        <span className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                      )}
                      <img src={car.image} alt={car.alt} className="h-24 w-full object-contain" loading="lazy" />
                      <p className="mt-1 truncate text-[11px] font-bold uppercase leading-4 text-foreground">{car.name}</p>
                      <p className="truncate text-[10px] font-medium normal-case text-muted-foreground">{car.category}</p>
                      <p className="mt-0.5 text-[11px] font-bold text-primary-strong">{car.price} / 13 hrs</p>
                    </button>
                  );
                })}
              </div>
            </div>
            <label className="grid gap-1 text-[11px] font-bold uppercase text-muted-foreground">
              Pickup date *
              <input required name="pickupDate" type="date" className="field-luxury h-10 min-w-0 text-sm font-medium normal-case text-foreground" />
            </label>
            <label className="grid gap-1 text-[11px] font-bold uppercase text-muted-foreground">
              Pickup time *
              <input required name="pickupTime" type="time" className="field-luxury h-10 min-w-0 text-sm font-medium normal-case text-foreground" />
            </label>
            <label className="grid gap-1 text-[11px] font-bold uppercase text-muted-foreground">
              Rental duration *
              <div className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-3">
                <input
                  required
                  name="hours"
                  type="number"
                  min={13}
                  max={240}
                  value={hours}
                  onChange={(event) => setHours(Math.max(13, Number(event.target.value) || 13))}
                  className="h-10 w-20 rounded-md border border-input bg-background px-3 text-sm font-bold normal-case text-foreground outline-none focus:border-foreground"
                />
                <span className="text-xs font-medium normal-case leading-4 text-muted-foreground">hours · minimum 13</span>
              </div>
            </label>
            <label className="grid gap-1 text-[11px] font-bold uppercase text-muted-foreground sm:col-span-2">
              Your pickup address *
              <textarea required name="address" maxLength={300} rows={2} autoComplete="street-address" placeholder="House number, street, city and landmark" className="field-luxury resize-none py-2 text-sm font-medium normal-case text-foreground placeholder:text-muted-foreground/60" />
            </label>
            <label className="grid gap-1 text-[11px] font-bold uppercase text-muted-foreground sm:col-span-2">
              Additional details <span className="normal-case text-muted-foreground/70">(optional)</span>
              <textarea name="notes" maxLength={500} rows={2} placeholder="Occasion, colour preference, special requests..." className="field-luxury resize-none py-2 text-sm font-medium normal-case text-foreground placeholder:text-muted-foreground/60" />
            </label>
          </div>

          <Button type="submit" variant="dark" size="lg" className="mt-5 w-full rounded-md sm:w-auto">
            Book Now <ArrowUpRight aria-hidden="true" />
          </Button>
        </form>

        <aside className="space-y-6 lg:pt-1">
          <div>
            <p className="text-[11px] font-bold uppercase text-primary-strong">Our contact info</p>
            <h2 className="display-type mt-2 text-2xl uppercase leading-none">Visit or call us</h2>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-[1rem_minmax(0,1fr)] items-start gap-3 border-b border-warm-line pb-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary-strong" aria-hidden="true" />
              <span className="min-w-0">
                <small className="block text-[10px] font-bold uppercase text-muted-foreground">Booking numbers</small>
                <span className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold">
                  <a href="tel:+919990569473">099905 69473</a>
                  <a href="tel:+918130765231">81307 65231</a>
                  <a href="tel:+918708084187">87080 84187</a>
                </span>
              </span>
            </div>
            <a href="mailto:choak1999@gmail.com" className="grid grid-cols-[1rem_minmax(0,1fr)] items-start gap-3 border-b border-warm-line pb-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary-strong" aria-hidden="true" />
              <span className="min-w-0"><small className="block text-[10px] font-bold uppercase text-muted-foreground">Email</small><strong className="mt-1 block truncate text-sm">choak1999@gmail.com</strong></span>
            </a>
            <div className="grid grid-cols-[1rem_minmax(0,1fr)] items-start gap-3 border-b border-warm-line pb-3">
              <Clock3 className="mt-0.5 size-4 shrink-0 text-primary-strong" aria-hidden="true" />
              <span><small className="block text-[10px] font-bold uppercase text-muted-foreground">Availability</small><strong className="mt-1 block text-sm">Open 24 hours</strong></span>
            </div>
            {offices.map((office) => (
              <a key={office.label} href={office.directions} target="_blank" rel="noreferrer" className="grid grid-cols-[1rem_minmax(0,1fr)] items-start gap-3 border-b border-warm-line pb-3 last:border-0">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-strong" aria-hidden="true" />
                <span className="min-w-0"><small className="block text-[10px] font-bold uppercase text-muted-foreground">{office.label}</small><strong className="mt-1 block text-xs leading-5">{office.address}</strong></span>
              </a>
            ))}
          </div>

          <div className="overflow-hidden rounded-md border border-warm-line bg-muted">
            <iframe
              title="Chaudhary Luxury Cars Panipat office location"
              src={mapUrl}
              width="600"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-44 w-full border-0 sm:h-52"
            />
          </div>
          <Button asChild variant="outline" size="default" className="w-full bg-transparent font-bold shadow-none">
            <a href={offices[0].directions} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Open Panipat Map</a>
          </Button>
        </aside>
      </section>
    </main>
  );
}