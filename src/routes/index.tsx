import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
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
  Search,
  ShieldCheck,
  Tag,
  UsersRound,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, type FormEvent, type PointerEvent } from "react";

import { Button } from "@/components/ui/button";
import { siAudi, siBentley, siBmw, siFord, siHyundai, siMini, siPorsche, siRollsroyce, siToyota } from "simple-icons";
import greenSuv from "../assets/green-suv.png";
import redCar from "../assets/red-sports-car.jpg";
import silverSuv from "../assets/silver-suv.png";
import steeringWheel from "../assets/steering-wheel.jpg";
import yellowSportsCar from "../assets/yellow-sports-car.png";
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

const navItems = ["How it works", "Locations", "Fleet"];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:grid-cols-3 md:px-8">
        <a href="#top" className="font-display text-xl font-black tracking-normal">RENTAL</a>
        <nav className="hidden items-center justify-center gap-8 text-sm font-semibold md:flex" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition-colors hover:text-primary">{item}</a>)}
        </nav>
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105 sm:flex" aria-label="Open profile"><CircleUserRound size={19} /></button>
          <a href="#booking" className="inline-flex h-10 items-center rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary-hover sm:px-5">Get Started</a>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-4 md:hidden">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="block border-b border-border py-3 text-sm font-bold" onClick={() => setOpen(false)}>{item}</a>)}</nav>}
    </header>
  );
}

function BookingCard() {
  const [tab, setTab] = useState<"Car" | "Vans">("Car");
  return (
    <div id="booking" className="relative z-20 mx-auto w-[calc(100%-2.5rem)] max-w-3xl rounded-2xl bg-card p-4 shadow-card md:p-5">
      <div className="mb-4 flex gap-7 border-b border-border text-sm font-bold">
        {(["Car", "Vans"] as const).map((item) => <button key={item} onClick={() => setTab(item)} className={`relative pb-3 ${tab === item ? "text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-primary" : "text-muted-foreground"}`}>{item}</button>)}
      </div>
      <div className="grid gap-2 md:grid-cols-[1.25fr_1fr_1fr_auto] md:items-center">
        {[
          ["Pick up & Return location", "Dallas, Texas"],
          ["Start", "Oct 16, 11:00 AM"],
          ["Stop", "Oct 18, 5:00 PM"],
        ].map(([label, value]) => <label key={label} className="block min-w-0 border-b border-border px-2 py-3 md:border-r md:border-b-0"><span className="block text-[10px] font-bold">{label}</span><input className="mt-1 w-full bg-transparent text-sm text-muted-foreground outline-none" defaultValue={value} aria-label={label} /></label>)}
        <button className="flex h-12 w-full items-center justify-center rounded-xl bg-foreground text-background transition-colors hover:bg-primary hover:text-primary-foreground md:w-12" aria-label="Search available cars"><Search size={18} /></button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-12 md:pt-16">
      <div className="relative z-10 px-5 text-center"><h1 className="mx-auto max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-normal sm:text-7xl lg:text-8xl">PREMIUM CAR<br />RENTAL</h1></div>
      <div className="mt-8"><BookingCard /></div>
      <div className="relative -mt-3 h-[310px] sm:h-[420px] md:h-[520px]">
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-primary [clip-path:polygon(0_22%,100%_0,100%_100%,0_100%)]" />
        <span className="spark absolute right-[8%] top-[20%] z-10 text-primary">✦</span>
        <img src={yellowSuv} width={1536} height={768} alt="Yellow premium performance SUV" className="absolute left-1/2 top-1/2 z-10 w-[110%] max-w-6xl -translate-x-1/2 -translate-y-[44%] object-contain" />
      </div>
      <a href="#how-it-works" aria-label="Scroll to learn more" className="absolute bottom-0 left-1/2 z-30 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-[6px] border-background bg-primary text-primary-foreground"><ArrowDown size={20} /></a>
    </section>
  );
}

