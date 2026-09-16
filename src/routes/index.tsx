import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Armchair,
  Check,
  CircleUserRound,
  Cog,
  Facebook,
  Gauge,
  Instagram,
  Linkedin,
  LoaderCircle,
  Menu,
  ShieldCheck,
  Tag,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, type FormEvent, type PointerEvent } from "react";

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
import galleryDefender from "../assets/gallery/gallery-defender.jpg.asset.json";
import galleryHummer from "../assets/gallery/gallery-hummer.jpg.asset.json";
import galleryBmwFront from "../assets/gallery/gallery-bmw-front.jpg.asset.json";
import galleryBmwSide from "../assets/gallery/gallery-bmw-side.jpg.asset.json";
import galleryRangeRoverRed from "../assets/gallery/gallery-rangerover-red.jpg.asset.json";
import galleryBentleyBlack from "../assets/gallery/gallery-bentley-black.jpg.asset.json";
import galleryAudiWhite from "../assets/gallery/gallery-audi-white.jpg.asset.json";
import galleryMaybach from "../assets/gallery/gallery-maybach.jpg.asset.json";
import galleryTaycanBlue from "../assets/gallery/gallery-taycan-blue.jpg.asset.json";
import galleryGwagon from "../assets/gallery/gallery-gwagon.jpg.asset.json";
import yellowSuv from "../assets/yellow-suv.png";
import audiA3Convertible from "../assets/fleet/audi-a3-convertible.png";
import audiA3ConvertibleWhite from "../assets/fleet/audi-a3-convertible-white.png";
import audiA4 from "../assets/fleet/audi-a4.png";
import audiA6 from "../assets/fleet/audi-a6.png";
import audiQ7 from "../assets/fleet/audi-q7.png";
import bentleyConvertibleBlack from "../assets/fleet/bentley-convertible-black.png";
import bentleyConvertibleRed from "../assets/fleet/bentley-convertible-red.png";
import bentleySunroof from "../assets/fleet/bentley-sunroof.png";
import bmw5Series from "../assets/fleet/bmw-5-series.png";
import bmwConvertibleWhite from "../assets/fleet/bmw-convertible-white.png";
import hummerH2 from "../assets/fleet/hummer-h2.png";
import hyundaiVerna from "../assets/fleet/hyundai-verna.png";
import jaguarXf from "../assets/fleet/jaguar-xf.png";
import jaguarXjl from "../assets/fleet/jaguar-xjl.png";
import landRoverDefender from "../assets/fleet/land-rover-defender.png";
import mercedesCClass from "../assets/fleet/mercedes-c-class.png";
import mercedesCla from "../assets/fleet/mercedes-cla.png";
import mercedesConvertibleBlack from "../assets/fleet/mercedes-convertible-black.png";
import mercedesConvertibleRed from "../assets/fleet/mercedes-convertible-red.png";
import mercedesConvertibleWhite from "../assets/fleet/mercedes-convertible-white.png";
import mercedesEClass from "../assets/fleet/mercedes-e-class.png";
import mercedesGWagon from "../assets/fleet/mercedes-g-wagon.png";
import mercedesMaybach from "../assets/fleet/mercedes-maybach-s-class.png";
import miniCooperConvertibleRed from "../assets/fleet/mini-cooper-convertible-red.png";
import porscheBoxsterRed from "../assets/fleet/porsche-boxster-red.png";
import porscheTaycanBlue from "../assets/fleet/porsche-taycan-blue.png";
import rangeRoverSportBlack from "../assets/fleet/range-rover-sport-black.png";
import rangeRoverSportRed from "../assets/fleet/range-rover-sport-red.png";
import rangeRoverSportWhite from "../assets/fleet/range-rover-sport.png";
import rangeRoverVelar from "../assets/fleet/range-rover-velar.png";
import rollsRoyceGhost from "../assets/fleet/rolls-royce-ghost.png";
import toyotaFortuner from "../assets/fleet/toyota-fortuner.png";
import limousineLongNew from "../assets/fleet/limousine-long-new.png";
import mustangGt from "../assets/fleet/mustang-gt.png";
import vintageLuxury from "../assets/fleet/vintage-luxury.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RENTAL | Premium Car Rental" },
      { name: "description", content: "Reserve premium performance cars and SUVs with effortless pickup, flexible dates, and exceptional service." },
      { property: "og:title", content: "RENTAL | Premium Car Rental" },
      { property: "og:description", content: "Find your dream car and make every drive exceptional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Fleet", href: "#fleet" },
  { label: "Gallery", href: "#gallery" },
  { label: "Feedback", href: "#feedback" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:grid-cols-3 md:px-8">
        <a href="#top" className="font-display text-xl font-black tracking-normal">RENTAL</a>
        <nav className="hidden items-center justify-center gap-8 text-sm font-semibold md:flex" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.label} href={item.href} className="transition-colors hover:text-primary">{item.label}</a>)}
        </nav>
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105 sm:flex" aria-label="Open profile"><CircleUserRound size={19} /></button>
          <a href="#fleet" className="inline-flex h-10 items-center rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary-hover sm:px-5">Get Started</a>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-4 md:hidden">{navItems.map((item) => <a key={item.label} href={item.href} className="block border-b border-border py-3 text-sm font-bold" onClick={() => setOpen(false)}>{item.label}</a>)}</nav>}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-8 sm:pt-10 md:pt-14">
      <div className="relative z-10 px-5 text-center"><h1 className="mx-auto max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-normal sm:text-7xl lg:text-8xl">PREMIUM CAR<br />RENTAL</h1></div>
      <div className="relative mt-1 h-[270px] sm:h-[380px] md:h-[500px] lg:h-[540px]">
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-primary [clip-path:polygon(0_22%,100%_0,100%_100%,0_100%)]" />
        <span className="spark absolute right-[8%] top-[20%] z-10 text-primary">✦</span>
        <img src={yellowSuv} width={1536} height={768} alt="Yellow premium performance SUV" className="absolute left-1/2 top-1/2 z-10 w-[110%] max-w-6xl -translate-x-1/2 -translate-y-[44%] object-contain" />
      </div>
    </section>
  );
}

