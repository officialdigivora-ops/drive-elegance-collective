import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Armchair,
  CircleUserRound,
  Cog,
  Gauge,
  Phone,
  Menu,
  ShieldCheck,
  Tag,
  X,
} from "lucide-react";
import {
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
  PhoneIcon,
} from "@/components/brand-icons";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import audiLogo from "../assets/brands/audi.svg.asset.json";
import bentleyLogo from "../assets/brands/bentley.svg.asset.json";
import bmwLogo from "../assets/brands/bmw.svg.asset.json";
import fordLogo from "../assets/brands/ford.svg.asset.json";
import hummerLogo from "../assets/brands/hummer.svg.asset.json";
import hyundaiLogo from "../assets/brands/hyundai.svg.asset.json";
import jaguarLogo from "../assets/brands/jaguar.svg.asset.json";
import landRoverLogo from "../assets/brands/land-rover.svg.asset.json";
import mercedesLogo from "../assets/brands/mercedes.svg.asset.json";
import miniLogo from "../assets/brands/mini.svg.asset.json";
import porscheLogo from "../assets/brands/porsche.png.asset.json";
import rollsRoyceLogo from "../assets/brands/rolls-royce.svg.asset.json";
import toyotaLogo from "../assets/brands/toyota.svg.asset.json";
import yellowBentley from "../assets/hero/bentley-continental-gt-yellow.png";
import audiA3Convertible from "../assets/fleet/audi-a3-convertible.png";
import audiA3ConvertibleWhite from "../assets/fleet/audi-a3-convertible-white.png";
import audiA4 from "../assets/fleet/audi-a4.png";
import audiA6 from "../assets/fleet/audi-a6-white.png";
import audiQ7 from "../assets/fleet/audi-q7-white.png";
import bentleyConvertibleRed from "../assets/fleet/bentley-convertible-red.png";
import bentleySunroof from "../assets/fleet/bentley-sunroof-white.png";
import bmw5Series from "../assets/fleet/bmw-5-series-white.png";
import bmwConvertibleWhite from "../assets/fleet/bmw-convertible-white.png";
import hummerH2 from "../assets/fleet/hummer-h2-white.png";
import hyundaiVerna from "../assets/fleet/hyundai-verna-white.png";
import jaguarXf from "../assets/fleet/jaguar-xf-white.png";
import jaguarXjl from "../assets/fleet/jaguar-xjl-white.png";
import landRoverDefender from "../assets/fleet/land-rover-defender-white.png";
import mercedesCClass from "../assets/fleet/mercedes-c-300-white.png";
import mercedesCla from "../assets/fleet/mercedes-cla-white.png";
import mercedesConvertibleRed from "../assets/fleet/mercedes-convertible-red.png";
import mercedesConvertibleWhite from "../assets/fleet/mercedes-convertible-white.png";
import mercedesEClass from "../assets/fleet/mercedes-e-class-white.png";
import mercedesGWagon from "../assets/fleet/mercedes-g-wagon-white.png";
import mercedesMaybach from "../assets/fleet/mercedes-maybach-white.png";
import miniCooperConvertibleRed from "../assets/fleet/mini-cooper-convertible-red.png";
import rangeRoverEvoqueConvertibleRed from "../assets/fleet/range-rover-evoque-convertible-red.png";
import rangeRoverSportWhite from "../assets/fleet/range-rover-sport-sv-white.png";
import rangeRoverVelar from "../assets/fleet/range-rover-velar-autobiography-white.png";
import rollsRoyceGhost from "../assets/fleet/rolls-royce-ghost.png";
import toyotaFortuner from "../assets/fleet/toyota-fortuner.png";
import limousineLongNew from "../assets/fleet/limousine-long-new-white.png";
import mustangGt from "../assets/fleet/mustang-gt-red.png";
import vintageLuxury from "../assets/fleet/vintage-luxury-white.png";
import brandLogo from "../assets/brand/chaudhary-logo.png";