function Intro() {
  return (
    <section id="how-it-works" className="bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div className="max-w-lg"><p className="mb-4 text-xs font-bold uppercase text-primary">Built for the extraordinary</p><h2 className="font-display text-4xl font-black leading-none sm:text-6xl">PREMIUM CAR<br />RENTAL</h2><p className="mt-7 text-base leading-7 text-muted-foreground">Selected Car Service is ready to help with service and repairs of exclusive modern and classic cars. With our workshop for exclusive cars, we have the opportunity to provide the best service for your car in a separate specialist workshop.</p><a href="#fleet" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-colors hover:bg-primary hover:text-primary-foreground">See all our Cars <ArrowRight size={16} /></a></div>
        <div className="relative md:justify-self-end"><span className="spark absolute -left-6 top-1/3 z-10 text-primary">✦</span><img src={redCar} width={1024} height={1280} loading="lazy" alt="Red sports car driving on a country road" className="h-[480px] w-full rounded-3xl object-cover sm:h-[620px] md:w-[470px]" /></div>
      </div>
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
    <section id="fleet" className="fleet-showcase overflow-hidden py-20 md:py-28" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div className="px-5 text-center">
        <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">PICK YOUR DREAM<br />CAR TODAY</h2>
        <p className="mt-4 text-xs font-bold uppercase text-muted-foreground" aria-live="polite">{activeCar.name} · {activeCar.type}</p>
      </div>
      <div className="relative mt-7 md:mt-10">
        <div className="fleet-stage touch-pan-y select-none" aria-label="Swipe through available cars" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerCancel={() => { dragStart.current = null; }}>
          <CarImage key={`previous-${activeIndex}`} car={carAt(previousIndex)} position="previous" direction={direction} />
          <CarImage key={`active-${activeIndex}`} car={activeCar} position="active" direction={direction} />
          <CarImage key={`next-${activeIndex}`} car={carAt(nextIndex)} position="next" direction={direction} />
        </div>
        <Button type="button" variant="outline" size="icon" className="fleet-arrow left-4 rounded-full sm:left-8" onClick={() => advance(-1)} aria-label="Previous car"><ChevronLeft /></Button>
        <Button type="button" variant="outline" size="icon" className="fleet-arrow right-4 rounded-full sm:right-8" onClick={() => advance(1)} aria-label="Next car"><ChevronRight /></Button>
      </div>
      <div className="mx-auto mt-2 grid max-w-3xl grid-cols-2 gap-x-3 gap-y-6 px-5 sm:grid-cols-4">
        {specs.map(([Icon,value,label]) => <div key={label} className="min-w-0 text-center"><Icon className="mx-auto text-muted-foreground" size={22} /><strong className="mt-2 block text-xs sm:text-sm">{value}</strong><span className="text-[10px] text-muted-foreground">{label}</span></div>)}
      </div>
      <p className="mt-5 px-5 text-center text-[10px] text-muted-foreground">Specifications vary by trim and model year.</p>
      <div className="mx-auto mt-6 grid w-[calc(100%-2.5rem)] max-w-xl gap-3 rounded-2xl bg-surface p-3 shadow-card sm:grid-cols-[1fr_auto_auto] sm:items-center">
         <div className="flex items-center justify-center gap-3 px-2 sm:justify-start"><Tag size={18} className="text-primary"/><span className="text-xl font-black">₹{activeCar.price.toLocaleString("en-IN")}</span><small className="text-muted-foreground">/ 13 hours</small></div>
        <Button asChild variant="default" className="h-11 rounded-full bg-foreground px-5 text-xs text-background hover:bg-foreground/85"><a href="#stories">View Details</a></Button>
        <Button asChild className="h-11 rounded-full px-5 text-xs"><a href="#booking">Rent Now</a></Button>
      </div>
    </section>
  );
}

const stories = [
  { day:"25", date:"December 2023", title:"Electrifying the experience", desc:"Why going electric makes every drive feel refreshingly new.", image:steeringWheel, alt:"Premium sports car steering wheel" },
  { day:"04", date:"December 2023", title:"Flexible hire for business", desc:"Move your team in comfort with plans built around your schedule.", image:redCar, alt:"Red sports car on an open road" },
  { day:"18", date:"November 2023", title:"Single vehicles to entire fleets", desc:"A considered selection for one great day or every working day.", image:silverSuv, alt:"Silver luxury SUV" },
];

function Stories() {
  return <section id="stories" className="bg-surface py-20 md:py-28"><div className="mx-auto max-w-6xl px-5 md:px-8"><h2 className="text-center font-display text-4xl font-black leading-none sm:text-6xl">STORIES BEHIND<br />THE WHEEL</h2><div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">{stories.map((story) => <article key={story.title} className="border-t border-foreground pt-4"><div className="flex items-start gap-3"><strong className="font-display text-4xl">{story.day}</strong><span className="pt-1 text-[10px] leading-3 text-muted-foreground">{story.date.split(" ")[0]}<br />{story.date.split(" ")[1]}</span></div><h3 className="mt-5 text-lg font-black uppercase">{story.title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{story.desc}</p><img src={story.image} loading="lazy" alt={story.alt} className="mt-5 h-56 w-full rounded-2xl object-cover" /></article>)}</div><div className="mt-10 text-center"><a href="#newsletter" className="inline-flex rounded-full bg-foreground px-6 py-3 text-xs font-bold text-background">See all Stories</a></div></div></section>;
}

function BrandStrip() {
  const brands = [
    { name: "Mercedes-Benz" },
    { name: siAudi.title, icon: siAudi },
    { name: siBmw.title, icon: siBmw },
    { name: siBentley.title, icon: siBentley },
    { name: siPorsche.title, icon: siPorsche },
    { name: siMini.title, icon: siMini },
    { name: siRollsroyce.title, icon: siRollsroyce },
    { name: siToyota.title, icon: siToyota },
    { name: siFord.title, icon: siFord },
    { name: siHyundai.title, icon: siHyundai },
    { name: "Lamborghini" },
    { name: "Land Rover" },
    { name: "Jaguar" },
    { name: "Hummer" },
  ];

  return <section className="bg-surface pb-20" aria-label="Vehicle brands"><div className="no-scrollbar mx-auto flex max-w-6xl items-center gap-10 overflow-x-auto px-5 py-8 text-muted-foreground md:gap-14 md:px-8">{brands.map((brand) => <div key={brand.name} className="flex min-w-max shrink-0 items-center gap-2 grayscale"><span className="font-display text-sm font-black tracking-normal">{brand.name}</span>{brand.icon && <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d={brand.icon.path} /></svg>}</div>)}</div></section>;
}