const marqueePrimary = ["NCR'S BIGGEST CAR RENTAL", "100+ PREMIUM CARS", "NCR'S BIGGEST CAR RENTAL", "100+ PREMIUM CARS"];
const marqueeSecondary = ["24/7 SERVICE", "20,000+ CUSTOMERS", "24/7 SERVICE", "20,000+ CUSTOMERS"];

function CrossMarquee() {
  const renderItems = (items: string[]) => [...items, ...items].map((item, index) => (
    <span key={`${item}-${index}`} className="cross-marquee-item">
      <span aria-hidden="true">✦</span>{item}
    </span>
  ));

  return (
    <section className="cross-marquee" aria-label="Rental service highlights">
      <div className="cross-marquee-band cross-marquee-band--primary">
        <div className="cross-marquee-track">{renderItems(marqueePrimary)}</div>
      </div>
      <div className="cross-marquee-band cross-marquee-band--secondary">
        <div className="cross-marquee-track cross-marquee-track--reverse">{renderItems(marqueeSecondary)}</div>
      </div>
      <p className="sr-only">NCR's biggest car rental with 24/7 service, more than 20,000 customers, and over 100 cars.</p>
    </section>
  );
}

type Car = {
  name: string; type: string; speed: string; seats: string; airbags: string;
  transmission: string; price: number; image: string;
};