const BRAND = "Chaudhary Luxury Cars";
const PHONE_DISPLAY = "+91 99905 69473";
const PHONE_LINK = "tel:+919990569473";
const ADDRESS = "92M8+62C, Sanoli Rd, Sewah Kheri, Ugra Kheri Village, Panipat Taraf Afghan, Panipat, Haryana 132104, India";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=92M8%2B62C%20Sanoli%20Rd%20Panipat%20Haryana%20132104";
const INSTAGRAM = "https://www.instagram.com/choudharyluxurycars";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61554864970019";
const WHATSAPP = "https://wa.me/919990569473";
const GOOGLE_PROFILE = "https://share.google/fSzEj9gUriU26zQxY";

const SITE_URL = "https://drive-elegance-collective.lovable.app";
const TITLE = "Luxury Car Rental in Delhi NCR | Chaudhary Luxury Cars";
const DESCRIPTION = "Chaudhary Luxury Cars offers wedding, event and corporate luxury car rental across Delhi NCR, Haryana and Uttar Pradesh. 100+ premium cars, 13-hour packages with fuel, driver, decoration and toll. Call +91 99905 69473.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "luxury car rental Delhi NCR, wedding car rental Haryana, luxury car hire Uttar Pradesh, Rolls Royce rental Delhi, Mercedes wedding car Panipat, Range Rover rental NCR" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Chaudhary Luxury Cars" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRental",
        name: "Chaudhary Luxury Cars",
        description: DESCRIPTION,
        url: SITE_URL,
        telephone: "+91 99905 69473",
        priceRange: "₹4,000 - ₹2,00,000 per 13 hours",
        address: {
          "@type": "PostalAddress",
          streetAddress: "92M8+62C, Sanoli Rd, Sewah Kheri, Ugra Kheri Village",
          addressLocality: "Panipat",
          addressRegion: "Haryana",
          postalCode: "132104",
          addressCountry: "IN",
        },
        areaServed: ["Delhi", "New Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad", "Panipat", "Sonipat", "Karnal", "Meerut", "Agra", "NCR", "Haryana", "Uttar Pradesh"],
        openingHours: "Mo-Su 00:00-23:59",
        image: `${SITE_URL}/apple-touch-icon.png`,
        sameAs: [
          "https://www.instagram.com/choudharyluxurycars",
          "https://www.facebook.com/profile.php?id=61554864970019",
        ],
      }),
    }],
  }),
  component: Index,
});

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Book Now", href: "/contact" },
];

const contactOptions = [
  { label: "Call", href: PHONE_LINK, icon: PhoneIcon, tile: "bg-[#34A853] text-white", iconColor: "" },
  { label: "WhatsApp", href: WHATSAPP, icon: WhatsAppIcon, tile: "bg-[#25D366] text-white", iconColor: "" },
  { label: "Facebook", href: FACEBOOK, icon: FacebookIcon, tile: "bg-[#1877F2] text-white", iconColor: "" },
  { label: "Instagram", href: INSTAGRAM, icon: InstagramIcon, tile: "bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white", iconColor: "" },
  { label: "Google", href: GOOGLE_PROFILE, icon: GoogleIcon, tile: "bg-white text-white ring-1 ring-black/10", iconColor: "" },
] as const;

