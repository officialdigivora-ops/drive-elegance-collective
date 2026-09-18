import { createFileRoute } from "@tanstack/react-router";
import { SitePageHeader } from "@/components/site-page-header";

const BRAND = "Chaudhary Luxury Cars";
const PHONE_DISPLAY = "+91 99905 69473";
const EMAIL = "choudharyluxurycars@gmail.com";
const ADDRESS =
  "92M8+62C, Sanoli Rd, Sewah Kheri, Ujra Kheri Village, Panipat Taraf Afghan, Panipat, Haryana 132104, India";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Privacy Policy & Terms | Chaudhary Luxury Cars" },
      { name: "description", content: "Privacy Policy and Terms & Conditions for Chaudhary Luxury Cars luxury car rental bookings across Delhi NCR, Haryana and Uttar Pradesh." },
      { name: "keywords", content: "Chaudhary Luxury Cars terms, car rental privacy policy India" },
      { property: "og:title", content: "Privacy Policy & Terms | Chaudhary Luxury Cars" },
      { property: "og:description", content: "Privacy Policy and Terms & Conditions for Chaudhary Luxury Cars luxury car rental bookings across Delhi NCR, Haryana and Uttar Pradesh." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Chaudhary Luxury Cars" },
      { property: "og:url", content: "https://drive-elegance-collective.lovable.app/policies" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy & Terms | Chaudhary Luxury Cars" },
      { name: "twitter:description", content: "Privacy Policy and Terms & Conditions for Chaudhary Luxury Cars luxury car rental bookings across Delhi NCR, Haryana and Uttar Pradesh." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "https://drive-elegance-collective.lovable.app/policies" }],
  }),
  component: PoliciesPage,
});

const privacyPoints = [
  "We collect only the information you provide at the time of booking, such as your name, phone number, email, pickup and drop-off addresses and the dates you require the vehicle.",
  "Your personal information is used solely to confirm and deliver your booking, to communicate with you about your reservation, and to maintain records required for accounting and tax purposes.",
  "We do not sell, rent or share your personal information with any third party for marketing. Information may be shared only with our driver, vehicle partner or payment processor to the extent necessary to fulfil your booking.",
  "Payment details are processed through secure third-party payment gateways and are never stored on our servers.",
  "You may request access to, correction of, or deletion of your personal data by contacting us at the details below.",
  "This policy may be updated from time to time. Continued use of our services after a change constitutes acceptance of the revised policy.",
];

const termsPoints = [
  "All bookings require advance payment to confirm the reservation. A booking is considered confirmed only after the advance is received.",
  "Prices quoted are for a 13-hour rental package. Fuel, driver, decoration and toll charges are included in the package.",
  "Extra charges apply only when the ride exceeds the time or distance agreed at the time of booking.",
  "Once a booking is confirmed, it cannot be cancelled and the advance payment is non-refundable.",
  "On self-drive rentals, the customer is responsible for all damage charges to the vehicle during the rental period.",
  "When a chauffeur provided by us is included in the booking, any damage responsibility during the ride is ours.",
  "The customer agrees to provide valid government-issued identification at the time of vehicle handover.",
  "Any dispute shall be subject to the jurisdiction of the courts at Panipat, Haryana, India.",
];

function PolicySection({
  id,
  title,
  intro,
  points,
}: {
  id: string;
  title: string;
  intro: string;
  points: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-xl font-black uppercase tracking-wide text-foreground sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{intro}</p>
      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm leading-7 text-foreground">
            <span className="mt-2.5 h-1.5 w-4 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PoliciesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SitePageHeader title="Privacy & Terms" />
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
        <header className="text-center">
          <span className="text-primary">✦</span>
          <h1 className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl">
            Privacy Policy & Terms & Conditions
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            Please read these policies carefully before booking with {BRAND}. By confirming a booking you accept the terms below.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <PolicySection
            id="privacy-policy"
            title="Privacy Policy"
            intro={`How ${BRAND} collects, uses and protects your personal information.`}
            points={privacyPoints}
          />
          <PolicySection
            id="terms"
            title="Terms & Conditions"
            intro={`The rules that apply to every rental booking with ${BRAND}.`}
            points={termsPoints}
          />
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-sm leading-7 text-muted-foreground">
          <p className="font-bold uppercase tracking-widest text-foreground">Contact</p>
          <p className="mt-2">
            Phone: <a href="tel:+919990569473" className="font-semibold text-primary">{PHONE_DISPLAY}</a>
          </p>
          <p>
            Email: <a href={`mailto:${EMAIL}`} className="font-semibold text-primary">{EMAIL}</a>
          </p>
          <p>Address: {ADDRESS}</p>
        </div>
      </div>
    </main>
  );
}
