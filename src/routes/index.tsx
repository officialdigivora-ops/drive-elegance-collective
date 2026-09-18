import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Armchair,

  CircleUserRound,
  Cog,
  Facebook,
  Gauge,
  Instagram,
  Phone,
  Menu,
  ShieldCheck,
  Tag,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

import { Button } from "@/components/ui/button";
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
import yellowSuv from "../assets/yellow-suv.png";
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
import rangeRoverSportRed from "../assets/fleet/range-rover-sport-red.png";
import rangeRoverSportWhite from "../assets/fleet/range-rover-sport.png";
import rangeRoverVelar from "../assets/fleet/range-rover-velar-white.png";
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
        areaServed: ["Delhi", "NCR", "Haryana", "Uttar Pradesh"],
        openingHours: "Mo-Su 00:00-23:59",
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
  { label: "Fleet", href: "#fleet" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Gallery", href: "/gallery" },
  { label: "Car Details", href: "/car-details" },
  { label: "Contact Us", href: "/contact" },
  { label: "Feedback", href: "#feedback" },
];

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
          <a href={PHONE_LINK} className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-[0_4px_14px_color-mix(in_oklab,var(--primary)_45%,transparent)] transition-all hover:bg-primary-hover hover:shadow-[0_6px_20px_color-mix(in_oklab,var(--primary)_55%,transparent)] sm:px-5"><Phone size={15} /> Contact Now</a>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-4 md:hidden">{navItems.map((item) => <a key={item.label} href={item.href} className="block border-b border-border py-3 text-sm font-bold" onClick={() => setOpen(false)}>{item.label}</a>)}</nav>}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-8 sm:pt-10 md:pt-14">
      <div className="relative z-10 px-5 text-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-normal sm:text-7xl lg:text-8xl">LUXURY CAR<br />RENTAL</h1>
      </div>
      <div className="relative mt-1 h-[270px] sm:h-[380px] md:h-[500px] lg:h-[540px]">
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-primary [clip-path:polygon(0_22%,100%_0,100%_100%,0_100%)]" />
        <span className="spark absolute right-[8%] top-[20%] z-10 text-primary">✦</span>
        <img src={yellowSuv} width={1536} height={768} alt="Yellow premium performance SUV" className="absolute left-1/2 top-1/2 z-10 w-[110%] max-w-6xl -translate-x-1/2 -translate-y-[44%] object-contain" />
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
  { name:"Range Rover Convertible Sport Red", type:"SUV", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:75000, image:rangeRoverSportRed },
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
    <section id="fleet" className="fleet-showcase overflow-hidden py-14 sm:py-18 md:py-24" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
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
          <Button asChild className="h-11 rounded-full px-6 text-xs"><a href={`https://wa.me/919990569473?text=${encodeURIComponent(`I want to book this car: ${activeCar.name} (${activeCar.type}) for ₹${activeCar.price.toLocaleString("en-IN")} / 13 hours. Can I get more details?`)}`} target="_blank" rel="noopener noreferrer">Rent Now</a></Button>
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

  return <section className="bg-surface pb-8 md:pb-10" aria-label="Vehicle brands"><div className="no-scrollbar mx-auto flex max-w-6xl items-center gap-3 overflow-x-auto px-5 py-3 md:justify-between md:gap-4 md:px-8">{brands.map((brand) => <div key={brand.name} className="flex h-12 min-w-20 shrink-0 items-center justify-center rounded-xl bg-white px-3 shadow-[0_1px_4px_rgba(0,0,0,0.05)]" title={brand.name}><img src={brand.image} alt={`${brand.name} logo`} loading="lazy" className="max-h-7 w-auto max-w-20 object-contain sm:max-h-8" /></div>)}</div></section>;
}

const feedback = [
  { quote: "The car arrived spotless and exactly on time. The whole experience felt effortless.", name: "Aarav Mehta", detail: "Mercedes Convertible" },
  { quote: "Professional service, excellent cars, and clear pricing. I would happily book again.", name: "Riya Kapoor", detail: "Range Rover Sport" },
  { quote: "Our event journey was handled perfectly from pickup to return. Truly premium service.", name: "Kabir Sharma", detail: "Bentley Convertible" },
];

function UserFeedback() {
  return (
    <section id="feedback" className="bg-primary py-14 sm:py-18 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-4 text-xs font-bold uppercase">From our customers</p><h2 className="font-display text-4xl font-black leading-none sm:text-6xl">USER FEEDBACK</h2></div>
          <div className="text-3xl" aria-hidden="true">✦</div>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
          {feedback.map((item) => <blockquote key={item.name} className="flex min-h-64 flex-col justify-between rounded-2xl bg-surface p-7 shadow-card"><div><div className="text-lg text-primary" aria-label="5 out of 5 stars">★★★★★</div><p className="mt-6 text-lg font-semibold leading-8">“{item.quote}”</p></div><footer className="mt-8 border-t border-border pt-5"><strong className="block text-sm">{item.name}</strong><span className="mt-1 block text-xs text-muted-foreground">{item.detail}</span></footer></blockquote>)}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const serviceAreas = ["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad", "Panipat", "Sonipat", "Karnal", "Meerut", "Agra"];
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[160px] font-black leading-none text-background/[0.03] sm:text-[260px]">✦</div>
      <div className="relative mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col">
            <img src={brandLogo} width={1536} height={768} loading="lazy" alt={`${BRAND} logo`} className="h-14 w-auto self-start brightness-0 invert sm:h-16" />
            <p className="mt-5 max-w-xs text-xs leading-6 text-footer-muted">Luxury car rental for weddings, photoshoots, corporate travel and airport transfers across Delhi NCR, Haryana & Uttar Pradesh. 100+ premium cars, 7+ years of experience.</p>
            <div className="mt-6 flex gap-2.5">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-footer-line text-footer-muted transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"><Instagram size={16} /></a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-footer-line text-footer-muted transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"><Facebook size={16} /></a>
              <a href="https://wa.me/919990569473" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-footer-line text-footer-muted transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"><Phone size={16} /></a>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-wider text-primary">Contact</h3>
            <ul className="space-y-4 text-xs text-footer-muted">
              <li><a href={PHONE_LINK} className="flex items-center gap-2 transition-colors hover:text-primary"><Phone size={14} className="text-primary" /> {PHONE_DISPLAY}</a></li>
              <li><a href="https://wa.me/919990569473" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">WhatsApp us</a></li>
              <li><a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="leading-6 transition-colors hover:text-primary">{ADDRESS}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-wider text-primary">Rental Package</h3>
            <ul className="space-y-3 text-xs leading-6 text-footer-muted">
              <li>Timing: 13 hours</li>
              <li>Fuel, driver, decoration & toll included</li>
              <li>Extra km depends on car</li>
              <li>Extra timing depends on car</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-wider text-primary">Service Areas</h3>
            <ul className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => <li key={area} className="rounded-full border border-footer-line px-3 py-1 text-[11px] text-footer-muted">{area}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-footer-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[11px] text-footer-muted">All rights reserved © {BRAND} 2026</span>
          <a href={PHONE_LINK} className="inline-flex h-10 items-center gap-2 self-start rounded-full bg-primary px-6 text-xs font-bold text-primary-foreground shadow-[0_4px_14px_color-mix(in_oklab,var(--primary)_45%,transparent)] transition-all hover:bg-primary-hover sm:self-auto"><Phone size={15} /> Contact Now</a>
          <span className="text-[11px] text-footer-muted sm:text-right">Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return <main><Header /><Hero /><Showcase /><BrandStrip /><UserFeedback /><Footer /></main>;
}