function PhoneMockup() {
  return <div className="relative mx-auto h-[390px] w-[220px] rounded-[34px] border-[7px] border-foreground bg-surface p-3 shadow-phone"><div className="mx-auto h-4 w-20 rounded-full bg-foreground"/><div className="mt-4 flex justify-between text-[8px] font-bold"><span>Hi, Sarthak</span><CircleUserRound size={16}/></div><div className="mt-3 rounded-xl bg-background p-2"><img src={greenSuv} loading="lazy" width={1280} height={640} alt="Green SUV listing" className="h-24 w-full object-contain"/><strong className="block text-xs">Lamborghini Urus</strong><span className="text-[9px] text-muted-foreground">Available today</span><strong className="float-right text-xs">$45.00/h</strong></div><div className="mt-3 rounded-xl border border-border p-3"><div className="flex items-center gap-2"><CircleUserRound size={22}/><div><strong className="block text-[10px]">Jane Cooper</strong><span className="text-[8px] text-muted-foreground">Balance $4,203</span></div></div><div className="map-pattern mt-3 h-20 rounded-lg"/></div><div className="absolute -right-8 top-20 text-4xl">✦</div></div>;
}

function AppPromo() {
  return <section className="bg-surface pb-0 pt-8"><div className="mx-auto grid min-h-[420px] max-w-6xl overflow-hidden rounded-3xl bg-primary px-7 pt-10 md:grid-cols-2 md:items-center md:px-16 md:pt-0"><div className="pb-10 md:pb-0"><h2 className="font-display text-4xl font-black leading-none sm:text-5xl">PREMIUM CAR<br />RENTAL</h2><p className="mt-4 max-w-sm text-sm font-medium">Your next drive is only a tap away.</p><div className="mt-6 flex flex-wrap gap-3"><a href="#" className="rounded-full bg-foreground px-5 py-3 text-xs font-bold text-background">● App Store</a><a href="#" className="rounded-full bg-foreground px-5 py-3 text-xs font-bold text-background">▶ Google Play</a></div></div><div className="self-end"><PhoneMockup /></div></div></section>;
}

function Footer() {
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");
  const submit = (e: FormEvent) => { e.preventDefault(); setStatus("loading"); window.setTimeout(() => setStatus("success"), 900); };
  const columns = { Pages:["Rental","Locations","FAQ","Features","Blog"], Resources:["Installation Manual","Release Notes","Community Help"], Company:["About Us","Careers","Press","Support"], Product:["Demo","Security","FAQ","Features"] };
  return <footer id="newsletter" className="bg-foreground text-background"><div className="mx-auto max-w-6xl px-5 py-16 md:px-8"><div className="grid items-end gap-10 border-b border-footer-line pb-14 md:grid-cols-2"><h2 className="relative max-w-md font-display text-4xl font-black leading-none sm:text-5xl"><span className="text-primary">✦</span> Stay up to date<br />on all the latest<br />news.</h2><form onSubmit={submit} className="flex items-center gap-2 border-b border-footer-line pb-3"><input required type="email" placeholder="Your Email" aria-label="Your email" className="min-w-0 flex-1 bg-transparent py-3 text-sm text-background outline-none placeholder:text-footer-muted"/><button disabled={status !== "idle"} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground" aria-label="Subscribe">{status === "loading" ? <LoaderCircle size={18} className="animate-spin"/> : status === "success" ? <Check size={18}/> : <ArrowRight size={18}/>}</button></form></div><div className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-5">{Object.entries(columns).map(([title,links]) => <div key={title}><h3 className="mb-5 text-xs font-bold">{title}</h3><ul className="space-y-3">{links.map(link => <li key={link}><a href="#" className="text-xs text-footer-muted hover:text-primary">{link}</a></li>)}</ul></div>)}<div><h3 className="mb-5 text-xs font-bold">Follow Us</h3><div className="flex gap-2">{[Facebook,Linkedin,Instagram].map((Icon,i) => <a key={i} href="#" aria-label="Social channel" className="flex h-9 w-9 items-center justify-center rounded-full border border-footer-line text-footer-muted hover:text-primary"><Icon size={15}/></a>)}</div></div></div><div className="flex flex-col gap-3 border-t border-footer-line pt-6 text-[10px] text-footer-muted sm:flex-row sm:justify-between"><span>All rights reserved © Premium Rental 2026</span><span>Privacy Policy&nbsp;&nbsp; | &nbsp;&nbsp;Terms &amp; Conditions</span></div></div></footer>;
}

function Index() {
  return <main><Header /><Hero /><Intro /><Showcase /><Stories /><BrandStrip /><AppPromo /><Footer /></main>;
}