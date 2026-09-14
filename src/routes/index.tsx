import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleUserRound,
  Facebook,
  Gauge,
  Instagram,
  Linkedin,
  LoaderCircle,
  Luggage,
  Menu,
  Rotate3D,
  Search,
  Tag,
  UsersRound,
  X,
} from "lucide-react";
import { useRef, useState, type FormEvent } from "react";

import greenSuv from "../assets/green-suv.png";
import redCar from "../assets/red-sports-car.jpg";
import silverSuv from "../assets/silver-suv.png";
import steeringWheel from "../assets/steering-wheel.jpg";
import yellowSportsCar from "../assets/yellow-sports-car.png";
import yellowSuv from "../assets/yellow-suv.png";

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

function Showcase() {
  const rail = useRef<HTMLDivElement>(null);
  return (
    <section id="fleet" className="overflow-hidden bg-background py-20 md:py-28">
      <h2 className="px-5 text-center font-display text-4xl font-black leading-none sm:text-6xl">PICK YOUR DREAM<br />CAR TODAY</h2>
      <div ref={rail} className="no-scrollbar mt-10 flex snap-x snap-mandatory items-center gap-3 overflow-x-auto px-[8vw] pb-4 sm:px-[18vw] md:mt-14 md:px-0">
        <div className="w-[68vw] shrink-0 snap-center opacity-80 md:-ml-[20%] md:w-[45%]"><img src={yellowSportsCar} width={1280} height={640} loading="lazy" alt="Yellow sports car" className="w-full" /></div>
        <div className="relative w-[84vw] shrink-0 snap-center md:w-[52%]"><img src={greenSuv} width={1280} height={640} loading="lazy" alt="Green premium SUV" className="w-full" /><span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface/80 shadow-card"><Rotate3D size={20} /></span></div>
        <div className="w-[68vw] shrink-0 snap-center opacity-80 md:-mr-[20%] md:w-[45%]"><img src={silverSuv} width={1280} height={640} loading="lazy" alt="Silver luxury SUV" className="w-full" /></div>
      </div>
      <div className="mx-auto mt-2 grid max-w-xl grid-cols-2 gap-6 px-6 sm:grid-cols-4">
        {[[Gauge,"306 km/h","Top speed"],[BriefcaseBusiness,"6 speed","Automatic"],[UsersRound,"5 seats","Capacity"],[Luggage,"4 bags","Luggage"]].map(([Icon,value,label]) => { const I = Icon as typeof Gauge; return <div key={value as string} className="text-center"><I className="mx-auto text-muted-foreground" size={22} /><strong className="mt-2 block text-sm">{value as string}</strong><span className="text-[10px] text-muted-foreground">{label as string}</span></div>})}
      </div>
      <div className="mx-auto mt-9 grid w-[calc(100%-2.5rem)] max-w-lg gap-3 rounded-2xl bg-surface p-3 shadow-card sm:grid-cols-[1fr_auto_auto] sm:items-center">
        <div className="flex items-center gap-3 px-2"><Tag size={18} className="text-primary"/><span className="text-xl font-black">$225</span><small className="text-muted-foreground">/ day</small></div>
        <a href="#stories" className="rounded-full bg-foreground px-5 py-3 text-center text-xs font-bold text-background">View Details</a><a href="#booking" className="rounded-full bg-primary px-5 py-3 text-center text-xs font-bold">Rent Now</a>
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
  return <section className="bg-surface pb-20"><div className="no-scrollbar mx-auto flex max-w-6xl items-center justify-between gap-12 overflow-x-auto px-5 py-8 text-center text-muted-foreground md:px-8">{["LAND ROVER","Audi","LAMBORGHINI","Ferrari","BMW","HONDA","NISSAN"].map((brand) => <span key={brand} className="shrink-0 font-display text-sm font-black tracking-normal grayscale">{brand}</span>)}</div></section>;
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