const cars: [Car, ...Car[]] = [
  { name:"Mercedes Convertible White", type:"Convertible", speed:"250 km/h", seats:"4 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:25000, image:mercedesConvertibleWhite },
  { name:"Audi A6", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"7-speed Automatic", price:14000, image:audiA6 },
  { name:"Bmw 5 Series", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"6 airbags", transmission:"8-speed Automatic", price:15000, image:bmw5Series },
  { name:"Range Rover Sport Black", type:"SUV", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:45000, image:rangeRoverSportBlack },
  { name:"Bentley Convertible Red", type:"Convertible", speed:"335 km/h", seats:"4 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:80000, image:bentleyConvertibleRed },
  { name:"Audi A3 Convertible White", type:"Convertible", speed:"220 km/h", seats:"4 seats", airbags:"6 airbags", transmission:"7-speed Automatic", price:20000, image:audiA3ConvertibleWhite },
  { name:"Porche Boxster", type:"Convertible / Roadster", speed:"275 km/h", seats:"2 seats", airbags:"6 airbags", transmission:"6-speed Manual", price:120000, image:porscheBoxsterRed },
  { name:"Jaguar Xf", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"7 airbags", transmission:"8-speed Automatic", price:15000, image:jaguarXf },
  { name:"Mercedes Convertible Red", type:"Convertible", speed:"250 km/h", seats:"4 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:25000, image:mercedesConvertibleRed },
  { name:"Audi Q7 7 Seater", type:"7-Seater SUV", speed:"234 km/h", seats:"7 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:18000, image:audiQ7 },
  { name:"Mercedes C 300", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:17000, image:mercedesCClass },
  { name:"Mercedes Cla", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"7 airbags", transmission:"8-speed Automatic", price:16000, image:mercedesCla },
  { name:"Jaguar Xjl", type:"Luxury Sedan", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:25000, image:jaguarXjl },
  { name:"Mini Cooper Convertible Red", type:"Convertible", speed:"210 km/h", seats:"4 seats", airbags:"6 airbags", transmission:"7-speed Automatic", price:18000, image:miniCooperConvertibleRed },
  { name:"Rolls Royce Sedan", type:"Luxury Sedan", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:245000, image:rollsRoyceGhost },
  { name:"Mercedes Maybach", type:"Luxury Sedan", speed:"250 km/h", seats:"4–5 seats", airbags:"8 airbags", transmission:"9-speed Automatic", price:50000, image:mercedesMaybach },
  { name:"Porche Taycon Turbo", type:"Electric Sports Sedan", speed:"260 km/h", seats:"4 seats", airbags:"8 airbags", transmission:"2-speed Automatic", price:150000, image:porscheTaycanBlue },
  { name:"Gwagon", type:"SUV", speed:"210 km/h", seats:"5 seats", airbags:"9 airbags", transmission:"9-speed Automatic", price:110000, image:mercedesGWagon },
  { name:"Audi A4", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"7-speed Automatic", price:11000, image:audiA4 },
  { name:"Limousine Long New", type:"Luxury Limousine", speed:"180 km/h", seats:"8 seats", airbags:"6 airbags", transmission:"9-speed Automatic", price:21000, image:limousineLongNew },
  { name:"Bentley Convertible Black", type:"Convertible", speed:"335 km/h", seats:"4 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:75000, image:bentleyConvertibleBlack },
  { name:"Range Rover Convertible Sport Red", type:"SUV", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:80000, image:rangeRoverSportRed },
  { name:"Bmw Convertible White", type:"Convertible", speed:"250 km/h", seats:"4 seats", airbags:"6 airbags", transmission:"8-speed Automatic", price:24000, image:bmwConvertibleWhite },
  { name:"Mercedes Convertible Black", type:"Convertible", speed:"250 km/h", seats:"4 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:28000, image:mercedesConvertibleBlack },
  { name:"Audi A3 Convertible Red", type:"Convertible", speed:"220 km/h", seats:"4 seats", airbags:"6 airbags", transmission:"7-speed Automatic", price:20000, image:audiA3Convertible },
  { name:"Mustang GT", type:"Sports Coupe", speed:"250 km/h", seats:"4 seats", airbags:"8 airbags", transmission:"6-speed Manual", price:90000, image:mustangGt },
  { name:"Mercedes E Class", type:"Sedan", speed:"250 km/h", seats:"5 seats", airbags:"7 airbags", transmission:"9-speed Automatic", price:20000, image:mercedesEClass },
  { name:"Vintages", type:"Classic Car", speed:"160 km/h", seats:"4 seats", airbags:"2 airbags", transmission:"4-speed Manual", price:21000, image:vintageLuxury },
  { name:"Range Rover Velar", type:"SUV", speed:"225 km/h", seats:"5 seats", airbags:"6 airbags", transmission:"8-speed Automatic", price:45000, image:rangeRoverVelar },
  { name:"Fortuner", type:"SUV", speed:"175 km/h", seats:"7 seats", airbags:"7 airbags", transmission:"6-speed Automatic", price:14000, image:toyotaFortuner },
  { name:"Range Rover Sport White", type:"SUV", speed:"250 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:40000, image:rangeRoverSportWhite },
  { name:"Bentley Sunroof", type:"Luxury Sedan", speed:"333 km/h", seats:"5 seats", airbags:"8 airbags", transmission:"8-speed Automatic", price:55000, image:bentleySunroof },
  { name:"Hummee H2", type:"SUV", speed:"160 km/h", seats:"5–6 seats", airbags:"4 airbags", transmission:"4-speed Automatic", price:50000, image:hummerH2 },
  { name:"Defender", type:"SUV", speed:"191 km/h", seats:"5–6 seats", airbags:"6 airbags", transmission:"8-speed Automatic", price:52000, image:landRoverDefender },
  { name:"Verna New Model", type:"Sedan", speed:"195 km/h", seats:"5 seats", airbags:"6 airbags", transmission:"7-speed Automatic", price:6000, image:hyundaiVerna },
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
      <p className="mt-4 px-5 text-center text-[10px] text-muted-foreground">Specifications vary by trim and model year.</p>
      <div className="mx-auto mt-5 grid w-[calc(100%-2.5rem)] max-w-xl gap-3 rounded-2xl bg-surface p-3 shadow-card sm:grid-cols-[1fr_auto] sm:items-center">
         <div className="flex items-center justify-center gap-3 px-2 sm:justify-start"><Tag size={18} className="text-primary"/><span className="text-xl font-black">₹{activeCar.price.toLocaleString("en-IN")}</span><small className="text-muted-foreground">/ 13 hours</small></div>
        <Button asChild className="h-11 rounded-full px-6 text-xs sm:w-auto w-full"><a href={`https://wa.me/919990569473?text=${encodeURIComponent(`I want to book this car: ${activeCar.name} (${activeCar.type}) for ₹${activeCar.price.toLocaleString("en-IN")} / 13 hours. Can I get more details?`)}`} target="_blank" rel="noopener noreferrer">Rent Now</a></Button>
      </div>
    </section>
  );
}

const galleryImages = [
  { image: galleryDefender.url, alt: "White Land Rover Defender decorated for a wedding", crop: true },
  { image: galleryHummer.url, alt: "White Hummer H2", crop: true },
  { image: galleryBmwFront.url, alt: "White BMW convertible with wedding flowers", crop: true },
  { image: galleryBmwSide.url, alt: "White BMW convertible side view", crop: true },
  { image: galleryRangeRoverRed.url, alt: "Red Range Rover convertible with wedding flowers", crop: true },
  { image: galleryBentleyBlack.url, alt: "Black Bentley Continental convertible", crop: true },
  { image: galleryAudiWhite.url, alt: "White Audi A4 decorated for a wedding", crop: true },
  { image: galleryMaybach.url, alt: "Mercedes-Maybach with wedding flowers", crop: true },
  { image: galleryTaycanBlue.url, alt: "Blue Porsche Taycan Turbo", crop: true },
  { image: galleryGwagon.url, alt: "White Mercedes G-Wagon with wedding flowers", crop: true },
];

function Gallery() {
  const flowingImages = [...galleryImages, ...galleryImages];
  return (
    <section id="gallery" className="overflow-hidden bg-surface py-14 sm:py-18 md:py-24">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <p className="mb-4 text-xs font-bold uppercase text-primary">Our collection</p>
        <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">CAR GALLERY</h2>
      </div>
      <div className="gallery-flow mt-8 md:mt-10" aria-label="Car gallery">
        <div className="gallery-track">
          {flowingImages.map((item, index) => (
            <figure key={`${item.alt}-${index}`} className="gallery-frame">
              <img src={item.image} alt={index < galleryImages.length ? item.alt : ""} aria-hidden={index >= galleryImages.length} loading="lazy" className={item.crop ? "h-full w-full object-cover" : "h-full w-full object-contain p-4"} />
            </figure>
          ))}
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

  return <section className="bg-surface pb-12 md:pb-16" aria-label="Vehicle brands"><div className="no-scrollbar mx-auto flex max-w-6xl items-center gap-8 overflow-x-auto px-5 py-6 md:justify-between md:gap-10 md:px-8">{brands.map((brand) => <div key={brand.name} className="flex h-14 min-w-20 shrink-0 items-center justify-center" title={brand.name}><img src={brand.image} alt={`${brand.name} logo`} loading="lazy" className="max-h-10 w-auto max-w-24 object-contain sm:max-h-12" /></div>)}</div></section>;
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
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");
  const submit = (e: FormEvent) => { e.preventDefault(); setStatus("loading"); window.setTimeout(() => setStatus("success"), 900); };
  const columns = { Pages:["Rental","Locations","FAQ","Features","Blog"], Resources:["Installation Manual","Release Notes","Community Help"], Company:["About Us","Careers","Press","Support"], Product:["Demo","Security","FAQ","Features"] };
  return <footer id="newsletter" className="bg-foreground text-background"><div className="mx-auto max-w-6xl px-5 py-16 md:px-8"><div className="grid items-end gap-10 border-b border-footer-line pb-14 md:grid-cols-2"><h2 className="relative max-w-md font-display text-4xl font-black leading-none sm:text-5xl"><span className="text-primary">✦</span> Stay up to date<br />on all the latest<br />news.</h2><form onSubmit={submit} className="flex items-center gap-2 border-b border-footer-line pb-3"><input required type="email" placeholder="Your Email" aria-label="Your email" className="min-w-0 flex-1 bg-transparent py-3 text-sm text-background outline-none placeholder:text-footer-muted"/><button disabled={status !== "idle"} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground" aria-label="Subscribe">{status === "loading" ? <LoaderCircle size={18} className="animate-spin"/> : status === "success" ? <Check size={18}/> : <ArrowRight size={18}/>}</button></form></div><div className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-5">{Object.entries(columns).map(([title,links]) => <div key={title}><h3 className="mb-5 text-xs font-bold">{title}</h3><ul className="space-y-3">{links.map(link => <li key={link}><a href="#" className="text-xs text-footer-muted hover:text-primary">{link}</a></li>)}</ul></div>)}<div><h3 className="mb-5 text-xs font-bold">Follow Us</h3><div className="flex gap-2">{[Facebook,Linkedin,Instagram].map((Icon,i) => <a key={i} href="#" aria-label="Social channel" className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-line text-footer-muted hover:text-primary"><Icon size={15}/></a>)}</div></div></div><div className="flex flex-col gap-3 border-t border-footer-line pt-6 text-[10px] text-footer-muted sm:flex-row sm:justify-between"><span>All rights reserved © Premium Rental 2026</span><span>Privacy Policy&nbsp;&nbsp; | &nbsp;&nbsp;Terms &amp; Conditions</span></div></div></footer>;
}

function Index() {
  return <main><Header /><Hero /><CrossMarquee /><Showcase /><Gallery /><BrandStrip /><UserFeedback /><Footer /></main>;
}