function ContactOptionsDialog({ footer = false }: { footer?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className={footer
            ? "h-10 self-start rounded-full px-6 text-xs font-bold shadow-[0_4px_14px_color-mix(in_oklab,var(--primary)_45%,transparent)] sm:self-auto"
            : "h-9 rounded-full px-4 text-xs font-bold shadow-[0_4px_14px_color-mix(in_oklab,var(--primary)_45%,transparent)] hover:bg-primary-hover sm:px-5"}
        >
          <Phone size={15} /> Contact Now
        </Button>
      </DialogTrigger>
      <DialogContent className="left-1/2 top-auto bottom-3 w-[calc(100%-1.5rem)] max-w-md translate-x-[-50%] translate-y-0 gap-5 rounded-2xl border-border p-4 sm:bottom-auto sm:top-1/2 sm:translate-y-[-50%] sm:p-5">
        <DialogHeader className="pr-8 text-left">
          <DialogTitle className="font-display text-xl font-black uppercase">Connect with us</DialogTitle>
          <DialogDescription>Choose how you would like to contact Chaudhary Luxury Cars.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-5 gap-1.5" aria-label="Contact options">
          {contactOptions.map(({ label, href, icon: Icon, tile }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="group flex min-w-0 flex-col items-center gap-1.5"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm transition-transform group-hover:scale-105 group-active:scale-95 sm:h-14 sm:w-14 ${tile}`}>
                <Icon className="size-6 sm:size-7" />
              </span>
              <span className="max-w-full truncate text-[9px] font-bold sm:text-[10px]">{label}</span>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:grid-cols-3 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label={`${BRAND} home`}>
          <img src={brandLogo} width={1536} height={768} alt={`${BRAND} logo`} className="h-12 w-auto sm:h-14" />
          <span className="sr-only">{BRAND}</span>
        </a>
        <nav className="hidden items-center justify-center gap-8 text-sm font-semibold md:flex" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.label} href={item.href} className="transition-colors hover:text-primary">{item.label}</a>)}
        </nav>
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button className="hidden h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105 sm:flex" aria-label="Open profile"><CircleUserRound size={19} /></button>
          <ContactOptionsDialog />
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-4 md:hidden">{navItems.map((item) => <a key={item.label} href={item.href} className="block border-b border-border py-3 text-sm font-bold" onClick={() => setOpen(false)}>{item.label}</a>)}</nav>}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-2 sm:pt-3 md:pt-4">
      <div className="relative z-10 px-5 text-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-normal sm:text-7xl lg:text-8xl">LUXURY CAR<br />RENTAL</h1>
      </div>
      <div className="relative mt-1 h-[270px] sm:h-[380px] md:h-[500px] lg:h-[540px]">
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-primary [clip-path:polygon(0_22%,100%_0,100%_100%,0_100%)]" />
        <span className="spark absolute right-[8%] top-[20%] z-10 text-primary">✦</span>
        <img src={yellowBentley} width={1536} height={768} alt="Yellow Bentley Continental GT luxury coupe" className="absolute left-1/2 top-1/2 z-10 w-[104%] max-w-[68rem] -translate-x-1/2 -translate-y-[44%] object-contain" />
      </div>
    </section>
  );
}


type Car = {
  name: string; type: string; speed: string; seats: string; airbags: string;
  transmission: string; price: number; image: string;
};

const cars: [Car, ...Car[]] = [
  { name:"Mercedes Convertible White", type:"Convertible", speed:"250 km/h", seats:"4 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:20000, image:mercedesConvertibleWhite },
  { name:"Audi A6 White", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"7-speed Automatic", price:10000, image:audiA6 },
  { name:"Bmw 5 Series White", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"6 airbags", transmission:"8-speed Automatic", price:12000, image:bmw5Series },
  { name:"Bentley Convertible Red", type:"Convertible", speed:"335 km/h", seats:"4 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:70000, image:bentleyConvertibleRed },
  { name:"Audi A3 Convertible White", type:"Convertible", speed:"220 km/h", seats:"4 seats", airbags:"6 airbags", transmission:"7-speed Automatic", price:16000, image:audiA3ConvertibleWhite },
  { name:"Jaguar Xf White", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"7 airbags", transmission:"8-speed Automatic", price:13000, image:jaguarXf },
  { name:"Mercedes Convertible Red", type:"Convertible", speed:"250 km/h", seats:"4 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:20000, image:mercedesConvertibleRed },
  { name:"Audi Q7 7 Seater White", type:"7-Seater SUV", speed:"234 km/h", seats:"7 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:16000, image:audiQ7 },
  { name:"Mercedes C 300 White", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:14000, image:mercedesCClass },
  { name:"Mercedes Cla White", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"7 airbags", transmission:"8-speed Automatic", price:13000, image:mercedesCla },
  { name:"Jaguar Xjl White", type:"Luxury Sedan", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:20000, image:jaguarXjl },
  { name:"Mini Cooper Convertible Red", type:"Convertible", speed:"210 km/h", seats:"4 seats", airbags:"6 airbags", transmission:"7-speed Automatic", price:15000, image:miniCooperConvertibleRed },
  { name:"Rolls Royce Sedan White", type:"Luxury Sedan", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:200000, image:rollsRoyceGhost },
  { name:"Mercedes Maybach White", type:"Luxury Sedan", speed:"250 km/h", seats:"4–5 seats", airbags:"8 airbags", transmission:"9-speed Automatic", price:40000, image:mercedesMaybach },
  { name:"Gwagon White", type:"SUV", speed:"210 km/h", seats:"5 seats", airbags:"9 airbags", transmission:"9-speed Automatic", price:90000, image:mercedesGWagon },
  { name:"Audi A4 White", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"7-speed Automatic", price:7000, image:audiA4 },
  { name:"Limousine Long New White", type:"Luxury Limousine", speed:"180 km/h", seats:"8 seats", airbags:"6 airbags", transmission:"9-speed Automatic", price:18000, image:limousineLongNew },
  { name:"Range Rover Evoque Convertible Red", type:"Convertible SUV", speed:"209 km/h", seats:"4 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:75000, image:rangeRoverEvoqueConvertibleRed },
  { name:"Bmw Convertible White", type:"Convertible", speed:"250 km/h", seats:"4 seats", airbags:"6 airbags", transmission:"8-speed Automatic", price:20000, image:bmwConvertibleWhite },
  { name:"Audi A3 Convertible Red", type:"Convertible", speed:"220 km/h", seats:"4 seats", airbags:"6 airbags", transmission:"7-speed Automatic", price:18000, image:audiA3Convertible },
  { name:"Mustang GT Red", type:"Sports Coupe", speed:"250 km/h", seats:"4 seats", airbags:"8 airbags", transmission:"6-speed Manual", price:90000, image:mustangGt },
  { name:"Mercedes E Class White", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:20000, image:mercedesEClass },
  { name:"Vintages White", type:"Classic Car", speed:"160 km/h", seats:"4 seats", airbags:"2 airbags", transmission:"4-speed Manual", price:21000, image:vintageLuxury },
  { name:"Range Rover Velar White", type:"SUV", speed:"225 km/h", seats:"5 seats", airbags:"6 airbags", transmission:"8-speed Automatic", price:40000, image:rangeRoverVelar },
  { name:"Fortuner Legender White", type:"SUV", speed:"175 km/h", seats:"7 seats", airbags:"7 airbags", transmission:"6-speed Automatic", price:10000, image:toyotaFortuner },
  { name:"Range Rover Sport White", type:"SUV", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:40000, image:rangeRoverSportWhite },
  { name:"Bentley Sunroof White", type:"Luxury Sedan", speed:"333 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:45000, image:bentleySunroof },
  { name:"Hummee H2 White", type:"SUV", speed:"160 km/h", seats:"5–6 seats", airbags:"4 airbags", transmission:"4-speed Automatic", price:48000, image:hummerH2 },
  { name:"Defender White", type:"SUV", speed:"191 km/h", seats:"5–6 seats", airbags:"6 airbags", transmission:"8-speed Automatic", price:45000, image:landRoverDefender },
  { name:"Verna New Model White", type:"Sedan", speed:"195 km/h", seats:"5 seats", airbags:"6 airbags", transmission:"7-speed Automatic", price:4000, image:hyundaiVerna },
];

function CarImage({ car, position, direction }: { car: Car; position: "previous" | "active" | "next"; direction: 1 | -1 }) {
  return (
    <div className={`fleet-car fleet-car--${position} fleet-car--moving-${direction > 0 ? "forward" : "back"}`} aria-hidden={position !== "active"}>
      <div className="fleet-car-shadow" />
      <img src={car.image} alt={position === "active" ? `${car.name}, ${car.type}` : ""} className="fleet-car-image" loading="lazy" width={1264} height={848} draggable={false} />
    </div>
  );
}

function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef<number | null>(null);
  const previousIndex = (activeIndex - 1 + cars.length) % cars.length;
  const nextIndex = (activeIndex + 1) % cars.length;
  const carAt = (index: number) => cars[index] ?? cars[0];
  const activeCar = carAt(activeIndex);
  const advance = useCallback((direction = 1) => {
    setDirection(direction > 0 ? 1 : -1);
    setActiveIndex((current) => (current + direction + cars.length) % cars.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => advance(), 4500);
    return () => window.clearInterval(timer);
  }, [advance, paused]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    if (Math.abs(distance) > 45) advance(distance < 0 ? 1 : -1);
    dragStart.current = null;
  };

  const specs = [
    [Gauge, activeCar.speed, "Top speed"], [Armchair, activeCar.seats, "Capacity"],
    [ShieldCheck, activeCar.airbags, "Safety"], [Cog, activeCar.transmission, "Transmission"],
  ] as const;

  return (
    <section id="fleet" className="fleet-showcase overflow-hidden py-7 sm:py-9 md:py-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div className="px-5 text-center">
        <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">PICK YOUR DREAM<br />CAR TODAY</h2>
        <p className="mt-4 text-xs font-bold uppercase text-muted-foreground" aria-live="polite">{activeCar.name} · {activeCar.type}</p>
      </div>
      <div className="relative mt-4 sm:mt-6 md:mt-8">
        <div className="fleet-stage touch-pan-y select-none" aria-label="Swipe through available cars" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerCancel={() => { dragStart.current = null; }}>
          <CarImage key={`previous-${activeIndex}`} car={carAt(previousIndex)} position="previous" direction={direction} />
          <CarImage key={`active-${activeIndex}`} car={activeCar} position="active" direction={direction} />
          <CarImage key={`next-${activeIndex}`} car={carAt(nextIndex)} position="next" direction={direction} />
        </div>
        <Button type="button" variant="outline" size="icon" className="fleet-arrow left-4 rounded-full sm:left-8" onClick={() => advance(-1)} aria-label="Previous car"><ChevronLeft /></Button>
        <Button type="button" variant="outline" size="icon" className="fleet-arrow right-4 rounded-full sm:right-8" onClick={() => advance(1)} aria-label="Next car"><ChevronRight /></Button>
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-x-3 gap-y-5 px-5 sm:grid-cols-4 sm:gap-y-6">
        {specs.map(([Icon,value,label]) => <div key={label} className="min-w-0 text-center"><Icon className="mx-auto text-muted-foreground" size={22} /><strong className="mt-2 block text-xs sm:text-sm">{value}</strong><span className="text-[10px] text-muted-foreground">{label}</span></div>)}
      </div>
      <div className="mx-auto mt-5 grid w-[calc(100%-2.5rem)] max-w-xl gap-3 rounded-2xl bg-surface p-3 shadow-card sm:grid-cols-[1fr_auto] sm:items-center">
         <div className="flex items-center justify-center gap-3 px-2 sm:justify-start"><Tag size={18} className="text-primary"/><span className="text-xl font-black">₹{activeCar.price.toLocaleString("en-IN")}</span><small className="text-muted-foreground">/ 13 hours</small></div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <Button asChild className="h-11 rounded-full px-6 text-xs"><a href={`https://wa.me/919990569473?text=${encodeURIComponent(`Hello Chaudhary Luxury Cars, I would like to book the ${activeCar.name} (${activeCar.type}). The listed starting price is ₹${activeCar.price.toLocaleString("en-IN")} for 13 hours. Please confirm availability, final price, and pickup details. I understand the package includes fuel, driver, decoration, and toll; extra kilometres and extra time depend on the car.`)}`} target="_blank" rel="noopener noreferrer">Rent Now</a></Button>
          <Button asChild variant="secondary" className="h-11 rounded-full bg-foreground px-6 text-xs font-bold uppercase tracking-wider text-background hover:bg-foreground/90"><Link to="/fleet">Show all</Link></Button>
        </div>
      </div>
    </section>
  );
}


function BrandStrip() {
  const brands = [
    { name: "Mercedes-Benz", image: mercedesLogo.url },
    { name: "Audi", image: audiLogo.url },
    { name: "BMW", image: bmwLogo.url },
    { name: "Bentley", image: bentleyLogo.url },
    { name: "Porsche", image: porscheLogo.url },
    { name: "MINI", image: miniLogo.url },
    { name: "Rolls-Royce", image: rollsRoyceLogo.url },
    { name: "Toyota", image: toyotaLogo.url },
    { name: "Ford", image: fordLogo.url },
    { name: "Hyundai", image: hyundaiLogo.url },
    { name: "Land Rover", image: landRoverLogo.url },
    { name: "Jaguar", image: jaguarLogo.url },
    { name: "Hummer", image: hummerLogo.url },
  ];

  return (
    <section className="brand-marquee bg-background py-3" aria-label="Vehicle brands">
      <div className="brand-marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="brand-marquee-group" aria-hidden={copy === 1}>
            {brands.map((brand) => (
              <div key={`${copy}-${brand.name}`} className="flex h-14 w-32 shrink-0 items-center justify-center rounded-xl bg-white px-4 shadow-[0_1px_4px_color-mix(in_oklab,var(--foreground)_8%,transparent)] sm:h-16 sm:w-40" title={brand.name}>
                <img src={brand.image} alt={copy === 0 ? `${brand.name} logo` : ""} loading="lazy" className="max-h-9 w-auto max-w-24 object-contain sm:max-h-10 sm:max-w-28" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

const feedbackRows = [
  [
    { quote: "Booked the G-Wagon for my wedding in Panipat. Car was spotless, driver bhaiya was very polite. Highly recommended.", name: "Rohit Chaudhary", detail: "G-Wagon · Panipat, Haryana" },
    { quote: "Mercedes convertible for our Delhi sangeet — arrived on time, decorated beautifully. Guests kept asking where we got it.", name: "Simran Kaur", detail: "Mercedes Convertible · Delhi" },
    { quote: "Used the Fortuner for a family trip from Noida. Fair pricing, no hidden charges, fuel included as promised.", name: "Amit Tomar", detail: "Fortuner Legender · Noida, UP" },
    { quote: "Booked Audi A6 for airport pickup of my in-laws in Gurugram. Driver was already waiting before we landed. Very professional.", name: "Neha Rathi", detail: "Audi A6 · Gurugram, Haryana" },
    { quote: "Vintage car for my grandfather's 80th birthday in Karnal. He was so happy. Team handled everything patiently.", name: "Vikas Saini", detail: "Vintage Car · Karnal, Haryana" },
    { quote: "Range Rover Sport for a corporate shoot in Delhi. Clean car, punctual service, smooth booking on WhatsApp.", name: "Arjun Malhotra", detail: "Range Rover Sport · Delhi" },
  ],
  [
    { quote: "Rolls Royce for our wedding entry in Ghaziabad — honestly the best decision. Decoration and driver both were perfect.", name: "Pooja & Sahil Verma", detail: "Rolls Royce · Ghaziabad, UP" },
    { quote: "Verna for daily use from Sonipat at a very genuine price. Car was well maintained and delivery was on time.", name: "Deepak Hooda", detail: "Verna · Sonipat, Haryana" },
    { quote: "Bentley convertible red for a music video shoot. Stunning car, flexible timing, team adjusted everything around our schedule.", name: "Karan Ahuja", detail: "Bentley Convertible · Delhi" },
    { quote: "Booked BMW 5 Series for a client visit in Faridabad. Good experience, driver knew all routes well.", name: "Ritu Aggarwal", detail: "BMW 5 Series · Faridabad, Haryana" },
    { quote: "Limousine for my daughter's birthday in Delhi — she felt like a celebrity! Interior was gorgeous. Thank you team.", name: "Manoj Bansal", detail: "Limousine · Delhi" },
    { quote: "Defender for an off-road weekend from Gurugram. Powerful car in top condition. Booking took two minutes on WhatsApp.", name: "Sahil Rana", detail: "Defender · Gurugram, Haryana" },
  ],
  [
    { quote: "Mercedes Maybach for our anniversary dinner in Delhi. Chauffeur in proper uniform, car smelled fresh. Pure luxury.", name: "Ankit & Shweta Gupta", detail: "Mercedes Maybach · Delhi" },
    { quote: "Mustang GT for my pre-wedding shoot in Meerut. Head-turner! Photographer said it's the best car he's shot.", name: "Yash Chauhan", detail: "Mustang GT · Meerut, UP" },
    { quote: "Hummer H2 for baraat in Panipat — full paisa vasool. Driver managed the crowd very well. Booked again for my brother.", name: "Gaurav Malik", detail: "Hummer H2 · Panipat, Haryana" },
    { quote: "Audi Q7 for family airport run from Agra. 7 seater, lots of luggage space, comfortable ride throughout.", name: "Farhan Khan", detail: "Audi Q7 · Agra, UP" },
    { quote: "Jaguar XJL for a business meeting in Noida. Client was impressed before the meeting even started. Worth it.", name: "Nikhil Sethi", detail: "Jaguar XJL · Noida, UP" },
    { quote: "Mini Cooper convertible for a surprise date in Delhi. She said yes! Team helped with the flower decoration too.", name: "Aditya Kapoor", detail: "Mini Cooper Convertible · Delhi" },
  ],
];

function FeedbackCard({ item }: { item: { quote: string; name: string; detail: string } }) {
  return (
    <blockquote className="flex w-72 shrink-0 flex-col justify-between rounded-2xl bg-surface p-5 shadow-card sm:w-80">
      <div>
        <div className="text-sm text-primary" aria-label="5 out of 5 stars">★★★★★</div>
        <p className="mt-3 text-sm font-medium leading-6">“{item.quote}”</p>
      </div>
      <footer className="mt-4 border-t border-border pt-3">
        <strong className="block text-xs">{item.name}</strong>
        <span className="mt-0.5 block text-[11px] text-muted-foreground">{item.detail}</span>
      </footer>
    </blockquote>
  );
}

function UserFeedback() {
  return (
    <section id="feedback" className="bg-primary py-7 sm:py-9 md:py-11">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-3 text-xs font-bold uppercase">From our customers</p><h2 className="font-display text-3xl font-black leading-none sm:text-5xl">USER FEEDBACK</h2></div>
          <div className="text-2xl" aria-hidden="true">✦</div>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        {feedbackRows.map((row, rowIndex) => (
          <div key={rowIndex} className="brand-marquee" aria-label={rowIndex === 0 ? "Customer feedback" : undefined}>
            <div className={`brand-marquee-track feedback-track ${rowIndex === 1 ? "feedback-track--reverse" : ""}`}>
              <div className="brand-marquee-group gap-4 px-2">
                {row.map((item) => <FeedbackCard key={item.name} item={item} />)}
              </div>
              <div className="brand-marquee-group gap-4 px-2" aria-hidden="true">
                {row.map((item) => <FeedbackCard key={`dup-${item.name}`} item={item} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[160px] font-black leading-none text-background/[0.03] sm:text-[260px]">✦</div>
      <div className="relative mx-auto max-w-3xl px-5 py-8 text-center md:px-8 md:py-10">
        <img src={brandLogo} width={1536} height={768} loading="lazy" alt={`${BRAND} logo`} className="mx-auto h-24 w-auto brightness-0 invert sm:h-28" />
        <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-footer-muted sm:text-sm sm:leading-7">
          {BRAND} provides premium luxury car rental for weddings, pre-wedding shoots, corporate travel, airport transfers and family occasions. We proudly serve Delhi, Noida, Gurugram, Ghaziabad, Faridabad, Panipat, Sonipat, Karnal, Meerut, Agra and nearby areas of NCR, Haryana and Uttar Pradesh.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"><WhatsAppIcon className="size-5" /></a>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"><FacebookIcon className="size-5" /></a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white transition-transform hover:scale-110"><InstagramIcon className="size-5" /></a>
          <a href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer" aria-label="Google profile" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-white ring-1 ring-black/10 transition-transform hover:scale-110"><GoogleIcon className="size-5" /></a>
        </div>
        <p className="mt-6 text-[11px] text-footer-muted">All rights reserved © {BRAND} 2026</p>
        <div className="mt-4 flex items-center justify-center gap-4 border-t border-footer-line pt-4">
          <Link to="/policies" className="text-[11px] font-bold uppercase tracking-widest text-primary underline decoration-black underline-offset-4 transition-opacity hover:opacity-80">Privacy Policy</Link>
          <span className="h-3 w-px bg-footer-line" aria-hidden="true" />
          <Link to="/policies" className="text-[11px] font-bold uppercase tracking-widest text-primary underline decoration-black underline-offset-4 transition-opacity hover:opacity-80">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return <main><Header /><Hero /><Showcase /><BrandStrip /><UserFeedback /><Footer /></main>;
}
